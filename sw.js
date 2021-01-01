let staticCacheNavn = "sc-v2";

self.addEventListener("install", function (e) {
  console.log("ServiceWorker installeret");
  e.waitUntil(
    caches.open(staticCacheNavn).then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles/style.css",
        "/scripts/index.js",
        "/scripts/forside.js",
        "/scripts/formular.js",
        "/scripts/ajax.js",
        "/scripts/menu.js",
        "/scripts/notifikation.js",
        "/scripts/shared.js",
      ]);
    })
  );
});

self.addEventListener("activated", function (e) {
  console.log("ServiceWorker aktiveret");
});

self.addEventListener("fetch", function (e) {
  console.log("ServiceWorker fetch-proxy", e);
});
