(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4265b2a6"],{"396d":function(t,i,a){},"635b":function(t,i,a){"use strict";a.d(i,"b",(function(){return s})),a.d(i,"a",(function(){return e})),a.d(i,"c",(function(){return o}));var n=a("41cb");function s(t){var i={type:"share"};return t&&(i=Object.assign(i,t)),Object(n["a"])().get("/api/cms/posts",{params:i})}function e(t){return Object(n["a"])().get("/api/cms/post/".concat(t))}function o(t,i){return Object(n["a"])().put("/api/cms/post/".concat(t,"/setting"),i)}},"8b94":function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"v-share-single"},[a("div",{staticClass:"m-navigation"},[a("el-button",{staticClass:"u-goback",attrs:{size:"medium",icon:"el-icon-arrow-left",plain:""},on:{click:t.goBack}},[t._v("返回列表")])],1),a("div",{staticClass:"m-header"},[a("h2",[t._v(t._s(t.title))]),a("div",{staticClass:"u-info"},[a("div",{staticClass:"u-info-margin"},[a("i",{staticClass:"el-icon-user-solid"}),a("a",{staticClass:"u-name",attrs:{target:"_blank",href:t.author_link}},[t._v(t._s(t.author_name))])]),a("div",{staticClass:"u-info-client u-info-margin"},[a("i",{staticClass:"u-label-client"},[t._v("适用客户端")]),a("span",{staticClass:"u-client",class:t.client},[t._v(t._s(t.showClientLabel(t.client)))])]),a("span",{staticClass:"u-info-margin"},[a("i",{staticClass:"el-icon-date"}),a("time",[t._v(t._s(t.post_date))])]),a("span",{staticClass:"u-info-date u-info-margin"},[a("i",{staticClass:"el-icon-date"}),a("time",[t._v(t._s(t.update_date))])]),a("span",{staticClass:"u-info-margin"},[a("i",{staticClass:"el-icon-view"}),t._v(" "+t._s(t.views)+" ")]),t.canEdit?a("a",{staticClass:"u-info-margin",attrs:{href:t.edit_link}},[a("i",{staticClass:"u-icon-edit el-icon-edit-outline"}),a("span",[t._v("编辑")])]):t._e()]),a("el-divider",{attrs:{"content-position":"left"}},[t._v("JX3BOX")])],1),t.meta.pics&&t.meta.pics.length?a("div",{staticClass:"m-single-pics"},[a("el-carousel",{staticClass:"m-carousel",attrs:{interval:4e3,type:"card",arrow:"always"}},t._l(t.meta.pics,(function(i,n){return a("el-carousel-item",{key:n},[a("div",{staticClass:"m-face-pic",on:{click:function(i){return t.showOriginImage(n)}}},[a("el-image",{staticClass:"u-pic",attrs:{fit:"contain",src:t.showImage(i.url),"preview-src-list":t.previewSrcList}})],1)])})),1)],1):t._e(),a("div",{staticClass:"u-single-author"},[t._v(" 作者："),a("b",[t._v(t._s(t.origin_author))])]),a("div",{staticClass:"m-single-data"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v(" 独家数据分析 ")]),t.facedata?a("facedata",{attrs:{data:t.facedata}}):t._e()],1),a("Thx",{staticClass:"m-thx",attrs:{postId:t.id,postType:t.post_type,userId:t.author_id,adminBoxcoinEnable:!0,userBoxcoinEnable:!0}}),a("div",[a("el-divider",{attrs:{"content-position":"left"}},[t._v("讨论")]),a("Comment",{attrs:{id:t.id,category:t.post_type}})],1)],1)},s=[],e=(a("d81d"),a("d3b7"),a("85e4")),o=a("635b"),r=a("9616"),c=a("e0bb"),u=a("23d8"),l=(a("65c2"),a("e4f1")),d=a("c9d2"),v={name:"single",components:{facedata:c["a"],Comment:u["a"]},data:function(){return{loading:!1,post:{},stat:{},client_map:{std:"正式服",origin:"怀旧服",all:"双端"}}},computed:{id:function(){return this.$route.params.id},author_id:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.post_author)||0},author_name:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.author)||"匿名"},author_link:function(){var t;return Object(e["authorLink"])(null===(t=this.post)||void 0===t?void 0:t.post_author)},edit_link:function(){var t,i;return Object(e["editLink"])(null===(t=this.post)||void 0===t?void 0:t.post_type,null===(i=this.post)||void 0===i?void 0:i.ID)},origin_author:function(){var t,i;return(null===(t=this.post)||void 0===t||null===(i=t.post_meta)||void 0===i?void 0:i.author)||"匿名"},facedata:function(){var t,i;return(null===(t=this.post)||void 0===t||null===(i=t.post_meta)||void 0===i?void 0:i.data)||""},meta:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.post_meta)||""},post_type:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.post_type)||"share"},title:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.post_title)||"无标题"},canEdit:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.post_author)==d["a"].getInfo().uid||d["a"].isEditor()},client:function(){return this.$store.state.client},post_date:function(){var t;return Object(l["a"])(new Date(null===(t=this.post)||void 0===t?void 0:t.post_date))},update_date:function(){var t;return Object(l["a"])(new Date(null===(t=this.post)||void 0===t?void 0:t.post_modified))},views:function(){var t;return(null===(t=this.stat)||void 0===t?void 0:t.views)||"-"},previewSrcList:function(){var t;return null===(t=this.meta)||void 0===t?void 0:t.pics.map((function(t){return Object(e["resolveImagePath"])(t.url)}))}},watch:{},methods:{getData:function(){var t=this;this.id&&(this.loading=!0,Object(o["a"])(this.id).then((function(i){t.post=t.$store.state.post=i.data.data,document.title=t.post.post_title})).finally((function(){t.loading=!1})),Object(r["a"])("share",this.id).then((function(i){t.stat=i.data})),Object(r["b"])("share",this.id))},goBack:function(){this.$router.push({name:"list"})},showClientLabel:function(t){return this.client_map[t]},showImage:function(t){return Object(e["resolveImagePath"])(t)},showOriginImage:function(t){console.log(t)}},created:function(){this.getData()}},p=v,f=(a("ad89"),a("2877")),h=Object(f["a"])(p,n,s,!1,null,null,null);i["default"]=h.exports},ad89:function(t,i,a){"use strict";a("396d")},b64b:function(t,i,a){var n=a("23e7"),s=a("7b0b"),e=a("df75"),o=a("d039"),r=o((function(){e(1)}));n({target:"Object",stat:!0,forced:r},{keys:function(t){return e(s(t))}})},d81d:function(t,i,a){"use strict";var n=a("23e7"),s=a("b727").map,e=a("1dde"),o=e("map");n({target:"Array",proto:!0,forced:!o},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-4265b2a6.50f3b7f8.js.map