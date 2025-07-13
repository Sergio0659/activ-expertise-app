const CACHE_NAME = 'activ-expertise-v1';
const urlsToCache = [
  '/activ-expertise-app/',
  '/activ-expertise-app/index.html',
  '/activ-expertise-app/manifest.json',
  '/activ-expertise-app/icon-192.png',
  '/activ-expertise-app/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
