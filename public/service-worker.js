// Archivo service-worker.js
const CACHE_NAME = 'mi-app-cache-v1';
const offlinePage = '/offline.html';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.add(offlinePage))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(offlinePage))
  );
});
