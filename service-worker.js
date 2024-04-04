
  // Archivo service-worker.js

const CACHE_NAME = 'mi-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/estilos.css',
  '/app.js',
  '/imagen.png'
];

self.addEventListener('install', event => {
  // Instalar el Service Worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // Intercepta solicitudes de red
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna el recurso desde la caché si está disponible
        return response || fetch(event.request);
      })
  );
});
