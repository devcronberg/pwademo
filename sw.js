let staticCacheNavn = "202101092234";

const moduler = [
  "/scripts/index.js",
  "/scripts/forside.js",
  "/scripts/formular.js",
  "/scripts/ajax.js",
  "/scripts/menu.js",
  "/scripts/notifikation.js",
  "/scripts/shared.js",
  "/scripts/lokation.js",
  "/scripts/kontakter.js",
];

self.addEventListener("install", function (e) {
  console.log("ServiceWorker installeret");

  // lidt noget rod med es6 moduler pt
  // https://medium.com/@filipbech/the-gotchas-of-caching-es-modules-f92c9429fe26

  const modulerRequest = moduler.map(
    (url) =>
      new Request(url, {
        mode: "cors",
        credentials: "omit",
      })
  );

  e.waitUntil(
    caches.open(staticCacheNavn).then(function (cache) {
      console.log("Caching til " + staticCacheNavn);
      return cache.addAll([
        "/",
        "/index.html",
        "/favicon.ico",
        "/styles/style.css",
        "/images/pwa16.png",
        "/images/pwa32.png",
        "/images/pwa96.png",
        "/images/pwa128.png",
        "/images/pwa192.png",
        "/images/pwa512.png",
        "/manifest.json",
        ...modulerRequest,
      ]);
    })
  );
});

self.addEventListener("activate", function (e) {
  console.log("ServiceWorker aktiveret");
  e.waitUntil(
    caches.keys().then((keys) => {
      console.log("Sletter tidligere cache");
      return Promise.all(
        keys.filter((key) => key !== staticCacheNavn).map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", function (e) {
  if (ModulFindes(e.request.url)) {
    let r = new Request(e.request.url, { mode: "cors", credentials: "omit" });
    e.respondWith(
      fetch(r).catch(function () {
        return caches.match(r);
      })
    );
  } else {
    e.respondWith(
      fetch(e.request).catch(function () {
        return caches.match(e.request);
      })
    );
  }
});

function ModulFindes(url) {
  moduler.forEach((v) => {
    if (url.includes(v)) {
      return true;
    }
  });
  return false;
}
