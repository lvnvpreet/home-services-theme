# Service Worker - static/sw.js
const CACHE_NAME = 'home-services-v1';
const urlsToCache = [
  '/',
  '/css/style.css',
  '/js/main.js',
  '/images/logo.png',
  '/services/',
  '/about/',
  '/contact/',
  '/offline/'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});
