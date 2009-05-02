// generate wrapper code from VirtualBox IDL
import com.sun.codemodel.*
import com.sun.xml.bind.api.impl.NameConverter
import javax.xml.ws.WebServiceException
import javax.xml.ws.Holder

// paramters for the code generation


// code starts here
def baseDir = project.basedir;

def xidl = new XmlParser().parse(new File(baseDir,"src/VirtualBox.xidl"));
this.library = xidl.library;

this.codeModel = new JCodeModel();
this.pkg = codeModel._package("com.sun.xml.ws.commons.virtualbox");
// VboxPortType generated by JAX-WS
this.portType = pkgRef("VboxPortType");

// interface name -> their XML element.
this.interfaceMap = [:];
library["interface"].each { interfaceMap[it.@name]=it; }

// enum name -> their XML element
this.enums = [:];
library["enum"].each { enums[it.@name]=it; }

interfaceMap.values().each { onInterface(it); }

File destDir = new File(baseDir, "target/jaxws/wsimport/java")
codeModel.build(destDir);
// end of the main

/**
 * Generates the interface definition.
 *
 * @param intf
 *      XIDL "interface" element.
 */
def onInterface(intf) {
    if(["suppress","struct"].find{ it==intf.@wsmap } )
        return; // no mapping

    def interfaceName = intf.@name
    JDefinedClass clz = pkg._class(interfaceName);
    buildJavadoc(clz,intf)

    // the port type that we use for the communication
    port = clz.field(JMod.PUBLIC|JMod.FINAL,portType,"port");

    // the token passed through web service as the 'this' pointer
    _this = clz.field(JMod.PUBLIC|JMod.FINAL,String,"_this");

    // constructor
    JMethod cons = clz.constructor(JMod.PUBLIC);
    cons.param(String.class,"_this");
    cons.param(portType,"port");
    cons.body().directStatement("""
        this._this = _this;
        this.port = port;
    """)

    intf.attribute.each { attr ->
        if(isTypeSuppressed(attr.@type))    return;
        
        def attrName = attr.@name

        // attribute getter method
        def type = outerType(attr)

        JMethod get = clz.method(JMod.PUBLIC, type, "get" + cap(attrName));
        buildJavadoc(get,attr)
        def body = createTryCatchBlock(get.body());
        def retVal = body.decl(jaxwsType(attr),"retVal",port.invoke(decap(interfaceName)+"Get"+cap(attrName)).arg(_this));
        body._return(unmarshal(attr.@type,attr.@safearray,retVal));

        if(!attr.@readonly) {
            // attribuet setter method
            JMethod set = clz.method(JMod.PUBLIC, void.class, "set" + cap(attrName));
            def value = marshal(attr.@type,set.param(outerType(attr),"value"));
            buildJavadoc(set,attr)
            createTryCatchBlock(set.body()).invoke(port,decap(interfaceName)+"Set"+cap(attrName)).arg(_this).arg(value);
        }
    }

    // operation
    intf.method.each { method ->
        if(isMethodMappingSuppressed(method))  return;

        def methodName = method.@name

        def retParam = method.param.find { it.@dir=="return" }

        // if the method has both return value and out params, JAX-WS will not use the return value convention,
        // but just treat it like yet another out parameter.
        if(method.param.find{ it.@dir=="out" }!=null)
            retParam=null;

        def retType = retParam == null ? void.class : outerType(retParam)

        JMethod m = clz.method(JMod.PUBLIC, retType, methodName);
        buildJavadoc(m,method);
        if(retParam!=null)
            m.javadoc().addReturn().add(retParam.desc?.text())

        def body = createTryCatchBlock(m.body())

        String portMethodName = decap(interfaceName)+cap(methodName);
        JInvocation call;
        if(retParam==null) {
            call = body.invoke(port,portMethodName)
        } else {
            call = port.invoke(portMethodName);
            body._return(unmarshal(retParam.@type, retParam.@safearray, body.decl(jaxwsType(retParam),"retVal",call)));
        }
        // implicit first arg
        call.arg(_this);

        method.param.each { param ->
            if(param==retParam) return;
            switch(param.@dir) {
            case "return":
            case "out":
                JVar p = m.param(codeModel.ref(Holder.class).narrow(outerType(param).boxify()), param.@name);
                m.javadoc().addParam(param.@name).add(param.desc?.text())

                call.arg(p); // TODO: marshalling?
                break;

            case "in":
                JVar p = m.param(outerType(param), param.@name);
                m.javadoc().addParam(param.@name).add(param.desc?.text())

                call.arg(marshal(param.@type,p));
                break;
            }
        }
    }

    // two methods should be logically on IVirtualBox but they are outside, presumably because those are only applicable to web services.
    if(interfaceName=="IVirtualBox") {
        clz.direct("""
    /**
     * Returns a managed object reference to the internal ISession object that was created
     * for this web service session when the client logged on.
     */
    public ISession getSessionObject() {
        try {
            String session = port.iWebsessionManagerGetSessionObject(_this);
            return new ISession(session,port);
        } catch (InvalidObjectFaultMsg e) {
            throw new WebServiceException(e);
        } catch (RuntimeFaultMsg e) {
            throw new WebServiceException(e);
        }
    }

    /**
     * Logs off the client who has previously logged on
     * and destroys all resources associated with the session (most importantly, all
     * managed objects created in the server while the session was active).
     */
    public void logoff() {
        try {
            port.iWebsessionManagerLogoff(_this);
        } catch (InvalidObjectFaultMsg e) {
            throw new WebServiceException(e);
        } catch (RuntimeFaultMsg e) {
            throw new WebServiceException(e);
        }
    }
""")
    }
}

private boolean isTypeSuppressed(String type) {
    return type=="\$unknown" /* not entirely sure if this rule is true */ || interfaceMap[type]?.@wsmap=="suppress";
}

private boolean isMethodMappingSuppressed(method) {
    if(method.param.find { p -> isTypeSuppressed(p.@type) })    return true;

    // for now, don't handle [out] parameter for wrapper types. there's only one method IHardDisk.cloneToImage()
    // that does this, so it's not worth my effort for now
    if(method.param.find { p -> p.@dir=="out" && p.@type.startsWith("I") && !isStructure(p.@type); }) {
        System.out.println("[WARNING] Skipping the ${method.@name} method");
        return true;
    }

    return false;
}

private JBlock createTryCatchBlock(JBlock block) {
    JTryBlock tblock = block._try();
    ["InvalidObjectFaultMsg", "RuntimeFaultMsg"].each {
        JCatchBlock cb = tblock._catch(pkgRef(it))
        cb.body()._throw(JExpr._new(codeModel.ref(WebServiceException)).arg(cb.param("e")));
    }

    return tblock.body();
}

/**
 * Generates the code that takes the return value from web service and return in-memory type.
 */
def unmarshal(String typeName, safeArrayAttr, JVar expr) {
    if(typeName.startsWith("I")) {
        if (safeArrayAttr != null) {
            // collection that returns List<String>
            if (isStructure(typeName))
                return expr;

            return codeModel.ref("Helper").staticInvoke("wrap").arg(codeModel.ref(typeName).dotclass()).arg(JExpr.ref("port")).arg(expr);
        }
        if(typeName.endsWith("Collection")) {
            // collection
            String componentName = getComponentName(typeName);
            if(isStructure(componentName)) {
                return JOp.cond(expr.eq(JExpr._null()), JExpr._null(), expr.invoke("getArray"));
            }

            return codeModel.ref("Helper").staticInvoke("wrap")
                .arg(codeModel.ref(componentName).dotclass())
                .arg(JExpr.ref("port"))
                .arg(JOp.cond(expr.eq(JExpr._null()), JExpr._null(), expr.invoke("getArray")));
        }
        if(isStructure(typeName))
            return expr;

        // interface wrapper
        return JExpr._new(codeModel.ref(typeName)).arg(expr).arg(JExpr.ref("port"));
    }
    if(typeName=="uuid") {
        if(safeArrayAttr!=null)
            return codeModel.ref("Helper").staticInvoke("uuidListUnmarshal").arg(expr);
        else
            return codeModel.ref(UUID).staticInvoke("fromString").arg(expr);
    }
    return expr;
}

/**
 * Generates the code that takes the in-memory value and converts that to the web service type.
 */
def marshal(String typeName, JVar expr) {
    if(typeName=="uuid") {
        return expr.invoke("toString");
    }
    if(typeName.startsWith("I")) {
        if(isStructure(typeName))
            return expr;
        return JOp.cond(expr.eq(JExpr._null()), JExpr._null(), expr.ref("_this"));
    }
    return expr;
}

private String getComponentName(String typeName) {
    return typeName.substring(0, typeName.length() - "Collection".length())
}

private boolean isStructure(String typeName) {
    return interfaceMap[typeName]?.@wsmap=="struct" || enums[typeName]!=null;
}

/**
 * Builds javadoc from the nested <desc> tag in XML and attaches to the source tree.
 */
def buildJavadoc(documentable,xml) {
    if(xml.desc==null)  return;
    _buildJavadoc(documentable.javadoc(),xml.desc[0]);
}

def _buildJavadoc(javadoc,node) {
    if(node==null)  return;
    node.children().each { child ->
        if(child instanceof groovy.util.Node) {
            def tag = child.name();
            if(tag=="link") {
                javadoc.add("{@link "+child.@to.replace("::","#")+"}");
                return;
            }
            if(tag=="see") {
                javadoc.add("\n@see "+child.text());
                return;
            }
            if(tag=="note")
                tag = "blockquote";
            surroundWith(javadoc,tag,child);
        } else {
            javadoc.add(child.replace('<','&lt;'))
        }
    }
}

def surroundWith(javadoc, String tag, node) {
    javadoc.add('<'+tag+'>');
    _buildJavadoc(javadoc,node);
    javadoc.add('</'+tag+'>');
}

/**
 * Returns the Java type used in the publicly visible part of the API that represents the given type name in XIDL.
 *
 * @param e
 *    XML element with @type and optional @safeArray
 */
JType outerType(e) {
    String typeName = e.@type;

    if(typeName==null)  return codeModel.VOID;
    if(typeName =~ /I.+Collection/) {
        return codeModel.ref(List).narrow(pkgRef(getComponentName(typeName)));
    }

    def r = null;
    switch(typeName) {
    case "wstring":             r = codeModel.ref(String); break;
    case "uuid":                r = codeModel.ref(UUID); break;
    case "unsigned long long":  r = codeModel.ref(BigInteger); break; // in ICustomHardDisk.createDynamicImage() it's BigInteger
    case "long long":
    case "result":
    case "unsigned long":       r = codeModel.LONG; break;
    case "long":
    case "unsigned short":      r = codeModel.INT; break;
    case "boolean":             r = codeModel.BOOLEAN; break;
    default:                    r = codeModel.ref(typeName); break;
    }
    return toArray(r,e);
}

/**
 * Returns the Java type JAX-WS uses for the given type name in XIDL.
 *
 * @param e
 *    XML element with @type and optional @safeArray
 */
JType jaxwsType(e) {
    String typeName = e.@type;
    if(typeName =~ /I.+Collection/) {
        return pkgRef("ArrayOf"+getComponentName(typeName));
    }
    if(typeName.startsWith("I")) {
        if(isStructure(typeName))
            return toArray(codeModel.ref(typeName),e);
        return toArray(codeModel.ref(String),e);
    }
    switch(typeName) {
    case "uuid":                return toArray(codeModel.ref(String),e);
    }
    return outerType(e);
}

/**
 * If the safearray attribute is specified on &lt;attribute> element, wrap into a collection type.
 *
 * @param e
 *    XML element with @type and optional @safeArray
 */
JType toArray(JType t, e) {
  return e.@safearray!=null ? codeModel.ref(List.class).narrow(t.boxify()) : t;
}

String cap(String str) {
    return ""+Character.toUpperCase(str.charAt(0))+str.substring(1);
}
String decap(String str) {
    return NameConverter.standard.toVariableName(str);
}
JType pkgRef(String typeName) {
    return codeModel.ref(pkg.name()+"."+typeName);
}
