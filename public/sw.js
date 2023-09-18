const CACHE = "pwabuilder-offline-page";
const API = "api-data"
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
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

// Cache API responses using a NetworkFirst strategy
// workbox.routing.registerRoute(
//   new RegExp('^' + escapeRegExp(BASE_URL) + '/api/v1/user/'),
//   new workbox.strategies.NetworkFirst({
//     cacheName: API,
//     plugins: [
//       new workbox.cacheableResponse.CacheableResponsePlugin({
//         statuses: [0, 200], // Cache responses with status 0 and 200 (you can adjust this as needed)
//       }),
//       {
//         // Modify this part to check the "status" field instead of "statusCode"
//         cacheWillUpdate: async ({ response }) => {
//           console.log(response, "HIREN");
//           // Check if the response has a 'status' field and its value is 1 (or your desired success value)
//           const data = await response.json();
//           if (data && data.meta && data.meta.status === 1) {
//             // Cache the response
//             return response;
//           } else {
//             // Do not cache the response
//             return null;
//           }
//         },
//       },
//     ],
//   })
// );


// Helper function to escape special characters in a string for use in a regular expression
// function escapeRegExp(string) {
//   return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// }

// workbox.routing.registerRoute(
//   new RegExp('/*'),
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: CACHE
//   })
// );

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([]);
  workbox.skipWaiting();
  workbox.clientsClaim();

  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    }),
  ); 
}else {
  console.log(`Boo! Workbox didn't load 😬`);
}
// self.addEventListener('fetch', (event) => {
//   console.warn(event,"event")
//   console.warn(event.request.mode === 'navigate',"event.request.mode")
//   if (event.request.mode === 'navigate') {
//     event.respondWith((async () => {
//       try {
//         const preloadResp = await event.preloadResponse;

//         if (preloadResp) {
//           return preloadResp;
//         }
//         const networkResp = await fetch(event.request);
//         console.warn(networkResp,"networkResp")
//         return networkResp;
//       } catch (error) {
//         alert(error)
//         const cache = await caches.open(CACHE);
//         console.warn(cache,"Cache");
//         const cachedResp = await cache.match(offlineFallbackPage);
//         return cachedResp;
//       }
//     })());
//   }
// });

// self.addEventListener("fetch", (event) => {
//   console.warn("API")
//   // We only want to call event.respondWith() if this is a GET request for an HTML document.
//   // if (
//   //   event.request.method === "POST" &&
//   //   event.request.headers.get("accept").includes("text/html")
//   // ) {
//     console.warn("Handling fetch event for", event.request.url);
//     event.respondWith(
//       fetch(event.request).catch((e) => {
//         console.warn("Fetch failed; returning offline page instead.", e);
//         return caches
//           .open(API)
//           .then((cache) => cache.match(API));
//       }),
//     );
//   // }
// });

