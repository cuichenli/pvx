(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14720efb"],{d4f4:function(e,n,t){const{isNull:r,isBoolean:a,isNumber:i,isString:u,isArray:o,isObject:s,isEmpty:c,fromPairs:l,keys:f,map:p,repeat:h}=t("2ef0"),{parse:d}=t("e588"),m=(e,n)=>n?`'${e.replace(/'/g,"\\'")}'`:`"${e.replace(/"/g,'\\"')}"`,y={false:"false",true:"true",null:"nil"},v=(e,n)=>y[e]?`[${y[e]}]`:e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)?e:`[${m(e,n)}]`,b=(e,n={eol:"\n",singleQuote:!0,spaces:2})=>{n=n||{};const t=n.eol=u(n.eol)?n.eol:"\n";n.singleQuote=!a(n.singleQuote)||n.singleQuote,n.spaces=r(n.spaces)||i(n.spaces)||u(n.spaces)?n.spaces:2;const l=(e,p=0)=>{if(r(e))return"nil";if(a(e)||i(e))return e.toString();if(u(e))return m(e,n.singleQuote);if(o(e)){if(c(e))return"{}";if(n.spaces){const r=i(n.spaces)?h(" ",n.spaces*(p+1)):h(n.spaces,p+1),a=i(n.spaces)?h(" ",n.spaces*p):h(n.spaces,p);return`{${t}${e.map(e=>`${r}${l(e,p+1)},`).join(t)}${t}${a}}`}return`{${e.map(e=>l(e,p+1)+",").join("")}}`}if(s(e)){if(c(e))return"{}";if(n.spaces){const r=i(n.spaces)?h(" ",n.spaces*(p+1)):h(n.spaces,p+1),a=i(n.spaces)?h(" ",n.spaces*p):h(n.spaces,p);return`{${t}${f(e).map(t=>`${r}${v(t,n.singleQuote)} = ${l(e[t],p+1)},`).join(t)}${t}${a}}`}return`{${f(e).map(t=>`${v(t,n.singleQuote)}=${l(e[t],p+1)},`).join("")}}`}throw new Error("can't format "+typeof e)};return`return${n.spaces?" ":""}${l(e)}`},g=e=>{if(["NilLiteral","BooleanLiteral","NumericLiteral","StringLiteral"].includes(e.type))return e.value;if("UnaryExpression"===e.type&&"-"===e.operator)return-g(e.argument);if("Identifier"===e.type)return e.name;if(["TableKey","TableKeyString"].includes(e.type))return{__internal_table_key:!0,key:g(e.key),value:g(e.value)};if("TableValue"===e.type)return g(e.value);if("TableConstructorExpression"===e.type){if(e.fields[0]&&e.fields[0].key){const n=l(p(e.fields,e=>{const{key:n,value:t}=g(e);return[n,t]}));return c(n)?[]:n}return p(e.fields,e=>{const n=g(e);return n.__internal_table_key?[n.key,n.value]:n})}if("LocalStatement"===e.type){const n=e.init.map(g);return 1===n.length?n[0]:n}if("ReturnStatement"===e.type){const n=e.arguments.map(g);return 1===n.length?n[0]:n}if("Chunk"===e.type)return g(e.body[0]);throw new Error("can't parse "+e.type)},x=e=>g(d(e,{comments:!1}));e.exports={format:b,parse:x}},e588:function(e,n,t){(function(e,t){var r,a,i;(function(u,o,s){"use strict";var c={function:!0,object:!0},l=c[typeof n]&&n&&!n.nodeType&&n,f=c[typeof e]&&e&&!e.nodeType&&e,p=l&&f&&"object"==typeof t&&t,h=f&&f.exports===l&&l;!p||p.global!==p&&p.window!==p&&p.self,a=[n],r=s,i="function"===typeof r?r.apply(n,a):r,void 0===i||(e.exports=i),l&&h&&s(f.exports)})(0,0,(function(e){"use strict";var n,t,r;e.version="0.2.1";var a=e.defaultOptions={wait:!1,comments:!0,scope:!1,locations:!1,ranges:!1,onCreateNode:null,onCreateScope:null,onDestroyScope:null},i=1,u=2,o=4,s=8,c=16,l=32,f=64,p=128,h=256;e.tokenTypes={EOF:i,StringLiteral:u,Keyword:o,Identifier:s,NumericLiteral:c,Punctuator:l,BooleanLiteral:f,NilLiteral:p,VarargLiteral:h};var d=e.errors={unexpected:"unexpected %1 '%2' near '%3'",expected:"'%1' expected near '%2'",expectedToken:"%1 expected near '%2'",unfinishedString:"unfinished string near '%1'",malformedNumber:"malformed number near '%1'",invalidVar:"invalid left-hand side of assignment near '%1'"},m=e.ast={labelStatement:function(e){return{type:"LabelStatement",label:e}},breakStatement:function(){return{type:"BreakStatement"}},gotoStatement:function(e){return{type:"GotoStatement",label:e}},returnStatement:function(e){return{type:"ReturnStatement",arguments:e}},ifStatement:function(e){return{type:"IfStatement",clauses:e}},ifClause:function(e,n){return{type:"IfClause",condition:e,body:n}},elseifClause:function(e,n){return{type:"ElseifClause",condition:e,body:n}},elseClause:function(e){return{type:"ElseClause",body:e}},whileStatement:function(e,n){return{type:"WhileStatement",condition:e,body:n}},doStatement:function(e){return{type:"DoStatement",body:e}},repeatStatement:function(e,n){return{type:"RepeatStatement",condition:e,body:n}},localStatement:function(e,n){return{type:"LocalStatement",variables:e,init:n}},assignmentStatement:function(e,n){return{type:"AssignmentStatement",variables:e,init:n}},callStatement:function(e){return{type:"CallStatement",expression:e}},functionStatement:function(e,n,t,r){return{type:"FunctionDeclaration",identifier:e,isLocal:t,parameters:n,body:r}},forNumericStatement:function(e,n,t,r,a){return{type:"ForNumericStatement",variable:e,start:n,end:t,step:r,body:a}},forGenericStatement:function(e,n,t){return{type:"ForGenericStatement",variables:e,iterators:n,body:t}},chunk:function(e){return{type:"Chunk",body:e}},identifier:function(e){return{type:"Identifier",name:e}},literal:function(e,n,t){return e=e===u?"StringLiteral":e===c?"NumericLiteral":e===f?"BooleanLiteral":e===p?"NilLiteral":"VarargLiteral",{type:e,value:n,raw:t}},tableKey:function(e,n){return{type:"TableKey",key:e,value:n}},tableKeyString:function(e,n){return{type:"TableKeyString",key:e,value:n}},tableValue:function(e){return{type:"TableValue",value:e}},tableConstructorExpression:function(e){return{type:"TableConstructorExpression",fields:e}},binaryExpression:function(e,n,t){var r="and"===e||"or"===e?"LogicalExpression":"BinaryExpression";return{type:r,operator:e,left:n,right:t}},unaryExpression:function(e,n){return{type:"UnaryExpression",operator:e,argument:n}},memberExpression:function(e,n,t){return{type:"MemberExpression",indexer:n,identifier:t,base:e}},indexExpression:function(e,n){return{type:"IndexExpression",base:e,index:n}},callExpression:function(e,n){return{type:"CallExpression",base:e,arguments:n}},tableCallExpression:function(e,n){return{type:"TableCallExpression",base:e,arguments:n}},stringCallExpression:function(e,n){return{type:"StringCallExpression",base:e,argument:n}},comment:function(e,n){return{type:"Comment",value:e,raw:n}}};function y(e){if(me){var n=ye.pop();n.complete(),t.locations&&(e.loc=n.loc),t.ranges&&(e.range=n.range)}return t.onCreateNode&&t.onCreateNode(e),e}var v,b,g,x,S,w,C,A,k,E,$,L=Array.prototype.slice,N=(Object.prototype.toString,function(e,n){for(var t=0,r=e.length;t<r;t++)if(e[t]===n)return t;return-1});function T(e,n,t){for(var r=0,a=e.length;r<a;r++)if(e[r][n]===t)return r;return-1}function O(e){var n=L.call(arguments,1);return e=e.replace(/%(\d)/g,(function(e,t){return""+n[t-1]||""})),e}function I(){for(var e,n,t=L.call(arguments),r={},a=0,i=t.length;a<i;a++)for(n in e=t[a],e)e.hasOwnProperty(n)&&(r[n]=e[n]);return r}function _(e){var n,t,r=O.apply(null,L.call(arguments,1));throw"undefined"!==typeof e.line?(t=e.range[0]-e.lineStart,n=new SyntaxError(O("[%1:%2] %3",e.line,t,r)),n.line=e.line,n.index=e.range[0],n.column=t):(t=v-A+1,n=new SyntaxError(O("[%1:%2] %3",C,t,r)),n.index=v,n.line=C,n.column=t),n}function j(e,n){_(n,d.expectedToken,e,n.value)}function K(e,n){if("undefined"===typeof n&&(n=x.value),"undefined"!==typeof e.type){var t;switch(e.type){case u:t="string";break;case o:t="keyword";break;case s:t="identifier";break;case c:t="number";break;case l:t="symbol";break;case f:t="boolean";break;case p:return _(e,d.unexpected,"symbol","nil",n)}return _(e,d.unexpected,t,e.value,n)}return _(e,d.unexpected,"symbol",e,n)}function V(){B();while(45===n.charCodeAt(v)&&45===n.charCodeAt(v+1))Z(),B();if(v>=r)return{type:i,value:"<eof>",line:C,lineStart:A,range:[v,v]};var e=n.charCodeAt(v),t=n.charCodeAt(v+1);if(w=v,re(e))return P();switch(e){case 39:case 34:return G();case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return z();case 46:return ne(t)?z():46===t?46===n.charCodeAt(v+2)?F():D(".."):D(".");case 61:return D(61===t?"==":"=");case 62:return D(61===t?">=":62===t?">>":">");case 60:return D(60===t?"<<":61===t?"<=":"<");case 126:return D(61===t?"~=":"~");case 58:return D(58===t?"::":":");case 91:return 91===t||61===t?M():D("[");case 47:return D(47===t?"//":"/");case 42:case 94:case 37:case 44:case 123:case 124:case 125:case 93:case 40:case 41:case 59:case 38:case 35:case 45:case 43:return D(n.charAt(v))}return K(n.charAt(v))}function Q(){var e=n.charCodeAt(v),t=n.charCodeAt(v+1);return!!ee(e)&&(10===e&&13===t&&v++,13===e&&10===t&&v++,C++,A=++v,!0)}function B(){while(v<r){var e=n.charCodeAt(v);if(Y(e))v++;else if(!Q())break}}function P(){var e,t;while(ae(n.charCodeAt(++v)));return e=n.slice(w,v),ie(e)?t=o:"true"===e||"false"===e?(t=f,e="true"===e):"nil"===e?(t=p,e=null):t=s,{type:t,value:e,line:C,lineStart:A,range:[w,v]}}function D(e){return v+=e.length,{type:l,value:e,line:C,lineStart:A,range:[w,v]}}function F(){return v+=3,{type:h,value:"...",line:C,lineStart:A,range:[w,v]}}function G(){var e,t=n.charCodeAt(v++),a=v,i="";while(v<r){if(e=n.charCodeAt(v++),t===e)break;92===e?(i+=n.slice(a,v-1)+U(),a=v):(v>=r||ee(e))&&(i+=n.slice(a,v-1),_({},d.unfinishedString,i+String.fromCharCode(e)))}return i+=n.slice(a,v-1),{type:u,value:i,line:C,lineStart:A,range:[w,v]}}function M(){var e=W();return!1===e&&_(b,d.expected,"[",b.value),{type:u,value:e,line:C,lineStart:A,range:[w,v]}}function z(){var e=n.charAt(v),t=n.charAt(v+1),r="0"===e&&"xX".indexOf(t||null)>=0?R():J();return{type:c,value:r,line:C,lineStart:A,range:[w,v]}}function R(){var e,t,r,a,i=0,u=1,o=1;a=v+=2,te(n.charCodeAt(v))||_({},d.malformedNumber,n.slice(w,v));while(te(n.charCodeAt(v)))v++;if(e=parseInt(n.slice(a,v),16),"."===n.charAt(v)){t=++v;while(te(n.charCodeAt(v)))v++;i=n.slice(t,v),i=t===v?0:parseInt(i,16)/Math.pow(16,v-t)}if("pP".indexOf(n.charAt(v)||null)>=0){v++,"+-".indexOf(n.charAt(v)||null)>=0&&(o="+"===n.charAt(v++)?1:-1),r=v,ne(n.charCodeAt(v))||_({},d.malformedNumber,n.slice(w,v));while(ne(n.charCodeAt(v)))v++;u=n.slice(r,v),u=Math.pow(2,u*o)}return(e+i)*u}function J(){while(ne(n.charCodeAt(v)))v++;if("."===n.charAt(v)){v++;while(ne(n.charCodeAt(v)))v++}if("eE".indexOf(n.charAt(v)||null)>=0){v++,"+-".indexOf(n.charAt(v)||null)>=0&&v++,ne(n.charCodeAt(v))||_({},d.malformedNumber,n.slice(w,v));while(ne(n.charCodeAt(v)))v++}return parseFloat(n.slice(w,v))}function U(){var e=v;switch(n.charAt(v)){case"n":return v++,"\n";case"r":return v++,"\r";case"t":return v++,"\t";case"v":return v++,"\v";case"b":return v++,"\b";case"f":return v++,"\f";case"z":return v++,B(),"";case"x":return te(n.charCodeAt(v+1))&&te(n.charCodeAt(v+2))?(v+=3,"\\"+n.slice(e,v)):"\\"+n.charAt(v++);default:if(ne(n.charCodeAt(v))){while(ne(n.charCodeAt(++v)));return"\\"+n.slice(e,v)}return n.charAt(v++)}}function Z(){w=v,v+=2;var e=n.charAt(v),a="",i=!1,u=v,o=A,s=C;if("["===e&&(a=W(),!1===a?a=e:i=!0),!i){while(v<r){if(ee(n.charCodeAt(v)))break;v++}t.comments&&(a=n.slice(u,v))}if(t.comments){var c=m.comment(a,n.slice(w,v));t.locations&&(c.loc={start:{line:s,column:w-o},end:{line:C,column:v-A}}),t.ranges&&(c.range=[w,v]),t.onCreateNode&&t.onCreateNode(c),S.push(c)}}function W(){var e,t,a=0,i="",u=!1;v++;while("="===n.charAt(v+a))a++;if("["!==n.charAt(v+a))return!1;v+=a+1,ee(n.charCodeAt(v))&&Q(),t=v;while(v<r){if(ee(n.charCodeAt(v))&&Q(),e=n.charAt(v++),"]"===e){u=!0;for(var o=0;o<a;o++)"="!==n.charAt(v+o)&&(u=!1);"]"!==n.charAt(v+a)&&(u=!1)}if(u)break}return i+=n.slice(t,v-1),v+=a+1,i}function X(){g=b,b=x,x=V()}function q(e){return e===b.value&&(X(),!0)}function H(e){e===b.value?X():_(b,d.expected,e,b.value)}function Y(e){return 9===e||32===e||11===e||12===e}function ee(e){return 10===e||13===e}function ne(e){return e>=48&&e<=57}function te(e){return e>=48&&e<=57||e>=97&&e<=102||e>=65&&e<=70}function re(e){return e>=65&&e<=90||e>=97&&e<=122||95===e}function ae(e){return e>=65&&e<=90||e>=97&&e<=122||95===e||e>=48&&e<=57}function ie(e){switch(e.length){case 2:return"do"===e||"if"===e||"in"===e||"or"===e;case 3:return"and"===e||"end"===e||"for"===e||"not"===e;case 4:return"else"===e||"goto"===e||"then"===e;case 5:return"break"===e||"local"===e||"until"===e||"while"===e;case 6:return"elseif"===e||"repeat"===e||"return"===e;case 8:return"function"===e}return!1}function ue(e){return l===e.type?"#-~".indexOf(e.value)>=0:o===e.type&&"not"===e.value}function oe(e){switch(e.type){case"CallExpression":case"TableCallExpression":case"StringCallExpression":return!0}return!1}function se(e){if(i===e.type)return!0;if(o!==e.type)return!1;switch(e.value){case"else":case"elseif":case"end":case"until":return!0;default:return!1}}function ce(){var e=Array.apply(null,k[E++]);k.push(e),t.onCreateScope&&t.onCreateScope()}function le(){k.pop();E--,t.onDestroyScope&&t.onDestroyScope()}function fe(e){-1===N(k[E],e)&&k[E].push(e)}function pe(e){fe(e.name),he(e,!0)}function he(e,n){n||-1!==T($,"name",e.name)||$.push(e),e.isLocal=n}function de(e){return-1!==N(k[E],e)}e.lex=V;var me,ye=[];function ve(){return new be(b)}function be(e){t.locations&&(this.loc={start:{line:e.line,column:e.range[0]-e.lineStart},end:{line:0,column:0}}),t.ranges&&(this.range=[e.range[0],0])}function ge(){me&&ye.push(ve())}function xe(e){me&&ye.push(e)}function Se(){X(),ge(),t.scope&&ce();var e=we();return t.scope&&le(),i!==b.type&&K(b),me&&!e.length&&(g=b),y(m.chunk(e))}function we(e){var n,t=[];while(!se(b)){if("return"===b.value){t.push(Ce());break}n=Ce(),n&&t.push(n)}return t}function Ce(){if(ge(),o===b.type)switch(b.value){case"local":return X(),_e();case"if":return X(),Oe();case"return":return X(),Te();case"function":X();var e=Be();return Qe(e);case"while":return X(),Le();case"for":return X(),Ie();case"repeat":return X(),Ne();case"break":return X(),ke();case"do":return X(),$e();case"goto":return X(),Ee()}return l===b.type&&q("::")?Ae():(me&&ye.pop(),q(";")?void 0:Ke())}function Ae(){var e=b.value,n=Ve();return t.scope&&(fe("::"+e+"::"),he(n,!0)),H("::"),y(m.labelStatement(n))}function ke(){return y(m.breakStatement())}function Ee(){b.value;var e=Ve();return y(m.gotoStatement(e))}function $e(){t.scope&&ce();var e=we();return t.scope&&le(),H("end"),y(m.doStatement(e))}function Le(){var e=Fe();H("do"),t.scope&&ce();var n=we();return t.scope&&le(),H("end"),y(m.whileStatement(e,n))}function Ne(){t.scope&&ce();var e=we();H("until");var n=Fe();return t.scope&&le(),y(m.repeatStatement(n,e))}function Te(){var e=[];if("end"!==b.value){var n=De();null!=n&&e.push(n);while(q(","))n=Fe(),e.push(n);q(";")}return y(m.returnStatement(e))}function Oe(){var e,n,r,a=[];me&&(r=ye[ye.length-1],ye.push(r)),e=Fe(),H("then"),t.scope&&ce(),n=we(),t.scope&&le(),a.push(y(m.ifClause(e,n))),me&&(r=ve());while(q("elseif"))xe(r),e=Fe(),H("then"),t.scope&&ce(),n=we(),t.scope&&le(),a.push(y(m.elseifClause(e,n))),me&&(r=ve());return q("else")&&(me&&(r=new be(g),ye.push(r)),t.scope&&ce(),n=we(),t.scope&&le(),a.push(y(m.elseClause(n)))),H("end"),y(m.ifStatement(a))}function Ie(){var e,n=Ve();if(t.scope&&(ce(),pe(n)),q("=")){var r=Fe();H(",");var a=Fe(),i=q(",")?Fe():null;return H("do"),e=we(),H("end"),t.scope&&le(),y(m.forNumericStatement(n,r,a,i,e))}var u=[n];while(q(","))n=Ve(),t.scope&&pe(n),u.push(n);H("in");var o=[];do{var s=Fe();o.push(s)}while(q(","));return H("do"),e=we(),H("end"),t.scope&&le(),y(m.forGenericStatement(u,o,e))}function _e(){var e;if(s===b.type){var n=[],r=[];do{e=Ve(),n.push(e)}while(q(","));if(q("="))do{var a=Fe();r.push(a)}while(q(","));if(t.scope)for(var i=0,u=n.length;i<u;i++)pe(n[i]);return y(m.localStatement(n,r))}if(q("function"))return e=Ve(),t.scope&&(pe(e),ce()),Qe(e,!0);j("<name>",b)}function je(e){(e.inParens||-1===["Identifier","MemberExpression","IndexExpression"].indexOf(e.type))&&_(b,d.invalidVar,b.value)}function Ke(){var e,n,t=b;if(me&&(n=ve()),e=ze(),null==e)return K(b);if(",=".indexOf(b.value)>=0){var r,a=[e],i=[];je(e);while(q(","))r=ze(),null==r&&j("<expression>",b),je(r),a.push(r);H("=");do{r=Fe(),i.push(r)}while(q(","));return xe(n),y(m.assignmentStatement(a,i))}return oe(e)?(xe(n),y(m.callStatement(e))):K(t)}function Ve(){ge();var e=b.value;return s!==b.type&&j("<name>",b),X(),y(m.identifier(e))}function Qe(e,n){var r=[];if(H("("),!q(")"))while(1)if(s===b.type){var a=Ve();if(t.scope&&pe(a),r.push(a),q(","))continue;if(q(")"))break}else{if(h===b.type){r.push(Je()),H(")");break}j("<name> or '...'",b)}var i=we();return H("end"),t.scope&&le(),n=n||!1,y(m.functionStatement(e,r,n,i))}function Be(){var e,n,r;me&&(r=ve()),e=Ve(),t.scope&&(he(e,de(e.name)),ce());while(q("."))xe(r),n=Ve(),e=y(m.memberExpression(e,".",n));return q(":")&&(xe(r),n=Ve(),e=y(m.memberExpression(e,":",n)),t.scope&&fe("self")),e}function Pe(){var e,n,t=[];while(1){if(ge(),l===b.type&&q("["))e=Fe(),H("]"),H("="),n=Fe(),t.push(y(m.tableKey(e,n)));else if(s===b.type)"="===x.value?(e=Ve(),X(),n=Fe(),t.push(y(m.tableKeyString(e,n)))):(n=Fe(),t.push(y(m.tableValue(n))));else{if(null==(n=De())){ye.pop();break}t.push(y(m.tableValue(n)))}if(!(",;".indexOf(b.value)>=0))break;X()}return H("}"),y(m.tableConstructorExpression(t))}function De(){var e=Me(0);return e}function Fe(){var e=De();if(null!=e)return e;j("<expression>",b)}function Ge(e){var n=e.charCodeAt(0),t=e.length;if(1===t)switch(n){case 94:return 12;case 42:case 47:case 37:return 10;case 43:case 45:return 9;case 38:return 6;case 126:return 5;case 124:return 4;case 60:case 62:return 3}else if(2===t)switch(n){case 47:return 10;case 46:return 8;case 60:case 62:return"<<"===e||">>"===e?7:3;case 61:case 126:return 3;case 111:return 1}else if(97===n&&"and"===e)return 2;return 0}function Me(e){var n,t,r,a=b.value;if(me&&(t=ve()),ue(b)){ge(),X();var i=Me(10);null==i&&j("<expression>",b),n=y(m.unaryExpression(a,i))}if(null==n&&(n=Je(),null==n&&(n=ze())),null==n)return null;while(1){if(a=b.value,r=l===b.type||o===b.type?Ge(a):0,0===r||r<=e)break;"^"!==a&&".."!==a||r--,X();var u=Me(r);null==u&&j("<expression>",b),me&&ye.push(t),n=y(m.binaryExpression(a,n,u))}return n}function ze(){var e,n,r,a,i;if(me&&(r=ve()),s===b.type)n=b.value,e=Ve(),t.scope&&he(e,de(n));else{if(!q("("))return null;e=Fe(),H(")"),e.inParens=!0}while(1)if(l===b.type)switch(b.value){case"[":xe(r),X(),a=Fe(),e=y(m.indexExpression(e,a)),H("]");break;case".":xe(r),X(),i=Ve(),e=y(m.memberExpression(e,".",i));break;case":":xe(r),X(),i=Ve(),e=y(m.memberExpression(e,":",i)),xe(r),e=Re(e);break;case"(":case"{":xe(r),e=Re(e);break;default:return e}else{if(u!==b.type)break;xe(r),e=Re(e)}return e}function Re(e){if(l===b.type)switch(b.value){case"(":X();var n=[],t=De();null!=t&&n.push(t);while(q(","))t=Fe(),n.push(t);return H(")"),y(m.callExpression(e,n));case"{":ge(),X();var r=Pe();return y(m.tableCallExpression(e,r))}else if(u===b.type)return y(m.stringCallExpression(e,Je()));j("function arguments",b)}function Je(){var e,r=u|c|f|p|h,a=b.value,i=b.type;if(me&&(e=ve()),i&r){xe(e);var s=n.slice(b.range[0],b.range[1]);return X(),y(m.literal(i,a,s))}return o===i&&"function"===a?(xe(e),X(),t.scope&&ce(),Qe(null)):q("{")?(xe(e),Pe()):void 0}function Ue(i,u){return"undefined"===typeof u&&"object"===typeof i&&(u=i,i=void 0),u||(u={}),n=i||"",t=I(a,u),v=0,C=1,A=0,r=n.length,k=[[]],E=0,$=[],ye=[],t.comments&&(S=[]),t.wait?e:We()}function Ze(t){return n+=String(t),r=n.length,e}function We(e){"undefined"!==typeof e&&Ze(e),n&&"#!"===n.substr(0,2)&&(n=n.replace(/^.*/,(function(e){return e.replace(/./g," ")}))),r=n.length,me=t.locations||t.ranges,x=V();var a=Se();if(t.comments&&(a.comments=S),t.scope&&(a.globals=$),ye.length>0)throw new Error("Location tracking failed. This is most likely a bug in luaparse");return a}be.prototype.complete=function(){t.locations&&(this.loc.end.line=g.line,this.loc.end.column=g.range[1]-g.lineStart),t.ranges&&(this.range[1]=g.range[1])},e.parse=Ue,e.write=Ze,e.end=We}))}).call(this,t("62e4")(e),t("c8ba"))}}]);
//# sourceMappingURL=chunk-14720efb.524b27a0.js.map