(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b72150d8"],{"6b0f":function(t,a,o){"use strict";o.r(a);var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{attrs:{id:"blogpost-page"}},[o("div",{staticClass:"blogpost container"},[o("div",{staticClass:"blogpost-wrapper mt-4"},[o("h3",{staticClass:"text-center"},[t._v(t._s(t.post.title))]),o("p",{staticClass:"text-center"},[o("small",[o("i",{staticClass:"fa fa-clock mr-1"}),t._v(" "),o("timeago",{attrs:{datetime:new Date(t.post.datetime)}})],1)]),o("vue-markdown",{staticClass:"vue-markdown",attrs:{source:t.post.content}}),t.is_loaded?o("div",{staticClass:"blogpost-footer row mt-5"},[o("div",{staticClass:"col-md-6"},[t.pagination.before?o("router-link",{attrs:{to:{name:"BlogPost",params:{slug:t.pagination.before.slug}}}},[o("i",{staticClass:"fas fa-chevron-left mr-2"}),t._v(t._s(t.pagination.before.title)+" ")]):o("span",[t._v("This is first post")])],1),o("div",{staticClass:"col-md-6 text-right"},[t.pagination.next?o("router-link",{attrs:{to:{name:"BlogPost",params:{slug:t.pagination.next.slug}}}},[t._v(" "+t._s(t.pagination.next.title)),o("i",{staticClass:"fas fa-chevron-right ml-2"})]):o("span",[t._v("This is last post")])],1)]):t._e()],1)]),o("p",{staticClass:"text-center my-4"},[o("small",[t._v("Created By Putu Jhonarendra. Pageviews: "+t._s(t.pageview.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")))])]),o("ButtonToTop"),o("div",{staticClass:"pb-5"})],1)},e=[],n=(o("4160"),o("d3b7"),o("25f0"),o("159b"),o("bc3a")),i=o.n(n),r=o("a8d7"),l=o("cf99"),c=o("9ce6"),g=o.n(c),d=o("f9db"),u=(o("f3b9"),{data:function(){return{blog_data:[],post:{},pagination:{before:{},next:{}},is_loaded:!1}},mixins:[l["a"]],components:{VueMarkdown:g.a,ButtonToTop:d["a"]},methods:{showPost:function(){var t=this;if(navigator.onLine){var a=r["a"].firestore();a.collection("blog").get().then((function(a){var o=[];a.forEach((function(t){o.push(t.data())})),t.blog_data=o,t.blog_data.sort((function(t,a){var o=new Date(t.datetime.toDate().toString()),s=new Date(a.datetime.toDate().toString());return o-s}));var s,e=t.$route.params.slug;t.blog_data.forEach((function(a){e==a.slug&&(s=a,s.datetime=a.datetime.toDate().toString(),i.a.get("/blog/"+a.file).then((function(a){s.content=JSON.parse(JSON.stringify(a.data)),t.post=s,t.setPagination()})))}))})).catch((function(t){console.error("Error getting documents: ",t)}))}else i.a.get("/blog/sitemap.json").then((function(a){t.blog_data=JSON.parse(JSON.stringify(a.data));var o,s=t.$route.params.slug;t.blog_data.forEach((function(a){s==a.slug&&(o=a,i.a.get("/blog/"+a.file).then((function(a){o.content=JSON.parse(JSON.stringify(a.data)),t.post=o,t.setPagination()})))}))}))},setPagination:function(){var t=this.post,a=0,o=0;this.blog_data.forEach((function(s){t.slug==s.slug&&(o=a),a+=1})),this.pagination.before=this.blog_data[o-1],this.pagination.next=this.blog_data[o+1],this.is_loaded=!0}},mounted:function(){this.updatePageview(),this.showPost()}}),p=u,f=o("2877"),b=Object(f["a"])(p,s,e,!1,null,null,null);a["default"]=b.exports},f3b9:function(t,a,o){}}]);
//# sourceMappingURL=chunk-b72150d8.ef144e54.js.map