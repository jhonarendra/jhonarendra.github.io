__NUXT_JSONP__("/blog/mencoba-github-action", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_){return {data:[{article:{slug:"mencoba-github-action",description:"Github Action adalah alat untuk mengotomatiskan tindakan pada repositori (CI\u002FCD)",title:"Mencoba Github Action",img:v,alt:B,date:"2022-03-26T12:48:10.000Z",toc:[],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"github-action"},children:[{type:b,tag:w,props:{href:"#github-action",ariaHidden:C,tabIndex:-1},children:[{type:b,tag:c,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:B}]},{type:a,value:i},{type:b,tag:p,props:{},children:[{type:b,tag:D,props:{alt:E,src:"\u002Fblog\u002Fmencoba-github-action\u002Fgithub-action.png"},children:[]}]},{type:a,value:i},{type:b,tag:p,props:{},children:[{type:a,value:"Github Action adalah alat untuk mengotomatiskan tindakan pada repositori (CI\u002FCD). Banyak hal yang dapat dilakukan dengan Github Action, misalnya membuat fungsi auto build aplikasi atau auto deploy ketika ada perintah push\u002Fpull request pada suatu repositori. Selain itu, beberapa repositori menggunakan nya sebagai cron atau suatu fungsi yang berjalan otomatis pada rentang waktu tertentu, misalnya 1 kali sehari, 1 kali setiap jam dan lain sebagainya."}]},{type:a,value:i},{type:b,tag:p,props:{},children:[{type:a,value:"Untuk menambahkan github action, sebenarnya sudah banyak tutorial yang bisa didapat di internet ataupun dari dokumentasi github action "},{type:b,tag:w,props:{href:F,rel:[G,H,I],target:J},children:[{type:a,value:F}]},{type:a,value:K}]},{type:a,value:i},{type:b,tag:p,props:{},children:[{type:b,tag:D,props:{alt:E,src:"\u002Fblog\u002Fmencoba-github-action\u002Fcontoh.png"},children:[]}]},{type:a,value:i},{type:b,tag:p,props:{},children:[{type:a,value:"Diatas adalah contoh step atau prosedur dari github action untuk meng-generate Nuxt Js. Berikut adalah kode programnya."}]},{type:a,value:i},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-yml","line-numbers"]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" generate\n\n"},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"branches"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" main\n\n"},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"generate"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"runs-on"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" matrix.os "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"strategy"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"matrix"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"os"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:"ubuntu"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"latest"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"node"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"14"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" Checkout\n        "},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" actions\u002Fcheckout@master\n\n      "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" Setup node env\n        "},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" actions\u002Fsetup"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"node@v2.1.2\n        "},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"node-version"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" matrix.node "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n\n      "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" Install dependencies\n        "},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" yarn\n\n      "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" Generate\n        "},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" yarn generate\n\n      "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" Commit changes\n        "},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"|"}]},{type:b,tag:c,props:{className:[d,"scalar","string"]},children:[{type:a,value:"\n          git config --local user.email \"emailanda\"\n          git config --local user.name \"usernameanda\"\n          git add -A\n          git commit -m \"generate\""}]},{type:a,value:"\n          \n      "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" Push changes\n        "},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" ad"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"m\u002Fgithub"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"action@master\n        "},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"force"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,"boolean","important"]},children:[{type:a,value:C}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"branch"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" github.ref "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f,g]},children:[{type:a,value:"github_token"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" secrets.GITHUB_TOKEN "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:"ul",props:{},children:[{type:a,value:i},{type:b,tag:A,props:{},children:[{type:a,value:"Pada level pertama ada "},{type:b,tag:k,props:{},children:[{type:a,value:m}]},{type:a,value:", "},{type:b,tag:k,props:{},children:[{type:a,value:q}]},{type:a,value:" dan "},{type:b,tag:k,props:{},children:[{type:a,value:r}]},{type:a,value:". "},{type:b,tag:k,props:{},children:[{type:a,value:m}]},{type:a,value:" adalah nama dari action, "},{type:b,tag:k,props:{},children:[{type:a,value:q}]},{type:a,value:" adalah kapan menjalankan aksi tersebut. "},{type:b,tag:k,props:{},children:[{type:a,value:r}]},{type:a,value:" adalah prosedur yang dilakukan."}]},{type:a,value:i},{type:b,tag:A,props:{},children:[{type:a,value:"Bisa dilihat pada "},{type:b,tag:k,props:{},children:[{type:a,value:q}]},{type:a,value:" saya membuat action berjalan ketika ada push pada branch main"}]},{type:a,value:i},{type:b,tag:A,props:{},children:[{type:a,value:"Lihat pada bagian "},{type:b,tag:k,props:{},children:[{type:a,value:S}]},{type:a,value:" pada "},{type:b,tag:k,props:{},children:[{type:a,value:r}]},{type:a,value:", terdapat proses setup node js, install dependencies, dan generate nuxt project. Setelah di-generate, dilakukan commit dan push ke branch tersebut."}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:p,props:{},children:[{type:a,value:"Namun bisa juga menggunakan "},{type:b,tag:k,props:{},children:[{type:a,value:"peaceiris\u002Factions-gh-pages@v3"}]},{type:a,value:" seperti pada "},{type:b,tag:w,props:{href:U,rel:[G,H,I],target:J},children:[{type:a,value:U}]},{type:a,value:K}]},{type:a,value:i},{type:b,tag:p,props:{},children:[{type:a,value:"Saya tidak menjalankan unit testing on push karena proses deploy menjadi sangat lama, mungkin nanti akan menggunakan action cron yang dijalankan 1 kali sehari untuk mengontrol aplikasi."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fmencoba-github-action",extension:".md",createdAt:"2022-03-26T04:44:39.339Z",updatedAt:"2022-03-26T05:15:02.399Z"},randomArticle:[{slug:"example-full-markdown",description:"test",title:"Example markdown full",img:u,date:"2021-10-31T20:16:20.000Z",createdAt:"2021-10-30T01:40:41.276Z"},{slug:V,description:W,title:X,img:v,date:Y,createdAt:Z},{slug:"blog-post",description:"Sebelumnya, blog post saya buat pada data json seperti ini",title:"Blog post",img:u,date:"2020-12-12T11:01:45.000Z",createdAt:"2021-10-30T02:27:03.979Z"},{slug:"my-github-pages",description:_,title:_,img:u,date:"2020-10-30T22:25:41.000Z",createdAt:"2021-10-30T02:27:03.983Z"},{slug:"my-first-blog-post",description:"Learning how to use @nuxt\u002Fcontent to create a blog",title:"My first Blog Post With NuxtJS",img:u,date:"2021-10-31T20:15:10.000Z",createdAt:"2021-10-30T01:01:29.379Z"}],curArticleIndex:0,prev:null,next:{slug:V,description:W,title:X,img:v,date:Y,createdAt:Z}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","key","atrule",":","\n","-","code"," ","name","{","}","p","on","jobs"," $","\n          ","\u002Fblog\u002Ftest-image.jpg","\u002Fblog\u002Fnuxt-js\u002Flogo-nuxt-js.jpeg","a","\n      ","uses","run","li","Github Action","true","img","","https:\u002F\u002Fdocs.github.com\u002Fen\u002Factions","nofollow","noopener","noreferrer","_blank",".","\n  ","push","\n    ","\n\n    ","\n        ","[","]","steps","with","https:\u002F\u002Fnuxtjs.org\u002Fdeployments\u002Fgithub-pages","nuxt-js","Saya melakukan perubahan pada github pages yang sebelumnya menggunakan VueJS, menjadi NuxtJS.","NuxtJS","2021-11-03T13:28:10.000Z","2021-11-03T05:28:03.689Z","My Github Pages")));