(window.webpackJsonp=window.webpackJsonp||[]).push([[32,8,9,22],{527:function(t,e,o){var content=o(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("49dfd71e",content,!0,{sourceMap:!1})},530:function(t,e,o){"use strict";o(527)},531:function(t,e,o){var n=o(18),l=o(53),r=o(277),c=n(!1),d=l(r);c.push([t.i,".btn-totop{background-image:url("+d+");height:50px;width:50px;right:20px;background-repeat:no-repeat;background-size:10px;background-position:50%}.btn-totop-slide-down,.btn-totop-slide-up{bottom:20px}@media screen and (max-width:768px){.btn-totop{bottom:80px}.btn-totop-slide-up{-webkit-animation:btnTotopSlideUp .5s;animation:btnTotopSlideUp .5s;bottom:80px}.btn-totop-slide-down{-webkit-animation:btnTotopSlideDown .5s;animation:btnTotopSlideDown .5s;bottom:20px}}@-webkit-keyframes btnTotopSlideUp{0%{bottom:20px}to{bottom:80}}@keyframes btnTotopSlideUp{0%{bottom:20px}to{bottom:80}}@-webkit-keyframes btnTotopSlideDown{0%{bottom:80px}to{bottom:20px}}@keyframes btnTotopSlideDown{0%{bottom:80px}to{bottom:20px}}",""]),t.exports=c},532:function(t,e,o){"use strict";o.r(e);var n={computed:{pageview:function(){return this.$store.state.pageview.pageview}}},l=o(30),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"text-center mt-4"},[o("small",[t._v("Created By Putu Jhonarendra. Pageviews: "+t._s(t.pageview.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")))])])}),[],!1,null,null,null);e.default=component.exports},533:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{currentScrollTop:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.getElementById("btn-totop-el");t&&(this.currentScrollTop>window.scrollY?(t.classList.remove("btn-totop-slide-down"),t.classList.add("btn-totop-slide-up")):(t.classList.remove("btn-totop-slide-up"),t.classList.add("btn-totop-slide-down"))),this.currentScrollTop=window.scrollY},scrollTop:function(){window.scroll({top:0,behavior:"smooth"})}}},l=(o(530),o(30)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn btn-darkblue btn-floating btn-totop circle",attrs:{id:"btn-totop-el"},on:{click:function(e){return t.scrollTop()}}})}),[],!1,null,null,null);e.default=component.exports},550:function(t,e,o){"use strict";var n=o(11),l=o(101).findIndex,r=o(102),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},711:function(t,e,o){var content=o(746);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("083745fe",content,!0,{sourceMap:!1})},733:function(t,e,o){"use strict";o.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},l=o(30),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blogpost-footer row mt-5"},[o("div",{staticClass:"col-12 col-md-6"},[t.prev?o("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}},title:t.prev.title}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 my-2"},[o("i",{staticClass:"fas fa-chevron-left mr-2"}),t._v("Previous\n        ")]),t._v(" "),o("div",{staticClass:"col-3"},[o("img",{staticClass:"w-100",attrs:{src:t.prev.img,alt:t.prev.alt,title:t.prev.title}})]),t._v(" "),o("div",{staticClass:"col-9"},[o("h5",[t._v(t._s(t.prev.title))]),t._v(" "),o("p",[t._v("\n            "+t._s(t.prev.description)+"\n          ")])])])]):t._e()],1),t._v(" "),o("div",{staticClass:"col-12 col-md-6"},[t.next?o("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}},title:t.next.title}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 my-2 text-left text-md-right"},[t._v("\n          Next"),o("i",{staticClass:"fas fa-chevron-right ml-2"})]),t._v(" "),o("div",{staticClass:"col-3"},[o("img",{staticClass:"w-100",attrs:{src:t.next.img,alt:t.next.alt,title:t.next.title}})]),t._v(" "),o("div",{staticClass:"col-9"},[o("h5",[t._v(t._s(t.next.title))]),t._v(" "),o("p",[t._v("\n            "+t._s(t.next.description)+"\n          ")])])])]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports},745:function(t,e,o){"use strict";o(711)},746:function(t,e,o){var n=o(18)(!1);n.push([t.i,'#blogpost-page{position:relative}#blogpost-page article img{width:100%}.blogpost{padding-top:70px}.blogpost-loader{-webkit-animation:pulseFade 1s infinite;animation:pulseFade 1s infinite}.blogpost-head{background:#000145;position:relative;overflow:hidden;z-index:0;padding:1rem}.blogpost-bg-overlay{background:#000145;opacity:.7}.blogpost-bg-overlay,.blogpost-img-thumb{position:absolute;width:100%;height:200px;transform:scale(1.2)}.blogpost-img-thumb{filter:blur(8px);-webkit-filter:blur(8px)}.blogpost-post-title{margin-top:100px}.blogpost-info{font-family:"Courier";padding:20px 0;margin-bottom:40px;border-bottom:1px solid #444}.blogpost-breadcrumb i,.blogpost-footer i{font-size:.7rem}.blogpost-content{position:relative;z-index:0}.blogpost-bg{top:0;z-index:-1;width:100%;height:auto}.blogpost-bg,.blogpost-bg img{position:absolute}.blogpost-bg img.fadeIn{opacity:0;-webkit-animation:fadeIn 2s forwards;animation:fadeIn 2s forwards}.blogpost-bg img.enterFromRight{opacity:0;-webkit-animation:enterFromRight 2s forwards;animation:enterFromRight 2s forwards}.blogpost-footer a{color:#fff}.blogpost-footer span{color:grey}@media screen and (max-width:576px){.blogpost-wrapper{width:100%}}',""]),t.exports=n},767:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blogpost-bg"},[n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"fadeIn img11",staticStyle:{top:"30px",right:"0"},attrs:{src:o(276)}}),t._v(" "),n("img",{staticClass:"enterFromRight img12",staticStyle:{right:"0"},attrs:{src:o(280)}})])])}],l=o(32),r=o(14),c=(o(46),o(550),o(54),o(68),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,n,article,r,c,d,v,m,f,h,x,_,w,i,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,n=t.params,e.next=3,o("articles",n.slug).fetch();case 3:return article=e.sent,e.next=6,o("articles").only(["title","description","img","slug","author","createdAt","date"]).sortBy("date","desc").surround(n.slug).fetch();case 6:return r=e.sent,c=Object(l.a)(r,2),d=c[0],v=c[1],e.next=12,o("articles").only(["title","description","img","slug","author","createdAt","date"]).sortBy("date","desc").fetch();case 12:for(m=e.sent,f=m.length<=5?m.length-1:5,h=m.findIndex((function(t){return t.slug===n.slug})),x=[],_=[],w=m.length>=10?100:10,i=0;i<f;i++){for(C=Math.floor(Math.random()*w);x.includes(C)||C>=m.length||C===h;)C=Math.floor(10*Math.random());x.push(C),_.push(m[C])}return e.abrupt("return",{article:article,randomArticle:_,curArticleIndex:h,prev:d,next:v});case 20:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.article.title+" | Putu Jhonarendra"}},mounted:function(){}}),d=(o(745),o(30)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"blogpost-page"}},[o("div",{staticClass:"blogpost container"},[o("div",{staticClass:"blogpost-wrapper",staticStyle:{"padding-bottom":"100px"}},[o("div",{staticClass:"blogpost-head"},[o("div",{staticClass:"blogpost-content"},[o("p",{staticClass:"blogpost-breadcrumb"},[o("NuxtLink",{staticClass:"text-white",attrs:{to:{path:"/"}}},[t._v("\n              Home\n            ")]),t._v(" "),o("i",{staticClass:"fa fa-chevron-right mx-2"}),t._v(" "),o("NuxtLink",{staticClass:"text-white",attrs:{to:{path:"/blog/"}}},[t._v("\n              Blog\n            ")]),t._v(" "),o("i",{staticClass:"fa fa-chevron-right mx-2"}),t._v("\n            "+t._s(t.article.title)+"\n          ")],1),t._v(" "),o("h2",{staticClass:"blogpost-post-title"},[t._v("\n            "+t._s(t.article.title)+"\n          ")])]),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticClass:"blogpost-info"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("small",[t._v("Posted on "+t._s(t.$dateFormat(t.article.date)))]),o("br")])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-8"},[t.article.toc.length>1?o("details",{staticClass:"mb-3"},[o("summary",[t._v("Table of contents")]),t._v(" "),o("ul",{staticClass:"pl-4"},t._l(t.article.toc,(function(link){return o("li",{key:link.id,staticClass:"my-1",class:3===link.depth?"pl-2":"",staticStyle:{"list-style":"none"}},[o("NuxtLink",{staticClass:"text-white",attrs:{to:"#"+link.id}},[t._v("\n                  "+t._s(link.text)+"\n                ")])],1)})),0)]):t._e(),t._v(" "),o("article",{staticStyle:{"min-height":"80vh"}},[o("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),o("BlogPrevNext",{attrs:{prev:t.prev,next:t.next}})],1),t._v(" "),o("div",{staticClass:"col-lg-4"},[o("h3",{staticClass:"my-3"},[t._v("\n            You might like\n          ")]),t._v(" "),t._l(t.randomArticle,(function(e){return o("div",{key:e.slug,staticClass:"py-1"},[o("NuxtLink",{staticClass:"row text-white",attrs:{to:"/blog/"+e.slug,title:e.title}},[o("div",{staticClass:"col-3"},[o("img",{staticClass:"w-100",attrs:{src:e.img,alt:e.alt,title:e.title}})]),t._v(" "),o("div",{staticClass:"col-9"},[o("h2",{staticStyle:{"font-size":"1.2rem"}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),o("p",[t._v("\n                  "+t._s(e.description)+"\n                ")])])])],1)}))],2)])])]),t._v(" "),o("LandingpageTheFooter"),t._v(" "),o("ButtonTotop")],1)}),n,!1,null,null,null);e.default=component.exports;installComponents(component,{BlogPrevNext:o(733).default,LandingpageTheFooter:o(532).default,ButtonTotop:o(533).default})}}]);