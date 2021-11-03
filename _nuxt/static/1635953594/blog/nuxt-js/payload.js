__NUXT_JSONP__("/blog/nuxt-js", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG){return {data:[{article:{slug:"nuxt-js",description:"Saya melakukan perubahan pada github pages yang sebelumnya menggunakan VueJS, menjadi NuxtJS.",title:N,img:V,alt:N,date:"2021-11-03T13:28:10.000Z",toc:[{id:O,depth:C,text:W},{id:P,depth:C,text:X},{id:Y,depth:Z,text:_},{id:$,depth:Z,text:aa},{id:ab,depth:C,text:ac},{id:ad,depth:C,text:ae}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"nuxtjs"},children:[{type:b,tag:l,props:{href:"#nuxtjs",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:N}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:w,props:{alt:x,src:V},children:[]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:w,props:{alt:x,src:"\u002Fblog\u002Fnuxt-js\u002Fhome-nuxt-js.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Saya melakukan perubahan pada github pages yang sebelumnya menggunakan VueJS, menjadi NuxtJS. Memang tidak jauh berbeda. NuxtJS merupakan framework VueJS dimana pada NuxtJS kita lebih dimudahkan menggunakan API yang ada pada VueJS. Disini akan saya jabarkan sedikit beberapa hal yang menurut saya kelebihan menggunakan NuxtJS."}]},{type:a,value:f},{type:b,tag:D,props:{id:O},children:[{type:b,tag:l,props:{href:"#routing",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:W}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Di NuxtJS tidak perlu memikirkan konfigurasi routing. Cukup membuat file "},{type:b,tag:h,props:{},children:[{type:a,value:af}]},{type:a,value:Q},{type:b,tag:j,props:{},children:[{type:a,value:ag}]},{type:a,value:i},{type:b,tag:h,props:{},children:[{type:a,value:R}]},{type:a,value:", itu sudah menjadi route. Contohnya apabila kita ingin membuat route "},{type:b,tag:h,props:{},children:[{type:a,value:ah}]},{type:a,value:", maka buat file "},{type:b,tag:h,props:{},children:[{type:a,value:"about.vue"}]},{type:a,value:Q},{type:b,tag:j,props:{},children:[{type:a,value:ag}]},{type:a,value:i},{type:b,tag:h,props:{},children:[{type:a,value:R}]},{type:a,value:n}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Setelah membuat pages, bagaimana cara mengakses route yang dihasilkan? Apabila pada VueJS menggunakan tag "},{type:b,tag:h,props:{},children:[{type:a,value:"\u003Crouter-link\u003E"}]},{type:a,value:", pada NuxtJS menggunakan "},{type:b,tag:h,props:{},children:[{type:a,value:"\u003CNuxtLink\u003E"}]},{type:a,value:n}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Pada route biasanya kita membuat link dengan parameter. Contohnya pada halaman blog yang biasanya memiliki link "},{type:b,tag:h,props:{},children:[{type:a,value:"\u002Fblog\u002Fjudul-blog"}]},{type:a,value:". Maka, kita perlu membuat "},{type:b,tag:j,props:{},children:[{type:a,value:"sub directory"}]},{type:a,value:Q},{type:b,tag:h,props:{},children:[{type:a,value:R}]},{type:a,value:" terlebih dahulu menjadi "},{type:b,tag:h,props:{},children:[{type:a,value:"pages\u002Fblog"}]},{type:a,value:". Didalam directory tersebut, tambahkan file "},{type:b,tag:h,props:{},children:[{type:a,value:af}]},{type:a,value:" sesuai nama parameter yang diinginkan, misal "},{type:b,tag:h,props:{},children:[{type:a,value:"_slug.vue"}]},{type:a,value:". Sehingga struktur folder menjadi "},{type:b,tag:h,props:{},children:[{type:a,value:"\u002Fpages\u002Fblog\u002F_slug.vue"}]},{type:a,value:". Lebih lengkap bisa dilihat pada "},{type:b,tag:l,props:{href:ai,rel:[E,F,G],target:H},children:[{type:a,value:ai}]},{type:a,value:n}]},{type:a,value:f},{type:b,tag:D,props:{id:P},children:[{type:b,tag:l,props:{href:"#content",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:X}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Content merupakan hal yang paling bermanfaat buat saya. Menggunakan Content NuxtJS kita bisa membuat berita, artikel, halaman project dan sebagainya menggunakan file markdown. Dulu pada saat masih menggunakan VueJS, saya kesulitan untuk mengatur struktur content dan cara import nya ke. Menggunakan NuxtJS, cukup buat konten pada folder "},{type:b,tag:h,props:{},children:[{type:a,value:P}]},{type:a,value:n}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Saya menggunakan file markdown ("},{type:b,tag:h,props:{},children:[{type:a,value:aj}]},{type:a,value:") sebagai content blog dan project. Selain markdown, NuxtJS Content juga support beberapa file. Untuk lebih lengkap, dapat dibaca pada dokumentasi Content NuxtJs "},{type:b,tag:l,props:{href:ak,rel:[E,F,G],target:H},children:[{type:a,value:ak}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Fitur menarik pada Content yang saya suka yaitu edit content dan query builder."}]},{type:a,value:f},{type:b,tag:al,props:{id:Y},children:[{type:b,tag:l,props:{href:"#edit-content",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:_}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Edit content secara manual bisa dengan mengedit file markdown yang ada. Tetapi, ketika membuka content pada aplikasi pada mode development, kita langsung bisa mengedit content cukup dengan klik 2x content tersebut. Akan langsung muncul text raw dari file markdown dan bisa langsung di save dari browser!"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:w,props:{alt:x,src:"\u002Fblog\u002Fnuxt-js\u002Flive-edit.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Fitur ini sangat berguna untuk mengedit cepat atau mengedit sedikit bagian. Karena jika mengedit melalui raw text yang muncul dari browser, sulit untuk mem-"},{type:b,tag:j,props:{},children:[{type:a,value:"preview"}]},{type:a,value:" nya (atau saya yang tidak tahu? :D)."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Edit konten secara keseluruhan memang lebih nyaman untuk saya di code editor saja. Saya menggunakan VS Code. VS Code memiliki fitur edit markdown file dan "},{type:b,tag:j,props:{},children:[{type:a,value:"live preview"}]},{type:a,value:" sehingga kita dapat langsung melihat hasil dari file markdown yang kita buat."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:w,props:{alt:x,src:"\u002Fblog\u002Fnuxt-js\u002Fmarkdown-vscode.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:al,props:{id:$},children:[{type:b,tag:l,props:{href:"#query-builder",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:aa}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Query Builder pada NuxtJs Content sudah terbilang lengkap. Hampir semua studi kasus dapat ditangani dengan "},{type:b,tag:j,props:{},children:[{type:a,value:"query builder"}]},{type:a,value:". Lebih lengkap dokumentasi dari query builder dapat dilihat di link ini "},{type:b,tag:l,props:{href:am,rel:[E,F,G],target:H},children:[{type:a,value:am}]},{type:a,value:n}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Contoh query yang saya gunakan untuk menampilkan list article adalah sebagai berikut."}]},{type:a,value:f},{type:b,tag:I,props:{className:[an]},children:[{type:b,tag:ao,props:{className:[ap,aq]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"const"}]},{type:a,value:" articles "},{type:b,tag:c,props:{className:[d,ar]},children:[{type:a,value:"="}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u,"control-flow"]},children:[{type:a,value:"await"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"$content"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'articles'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,J,y,K]},children:[{type:a,value:"only"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'title'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'description'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'img'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'slug'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'author'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'createdAt'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,J,y,K]},children:[{type:a,value:"sortBy"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'desc'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,J,y,K]},children:[{type:a,value:"limit"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"5"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,J,y,K]},children:[{type:a,value:"fetch"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Dari "},{type:b,tag:j,props:{},children:[{type:a,value:"query"}]},{type:a,value:" diatas pasti sudah dapat dipahami apa dan bagaimana data yang diinginkan."}]},{type:a,value:f},{type:b,tag:D,props:{id:ab},children:[{type:b,tag:l,props:{href:"#component",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:ac}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Fitur menarik pada NuxtJS Component buat saya adalah "},{type:b,tag:j,props:{},children:[{type:a,value:"auto import component"}]},{type:a,value:". Pada VueJS, jika ingin menggunakan "},{type:b,tag:j,props:{},children:[{type:a,value:"custom component"}]},{type:a,value:" kita perlu menginisialisasinya pada tempat dimana kita memanggilnya."}]},{type:a,value:f},{type:b,tag:I,props:{className:[an]},children:[{type:b,tag:ao,props:{className:[ap,"language-html"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:S}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,U]},children:[{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,u,M]},children:[{type:a,value:av}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:S}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u,M]},children:[{type:a,value:"from"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'.\u002Fcomponent\u002FTheNavbar.vue'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u,M]},children:[{type:a,value:"export"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u,M]},children:[{type:a,value:"default"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ax}]},{type:a,value:"\n  components"},{type:b,tag:c,props:{className:[d,ar]},children:[{type:a,value:":"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ax}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:S}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ay}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ay}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Pada NuxtJs Component, kita tidak perlu "},{type:b,tag:j,props:{},children:[{type:a,value:av}]},{type:a,value:" component. Namun ada beberapa hal yang perlu diperhatikan supaya component dapat diimport otomatis dengan benar. Lebih jelasnya bisa dilihat pada dokumentasi NuxtJS Component "},{type:b,tag:l,props:{href:az,rel:[E,F,G],target:H},children:[{type:a,value:az}]}]},{type:a,value:f},{type:b,tag:D,props:{id:ad},children:[{type:b,tag:l,props:{href:"#nuxt-ssr",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:ae}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"SSR atau Server Side Rendering bagi saya fitur yang menarik dari NuxtJS. Ketika mem-"},{type:b,tag:j,props:{},children:[{type:a,value:aA}]},{type:a,value:" project dengan "},{type:b,tag:j,props:{},children:[{type:a,value:"command"}]},{type:a,value:i},{type:b,tag:h,props:{},children:[{type:a,value:"nuxt generate"}]},{type:a,value:", hasil build akan memiliki struktur folder mengikuti "},{type:b,tag:j,props:{},children:[{type:a,value:O}]},{type:a,value:" yang kita buat pada project. Hal ini menurut banyak orang \"lebih SEO\" atau lebih mudah di-"},{type:b,tag:j,props:{},children:[{type:a,value:"crawl"}]},{type:a,value:" atau dibaca oleh mesin pencari."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:w,props:{alt:x,src:"\u002Fblog\u002Fnuxt-js\u002Fhasil-build-nuxt.jpg"},children:[]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Tentunya sangat berbeda dengan hasil build tanpa SSR (seperti ketika saya menggunakan VueJS sebelumnya). Proses "},{type:b,tag:j,props:{},children:[{type:a,value:aA}]},{type:a,value:" hanya akan menghasilkan satu buah file "},{type:b,tag:h,props:{},children:[{type:a,value:".html"}]},{type:a,value:" karena akses ke route lainnya hanya bisa dilakukan menggunakan javascript. Yang saya alami ketika tanpa SSR, user tidak bisa langsung mengakses url halaman, misalnya "},{type:b,tag:h,props:{},children:[{type:a,value:ah}]},{type:a,value:" (jika dihosting pada static server seperti github pages)."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Hal menarik lainnya dari server side rendering NuxtJS adalah pada hasil build, kita dapat melihat pada file html sudah terdapat data. Maksudnya, pada halaman index blog, kita menampilkan list artikel menggunakan fungsi javascript. Jika tidak menggunakan ssr, hasil build tidak me-"},{type:b,tag:j,props:{},children:[{type:a,value:"render"}]},{type:a,value:" data yang diambil dari javascript. Itu berkat fungsi "},{type:b,tag:h,props:{},children:[{type:a,value:"asyncData"}]},{type:a,value:" pada NuxtJS."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fnuxt-js",extension:aj,createdAt:"2021-11-03T05:28:03.689Z",updatedAt:"2021-11-03T14:59:33.427Z"},randomArticle:[{slug:aB,description:aC,title:aD,img:B,date:aE,createdAt:aF},{slug:"ada-audit",description:"Tes kinerja website jhonarendra.github.io di Lighthouse Chrome DevTools",title:"Ada Audit",img:"\u002Fblog\u002Fada-audit.png",date:"2021-01-01T10:10:10.000Z",createdAt:"2021-10-30T02:27:03.977Z"},{slug:"my-first-blog-post",description:"Learning how to use @nuxt\u002Fcontent to create a blog",title:"My first Blog Post With NuxtJS",img:B,date:"2021-10-31T20:15:10.000Z",createdAt:"2021-10-30T01:01:29.379Z"},{slug:"my-github-pages",description:aG,title:aG,img:B,date:"2020-10-30T22:25:41.000Z",createdAt:"2021-10-30T02:27:03.983Z"},{slug:"blog-post",description:"Sebelumnya, blog post saya buat pada data json seperti ini",title:"Blog post",img:B,date:"2020-12-12T11:01:45.000Z",createdAt:"2021-10-30T02:27:03.979Z"}],curArticleIndex:0,prev:null,next:{slug:aB,description:aC,title:aD,img:B,date:aE,createdAt:aF}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n","p","code"," ","em","tag","a","string",".","true",-1,"icon","icon-link","\n  ",",","keyword","\u003E","img","","function","(",")","\u002Fblog\u002Ftest-image.jpg",2,"h2","nofollow","noopener","noreferrer","_blank","div","method","property-access","\u003C","module","NuxtJS","routing","content"," pada ","pages","TheNavbar","\u003C\u002F","script","\u002Fblog\u002Fnuxt-js\u002Flogo-nuxt-js.jpeg","Routing","Content","edit-content",3,"Edit Content","query-builder","Query Builder","component","Component","nuxt-ssr","Nuxt SSR",".vue","directory","\u002Fabout","https:\u002F\u002Fnuxtjs.org\u002Fdocs\u002Fget-started\u002Frouting",".md","https:\u002F\u002Fnuxtjs.org\u002Ftutorials\u002Fcreating-blog-with-nuxt-content\u002F#adding-a-code-block-to-your-post","h3","https:\u002F\u002Fcontent.nuxtjs.org\u002Ffetching","nuxt-content-highlight","pre","line-numbers","language-javascript","operator","'date'","template","\n    ","import","maybe-class-name","{","}","https:\u002F\u002Fnuxtjs.org\u002Fdirectory-structure\u002Fcomponents","build","example-full-markdown","test","Example markdown full","2021-10-31T20:16:20.000Z","2021-10-30T01:40:41.276Z","My Github Pages")));