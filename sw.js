// Service Worker - 캐싱 비활성화 (항상 최신 버전 제공)
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
