(window.webpackJsonp=window.webpackJsonp||[]).push([[35,21],{592:function(t,e,o){var content=o(741);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("41b1a30c",content,!0,{sourceMap:!1})},740:function(t,e,o){"use strict";o(592)},741:function(t,e,o){var n=o(17)(!1);n.push([t.i,".typewrite>.wrap{border-right:.08em solid #fff}",""]),t.exports=n},751:function(t,e,o){var content=o(784);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("2ddf0ea6",content,!0,{sourceMap:!1})},769:function(t,e,o){"use strict";o.r(e);o(10),o(23),o(38);var n={mounted:function(){for(var t=document.getElementsByClassName("typewrite"),i=0;i<t.length;i++){var e=t[i].getAttribute("data-type").replace(/'/g,'"'),o=t[i].getAttribute("data-period");e&&this.txtType(t[i],JSON.parse(e),o)}},methods:{txtType:function(t,e,o){o=parseInt(o,10)||2e3;this.txtTick(t,e,o,0,"",!1)},txtTick:function(t,e,o,n,r,d){var c=this,i=n%e.length,m=e[i];r=d?m.substring(0,r.length-1):m.substring(0,r.length+1),t.innerHTML='<span class="wrap">'+r+"</span>";var l=200-100*Math.random();d&&(l/=2),d||r!==m?d&&""===r&&(d=!1,n++,l=500):(l=o,d=!0),setTimeout((function(){c.txtTick(t,e,o,n,r,d)}),l)}}},r=(o(740),o(35)),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("h1",{staticClass:"home-title text-center typewrite",attrs:{"data-period":"2000","data-type":"['Hi, Im Jhonarendra.', 'I am Web Programmer.', 'I live in Bali, Indonesia']"}},[t("span",{staticClass:"wrap"},[this._v("Hi, Im Jhonarendra.")])])}],!1,null,null,null);e.default=component.exports},783:function(t,e,o){"use strict";o(751)},784:function(t,e,o){var n=o(17)(!1);n.push([t.i,"#home-page[data-v-1dfb39d0]{position:relative;height:100vh;overflow:hidden}.home[data-v-1dfb39d0]{padding-top:210px}.home-comp-area[data-v-1dfb39d0]{margin-top:-400px;z-index:-1}.home-comp-area div[data-v-1dfb39d0]{--x:0;--y:0;transform:matrix3d(1,0,0,calc(var(--x)*0.0002),0,1,0,calc(var(--y)*0.0002),0,0,1,1,0,0,0,1)}.home.container .home-title[data-v-1dfb39d0]{transform:translate(calc(var(--x)*4px),calc(var(--y)*4px))}.home.container .home-desc[data-v-1dfb39d0]{transform:translate(calc(var(--x)*3px),calc(var(--y)*3px))}.home.container .home-mainbtn[data-v-1dfb39d0]{transform:translate(calc(var(--x)*2px),calc(var(--y)*2px))}.icon-bottom[data-v-1dfb39d0]{--x:0;--y:0;position:absolute;width:100%;bottom:20px;left:0;transform:translate(calc(var(--x)*6px),calc(var(--y)*6px))}.icon-bottom img[data-v-1dfb39d0]:first-child{opacity:0;-webkit-animation:fadeSmallingIn .3s forwards;animation:fadeSmallingIn .3s forwards;-webkit-animation-delay:2s;animation-delay:2s}.icon-bottom img[data-v-1dfb39d0]:nth-child(2){opacity:0;-webkit-animation:fadeSmallingIn .3s forwards;animation:fadeSmallingIn .3s forwards;-webkit-animation-delay:2.5s;animation-delay:2.5s}.icon-bottom img[data-v-1dfb39d0]:nth-child(3){opacity:0;-webkit-animation:fadeSmallingIn .3s forwards;animation:fadeSmallingIn .3s forwards;-webkit-animation-delay:3s;animation-delay:3s}.icon-bottom img[data-v-1dfb39d0]:nth-child(4){opacity:0;-webkit-animation:fadeSmallingIn .3s forwards;animation:fadeSmallingIn .3s forwards;-webkit-animation-delay:3.5s;animation-delay:3.5s}.comp1[data-v-1dfb39d0]{left:0;top:450px;-webkit-animation:fadeLeftJon 2s;animation:fadeLeftJon 2s}.comp1[data-v-1dfb39d0],.comp2[data-v-1dfb39d0]{position:absolute}.comp2[data-v-1dfb39d0]{right:0;top:400px;-webkit-animation:fadeRightJon 2s;animation:fadeRightJon 2s}.comp3[data-v-1dfb39d0]{left:200px;-webkit-animation:fade1Jon 1s,rotateJon 20s linear infinite;animation:fade1Jon 1s,rotateJon 20s linear infinite}.comp3[data-v-1dfb39d0],.comp4[data-v-1dfb39d0]{position:absolute;top:100px}.comp4[data-v-1dfb39d0]{right:200px;-webkit-animation:fade2Jon 2s;animation:fade2Jon 2s}.comp5[data-v-1dfb39d0]{left:50%;top:500px;-webkit-animation:fade2Jon 2s,floatingJon 5s infinite;animation:fade2Jon 2s,floatingJon 5s infinite}.comp5[data-v-1dfb39d0],.pageview[data-v-1dfb39d0]{position:absolute}.pageview[data-v-1dfb39d0]{bottom:0;width:100%;left:0}@media screen and (max-width:1024px){.home-comp-area div.awan1[data-v-1dfb39d0],.home-comp-area div.awan2[data-v-1dfb39d0]{transform:scale(.75)}.home-comp-area div.awan1[data-v-1dfb39d0]{top:250px;left:-60px}.home-comp-area div.awan2[data-v-1dfb39d0]{top:250px;right:-50px}}@media screen and (max-width:768px){.home-comp-area div.awan1[data-v-1dfb39d0],.home-comp-area div.awan2[data-v-1dfb39d0],.home-comp-area div.lingktrans[data-v-1dfb39d0]{transform:scale(.5)}.home-comp-area div.awan1[data-v-1dfb39d0]{top:300px;left:-130px}.home-comp-area div.awan2[data-v-1dfb39d0]{top:300px;right:-100px}.icon-bottom[data-v-1dfb39d0]{position:relative;margin-top:50px}}@media screen and (max-width:425px){h1[data-v-1dfb39d0]{font-size:2rem}.home-comp-area div.awan1[data-v-1dfb39d0]{left:-200px}.home-comp-area div.awan2[data-v-1dfb39d0]{right:-180px}.home-comp-area div.comp4[data-v-1dfb39d0]{right:50px}}",""]),t.exports=n},804:function(t,e,o){"use strict";o.r(e);o(38),o(76),o(1),o(22),o(3);var n={data:function(){return{countdown:6,isCounting:!1,isExploreCd:!1,isCountingToExplore:!1}},head:{title:"Putu Jhonarendra | Web Developer"},mounted:function(){this.isCountingToExplore&&(localStorage.isExploreCd?(this.isExploreCd=!1,this.isCounting=!1):(this.isCounting=!0,localStorage.setItem("isExploreCd","true"),this.countDownTimer())),this.hideMobileNav(),window.outerWidth>=1024&&this.onMouseMoveEffect()},methods:{countDownTimer:function(){var t=this;this.countdown>=0?setTimeout((function(){t.countdown-=1,t.countDownTimer()}),1e3):(this.isCounting=!1,this.$router.push({path:"/about"})),0===this.countdown&&(this.isExploreCd=!1)},hideMobileNav:function(){var t=document.getElementById("mobile-nav");t.classList.remove("mobile-nav-slide-up"),t.classList.add("mobile-nav-slide-down"),setTimeout((function(){t.classList.remove("mobile-nav-slide-up"),t.classList.add("mobile-nav-slide-down")}),500)},popupIcon:function(t){var e=[{name:"github",title:"Github",desc:"Hosted in Github Pages",img:"/comp/icon-git.png"},{name:"nuxt",title:"NuxtJS",desc:"Build with NuxtJS, The Intuitive Vue Framework",img:"/comp/icon-nuxt.png"},{name:"pwa",title:"PWA",desc:"Websites that took all the right vitamins",img:"/comp/icon-pwa.png"},{name:"firestore",title:"Firestore",desc:"Flexible and scalable NoSQL cloud database",img:"/comp/icon-firestore.png"}].find((function(e){return e.name===t}));this.$store.commit("popupblur/setPopup",{show:!0,title:e.title,desc:e.desc,img:e.img,type:"dark|bottom|w-full"})},onMouseMoveEffect:function(){var t,e,o,n=document.querySelectorAll(".home-comp-area div"),r=document.querySelector(".icon-bottom"),d=document.querySelector(".home.container .home-title"),c=document.querySelector(".home.container .home-desc"),m=document.querySelector(".home.container .home-mainbtn");document.addEventListener("mousemove",(function(l){t=2*(l.clientX/window.innerWidth-.5),e=2*(l.clientY/window.innerHeight-.5),o=o||requestAnimationFrame((function(){n.forEach((function(n){n.style.setProperty("--x",t),n.style.setProperty("--y",e),o=null})),r.style.setProperty("--x",t),r.style.setProperty("--y",e),d.style.setProperty("--x",t),d.style.setProperty("--y",e),c.style.setProperty("--x",t),c.style.setProperty("--y",e),m.style.setProperty("--x",t),m.style.setProperty("--y",e)}))}))}}},r=(o(783),o(35)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"home-page"}},[e("div",{staticClass:"home container"},[e("LandingpageIndexTitleAnimated"),t._v(" "),e("p",{staticClass:"home-desc text-center mt-3"},[t._v("\n      I'm currently a web programmer that working on website of universities and government agencies\n      ")]),t._v(" "),e("p",{staticClass:"home-mainbtn text-center mt-4"},[e("NuxtLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-rounded btn-outline btn-sm btn-white text-white m-2 pulse-anim",attrs:{to:"/about",disabled:t.isCounting,tag:"button",title:"Explore"}},[t.isCounting?e("span",[t._v("\n          Explore "+t._s(t.countdown)+"\n        ")]):e("span",[t._v("\n          Explore\n        ")])]),t._v(" "),e("NuxtLink",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-rounded btn-darkblue btn-sm m-2",attrs:{to:"/contact",title:"Contact"}},[t._v("\n        Contact\n      ")])],1),t._v(" "),e("div",{staticClass:"icon-bottom"},[e("p",{staticClass:"text-center"},[e("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-2",staticStyle:{cursor:"pointer"},attrs:{title:"Github",src:o(303),height:"30"},on:{click:function(e){return t.popupIcon("github")}}}),t._v(" "),e("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-2",staticStyle:{cursor:"pointer"},attrs:{title:"NuxtJS",src:o(304),height:"35"},on:{click:function(e){return t.popupIcon("nuxt")}}}),t._v(" "),e("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-2",staticStyle:{cursor:"pointer"},attrs:{title:"Progressive Web Apps",src:o(305),height:"20"},on:{click:function(e){return t.popupIcon("pwa")}}}),t._v(" "),e("img",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-2",staticStyle:{cursor:"pointer"},attrs:{title:"Firestore",src:o(302),height:"28"},on:{click:function(e){return t.popupIcon("firestore")}}})])])],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-comp-area"},[e("div",{staticClass:"awan1 comp1"}),t._v(" "),e("div",{staticClass:"awan2 comp2"}),t._v(" "),e("div",{staticClass:"cincintitik comp3"}),t._v(" "),e("div",{staticClass:"lingktrans comp4"}),t._v(" "),e("div",{staticClass:"lingk3 comp5"})])}],!1,null,"1dfb39d0",null);e.default=component.exports;installComponents(component,{LandingpageIndexTitleAnimated:o(769).default})}}]);