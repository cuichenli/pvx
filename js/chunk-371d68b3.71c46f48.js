(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-371d68b3"],{"6a7f":function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return i})),n.d(e,"i",(function(){return o})),n.d(e,"l",(function(){return s})),n.d(e,"n",(function(){return u})),n.d(e,"o",(function(){return l})),n.d(e,"m",(function(){return m})),n.d(e,"a",(function(){return d})),n.d(e,"h",(function(){return f})),n.d(e,"d",(function(){return y})),n.d(e,"q",(function(){return x})),n.d(e,"c",(function(){return g})),n.d(e,"p",(function(){return v})),n.d(e,"e",(function(){return b})),n.d(e,"b",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"j",(function(){return c}));n("99af");var r=n("41cb");function a(t){return Object(r["c"])().get("/api/question/user-exam-paper",{params:t})}function i(t){return Object(r["c"])().get("api/question/public-list",{params:t})}function o(t){return Object(r["c"])({proxy:!0}).get("api/question/user-exam-paper/"+t+"?details")}function s(t){return Object(r["c"])({proxy:!0}).get("api/question/"+t+"/no-answer")}function p(t){return Object(r["c"])({proxy:!0}).get("/api/question/".concat(t))}function c(t){return Object(r["c"])().get("/api/question/exam-paper/"+t)}function u(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(r["c"])({proxy:!0}).post("api/question/user-exam-paper/".concat(t,"/i-finish-all").concat(n?"?force":""),e)}function l(t,e){return Object(r["c"])({proxy:!0}).post("api/question/user-exam-paper/q/".concat(t,"/answer"),e)}function m(t,e){return Object(r["c"])({proxy:!0}).get("api/summary-any/"+t+"-"+e+"/stat")}function d(t,e){return Object(r["c"])({proxy:!0}).put("api/question/exam-paper/"+t+"/opt","",{params:{action:e},withCredentials:!0})}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;return Object(r["c"])().get("api/game/exam/random",{params:{count:t}})}function b(t){return Object(r["c"])().get("api/game/exam/search",{params:t})}function h(t){return Object(r["c"])().post("api/game/exam/ugc",t)}function y(t){return Object(r["c"])().post("/api/question/create",t)}function x(t,e){return Object(r["c"])().put("/api/question/"+t+"/update",e)}function g(t){return Object(r["c"])().post("/api/question/exam-paper",t)}function v(t,e){return Object(r["c"])().put("/api/question/exam-paper/"+t,e)}},"9ab2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-publish-box m-single-wrapper"},[e("div",{staticClass:"back-wrap"},[e("el-button",{on:{click:t.goBack}},[t._v("返回列表")])],1),e("el-form",{staticClass:"m-publish-exam",attrs:{"label-position":"left","label-width":"80px"}},[e("el-form-item",{staticClass:"m-publish-exam-title",attrs:{label:"题目"}},[e("el-input",{attrs:{maxlength:500,minlength:2,"show-word-limit":"",required:"",rows:3,type:"textarea",placeholder:"请填写题目内容 (支持html)"},model:{value:t.primary.title,callback:function(e){t.$set(t.primary,"title",e)},expression:"primary.title"}})],1),e("el-form-item",{staticClass:"m-publish-exam-type",attrs:{label:"题型"}},[e("el-radio-group",{model:{value:t.primary.type,callback:function(e){t.$set(t.primary,"type",e)},expression:"primary.type"}},[e("el-radio",{attrs:{label:0,border:""}},[t._v("单选题")])],1)],1),e("el-form-item",{staticClass:"m-publish-exam-options",attrs:{label:"选项"}},[e("el-input",{attrs:{placeholder:"选项1 (支持html)"},model:{value:t.primary.options[0],callback:function(e){t.$set(t.primary.options,0,e)},expression:"primary.options[0]"}},[e("template",{slot:"prepend"},[t._v("A")])],2),e("el-input",{attrs:{placeholder:"选项2 (支持html)"},model:{value:t.primary.options[1],callback:function(e){t.$set(t.primary.options,1,e)},expression:"primary.options[1]"}},[e("template",{slot:"prepend"},[t._v("B")])],2),e("el-input",{attrs:{placeholder:"选项3 (支持html)"},model:{value:t.primary.options[2],callback:function(e){t.$set(t.primary.options,2,e)},expression:"primary.options[2]"}},[e("template",{slot:"prepend"},[t._v("C")])],2),e("el-input",{attrs:{placeholder:"选项4 (支持html)"},model:{value:t.primary.options[3],callback:function(e){t.$set(t.primary.options,3,e)},expression:"primary.options[3]"}},[e("template",{slot:"prepend"},[t._v("D")])],2)],1),e("el-form-item",{staticClass:"m-publish-exam-answer",attrs:{label:"答案"}},[t.primary.type?t._e():e("el-radio-group",{model:{value:t.answer_radio,callback:function(e){t.answer_radio=e},expression:"answer_radio"}},[e("el-radio",{attrs:{label:0}},[t._v("A")]),e("el-radio",{attrs:{label:1}},[t._v("B")]),e("el-radio",{attrs:{label:2}},[t._v("C")]),e("el-radio",{attrs:{label:3}},[t._v("D")])],1)],1),e("el-form-item",{staticClass:"m-publish-exam-content",attrs:{label:""}},[e("el-button",{staticClass:"u-publish",attrs:{icon:"el-icon-s-promotion",type:"primary",disabled:t.processing},on:{click:t.publish}},[t._v("提交")])],1)],1)],1)},a=[],i=(n("14d9"),n("e9c4"),n("d3b7"),n("6a7f")),o=n("0644"),s=n.n(o),p={name:"game_exam_question",props:[],data:function(){return{primary:{title:"",type:0,options:["","","",""],answer:[]},processing:!1,answer_radio:""}},computed:{id:function(){return this.$route.params.id}},watch:{answer_radio:function(t){this.primary.answer=[t]}},methods:{goBack:function(){this.$router.push({name:"index",params:{type:1}})},publish:function(){var t=this;this.processing=!0;var e=s()(this.primary);e.options=JSON.stringify(e.options),e.answer=JSON.stringify(e.answer),Object(i["b"])(e).then((function(e){t.success(e)})).finally((function(){t.processing=!1}))},success:function(t){this.$message({message:t.data.msg||"提交成功",type:"success"}),this.goBack()}}},c=p,u=(n("b71c"),n("2877")),l=Object(u["a"])(c,r,a,!1,null,null,null);e["default"]=l.exports},a1a7:function(t,e,n){},b71c:function(t,e,n){"use strict";n("a1a7")}}]);
//# sourceMappingURL=chunk-371d68b3.71c46f48.js.map