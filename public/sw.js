// const CACHE = "pwabuilder-offline-page";
// const API = "api-data"
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// // TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
// const offlineFallbackPage = "ToDo-replace-this-name.html";

// self.addEventListener("message", (event) => {
//   if (event.data && event.data.type === "SKIP_WAITING") {
//     self.skipWaiting();
//   }
// });

// self.addEventListener('install', async (event) => {
//   event.waitUntil(
//     caches.open(CACHE)
//       .then((cache) => cache.add(offlineFallbackPage))
//   );
// });

// if (workbox.navigationPreload.isSupported()) {
//   workbox.navigationPreload.enable();
// }

// const BASE_URL = 'https://staging.multiqos.com:8012';

// // Cache API responses using a NetworkFirst strategy
// workbox.routing.registerRoute(
//   new RegExp('^' + escapeRegExp(BASE_URL) + '/api/v1/user/'),
//   new workbox.strategies.NetworkFirst({
//     cacheName: API,
//     plugins: [
//       new workbox.cacheableResponse.CacheableResponsePlugin({
//         statuses: [0, 200], // Cache responses with status 0 and 200 (you can adjust this as needed)
//       }),
//     ],
//   })
// );

// // Helper function to escape special characters in a string for use in a regular expression
// function escapeRegExp(string) {
//   return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// }

// workbox.routing.registerRoute(
//   new RegExp('/*'),
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: CACHE
//   })
// );

// self.addEventListener('fetch', (event) => {
//   if (event.request.mode === 'navigate') {
//     event.respondWith((async () => {
//       try {
//         const preloadResp = await event.preloadResponse;

//         if (preloadResp) {
//           return preloadResp;
//         }

//         const networkResp = await fetch(event.request);
//         return networkResp;
//       } catch (error) {

//         const cache = await caches.open(CACHE);
//         const cachedResp = await cache.match(offlineFallbackPage);
//         return cachedResp;
//       }
//     })());
//   }
// });

const CACHE_NAME = "my-cache"; // Change this to a unique name
const API_CACHE_NAME = "api-cache"; // Cache for API responses

importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

workbox.routing.registerRoute(
  new RegExp("https://staging.multiqos.com:8012/api/v1/user/"), // Match the API route
  new workbox.strategies.NetworkFirst({
    cacheName: API_CACHE_NAME,
    plugins: [
      {
        cacheWillUpdate: (response ) => {
            console.log(response,"HIREN")
          // Check if the response has a 'statusCode' header and its value is 200
          const headers = response.headers;
          const statusCode = headers.get("statusCode");
          
          if (statusCode && statusCode === "200") {
            // Cache the response
            return response;
          } else {
            // Do not cache the response
            return null;
          }
        },
      },
    ],
  })
);

workbox.routing.registerRoute(
  new RegExp("/*"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE_NAME,
  })

);

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResp = await event.preloadResponse;

          if (preloadResp) {
            return preloadResp;
          }
          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
          const cache = await caches.open(CACHE_NAME);
          const cachedResp = await cache.match("/ToDo-replace-this-name.html");
          return cachedResp;
        }
      })()
    );
  }
});
