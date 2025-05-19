self.addEventListener('install', function(event) {
  console.log('Service Worker installé');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activé');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
