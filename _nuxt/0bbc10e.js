(window.webpackJsonp=window.webpackJsonp||[]).push([[28,8,9],{511:function(t,o,e){var content=e(514);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("49dfd71e",content,!0,{sourceMap:!1})},513:function(t,o,e){"use strict";e(511)},514:function(t,o,e){var n=e(18),l=e(53),r=e(276),c=n(!1),d=l(r);c.push([t.i,".btn-totop{background-image:url("+d+");height:50px;width:50px;right:20px;background-repeat:no-repeat;background-size:10px;background-position:50%}.btn-totop-slide-down,.btn-totop-slide-up{bottom:20px}@media screen and (max-width:768px){.btn-totop{bottom:80px}.btn-totop-slide-up{-webkit-animation:btnTotopSlideUp .5s;animation:btnTotopSlideUp .5s;bottom:80px}.btn-totop-slide-down{-webkit-animation:btnTotopSlideDown .5s;animation:btnTotopSlideDown .5s;bottom:20px}}@-webkit-keyframes btnTotopSlideUp{0%{bottom:20px}to{bottom:80}}@keyframes btnTotopSlideUp{0%{bottom:20px}to{bottom:80}}@-webkit-keyframes btnTotopSlideDown{0%{bottom:80px}to{bottom:20px}}@keyframes btnTotopSlideDown{0%{bottom:80px}to{bottom:20px}}",""]),t.exports=c},515:function(t,o,e){"use strict";e.r(o);var n={data:function(){return{currentScrollTop:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.getElementById("btn-totop-el");t&&(this.currentScrollTop>window.scrollY?(t.classList.remove("btn-totop-slide-down"),t.classList.add("btn-totop-slide-up")):(t.classList.remove("btn-totop-slide-up"),t.classList.add("btn-totop-slide-down"))),this.currentScrollTop=window.scrollY},scrollTop:function(){window.scroll({top:0,behavior:"smooth"})}}},l=(e(513),e(39)),component=Object(l.a)(n,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("button",{staticClass:"btn btn-darkblue btn-floating btn-totop circle",attrs:{id:"btn-totop-el"},on:{click:function(o){return t.scrollTop()}}})}),[],!1,null,null,null);o.default=component.exports},679:function(t,o,e){var content=e(709);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("083745fe",content,!0,{sourceMap:!1})},697:function(t,o,e){"use strict";e.r(o);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},l=e(39),component=Object(l.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"blogpost-footer row mt-5"},[e("div",{staticClass:"col-6"},[t.prev?e("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[e("i",{staticClass:"fas fa-chevron-left mr-2"}),t._v(t._s(t.prev.title)+"\n    ")]):e("span",[t._v("This is newest post")])],1),t._v(" "),e("div",{staticClass:"col-6 text-right"},[t.next?e("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n      "+t._s(t.next.title)),e("i",{staticClass:"fas fa-chevron-right ml-2"})]):e("span",[t._v("This is last post")])],1)])}),[],!1,null,null,null);o.default=component.exports},708:function(t,o,e){"use strict";e(679)},709:function(t,o,e){var n=e(18)(!1);n.push([t.i,'#blogpost-page{position:relative}#blogpost-page article img{width:100%}.blogpost{padding-top:70px}.blogpost-loader{-webkit-animation:pulseFade 1s infinite;animation:pulseFade 1s infinite}.blogpost-head{background:#000145;position:relative;overflow:hidden;z-index:0;padding:1rem}.blogpost-bg-overlay{background:#000145;opacity:.7}.blogpost-bg-overlay,.blogpost-img-thumb{position:absolute;width:100%;height:200px;transform:scale(1.2)}.blogpost-img-thumb{filter:blur(8px);-webkit-filter:blur(8px)}.blogpost-post-title{margin-top:100px}.blogpost-info{font-family:"Courier";padding:20px 0;margin-bottom:40px;border-bottom:1px dotted #999}.blogpost-breadcrumb i,.blogpost-footer i{font-size:.7rem}.blogpost-content{position:relative;z-index:0}.blogpost-bg{top:0;z-index:-1;width:100%;height:auto}.blogpost-bg,.blogpost-bg img{position:absolute}.blogpost-bg img.fadeIn{opacity:0;-webkit-animation:fadeIn 2s forwards;animation:fadeIn 2s forwards}.blogpost-bg img.enterFromRight{opacity:0;-webkit-animation:enterFromRight 2s forwards;animation:enterFromRight 2s forwards}.blogpost-footer a{color:#fff}.blogpost-footer span{color:grey}code[class*=language-],pre[class*=language-]{background:#141414}@media screen and (max-width:576px){.blogpost-wrapper{width:100%}}',""]),t.exports=n},730:function(t,o,e){"use strict";e.r(o);var n=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"fadeIn img11",staticStyle:{top:"30px",right:"0"},attrs:{src:e(275)}}),t._v(" "),n("img",{staticClass:"enterFromRight img12",staticStyle:{right:"0"},attrs:{src:e(279)}})])}],l=e(31),r=e(16),c=(e(48),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function o(){var e,n,article,r,c,d,m;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.$content,n=t.params,o.next=3,e("articles",n.slug).fetch();case 3:return article=o.sent,o.next=6,e("articles").only(["title","slug"]).sortBy("createdAt","desc").surround(n.slug).fetch();case 6:return r=o.sent,c=Object(l.a)(r,2),d=c[0],m=c[1],o.abrupt("return",{article:article,prev:d,next:m});case 11:case"end":return o.stop()}}),o)})))()},head:function(){return{title:this.article.title+" | Putu Jhonarendra"}}}),d=(e(708),e(39)),component=Object(d.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"blogpost-page"}},[e("div",{staticClass:"blogpost container"},[e("div",{staticClass:"blogpost-wrapper",staticStyle:{"padding-bottom":"100px"}},[e("div",{staticClass:"blogpost-head"},[e("div",{staticClass:"blogpost-content"},[e("p",{staticClass:"blogpost-breadcrumb"},[e("NuxtLink",{staticClass:"text-white",attrs:{to:{path:"/"}}},[t._v("\n              Home\n            ")]),t._v(" "),e("i",{staticClass:"fa fa-chevron-right mx-2"}),t._v(" "),e("NuxtLink",{staticClass:"text-white",attrs:{to:{path:"/blog/"}}},[t._v("\n              Blog\n            ")]),t._v(" "),e("i",{staticClass:"fa fa-chevron-right mx-2"}),t._v("\n            "+t._s(t.article.title)+"\n          ")],1),t._v(" "),e("h2",{staticClass:"blogpost-post-title"},[t._v("\n            "+t._s(t.article.title)+"\n          ")])]),t._v(" "),e("div",{staticClass:"blogpost-bg"},[e("div",{staticClass:"blogpost-img-thumb",style:{backgroundImage:"url("+t.article.img+")"}}),t._v(" "),e("div",{staticClass:"blogpost-bg-overlay"}),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"blogpost-info"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("small",[t._v("Posted on "+t._s(t.$dateFormat(t.article.createdAt)))]),e("br")])])]),t._v(" "),e("ul",t._l(t.article.toc,(function(link){return e("li",{key:link.id},[e("NuxtLink",{attrs:{to:"#"+link.id}},[t._v("\n            "+t._s(link.text)+"\n          ")])],1)})),0),t._v(" "),e("article",{staticStyle:{"min-height":"80vh"}},[e("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),e("BlogPrevNext",{attrs:{prev:t.prev,next:t.next}})],1)]),t._v(" "),e("ButtonTotop")],1)}),n,!1,null,null,null);o.default=component.exports;installComponents(component,{BlogPrevNext:e(697).default,ButtonTotop:e(515).default})}}]);