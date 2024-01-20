'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "82422166166772509e628bcc052c55ea",
"assets/AssetManifest.bin.json": "c01bf5d5d7b3c6bdd727e56a13964396",
"assets/AssetManifest.json": "dc7ef94ea8362a603d2dc1c0b7210313",
"assets/assets/images/game_background.png": "36261a63d612c0b90483b0770f2b1874",
"assets/assets/images/game_logo.png": "604ab960d92368b079c020ef493ffcc8",
"assets/assets/images/game_over_bg.png": "c62377b760bbfc99f781ed3ca1214fb5",
"assets/assets/images/gate.png": "cca0e66f4bb7be18f78517b90cc74043",
"assets/assets/images/health.png": "753656ed86bc354efcf7ca1e261ea1a8",
"assets/assets/images/intro_background_desktop.png": "c62377b760bbfc99f781ed3ca1214fb5",
"assets/assets/images/intro_background_mobile.png": "c62377b760bbfc99f781ed3ca1214fb5",
"assets/assets/images/leaderboard_bg.png": "c62377b760bbfc99f781ed3ca1214fb5",
"assets/assets/images/trophy.png": "2ecf6a6c938d57eee0215be92cd06d62",
"assets/assets/map/anim/arbuz.png": "88a90d99b565e3e0a8d19aa26a757fed",
"assets/assets/map/anim/arbuz.tsx": "c0a879bfd3932eafca2469a01978a957",
"assets/assets/map/anim/arbuz_idle.png": "b85869e7d4d4aed94cb33292cbcbd24e",
"assets/assets/map/anim/arbuz_idle_new.png": "fd8245da828df80a227c0242309f23b8",
"assets/assets/map/anim/arbuz_run.png": "767e0707dbac3f60df9f0936e1feb246",
"assets/assets/map/anim/arvbspritesheet_dash_jump.png": "15a530e6a25126e2be43f9288a94317f",
"assets/assets/map/anim/spritesh5eet_item_egg.png": "4f4bc2da14f36fe8efb517a1d5d320be",
"assets/assets/map/anim/spritesheet_dash_deathDrown.png": "5c22059a6f6c7255a10893426d836621",
"assets/assets/map/anim/spritesheet_dash_deathDrown.tsx": "d9740badc5006c3bfbc13c689ca2134f",
"assets/assets/map/anim/spritesheet_dash_deathFaint.png": "3989c2ee9ae8a8c892e18ab680f6cc3b",
"assets/assets/map/anim/spritesheet_dash_deathFaint.tsx": "9333035a6ef560095d18401d2cebc41c",
"assets/assets/map/anim/spritesheet_dash_deathPit.png": "a1d94d5863ddc8014a69bc21029dd9f5",
"assets/assets/map/anim/spritesheet_dash_deathPit.tsx": "3cbf386b590ab89c7fc06d6dd837b97b",
"assets/assets/map/anim/spritesheet_dash_edgeGrab.png": "a0cfcbd71ab5bc4514792939fba579ba",
"assets/assets/map/anim/spritesheet_dash_edgeGrab.tsx": "4fd46d50c801a931017290b72ce7d648",
"assets/assets/map/anim/spritesheet_dash_flap.png": "edf38acfdfbbe05de428ffd07c79eacf",
"assets/assets/map/anim/spritesheet_dash_flap.tsx": "8b55ce8a1e41d00baaeedc47e4a7bc76",
"assets/assets/map/anim/spritesheet_dash_idle.png": "a8dd365ed3f4d51072d8c35e1c9538f2",
"assets/assets/map/anim/spritesheet_dash_idle.tsx": "444a425770ecb604a677c2a38fd7e47e",
"assets/assets/map/anim/spritesheet_dash_jump.png": "01acd54753271f34e6d373a73c99b2d9",
"assets/assets/map/anim/spritesheet_dash_jump.tsx": "b2a332d024bbbc52c884aa91715d6c45",
"assets/assets/map/anim/spritesheet_dash_run.png": "c4471c3cc171d1fb49dc74af030606f9",
"assets/assets/map/anim/spritesheet_dash_run.tsx": "daa87e0414f7644a144b4d679753803d",
"assets/assets/map/anim/spritesheet_dash_slide.png": "7de0239821d02b61ab7bd82e8ed0717b",
"assets/assets/map/anim/spritesheet_dash_slide.tsx": "c6470840e0449d72ad9135ce808a1876",
"assets/assets/map/anim/spritesheet_enemy_ant.png": "4d4d0d79339cff64f82ab2d01acd5cec",
"assets/assets/map/anim/spritesheet_enemy_ant.tsx": "c78b9c287c2b48b236364fd0a7c5f04a",
"assets/assets/map/anim/spritesheet_enemy_bee.png": "61ea95300eaae34b3f0c2bfb2e9b149c",
"assets/assets/map/anim/spritesheet_enemy_bee.tsx": "d3db917d6d0173c97a9ad335ba0b433b",
"assets/assets/map/anim/spritesheet_enemy_beetle.png": "c416b1ee54eb937d12e79f90c78d0961",
"assets/assets/map/anim/spritesheet_enemy_beetle.tsx": "a43efc734dc39280d513266c25feb585",
"assets/assets/map/anim/spritesheet_enemy_butterfly.png": "8a026dac19e3a1d32c22056522ba2dc0",
"assets/assets/map/anim/spritesheet_enemy_butterfly.tsx": "a994eb6956f9b16981d89b0de54d70a7",
"assets/assets/map/anim/spritesheet_enemy_dragonfly.png": "93f645a2d0641fd01976ce0a63051dbe",
"assets/assets/map/anim/spritesheet_enemy_grasshopper.png": "f981422e9db89daab4db1eff1eb790c5",
"assets/assets/map/anim/spritesheet_enemy_grasshopper.tsx": "2776e2c1e7170ad6bab02523e557ee35",
"assets/assets/map/anim/spritesheet_fx_large.png": "e460f7d486285200acd464a80ff4d6ee",
"assets/assets/map/anim/spritesheet_fx_large.tsx": "1c769f1431cb2b48c5e6b926d82e793b",
"assets/assets/map/anim/spritesheet_fx_small.png": "9a1e37f977faccb33d2741e709a6d886",
"assets/assets/map/anim/spritesheet_fx_small.tsx": "391ee5542510e60b4fed0d43a34707a4",
"assets/assets/map/anim/spritesheet_item_egg.png": "1acde5c0639b80c4d40b7a1c9a572e61",
"assets/assets/map/anim/spritesheet_item_egg.tsx": "0a006e32aa40018db0061c1a0df30ad6",
"assets/assets/map/anim/spritesheet_item_feather.png": "ab7dd37d11a754761d2ba196ae873585",
"assets/assets/map/anim/spritesheet_item_feather.tsx": "4ed60125d809dd17aa597b859f4539fb",
"assets/assets/map/anim/spritesheet_phoenixDash_doublejump.png": "15c5b8693cff5d4861de16f2bdb648ca",
"assets/assets/map/anim/spritesheet_phoenixDash_doublejump.tsx": "4fe0a7aee204ecfaee123a24caa2e775",
"assets/assets/map/anim/spritesheet_phoenixDash_idle.png": "6fbe4354912e796a1d8f4544902c7967",
"assets/assets/map/anim/spritesheet_phoenixDash_idle.tsx": "61666bdc08a9d7d7d397525b73902641",
"assets/assets/map/anim/spritesheet_phoenixDash_jump.png": "f40bc3adf586bf16c3d462a2fd564bc1",
"assets/assets/map/anim/spritesheet_phoenixDash_jump.tsx": "c11615086459f8b0ab8b3ce76a1c5808",
"assets/assets/map/anim/spritesheet_phoenixDash_run.png": "4801237af827ab57aedb0b8538304b11",
"assets/assets/map/anim/spritesheet_phoenixDash_run.tsx": "702d65b533ab2bc1638aa9ed6796b86d",
"assets/assets/map/anim/spritesheet_poof.png": "dcb190f7daec1fbb04d449e4d0e0077f",
"assets/assets/map/anim/spritesheet_poof.tsx": "7ed0ec9a1b5c7451b78e84726b9eee31",
"assets/assets/map/anim/spritesheet_poof_orange.png": "eb28872e8400b0d0e287a5fecd3b33dd",
"assets/assets/map/anim/spritesheet_poof_orange.tsx": "1879ac64b0ca11d4da6648232b750385",
"assets/assets/map/anim/spriteshseet_item_gold.png": "4f4bc2da14f36fe8efb517a1d5d320be",
"assets/assets/map/flutter_runnergame_map_A.tmx": "6b9a37257c5ffb62b7bcfdb527110dc4",
"assets/assets/map/flutter_runnergame_map_B.tmx": "bbcbcfa7e9b16e740f4bb8ab88830c3e",
"assets/assets/map/flutter_runnergame_map_C.tmx": "15ead5749ba3a40a0f80a462868d2a27",
"assets/assets/map/objects/hom.png": "0e805090879aaa22af750e2325f8229f",
"assets/assets/map/objects/hom.tsj": "9eeab67bcec279a6a3a9395685c7faf1",
"assets/assets/map/objects/hom.tsx": "b04c9d38aa42a5045518973bc9f62c86",
"assets/assets/map/objects/hom1.tsj": "2ced5f5bfbdfa6d8ec072cbb8896bfe2",
"assets/assets/map/objects/hom1.tsx": "5f54e9775a6c7391988b131fdc821a9f",
"assets/assets/map/objects/homup.tsj": "e1a2ae981f97d4ae016c8284476818e8",
"assets/assets/map/objects/tile_enemies_v2.png": "75e2822e2a545e4b3e6d7c43279d501b",
"assets/assets/map/objects/tile_enemies_v2.tsx": "d7a3d1be631b7825272435164a818de3",
"assets/assets/map/objects/tile_forest_trees_back_v02.png": "91822cac7cb310b783a1b42f5374de28",
"assets/assets/map/objects/tile_forest_trees_back_v02.tsx": "e341ad0625dcd0e25feda263d375dead",
"assets/assets/map/objects/tile_forest_trees_front_v02.png": "945a620500d2652ea52914b3f67dd2e1",
"assets/assets/map/objects/tile_forest_trees_front_v02.tsx": "5d31c02eb4fcacf5fed92d262df4f302",
"assets/assets/map/objects/tile_gate_lvl5.png": "9d1e58f5ea5b79b443288d4424320005",
"assets/assets/map/objects/tile_gate_lvl5.tsx": "bf6bb8372f1005bbef25f2ecded1e341",
"assets/assets/map/objects/tile_gate_lvl7.png": "2f1c9968745fa30f803c76a4422bd7ad",
"assets/assets/map/objects/tile_gate_lvl7.tsx": "ba4ba845f38f03fdc781ceec3646c668",
"assets/assets/map/objects/tile_items_v2.png": "75b6bff9bdb72457a6cd8f288b21b62b",
"assets/assets/map/objects/tile_items_v2.tsx": "6336fbd68d7a195f71a7af5d4e734d2e",
"assets/assets/map/objects/tile_mountain_tree_v01.png": "3ad29b8386f9b09ba3da0410b6ca0e81",
"assets/assets/map/objects/tile_mountain_tree_v01.tsx": "75e47d9dbf5689df7bfd2ec9adebfb66",
"assets/assets/map/objects/tile_plains_mountains_B.png": "29c70bdf615f949610bc99e5271e31c2",
"assets/assets/map/objects/tile_plains_mountains_B.tsx": "da8437a541d7889fbf968bbaa748d567",
"assets/assets/map/objects/tile_plains_mountains_v01.png": "a243526e736411008b5cf520ec7d91c1",
"assets/assets/map/objects/tile_plains_mountains_v01.tsx": "ad656995b2edc082fd3aa43587de3e18",
"assets/assets/map/tiles/tile_atmos_forest_1.png": "05a2d79c99814ecec87ce0af7732f837",
"assets/assets/map/tiles/tile_atmos_forest_1.tsx": "f757d4a26cd8274c3c37bad30e930449",
"assets/assets/map/tiles/tile_atmos_forest_2.png": "e7383fe8edb7b6762c2de8690e2c4b58",
"assets/assets/map/tiles/tile_atmos_forest_2.tsx": "331819d5782be12bc514805b0cc74ef1",
"assets/assets/map/tiles/tile_atmos_forest_3.png": "b045d7207ab1064411d1664b998a7bf4",
"assets/assets/map/tiles/tile_atmos_forest_3.tsx": "eb51174df7dd1b27b2d4f5b7dbeca6cf",
"assets/assets/map/tiles/tile_clouds_BG.png": "5f19cd356a27a857929dfeedff06b1ab",
"assets/assets/map/tiles/tile_clouds_BG.tsx": "c417f47c7fe0e1cedbe127362bc8cdf9",
"assets/assets/map/tiles/tile_clouds_v02.png": "4ac3f75685d918b6e6107d7496a46e62",
"assets/assets/map/tiles/tile_clouds_v02.tsx": "a8477fa2c0c59a0c1c2649626eb46fa9",
"assets/assets/map/tiles/tile_decorations_v01.png": "499e74dd838d78fa4fd5a8c49fc5e938",
"assets/assets/map/tiles/tile_decorations_v01.tsx": "747d6fe1b147194ae4936735f8a9553f",
"assets/assets/map/tiles/tile_forest_bushes_v02.png": "f5449c16bb75f38004a0bfef82f33367",
"assets/assets/map/tiles/tile_forest_bushes_v02.tsx": "b457d0183e392f947dd4f894b7dd50c7",
"assets/assets/map/tiles/tile_forest_bushes_v03.png": "d00687aae1e9c0b1d22aa9824673c1c4",
"assets/assets/map/tiles/tile_forest_bushes_v03.tsx": "5b119112e14709f3dc3b3b698b97e9e9",
"assets/assets/map/tiles/tile_forest_ground_v02.png": "67d5f731a4b11680dd36c4473a5a9619",
"assets/assets/map/tiles/tile_forest_ground_v02.tsx": "ac45a6a4a54a6a262f35ec5a045fdf6a",
"assets/assets/map/tiles/tile_forest_ground_v03.png": "f5aee5f5ba8dc0f051be273e9f4bfe01",
"assets/assets/map/tiles/tile_forest_ground_v03.tsx": "f5f63b637f0bea57000a6042104a248b",
"assets/assets/map/tiles/tile_forest_ground_v04.png": "e92030c946949e438241a3ebc8d8127b",
"assets/assets/map/tiles/tile_forest_ground_v04.tsx": "b4a5810cfce99f6dd1cbd890d88df7e8",
"assets/assets/map/tiles/tile_forest_ground_v3morning.png": "1d83ee4483ae7993f6d337c74808b770",
"assets/assets/map/tiles/tile_forest_ground_v3morning.tsx": "153d7c838e155b079ca1bc22436a69dc",
"assets/assets/map/tiles/tile_gate_v2.png": "6b3dbdb7276fd973f527b63ec32a0e19",
"assets/assets/map/tiles/tile_gate_v2.tsx": "c1569a12ff833efbefe9413228309f5a",
"assets/assets/map/tiles/tile_ground_transition_v02.png": "86b2c9c7d084fcb24260c363417af29a",
"assets/assets/map/tiles/tile_ground_transition_v02.tsx": "67169fe937416f6f47e2f697a35835c6",
"assets/assets/map/tiles/tile_mountain_ground_v02.png": "a053486a51959c2ad72ea5feb11aaf43",
"assets/assets/map/tiles/tile_mountain_ground_v02.tsx": "eee03901c76b33f9fc850cfdd72d0571",
"assets/assets/map/tiles/tile_mountain_ground_v03.png": "868ea392d678beb101474a0c1d0fd0db",
"assets/assets/map/tiles/tile_mountain_ground_v03.tsx": "3292f58d27df6be13918fdee76832411",
"assets/assets/map/tiles/tile_mountain_mountains_v01.png": "c2df1566b33a214a7a0d7636d1b2f235",
"assets/assets/map/tiles/tile_mountain_mountains_v01.tsx": "cdb9455ed758d7cd9eac0425c612e6f1",
"assets/assets/map/tiles/tile_mountain_stars_v01.png": "96fa3c91e1226d8de86dbe8fabed0910",
"assets/assets/map/tiles/tile_mountain_stars_v01.tsx": "507782f366a295928cc63ce1c803497e",
"assets/assets/map/tiles/tile_plains_ground_v02.png": "64f09ac825436b61d46706568064fa22",
"assets/assets/map/tiles/tile_plains_ground_v02.tsx": "a8daa0e15fdd1959fdf4a6f188854656",
"assets/assets/map/tiles/tile_plains_ground_v03.png": "d0d291c07c9909e3c46d24aa45141376",
"assets/assets/map/tiles/tile_plains_ground_v03.tsx": "e4708e2ac42651f5cc34caa527a33433",
"assets/assets/map/tiles/tile_plains_hills_v01.png": "f738df9b25981dd7d4fb15353ec4a7c4",
"assets/assets/map/tiles/tile_plains_hills_v01.tsx": "81eec53fa7820df1798d93e268ead36e",
"assets/assets/map/tiles/tile_plains_hills_v02.png": "1cd488c837fb4726191b02bb55e6a782",
"assets/assets/map/tiles/tile_plains_hills_v02.tsx": "b522e00833d301019230dc36ba690043",
"assets/assets/map/tiles/tile_sky_v02.png": "9030a06a7ce03162e6f078ba66e1bcf9",
"assets/assets/map/tiles/tile_sky_v02.tsx": "25d82a9a13e0fcf967f90b537d61cbe1",
"assets/assets/map/tiles/tile_treehouse.png": "4929d7af1f12d7e53b7e9b72b7856901",
"assets/assets/map/tiles/tile_treehouse.tsx": "2481217a070db89f6d76f146478d3f2e",
"assets/assets/music/FlutterGame_SunshineAndDewdrops_1_1.mp3": "6c8257c4dcf1e7888eea003218991bc9",
"assets/assets/sfx/Dash_AcornPickup.mp3": "ed5364255793385c6365b08662021901",
"assets/assets/sfx/Dash_EggPickup.mp3": "f96b423f1cb5445ed1783e12fde2949f",
"assets/assets/sfx/Dash_FeatherPowerup.mp3": "7cc26e281b475a11ebfbe10621e09b2e",
"assets/assets/sfx/Dash_Footstep_Run.mp3": "144b07cbd9a8d47342756869998621ac",
"assets/assets/sfx/Dash_Jump.mp3": "fd6eebb05e4046e76130c35218c70ad1",
"assets/assets/sfx/Phoenix_DOUBLEJump.wav": "9540f28092f7806c6bd04992d9f51c5b",
"assets/assets/sfx/Phoenix_Jump.wav": "0b658a1cc9c8cae5e1aac430a0919de6",
"assets/FontManifest.json": "fc6c0f3ea70a3b8ba94163b2e3624a5e",
"assets/fonts/MaterialIcons-Regular.otf": "a1d49234016cd2586c2c6e3f62ee534f",
"assets/NOTICES": "7707bd223fa9e9eec6a22a01937f4085",
"assets/packages/app_ui/assets/fonts/GoogleSansText-Bold.ttf": "a6f5ad76d0ff8168fd7046354d62fc68",
"assets/packages/app_ui/assets/fonts/GoogleSansText-Regular.ttf": "3077fc2d656cc45868d673507772f8d4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ecad68a8f04a0ceee65621eb66dbf571",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"background.svg": "f5d8e8f0e6132dd2610acf577d07609a",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "8e604e3166c6401d523bdedd405fbecf",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-192.png": "f7079730c51fdbdc07fedb65b67a3076",
"icons/Icon-512.png": "7459ea1d42c3f7313b14dbb425e18f25",
"icons/Icon-maskable-192.png": "f7079730c51fdbdc07fedb65b67a3076",
"icons/Icon-maskable-512.png": "7459ea1d42c3f7313b14dbb425e18f25",
"index.html": "556259ebbdfbed67c87abc4437dc7351",
"/": "556259ebbdfbed67c87abc4437dc7351",
"logo.svg": "2d96d571e2a38ca1977a5430dc0bfbff",
"main.dart.js": "09020e152b5af17e60b71bcad5b9e265",
"manifest.json": "05f2eb765180ddef406d2fae67ebf489",
"version.json": "af2722840a54587b17def218b8525bc0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
