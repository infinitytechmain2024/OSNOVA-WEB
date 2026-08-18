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
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-08-18T12:46:22.217Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/_-P3ixxZE1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"676-pNRFagvihsEmEh4u5M0okYUsQeQ\"",
		"mtime": "2026-08-18T12:46:21.792Z",
		"size": 1654,
		"path": "../public/assets/_-P3ixxZE1.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-08-18T12:46:22.218Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/building-2--WCufry-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-apwYSkGKJXKP966Kp27xwoUZn9I\"",
		"mtime": "2026-08-18T12:46:21.792Z",
		"size": 374,
		"path": "../public/assets/building-2--WCufry-.js"
	},
	"/assets/calendar-days-CsX73kHa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e5-z1PIadhL0XtRONaO8P+T+9tV5pA\"",
		"mtime": "2026-08-18T12:46:21.792Z",
		"size": 485,
		"path": "../public/assets/calendar-days-CsX73kHa.js"
	},
	"/assets/cardio-heart-3d-DLgiMZPh.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d6fb-GrMeqQffxM4w2zde38SrCjRVNf8\"",
		"mtime": "2026-08-18T12:46:21.794Z",
		"size": 186107,
		"path": "../public/assets/cardio-heart-3d-DLgiMZPh.jpg"
	},
	"/assets/chevron-left-BxYCDMPS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79-OaXbd+CpOaEVSshKpkNxQDGdiO8\"",
		"mtime": "2026-08-18T12:46:21.793Z",
		"size": 121,
		"path": "../public/assets/chevron-left-BxYCDMPS.js"
	},
	"/assets/blocks-COjDkNtw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"440ba-TxuwYu2r3Tmx9YpLZf9dkPZ6D/Y\"",
		"mtime": "2026-08-18T12:46:21.792Z",
		"size": 278714,
		"path": "../public/assets/blocks-COjDkNtw.js"
	},
	"/assets/clock-3-C3BW-ETr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a0-/806VmYI8lH8JT1hp3jnM8ukKWk\"",
		"mtime": "2026-08-18T12:46:21.793Z",
		"size": 160,
		"path": "../public/assets/clock-3-C3BW-ETr.js"
	},
	"/assets/company-overview-section-CG5HMhyU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2812-W4Lh9NCprhZ67Z7cPo3HRnHMV4s\"",
		"mtime": "2026-08-18T12:46:21.793Z",
		"size": 10258,
		"path": "../public/assets/company-overview-section-CG5HMhyU.js"
	},
	"/assets/balance-reference-card-BIQa2b6b.png": {
		"type": "image/png",
		"etag": "\"37d19-P91qTx1AZTr5638cjDwRGA7JHMI\"",
		"mtime": "2026-08-18T12:46:21.794Z",
		"size": 228633,
		"path": "../public/assets/balance-reference-card-BIQa2b6b.png"
	},
	"/assets/cardio-rehab-cta-photo-v3-W-8JXIQW.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f386-BsuowJM9dqaYvIlcyhJPrSj3kb0\"",
		"mtime": "2026-08-18T12:46:21.794Z",
		"size": 193414,
		"path": "../public/assets/cardio-rehab-cta-photo-v3-W-8JXIQW.jpg"
	},
	"/assets/cpet-test-DiF2T5we.jpg": {
		"type": "image/jpeg",
		"etag": "\"16f26-ir2IG12Yf6SIRDSEb4656TLpa70\"",
		"mtime": "2026-08-18T12:46:21.795Z",
		"size": 93990,
		"path": "../public/assets/cpet-test-DiF2T5we.jpg"
	},
	"/assets/_-B38jNPth.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"41dd0-qcMG6UR5FOUbDkmRjx020N0mxck\"",
		"mtime": "2026-08-18T12:46:21.792Z",
		"size": 269776,
		"path": "../public/assets/_-B38jNPth.js"
	},
	"/assets/carpathians-location-B-Ld24ho.jpg": {
		"type": "image/jpeg",
		"etag": "\"35615-NFpG9VSqJWZkWrzfykAqwU5WH/0\"",
		"mtime": "2026-08-18T12:46:21.794Z",
		"size": 218645,
		"path": "../public/assets/carpathians-location-B-Ld24ho.jpg"
	},
	"/assets/consultation-BtlF2SeR.jpg": {
		"type": "image/jpeg",
		"etag": "\"434ae-ikSgXfD9Gxu75AUVNpLfXW9F9kc\"",
		"mtime": "2026-08-18T12:46:21.795Z",
		"size": 275630,
		"path": "../public/assets/consultation-BtlF2SeR.jpg"
	},
	"/assets/education-courses-page-Tcvd4POm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ff3-9kLX93FL7BQrmnMpntGqI+JTkjI\"",
		"mtime": "2026-08-18T12:46:21.793Z",
		"size": 24563,
		"path": "../public/assets/education-courses-page-Tcvd4POm.js"
	},
	"/assets/diagnostics-session-C_IAYVuL.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b953-eFCcOZJlDGHCMOWsq/7PVK55VzM\"",
		"mtime": "2026-08-18T12:46:21.795Z",
		"size": 375123,
		"path": "../public/assets/diagnostics-session-C_IAYVuL.jpg"
	},
	"/assets/ecg-review-43jYg4Hw.jpg": {
		"type": "image/jpeg",
		"etag": "\"f0f2-VjphOzoEGB3VumtfESmfjY8cXPc\"",
		"mtime": "2026-08-18T12:46:21.795Z",
		"size": 61682,
		"path": "../public/assets/ecg-review-43jYg4Hw.jpg"
	},
	"/assets/education-practical-training-v2-DI2QYiwB.jpg": {
		"type": "image/jpeg",
		"etag": "\"5f9db-FKvAe6Jf0nSGxhFSeR/Z7t3k0sI\"",
		"mtime": "2026-08-18T12:46:21.795Z",
		"size": 391643,
		"path": "../public/assets/education-practical-training-v2-DI2QYiwB.jpg"
	},
	"/assets/education-training-VQUtcCqH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f-V/Kc6eO1Swid1ejAV3mWOsLnnDY\"",
		"mtime": "2026-08-18T12:46:21.793Z",
		"size": 111,
		"path": "../public/assets/education-training-VQUtcCqH.js"
	},
	"/assets/ergometer-DFcNxK8-.jpg": {
		"type": "image/jpeg",
		"etag": "\"ce34-vKCXke11/WYZZb2PEH9pEb9DtbQ\"",
		"mtime": "2026-08-18T12:46:21.796Z",
		"size": 52788,
		"path": "../public/assets/ergometer-DFcNxK8-.jpg"
	},
	"/assets/education-science-event-v2-BEvHgsJt.jpg": {
		"type": "image/jpeg",
		"etag": "\"5af63-4dPd6470FJgq6RYI9v/JdAqNhc8\"",
		"mtime": "2026-08-18T12:46:21.795Z",
		"size": 372579,
		"path": "../public/assets/education-science-event-v2-BEvHgsJt.jpg"
	},
	"/assets/education-conference-CO2NSB9R.png": {
		"type": "image/png",
		"etag": "\"fd1e9-ICa9uAYVvPpUrhBmK8jMngFY+9A\"",
		"mtime": "2026-08-18T12:46:21.795Z",
		"size": 1036777,
		"path": "../public/assets/education-conference-CO2NSB9R.png"
	},
	"/assets/education-training-Cwv52uGB.png": {
		"type": "image/png",
		"etag": "\"eefbc-kyToe0HpjzhoMOx9hp0TL1Jkegc\"",
		"mtime": "2026-08-18T12:46:21.796Z",
		"size": 978876,
		"path": "../public/assets/education-training-Cwv52uGB.png"
	},
	"/assets/functional-training-DdTLWrlH.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ffaa-YAO5tr/5R1jcEmJ4oRdXz+8tGVI\"",
		"mtime": "2026-08-18T12:46:21.796Z",
		"size": 196522,
		"path": "../public/assets/functional-training-DdTLWrlH.jpg"
	},
	"/assets/iventy-BOorSgqq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f6b-sF99YcXy5m60xTy3F9HDGzxsPSU\"",
		"mtime": "2026-08-18T12:46:21.793Z",
		"size": 12139,
		"path": "../public/assets/iventy-BOorSgqq.js"
	},
	"/assets/kardiolohichna-diahnostyka-hLga309e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-erXfoZ/LZdMUBDspj0t12Usmkfc\"",
		"mtime": "2026-08-18T12:46:21.793Z",
		"size": 231,
		"path": "../public/assets/kardiolohichna-diahnostyka-hLga309e.js"
	},
	"/assets/konferentsii-iSfG3DfD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3122-ta89q/WTDvil1U1HomwT3ijw3Qk\"",
		"mtime": "2026-08-18T12:46:21.793Z",
		"size": 12578,
		"path": "../public/assets/konferentsii-iSfG3DfD.js"
	},
	"/assets/kursy-BCqkOOVm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b4-HC2eriiYal+SSworLDUEiGdntNY\"",
		"mtime": "2026-08-18T12:46:21.793Z",
		"size": 180,
		"path": "../public/assets/kursy-BCqkOOVm.js"
	},
	"/assets/events-6TDR9Fq1.jpg": {
		"type": "image/jpeg",
		"etag": "\"42d41-UBbfzAnrgiXDN16JKY6UOx7e9aw\"",
		"mtime": "2026-08-18T12:46:21.796Z",
		"size": 273729,
		"path": "../public/assets/events-6TDR9Fq1.jpg"
	},
	"/assets/message-circle-BQfnJSPm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-nNoFwZRBJiZVaNXkf9By8cWgfrQ\"",
		"mtime": "2026-08-18T12:46:21.793Z",
		"size": 232,
		"path": "../public/assets/message-circle-BQfnJSPm.js"
	},
	"/assets/hur-equipment-CoFDjXe2.jpg": {
		"type": "image/jpeg",
		"etag": "\"56c37-NSTl0adMpE2qxc8S+8UxcaTchGk\"",
		"mtime": "2026-08-18T12:46:21.797Z",
		"size": 355383,
		"path": "../public/assets/hur-equipment-CoFDjXe2.jpg"
	},
	"/assets/navchannia-CB0DE_cx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-MKtqyCQp7AUrUD5BoCCiCE9D4+w\"",
		"mtime": "2026-08-18T12:46:21.793Z",
		"size": 162,
		"path": "../public/assets/navchannia-CB0DE_cx.js"
	},
	"/assets/news-C3F2ox8L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1488-dBio9zymv7S0cNt9dYe6CVPYi+Y\"",
		"mtime": "2026-08-18T12:46:21.793Z",
		"size": 5256,
		"path": "../public/assets/news-C3F2ox8L.js"
	},
	"/assets/novyny-DbcvQpaG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c59-WXig30rA2rgfb0CM9rOgZp/1Kyo\"",
		"mtime": "2026-08-18T12:46:21.794Z",
		"size": 7257,
		"path": "../public/assets/novyny-DbcvQpaG.js"
	},
	"/assets/index-COjGGa23.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e2d9-Oa1QurFKm1V121Evmx6psTilwLM\"",
		"mtime": "2026-08-18T12:46:21.792Z",
		"size": 320217,
		"path": "../public/assets/index-COjGGa23.js"
	},
	"/assets/partner-chnu-BjBJePtC.png": {
		"type": "image/png",
		"etag": "\"666a-AvMdqcUTkQJ//xATl3PR2U53HAU\"",
		"mtime": "2026-08-18T12:46:21.798Z",
		"size": 26218,
		"path": "../public/assets/partner-chnu-BjBJePtC.png"
	},
	"/assets/partner-asmu-CECUVYz9.png": {
		"type": "image/png",
		"etag": "\"9a41-gU3di1fr8hrLF+L+F/zrS6xpYYQ\"",
		"mtime": "2026-08-18T12:46:21.798Z",
		"size": 39489,
		"path": "../public/assets/partner-asmu-CECUVYz9.png"
	},
	"/assets/partner-heart-vj3RZsap.svg": {
		"type": "image/svg+xml",
		"etag": "\"2b76-yBC6jlpbrreOITanKI8V9NpSERc\"",
		"mtime": "2026-08-18T12:46:21.798Z",
		"size": 11126,
		"path": "../public/assets/partner-heart-vj3RZsap.svg"
	},
	"/assets/partner-ifnmu-SGLPBvZe.png": {
		"type": "image/png",
		"etag": "\"7874-n+1+2iW78snmtkiVR53l73G3+dA\"",
		"mtime": "2026-08-18T12:46:21.798Z",
		"size": 30836,
		"path": "../public/assets/partner-ifnmu-SGLPBvZe.png"
	},
	"/assets/partner-sytenko-DtFTHkNv.svg": {
		"type": "image/svg+xml",
		"etag": "\"22ee-S7hA/2pKakztjnpe5GubYaX5538\"",
		"mtime": "2026-08-18T12:46:21.798Z",
		"size": 8942,
		"path": "../public/assets/partner-sytenko-DtFTHkNv.svg"
	},
	"/assets/pershi-symptomy-problem-iz-sertsem-DRu7PmPr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42d6-eaf6vhXQGV8gUOXtDDWqmKfh3ns\"",
		"mtime": "2026-08-18T12:46:21.794Z",
		"size": 17110,
		"path": "../public/assets/pershi-symptomy-problem-iz-sertsem-DRu7PmPr.js"
	},
	"/assets/medical-assessment-BG46-P41.jpg": {
		"type": "image/jpeg",
		"etag": "\"6a636-Pzg7TApWkEaRisaCJgHqc48XI00\"",
		"mtime": "2026-08-18T12:46:21.797Z",
		"size": 435766,
		"path": "../public/assets/medical-assessment-BG46-P41.jpg"
	},
	"/assets/partner-karpatska-akademiia-C4xKTOZ1.png": {
		"type": "image/png",
		"etag": "\"1a066-+EsvVE9i81Jx1h8mdFLgUBoMh7s\"",
		"mtime": "2026-08-18T12:46:21.798Z",
		"size": 106598,
		"path": "../public/assets/partner-karpatska-akademiia-C4xKTOZ1.png"
	},
	"/assets/preload-helper-BODadkrP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"166a-h1NM13x0GJuFHPsZsSrdBKOjkMo\"",
		"mtime": "2026-08-18T12:46:21.794Z",
		"size": 5738,
		"path": "../public/assets/preload-helper-BODadkrP.js"
	},
	"/assets/mobile-rehab-EL7cyU9n.jpg": {
		"type": "image/jpeg",
		"etag": "\"43b0c-1vTcodHBTZvArXEQ7gqVa/SnnZc\"",
		"mtime": "2026-08-18T12:46:21.797Z",
		"size": 277260,
		"path": "../public/assets/mobile-rehab-EL7cyU9n.jpg"
	},
	"/assets/pool-DjxJpGDq.jpg": {
		"type": "image/jpeg",
		"etag": "\"448fa-6Gn+iY5CvoKtzRT7SzTGLH3qeIQ\"",
		"mtime": "2026-08-18T12:46:21.798Z",
		"size": 280826,
		"path": "../public/assets/pool-DjxJpGDq.jpg"
	},
	"/assets/routes-DnnnIF-s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17676-JbVnWL7u8s8BWniTk5KCbBVdrSY\"",
		"mtime": "2026-08-18T12:46:21.794Z",
		"size": 95862,
		"path": "../public/assets/routes-DnnnIF-s.js"
	},
	"/assets/service-checkup-avzHL_rS.jpg": {
		"type": "image/jpeg",
		"etag": "\"127b5-TqtZ25jME/YgtikiQ08jbxoMAAs\"",
		"mtime": "2026-08-18T12:46:21.798Z",
		"size": 75701,
		"path": "../public/assets/service-checkup-avzHL_rS.jpg"
	},
	"/assets/service-detail-template-D4vvW1oe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d196-eqgz2577laxBRlq7dqm/rD1X8Xg\"",
		"mtime": "2026-08-18T12:46:21.794Z",
		"size": 53654,
		"path": "../public/assets/service-detail-template-D4vvW1oe.js"
	},
	"/assets/service-sports-DGsoGTzw.jpg": {
		"type": "image/jpeg",
		"etag": "\"12458-K+sjWXyMSJDCQ58EhaNtprXqUHk\"",
		"mtime": "2026-08-18T12:46:21.799Z",
		"size": 74840,
		"path": "../public/assets/service-sports-DGsoGTzw.jpg"
	},
	"/assets/service-rehab-CVHPKjlr.jpg": {
		"type": "image/jpeg",
		"etag": "\"efc6-dQjEX6sOXYif408f2qvvIfb1yXA\"",
		"mtime": "2026-08-18T12:46:21.798Z",
		"size": 61382,
		"path": "../public/assets/service-rehab-CVHPKjlr.jpg"
	},
	"/assets/styles-DqquJ6D6.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"3d036-zg61gAh3MSjxpP2+OtxrDqG4TbI\"",
		"mtime": "2026-08-18T12:46:21.800Z",
		"size": 249910,
		"path": "../public/assets/styles-DqquJ6D6.css"
	},
	"/assets/social-projects-_t_CGf7u.jpg": {
		"type": "image/jpeg",
		"etag": "\"419bf-CjcsHgqw+5sNdNo00ziQXkR7nkE\"",
		"mtime": "2026-08-18T12:46:21.800Z",
		"size": 268735,
		"path": "../public/assets/social-projects-_t_CGf7u.jpg"
	},
	"/assets/users-Br4UFN-f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"240-JbtGrlmMfZCVB+LqHzrOZDuVjUQ\"",
		"mtime": "2026-08-18T12:46:21.794Z",
		"size": 576,
		"path": "../public/assets/users-Br4UFN-f.js"
	},
	"/assets/triangle-alert-B4_yJucF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"100-auLCREvhc3EO61UO3rY4vsv4Zeo\"",
		"mtime": "2026-08-18T12:46:21.794Z",
		"size": 256,
		"path": "../public/assets/triangle-alert-B4_yJucF.js"
	},
	"/assets/therapy-hall-l4sXoJ4m.jpg": {
		"type": "image/jpeg",
		"etag": "\"788fc-QSgN6FRNU7XzCdAZLlGZRfWdNq8\"",
		"mtime": "2026-08-18T12:46:21.800Z",
		"size": 493820,
		"path": "../public/assets/therapy-hall-l4sXoJ4m.jpg"
	},
	"/assets/therapy-session-COxtdhNK.jpg": {
		"type": "image/jpeg",
		"etag": "\"99044-pBFN6Fi31cOr7yR+0MJgXc5B6dE\"",
		"mtime": "2026-08-18T12:46:21.800Z",
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
