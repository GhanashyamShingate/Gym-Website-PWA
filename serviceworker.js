// (A) CREATE/INSTALL CACHE
self.addEventListener("install", (evt) => {
  self.skipWaiting();
  evt.waitUntil(
    caches
      .open("Demo")
      .then((cache) =>
        cache.addAll([
          "index.html",
          "/manifest.json",
          "/CSS/style.css",
          "/notification.js",
          "/favicon.png",
          "/icon-512.png",
        ])
      )
      .catch((err) => console.error(err))
  );
});

// (B) CLAIM CONTROL INSTANTLY
self.addEventListener("activate", (evt) => self.clients.claim());

// (C) LOAD FROM CACHE FIRST, FALLBACK TO NETWORK IF NOT FOUND
self.addEventListener("fetch", (evt) =>
  evt.respondWith(
    caches.match(evt.request).then((res) => res || fetch(evt.request))
  )
);

/* (C) LOAD WITH NETWORK FIRST, FALLBACK TO CACHE IF OFFLINE
self.addEventListener("fetch", evt => evt.respondWith(
  fetch(evt.request).catch(() => caches.match(evt.request))
));*/
