__NUXT_JSONP__("/project/food-order-app-liff", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){return {data:[{project:{slug:"food-order-app-liff",description:q,title:C,summary:q,img:"\u002Fproject\u002Ffood-app-liff.png",alt:C,date:r,tags:["javascript",s],organization:"dicoding",toc:[{id:D,depth:m,text:E},{id:s,depth:m,text:F},{id:G,depth:m,text:H},{id:f,depth:m,text:I},{id:J,depth:m,text:K},{id:L,depth:m,text:M}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"food-order-app"},children:[{type:b,tag:e,props:{href:"#food-order-app",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"Food Order App"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Project ini dibuat untuk mempelajari Line Front End Framework (LIFF)"}]},{type:a,value:c},{type:b,tag:o,props:{id:D},children:[{type:b,tag:e,props:{href:"#tools",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bootstrap 4 supaya styling lebih cepat"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"JQuery untuk memudahkan DOM"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"LocalStorage (Web browser)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Disini saya mengikuti materi yaitu menggunakan JQuery untuk manipulasi tampilan web dan LocalStorage pada web browser sebagai media penyimpanan data"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:s},children:[{type:b,tag:e,props:{href:"#liff",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Line Front End Framework atau LIFF ini bisa dijalankan\npada aplikasi LINE dengan mengklik link ke app tersebut.\nJadi mungkin seperti web view dalam aplikasi mobile. Tetapi\nterdapat berbagai fitur LINE bisa digunakan di aplikasi web tersebut.\nMisalnya get profil dan login line. Sehingga kita bisa merasakan\njadi developer LINE App karena aplikasi kita ada di LINE 😁."}]},{type:a,value:c},{type:b,tag:o,props:{id:G},children:[{type:b,tag:e,props:{href:"#create-liff-project",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Untuk memulai membuat project LIFF, kita perlu mendaftar ke website line developer"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Login ke "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdevelopers.line.biz\u002F",rel:[t,u,v],target:w},children:[{type:a,value:"developers.line.biz"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Buat dan atur provider"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Buat LIFF app pada provider tersebut"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:f},children:[{type:b,tag:e,props:{href:"#code",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Mungkin sedikit penjelasan dari kode, untuk bisa mendaftarkan aplikasi, kita perlu memasang sdk liff berupa javascript."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"\u003Cscript src=\"https:\u002F\u002Fstatic.line-scdn.net\u002Fliff\u002Fedge\u002F2\u002Fsdk.js\"\u003E\u003C\u002Fscript\u003E\n"}]}]}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Kemudian untuk menggunakan api dari liff, dokumentasinya ada di link "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdevelopers.line.biz\u002Fen\u002Fdocs\u002Fliff\u002Foverview",rel:[t,u,v],target:w},children:[{type:a,value:"LINE Front-end Framework | LINE Developers"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Untuk mengubah page, karena menggunakan jquery saja, saya pakai show hide section. Lihat di "},{type:b,tag:f,props:{},children:[{type:a,value:"script.js"}]},{type:a,value:" bagian"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"function setPage(menu) {\n    if (menu == \"home\") {\n        loadCart()\n        $('#home').show()\n        $('#menu').hide()\n        $('#order').hide()\n        $('#account').hide()\n ...\n    } else if (menu == \"order-detail\") {\n        loadCart()\n        $('#home').hide()\n        $('#menu').hide()\n        $('#order').hide()\n        $('#account').hide()\n        $('#cart').hide()\n        $('#order-detail').show()\n\n        $('#nav').hide()\n        $('#order-btn').hide()\n    }\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Lalu untuk penyimpanan data, pakai LocalStorage dari browser. Contoh sintaks seperti ini"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"localStorage.setItem('cart', JSON.stringify(cart))\ncart = JSON.parse(localStorage.getItem('cart'))\n"}]}]}]},{type:a,value:c},{type:b,tag:o,props:{id:J},children:[{type:b,tag:e,props:{href:"#testing-app",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Testing app melalui web browser bisa mengakses di link "},{type:b,tag:e,props:{href:N,rel:[t,u,v],target:w},children:[{type:a,value:N}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Melalui LINE bisa mengakses LINE OA saya dengan ID "},{type:b,tag:f,props:{},children:[{type:a,value:"@zrc5584x"}]},{type:a,value:" (dengan @). Nanti message pembuka akan muncul link aplikasi"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Atau coba di kolom chat lain dengan mengirim link "},{type:b,tag:f,props:{},children:[{type:a,value:"line:\u002F\u002Fapp\u002F1655314108-3YBeQLy4"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:L},children:[{type:b,tag:e,props:{href:"#screenshot",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:b,tag:O,props:{alt:P,src:"https:\u002F\u002Fraw.githubusercontent.com\u002Fjhonarendra\u002Ffood-app-liff\u002Fmaster\u002Fscreenshot\u002Fscreenshot-1.png"},children:[]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:b,tag:O,props:{alt:P,src:"https:\u002F\u002Fraw.githubusercontent.com\u002Fjhonarendra\u002Ffood-app-liff\u002Fmaster\u002Fscreenshot\u002Foverview.gif"},children:[]}]}]},dir:"\u002Fprojects",path:"\u002Fprojects\u002Ffood-order-app-liff",extension:".md",createdAt:g,updatedAt:g},randomProject:[{slug:"blue-black-landing-page",description:"Landing Page with Blue and Black Color Scheme",title:"Blue Black Landing Page",img:"\u002Fproject\u002Fmodern-blue-black-landing-page.png",date:"2017-01-01T00:00:00.000Z",createdAt:g},{slug:"aplikasi-survey",description:"Aplikasi survey",title:"Aplikasi Survey",img:"\u002Fproject\u002Faplikasi-survey\u002Faplikasi-survey-thumb.png",date:"2022-01-01T00:00:00.000Z",createdAt:g},{slug:"analisis-chat",description:"Aplikasi analisis chat saya buat untuk mencari peringkat user teraktif pada room chat",title:"Aplikasi Analisis Chat",img:"\u002Fproject\u002Fanalisis-chat\u002Faplikasi-analisis-chat-thumb.png",date:"2021-06-01T00:00:00.000Z",createdAt:g},{slug:"similarity-detection-e-learning",description:q,title:"Similarity Detection in E-Learning",img:"\u002Fproject\u002Fsimilarity-detection-e-learning\u002Fe-learning-thumb.png",date:"2020-01-01T00:00:00.000Z",createdAt:"2022-07-15T14:20:47.548Z"},{slug:"aplikasi-kependudukan",description:"Aplikasi dokumen kependudukan",title:"Aplikasi Dokumen Kependudukan",img:"\u002Fproject\u002Faplikasi-kependudukan\u002Faplikasi-kependudukan-thumb.jpg",date:"2021-07-01T00:00:00.000Z",createdAt:g}],curProjectIndex:15,prev:{slug:"fuzzy-cmeans",description:q,title:"Fuzzy Cmeans",img:Q,date:r,createdAt:g},next:{slug:"datawarehouse-project",description:"Aplikasi datawarehouse",title:"Datawarehouse Project",img:Q,date:r,createdAt:g}}],fetch:{},mutations:[]}}("text","element","\n","li","a","code","2022-07-15T14:20:47.544Z","true",-1,"span","icon","icon-link",2,"p","h2","ul",null,"2019-01-01T00:00:00.000Z","liff","nofollow","noopener","noreferrer","_blank","div","nuxt-content-highlight","pre","language-text","line-numbers","Food Order App LIFF","tools","Tools","LIFF","create-liff-project","Create LIFF project","Code","testing-app","Testing App","screenshot","Screenshot","https:\u002F\u002Fliff.line.me\u002F1655314108-3YBeQLy4","img","","\u002Fproject\u002Fno-image.png")));