import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Mt as Activity, N as MapPin, U as HeartPulse, V as House, W as Headphones, b as Phone, f as Stethoscope, g as Send, ht as ChevronRight, kt as ArrowRight, nt as Dumbbell } from "../_libs/lucide-react.mjs";
import { C as getNodeById, _ as SiteHeader, g as SiteFooter, i as CONTACTS, m as PageContainer, o as ConsultationModalProvider, t as AppLink, x as ergometer_default } from "./blocks-DXP6dtSJ.mjs";
import { t as Route } from "../_-JD2UYIgP.mjs";
import { t as Route$10 } from "./konferentsii-Q7ObNqR9.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-vtSkXYSA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-fIBe7Mjm.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var rehab = getNodeById("rehab");
var diag = getNodeById("diag");
var recovery = getNodeById("recovery");
var CARDS = [
	{
		icon: HeartPulse,
		title: "Напрямки реабілітації",
		route: rehab?.route ?? "/reabilitatsiia",
		items: (rehab?.children ?? []).slice(0, 5).map((c) => c.title),
		cta: "Перейти до розділу"
	},
	{
		icon: Stethoscope,
		title: "Діагностика та чек-апи",
		route: diag?.route ?? "/diagnostyka",
		items: (diag?.children ?? []).slice(0, 5).map((c) => c.title),
		cta: "Перейти до розділу"
	},
	{
		icon: Dumbbell,
		title: "Відновлення та фітнес",
		route: recovery?.route ?? "/vidnovlennia",
		items: (recovery?.children ?? []).slice(0, 5).map((c) => c.title),
		cta: "Дізнатися більше"
	}
];
function NotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-navy-deep",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: ergometer_default,
						alt: "",
						"aria-hidden": true,
						className: "absolute inset-0 size-full object-cover object-right opacity-45"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
						className: "relative py-16 sm:py-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-[5rem] font-extrabold leading-none tracking-tight text-primary-foreground/90 sm:text-[8rem]",
									children: "404"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-2xl font-bold text-background sm:text-4xl",
									children: "Сторінку не знайдено"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-xl text-sm leading-relaxed text-background/75 sm:text-base",
									children: "На жаль, сторінка, яку ви шукаєте, була видалена, переміщена або посилання введено неправильно."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
									to: "/",
									className: "mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-primary/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }), " Повернутися на головну"]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden justify-center lg:flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex size-56 flex-col items-center justify-center rounded-full border border-dashed border-background/35 px-8 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-8 text-primary-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-background/80",
										children: "Ми допомагаємо повернути рух до повноцінного життя"
									})]
								})
							})]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-px flex-1 bg-border sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-center text-2xl font-extrabold text-navy sm:text-3xl",
								children: "Куди перейти далі?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-px flex-1 bg-border sm:block" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 lg:grid-cols-3",
						children: CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-11 shrink-0 items-center justify-center rounded-xl bg-soft-blue text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold uppercase tracking-[0.06em] text-navy",
										children: card.title
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-2",
									children: card.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-sm text-navy/75",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
									to: card.route,
									className: "mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold uppercase tracking-[0.06em] text-primary hover:underline",
									children: [
										card.cta,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
									]
								})
							]
						}, card.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid items-center gap-8 rounded-2xl border border-border bg-soft-blue/60 p-6 sm:p-8 lg:grid-cols-[1.4fr_auto_1fr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden size-14 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary sm:flex",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "size-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold text-navy",
										children: "Не знайшли потрібну сторінку?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-navy/75",
										children: "Залиште заявку, і ми допоможемо знайти потрібну інформацію або підібрати оптимальне рішення для вашого здоров’я."
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
									to: "/kontakty",
									className: "inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-primary/90",
									children: "Залишити заявку"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CONTACTS.phoneHref,
									className: "inline-flex items-center justify-center rounded-lg border border-primary/40 bg-card px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-navy transition-colors hover:bg-card/70",
									children: "Замовити дзвінок"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-3 text-sm text-navy/80 lg:border-l lg:border-border lg:pl-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: CONTACTS.phoneHref,
											className: "font-semibold text-navy hover:underline",
											children: CONTACTS.phone
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: CONTACTS.messengers.telegram,
											target: "_blank",
											rel: "noreferrer",
											className: "hover:underline",
											children: "Написати в Telegram"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CONTACTS.addressFull })]
									})
								]
							})
						]
					})
				] })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFoundPage, {});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "uk",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationModalProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$6 = () => import("./routes-Dmgu4yc2.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Снова Реабілітація — Медичний центр діагностики та відновлення" }, {
		name: "description",
		content: "Снова Реабілітація — медичний центр, де діагностика, лікування та відновлення об'єднані в єдину систему. Індивідуальні програми реабілітації після захворювань, травм та операцій."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./iventy-bibBEhR2.mjs");
var Route$7 = createFileRoute("/iventy")({
	head: () => ({ meta: [
		{ title: "Івенти — ОСНОВА Реабілітація, Буковель" },
		{
			name: "description",
			content: "Події ОСНОВИ: відкриті тренування, лекції, практичні зустрічі та дні діагностики у фітнес-залі або медичному центрі в Буковелі."
		},
		{
			property: "og:title",
			content: "Івенти — ОСНОВА Реабілітація"
		},
		{
			property: "og:description",
			content: "Анонси подій у фітнес-залі та центрі ОСНОВА: тренування, освітні зустрічі й практичні формати для здорового відновлення."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./kardiolohichna-diahnostyka-BamxJo3_.mjs");
var Route$6 = createFileRoute("/kardiolohichna-diahnostyka")({
	head: () => ({ meta: [
		{ title: "Кардіологічна діагностика — OSNOVA Реабілітація, Буковель" },
		{
			name: "description",
			content: "Комплексна оцінка роботи серця: ЕКГ, Холтер, ДМАТ, кардіопульмональний тест, спірографія. Медичний висновок і персональні рекомендації."
		},
		{
			property: "og:title",
			content: "Кардіологічна діагностика — OSNOVA Реабілітація"
		},
		{
			property: "og:description",
			content: "Оцінка серця, ритму, тиску та переносимості навантажень. Ціни, методи та запис на діагностику в Буковелі."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./kursy-BpJkoIWM.mjs");
var Route$5 = createFileRoute("/kursy")({
	head: () => ({
		meta: [
			{ title: "Курси — ОСНОВА Реабілітація" },
			{
				name: "description",
				content: "Каталог курсів ОСНОВА Реабілітація: навчання для лікарів, фізичних терапевтів, тренерів і медичних команд."
			},
			{
				property: "og:title",
				content: "Курси — ОСНОВА Реабілітація"
			},
			{
				property: "og:description",
				content: "Практичні курси, семінари, клінічні розбори та освітні модулі ОСНОВА Реабілітація."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/kursy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./navchannia-CLXL3Rfm.mjs");
var Route$4 = createFileRoute("/navchannia")({
	head: () => ({
		meta: [
			{ title: "Навчання — курси ОСНОВА Реабілітація" },
			{
				name: "description",
				content: "Усі курси ОСНОВА Реабілітація для лікарів, фізичних терапевтів, тренерів і медичних команд: практичні модулі, клінічні розбори та освітні події."
			},
			{
				property: "og:title",
				content: "Навчання — курси ОСНОВА Реабілітація"
			},
			{
				property: "og:description",
				content: "Каталог освітніх курсів ОСНОВА: кардіореабілітація, ортопедія, діагностика, спортивна медицина та командні практичні модулі."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/navchannia"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./novyny-fjP7lvIO.mjs");
var Route$3 = createFileRoute("/novyny")({
	head: () => ({
		meta: [
			{ title: "Всі новини — ОСНОВА Реабілітація" },
			{
				name: "description",
				content: "Новини, статті та корисні матеріали ОСНОВА Реабілітація про кардіологію, діагностику, реабілітацію, чек-апи та спортивну медицину."
			},
			{
				property: "og:title",
				content: "Всі новини — ОСНОВА Реабілітація"
			},
			{
				property: "og:description",
				content: "Читайте матеріали центру ОСНОВА про профілактику, діагностику, відновлення та безпечну фізичну активність."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/novyny"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var BASE_URL = "";
var Route$2 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/novyny",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/statti/pershi-symptomy-problem-iz-sertsem",
				lastmod: "2026-07-27",
				changefreq: "monthly",
				priority: "0.7"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter = () => import("./pershi-symptomy-problem-iz-sertsem-B96Z5kvt.mjs");
var Route$1 = createFileRoute("/statti/pershi-symptomy-problem-iz-sertsem")({
	head: () => ({
		meta: [
			{ title: "Перші симптоми проблем із серцем — коли звертатися до кардіолога | ОСНОВА" },
			{
				name: "description",
				content: "Як розпізнати симптоми, які можуть вказувати на проблеми із серцем, коли потрібна планова кардіодіагностика та коли не варто відкладати звернення по допомогу."
			},
			{
				property: "og:title",
				content: "Перші симптоми проблем із серцем: коли звертатися до кардіолога"
			},
			{
				property: "og:description",
				content: "Пояснюємо, на які сигнали звернути увагу та які методи діагностики допомагають оцінити роботу серця."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "article:published_time",
				content: "2026-07-11"
			},
			{
				property: "article:modified_time",
				content: "2026-07-27"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/statti/pershi-symptomy-problem-iz-sertsem"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	SplatRoute: Route.update({
		id: "/$",
		path: "/$",
		getParentRoute: () => Route$9
	}),
	IventyRoute: Route$7.update({
		id: "/iventy",
		path: "/iventy",
		getParentRoute: () => Route$9
	}),
	KardiolohichnaDiahnostykaRoute: Route$6.update({
		id: "/kardiolohichna-diahnostyka",
		path: "/kardiolohichna-diahnostyka",
		getParentRoute: () => Route$9
	}),
	KonferentsiiRoute: Route$10.update({
		id: "/konferentsii",
		path: "/konferentsii",
		getParentRoute: () => Route$9
	}),
	KursyRoute: Route$5.update({
		id: "/kursy",
		path: "/kursy",
		getParentRoute: () => Route$9
	}),
	NavchanniaRoute: Route$4.update({
		id: "/navchannia",
		path: "/navchannia",
		getParentRoute: () => Route$9
	}),
	NovynyRoute: Route$3.update({
		id: "/novyny",
		path: "/novyny",
		getParentRoute: () => Route$9
	}),
	SitemapDotxmlRoute: Route$2.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$9
	}),
	StattiPershiSymptomyProblemIzSertsemRoute: Route$1.update({
		id: "/statti/pershi-symptomy-problem-iz-sertsem",
		path: "/statti/pershi-symptomy-problem-iz-sertsem",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultNotFoundComponent: NotFoundPage,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
