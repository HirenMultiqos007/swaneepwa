// // This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

// const CACHE = "pwabuilder-offline-page";

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

// workbox.routing.registerRoute(
//   new RegExp('/*'),
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: CACHE
//   })
// );

// self.addEventListener('fetch', (event) => {
//   console.warn(event.request.mode,"HIREN")
//   if (event.request.mode === 'cors') {

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

//         const cache = await caches.open(CACHE);
//         const cachedResp = await cache.match(offlineFallbackPage);
//         return cachedResp;
//       }
//     })());
//   }
// });


const cacheData = "appV1"
this.addEventListener('install',(event)=> {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
      "/",
      "/index.html",
      "/static/js/bundle.js",
      "/manifest.json",
      "/src/assets/images",
      "/static/media/*"
      ])
    })
  )
})

this.addEventListener('fetch',(event)=> {
  if(!navigator.onLine){
    // document.body.classList.add("offline")
    event.respondWith(
      caches.match(event.request).then((res)=> {
        if(res){
          return res
        }
        let requestUrl = event.request.clone()
        return fetch(requestUrl)
      })
    )
  }
})












// const CACHE = "pwabuilder-offline-page";
// const API = "api-data"
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

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

// self.addEventListener('fetch', (event) => {
//   console.warn(event,"event")
//   console.warn(event.request.mode === 'navigate',"event.request.mode")
//   if (event.request.method === 'POST') {
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
// API_ENDPOINT = ["category","main-category"]
// self.addEventListener("fetch", (event) => {
//   const request = event.request;
//   console.warn(request.url.includes("category"),"request.url")
//   if (request.url.includes("category")) {
//     event.respondWith(
//       fetch(request.clone()) // Clone the request for fetch and cache
//         .then((response) => {
//           console.warn(response,"Hiren")
//           // Store the API response in cache
//           if (response.status === 200) {
//             const responseToCache = response.clone();
//             console.warn(responseToCache,"responseToCache")
//             caches.open(API).then((cache) => {
//               cache.put(request, responseToCache);
//             });
//           }
//           return response;
//         })
//         .catch((e) => {
//           console.warn(e,"AFTER")
//           // Handle network errors for the API request here
//         })
//     );
//   } else {
//     event.respondWith(
//       caches.match(request).then((cachedResponse) => {
//         return cachedResponse || fetch(request); // Serve cached response or fetch from the network
//       })
//     );
//   }
// });

// self.addEventListener('install', async (event) => {
//   event.waitUntil(
//     caches.open(CACHE)
//       .then((cache) => cache.add(offlineFallbackPage))
//   );
// });

// self.addEventListener("fetch", (event) => {
//     if(!navigator.onLine){
//         event.respondWith(
//           caches.match(event.request).then((cachedResponse) => {
//             if (cachedResponse) {
//               return cachedResponse;
//             }
//             // If the request is not in cache, fetch it from the network
//             return fetch(event.request)
//               .then((response) => {
//                 // Clone the response as it can only be consumed once
//                 const responseClone = response.clone();
//                 // Cache the response for future requests
//                 caches.open(CACHE).then((cache) => {
//                   cache.put(event.request, responseClone);
//                 });
//                 return response;
//               })
//               .catch((error) => {
//                 console.log(error)
//             //   return  caches.match(event.request)
//               });
//           })
//         );
//     }
//   });
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
