<<<<<<< HEAD:_nuxt/c8921c7.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[28,5,6,7,9,20],{507:function(t,e,o){var content=o(510);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("49dfd71e",content,!0,{sourceMap:!1})},509:function(t,e,o){"use strict";o(507)},510:function(t,e,o){var n=o(17),r=o(53),l=o(276),c=n(!1),d=r(l);c.push([t.i,".btn-totop{background-image:url("+d+");height:50px;width:50px;right:20px;background-repeat:no-repeat;background-size:10px;background-position:50%}.btn-totop-slide-down,.btn-totop-slide-up{bottom:20px}@media screen and (max-width:768px){.btn-totop{bottom:80px}.btn-totop-slide-up{-webkit-animation:btnTotopSlideUp .5s;animation:btnTotopSlideUp .5s;bottom:80px}.btn-totop-slide-down{-webkit-animation:btnTotopSlideDown .5s;animation:btnTotopSlideDown .5s;bottom:20px}}@-webkit-keyframes btnTotopSlideUp{0%{bottom:20px}to{bottom:80}}@keyframes btnTotopSlideUp{0%{bottom:20px}to{bottom:80}}@-webkit-keyframes btnTotopSlideDown{0%{bottom:80px}to{bottom:20px}}@keyframes btnTotopSlideDown{0%{bottom:80px}to{bottom:20px}}",""]),t.exports=c},511:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{currentScrollTop:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.getElementById("btn-totop-el");t&&(this.currentScrollTop>window.scrollY?(t.classList.remove("btn-totop-slide-down"),t.classList.add("btn-totop-slide-up")):(t.classList.remove("btn-totop-slide-up"),t.classList.add("btn-totop-slide-down"))),this.currentScrollTop=window.scrollY},scrollTop:function(){window.scroll({top:0,behavior:"smooth"})}}},r=(o(509),o(39)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn btn-darkblue btn-floating btn-totop circle",attrs:{id:"btn-totop-el"},on:{click:function(e){return t.scrollTop()}}})}),[],!1,null,null,null);e.default=component.exports},513:function(t,e,o){"use strict";o.r(e);var n={computed:{pageview:function(){return this.$store.state.pageview.pageview}}},r=o(39),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"text-center mt-4"},[o("small",[t._v("Created By Putu Jhonarendra. Pageviews: "+t._s(t.pageview.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")))])])}),[],!1,null,null,null);e.default=component.exports},657:function(t,e,o){"use strict";o.r(e);o(375);var n={props:{article:{type:Object,default:function(){return null}},index:{type:Number,default:function(){return null}}}},r=o(39),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-item"},[n("div",{staticClass:"post-head"},[n("div",{staticClass:"post-content p-3"},[n("h2",{staticClass:"h4 mt-5 mb-0"},[t._v("\n        "+t._s(t.article.title)+"\n      ")])]),t._v(" "),n("div",{staticClass:"post-bg"},[t.index%4==0?n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"img21",staticStyle:{top:"-30px",left:"-30px"},attrs:{src:o(275)}}),t._v(" "),n("img",{staticClass:"img22",staticStyle:{right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:o(278)}})]):t.index%4==1?n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"img31",staticStyle:{top:"-30px",right:"-100px"},attrs:{src:o(275)}}),t._v(" "),n("img",{staticClass:"img32",staticStyle:{top:"-30px",left:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:o(277)}})]):t.index%4==2?n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"img41",staticStyle:{top:"-30px",left:"-30px"},attrs:{src:o(275)}}),t._v(" "),n("img",{staticClass:"img42",staticStyle:{transform:"rotateX(180deg)",right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))"},attrs:{src:o(278)}})]):t.index%4==3?n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"img51",staticStyle:{top:"-30px",left:"-100px"},attrs:{src:o(275)}}),t._v(" "),n("img",{staticClass:"img52",staticStyle:{transform:"rotateY(180deg)",top:"-30px",right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:o(277)}})]):t._e()])]),t._v(" "),n("div",{staticClass:"post-body p-3"},[n("span",{staticClass:"post-date"},[t._v(t._s(t.$dateFormat(t.article.createdAt)))]),t._v(" "),n("p",{staticClass:"post-summary my-2"},[t._v("\n      "+t._s(t.article.description)+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-4"},[n("NuxtLink",{staticClass:"text-white post-readmore",attrs:{to:{path:"/blog/"+t.article.slug}}},[t._v("\n        Read more "),n("i",{staticClass:"fa fa-arrow-right ml-2",staticStyle:{"font-size":".7rem"}})])],1)])])}),[],!1,null,null,null);e.default=component.exports},669:function(t,e,o){var content=o(694);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("11aa2c8e",content,!0,{sourceMap:!1})},683:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-bg"},[n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"fadeIn img11",staticStyle:{top:"30px",right:"0"},attrs:{src:o(275)}}),t._v(" "),n("img",{staticClass:"enterFromRight img12",staticStyle:{right:"0"},attrs:{src:o(279)}})])])}],r={props:{article:{type:Object,default:function(){return null}}}},l=o(39),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post-item post-headline"},[o("div",{staticClass:"post-content py-5 px-3"},[o("h2",{staticClass:"my-3"},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),o("span",{staticClass:"post-date"},[t._v(t._s(t.$dateFormat(t.article.createdAt)))]),t._v(" "),o("p",{staticClass:"post-summary my-2"},[t._v("\n      "+t._s(t.article.description)+"\n    ")]),t._v(" "),o("p",{staticClass:"mt-4"},[o("NuxtLink",{staticClass:"text-white post-readmore",attrs:{to:{path:"/blog/"+t.article.slug}}},[t._v("\n        Read more "),o("i",{staticClass:"fa fa-arrow-right ml-2",staticStyle:{"font-size":".7rem"}})])],1)]),t._v(" "),t._m(0)])}),n,!1,null,null,null);e.default=component.exports},684:function(t,e,o){"use strict";o.r(e);var n={props:{articles:{type:Array,default:function(){return null}}}},r=o(39),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},t._l(t.articles,(function(article,i){return o("div",{key:article.slug,staticClass:"col-md-6 my-3"},[o("BlogArticleItem",{attrs:{article:article,index:i}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogArticleItem:o(657).default})},693:function(t,e,o){"use strict";o(669)},694:function(t,e,o){var n=o(17)(!1);n.push([t.i,'#blog-page{position:relative}.blog{padding-top:70px}.blog-page-title h3{margin-top:100px}.post-item,.post-item .post-head{position:relative;overflow:hidden;z-index:0}.post-item .post-head,.post-item.post-headline{background:#000145}.post-content{position:relative;z-index:0}.post-bg{top:0;z-index:-1;width:100%;height:auto}.post-bg,.post-bg img{position:absolute}.post-bg img.fadeIn{opacity:0;-webkit-animation:fadeIn 2s forwards;animation:fadeIn 2s forwards}.post-bg img.enterFromRight{opacity:0;-webkit-animation:enterFromRight 2s forwards;animation:enterFromRight 2s forwards}.post-bg img.img11{-webkit-animation-delay:1s;animation-delay:1s}.post-bg img.img12{-webkit-animation-delay:2s;animation-delay:2s}.post-bg img.img21,.post-bg img.img22,.post-bg img.img31,.post-bg img.img32,.post-bg img.img41,.post-bg img.img42,.post-bg img.img51,.post-bg img.img52{opacity:0}.post-date,.post-label,.post-readmore{font-family:"Courier"}@-webkit-keyframes enterFromRight{0%{opacity:0;right:-300px}to{opacity:1;right:0}}@keyframes enterFromRight{0%{opacity:0;right:-300px}to{opacity:1;right:0}}@media screen and (max-width:767px){.blog-page-title{text-align:center}.blog-page-title h3{margin-top:0}}@media screen and (max-width:576px){.blog-wrapper{width:100%}}',""]),t.exports=n},716:function(t,e,o){"use strict";o.r(e);var n=o(19),r=(o(50),o(143),o(2),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,t.params,e.next=3,o("articles").only(["title","description","img","slug","author","createdAt"]).sortBy("createdAt","desc").limit(5).fetch();case 3:return n=e.sent,r=n[0],n.splice(0,1),e.abrupt("return",{articles:n,headline:r});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{articleLimit:5,isCanLoadMore:!0,isLoadingLoadMore:!1}},head:{title:"Blog | Putu Jhonarendra"},mounted:function(){window.addEventListener("scroll",this.handleScroll),window.scroll({top:0,behavior:"smooth"})},methods:{loadArticles:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles").only(["title","description","img","slug","author","createdAt"]).sortBy("createdAt","desc").limit(data.limit).fetch();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},loadMore:function(){var t=this;this.articleLimit+=4,this.isLoadingLoadMore=!0,this.loadArticles({limit:this.articleLimit}).then((function(e){var o=e;t.headline=o[0],o.splice(0,1),t.articles=o,e.length<t.articleLimit&&(t.isCanLoadMore=!1),t.isLoadingLoadMore=!1}))},handleScroll:function(){if(0!==document.getElementsByClassName("img21").length){var t=window.scrollY,e=window.innerHeight,o=100,n=document.querySelectorAll(".img21"),r=document.querySelectorAll(".img22"),l=t+document.getElementsByClassName("img21")[0].getBoundingClientRect().top;t>(l=l-e+o)&&(n.forEach((function(t){t.classList.add("fadeIn")})),r.forEach((function(t){t.classList.add("enterFromRight")})));var c=document.querySelectorAll(".img31"),d=document.querySelectorAll(".img32"),m=t+document.getElementsByClassName("img31")[0].getBoundingClientRect().top;t>(m=m-e+o)&&(c.forEach((function(t){t.classList.add("fadeIn")})),d.forEach((function(t){t.classList.add("enterFromRight")})));var f=document.querySelectorAll(".img41"),h=document.querySelectorAll(".img42"),v=t+document.getElementsByClassName("img41")[0].getBoundingClientRect().top;t>(v=v-e+o)&&(f.forEach((function(t){t.classList.add("fadeIn")})),h.forEach((function(t){t.classList.add("enterFromRight")})));var y=document.querySelectorAll(".img51"),w=document.querySelectorAll(".img52"),x=t+document.getElementsByClassName("img51")[0].getBoundingClientRect().top;t>(x=x-e+o)&&(y.forEach((function(t){t.classList.add("fadeIn")})),w.forEach((function(t){t.classList.add("enterFromRight")})))}}}}),l=(o(693),o(39)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"blog-page"}},[o("div",{staticClass:"blog container"},[o("div",{staticClass:"blog-wrapper"},[o("div",{staticClass:"row"},[t._m(0),t._v(" "),o("div",{staticClass:"col-md-6 my-3"},[o("BlogArticleHeadline",{attrs:{article:t.headline}})],1)]),t._v(" "),o("BlogArticleList",{attrs:{articles:t.articles}}),t._v(" "),o("p",{staticClass:"text-center"},[t.isCanLoadMore?o("button",{staticClass:"btn btn-rounded btn-darkblue btn-sm m-2",attrs:{disabled:t.isLoadingLoadMore},on:{click:t.loadMore}},[t._v("\n          "+t._s(t.isLoadingLoadMore?"Loading...":"Load More")+"\n        ")]):t._e()])],1),t._v(" "),o("LandingpageTheFooter"),t._v(" "),o("ButtonTotop")],1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-page-title col-md-6 my-3"},[o("h3",[t._v("Blog")]),t._v(" "),o("p",[t._v("What Im thinking about")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogArticleHeadline:o(683).default,BlogArticleList:o(684).default,LandingpageTheFooter:o(513).default,ButtonTotop:o(511).default})}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[28,5,6,7,9,20],{508:function(t,e,o){var content=o(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("49dfd71e",content,!0,{sourceMap:!1})},510:function(t,e,o){"use strict";o(508)},511:function(t,e,o){var n=o(17),r=o(53),l=o(278),c=n(!1),d=r(l);c.push([t.i,".btn-totop{background-image:url("+d+");height:50px;width:50px;right:20px;background-repeat:no-repeat;background-size:10px;background-position:50%}.btn-totop-slide-down,.btn-totop-slide-up{bottom:20px}@media screen and (max-width:768px){.btn-totop{bottom:80px}.btn-totop-slide-up{-webkit-animation:btnTotopSlideUp .5s;animation:btnTotopSlideUp .5s;bottom:80px}.btn-totop-slide-down{-webkit-animation:btnTotopSlideDown .5s;animation:btnTotopSlideDown .5s;bottom:20px}}@-webkit-keyframes btnTotopSlideUp{0%{bottom:20px}to{bottom:80}}@keyframes btnTotopSlideUp{0%{bottom:20px}to{bottom:80}}@-webkit-keyframes btnTotopSlideDown{0%{bottom:80px}to{bottom:20px}}@keyframes btnTotopSlideDown{0%{bottom:80px}to{bottom:20px}}",""]),t.exports=c},512:function(t,e,o){"use strict";o.r(e);var n={computed:{pageview:function(){return this.$store.state.pageview.pageview}}},r=o(39),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"text-center mt-4"},[o("small",[t._v("Created By Putu Jhonarendra. Pageviews: "+t._s(t.pageview.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")))])])}),[],!1,null,null,null);e.default=component.exports},513:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{currentScrollTop:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.getElementById("btn-totop-el");t&&(this.currentScrollTop>window.scrollY?(t.classList.remove("btn-totop-slide-down"),t.classList.add("btn-totop-slide-up")):(t.classList.remove("btn-totop-slide-up"),t.classList.add("btn-totop-slide-down"))),this.currentScrollTop=window.scrollY},scrollTop:function(){window.scroll({top:0,behavior:"smooth"})}}},r=(o(510),o(39)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn btn-darkblue btn-floating btn-totop circle",attrs:{id:"btn-totop-el"},on:{click:function(e){return t.scrollTop()}}})}),[],!1,null,null,null);e.default=component.exports},657:function(t,e,o){"use strict";o.r(e);o(375);var n={props:{article:{type:Object,default:function(){return null}},index:{type:Number,default:function(){return null}}}},r=o(39),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-item"},[n("div",{staticClass:"post-head"},[n("div",{staticClass:"post-content p-3"},[n("h2",{staticClass:"h4 mt-5 mb-0"},[t._v("\n        "+t._s(t.article.title)+"\n      ")])]),t._v(" "),n("div",{staticClass:"post-bg"},[t.index%4==0?n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"img21",staticStyle:{top:"-30px",left:"-30px"},attrs:{src:o(275)}}),t._v(" "),n("img",{staticClass:"img22",staticStyle:{right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:o(277)}})]):t.index%4==1?n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"img31",staticStyle:{top:"-30px",right:"-100px"},attrs:{src:o(275)}}),t._v(" "),n("img",{staticClass:"img32",staticStyle:{top:"-30px",left:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:o(276)}})]):t.index%4==2?n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"img41",staticStyle:{top:"-30px",left:"-30px"},attrs:{src:o(275)}}),t._v(" "),n("img",{staticClass:"img42",staticStyle:{transform:"rotateX(180deg)",right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))"},attrs:{src:o(277)}})]):t.index%4==3?n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"img51",staticStyle:{top:"-30px",left:"-100px"},attrs:{src:o(275)}}),t._v(" "),n("img",{staticClass:"img52",staticStyle:{transform:"rotateY(180deg)",top:"-30px",right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:o(276)}})]):t._e()])]),t._v(" "),n("div",{staticClass:"post-body p-3"},[n("span",{staticClass:"post-date"},[t._v(t._s(t.$dateFormat(t.article.createdAt)))]),t._v(" "),n("p",{staticClass:"post-summary my-2"},[t._v("\n      "+t._s(t.article.description)+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-4"},[n("NuxtLink",{staticClass:"text-white post-readmore",attrs:{to:{path:"/blog/"+t.article.slug}}},[t._v("\n        Read more "),n("i",{staticClass:"fa fa-arrow-right ml-2",staticStyle:{"font-size":".7rem"}})])],1)])])}),[],!1,null,null,null);e.default=component.exports},669:function(t,e,o){var content=o(693);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("11aa2c8e",content,!0,{sourceMap:!1})},682:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-bg"},[n("div",{staticStyle:{position:"relative",width:"100%"}},[n("img",{staticClass:"fadeIn img11",staticStyle:{top:"30px",right:"0"},attrs:{src:o(275)}}),t._v(" "),n("img",{staticClass:"enterFromRight img12",staticStyle:{right:"0"},attrs:{src:o(279)}})])])}],r={props:{article:{type:Object,default:function(){return null}}}},l=o(39),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post-item post-headline"},[o("div",{staticClass:"post-content py-5 px-3"},[o("h2",{staticClass:"my-3"},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),o("span",{staticClass:"post-date"},[t._v(t._s(t.$dateFormat(t.article.createdAt)))]),t._v(" "),o("p",{staticClass:"post-summary my-2"},[t._v("\n      "+t._s(t.article.description)+"\n    ")]),t._v(" "),o("p",{staticClass:"mt-4"},[o("NuxtLink",{staticClass:"text-white post-readmore",attrs:{to:{path:"/blog/"+t.article.slug}}},[t._v("\n        Read more "),o("i",{staticClass:"fa fa-arrow-right ml-2",staticStyle:{"font-size":".7rem"}})])],1)]),t._v(" "),t._m(0)])}),n,!1,null,null,null);e.default=component.exports},683:function(t,e,o){"use strict";o.r(e);var n={props:{articles:{type:Array,default:function(){return null}}}},r=o(39),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},t._l(t.articles,(function(article,i){return o("div",{key:article.slug,staticClass:"col-md-6 my-3"},[o("BlogArticleItem",{attrs:{article:article,index:i}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogArticleItem:o(657).default})},692:function(t,e,o){"use strict";o(669)},693:function(t,e,o){var n=o(17)(!1);n.push([t.i,'#blog-page{position:relative}.blog{padding-top:70px}.blog-page-title h3{margin-top:100px}.post-item,.post-item .post-head{position:relative;overflow:hidden;z-index:0}.post-item .post-head,.post-item.post-headline{background:#000145}.post-content{position:relative;z-index:0}.post-bg{top:0;z-index:-1;width:100%;height:auto}.post-bg,.post-bg img{position:absolute}.post-bg img.fadeIn{opacity:0;-webkit-animation:fadeIn 2s forwards;animation:fadeIn 2s forwards}.post-bg img.enterFromRight{opacity:0;-webkit-animation:enterFromRight 2s forwards;animation:enterFromRight 2s forwards}.post-bg img.img11{-webkit-animation-delay:1s;animation-delay:1s}.post-bg img.img12{-webkit-animation-delay:2s;animation-delay:2s}.post-bg img.img21,.post-bg img.img22,.post-bg img.img31,.post-bg img.img32,.post-bg img.img41,.post-bg img.img42,.post-bg img.img51,.post-bg img.img52{opacity:0}.post-date,.post-label,.post-readmore{font-family:"Courier"}@-webkit-keyframes enterFromRight{0%{opacity:0;right:-300px}to{opacity:1;right:0}}@keyframes enterFromRight{0%{opacity:0;right:-300px}to{opacity:1;right:0}}@media screen and (max-width:767px){.blog-page-title{text-align:center}.blog-page-title h3{margin-top:0}}@media screen and (max-width:576px){.blog-wrapper{width:100%}}',""]),t.exports=n},713:function(t,e,o){"use strict";o.r(e);var n=o(19),r=(o(50),o(143),o(2),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,t.params,e.next=3,o("articles").only(["title","description","img","slug","author","createdAt"]).sortBy("createdAt","desc").limit(5).fetch();case 3:return n=e.sent,r=n[0],n.splice(0,1),e.abrupt("return",{articles:n,headline:r});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{articleLimit:5,isCanLoadMore:!0,isLoadingLoadMore:!1}},head:{title:"Blog | Putu Jhonarendra"},mounted:function(){window.addEventListener("scroll",this.handleScroll),window.scroll({top:0,behavior:"smooth"})},methods:{loadArticles:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles").only(["title","description","img","slug","author","createdAt"]).sortBy("createdAt","desc").limit(data.limit).fetch();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},loadMore:function(){var t=this;this.articleLimit+=4,this.isLoadingLoadMore=!0,this.loadArticles({limit:this.articleLimit}).then((function(e){var o=e;t.headline=o[0],o.splice(0,1),t.articles=o,e.length<t.articleLimit&&(t.isCanLoadMore=!1),t.isLoadingLoadMore=!1}))},handleScroll:function(){if(0!==document.getElementsByClassName("img21").length){var t=window.scrollY,e=window.innerHeight,o=100,n=document.querySelectorAll(".img21"),r=document.querySelectorAll(".img22"),l=t+document.getElementsByClassName("img21")[0].getBoundingClientRect().top;t>(l=l-e+o)&&(n.forEach((function(t){t.classList.add("fadeIn")})),r.forEach((function(t){t.classList.add("enterFromRight")})));var c=document.querySelectorAll(".img31"),d=document.querySelectorAll(".img32"),m=t+document.getElementsByClassName("img31")[0].getBoundingClientRect().top;t>(m=m-e+o)&&(c.forEach((function(t){t.classList.add("fadeIn")})),d.forEach((function(t){t.classList.add("enterFromRight")})));var f=document.querySelectorAll(".img41"),h=document.querySelectorAll(".img42"),v=t+document.getElementsByClassName("img41")[0].getBoundingClientRect().top;t>(v=v-e+o)&&(f.forEach((function(t){t.classList.add("fadeIn")})),h.forEach((function(t){t.classList.add("enterFromRight")})));var y=document.querySelectorAll(".img51"),w=document.querySelectorAll(".img52"),x=t+document.getElementsByClassName("img51")[0].getBoundingClientRect().top;t>(x=x-e+o)&&(y.forEach((function(t){t.classList.add("fadeIn")})),w.forEach((function(t){t.classList.add("enterFromRight")})))}}}}),l=(o(692),o(39)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"blog-page"}},[o("div",{staticClass:"blog container"},[o("div",{staticClass:"blog-wrapper"},[o("div",{staticClass:"row"},[t._m(0),t._v(" "),o("div",{staticClass:"col-md-6 my-3"},[o("BlogArticleHeadline",{attrs:{article:t.headline}})],1)]),t._v(" "),o("BlogArticleList",{attrs:{articles:t.articles}}),t._v(" "),o("p",{staticClass:"text-center"},[t.isCanLoadMore?o("button",{staticClass:"btn btn-rounded btn-darkblue btn-sm m-2",attrs:{disabled:t.isLoadingLoadMore},on:{click:t.loadMore}},[t._v("\n          "+t._s(t.isLoadingLoadMore?"Loading...":"Load More")+"\n        ")]):t._e()])],1),t._v(" "),o("LandingpageTheFooter"),t._v(" "),o("ButtonTotop")],1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-page-title col-md-6 my-3"},[o("h3",[t._v("Blog")]),t._v(" "),o("p",[t._v("What Im thinking about")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogArticleHeadline:o(682).default,BlogArticleList:o(683).default,LandingpageTheFooter:o(512).default,ButtonTotop:o(513).default})}}]);
>>>>>>> 1b354d68aea52f6f8e78b53caf8264a47653828a:_nuxt/811cb3d.js
