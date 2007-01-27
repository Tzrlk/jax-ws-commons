defineStructure(
"SpringMTOMFeature",function(factory){with(factory) { typeTable(["org.springframework.beans.factory.FactoryBean","it"],["javax.xml.ws.soap.MTOMFeature","cl"],["javax.xml.ws.soap.MTOM","an"],["org.jvnet.jax_ws_commons.spring.SpringMTOMFeature","cl"],["java.lang.Exception","cl"],["java.lang.Class","cl"]),methodTable([3,"isSingleton",[],"me"],[0,"isSingleton",[],"me"],[3,"setEnabled",["boolean"],"me"],[3,"setThreshold",["int"],"me"],[3,"getObject",[],"me"],[0,"getObject",[],"me"],[1,"MTOMFeature",["boolean","int"],"co"],[3,"getObjectType",[],"me"],[0,"getObjectType",[],"me"]),localVariableTable(["enabled","setEnabled(boolean)-enabled"],["threshold","setThreshold(int)-threshold"])
return classDef(pa," org.jvnet.jax_ws_commons.spring;",nl,nl,ip," org.springframework.beans.factory.",T(0),";",nl,nl,ip," javax.xml.ws.soap.",T(1),";",nl,ip," javax.xml.ws.soap.",T(2),";",nl,nl,O("/**",nl," * Configures MTOM feature.",nl," *",nl," * @org.apache.xbean.XBean element=\"mtom\"",nl," * @author Kohsuke Kawaguchi",nl," */"),nl,O("// this kind of wrapping is unnecessary if we can perform XBean processing on the feature bean"),nl,O("// itself. But MTOMFeature is a spec feature and we can't do anything about it, so this is a wrapper"),nl,C(3,[],$(pu,_,c,_,I(I("SpringMTOMFeature")),_,im,_,T(0),_,B(nl,nl,w(4),F(pi,_,b,_,I("enabled")," = ",L("true"),";"),nl,w(4),F(pi,_,j,_,I("threshold"),";"),nl,nl,w(4),F(pi,_,T(1),_,I("feature"),";"),nl,nl,w(4),M(0,[1],[],$(pu,_,b,_,I("isSingleton"),P(),_,B(nl,w(8),r,_,L("true"),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* &lt;tt>enabled=\"false\"&lt;/tt> can be specified to override the {@link MTOM} annotation",nl,w(5),"* on the source code. Defaults to true.",nl,w(5),"*/"),nl,w(4),M(2,[],[],$(pu,_,v,_,I("setEnabled"),P(V(0,$(b,_,I("enabled")))),_,B(nl,w(8),t,".",G(3,"fi","enabled")," = ",W(0),";",nl,w(4)))),nl,nl,w(4),O("/**",nl,w(5),"* The size in bytes that binary data SHOULD be before",nl,w(5),"* being sent as an attachment.",nl,w(5),"*/"),nl,w(4),M(3,[],[],$(pu,_,v,_,I("setThreshold"),P(V(1,$(j,_,I("threshold")))),_,B(nl,w(8),t,".",G(3,"fi","threshold")," = ",W(1),";",nl,w(4)))),nl,nl,w(4),M(4,[5],[],$(pu,_,T(1),_,I("getObject"),P(),_,ts,_,T(4),_,B(nl,w(8),i,P(G(3,"fi","feature"),"==",L("null")),nl,w(12),G(3,"fi","feature")," = ",n,_,N(6),P(G(3,"fi","enabled"),",",G(3,"fi","threshold")),";",nl,w(8),r,_,G(3,"fi","feature"),";",nl,w(4)))),nl,nl,w(4),M(7,[8],[],$(pu,_,T(5),_,I("getObjectType"),P(),_,B(nl,w(8),r,_,T(1),".",c,";",nl,w(4)))),nl))),nl);}});