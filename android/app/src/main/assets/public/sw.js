// VELOCITY X - Auto-Updating Offline Service Worker (OTA Hot-Sync)
const BUILD_TIME = '1790189446789';
const CACHE_NAME = 'velocity-x-' + BUILD_TIME;

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.svg',
  './favicon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
];

self.addEventListener('install', (event) => {
  // Pre-cache core shell assets
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('[SW] Pre-caching core assets warning:', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          // Delete older cache versions from previous GitHub commits
          if (key !== CACHE_NAME) {
            console.log('[SW] Deleting obsolete cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      // Claim control immediately across all open tabs/standalone app windows
      return self.clients.claim();
    })
  );
});

// Smart Caching: Network-First for HTML/Navigations, Cache-First with Background Update for Assets
self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Never cache version.json so remote update checks are always 100% fresh from network
  if (req.url.includes('version.json')) {
    event.respondWith(
      fetch(req).catch(() => caches.match(req))
    );
    return;
  }

  // 1. Navigation & HTML: Always try network first so updates are pulled instantly when online
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkResponse;
        })
        .catch(() => {
          // Fallback to cached HTML for 100% offline flight mode play
          return caches.match(req).then((cached) => cached || caches.match('./index.html') || caches.match('/index.html'));
        })
    );
    return;
  }

  // 2. Static Assets (JS, CSS, Images, Fonts): Cache-First with background revalidation
  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      const fetchPromise = fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      // Return cached version immediately if available, otherwise wait for network
      return cachedResponse || fetchPromise;
    })
  );
});

// Listen for skip-waiting messages from UpdateManager
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
