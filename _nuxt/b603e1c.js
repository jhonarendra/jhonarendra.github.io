(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{772:function(t,o,r){var content=r(807);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("48bea576",content,!0,{sourceMap:!1})},806:function(t,o,r){"use strict";r(772)},807:function(t,o,r){var e=r(17)((function(i){return i[1]}));e.push([t.i,".story{background:#000;height:100vh;overflow:hidden;position:fixed;top:0;transition:all .5s;width:0}.story.active{height:100vh;width:100%}.story.hide{height:100vh;width:0}.video-story-wrapper{margin:0 auto;position:relative;width:320px}.video-story{margin-top:20px;width:320px}.story-info{background-image:linear-gradient(0deg,transparent,rgba(0,0,0,.5));padding-bottom:100px;position:absolute;top:20px;width:100%}.story-info img{background:#000;border:1px solid #000;border-radius:50%;margin:10px;width:30px}.story-info .story-time{color:#aaa}.story-info .story-line{background:#999;height:2px;width:100%}.story-info .story-line-active{animation:storyLine 9s linear;animation-delay:3s;background:#fff;height:2px;position:absolute;top:0;width:100%}@keyframes storyLine{0%{width:0}to{width:100%}}@media screen and (max-width:425px){.video-story-wrapper{width:100%}.video-story{margin-top:0;width:100%}.story-info{top:0}}",""]),e.locals={},t.exports=e},826:function(t,o,r){"use strict";r.r(o);var e=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"story-info"},[o("div",{staticClass:"story-line"}),t._v(" "),o("div",{staticClass:"story-line-active"}),t._v(" "),o("img",{attrs:{src:r(162),alt:"Putu Jhonarendra Navbar",title:"Putu Jhonarendra"}}),t._v(" "),o("span",[t._v("jhonarendra")]),t._v(" "),o("span",{staticClass:"story-time ml-2"},[t._v("3h")])])}],n=(r(38),{data:function(){return{hidingStory:!1}},computed:{showStory:function(){return this.$store.state.story.showStory},loadingStory:function(){return this.$store.state.story.loadingStory},isStoryOpened:function(){return this.$store.state.story.isStoryOpened}},watch:{showStory:function(t){t&&this.story()}},mounted:function(){var t=this;setTimeout((function(){t.$store.commit("story/loadingStory",!0)}),5e3),setTimeout((function(){t.$store.commit("story/loadingStory",!1)}),3e4)},methods:{story:function(){var t=this;this.$store.commit("story/loadingStory",!0),this.$store.commit("story/isStoryOpened",!1),setTimeout((function(){document.getElementById("video-story").play()}),3e3),setTimeout((function(){t.hidingStory=!0,t.$store.commit("story/isStoryOpened",!0)}),12300),setTimeout((function(){t.$store.commit("story/loadingStory",!1),t.$store.commit("story/showStory",!1),t.hidingStory=!1}),12800)},closeStory:function(){var t=this;this.hidingStory=!0,this.$store.commit("story/isStoryOpened",!0),setTimeout((function(){t.$store.commit("story/loadingStory",!1),t.$store.commit("story/showStory",!1),t.hidingStory=!1}),500)}}}),d=(r(806),r(36)),component=Object(d.a)(n,(function(){var t=this,o=t._self._c;return t.loadingStory?o("div",{staticClass:"story",class:{active:t.showStory,hide:t.hidingStory}},[o("div",{staticClass:"video-story-wrapper"},[o("video",{staticClass:"video-story",attrs:{id:"video-story",muted:""},domProps:{muted:!0},on:{click:function(o){return t.closeStory()}}},[o("source",{attrs:{src:r(321),type:"video/mp4"}})]),t._v(" "),t._m(0)])]):t._e()}),e,!1,null,null,null);o.default=component.exports}}]);