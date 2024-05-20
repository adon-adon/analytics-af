// import { clientsClaim } from "workbox-core";
// import { precacheAndRoute } from "workbox-precaching";
// importScripts(
//     "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
// );

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

/* --------------- */

// https://developers.google.com/web/tools/workbox/guides/configure-workbox#configure_debug_builds_vs_production_builds
// Force development builds
// if (process.env.NODE_ENV !== "production") {
//     console.log("This is a dev-only log message!");
//     workbox.setConfig({ debug: true });
// }

// https://developers.google.com/web/tools/workbox/modules/workbox-core#view_and_change_the_default_cache_names
workbox.core.setCacheNameDetails({
    prefix: "tracxn",
    suffix: "v1",
    precache: "install-time",
    runtime: "run-time",
    // googleAnalytics: "ga"
});

console.log(
    workbox.strategies,
    "workbox.strategiesworkbox.strategiesworkbox.strategiesworkbox.strategiesworkbox.strategies"
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);

/* --------------- */
// https://developers.google.com/web/tools/workbox/modules/workbox-strategies#changing_the_cache_used_by_a_strategy
workbox.routing.registerRoute(
    new RegExp(".(?:png|gif|jpg|jpeg|svg)$"),
    new workbox.strategies.CacheFirst({
        cacheName: "image-cache",
        plugins: [
            new workbox.expiration.Plugin({
                // Keep at most 50 entries.
                maxEntries: 5000,
                // Don't keep any entries for more than 7 days.
                maxAgeSeconds: 7 * 24 * 60 * 60,
                // Automatically cleanup if quota is exceeded.
                purgeOnQuotaError: true
            })
        ]
    })
);
workbox.routing.registerRoute(
    /(\/member)/,
    new workbox.strategies.NetworkFirst({
        // new workbox.strategies.StateWhileRevalidate({
        cacheName: "api-cache",
        plugins: [
            new workbox.expiration.Plugin({
                // Keep at most 50 entries.
                maxEntries: 50,
                // Don't keep any entries for more than 1 hours.
                maxAgeSeconds: 1 * 60 * 60,
                // Automatically cleanup if quota is exceeded.
                purgeOnQuotaError: true
            })
        ]
    })
);
workbox.routing.registerRoute(
    /^https:\/\/8day\.s3\.ap-east-1\.amazonaws\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "s3-amazonaws"
    })
);
workbox.routing.registerRoute(
    new RegExp("/static/"),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "my-cache" // Use the same cache name as before.
    })
);
// workbox.routing.registerRoute(
//     new RegExp("/npm-js/"),
//     new workbox.strategies.CacheOnly({
//         cacheName: "npmjs-cache" // Use the same cache name as before.
//     })
// );
/* --------------- */

// https://developers.google.com/web/tools/workbox/guides/common-recipes#google_fonts
// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/www\.google-analytics\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "googlejs"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/www\.googletagmanager\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "googlejs"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/unpkg\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "unpkg-cache"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/cdn\.livechatinc\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "livechatincjs",
        plugins: [
            new workbox.expiration.Plugin({
                // Keep at most 50 entries.
                maxEntries: 500,
                // Don't keep any entries for more than 7 days.
                maxAgeSeconds: 1 * 24 * 60 * 60,
                // Automatically cleanup if quota is exceeded.
                purgeOnQuotaError: true
            })
        ]
    })
);

/* --------------- */

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30
            })
        ]
    })
);

/* --------------- */

// // const { clientsClaim } = workbox;
// // // 放在顶部，sw获得控制权，不然是下次打开页面获得
// // clientsClaim();
// // // 跳过等待
// self.skipWaiting();
// // // 预请求资源，__WB_MANIFEST变量会注册webpack打包的所有项目资源文件
// // precacheAndRoute(self.__WB_MANIFEST);
