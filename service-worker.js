const CACHE_NAME = "san-rafael-coral-v1";

const FILES = [
'./',
'./index.html',
'./css/style.css',
'./js/app.js',
'./manifest.json'
];

self.addEventListener('install', event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => cache.addAll(FILES))

);

});

self.addEventListener('fetch', event => {

event.respondWith(

caches.match(event.request)
.then(response => response || fetch(event.request))

);

});
