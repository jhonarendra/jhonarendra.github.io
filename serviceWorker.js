const staticDev = "jhonarendra-github-page"
const assets = [
  "/",
  "/index.html",
  "/css/app.fe1ad0de.css",
  "/css/chunk-9e990cc2.6a51cf54.css",
  "/css/chunk-559d6362.e3206653.css",
  "/css/chunk-0702f8ba.e9e2e6a4.css",
  "/css/chunk-4149efc3.3aef9e10.css",
  "/css/chunk-c160f0e4.00715104.css",
  "/css/chunk-vendors.a2cadc9e.css",
  "/js/app.52bc50e4.js",
  "/js/chunk-9e990cc2.d8c7983e.js",
  "/js/chunk-559d6362.21c8bc1a.js",
  "/js/chunk-0702f8ba.73e76a71.js",
  "/js/chunk-4149efc3.05a2b3ba.js",
  "/js/chunk-c160f0e4.81082d3e.js",
  "/js/chunk-vendors.258ca154.js",
  "/img/arrow.90f33ec8.svg",
  "/img/awan1.7ef8d01e.png",
  "/img/awan2.208c8f63.png",
  "/img/awan3.2459c6f1.png",
  "/img/awan4.237e5ec8.png",
  "/img/awan5.790f031d.png",
  "/img/awan6.3901d06f.png",
  "/img/jhonarendra.5841a674.png",
  "/img/jhonarendra-2.3e4f1980.png",
  "/fonts/QdVUSTchPBm7nuUeVf70viFl.0ae6341d.woff2"
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