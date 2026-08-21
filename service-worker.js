// Giyometre — minimal service worker, network-only.
// App is online-only by design (no offline fallback wanted): this worker exists
// only so the browser treats the app as an installable PWA; it never caches
// anything and always passes requests straight through to the network.

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
