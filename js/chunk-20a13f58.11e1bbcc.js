(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20a13f58"],{"0481":function(e,a,i){"use strict";var m=i("23e7"),d=i("a2bf"),n=i("7b0b"),l=i("07fa"),t=i("5926"),o=i("65f0");m({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,a=n(this),i=l(a),m=o(a,0);return m.length=d(m,a,a,i,0,void 0===e?1:t(e)),m}})},"2d832":function(e,a,i){},4069:function(e,a,i){var m=i("44d2");m("flat")},4238:function(e,a,i){"use strict";i.d(a,"c",(function(){return n})),i.d(a,"b",(function(){return l})),i.d(a,"a",(function(){return t}));var m=i("41cb"),d=Object(m["e"])();function n(e){return d.get("/reputation/menus",{params:e})}function l(e){return d.get("/reputations",{params:e})}function t(e){return d.get("/reputation",{params:e})}},"466d":function(e,a,i){"use strict";var m=i("c65b"),d=i("d784"),n=i("825a"),l=i("7234"),t=i("50c4"),o=i("577e"),s=i("1d80"),_=i("dc4a"),p=i("8aa5"),c=i("14c3");d("match",(function(e,a,i){return[function(a){var i=s(this),d=l(a)?void 0:_(a,e);return d?m(d,a,i):new RegExp(a)[e](o(i))},function(e){var m=n(this),d=o(e),l=i(a,m,d);if(l.done)return l.value;if(!m.global)return c(m,d);var s=m.unicode;m.lastIndex=0;var _,b=[],v=0;while(null!==(_=c(m,d))){var g=o(_[0]);b[v]=g,""===g&&(m.lastIndex=p(d,t(m.lastIndex),s)),v++}return 0===v?null:b}]}))},"4ba4":function(e,a,i){},5605:function(e,a,i){"use strict";i.r(a);i("ac1f"),i("841c");var m=function(){var e=this,a=e._self._c;return a("div",{staticClass:"reputation-container"},[a("PvxSearch",{ref:"search",staticClass:"reputation-search",class:e.selected&&"selected-wrapper",attrs:{items:e.searchProps},on:{search:function(a){return e.searchEvent(a)}}},[a("div",{staticClass:"select-item",class:!e.selected&&"active",on:{click:e.toAll}},[e._v("全部")])]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"reputaion-content-wrapper"},[e.selected||this.search.keyword?e._e():a("div",{staticClass:"reputation-list-wrapper"},[a("div",{staticClass:"reputation-title"},[e._v("资料片新增")]),a("div",{staticClass:"reputation-list"},e._l(e.newsList,(function(e){return a("reputation-item",{key:e.dwForceID,attrs:{item:e}})})),1)]),e.versionList.length?e._l(e.versionList,(function(i){return a("div",{key:i.value,staticClass:"reputation-list-wrapper"},[a("div",{staticClass:"reputation-title"},[e._v(e._s(i.label))]),a("div",{staticClass:"reputation-list"},e._l(i.list,(function(e){return a("reputation-item",{key:e.dwForceID,attrs:{item:e}})})),1)])})):e._e()],2)],1)},d=[],n=i("5530"),l=i("c7eb"),t=i("1da1"),o=(i("d81d"),i("4de4"),i("d3b7"),i("caad"),i("2532"),i("a9e3"),i("b64b"),i("99af"),i("159b"),i("14d9"),i("3ca3"),i("ddb0"),i("0481"),i("4069"),i("d427")),s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"reputation-item",on:{click:function(a){return e.go(e.item.dwForceID)}}},[a("div",{staticClass:"reputation-icon"},[e.getIcon(e.item.szIconPath)?a("img",{attrs:{src:e.getIcon(e.item.szIconPath)}}):a("div",{staticClass:"no-img"})]),a("div",{staticClass:"reputation-name-wrap"},[a("div",{staticClass:"reputation-name"},[e._v(e._s(e.item.szName))]),e._m(0)])])},_=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"progress-wrap"},[a("div",{staticClass:"progress-value"})])}],p=(i("5319"),i("65c2")),c={name:"ReputationItem",props:{item:{type:Object,required:!0}},methods:{go:function(e){this.$router.push({path:"/".concat(e)})},getIcon:function(e){var a=e?e.replace(/\//g,"\\"):"",i=a?a.split("\\")[a.split("\\").length-1].toLowerCase().split(".tga")[0]:"";return i?p["__imgPath"]+"reputation/reputation/std/icon/"+i+".png":""}}},b=c,v=(i("e0fe"),i("2877")),g=Object(v["a"])(b,s,_,!1,null,null,null),r=g.exports,u=i("4238"),f=i("ffe2"),h=i("a69c"),j=i("cc9a"),w={name:"Index",components:{PvxSearch:o["a"],ReputationItem:r},data:function(){return{news:[],newsList:[],level:-1,loading:!1,search:{},query:{page:1,pageSize:50,client:this.client},versions:[],orginList:[],versionList:[],selected:"",searchProps:[{key:"dlc",name:"版本",type:"select",options:[],showLabel:!0,showActive:!0},{key:"keyword",name:"声望/地图/奖励/势力名称"}]}},computed:{client:function(){return this.$store.state.client}},methods:{toAll:function(){this.$refs.search.reset()},searchEvent:function(e){var a=this;this.search=e,this.selected=e.dlc,e.keyword?(this.loading=!0,this.getList(e.dlc,e.keyword).then((function(e){a.loading=!1;var i=e.map((function(e){return e.nDlcID})),m=e.map((function(e){return e.dwForceID})),d=a.versionList.filter((function(e){return i.includes(e.value)})).map((function(e){var a=e.list.filter((function(e){return m.includes(e.dwForceID)})),i=e.label,d=e.value;return{label:i,value:d,list:a,total:a.length}}));a.versionList=d})).catch((function(){a.loading=!1}))):this.versionList=this.orginList,e.dlc?(this.loading=!0,this.getList(e.dlc).then((function(e){a.loading=!1;var i=e.map((function(e){return e.nDlcID})),m=a.versionList.filter((function(e){return i.includes(e.value)}));a.versionList=m})).catch((function(){a.loading=!1}))):this.versionList=this.orginList},getNews:function(){var e=this;return Object(t["a"])(Object(l["a"])().mark((function a(){return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(j["a"])("reputation-newest").then((function(a){e.news=a.split(",").map((function(e){return Number(e)}))}));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})))()},getVersions:function(){var e=this;return Object(t["a"])(Object(l["a"])().mark((function a(){return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(u["c"])({client:e.client}).then((function(a){var i="std"===e.client?f:h,m=a.data.dlc||[],d=Object.keys(i).map((function(e){return"".concat(e,"(").concat(i[e].level,"级)")})).reverse(),n=m.map((function(e,a){return{value:e.nDlcID,total:e.total,label:d[a]}}));e.versions=n.reverse();var l=e.searchProps[0];l.options=n,e.$set(e.searchProps,0,l)}));case 2:case"end":return a.stop()}}),a)})))()},getList:function(e,a){var i=Object.assign({},this.query);return a&&(i.keyword=a,this.selected&&(i.dlc=this.selected)),e&&(i.dlc=e),new Promise((function(e,a){Object(u["b"])(i).then((function(a){var i=a.data.list||[];e(i)})).catch((function(e){a(e)}))}))}},mounted:function(){var e=this;this.getNews(),this.getVersions().then((function(){var a=e.versions,i=[];a.forEach((function(a){i.push(e.getList(a.value))})),e.loading=!0,Promise.all(i).then((function(i){e.loading=!1;var m=i.flat();e.newsList=m.flat().filter((function(a){return e.news.includes(a.dwForceID)}));var d=a.map((function(e){return Object(n["a"])(Object(n["a"])({},e),{},{list:m.filter((function(a){return a.nDlcID===e.value}))})}));e.orginList=d,e.versionList=d}))}))}},L=w,I=(i("7e54"),Object(v["a"])(L,m,d,!1,null,null,null));a["default"]=I.exports},"7e54":function(e,a,i){"use strict";i("2d832")},a2bf:function(e,a,i){"use strict";var m=i("e8b5"),d=i("07fa"),n=i("3511"),l=i("0366"),t=function(e,a,i,o,s,_,p,c){var b,v,g=s,r=0,u=!!p&&l(p,c);while(r<o)r in i&&(b=u?u(i[r],r,a):i[r],_>0&&m(b)?(v=d(b),g=t(e,a,b,v,g,_-1)-1):(n(g+1),e[g]=b),g++),r++;return g};e.exports=t},a69c:function(e){e.exports=JSON.parse('{"巴蜀风云":{"name":"巴蜀风云","level":"80","dungeon":{"八荒衡鉴":{"name":"八荒衡鉴","maps":[{"map_id":"995","mode":"10人普通"}],"icon":"image/fb_map_thumbnail/995.png","boss":["野猪王","毒尸王","天一教毒巫","无常鬼","神策将军"],"client":["origin"]},"剑湖宫":{"devide_level":"80","devide_name":"巴蜀风云","name":"剑湖宫","maps":[{"map_id":"996","mode":"10人普通"},{"map_id":"997","mode":"10人挑战"},{"map_id":"998","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/996.jpg","boss":["褚吉光、柳公子","扶风","玄冥灵龟","迦牟"],"client":["origin"]},"荻花圣殿":{"devide_level":"80","devide_name":"巴蜀风云","name":"荻花圣殿","maps":[{"map_id":"68","mode":"10人普通"},{"map_id":"70","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/68.jpg","boss":["卫栖梧、阿里曼执法长老","阿萨辛","卓婉清","沙利亚"],"client":["origin","std","all"]},"龙渊泽":{"devide_level":"80","devide_name":"巴蜀风云","name":"龙渊泽","maps":[{"map_id":"119","mode":"10人普通"},{"map_id":"117","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/109.jpg","boss":["慕容野狐、殷青丝","里赤梅、苏贝德哈"],"client":["std","origin","all"]},"毒神殿":{"devide_level":"80","devide_name":"巴蜀风云","name":"毒神殿","maps":[{"map_id":"75","mode":"5人普通"},{"map_id":"112","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/75.jpg","boss":["塔丹茂伯","鲍穆侠","乌灵风"],"client":["std","origin","all"]},"法王窟":{"devide_level":"80","devide_name":"巴蜀风云","name":"法王窟","maps":[{"map_id":"106","mode":"5人普通"},{"map_id":"115","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/106.jpg","boss":["胡鞑","武逸青","智慧"],"client":["std","origin","all"]},"无量宫":{"devide_level":"80","devide_name":"巴蜀风云","name":"无量宫","maps":[{"map_id":"107","mode":"5人普通"},{"map_id":"114","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/107.jpg","boss":["桃叶仙","濯尘","多多"],"client":["std","origin","all"]},"寂灭厅":{"devide_level":"80","devide_name":"巴蜀风云","name":"寂灭厅","maps":[{"map_id":"110","mode":"5人普通"},{"map_id":"113","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/110.jpg","boss":["藏·剑邪鸠","剑心","摩提耶罗"],"client":["std","origin","all"]},"唐门密室":{"devide_level":"80","devide_name":"巴蜀风云","name":"唐门密室","maps":[{"map_id":"123","mode":"5人普通"},{"map_id":"125","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/123.jpg","boss":["柳惊涛","机关骰子","汉唐","密室机关"],"client":["std","origin","all"]}}},"风起稻香":{"name":"风起稻香","level":"70","dungeon":{"仙踪林":{"devide_level":"70","devide_name":"五毒现世","name":"仙踪林","maps":[{"map_id":"71","mode":"5人英雄"},{"map_id":"116","mode":"5人普通"}],"icon":"image/fb_map_thumbnail/71.jpg","boss":["塔纳刀王","水云","苏髓"],"client":["std","origin","all"]},"荻花圣殿":{"devide_level":"70","devide_name":"圣殿风云","name":"荻花圣殿前厅","maps":[{"map_id":"69","mode":"10人英雄"},{"map_id":"72","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/68.jpg","boss":["牡丹","塔洛马蒂、姬无双","慕容追风","蛮熊之力","贪狼之牙","飞猿之影"],"client":["origin","std","all"]},"荻花宫后山":{"devide_level":"70","devide_name":"风起稻香","name":"荻花宫后山","maps":[{"map_id":"67","mode":"10人普通"},{"map_id":"58","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/67.jpg","boss":["罗索斯","乌蛊婆婆","水烟","仄羽戈","提坦德亚罗","牡丹"],"client":["std","origin","all"]},"剑冢":{"devide_level":"70","devide_name":"风起稻香","name":"剑冢","maps":[{"map_id":"51","mode":"5人普通"},{"map_id":"62","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/51.jpg","boss":["叶芳致","叶琦菲","夜啸","叶火汐","叶昊天","叶金素","叶冬辰","叶凌烈","叶无心","叶秋池"],"client":["std","origin","all"]},"持国天王殿":{"devide_level":"70","devide_name":"风起稻香","name":"持国天王殿","maps":[{"map_id":"60","mode":"10人普通"},{"map_id":"66","mode":"25人英雄"},{"map_id":"65","mode":"25人挑战"}],"icon":"image/fb_map_thumbnail/60.jpg","boss":["提多罗吒"],"client":["std","origin","all"]},"宫中神武遗迹":{"devide_level":"70","devide_name":"风起稻香","name":"宫中神武遗迹","maps":[{"map_id":"61","mode":"10人普通"},{"map_id":"63","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/61.jpg","boss":["谢云流"],"client":["std","origin","all"]},"战宝迦兰":{"devide_level":"70","devide_name":"风起稻香","name":"战宝迦兰","maps":[{"map_id":"32","mode":"10人普通"},{"map_id":"46","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/32.jpg","boss":["王海银","朱癸","平等","掌火","镇恶","餐风、饮火、吞云","千手观音"],"client":["std","origin","all"]},"灵霄峡":{"devide_level":"70","devide_name":"风起稻香","name":"灵霄峡","maps":[{"map_id":"14","mode":"5人普通"},{"map_id":"45","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/14.jpg","boss":["虎啸","射云","华鹤炎","神策暗刺卫","慧钟","千叶佛像","水中月、镜中花、空中云"],"client":["std","origin","all"]},"天工坊":{"devide_level":"70","devide_name":"风起稻香","name":"天工坊","maps":[{"map_id":"17","mode":"5人普通"},{"map_id":"37","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/17.jpg","boss":["方季常","平三指","震天甲士","华铁颅","煞灵魔尸","塔玛","司徒一一"],"client":["std","origin","all"]},"无盐岛":{"devide_level":"70","devide_name":"风起稻香","name":"无盐岛","maps":[{"map_id":"18","mode":"5人普通"},{"map_id":"41","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/18.jpg","boss":["罗翼","常万山","杜姬欣","温纱儿","庞虎文","杨心羽"],"client":["std","origin","all"]},"空雾峰":{"devide_level":"70","devide_name":"风起稻香","name":"空雾峰","maps":[{"map_id":"19","mode":"5人普通"},{"map_id":"43","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/19.jpg","boss":["冯度","王彦直","鬼影小次郎","鲁飞","夕罗双","藤原樱奈","梅剑雄"],"client":["std","origin","all"]},"天地三才阵":{"devide_level":"70","devide_name":"风起稻香","name":"天地三才阵","maps":[{"map_id":"20","mode":"5人普通"},{"map_id":"36","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/20.jpg","boss":["人熊","邓文峰","商仲永","李千水","范霸","赵天龙","朴宗资"],"client":["std","origin","all"]},"荻花宫前山":{"devide_level":"70","devide_name":"风起稻香","name":"荻花宫前山","maps":[{"map_id":"26","mode":"5人普通"},{"map_id":"40","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/26.jpg","boss":["阿里曼监察使","阿里曼入教主祭司","卫栖梧","沙利亚","阿斯玛"],"client":["std","origin","all"]},"日轮山城":{"devide_level":"70","devide_name":"风起稻香","name":"日轮山城","maps":[{"map_id":"28","mode":"5人普通"},{"map_id":"44","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/28.jpg","boss":["上衫勇刀","雾影奈叶、猿飞菖蒲","源明雅","八歧大蛇","吉汰","尸灵武者","谢云流","野村一郎","服部胧藏"],"client":["std","origin","all"]},"天子峰":{"devide_level":"70","devide_name":"风起稻香","name":"天子峰","maps":[{"map_id":"33","mode":"5人普通"},{"map_id":"42","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/33.jpg","boss":["柳随风","孙敬萧","李尧","玄悲","陌香","方宇谦","玄阴子","程傲","王积薪","道衍","李裳秋","方鹤影"],"client":["std","origin","all"]},"风雨稻香村":{"devide_level":"70","devide_name":"风起稻香","name":"风雨稻香村","maps":[{"map_id":"34","mode":"5人普通"},{"map_id":"47","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/34.jpg","boss":["殷不为","肖童","刘大海","秦雷","狼牙夜暮刺客","卢元霸","齐宗强","肖红","熊奎、汪莽"],"client":["std","origin","all"]}},"client":["std","origin","all"]}}')},e0fe:function(e,a,i){"use strict";i("4ba4")},ffe2:function(e){e.exports=JSON.parse('{"横刀断浪":{"name":"横刀断浪","level":"120","dungeon":{"百战异闻录":{"name":"百战异闻录","maps":[{"map_id":"562","mode":"10人普通"}],"icon":"image/fb_map_thumbnail/562.png","boss":["韦柔丝","程沐华","鬼影小次郎","冯度","华鹤炎","罗翼","钱宗龙","方宇谦","陆寻","秦雷","上杉勇刀","肖童","源明雅","精英宝箱"],"client":["std"]},"西津渡":{"name":"西津渡","maps":[{"map_id":"586","mode":"10人普通"},{"map_id":"587","mode":"25人普通"},{"map_id":"588","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/588.png","boss":["张景超","刘展","苏凤楼","韩敬青","藤原佑野","李重茂"],"client":["std","all"]},"沃石院":{"name":"沃石院","maps":[{"map_id":"596","mode":"5人普通"},{"map_id":"597","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/597.png","boss":["孟承","吕一平","时风"],"client":["std","all"]},"镇海阁地井":{"name":"镇海阁地井","maps":[{"map_id":"598","mode":"5人普通"},{"map_id":"599","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/599.png","boss":["关八天","苍森","巨型何罗"],"client":["std","all"]},"幽藤馆":{"name":"幽藤馆","maps":[{"map_id":"606","mode":"5人普通"},{"map_id":"607","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/607.png","boss":["吴添明","秘三花","藤原广嗣"],"client":["std","all"]},"江天夜宴":{"name":"江天夜宴","maps":[{"map_id":"622","mode":"5人普通"},{"map_id":"623","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/623.png","boss":["笑妆娘","白兆霆","邙赫达"],"client":["std","all"]}},"client":["std","all"]},"奉天证道":{"name":"奉天证道","level":"110","dungeon":{"河阳之战":{"name":"河阳之战","maps":[{"map_id":"573","mode":"10人普通"},{"map_id":"574","mode":"25人普通"},{"map_id":"575","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/573.png","boss":["勒齐那","阿阁诺","周通忌","周贽","常宿"],"client":["std","all"]},"雷域大泽":{"name":"雷域大泽","maps":[{"map_id":"559","mode":"10人普通"},{"map_id":"560","mode":"25人普通"},{"map_id":"561","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/559.png","boss":["巨型尖吻凤","桑乔","悉达罗摩","血骨巢心","月泉淮","乌蒙贵"],"client":["std","all"]},"武氏别院":{"name":"武氏别院","maps":[{"map_id":"563","mode":"5人普通"},{"map_id":"564","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/563.png","boss":["李君竹","解秀朝","武云阙"],"client":["std","all"]},"挑战达摩洞":{"name":"挑战达摩洞","maps":[{"map_id":"517","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/517.png","boss":["修罗僧"],"client":["std","all"]},"白帝江关":{"name":"白帝江关","maps":[{"map_id":"518","mode":"10人普通"},{"map_id":"519","mode":"25人普通"},{"map_id":"520","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/518.png","boss":["罗芬、胡汤","赵八嫂","海荼","姜集苦","宇文灭","宫威","宫傲"],"client":["std","all"]},"漳水南路":{"name":"漳水南路","maps":[{"map_id":"521","mode":"5人英雄"},{"map_id":"522","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/521.png","boss":["史孝","曹达干","阎清怀"],"client":["std","all"]},"达摩洞":{"name":"达摩洞","maps":[{"map_id":"482","mode":"10人普通"},{"map_id":"483","mode":"25人普通"},{"map_id":"484","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/482.png","boss":["余晖","宓桃","武雪散","猿飞","哑头陀","岳琳、岳琅"],"client":["std","all"]},"剑冢惊变":{"name":"剑冢惊变","maps":[{"map_id":"468","mode":"5人普通"},{"map_id":"469","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/468.png","boss":["陈骇","雾影千斩","陈徽"],"client":["std","all"]},"梦入集真岛":{"name":"梦入集真岛","maps":[{"map_id":"476","mode":"5人普通"},{"map_id":"481","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/476.png","boss":["秽鬼","观勒和尚","天空"],"client":["std","all"]},"梧桐山庄":{"name":"梧桐山庄","maps":[{"map_id":"477","mode":"5人普通"},{"map_id":"478","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/477.png","boss":["雀卿","阮梅","罗刀"],"client":["std","all"]},"罗汉门":{"name":"罗汉门","maps":[{"map_id":"479","mode":"5人普通"},{"map_id":"480","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/479.png","boss":["宓果","刘细","郝大雪"],"client":["std","all"]},"月落三星":{"name":"月落三星","maps":[{"map_id":"489","mode":"5人普通"},{"map_id":"490","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/489.png","boss":["苏凤楼","韩敬青","藤原夕夏"],"client":["std","all"]}},"client":["std","all"]},"世外蓬莱":{"name":"世外蓬莱","level":"100","dungeon":{"范阳夜变":{"devide_level":"100","devide_name":"世外蓬莱","name":"范阳夜变","maps":[{"map_id":"452","mode":"10人普通"},{"map_id":"453","mode":"25人普通"},{"map_id":"454","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/452.png","boss":["周贽","厌夜","迟驻","白某","安小逢"],"client":["std","all"]},"敖龙岛":{"devide_level":"100","devide_name":"世外蓬莱","name":"敖龙岛","maps":[{"map_id":"426","mode":"10人普通"},{"map_id":"427","mode":"25人普通"},{"map_id":"428","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/426.png","boss":["铁黎","陈徽","藤原武裔","源思弦","驺吾","方有崖"],"client":["std","all"]},"玄鹤别院":{"devide_level":"100","devide_name":"世外蓬莱","name":"玄鹤别院","maps":[{"map_id":"431","mode":"5人普通"},{"map_id":"432","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/431.jpg","boss":["秦高相","慧枯","江潮"],"client":["std","all"]},"冰火岛·荒血路":{"devide_level":"100","devide_name":"世外蓬莱","name":"冰火岛·荒血路","maps":[{"map_id":"341","mode":"10人普通"},{"map_id":"354","mode":"25人英雄"},{"map_id":"360","mode":"25人挑战"},{"map_id":"361","mode":"试炼秘境"}],"icon":"image/fb_map_thumbnail/341.jpg","boss":["康疑","铂尔","罗纳真","没藏呼月与拓跋思羽","拿云"],"client":["std","all"]},"冰火岛·青莲狱":{"devide_level":"100","devide_name":"世外蓬莱","name":"冰火岛·青莲狱","maps":[{"map_id":"347","mode":"10人普通"},{"map_id":"348","mode":"25人英雄"},{"map_id":"349","mode":"25人挑战"},{"map_id":"350","mode":"试炼秘境"}],"icon":"image/fb_map_thumbnail/347.jpg","boss":["伊玛目"],"client":["std","all"]},"尘归海·巨冥湾":{"devide_level":"100","devide_name":"世外蓬莱","name":"尘归海·巨冥湾","maps":[{"map_id":"364","mode":"10人普通"},{"map_id":"365","mode":"25人英雄"},{"map_id":"366","mode":"25人挑战"}],"icon":"image/fb_map_thumbnail/364.jpg","boss":["孙楚珊","虎翼突袭","邢不僵","鬼首","无面鬼","晏厄、晏灾"],"client":["std","all"]},"尘归海·饕餮洞":{"devide_level":"100","devide_name":"世外蓬莱","name":"尘归海·饕餮洞","maps":[{"map_id":"368","mode":"10人普通"},{"map_id":"369","mode":"25人英雄"},{"map_id":"370","mode":"25人挑战"}],"icon":"image/fb_map_thumbnail/368.jpg","boss":["黄穆"],"client":["std","all"]},"泥兰洞天":{"devide_level":"100","devide_name":"世外蓬莱","name":"泥兰洞天","maps":[{"map_id":"337","mode":"5人普通"},{"map_id":"356","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/337.jpg","boss":["康成辩","源明信","康杖石"],"client":["std","all"]},"大衍盘丝洞":{"devide_level":"100","devide_name":"世外蓬莱","name":"大衍盘丝洞","maps":[{"map_id":"339","mode":"5人普通"},{"map_id":"355","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/339.jpg","boss":["连玉良","文闰一","尹无咎"],"client":["std","all"]},"镜泊湖":{"devide_level":"100","devide_name":"世外蓬莱","name":"镜泊湖","maps":[{"map_id":"340","mode":"5人普通"},{"map_id":"357","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/340.jpg","boss":["寒鸦三女","翁幼之","端木珩"],"client":["std","all"]},"九辩馆":{"devide_level":"100","devide_name":"世外蓬莱","name":"九辩馆","maps":[{"map_id":"342","mode":"5人普通"},{"map_id":"359","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/342.jpg","boss":["杀末邪","月笼草","蒹葭"],"client":["std","all"]},"迷渊岛":{"devide_level":"100","devide_name":"世外蓬莱","name":"迷渊岛","maps":[{"map_id":"343","mode":"5人英雄"},{"map_id":"358","mode":"5人普通"}],"icon":"image/fb_map_thumbnail/343.jpg","boss":["姜仇封","魏宗明","宫傲"],"client":["std","all"]},"周天屿":{"devide_level":"100","devide_name":"世外蓬莱","name":"周天屿","maps":[{"map_id":"406","mode":"5人英雄"},{"map_id":"407","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/406.jpg","boss":["曹庆司","白沫","悉达罗摩"],"client":["std","all"]}},"client":["std","all"]},"剑胆琴心":{"name":"剑胆琴心","level":"95","dungeon":{"狼牙堡·狼神殿":{"devide_level":"95","devide_name":"剑胆琴心","name":"狼牙堡·狼神殿","maps":[{"map_id":"299","mode":"10人普通"},{"map_id":"301","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/299.jpg","boss":["靳空明","乌索","史思明"],"client":["std","all"]},"狼牙堡·战兽山":{"devide_level":"95","devide_name":"剑胆琴心","name":"狼牙堡·战兽山","maps":[{"map_id":"283","mode":"10人普通"},{"map_id":"286","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/283.jpg","boss":["报九枫","无支祁","也漠河","乌灵风","唐书雁"],"client":["std","all"]},"狼牙堡·燕然峰":{"devide_level":"95","devide_name":"剑胆琴心","name":"狼牙堡·燕然峰","maps":[{"map_id":"284","mode":"10人普通"},{"map_id":"287","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/284.jpg","boss":["司晴","李令霞","石斑"],"client":["std","all"]},"狼牙堡·辉天堑":{"devide_level":"95","devide_name":"剑胆琴心","name":"狼牙堡·辉天堑","maps":[{"map_id":"298","mode":"10人普通"},{"map_id":"300","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/298.jpg","boss":["乌夜啼","月华","铁狱机关室","百慕玲与庄愈华","月泉淮"],"client":["std","all"]},"银雾湖":{"devide_level":"95","devide_name":"剑胆琴心","name":"银雾湖","maps":[{"map_id":"285","mode":"5人英雄"},{"map_id":"290","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/285.jpg","boss":["哈桑","银鼍龙王","容夏与纳罗"],"client":["std","all"]},"稻香秘事":{"devide_level":"95","devide_name":"剑胆琴心","name":"稻香秘事","maps":[{"map_id":"291","mode":"5人普通"},{"map_id":"292","mode":"5人英雄"},{"map_id":"295","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/291.jpg","boss":["董虎","董龙","无名"],"client":["std","all"]},"风雷刀谷·锻刀厅":{"devide_level":"95","devide_name":"剑胆琴心","name":"风雷刀谷·锻刀厅","maps":[{"map_id":"263","mode":"10人普通"},{"map_id":"271","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/263.jpg","boss":["史朝英","柳愚","柳哲","柳时清","解语"],"client":["std","all"]},"风雷刀谷·千雷殿":{"devide_level":"95","devide_name":"剑胆琴心","name":"风雷刀谷·千雷殿","maps":[{"map_id":"264","mode":"10人普通"},{"map_id":"270","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/264.jpg","boss":["伊玛目","柳秀岳","柳鸾旗"],"client":["std","all"]},"刀轮海厅":{"devide_level":"95","devide_name":"剑胆琴心","name":"刀轮海厅","maps":[{"map_id":"262","mode":"5人英雄"},{"map_id":"275","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/262.jpg","boss":["赵淮、令狐伤与八重妙法村正","柳雪乾与韩梨","柳贯角之影"],"client":["std","all"]},"上阳宫·观风殿":{"devide_level":"95","devide_name":"剑胆琴心","name":"上阳宫·观风殿","maps":[{"map_id":"240","mode":"10人普通"},{"map_id":"248","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/240.jpg","boss":["沈眠风","柳绯君","月华","曹炎烈","独孤先生"],"client":["std","all"]},"上阳宫·双曜亭":{"devide_level":"95","devide_name":"剑胆琴心","name":"上阳宫·双曜亭","maps":[{"map_id":"241","mode":"10人普通"},{"map_id":"249","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/241.jpg","boss":["黑齿元佑","哥舒翰","安庆绪"],"client":["std","all"]},"夕颜阁":{"devide_level":"95","devide_name":"剑胆琴心","name":"夕颜阁","maps":[{"map_id":"256","mode":"5人普通"},{"map_id":"257","mode":"5人英雄"},{"map_id":"260","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/256.jpg","boss":["柳夕的心魔","柳哲","柳浮云"],"client":["std","all"]},"永王行宫·仙侣庭园":{"devide_level":"95","devide_name":"剑胆琴心","name":"永王行宫·仙侣庭园","maps":[{"map_id":"220","mode":"10人普通"},{"map_id":"231","mode":"25人英雄"},{"map_id":"234","mode":"10人挑战"},{"map_id":"236","mode":"25人挑战"}],"icon":"image/fb_map_thumbnail/220.jpg","boss":["屈焰阳","森九岚","李玚","仲虚念","李璘与苏十三娘"],"client":["std","all"]},"永王行宫·花月别院":{"devide_level":"95","devide_name":"剑胆琴心","name":"永王行宫·花月别院","maps":[{"map_id":"221","mode":"10人普通"},{"map_id":"230","mode":"25人英雄"},{"map_id":"235","mode":"10人挑战"},{"map_id":"237","mode":"25人挑战"}],"icon":"image/fb_map_thumbnail/221.jpg","boss":["韩非池","莫雨","李白"],"client":["std","all"]},"天泣林":{"devide_level":"95","devide_name":"剑胆琴心","name":"天泣林","maps":[{"map_id":"203","mode":"5人普通"},{"map_id":"224","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/203.jpg","boss":["看舞","崖剑","高力士"],"client":["std","all"]},"阴山圣泉":{"devide_level":"95","devide_name":"剑胆琴心","name":"阴山圣泉","maps":[{"map_id":"204","mode":"5人普通"},{"map_id":"227","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/204.jpg","boss":["秦秀","莫蕾","植尸将"],"client":["std","all"]},"梵空禅院":{"devide_level":"95","devide_name":"剑胆琴心","name":"梵空禅院","maps":[{"map_id":"209","mode":"5人普通"},{"map_id":"228","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/209.jpg","boss":["悟影","双雄剑意","幻影剑圣"],"client":["std","all"]},"引仙水榭":{"devide_level":"95","devide_name":"剑胆琴心","name":"引仙水榭","maps":[{"map_id":"218","mode":"5人普通"},{"map_id":"229","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/218.jpg","boss":["平花秀夜","剑姬阵","李倓与李复"],"client":["std","all"]},"微山书院":{"devide_level":"95","devide_name":"剑胆琴心","name":"微山书院","maps":[{"map_id":"219","mode":"5人普通"},{"map_id":"225","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/219.jpg","boss":["凤息颜","赵宫商","月侍弓"],"client":["std","all"]},"白帝水宫":{"devide_level":"95","devide_name":"剑胆琴心","name":"白帝水宫","maps":[{"map_id":"242","mode":"5人英雄"},{"map_id":"244","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/242.jpg","boss":["慕容绿珠","宫天蝉","雨卓承"],"client":["std","all"]}},"client":["std","all"]},"安史之乱":{"name":"安史之乱","level":"90","dungeon":{"战宝军械库":{"devide_level":"90","devide_name":"安史之乱","name":"战宝军械库","maps":[{"map_id":"160","mode":"10人普通"},{"map_id":"171","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/160.jpg","boss":["闻人彦范","岳承志","卓力格图","澹台枯火","萧沙、韦柔丝"],"client":["std","all"]},"大明宫":{"devide_level":"90","devide_name":"安史之乱","name":"大明宫","maps":[{"map_id":"164","mode":"10人普通"},{"map_id":"165","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/164.jpg","boss":["何莘涯","耶律燕、独孤问俗","六道傀儡","剑圣","无名","伊玛目","安禄山"],"client":["std","all"]},"血战天策":{"devide_level":"90","devide_name":"安史之乱","name":"血战天策","maps":[{"map_id":"175","mode":"10人普通"},{"map_id":"176","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/175.jpg","boss":["席庶云","关卡：固守天策府","曹炎烈","关卡：保护青骓牧场","沙叱博","阿史那从礼","黑齿元佑","苏曼莎","令狐伤"],"client":["std","all"]},"风雪稻香村":{"devide_level":"90","devide_name":"安史之乱","name":"风雪稻香村","maps":[{"map_id":"177","mode":"10人普通"},{"map_id":"178","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/177.jpg","boss":["地字一号","史朝义","黑鹰","无名"],"client":["std","all"]},"秦皇陵":{"devide_level":"90","devide_name":"安史之乱","name":"秦皇陵","maps":[{"map_id":"182","mode":"10人普通"},{"map_id":"183","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/182.jpg","boss":["王翦","石麒麟","探雪","令狐伤","安禄山"],"client":["std","all"]},"太原之战·夜守孤城":{"devide_level":"90","devide_name":"安史之乱","name":"太原之战·夜守孤城","maps":[{"map_id":"191","mode":"10人普通"},{"map_id":"198","mode":"25人英雄"},{"map_id":"205","mode":"25人挑战"},{"map_id":"211","mode":"10人挑战"}],"icon":"image/fb_map_thumbnail/191.jpg","boss":["田布戈","朝曦门防御战","火龙摧城"],"client":["std","all"]},"太原之战·逐虎驱狼":{"devide_level":"90","devide_name":"安史之乱","name":"太原之战·逐虎驱狼","maps":[{"map_id":"192","mode":"10人普通"},{"map_id":"199","mode":"25人英雄"},{"map_id":"206","mode":"25人挑战"},{"map_id":"212","mode":"10人挑战"}],"icon":"image/fb_map_thumbnail/192.jpg","boss":["靺鞨三骑将","安雨","白陶","史思明"],"client":["std","all"]},"一线天":{"devide_level":"90","devide_name":"安史之乱","name":"一线天","maps":[{"map_id":"157","mode":"5人英雄"},{"map_id":"167","mode":"5人普通"}],"icon":"image/fb_map_thumbnail/157.jpg","boss":["苏清","宁毅","列缺、霹雳"],"client":["std","all"]},"华清宫":{"devide_level":"90","devide_name":"安史之乱","name":"华清宫","maps":[{"map_id":"161","mode":"5人普通"},{"map_id":"162","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/161.jpg","boss":["尹素颜","阿依努尔","葛尔东赞"],"client":["std","all"]},"华清宫回忆录":{"devide_level":"90","devide_name":"安史之乱","name":"华清宫回忆录","maps":[{"map_id":"163","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/163.jpg","boss":["英怀珠","高力士","安禄山"],"client":["std","all"]},"流离岛":{"devide_level":"90","devide_name":"安史之乱","name":"流离岛","maps":[{"map_id":"169","mode":"5人普通"},{"map_id":"170","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/169.jpg","boss":["詹素","第五雍容","詹毅"],"client":["std","all"]},"直城门":{"devide_level":"90","devide_name":"安史之乱","name":"直城门","maps":[{"map_id":"179","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/179.jpg","boss":["牛介平","安守忠","阿史那承庆","恶狼"],"client":["std","all"]},"墨家秘殿":{"devide_level":"90","devide_name":"安史之乱","name":"墨家秘殿","maps":[{"map_id":"184","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/184.jpg","boss":["踏霆车","兵俑阵","白起"],"client":["std","all"]},"春明门":{"devide_level":"90","devide_name":"安史之乱","name":"春明门","maps":[{"map_id":"187","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/187.jpg","boss":["崔乾佑","安守忠","严庄"],"client":["std","all"]},"雁门关之役":{"devide_level":"90","devide_name":"安史之乱","name":"雁门关之役","maps":[{"map_id":"195","mode":"5人英雄"},{"map_id":"196","mode":"5人普通"}],"icon":"image/fb_map_thumbnail/195.jpg","boss":["中田海","拓跋离","独孤问俗"],"client":["std","all"]},"璨翠海厅":{"devide_level":"90","devide_name":"安史之乱","name":"璨翠海厅","maps":[{"map_id":"200","mode":"5人英雄"},{"map_id":"222","mode":"5人挑战"}],"icon":"image/fb_map_thumbnail/200.jpg","boss":["宇文画","饕餮厅关卡","血仆·宫溟"],"client":["std","all"]}},"client":["std","all"]},"巴蜀风云":{"name":"巴蜀风云","level":"80","dungeon":{"荻花圣殿":{"devide_level":"80","devide_name":"巴蜀风云","name":"荻花圣殿","maps":[{"map_id":"68","mode":"10人普通"},{"map_id":"69","mode":"10人英雄"},{"map_id":"70","mode":"25人普通"},{"map_id":"72","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/68.jpg","boss":["牡丹","塔洛马蒂、姬无双","慕容追风","蛮熊之力","贪狼之牙","飞猿之影","卫栖梧、阿里曼执法长老","阿萨辛","卓婉清","沙利亚"],"client":["std","all"]},"龙渊泽":{"devide_level":"80","devide_name":"巴蜀风云","name":"龙渊泽","maps":[{"map_id":"109","mode":"10人普通"},{"map_id":"117","mode":"25人英雄"},{"map_id":"118","mode":"25人普通"},{"map_id":"119","mode":"10人英雄"}],"icon":"image/fb_map_thumbnail/109.jpg","boss":["慕容野狐、殷青丝","里赤梅、苏贝德哈"],"client":["std","all"]},"荻花洞窟":{"devide_level":"80","devide_name":"巴蜀风云","name":"荻花洞窟","maps":[{"map_id":"120","mode":"10人普通"},{"map_id":"130","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/120.jpg","boss":["四头蛇迪多拉"],"client":["std","all"]},"神剑冢":{"devide_level":"80","devide_name":"巴蜀风云","name":"神剑冢","maps":[{"map_id":"126","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/126.jpg","boss":["叶英"],"client":["std","all"]},"持国天王回忆录":{"devide_level":"80","devide_name":"巴蜀风云","name":"持国天王回忆录","maps":[{"map_id":"131","mode":"10人普通"},{"map_id":"148","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/131.jpg","boss":["提多罗吒","萧沙"],"client":["std","all"]},"烛龙殿":{"devide_level":"80","devide_name":"巴蜀风云","name":"烛龙殿","maps":[{"map_id":"133","mode":"25人英雄"},{"map_id":"134","mode":"10人普通"}],"icon":"image/fb_map_thumbnail/133.jpg","boss":["胡鞑、武逸青","陆寻","南之雷神","醉蛛老人","索笛尔","千秋子","乌蒙贵"],"client":["std","all"]},"会战唐门":{"devide_level":"80","devide_name":"巴蜀风云","name":"会战唐门","maps":[{"map_id":"136","mode":"10人普通"},{"map_id":"138","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/136.jpg","boss":["狼牙军阵","汪莽"],"client":["std","all"]},"南诏皇宫":{"devide_level":"80","devide_name":"巴蜀风云","name":"南诏皇宫","maps":[{"map_id":"140","mode":"10人普通"},{"map_id":"155","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/140.jpg","boss":["枯荣大师","段宗公、泰崇傣、阁逻鸿","萧沙","摩提耶罗","陈和尚、康雪烛、柳公子、阁逻凤","李倓"],"client":["std","all"]},"仙踪林":{"devide_level":"80","devide_name":"巴蜀风云","name":"仙踪林","maps":[{"map_id":"71","mode":"5人普通"},{"map_id":"111","mode":"5人英雄"},{"map_id":"116","mode":"20级5人普通"}],"icon":"image/fb_map_thumbnail/71.jpg","boss":["塔纳刀王","水云","苏髓"],"client":["std","all"]},"毒神殿":{"devide_level":"80","devide_name":"巴蜀风云","name":"毒神殿","maps":[{"map_id":"75","mode":"5人普通"},{"map_id":"112","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/75.jpg","boss":["塔丹茂伯","鲍穆侠","乌灵风"],"client":["std","all"]},"法王窟":{"devide_level":"80","devide_name":"巴蜀风云","name":"法王窟","maps":[{"map_id":"106","mode":"5人普通"},{"map_id":"115","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/106.jpg","boss":["胡鞑","武逸青","智慧"],"client":["std","all"]},"无量宫":{"devide_level":"80","devide_name":"巴蜀风云","name":"无量宫","maps":[{"map_id":"107","mode":"5人普通"},{"map_id":"114","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/107.jpg","boss":["桃叶仙","濯尘","多多"],"client":["std","all"]},"寂灭厅":{"devide_level":"80","devide_name":"巴蜀风云","name":"寂灭厅","maps":[{"map_id":"110","mode":"5人普通"},{"map_id":"113","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/110.jpg","boss":["藏·剑邪鸠","剑心","摩提耶罗"],"client":["std","all"]},"唐门密室":{"devide_level":"80","devide_name":"巴蜀风云","name":"唐门密室","maps":[{"map_id":"123","mode":"5人普通"},{"map_id":"125","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/123.jpg","boss":["柳惊涛","机关骰子","汉唐","密室机关"],"client":["std","all"]},"光明顶秘道":{"devide_level":"80","devide_name":"巴蜀风云","name":"光明顶秘道","maps":[{"map_id":"141","mode":"5人英雄"},{"map_id":"142","mode":"5人普通"}],"icon":"image/fb_map_thumbnail/141.jpg","boss":["问寒松","辛然、吴颖莲","薛山","西域狮王"],"client":["std","all"]}},"client":["std","all"]},"风起稻香":{"name":"风起稻香","level":"70","dungeon":{"荻花宫后山":{"devide_level":"70","devide_name":"风起稻香","name":"荻花宫后山","maps":[{"map_id":"67","mode":"10人普通"},{"map_id":"73","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/67.jpg","boss":["罗索斯","乌蛊婆婆","水烟","仄羽戈","提坦德亚罗","牡丹"],"client":["std","origin","all"]},"剑冢":{"devide_level":"70","devide_name":"风起稻香","name":"剑冢","maps":[{"map_id":"51","mode":"5人普通"},{"map_id":"62","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/51.jpg","boss":["叶芳致","叶琦菲","夜啸","叶火汐","叶昊天","叶金素","叶冬辰","叶凌烈","叶无心","叶秋池"],"client":["std","origin","all"]},"持国天王殿":{"devide_level":"70","devide_name":"风起稻香","name":"持国天王殿","maps":[{"map_id":"60","mode":"10人普通"},{"map_id":"65","mode":"25人普通"},{"map_id":"66","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/60.jpg","boss":["提多罗吒"],"client":["std","origin","all"]},"宫中神武遗迹":{"devide_level":"70","devide_name":"风起稻香","name":"宫中神武遗迹","maps":[{"map_id":"61","mode":"10人普通"},{"map_id":"63","mode":"25人英雄"},{"map_id":"64","mode":"25人普通"}],"icon":"image/fb_map_thumbnail/61.jpg","boss":["谢云流"],"client":["std","origin","all"]},"战宝迦兰":{"devide_level":"70","devide_name":"风起稻香","name":"战宝迦兰","maps":[{"map_id":"32","mode":"10人普通"},{"map_id":"46","mode":"25人英雄"}],"icon":"image/fb_map_thumbnail/32.jpg","boss":["王海银","朱癸","平等","掌火","镇恶","餐风、饮火、吞云","千手观音"],"client":["std","origin","all"]},"灵霄峡":{"devide_level":"70","devide_name":"风起稻香","name":"灵霄峡","maps":[{"map_id":"14","mode":"5人普通"},{"map_id":"45","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/14.jpg","boss":["虎啸","射云","华鹤炎","神策暗刺卫","慧钟","千叶佛像","水中月、镜中花、空中云"],"client":["std","origin","all"]},"天工坊":{"devide_level":"70","devide_name":"风起稻香","name":"天工坊","maps":[{"map_id":"17","mode":"5人普通"},{"map_id":"37","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/17.jpg","boss":["方季常","平三指","震天甲士","华铁颅","煞灵魔尸","塔玛","司徒一一"],"client":["std","origin","all"]},"无盐岛":{"devide_level":"70","devide_name":"风起稻香","name":"无盐岛","maps":[{"map_id":"18","mode":"5人普通"},{"map_id":"41","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/18.jpg","boss":["罗翼","常万山","杜姬欣","温纱儿","庞虎文","杨心羽"],"client":["std","origin","all"]},"空雾峰":{"devide_level":"70","devide_name":"风起稻香","name":"空雾峰","maps":[{"map_id":"19","mode":"5人普通"},{"map_id":"43","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/19.jpg","boss":["冯度","王彦直","鬼影小次郎","鲁飞","夕罗双","藤原樱奈","梅剑雄"],"client":["std","origin","all"]},"天地三才阵":{"devide_level":"70","devide_name":"风起稻香","name":"天地三才阵","maps":[{"map_id":"20","mode":"5人普通"},{"map_id":"36","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/20.jpg","boss":["人熊","邓文峰","商仲永","李千水","范霸","赵天龙","朴宗资"],"client":["std","origin","all"]},"荻花宫前山":{"devide_level":"70","devide_name":"风起稻香","name":"荻花宫前山","maps":[{"map_id":"26","mode":"5人普通"},{"map_id":"40","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/26.jpg","boss":["阿里曼监察使","阿里曼入教主祭司","卫栖梧","沙利亚","阿斯玛"],"client":["std","origin","all"]},"日轮山城":{"devide_level":"70","devide_name":"风起稻香","name":"日轮山城","maps":[{"map_id":"28","mode":"5人普通"},{"map_id":"44","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/28.jpg","boss":["上衫勇刀","雾影奈叶、猿飞菖蒲","源明雅","八歧大蛇","吉汰","尸灵武者","谢云流","野村一郎","服部胧藏"],"client":["std","origin","all"]},"天子峰":{"devide_level":"70","devide_name":"风起稻香","name":"天子峰","maps":[{"map_id":"33","mode":"5人普通"},{"map_id":"42","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/33.jpg","boss":["柳随风","孙敬萧","李尧","玄悲","陌香","方宇谦","玄阴子","程傲","王积薪","道衍","李裳秋","方鹤影"],"client":["std","origin","all"]},"风雨稻香村":{"devide_level":"70","devide_name":"风起稻香","name":"风雨稻香村","maps":[{"map_id":"34","mode":"5人普通"},{"map_id":"47","mode":"5人英雄"}],"icon":"image/fb_map_thumbnail/34.jpg","boss":["殷不为","肖童","刘大海","秦雷","狼牙夜暮刺客","卢元霸","齐宗强","肖红","熊奎、汪莽"],"client":["std","origin","all"]}},"client":["std","origin","all"]}}')}}]);
//# sourceMappingURL=chunk-20a13f58.11e1bbcc.js.map