(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-329d8353"],{"0cfc":function(t,e,a){"use strict";var i=a("5530"),n=(a("99af"),a("9911"),function(){var t=this,e=t._self._c;return e("a",{directives:[{name:"reporter",rawName:"v-reporter",value:{data:Object(i["a"])({href:"/body/"+t.item.id},t.reporter),caller:"body_index"},expression:"{\n        data: {\n            href: '/body/' + item.id,\n            ...reporter,\n        },\n        caller: 'body_index',\n    }"}],class:["m-body-item m-face-item",{onlyPic:t.onlyPic,noName:t.noName}],attrs:{href:"".concat(t.link,"/").concat(t.item.id),target:"_blank"}},[e("div",{staticClass:"m-img"},[e("el-image",{staticClass:"u-pic",attrs:{src:t.showThumb(t.imgLink),fit:"cover"}},[e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("img",{attrs:{src:a("b43d")}})])]),e("div",{staticClass:"m-mark-left"},[t.item.star?e("i",{staticClass:"u-mark u-mark--star"},[t._v("编辑推荐")]):t._e(),t.item.is_unlimited?e("i",{staticClass:"u-mark u-mark--new"},[t._v("可新建")]):t._e()]),~~t.item.price_type&&t.item.price_count?e("i",{staticClass:"u-mark u-mark--pay"},[t._v("付费")]):t._e()],1),e("div",{staticClass:"m-op"},[e("div",{staticClass:"u-title"},[t._v(t._s(t.item.title))]),e("div",{staticClass:"m-author",on:{click:function(e){return e.stopPropagation(),t.onAuthorClick.apply(null,arguments)}}},[e("img",{staticClass:"u-avatar",attrs:{src:t.showAvatar(t.item.user_avatar),alt:t.author}}),e("span",{staticClass:"u-name"},[t._v(" "+t._s(t.item.author_name||"匿名")+" ")])])])])}),c=[],r=a("85e4"),s={name:"item",props:["item","reporter","onlyPic","noName"],data:function(){return{markmap:{newbie:"热门",advanced:"推荐",recommended:"精选"}}},computed:{author:function(){return this.item.display_name||"匿名"},imgLink:function(){var t;return null===(t=this.item.images)||void 0===t?void 0:t[0]},link:function(){return location.origin+"/body"}},methods:{showThumb:function(t){return Object(r["getThumbnail"])(t,360)},showAvatar:r["showAvatar"],onAuthorClick:function(){this.item.original||window.open(this.item.author_link,"_blank")}}},o=s,l=(a("8774"),a("2877")),u=Object(l["a"])(o,n,c,!1,null,null,null);e["a"]=u.exports},"2d18":function(t,e,a){},"4b06":function(t,e,a){"use strict";a.r(e);var i=a("5530"),n=(a("b0c0"),a("9911"),function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"listRef",staticClass:"p-face-list"},[e("faceTabs",{attrs:{body_types:t.list,link:t.link,active:t.active},on:{change:t.handleBodyTabChange,setActive:t.setActive}}),-1===t.active?t._l(t.list,(function(a,n){return e("div",{key:"l"+n,staticClass:"m-face-box",class:{none:!a.list.length}},[e("CardBannerList",{class:{search:t.tabsData.name},attrs:{count:t.count,minw:200,data:Object(i["a"])(Object(i["a"])({},t.itemData),{},{type:a.value}),items:a.list},on:{"update:load":t.handleLoad},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",[t._v(t._s(a.label+"体型"))])]},proxy:!0},{key:"action",fn:function(){return[e("div",{on:{click:function(e){return t.setActive(a.value)}}},[t._v("查看全部")])]},proxy:!0},{key:"default",fn:function(a){var i=a.item;return[e("bodyItem",{key:i.id,attrs:{item:i,reporter:{aggregate:t.listId(t.list)}}})]}}],null,!0)})],1)})):e("div",{staticClass:"m-face-box"},[e("div",{staticClass:"m-face-title u-type"},[e("div",{staticClass:"u-title"},[t._v(t._s(t.typeName+"体型"))])]),e("div",{staticClass:"m-face-list--all"},t._l(t.subList,(function(a){return e("bodyItem",{key:a.id,attrs:{item:a,reporter:{aggregate:t.listId(t.subList)}}})})),1),e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.hasNextPage,expression:"hasNextPage"}],staticClass:"m-archive-more",attrs:{type:"primary",loading:t.loading,icon:"el-icon-arrow-down"},on:{click:t.appendPage}},[t._v("加载更多")]),e("el-pagination",{staticClass:"m-archive-pages",attrs:{background:"",layout:"total, prev, pager, next, jumper","hide-on-single-page":!0,"page-size":t.per,total:t.total,"current-page":t.page},on:{"current-change":t.changePage,"prev-click":t.changePage,"next-click":t.changePage,"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],1),t.noList?e("el-alert",{staticClass:"m-archive-null",attrs:{title:t.alertTitle,type:"info",center:"","show-icon":""}}):t._e()],2)}),c=[],r=(a("4de4"),a("c740"),a("d81d"),a("a9e3"),a("d3b7"),a("159b"),a("023b")),s=a("f5fb"),o=a("0cfc"),l=a("ed08"),u=a("2ef0"),d=a("67be"),p={name:"face",components:{CardBannerList:r["a"],faceTabs:s["a"],bodyItem:o["a"]},data:function(){return{loading:!1,tabsData:{},active:-1,list:[{label:"全部",list:[],value:-1,client:["std","origin"],page:1,pages:1},{label:"成男",list:[],value:1,client:["std","origin"],page:1,pages:1},{label:"成女",list:[],value:2,client:["std","origin"],page:1,pages:1},{label:"正太",list:[],value:5,client:["std"],page:1,pages:1},{label:"萝莉",list:[],value:6,client:["std","origin"],page:1,pages:1}],page:1,per:14,total:0,count:0,appendMode:!1,link:{data:"/body/bodydata",key:"body"},itemData:{color:"#786CBB",width:"200",height:"368"}}},computed:{client:function(){return this.$store.state.client},params:function(t){var e=t.tabsData;return Object(i["a"])(Object(i["a"])({},e),{},{body_type:this.active,pageSize:this.per,client:this.client})},hasNextPage:function(){var t=this,e=this.list.filter((function(e){return e.value==t.active}))[0].pages;return e>1&&this.page<e},alertTitle:function(){return this.title?"没找到对应的体型，请重新选择条件或关键词搜索":"没有找到相关的体型"},subList:function(){var t=this;return this.active?this.list.filter((function(e){return e.value===t.active}))[0].list:null},typeName:function(){var t=this;return this.list.filter((function(e){return e.value==t.active}))[0].label},noList:function(){return-1===this.active?this.list.every((function(t){return 0===t.list.length})):0===this.subList.length}},watch:{params:{handler:Object(u["debounce"])((function(){this.loadData()}),500),deep:!0},active:function(t){this.per=-1===t?this.count:3*this.count,this.page=1}},methods:{setActive:function(t){this.active=t,document.documentElement.scrollTop=0},getSliders:function(){var t=this;Object(d["h"])("slider",this.client,9).then((function(e){t.slidersList=e.data.data.list||[]}))},loadData:function(){var t=this;this.loading=!0;var e=Object(u["omit"])(this.params,["type"]);if(-1===this.active){var a=this.list.filter((function(t){return t.value}));a.forEach((function(a){e.pageIndex=a.page,e.body_type=a.value,t.loadList(e,a.value)}))}else e.pageIndex=this.page,this.loadList(Object(i["a"])(Object(i["a"])({},e),{},{body_type:this.active}),this.active)},loadList:function(t,e){var a=this,i=this.list.findIndex((function(t){return t.value===e}));this.list[i].pages<t.pageIndex&&-1===this.active&&(t.pageIndex=1),Object(d["c"])(t).then((function(t){var e=t.data.data,n=e.list,c=e.page,r=a.appendMode?Object(u["concat"])(a.list[i].list,n):n;a.list[i].list=r||[],a.list[i].page=c.index||1,a.list[i].pages=c.pageTotal||1,-1!==a.active&&(a.page=c.index||1),a.total=c.total})).finally((function(){a.loading=!1,a.appendMode=!1}))},changePage:function(t){this.page=t,this.loadData()},appendPage:function(){this.appendMode=!0,this.handleLoad(this.active)},handleBodyTabChange:function(t){this.page=1,this.tabsData=t},showCount:function(){var t;if(Object(l["b"])())this.per=8;else{var e=(null===(t=this.$refs.listRef)||void 0===t?void 0:t.clientWidth)-120;this.count=Math.floor(e/(Number(this.itemData.width)+10)),this.per=-1===this.active?this.count:3*this.count}},handleLoad:function(t){var e=this.list.filter((function(e){return e.value===t}))[0].page,a=Object(u["cloneDeep"])(this.params);a.pageSize=this.per,a.pageIndex=e+1,a.body_type=t,this.loadList(a,t)},listId:function(t){return t.map((function(t){return t.id}))}},mounted:function(){this.showCount()}},f=p,h=(a("ffe8"),a("2877")),v=Object(h["a"])(f,n,c,!1,null,null,null);e["default"]=v.exports},"67be":function(t,e,a){"use strict";a.d(e,"e",(function(){return c})),a.d(e,"c",(function(){return n})),a.d(e,"m",(function(){return r})),a.d(e,"a",(function(){return s})),a.d(e,"k",(function(){return o})),a.d(e,"j",(function(){return l})),a.d(e,"l",(function(){return u})),a.d(e,"i",(function(){return d})),a.d(e,"b",(function(){return p})),a.d(e,"f",(function(){return v})),a.d(e,"g",(function(){return h})),a.d(e,"d",(function(){return f})),a.d(e,"h",(function(){return m}));a("99af");var i=a("41cb");function n(t){return Object(i["c"])().get("/api/pvxbody",{params:t})}function c(t){return Object(i["c"])().get("/api/pvxbody/".concat(t))}function r(t){return Object(i["c"])().put("/api/pvxbody/".concat(t,"/manager/set/star"))}function s(t){return Object(i["c"])().put("/api/pvxbody/".concat(t,"/manager/cancel/star"))}function o(t,e){return e?Object(i["c"])().put("/api/pvxbody/".concat(t,"/manager/online")):Object(i["c"])().put("/api/pvxbody/".concat(t,"/online"))}function l(t,e){return e?Object(i["c"])().put("/api/pvxbody/".concat(t,"/manager/offline")):Object(i["c"])().put("/api/pvxbody/".concat(t,"/offline"))}function u(t){var e=t.postType,a=t.PostId,n=t.priceType,c=t.priceCount,r=t.payUserId,s=t.accessUserId;return Object(i["e"])({mute:!0}).post("/api/buy-licence/article/".concat(e,"/").concat(a,"/pay/").concat(n,"/").concat(c,"/from/").concat(r,"/to/").concat(s))}function d(t){return Object(i["e"])().get("/api/buy-licence/result/".concat(t))}function p(t,e){return Object(i["c"])().get("/api/charge_attachment/pvxbody/".concat(t),{params:e})}function f(t,e){return Object(i["c"])().get("/api/charge_attachment/download/pvxbody/".concat(t,"/").concat(e))}function h(t){return Object(i["c"])().get("/api/pvxbody/random-one/with-many-face",{params:t})}function v(t){return Object(i["c"])().get("/api/pvxbody/random",{params:t})}function m(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3?arguments[3]:void 0,c={client:e,type:t,source_type:"body"};return a&&(c.per=a),n&&(c.source_ids=n),Object(i["a"])({mute:!0}).get("/api/cms/news/v2",{params:c})}},8774:function(t,e,a){"use strict";a("2d18")},"8a11":function(t,e,a){},b43d:function(t,e,a){t.exports=a.p+"img/body_null.bb04768a.png"},ffe8:function(t,e,a){"use strict";a("8a11")}}]);
//# sourceMappingURL=chunk-329d8353.a9a36e56.js.map