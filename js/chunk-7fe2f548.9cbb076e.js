(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fe2f548"],{6343:function(e,t,n){(function(t){const{hasOwnProperty:n}=Object.prototype,r="undefined"!==typeof t&&"win32"===t.platform?"\r\n":"\n",a=(e,t)=>{const n=[];let i="";"string"===typeof t?t={section:t,whitespace:!1}:(t=t||Object.create(null),t.whitespace=!0===t.whitespace);const c=t.whitespace?" = ":"=";for(const a of Object.keys(e)){const t=e[a];if(t&&Array.isArray(t))for(const e of t)i+=s(a+"[]")+c+s(e)+"\n";else t&&"object"===typeof t?n.push(a):i+=s(a)+c+s(t)+r}t.section&&i.length&&(i="["+s(t.section)+"]"+r+i);for(const s of n){const n=o(s).join("\\."),c=(t.section?t.section+".":"")+n,{whitespace:u}=t,l=a(e[s],{section:c,whitespace:u});i.length&&l.length&&(i+=r),i+=l}return i},o=e=>e.replace(/\1/g,"LITERAL\\1LITERAL").replace(/\\\./g,"").split(/\./).map(e=>e.replace(/\1/g,"\\.").replace(/\2LITERAL\\1LITERAL\2/g,"")),i=e=>{const t=Object.create(null);let r=t,a=null;const i=/^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i,c=e.split(/[\r\n]+/g);for(const o of c){if(!o||o.match(/^\s*[;#]/))continue;const e=o.match(i);if(!e)continue;if(void 0!==e[1]){if(a=u(e[1]),"__proto__"===a){r=Object.create(null);continue}r=t[a]=t[a]||Object.create(null);continue}const c=u(e[2]),s=c.length>2&&"[]"===c.slice(-2),l=s?c.slice(0,-2):c;if("__proto__"===l)continue;const p=!e[3]||u(e[4]),f="true"===p||"false"===p||"null"===p?JSON.parse(p):p;s&&(n.call(r,l)?Array.isArray(r[l])||(r[l]=[r[l]]):r[l]=[]),Array.isArray(r[l])?r[l].push(f):r[l]=f}const s=[];for(const u of Object.keys(t)){if(!n.call(t,u)||"object"!==typeof t[u]||Array.isArray(t[u]))continue;const e=o(u);let r=t;const a=e.pop(),i=a.replace(/\\\./g,".");for(const t of e)"__proto__"!==t&&(n.call(r,t)&&"object"===typeof r[t]||(r[t]=Object.create(null)),r=r[t]);r===t&&i===a||(r[i]=t[u],s.push(u))}for(const n of s)delete t[n];return t},c=e=>'"'===e.charAt(0)&&'"'===e.slice(-1)||"'"===e.charAt(0)&&"'"===e.slice(-1),s=e=>"string"!==typeof e||e.match(/[=\r\n]/)||e.match(/^\[/)||e.length>1&&c(e)||e!==e.trim()?JSON.stringify(e):e.replace(/;/g,"\\;").replace(/#/g,"\\#"),u=(e,t)=>{if(e=(e||"").trim(),!c(e)){let t=!1,n="";for(let r=0,a=e.length;r<a;r++){const a=e.charAt(r);if(t)-1!=="\\;#".indexOf(a)?n+=a:n+="\\"+a,t=!1;else{if(-1!==";#".indexOf(a))break;"\\"===a?t=!0:n+=a}}return t&&(n+="\\"),n.trim()}"'"===e.charAt(0)&&(e=e.substr(1,e.length-2));try{e=JSON.parse(e)}catch(n){}return e};e.exports={parse:i,decode:i,stringify:a,encode:a,safe:s,unsafe:u}}).call(this,n("4362"))},a796:function(e,t,n){"use strict";function r(e,t,n=0){return parseInt(e["Face"][t])||n}function a(e,t){let n={bUse:!!parseInt(e["CustomDetail"][t+"_valueEnable"]),nShowID:parseInt(e["Decal"][t])||0,nColorID:parseInt(e["Decal"][t+"_color"])||0,fValue1:-1,fValue2:-1,fValue3:-1};return n["bUse"]&&(n["fValue1"]=parseFloat(e["CustomDetail"][t+"_value1"])||0,n["fValue2"]=parseFloat(e["CustomDetail"][t+"_value2"])||0,n["fValue3"]=parseFloat(e["CustomDetail"][t+"_value3"])||0),n}function o(e){return{nRoleType:parseInt(e["Base"]["RoleType"]),nDecorationID:parseInt(e["Base"]["DecorationID"]),tDecal:{BASE:a(e,"FaceBaseTexture"),BROW:a(e,"Brow"),EYE_LIGHT:a(e,"EyeLight"),EYE_LINE:a(e,"EyeLine"),EYE_SHADOW:a(e,"EyeShadow"),EYE_SHADOW1:a(e,"EyeShadow1"),EYE_SHADOW2:a(e,"EyeShadow2"),EYE_SHADOW3:a(e,"EyeShadow3"),EYE_SHADOW4:a(e,"EyeShadow4"),EYE_SHADOW_FLASH1:a(e,"EyeShadowFlash1"),EYE_SHADOW_FLASH2:a(e,"EyeShadowFlash2"),EYE_SHADOW_FLASH3:a(e,"EyeShadowFlash3"),EYE_SHADOW_FLASH4:a(e,"EyeShadowFlash4"),LIP_LIGHT:a(e,"LipLight"),LIP_FLASH:a(e,"LipFlash"),LIP_GLOSS:a(e,"LipGloss"),LIP_OVERLAP:a(e,"LipOverlap"),IRIS_LEFT:a(e,"IrisLeft"),IRIS_RIGHT:a(e,"IrisRight"),BLUSHER_MOUSTACHE:a(e,"BlusherMoustache"),DECAL:a(e,"Decal")},tBone:{NOSE_SIZE:r(e,"noseSize"),UP_LIP_OUT:r(e,"upLipOut"),NOSEBOW_WIDTH:r(e,"nosebowWidth"),MOUTH_OPEN:r(e,"mouthOpen"),CHEEK_Y:r(e,"cheekY"),EYE_OPEN:r(e,"eyeOpen"),FACE_Y:r(e,"faceY"),MOUTH_END_L:r(e,"mouthEndL"),JAW_LENGTH:r(e,"jawLength"),UP_LIP:r(e,"upLip"),EYE_DIST:r(e,"eyeDist"),NOSETOP_POS_Y:r(e,"nosetopPosY"),EYE_DIRC:r(e,"eyeDirc"),EYEBOW_OUT:r(e,"eyebowOut"),MOUTH_OUT:r(e,"mouthOut"),RIDGE_Y:r(e,"ridgeY"),MOUTH_END:r(e,"mouthEnd"),NOSEBOW_BEND:r(e,"nosebowBend"),JAW_WIDTH:r(e,"jawWidth"),LOW_LIP_POS:r(e,"lowLipPos"),PUPIL_DIRC:r(e,"pupilDirc"),NOSETOP_POS_Z:r(e,"nosetopPosZ"),MOUTH_POS:r(e,"mouthPos"),MOUTH_SIZE:r(e,"mouthSize"),LOW_LIP:r(e,"lowLip"),FACE_Z:r(e,"faceZ"),NOSETOP_WIDTH:r(e,"nosetopWidth"),UP_FACE:r(e,"upFace"),UP_LID_POS:r(e,"upLidPos"),EYEBOW_POS:r(e,"eyebowPos"),EYEBOW_DIRC:r(e,"eyebowDirc"),UP_LIP_POS:r(e,"upLipPos"),LOW_LIP_OUT:r(e,"lowLipOut"),MOUTH_ROT:r(e,"mouthRot"),EYE_SIZE:r(e,"eyeSize"),EYE_POS:r(e,"eyePos"),JAW_ROT:r(e,"jawRot"),JAW_END:r(e,"jawEnd"),EYECROW_Y:r(e,"eyecrowY"),NOSETOP_UP:r(e,"nosetopUp"),MOUTH_END_R:r(e,"mouthEndR"),OUT:r(e,"out"),JAW_POS:r(e,"jawPos"),LOW_FACE:r(e,"lowFace"),CHEEK_Z:r(e,"cheekZ"),PUPIL_SIZE:r(e,"pupilSize"),FACE_SCALE:r(e,"faceScale"),NOSE_HEIGHT:r(e,"noseHeight"),LOW_LID_POS:r(e,"lowLidPos")}}}n.d(t,"a",(function(){return o}))},bda6:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=n("d4f4"),a=n("6343"),o=n("702d"),i=n("a796");function c(e,t=!1){const n=new TextDecoder("gbk"),c=new Uint8Array(e,2,2);if(68==c[0]&&75==c[1]){console.log("数据类型为带 KD 头的 jx3dat");const a=new Uint8Array(e,0,1)[0],i=new Uint8Array(e,1,1)[0];if(78!=i)throw console.log("暂不支持压缩的数据: "+i),new Error("暂不支持压缩的数据");const c=new DataView(e).getInt32(4,!0),s=new DataView(e).getInt32(8,!0),u=new DataView(e).getInt32(12,!0),l=e.byteLength-16;if(s!=u||l!=s||l!=u){if(!t)throw new Error("数据长度有误: L1="+s+" L2="+u+" Actual="+l);console.log("数据长度有误，将继续尝试解析: L1="+s+" L2="+u+" Actual="+l+" 将继续尝试解析")}let p=new Uint8Array(e,16,l);if(78!=a){let e=null;if(67==a&&(e=Object(o["buf"])(p)),c!=e){if(!t)throw new Error("数据校验有误: "+c+" Actual="+e);console.log("数据校验有误: "+c+" Actual="+e+" 将继续尝试解析")}}return p=n.decode(p),Object(r["parse"])("return"+p.slice(p.indexOf("{")))}{console.log("未检测到 KD 头");const t=n.decode(e),o=Object(r["parse"])("return"+t.slice(t.indexOf("{")));return 0!=o.length?(console.log("数据类型为不带 KD 头的 jx3dat"),o):(console.log("数据类型为 INI"),Object(i["a"])(Object(a["parse"])(t)))}}function s(t){const n=new TextEncoder("gbk");let r=n.encode(t),a=r.length,i=Object(o["buf"])(r)>>>0,c=e.alloc(a+16);return c.write("CNDK",0),c.writeUInt32LE(i,4),c.writeUInt32LE(a,8),c.writeUInt32LE(a,12),c.write(t,16),c}}).call(this,n("b639").Buffer)},d4f4:function(e,t,n){const{isNull:r,isBoolean:a,isNumber:o,isString:i,isArray:c,isObject:s,isEmpty:u,fromPairs:l,keys:p,map:f,repeat:h}=n("2ef0"),{parse:d}=n("e588"),y=(e,t)=>t?`'${e.replace(/'/g,"\\'")}'`:`"${e.replace(/"/g,'\\"')}"`,m={false:"false",true:"true",null:"nil"},E=(e,t)=>m[e]?`[${m[e]}]`:e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)?e:`[${y(e,t)}]`,b=(e,t={eol:"\n",singleQuote:!0,spaces:2})=>{t=t||{};const n=t.eol=i(t.eol)?t.eol:"\n";t.singleQuote=!a(t.singleQuote)||t.singleQuote,t.spaces=r(t.spaces)||o(t.spaces)||i(t.spaces)?t.spaces:2;const l=(e,f=0)=>{if(r(e))return"nil";if(a(e)||o(e))return e.toString();if(i(e))return y(e,t.singleQuote);if(c(e)){if(u(e))return"{}";if(t.spaces){const r=o(t.spaces)?h(" ",t.spaces*(f+1)):h(t.spaces,f+1),a=o(t.spaces)?h(" ",t.spaces*f):h(t.spaces,f);return`{${n}${e.map(e=>`${r}${l(e,f+1)},`).join(n)}${n}${a}}`}return`{${e.map(e=>l(e,f+1)+",").join("")}}`}if(s(e)){if(u(e))return"{}";if(t.spaces){const r=o(t.spaces)?h(" ",t.spaces*(f+1)):h(t.spaces,f+1),a=o(t.spaces)?h(" ",t.spaces*f):h(t.spaces,f);return`{${n}${p(e).map(n=>`${r}${E(n,t.singleQuote)} = ${l(e[n],f+1)},`).join(n)}${n}${a}}`}return`{${p(e).map(n=>`${E(n,t.singleQuote)}=${l(e[n],f+1)},`).join("")}}`}throw new Error("can't format "+typeof e)};return`return${t.spaces?" ":""}${l(e)}`},S=e=>{if(["NilLiteral","BooleanLiteral","NumericLiteral","StringLiteral"].includes(e.type))return e.value;if("UnaryExpression"===e.type&&"-"===e.operator)return-S(e.argument);if("Identifier"===e.type)return e.name;if(["TableKey","TableKeyString"].includes(e.type))return{__internal_table_key:!0,key:S(e.key),value:S(e.value)};if("TableValue"===e.type)return S(e.value);if("TableConstructorExpression"===e.type){if(e.fields[0]&&e.fields[0].key){const t=l(f(e.fields,e=>{const{key:t,value:n}=S(e);return[t,n]}));return u(t)?[]:t}return f(e.fields,e=>{const t=S(e);return t.__internal_table_key?[t.key,t.value]:t})}if("LocalStatement"===e.type){const t=e.init.map(S);return 1===t.length?t[0]:t}if("ReturnStatement"===e.type){const t=e.arguments.map(S);return 1===t.length?t[0]:t}if("Chunk"===e.type)return S(e.body[0]);throw new Error("can't parse "+e.type)},v=e=>S(d(e,{comments:!1}));e.exports={format:b,parse:v}},e588:function(e,t,n){(function(e,n){var r,a,o;(function(i,c,s){"use strict";var u={function:!0,object:!0},l=u[typeof t]&&t&&!t.nodeType&&t,p=u[typeof e]&&e&&!e.nodeType&&e,f=l&&p&&"object"==typeof n&&n,h=p&&p.exports===l&&l;!f||f.global!==f&&f.window!==f&&f.self,a=[t],r=s,o="function"===typeof r?r.apply(t,a):r,void 0===o||(e.exports=o),l&&h&&s(p.exports)})(0,0,(function(e){"use strict";var t,n,r;e.version="0.2.1";var a=e.defaultOptions={wait:!1,comments:!0,scope:!1,locations:!1,ranges:!1,onCreateNode:null,onCreateScope:null,onDestroyScope:null},o=1,i=2,c=4,s=8,u=16,l=32,p=64,f=128,h=256;e.tokenTypes={EOF:o,StringLiteral:i,Keyword:c,Identifier:s,NumericLiteral:u,Punctuator:l,BooleanLiteral:p,NilLiteral:f,VarargLiteral:h};var d=e.errors={unexpected:"unexpected %1 '%2' near '%3'",expected:"'%1' expected near '%2'",expectedToken:"%1 expected near '%2'",unfinishedString:"unfinished string near '%1'",malformedNumber:"malformed number near '%1'",invalidVar:"invalid left-hand side of assignment near '%1'"},y=e.ast={labelStatement:function(e){return{type:"LabelStatement",label:e}},breakStatement:function(){return{type:"BreakStatement"}},gotoStatement:function(e){return{type:"GotoStatement",label:e}},returnStatement:function(e){return{type:"ReturnStatement",arguments:e}},ifStatement:function(e){return{type:"IfStatement",clauses:e}},ifClause:function(e,t){return{type:"IfClause",condition:e,body:t}},elseifClause:function(e,t){return{type:"ElseifClause",condition:e,body:t}},elseClause:function(e){return{type:"ElseClause",body:e}},whileStatement:function(e,t){return{type:"WhileStatement",condition:e,body:t}},doStatement:function(e){return{type:"DoStatement",body:e}},repeatStatement:function(e,t){return{type:"RepeatStatement",condition:e,body:t}},localStatement:function(e,t){return{type:"LocalStatement",variables:e,init:t}},assignmentStatement:function(e,t){return{type:"AssignmentStatement",variables:e,init:t}},callStatement:function(e){return{type:"CallStatement",expression:e}},functionStatement:function(e,t,n,r){return{type:"FunctionDeclaration",identifier:e,isLocal:n,parameters:t,body:r}},forNumericStatement:function(e,t,n,r,a){return{type:"ForNumericStatement",variable:e,start:t,end:n,step:r,body:a}},forGenericStatement:function(e,t,n){return{type:"ForGenericStatement",variables:e,iterators:t,body:n}},chunk:function(e){return{type:"Chunk",body:e}},identifier:function(e){return{type:"Identifier",name:e}},literal:function(e,t,n){return e=e===i?"StringLiteral":e===u?"NumericLiteral":e===p?"BooleanLiteral":e===f?"NilLiteral":"VarargLiteral",{type:e,value:t,raw:n}},tableKey:function(e,t){return{type:"TableKey",key:e,value:t}},tableKeyString:function(e,t){return{type:"TableKeyString",key:e,value:t}},tableValue:function(e){return{type:"TableValue",value:e}},tableConstructorExpression:function(e){return{type:"TableConstructorExpression",fields:e}},binaryExpression:function(e,t,n){var r="and"===e||"or"===e?"LogicalExpression":"BinaryExpression";return{type:r,operator:e,left:t,right:n}},unaryExpression:function(e,t){return{type:"UnaryExpression",operator:e,argument:t}},memberExpression:function(e,t,n){return{type:"MemberExpression",indexer:t,identifier:n,base:e}},indexExpression:function(e,t){return{type:"IndexExpression",base:e,index:t}},callExpression:function(e,t){return{type:"CallExpression",base:e,arguments:t}},tableCallExpression:function(e,t){return{type:"TableCallExpression",base:e,arguments:t}},stringCallExpression:function(e,t){return{type:"StringCallExpression",base:e,argument:t}},comment:function(e,t){return{type:"Comment",value:e,raw:t}}};function m(e){if(ye){var t=me.pop();t.complete(),n.locations&&(e.loc=t.loc),n.ranges&&(e.range=t.range)}return n.onCreateNode&&n.onCreateNode(e),e}var E,b,S,v,g,w,A,_,O,L,x,C=Array.prototype.slice,I=(Object.prototype.toString,function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1});function k(e,t,n){for(var r=0,a=e.length;r<a;r++)if(e[r][t]===n)return r;return-1}function D(e){var t=C.call(arguments,1);return e=e.replace(/%(\d)/g,(function(e,n){return""+t[n-1]||""})),e}function T(){for(var e,t,n=C.call(arguments),r={},a=0,o=n.length;a<o;a++)for(t in e=n[a],e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r}function P(e){var t,n,r=D.apply(null,C.call(arguments,1));throw"undefined"!==typeof e.line?(n=e.range[0]-e.lineStart,t=new SyntaxError(D("[%1:%2] %3",e.line,n,r)),t.line=e.line,t.index=e.range[0],t.column=n):(n=E-_+1,t=new SyntaxError(D("[%1:%2] %3",A,n,r)),t.index=E,t.line=A,t.column=n),t}function N(e,t){P(t,d.expectedToken,e,t.value)}function H(e,t){if("undefined"===typeof t&&(t=v.value),"undefined"!==typeof e.type){var n;switch(e.type){case i:n="string";break;case c:n="keyword";break;case s:n="identifier";break;case u:n="number";break;case l:n="symbol";break;case p:n="boolean";break;case f:return P(e,d.unexpected,"symbol","nil",t)}return P(e,d.unexpected,n,e.value,t)}return P(e,d.unexpected,"symbol",e,t)}function U(){W();while(45===t.charCodeAt(E)&&45===t.charCodeAt(E+1))Z(),W();if(E>=r)return{type:o,value:"<eof>",line:A,lineStart:_,range:[E,E]};var e=t.charCodeAt(E),n=t.charCodeAt(E+1);if(w=E,re(e))return Y();switch(e){case 39:case 34:return $();case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return V();case 46:return te(n)?V():46===n?46===t.charCodeAt(E+2)?R():F(".."):F(".");case 61:return F(61===n?"==":"=");case 62:return F(61===n?">=":62===n?">>":">");case 60:return F(60===n?"<<":61===n?"<=":"<");case 126:return F(61===n?"~=":"~");case 58:return F(58===n?"::":":");case 91:return 91===n||61===n?B():F("[");case 47:return F(47===n?"//":"/");case 42:case 94:case 37:case 44:case 123:case 124:case 125:case 93:case 40:case 41:case 59:case 38:case 35:case 45:case 43:return F(t.charAt(E))}return H(t.charAt(E))}function j(){var e=t.charCodeAt(E),n=t.charCodeAt(E+1);return!!ee(e)&&(10===e&&13===n&&E++,13===e&&10===n&&E++,A++,_=++E,!0)}function W(){while(E<r){var e=t.charCodeAt(E);if(q(e))E++;else if(!j())break}}function Y(){var e,n;while(ae(t.charCodeAt(++E)));return e=t.slice(w,E),oe(e)?n=c:"true"===e||"false"===e?(n=p,e="true"===e):"nil"===e?(n=f,e=null):n=s,{type:n,value:e,line:A,lineStart:_,range:[w,E]}}function F(e){return E+=e.length,{type:l,value:e,line:A,lineStart:_,range:[w,E]}}function R(){return E+=3,{type:h,value:"...",line:A,lineStart:_,range:[w,E]}}function $(){var e,n=t.charCodeAt(E++),a=E,o="";while(E<r){if(e=t.charCodeAt(E++),n===e)break;92===e?(o+=t.slice(a,E-1)+G(),a=E):(E>=r||ee(e))&&(o+=t.slice(a,E-1),P({},d.unfinishedString,o+String.fromCharCode(e)))}return o+=t.slice(a,E-1),{type:i,value:o,line:A,lineStart:_,range:[w,E]}}function B(){var e=J();return!1===e&&P(b,d.expected,"[",b.value),{type:i,value:e,line:A,lineStart:_,range:[w,E]}}function V(){var e=t.charAt(E),n=t.charAt(E+1),r="0"===e&&"xX".indexOf(n||null)>=0?K():M();return{type:u,value:r,line:A,lineStart:_,range:[w,E]}}function K(){var e,n,r,a,o=0,i=1,c=1;a=E+=2,ne(t.charCodeAt(E))||P({},d.malformedNumber,t.slice(w,E));while(ne(t.charCodeAt(E)))E++;if(e=parseInt(t.slice(a,E),16),"."===t.charAt(E)){n=++E;while(ne(t.charCodeAt(E)))E++;o=t.slice(n,E),o=n===E?0:parseInt(o,16)/Math.pow(16,E-n)}if("pP".indexOf(t.charAt(E)||null)>=0){E++,"+-".indexOf(t.charAt(E)||null)>=0&&(c="+"===t.charAt(E++)?1:-1),r=E,te(t.charCodeAt(E))||P({},d.malformedNumber,t.slice(w,E));while(te(t.charCodeAt(E)))E++;i=t.slice(r,E),i=Math.pow(2,i*c)}return(e+o)*i}function M(){while(te(t.charCodeAt(E)))E++;if("."===t.charAt(E)){E++;while(te(t.charCodeAt(E)))E++}if("eE".indexOf(t.charAt(E)||null)>=0){E++,"+-".indexOf(t.charAt(E)||null)>=0&&E++,te(t.charCodeAt(E))||P({},d.malformedNumber,t.slice(w,E));while(te(t.charCodeAt(E)))E++}return parseFloat(t.slice(w,E))}function G(){var e=E;switch(t.charAt(E)){case"n":return E++,"\n";case"r":return E++,"\r";case"t":return E++,"\t";case"v":return E++,"\v";case"b":return E++,"\b";case"f":return E++,"\f";case"z":return E++,W(),"";case"x":return ne(t.charCodeAt(E+1))&&ne(t.charCodeAt(E+2))?(E+=3,"\\"+t.slice(e,E)):"\\"+t.charAt(E++);default:if(te(t.charCodeAt(E))){while(te(t.charCodeAt(++E)));return"\\"+t.slice(e,E)}return t.charAt(E++)}}function Z(){w=E,E+=2;var e=t.charAt(E),a="",o=!1,i=E,c=_,s=A;if("["===e&&(a=J(),!1===a?a=e:o=!0),!o){while(E<r){if(ee(t.charCodeAt(E)))break;E++}n.comments&&(a=t.slice(i,E))}if(n.comments){var u=y.comment(a,t.slice(w,E));n.locations&&(u.loc={start:{line:s,column:w-c},end:{line:A,column:E-_}}),n.ranges&&(u.range=[w,E]),n.onCreateNode&&n.onCreateNode(u),g.push(u)}}function J(){var e,n,a=0,o="",i=!1;E++;while("="===t.charAt(E+a))a++;if("["!==t.charAt(E+a))return!1;E+=a+1,ee(t.charCodeAt(E))&&j(),n=E;while(E<r){if(ee(t.charCodeAt(E))&&j(),e=t.charAt(E++),"]"===e){i=!0;for(var c=0;c<a;c++)"="!==t.charAt(E+c)&&(i=!1);"]"!==t.charAt(E+a)&&(i=!1)}if(i)break}return o+=t.slice(n,E-1),E+=a+1,o}function z(){S=b,b=v,v=U()}function Q(e){return e===b.value&&(z(),!0)}function X(e){e===b.value?z():P(b,d.expected,e,b.value)}function q(e){return 9===e||32===e||11===e||12===e}function ee(e){return 10===e||13===e}function te(e){return e>=48&&e<=57}function ne(e){return e>=48&&e<=57||e>=97&&e<=102||e>=65&&e<=70}function re(e){return e>=65&&e<=90||e>=97&&e<=122||95===e}function ae(e){return e>=65&&e<=90||e>=97&&e<=122||95===e||e>=48&&e<=57}function oe(e){switch(e.length){case 2:return"do"===e||"if"===e||"in"===e||"or"===e;case 3:return"and"===e||"end"===e||"for"===e||"not"===e;case 4:return"else"===e||"goto"===e||"then"===e;case 5:return"break"===e||"local"===e||"until"===e||"while"===e;case 6:return"elseif"===e||"repeat"===e||"return"===e;case 8:return"function"===e}return!1}function ie(e){return l===e.type?"#-~".indexOf(e.value)>=0:c===e.type&&"not"===e.value}function ce(e){switch(e.type){case"CallExpression":case"TableCallExpression":case"StringCallExpression":return!0}return!1}function se(e){if(o===e.type)return!0;if(c!==e.type)return!1;switch(e.value){case"else":case"elseif":case"end":case"until":return!0;default:return!1}}function ue(){var e=Array.apply(null,O[L++]);O.push(e),n.onCreateScope&&n.onCreateScope()}function le(){O.pop();L--,n.onDestroyScope&&n.onDestroyScope()}function pe(e){-1===I(O[L],e)&&O[L].push(e)}function fe(e){pe(e.name),he(e,!0)}function he(e,t){t||-1!==k(x,"name",e.name)||x.push(e),e.isLocal=t}function de(e){return-1!==I(O[L],e)}e.lex=U;var ye,me=[];function Ee(){return new be(b)}function be(e){n.locations&&(this.loc={start:{line:e.line,column:e.range[0]-e.lineStart},end:{line:0,column:0}}),n.ranges&&(this.range=[e.range[0],0])}function Se(){ye&&me.push(Ee())}function ve(e){ye&&me.push(e)}function ge(){z(),Se(),n.scope&&ue();var e=we();return n.scope&&le(),o!==b.type&&H(b),ye&&!e.length&&(S=b),m(y.chunk(e))}function we(e){var t,n=[];while(!se(b)){if("return"===b.value){n.push(Ae());break}t=Ae(),t&&n.push(t)}return n}function Ae(){if(Se(),c===b.type)switch(b.value){case"local":return z(),Pe();case"if":return z(),De();case"return":return z(),ke();case"function":z();var e=We();return je(e);case"while":return z(),Ce();case"for":return z(),Te();case"repeat":return z(),Ie();case"break":return z(),Oe();case"do":return z(),xe();case"goto":return z(),Le()}return l===b.type&&Q("::")?_e():(ye&&me.pop(),Q(";")?void 0:He())}function _e(){var e=b.value,t=Ue();return n.scope&&(pe("::"+e+"::"),he(t,!0)),X("::"),m(y.labelStatement(t))}function Oe(){return m(y.breakStatement())}function Le(){b.value;var e=Ue();return m(y.gotoStatement(e))}function xe(){n.scope&&ue();var e=we();return n.scope&&le(),X("end"),m(y.doStatement(e))}function Ce(){var e=Re();X("do"),n.scope&&ue();var t=we();return n.scope&&le(),X("end"),m(y.whileStatement(e,t))}function Ie(){n.scope&&ue();var e=we();X("until");var t=Re();return n.scope&&le(),m(y.repeatStatement(t,e))}function ke(){var e=[];if("end"!==b.value){var t=Fe();null!=t&&e.push(t);while(Q(","))t=Re(),e.push(t);Q(";")}return m(y.returnStatement(e))}function De(){var e,t,r,a=[];ye&&(r=me[me.length-1],me.push(r)),e=Re(),X("then"),n.scope&&ue(),t=we(),n.scope&&le(),a.push(m(y.ifClause(e,t))),ye&&(r=Ee());while(Q("elseif"))ve(r),e=Re(),X("then"),n.scope&&ue(),t=we(),n.scope&&le(),a.push(m(y.elseifClause(e,t))),ye&&(r=Ee());return Q("else")&&(ye&&(r=new be(S),me.push(r)),n.scope&&ue(),t=we(),n.scope&&le(),a.push(m(y.elseClause(t)))),X("end"),m(y.ifStatement(a))}function Te(){var e,t=Ue();if(n.scope&&(ue(),fe(t)),Q("=")){var r=Re();X(",");var a=Re(),o=Q(",")?Re():null;return X("do"),e=we(),X("end"),n.scope&&le(),m(y.forNumericStatement(t,r,a,o,e))}var i=[t];while(Q(","))t=Ue(),n.scope&&fe(t),i.push(t);X("in");var c=[];do{var s=Re();c.push(s)}while(Q(","));return X("do"),e=we(),X("end"),n.scope&&le(),m(y.forGenericStatement(i,c,e))}function Pe(){var e;if(s===b.type){var t=[],r=[];do{e=Ue(),t.push(e)}while(Q(","));if(Q("="))do{var a=Re();r.push(a)}while(Q(","));if(n.scope)for(var o=0,i=t.length;o<i;o++)fe(t[o]);return m(y.localStatement(t,r))}if(Q("function"))return e=Ue(),n.scope&&(fe(e),ue()),je(e,!0);N("<name>",b)}function Ne(e){(e.inParens||-1===["Identifier","MemberExpression","IndexExpression"].indexOf(e.type))&&P(b,d.invalidVar,b.value)}function He(){var e,t,n=b;if(ye&&(t=Ee()),e=Ve(),null==e)return H(b);if(",=".indexOf(b.value)>=0){var r,a=[e],o=[];Ne(e);while(Q(","))r=Ve(),null==r&&N("<expression>",b),Ne(r),a.push(r);X("=");do{r=Re(),o.push(r)}while(Q(","));return ve(t),m(y.assignmentStatement(a,o))}return ce(e)?(ve(t),m(y.callStatement(e))):H(n)}function Ue(){Se();var e=b.value;return s!==b.type&&N("<name>",b),z(),m(y.identifier(e))}function je(e,t){var r=[];if(X("("),!Q(")"))while(1)if(s===b.type){var a=Ue();if(n.scope&&fe(a),r.push(a),Q(","))continue;if(Q(")"))break}else{if(h===b.type){r.push(Me()),X(")");break}N("<name> or '...'",b)}var o=we();return X("end"),n.scope&&le(),t=t||!1,m(y.functionStatement(e,r,t,o))}function We(){var e,t,r;ye&&(r=Ee()),e=Ue(),n.scope&&(he(e,de(e.name)),ue());while(Q("."))ve(r),t=Ue(),e=m(y.memberExpression(e,".",t));return Q(":")&&(ve(r),t=Ue(),e=m(y.memberExpression(e,":",t)),n.scope&&pe("self")),e}function Ye(){var e,t,n=[];while(1){if(Se(),l===b.type&&Q("["))e=Re(),X("]"),X("="),t=Re(),n.push(m(y.tableKey(e,t)));else if(s===b.type)"="===v.value?(e=Ue(),z(),t=Re(),n.push(m(y.tableKeyString(e,t)))):(t=Re(),n.push(m(y.tableValue(t))));else{if(null==(t=Fe())){me.pop();break}n.push(m(y.tableValue(t)))}if(!(",;".indexOf(b.value)>=0))break;z()}return X("}"),m(y.tableConstructorExpression(n))}function Fe(){var e=Be(0);return e}function Re(){var e=Fe();if(null!=e)return e;N("<expression>",b)}function $e(e){var t=e.charCodeAt(0),n=e.length;if(1===n)switch(t){case 94:return 12;case 42:case 47:case 37:return 10;case 43:case 45:return 9;case 38:return 6;case 126:return 5;case 124:return 4;case 60:case 62:return 3}else if(2===n)switch(t){case 47:return 10;case 46:return 8;case 60:case 62:return"<<"===e||">>"===e?7:3;case 61:case 126:return 3;case 111:return 1}else if(97===t&&"and"===e)return 2;return 0}function Be(e){var t,n,r,a=b.value;if(ye&&(n=Ee()),ie(b)){Se(),z();var o=Be(10);null==o&&N("<expression>",b),t=m(y.unaryExpression(a,o))}if(null==t&&(t=Me(),null==t&&(t=Ve())),null==t)return null;while(1){if(a=b.value,r=l===b.type||c===b.type?$e(a):0,0===r||r<=e)break;"^"!==a&&".."!==a||r--,z();var i=Be(r);null==i&&N("<expression>",b),ye&&me.push(n),t=m(y.binaryExpression(a,t,i))}return t}function Ve(){var e,t,r,a,o;if(ye&&(r=Ee()),s===b.type)t=b.value,e=Ue(),n.scope&&he(e,de(t));else{if(!Q("("))return null;e=Re(),X(")"),e.inParens=!0}while(1)if(l===b.type)switch(b.value){case"[":ve(r),z(),a=Re(),e=m(y.indexExpression(e,a)),X("]");break;case".":ve(r),z(),o=Ue(),e=m(y.memberExpression(e,".",o));break;case":":ve(r),z(),o=Ue(),e=m(y.memberExpression(e,":",o)),ve(r),e=Ke(e);break;case"(":case"{":ve(r),e=Ke(e);break;default:return e}else{if(i!==b.type)break;ve(r),e=Ke(e)}return e}function Ke(e){if(l===b.type)switch(b.value){case"(":z();var t=[],n=Fe();null!=n&&t.push(n);while(Q(","))n=Re(),t.push(n);return X(")"),m(y.callExpression(e,t));case"{":Se(),z();var r=Ye();return m(y.tableCallExpression(e,r))}else if(i===b.type)return m(y.stringCallExpression(e,Me()));N("function arguments",b)}function Me(){var e,r=i|u|p|f|h,a=b.value,o=b.type;if(ye&&(e=Ee()),o&r){ve(e);var s=t.slice(b.range[0],b.range[1]);return z(),m(y.literal(o,a,s))}return c===o&&"function"===a?(ve(e),z(),n.scope&&ue(),je(null)):Q("{")?(ve(e),Ye()):void 0}function Ge(o,i){return"undefined"===typeof i&&"object"===typeof o&&(i=o,o=void 0),i||(i={}),t=o||"",n=T(a,i),E=0,A=1,_=0,r=t.length,O=[[]],L=0,x=[],me=[],n.comments&&(g=[]),n.wait?e:Je()}function Ze(n){return t+=String(n),r=t.length,e}function Je(e){"undefined"!==typeof e&&Ze(e),t&&"#!"===t.substr(0,2)&&(t=t.replace(/^.*/,(function(e){return e.replace(/./g," ")}))),r=t.length,ye=n.locations||n.ranges,v=U();var a=ge();if(n.comments&&(a.comments=g),n.scope&&(a.globals=x),me.length>0)throw new Error("Location tracking failed. This is most likely a bug in luaparse");return a}be.prototype.complete=function(){n.locations&&(this.loc.end.line=S.line,this.loc.end.column=S.range[1]-S.lineStart),n.ranges&&(this.range[1]=S.range[1])},e.parse=Ge,e.write=Ze,e.end=Je}))}).call(this,n("62e4")(e),n("c8ba"))}}]);
//# sourceMappingURL=chunk-7fe2f548.9cbb076e.js.map