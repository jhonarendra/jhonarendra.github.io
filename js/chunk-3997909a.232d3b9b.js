(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3997909a"],{"07bd":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"project-page"}},[e("div",{staticClass:"project container"},[e("h3",{staticClass:"text-center"},[t._v("My Project")]),e("p",{staticClass:"text-center"},[t._v(" There are some github projects that I have been done ")]),e("div",{staticClass:"row mt-5"},[0==t.project.length?e("div",{staticClass:"col-12"},[t._m(0)]):t._e(),t._l(t.project,(function(a){return e("div",{key:a.id,staticClass:"col-md-4 col-sm-6 project-wrapper jo-show"},[e("router-link",{staticClass:"project-item",attrs:{to:{name:"ProjectDetail",params:{slug:a.slug}}}},[e("div",{staticClass:"project-img-wrapper"},[e("div",{staticClass:"project-img",style:{backgroundImage:"url("+s("14e7")("./"+a.thumb)+")"}})]),e("div",{staticClass:"project-info"},[e("p",[t._v(" "+t._s(a.title)+" "),e("span",{staticClass:"badge",class:{"badge-primary":a.github_name,"badge-danger":!a.github_name}},[t._v(" "+t._s(a.github_name?"Public":"Private")+" ")])]),e("p",[e("small",[e("i",{staticClass:"far fa-star"}),t._v(" "+t._s(a.github_name?a.github.stargazers_count:"?")+" "),e("svg",{staticClass:"svg-icon",attrs:{"aria-label":"forks",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"}})]),t._v(" "+t._s(a.github_name?a.github.forks_count:"?")+" ")])]),a.github_name?e("small",[t._v(t._s(a.github.description))]):e("small",[t._v(t._s(a.summary))])])])],1)}))],2),t._m(1),e("button",{staticClass:"btn btn-darkblue btn-floating btn-totop circle",on:{click:function(a){return t.scrollTop()}}})]),t._m(2)])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"text-center"},[s("i",{staticClass:"fa fa-spinner fa-spin"}),t._v(" Sedang memproses ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"text-center my-4"},[s("small",[t._v("Created By Putu Jhonarendra")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"project-comp-area"},[s("div",{staticClass:"cincintitik comp15"}),s("div",{staticClass:"lingktrans comp16"}),s("div",{staticClass:"awan3 comp17"}),s("div",{staticClass:"awan4 comp18"})])}],n=(s("4160"),s("b0c0"),s("159b"),s("bc3a")),o=s.n(n),r=(s("aa9e"),s("753c")),c=s("40bf"),l={data:function(){return{project:[],repos:[],is_offline:!1}},methods:{initializeProject:function(){var t=this;this.is_offline?(this.repos=c,r.forEach((function(a){a.github_name&&(a.github=t.getGithubByName(a.github_name))})),this.project=r):o.a.get("https://api.github.com/users/jhonarendra/repos").then((function(a){t.repos=JSON.parse(JSON.stringify(a.data)),r.forEach((function(a){a.github_name&&(a.github=t.getGithubByName(a.github_name))})),t.project=r}))},goBack:function(){window.history.back()},scrollTop:function(){window.scroll({top:0,behavior:"smooth"})},getGithubByName:function(t){var a;return this.repos.forEach((function(s){s.name==t&&(a=s)})),a},handleScroll:function(){for(var t=window.scrollY,a=window.innerHeight,s=document.getElementsByClassName("jo-show"),e=0;e<s.length;e++){var i=t+s[e].getBoundingClientRect().top,n=100;i=i-a+n,t>i?(s[e].classList.remove("hide-show"),"fade-show"in s[e].classList==0&&s[e].classList.add("fade-show")):(s[e].classList.remove("fade-show"),s[e].classList.add("hide-show"))}}},mounted:function(){this.initializeProject(),this.handleScroll(),window.addEventListener("scroll",this.handleScroll);for(var t=document.getElementsByClassName("jo-show"),a=0;a<t.length;a++)t[a].classList.add("hide-show");window.scroll({top:0,behavior:"smooth"})}},h=l,u=s("2877"),d=Object(u["a"])(h,e,i,!1,null,null,null);a["default"]=d.exports},aa9e:function(t,a,s){}}]);
//# sourceMappingURL=chunk-3997909a.232d3b9b.js.map