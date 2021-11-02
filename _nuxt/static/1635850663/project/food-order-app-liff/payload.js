__NUXT_JSONP__("/project/food-order-app-liff", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return {data:[{project:{slug:"food-order-app-liff",description:q,title:C,summary:q,img:"food-app-liff.png",alt:C,date:r,tags:["javascript",s],organization:"dicoding",toc:[{id:D,depth:l,text:E},{id:s,depth:l,text:F},{id:G,depth:l,text:H},{id:f,depth:l,text:I},{id:J,depth:l,text:K},{id:L,depth:l,text:M}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"food-order-app"},children:[{type:b,tag:e,props:{href:"#food-order-app",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"Food Order App"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Project ini dibuat untuk mempelajari Line Front End Framework (LIFF)"}]},{type:a,value:c},{type:b,tag:n,props:{id:D},children:[{type:b,tag:e,props:{href:"#tools",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bootstrap 4 supaya styling lebih cepat"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"JQuery untuk memudahkan DOM"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"LocalStorage (Web browser)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Disini saya mengikuti materi yaitu menggunakan JQuery untuk manipulasi tampilan web dan LocalStorage pada web browser sebagai media penyimpanan data"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:s},children:[{type:b,tag:e,props:{href:"#liff",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Line Front End Framework atau LIFF ini bisa dijalankan\npada aplikasi LINE dengan mengklik link ke app tersebut.\nJadi mungkin seperti web view dalam aplikasi mobile. Tetapi\nterdapat berbagai fitur LINE bisa digunakan di aplikasi web tersebut.\nMisalnya get profil dan login line. Sehingga kita bisa merasakan\njadi developer LINE App karena aplikasi kita ada di LINE 😁."}]},{type:a,value:c},{type:b,tag:n,props:{id:G},children:[{type:b,tag:e,props:{href:"#create-liff-project",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Untuk memulai membuat project LIFF, kita perlu mendaftar ke website line developer"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Login ke "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdevelopers.line.biz\u002F",rel:[t,u,v],target:w},children:[{type:a,value:"developers.line.biz"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Buat dan atur provider"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Buat LIFF app pada provider tersebut"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:f},children:[{type:b,tag:e,props:{href:"#code",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Mungkin sedikit penjelasan dari kode, untuk bisa mendaftarkan aplikasi, kita perlu memasang sdk liff berupa javascript."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"\u003Cscript src=\"https:\u002F\u002Fstatic.line-scdn.net\u002Fliff\u002Fedge\u002F2\u002Fsdk.js\"\u003E\u003C\u002Fscript\u003E\n"}]}]}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Kemudian untuk menggunakan api dari liff, dokumentasinya ada di link "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdevelopers.line.biz\u002Fen\u002Fdocs\u002Fliff\u002Foverview",rel:[t,u,v],target:w},children:[{type:a,value:"LINE Front-end Framework | LINE Developers"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Untuk mengubah page, karena menggunakan jquery saja, saya pakai show hide section. Lihat di "},{type:b,tag:f,props:{},children:[{type:a,value:"script.js"}]},{type:a,value:" bagian"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"function setPage(menu) {\n    if (menu == \"home\") {\n        loadCart()\n        $('#home').show()\n        $('#menu').hide()\n        $('#order').hide()\n        $('#account').hide()\n ...\n    } else if (menu == \"order-detail\") {\n        loadCart()\n        $('#home').hide()\n        $('#menu').hide()\n        $('#order').hide()\n        $('#account').hide()\n        $('#cart').hide()\n        $('#order-detail').show()\n\n        $('#nav').hide()\n        $('#order-btn').hide()\n    }\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Lalu untuk penyimpanan data, pakai LocalStorage dari browser. Contoh sintaks seperti ini"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"localStorage.setItem('cart', JSON.stringify(cart))\ncart = JSON.parse(localStorage.getItem('cart'))\n"}]}]}]},{type:a,value:c},{type:b,tag:n,props:{id:J},children:[{type:b,tag:e,props:{href:"#testing-app",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Testing app melalui web browser bisa mengakses di link "},{type:b,tag:e,props:{href:N,rel:[t,u,v],target:w},children:[{type:a,value:N}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Melalui LINE bisa mengakses LINE OA saya dengan ID "},{type:b,tag:f,props:{},children:[{type:a,value:"@zrc5584x"}]},{type:a,value:" (dengan @). Nanti message pembuka akan muncul link aplikasi"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Atau coba di kolom chat lain dengan mengirim link "},{type:b,tag:f,props:{},children:[{type:a,value:"line:\u002F\u002Fapp\u002F1655314108-3YBeQLy4"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:L},children:[{type:b,tag:e,props:{href:"#screenshot",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:O,props:{alt:P,src:"https:\u002F\u002Fraw.githubusercontent.com\u002Fjhonarendra\u002Ffood-app-liff\u002Fmaster\u002Fscreenshot\u002Fscreenshot-1.png"},children:[]}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:O,props:{alt:P,src:"https:\u002F\u002Fraw.githubusercontent.com\u002Fjhonarendra\u002Ffood-app-liff\u002Fmaster\u002Fscreenshot\u002Foverview.gif"},children:[]}]}]},dir:"\u002Fprojects",path:"\u002Fprojects\u002Ffood-order-app-liff",extension:".md",createdAt:"2021-10-31T07:49:10.346Z",updatedAt:"2021-11-02T10:44:11.996Z"},randomProject:[{slug:"aplikasi-kependudukan",description:"Aplikasi dokumen kependudukan",title:"Aplikasi Dokumen Kependudukan",img:p,date:"2021-07-01T00:00:00.000Z",createdAt:"2021-11-01T15:18:10.348Z"},{slug:"sistem-informasi-dosen",description:Q,title:Q,img:p,date:"2020-12-12T00:00:00.000Z",createdAt:"2021-11-01T15:25:12.968Z"},{slug:"similarity-detection-e-learning",description:q,title:"Similarity Detection in E-Learning",img:p,date:R,createdAt:"2021-10-31T07:53:23.513Z"},{slug:"github-resolution",description:"Resolusi github 2021",title:"Github Resolution",img:"resolusi-github.png",date:R,createdAt:"2021-10-31T07:48:54.412Z"},{slug:"palmprint-cnn",description:"Palmprint Recognition with Convolutional Neural Network",title:"Palmprint CNN",img:"palmprint-cnn.png",date:r,createdAt:"2021-10-31T07:51:13.684Z"}],curProjectIndex:10,prev:{slug:"fuzzy-cmeans",description:q,title:"Fuzzy Cmeans",img:p,date:r,createdAt:"2021-10-31T07:52:20.167Z"},next:{slug:"datawarehouse-project",description:"Aplikasi datawarehouse",title:"Datawarehouse Project",img:p,date:r,createdAt:"2021-10-31T07:51:57.106Z"}}],fetch:{},mutations:[]}}("text","element","\n","li","a","code","true",-1,"span","icon","icon-link",2,"p","h2","ul","no-image.png",null,"2019-01-01T00:00:00.000Z","liff","nofollow","noopener","noreferrer","_blank","div","nuxt-content-highlight","pre","language-text","line-numbers","Food Order App LIFF","tools","Tools","LIFF","create-liff-project","Create LIFF project","Code","testing-app","Testing App","screenshot","Screenshot","https:\u002F\u002Fliff.line.me\u002F1655314108-3YBeQLy4","img","","Sistem Informasi Dosen","2020-01-01T00:00:00.000Z")));