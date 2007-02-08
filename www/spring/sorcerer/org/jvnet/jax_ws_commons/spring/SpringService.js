defineStructure(
"SpringService",function(factory){with(factory) { typeTable(["com.sun.istack.NotNull","an"],["com.sun.xml.ws.api.BindingID","cl"],["com.sun.xml.ws.api.WSBinding","it"],["com.sun.xml.ws.api.pipe.TubelineAssembler","it"],["com.sun.xml.ws.api.pipe.TubelineAssemblerFactory","cl"],["com.sun.xml.ws.api.server.Container","cl"],["com.sun.xml.ws.api.server.InstanceResolver","cl"],["com.sun.xml.ws.api.server.Invoker","cl"],["com.sun.xml.ws.api.server.SDDocumentSource","cl"],["com.sun.xml.ws.api.server.WSEndpoint","cl"],["com.sun.xml.ws.api.server.Module","cl"],["com.sun.xml.ws.api.server.BoundEndpoint","it"],["com.sun.xml.ws.binding.BindingImpl","cl"],["com.sun.xml.ws.server.EndpointFactory","cl"],["com.sun.xml.ws.server.ServerRtException","cl"],["org.springframework.beans.factory.FactoryBean","it"],["org.springframework.web.context.ServletContextAware","it"],["org.xml.sax.EntityResolver","it"],["javax.servlet.ServletContext","it"],["javax.xml.namespace.QName","cl"],["javax.xml.ws.BindingType","an"],["javax.xml.ws.WebServiceFeature","cl"],["javax.xml.ws.handler.Handler","it"],["javax.xml.ws.http.HTTPBinding","it"],["javax.xml.ws.soap.SOAPBinding","it"],["java.io.IOException","cl"],["java.net.MalformedURLException","cl"],["java.net.URL","cl"],["java.util.Collection","it"],["java.util.List","it"],["java.util.ArrayList","cl"],["org.jvnet.jax_ws_commons.spring.SpringService","cl"],["java.lang.Class","cl"],["java.lang.Object","cl"],["java.lang.IllegalArgumentException","cl"],["java.lang.String","cl"],["java.lang.Exception","cl"],["java.lang.IllegalStateException","cl"],["javax.xml.ws.Binding","it"],["org.jvnet.jax_ws_commons.spring.SpringService$ContainerWrapper","cl"],["java.lang.ClassLoader","cl"],["org.jvnet.jax_ws_commons.spring.SpringService$ContainerWrapper$0$0","cl"],["org.jvnet.jax_ws_commons.spring.SpringService$ContainerWrapper$1$0","cl"]),methodTable([31,"setServletContext",[18],"me"],[16,"setServletContext",[18],"me"],[31,"setImpl",[32],"me"],[31,"setBean",[33],"me"],[6,"createSingleton",[33],"st me"],[6,"createInvoker",[],"me"],[33,"getClass",[],"me"],[31,"setInvoker",[7],"me"],[31,"setAssembler",[33],"me"],[34,"IllegalArgumentException",[35],"co"],[31,"setServiceName",[19],"me"],[31,"setPortName",[19],"me"],[31,"setContainer",[5],"me"],[31,"setBinding",[2],"me"],[31,"setBindingID",[35],"me"],[1,"parse",[35],"st me"],[31,"setFeatures",[29],"me"],[31,"setHandlers",[29],"me"],[31,"setPrimaryWsdl",[33],"me"],[31,"convertStringToSource",[35],"me"],[8,"create",[27],"st me"],[31,"setMetadata",[28],"me"],[31,"setResolver",[17],"me"],[31,"getObject",[],"me"],[15,"getObject",[],"me"],[1,"parse",[32],"st me"],[29,"isEmpty",[],"me"],[12,"create",[1],"st me"],[12,"create",[1,"javax.xml.ws.WebServiceFeature[]"],"st me"],[29,"toArray",["java.lang.Object[]"],"me"],[29,"size",[],"me"],[37,"IllegalStateException",[35],"co"],[2,"getHandlerChain",[],"me"],[29,"addAll",[28],"me"],[38,"setHandlerChain",[29],"me"],[13,"getWsdlLocation",[32],"st me"],[9,"create",[32,"boolean",7,19,19,5,2,8,28,17,"boolean"],"st me"],[39,"ContainerWrapper",[],"co"],[18,"getResource",[35],"me"],[32,"getClassLoader",[],"me"],[40,"getResource",[35],"me"],[14,"ServerRtException",[35,"java.lang.Object[]"],"co"],[31,"isSingleton",[],"me"],[15,"isSingleton",[],"me"],[31,"getObjectType",[],"me"],[15,"getObjectType",[],"me"],[39,"getSPI",[32],"me"],[5,"getSPI",[32],"me"],[32,"cast",[33],"me"],[41,"doCreate",[1],"me"],[4,"doCreate",[1],"me"],[30,"ArrayList",[],"co"],[42,"getBoundEndpoints",[],"me"],[10,"getBoundEndpoints",[],"me"]),localVariableTable(["servletContext","setServletContext(javax.servlet.ServletContext)-servletContext"],["implType","setImpl(java.lang.Class)-implType"],["sei","setBean(java.lang.Object)-sei"],["invoker","setInvoker(com.sun.xml.ws.api.server.Invoker)-invoker"],["assembler","setAssembler(java.lang.Object)-assembler"],["serviceName","setServiceName(javax.xml.namespace.QName)-serviceName"],["portName","setPortName(javax.xml.namespace.QName)-portName"],["container","setContainer(com.sun.xml.ws.api.server.Container)-container"],["binding","setBinding(com.sun.xml.ws.api.WSBinding)-binding"],["id","setBindingID(java.lang.String)-id"],["features","setFeatures(java.util.List)-features"],["handlers","setHandlers(java.util.List)-handlers"],["primaryWsdl","setPrimaryWsdl(java.lang.Object)-primaryWsdl"],["metadata","setMetadata(java.util.Collection)-metadata"],["resolver","setResolver(org.xml.sax.EntityResolver)-resolver"],["chain","getObject()-chain"],["wsdlLocation","getObject()-wsdlLocation"],["wsdlLocation","convertStringToSource(java.lang.String)-wsdlLocation"],["url","convertStringToSource(java.lang.String)-url"],["cl","convertStringToSource(java.lang.String)-cl"],["spiType","~ContainerWrapper-getSPI(java.lang.Class)-spiType"],["bindingId","~ContainerWrapper-~$1-doCreate(com.sun.xml.ws.api.BindingID)-bindingId"],["t","~ContainerWrapper-getSPI(java.lang.Class)-t"])
return classDef(pa," org.jvnet.jax_ws_commons.spring;",nl,nl,ip," com.sun.istack.",T(0),";",nl,ip," com.sun.xml.ws.api.",T(1),";",nl,ip," com.sun.xml.ws.api.",T(2),";",nl,ip," com.sun.xml.ws.api.pipe.",T(3),";",nl,ip," com.sun.xml.ws.api.pipe.",T(4),";",nl,ip," com.sun.xml.ws.api.server.",T(5),";",nl,ip," com.sun.xml.ws.api.server.",T(6),";",nl,ip," com.sun.xml.ws.api.server.",T(7),";",nl,ip," com.sun.xml.ws.api.server.",T(8),";",nl,ip," com.sun.xml.ws.api.server.",T(9),";",nl,ip," com.sun.xml.ws.api.server.",T(10),";",nl,ip," com.sun.xml.ws.api.server.",T(11),";",nl,ip," com.sun.xml.ws.binding.",T(12),";",nl,ip," com.sun.xml.ws.server.",T(13),";",nl,ip," com.sun.xml.ws.server.",T(14),";",nl,ip," org.springframework.beans.factory.",T(15),";",nl,ip," org.springframework.web.context.",T(16),";",nl,ip," org.xml.sax.",T(17),";",nl,nl,ip," javax.servlet.",T(18),";",nl,ip," javax.xml.namespace.",T(19),";",nl,ip," javax.xml.ws.",T(20),";",nl,ip," javax.xml.ws.",T(21),";",nl,ip," javax.xml.ws.handler.",T(22),";",nl,ip," javax.xml.ws.http.",T(23),";",nl,ip," javax.xml.ws.soap.",T(24),";",nl,ip," java.io.",T(25),";",nl,ip," java.net.",T(26),";",nl,ip," java.net.",T(27),";",nl,ip," java.util.",T(28),";",nl,ip," java.util.",T(29),";",nl,ip," java.util.",T(30),";",nl,nl,O("/**",nl," * Endpoint. A service object and the infrastructure around it.",nl," *",nl," * @org.apache.xbean.XBean element=\"service\" rootElement=\"true\"",nl," * @author Kohsuke Kawaguchi",nl," */"),nl,O("// javadoc for this class is used to auto-generate documentation."),nl,C(31,[],$(pu,_,c,_,I(I("SpringService")),_,im,_,T(15),", ",T(16),_,B(nl,nl,w(4),F("@",T(0),nl,w(4),pi,_,T(32),"&lt;?> ",I("implType"),";"),nl,nl,w(4),O("// everything else can be null"),nl,w(4),F(pi,_,T(7),_,I("invoker"),";"),nl,w(4),F(pi,_,T(19),_,I("serviceName"),";"),nl,w(4),F(pi,_,T(19),_,I("portName"),";"),nl,w(4),F(pi,_,T(5),_,I("container"),";"),nl,w(4),F(pi,_,T(8),_,I("primaryWsdl"),";"),nl,w(4),F(pi,_,T(28),"&lt;? ",ex,_,T(8),"> ",I("metadata"),";"),nl,w(4),F(pi,_,T(17),_,I("resolver"),";"),nl,nl,w(4),O("/**",nl,w(5),"* Either {@link TubelineAssembler} or {@link TubelineAssemblerFactory}.",nl,w(5),"*/"),nl,w(4),F(pi,_,T(33),_,I("assembler"),";"),nl,nl,nl,w(4),O("// binding."),nl,nl,w(4),O("// either everything is null, in which case we default to SOAP 1.1 + features from annotation"),nl,nl,w(4),O("// ... or a WSBinding configured externally"),nl,w(4),F(pi,_,T(2),_,I("binding"),";"),nl,nl,w(4),O("// ... or a BindingID and features"),nl,w(4),F(pi,_,T(1),_,I("bindingID"),";"),nl,w(4),F(pi,_,T(29),"&lt;",T(21),"> ",I("features"),";"),nl,nl,nl,w(4),O("/**",nl,w(5),"* Technically speaking, handlers belong to",nl,w(5),"* {@link WSBinding} and as such it should be configured there,",nl,w(5),"* but it's just more convenient to let people do so at this object,",nl,w(5),"* because often people use a stock binding ID constant",nl,w(5),"* instead of a configured {@link WSBinding} bean.",nl,w(5),"*/"),nl,w(4),F(pi,_,T(29),"&lt;",T(22),"> ",I("handlers"),";"),nl,nl,w(4),F(pi,_,T(18),_,I("servletContext"),";"),nl,nl,w(4),O("/**",nl,w(5),"* Set automatically by Spring if JAX-WS is used inside web container.",nl,w(5),"*/"),nl,w(4),M(0,[1],[],$(pu,_,v,_,I("setServletContext"),P(V(0,$(T(18),_,I("servletContext")))),_,B(nl,w(8),t,".",G(31,"fi","servletContext")," = ",W(0),";",nl,w(4)))),nl,nl,w(4),O("///**"),nl,w(4),O("// * @org.apache.xbean.Property alias=\"clazz\""),nl,w(4),O("// */"),nl,w(4),O("// I wanted to use alias=\"class\", but @class is reserved in Spring, apparently"),nl,w(4),O("/**",nl,w(5),"* Fully qualified class name of the SEI class. Required.",nl,w(5),"*/"),nl,w(4),M(2,[],[],$(pu,_,v,_,I("setImpl"),P(V(1,$(T(32),_,I("implType")))),_,B(nl,w(8),t,".",G(31,"fi","implType")," = ",W(1),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* Sets the bean that implements the web service methods.",nl,w(5),"*/"),nl,w(4),M(3,[],[],$(pu,_,v,_,I("setBean"),P(V(2,$(T(33),_,I("sei")))),_,B(nl,w(8),t,".",G(31,"fi","invoker")," = ",T(6),".",N(4),P(W(2)),".",N(5),P(),";",nl,w(8),i,P(t,".",G(31,"fi","implType"),"==",L("null")),nl,w(12),O("// sei could be a AOP proxy, so getClass() is not always reliable."),nl,w(12),O("// so if set explicitly via setImpl, don't override that."),nl,w(12),t,".",G(31,"fi","implType")," = ",W(2),".",N(6),P(),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* Sets {@link Invoker} for this endpoint.",nl,w(5),"* Defaults to {@link InstanceResolver#createDefault(Class) the standard invoker}.",nl,w(5),"*/"),nl,w(4),M(7,[],[],$(pu,_,v,_,I("setInvoker"),P(V(3,$(T(7),_,I("invoker")))),_,B(nl,w(8),t,".",G(31,"fi","invoker")," = ",W(3),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* Sets the {@link TubelineAssembler} or {@link TubelineAssemblerFactory} instance.",nl,w(5),"* &lt;p>",nl,w(5),"* This is an advanced configuration option for those who would like to control",nl,w(5),"* what processing JAX-WS runtime performs. The default value is {@code null},",nl,w(5),"* in which case the {@link TubelineAssemblerFactory} is looked up from the &lt;tt>META-INF/services&lt;/tt>.",nl,w(5),"*/"),nl,w(4),M(8,[],[],$(pu,_,v,_,I("setAssembler"),P(V(4,$(T(33),_,I("assembler")))),_,B(nl,w(8),i,P(W(4),_,is,_,T(3)," || ",W(4),_,is,_,T(4)),nl,w(12),t,".",G(31,"fi","assembler")," = ",W(4),";",nl,w(8),e,nl,w(12),tw,_,n,_,N(9),P(L("\"Invalid type for assembler \""),"+",W(4)),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* Sets the service name of this endpoint.",nl,w(5),"* Defaults to the name inferred from the impl attribute.",nl,w(5),"*/"),nl,w(4),M(10,[],[],$(pu,_,v,_,I("setServiceName"),P(V(5,$(T(19),_,I("serviceName")))),_,B(nl,w(8),t,".",G(31,"fi","serviceName")," = ",W(5),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* Sets the port name of this endpoint.",nl,w(5),"* Defaults to the name inferred from the impl attribute.",nl,w(5),"*/"),nl,w(4),M(11,[],[],$(pu,_,v,_,I("setPortName"),P(V(6,$(T(19),_,I("portName")))),_,B(nl,w(8),t,".",G(31,"fi","portName")," = ",W(6),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* Sets the custom {@link Container}. Optional.",nl,w(5),"*/"),nl,w(4),O("// TODO: how to set the default container?"),nl,w(4),M(12,[],[],$(pu,_,v,_,I("setContainer"),P(V(7,$(T(5),_,I("container")))),_,B(nl,w(8),t,".",G(31,"fi","container")," = ",W(7),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* Accepts an externally configured {@link WSBinding}",nl,w(5),"* for advanced users.",nl,w(5),"*/"),nl,w(4),O("// is there a better way to do this in Spring?"),nl,w(4),O("// http://opensource.atlassian.com/projects/spring/browse/SPR-2528?page=all"),nl,w(4),O("// says it doesn't support method overloading, so that's out."),nl,w(4),M(13,[],[],$(pu,_,v,_,I("setBinding"),P(V(8,$(T(2),_,I("binding")))),_,B(nl,w(8),t,".",G(31,"fi","binding")," = ",W(8),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* Sets the binding ID, such as &lt;tt>{@value SOAPBinding#SOAP11HTTP_BINDING}&lt;/tt>",nl,w(5),"* or &lt;tt>{@value SOAPBinding#SOAP12HTTP_BINDING}&lt;/tt>.",nl,w(5),"*",nl,w(5),"* &lt;p>",nl,w(5),"* If none is specified, {@link BindingType} annotation on SEI is consulted.",nl,w(5),"* If that fails, {@link SOAPBinding#SOAP11HTTP_BINDING}.",nl,w(5),"*",nl,w(5),"* @see SOAPBinding#SOAP11HTTP_BINDING",nl,w(5),"* @see SOAPBinding#SOAP12HTTP_BINDING",nl,w(5),"* @see HTTPBinding#HTTP_BINDING",nl,w(5),"*/"),nl,w(4),M(14,[],[],$(pu,_,v,_,I("setBindingID"),P(V(9,$(T(35),_,I("id")))),_,B(nl,w(8),t,".",G(31,"fi","bindingID")," = ",T(1),".",N(15),P(W(9)),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* {@link WebServiceFeature}s that are activated in this endpoint.",nl,w(5),"*/"),nl,w(4),M(16,[],[],$(pu,_,v,_,I("setFeatures"),P(V(10,$(T(29),"&lt;",T(21),"> ",I("features")))),_,B(nl,w(8),t,".",G(31,"fi","features")," = ",W(10),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* {@link Handler}s for this endpoint.",nl,w(5),"* Note that the order is significant.",nl,w(5),"*",nl,w(5),"* &lt;p>",nl,w(5),"* If there's just one handler and that handler is declared elsewhere,",nl,w(5),"* you can use this as a nested attribute like &lt;tt>handlers=\"#myHandler\"&lt;/tt>.",nl,w(5),"* Or otherwise nesteed &amp;lt;bean> or &amp;lt;ref> tag can be used to specify",nl,w(5),"* multiple handlers.",nl,w(5),"*/"),nl,w(4),M(17,[],[],$(pu,_,v,_,I("setHandlers"),P(V(11,$(T(29),"&lt;",T(22),"> ",I("handlers")))),_,B(nl,w(8),t,".",G(31,"fi","handlers")," = ",W(11),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* Optional WSDL for this endpoint.",nl,w(5),"*",nl,w(5),"* &lt;p>",nl,w(5),"* Defaults to the WSDL discovered in &lt;tt>META-INF/wsdl&lt;/tt>,",nl,w(5),"*",nl,w(5),"* &lt;p>",nl,w(5),"* It can be either {@link String},",nl,w(5),"* {@link URL}, or {@link SDDocumentSource}.",nl,w(5),"*",nl,w(5),"* If this is string, {@link ServletContext} (if available) and",nl,w(5),"* {@link ClassLoader} are searched by this path, then failing that,",nl,w(5),"* it's treated as an absolute {@link URL}.",nl,w(5),"*/"),nl,w(4),O("// TODO: how do we discover this automatically in servlet environment?"),nl,w(4),M(18,[],[],$(pu,_,v,_,I("setPrimaryWsdl"),P(V(12,$(T(33),_,I("primaryWsdl")))),_,ts,_,T(25),_,B(nl,w(8),i,P(W(12),_,is,_,T(35)),_,B(nl,w(12),t,".",G(31,"fi","primaryWsdl")," = ",N(19),P(P(T(35)),W(12)),";",nl,w(8)),_,e,nl,w(8),i,P(W(12),_,is,_,T(27)),_,B(nl,w(12),t,".",G(31,"fi","primaryWsdl")," = ",T(8),".",N(20),P(P(T(27)),W(12)),";",nl,w(8)),_,e,nl,w(8),i,P(W(12),_,is,_,T(8)),_,B(nl,w(12),t,".",G(31,"fi","primaryWsdl")," = ",P(T(8)),_,W(12),";",nl,w(8)),_,e,nl,w(12),tw,_,n,_,N(9),P(L("\"Unknown type \""),"+",W(12)),";",nl,w(4)))),nl,nl,w(4),M(21,[],[],$(pu,_,v,_,I("setMetadata"),P(V(13,$(T(28),"&lt;? ",ex,_,T(8),"> ",I("metadata")))),_,B(nl,w(8),t,".",G(31,"fi","metadata")," = ",W(13),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* Sets the {@link EntityResolver} to be used for resolving schemas/WSDLs",nl,w(5),"* that are referenced. Optional.",nl,w(5),"*/"),nl,w(4),M(22,[],[],$(pu,_,v,_,I("setResolver"),P(V(14,$(T(17),_,I("resolver")))),_,B(nl,w(8),t,".",G(31,"fi","resolver")," = ",W(14),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* Lazily created {@link WSEndpoint} instance.",nl,w(5),"*/"),nl,w(4),F(pi,_,T(9),"&lt;?> ",I("endpoint"),";"),nl,nl,w(4),M(23,[24],[],$(pu,_,T(33),_,I("getObject"),P(),_,ts,_,T(36),_,B(nl,w(8),i,P(G(31,"fi","endpoint"),"==",L("null")),_,B(nl,w(12),i,P(G(31,"fi","binding"),"==",L("null")),_,B(nl,w(16),i,P(G(31,"fi","bindingID"),"==",L("null")),nl,w(20),G(31,"fi","bindingID")," = ",T(1),".",N(25),P(G(31,"fi","implType")),";",nl,w(16),i,P(G(31,"fi","features"),"==",L("null")," || ",G(31,"fi","features"),".",N(26),P()),nl,w(20),G(31,"fi","binding")," = ",T(12),".",N(27),P(G(31,"fi","bindingID")),";",nl,w(16),e,nl,w(20),G(31,"fi","binding")," = ",T(12),".",N(28),P(G(31,"fi","bindingID"),", ",G(31,"fi","features"),".",N(29),P(n,_,T(21),"[",G(31,"fi","features"),".",N(30),P(),"]")),";",nl,w(12)),_,e,_,B(nl,w(16),i,P(G(31,"fi","bindingID"),"!=",L("null")),nl,w(20),tw,_,n,_,N(31),P(L("\"Both bindingID and binding are configured\"")),";",nl,w(16),i,P(G(31,"fi","features"),"!=",L("null")),nl,w(20),tw,_,n,_,N(31),P(L("\"Both features and binding are configured\"")),";",nl,w(12)),nl,nl,w(12),O("// configure handlers. doing this here ensures"),nl,w(12),O("// that we are not doing this more than once."),nl,w(12),i,P(G(31,"fi","handlers"),"!=",L("null")),_,B(nl,w(16),V(15,$(T(29),"&lt;",T(22),"> ",I("chain")," = ",G(31,"fi","binding"),".",N(32),P(),";")),nl,w(16),W(15),".",N(33),P(G(31,"fi","handlers")),";",nl,w(16),G(31,"fi","binding"),".",N(34),P(W(15)),";",nl,w(12)),nl,nl,w(12),i,P(G(31,"fi","primaryWsdl"),"==",L("null")),_,B(nl,w(16),O("// attempt to find it on the impl class."),nl,w(16),V(16,$(T(35),_,I("wsdlLocation")," = ",T(13),".",N(35),P(G(31,"fi","implType")),";")),nl,w(16),i,_,P(W(16)," != ",L("null")),nl,w(20),G(31,"fi","primaryWsdl")," = ",N(19),P(W(16)),";",nl,w(12)),nl,nl,w(12),G(31,"fi","endpoint")," = ",T(9),".",N(36),P(G(31,"fi","implType"),",",L("false"),",",G(31,"fi","invoker"),",",G(31,"fi","serviceName"),",",G(31,"fi","portName"),",",n,_,N(37),P(),",",G(31,"fi","binding"),",",G(31,"fi","primaryWsdl"),",",G(31,"fi","metadata"),",",G(31,"fi","resolver"),",",L("true")),";",nl,w(8)),nl,w(8),r,_,G(31,"fi","endpoint"),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* Converts {@link String} into {@link SDDocumentSource}.",nl,w(5),"*",nl,w(5),"* See {@link #setPrimaryWsdl(Object)} for the conversion rule.",nl,w(5),"*/"),nl,w(4),M(19,[],[],$(pi,_,T(8),_,I("convertStringToSource"),P(V(17,$(T(35),_,I("wsdlLocation")))),_,ts,_,T(26),_,B(nl,w(8),V(18,$(T(27),_,I("url"),"=",L("null"),";")),nl,nl,w(8),i,P(G(31,"fi","servletContext"),"!=",L("null")),nl,w(24),O("// in the servlet environment, consult ServletContext so that we can load"),nl,w(12),O("// WEB-INF/wsdl/... and so on."),nl,w(12),W(18)," = ",G(31,"fi","servletContext"),".",N(38),P(W(17)),";",nl,nl,w(8),i,P(W(18),"==",L("null")),_,B(nl,w(12),O("// also check a resource in classloader."),nl,w(12),V(19,$(T(40),_,I("cl")," = ",G(31,"fi","implType"),".",N(39),P(),";")),nl,w(12),W(18)," = ",W(19),".",N(40),P(W(17)),";",nl,w(8)),nl,nl,w(8),i,_,P(W(18),"==",L("null")),nl,w(12),tw,_,n,_,N(41),P(L("\"cannot.load.wsdl\""),", ",W(17)),";",nl,nl,w(8),r,_,T(8),".",N(20),P(W(18)),";",nl,w(4)))),nl,nl,w(4),M(42,[43],[],$(pu,_,b,_,I("isSingleton"),P(),_,B(nl,w(8),r,_,L("true"),";",nl,w(4)))),nl,nl,w(4),M(44,[45],[],$(pu,_,T(32),_,I("getObjectType"),P(),_,B(nl,w(8),r,_,T(9),".",c,";",nl,w(4)))),nl,nl,w(4),C(39,[],$(pi,_,c,_,I(I("ContainerWrapper")),_,ex,_,T(5),_,B(nl,nl,w(8),M(46,[47],[],$(pu," &lt;T> T ",I("getSPI"),P(V(20,$(T(32),"&lt;T> ",I("spiType")))),_,B(nl,w(12),O("// allow specified TubelineAssembler to be used"),nl,w(12),i,P(W(20),"==",T(4),".",c),_,B(nl,w(16),i,P(G(31,"fi","assembler"),_,is,_,T(4)),nl,w(20),r,_,W(20),".",N(48),P(G(31,"fi","assembler")),";",nl,w(16),i,P(G(31,"fi","assembler"),_,is,_,T(3)),_,B(nl,w(20),r,_,W(20),".",N(48),P(n,_,T(4),P(),_,B(C(41,[],$(nl,w(24),M(49,[50],[],$(pu,_,T(3),_,I("doCreate"),P(V(21,$(T(1),_,I("bindingId")))),_,B(nl,w(28),r,_,P(T(3)),G(31,"fi","assembler"),";",nl,w(24)))),nl,w(20))))),";",nl,w(16)),nl,w(12)),nl,w(12),i,P(G(31,"fi","container"),"!=",L("null")),_,B(nl,w(16),O("// delegate to the specified container"),nl,w(16),V(22,$("T ",I("t")," = ",G(31,"fi","container"),".",N(47),P(W(20)),";")),nl,w(16),i,P(W(22),"!=",L("null")),nl,w(20),r,_,W(22),";",nl,w(12)),nl,nl,w(12),i,P(W(20),"==",T(10),".",c),_,B(nl,w(16),O("// fall back default implementation"),nl,w(16),r,_,W(20),".",N(48),P(G(39,"fi","module")),";",nl,w(12)),nl,nl,w(12),r,_,L("null"),";",nl,w(8)))),nl,nl,w(8),F(pi,_,f,_,T(10),_,I("module")," = ",n,_,T(10),P(),_,B(C(42,[],$(nl,w(12),F(pi,_,f,_,T(29),"&lt;",T(11),"> ",I("endpoints")," = ",n,_,N(51),P(),";"),nl,nl,w(12),M(52,[53],[],$(pu," @",T(0),_,T(29),"&lt;",T(11),"> ",I("getBoundEndpoints"),P(),_,B(nl,w(16),r,_,G(42,"fi","endpoints"),";",nl,w(12)))),nl,w(8)))),";"),nl,w(4)))),nl))),nl);}});