(window.webpackJsonp=window.webpackJsonp||[]).push([[33,5,6,7,9,22],{585:function(t,e,o){var content=o(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("4a229952",content,!0,{sourceMap:!1})},588:function(t,e,o){"use strict";o(585)},589:function(t,e,o){var n=o(17),r=o(57),l=o(312),c=n((function(i){return i[1]})),d=r(l);c.push([t.i,".btn-totop{background-image:url("+d+");background-position:50%;background-repeat:no-repeat;background-size:10px;height:50px;right:20px;width:50px}.btn-totop-slide-down,.btn-totop-slide-up{bottom:20px}@media screen and (max-width:768px){.btn-totop{bottom:80px}.btn-totop-slide-up{animation:btnTotopSlideUp .5s;bottom:80px}.btn-totop-slide-down{animation:btnTotopSlideDown .5s;bottom:20px}}@keyframes btnTotopSlideUp{0%{bottom:20px}to{bottom:80}}@keyframes btnTotopSlideDown{0%{bottom:80px}to{bottom:20px}}",""]),c.locals={},t.exports=c},590:function(t,e,o){"use strict";o.r(e);o(11),o(21),o(1),o(42);var n={computed:{pageview:function(){return this.$store.state.pageview.pageview}}},r=o(36),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-center mt-4"},[e("small",[t._v("Created By Putu Jhonarendra. Pageviews: "+t._s(t.pageview.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")))])])}),[],!1,null,null,null);e.default=component.exports},591:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{currentScrollTop:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.getElementById("btn-totop-el");t&&(this.currentScrollTop>window.scrollY?(t.classList.remove("btn-totop-slide-down"),t.classList.add("btn-totop-slide-up")):(t.classList.remove("btn-totop-slide-up"),t.classList.add("btn-totop-slide-down"))),this.currentScrollTop=window.scrollY},scrollTop:function(){window.scroll({top:0,behavior:"smooth"})}}},r=(o(588),o(36)),component=Object(r.a)(n,(function(){var t=this;return(0,t._self._c)("button",{staticClass:"btn btn-darkblue btn-floating btn-totop circle",attrs:{id:"btn-totop-el"},on:{click:function(e){return t.scrollTop()}}})}),[],!1,null,null,null);e.default=component.exports},751:function(t,e,o){"use strict";o.r(e);o(4),o(61),o(220);var n={props:{article:{type:Object,default:function(){return null}},index:{type:Number,default:function(){return null}}}},r=o(36),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-item"},[e("div",{staticClass:"post-head"},[e("div",{staticClass:"post-content p-3"},[e("h2",{staticClass:"h4 mt-5 mb-0"},[t._v("\n        "+t._s(t.article.title)+"\n      ")])]),t._v(" "),e("div",{staticClass:"post-bg"},[t.index%4==0?e("div",{staticStyle:{position:"relative",width:"100%"}},[e("img",{staticClass:"img21",staticStyle:{top:"-30px",left:"-30px"},attrs:{src:o(311)}}),t._v(" "),e("img",{staticClass:"img22",staticStyle:{right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:o(314)}})]):t.index%4==1?e("div",{staticStyle:{position:"relative",width:"100%"}},[e("img",{staticClass:"img31",staticStyle:{top:"-30px",right:"-100px"},attrs:{src:o(311)}}),t._v(" "),e("img",{staticClass:"img32",staticStyle:{top:"-30px",left:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:o(313)}})]):t.index%4==2?e("div",{staticStyle:{position:"relative",width:"100%"}},[e("img",{staticClass:"img41",staticStyle:{top:"-30px",left:"-30px"},attrs:{src:o(311)}}),t._v(" "),e("img",{staticClass:"img42",staticStyle:{transform:"rotateX(180deg)",right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))"},attrs:{src:o(314)}})]):t.index%4==3?e("div",{staticStyle:{position:"relative",width:"100%"}},[e("img",{staticClass:"img51",staticStyle:{top:"-30px",left:"-100px"},attrs:{src:o(311)}}),t._v(" "),e("img",{staticClass:"img52",staticStyle:{transform:"rotateY(180deg)",top:"-30px",right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:o(313)}})]):t._e()])]),t._v(" "),e("div",{staticClass:"post-body p-3"},[e("span",{staticClass:"post-date"},[t._v(t._s(t.$dateFormat(t.article.date)))]),t._v(" "),e("p",{staticClass:"post-summary my-2"},[t._v("\n      "+t._s(t.article.description)+"\n    ")]),t._v(" "),e("p",{staticClass:"mt-4"},[e("NuxtLink",{staticClass:"text-white post-readmore",attrs:{to:{path:"/blog/".concat(t.article.slug)}}},[t._v("\n        Read more "),e("i",{staticClass:"fa fa-arrow-right ml-2",staticStyle:{"font-size":".7rem"}})])],1)])])}),[],!1,null,null,null);e.default=component.exports},766:function(t,e,o){var content=o(795);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("ee0c5080",content,!0,{sourceMap:!1})},782:function(t,e,o){"use strict";o.r(e);o(4),o(61);var n=[function(){var t=this._self._c;return t("div",{staticClass:"post-bg"},[t("div",{staticStyle:{position:"relative",width:"100%"}},[t("img",{staticClass:"fadeIn img11",staticStyle:{top:"30px",right:"0"},attrs:{src:o(311)}}),this._v(" "),t("img",{staticClass:"enterFromRight img12",staticStyle:{right:"0"},attrs:{src:o(315)}})])])}],r={props:{article:{type:Object,default:function(){return null}}}},l=o(36),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-item post-headline"},[e("div",{staticClass:"post-content py-5 px-3"},[e("h2",{staticClass:"my-3"},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),e("span",{staticClass:"post-date"},[t._v(t._s(t.$dateFormat(t.article.date)))]),t._v(" "),e("p",{staticClass:"post-summary my-2"},[t._v("\n      "+t._s(t.article.description)+"\n    ")]),t._v(" "),e("p",{staticClass:"mt-4"},[e("NuxtLink",{staticClass:"text-white post-readmore",attrs:{to:{path:"/blog/".concat(t.article.slug)}}},[t._v("\n        Read more "),e("i",{staticClass:"fa fa-arrow-right ml-2",staticStyle:{"font-size":".7rem"}})])],1)]),t._v(" "),t._m(0)])}),n,!1,null,null,null);e.default=component.exports},783:function(t,e,o){"use strict";o.r(e);var n={props:{articles:{type:Array,default:function(){return null}}}},r=o(36),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},t._l(t.articles,(function(article,i){return e("div",{key:article.slug,staticClass:"col-md-6 my-3"},[e("BlogArticleItem",{attrs:{article:article,index:i}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogArticleItem:o(751).default})},794:function(t,e,o){"use strict";o(766)},795:function(t,e,o){var n=o(17)((function(i){return i[1]}));n.push([t.i,'#blog-page{position:relative}.blog{padding-top:70px}.blog-page-title h3{margin-top:100px}.post-item,.post-item .post-head{overflow:hidden;position:relative;z-index:0}.post-item .post-head,.post-item.post-headline{background:#000145}.post-content{position:relative;z-index:0}.post-bg{height:auto;top:0;width:100%;z-index:-1}.post-bg,.post-bg img{position:absolute}.post-bg img.fadeIn{animation:fadeIn 2s forwards;opacity:0}.post-bg img.enterFromRight{animation:enterFromRight 2s forwards;opacity:0}.post-bg img.img11{animation-delay:1s}.post-bg img.img12{animation-delay:2s}.post-bg img.img21,.post-bg img.img22,.post-bg img.img31,.post-bg img.img32,.post-bg img.img41,.post-bg img.img42,.post-bg img.img51,.post-bg img.img52{opacity:0}.post-date,.post-label,.post-readmore{font-family:"Courier"}@keyframes enterFromRight{0%{opacity:0;right:-300px}to{opacity:1;right:0}}@media screen and (max-width:767px){.blog-page-title{text-align:center}.blog-page-title h3{margin-top:0}}@media screen and (max-width:576px){.blog-wrapper{width:100%}}',""]),n.locals={},t.exports=n},820:function(t,e,o){"use strict";o.r(e);var n=o(15),r=(o(46),o(164),o(1),o(3),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,t.params,e.next=3,o("articles").only(["title","description","img","slug","author","createdAt","date"]).sortBy("date","desc").limit(5).fetch();case 3:return n=e.sent,r=n[0],n.splice(0,1),e.abrupt("return",{articles:n,headline:r});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{articleLimit:5,isCanLoadMore:!0,isLoadingLoadMore:!1}},head:{title:"Blog | Putu Jhonarendra"},mounted:function(){window.addEventListener("scroll",this.handleScroll),window.scroll({top:0,behavior:"smooth"})},methods:{loadArticles:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles").only(["title","description","img","slug","author","createdAt","date"]).sortBy("date","desc").limit(data.limit).fetch();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},loadMore:function(){var t=this;this.articleLimit+=4,this.isLoadingLoadMore=!0,this.loadArticles({limit:this.articleLimit}).then((function(e){var o=e;t.headline=o[0],o.splice(0,1),t.articles=o,e.length<t.articleLimit&&(t.isCanLoadMore=!1),t.isLoadingLoadMore=!1}))},handleScroll:function(){if(0!==document.getElementsByClassName("img21").length){var t=window.scrollY,e=window.innerHeight,o=100,n=document.querySelectorAll(".img21"),r=document.querySelectorAll(".img22"),l=t+document.getElementsByClassName("img21")[0].getBoundingClientRect().top;t>(l=l-e+o)&&(n.forEach((function(t){t.classList.add("fadeIn")})),r.forEach((function(t){t.classList.add("enterFromRight")})));var c=document.querySelectorAll(".img31"),d=document.querySelectorAll(".img32"),m=t+document.getElementsByClassName("img31")[0].getBoundingClientRect().top;t>(m=m-e+o)&&(c.forEach((function(t){t.classList.add("fadeIn")})),d.forEach((function(t){t.classList.add("enterFromRight")})));var f=document.querySelectorAll(".img41"),h=document.querySelectorAll(".img42"),v=t+document.getElementsByClassName("img41")[0].getBoundingClientRect().top;t>(v=v-e+o)&&(f.forEach((function(t){t.classList.add("fadeIn")})),h.forEach((function(t){t.classList.add("enterFromRight")})));var _=document.querySelectorAll(".img51"),y=document.querySelectorAll(".img52"),x=t+document.getElementsByClassName("img51")[0].getBoundingClientRect().top;t>(x=x-e+o)&&(_.forEach((function(t){t.classList.add("fadeIn")})),y.forEach((function(t){t.classList.add("enterFromRight")})))}}}}),l=(o(794),o(36)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"blog-page"}},[t._m(0),t._v(" "),e("div",{staticStyle:{width:"100%",height:"65px"}}),t._v(" "),e("div",{staticClass:"blog container"},[e("div",{staticClass:"blog-wrapper"},[e("div",{staticClass:"row"},[t._m(1),t._v(" "),e("div",{staticClass:"col-md-6 my-3"},[e("BlogArticleHeadline",{attrs:{article:t.headline}})],1)]),t._v(" "),e("BlogArticleList",{attrs:{articles:t.articles}}),t._v(" "),e("p",{staticClass:"text-center"},[t.isCanLoadMore?e("button",{staticClass:"btn btn-rounded btn-darkblue btn-sm m-2",attrs:{disabled:t.isLoadingLoadMore},on:{click:t.loadMore}},[t._v("\n          "+t._s(t.isLoadingLoadMore?"Loading...":"Load More")+"\n        ")]):t._e()])],1),t._v(" "),e("LandingpageTheFooter"),t._v(" "),e("ButtonTotop")],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100%",padding:"1rem",background:"rgb(9, 2, 128)",color:"white",position:"fixed",top:"65px","z-index":"1050"}},[e("div",{staticClass:"container"},[t._v("\n      Read more post at\n      "),e("a",{staticStyle:{color:"#eee"},attrs:{href:"https://blog.jhonarendra.com",title:"blog.jhonarendra.com"}},[t._v("\n        blog.jhonarendra.com\n      ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-page-title col-md-6 my-3"},[e("h3",[t._v("Blog")]),t._v(" "),e("p",[t._v("What Im thinking about")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogArticleHeadline:o(782).default,BlogArticleList:o(783).default,LandingpageTheFooter:o(590).default,ButtonTotop:o(591).default})}}]);