(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bcbd93a6"],{"20f0":function(t,i,a){"use strict";a("df56")},"84c2":function(t){t.exports=JSON.parse('{"a":{"1":"成男","2":"成女","5":"正太","6":"萝莉"}}')},"8d25":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t._self._c;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"v-face-single"},[i("div",{staticClass:"m-navigation"},[i("el-button",{staticClass:"u-goback",attrs:{size:"medium",plain:""},on:{click:t.goBack}},[t._v("返回列表")]),i("div",{staticClass:"u-right-btn"},[t.isSinglePage&&t.isEditor?i("div",{staticClass:"m-face-btn-box"},[i("div",{staticClass:"m-face-btn-box"},[i("el-button",{staticClass:"u-btn",class:t.isStar?"off":"on",attrs:{type:"danger",icon:t.isStar?"el-icon-star-on":"el-icon-star-off",size:"medium"},on:{click:t.starSet}},[t._v(" "+t._s(t.starText)+" ")]),i("el-button",{staticClass:"u-btn",class:1!==t.status?"top":"bottom",attrs:{type:"danger",icon:1!==t.status?"el-icon-top":"el-icon-bottom",size:"medium"},on:{click:t.statusSet}},[t._v(" "+t._s(t.statusText)+" ")])],1)]):t._e(),i("div",{staticClass:"m-face-btn-box"},[i("a",{attrs:{href:t.publish_link}},[i("el-button",{staticClass:"u-publish u-btn",attrs:{type:"primary",size:"medium",icon:"el-icon-edit"}},[t._v("发布")])],1)])])],1),i("div",{staticClass:"m-header"},[t.post.original?i("Avatar",{staticClass:"u-avatar",attrs:{uid:t.post.user_id,url:t.post.user_avatar,frame:t.post.user_avatar_frame}}):t._e(),i("h2",{staticClass:"u-title"},[t._v(t._s(t.post.title||"无标题"))]),i("div",{staticClass:"u-info"},[i("div",{staticClass:"u-author"},[t._v(" By "),t.post.original?i("a",{staticClass:"u-name",attrs:{href:t.authorLink(t.post.user_id),target:"_blank"}},[t._v(t._s(t.post.display_name))]):t.post.author_link?i("a",{staticClass:"u-name",attrs:{href:t.post.author_link,target:"_blank"}},[t._v(t._s(t.post.author_name))]):i("span",{staticClass:"u-name"},[t._v(t._s(t.post.author_name))]),i("time",{staticClass:"u-time"},[t._v(t._s(t.post.updated_at))]),t.canEdit?i("a",{attrs:{href:t.editLink("face",t.post.id),target:"_blank"}},[i("i",{staticClass:"el-icon-edit-outline u-edit-icon"}),t._v(" 编辑 ")]):t._e()]),i("div",{staticClass:"u-meta"},[t.post.star?i("i",{staticClass:"u-mark"},[t._v("★ 编辑推荐")]):t._e(),t.post.original?i("i",{staticClass:"u-original"},[t._v("原创")]):t._e(),i("i",{staticClass:"u-client",class:t.post.client||"std"},[t._v(t._s(t.showClientLabel(t.post.client)))]),t.post.body_type?i("i",{staticClass:"u-bodytype",class:"u-bodytype-"+t.post.body_type},[t._v(t._s(t.showBodyTypeLabel(t.post.body_type)))]):t._e()])])],1),t.previewSrcList&&t.previewSrcList.length>0?i("div",{staticClass:"m-single-pics m-single-content-box"},[i("el-divider",{attrs:{"content-position":"left"}},[i("i",{staticClass:"el-icon-video-camera"}),t._v(" 预览")]),i("div",{staticClass:"u-bg"},[i("img",{attrs:{src:t.showPic(t.activePic)}}),i("div",{staticClass:"u-mask"})]),i("el-carousel",{staticClass:"m-carousel",attrs:{interval:4e3,type:"card",arrow:"always"},on:{change:t.carouselChange}},t._l(t.previewSrcList,(function(a,s){return i("el-carousel-item",{key:s},[i("div",{staticClass:"m-face-pic"},[i("el-image",{ref:"previewImage",refInFor:!0,staticClass:"u-pic",attrs:{fit:"contain",src:t.showPic(a),"preview-src-list":t.previewSrcList},on:{"!click":function(i){return t.handlePreviewImage(s)}}})],1)])})),1),i("el-divider",{attrs:{"content-position":"left"}},[i("i",{staticClass:"el-icon-collection-tag"}),t._v(" 说明")]),t.post.remark?i("div",{staticClass:"u-desc"},[t._v(t._s(t.post.remark))]):t._e()],1):t._e(),t.post.price_type&&0!=t.post.price_type&&!t.has_buy?i("div",{staticClass:"m-face-pay m-single-content-box"},[i("div",{staticClass:"m-face-pay-info"},[t._v(" 价格： "),i("el-tag",{attrs:{effect:"plain",type:"warning"}},[1==t.post.price_type?i("span",[t._v(t._s(t.post.price_count)+" 盒币")]):t._e(),2==t.post.price_type?i("span",[t._v(t._s(t.post.price_count)+" 金箔")]):t._e()])],1),i("div",{staticClass:"m-face-pay-btn"},[i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-shopping-cart-2",loading:t.payBtnLoading},on:{click:t.facePay}},[t._v("购买")])],1)]):t._e(),t.has_buy&&t.facedata?i("div",{staticClass:"m-single-data m-single-content-box"},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("独家数据分析")]),t.facedata?i("facedata",{attrs:{data:t.facedata}}):t._e()],1):t._e(),t.has_buy&&t.downFileList&&t.downFileList.length>0?i("div",{staticClass:"m-face-files m-single-content-box"},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("原始文件列表")]),i("ul",{staticClass:"m-face-files-list"},t._l(t.downFileList,(function(a){return i("li",{key:a.id},[i("span",{staticClass:"u-label"},[t._v("版本 : "+t._s(a.created_at))]),i("el-button",{staticClass:"u-action",attrs:{icon:"el-icon-download",size:"mini",type:"primary",round:""},on:{click:function(i){return t.getDownUrl(a.uuid)}}},[t._v("下载")])],1)})),0)],1):t._e(),i("div",{staticClass:"m-author m-single-content-box"},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("上传作者")]),i("div",{staticClass:"u-author-info"},[i("Avatar",{staticClass:"u-avatar",attrs:{uid:t.post.user_id,url:t.post.user_avatar,frame:t.post.user_avatar_frame}}),i("a",{attrs:{href:t.authorLink(t.post.user_id),target:"_blank"}},[i("div",{staticClass:"u-name"},[t._v(t._s(t.post.display_name))])])],1)],1),i("div",{staticClass:"m-random-list m-single-content-box"},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("作者其他作品")]),i("div",{staticClass:"u-list"},t._l(t.randomList,(function(a){return i("a",{key:a.id,staticClass:"u-item",attrs:{href:"/face/"+a.id,target:"_blank"}},[i("div",{staticClass:"u-pic"},[a.images?i("el-image",{attrs:{fit:"cover",src:t.showPic(a.images[0])}},[i("div",{staticClass:"u-image-slot",attrs:{slot:"error"},slot:"error"},[i("i",{staticClass:"el-icon-picture-outline"})])]):t._e()],1),i("div",{staticClass:"u-name",attrs:{title:a.title}},[t._v(t._s(a.title||"未命名"))])])})),0)],1),i("Thx",{staticClass:"m-thx m-single-content-box",attrs:{postId:t.id,postType:"face",postTitle:t.post.title||"无标题",userId:t.post.user_id,adminBoxcoinEnable:!0,userBoxcoinEnable:!0}}),i("div",{staticClass:"m-single-content-box"},[i("el-divider",{attrs:{"content-position":"left"}},[t._v("讨论")]),i("Comment",{attrs:{id:t.id,category:"face"}})],1)],1)},e=[],n=(a("caad"),a("b0c0"),a("14d9"),a("ac1f"),a("841c"),a("d3b7"),a("f0d2")),o=a("85e4"),c=a("9616"),r=a("e0bb"),l=a("23d8"),u=a("c9d2"),d=a("84c2"),f=a("65c2"),p=["single"],v={name:"single",components:{facedata:r["a"],Comment:l["a"]},data:function(){return{loading:!1,search:"",post:{},stat:{},has_buy:!1,client_map:f["__clients"],downFileList:[],downloadParams:{pageIndex:1,pageSize:4,total:0},payBtnLoading:!1,randomList:[],carouselActive:0,isEditor:u["a"].isEditor()}},computed:{publish_link:function(){return Object(o["publishLink"])("face")},id:function(){return this.$route.params.id},isAuthor:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.user_id)==u["a"].getInfo().uid||!1},facedata:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.data)||""},previewSrcList:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.images)||[]},canEdit:function(){var t;return u["a"].isEditor()||(null===(t=this.post)||void 0===t?void 0:t.user_id)==u["a"].getInfo().uid},activePic:function(){return this.previewSrcList[this.carouselActive]},isSinglePage:function(){return p.includes(this.$route.name)},status:function(){var t;return(null===(t=this.$store.state.faceSingle)||void 0===t?void 0:t.status)||1},statusText:function(){return 1!==this.status?"上架":"下架"},isStar:function(){var t;return(null===(t=this.$store.state.faceSingle)||void 0===t?void 0:t.star)||0},starText:function(){return this.isStar?"取消精选":"精选"}},watch:{},created:function(){this.getData()},methods:{showAvatar:function(t){return Object(o["showAvatar"])(t,"l")},showThumbnail:function(t){return Object(o["resolveImagePath"])(t)},authorLink:o["authorLink"],editLink:o["editLink"],getFaceList:function(){this.$router.push({name:"list",query:{title:this.search}})},goBack:function(){document.title="捏脸分享 - JX3BOX",this.$router.push({name:"list"})},showClientLabel:function(t){return this.client_map[t]},showBodyTypeLabel:function(t){return d["a"][t]},carouselChange:function(t){this.carouselActive=t},handlePreviewImage:function(t){var i=this;setTimeout((function(){var a=i.$refs.previewImage[t].$children[0];a&&a.reset(),a&&(a.index=t)}),0)},getData:function(){var t=this;this.id&&(this.loading=!0,Object(n["g"])(this.id).then((function(i){t.post=t.$store.state.faceSingle=i.data.data,document.title=t.post.title,t.getAccessoryList(),t.getRandomFaceList()})).catch((function(i){t.loading=!1})),Object(c["a"])("face",this.id).then((function(i){t.stat=i.data})),Object(c["b"])("face",this.id))},downloadPageQuery:function(t){this.downloadParams.pageIndex=t,this.getAccessoryList()},getAccessoryList:function(){var t=this;Object(n["c"])(this.id,this.downloadParams).then((function(i){var a=i.data.data;t.has_buy=a.has_buy,a.has_buy&&(t.downFileList=a.list,t.downloadParams.total=a.page.total)})).finally((function(){t.loading=!1}))},getDownUrl:function(t){Object(n["d"])(this.id,t).then((function(t){var i;window.location.href=null===(i=t.data.data)||void 0===i?void 0:i.url}))},facePay:function(){var t=this,i=this.post,a={postType:"face",PostId:i.id,priceType:i.price_type,priceCount:i.price_count,accessUserId:i.user_id,payUserId:u["a"].getInfo().uid};this.payBtnLoading=!0,Object(n["m"])(a).then((function(i){var a=i.data.data.id,s=setInterval(Object(n["j"])(a).then((function(i){t.getPayFaceStatus(i.data.data.pay_status,s)}),1e3))}))},getPayFaceStatus:function(t,i){1==t?(this.payBtnLoading=!1,clearInterval(i),this.getData(),this.$notify.success({title:"成功",message:"购买成功"})):2==t&&(this.payBtnLoading=!1,clearInterval(i),this.$notify.error({title:"失败",message:"支付失败"}))},getRandomFaceList:function(){var t=this,i=this.post,a={user_id:i.user_id,limit:8};Object(n["h"])(a).then((function(i){i.data.data.list&&i.data.data.list.length>0&&(t.randomList=i.data.data.list)}))},showPic:function(t){return Object(o["resolveImagePath"])(t)},starSet:function(){var t=this;this.$confirm("确认"+(this.isStar?"取消精选":"精选")+"该捏脸？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",beforeClose:function(i,a,s){"confirm"===i?(a.confirmButtonLoading=!0,t.isStar?Object(n["a"])(t.id).then((function(){t.$store.state.faceSingle.star=0,s(),t.$notify({title:"成功",message:"取消精选成功",type:"success"})})).finally((function(){a.confirmButtonLoading=!1})):Object(n["n"])(t.id).then((function(){t.$store.state.faceSingle.star=1,s(),t.$notify({title:"成功",message:"精选成功",type:"success"})})).finally((function(){a.confirmButtonLoading=!1}))):(a.confirmButtonLoading=!1,s())}})},statusSet:function(){var t=this;this.$confirm("确认"+(1==this.status?"下架":"上架")+"该捏脸？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",beforeClose:function(i,a,s){"confirm"===i?(a.confirmButtonLoading=!0,1==t.status?Object(n["k"])(t.id,t.isEditor).then((function(){t.$store.state.faceSingle.status=2,s(),t.$notify({title:"成功",message:"下架成功",type:"success"})})).finally((function(){a.confirmButtonLoading=!1})):Object(n["l"])(t.id,t.isEditor).then((function(){t.$store.state.faceSingle.status=1,s(),t.$notify({title:"成功",message:"上架成功",type:"success"})})).finally((function(){a.confirmButtonLoading=!1}))):(a.confirmButtonLoading=!1,s())}})}}},m=v,h=(a("20f0"),a("2877")),_=Object(h["a"])(m,s,e,!1,null,null,null);i["default"]=_.exports},df56:function(t,i,a){}}]);
//# sourceMappingURL=chunk-bcbd93a6.905932ec.js.map