/* ==============================
   MATHTYPE PWA — SERVICE WORKER
   v2.0.0 — updated for MathLive + Lao fonts
   ============================== */

const CACHE_NAME = 'mathtype-v2.0.0';

// ===== ໄຟຮທ້ອງຖິ່ນ (Local Assets) =====
const LOCAL_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

// ===== KaTeX CDN Assets =====
const KATEX_ASSETS = [
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js',
  // KaTeX Fonts — ຮ
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Main-Regular.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Main-Bold.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Main-Italic.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Main-BoldItalic.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Math-Italic.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Math-BoldItalic.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Size1-Regular.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Size2-Regular.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Size3-Regular.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Size4-Regular.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_AMS-Regular.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Fraktur-Regular.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Fraktur-Bold.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Script-Regular.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_SansSerif-Regular.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_SansSerif-Bold.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_SansSerif-Italic.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Typewriter-Regular.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Caligraphic-Regular.woff2',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/KaTeX_Caligraphic-Bold.woff2',
];

// ===== MathLive CDN Assets =====
const MATHLIVE_ASSETS = [
  'https://unpkg.com/mathlive@0.101.1/dist/mathlive.min.js',
];

// ===== html2canvas =====
const EXPORT_ASSETS = [
  'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js',
];

// ===== Google Fonts (cache ເທົ່າທີ່ເຮັດໄດ້) =====
const FONT_PATTERNS = [
  /fonts\.googleapis\.com/,
  /fonts\.gstatic\.com/,
];

// ລວມທຸກ URL ສຳລັບ pre-cache
const PRECACHE_URLS = [
  ...LOCAL_ASSETS,
  ...KATEX_ASSETS,
  ...MATHLIVE_ASSETS,
  ...EXPORT_ASSETS,
];

// ===== INSTALL — Pre-cache ທຸກ asset =====
self.addEventListener('install', event => {
  console.log('[SW] Installing MathType PWA v2.0.0...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // ໃຊ້ allSettled ເພື່ອບໍ່ໃຫ້ install fail ຖ້າ CDN ໃດໜຶ່ງ offline
      return Promise.allSettled(
        PRECACHE_URLS.map(url =>
          cache.add(url).catch(err => {
            console.warn('[SW] Could not pre-cache (will retry on fetch):', url, err.message);
          })
        )
      );
    }).then(() => {
      console.log('[SW] Pre-cache complete. Activating immediately...');
      return self.skipWaiting(); // activate ທັນທີ ບໍ່ຕ້ອງລໍຖ້າ reload
    })
  );
});

// ===== ACTIVATE — ລຶບ cache ເກົ່າ =====
self.addEventListener('activate', event => {
  console.log('[SW] Activating v2.0.0...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => {
            console.log('[SW] Deleting old cache:', k);
            return caches.delete(k);
          })
      )
    ).then(() => {
      console.log('[SW] Old caches cleared. Claiming clients...');
      return self.clients.claim(); // ຄວບຄຸມ tabs ທຸກອັນທັນທີ
    })
  );
});

// ===== ຊ່ວຍ: ບອກວ່າ URL ນີ້ຄວນ cache ໄດ້ =====
function isCacheable(url) {
  const u = new URL(url);
  // skip chrome-extension, data URIs, POST, etc.
  if (u.protocol !== 'https:' && u.protocol !== 'http:') return false;
  if (u.pathname.startsWith('/browser-sync')) return false;
  return true;
}

// ===== ຊ່ວຍ: ບອກວ່າ URL ນີ້ເປັນ Google Font =====
function isGoogleFont(url) {
  return FONT_PATTERNS.some(p => p.test(url));
}

// ===== FETCH — Strategy: Cache First + Network Fallback =====
self.addEventListener('fetch', event => {
  // ຂ້າມ non-GET requests
  if (event.request.method !== 'GET') return;

  const url = event.request.url;

  // ຂ້າມ browser-sync / dev tools / chrome-extension
  if (url.startsWith('chrome-extension://')) return;
  if (url.includes('browser-sync')) return;

  // Google Fonts: Stale-While-Revalidate (ໃຊ້ cache ກ່ອນ, update background)
  if (isGoogleFont(url)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        const cached = await cache.match(event.request);
        const networkFetch = fetch(event.request).then(response => {
          if (response && response.status === 200) {
            cache.put(event.request, response.clone());
          }
          return response;
        }).catch(() => cached); // ຖ້າ offline ໃຊ້ cached

        return cached || networkFetch;
      })
    );
    return;
  }

  // ທຸກ Asset ອື່ນ: Cache First → Network → Offline Fallback
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        // ມີໃນ cache — return ທັນທີ (offline-ready)
        return cached;
      }

      // ບໍ່ມີໃນ cache — ດຶງຈາກ network ແລ້ວ save
      return fetch(event.request)
        .then(response => {
          // ບໍ່ cache ຖ້າ response ບໍ່ ok ຫຼື opaque (cross-origin no-cors)
          if (
            !response ||
            response.status !== 200 ||
            response.type === 'opaque' ||
            !isCacheable(url)
          ) {
            return response;
          }

          // Save ໃສ່ cache ສຳລັບຄັ້ງຕໍ່ໄປ
          const cloned = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
          return response;
        })
        .catch(() => {
          // ===== Offline Fallback =====
          const accept = event.request.headers.get('accept') || '';

          // HTML page → return index.html ຈາກ cache
          if (accept.includes('text/html')) {
            return caches.match('./index.html');
          }

          // JS/CSS → return empty response (ບໍ່ crash)
          if (accept.includes('application/javascript') || accept.includes('text/css')) {
            return new Response('/* offline */', {
              headers: { 'Content-Type': 'text/plain' },
            });
          }

          // ສຳລັບ request ອື່ນໆ return 503
          return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        });
    })
  );
});

// ===== MESSAGE — ຮັບຄຳສັ່ງຈາກ app =====
self.addEventListener('message', event => {
  // SKIP_WAITING: ບັງຄັບ activate SW ໃໝ່ທັນທີ
  if (event.data?.type === 'SKIP_WAITING') {
    console.log('[SW] SKIP_WAITING received. Activating new SW...');
    self.skipWaiting();
  }

  // CACHE_URLS: cache URL ເພີ່ມເຕີມທີ່ app ສົ່ງມາ
  if (event.data?.type === 'CACHE_URLS' && Array.isArray(event.data.urls)) {
    caches.open(CACHE_NAME).then(cache => {
      event.data.urls.forEach(url => {
        cache.add(url).catch(() => {});
      });
    });
  }
});
