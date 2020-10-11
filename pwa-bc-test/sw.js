// registration --> installation --> activation
const staticCacheName = 'static-cache-v1.0';
const staticAssets = ['./', './index.html', './css/main.min.css', './css/header.min.css', './js/registerWorker.js', './js/common.min.js'];
self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install', e);
  e.waitUntil(caches.open(staticCacheName).then(function (cache) {
    console.log('[ServiceWorker] Caching app shell', cache);
    return cache.addAll(staticAssets);
  }));
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
  console.log('Service worker has been activated:', event);
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request, {
    ignoreSearch: true
  }).then(response => {
    return response || fetch(event.request);
  }));
});