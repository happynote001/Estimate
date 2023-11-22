'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0ecbacdfe2b266ff0e3fe43fc87ad85f",
".git/config": "11318cd2c99e28d0a83f8967c3d19e36",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d3a5b02db90212477e3834205a4ad787",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "08f35ad40832d35d2575eaf655b9d699",
".git/logs/refs/heads/master": "08f35ad40832d35d2575eaf655b9d699",
".git/logs/refs/remotes/origin/master": "42109c967bc676f96220a23536cec4a6",
".git/objects/04/ab1457912ed04f6ff9cbced12b1a9e32fb47a6": "0a17eb204e35b86806143a6c9fe6a59a",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/2ff161b513bd1e9cfc9cceb0507f06ea71a1a9": "e95763f75f9a8c4f4a5452a85e6243a0",
".git/objects/0a/ee75609011645d078f1da3156964bc329a401f": "0630a03fd22cdcf078e92a3aaa4c6386",
".git/objects/12/1eb3a20e577064b9563bb250a24767a259eb29": "a58bce0e0fdf707fe66f31bbd4e76504",
".git/objects/13/776f332cd340d23c302ff5667894a89ff199a9": "c27ab93ab23afd6eee5a96f9c85033c9",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/37/821f8663ceb15def7a82f91214885d1374fb57": "eeab7bed05f3a11dbb85b86572864e85",
".git/objects/45/7fff4995d0f708afb97b325236e8dfa2871e92": "5604be24d779251769e1cd4cb3f31627",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/66/249fc4696e69751e09f11c4f1979e7ee15a0af": "49cf4cc4ee7e4290d9c05d699bf53251",
".git/objects/7a/138627820d83e5375df893482e9f2711b08fb5": "e55e761d636b9a1a1523a63e5209ba3a",
".git/objects/81/70e2a9989d39f99a400fe25277088f3de9edd7": "e949f93d65b56b41a20a8a33eede5bb0",
".git/objects/84/aa78a1435525da052a9d6b754674381fec0cf9": "7deee86f48789f2e337cb71fd2a05c1e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/80fe34c3bb79b5c04a5b46eb7e9a699739da52": "ea2b108ecdebbf0e7d7adc30f10d8ad1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8e/bd59661f497b2d60acc58c452d88bc5402c5c9": "f0ddeeec8824aabca0d696c32de7bf7d",
".git/objects/96/33bfc8ed13dfec2715894645078b6088c34a62": "7f9c973d5a039bf5ccee3f05a3b83a5c",
".git/objects/9c/469c6767800cfdcb7a3c0d2fdf45cba171e455": "36cd25bde36e490b68e898fce63a6f37",
".git/objects/ab/29ebb01b7b1a8c49fa762a205d96fd31700f80": "92d502c3f3a8c3c18bad346afc90110d",
".git/objects/af/600f902b509bb1279987776e05d803ec59389e": "d93de06ef11b64ef7787f9b016aa92cf",
".git/objects/b5/6c3b62f7a77951a8d1c4f3542bb7e6a6a74022": "7cb70e357a2f58bef651a7aff657c85b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/cb/23080881bcf02d8f89fa72172e18bc6fe048e0": "41381030b818811442374df2e4f014f7",
".git/objects/cd/91349e4be883d10b2ff17ed46ddcd419e6ba93": "6ad350c7e5005c1fb5a583b7ee91d418",
".git/objects/cd/a4f36ab00a004751042e361bf11f78448e49a0": "1daae1b92289045d6147b830d63b8c7d",
".git/objects/d0/a02f9642080792408a2d357983e909e16318e3": "763e4573934ec82b1d47dbeb310b6ce8",
".git/objects/d3/cbd7f5c7a6d2fc043d3635b6dbf34aeb3ca71a": "539671379ebef8322699bcab08934a21",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/34e57587763e6553bf8f119c87f023a04cd09a": "a55bb31d5d26741dda6ed8d92596509d",
".git/objects/e1/534303c52878819af47bdd077f3c0ce79bcc3d": "f4e2f75a76fd63953ae3bf7e54bef40b",
".git/objects/e1/a8b3a4e83be4cd8160f922cfa9314a71d311d2": "4fbaa3c351295ca22fdacec35a2d8479",
".git/objects/e3/86541bf5190527cb0227ab031db00cda7f6471": "9061b4b62f998ab539d3ad7af1a9999e",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/d5f284b854490bcda2f36862937f7a9fafa16d": "2638c54424f67c7177a5832122bffa1f",
".git/objects/e8/437f6d2e38e716ccfa27d34ffe9843a6389462": "bea0bd4018827154813c8d1c37fd741f",
".git/objects/e9/ac72efcc9a86ab13a9ff21a8279e5ab855ffe6": "4931f050bfc6a36e61bebadeb668f847",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e0e2fbcdd1f819201b5a853df2f2302c54e903": "afb4c7adf4adbe6e60f88960b081464b",
".git/objects/ec/7870ed4c276b0465f605b5b2338b4fd4189854": "99d16f00a88118b3e6b3ec9c360a8431",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fe/1fef2966d32a75cca64164a2eaaf58d137051f": "ea87071d1b5822a13c584f559df84c62",
".git/objects/ff/4fe446e587f97333fb8dc9383eb77765b05c69": "161e4eb10498e7c31d9eb2481194c660",
".git/refs/heads/master": "1b33dd4b7512965de32d83a35040d92e",
".git/refs/remotes/origin/master": "1b33dd4b7512965de32d83a35040d92e",
"assets/AssetManifest.bin": "e2f99941e8fd83499d3b6b47544f4bb5",
"assets/AssetManifest.bin.json": "849d923fed5e37ae3d770c65b8423454",
"assets/AssetManifest.json": "f3443bda06564ba52e8e610dc587185f",
"assets/assets/fonts/SUITE-Bold.ttf": "ed6710c283c939407c8bb235d3c84365",
"assets/assets/fonts/SUITE-ExtraBold.ttf": "8167f66ae1d068ae5da09417bcb91263",
"assets/assets/fonts/SUITE-Heavy.ttf": "d7b1892c05b816e2d027de8bed16bbed",
"assets/assets/fonts/SUITE-Light.ttf": "a0999b4dba4cd520c343d09f5e003b68",
"assets/assets/fonts/SUITE-Medium.ttf": "0b5ba59979efa010cccac7e963bdfd74",
"assets/assets/fonts/SUITE-Regular.ttf": "fc4507493d3a62e822c1cf1c51224d07",
"assets/assets/fonts/SUITE-SemiBold.ttf": "c88fd31ca7b5bb1bf37c9731741e8332",
"assets/FontManifest.json": "dab09f390bdd905980d8fb360ba08965",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "c7ef80c3a67624784363c379c7963cc4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.js.symbols": "ac01b6cbb645f360ca2895570c643303",
"canvaskit/canvaskit.wasm": "c4617295691b28369ad130c3ea27d640",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.js.symbols": "98378de0c2c63b0d282826a2482c854c",
"canvaskit/chromium/canvaskit.wasm": "73b16d4d822ebb8e922fda36783cec74",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "90438aedfcf3bb766218a1385148faeb",
"canvaskit/skwasm.wasm": "f5fb55ff49251ef3ab73be6bd7a066f4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5f7f13f9fbf0b7e26270ae4ef2e8ac1f",
"/": "5f7f13f9fbf0b7e26270ae4ef2e8ac1f",
"main.dart.js": "ee910ea59733e26751a2f8f5c60e93c1",
"manifest.json": "2d88a9f4166bf25bbf9ccff2484496ca",
"version.json": "52f52d5708214139dfe54e0854c23b73"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
