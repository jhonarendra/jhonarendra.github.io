(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72dd9a46"],{2532:function(t,e,a){"use strict";var s=a("23e7"),n=a("5a34"),r=a("1d80"),i=a("ab13");s({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(r(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},2914:function(t){t.exports=JSON.parse('[{"id":1,"name":"Jhonarendra","message":"Hello world, lorem ipsum dolor sit amet! jonarend Hello world, lorem ipsum dolor sit amet! jonarend","is_admin":1,"is_deleted":0,"created_at":"2020-11-20T14:39:16Z"},{"id":2,"name":"No Name","message":"Test","is_admin":0,"is_deleted":0,"created_at":"2020-12-20T15:04:36Z"},{"id":3,"name":"No Name","message":"Ha","is_admin":0,"is_deleted":0,"created_at":"2020-12-21T21:00:38Z"},{"id":4,"name":"Jhonarendra","message":"Haha","is_admin":1,"is_deleted":0,"created_at":"2020-12-28T09:00:00Z"},{"id":5,"name":"Jhonarendra","message":"Hahaha","is_admin":1,"is_deleted":0,"created_at":"2020-12-28T09:00:00Z"},{"id":6,"name":"Jhonarendra","message":"Hahahaha","is_admin":1,"is_deleted":0,"created_at":"2020-12-28T10:00:00Z"},{"id":7,"name":"Jhonarendra","message":"Hahahahahahaha","is_admin":1,"is_deleted":0,"created_at":"2020-12-28T11:00:00Z"},{"id":8,"name":"Jhonarendra","message":"Hahahahahahahahahaha","is_admin":1,"is_deleted":0,"created_at":"2020-12-28T11:30:00Z"},{"id":9,"name":"No Name","message":"Lorem ipsum doolor sit amet","is_admin":0,"is_deleted":0,"created_at":"2021-01-01T21:00:38Z"}]')},"44e7":function(t,e,a){var s=a("861d"),n=a("c6b6"),r=a("b622"),i=r("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==n(t))}},"556b":function(t,e,a){"use strict";a("b638")},"5a34":function(t,e,a){var s=a("44e7");t.exports=function(t){if(s(t))throw TypeError("The method doesn't accept regular expressions");return t}},8087:function(t,e,a){"use strict";a("f1a9")},ab13:function(t,e,a){var s=a("b622"),n=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,"/./"[t](e)}catch(s){}}return!1}},b638:function(t,e,a){},b8fa:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contact-page"}},[a("div",{staticClass:"contact container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 my-3"},[a("div",{staticClass:"contact-box"},[a("h3",{staticClass:"text-center"},[t._v("Contact me")]),t._m(0),t._m(1),a("p",{staticClass:"text-center"},[a("router-link",{staticClass:"btn btn-rounded btn-darkblue btn-sm mt-5",attrs:{to:"/project"}},[t._v("View My Project")])],1)])]),a("div",{staticClass:"col-lg-8 my-3"},[a("div",{staticClass:"msg-box"},[a("h3",{staticClass:"text-center"},[t._v("Send Message")]),a("Message")],1)])]),a("p",{staticClass:"text-center my-4"},[a("small",[t._v("Created By Putu Jhonarendra. Pageviews: "+t._s(t.pageview.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")))])]),a("ButtonToTop")],1),t._m(2)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center social-media mt-3"},[a("a",{attrs:{href:"mailto:jhonarendra@gmail.com"}},[a("i",{staticClass:"far fa-envelope mr-2"}),t._v(" jhonarendra@gmail.com ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social-media-links"},[a("a",{staticClass:"social-media-link m-2",attrs:{href:"http://facebook.com/putujhonarendra",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook-f"})]),a("a",{staticClass:"social-media-link m-2",attrs:{href:"http://twitter.com/jonarendra",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter"})]),a("a",{staticClass:"social-media-link m-2",attrs:{href:"http://instagram.com/jhonarendra/",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram"})]),a("a",{staticClass:"social-media-link m-2",attrs:{href:"http://linkedin.com/in/putu-jhonarendra-490b66139",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})]),a("a",{staticClass:"social-media-link m-2",attrs:{href:"http://github.com/jhonarendra",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-comp-area"},[a("div",{staticClass:"awan5 comp12"}),a("div",{staticClass:"awan6 comp13"}),a("div",{staticClass:"curl comp14"})])}],r=(a("bdf5"),a("cf99")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"msg-content-wrapper mt-3"},[0==t.message.length?a("div",[t._m(0)]):t._e(),0!=t.message.length?a("div",{staticClass:"msg-content",attrs:{id:"msg-content"}},t._l(t.message,(function(e){return a("div",{key:e.id},[a("p",{staticClass:"text-center mb-1 mt-3"},[t._v(t._s(e.month+" "+e.day)+t._s(e.year==t.cur_year?"":", "+e.year))]),t._l(e.data,(function(e){return a("div",{key:e.id,staticClass:"msg-bubble-wrap"},[a("div",{staticClass:"msg-bubble",class:{admin:e.is_admin}},[a("p",{staticClass:"mb-1"},[a("small",[t._v(t._s(e.name))])]),a("p",{staticClass:"mb-0"},[t._v(t._s(e.message))]),a("p",{staticClass:"text-right mb-0"},[a("small",[t._v(t._s(e.time.hour+":"+e.time.minute))])])])])}))],2)})),0):t._e(),a("hr",{staticStyle:{background:"white","border-width":"2px"}}),a("div",{staticClass:"msg-control"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-9"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{placeholder:"Message",maxlength:"100"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}}),a("p",{staticClass:"text-right mb-0"},[a("small",[t._v(t._s(100-t.form.message.length))])])]),a("div",{staticClass:"col-3"},[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modalProfil",modifiers:{modalProfil:!0}}],staticClass:"btn btn-sm btn-block btn-outline"},[t._v(t._s(t.form.name))]),a("button",{staticClass:"btn btn-sm btn-block",attrs:{disabled:t.disabled_send},on:{click:t.sendMessage}},[t._v(" Send "+t._s(0!=t.send_countdown&&t.disabled_send?t.secondToMinute(t.send_countdown):"")+" ")])])])]),a("b-modal",{attrs:{id:"modalProfil",title:"Profil","hide-footer":""}},[a("label",[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control jon-form",attrs:{type:"text",maxlength:"15"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),a("p",{staticClass:"text-right mb-0"},[a("small",[t._v(t._s(15-t.form.name.length))])]),a("p",{staticClass:"text-center mt-3 mb-0"},[a("a",{staticClass:"btn btn-sm btn-black",on:{click:t.setName}},[t._v("OK")])])]),a("b-modal",{attrs:{id:"modalAdmin","hide-footer":"","hide-header":""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.secret,expression:"form.secret"}],staticClass:"form-control jon-form",attrs:{type:"text"},domProps:{value:t.form.secret},on:{input:function(e){e.target.composing||t.$set(t.form,"secret",e.target.value)}}}),a("p",{staticClass:"text-center mt-3 mb-0"},[a("a",{staticClass:"btn btn-sm btn-black",on:{click:t.setSecret}},[t._v("OK")])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-spinner fa-spin"})])}],c=(a("4160"),a("caad"),a("b0c0"),a("159b"),a("a8d7")),m=(a("d3b7"),a("25f0"),{methods:{parseDate:function(t){var e=new Date(t),a=e.getFullYear(),s=this.monthName(e.getMonth()+1,"en"),n=e.getDate(),r=e.getDate();1==r.toString().length&&(r="0"+r);var i=e.getHours();1==i.toString().length&&(i="0"+i);var o=e.getMinutes();1==o.toString().length&&(o="0"+o);var c=e.getSeconds();1==c.toString().length&&(c="0"+c);var m=e.getMonth()+1;return 1==m.toString().length&&(m="0"+m),{year:a,month:s,monthIndex:m,day:n,dayString:r,hour:i,minute:o,second:c}},monthName:function(t,e){if("id"==e){switch(t){case 1:t="Januari";break;case 2:t="Februari";break;case 3:t="Maret";break;case 4:t="April";break;case 5:t="Mei";break;case 6:t="Juni";break;case 7:t="Juli";break;case 8:t="Agustus";break;case 9:t="September";break;case 10:t="Oktober";break;case 11:t="November";break;case 12:t="Desember";break}return t}if("en"==e){switch(t){case 1:t="January";break;case 2:t="February";break;case 3:t="March";break;case 4:t="April";break;case 5:t="May";break;case 6:t="June";break;case 7:t="July";break;case 8:t="August";break;case 9:t="September";break;case 10:t="October";break;case 11:t="November";break;case 12:t="December";break}return t}},dateNow:function(){var t=new Date;return t=this.parseDate(t),t.year+"-"+t.monthIndex+"-"+t.dayString+"T"+t.hour+":"+t.minute+":"+t.second},secondToMinute:function(t){var e="",a=0;return t>=60?(a=t%60,1==a.toString().length&&(a="0"+a),e=parseInt(t/60)+":"+a):(t<60||1==t.toString().length&&(t="0"+t),e=t),e}}}),d=m,l=(a("c975"),a("a15b"),a("d81d"),a("2532"),a("2909")),h={data:function(){return{alphabet:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0",".",",",":","-"],shift:37}},methods:{encrypt:function(t){var e=this;return Object(l["a"])(t).map((function(t){return e.setChar(t,e.shift)})).join("")},decrypt:function(t){var e=this,a=(this.alphabet.length-this.shift)%this.alphabet.length;return Object(l["a"])(t).map((function(t){return e.setChar(t,a)})).join("")},setChar:function(t,e){var a=this.alphabet.includes(t);if(a){var s=this.alphabet.indexOf(t),n=(s+e)%this.alphabet.length;return this.alphabet[n]}return t}}},u=h,f=a("2914"),g={data:function(){return{message:[],form:{name:"No Name",message:"",secret:"",is_admin:0},cur_year:2021,disabled_send:!1,send_countdown:11,init_send_countdown:11}},mixins:[d,u],methods:{initialize:function(){var t=this,e=new Date;if(this.cur_year=e.getFullYear(),this.form.message="",navigator.onLine){var a=[],s=c["a"].firestore();s.collection("message").orderBy("created_at","asc").get().then((function(e){e.forEach((function(t){a.push({id:t.id,name:t.data().name,message:t.data().message,created_at:t.data().created_at,is_admin:t.data().is_admin,is_deleted:t.data().is_deleted})})),t.messageDataFormatting(a)})).catch((function(t){console.error("Error getting documents: ",t)}))}else this.messageDataFormatting(f);if(localStorage.user){var n=JSON.parse(localStorage.getItem("user"));this.form.name=n.name,this.form.secret=this.encrypt(n.secret)}},messageDataFormatting:function(t){var e=this,a=[],s=[],n="",r="",i="";t.forEach((function(t){t.time=e.parseDate(t.created_at),n=t.time.day,r=t.time.month,i=t.time.year,""==n&&""==r&&""==i&&(s.push(n+"_"+r+"_"+i),a.push({id:n+"_"+r+"_"+i,day:n,month:r,year:i,data:[]})),s.includes(n+"_"+r+"_"+i)||(s.push(n+"_"+r+"_"+i),a.push({id:n+"_"+r+"_"+i,day:n,month:r,year:i,data:[]}))})),a.forEach((function(e){var a=[];t.forEach((function(t){t.time.day==e.day&&t.time.month==e.month&&t.time.year==e.year&&a.push(t)})),e.data=a})),this.message=a,this.scrollToBottom()},setName:function(){this.form.name.length>15&&(this.form.name=this.form.name.substr(15)),""==this.form.name&&(this.form.name="No Name"),"Jhonarendra"==this.form.name&&this.$bvModal.show("modalAdmin");var t={name:this.form.name,secret:this.decrypt(this.form.secret)};localStorage.setItem("user",JSON.stringify(t)),this.$bvModal.hide("modalProfil")},setSecret:function(){this.form.secret!=this.decrypt("ABSBIgMBOgKIV")&&(this.form.is_admin=0,this.form.name="No Name",this.form.secret="");var t={name:this.form.name,secret:this.encrypt(this.form.secret)};localStorage.setItem("user",JSON.stringify(t)),this.$bvModal.hide("modalAdmin")},sendMessage:function(){var t=this;if("Jhonarendra"==this.form.name&&this.form.secret==this.decrypt("ABSBIgMBOgKIV")?this.form.is_admin=1:"Jhonarendra"==this.form.name&&this.form.secret!=this.decrypt("ABSBIgMBOgKIV")&&(this.form.is_admin=0,this.form.name="No Name",this.form.secret=""),""==this.form.message)return alert("Empty message"),!1;if(this.disabled_send)return alert("Please wait"),!1;if(navigator.onLine){var e=c["a"].firestore();e.collection("message").add({name:this.form.name,message:this.form.message,is_admin:this.form.is_admin,is_deleted:0,created_at:this.dateNow()}).then((function(){alert("Message sent"),t.initialize(),t.setCountdown()})).catch((function(t){console.error("Error getting documents: ",t)}))}else alert("Not available in offline mode")},setCountdown:function(){var t=this;this.disabled_send=!0;for(var e=0;e<this.init_send_countdown;e++)setTimeout((function(){t.send_countdown-=1,0==t.send_countdown&&(t.disabled_send=!1,t.send_countdown=t.init_send_countdown)}),1e3*e)},scrollToBottom:function(){setTimeout((function(){document.getElementById("msg-content").scroll({top:document.getElementById("msg-content").scrollHeight,behavior:"smooth"})}),500)}},mounted:function(){this.initialize()}},b=g,_=(a("8087"),a("2877")),p=Object(_["a"])(b,i,o,!1,null,"c9c8262c",null),v=p.exports,C=a("f9db"),k={mixins:[r["a"]],components:{Message:v,ButtonToTop:C["a"]},mounted:function(){this.updatePageview()}},y=k,w=Object(_["a"])(y,s,n,!1,null,null,null);e["default"]=w.exports},bdf5:function(t,e,a){},f1a9:function(t,e,a){},f9db:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-darkblue btn-floating btn-totop circle",attrs:{id:"btnTotop"},on:{click:function(e){return t.scrollTop()}}})},n=[],r={data:function(){return{currentScrollTop:0}},methods:{handleScroll:function(){var t=window.scrollY;this.currentScrollTop>t?(document.getElementById("btnTotop").classList.remove("slideDown"),document.getElementById("btnTotop").classList.add("slideUp")):(document.getElementById("btnTotop").classList.remove("slideUp"),document.getElementById("btnTotop").classList.add("slideDown")),this.currentScrollTop=t},scrollTop:function(){window.scroll({top:0,behavior:"smooth"})}},mounted:function(){window.addEventListener("scroll",this.handleScroll)}},i=r,o=(a("556b"),a("2877")),c=Object(o["a"])(i,s,n,!1,null,"15faef86",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-72dd9a46.3f88aa47.js.map