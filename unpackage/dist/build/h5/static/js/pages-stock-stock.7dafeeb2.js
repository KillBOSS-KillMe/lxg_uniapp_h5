(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-stock-stock"],{3272:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-1f6d8a4e]{background-color:#f6f6f6}.investor[data-v-1f6d8a4e]{width:%?750?%}.content[data-v-1f6d8a4e]{margin-top:%?20?%;padding-bottom:%?90?%}.content .item[data-v-1f6d8a4e]{width:%?700?%;padding:%?26?%;background-color:#fff;margin-bottom:%?10?%}.content .item .top[data-v-1f6d8a4e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .item .top uni-text[data-v-1f6d8a4e]{color:#333;font-size:%?32?%;display:block;width:%?220?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.content .item .top uni-text[data-v-1f6d8a4e]:last-of-type{width:%?300?%;text-align:right;font-size:%?30?%;color:red}.content .item .itemContent[data-v-1f6d8a4e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?16?%}.content .item .itemContent uni-label[data-v-1f6d8a4e]{color:#565656;font-size:%?28?%}.content .item .itemContent uni-text[data-v-1f6d8a4e]{display:block;width:%?560?%;margin-left:%?20?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#565656;font-size:%?28?%}body.?%PAGE?%[data-v-1f6d8a4e]{background-color:#f6f6f6}',""]),t.exports=n},"3e4b":function(t,n,e){"use strict";var i={mescrollUni:e("6fe4").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"investor"},[e("mescroll-uni",{attrs:{up:t.upOption,top:"0upx"},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},down:function(n){arguments[0]=n=t.$handleEvent(n),t.downCallback.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"content"},[t._l(t.list,(function(n,i){return[e("v-uni-view",{key:i+"_0",staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go(n.id)}}},[e("v-uni-view",{staticClass:"top"},[e("v-uni-text",[t._v(t._s(n.project_name))]),e("v-uni-text",[t._v("投资金额："+t._s(n.financing_amount))])],1),e("v-uni-view",{staticClass:"itemContent"},[e("v-uni-label",{staticStyle:{"letter-spacing":"2upx"}},[t._v("联 系 人:")]),e("v-uni-text",[t._v(t._s(n.contacts))])],1),e("v-uni-view",{staticClass:"itemContent"},[e("v-uni-label",{attrs:{for:""}},[t._v("投资行业:")]),e("v-uni-text",[t._v(t._s(n.industry))])],1),e("v-uni-view",{staticClass:"itemContent"},[e("v-uni-label",{attrs:{for:""}},[t._v("投资方式:")]),e("v-uni-text",[t._v(t._s(n.financing_mode))])],1),e("v-uni-view",{staticClass:"itemContent"},[e("v-uni-label",{attrs:{for:""}},[t._v("融资用途:")]),e("v-uni-text",[t._v(t._s(n.purpose))])],1)],1)]}))],2)],1),e("v-uni-navigator",{staticClass:"btn",attrs:{url:"../postStock/postStock"}},[t._v("发布股权/投资")])],1)},o=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},"5c11":function(t,n,e){"use strict";e.r(n);var i=e("fd1c"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"6ee4":function(t,n,e){"use strict";e.r(n);var i=e("3e4b"),a=e("5c11");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("bb07");var s,r=e("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1f6d8a4e",null,!1,i["a"],s);n["default"]=c.exports},"8b53":function(t,n,e){var i=e("3272");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("129f9f3b",i,!0,{sourceMap:!1,shadowMode:!1})},bb07:function(t,n,e){"use strict";var i=e("8b53"),a=e.n(i);a.a},fd1c:function(t,n,e){"use strict";var i=e("ee27");e("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("e03d"),o=i(e("2ed5")),s=(e("2f62"),{data:function(){return{upOption:{textNoMore:"木有更多了",empty:{tip:"~ 暂无内容 ~"}},list:[]}},onShow:function(){this.canReset&&this.mescroll&&this.mescroll.resetUpScroll(),this.canReset=!0},methods:{upCallback:function(t){var n=this;this.getList(t,(function(e){t.endSuccess(e.length,!1),1==t.num&&(n.list=[]),n.list=n.list.concat(e)}))},getList:function(t,n){(0,a.ajax)({url:o.default.getFinancing,type:"GET",data:{page_size:10,page:t.num}}).then((function(t){if("ok"==t.status_code){var e=t.data.data||[];n(e)}else{e=[];n(e)}}))},go:function(t){uni.navigateTo({url:"../stockDetail/stockDetail?id=".concat(t)})}}});n.default=s}}]);