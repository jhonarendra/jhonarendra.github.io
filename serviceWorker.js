const staticDev = "jhonarendra-github-page"
const assets = [
	"/",
	"/index.html",
	"/apple-touch-icon.png",
	"/apple-touch-icon-57x57.png",
	"/apple-touch-icon-72x72.png",
	"/apple-touch-icon-76x76.png",
	"/apple-touch-icon-114x114.png",
	"/apple-touch-icon-120x120.png",
	"/apple-touch-icon-144x144.png",
	"/apple-touch-icon-152x152.png",
	"/apple-touch-icon-180x180.png",
	"/favicon.ico",
	"/favicon.png",
	"/css/app.2468b7c7.css",
	"/css/chunk-1e37efe7.09f1cfdb.css",
	"/css/chunk-1e58380a.d8afc6b5.css",
	"/css/chunk-323317ea.ff1e4629.css",
	"/css/chunk-4208ec58.ebd128a8.css",
	"/css/chunk-5325f5a0.0b8e36f8.css",
	"/css/chunk-6eeefa3b.67fe9a28.css",
	"/css/chunk-7989a4b8.48edd50f.css",
	"/css/chunk-b4d0be68.ae05b9f1.css",
	"/css/chunk-vendors.a2cadc9e.css",
	"/fonts/fa-brands-400.cbd387d9.eot",
	"/fonts/fa-brands-400.d30c44aa.woff",
	"/fonts/fa-brands-400.d6ac6c96.ttf",
	"/fonts/fa-brands-400.eac60e8a.woff2",
	"/fonts/fa-regular-400.4b218302.woff2",
	"/fonts/fa-regular-400.8c1f0780.eot",
	"/fonts/fa-regular-400.e32cb360.woff",
	"/fonts/fa-regular-400.f1994ecd.ttf",
	"/fonts/fa-solid-900.2e302fa4.eot",
	"/fonts/fa-solid-900.5dc01cfc.woff2",
	"/fonts/fa-solid-900.80c404ff.ttf",
	"/fonts/fa-solid-900.a8eedaad.woff",
	"/fonts/QdVUSTchPBm7nuUeVf70viFl.0ae6341d.woff2",
	"/img/arrow.90f33ec8.svg",
	"/img/awan1.7ef8d01e.png",
	"/img/awan2.208c8f63.png",
	"/img/awan3.2459c6f1.png",
	"/img/awan4.237e5ec8.png",
	"/img/awan5.790f031d.png",
	"/img/awan6.3901d06f.png",
	"/img/basic-form-html-jquery.422a9256.png",
	"/img/bmkg-logo.95956092.png",
	"/img/box-icon-algoritma.19710407.jpg",
	"/img/box-icon-algoritma.45248604.png",
	"/img/box-icon-android.aa6e8bc6.jpg",
	"/img/box-icon-android.d7927c69.png",
	"/img/box-icon-bootstrap.643c02e5.jpg",
	"/img/box-icon-codeigniter.c0319500.jpg",
	"/img/box-icon-html.76335993.jpg",
	"/img/box-icon-jquery.3a525f73.jpg",
	"/img/box-icon-jquery.3bac01e0.png",
	"/img/box-icon-js.8efca3e9.jpg",
	"/img/box-icon-laravel.99a49aac.png",
	"/img/box-icon-laravel.ee182e8a.jpg",
	"/img/box-icon-mysql.c3c3c309.png",
	"/img/box-icon-mysql.dc4fec5c.jpg",
	"/img/box-icon-php.57c81653.jpg",
	"/img/box-icon-project.90623bed.jpg",
	"/img/box-icon-react.8187468b.jpg",
	"/img/cincintitik.b3d9f093.svg",
	"/img/curl.5e5ef2bf.png",
	"/img/dotdot.ab7d3631.svg",
	"/img/fa-brands-400.4568b5b5.svg",
	"/img/fa-regular-400.26d8edc8.svg",
	"/img/fa-solid-900.b7c60297.svg",
	"/img/food-app-liff.b6bd9d69.png",
	"/img/food-menu-android-app.85ab5eab.png",
	"/img/fotojhonarendra.e65b0715.png",
	"/img/geomtry-android-app.ad1161e7.png",
	"/img/icon-firestore.d36c8a60.png",
	"/img/icon-git.ca2e1086.png",
	"/img/icon-logo-firebase.e9557781.jpg",
	"/img/icon-logo-git.3e86f51b.jpg",
	"/img/icon-logo-livewire.5fbda6a9.jpg",
	"/img/icon-logo-python.93794c30.jpg",
	"/img/icon-logo-tailwind.7f81c6f8.jpg",
	"/img/icon-logo-vue.8367d62b.jpg",
	"/img/icon-pwa.54b9a5b7.png",
	"/img/icon-vue.7361ef3e.png",
	"/img/iconads.a8336df7.png",
	"/img/iconandroid.f1a3b093.png",
	"/img/icondzgn.f432b261.png",
	"/img/iconfb.42bd46dc.png",
	"/img/iconig.a3d3e2ce.png",
	"/img/iconseo.e8476506.png",
	"/img/iconsosmed.c15878a6.png",
	"/img/icontw.c26490a0.png",
	"/img/iconweb.1ca71cd2.png",
	"/img/jhonarendra-2.3e4f1980.png",
	"/img/jhonarendra.5841a674.png",
	"/img/kotak2besar.da4dfef5.png",
	"/img/laksita-logo.cdac5a8a.jpg",
	"/img/laravel-8-library-website.e372c8a4.png",
	"/img/lingk3.896d9948.png",
	"/img/lingkdotted.e9b543af.png",
	"/img/lingkgaris.5556be3b.png",
	"/img/lingkgarisfoto.40767dda.png",
	"/img/lingkhead.c6f1a783.png",
	"/img/lingktrans.58023f3b.png",
	"/img/logo-unud.fadb1762.png",
	"/img/logo.82b9c7a5.png",
	"/img/material-design-landing-page.fde8ac0d.png",
	"/img/modern-blue-black-landing-page.47ada343.png",
	"/img/my-landing-page.2c9bd994.png",
	"/img/no-image.0d6b4aae.png",
	"/img/no-image.be2dfb9d.jpg",
	"/img/palmprint-cnn.292ef3c7.png",
	"/img/resolusi-github.fc21ab17.png",
	"/img/restaurant-website.eb0973c2.png",
	"/img/sigasiku.4e735d71.svg",
	"/img/small-corel.07f5399e.png",
	"/img/small-jquery.04d7bd6b.png",
	"/img/small-nodejs.4233723c.png",
	"/img/small-otak.50e3e5c8.jpg",
	"/img/small-vue.bf3d3122.png",
	"/img/text-processing.583cac26.png",
	"/img/trape.ce325df1.svg",
	"/img/trapehead.f8799840.svg",
	"/img/vue-movie-app.644eddc4.png",
	"/js/app.2661fa12.js",
	"/js/app.2661fa12.js.map",
	"/js/chunk-11ccf176.954ade1d.js",
	"/js/chunk-11ccf176.954ade1d.js.map",
	"/js/chunk-1e37efe7.33edac35.js",
	"/js/chunk-1e37efe7.33edac35.js.map",
	"/js/chunk-1e58380a.547975bc.js",
	"/js/chunk-1e58380a.547975bc.js.map",
	"/js/chunk-27e60f34.d5f70682.js",
	"/js/chunk-27e60f34.d5f70682.js.map",
	"/js/chunk-323317ea.c0e0eace.js",
	"/js/chunk-323317ea.c0e0eace.js.map",
	"/js/chunk-4208ec58.c7d64c14.js",
	"/js/chunk-4208ec58.c7d64c14.js.map",
	"/js/chunk-5325f5a0.dd6ca351.js",
	"/js/chunk-5325f5a0.dd6ca351.js.map",
	"/js/chunk-55166d68.4deeb599.js",
	"/js/chunk-55166d68.4deeb599.js.map",
	"/js/chunk-6eeefa3b.f228f934.js",
	"/js/chunk-6eeefa3b.f228f934.js.map",
	"/js/chunk-7989a4b8.69b6c218.js",
	"/js/chunk-7989a4b8.69b6c218.js.map",
	"/js/chunk-b4d0be68.30e246e4.js",
	"/js/chunk-b4d0be68.30e246e4.js.map",
	"/js/chunk-vendors.808e3ddd.js",
	"/js/chunk-vendors.808e3ddd.js.map",
	"/media/anjing.6f752e5b.mp4"
]
self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open(staticDev).then(cache => {
			cache.addAll(assets)
		})
	)
})
self.addEventListener("fetch", fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request)
		})
	)
})