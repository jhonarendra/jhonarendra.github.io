(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d98a4052"],{2914:function(e){e.exports=JSON.parse('[{"id":1,"name":"Jhonarendra","message":"Hello world, lorem ipsum dolor sit amet! jonarend Hello world, lorem ipsum dolor sit amet! jonarend","is_admin":1,"is_deleted":0,"created_at":"2020-11-20T14:39:16Z"},{"id":2,"name":"No Name","message":"Test","is_admin":0,"is_deleted":0,"created_at":"2020-12-20T15:04:36Z"},{"id":3,"name":"No Name","message":"Ha","is_admin":0,"is_deleted":0,"created_at":"2020-12-21T21:00:38Z"},{"id":4,"name":"Jhonarendra","message":"Haha","is_admin":1,"is_deleted":0,"created_at":"2020-12-28T09:00:00Z"},{"id":5,"name":"Jhonarendra","message":"Hahaha","is_admin":1,"is_deleted":0,"created_at":"2020-12-28T09:00:00Z"},{"id":6,"name":"Jhonarendra","message":"Hahahaha","is_admin":1,"is_deleted":0,"created_at":"2020-12-28T10:00:00Z"},{"id":7,"name":"Jhonarendra","message":"Hahahahahahaha","is_admin":1,"is_deleted":0,"created_at":"2020-12-28T11:00:00Z"},{"id":8,"name":"Jhonarendra","message":"Hahahahahahahahahaha","is_admin":1,"is_deleted":0,"created_at":"2020-12-28T11:30:00Z"},{"id":9,"name":"No Name","message":"Lorem ipsum doolor sit amet","is_admin":0,"is_deleted":0,"created_at":"2021-01-01T21:00:38Z"}]')},"556b":function(e,t,a){"use strict";a("b638")},"5d0a":function(e,t,a){},b638:function(e,t,a){},b8fa:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"contact-page"}},[a("div",{staticClass:"contact container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 my-3"},[a("div",{staticClass:"contact-box"},[a("h3",{staticClass:"text-center"},[e._v("Contact me")]),e._m(0),e._m(1),a("p",{staticClass:"text-center"},[a("router-link",{staticClass:"btn btn-rounded btn-darkblue btn-sm mt-5",attrs:{to:"/project"}},[e._v("View My Project")])],1)])]),a("div",{staticClass:"col-lg-8 my-3"},[a("div",{staticClass:"msg-box"},[a("h3",{staticClass:"text-center"},[e._v("Send Message")]),a("Message")],1)])]),a("p",{staticClass:"text-center my-4"},[a("small",[e._v("Created By Putu Jhonarendra. Pageviews: "+e._s(e.pageview.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")))])]),a("ButtonToTop")],1),e._m(2)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"text-center social-media mt-3"},[a("a",{attrs:{href:"mailto:jhonarendra@gmail.com"}},[a("i",{staticClass:"far fa-envelope mr-2"}),e._v(" jhonarendra@gmail.com ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"social-media-links"},[a("a",{staticClass:"social-media-link m-2",attrs:{href:"http://facebook.com/putujhonarendra",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook-f"})]),a("a",{staticClass:"social-media-link m-2",attrs:{href:"http://twitter.com/jonarendra",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter"})]),a("a",{staticClass:"social-media-link m-2",attrs:{href:"http://instagram.com/jhonarendra/",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram"})]),a("a",{staticClass:"social-media-link m-2",attrs:{href:"http://linkedin.com/in/putu-jhonarendra-490b66139",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})]),a("a",{staticClass:"social-media-link m-2",attrs:{href:"http://github.com/jhonarendra",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact-comp-area"},[a("div",{staticClass:"awan5 comp12"}),a("div",{staticClass:"awan6 comp13"}),a("div",{staticClass:"curl comp14"})])}],i=(a("bdf5"),a("cf99")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"msg-content-wrapper mt-3"},[0==e.message.length?a("div",[e._m(0)]):e._e(),0!=e.message.length?a("div",{staticClass:"msg-content",attrs:{id:"msg-content"}},e._l(e.message,(function(t){return a("div",{key:t.id},[a("p",{staticClass:"text-center mb-1 mt-3"},[e._v(e._s(t.month+" "+t.day)+e._s(t.year==e.cur_year?"":", "+t.year))]),e._l(t.data,(function(t){return a("div",{key:t.id,staticClass:"msg-bubble-wrap"},[a("div",{staticClass:"msg-bubble",class:{admin:t.is_admin}},[a("p",{staticClass:"mb-1"},[a("small",[e._v(e._s(t.name))])]),a("p",{staticClass:"mb-0"},[e._v(e._s(t.message))]),a("p",{staticClass:"text-right mb-0"},[a("small",[e._v(e._s(t.time.hour+":"+t.time.minute))])])])])}))],2)})),0):e._e(),a("hr",{staticStyle:{background:"white","border-width":"2px"}}),a("div",{staticClass:"msg-control"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-9"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{placeholder:"Message",maxlength:"100"},domProps:{value:e.form.message},on:{input:function(t){t.target.composing||e.$set(e.form,"message",t.target.value)}}}),a("p",{staticClass:"text-right mb-0"},[a("small",[e._v(e._s(100-e.form.message.length))])])]),a("div",{staticClass:"col-3"},[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalProfil",modifiers:{modalProfil:!0}}],staticClass:"btn btn-sm btn-block btn-outline"},[e._v(e._s(e.form.name))]),a("button",{staticClass:"btn btn-sm btn-block",attrs:{disabled:e.disabled_send},on:{click:e.sendMessage}},[e._v(" Send "+e._s(0!=e.send_countdown&&e.disabled_send?e.secondToMinute(e.send_countdown):"")+" ")])])])]),a("b-modal",{attrs:{id:"modalProfil",title:"Profil","hide-footer":""}},[a("label",[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control jon-form",attrs:{type:"text",maxlength:"15"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),a("p",{staticClass:"text-right mb-0"},[a("small",[e._v(e._s(15-e.form.name.length))])]),a("p",{staticClass:"text-center mt-3 mb-0"},[a("a",{staticClass:"btn btn-sm btn-black",on:{click:e.setName}},[e._v("OK")])])]),a("b-modal",{attrs:{id:"modalAdmin","hide-footer":"","hide-header":""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.secret,expression:"form.secret"}],staticClass:"form-control jon-form",attrs:{type:"text"},domProps:{value:e.form.secret},on:{input:function(t){t.target.composing||e.$set(e.form,"secret",t.target.value)}}}),a("p",{staticClass:"text-center mt-3 mb-0"},[a("a",{staticClass:"btn btn-sm btn-black",on:{click:e.setSecret}},[e._v("OK")])])])],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-spinner fa-spin"})])}],c=(a("4160"),a("caad"),a("b0c0"),a("159b"),a("a8d7")),m=(a("d3b7"),a("25f0"),{methods:{parseDate:function(e){var t=new Date(e),a=t.getFullYear(),s=this.monthName(t.getMonth()+1,"en"),n=t.getDate(),i=t.getDate();1==i.toString().length&&(i="0"+i);var r=t.getHours();1==r.toString().length&&(r="0"+r);var o=t.getMinutes();1==o.toString().length&&(o="0"+o);var c=t.getSeconds();1==c.toString().length&&(c="0"+c);var m=t.getMonth()+1;return 1==m.toString().length&&(m="0"+m),{year:a,month:s,monthIndex:m,day:n,dayString:i,hour:r,minute:o,second:c}},monthName:function(e,t){if("id"==t){switch(e){case 1:e="Januari";break;case 2:e="Februari";break;case 3:e="Maret";break;case 4:e="April";break;case 5:e="Mei";break;case 6:e="Juni";break;case 7:e="Juli";break;case 8:e="Agustus";break;case 9:e="September";break;case 10:e="Oktober";break;case 11:e="November";break;case 12:e="Desember";break}return e}if("en"==t){switch(e){case 1:e="January";break;case 2:e="February";break;case 3:e="March";break;case 4:e="April";break;case 5:e="May";break;case 6:e="June";break;case 7:e="July";break;case 8:e="August";break;case 9:e="September";break;case 10:e="October";break;case 11:e="November";break;case 12:e="December";break}return e}},dateNow:function(){var e=new Date;return e=this.parseDate(e),e.year+"-"+e.monthIndex+"-"+e.dayString+"T"+e.hour+":"+e.minute+":"+e.second},secondToMinute:function(e){var t="",a=0;return e>=60?(a=e%60,1==a.toString().length&&(a="0"+a),t=parseInt(e/60)+":"+a):(e<60||1==e.toString().length&&(e="0"+e),t=e),t}}}),l=m,d=a("2914"),u={data:function(){return{message:[],form:{name:"No Name",message:"",secret:"",is_admin:0},cur_year:2021,disabled_send:!1,send_countdown:11,init_send_countdown:11}},mixins:[l],methods:{initialize:function(){var e=this,t=new Date;if(this.cur_year=t.getFullYear(),this.form.message="",navigator.onLine){var a=[],s=c["a"].firestore();s.collection("message").orderBy("created_at","asc").get().then((function(t){t.forEach((function(e){a.push({id:e.id,name:e.data().name,message:e.data().message,created_at:e.data().created_at,is_admin:e.data().is_admin,is_deleted:e.data().is_deleted})})),e.messageDataFormatting(a)})).catch((function(e){console.error("Error getting documents: ",e)}))}else this.messageDataFormatting(d);if(localStorage.user){var n=JSON.parse(localStorage.getItem("user"));this.form.name=n.name,this.form.secret=n.secret}},messageDataFormatting:function(e){var t=this,a=[],s=[],n="",i="",r="";e.forEach((function(e){e.time=t.parseDate(e.created_at),n=e.time.day,i=e.time.month,r=e.time.year,""==n&&""==i&&""==r&&(s.push(n+"_"+i+"_"+r),a.push({id:n+"_"+i+"_"+r,day:n,month:i,year:r,data:[]})),s.includes(n+"_"+i+"_"+r)||(s.push(n+"_"+i+"_"+r),a.push({id:n+"_"+i+"_"+r,day:n,month:i,year:r,data:[]}))})),a.forEach((function(t){var a=[];e.forEach((function(e){e.time.day==t.day&&e.time.month==t.month&&e.time.year==t.year&&a.push(e)})),t.data=a})),this.message=a,this.scrollToBottom()},setName:function(){this.form.name.length>15&&(this.form.name=this.form.name.substr(15)),""==this.form.name&&(this.form.name="No Name"),"Jhonarendra"==this.form.name&&this.$bvModal.show("modalAdmin");var e={name:this.form.name,secret:this.form.secret};localStorage.setItem("user",JSON.stringify(e)),this.$bvModal.hide("modalProfil")},setSecret:function(){"devel0per0nly"!=this.form.secret&&(this.form.is_admin=0,this.form.name="No Name",this.form.secret="");var e={name:this.form.name,secret:this.form.secret};localStorage.setItem("user",JSON.stringify(e)),this.$bvModal.hide("modalAdmin")},sendMessage:function(){var e=this;if("Jhonarendra"==this.form.name&&"devel0per0nly"==this.form.secret?this.form.is_admin=1:"Jhonarendra"==this.form.name&&"devel0per0nly"!=this.form.secret&&(this.form.is_admin=0,this.form.name="No Name",this.form.secret=""),""==this.form.message)return alert("Empty message"),!1;if(this.disabled_send)return alert("Please wait"),!1;if(navigator.onLine){var t=c["a"].firestore();t.collection("message").add({name:this.form.name,message:this.form.message,is_admin:this.form.is_admin,is_deleted:0,created_at:this.dateNow()}).then((function(){alert("Message sent"),e.initialize(),e.setCountdown()})).catch((function(e){console.error("Error getting documents: ",e)}))}else alert("Message sent"),this.initialize(),this.setCountdown()},setCountdown:function(){var e=this;this.disabled_send=!0;for(var t=0;t<this.init_send_countdown;t++)setTimeout((function(){e.send_countdown-=1,0==e.send_countdown&&(e.disabled_send=!1,e.send_countdown=e.init_send_countdown)}),1e3*t)},scrollToBottom:function(){setTimeout((function(){document.getElementById("msg-content").scroll({top:document.getElementById("msg-content").scrollHeight,behavior:"smooth"})}),500)}},mounted:function(){this.initialize()}},h=u,f=(a("e165"),a("2877")),g=Object(f["a"])(h,r,o,!1,null,"6cc0954a",null),b=g.exports,_=a("f9db"),p={mixins:[i["a"]],components:{Message:b,ButtonToTop:_["a"]},mounted:function(){this.updatePageview()}},v=p,C=Object(f["a"])(v,s,n,!1,null,null,null);t["default"]=C.exports},bdf5:function(e,t,a){},e165:function(e,t,a){"use strict";a("5d0a")},f9db:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"btn btn-darkblue btn-floating btn-totop circle",attrs:{id:"btnTotop"},on:{click:function(t){return e.scrollTop()}}})},n=[],i={data:function(){return{currentScrollTop:0}},methods:{handleScroll:function(){var e=window.scrollY;this.currentScrollTop>e?(document.getElementById("btnTotop").classList.remove("slideDown"),document.getElementById("btnTotop").classList.add("slideUp")):(document.getElementById("btnTotop").classList.remove("slideUp"),document.getElementById("btnTotop").classList.add("slideDown")),this.currentScrollTop=e},scrollTop:function(){window.scroll({top:0,behavior:"smooth"})}},mounted:function(){window.addEventListener("scroll",this.handleScroll)}},r=i,o=(a("556b"),a("2877")),c=Object(o["a"])(r,s,n,!1,null,"15faef86",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-d98a4052.1f5853f5.js.map