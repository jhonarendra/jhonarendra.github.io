(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-775d35a0"],{cbaf:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"projectdet-page"}},[n("div",{staticClass:"projectdet-thumb",style:{backgroundImage:"url("+i("14e7")("./"+t.project_item.thumb)+")"}}),n("div",{staticClass:"projectdet container"},[n("h3",[t._v(t._s(t.project_item.title))]),n("p",[t._v(t._s(t.project_item.desc))]),n("p",[n("a",{staticClass:"text-white",attrs:{href:t.project_item.link,title:"View in project page",target:"_blank"}},[n("i",{staticClass:"fas fa-paper-plane mr-2"}),t._v(" View Project")])]),n("vue-markdown",{staticClass:"vue-markdown",attrs:{source:t.content_item}})],1)])},a=[],c=(i("4160"),i("b0c0"),i("159b"),i("bc3a")),o=i.n(c),r=i("9ce6"),s=i.n(r),u=(i("cd92"),i("753c")),h=i("40bf"),m={components:{VueMarkdown:s.a},data:function(){return{project_item:{},is_online:!1,content_item:""}},methods:{initializeProject:function(){this.is_online=navigator.onLine;var t,e=this.$route.params.slug;u.forEach((function(i){e==i.slug&&(t=i)})),t.github_name?this.is_online?this.getGithubData(t):(h.forEach((function(e){e.name==t.github_name&&(t.github=e)})),this.project_item=t):this.project_item=t},getGithubData:function(t){var e=this;o.a.get("https://api.github.com/users/jhonarendra/repos").then((function(i){var n=JSON.parse(JSON.stringify(i.data));n.forEach((function(e){e.name==t.github_name&&(t.github=e)})),e.project_item=t,o.a.get("https://raw.githubusercontent.com/"+e.project_item.github.full_name+"/master/README.md").then((function(t){e.content_item=t.data}))}))},goBack:function(){window.history.back()}},mounted:function(){this.initializeProject()}},p=m,l=i("2877"),_=Object(l["a"])(p,n,a,!1,null,null,null);e["default"]=_.exports},cd92:function(t,e,i){}}]);
//# sourceMappingURL=chunk-775d35a0.407cd74e.js.map