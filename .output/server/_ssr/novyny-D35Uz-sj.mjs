import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Phone, kt as ArrowRight, ot as Clock3, w as Newspaper, xt as CalendarDays } from "../_libs/lucide-react.mjs";
import { _ as SiteHeader, g as SiteFooter, m as PageContainer, n as Breadcrumbs, t as AppLink, v as cn } from "./blocks-n1sNH6FA.mjs";
import { t as NEWS_ARTICLES } from "./news-Qya5YCIW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/novyny-D35Uz-sj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsCard({ article, variant = "default" }) {
	const isFeatured = variant === "featured";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl", isFeatured ? "grid lg:grid-cols-[1.08fr_0.92fr]" : "flex h-full flex-col"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
			to: article.href,
			className: cn("relative block overflow-hidden", isFeatured ? "min-h-[320px] lg:h-full" : "h-80"),
			"aria-label": article.title,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: article.image,
				alt: article.imageAlt,
				width: 1200,
				height: 800,
				loading: "lazy",
				className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-4 left-4 rounded-full bg-navy/80 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md",
				children: article.date
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-1 flex-col", isFeatured ? "p-7 sm:p-10 lg:p-12" : "p-8"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5" }), article.category]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-3.5" }), article.readTime]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: cn("font-bold leading-snug text-navy transition-colors group-hover:text-primary", isFeatured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl md:text-2xl"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
						to: article.href,
						children: article.title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground md:text-base",
					children: article.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
					to: article.href,
					className: "mt-7 inline-flex w-fit items-center gap-2 font-bold text-primary transition-colors hover:text-navy",
					children: [
						"ЧИТАТИ ДАЛІ",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
					]
				})
			]
		})]
	});
}
var ALL_CATEGORY = "Всі новини";
var categories = [ALL_CATEGORY, ...Array.from(new Set(NEWS_ARTICLES.map((article) => article.category)))];
function NewsPage() {
	const [activeCategory, setActiveCategory] = import_react.useState(ALL_CATEGORY);
	const visibleArticles = activeCategory === ALL_CATEGORY ? NEWS_ARTICLES : NEWS_ARTICLES.filter((article) => article.category === activeCategory);
	const [featuredArticle, ...restArticles] = visibleArticles;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-navy-deep",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: NEWS_ARTICLES[0].image,
							alt: "Новини медичного та реабілітаційного центру ОСНОВА",
							width: 1200,
							height: 800,
							className: "absolute inset-0 size-full object-cover object-center opacity-45 mix-blend-luminosity lg:opacity-100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto max-w-[1600px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70 sm:text-sm sm:tracking-[0.28em]",
									children: "НОВИНИ ТА СТАТТІ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 max-w-4xl text-3xl font-extrabold leading-[1.1] text-background sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl",
									children: "Всі новини"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-2xl text-base leading-relaxed text-background/85 sm:mt-8 sm:text-lg",
									children: "Актуальні матеріали про діагностику, реабілітацію, профілактику та безпечне повернення до активного життя."
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
					className: "py-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
						className: "pt-0",
						items: [{
							title: "Головна",
							route: "/"
						}, {
							title: "Всі новини",
							route: "/novyny"
						}]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-slate-200/70 bg-slate-50/80 py-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-navy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground",
								children: "Архів матеріалів"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm font-semibold text-navy",
								children: [visibleArticles.length, " матеріалів у добірці"]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
							children: categories.map((category) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setActiveCategory(category),
									className: `shrink-0 rounded-xl border px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] transition-all ${category === activeCategory ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-slate-200 bg-white text-navy hover:border-primary/40 hover:text-primary"}`,
									children: category
								}, category);
							})
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-background py-16 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [featuredArticle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, {
						article: featuredArticle,
						variant: "featured"
					}), restArticles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3",
						children: restArticles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, { article }, article.id))
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-soft-blue py-20 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.22em] text-primary",
								children: "КОНСУЛЬТАЦІЯ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-navy md:text-5xl",
								children: "Потрібна порада щодо діагностики або реабілітації?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy/75 md:text-lg",
								children: "Адміністратор допоможе обрати потрібний напрям, зорієнтує за датами та підкаже наступні кроки."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
									to: "/kontakty",
									className: "inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-primary/90 sm:w-auto",
									children: ["ЗВʼЯЗАТИСЯ З НАМИ ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+380674702788",
									className: "inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-navy px-8 py-4 text-sm font-bold text-navy transition-all hover:bg-navy hover:text-white sm:w-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " +380 674 702 788"]
								})]
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { NewsPage as component };
