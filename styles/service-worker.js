const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'index.html',
  'theme.html',
  'venue.html',
  'vendor.html',
  'Contact_form.html',
  'Registration_form.html',
  '/styles/style.css',
  '/styles/theme.css',
  '/styles/venue.css',
  '/styles/vendor.css',
  '/styles/footer.css',
  '/styles/form.css',
  '/styles/header.css',
  '/images/touch/icon-128x128.png',
  '/images/touch/icon-192x192.png',
  '/images/touch/icon-256x256.png',
  '/images/touch/icon-384x384.png',
  '/images/touch/icon-512x512.png',
  '/images/beach.jpg',
  '/images/bg.jpg',
  '/images/colour.png',
  '/images/courtyard.jpg',
  '/images/cove.jpg',
  '/images/glasshouse.jpg',
  '/images/jimmy-kimmel.jpg',
  '/images/modern.jpg',
  '/images/outdoor.jpg',
  '/images/photo.jpg',
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
  '/images/W-hotel.jpg',
  '/images/wedding.jpeg',
  '/images/weddingbackground.jpg',
  '/images/weddingcake.jpg',
  '/images/weddingdj.jpg',
  '/images/weddingflower.jpg',
  '/images/weddingmakeup.jpg',
  '/images/weddingofficiant.jpg',
  '/images/wh.jpg',
  '/images/wn.jpg',
  '/images/yk.jpg',
  '/images/yt.jpg'
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
});

