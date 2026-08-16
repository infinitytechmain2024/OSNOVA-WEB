import "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { H as HeartPulse, b as Phone, d as TriangleAlert, f as Stethoscope, gt as CalendarDays, mt as Check, nt as Clock, wt as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as SiteFooter, f as SiteHeader, g as ergometer_default, h as ecg_review_default, i as CONTACTS, l as PageContainer, m as cpet_test_default, n as Breadcrumbs, t as AppLink } from "./blocks-B5MexCwB.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var breadcrumbs = [
	{
		title: "Головна",
		route: "/"
	},
	{
		title: "Блог",
		route: "/"
	},
	{
		title: "Перші симптоми проблем із серцем",
		route: "/statti/pershi-symptomy-problem-iz-sertsem"
	}
];
var articleSections = [
	{
		id: "symptoms",
		title: "Симптоми, які варто обговорити з кардіологом"
	},
	{
		id: "urgent",
		title: "Коли не чекати планового прийому"
	},
	{
		id: "diagnostics",
		title: "Що може входити в кардіодіагностику"
	},
	{
		id: "prepare",
		title: "Як підготуватися до консультації"
	}
];
var symptoms = [
	"стиснення, печіння або біль у грудній клітці під час навантаження чи у спокої;",
	"задишка, яка з’являється швидше, ніж зазвичай, або не відповідає рівню навантаження;",
	"перебої в роботі серця, прискорене серцебиття, відчуття пауз у ритмі;",
	"запаморочення, переднепритомний стан, непритомність;",
	"набряки гомілок, незвична втома, різке зниження витривалості;",
	"підвищений артеріальний тиск або значні коливання тиску протягом дня."
];
var diagnostics = [
	{
		title: "ЕКГ",
		text: "Базове дослідження ритму та електричної активності серця. Часто є першим кроком при скаргах."
	},
	{
		title: "Холтер ЕКГ",
		text: "Добовий запис серцевого ритму, який допомагає побачити перебої, що не завжди проявляються під час прийому."
	},
	{
		title: "ДМАТ",
		text: "Добове моніторування артеріального тиску для оцінки коливань удень, уночі та під час звичайної активності."
	},
	{
		title: "Ехокардіографія",
		text: "Ультразвукова оцінка структури серця, клапанів і скоротливої функції."
	},
	{
		title: "Навантажувальні тести",
		text: "Велоергометрія або тредміл-тест показують, як серце реагує на дозоване фізичне навантаження."
	},
	{
		title: "CPET",
		text: "Кардіопульмональний тест оцінює роботу серця, легень і витривалість організму під контролем фахівця."
	}
];
var preparation = [
	"Запишіть, коли саме з’являються симптоми: у спокої, після стресу, під час підйому сходами чи тренування.",
	"Візьміть попередні висновки, ЕКГ, результати аналізів, виписки та перелік препаратів, які приймаєте.",
	"Не змінюйте самостійно дозування ліків перед обстеженням, якщо лікар не дав інших інструкцій.",
	"Для навантажувальних тестів оберіть зручний одяг і взуття, а деталі підготовки уточніть під час запису."
];
function MetaItem({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 items-center gap-3 rounded-xl border border-background/15 bg-background/10 px-4 py-3 text-background backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 shrink-0 text-brand-green" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-semibold tracking-[0.16em] text-background/60 uppercase",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 truncate text-sm font-bold",
				children: value
			})]
		})]
	});
}
function Section({ id, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "scroll-mt-28 border-b border-border pb-10 last:border-0 last:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-extrabold leading-tight text-navy sm:text-3xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-1 w-14 rounded-full bg-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-7 space-y-5 text-base leading-relaxed text-navy/88 sm:text-lg",
				children
			})
		]
	});
}
function ArticlePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BlogPosting",
					headline: "Перші симптоми проблем із серцем: коли звертатися до кардіолога",
					description: "Як розпізнати симптоми, які можуть вказувати на проблеми із серцем, та коли потрібна кардіодіагностика.",
					datePublished: "2026-07-11",
					dateModified: "2026-07-27",
					author: {
						"@type": "Organization",
						name: "ОСНОВА Реабілітація"
					},
					publisher: {
						"@type": "Organization",
						name: "ОСНОВА Реабілітація"
					},
					mainEntityOfPage: "/statti/pershi-symptomy-problem-iz-sertsem"
				}) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-navy-deep",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ecg_review_default,
							alt: "Кардіологічна діагностика серця",
							width: 1400,
							height: 900,
							className: "absolute inset-0 size-full object-cover object-right opacity-35 mix-blend-luminosity lg:opacity-80"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy-deep/25" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto max-w-[1600px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-background/80 uppercase",
									children: "Стаття"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 max-w-4xl text-3xl font-extrabold leading-[1.1] text-background sm:text-5xl md:text-6xl",
									children: "Перші симптоми проблем із серцем: коли звертатися до кардіолога"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-2xl text-base leading-relaxed text-background/84 sm:text-lg",
									children: "Біль або дискомфорт у грудях не завжди означає невідкладний стан, але ігнорувати сигнали серця не варто. Розбираємо, на які зміни звернути увагу та які обстеження допомагають оцінити ризики."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-3xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaItem, {
											icon: CalendarDays,
											label: "Дата",
											value: "11.07.2026"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaItem, {
											icon: Clock,
											label: "Час читання",
											value: "7 хв"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaItem, {
											icon: Stethoscope,
											label: "Тема",
											value: "Кардіологія"
										})
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
					className: "py-6 sm:py-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
						items: breadcrumbs,
						className: "pt-0"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
					className: "pb-14 sm:pb-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "lg:sticky lg:top-6 lg:self-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-soft p-5 shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold tracking-[0.18em] text-primary uppercase",
										children: "У статті"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
										"aria-label": "Зміст статті",
										className: "mt-4 space-y-2",
										children: articleSections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `#${section.id}`,
											className: "block rounded-lg px-3 py-2 text-sm font-semibold text-navy/76 transition-colors hover:bg-card hover:text-primary",
											children: section.title
										}, section.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 rounded-xl bg-card p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-bold text-navy",
												children: "Потрібна консультація?"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-relaxed text-navy/72",
												children: "Адміністратор допоможе підібрати зручний час для огляду або обстеження."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: CONTACTS.phoneHref,
												className: "mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-navy",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
													" ",
													CONTACTS.phone
												]
											})
										]
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "section-shell",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mx-auto max-w-4xl space-y-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-6 lg:grid-cols-[1fr_260px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-5 text-base leading-relaxed text-navy/88 sm:text-lg",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Серцево-судинні захворювання часто розвиваються поступово: спершу людина помічає втому, задишку або нестабільний тиск, але пояснює це стресом, віком чи навантаженням. Планова консультація кардіолога допомагає відрізнити тимчасове нездужання від станів, які потребують спостереження або лікування." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ця стаття має інформаційний характер і не замінює медичної консультації. Якщо симптоми інтенсивні, з’явилися раптово або швидко посилюються, краще не відкладати звернення по невідкладну допомогу." })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: cpet_test_default,
												alt: "Кардіопульмональне тестування",
												width: 640,
												height: 520,
												className: "h-full max-h-[280px] w-full rounded-xl object-cover shadow-md"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
											id: "symptoms",
											title: "Симптоми, які варто обговорити з кардіологом",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Звернення до фахівця доречне не лише тоді, коли з’являється біль. На роботу серця можуть вказувати зміни витривалості, ритму, тиску та загального самопочуття." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-3",
												children: symptoms.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
												}, item))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
											id: "urgent",
											title: "Коли не чекати планового прийому",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "rounded-xl border border-destructive/25 bg-destructive/8 p-5 sm:p-6",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-1 size-5 shrink-0 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-navy",
														children: "Негайна допомога потрібна при сильному болю або тиску в грудях, вираженій задишці, холодному поті, раптовій слабкості, порушенні мови, асиметрії обличчя чи слабкості в руці або нозі."
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-3 text-base text-navy/82",
														children: "У таких ситуаціях не варто їхати на плановий прийом самостійно. Звертайтеся до екстреної медичної допомоги."
													})] })]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Якщо симптоми повторюються, але не мають ознак невідкладного стану, варто запланувати огляд. Лікар збере анамнез, оцінить фактори ризику та визначить, які обстеження потрібні саме у вашому випадку." })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
											id: "diagnostics",
											title: "Що може входити в кардіодіагностику",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Набір досліджень залежить від скарг, віку, супутніх захворювань, рівня фізичної активності та попередніх висновків. В ОСНОВІ кардіодіагностику підбирають так, щоб отримати достатньо даних для безпечних рекомендацій." }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid gap-4 sm:grid-cols-2",
													children: diagnostics.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-xl border border-border bg-card p-5 shadow-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "size-5" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "text-base font-extrabold text-navy",
																children: item.title
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-4 text-sm leading-relaxed text-navy/78",
															children: item.text
														})]
													}, item.title))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "overflow-hidden rounded-xl bg-navy-deep text-background",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid gap-0 md:grid-cols-[0.9fr_1.1fr]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: ergometer_default,
															alt: "Навантажувальний тест",
															width: 700,
															height: 520,
															loading: "lazy",
															className: "h-56 w-full object-cover opacity-85 md:h-full"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "p-6 sm:p-8",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-xs font-bold tracking-[0.18em] text-brand-green uppercase",
																	children: "Діагностика під навантаженням"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																	className: "mt-3 text-2xl font-extrabold leading-tight",
																	children: "Перевірка серця в умовах, близьких до реального життя"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "mt-4 text-sm leading-relaxed text-background/78 sm:text-base",
																	children: "Навантажувальні тести допомагають оцінити переносимість фізичної активності та підібрати безпечний рівень тренувань або реабілітації."
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
																	to: "/diagnostyka/kardiodiahnostyka",
																	className: "mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-green px-5 py-3 text-sm font-bold text-brand-green-foreground transition-opacity hover:opacity-90",
																	children: ["Дивитися послуги ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
																})
															]
														})]
													})
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
											id: "prepare",
											title: "Як підготуватися до консультації",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Чим точніше ви опишете симптоми та покажете попередні результати, тим швидше лікар складе зрозумілий план дій." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-4",
												children: preparation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-3 border-b border-border pb-4 last:border-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-brand-green-foreground" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
												}, item))
											})]
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 rounded-2xl bg-soft-blue p-6 text-center sm:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold tracking-[0.22em] text-primary uppercase",
										children: "Запис на діагностику"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mx-auto mt-3 max-w-3xl text-2xl font-extrabold leading-tight text-navy sm:text-4xl",
										children: "Якщо серце подає сигнали, краще перевірити їх спокійно та вчасно"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy/78",
										children: "Запишіться на консультацію або кардіологічне обстеження в ОСНОВІ. Ми допоможемо обрати потрібний формат діагностики та підготуватися до прийому."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
											to: "/kontakty",
											className: "inline-flex items-center justify-center rounded-lg bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground shadow-md transition-opacity hover:opacity-90",
											children: "Записатися"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
											to: "/diagnostyka/kardiodiahnostyka",
											className: "inline-flex items-center justify-center gap-2 rounded-lg border border-navy/15 bg-card px-7 py-4 text-sm font-bold text-navy transition-colors hover:bg-primary hover:text-primary-foreground",
											children: ["Кардіодіагностика ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
										})]
									})
								]
							})]
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ArticlePage as component };
