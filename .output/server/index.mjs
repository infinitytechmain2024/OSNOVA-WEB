globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-08-16T10:47:11.211Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-08-16T10:47:11.210Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/_-BLfzgYag.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"680-DUe17DczHRa5H3EO3fvx9zHijfw\"",
		"mtime": "2026-08-16T10:47:09.734Z",
		"size": 1664,
		"path": "../public/assets/_-BLfzgYag.js"
	},
	"/assets/balance-reference-card-BIQa2b6b.png": {
		"type": "image/png",
		"etag": "\"37d19-P91qTx1AZTr5638cjDwRGA7JHMI\"",
		"mtime": "2026-08-16T10:47:09.740Z",
		"size": 228633,
		"path": "../public/assets/balance-reference-card-BIQa2b6b.png"
	},
	"/assets/calendar-days-CXkGm2cK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e9-zb3VVXueRB/BYNOZL5xXYqxk7/8\"",
		"mtime": "2026-08-16T10:47:09.735Z",
		"size": 489,
		"path": "../public/assets/calendar-days-CXkGm2cK.js"
	},
	"/assets/building-2-Cg-YCEeZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17a-EmFG9ikukiEY9m+G6xoj9yOBhwY\"",
		"mtime": "2026-08-16T10:47:09.735Z",
		"size": 378,
		"path": "../public/assets/building-2-Cg-YCEeZ.js"
	},
	"/assets/chevron-left-Df0fQfxg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7d-Wp1zBpPDAkdQCAPWfcIXVTNdfyQ\"",
		"mtime": "2026-08-16T10:47:09.735Z",
		"size": 125,
		"path": "../public/assets/chevron-left-Df0fQfxg.js"
	},
	"/assets/clock-3-7yRz2uXK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-DSbnViX+SE5jq5RgGXXhz17pYqg\"",
		"mtime": "2026-08-16T10:47:09.735Z",
		"size": 164,
		"path": "../public/assets/clock-3-7yRz2uXK.js"
	},
	"/assets/company-overview-section-DCb5z3Xn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bc2-64S8NGVzJ3ok9lZ5U7LFZGnGBtU\"",
		"mtime": "2026-08-16T10:47:09.736Z",
		"size": 7106,
		"path": "../public/assets/company-overview-section-DCb5z3Xn.js"
	},
	"/assets/cpet-test-DiF2T5we.jpg": {
		"type": "image/jpeg",
		"etag": "\"16f26-ir2IG12Yf6SIRDSEb4656TLpa70\"",
		"mtime": "2026-08-16T10:47:09.742Z",
		"size": 93990,
		"path": "../public/assets/cpet-test-DiF2T5we.jpg"
	},
	"/assets/diagnostics-session-C_IAYVuL.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b953-eFCcOZJlDGHCMOWsq/7PVK55VzM\"",
		"mtime": "2026-08-16T10:47:09.743Z",
		"size": 375123,
		"path": "../public/assets/diagnostics-session-C_IAYVuL.jpg"
	},
	"/assets/_-DntirqBn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"33721-Aj7oWKeib9/dTCfSReyNEz5XmB8\"",
		"mtime": "2026-08-16T10:47:09.734Z",
		"size": 210721,
		"path": "../public/assets/_-DntirqBn.js"
	},
	"/assets/ecg-review-43jYg4Hw.jpg": {
		"type": "image/jpeg",
		"etag": "\"f0f2-VjphOzoEGB3VumtfESmfjY8cXPc\"",
		"mtime": "2026-08-16T10:47:09.743Z",
		"size": 61682,
		"path": "../public/assets/ecg-review-43jYg4Hw.jpg"
	},
	"/assets/consultation-BtlF2SeR.jpg": {
		"type": "image/jpeg",
		"etag": "\"434ae-ikSgXfD9Gxu75AUVNpLfXW9F9kc\"",
		"mtime": "2026-08-16T10:47:09.742Z",
		"size": 275630,
		"path": "../public/assets/consultation-BtlF2SeR.jpg"
	},
	"/assets/education-training-VQUtcCqH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f-V/Kc6eO1Swid1ejAV3mWOsLnnDY\"",
		"mtime": "2026-08-16T10:47:09.736Z",
		"size": 111,
		"path": "../public/assets/education-training-VQUtcCqH.js"
	},
	"/assets/ergometer-DFcNxK8-.jpg": {
		"type": "image/jpeg",
		"etag": "\"ce34-vKCXke11/WYZZb2PEH9pEb9DtbQ\"",
		"mtime": "2026-08-16T10:47:09.750Z",
		"size": 52788,
		"path": "../public/assets/ergometer-DFcNxK8-.jpg"
	},
	"/assets/education-courses-page-CkidRvuW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ffb-eGf7664KdqehuHdo2hN8fXgndIk\"",
		"mtime": "2026-08-16T10:47:09.736Z",
		"size": 24571,
		"path": "../public/assets/education-courses-page-CkidRvuW.js"
	},
	"/assets/education-practical-training-v2-DI2QYiwB.jpg": {
		"type": "image/jpeg",
		"etag": "\"5f9db-FKvAe6Jf0nSGxhFSeR/Z7t3k0sI\"",
		"mtime": "2026-08-16T10:47:09.746Z",
		"size": 391643,
		"path": "../public/assets/education-practical-training-v2-DI2QYiwB.jpg"
	},
	"/assets/cardio-heart-3d-DLgiMZPh.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d6fb-GrMeqQffxM4w2zde38SrCjRVNf8\"",
		"mtime": "2026-08-16T10:47:09.740Z",
		"size": 186107,
		"path": "../public/assets/cardio-heart-3d-DLgiMZPh.jpg"
	},
	"/assets/functional-training-DdTLWrlH.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ffaa-YAO5tr/5R1jcEmJ4oRdXz+8tGVI\"",
		"mtime": "2026-08-16T10:47:09.750Z",
		"size": 196522,
		"path": "../public/assets/functional-training-DdTLWrlH.jpg"
	},
	"/assets/education-conference-CO2NSB9R.png": {
		"type": "image/png",
		"etag": "\"fd1e9-ICa9uAYVvPpUrhBmK8jMngFY+9A\"",
		"mtime": "2026-08-16T10:47:09.745Z",
		"size": 1036777,
		"path": "../public/assets/education-conference-CO2NSB9R.png"
	},
	"/assets/carpathians-location-B-Ld24ho.jpg": {
		"type": "image/jpeg",
		"etag": "\"35615-NFpG9VSqJWZkWrzfykAqwU5WH/0\"",
		"mtime": "2026-08-16T10:47:09.741Z",
		"size": 218645,
		"path": "../public/assets/carpathians-location-B-Ld24ho.jpg"
	},
	"/assets/education-science-event-v2-BEvHgsJt.jpg": {
		"type": "image/jpeg",
		"etag": "\"5af63-4dPd6470FJgq6RYI9v/JdAqNhc8\"",
		"mtime": "2026-08-16T10:47:09.747Z",
		"size": 372579,
		"path": "../public/assets/education-science-event-v2-BEvHgsJt.jpg"
	},
	"/assets/events-6TDR9Fq1.jpg": {
		"type": "image/jpeg",
		"etag": "\"42d41-UBbfzAnrgiXDN16JKY6UOx7e9aw\"",
		"mtime": "2026-08-16T10:47:09.750Z",
		"size": 273729,
		"path": "../public/assets/events-6TDR9Fq1.jpg"
	},
	"/assets/education-training-Cwv52uGB.png": {
		"type": "image/png",
		"etag": "\"eefbc-kyToe0HpjzhoMOx9hp0TL1Jkegc\"",
		"mtime": "2026-08-16T10:47:09.749Z",
		"size": 978876,
		"path": "../public/assets/education-training-Cwv52uGB.png"
	},
	"/assets/kardiolohichna-diahnostyka-DxTlACjW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-f9pgZd5E9IK3UBlx5BsKsidY5po\"",
		"mtime": "2026-08-16T10:47:09.736Z",
		"size": 236,
		"path": "../public/assets/kardiolohichna-diahnostyka-DxTlACjW.js"
	},
	"/assets/konferentsii-DTY-qTlk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3128-CLpPVHH0leTyAM6T5XIrEbqNd3A\"",
		"mtime": "2026-08-16T10:47:09.736Z",
		"size": 12584,
		"path": "../public/assets/konferentsii-DTY-qTlk.js"
	},
	"/assets/kursy-CuVVnmex.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b9-3Wwl2IL5QYK1X9FvIohBGvc4l6s\"",
		"mtime": "2026-08-16T10:47:09.736Z",
		"size": 185,
		"path": "../public/assets/kursy-CuVVnmex.js"
	},
	"/assets/hur-equipment-CoFDjXe2.jpg": {
		"type": "image/jpeg",
		"etag": "\"56c37-NSTl0adMpE2qxc8S+8UxcaTchGk\"",
		"mtime": "2026-08-16T10:47:09.751Z",
		"size": 355383,
		"path": "../public/assets/hur-equipment-CoFDjXe2.jpg"
	},
	"/assets/message-circle-CDhmriQP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-PLkF73unwS3S7mLHk9Dg8i5pfn8\"",
		"mtime": "2026-08-16T10:47:09.737Z",
		"size": 236,
		"path": "../public/assets/message-circle-CDhmriQP.js"
	},
	"/assets/medical-assessment-BG46-P41.jpg": {
		"type": "image/jpeg",
		"etag": "\"6a636-Pzg7TApWkEaRisaCJgHqc48XI00\"",
		"mtime": "2026-08-16T10:47:09.752Z",
		"size": 435766,
		"path": "../public/assets/medical-assessment-BG46-P41.jpg"
	},
	"/assets/mobile-rehab-EL7cyU9n.jpg": {
		"type": "image/jpeg",
		"etag": "\"43b0c-1vTcodHBTZvArXEQ7gqVa/SnnZc\"",
		"mtime": "2026-08-16T10:47:09.753Z",
		"size": 277260,
		"path": "../public/assets/mobile-rehab-EL7cyU9n.jpg"
	},
	"/assets/iventy-CnHTWJL1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f69-GRLzZErqhKF7ohNevqEMQhg9yJQ\"",
		"mtime": "2026-08-16T10:47:09.736Z",
		"size": 12137,
		"path": "../public/assets/iventy-CnHTWJL1.js"
	},
	"/assets/novyny-q8LX8LDb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c7d-WxOotknS7f/GW5B3gkXz4YNldlA\"",
		"mtime": "2026-08-16T10:47:09.738Z",
		"size": 7293,
		"path": "../public/assets/novyny-q8LX8LDb.js"
	},
	"/assets/news-BrHfud04.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"148d-qPvjDq8FB4ynC/GjstY3McM7yL0\"",
		"mtime": "2026-08-16T10:47:09.737Z",
		"size": 5261,
		"path": "../public/assets/news-BrHfud04.js"
	},
	"/assets/partner-chnu-BjBJePtC.png": {
		"type": "image/png",
		"etag": "\"666a-AvMdqcUTkQJ//xATl3PR2U53HAU\"",
		"mtime": "2026-08-16T10:47:09.753Z",
		"size": 26218,
		"path": "../public/assets/partner-chnu-BjBJePtC.png"
	},
	"/assets/partner-heart-vj3RZsap.svg": {
		"type": "image/svg+xml",
		"etag": "\"2b76-yBC6jlpbrreOITanKI8V9NpSERc\"",
		"mtime": "2026-08-16T10:47:09.754Z",
		"size": 11126,
		"path": "../public/assets/partner-heart-vj3RZsap.svg"
	},
	"/assets/partner-asmu-CECUVYz9.png": {
		"type": "image/png",
		"etag": "\"9a41-gU3di1fr8hrLF+L+F/zrS6xpYYQ\"",
		"mtime": "2026-08-16T10:47:09.753Z",
		"size": 39489,
		"path": "../public/assets/partner-asmu-CECUVYz9.png"
	},
	"/assets/partner-ifnmu-SGLPBvZe.png": {
		"type": "image/png",
		"etag": "\"7874-n+1+2iW78snmtkiVR53l73G3+dA\"",
		"mtime": "2026-08-16T10:47:09.754Z",
		"size": 30836,
		"path": "../public/assets/partner-ifnmu-SGLPBvZe.png"
	},
	"/assets/partner-sytenko-DtFTHkNv.svg": {
		"type": "image/svg+xml",
		"etag": "\"22ee-S7hA/2pKakztjnpe5GubYaX5538\"",
		"mtime": "2026-08-16T10:47:09.755Z",
		"size": 8942,
		"path": "../public/assets/partner-sytenko-DtFTHkNv.svg"
	},
	"/assets/pershi-symptomy-problem-iz-sertsem-BiXxyGge.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42d8-L6bUOYuzDgRe/VNWfB1BwG8qHyM\"",
		"mtime": "2026-08-16T10:47:09.738Z",
		"size": 17112,
		"path": "../public/assets/pershi-symptomy-problem-iz-sertsem-BiXxyGge.js"
	},
	"/assets/pool-DjxJpGDq.jpg": {
		"type": "image/jpeg",
		"etag": "\"448fa-6Gn+iY5CvoKtzRT7SzTGLH3qeIQ\"",
		"mtime": "2026-08-16T10:47:09.755Z",
		"size": 280826,
		"path": "../public/assets/pool-DjxJpGDq.jpg"
	},
	"/assets/partner-karpatska-akademiia-C4xKTOZ1.png": {
		"type": "image/png",
		"etag": "\"1a066-+EsvVE9i81Jx1h8mdFLgUBoMh7s\"",
		"mtime": "2026-08-16T10:47:09.754Z",
		"size": 106598,
		"path": "../public/assets/partner-karpatska-akademiia-C4xKTOZ1.png"
	},
	"/assets/preload-helper-okkKlH5m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"166d-UyGo+uXdbe3ueTrEUsGfsNoSdWY\"",
		"mtime": "2026-08-16T10:47:09.739Z",
		"size": 5741,
		"path": "../public/assets/preload-helper-okkKlH5m.js"
	},
	"/assets/index-CB6BoEAk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4efb9-JpXualGrP5WnzAJ64NCx1JrsJeY\"",
		"mtime": "2026-08-16T10:47:09.734Z",
		"size": 323513,
		"path": "../public/assets/index-CB6BoEAk.js"
	},
	"/assets/navchannia-gszzrj5B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-1MtkNTXGLFABTuZNKMnlBtbGIK8\"",
		"mtime": "2026-08-16T10:47:09.737Z",
		"size": 167,
		"path": "../public/assets/navchannia-gszzrj5B.js"
	},
	"/assets/routes-6XSCQ0yL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17fda-fS5Jl0td/a5hghi/FW0W7ypNDwc\"",
		"mtime": "2026-08-16T10:47:09.739Z",
		"size": 98266,
		"path": "../public/assets/routes-6XSCQ0yL.js"
	},
	"/assets/service-checkup-avzHL_rS.jpg": {
		"type": "image/jpeg",
		"etag": "\"127b5-TqtZ25jME/YgtikiQ08jbxoMAAs\"",
		"mtime": "2026-08-16T10:47:09.755Z",
		"size": 75701,
		"path": "../public/assets/service-checkup-avzHL_rS.jpg"
	},
	"/assets/service-rehab-CVHPKjlr.jpg": {
		"type": "image/jpeg",
		"etag": "\"efc6-dQjEX6sOXYif408f2qvvIfb1yXA\"",
		"mtime": "2026-08-16T10:47:09.756Z",
		"size": 61382,
		"path": "../public/assets/service-rehab-CVHPKjlr.jpg"
	},
	"/assets/service-detail-template-zzjUAke3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d19c-DMx/XRyqtWyD5mok1Byrp4o5a+o\"",
		"mtime": "2026-08-16T10:47:09.739Z",
		"size": 53660,
		"path": "../public/assets/service-detail-template-zzjUAke3.js"
	},
	"/assets/service-sports-DGsoGTzw.jpg": {
		"type": "image/jpeg",
		"etag": "\"12458-K+sjWXyMSJDCQ58EhaNtprXqUHk\"",
		"mtime": "2026-08-16T10:47:09.756Z",
		"size": 74840,
		"path": "../public/assets/service-sports-DGsoGTzw.jpg"
	},
	"/assets/site-footer-CfRwejeh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"427cc-z3YtKcP4lJZvIeKhk2Y4Z1DATFQ\"",
		"mtime": "2026-08-16T10:47:09.739Z",
		"size": 272332,
		"path": "../public/assets/site-footer-CfRwejeh.js"
	},
	"/assets/social-projects-_t_CGf7u.jpg": {
		"type": "image/jpeg",
		"etag": "\"419bf-CjcsHgqw+5sNdNo00ziQXkR7nkE\"",
		"mtime": "2026-08-16T10:47:09.756Z",
		"size": 268735,
		"path": "../public/assets/social-projects-_t_CGf7u.jpg"
	},
	"/assets/triangle-alert-Ck5M4pYi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"104-lGKb0SptBKzC44gIyjlbW+14grM\"",
		"mtime": "2026-08-16T10:47:09.739Z",
		"size": 260,
		"path": "../public/assets/triangle-alert-Ck5M4pYi.js"
	},
	"/assets/styles-KTzBknqK.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"342ab-nDCcq9sZkGcHTdmQF4RI56oqv+8\"",
		"mtime": "2026-08-16T10:47:09.757Z",
		"size": 213675,
		"path": "../public/assets/styles-KTzBknqK.css"
	},
	"/assets/users-DZt-3keC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"244-8kzAXDne7nw9sGUMOt+I66vqF2U\"",
		"mtime": "2026-08-16T10:47:09.740Z",
		"size": 580,
		"path": "../public/assets/users-DZt-3keC.js"
	},
	"/assets/therapy-hall-l4sXoJ4m.jpg": {
		"type": "image/jpeg",
		"etag": "\"788fc-QSgN6FRNU7XzCdAZLlGZRfWdNq8\"",
		"mtime": "2026-08-16T10:47:09.757Z",
		"size": 493820,
		"path": "../public/assets/therapy-hall-l4sXoJ4m.jpg"
	},
	"/assets/therapy-session-COxtdhNK.jpg": {
		"type": "image/jpeg",
		"etag": "\"99044-pBFN6Fi31cOr7yR+0MJgXc5B6dE\"",
		"mtime": "2026-08-16T10:47:09.758Z",
		"size": 626756,
		"path": "../public/assets/therapy-session-COxtdhNK.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_rrAAYH = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_rrAAYH
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
