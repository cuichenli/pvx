(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83e6ceba"],{"026b":function(t,e,a){},"0295":function(t){t.exports=JSON.parse('{"whole":{"BodyHeight":{"name":"身高","role":null,"tip":null},"HemlineSize":{"name":"裙摆大小","role":"2","tip":"仅对使用新骨骼的外装生效"}},"neck":{"HeadSize":{"name":"头部大小","role":null,"tip":null},"NeckLength":{"name":"脖子长度","role":null,"tip":null},"NeckSize":{"name":"脖子粗细","role":null,"tip":null}},"body":{"ShoulderWidth":{"name":"肩膀宽度","role":null,"tip":null},"ShoulderThick":{"name":"肩膀厚度","role":null,"tip":null},"ChestWidth":{"name":"上身宽度","role":null,"tip":null},"ChestThick":{"name":"上身厚度","role":null,"tip":null},"BreastSize":{"name":"胸部大小","role":"2","tip":null},"BreastAngle":{"name":"胸部角度","role":"2","tip":null},"LoinWidth":{"name":"腰部宽度","role":null,"tip":null},"LoinThick":{"name":"腰部厚度","role":null,"tip":null},"LoinUpDown":{"name":"腰部位置","role":null,"tip":null},"BellyWidth":{"name":"腹部宽度","role":null,"tip":null},"BellyThick":{"name":"腹部厚度","role":null,"tip":null},"HipWidth":{"name":"髋部宽度","role":null,"tip":null},"HipThick":{"name":"髋部厚度","role":null,"tip":null}},"arm":{"ArmSize":{"name":"整体臂长","role":null,"tip":null},"UpperArmSize":{"name":"上臂大小","role":null,"tip":null},"UpperForearmSize":{"name":"前臂上部","role":null,"tip":null},"LowerForearmSize":{"name":"前臂下部","role":null,"tip":null},"HandSize":{"name":"手掌大小","role":null,"tip":null},"FingerLength":{"name":"手指长度","role":null,"tip":null},"FingerSize":{"name":"手指粗细","role":null,"tip":null}},"leg":{"LegSize":{"name":"整体腿长","role":null,"tip":null},"UpperThighSize":{"name":"大腿上部","role":null,"tip":null},"LowerThighSize":{"name":"大腿下部","role":null,"tip":null},"CalfSize":{"name":"小腿大小","role":null,"tip":null},"FootSize":{"name":"脚掌大小","role":null,"tip":null}}}')},"07ac":function(t,e,a){"use strict";var i=a("23e7"),n=a("6f53").values;i({target:"Object",stat:!0},{values:function(t){return n(t)}})},"0cfc":function(t,e,a){"use strict";var i=a("5530"),n=(a("99af"),a("9911"),function(){var t=this,e=t._self._c;return e("a",{directives:[{name:"reporter",rawName:"v-reporter",value:{data:Object(i["a"])({href:"/body/"+t.item.id},t.reporter),caller:"body_index"},expression:"{\n        data: {\n            href: '/body/' + item.id,\n            ...reporter,\n        },\n        caller: 'body_index',\n    }"}],class:["m-body-item m-face-item",{onlyPic:t.onlyPic,noName:t.noName}],attrs:{href:"".concat(t.link,"/").concat(t.item.id),target:"_blank"}},[e("div",{staticClass:"m-img"},[e("el-image",{staticClass:"u-pic",attrs:{src:t.showThumb(t.imgLink),fit:"cover"}},[e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("img",{staticClass:"u-pic",attrs:{src:a("b43d")}})])]),t.item.star?e("i",{staticClass:"u-mark u-mark--star"},[t._v("编辑推荐")]):t._e(),~~t.item.price_type&&t.item.price_count?e("i",{staticClass:"u-mark u-mark--pay"},[t._v("付费")]):t._e()],1),e("div",{staticClass:"m-op"},[e("div",{staticClass:"u-title"},[t._v(t._s(t.item.title))]),e("div",{staticClass:"m-author",on:{click:function(e){return e.stopPropagation(),t.onAuthorClick.apply(null,arguments)}}},[e("img",{staticClass:"u-avatar",attrs:{src:t.showAvatar(t.item.user_avatar),alt:t.author}}),e("span",{staticClass:"u-name"},[t._v(" "+t._s(t.item.author_name||"匿名")+" ")])])])])}),s=[],o=a("85e4"),r={name:"item",props:["item","reporter","onlyPic","noName"],data:function(){return{markmap:{newbie:"热门",advanced:"推荐",recommended:"精选"}}},computed:{author:function(){return this.item.display_name||"匿名"},imgLink:function(){var t;return null===(t=this.item.images)||void 0===t?void 0:t[0]},link:function(){return location.origin+"/body"}},methods:{showThumb:function(t){return Object(o["getThumbnail"])(t,360)},showAvatar:o["showAvatar"],onAuthorClick:function(){this.item.original||window.open(this.item.author_link,"_blank")}}},c=r,l=(a("1352"),a("2877")),u=Object(l["a"])(c,n,s,!1,null,null,null);e["a"]=u.exports},"0dcc":function(t,e,a){"use strict";a("07ac"),a("b0c0");var i=function(){var t=this,e=t._self._c;return t.ready?e("div",{staticClass:"c-facedat"},[e("el-tabs",{staticClass:"c-facedat-preivew",attrs:{type:t.tab_type},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(Object.values(t.group_tabs),(function(a){return e("el-tab-pane",{key:a.value,attrs:{label:a.label,name:a.value}},[e("div",{staticClass:"c-facedat-group"},[e("ul",{staticClass:"u-list"},t._l(t.currentGroup,(function(a,i){return e("li",{key:i},[e("label",[t._v(t._s(a.name))]),e("span",[t._v(t._s(a.value))]),e("el-slider",{staticClass:"u-range",attrs:{min:a.min,max:a.max,disabled:t.lock},model:{value:t.body_data.tBody[a.key],callback:function(e){t.$set(t.body_data.tBody,a.key,e)},expression:"body_data.tBody[item.key]"}})],1)})),0)])])})),1),e("div",{staticClass:"c-facedat-btns"},[e("el-button",{staticClass:"u-btn",attrs:{type:"primary",disabled:!t.body_data,icon:"el-icon-receiving"},on:{click:t.buildData}},[t._v("导出正式服")])],1)],1):t._e()},n=[],s=a("5530"),o=(a("d81d"),a("4de4"),a("d3b7"),a("b64b"),a("25f0"),a("2ef0")),r=a.n(o),c=a("d4ae"),l=a("21a6"),u=a("aec7"),d=a("0295"),p=a("fb5f"),m=a("bb9e"),f={name:"Bodydat",props:["data","lock","tab_type"],data:function(){return{active:"whole",body_data:"",body_type:"",group_tabs:u,group_fields:d,field_range:m,types:p.bodyMap}},computed:{ready:function(){return!!this.body_data},currentFieldRanges:function(){return m[this.types[this.body_type].value]},currentGroupFields:function(){return this.group_fields[this.active]},currentGroup:function(){var t=this;return Object.keys(this.group_fields[this.active]).filter((function(e){return t.currentFieldRanges[e].use_for_body_type})).map((function(e){return Object(s["a"])(Object(s["a"])(Object(s["a"])({key:e},t.currentGroupFields[e]),t.currentFieldRanges[e]),{},{value:t.body_data.tBody[e]})}))}},watch:{data:{immediate:!0,deep:!0,handler:function(){this.render()}}},methods:{render:function(){if(!this.data)return this.body_data="",void(this.body_type="");try{var t=JSON.parse(this.data);this.body_type=t.nRoleType.toString(),this.body_data=t}catch(e){this.body_data="",this.body_type="",this.$notify.error({title:"错误",message:"体型数据无法解析"})}},buildData:function(){if(this.body_data){var t=Object(c["a"])(r.a.cloneDeep(this.body_data)),e=new Blob([t],{type:"application/dat;charset=utf-8"});Object(l["saveAs"])(e,Date.now()+".dat")}}},mounted:function(){}},v=f,b=(a("0ff5"),a("2877")),h=Object(b["a"])(v,i,n,!1,null,null,null);e["a"]=h.exports},"0ff5":function(t,e,a){"use strict";a("5c27")},1352:function(t,e,a){"use strict";a("026b")},"51eb":function(t,e,a){"use strict";var i=a("825a"),n=a("485a"),s=TypeError;t.exports=function(t){if(i(this),"string"===t||"default"===t)t="string";else if("number"!==t)throw s("Incorrect hint");return n(this,t)}},"5c27":function(t,e,a){},"66bb":function(t,e,a){"use strict";a("9990")},"67be":function(t,e,a){"use strict";a.d(e,"e",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"m",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"k",(function(){return c})),a.d(e,"j",(function(){return l})),a.d(e,"l",(function(){return u})),a.d(e,"i",(function(){return d})),a.d(e,"b",(function(){return p})),a.d(e,"f",(function(){return v})),a.d(e,"g",(function(){return f})),a.d(e,"d",(function(){return m})),a.d(e,"h",(function(){return b}));a("99af");var i=a("41cb");function n(t){return Object(i["c"])().get("/api/pvxbody",{params:t})}function s(t){return Object(i["c"])().get("/api/pvxbody/".concat(t))}function o(t){return Object(i["c"])().put("/api/pvxbody/".concat(t,"/manager/set/star"))}function r(t){return Object(i["c"])().put("/api/pvxbody/".concat(t,"/manager/cancel/star"))}function c(t,e){return e?Object(i["c"])().put("/api/pvxbody/".concat(t,"/manager/online")):Object(i["c"])().put("/api/pvxbody/".concat(t,"/online"))}function l(t,e){return e?Object(i["c"])().put("/api/pvxbody/".concat(t,"/manager/offline")):Object(i["c"])().put("/api/pvxbody/".concat(t,"/offline"))}function u(t){var e=t.postType,a=t.PostId,n=t.priceType,s=t.priceCount,o=t.payUserId,r=t.accessUserId;return Object(i["e"])({mute:!0}).post("/api/buy-licence/article/".concat(e,"/").concat(a,"/pay/").concat(n,"/").concat(s,"/from/").concat(o,"/to/").concat(r))}function d(t){return Object(i["e"])().get("/api/buy-licence/result/".concat(t))}function p(t,e){return Object(i["c"])().get("/api/charge_attachment/pvxbody/".concat(t),{params:e})}function m(t,e){return Object(i["c"])().get("/api/charge_attachment/download/pvxbody/".concat(t,"/").concat(e))}function f(t){return Object(i["c"])().get("/api/pvxbody/random-one/with-many-face",{params:t})}function v(t){return Object(i["c"])().get("/api/pvxbody/random",{params:t})}function b(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3?arguments[3]:void 0,s={client:e,type:t,source_type:"body"};return a&&(s.per=a),n&&(s.source_ids=n),Object(i["a"])({mute:!0}).get("/api/cms/news/v2",{params:s})}},8172:function(t,e,a){"use strict";var i=a("e065"),n=a("57b9");i("toPrimitive"),n()},"84c2":function(t){t.exports=JSON.parse('{"a":{"1":"成男","2":"成女","5":"正太","6":"萝莉"}}')},9990:function(t,e,a){},a0b6:function(t,e,a){t.exports=a.p+"img/box.44b43359.svg"},a15b:function(t,e,a){"use strict";var i=a("23e7"),n=a("e330"),s=a("44ad"),o=a("fc6a"),r=a("a640"),c=n([].join),l=s!==Object,u=l||!r("join",",");i({target:"Array",proto:!0,forced:u},{join:function(t){return c(o(this),void 0===t?",":t)}})},a50d:function(t,e,a){"use strict";a("e32e")},ade3:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var i=a("53ca");a("8172"),a("efec"),a("a4d3"),a("e01a"),a("d3b7"),a("d9e2"),a("a9e3");function n(t,e){if("object"!==Object(i["a"])(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!==Object(i["a"])(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function s(t){var e=n(t,"string");return"symbol"===Object(i["a"])(e)?e:String(e)}function o(t,e,a){return e=s(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},aec7:function(t){t.exports=JSON.parse('{"1":{"value":"whole","label":"整体"},"2":{"value":"neck","label":"头颈"},"3":{"value":"body","label":"躯干"},"4":{"value":"arm","label":"上肢"},"5":{"value":"leg","label":"下肢"}}')},afe2:function(t,e,a){"use strict";a.r(e);a("b0c0");var i=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"p-face-single"},[e("div",{staticClass:"m-navigation"},[e("el-button",{staticClass:"u-goback",attrs:{size:"medium",plain:""},on:{click:t.goBack}},[t._v("返回列表")]),e("div",{staticClass:"u-right-btn"},[t.isSinglePage&&t.isEditor?e("div",{staticClass:"u-op m-face-btn-box"},[e("div",{staticClass:"m-face-btn-box"},[e("el-button",{staticClass:"u-btn",class:t.isStar?"off":"on",attrs:{type:"danger",icon:t.isStar?"el-icon-star-on":"el-icon-star-off",size:"medium"},on:{click:t.starSet}},[t._v(" "+t._s(t.starText)+" ")]),e("el-button",{staticClass:"u-btn",class:1!==t.status?"top":"bottom",attrs:{type:"danger",icon:1!==t.status?"el-icon-top":"el-icon-bottom",size:"medium"},on:{click:t.statusSet}},[t._v(" "+t._s(t.statusText)+" ")])],1)]):t._e(),e("a",{staticClass:"m-face-btn-box",attrs:{href:t.publish_link}},[e("el-button",{staticClass:"u-publish u-btn",attrs:{type:"primary",size:"medium",icon:"el-icon-edit"}},[t._v(" 发布 ")])],1)])],1),e("div",{staticClass:"m-header"},[e("div",{staticClass:"m-avatar"},[t.post.original?e("Avatar",{staticClass:"u-avatar",attrs:{uid:t.post.user_id,url:t.post.user_avatar,frame:t.post.user_avatar_frame}}):t._e()],1),e("div",{staticClass:"m-header-info"},[e("h2",[t._v(t._s(t.post.title||"无标题"))]),e("div",{staticClass:"u-author"},[t._v(" By "),t.post.original?e("a",{staticClass:"u-name",attrs:{href:t.authorLink(t.post.user_id),target:"_blank"}},[t._v(t._s(t.post.display_name))]):t.post.author_link?e("a",{staticClass:"u-name",attrs:{href:t.post.author_link,target:"_blank"}},[t._v(t._s(t.post.author_name))]):e("span",{staticClass:"u-name"},[t._v(t._s(t.post.author_name))]),e("time",{staticClass:"u-time"},[t._v(t._s(t.post.updated_at))]),t.canEdit?e("a",{attrs:{href:t.editLink("face",t.post.id),target:"_blank"}},[e("i",{staticClass:"el-icon-edit-outline u-edit-icon"}),t._v(" 编辑 ")]):t._e()]),e("div",{staticClass:"u-meta"},[t.post.star?e("i",{staticClass:"u-mark"},[t._v("★ 编辑推荐")]):t._e(),t.post.is_fr?e("i",{staticClass:"u-fr"},[t._v("首发")]):t._e(),t.post.original?e("i",{staticClass:"u-original"},[t._v("原创")]):t._e(),e("i",{staticClass:"u-client",class:t.post.client||"std"},[t._v(t._s(t.showClientLabel(t.post.client)))]),t.post.body_type?e("i",{staticClass:"u-bodytype",class:"u-bodytype-"+t.post.body_type},[t._v(t._s(t.showBodyTypeLabel(t.post.body_type)))]):t._e()])]),t.topicText?e("div",{staticClass:"m-topic"},[t._v(t._s(t.topicText))]):t._e()]),e("div",{staticClass:"m-face-content"},[t.showCarousel?e("div",{staticClass:"m-single-pics m-single-content-box"},[e("div",{staticClass:"u-bg"},[e("img",{attrs:{src:t.showPic(t.activePic)}}),e("div",{staticClass:"u-mask"})]),e("el-carousel",{staticClass:"m-carousel",attrs:{interval:4e3,type:"card",arrow:"always"},on:{change:t.carouselChange}},t._l(t.previewSrcList,(function(a,i){return e("el-carousel-item",{key:i},[e("div",{staticClass:"m-face-pic"},[e("el-image",{ref:"previewImage",refInFor:!0,staticClass:"u-pic",attrs:{fit:"contain",src:t.showPic(a),"preview-src-list":t.resolveImageArr(t.previewSrcList)},on:{"!click":function(e){return t.handlePreviewImage(i)}}})],1)])})),1)],1):t._e(),t.post.price_type&&0!=t.post.price_type&&!t.has_buy?e("div",{staticClass:"m-face-pay"},[e("div",{staticClass:"m-face-pay-info"},[e("span",{staticClass:"u-text"},[t._v("该体型数据售价：")]),e("el-tag",{attrs:{effect:"dark",color:"#ffad31",round:""}},[1==t.post.price_type?e("span",[t._v(t._s(t.post.price_count)+" 盒币")]):t._e(),2==t.post.price_type?e("span",[t._v(t._s(t.post.price_count)+" 金箔")]):t._e()]),e("el-button",{staticClass:"u-btn",attrs:{type:"primary",size:"small",icon:"el-icon-shopping-cart-2",loading:t.payBtnLoading},on:{click:t.facePay}},[t._v(" 购买 ")])],1),e("img",{staticClass:"u-box-img",attrs:{src:a("a0b6")}})]):t._e()]),t.post.remark?e("div",{staticClass:"m-desc"},[e("el-divider",{attrs:{"content-position":"left"}},[e("i",{staticClass:"el-icon-collection-tag"}),t._v(" 说明")]),t.post.remark?e("div",{staticClass:"u-desc"},[t._v(t._s(t.post.remark))]):t._e()],1):t._e(),t.has_buy&&t.bodydata?e("div",{staticClass:"m-single-data m-single-content-box"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("独家数据分析")]),t.bodydata?e("Bodydat",{attrs:{data:t.bodydata}}):t._e()],1):t._e(),t.has_buy&&t.downFileList&&t.downFileList.length>0?e("div",{staticClass:"m-face-files m-single-content-box"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("原始文件列表")]),e("ul",{staticClass:"m-face-files-list"},t._l(t.downFileList,(function(a){return e("li",{key:a.id},[e("div",[e("span",{staticClass:"u-label"},[t._v("名称: "),e("em",[t._v(t._s(a.name))])]),e("span",{staticClass:"u-label"},[t._v("版本 : "),e("em",[t._v(t._s(a.created_at))])]),a.describe?e("span",{staticClass:"u-label"},[t._v("备注 ： "),e("em",[t._v(t._s(a.describe))])]):t._e()]),e("el-button",{staticClass:"u-action",attrs:{icon:"el-icon-download",size:"mini",type:"primary",round:""},on:{click:function(e){return t.getDownUrl(a.uuid)}}},[t._v("下载")])],1)})),0)],1):t._e(),e("div",{staticClass:"m-author m-single-content-box"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("上传作者")]),e("div",{staticClass:"u-author-info"},[e("Avatar",{staticClass:"u-avatar",attrs:{uid:t.post.user_id,url:t.post.user_avatar,frame:t.post.user_avatar_frame}}),e("a",{attrs:{href:t.authorLink(t.post.user_id),target:"_blank"}},[e("div",{staticClass:"u-name"},[t._v(t._s(t.post.display_name))])])],1)],1),e("div",{staticClass:"m-random-list m-single-content-box"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("作者其他作品")]),t.randomList.length?e("div",{staticClass:"u-list"},t._l(t.randomList,(function(t){return e("bodyItem",{key:t.id,attrs:{noName:!0,item:t}})})),1):e("span",{staticClass:"u-list-null"},[t._v("· 作者没有更多作品了 ·")])],1),e("div",{staticClass:"m-pvxbody-list m-single-content-box"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("体型搭配 & 其他脸型数据")]),t.faceList.length?e("div",{staticClass:"u-list"},[e("bodyItem",{attrs:{onlyPic:!0,item:t.pvxbody}}),t._l(t.faceList,(function(t){return e("faceItem",{key:t.id,attrs:{item:t,noName:!0}})}))],2):e("span",{staticClass:"u-list-null"},[t._v("· 作者没有关联的作品 ·")])],1),e("Thx",{staticClass:"m-thx m-single-content-box",attrs:{postId:t.id,postType:"pvxbody",postTitle:t.post.title||"无标题",userId:t.post.user_id,adminBoxcoinEnable:!0,userBoxcoinEnable:!0,client:t.post.client}}),e("div",{staticClass:"m-single-content-box"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("讨论")]),e("Comment",{attrs:{id:t.id,category:"pvxbody"}})],1)],1)},n=[],s=(a("b64b"),a("caad"),a("14d9"),a("ac1f"),a("841c"),a("d3b7"),a("4e82"),a("d81d"),a("67be")),o=a("85e4"),r=a("9616"),c=a("23d8"),l=a("c9d2"),u=a("84c2"),d=a("65c2"),p=a("5a0c"),m=a.n(p),f=a("0dcc"),v=a("0cfc"),b=a("cb31"),h=["single"],_={name:"single",components:{Comment:c["a"],faceItem:b["a"],Bodydat:f["a"],bodyItem:v["a"]},data:function(){return{loading:!1,search:"",post:{},stat:{},has_buy:!1,client_map:d["__clients"],downFileList:[],downloadParams:{pageIndex:1,pageSize:10,total:0},payBtnLoading:!1,randomList:[],carouselActive:0,isEditor:l["a"].isEditor(),topic_info:null,pvxbody:{},faceList:[]}},computed:{publish_link:function(){return Object(o["publishLink"])("body")},id:function(){return~~this.$route.params.id},isAuthor:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.user_id)==l["a"].getInfo().uid||!1},bodydata:function(){var t,e=(null===(t=this.post)||void 0===t?void 0:t.data)||"";return e.indexOf("\\")>-1?JSON.parse(e):e},previewSrcList:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.images)||[]},canEdit:function(){var t;return l["a"].isEditor()||(null===(t=this.post)||void 0===t?void 0:t.user_id)==l["a"].getInfo().uid},activePic:function(){return this.previewSrcList[this.carouselActive]},isSinglePage:function(){return h.includes(this.$route.name)},status:function(){var t;return(null===(t=this.$store.state.faceSingle)||void 0===t?void 0:t.status)||1},statusText:function(){return 1!==this.status?"上架":"下架"},isStar:function(){var t;return(null===(t=this.$store.state.faceSingle)||void 0===t?void 0:t.star)||0},starText:function(){return this.isStar?"取消精选":"精选"},topicText:function(){return this.topic_info?"".concat(m()(this.topic_info.created_at).format("YYYY年MM月DD日"),"荣登头条榜"):""},showCarousel:function(){var t;return(null===(t=this.previewSrcList)||void 0===t?void 0:t.length)>0||!this.has_buy}},created:function(){this.getData()},methods:{showAvatar:function(t){return Object(o["showAvatar"])(t,"l")},showThumbnail:function(t){return Object(o["resolveImagePath"])(t)},authorLink:o["authorLink"],editLink:o["editLink"],getFaceList:function(){this.$router.push({name:"list",query:{title:this.search}})},goBack:function(){document.title="体型分享 - JX3BOX",this.$router.push({name:"list"})},showClientLabel:function(t){return this.client_map[t]},showBodyTypeLabel:function(t){return u["a"][t]},carouselChange:function(t){this.carouselActive=t},handlePreviewImage:function(t){var e=this;setTimeout((function(){var a=e.$refs.previewImage[t].$children[0];a&&a.reset(),a&&(a.index=t)}),0)},getData:function(){var t=this;this.id&&(this.loading=!0,Object(s["e"])(this.id).then((function(e){t.post=t.$store.state.faceSingle=e.data.data,document.title=t.post.title,t.getAccessoryList(),t.getRandomFaceList(),t.getRandomList(),t.getSliders()})).catch((function(e){t.loading=!1})),Object(r["a"])("pvxbody",this.id).then((function(e){t.stat=e.data})),Object(r["b"])("pvxbody",this.id))},downloadPageQuery:function(t){this.downloadParams.pageIndex=t,this.getAccessoryList()},getAccessoryList:function(){var t=this;Object(s["b"])(this.id,this.downloadParams).then((function(e){var a=e.data.data,i=a.page,n=a.list,s=a.has_buy;t.has_buy=s||!1,s&&(t.downFileList=n,t.downloadParams.total=i.total)})).finally((function(){t.loading=!1}))},getDownUrl:function(t){Object(s["d"])(this.id,t).then((function(t){var e;window.location.href=Object(o["resolveImagePath"])(null===(e=t.data.data)||void 0===e?void 0:e.url)}))},facePay:function(){var t=this;l["a"].isLogin()?this.$confirm("确认购买此体型？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=t.post,a={postType:"pvxbody",PostId:e.id,priceType:e.price_type,priceCount:e.price_count,accessUserId:e.user_id,payUserId:l["a"].getInfo().uid};t.payBtnLoading=!0,Object(s["l"])(a).then((function(e){var a=e.data.data.id,i=setInterval(Object(s["i"])(a).then((function(e){t.getPayFaceStatus(e.data.data.pay_status,i)}),1e3))})).catch((function(e){var a,i;40019==(null===(a=e.response)||void 0===a||null===(i=a.data)||void 0===i?void 0:i.code)&&t.$confirm("余额不足，是否前往充值？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){window.open("/vip/cny","_blank")})).catch((function(){}))})).finally((function(){t.payBtnLoading=!1}))})).catch((function(){})):l["a"].toLogin()},getPayFaceStatus:function(t,e){1==t?(this.payBtnLoading=!1,clearInterval(e),this.getData(),this.$notify.success({title:"成功",message:"购买成功"})):2==t&&(this.payBtnLoading=!1,clearInterval(e),this.$notify.error({title:"失败",message:"支付失败"}))},getRandomFaceList:function(){var t=this,e=this.post.user_id;Object(s["f"])({user_id:e,limit:8}).then((function(e){e.data.data.list&&e.data.data.list.length>0&&(t.randomList=e.data.data.list)}))},getRandomList:function(){var t=this,e=this.post,a=e.body_type,i=e.client,n=e.user_id;Object(s["g"])({body_type:a,client:i,user_id:n,limit:8}).then((function(e){var a=e.data.data,i=a.pvxbody,n=a.faceList;t.pvxbody=i,t.faceList=n||[]}))},showPic:function(t){return Object(o["resolveImagePath"])(t)},starSet:function(){var t=this;this.$confirm("确认"+(this.isStar?"取消精选":"精选")+"该捏脸？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",beforeClose:function(e,a,i){"confirm"===e?(a.confirmButtonLoading=!0,t.isStar?Object(s["a"])(t.id).then((function(){t.$store.state.faceSingle.star=0,i(),t.$notify({title:"成功",message:"取消精选成功",type:"success"})})).finally((function(){a.confirmButtonLoading=!1})):Object(s["m"])(t.id).then((function(){t.$store.state.faceSingle.star=1,i(),t.$notify({title:"成功",message:"精选成功",type:"success"})})).finally((function(){a.confirmButtonLoading=!1}))):(a.confirmButtonLoading=!1,i())}})},statusSet:function(){var t=this;this.$confirm("确认"+(1==this.status?"下架":"上架")+"该捏脸？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",beforeClose:function(e,a,i){"confirm"===e?(a.confirmButtonLoading=!0,1==t.status?Object(s["j"])(t.id,t.isEditor).then((function(){t.$store.state.faceSingle.status=2,i(),t.$notify({title:"成功",message:"下架成功",type:"success"})})).finally((function(){a.confirmButtonLoading=!1})):Object(s["k"])(t.id,t.isEditor).then((function(){t.$store.state.faceSingle.status=1,i(),t.$notify({title:"成功",message:"上架成功",type:"success"})})).finally((function(){a.confirmButtonLoading=!1}))):(a.confirmButtonLoading=!1,i())}})},getSliders:function(){var t=this;Object(s["h"])("slider",this.post.client,10,this.post.id).then((function(e){var a;if(null!==(a=e.data.data)&&void 0!==a&&a.list){var i=e.data.data.list.sort((function(t,e){return m()(e.created_at).isAfter(m()(t.created_at))?1:-1}));t.topic_info=i[0]}}))},resolveImageArr:function(t){return t.map((function(t){return Object(o["resolveImagePath"])(t)}))}}},y=_,g=(a("a50d"),a("2877")),C=Object(g["a"])(y,i,n,!1,null,null,null);e["default"]=C.exports},b43d:function(t,e,a){t.exports=a.p+"img/body_null.bb04768a.png"},cb31:function(t,e,a){"use strict";var i=a("5530"),n=(a("99af"),a("9911"),function(){var t=this,e=t._self._c;return e("a",{directives:[{name:"reporter",rawName:"v-reporter",value:{data:Object(i["a"])({href:"/face/"+t.item.id},t.reporter),caller:"face_index"},expression:"{ data: { href: '/face/' + item.id, ...reporter }, caller: 'face_index' }"}],class:["m-face-item",{noName:t.noName}],attrs:{href:"".concat(t.link,"/").concat(t.item.id),target:"_blank"}},[e("div",{staticClass:"m-img"},[e("img",{staticClass:"u-pic",attrs:{src:t.showThumb(t.imgLink),loading:"lazy"}}),t.item.star?e("i",{staticClass:"u-mark u-mark--star"},[t._v("编辑推荐")]):t._e(),~~t.item.price_type&&t.item.price_count?e("i",{staticClass:"u-mark u-mark--pay"},[t._v("付费")]):t._e()]),e("div",{staticClass:"m-op"},[e("div",{staticClass:"u-title"},[t._v(t._s(t.item.title))]),e("div",{staticClass:"m-author",on:{click:function(e){return e.stopPropagation(),t.onAuthorClick.apply(null,arguments)}}},[e("img",{staticClass:"u-avatar",attrs:{src:t.showAvatar(t.item.user_avatar),alt:t.author}}),e("span",{staticClass:"u-name"},[t._v(" "+t._s(t.item.author_name||"匿名")+" ")])])])])}),s=[],o=(a("caad"),a("2532"),a("65c2")),r=a("85e4"),c={name:"faceItem",props:["item","reporter","noName"],data:function(){return{markmap:{newbie:"热门",advanced:"推荐",recommended:"精选"}}},computed:{author:function(){return this.item.display_name||"匿名"},imgLink:function(){var t;return(null===(t=this.item.images)||void 0===t?void 0:t[0])||o["__imgPath"]+"image/face/null2.png"},client:function(){return location.href.includes("origin")?"origin":"std"},link:function(){return location.origin+"/face"}},methods:{showThumb:function(t){return Object(r["getThumbnail"])(t,360)},showAvatar:r["showAvatar"],onAuthorClick:function(){this.item.original||window.open(this.item.author_link,"_blank")}}},l=c,u=(a("66bb"),a("2877")),d=Object(u["a"])(l,n,s,!1,null,null,null);e["a"]=d.exports},e32e:function(t,e,a){},efec:function(t,e,a){"use strict";var i=a("1a2d"),n=a("cb2d"),s=a("51eb"),o=a("b622"),r=o("toPrimitive"),c=Date.prototype;i(c,r)||n(c,r,s)}}]);
//# sourceMappingURL=chunk-83e6ceba.dafd93e9.js.map