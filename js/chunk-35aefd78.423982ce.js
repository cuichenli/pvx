(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35aefd78"],{"60d7":function(t){t.exports=JSON.parse('["蝶恋花","龙争虎斗","长安城","幽月轮","斗转星移","剑胆琴心","乾坤一掷","唯我独尊","梦江南","绝代天骄","天鹅坪","破阵子","飞龙在天","青梅煮酒"]')},"75ff":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.id?n("div",{staticClass:"v-adventure-single"},[n("TriggerSingle",{attrs:{type:"adventure",id:t.id}})],1):t._e()},i=[],a=n("e419"),r={name:"adventureSingle",props:[],components:{TriggerSingle:a["a"]},data:function(){return{}},computed:{id:function(){return this.$route.params.id||1}},watch:{},methods:{},filters:{},created:function(){},mounted:function(){}},l=r,c=(n("833d"),n("2877")),u=Object(c["a"])(l,s,i,!1,null,null,null);e["default"]=u.exports},7651:function(t,e,n){"use strict";n("c4e1")},"833d":function(t,e,n){"use strict";n("d35d")},b887:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-trigger-item"},[n("div",{staticClass:"m-trigger-reward"},[n("span",{staticClass:"u-title"},[t._v("奖励")]),t._l(2,(function(t,e){return n("span",{key:e,staticClass:"u-img"})}))],2),n("div",{staticClass:"m-trigger-condition"},[n("span",{staticClass:"u-title"},[t._v("触发方式")]),n("ul",{staticClass:"u-content"},t._l(6,(function(e){return n("li",{key:e},[t._v("触发条件")])})),0)])])},i=[],a={name:"item",props:["item"],components:{},data:function(){return{}},computed:{},methods:{},filters:{},created:function(){},mounted:function(){}},r=a,l=n("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);e["a"]=c.exports},c4e1:function(t,e,n){},d35d:function(t,e,n){},e419:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-trigger-single"},[n("div",{staticClass:"m-details"},[n("TriggerImgs",{attrs:{task:t.task}}),n("TriggerItem"),n("TriggerGame",{attrs:{title:t.task.name}})],1),n("detail",{attrs:{id:t.achieve_id,title:"奇遇攻略"}})],1)},i=[],a=(n("b0c0"),n("d3b7"),n("159b"),n("caad"),n("ac1f"),n("5319"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-trigger-img"},[n("el-carousel",{staticClass:"m-imgbox",attrs:{autoplay:!1}},t._l(t.task.list,(function(e,s){return n("el-carousel-item",{key:s},[n("img",{staticClass:"u-img",attrs:{src:t.imgUrl(e)}})])})),1),n("span",{staticClass:"u-name"},[t._v(t._s(t.task.name))])],1)}),r=[],l=n("65c2"),c={name:"img",props:["task"],components:{},data:function(){return{imgRoot:l["__iconPath"]+"pvx/serendipity/images/"}},computed:{},methods:{imgUrl:function(t){return t=this.transformTga(t),this.imgRoot+"/"+t+".png"},transformTga:function(t){return t=t.split("/"),t[t.length-2]+"/"+t[t.length-1]}},filters:{},created:function(){},mounted:function(){}},u=c,o=n("2877"),d=Object(o["a"])(u,a,r,!1,null,null,null),m=d.exports,f=n("b887"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-trigger-game"},[n("el-select",{staticClass:"u-select-meirentu",attrs:{placeholder:"区服",size:"medium"},on:{change:t.getUserList},model:{value:t.server,callback:function(e){t.server=e},expression:"server"}},t._l(t.servers,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1),t.list&&t.list.length>0?n("ul",{staticClass:"m-game-user"},t._l(t.list,(function(e,s){return n("li",{key:s},[n("span",[t._v(t._s(e.name||"匿名"))]),n("span",[t._v(t._s(t._f("wikiDate")(e.dwTime)))])])})),0):n("el-alert",{staticClass:"u-alert",attrs:{title:"无记录",type:"info",center:"",closable:!1}})],1)},_=[],p=n("60d7"),h=n("bed2"),v=n("c1df"),Y=n.n(v);function k(t){return Y()(t).fromNow()}Y.a.locale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY年MM月DD日",LLL:"YYYY年MM月DD日Ah点mm分",LLLL:"YYYY年MM月DD日ddddAh点mm分",l:"YYYY-M-D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(t,e){return 12===t&&(t=0),"凌晨"===e||"早上"===e||"上午"===e?t:"下午"===e||"晚上"===e?t+12:t>=11?t:t+12},meridiem:function(t,e,n){var s=100*t+e;return s<600?"凌晨":s<900?"早上":s<1130?"上午":s<1230?"中午":s<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(t,e){switch(e){case"d":case"D":case"DDD":return t+"日";case"M":return t+"月";case"w":case"W":return t+"周";default:return t}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",ss:"%d秒",m:"1分钟",mm:"%d分钟",h:"1小时",hh:"%d小时",d:"1天",dd:"%d天",M:"1个月",MM:"%d个月",y:"1年",yy:"%d年"},week:{dow:1,doy:4}});var y={name:"game",props:["title"],components:{},data:function(){return{servers:p,server:"长安城",list:[]}},computed:{},methods:{getUserServer:function(){var t=this;Object(h["f"])().then((function(e){t.server=e.data.data.jx3_server}))},getUserList:function(){var t=this,e={server:this.server,serendipity:this.title,start:0,pageIndex:1,pageSize:9};Object(h["g"])(e).then((function(e){t.list=e.data.data.data}))}},filters:{wikiDate:function(t){return k(1e3*t)}},created:function(){this.getUserServer(),this.getUserList()},mounted:function(){}},b=y,D=Object(o["a"])(b,g,_,!1,null,null,null),L=D.exports,T=n("c599"),w={name:"triggerSingle",props:["id","type"],components:{TriggerImgs:m,TriggerItem:f["a"],TriggerGame:L,Detail:T["a"]},data:function(){return{list:[],task:{name:"三山四海",list:[]},content:"",loading:!1,achieve_id:""}},computed:{},watch:{},methods:{getAdventure:function(){var t=this;Object(h["b"])(this.id).then((function(e){t.list=e.data,t.task.name=e.data.szName})),Object(h["c"])(this.id).then((function(e){var n,s=[];null===(n=e.data)||void 0===n||n.forEach((function(t){var e=t.szFramePath;s.includes(e)||s.push(e)}));var i=[];s.forEach((function(e){if(e){var n=e.replace(/\\/g,"/");i.push(t.imgNameTga(n))}})),t.task.list=i})),Object(h["e"])().then((function(e){var n=e.data[t.id];t.achieve_id=n}))},imgNameTga:function(t){return t=t.split(".tga"),t[0]}},filters:{},created:function(){"adventure"==this.type&&this.getAdventure(),console.log(this.id,this.type,this.serendipityJson)},mounted:function(){}},C=w,M=(n("7651"),Object(o["a"])(C,s,i,!1,null,null,null));e["a"]=M.exports}}]);
//# sourceMappingURL=chunk-35aefd78.423982ce.js.map