(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9aae45c"],{4219:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-calendar-single"},[a("section",{staticClass:"m-actions"},[a("el-button",{attrs:{icon:"el-icon-arrow-left",size:"small"},on:{click:t.goBack}},[t._v("返回")]),t.isEditor?a("el-button",{attrs:{icon:"el-icon-setting",type:"primary",size:"small"},on:{click:function(a){return t.manage(!0)}}},[t._v(" 管理 ")]):t.isCreator?a("el-button",{attrs:{icon:"el-icon-edit",type:"primary",size:"small"},on:{click:function(a){return t.manage(!1)}}},[t._v(" 编辑 ")]):t._e()],1),a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.todayLoading,expression:"todayLoading"}],staticClass:"m-single-block m-today"},[a("header",{staticClass:"m-single-title m-history-header"},[a("i",{class:1==t.today.type?"el-icon-collection-tag":"el-icon-s-flag"}),t._v(t._s(1==t.today.type?"事件":"活动")+"记录 ")]),a("div",{staticClass:"m-today-content"},[a("i",{staticClass:"u-client",class:t.today.client},[t._v(t._s("std"==t.today.client?"正式服":"怀旧服"))]),t._v(t._s(t.today.desc)+" ")]),t.today&&t.today.user_info?a("div",{staticClass:"m-today-meta"},[a("span",{staticClass:"u-user"},[a("img",{attrs:{src:t.showAvatar(t.today.user_info.user_avatar),width:"24",height:"24",alt:""}}),a("a",{attrs:{href:t.authorLink(t.today.user_id),target:"_blank"}},[t._v(t._s(t.today.user_info.display_name))])]),a("span",{staticClass:"u-create-time",attrs:{title:"创建时间"}},[a("i",{staticClass:"el-icon-date"}),a("time",[t._v(t._s(t.showTime(t.today.created_at)))])])]):t._e()]),a("div",{staticClass:"m-single-block m-reference"},[t._m(0),t.references&&t.references.length?t._l(t.references,(function(e,i){return a("div",{key:i,staticClass:"m-reference-item"},[e.url?a("a",{staticClass:"u-item u-link",attrs:{href:e.url,target:"_blank"}},[a("label",{staticClass:"u-index"},[t._v(t._s(i+1)+".")]),a("span",{staticClass:"u-label"},[t._v(t._s(e.label)+" "),a("i",{staticClass:"el-icon-link"})])]):a("span",{staticClass:"u-item"},[a("label",{staticClass:"u-index"},[t._v(t._s(i+1)+".")]),a("span",{staticClass:"u-label"},[t._v(t._s(e.label))])])])})):a("div",{staticClass:"u-null"},[a("i",{staticClass:"el-icon-warning-outline"}),t._v("暂时没有任何参考资料")])],2),a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.historyLoading,expression:"historyLoading"}],staticClass:"m-single-block m-history"},[t._m(1),a("div",{staticClass:"m-history-content"},[a("el-timeline",t._l(t.timelineKeys,(function(e){return a("el-timeline-item",{key:e,attrs:{timestamp:String(e),placement:"top"}},t._l(t.timelineData[e],(function(t){return a("div",{key:t.id,staticClass:"m-history-item"},[a("calendar-detail-item",{attrs:{type:t.type,data:t}})],1)})),0)})),1)],1)]),a("Thx",{attrs:{postId:t.id,postType:"calendar",postTitle:t.favTitle,userId:t.author,adminBoxcoinEnable:!0,userBoxcoinEnable:!0}}),a("Comment",{staticClass:"m-comment",attrs:{id:t.id,category:"calendar"}}),a("calendar-dialog",{attrs:{"date-obj":t.dateObj,selected:t.today,mode:"update",isSuper:t.isSuper},model:{value:t.visible,callback:function(a){t.visible=a},expression:"visible"}})],1)},n=[function(){var t=this,a=t._self._c;return a("header",{staticClass:"m-single-title m-history-header"},[a("i",{staticClass:"el-icon-connection"}),t._v("参考资料")])},function(){var t=this,a=t._self._c;return a("header",{staticClass:"m-single-title m-history-header"},[a("i",{staticClass:"el-icon-date"}),t._v("那年今日")])}],s=(e("9911"),e("d3b7"),e("14d9"),e("13d5"),e("4e82"),e("d81d"),e("b64b"),e("fb6a"),e("99af"),e("3675")),o=e("9616"),r=e("85e4"),l=e("e4f1"),c=e("0644"),d=e.n(c),u=e("c9d2"),m=e("23d8"),h=e("3887"),y=e("8583"),f={name:"SingleCalendar",components:{Comment:m["a"],CalendarDialog:h["a"],CalendarDetailItem:y["a"]},data:function(){return{today:"",history:[],todayLoading:!1,historyLoading:!1,visible:!1,isSuper:!1}},computed:{id:function(){return~~this.$route.params.id},author:function(){return this.today.user_id},params:function(t){var a=t.today;return a?{month:a.month,date:a.date}:""},dateObj:function(){return{year:this.today.year,month:this.today.month,date:this.today.date}},references:function(){var t=[],a=this.today,e=a.link,i=a.link_temp;return e&&e.length&&(t=d()(e)),i&&!t.some((function(t){return t.url===i}))&&t.push({label:"官方新闻",url:i}),t},timelineData:function(){var t,a;return a=null===(t=this.history)||void 0===t?void 0:t.reduce((function(t,a){var e=a.year;return t[e]||(t[e]=[]),t[e].push(a),t}),{}),a},timelineKeys:function(){return Object.keys(this.timelineData||{}).map((function(t){return parseInt(t,10)})).sort((function(t,a){return a-t}))},isEditor:function(){return u["a"].isEditor()},isCreator:function(){return this.today.user_id==u["a"].getInfo().uid},favTitle:function(){var t;return(null===(t=this.today.desc)||void 0===t?void 0:t.slice(0,20))+"..."}},watch:{id:{immediate:!0,handler:function(t){t&&this.loadData()}},params:{deep:!0,handler:function(t){t&&this.loadHistory(t)}}},methods:{loadData:function(){var t=this;this.todayLoading=!0,Object(s["g"])(this.id).then((function(a){t.today=a.data.data})).finally((function(){Object(o["b"])("calendar",t.id),t.todayLoading=!1}))},loadHistory:function(t){var a=this;this.historyLoading=!0,Object(s["h"])(t).then((function(t){a.history=(t.data.data||[]).reverse()})).finally((function(){a.historyLoading=!1}))},goBack:function(){history.length>1?history.back():this.$router.push("/archive/".concat(this.dateObj.year,"/").concat(this.dateObj.month))},manage:function(t){this.visible=!0,this.isSuper=t},formatDate:function(t){t.year;var a=t.month,e=t.date;return"".concat(a,"月").concat(e,"日")},showAvatar:function(t){return Object(r["showAvatar"])(t,24)},authorLink:r["authorLink"],showTime:l["b"]}},v=f,_=(e("8a7a"),e("2877")),p=Object(_["a"])(v,i,n,!1,null,null,null);a["default"]=p.exports},"8a7a":function(t,a,e){"use strict";e("b635")},b635:function(t,a,e){}}]);
//# sourceMappingURL=chunk-b9aae45c.7182ac10.js.map