(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==s[i]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={book:0},s={book:0},r=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-10cc3c10":"62a2656e","chunk-6f32dc86":"bcf9113b","chunk-70b7fbfe":"12a2d5e6","chunk-4f74ddc0":"8981d2cf","chunk-e24deaf8":"edeba469","chunk-36d0ab9b":"caadd385","chunk-480aefd2":"95d3aa32"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-10cc3c10":1,"chunk-6f32dc86":1,"chunk-70b7fbfe":1,"chunk-e24deaf8":1,"chunk-480aefd2":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-10cc3c10":"c27c5aa7","chunk-6f32dc86":"23fddb8b","chunk-70b7fbfe":"d3c9c3c8","chunk-4f74ddc0":"31d6cfe0","chunk-e24deaf8":"73383752","chunk-36d0ab9b":"31d6cfe0","chunk-480aefd2":"b64a6dc7"}[e]+".css",s=c.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var u=r[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],d.parentNode.removeChild(d),n(r)},d.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){o[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}s[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://cdn.jx3box.com/static/pvx/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;r.push([7,"chunk-vendors"]),n()})({"00aa":function(e,t,n){e.exports=n.p+"img/face.4da19f03.svg"},"0b77":function(e,t,n){"use strict";n("e8e1")},"15bb":function(e,t,n){e.exports=n.p+"img/open.0c0bc82c.svg"},"15cb":function(e,t,n){e.exports=n.p+"img/exterior.2f3a40af.svg"},"19b3":function(e,t,n){"use strict";var a=function(){var e=this,t=e._self._c;return t("el-backtop",{style:{color:e.color,backgroundColor:e.bgColor},attrs:{bottom:40,right:20}})},o=[],s={name:"PvxBacktop",props:{bgColor:{type:String,default:"white"},color:{type:String,default:"gray"}}},r=s,i=n("2877"),c=Object(i["a"])(r,a,o,!1,null,null,null);t["a"]=c.exports},"1b19":function(e,t,n){e.exports=n.p+"img/book2.053a3453.svg"},"1b4e":function(e,t,n){e.exports=n.p+"img/setting.7545c5db.svg"},"1db0":function(e,t,n){e.exports=n.p+"img/book.1b060326.svg"},"250e":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("5c96"),s=n.n(o),r=n("6a69"),i=(n("6b30"),n("c5b4"),n("16e5")),c=(n("caad"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("ddb0"),n("8c4f"));a["default"].use(c["a"]);var u=c["a"].prototype.push;c["a"].prototype.push=function(e){return u.call(this,e).catch((function(e){return e}))};var l=function(){return Promise.all([n.e("chunk-10cc3c10"),n.e("chunk-6f32dc86"),n.e("chunk-70b7fbfe")]).then(n.bind(null,"ffda"))},f=function(){return Promise.all([n.e("chunk-4f74ddc0"),n.e("chunk-10cc3c10"),n.e("chunk-e24deaf8"),n.e("chunk-36d0ab9b"),n.e("chunk-480aefd2")]).then(n.bind(null,"e6b1"))},d=[{name:"index",path:"/",component:l},{name:"single",path:"/:id([0-9]+_\\d+)",component:f}],v=new c["a"]({routes:d,base:"/book",mode:"history",scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});v.beforeEach((function(e,t,n){e.fullPath.includes("/#")&&n(e.fullPath.replace("/#","")),n()}));var p=v,g=(n("7db0"),n("a434"),n("e9c4"),n("b64b"),n("159b"),n("2f62"));a["default"].use(g["a"]);var b={state:{recentReadList:JSON.parse(localStorage.getItem("book_readings"))||[],client:location.href.includes("origin")?"origin":"std",faceSingle:{},isCollapse:!1,currentBookType:8},mutations:{SET_RECENT_READ_LIST:function(e,t){var n=e.recentReadList.length;e.recentReadList.find((function(e){return e.idKey===t.idKey}))||(n>=20&&e.recentReadList.splice(n-1,1),e.recentReadList.unshift(t),localStorage.setItem("book_readings",JSON.stringify(e.recentReadList)))},CLEAR_RECENT_READ_LIST:function(e){e.recentReadList=[],localStorage.removeItem("book_readings")},SET_CURRENT_BOOK_TYPE:function(e,t){e.currentBookType=t},toState:function(e,t){Object.keys(t).forEach((function(n){e[n]=t[n]}))}},actions:{setRecentReadList:function(e,t){var n=e.commit;n("SET_RECENT_READ_LIST",t)},clearRecentReadList:function(e){var t=e.commit;t("CLEAR_RECENT_READ_LIST")},setCurrentBookType:function(e,t){var n=e.commit;n("SET_CURRENT_BOOK_TYPE",t)}}},h=new g["a"].Store(b),m=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header"),t("Nav",{on:{statusChange:e.statusChange}}),t("Main",{class:e.navStatusClass,attrs:{withoutRight:!0}},[t("div",{staticClass:"m-main"},[t("router-view")],1),t("PvxBacktop",{attrs:{color:"#fff",bgColor:e.bgColor}})],1)],1)},k=[],x=n("5530"),y=n("7dda"),_=n("19b3"),w={name:"Book",components:{Nav:y["a"],PvxBacktop:_["a"]},data:function(){return{navStatusClass:"is-regular"}},computed:Object(x["a"])(Object(x["a"])({},Object(g["b"])(["currentBookType"])),{},{bgColor:function(){var e="#d16400",t=this.currentBookType;switch(t){case 9:e="#947d2e";break;case 10:e="#194372";break;case 11:e="#324148";break;default:e="#d16400"}return e}}),methods:{statusChange:function(e){this.navStatusClass=e}}},S=w,C=(n("0b77"),n("2877")),E=Object(C["a"])(S,m,k,!1,null,null,null),O=E.exports;a["default"].config.productionTip=!1,a["default"].use(s.a),a["default"].use(r["a"]),i["a"].install(a["default"]),new a["default"]({router:p,store:h,render:function(e){return e(O)}}).$mount("#app")},"2f2a":function(e,t,n){e.exports=n.p+"img/reputation2.339461a5.svg"},"405a":function(e,t,n){e.exports=n.p+"img/gonggao2.97996c82.svg"},"45c5":function(e,t,n){var a={"./adventure.svg":"d2aa","./adventure2.svg":"bc39","./blueprint.svg":"9a9b","./blueprint2.svg":"8553","./body.svg":"9d50","./body2.svg":"dcb1","./book.svg":"1db0","./book2.svg":"1b19","./exam.svg":"8a19","./exam2.svg":"e63c","./exterior.svg":"15cb","./exterior2.svg":"4a6f","./face.svg":"00aa","./face2.svg":"6030","./fold.svg":"c93a","./furniture.svg":"ba14","./furniture2.svg":"f3d3","./gonggao.svg":"66b5","./gonggao2.svg":"405a","./home.svg":"cc6b","./horse.svg":"7628","./horse2.svg":"8505","./left.svg":"f39d","./manufacture.svg":"dfc0","./manufacture2.svg":"fd05","./op.svg":"b5dc","./open.svg":"15bb","./pet.svg":"d928","./pet2.svg":"a245","./price.svg":"a778","./price2.svg":"8814","./reputation.svg":"8301","./reputation2.svg":"2f2a","./setting.svg":"1b4e"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="45c5"},"4a6f":function(e,t,n){e.exports=n.p+"img/exterior2.250bf08c.svg"},"4f0c":function(e,t,n){var a={"./adventure2.svg":"bc39","./blueprint2.svg":"8553","./body2.svg":"dcb1","./book2.svg":"1b19","./exam2.svg":"e63c","./exterior2.svg":"4a6f","./face2.svg":"6030","./furniture2.svg":"f3d3","./gonggao2.svg":"405a","./horse2.svg":"8505","./manufacture2.svg":"fd05","./pet2.svg":"a245","./price2.svg":"8814","./reputation2.svg":"2f2a"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="4f0c"},6030:function(e,t,n){e.exports=n.p+"img/face2.be4cde3e.svg"},"66b5":function(e,t,n){e.exports=n.p+"img/gonggao.e91dab15.svg"},"6fb2":function(e,t,n){"use strict";n("7f5c")},7:function(e,t,n){e.exports=n("250e")},7628:function(e,t,n){e.exports=n.p+"img/horse.2fdf6102.svg"},"7cb7":function(e,t,n){var a={"./bilibili.svg":"175f","./douyu.svg":"b119","./github.svg":"bffd","./huya.svg":"046a","./msg.svg":"aa9d","./weibo.svg":"50b5"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="7cb7"},"7dda":function(e,t,n){"use strict";var a=function(){var e=this,t=e._self._c;return t("aside",{directives:[{name:"show",rawName:"v-show",value:"pvx"!==e.active,expression:"active !== 'pvx'"}],staticClass:"m-pvx-aside",class:e.navStatusClass},[t("div",{class:"m-pvx-box ".concat(e.navStatus?"open":"close"),on:{mouseleave:e.toLeft}},[e.navStatus?[t("div",{staticClass:"u-home-wrap",class:"pvx"===e.active&&"is-active"},[t("a",{staticClass:"u-home",class:e.active,attrs:{href:"/pvx"}},[t("svg",{class:"u-icon",attrs:{width:"21",height:"20",viewBox:"0 0 21 20",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[t("path",{attrs:{d:"M8.833 16.667v-5h3.334v5h4.166V10h2.5L10.5 2.5 2.167 10h2.5v6.667h4.166z"}})])])]),e.clientMenus.length?t("div",{staticClass:"m-pvx-nav"},e._l(e.clientMenus,(function(a){return t("div",{key:a.key,staticClass:"m-nav-group",class:a.key},[a.menuTitle?t("div",{staticClass:"u-menu-title"},[e._v(" "+e._s(a.menuTitle)+" ")]):e._e(),t("div",{staticClass:"m-nav-item-box"},e._l(a.submenus,(function(a){return t("div",{directives:[{name:"show",rawName:"v-show",value:a.status,expression:"item.status"}],key:a.key,staticClass:"m-nav-item",class:[{"is-active":e.active==a.key},a.key]},[t("a",{attrs:{href:a.path,target:a.target||"_self"}},[t("div",{staticClass:"u-nav-icon"},[t("img",{staticClass:"u-icon",attrs:{"svg-inline":"",src:n("45c5")("./".concat(a.key,".svg"))}}),t("img",{staticClass:"u-icon-hover",attrs:{"svg-inline":"",src:n("4f0c")("./".concat(a.key,"2.svg"))}})]),t("span",{staticClass:"u-nav-label"},[e._v(e._s(a.label))])])])})),0)])})),0):e._e()]:t("div",{staticClass:"u-btn",on:{mouseenter:e.toRight}},[t("div",{staticClass:"u-btn-item"},[t("svg",{class:"u-icon",attrs:{width:"12",height:"11",viewBox:"0 0 12 11",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[t("path",{attrs:{d:"M10.667 8.708a.875.875 0 01.084 1.746l-.084.004H1.333a.875.875 0 01-.084-1.746l.084-.004h9.334zm0-4.083a.875.875 0 010 1.75H1.333a.875.875 0 010-1.75h9.334zm0-4.083a.875.875 0 010 1.75H1.333a.875.875 0 010-1.75h9.334z"}})]),e._m(0)])])],2)])},o=[function(){var e=this,t=e._self._c;return t("div",[e._v("菜"),t("br"),e._v("单")])}],s=(n("4de4"),n("d81d"),n("d3b7"),n("2ef0")),r=n("8f80"),i={name:"Nav_V4",props:[],components:{},data:function(){return{menus:r,navStatus:!0}},computed:{isPhone:function(){return document.documentElement.clientWidth<=768},navStatusClass:function(){var e="",t=this.navStatus;return e=t?"is-opened":"is-closed",e},active:function(){var e,t=Object(s["compact"])(null===(e=location.pathname)||void 0===e?void 0:e.split("/")),n=t[0];return"pvg"===n&&(n=t[1]),"homeland"===n&&(n="blueprint"),n},client:function(){return this.$store.state.client},clientMenus:function(){var e=this.menus;return"std"!==this.client&&(e=e.map((function(e){return e.submenus=e.submenus.map((function(e){return!e.isStd&&e})).filter(Boolean),e})).filter(Boolean)),e},storeNavStatus:function(){return~~sessionStorage.getItem("navStatus")||!1}},watch:{navStatusClass:{immediate:!0,handler:function(e){}},navStatus:{handler:function(e){sessionStorage.setItem("navStatus",e)}},storeNavStatus:{immediate:!0,handler:function(e){this.navStatus=e}}},methods:{toLeft:function(){this.navStatus=!1},toRight:function(){this.navStatus=!0}},mounted:function(){this.isPhone&&(this.navStatus=0)}},c=i,u=(n("6fb2"),n("2877")),l=Object(u["a"])(c,a,o,!1,null,null,null);t["a"]=l.exports},"7f5c":function(e,t,n){},8301:function(e,t,n){e.exports=n.p+"img/reputation.b47864d1.svg"},8505:function(e,t,n){e.exports=n.p+"img/horse2.7066f4f3.svg"},8553:function(e,t,n){e.exports=n.p+"img/blueprint2.957b1c0e.svg"},8814:function(e,t,n){e.exports=n.p+"img/price2.5245f231.svg"},"8a19":function(e,t,n){e.exports=n.p+"img/exam.ad5d4471.svg"},"8f80":function(e){e.exports=JSON.parse('[{"key":"share","label":"玩家创作类栏目","menuTitle":"创意","index":"1","submenus":[{"path":"/face","label":"捏脸数据","icon":"el-icon-download","key":"face","status":true},{"path":"/body","label":"体型数据","icon":"el-icon-download","key":"body","status":true,"isStd":true},{"path":"/homeland","label":"家园蓝图","icon":"el-icon-download","key":"blueprint","status":true,"isStd":true}]},{"key":"rare","label":"图鉴百科类栏目","menuTitle":"图鉴","index":"2","submenus":[{"path":"/exterior","label":"外观大全","icon":"el-icon-download","key":"exterior","status":true},{"path":"/adventure","label":"奇遇大全","icon":"el-icon-files","key":"adventure","status":true},{"path":"/pet","label":"宠物大全","icon":"el-icon-files","key":"pet","status":true},{"path":"/horse","label":"坐骑大全","icon":"el-icon-files","key":"horse","status":true},{"path":"/furniture","label":"家具大全","icon":"el-icon-files","key":"furniture","status":true,"isStd":true},{"path":"/reputation","label":"声望大全","icon":"el-icon-sugar","key":"reputation","status":true},{"path":"/book","label":"书籍大全","icon":"el-icon-files","key":"book","status":true},{"path":"/exam","label":"考试大全","icon":"el-icon-files","key":"exam","status":true}]},{"key":"merchants","label":"信息查询类栏目","menuTitle":"信息","index":"3","submenus":[{"path":"/pvg/manufacture","label":"技艺助手","icon":"el-icon-sugar","key":"manufacture","status":true},{"path":"/pvg/price","label":"价格走势","icon":"el-icon-sugar","key":"price","status":true},{"path":"/pvg/gonggao","label":"活动告示","icon":"el-icon-sugar","key":"gonggao","status":true}]}]')},"9a9b":function(e,t,n){e.exports=n.p+"img/blueprint.950c9ae0.svg"},"9d50":function(e,t,n){e.exports=n.p+"img/body.2f3a40af.svg"},a245:function(e,t,n){e.exports=n.p+"img/pet2.5e8bf85f.svg"},a778:function(e,t,n){e.exports=n.p+"img/price.1cb4d4a3.svg"},b5dc:function(e,t,n){e.exports=n.p+"img/op.34236833.svg"},ba14:function(e,t,n){e.exports=n.p+"img/furniture.077e1c3c.svg"},bc39:function(e,t,n){e.exports=n.p+"img/adventure2.af40eb74.svg"},c93a:function(e,t,n){e.exports=n.p+"img/fold.afdbdafe.svg"},cc6b:function(e,t,n){e.exports=n.p+"img/home.a507c480.svg"},d2aa:function(e,t,n){e.exports=n.p+"img/adventure.7492c757.svg"},d928:function(e,t,n){e.exports=n.p+"img/pet.8ed7295e.svg"},dcb1:function(e,t,n){e.exports=n.p+"img/body2.250bf08c.svg"},dfc0:function(e,t,n){e.exports=n.p+"img/manufacture.b1c3b248.svg"},e63c:function(e,t,n){e.exports=n.p+"img/exam2.c33dc8d4.svg"},e8e1:function(e,t,n){},f39d:function(e,t,n){e.exports=n.p+"img/left.4d98d2d0.svg"},f3d3:function(e,t,n){e.exports=n.p+"img/furniture2.af4c208c.svg"},fd05:function(e,t,n){e.exports=n.p+"img/manufacture2.43d1964e.svg"}});
//# sourceMappingURL=book.fa2a0cfe.js.map