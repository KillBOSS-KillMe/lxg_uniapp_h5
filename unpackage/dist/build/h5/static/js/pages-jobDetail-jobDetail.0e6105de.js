(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jobDetail-jobDetail"],{"1b62":function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("e03d"),a=n(i("2ed5")),d=(i("2f62"),{data:function(){return{info:{}}},onLoad:function(t){var e=this;this.id=t.id,(0,o.ajax)({url:a.default.getJobWantedInfo,type:"POST",data:{id:this.id}}).then((function(t){"ok"==t.status_code&&(console.log(t),e.info=t.data)}))},methods:{getDetail:function(){var t=this;(0,o.ajax)({url:a.default.getJobWantedDetails,type:"POST",data:{id:this.id}}).then((function(e){"ok"==e.status_code?(console.log(e),t.info.mobile=e.data.mobile):"error"==e.status_code&&t.$refs.popup.open()}))},close:function(){this.$refs.popup.close()},navMembership:function(){uni.navigateTo({url:"../postJob/postJob"})}}});e.default=d},5243:function(t,e,i){"use strict";i.r(e);var n=i("85b7"),o=i("b537");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("dc69");var d,r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"44ed4956",null,!1,n["a"],d);e["default"]=s.exports},"58a1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-44ed4956]{background-color:#f6f6f6}.job[data-v-44ed4956]{width:%?750?%}.content[data-v-44ed4956]{width:%?700?%;padding-bottom:%?90?%;background-color:#fff;padding:%?26?%;margin-top:%?20?%}.content .top[data-v-44ed4956]{width:100%;border-bottom:%?1?% solid #eee;padding-bottom:%?30?%}.content .top .title[data-v-44ed4956]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.content .top .title uni-text[data-v-44ed4956]{color:#343434;font-size:%?30?%}.content .top .title uni-text[data-v-44ed4956]:last-of-type{color:red}.content .top > uni-text[data-v-44ed4956]{color:#565656;font-size:%?24?%;display:block;margin-top:%?6?%}.content .bottom[data-v-44ed4956]{width:100%;padding-top:%?30?%}.content .bottom uni-text[data-v-44ed4956]{color:#343434;font-size:%?30?%;display:block;margin-bottom:%?20?%}.content .bottom uni-image[data-v-44ed4956]{width:100%;height:100%}.vip-box[data-v-44ed4956]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?450?%;background:#fff;-webkit-border-radius:%?6?%;border-radius:%?6?%}.vip-box .close[data-v-44ed4956]{padding:%?20?%;position:absolute;right:0;top:0;color:#999;font-weight:700;font-size:%?40?%}.vip-box .text[data-v-44ed4956]{font-size:%?26?%;color:#909090;margin-top:%?60?%;font-weight:700;text-align:center;padding:%?0?% %?30?% 0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;line-height:1.5}.vip-box .text > uni-text[data-v-44ed4956]{display:block}.vip-box .text > uni-text[data-v-44ed4956]:first-of-type{color:#565656;font-size:%?38?%;margin-bottom:%?20?%}.vip-box .fot[data-v-44ed4956]{height:%?115?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-top:%?1?% solid #ddd;width:100%;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?30?%}.vip-box .fot > uni-view[data-v-44ed4956]{width:%?174?%;height:%?50?%;line-height:%?50?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;font-size:%?24?%;color:#fff;font-weight:700;background:-webkit-gradient(linear,left bottom,left top,from(#1173e7),to(#0154b3));background:-webkit-linear-gradient(bottom,#1173e7,#0154b3);background:linear-gradient(0deg,#1173e7,#0154b3);text-align:center}.vip-box .fot .cancel[data-v-44ed4956]{border:%?1?% solid #0076ff;color:#0076ff;background:#fff}body.?%PAGE?%[data-v-44ed4956]{background-color:#f6f6f6}',""]),t.exports=e},"85b7":function(t,e,i){"use strict";var n={uniPopup:i("fcb0").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"job"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v(t._s(t.info.post_name))]),i("v-uni-text",[t._v(t._s(t.info.salary))])],1),i("v-uni-text",[t._v(t._s(t.info.address)+"  | "+t._s(t.info.experience)+" | "+t._s(t.info.education))]),i("v-uni-text",[t._v("联系方式： "+t._s(t.info.mobile))])],1),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-text",[t._v("我的简历")]),i("v-uni-image",{attrs:{src:t.IMG_URL+t.info.resume,mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getDetail()}}},[t._v("获取联系方式")]),i("uni-popup",{ref:"popup",attrs:{type:"center"}},[i("v-uni-view",{staticClass:"vip-box"},[i("v-uni-view",{staticClass:"close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("×")]),i("v-uni-view",{staticClass:"text"},[i("v-uni-text",[t._v("发布信息")]),i("v-uni-text",[t._v("请先发布一条供求信息，即可查看联 系方式")])],1),i("v-uni-view",{staticClass:"fot"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navMembership.apply(void 0,arguments)}}},[t._v("立即发布")]),i("v-uni-view",{staticClass:"cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("取消发布")])],1)],1)],1)],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},b537:function(t,e,i){"use strict";i.r(e);var n=i("1b62"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},dc69:function(t,e,i){"use strict";var n=i("eee8"),o=i.n(n);o.a},eee8:function(t,e,i){var n=i("58a1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("3293be0a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);