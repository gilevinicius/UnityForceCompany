self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('cache').then(function (cache) {
            return cache.addAll([
                //"relatorio_atividade.htm",
                //"relatorio_atividade1.css",
                //"relatorio_atividade.js",
                //"relatorio_atividade.asmx"
            ]);
        })
    );
});
self.addEventListener('fetch', function (event) {
    event.respondWith(async function () {
        try {
            var res = await fetch(event.request);
            var cache = await caches.open('cache');
            cache.put(event.request.url, res.clone());
            return res;
        }
        catch (error) {
            return caches.match(event.request);
        }
    }());
});

self.addEventListener('fetch', function (event) {
    event.respondWith(async function () {
        var cache = await caches.open('cache');
        var cachedResponsePromise = await cache.match(event.request);
        var networkResponsePromise = fetch(event.request);
        event.waitUntil(async function () {
            var networkResponse = await networkResponsePromise;
            await cache.put(event.request, networkResponse.clone());
        }());
        return cachedResponsePromise || networkResponsePromise;
    }());
});