__NUXT_JSONP__("/project/opencv-android", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ){return {data:[{project:{slug:af,description:N,title:V,summary:N,img:"\u002Fproject\u002Fno-image.png",alt:V,date:W,tags:["opencv","android"],organization:"unud",toc:[{id:ag,depth:ah,text:ai},{id:aj,depth:X,text:ak},{id:al,depth:X,text:am},{id:an,depth:X,text:ao},{id:ap,depth:ah,text:aq}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:af},children:[{type:b,tag:A,props:{ariaHidden:B,href:"#opencv-android",tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:V}]},{type:a,value:i},{type:b,tag:x,props:{},children:[{type:a,value:"Aplikasi Computer Vision Android menggunakan OpenCV"}]},{type:a,value:i},{type:b,tag:ar,props:{id:ag},children:[{type:b,tag:A,props:{ariaHidden:B,href:"#intro",tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:ai}]},{type:a,value:i},{type:b,tag:x,props:{},children:[{type:a,value:"Aplikasi android ini berisi kumpulan latihan-latihan menggunakan open cv, dari membuka kamera, memberi filter pada kamera, menampilkan pixel dari gambar, dan mendeteksi garis dan lingkaran."}]},{type:a,value:i},{type:b,tag:Y,props:{id:aj},children:[{type:b,tag:A,props:{ariaHidden:B,href:"#kamera-opencv",tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:ak}]},{type:a,value:i},{type:b,tag:x,props:{},children:[{type:a,value:"Latihan membuka kamera dan filterisasi pada opencv terdapat pada activity "},{type:b,tag:r,props:{},children:[{type:a,value:"MainActivity"}]},{type:a,value:as},{type:b,tag:r,props:{},children:[{type:a,value:"GrayscaleFilter"}]},{type:a,value:as},{type:b,tag:r,props:{},children:[{type:a,value:"CannyFilter"}]},{type:a,value:", dan "},{type:b,tag:r,props:{},children:[{type:a,value:"GaussianFilter"}]},{type:a,value:p}]},{type:a,value:i},{type:b,tag:Y,props:{id:al},children:[{type:b,tag:A,props:{ariaHidden:B,href:"#menampilkan-pixel-gambar",tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:am}]},{type:a,value:i},{type:b,tag:x,props:{},children:[{type:a,value:"Menampilkan pixel gambar bisa dicoba dengan mengklik tombol "},{type:b,tag:r,props:{},children:[{type:a,value:at}]},{type:a,value:" pada halaman utama. Resolusi gambar yang digunakan jangan terlalu besar karena aplikasi akan crash. Pakai saja gambar 10 x 10 (bisa dibuat di paint).\nActivity untuk modul get pixel ada pada "},{type:b,tag:r,props:{},children:[{type:a,value:"TesGetPixel"}]},{type:a,value:". Cara kerjanya, pilih gambar \u003E klik tombol pixel"}]},{type:a,value:i},{type:b,tag:"ul",props:{},children:[{type:a,value:i},{type:b,tag:O,props:{},children:[{type:b,tag:r,props:{},children:[{type:a,value:at}]},{type:a,value:", untuk menampilkan pixel asli."}]},{type:a,value:i},{type:b,tag:O,props:{},children:[{type:b,tag:r,props:{},children:[{type:a,value:"FLIP VERTICAL"}]},{type:a,value:", flip gambar thd sumbu x."}]},{type:a,value:i},{type:b,tag:O,props:{},children:[{type:b,tag:r,props:{},children:[{type:a,value:"FLIP HORIZONTAL"}]},{type:a,value:", flip gambar thd sumbu y."}]},{type:a,value:i},{type:b,tag:O,props:{},children:[{type:b,tag:r,props:{},children:[{type:a,value:"BRIGHTNESS +20"}]},{type:a,value:", menambah value pixel +20."}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:Y,props:{id:an},children:[{type:b,tag:A,props:{ariaHidden:B,href:"#deteksi-garis-dan-lingkaran",tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:ao}]},{type:a,value:i},{type:b,tag:x,props:{},children:[{type:a,value:"Untuk mendeteksi garis dan lingkaran, digunakan fungsi Hough Transform yang sudah ada di OpenCV. Tombol "},{type:b,tag:r,props:{},children:[{type:a,value:"HOUGH CAMERA"}]},{type:a,value:" akan membuka kamera dan mendeksi garis dan lingkaran secara live. Sedangkan "},{type:b,tag:r,props:{},children:[{type:a,value:"HOUGH INPUT"}]},{type:a,value:" mendeteksi dari gambar yang di import."}]},{type:a,value:i},{type:b,tag:x,props:{},children:[{type:a,value:"Ini contoh kode untuk deteksi garis dan lingkaran"}]},{type:a,value:i},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-java","line-numbers"]},children:[{type:b,tag:r,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:P}]},{type:a,value:" circles "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"blur"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"Size"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"HoughCircles"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"CV_HOUGH_GRADIENT"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"90"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"1000"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:P}]},{type:a,value:" lines "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"Canny"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aa}]},{type:a,value:" bmp "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"createBitmap"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"rows"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"Config"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"ARGB_8888"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"HoughLinesP"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"PI"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"180"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:F}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aC}]},{type:a,value:"lines"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:" vec "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ac}]},{type:a,value:" x1 "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:" y1 "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:" x2 "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:" y2 "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:" start "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"x1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:" y1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:" end "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"x2"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:" y2"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"Core"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"line"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:" start"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:" end"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u003E"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:F}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"min"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"5"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ac}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"circleVect "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"=="}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"null"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"break"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:" center "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"circleVect"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:F}]},{type:a,value:" radius "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n\n        "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"circle"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:" center"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:" radius"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"8"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:ar,props:{id:ap},children:[{type:b,tag:A,props:{ariaHidden:B,href:"#screenshot",tabIndex:C},children:[{type:b,tag:c,props:{className:[D,E]},children:[]}]},{type:a,value:aq}]},{type:a,value:i},{type:b,tag:x,props:{},children:[{type:b,tag:H,props:{alt:I,src:"https:\u002F\u002Fraw.githubusercontent.com\u002Fjhonarendra\u002Fopencv-android\u002Fmaster\u002Fscreenshot\u002Fimg1.png"},children:[]},{type:a,value:i},{type:b,tag:H,props:{alt:I,src:"https:\u002F\u002Fraw.githubusercontent.com\u002Fjhonarendra\u002Fopencv-android\u002Fmaster\u002Fscreenshot\u002Fimg2.png"},children:[]},{type:a,value:i},{type:b,tag:H,props:{alt:I,src:"https:\u002F\u002Fraw.githubusercontent.com\u002Fjhonarendra\u002Fopencv-android\u002Fmaster\u002Fscreenshot\u002Fimg3.png"},children:[]},{type:a,value:i},{type:b,tag:H,props:{alt:I,src:"https:\u002F\u002Fraw.githubusercontent.com\u002Fjhonarendra\u002Fopencv-android\u002Fmaster\u002Fscreenshot\u002Fimg4.png"},children:[]},{type:a,value:i},{type:b,tag:H,props:{alt:I,src:"https:\u002F\u002Fraw.githubusercontent.com\u002Fjhonarendra\u002Fopencv-android\u002Fmaster\u002Fscreenshot\u002Fimg5.png"},children:[]},{type:a,value:i},{type:b,tag:H,props:{alt:I,src:"https:\u002F\u002Fraw.githubusercontent.com\u002Fjhonarendra\u002Fopencv-android\u002Fmaster\u002Fscreenshot\u002Fimg6.png"},children:[]}]}]},dir:"\u002Fprojects",path:"\u002Fprojects\u002Fopencv-android",extension:".md",createdAt:"2021-10-31T07:52:56.832Z",updatedAt:"2021-11-03T15:04:15.302Z"},randomProject:[{slug:"aplikasi-kependudukan",description:"Aplikasi dokumen kependudukan",title:"Aplikasi Dokumen Kependudukan",img:"\u002Fproject\u002Faplikasi-kependudukan\u002Faplikasi-kependudukan-thumb.jpg",date:"2021-07-01T00:00:00.000Z",createdAt:"2021-11-01T15:18:10.348Z"},{slug:"analisis-chat",description:"Aplikasi analisis chat saya buat untuk mencari peringkat user teraktif pada room chat",title:"Aplikasi Analisis Chat",img:"\u002Fproject\u002Fanalisis-chat\u002Faplikasi-analisis-chat-thumb.png",date:"2021-06-01T00:00:00.000Z",createdAt:"2021-11-04T15:02:22.710Z"},{slug:"cocktail-time",description:"Aplikasi pencarian cocktail",title:"Cocktail Time",img:"\u002Fproject\u002Fcocktailtime-thumb.jpg",date:"2021-01-01T00:00:00.000Z",createdAt:"2021-10-31T07:49:25.864Z"},{slug:"similarity-detection-e-learning",description:N,title:"Similarity Detection in E-Learning",img:"\u002Fproject\u002Fsimilarity-detection-e-learning\u002Fe-learning-thumb.png",date:aJ,createdAt:"2021-10-31T07:53:23.513Z"},{slug:"finance-app",description:"Finance management app",title:"Finance App",img:"\u002Fproject\u002Ffinance-app\u002Ffinance-app-thumb.jpg",date:aJ,createdAt:"2021-10-31T07:51:27.213Z"}],curProjectIndex:15,prev:{slug:"php-text-processing",description:N,title:"PHP Text Processing",img:"\u002Fproject\u002Ftext-processing.png",date:W,createdAt:"2021-10-31T07:47:50.670Z"},next:{slug:"my-github-page",description:"NuxtJS Landing Page",title:"My Landing Page",img:"\u002Fproject\u002Fmy-landing-page.png",date:W,createdAt:"2021-10-31T07:48:35.332Z"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation",","," ","number","\n","(",")","class-name","keyword","operator",";",".","=","code","0","function","new","[","]","p","Point","\n    ","a","true",-1,"icon","icon-link","int"," x","img","","Imgproc","input","2","\n        ",null,"li","Mat","cols","{"," vec","255","}","OpenCV Android","2018-01-01T00:00:00.000Z",3,"h3"," input","\n\n","50","Bitmap","1","double","3"," circleVect","opencv-android","intro",2,"Intro","kamera-opencv","Kamera OpenCV","menampilkan-pixel-gambar","Menampilkan Pixel Gambar","deteksi-garis-dan-lingkaran","Deteksi Garis dan Lingkaran","screenshot","Screenshot","h2",", ","GET PIXEL","7"," circles","100"," lines","Math","20","for"," x ","\u003C","++","get","mRGB","Scalar","if","circles","2020-01-01T00:00:00.000Z")));