const CACHE = "pwabuilder-offline-page";
const API = "api-data"
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "ToDo-replace-this-name.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

const BASE_URL = 'https://staging.multiqos.com:8012';

// Cache API responses using a NetworkFirst strategy
workbox.routing.registerRoute(
  new RegExp('^' + escapeRegExp(BASE_URL) + '/api/v1/user/'),
  new workbox.strategies.NetworkFirst({
    cacheName: API,
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200], // Cache responses with status 0 and 200 (you can adjust this as needed)
      }),
    ],
  })
);

// BACKGROUND SYNC

const messageAboutFailPlugin = {
  fetchDidFail: async ({ originalRequest, request, error, event, state }) => {
    messageClient(event, 'REQUEST_FAILED');
  },
};


// Instantiating and configuring plugin
const bgSyncPlugin = new BackgroundSyncPlugin('feedbackQueue', {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)

  onSync: async ({ queue }) => {
    // Run standard replay
    await queue.replayRequests();

    self.clients.matchAll().then((clients) => {
      clients.forEach((client) =>
        client.postMessage({ type: 'REPLAY_COMPLETED' })
      );
    });
  },
});



// Registering a route for retries
registerRoute(
  ({ url }) => url.pathname.startsWith('https://staging.multiqos.com:8012/api/v1/user/'),
  new NetworkFirst({
    plugins: [bgSyncPlugin, messageAboutFailPlugin],
  }),
  'POST'
);

// Helper function to escape special characters in a string for use in a regular expression
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});
