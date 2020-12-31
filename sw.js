self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('cache').then(function (cache) {
            return cache.addAll([]);
        })
    );
});

this.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});