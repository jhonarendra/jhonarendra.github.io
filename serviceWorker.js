const staticDevCoffee = "jhonarendra-github-page"
const assets = [
  "/",
  "/index.html",
  "/css/chunk-00797870.2cde82c0.css",
  "/css/chunk-5f105a4a.745ff886.css",
  "/js/chunk-00797870.8d8ee841.js",
  "/js/chunk-2d0a4d7f.4b8f6138.js",
  "/js/chunk-2d210c47.c63e5c2d.js",
  "/js/chunk-2d237cc7.72c4df05.js",
  "/js/chunk-5f105a4a.1a55ed49.js",
  "/css/app.530a9c2d.css",
  "/css/chunk-vendors.a2cadc9e.css",
  "/js/app.a4b366bb.js",
  "/js/chunk-vendors.258ca154.js",
  "/css/chunk-vendors.a2cadc9e.css",
  "/css/app.530a9c2d.css",
  "/js/chunk-vendors.258ca154.js",
  "/js/app.a4b366bb.js",
  "/fonts/QdVUSTchPBm7nuUeVf70viFl.0ae6341d.woff2",
  "/img/awan1.7ef8d01e.png",
  "/img/awan2.208c8f63.png",
  "/img/awan3.2459c6f1.png",
  "/img/awan4.237e5ec8.png",
  "/img/awan5.790f031d.png",
  "/img/awan6.3901d06f.png",
  "/img/jhonarendra.5841a674.png",
  "/img/jhonarendra-2.3e4f1980.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
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