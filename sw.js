self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("cache").then(function (cache) {
      return cache.addAll([
        "index.html",
        "styles/style.css",
        "scripts/index.js",
        "scripts/forside.js",
        "scripts/formular.js",
        "scripts/ajax.js",
        "scripts/menu.js",
        "scripts/notifikation.js",
        "scripts/shared.js",
        "https://dawa.aws.dk/Postnumre",
      ]);
    })
  );
});

this.addEventListener("fetch", function (event) {});
