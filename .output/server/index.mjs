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
		"mtime": "2026-08-16T15:19:16.574Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/_-DDPy80it.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"676-BYJ4pFdJQ9BnC7WImzsT82bqNbU\"",
		"mtime": "2026-08-16T15:19:16.140Z",
		"size": 1654,
		"path": "../public/assets/_-DDPy80it.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-08-16T15:19:16.574Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/_-DxUD2NtN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"398ab-kb8v/8NBg1ZsFhbvxi41esN8KIk\"",
		"mtime": "2026-08-16T15:19:16.140Z",
		"size": 235691,
		"path": "../public/assets/_-DxUD2NtN.js"
	},
	"/assets/balance-reference-card-BIQa2b6b.png": {
		"type": "image/png",
		"etag": "\"37d19-P91qTx1AZTr5638cjDwRGA7JHMI\"",
		"mtime": "2026-08-16T15:19:16.145Z",
		"size": 228633,
		"path": "../public/assets/balance-reference-card-BIQa2b6b.png"
	},
	"/assets/building-2-DmKZlB6Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176-e82oQH9+jE4ADsNG5u09v7ykaSw\"",
		"mtime": "2026-08-16T15:19:16.140Z",
		"size": 374,
		"path": "../public/assets/building-2-DmKZlB6Q.js"
	},
	"/assets/calendar-days-CtE693_-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e5-jGCCMRwMgf4PRHV6dSNP37YDB9U\"",
		"mtime": "2026-08-16T15:19:16.140Z",
		"size": 485,
		"path": "../public/assets/calendar-days-CtE693_-.js"
	},
	"/assets/blocks-BXXz7i31.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"434a9-Sy6FhWn8UejBcS8LED3jzjygZEI\"",
		"mtime": "2026-08-16T15:19:16.140Z",
		"size": 275625,
		"path": "../public/assets/blocks-BXXz7i31.js"
	},
	"/assets/cardio-heart-3d-DLgiMZPh.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d6fb-GrMeqQffxM4w2zde38SrCjRVNf8\"",
		"mtime": "2026-08-16T15:19:16.145Z",
		"size": 186107,
		"path": "../public/assets/cardio-heart-3d-DLgiMZPh.jpg"
	},
	"/assets/chevron-left-tE3L1qFL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79-sF3dBjkjkcMaQh8ATIQIINSs87w\"",
		"mtime": "2026-08-16T15:19:16.140Z",
		"size": 121,
		"path": "../public/assets/chevron-left-tE3L1qFL.js"
	},
	"/assets/clock-3-CPSalU2_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a0-Jve8kYlJDHO5Z34h3Ta7NYW6TU0\"",
		"mtime": "2026-08-16T15:19:16.140Z",
		"size": 160,
		"path": "../public/assets/clock-3-CPSalU2_.js"
	},
	"/assets/company-overview-section-BA15S-kJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27c8-rpvVDbPWKbLpLnEwX9Cj6cISAWI\"",
		"mtime": "2026-08-16T15:19:16.141Z",
		"size": 10184,
		"path": "../public/assets/company-overview-section-BA15S-kJ.js"
	},
	"/assets/carpathians-location-B-Ld24ho.jpg": {
		"type": "image/jpeg",
		"etag": "\"35615-NFpG9VSqJWZkWrzfykAqwU5WH/0\"",
		"mtime": "2026-08-16T15:19:16.145Z",
		"size": 218645,
		"path": "../public/assets/carpathians-location-B-Ld24ho.jpg"
	},
	"/assets/cpet-test-DiF2T5we.jpg": {
		"type": "image/jpeg",
		"etag": "\"16f26-ir2IG12Yf6SIRDSEb4656TLpa70\"",
		"mtime": "2026-08-16T15:19:16.146Z",
		"size": 93990,
		"path": "../public/assets/cpet-test-DiF2T5we.jpg"
	},
	"/assets/ecg-review-43jYg4Hw.jpg": {
		"type": "image/jpeg",
		"etag": "\"f0f2-VjphOzoEGB3VumtfESmfjY8cXPc\"",
		"mtime": "2026-08-16T15:19:16.146Z",
		"size": 61682,
		"path": "../public/assets/ecg-review-43jYg4Hw.jpg"
	},
	"/assets/consultation-BtlF2SeR.jpg": {
		"type": "image/jpeg",
		"etag": "\"434ae-ikSgXfD9Gxu75AUVNpLfXW9F9kc\"",
		"mtime": "2026-08-16T15:19:16.145Z",
		"size": 275630,
		"path": "../public/assets/consultation-BtlF2SeR.jpg"
	},
	"/assets/education-courses-page-C0SJAPvG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ff7-ZijUdfFsDpBNO1ksaAn4YhB+tII\"",
		"mtime": "2026-08-16T15:19:16.141Z",
		"size": 24567,
		"path": "../public/assets/education-courses-page-C0SJAPvG.js"
	},
	"/assets/diagnostics-session-C_IAYVuL.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b953-eFCcOZJlDGHCMOWsq/7PVK55VzM\"",
		"mtime": "2026-08-16T15:19:16.146Z",
		"size": 375123,
		"path": "../public/assets/diagnostics-session-C_IAYVuL.jpg"
	},
	"/assets/education-training-VQUtcCqH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f-V/Kc6eO1Swid1ejAV3mWOsLnnDY\"",
		"mtime": "2026-08-16T15:19:16.141Z",
		"size": 111,
		"path": "../public/assets/education-training-VQUtcCqH.js"
	},
	"/assets/education-practical-training-v2-DI2QYiwB.jpg": {
		"type": "image/jpeg",
		"etag": "\"5f9db-FKvAe6Jf0nSGxhFSeR/Z7t3k0sI\"",
		"mtime": "2026-08-16T15:19:16.146Z",
		"size": 391643,
		"path": "../public/assets/education-practical-training-v2-DI2QYiwB.jpg"
	},
	"/assets/ergometer-DFcNxK8-.jpg": {
		"type": "image/jpeg",
		"etag": "\"ce34-vKCXke11/WYZZb2PEH9pEb9DtbQ\"",
		"mtime": "2026-08-16T15:19:16.147Z",
		"size": 52788,
		"path": "../public/assets/ergometer-DFcNxK8-.jpg"
	},
	"/assets/education-science-event-v2-BEvHgsJt.jpg": {
		"type": "image/jpeg",
		"etag": "\"5af63-4dPd6470FJgq6RYI9v/JdAqNhc8\"",
		"mtime": "2026-08-16T15:19:16.146Z",
		"size": 372579,
		"path": "../public/assets/education-science-event-v2-BEvHgsJt.jpg"
	},
	"/assets/events-6TDR9Fq1.jpg": {
		"type": "image/jpeg",
		"etag": "\"42d41-UBbfzAnrgiXDN16JKY6UOx7e9aw\"",
		"mtime": "2026-08-16T15:19:16.147Z",
		"size": 273729,
		"path": "../public/assets/events-6TDR9Fq1.jpg"
	},
	"/assets/education-conference-CO2NSB9R.png": {
		"type": "image/png",
		"etag": "\"fd1e9-ICa9uAYVvPpUrhBmK8jMngFY+9A\"",
		"mtime": "2026-08-16T15:19:16.146Z",
		"size": 1036777,
		"path": "../public/assets/education-conference-CO2NSB9R.png"
	},
	"/assets/education-training-Cwv52uGB.png": {
		"type": "image/png",
		"etag": "\"eefbc-kyToe0HpjzhoMOx9hp0TL1Jkegc\"",
		"mtime": "2026-08-16T15:19:16.147Z",
		"size": 978876,
		"path": "../public/assets/education-training-Cwv52uGB.png"
	},
	"/assets/iventy-BzdbAFMs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f6a-fBfGyjiOEF0QYLGRLczIJCHhscM\"",
		"mtime": "2026-08-16T15:19:16.141Z",
		"size": 12138,
		"path": "../public/assets/iventy-BzdbAFMs.js"
	},
	"/assets/hur-equipment-CoFDjXe2.jpg": {
		"type": "image/jpeg",
		"etag": "\"56c37-NSTl0adMpE2qxc8S+8UxcaTchGk\"",
		"mtime": "2026-08-16T15:19:16.147Z",
		"size": 355383,
		"path": "../public/assets/hur-equipment-CoFDjXe2.jpg"
	},
	"/assets/konferentsii-Dqlx4ZJn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3125-9UaWpzuwyeMUtgSPXptPkcv1mZI\"",
		"mtime": "2026-08-16T15:19:16.141Z",
		"size": 12581,
		"path": "../public/assets/konferentsii-Dqlx4ZJn.js"
	},
	"/assets/kursy-BO2nEm-F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b4-/czKHQ4YXFKEw2VFCGECHHDSFDw\"",
		"mtime": "2026-08-16T15:19:16.142Z",
		"size": 180,
		"path": "../public/assets/kursy-BO2nEm-F.js"
	},
	"/assets/kardiolohichna-diahnostyka-BR7Hm9Fy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-ClAc2iyUlwHxt0yf/uLMEKa6v4w\"",
		"mtime": "2026-08-16T15:19:16.141Z",
		"size": 231,
		"path": "../public/assets/kardiolohichna-diahnostyka-BR7Hm9Fy.js"
	},
	"/assets/message-circle-D-0GqoqG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-WOYy+mMxVe/bj+QAkm/Ez4HPxio\"",
		"mtime": "2026-08-16T15:19:16.142Z",
		"size": 232,
		"path": "../public/assets/message-circle-D-0GqoqG.js"
	},
	"/assets/functional-training-DdTLWrlH.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ffaa-YAO5tr/5R1jcEmJ4oRdXz+8tGVI\"",
		"mtime": "2026-08-16T15:19:16.147Z",
		"size": 196522,
		"path": "../public/assets/functional-training-DdTLWrlH.jpg"
	},
	"/assets/navchannia-BTDiyfWa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-eWG9Cr+YMxxpvb0EVVPCcUbdOLk\"",
		"mtime": "2026-08-16T15:19:16.142Z",
		"size": 162,
		"path": "../public/assets/navchannia-BTDiyfWa.js"
	},
	"/assets/news-Cl7GgQHq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1488-sXZyVMF+5My/eW+okxWdfPY9HXw\"",
		"mtime": "2026-08-16T15:19:16.142Z",
		"size": 5256,
		"path": "../public/assets/news-Cl7GgQHq.js"
	},
	"/assets/novyny-DWB2XUNZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c54-gywA00HqcS3JrX+6wpsZUlsZNHU\"",
		"mtime": "2026-08-16T15:19:16.142Z",
		"size": 7252,
		"path": "../public/assets/novyny-DWB2XUNZ.js"
	},
	"/assets/partner-asmu-CECUVYz9.png": {
		"type": "image/png",
		"etag": "\"9a41-gU3di1fr8hrLF+L+F/zrS6xpYYQ\"",
		"mtime": "2026-08-16T15:19:16.148Z",
		"size": 39489,
		"path": "../public/assets/partner-asmu-CECUVYz9.png"
	},
	"/assets/partner-heart-vj3RZsap.svg": {
		"type": "image/svg+xml",
		"etag": "\"2b76-yBC6jlpbrreOITanKI8V9NpSERc\"",
		"mtime": "2026-08-16T15:19:16.148Z",
		"size": 11126,
		"path": "../public/assets/partner-heart-vj3RZsap.svg"
	},
	"/assets/partner-chnu-BjBJePtC.png": {
		"type": "image/png",
		"etag": "\"666a-AvMdqcUTkQJ//xATl3PR2U53HAU\"",
		"mtime": "2026-08-16T15:19:16.148Z",
		"size": 26218,
		"path": "../public/assets/partner-chnu-BjBJePtC.png"
	},
	"/assets/partner-ifnmu-SGLPBvZe.png": {
		"type": "image/png",
		"etag": "\"7874-n+1+2iW78snmtkiVR53l73G3+dA\"",
		"mtime": "2026-08-16T15:19:16.148Z",
		"size": 30836,
		"path": "../public/assets/partner-ifnmu-SGLPBvZe.png"
	},
	"/assets/partner-karpatska-akademiia-C4xKTOZ1.png": {
		"type": "image/png",
		"etag": "\"1a066-+EsvVE9i81Jx1h8mdFLgUBoMh7s\"",
		"mtime": "2026-08-16T15:19:16.148Z",
		"size": 106598,
		"path": "../public/assets/partner-karpatska-akademiia-C4xKTOZ1.png"
	},
	"/assets/pershi-symptomy-problem-iz-sertsem-bWJ35_8k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42d4-BY5NH+MORwPDmQyecbskeWk71yU\"",
		"mtime": "2026-08-16T15:19:16.142Z",
		"size": 17108,
		"path": "../public/assets/pershi-symptomy-problem-iz-sertsem-bWJ35_8k.js"
	},
	"/assets/partner-sytenko-DtFTHkNv.svg": {
		"type": "image/svg+xml",
		"etag": "\"22ee-S7hA/2pKakztjnpe5GubYaX5538\"",
		"mtime": "2026-08-16T15:19:16.148Z",
		"size": 8942,
		"path": "../public/assets/partner-sytenko-DtFTHkNv.svg"
	},
	"/assets/index-Cd0KhcIC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e2e9-O3Yt0/m/zioK7UN1aHYozV2B+wM\"",
		"mtime": "2026-08-16T15:19:16.140Z",
		"size": 320233,
		"path": "../public/assets/index-Cd0KhcIC.js"
	},
	"/assets/medical-assessment-BG46-P41.jpg": {
		"type": "image/jpeg",
		"etag": "\"6a636-Pzg7TApWkEaRisaCJgHqc48XI00\"",
		"mtime": "2026-08-16T15:19:16.147Z",
		"size": 435766,
		"path": "../public/assets/medical-assessment-BG46-P41.jpg"
	},
	"/assets/preload-helper-CXBMFBc1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"166a-hbmx11OEoLXY6XJDf5zcPg8WJmE\"",
		"mtime": "2026-08-16T15:19:16.142Z",
		"size": 5738,
		"path": "../public/assets/preload-helper-CXBMFBc1.js"
	},
	"/assets/routes-BVvVtJgX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"170c0-A0v2ynXd8Il1mlr0u4zvHm3cKRM\"",
		"mtime": "2026-08-16T15:19:16.142Z",
		"size": 94400,
		"path": "../public/assets/routes-BVvVtJgX.js"
	},
	"/assets/mobile-rehab-EL7cyU9n.jpg": {
		"type": "image/jpeg",
		"etag": "\"43b0c-1vTcodHBTZvArXEQ7gqVa/SnnZc\"",
		"mtime": "2026-08-16T15:19:16.147Z",
		"size": 277260,
		"path": "../public/assets/mobile-rehab-EL7cyU9n.jpg"
	},
	"/assets/pool-DjxJpGDq.jpg": {
		"type": "image/jpeg",
		"etag": "\"448fa-6Gn+iY5CvoKtzRT7SzTGLH3qeIQ\"",
		"mtime": "2026-08-16T15:19:16.148Z",
		"size": 280826,
		"path": "../public/assets/pool-DjxJpGDq.jpg"
	},
	"/assets/service-detail-template-6OiCV4D9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d199-eSxA+QQ6pn30TsQD3lvAhD6zteA\"",
		"mtime": "2026-08-16T15:19:16.142Z",
		"size": 53657,
		"path": "../public/assets/service-detail-template-6OiCV4D9.js"
	},
	"/assets/service-checkup-avzHL_rS.jpg": {
		"type": "image/jpeg",
		"etag": "\"127b5-TqtZ25jME/YgtikiQ08jbxoMAAs\"",
		"mtime": "2026-08-16T15:19:16.148Z",
		"size": 75701,
		"path": "../public/assets/service-checkup-avzHL_rS.jpg"
	},
	"/assets/service-rehab-CVHPKjlr.jpg": {
		"type": "image/jpeg",
		"etag": "\"efc6-dQjEX6sOXYif408f2qvvIfb1yXA\"",
		"mtime": "2026-08-16T15:19:16.148Z",
		"size": 61382,
		"path": "../public/assets/service-rehab-CVHPKjlr.jpg"
	},
	"/assets/service-sports-DGsoGTzw.jpg": {
		"type": "image/jpeg",
		"etag": "\"12458-K+sjWXyMSJDCQ58EhaNtprXqUHk\"",
		"mtime": "2026-08-16T15:19:16.148Z",
		"size": 74840,
		"path": "../public/assets/service-sports-DGsoGTzw.jpg"
	},
	"/assets/triangle-alert-CvELl-Hk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"100-77Rpyu4Dam3pC27Y7F+C0ZJpQSM\"",
		"mtime": "2026-08-16T15:19:16.142Z",
		"size": 256,
		"path": "../public/assets/triangle-alert-CvELl-Hk.js"
	},
	"/assets/users-CPegLJcY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"240-1JI4XLAZfzIKxG+pJxTw/Ix/+n0\"",
		"mtime": "2026-08-16T15:19:16.143Z",
		"size": 576,
		"path": "../public/assets/users-CPegLJcY.js"
	},
	"/assets/social-projects-_t_CGf7u.jpg": {
		"type": "image/jpeg",
		"etag": "\"419bf-CjcsHgqw+5sNdNo00ziQXkR7nkE\"",
		"mtime": "2026-08-16T15:19:16.149Z",
		"size": 268735,
		"path": "../public/assets/social-projects-_t_CGf7u.jpg"
	},
	"/assets/styles-DfNAwJu7.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"38c77-NReJpWoO02c8PqkgjO8A13p3KDs\"",
		"mtime": "2026-08-16T15:19:16.149Z",
		"size": 232567,
		"path": "../public/assets/styles-DfNAwJu7.css"
	},
	"/assets/therapy-hall-l4sXoJ4m.jpg": {
		"type": "image/jpeg",
		"etag": "\"788fc-QSgN6FRNU7XzCdAZLlGZRfWdNq8\"",
		"mtime": "2026-08-16T15:19:16.149Z",
		"size": 493820,
		"path": "../public/assets/therapy-hall-l4sXoJ4m.jpg"
	},
	"/assets/therapy-session-COxtdhNK.jpg": {
		"type": "image/jpeg",
		"etag": "\"99044-pBFN6Fi31cOr7yR+0MJgXc5B6dE\"",
		"mtime": "2026-08-16T15:19:16.149Z",
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
