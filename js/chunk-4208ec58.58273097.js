(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4208ec58"],{"5a70":function(t,s,e){},"5b2f":function(t,s,e){t.exports=e.p+"img/trape.ce325df1.svg"},6560:function(t,s,e){t.exports=e.p+"img/dotdot.ab7d3631.svg"},a434:function(t,s,e){"use strict";var a=e("23e7"),i=e("23cb"),o=e("a691"),n=e("50c4"),r=e("7b0b"),l=e("65f0"),c=e("8418"),m=e("1dde"),g=e("ae40"),d=m("splice"),p=g("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,u=Math.min,v=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,s){var e,a,m,g,d,p,C=r(this),y=n(C.length),b=i(t,y),_=arguments.length;if(0===_?e=a=0:1===_?(e=0,a=y-b):(e=_-2,a=u(f(o(s),0),y-b)),y+e-a>v)throw TypeError(h);for(m=l(C,a),g=0;g<a;g++)d=b+g,d in C&&c(m,g,C[d]);if(m.length=a,e<a){for(g=b;g<y-a;g++)d=g+a,p=g+e,d in C?C[p]=C[d]:delete C[p];for(g=y;g>y-a+e;g--)delete C[g-1]}else if(e>a)for(g=y-a;g>b;g--)d=g+a-1,p=g+e-1,d in C?C[p]=C[d]:delete C[p];for(g=0;g<e;g++)C[g+b]=arguments[g+2];return C.length=y-a+e,m}})},c64d:function(t,s,e){t.exports=e.p+"img/trapehead.f8799840.svg"},fd3f:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"blog-page"}},[a("div",{staticClass:"blog container"},[a("div",{staticClass:"blog-wrapper"},[a("div",{staticClass:"row"},[t._m(0),t._l(t.post,(function(s,i){return a("div",{key:s.id,staticClass:"col-md-6 my-3"},[0==i?a("div",{staticClass:"post-item post-headline"},[a("div",{staticClass:"post-content py-5 px-3"},[a("span",{staticClass:"post-label"},[t._v(t._s(s.tag))]),a("h2",{staticClass:"my-3"},[t._v(t._s(s.title))]),a("span",{staticClass:"post-date"},[t._v(t._s(s.datetime))]),a("p",{staticClass:"post-summary my-2"},[t._v(t._s(s.summary))]),a("p",{staticClass:"mt-4"},[a("router-link",{staticClass:"text-white post-readmore",attrs:{to:{name:"BlogPost",params:{slug:s.slug}}}},[t._v("Read more "),a("i",{staticClass:"fa fa-arrow-right ml-2",staticStyle:{"font-size":".7rem"}})])],1)]),t._m(1,!0)]):t._e(),i>0?a("div",{staticClass:"post-item"},[a("div",{staticClass:"post-head"},[a("div",{staticClass:"post-content p-3"},[a("span",{staticClass:"post-label"},[t._v(t._s(s.tag))]),a("h2",{staticClass:"h4 mt-5 mb-0"},[t._v(t._s(s.title))])]),a("div",{staticClass:"post-bg"},[1==i?a("div",{staticStyle:{position:"relative",width:"100%"}},[a("img",{staticClass:"img21",staticStyle:{top:"-30px",left:"-30px"},attrs:{src:e("6560")}}),a("img",{staticClass:"img22",staticStyle:{right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:e("5b2f")}})]):t._e(),2==i?a("div",{staticStyle:{position:"relative",width:"100%"}},[a("img",{staticClass:"img31",staticStyle:{top:"-30px",right:"-100px"},attrs:{src:e("6560")}}),a("img",{staticClass:"img32",staticStyle:{top:"-30px",left:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:e("fee6")}})]):t._e(),3==i?a("div",{staticStyle:{position:"relative",width:"100%"}},[a("img",{staticClass:"img41",staticStyle:{top:"-30px",left:"-30px"},attrs:{src:e("6560")}}),a("img",{staticClass:"img42",staticStyle:{transform:"rotateX(180deg)",right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))"},attrs:{src:e("5b2f")}})]):t._e(),4==i?a("div",{staticStyle:{position:"relative",width:"100%"}},[a("img",{staticClass:"img51",staticStyle:{top:"-30px",left:"-100px"},attrs:{src:e("6560")}}),a("img",{staticClass:"img52",staticStyle:{transform:"rotateY(180deg)",top:"-30px",right:"0","mask-image":"linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"},attrs:{src:e("fee6")}})]):t._e()])]),a("div",{staticClass:"post-body p-3"},[a("span",{staticClass:"post-date"},[t._v(t._s(s.datetime))]),a("p",{staticClass:"post-summary my-2"},[t._v(t._s(s.summary))]),a("p",{staticClass:"mt-4"},[a("router-link",{staticClass:"text-white post-readmore",attrs:{to:{name:"BlogPost",params:{slug:s.slug}}}},[t._v("Read more "),a("i",{staticClass:"fa fa-arrow-right ml-2",staticStyle:{"font-size":".7rem"}})])],1)])]):t._e()])}))],2)])]),a("p",{staticClass:"text-center my-4"},[a("small",[t._v("Created By Putu Jhonarendra. Pageviews: "+t._s(t.pageview.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")))])]),a("ButtonToTop"),a("div",{staticClass:"pb-5"})],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"blog-page-title col-md-6 my-3"},[e("h3",[t._v("Blog")]),e("p",[t._v("What Im thinking about")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-bg"},[a("div",{staticStyle:{position:"relative",width:"100%"}},[a("img",{staticClass:"fadeIn img11",staticStyle:{top:"30px",right:"0"},attrs:{src:e("6560")}}),a("img",{staticClass:"enterFromRight img12",staticStyle:{right:"0"},attrs:{src:e("c64d")}})])])}],o=(e("4160"),e("a434"),e("d3b7"),e("25f0"),e("159b"),e("a8d7")),n=e("bc3a"),r=e.n(n),l=e("cf99"),c=e("f9db"),m=(e("5a70"),{data:function(){return{post:[]}},mixins:[l["a"]],components:{ButtonToTop:c["a"]},methods:{getSitemap:function(){var t=this;if(navigator.onLine){var s=o["a"].firestore();s.collection("blog").get().then((function(s){var e=[];s.forEach((function(t){e.push(t.data())})),e.sort((function(t,s){var e=new Date(t.datetime.toDate().toString()),a=new Date(s.datetime.toDate().toString());return a-e})),e.forEach((function(t){t.datetime=t.datetime.toDate().toString().substr(0,15)})),t.post=e.splice(0,5)})).catch((function(t){console.error("Error getting documents: ",t)}))}else r.a.get("/blog/sitemap.json").then((function(s){t.post=JSON.parse(JSON.stringify(s.data)).splice(0,5)}))},handleScroll:function(){if(0!=document.getElementsByClassName("img21").length){var t=window.scrollY,s=window.innerHeight,e=100,a=document.getElementsByClassName("img21"),i=document.getElementsByClassName("img22"),o=t+a[0].getBoundingClientRect().top;o=o-s+e,t>o&&(a[0].classList.add("fadeIn"),i[0].classList.add("enterFromRight"));var n=document.getElementsByClassName("img31"),r=document.getElementsByClassName("img32"),l=t+n[0].getBoundingClientRect().top;l=l-s+e,t>l&&(n[0].classList.add("fadeIn"),r[0].classList.add("enterFromRight"));var c=document.getElementsByClassName("img41"),m=document.getElementsByClassName("img42"),g=t+c[0].getBoundingClientRect().top;g=g-s+e,t>g&&(c[0].classList.add("fadeIn"),m[0].classList.add("enterFromRight"));var d=document.getElementsByClassName("img51"),p=document.getElementsByClassName("img52"),f=t+d[0].getBoundingClientRect().top;f=f-s+e,t>f&&(d[0].classList.add("fadeIn"),p[0].classList.add("enterFromRight"))}}},mounted:function(){this.updatePageview(),this.getSitemap(),window.addEventListener("scroll",this.handleScroll),window.scroll({top:0,behavior:"smooth"})}}),g=m,d=e("2877"),p=Object(d["a"])(g,a,i,!1,null,null,null);s["default"]=p.exports},fee6:function(t,s,e){t.exports=e.p+"img/sigasiku.4e735d71.svg"}}]);
//# sourceMappingURL=chunk-4208ec58.58273097.js.map