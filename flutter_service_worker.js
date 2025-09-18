'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4178f6d8fd9b62689051307732b3eec0",
"assets/AssetManifest.bin.json": "4a71eb962ce8696f0dd5f83f74f54f35",
"assets/AssetManifest.json": "304110d70d927bc9bae0bdee920eb77f",
"assets/assets/empty.png": "59dd822019125212023a8e4a5246ba69",
"assets/assets/iconeMeteo/clear.jpg": "d2fe33a4afa27478815309949f1b57be",
"assets/assets/iconeMeteo/cloud.jpg": "8ef97e5a85a1160fbbac8579b5210611",
"assets/assets/iconeMeteo/partCloud.jpg": "5610c08f94654b1af7e4995ddf665327",
"assets/assets/iconeMeteo/partRainy.jpg": "1ba290649ebfec631886468dce7753bc",
"assets/assets/iconeMeteo/rainy.jpg": "d3ad61ea70400c42e09587f9c41b09cd",
"assets/assets/iconeMeteo/snow.jpg": "97944b8fe87a4f2ee90572705a8d0e8b",
"assets/assets/iconeMeteo/sun.jpg": "794f96071b661444f1b3e6d7803ef274",
"assets/assets/iconeMeteo/thunder.jpg": "54d20dcc7cea6eb8f5b893d6794d7dc5",
"assets/assets/outfit/boots.png": "fd3334cf98241e52487f8ba1139a5ad9",
"assets/assets/outfit/gloves.png": "7cca0b7777b9c44f313c1730c1970966",
"assets/assets/outfit/heavy%2520shoes.png": "d0687cfd941e460f3bed7eb23a2954af",
"assets/assets/outfit/jeans.png": "f28a4a7b04e845c9b1adedffa560e84b",
"assets/assets/outfit/light%2520jacket.png": "6f779d6f0ed49bf6f66509d6f9dcbc03",
"assets/assets/outfit/light%2520pants.png": "5ec42ed865f7d999cf5c9d6a1c70a4af",
"assets/assets/outfit/sandals.png": "ae6871aa8eab6f18f099de9fb155668c",
"assets/assets/outfit/scarf.png": "6cd6b1568af246edae0301e06cfd2993",
"assets/assets/outfit/shirt.png": "be9ca4d31d1f71bc73f298aac28bc4e0",
"assets/assets/outfit/shorts.png": "b622adf1e9b2ad1b8319d2b1ce6c9380",
"assets/assets/outfit/sneakers.png": "f4f5d7c4e38784df90b82d30b18229b3",
"assets/assets/outfit/sunglasses.png": "9668997cbdbdb3798e1f91d56aa9efe2",
"assets/assets/outfit/sweater.png": "63e86127ecce7f1620f5095665601580",
"assets/assets/outfit/T-shirt.png": "4c8769494fc8bac6c170965c0624c1c4",
"assets/assets/outfit/umbrella.png": "a05d23ea54ceb3983b51d9d84f2227a3",
"assets/assets/outfit/warm%2520pants.png": "f28a4a7b04e845c9b1adedffa560e84b",
"assets/assets/outfit/water%2520resistant%2520shoes.png": "517eecf66551011fae304571d7c49036",
"assets/assets/outfit/water%2520resistant%2520trousers.png": "517eecf66551011fae304571d7c49036",
"assets/assets/outfit/waterproof%2520trousers.png": "517eecf66551011fae304571d7c49036",
"assets/assets/outfit/windbreaker.png": "f6fd96344d4a1804acbb32ba18986aa8",
"assets/assets/outfit/winter%2520coat.png": "5fea3a1376b4fac4e152fbcd38f69d1a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e1ece19c4ffd1ac41965915ff6aa2d50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "e0a40e415dcf37c2a41588443d5bae67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b85d62f9980c33d78609811a584898df",
"/": "b85d62f9980c33d78609811a584898df",
"main.dart.js": "b1719c00821d6ed97164f24ebee0fad8",
"manifest.json": "6075a63af277f064f64818687cde5144",
"version.json": "3e4ba5b31facdd20cfdb1e160c6d8a82"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
