(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{378:function(t,e,r){t.exports=r.p+"img/dotdot.14f2352.svg"},385:function(t,e,r){t.exports=r.p+"img/trapehead.a65c0bb.svg"},561:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-bg"},[n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"fadeIn img11",staticStyle:{top:"30px",right:"0"},attrs:{src:r(378)}}),t._v(" "),n("img",{staticClass:"enterFromRight img12",staticStyle:{right:"0"},attrs:{src:r(385)}})])])}],c={props:{article:{type:Object,default:function(){return null}}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},o=r(43),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-item post-headline"},[r("div",{staticClass:"post-content py-5 px-3"},[r("h2",{staticClass:"my-3"},[t._v(t._s(t.article.title))]),t._v(" "),r("span",{staticClass:"post-date"},[t._v(t._s(t.formatDate(t.article.createdAt)))]),t._v(" "),r("p",{staticClass:"post-summary my-2"},[t._v(t._s(t.article.description))]),t._v(" "),r("p",{staticClass:"mt-4"},[r("NuxtLink",{staticClass:"text-white post-readmore",attrs:{to:{path:"/blog/"+t.article.slug}}},[t._v("\n        Read more "),r("i",{staticClass:"fa fa-arrow-right ml-2",staticStyle:{"font-size":".7rem"}})])],1)]),t._v(" "),t._m(0)])}),n,!1,null,null,null);e.default=component.exports}}]);