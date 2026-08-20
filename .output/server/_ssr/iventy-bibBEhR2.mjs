import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as MessageCircle, Ct as Building2, Mt as Activity, N as MapPin, U as HeartPulse, a as Users, ft as CircleCheck, kt as ArrowRight, nt as Dumbbell, ot as Clock3, q as GraduationCap, xt as CalendarDays } from "../_libs/lucide-react.mjs";
import { D as service_sports_default, E as service_rehab_default, S as getBreadcrumbs, _ as SiteHeader, g as SiteFooter, h as SectionHeader, i as CONTACTS, m as PageContainer, n as Breadcrumbs, t as AppLink, w as getNodeByRoute, y as cpet_test_default } from "./blocks-DXP6dtSJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/iventy-bibBEhR2.js
var import_jsx_runtime = require_jsx_runtime();
var venueCards = [{
	icon: Dumbbell,
	title: "Фітнес-зал",
	label: "рухові події",
	text: "Відкриті тренування, функціональні заняття, mobility-класи та практики з безпечним навантаженням.",
	bullets: [
		"групові тренування",
		"майстер-класи з техніки руху",
		"відновлення після активності"
	]
}, {
	icon: Building2,
	title: "Медичний центр",
	label: "освітні та діагностичні формати",
	text: "Лекції лікарів, консультаційні дні, зустрічі зі спеціалістами та події для пацієнтів і партнерів.",
	bullets: [
		"лекції та Q&A",
		"дні діагностики",
		"зустрічі для партнерів"
	]
}];
var events = [
	{
		icon: Activity,
		title: "Відкрите функціональне тренування",
		tag: "Фітнес",
		venue: "Фітнес-зал",
		date: "дату анонсуємо",
		audience: "для гостей центру та мешканців курорту",
		image: service_sports_default,
		text: "Практичне заняття з контролем техніки, розминкою, силовим блоком і мʼяким відновленням після навантаження."
	},
	{
		icon: HeartPulse,
		title: "День кардіологічної діагностики",
		tag: "Діагностика",
		venue: "Медичний центр",
		date: "дату анонсуємо",
		audience: "для тих, хто хоче оцінити серце перед активністю",
		image: cpet_test_default,
		text: "Зустріч із командою кардіологічного напряму, базові рекомендації та пояснення, які обстеження потрібні перед тренуваннями."
	},
	{
		icon: GraduationCap,
		title: "Лекція про здоровʼя спини",
		tag: "Освіта",
		venue: "Центр ОСНОВА",
		date: "дату анонсуємо",
		audience: "для пацієнтів, спортсменів і всіх, хто багато сидить або тренується",
		image: service_rehab_default,
		text: "Розмова зі спеціалістом про біль, поставу, відновлення рухливості та прості звички, які допомагають спині щодня."
	}
];
var formats = [
	"групові тренування та recovery-сесії",
	"лекції лікарів і фізичних терапевтів",
	"дні відкритих консультацій",
	"події для партнерів, команд і спортивних груп"
];
function EventsPage() {
	const pageNode = getNodeByRoute("/iventy");
	const breadcrumbs = pageNode ? getBreadcrumbs(pageNode) : [{
		title: "Головна",
		route: "/"
	}, {
		title: "Івенти",
		route: "/iventy"
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
				className: "py-4 sm:py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
					items: breadcrumbs,
					className: "pt-0"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-navy-deep",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: service_sports_default,
							alt: "Фітнес-зал ОСНОВА",
							width: 1600,
							height: 1e3,
							className: "absolute inset-0 size-full object-cover object-center opacity-45"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy-deep/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
							className: "relative py-16 sm:py-20 lg:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-3xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/75 sm:text-sm",
										children: "ПОДІЇ ОСНОВИ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-normal text-background sm:text-5xl lg:text-7xl",
										children: "Івенти у фітнес-залі та центрі"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg",
										children: "Проводимо події про рух, відновлення, діагностику та здоровий спосіб життя. Частина форматів проходить у фітнес-залі, частина — у медичному центрі ОСНОВА."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
											to: "/kontakty",
											className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 py-3 text-center text-sm font-bold text-brand-green-foreground shadow-md transition-opacity hover:opacity-90 sm:px-8",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "Запитати про найближчий івент"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: CONTACTS.phoneHref,
											className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-background/45 px-6 py-3 text-center text-sm font-bold text-background transition-colors hover:bg-background/10 sm:px-8",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4" }), CONTACTS.phone]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-12 grid gap-4 sm:grid-cols-3 lg:max-w-4xl",
								children: [
									{
										label: "локації",
										value: "фітнес-зал / центр"
									},
									{
										label: "формати",
										value: "тренування, лекції, діагностика"
									},
									{
										label: "участь",
										value: "за попереднім записом"
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-background/25 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-background/60",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-2 text-sm font-bold text-background sm:text-base",
										children: item.value
									})]
								}, item.label))
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
					className: "py-14 sm:py-16 lg:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: "ДЕ ПРОХОДЯТЬ",
						title: "Дві локації для різних форматів",
						text: "Для рухових практик використовуємо тренувальний простір, для лекцій, консультацій і діагностичних зустрічей — простір медичного центру."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 lg:grid-cols-2",
						children: venueCards.map((venue) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(venue.icon, {
										className: "size-6",
										"aria-hidden": true
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
										children: venue.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 text-2xl font-bold tracking-normal text-navy",
										children: venue.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-navy/80",
										children: venue.text
									})
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 grid gap-3 sm:grid-cols-3",
								children: venue.bullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm font-medium text-navy/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "mt-0.5 size-4 shrink-0 text-brand-green",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bullet })]
								}, bullet))
							})]
						}, venue.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-soft py-14 sm:py-16 lg:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: "АНОНСИ",
						title: "Найближчі формати",
						text: "Поки що залишили події як формати для анонсів. Коли будуть точні дати, їх можна швидко замінити в картках."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 lg:grid-cols-3",
						children: events.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: event.image,
								alt: event.title,
								loading: "lazy",
								width: 900,
								height: 620,
								className: "h-56 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(event.icon, {
												className: "size-3.5",
												"aria-hidden": true
											}), event.tag]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1 text-xs font-semibold text-navy/75",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
												className: "size-3.5",
												"aria-hidden": true
											}), event.venue]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-xl font-bold tracking-normal text-navy",
										children: event.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 flex items-center gap-2 text-sm font-semibold text-navy/70",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
											className: "size-4 text-primary",
											"aria-hidden": true
										}), event.date]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 flex items-start gap-2 text-sm font-semibold text-navy/70",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
											className: "mt-0.5 size-4 shrink-0 text-primary",
											"aria-hidden": true
										}), event.audience]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 flex-1 text-sm leading-relaxed text-navy/80",
										children: event.text
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
										to: "/kontakty",
										className: "mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90",
										children: ["Дізнатися про участь ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											className: "size-4",
											"aria-hidden": true
										})]
									})
								]
							})]
						}, event.title))
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
					className: "py-14 sm:py-16 lg:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							eyebrow: "МОЖЕМО ПРОВЕСТИ",
							title: "Події для пацієнтів, гостей і партнерів",
							text: "Формат можна адаптувати під невелику групу, корпоративну команду, спортивний клуб або освітню зустріч зі спеціалістами ОСНОВИ."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: formats.map((format) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "size-6 text-brand-green",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-bold leading-snug text-navy",
									children: format
								})]
							}, format))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-navy-deep py-14 sm:py-16 lg:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/65",
								children: "ЗАПИС НА ПОДІЇ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-normal text-background sm:text-4xl",
								children: "Хочете відвідати івент або провести подію разом з ОСНОВОЮ?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-2xl text-background/80",
								children: "Напишіть або зателефонуйте нам — підкажемо найближчі анонси, вільні формати та можливу локацію: фітнес-зал або центр."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row lg:flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
								to: "/kontakty",
								className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-green px-7 py-3 text-sm font-bold text-brand-green-foreground shadow-md transition-opacity hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									className: "size-4",
									"aria-hidden": true
								}), "Залишити запит"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: CONTACTS.phoneHref,
								className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-background/35 px-7 py-3 text-sm font-bold text-background transition-colors hover:bg-background/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
									className: "size-4",
									"aria-hidden": true
								}), CONTACTS.phone]
							})]
						})]
					}) })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { EventsPage as component };
