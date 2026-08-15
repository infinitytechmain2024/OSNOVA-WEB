import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as AccordionTrigger$1, d as Slot, i as AccordionItem$1, n as AccordionContent$1, r as AccordionHeader, t as Accordion$1, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as Dumbbell, Ct as ArrowRight, D as Microscope, G as GraduationCap, J as Flame, V as Heart, a as Users, b as Phone, bt as BookOpen, c as UserCheck, dt as ChevronRight, f as Stethoscope, ft as ChevronLeft, ht as Calendar, it as ClipboardList, l as Trophy, m as ShieldCheck, pt as ChevronDown, t as Zap, ut as ChevronUp, w as Network, wt as ArrowLeft, yt as Brain } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { S as service_sports_default, b as service_checkup_default, d as SiteFooter, f as SiteHeader, g as ergometer_default, h as ecg_review_default, m as cpet_test_default, n as Breadcrumbs, p as cn, t as AppLink, w as useConsultationModal, x as service_rehab_default } from "./blocks-qW3lZTX0.mjs";
import { n as education_training_default, t as education_conference_default } from "./education-training-D0E3Ecw7.mjs";
import { a as partner_karpatska_akademiia_default, i as partner_ifnmu_default, n as partner_chnu_default, o as partner_sytenko_default, r as partner_heart_default, t as partner_asmu_default } from "./partner-sytenko-Oay8tZk6.mjs";
import { t as NEWS_ARTICLES } from "./news-Bg28w2cq.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { t as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D35w9Tzl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
var AUTOPLAY_DELAY = 4500;
var REHABILITATION_METHODS = [
	{
		id: "individual-plan",
		title: "Індивідуальна програма",
		description: "Персональний план відновлення на основі стану пацієнта.",
		image: service_rehab_default,
		href: "/reabilitatsiia"
	},
	{
		id: "physical-therapy",
		title: "Фізична терапія",
		description: "Вправи для відновлення сили, руху та витривалості.",
		image: ergometer_default,
		href: "/vidnovlennia"
	},
	{
		id: "hydrokinesiotherapy",
		title: "Гідрокінезіотерапія",
		description: "Безпечне відновлення рухів за допомогою занять у воді.",
		image: service_sports_default,
		href: "/vidnovlennia/hidrokinezioterapiia"
	},
	{
		id: "physiotherapy",
		title: "Фізіотерапія",
		description: "Додаткові методи підтримки процесу відновлення.",
		image: cpet_test_default,
		href: "/vidnovlennia/fizioterapiia"
	},
	{
		id: "therapeutic-massage",
		title: "Лікувальний масаж",
		description: "Робота з м'язовим станом та покращення якості руху.",
		image: service_rehab_default,
		href: "/vidnovlennia/likuvalnyi-masazh"
	}
];
function ArrowRightIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2.2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
	});
}
function ArrowLeftIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2.2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 12H5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 19-7-7 7-7" })]
	});
}
function MethodCard({ card }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-[210px] w-full shrink-0 overflow-hidden bg-slate-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: card.image,
				alt: card.title,
				loading: "lazy",
				className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-between bg-white p-6 md:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-xl font-bold leading-snug text-navy",
				children: card.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 line-clamp-3 text-sm font-normal leading-relaxed text-slate-600",
				children: card.description
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
				to: card.href,
				className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-md",
				children: [
					"Детальніше",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightIcon, { className: "size-4 transition-transform group-hover:translate-x-1" })
				]
			}) })]
		})]
	});
}
function StatsPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex shrink-0 flex-col justify-center rounded-[24px] bg-navy px-8 py-10 text-white lg:min-w-[280px] lg:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			className: "mb-8 text-2xl font-bold leading-snug",
			children: [
				"Наш підхід —",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"ваш результат"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-5xl font-extrabold tracking-tight",
					children: "5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-1 block text-sm font-medium leading-snug text-white/70",
					children: [
						"методів",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"відновлення"
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-white/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-5xl font-extrabold tracking-tight",
					children: "30+"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-1 block text-sm font-medium leading-snug text-white/70",
					children: [
						"ефективних",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"методик"
					]
				})] })
			]
		})]
	});
}
function SectionHeader$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-12 text-center md:mb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-primary backdrop-blur-md uppercase",
				children: "Методи відновлення"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-extrabold leading-[1.15] text-navy md:text-5xl lg:text-6xl",
				children: "СУЧАСНІ МЕТОДИ ВІДНОВЛЕННЯ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base",
				children: "Ми використовуємо комплексний підхід, поєднуючи різноманітні методи під завдання пацієнта."
			})
		]
	});
}
function RehabilitationMethodsSlider() {
	const [methodsApi, setMethodsApi] = import_react.useState();
	const [currentIndex, setCurrentIndex] = import_react.useState(0);
	import_react.useEffect(() => {
		if (!methodsApi) return;
		const onSelect = () => setCurrentIndex(methodsApi.selectedScrollSnap());
		onSelect();
		methodsApi.on("select", onSelect);
		methodsApi.on("reInit", onSelect);
		return () => {
			methodsApi.off("select", onSelect);
			methodsApi.off("reInit", onSelect);
		};
	}, [methodsApi]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "methods",
		className: "overflow-hidden bg-white pt-24 pb-12 md:pt-32 md:pb-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 lg:flex-row lg:items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsPanel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
							setApi: setMethodsApi,
							plugins: [Autoplay({
								delay: AUTOPLAY_DELAY,
								stopOnInteraction: true
							})],
							opts: {
								align: "start",
								loop: true
							},
							className: "w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
								className: "-ml-4 items-stretch",
								children: REHABILITATION_METHODS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
									className: "pl-4 basis-[85%] sm:basis-[48%] lg:basis-[45%] xl:basis-[32%] !h-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodCard, { card })
								}, card.id))
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex w-full max-w-[240px] items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => methodsApi?.scrollPrev(),
								"aria-label": "Попередній слайд",
								className: "absolute left-0 flex size-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-navy shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftIcon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center gap-2.5",
								children: REHABILITATION_METHODS.map((card, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => methodsApi?.scrollTo(index),
									"aria-label": `Перейти до методу ${card.title}`,
									"aria-current": currentIndex === index ? "true" : void 0,
									className: cn("h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2", currentIndex === index ? "w-8 bg-primary shadow-sm" : "w-2.5 bg-slate-300 hover:bg-slate-400")
								}, card.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => methodsApi?.scrollNext(),
								"aria-label": "Наступний слайд",
								className: "absolute right-0 flex size-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-navy shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightIcon, { className: "size-5" })
							})
						]
					})
				})
			]
		})
	});
}
var education_practical_training_v2_default = "/assets/education-practical-training-v2-DI2QYiwB.jpg";
var education_science_event_v2_default = "/assets/education-science-event-v2-BEvHgsJt.jpg";
var events_default = "/assets/events-6TDR9Fq1.jpg";
var social_projects_default = "/assets/social-projects-_t_CGf7u.jpg";
var mobile_rehab_default = "/assets/mobile-rehab-EL7cyU9n.jpg";
var osnova_logo_3d_default = "/assets/osnova-logo-3d-DLHYYvgx.jpg";
var HERO_SLIDES = [
	{
		image: service_rehab_default,
		title: "Реабілітація",
		subtitle: "Верніться до активного життя",
		text: "Індивідуальна програма відновлення після захворювань, операцій та травм з урахуванням вашого стану.",
		ctaLabel: "Записатися на реабілітацію"
	},
	{
		image: cpet_test_default,
		title: "Кардіореабілітація",
		subtitle: "Відновлення серця безпечно",
		text: "Персональна програма відновлення після серцево-судинних захворювань та операцій.",
		ctaLabel: "Записатися на кардіореабілітацію"
	},
	{
		image: ecg_review_default,
		title: "Діагностика",
		subtitle: "Дізнайтеся більше про своє здоров'я",
		text: "Комплексна оцінка стану організму для вибору правильного напряму відновлення.",
		ctaLabel: "Записатися на діагностику"
	},
	{
		image: service_checkup_default,
		title: "Чекап здоров'я",
		subtitle: "Контролюйте здоров'я завчасно",
		text: "Комплексне обстеження для оцінки стану організму та виявлення ризиків.",
		ctaLabel: "Обрати чекап"
	},
	{
		image: service_sports_default,
		title: "Спортивна медицина",
		subtitle: "Тренуйтеся безпечніше",
		text: "Оцінка фізичних можливостей організму та підбір оптимальних навантажень.",
		ctaLabel: "Записатися на консультацію"
	}
];
var DIRECTIONS = [
	{
		icon: Heart,
		title: "КАРДІОЛОГІЯ",
		text: "Лікування захворювань серця, відновлення після інфаркту та операцій, ЕКГ та CPET-діагностика.",
		image: ecg_review_default,
		href: "/poslugy/reabilitatsiia/kardioreabilitatsiia",
		badge: "Серцево-судинна система"
	},
	{
		icon: Dumbbell,
		title: "ОРТОПЕДІЯ ТА ТРАВМАТОЛОГІЯ",
		text: "Відновлення після травм, переломів, хірургічних втручань на суглобах та ендопротезування.",
		image: service_rehab_default,
		href: "/poslugy/reabilitatsiia/ortopedichna-reabilitatsiia",
		badge: "Суглоби та зв'язки"
	},
	{
		icon: Flame,
		title: "ВЕРТЕБРОЛОГІЯ (ЗАХВОРЮВАННЯ ХРЕБТА)",
		text: "Лікування та реабілітація захворювань хребта, гриж, остеохондрозу та відновлення біомеханіки спини.",
		image: ergometer_default,
		href: "/poslugy/reabilitatsiia/vertebrolohichna-reabilitatsiia",
		badge: "Здоров'я хребта"
	},
	{
		icon: Stethoscope,
		title: "РЕВМАТОЛОГІЯ",
		text: "Комплексна терапія артриту, артрозу, системних захворювань сполучної тканини зі збереженням рухливості.",
		image: service_checkup_default,
		href: "/poslugy/reabilitatsiia/revmatolohichna-reabilitatsiia",
		badge: "Суглоби та сполучна тканина"
	},
	{
		icon: Brain,
		title: "НЕВРОЛОГІЯ",
		text: "Відновлення після інсультів, нейропатій, уражень центральної та периферичної нервової системи.",
		image: cpet_test_default,
		href: "/poslugy/reabilitatsiia/nevrolohichna-reabilitatsiia",
		badge: "Нервова система"
	},
	{
		icon: Users,
		title: "ПСИХОЛОГІЯ ТА ПСИХІЧНЕ (МЕНТАЛЬНЕ) ЗДОРОВ'Я",
		text: "Психологічна підтримка, зняття стресу, відновлення ментального здоров'я та адаптація після навантажень.",
		image: education_training_default,
		href: "/poslugy/reabilitatsiia/psykholohichna-pidtrymka",
		badge: "Психологія"
	},
	{
		icon: Trophy,
		title: "СПОРТИВНА МЕДИЦИНА",
		text: "Підвищення фізичних показників, спортивна адаптація та швидке реабілітаційне відновлення фізичної...",
		image: service_sports_default,
		href: "/poslugy/vidnovlennia",
		badge: "Спорт & Адаптація"
	},
	{
		icon: Zap,
		title: "ПРОФІЛАКТИЧНА РЕАБІЛІТАЦІЯ (ПРЕВЕНТИВНА)",
		text: "Виявлення прихованих медичних ризиків до появи симптомів, превентивні програми здоров'я та...",
		image: education_conference_default,
		href: "/poslugy/check-up",
		badge: "Раннє виявлення ризиків"
	}
];
var FEATURED_FEATURES = [
	{
		icon: Stethoscope,
		title: "Провідні методики",
		text: "Починаємо фізичну терапію, апаратні методики, гідрокінезотерапію та інші підходи у персональній програмі відновлення.",
		image: service_rehab_default
	},
	{
		icon: Microscope,
		title: "Наукова база",
		text: "Клінічна практика, навчання та розвиток методик на основі фахової медичної експертизи.",
		image: ecg_review_default
	},
	{
		icon: ClipboardList,
		title: "Середовище Карпат",
		text: "Чисте повітря, спокійна атмосфера та природне оточення, що підтримують процес відновлення.",
		image: cpet_test_default
	}
];
var SECONDARY_FEATURES = [
	{
		icon: ClipboardList,
		title: "Індивідуальні програми",
		text: "Програма реабілітації формується під ваші потреби та стан."
	},
	{
		icon: Network,
		title: "Комплексний підхід",
		text: "Об'єднуємо різні напрямки роботи для максимального результату."
	},
	{
		icon: ShieldCheck,
		title: "Досвідчена команда",
		text: "Лікарі та терапевти з підтвердженою кваліфікацією та практикою."
	},
	{
		icon: Stethoscope,
		title: "Професійна діагностика",
		text: "Сучасні методи оцінки для точного плану відновлення."
	},
	{
		icon: ShieldCheck,
		title: "Комфорт і конфіденційність",
		text: "Спокійна атмосфера, повага до вас і вашого особистого простору."
	},
	{
		icon: Microscope,
		title: "Мінеральні води",
		text: "Природний ресурс, що доповнює програму оздоровлення."
	}
];
var PARTNERS = [
	{
		name: "Карпатська Академія",
		role: "Освітня платформа",
		href: "https://osnovahub.com/",
		logo: partner_karpatska_akademiia_default
	},
	{
		name: "Черкаський національний університет імені Богдана Хмельницького",
		role: "Університетський партнер",
		href: "https://cdu.edu.ua/",
		logo: partner_chnu_default
	},
	{
		name: "Асоціація спортивної медицини України",
		role: "Професійна асоціація",
		href: "https://asmu.com.ua/",
		logo: partner_asmu_default
	},
	{
		name: "Інститут ім. проф. М. І. Ситенка, Харків",
		role: "Науково-медичний інститут",
		href: "https://sytenko.org.ua/",
		logo: partner_sytenko_default
	},
	{
		name: "Інститут серця МОЗ України",
		role: "Кардіохірургічний центр",
		href: "https://heart.kyiv.ua/",
		logo: partner_heart_default
	},
	{
		name: "Івано-Франківський національний медичний університет",
		role: "Медичний університет",
		href: "https://www.ifnmu.edu.ua/",
		logo: partner_ifnmu_default
	}
];
var PARTNERS_PER_SLIDE = 3;
var PARTNER_GROUPS = Array.from({ length: Math.ceil(PARTNERS.length / PARTNERS_PER_SLIDE) }, (_, index) => PARTNERS.slice(index * PARTNERS_PER_SLIDE, index * PARTNERS_PER_SLIDE + PARTNERS_PER_SLIDE));
var COOPERATION_ITEMS = [
	{
		number: "01",
		title: "ВИЇЗНА РЕАБІЛІТАЦІЯ",
		text: "Команда ОСНОВА приїжджає до пацієнта додому, у готель або за місцем перебування з програмою відновлення.",
		tags: ["Для пацієнтів", "На дому та в готелі"],
		href: "/vyizna-reabilitatsiia",
		image: mobile_rehab_default
	},
	{
		number: "02",
		title: "ІВЕНТИ",
		text: "Організація медичних форумів, конференцій, виставок та професійних заходів.",
		tags: ["Для спеціалістів", "Конференції та виставки"],
		href: "/iventy",
		image: events_default
	},
	{
		number: "03",
		title: "СОЦІАЛЬНІ ПРОЄКТИ",
		text: "Благодійні та реабілітаційні ініціативи, допомога громаді та соціальні програми.",
		tags: ["Для громади", "Благодійні ініціативи"],
		href: "/sotsialni-proiekty",
		image: social_projects_default
	},
	{
		number: "04",
		title: "КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ",
		text: "Фахові консультації лікарів-спеціалістів, діагностика та планування індивідуальної програми лікування.",
		tags: ["Для пацієнтів", "Онлайн та офлайн"],
		href: "/pro-osnovu",
		image: events_default
	},
	{
		number: "05",
		title: "ОСВІТНІ ПРОГРАМИ",
		text: "Навчальні курси та майстер-класи для медичних спеціалістів, обмін досвідом та професійний розвиток.",
		tags: ["Для лікарів", "Сертифікація та навички"],
		href: "/kursy",
		image: mobile_rehab_default
	},
	{
		number: "06",
		title: "ДОСЛІДЖЕННЯ І РОЗРОБКИ",
		text: "Наукові проекти, клінічні дослідження та інновації у сфері реабілітаційної медицини та оздоровлення.",
		tags: ["Для науковців", "Науковий обмін"],
		href: "/konferentsii",
		image: social_projects_default
	}
];
var EXTENDED_COOPERATION_ITEMS = [
	{
		...COOPERATION_ITEMS[COOPERATION_ITEMS.length - 1],
		virtualKey: "clone-last"
	},
	...COOPERATION_ITEMS.map((item, i) => ({
		...item,
		virtualKey: `real-${i}`
	})),
	{
		...COOPERATION_ITEMS[0],
		virtualKey: "clone-first"
	}
];
var EDUCATION_CARDS = [{
	title: "КУРСИ ТА МАЙСТЕР-КЛАСИ",
	text: "Практичні формати для відпрацювання навичок, сучасних методик та клінічних підходів.",
	href: "/kursy",
	image: education_practical_training_v2_default,
	label: "ПРАКТИЧНЕ НАВЧАННЯ",
	audience: "Для лікарів та фахівців",
	format: "Практичні модулі",
	icon: GraduationCap
}, {
	title: "НАУКОВІ ПОДІЇ",
	text: "Зустрічі фахівців для обміну досвідом, презентації досліджень і професійного діалогу.",
	href: "/konferentsii",
	image: education_science_event_v2_default,
	label: "МІЖНАРОДНИЙ ОБМІН ДОСВІДОМ",
	audience: "Для медичної спільноти",
	format: "Лекції та дискусії",
	icon: BookOpen
}];
var FAQS = [
	{
		question: "З чого почати реабілітацію?",
		answer: "Почніть з консультації спеціаліста. Ми оцінимо стан та підкажемо оптимальну програму відновлення."
	},
	{
		question: "Чи потрібне направлення лікаря?",
		answer: "Ні. Ви можете почати з консультації, після якої спеціалісти визначать необхідні кроки."
	},
	{
		question: "Скільки триває реабілітація?",
		answer: "Тривалість залежить від стану пацієнта та цілей відновлення."
	},
	{
		question: "Чи можна пройти лише діагностику?",
		answer: "Так. Ви можете пройти окреме обстеження та отримати рекомендації спеціалістів."
	}
];
function SectionHeader({ subtitle, title, centered = false, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`,
		children: [
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-primary backdrop-blur-md uppercase",
				children: subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-extrabold leading-[1.15] text-navy md:text-5xl lg:text-6xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green ${centered ? "mx-auto" : ""}` })
		]
	});
}
function DirectionCard({ direction }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-[210px] w-full overflow-hidden bg-slate-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: direction.image,
				alt: direction.title,
				className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-between bg-white p-6 md:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-xl font-bold leading-snug text-navy",
				children: direction.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 line-clamp-3 text-sm font-normal leading-relaxed text-slate-600",
				children: direction.text
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
				to: direction.href,
				className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-md",
				children: [
					"Детальніше",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
				]
			}) })]
		})]
	});
}
function PartnerCard({ partner }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full min-h-[360px] flex-col rounded-[28px] border border-slate-200/80 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-40 items-center justify-center rounded-[22px] bg-slate-50 p-6 ring-1 ring-slate-100 transition-colors duration-300 group-hover:bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: partner.logo,
					alt: partner.name,
					loading: "lazy",
					className: "max-h-28 w-full object-contain"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 flex flex-1 flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary",
					children: partner.role
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "max-w-sm text-xl font-extrabold leading-snug text-navy md:text-2xl",
					children: partner.name
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: partner.href,
				target: "_blank",
				rel: "noreferrer",
				className: "mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-md",
				"aria-label": `Детальніше про ${partner.name}`,
				children: ["Детальніше ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
			})
		]
	});
}
function EducationCard({ item }) {
	const Icon = item.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
		to: item.href,
		"aria-label": `Детальніше про ${item.title}`,
		className: "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_18px_50px_-28px_rgba(15,50,92,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_24px_60px_-30px_rgba(15,50,92,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-60 w-full overflow-hidden bg-navy-deep sm:h-72 lg:h-80",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.title,
					loading: "lazy",
					className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy-deep/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-navy-deep/20 to-navy-deep/5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-5 bottom-5 flex items-end sm:inset-x-6 sm:bottom-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col bg-white p-6 sm:p-7 lg:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex flex-wrap gap-2.5 text-[11px] font-semibold text-navy/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/[0.07] px-3 py-1.5 text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3.5" }), item.audience]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-brand-green/25 bg-brand-green/10 px-3 py-1.5 text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5 text-brand-green" }), item.format]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-extrabold leading-tight text-navy transition-colors group-hover:text-primary md:text-3xl",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-slate-600 md:text-lg",
						children: item.text
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-8 inline-flex min-w-40 w-fit items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 group-hover:bg-primary/90 group-hover:shadow-lg group-hover:shadow-primary/25",
					children: [
						"Детальніше",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
					]
				})
			]
		})]
	});
}
function CooperationCard({ item, domIndex, activeDomIndex, onClick }) {
	const isActive = domIndex === activeDomIndex;
	const isAdjacent = Math.abs(domIndex - activeDomIndex) === 1;
	const cardContent = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cooperation-marker",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "cooperation-number",
				children: item.number
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cooperation-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cooperation-tags",
					"aria-label": "Категорії напрямку",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.tags[0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.tags[1] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "cooperation-details",
					children: "Детальніше"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cooperation-media",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.image,
				alt: item.title,
				loading: "lazy"
			})
		})
	] });
	const baseClassName = `cooperation-card group ${isActive ? "cooperation-card--active" : isAdjacent ? "cooperation-card--adjacent cooperation-card--inactive" : "cooperation-card--inactive"}`;
	let zIndex = 10;
	if (isActive) zIndex = 30;
	else if (domIndex < activeDomIndex) zIndex = 10 + domIndex;
	else zIndex = 20 - (domIndex - activeDomIndex);
	const baseStyle = { zIndex };
	if (!isActive) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		type: "button",
		className: baseClassName,
		style: baseStyle,
		"aria-label": `Перейти до розділу «${item.title}»`,
		children: cardContent
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
		to: item.href,
		"aria-label": `Перейти до розділу «${item.title}»`,
		className: baseClassName,
		style: baseStyle,
		children: cardContent
	});
}
function BlogCarousel() {
	const articles = NEWS_ARTICLES;
	const [current, setCurrent] = import_react.useState(0);
	const perPage = 2;
	const totalPages = Math.ceil(articles.length / perPage);
	const visible = articles.slice(current * perPage, current * perPage + perPage);
	const goToPrevious = () => {
		setCurrent((prev) => (prev - 1 + totalPages) % totalPages);
	};
	const goToNext = () => {
		setCurrent((prev) => (prev + 1) % totalPages);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 grid-cols-1 md:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-between rounded-[24px] bg-[#07152D] p-8 lg:p-10 text-white shadow-sm min-h-[480px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block rounded-full border border-white/25 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white/90",
					children: "НОВИНИ ТА СТАТТІ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase",
					children: "БЛОГ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 mb-8 h-1.5 w-20 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-[#22C55E]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm md:text-base leading-relaxed text-white/80 max-w-xs",
					children: "Корисні поради, новини центру та експертні матеріали про реабілітацію, здоров'я та якість життя."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
				to: "/novyny",
				className: "inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#22C55E] px-6 py-4 text-base font-bold text-white shadow-sm transition-all hover:bg-[#16A34A] hover:scale-[1.01]",
				children: ["Усі статті ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })]
			})]
		}), visible.map((article) => {
			const CategoryIcon = article.category === "Кардіологія" ? Heart : article.category === "Реабілітація" ? UserCheck : article.category === "Діагностика" ? Microscope : article.category === "Спортивна медицина" ? Trophy : Stethoscope;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group flex flex-col justify-between overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md min-h-[480px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
					to: article.href,
					className: "relative block h-56 w-full overflow-hidden bg-slate-100 rounded-t-[24px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: article.image,
						alt: article.imageAlt,
						loading: "lazy",
						className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-4 left-4 rounded-full bg-[#07152D] px-3.5 py-1 text-xs font-bold text-white shadow-sm",
						children: article.date
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 md:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#1E64B4]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryIcon, { className: "size-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: article.category }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-300 font-normal",
									children: "|"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-400",
									children: article.readTime
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold leading-snug text-[#07152D] transition-colors group-hover:text-[#1E64B4] line-clamp-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
								to: article.href,
								children: article.title
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-slate-500 line-clamp-3",
							children: article.excerpt
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-6 pt-0 md:p-7 md:pt-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
						to: article.href,
						className: "inline-flex items-center gap-2 text-sm font-bold text-[#1E64B4] transition-colors hover:text-[#07152D]",
						children: [
							"Читати далі",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
						]
					})
				})]
			}, article.id);
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white p-2 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: goToPrevious,
					disabled: totalPages <= 1,
					"aria-label": "Попередня сторінка блогу",
					className: "inline-flex size-9 items-center justify-center rounded-full text-slate-700 transition-all hover:bg-slate-100 hover:text-[#1E64B4] disabled:cursor-not-allowed disabled:opacity-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center gap-2.5 px-1",
					children: Array.from({ length: totalPages }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCurrent(i),
						className: `size-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#1E64B4] scale-110" : "bg-slate-300 hover:bg-slate-400"}`,
						"aria-label": `Сторінка ${i + 1}`
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: goToNext,
					disabled: totalPages <= 1,
					"aria-label": "Наступна сторінка блогу",
					className: "inline-flex size-9 items-center justify-center rounded-full text-slate-700 transition-all hover:bg-slate-100 hover:text-[#1E64B4] disabled:cursor-not-allowed disabled:opacity-40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
				})
			]
		})
	})] });
}
function Index() {
	const { openModal } = useConsultationModal();
	const [heroApi, setHeroApi] = import_react.useState();
	const [currentHeroSlide, setCurrentHeroSlide] = import_react.useState(0);
	const [heroSlideCount, setHeroSlideCount] = import_react.useState(0);
	const [directionsApi, setDirectionsApi] = import_react.useState();
	const [currentDirectionsSlide, setCurrentDirectionsSlide] = import_react.useState(0);
	const [directionsSlideCount, setDirectionsSlideCount] = import_react.useState(0);
	const [partnersApi, setPartnersApi] = import_react.useState();
	const [currentPartnersSlide, setCurrentPartnersSlide] = import_react.useState(0);
	const [partnersSlideCount, setPartnersSlideCount] = import_react.useState(0);
	const [cooperationCurrentSlide, setCooperationCurrentSlide] = import_react.useState(0);
	const [cooperationDomIndex, setCooperationDomIndex] = import_react.useState(1);
	const [cooperationDisableTransition, setCooperationDisableTransition] = import_react.useState(false);
	const [cooperationIsAnimating, setCooperationIsAnimating] = import_react.useState(false);
	const [cooperationStepHeight, setCooperationStepHeight] = import_react.useState(0);
	const cooperationStackRef = import_react.useRef(null);
	const cooperationIsAnimatingRef = import_react.useRef(false);
	import_react.useEffect(() => {
		const stackEl = cooperationStackRef.current;
		if (!stackEl) return;
		const updateStepHeight = () => {
			const cards = stackEl.querySelectorAll(".cooperation-card");
			if (cards.length >= 2) {
				const card0 = cards[0];
				const dist = cards[1].offsetTop - card0.offsetTop;
				if (dist > 0) setCooperationStepHeight(dist);
			}
		};
		updateStepHeight();
		const observer = new ResizeObserver(() => {
			updateStepHeight();
		});
		observer.observe(stackEl);
		window.addEventListener("resize", updateStepHeight);
		return () => {
			observer.disconnect();
			window.removeEventListener("resize", updateStepHeight);
		};
	}, []);
	const goToCooperationStep = import_react.useCallback((direction) => {
		if (cooperationIsAnimatingRef.current) return;
		cooperationIsAnimatingRef.current = true;
		setCooperationIsAnimating(true);
		setCooperationDomIndex((prevDom) => prevDom + direction);
		setCooperationCurrentSlide((prevSlide) => (prevSlide + direction + COOPERATION_ITEMS.length) % COOPERATION_ITEMS.length);
	}, []);
	const handleCooperationTransitionEnd = import_react.useCallback((e) => {
		if (e.target !== e.currentTarget) return;
		if (cooperationDomIndex === 0) {
			setCooperationDisableTransition(true);
			setCooperationDomIndex(COOPERATION_ITEMS.length);
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					setCooperationDisableTransition(false);
					cooperationIsAnimatingRef.current = false;
					setCooperationIsAnimating(false);
				});
			});
		} else if (cooperationDomIndex === COOPERATION_ITEMS.length + 1) {
			setCooperationDisableTransition(true);
			setCooperationDomIndex(1);
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					setCooperationDisableTransition(false);
					cooperationIsAnimatingRef.current = false;
					setCooperationIsAnimating(false);
				});
			});
		} else {
			cooperationIsAnimatingRef.current = false;
			setCooperationIsAnimating(false);
		}
	}, [cooperationDomIndex]);
	import_react.useEffect(() => {
		if (!heroApi) return;
		const updateState = () => {
			setHeroSlideCount(heroApi.scrollSnapList().length);
			setCurrentHeroSlide(heroApi.selectedScrollSnap());
		};
		updateState();
		heroApi.on("select", updateState);
		heroApi.on("reInit", updateState);
		return () => {
			heroApi.off("select", updateState);
			heroApi.off("reInit", updateState);
		};
	}, [heroApi]);
	import_react.useEffect(() => {
		if (!directionsApi) return;
		const updateState = () => {
			setDirectionsSlideCount(directionsApi.scrollSnapList().length);
			setCurrentDirectionsSlide(directionsApi.selectedScrollSnap());
		};
		updateState();
		directionsApi.on("select", updateState);
		directionsApi.on("reInit", updateState);
		return () => {
			directionsApi.off("select", updateState);
			directionsApi.off("reInit", updateState);
		};
	}, [directionsApi]);
	import_react.useEffect(() => {
		if (!partnersApi) return;
		const updateState = () => {
			setPartnersSlideCount(partnersApi.scrollSnapList().length);
			setCurrentPartnersSlide(partnersApi.selectedScrollSnap());
		};
		updateState();
		partnersApi.on("select", updateState);
		partnersApi.on("reInit", updateState);
		return () => {
			partnersApi.off("select", updateState);
			partnersApi.off("reInit", updateState);
		};
	}, [partnersApi]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background font-sans text-foreground selection:bg-primary/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "relative h-[500px] w-screen max-w-none overflow-hidden bg-navy-deep md:h-[560px] lg:h-[600px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
						setApi: setHeroApi,
						plugins: [Autoplay({
							delay: 6e3,
							stopOnInteraction: true
						})],
						opts: {
							loop: true,
							watchDrag: false
						},
						className: "size-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
								className: "!ml-0 h-full w-full",
								children: HERO_SLIDES.map((slide, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CarouselItem, {
									className: "relative h-[500px] min-w-full basis-full overflow-hidden !pl-0 md:h-[560px] lg:h-[600px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-0 size-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: slide.image,
											alt: slide.title,
											className: "size-full object-cover object-center scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative flex h-full items-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto w-full max-w-[1600px] px-6 lg:px-10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "max-w-xl lg:max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 lg:p-10 backdrop-blur-xl animate-in slide-in-from-bottom-12 fade-in duration-1000 fill-mode-both shadow-2xl",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100/95 px-3.5 py-1 text-xs md:text-sm font-semibold tracking-wider text-navy ring-1 ring-white/50 shadow-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary animate-pulse" }), slide.subtitle]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
														className: "mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-white",
														children: slide.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-white/80",
														children: slide.text
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-wrap gap-3 md:gap-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
															type: "button",
															onClick: () => openModal(slide.ctaLabel),
															className: "group relative inline-flex max-w-full items-center justify-center overflow-hidden rounded-xl bg-brand-green px-5 py-3.5 text-center text-sm font-bold leading-tight tracking-wide text-brand-green-foreground transition-all hover:scale-105 hover:bg-brand-green/90 hover:shadow-[0_0_36px_rgba(62,190,110,0.4)] md:px-7 md:py-4 md:text-base cursor-pointer",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "relative z-10",
																children: slide.ctaLabel
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
															to: "/poslugy",
															className: "group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 md:px-8 md:py-4 text-sm md:text-base font-bold tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/10",
															children: [
																"НАШІ ПОСЛУГИ",
																" ",
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
															]
														})]
													})
												]
											})
										})
									})]
								}, index))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-6 right-6 md:bottom-8 md:right-8 hidden items-center gap-3 lg:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "static size-11 md:size-12 translate-y-0 translate-x-0 border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-navy hover:scale-110" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "static size-11 md:size-12 translate-y-0 translate-x-0 border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-navy hover:scale-110" })]
							}),
							heroSlideCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2.5 md:bottom-8",
								children: Array.from({ length: heroSlideCount }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => heroApi?.scrollTo(index),
									className: `h-2.5 rounded-full ring-1 ring-white/40 transition-all duration-300 ${currentHeroSlide === index ? "w-8 bg-white shadow-sm" : "w-2.5 bg-white/45 hover:bg-white/75"}`,
									"aria-label": `Перейти до головного слайду ${index + 1}`
								}, index))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border/70 bg-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
							items: [{
								title: "Головна",
								route: "/"
							}],
							align: "center",
							className: "pb-4 pt-4 sm:pt-4"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-white py-16 md:py-24 lg:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1240px] px-6 lg:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-10 lg:gap-14 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-[600px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-4 inline-flex items-center rounded-full bg-[#edf4ff] border border-[#d4e4fa] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#1d63ed]",
										children: "ПРО КОМПАНІЮ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mb-3 text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black tracking-tight leading-none text-[#0b192c]",
										children: ["ОСНОВА ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#1d63ed]",
											children: "Реабілітація"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-7 h-[4px] w-20 rounded-full bg-gradient-to-r from-[#1d63ed] via-[#1d63ed] 50% to-[#10b981]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4 text-sm sm:text-base leading-relaxed",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-[#1e293b]",
												children: "ОСНОВА Реабілітація — сучасна медична компанія, що спеціалізується на лікуванні та комплексній реабілітації пацієнтів у сферах кардіології, ортопедії, травматології, ревматології, вертебрології та психології."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-normal text-[#475569]",
												children: "Ми працюємо не лише з наслідками хвороб і травм, а й виявляємо ризики ще до появи симптомів — завдяки сучасній діагностиці, точним обстеженням і персоналізованим профілактичним програмам."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-[#1d63ed]",
												children: "Наше завдання — допомогти вам відновити здоров'я, рухливість і якість життя."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-normal text-[#475569]",
												children: "ОСНОВА Реабілітація також є науково-освітньою платформою, що розробляє та вдосконалює протоколи лікування, співпрацює з провідними медичними університетами світу, впроваджує інноваційні технології та розвиває виїзні формати реабілітаційної допомоги для пацієнтів поза центром."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
											to: "/pro-osnovu",
											className: "inline-flex items-center gap-2 rounded-full bg-[#0b192c] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_10px_25px_rgba(11,25,44,0.25)] transition-all duration-200 hover:bg-[#1d63ed] hover:shadow-[0_10px_25px_rgba(29,99,237,0.3)]",
											children: ["ДЕТАЛЬНІШЕ ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 stroke-[2.5]" })]
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-[28px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100/80",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
											alt: "Реабілітаційний процес з фахівцем у світлому залі",
											className: "h-full min-h-[200px] sm:min-h-[230px] lg:min-h-[250px] w-full object-cover transition-transform duration-500 hover:scale-105"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col justify-center rounded-[28px] bg-[#edf4ff] p-6 sm:p-7 lg:p-8 text-left shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#e2edfd] transition-all duration-300 hover:shadow-[0_14px_35px_rgba(29,99,237,0.08)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-3 text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#0062d2] leading-none",
											children: "8+"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs sm:text-sm font-semibold text-[#334155] leading-snug",
											children: "Напрямків реабілітації"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col justify-center rounded-[28px] bg-[#dcebfe] p-6 sm:p-7 lg:p-8 text-left shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#cbe0fd] transition-all duration-300 hover:shadow-[0_14px_35px_rgba(11,25,44,0.08)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-3 text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#0b192c] leading-none",
											children: "30+"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs sm:text-sm font-semibold text-[#334155] leading-snug",
											children: "Методів реабілітації"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-[28px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100/80",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
											alt: "Медичний персонал за обладнанням",
											className: "h-full min-h-[200px] sm:min-h-[230px] lg:min-h-[250px] w-full object-cover transition-transform duration-500 hover:scale-105"
										})
									})
								]
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-slate-50/80 py-24 md:py-32 border-y border-slate-200/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] px-6 lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
								centered: true,
								subtitle: "НАПРЯМИ",
								title: "НАПРЯМИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 hidden gap-7 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
								children: DIRECTIONS.map((direction, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionCard, { direction }, index))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
								setApi: setDirectionsApi,
								plugins: [Autoplay({
									delay: 5e3,
									stopOnInteraction: true
								})],
								opts: {
									align: "start",
									loop: true
								},
								className: "mt-12 w-full sm:hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
									className: "-ml-4",
									children: DIRECTIONS.map((direction, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
										className: "basis-[84%] pl-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionCard, { direction })
									}, index))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-col items-center gap-6 sm:hidden",
									children: [directionsSlideCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-center gap-2.5",
										children: Array.from({ length: directionsSlideCount }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => directionsApi?.scrollTo(index),
											className: `h-2.5 rounded-full transition-all duration-300 ${currentDirectionsSlide === index ? "w-8 bg-primary shadow-sm" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`,
											"aria-label": `Перейти до слайду ${index + 1}`
										}, index))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "static size-11 translate-y-0 border-slate-200 bg-slate-100 text-navy shadow-sm hover:bg-primary hover:text-white hover:border-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "static size-11 translate-y-0 border-slate-200 bg-slate-100 text-navy shadow-sm hover:bg-primary hover:text-white hover:border-primary" })]
									})]
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden border-y border-sky-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(14,101,241,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.16),_transparent_38%),linear-gradient(135deg,#eef8ff_0%,#f5fbff_35%,#ecfaf7_100%)] py-20 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 top-8 size-56 rounded-full bg-primary/10 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 bottom-6 size-72 rounded-full bg-emerald-300/20 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mx-auto max-w-[1100px] px-6 text-center lg:px-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-4xl rounded-[2rem] border border-white/70 bg-white/60 p-8 shadow-[0_22px_60px_-35px_rgba(17,55,110,0.45)] backdrop-blur-sm md:p-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mb-6 text-3xl font-extrabold text-navy md:text-5xl lg:text-6xl",
										children: [
											"Зробіть перший крок",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"до ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: "відновлення"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-navy/70 md:text-xl",
										children: "Розкажіть про свою ситуацію — спеціаліст допоможе визначити відповідну програму та подальші дії."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center justify-center gap-4 sm:flex-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => openModal("Отримати консультацію"),
											className: "group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-primary px-10 py-4 text-base font-bold tracking-wide text-primary-foreground shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.5)] sm:w-auto md:py-5 md:text-lg cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "relative z-10",
												children: "ОТРИМАТИ КОНСУЛЬТАЦІЮ"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "tel:+380674702788",
											className: "flex w-full items-center justify-center gap-3 rounded-xl border-2 border-navy bg-transparent px-10 py-4 text-base font-bold text-navy transition-all hover:bg-navy hover:text-white sm:w-auto md:py-5 md:text-lg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }), "+380 674 702 788"]
										})]
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RehabilitationMethodsSlider, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] px-6 lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center mb-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block rounded-full border border-primary/30 bg-primary/5 px-5 py-1.5 text-xs font-bold tracking-widest text-primary uppercase mb-6",
										children: "ПЕРЕВАГИ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-tight mb-4",
										children: [
											"ЧОМУ ОБИРАЮТЬ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-navy",
												children: "«ОСНОВА РЕАБІЛІТАЦІЯ»"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-emerald-400 to-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto max-w-2xl text-lg text-muted-foreground",
										children: "Поєднання науки, досвіду та турботи для вашого стійкого відновлення."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-6 md:grid-cols-3 mb-6",
								children: FEATURED_FEATURES.map((feature, i) => {
									const Icon = feature.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative h-48 w-full overflow-hidden bg-slate-100",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: feature.image,
												alt: feature.title,
												className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-3 p-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-lg font-bold text-navy",
													children: feature.title
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-slate-600 leading-relaxed",
												children: feature.text
											})]
										})]
									}, i);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
								children: SECONDARY_FEATURES.map((feature, i) => {
									const Icon = feature.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group relative flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-base font-bold text-navy",
												children: feature.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-slate-600 leading-relaxed",
												children: feature.text
											})]
										})]
									}, i);
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "overflow-hidden bg-secondary/40 py-20 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] px-6 lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							centered: true,
							subtitle: "ПАРТНЕРСТВО",
							title: "НАШІ ПАРТНЕРИ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
							setApi: setPartnersApi,
							plugins: [Autoplay({
								delay: 5200,
								stopOnInteraction: true
							})],
							opts: {
								align: "start",
								loop: true
							},
							className: "mt-12 w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
								className: "-ml-5",
								children: PARTNER_GROUPS.map((group, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
									className: "basis-full pl-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-6 md:grid-cols-3",
										children: group.map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerCard, { partner }, partner.name))
									})
								}, index))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col items-center gap-6",
								children: [partnersSlideCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-center gap-2.5",
									children: Array.from({ length: partnersSlideCount }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => partnersApi?.scrollTo(index),
										className: `h-2.5 rounded-full transition-all duration-300 ${currentPartnersSlide === index ? "w-8 bg-primary shadow-sm" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`,
										"aria-label": `Перейти до блоку партнерів ${index + 1}`
									}, index))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "static size-11 translate-y-0 border-slate-200 bg-white text-navy shadow-sm hover:border-primary hover:bg-primary hover:text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "static size-11 translate-y-0 border-slate-200 bg-white text-navy shadow-sm hover:border-primary hover:bg-primary hover:text-white" })]
								})]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-white py-24 md:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] px-6 lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							centered: true,
							subtitle: "ОСВІТА ТА НАУКА",
							title: "МІЖНАРОДНА МЕДИЧНА НАУКОВА БАЗА"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mt-12 grid max-w-7xl auto-rows-fr gap-7 md:grid-cols-2 lg:gap-8",
							children: EDUCATION_CARDS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationCard, { item }, item.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-white py-16 md:py-20 lg:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							centered: true,
							subtitle: "ПАРТНЕРСЬКА ПЛАТФОРМА",
							title: "СПІВПРАЦЯ",
							className: "!mb-4 md:!mb-5"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col lg:flex-row items-start justify-between gap-6 max-w-[1540px] mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "cooperation-viewport w-full lg:flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									ref: cooperationStackRef,
									onTransitionEnd: handleCooperationTransitionEnd,
									className: "cooperation-stack",
									style: {
										transform: cooperationStepHeight ? `translateY(-${cooperationDomIndex * cooperationStepHeight}px)` : `translateY(calc(-${cooperationDomIndex} * (var(--card-height) - 1.15rem)))`,
										transition: cooperationDisableTransition ? "none" : "transform 520ms cubic-bezier(0.22, 1, 0.36, 1)"
									},
									children: EXTENDED_COOPERATION_ITEMS.map((item, domIndex) => {
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CooperationCard, {
											item,
											domIndex,
											activeDomIndex: cooperationDomIndex,
											onClick: () => {
												if (cooperationIsAnimatingRef.current || domIndex === cooperationDomIndex) return;
												cooperationIsAnimatingRef.current = true;
												setCooperationIsAnimating(true);
												setCooperationDomIndex(domIndex);
												let realIndex = 0;
												if (domIndex === 0) realIndex = COOPERATION_ITEMS.length - 1;
												else if (domIndex === COOPERATION_ITEMS.length + 1) realIndex = 0;
												else realIndex = domIndex - 1;
												setCooperationCurrentSlide(realIndex);
											}
										}, `${item.virtualKey}-${domIndex}`);
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-4 w-full lg:w-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => goToCooperationStep(-1),
										disabled: cooperationIsAnimating,
										className: "flex items-center justify-center size-12 rounded-full border border-primary/30 bg-primary/5 text-primary transition-all hover:bg-primary hover:text-white hover:scale-110 active:scale-95 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:hover:scale-100 disabled:hover:bg-slate-100 disabled:hover:text-slate-400",
										"aria-label": "Попередня карта",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-row lg:flex-col gap-2.5",
										children: COOPERATION_ITEMS.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											disabled: cooperationIsAnimating,
											onClick: () => {
												if (cooperationIsAnimatingRef.current || index === cooperationCurrentSlide) return;
												cooperationIsAnimatingRef.current = true;
												setCooperationIsAnimating(true);
												setCooperationCurrentSlide(index);
												setCooperationDomIndex(index + 1);
											},
											className: `h-2.5 rounded-full transition-all duration-300 ${cooperationCurrentSlide === index ? "w-2.5 bg-primary shadow-sm" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`,
											"aria-label": `Перейти до карти ${index + 1}`
										}, index))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => goToCooperationStep(1),
										disabled: cooperationIsAnimating,
										className: "flex items-center justify-center size-12 rounded-full border border-primary/30 bg-primary/5 text-primary transition-all hover:bg-primary hover:text-white hover:scale-110 active:scale-95 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:hover:scale-100 disabled:hover:bg-slate-100 disabled:hover:text-slate-400",
										"aria-label": "Наступна карта",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-6" })
									})
								]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "py-20 md:py-28 bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1600px] px-6 lg:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCarousel, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-slate-50/70 py-24 md:py-32 border-t border-slate-200/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1000px] px-6 lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl leading-tight font-bold text-navy sm:text-3xl md:text-4xl",
								children: "Питання та відповіді"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 sm:mt-6 h-1 w-16 rounded-full bg-primary" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "w-full space-y-5 mt-12",
							children: FAQS.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: `item-${i}`,
								className: "rounded-2xl border border-slate-200 bg-white px-6 md:px-8 py-2 shadow-sm transition-all hover:shadow-md hover:border-primary/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
									className: "text-left text-base md:text-lg font-bold text-navy hover:text-primary hover:no-underline [&[data-state=open]]:text-primary",
									children: faq.question
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
									className: "text-sm md:text-base leading-relaxed text-slate-600 pb-6",
									children: faq.answer
								})]
							}, i))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-background py-24 md:py-32",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-[10%] top-[30%] size-[500px] rounded-full bg-primary/5 blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto max-w-[1600px] px-6 lg:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-16 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
									subtitle: "НАШІ НАПРЯМИ",
									title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Сучасні методи ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "відновлення"
									})] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-navy text-xl leading-relaxed",
										children: "Ми використовуємо комплексний підхід, поєднуючи різноманітні методи під завдання пацієнта."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Індивідуальна програма, фізична терапія, гідрокінезіотерапія, фізіотерапія та лікувальний масаж — кожен метод підбирається з урахуванням стану здоров'я та цілей відновлення." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
										to: "/pro-osnovu",
										className: "inline-flex items-center gap-3 rounded-xl bg-navy px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:bg-primary hover:scale-105",
										children: ["ДЕТАЛЬНІШЕ ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })]
									})
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex w-full items-center justify-center lg:justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
									className: "group relative w-full max-w-[560px] aspect-square overflow-hidden rounded-[2rem] border border-sky-100 bg-[#eaf5ff] shadow-[0_22px_55px_-30px_rgba(30,64,175,0.55)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: osnova_logo_3d_default,
										alt: "3D-модель логотипа ОСНОВА",
										loading: "lazy",
										width: 1024,
										height: 1536,
										className: "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-x-0 bottom-0 bg-white/80 px-6 py-5 backdrop-blur-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold uppercase tracking-[0.14em] text-primary",
											children: "Методики, об'єднані в систему"
										})
									})]
								})
							})]
						})
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Index as component };
