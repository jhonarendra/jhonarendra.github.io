(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-feb2f424"],{"159b":function(t,e,o){var i=o("da84"),s=o("fdbc"),a=o("17c2"),n=o("9112");for(var r in s){var c=i[r],l=c&&c.prototype;if(l&&l.forEach!==a)try{n(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(t,e,o){"use strict";var i=o("b727").forEach,s=o("a640"),a=o("ae40"),n=s("forEach"),r=a("forEach");t.exports=n&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,o){"use strict";var i=o("23e7"),s=o("17c2");i({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"46c9":function(t){t.exports=JSON.parse('[{"id":1,"title":"Hello World","datetime":"28-10-2020 01:07:01","thumb":"","slug":"hello-world","content":"Lorem ipsum dolor sit amet"},{"id":2,"title":"My Github Pages","datetime":"30-10-2020 22:25:41","thumb":"","slug":"my-github-pages","content":"November 2020 I was finished my github pages (Jhonarendra Github Pages). Many improvement was added to this github pages that I built with VueJS. Pages, linking, data was so easy to manage with VueJS. The design was same with the previous. Black background, white text and dark blue accent. The animation of the \'clouds\' and other component is same too. Single Page Application (SPA) with VueJS is awesome! I was added Progressive Web Apps (PWA) functionality such as serviceWorker.js and manifest.json so this github page was PWA validated!"},{"id":3,"title":"Testing with looooooooooooooooooooooooooong post title","datetime":"13-11-2020 00:01:45","thumb":"","slug":"testing","content":"This is example post"}]')},"65f0":function(t,e,o){var i=o("861d"),s=o("e8b5"),a=o("b622"),n=a("species");t.exports=function(t,e){var o;return s(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!s(o.prototype)?i(o)&&(o=o[n],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===e?0:e)}},"6b0f":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"blogpost-page"}},[o("div",{staticClass:"blogpost container"},[o("div",{staticClass:"blogpost-wrapper mt-4"},[o("h3",{staticClass:"text-center"},[t._v(t._s(t.post.title))]),o("p",{staticClass:"text-center"},[o("small",[o("i",{staticClass:"fa fa-clock mr-1"}),t._v(" "+t._s(t.post.datetime))])]),o("p",[t._v(t._s(t.post.content))]),o("div",{staticClass:"blogpost-footer row mt-5"},[o("div",{staticClass:"col-md-6"},[t.pagination.before?o("router-link",{attrs:{to:{name:"BlogPost",params:{slug:t.pagination.before.slug}}}},[o("i",{staticClass:"fas fa-chevron-left mr-2"}),t._v(t._s(t.pagination.before.title)+" ")]):o("span",[t._v("This is first post")])],1),o("div",{staticClass:"col-md-6 text-right"},[t.pagination.next?o("router-link",{attrs:{to:{name:"BlogPost",params:{slug:t.pagination.next.slug}}}},[t._v(" "+t._s(t.pagination.next.title)),o("i",{staticClass:"fas fa-chevron-right ml-2"})]):o("span",[t._v("This is last post")])],1)])])])])},s=[],a=(o("4160"),o("159b"),o("f3b9"),o("46c9")),n={data:function(){return{post:{},pagination:{before:{},next:{}}}},methods:{showPost:function(){var t,e=this.$route.params.slug;a.forEach((function(o){e==o.slug&&(t=o)})),this.post=t},setPagination:function(){var t,e,o=this.post;a.forEach((function(i){console.log(o.id),o.id-1==i.id&&(t=i),o.id+1==i.id&&(e=i)})),this.pagination.before=t,this.pagination.next=e,console.log("before",t),console.log("next",e)}},mounted:function(){this.showPost(),this.setPagination()}},r=n,c=o("2877"),l=Object(c["a"])(r,i,s,!1,null,null,null);e["default"]=l.exports},a640:function(t,e,o){"use strict";var i=o("d039");t.exports=function(t,e){var o=[][t];return!!o&&i((function(){o.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,o){var i=o("83ab"),s=o("d039"),a=o("5135"),n=Object.defineProperty,r={},c=function(t){throw t};t.exports=function(t,e){if(a(r,t))return r[t];e||(e={});var o=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:c,f=a(e,1)?e[1]:void 0;return r[t]=!!o&&!s((function(){if(l&&!i)return!0;var t={length:-1};l?n(t,1,{enumerable:!0,get:c}):t[1]=1,o.call(t,u,f)}))}},b727:function(t,e,o){var i=o("0366"),s=o("44ad"),a=o("7b0b"),n=o("50c4"),r=o("65f0"),c=[].push,l=function(t){var e=1==t,o=2==t,l=3==t,u=4==t,f=6==t,h=5==t||f;return function(p,d,g,m){for(var v,b,S=a(p),w=s(S),L=i(d,g,3),x=n(w.length),y=0,C=m||r,P=e?C(p,x):o?C(p,0):void 0;x>y;y++)if((h||y in w)&&(v=w[y],b=L(v,y,S),t))if(e)P[y]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return y;case 2:c.call(P,v)}else if(u)return!1;return f?-1:l||u?u:P}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(t,e,o){var i=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},f3b9:function(t,e,o){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-feb2f424.40de7a43.js.map