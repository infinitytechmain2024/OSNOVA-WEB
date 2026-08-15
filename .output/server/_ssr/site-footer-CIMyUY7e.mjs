import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as Menu, Ct as ArrowRight, E as Music2, L as Languages, M as MapPin, N as Mail, O as MessageSquare, P as LoaderCircle, R as Instagram, St as ArrowUp, Z as Facebook, b as Phone, ct as CircleCheck, dt as ChevronRight, g as Send, m as ShieldCheck, mt as Check, n as Youtube, nt as Clock, o as User, ot as Circle, p as Sparkles, pt as ChevronDown, r as X, x as PhoneCall } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as DropdownMenuItemIndicator, c as DropdownMenuRadioGroup$1, d as DropdownMenuSubContent$1, f as DropdownMenuSubTrigger$1, i as DropdownMenuItem$1, l as DropdownMenuRadioItem$1, n as DropdownMenuCheckboxItem$1, o as DropdownMenuLabel$1, p as DropdownMenuTrigger$1, r as DropdownMenuContent$1, s as DropdownMenuPortal, t as DropdownMenu$1, u as DropdownMenuSeparator$1 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-footer-CIMyUY7e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Link that accepts any in-app path (dynamic pages are served by the /$ splat route). */
function AppLink({ to, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		...rest
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function ConsultationForm({ title = "Записатися на консультацію", subtitle = "Заповніть форму нижче, і наш адміністратор зв'яжеться з вами для уточнення деталей.", className, onSuccess, compact = false, tone = "light", showPrivacyConsent = true }) {
	const [name, setName] = import_react.useState("");
	const [phone, setPhone] = import_react.useState("");
	const [comment, setComment] = import_react.useState("");
	const [isSubmitting, setIsSubmitting] = import_react.useState(false);
	const [isSubmitted, setIsSubmitted] = import_react.useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name.trim() || !phone.trim()) return;
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			if (onSuccess) onSuccess();
		}, 800);
	};
	const handleReset = () => {
		setName("");
		setPhone("");
		setComment("");
		setIsSubmitted(false);
	};
	const isDark = tone === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden rounded-2xl transition-all duration-300", isDark ? "bg-navy-deep/95 text-background border border-background/15 shadow-2xl p-6 sm:p-8" : "bg-card text-card-foreground border border-border shadow-lg p-6 sm:p-8", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("pointer-events-none absolute -right-16 -top-16 size-48 rounded-full blur-3xl opacity-20", isDark ? "bg-brand-green" : "bg-primary") }), isSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in-95 duration-500 h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-6 flex size-20 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 ring-8 ring-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-10 animate-in zoom-in duration-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold sm:text-2xl",
					children: "Заявку успішно відправлено!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 max-w-md rounded-xl bg-emerald-50/80 p-4 border border-emerald-200/60 dark:bg-emerald-950/40 dark:border-emerald-800/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm sm:text-base font-semibold leading-relaxed text-emerald-900 dark:text-emerald-200 flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "size-5 shrink-0 text-emerald-600 dark:text-emerald-400 animate-bounce" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ваше повідомлення відправлено, очікуйте дзвінка від адміністратора." })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					children: "Дякуємо за довіру! Наші фахівці зв'яжуться з вами найближчим часом."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleReset,
					className: "mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/80 px-5 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary hover:scale-[1.02]",
					children: "Надіслати ще одну заявку"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-in fade-in duration-300 flex-1 flex flex-col justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: cn("text-xl sm:text-2xl font-extrabold tracking-tight", isDark ? "text-white" : "text-navy"),
					children: title
				}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-2 text-xs sm:text-sm leading-relaxed", isDark ? "text-background/80" : "text-muted-foreground"),
					children: subtitle
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4 sm:space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "consultation-name",
						className: cn("block text-xs font-bold uppercase tracking-wider mb-1.5", isDark ? "text-background/90" : "text-navy/90"),
						children: ["Ім'я ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-destructive",
							children: "*"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-emerald-700/60 dark:text-emerald-400/60 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "consultation-name",
							type: "text",
							required: true,
							placeholder: "Введіть ваше ім'я",
							value: name,
							onChange: (e) => setName(e.target.value),
							className: cn("w-full rounded-xl border px-3.5 py-3 pl-10 text-sm font-medium transition-all focus:outline-none focus:ring-2", isDark ? "border-emerald-500/35 bg-background/10 text-white placeholder:text-background/50 focus:border-brand-green focus:ring-brand-green/30 hover:border-emerald-500/55" : "border-emerald-600/30 bg-emerald-50/20 text-foreground placeholder:text-muted-foreground/60 focus:border-brand-green focus:ring-brand-green/30 hover:border-emerald-600/50")
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "consultation-phone",
						className: cn("block text-xs font-bold uppercase tracking-wider mb-1.5", isDark ? "text-background/90" : "text-navy/90"),
						children: ["Номер телефону ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-destructive",
							children: "*"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-emerald-700/60 dark:text-emerald-400/60 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "consultation-phone",
							type: "tel",
							required: true,
							placeholder: "+380 (__) ___-__-__",
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							className: cn("w-full rounded-xl border px-3.5 py-3 pl-10 text-sm font-medium transition-all focus:outline-none focus:ring-2", isDark ? "border-emerald-500/35 bg-background/10 text-white placeholder:text-background/50 focus:border-brand-green focus:ring-brand-green/30 hover:border-emerald-500/55" : "border-emerald-600/30 bg-emerald-50/20 text-foreground placeholder:text-muted-foreground/60 focus:border-brand-green focus:ring-brand-green/30 hover:border-emerald-600/50")
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "consultation-comment",
							className: cn("block text-xs font-bold uppercase tracking-wider", isDark ? "text-background/90" : "text-navy/90"),
							children: "Коментар"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-500/25",
							children: "не обов'язково"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "absolute left-3.5 top-3.5 size-4 text-emerald-700/60 dark:text-emerald-400/60 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "consultation-comment",
							rows: compact ? 2 : 3,
							placeholder: "Ваші побажання, симптоми або зручний час для дзвінка...",
							value: comment,
							onChange: (e) => setComment(e.target.value),
							className: cn("w-full rounded-xl border px-3.5 py-3 pl-10 text-sm font-medium transition-all focus:outline-none focus:ring-2 resize-none", isDark ? "border-emerald-500/35 bg-background/10 text-white placeholder:text-background/50 focus:border-brand-green focus:ring-brand-green/30 hover:border-emerald-500/55" : "border-emerald-600/30 bg-emerald-50/20 text-foreground placeholder:text-muted-foreground/60 focus:border-brand-green focus:ring-brand-green/30 hover:border-emerald-600/50")
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: isSubmitting,
						className: cn("group relative flex w-full items-center justify-center gap-2.5 rounded-xl py-3.5 px-6 text-sm font-bold tracking-wide transition-all shadow-md active:scale-[0.98] bg-brand-green text-brand-green-foreground hover:bg-brand-green/90 shadow-brand-green/20 cursor-pointer", isSubmitting && "opacity-80 cursor-wait"),
						children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Надіслати запит..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4 transition-transform group-hover:translate-x-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Надіслати запит" })] })
					})
				]
			})] }), showPrivacyConsent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 pt-4 border-t border-border/60 text-center space-y-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("text-xs leading-relaxed", isDark ? "text-background/80" : "text-muted-foreground"),
					children: [
						"Надсилаючи заявку, ви погоджуєтесь з нашою",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							to: "/polityka-konfidentsiinosti",
							className: cn("font-semibold underline underline-offset-2 transition-colors", isDark ? "text-brand-green hover:text-white" : "text-emerald-700 dark:text-emerald-400 hover:text-emerald-800"),
							children: "політикою конфіденційності"
						}),
						" ",
						"та",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							to: "/zhoda-na-obrobku-danykh",
							className: cn("font-semibold underline underline-offset-2 transition-colors", isDark ? "text-brand-green hover:text-white" : "text-emerald-700 dark:text-emerald-400 hover:text-emerald-800"),
							children: "обробкою персональних даних"
						}),
						"."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-4 text-[11px] font-medium text-muted-foreground/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" }), " Конфіденційність гарантовано"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" }), " Відповідь протягом 15 хв"]
					})]
				})]
			})]
		})]
	});
}
/**
* Modal Dialog for Consultation Booking
*/
function ConsultationModal({ open, onOpenChange, title = "Записатися на консультацію" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md p-0 overflow-hidden border-none bg-transparent shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "sr-only",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Форма запису на консультацію в клініку Основа" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationForm, {
				title,
				subtitle: "Заповніть форму, і наш адміністратор підбере для вас найзручніший час."
			})]
		})
	});
}
/**
* Custom Hook / Context Helper for Consultation Modal trigger state
*/
var ConsultationModalContext = import_react.createContext({
	isOpen: false,
	openModal: () => {},
	closeModal: () => {}
});
function ConsultationModalProvider({ children }) {
	const [isOpen, setIsOpen] = import_react.useState(false);
	const [modalTitle, setModalTitle] = import_react.useState("Записатися на консультацію");
	const openModal = import_react.useCallback((title) => {
		if (title) setModalTitle(title);
		setIsOpen(true);
	}, []);
	const closeModal = import_react.useCallback(() => {
		setIsOpen(false);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ConsultationModalContext.Provider, {
		value: {
			isOpen,
			openModal,
			closeModal
		},
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationModal, {
			open: isOpen,
			onOpenChange: setIsOpen,
			title: modalTitle
		})]
	});
}
function useConsultationModal() {
	return import_react.useContext(ConsultationModalContext);
}
var service_rehab_default = "/assets/service-rehab-CVHPKjlr.jpg";
var service_checkup_default = "/assets/service-checkup-avzHL_rS.jpg";
var service_sports_default = "/assets/service-sports-DGsoGTzw.jpg";
var cpet_test_default = "/assets/cpet-test-DiF2T5we.jpg";
var ecg_review_default = "/assets/ecg-review-43jYg4Hw.jpg";
var ergometer_default = "/assets/ergometer-DFcNxK8-.jpg";
var CARDIO_REHAB_ROUTE = "/reabilitatsiia/kardiolohichna";
var CARDIO_REHAB_PROGRAMS = [
	{
		id: "bazova",
		title: "Базова",
		description: "Базова програма для поступового відновлення витривалості, мобільності та самоконтролю.",
		duration: "4–6 занять",
		format: "амбулаторно",
		price: "3 000 грн",
		detailsUrl: `${CARDIO_REHAB_ROUTE}/bazova`,
		orderAction: "Замовити послугу"
	},
	{
		id: "standartna",
		title: "Стандартна",
		description: "Розширена програма з більш регулярним контролем навантаження та динаміки стану.",
		duration: "6–8 занять",
		format: "амбулаторно",
		price: "21 000 грн",
		detailsUrl: `${CARDIO_REHAB_ROUTE}/standartna`,
		orderAction: "Замовити послугу"
	},
	{
		id: "rozshyrena",
		title: "Розширена",
		description: "Програма з більш повним обсягом навантаження, контролю та рекомендацій для відновлення.",
		duration: "8–12 занять",
		format: "амбулаторно",
		price: "42 000 грн",
		detailsUrl: `${CARDIO_REHAB_ROUTE}/rozshyrena`,
		orderAction: "Замовити послугу"
	},
	{
		id: "indyvidualna",
		title: "Індивідуальна",
		description: "Індивідуальний маршрут реабілітації з адаптацією до особливостей пацієнта і темпу відновлення.",
		duration: "за індивідуальним планом",
		format: "амбулаторно / виїзно",
		price: "63 000 грн",
		detailsUrl: `${CARDIO_REHAB_ROUTE}/indyvidualna`,
		orderAction: "Замовити послугу"
	}
];
var IMAGES = {
	rehabImg: service_rehab_default,
	checkupImg: service_checkup_default,
	sportsImg: service_sports_default,
	cpetImg: cpet_test_default,
	ecgImg: ecg_review_default,
	ergoImg: ergometer_default
};
var BASE_FAQ = [
	{
		question: "Скільки триває програма?",
		answer: "Тривалість визначає лікар після первинної оцінки стану — вона залежить від діагнозу, самопочуття та цілей пацієнта."
	},
	{
		question: "Чи потрібне направлення лікаря?",
		answer: "Направлення не обов’язкове. Якщо у вас є висновки або призначення лікаря, візьміть їх із собою — це пришвидшує первинну оцінку."
	},
	{
		question: "Які документи необхідно надати?",
		answer: "Виписки зі стаціонару, результати попередніх обстежень та перелік препаратів, які ви приймаєте, якщо такі є."
	},
	{
		question: "Як записатися?",
		answer: "Залиште заявку у формі на сайті або зателефонуйте нам — адміністратор підбере зручний час і пояснить наступні кроки."
	}
];
var REHAB_FAQ = [...BASE_FAQ, {
	question: "Чи можна проходити програму амбулаторно?",
	answer: "Так. Доступні стаціонарний, амбулаторний та комбінований формати — формат обирається разом із лікарем."
}];
var rehabDefaults = {
	formats: [
		"Стаціонарно",
		"Амбулаторно",
		"Виїзно"
	],
	indications: [
		"Після перенесеного захворювання, травми або операції",
		"При зниженні витривалості та повсякденної активності",
		"За рекомендацією лікуючого лікаря"
	],
	contraindications: [
		"Гострий стан або загострення захворювання",
		"Підвищена температура тіла та гострі інфекції",
		"Стани, що потребують невідкладної медичної допомоги"
	],
	included: [
		"Первинний огляд лікаря та оцінка стану",
		"Індивідуальний план відновлення",
		"Заняття з фізичним терапевтом",
		"Контроль динаміки та підсумковий висновок"
	],
	stages: [
		"Первинна консультація та обстеження",
		"Формування індивідуальної програми",
		"Основний курс занять і процедур",
		"Проміжна оцінка та корекція програми",
		"Підсумковий висновок і рекомендації вдома"
	],
	results: [
		"Поступове повернення до звичної активності",
		"Зменшення обмежень у русі та повсякденних діях",
		"Розуміння безпечного рівня навантажень",
		"Персональні рекомендації на період після програми"
	],
	requiredDocuments: [
		"Виписка зі стаціонару або висновок лікаря",
		"Результати попередніх обстежень",
		"Перелік препаратів, які ви приймаєте"
	],
	faq: REHAB_FAQ
};
function program(parentId, parentRoute, slug, title, shortDescription, duration = "7–21 день", priceLabel = "від 1 600 грн / день", image = service_rehab_default) {
	return {
		id: `${parentId}--${slug}`,
		slug,
		parentId,
		type: "service",
		title,
		route: `${parentRoute}/${slug}`,
		shortDescription,
		duration,
		priceLabel,
		image,
		published: true,
		...rehabDefaults
	};
}
function method(parentId, parentRoute, slug, title, shortDescription, duration, priceLabel = "Вартість уточнюється", image = ecg_review_default) {
	return {
		id: `${parentId}--${slug}`,
		slug,
		parentId,
		type: "service",
		title,
		route: `${parentRoute}/${slug}`,
		shortDescription,
		duration,
		priceLabel,
		image,
		published: true,
		formats: ["Амбулаторно"],
		indications: [
			"Планове обстеження та контроль стану",
			"Скарги з боку серцево-судинної системи",
			"Підготовка до реабілітаційної програми"
		],
		contraindications: ["Гострий стан, що потребує невідкладної допомоги", "Гостре інфекційне захворювання"],
		included: [
			"Проведення дослідження",
			"Опис результату лікарем",
			"Медичний висновок"
		],
		results: ["Об’єктивні дані про стан здоров’я", "Основа для подальшої тактики лікування або реабілітації"],
		faq: BASE_FAQ
	};
}
var cardiologyPrograms = CARDIO_REHAB_PROGRAMS.map((program) => ({
	...program,
	price: program.price
}));
var cardioRehab = {
	id: "rehab-cardio",
	slug: "kardiolohichna",
	parentId: "rehab",
	type: "direction",
	customPage: "cardio-rehab",
	title: "Реабілітація в кардіології",
	eyebrow: "РЕАБІЛІТАЦІЯ",
	route: CARDIO_REHAB_ROUTE,
	shortDescription: "Контрольована програма відновлення для безпечного повернення до активності після серцево-судинних захворювань, операцій і втручань.",
	fullDescription: "Програми кардіологічної реабілітації будуються на результатах діагностики: лікар оцінює стан серця, переносимість навантажень і підбирає безпечний темп відновлення під наглядом команди.",
	duration: "1–21 день",
	priceLabel: "3 000 грн",
	image: cpet_test_default,
	published: true,
	featured: true,
	...rehabDefaults,
	pageContent: {
		heroPrimaryLabel: "ЗАПИСАТИСЯ НА КОНСУЛЬТАЦІЮ",
		introTitle: "ЩО ТАКЕ\nКАРДІОЛОГІЧНА РЕАБІЛІТАЦІЯ?",
		introBody: "Кардіологічна реабілітація — це комплексний процес під медичним наглядом, який допомагає адаптувати серцево-судинну систему до навантажень, покращити витривалість та самопочуття.",
		introExpandedBody: "Програма сприяє поступовій адаптації серцево-судинної системи до навантажень, покращенню витривалості та самопочуття.\n\nПісля хвороби або втручання багато пацієнтів відчувають невпевненість щодо допустимого рівня активності. Програма дозволяє контрольовано відновити рухову діяльність.\n\nОсновні завдання відновлення:\n• Допомога у подоланні побоювань щодо фізичних навантажень;\n• Навчання контролю показників артеріального тиску та пульсу;\n• Зменшення відчуття задишки та швидкої втомлюваності при побутових діях;\n• Формування рекомендацій щодо безпечного способу життя.\n\nУсі заняття та навантаження підбираються індивідуально на основі медичного обстеження та рекомендацій лікаря.",
		recommendedTitle: "ЩО ВХОДИТЬ У ПРОГРАМУ?",
		recommendedSubtitle: "Програма включає лише необхідні складники для безпечного та ефективного відновлення:",
		recommendedItems: [
			"Оцінка поточного стану серцево-судинної системи та наявних медичних документів",
			"Контрольована фізична активність із поступовим адаптивним збільшенням навантажень",
			"Постійне спостереження за самопочуттям, гемодинамікою та реакцією серця",
			"Персоналізовані рекомендації щодо безпечного повернення до щоденної активності"
		],
		recommendedExpandedText: "Детальний зміст програми:\n\nФізичне відновлення\n• Індивідуально добирані вправи з урахуванням стану серця;\n• Поступове підвищення витривалості та аеробної здатності;\n• Навчання правильній техніці виконання щоденних рухів.\n\nМедичний контроль та безпека\n• Вимірювання тиску, пульсу та насичення киснем до, під час і після занять;\n• Моніторинг реакції організму на навантаження;\n• Вчасна корекція інтенсивності відповідно до самопочуття.\n\nРекомендації та самоконтроль\n• Поради щодо розкладу активності та відпочинку;\n• Консультації щодо спостереження за основними показниками;\n• Підготовка висновку для лікуючого кардіолога.\n\nКожна програма доповнює основне лікування та проводиться за узгодженням із фахівцями.",
		postponeTitle: "Коли планову програму варто відкласти",
		postponeIntro: "Планову програму відновлення розпочинають лише за стабільного самопочуття. Заняття варто тимчасово відкласти та проконсультуватися з лікарем за наявності таких станів:",
		postponeLeft: ["При неконтрольованому підвищенні артеріального тиску", "При гострому інфекційному захворюванні чи підвищеній температурі"],
		postponeRight: ["При загостренні тяжких супутніх захворювань", "Після операції або втручання, якщо лікар ще не дозволив фізичні навантаження"],
		emergencyTitle: "Коли потрібно звернутися по невідкладну допомогу",
		emergencyBody: "При сильному або тривалому болю чи тиску у грудях, раптовій вираженій задишці, втраті свідомості, раптовій слабкості, порушенні мовлення або різкому погіршенні стану потрібно негайно звернутися по невідкладну медичну допомогу.\n\nОстаточне рішення про можливість початку або продовження програми приймається після оцінки стану пацієнта.",
		frequencyParagraphs: ["Зміст, інтенсивність і тривалість програми визначаються з урахуванням діагнозу, перенесеного лікування, результатів обстежень і переносимості фізичного навантаження.", "Під час реабілітації план може змінюватися відповідно до самопочуття та реакції організму."],
		frequencyExpandedText: "Перед формуванням програми бажано надати:\n• виписку зі стаціонару;\n• висновок кардіолога;\n• результати останніх обстежень;\n• інформацію про перенесені операції та втручання;\n• перелік лікарських засобів, які приймає пацієнт;\n• рекомендації лікаря, якщо вони є.\n\nНа початковому етапі фахівці оцінюють:\n• основний діагноз;\n• стабільність серцево-судинного стану;\n• наявність болю, задишки, слабкості або порушень ритму;\n• рівень побутової активності;\n• переносимість ходьби та інших навантажень;\n• супутні захворювання;\n• можливі обмеження.\n\nПісля цього визначають:\n• основні завдання програми;\n• початкову інтенсивність занять;\n• частоту і тривалість навантаження;\n• необхідний рівень контролю;\n• перелік додаткових процедур;\n• критерії збільшення або зменшення навантаження.\n\nПід час занять оцінюються самопочуття, пульс, артеріальний тиск, переносимість вправ і швидкість відновлення після навантаження.\n\nІнтенсивність не збільшується автоматично за календарем. Програму коригують лише тоді, коли попередній рівень навантаження добре переноситься.\n\nДоступні стаціонарний та амбулаторний формати. Окремі консультації та подальший контроль виконання рекомендацій можуть проводитися дистанційно, якщо такий формат допустимий для конкретного пацієнта.",
		methodSectionTitle: "З ЯКИМИ СТАНАМИ МИ ПРАЦЮЄМО",
		methodCards: [
			{
				title: "Реабілітація після інфаркту міокарда",
				text: "Поступове відновлення фізичної активності після стабілізації стану та завершення гострого етапу лікування.",
				expandedText: "Перед початком програми враховуються перебіг інфаркту, проведене лікування, результати обстежень, наявність задишки, болю або порушень ритму.\n\nПрограма може включати:\n• оцінку функціонального стану;\n• контрольовану ходьбу;\n• поступове збільшення аеробного навантаження;\n• вправи для відновлення загальної сили;\n• контроль пульсу, тиску та самопочуття;\n• рекомендації щодо активності вдома;\n• роботу з факторами серцево-судинного ризику.\n\nПочаток занять і допустиме навантаження визначаються після підтвердження стабільності стану."
			},
			{
				title: "Реабілітація після стентування коронарних артерій",
				text: "Контрольоване повернення до фізичної активності після відновлення кровотоку в коронарних артеріях.",
				expandedText: "Під час формування програми враховуються причина проведення стентування, перебіг відновлення, наявність симптомів, результати контрольних обстежень і рекомендації кардіолога.\n\nОсновними завданнями можуть бути:\n• визначення допустимого рівня навантаження;\n• поступове збільшення активності;\n• контроль самопочуття під час занять;\n• відновлення витривалості;\n• робота з факторами серцево-судинного ризику;\n• підготовка рекомендацій для подальшої активності.\n\nСтентування відновлює кровотік у конкретній ділянці судини, але не скасовує необхідності контролю основного захворювання та виконання призначень лікаря."
			},
			{
				title: "Реабілітація після аортокоронарного шунтування",
				text: "Поетапне відновлення рухової активності та витривалості після кардіохірургічної операції.",
				expandedText: "Після операції враховуються стан серцево-судинної системи, загоєння післяопераційної рани, стан груднини, загальна слабкість і можливі обмеження рухів.\n\nДо програми можуть входити:\n• дихальні вправи;\n• безпечне відновлення мобільності;\n• поступове збільшення тривалості ходьби;\n• контрольоване аеробне навантаження;\n• вправи для відновлення загальної сили;\n• навчання безпечному виконанню побутових дій;\n• рекомендації щодо активності після завершення програми.\n\nТерміни початку та обсяг навантаження визначаються з урахуванням післяопераційного стану і рекомендацій лікаря."
			},
			{
				title: "Реабілітація після операцій на клапанах серця",
				text: "Поступове відновлення активності після протезування або іншого хірургічного лікування клапанів серця.",
				expandedText: "Програма формується з урахуванням виду операції, функціонального стану серця, наявності порушень ритму, загального самопочуття та рекомендацій кардіолога або кардіохірурга.\n\nПрограма може бути спрямована на:\n• безпечне збільшення фізичної активності;\n• відновлення витривалості;\n• контроль реакції на навантаження;\n• зменшення наслідків тривалого обмеження руху;\n• підготовку рекомендацій щодо активності вдома;\n• навчання самоконтролю.\n\nЯкщо пацієнт приймає антикоагулянти або інші препарати, що впливають на згортання крові, це враховується під час планування занять і додаткових процедур."
			},
			{
				title: "Реабілітація після встановлення кардіостимулятора",
				text: "Безпечне повернення до активності з урахуванням основного захворювання, роботи пристрою та рекомендацій кардіолога.",
				expandedText: "Наявність кардіостимулятора не означає повної заборони фізичної активності. Перед початком занять потрібно врахувати причину встановлення пристрою, його налаштування, наявність симптомів і стан серцево-судинної системи.\n\nПрограма може включати:\n• поступове відновлення ходьби;\n• повернення до побутової активності;\n• визначення допустимого рівня навантаження;\n• контроль пульсу, тиску та самопочуття;\n• вправи для відновлення загальної витривалості;\n• рекомендації щодо безпечної активності.\n\nНа ранньому етапі після імплантації враховуються обмеження, пов'язані із загоєнням зони встановлення пристрою. Початок занять узгоджується з лікарем."
			},
			{
				title: "Реабілітація при порушеннях серцевого ритму",
				text: "Оцінка переносимості навантаження та контрольовані заняття для пацієнтів зі стабільним станом.",
				expandedText: "Можливість фізичної реабілітації залежить від виду порушення ритму, частоти симптомів, ефективності лікування та реакції серця на навантаження.\n\nПеред початком програми потрібно виключити нестабільні та потенційно небезпечні порушення ритму.\n\nДля пацієнтів у стабільному стані програма може включати:\n• оцінку функціональних можливостей;\n• визначення допустимої інтенсивності;\n• контроль самопочуття під час занять;\n• поступове збільшення активності;\n• рекомендації щодо самоконтролю;\n• пояснення симптомів, при яких потрібно припинити навантаження.\n\nОстаточне рішення про можливість занять приймається після медичної оцінки."
			},
			{
				title: "Кардіореабілітація при стабільній стенокардії",
				text: "Контрольоване збільшення фізичної активності для покращення переносимості навантажень та зменшення частоти нападів.",
				expandedText: "Програма формується з урахуванням частоти та інтенсивності нападів, результатів навантажувальних тестів, наявності супутніх захворювань та рекомендацій кардіолога.\n\nОсновними завданнями можуть бути:\n• визначення безпечного рівня навантаження;\n• поступове збільшення витривалості;\n• контроль реакції на навантаження;\n• зменшення частоти та тяжкості нападів;\n• покращання якості життя;\n• робота з факторами серцево-судинного ризику.\n\nСтабільна стенокардія не є протипоказанням до фізичної активності, але вимагає контролю та дотримання рекомендацій лікаря."
			},
			{
				title: "Кардіореабілітація при гіпертонічній хворобі",
				text: "Зниження артеріального тиску та зменшення навантаження на серцево-судинну систему за допомогою контролйованих занять.",
				expandedText: "Програма підбирається з урахуванням рівня артеріального тиску, наявності ускладнень, супутніх захворювань та загального стану пацієнта.\n\nЗаняття можуть включати:\n• аеробне навантаження помірної інтенсивності;\n• вправи для зниження тонусу судин;\n• дихальну гімнастику;\n• контроль артеріального тиску до і після занять;\n• формування звички до регулярної активності;\n• рекомендації щодо способу життя.\n\nРегулярні контрольовані навантаження можуть сприяти зниженню артеріального тиску та зменшенню кількості необхідних препаратів, але зміна дозувань лікарських засобів проводиться лише за призначенням лікаря."
			},
			{
				title: "Кардіореабілітація при хронічній серцевій недостатності",
				text: "Покращення функціонального стану та якості життя пацієнтів з обмеженням серцевої діяльності.",
				expandedText: "Програма формується після оцінки функціонального класу, результатів обстежень, наявності симптомів та рекомендацій кардіолога.\n\nЗаняття можуть включати:\n• низькоінтенсивне аеробне навантаження;\n• вправи для зміцнення м'язів;\n• дихальну гімнастику;\n• контроль самопочуття, пульсу та тиску;\n• поступове збільшення тривалості та інтенсивності занять;\n• навчання самоконтролю;\n• рекомендації щодо обмеження рідини та солі.\n\nПри хронічній серцевій недостатності важливо дотримуватися помірного темпу та уникати перевантажень. Програма коригується відповідно до реакції організму."
			}
		],
		conditionsQuestionButton: "ПОСТАВИТИ ЗАПИТАННЯ",
		conditionsNote: "Не знайшли свій стан у переліку? Зверніться до адміністратора, щоб уточнити можливість проходження програми.",
		ctaMiddleTitle: "ОБГОВОРІТЬ МОЖЛИВІСТЬ ПРОХОДЖЕННЯ ПРОГРАМИ",
		ctaMiddleText: "Залиште заявку та коротко повідомте про перенесене захворювання, операцію або втручання. Адміністратор пояснить, які документи потрібно підготувати та як організовується попередня оцінка.",
		ctaMiddleButton: "ЗАПИСАТИСЯ НА КОНСУЛЬТАЦІЮ",
		stages: [
			{
				title: "Звернення",
				text: "Пацієнт залишає заявку або телефонує до центру."
			},
			{
				title: "Оцінка стану",
				text: "Фахівці ознайомлюються з медичними документами та визначають, чи потрібна додаткова консультація або діагностика."
			},
			{
				title: "Формування програми",
				text: "Визначаються завдання, допустиме навантаження, частота занять і необхідний рівень контролю."
			},
			{
				title: "Проходження та контроль",
				text: "Пацієнт проходить програму, а навантаження коригується відповідно до самопочуття та реакції організму."
			}
		],
		stagesExpanded: "1. Первинне звернення\n\nПід час першого контакту уточнюються:\n• основний запит;\n• діагноз або перенесене втручання;\n• дата захворювання чи операції;\n• наявність виписки та результатів обстежень;\n• бажаний формат проходження;\n• потреба у проживанні.\n\nНа цьому етапі адміністратор не встановлює діагноз і не призначає процедури. Його завдання — зібрати основну інформацію та пояснити порядок подальших дій.\n\n2. Аналіз документів та оцінка стану\n\nФахівці ознайомлюються з наданою медичною документацією. За потреби призначається консультація або додаткове обстеження.\n\nОцінюються:\n• стабільність серцево-судинного стану;\n• наявність симптомів;\n• перенесене лікування;\n• супутні захворювання;\n• лікарські засоби;\n• рівень побутової активності;\n• переносимість навантаження;\n• можливі обмеження.\n\n3. Формування програми\n\nПісля оцінки визначаються:\n• основні завдання відновлення;\n• початковий рівень навантаження;\n• частота і тривалість занять;\n• необхідний рівень медичного контролю;\n• додаткові методи за показаннями;\n• критерії зміни програми.\n\nДо супроводу можуть залучатися лікарі, фахівці з фізичної реабілітації, функціональної діагностики та інші спеціалісти відповідно до потреб пацієнта.\n\n4. Проходження програми\n\nПеред заняттями оцінюється самопочуття пацієнта. Під час виконання вправ контролюється реакція організму на навантаження.\n\nПрограма може коригуватися, якщо:\n• змінилося самопочуття;\n• з'явилися нові симптоми;\n• попереднє навантаження стало надто легким або надто складним;\n• змінилися результати обстежень;\n• лікар надав нові рекомендації.\n\n5. Рекомендації після завершення\n\nПісля проходження програми пацієнт отримує рекомендації щодо:\n• допустимої фізичної активності;\n• продовження вправ;\n• режиму навантаження та відпочинку;\n• самоконтролю;\n• симптомів, при яких потрібно звернутися до лікаря;\n• подальшого медичного спостереження.\n\nФормати проходження\n\nСтаціонарний формат\nПацієнт проживає на території комплексу та проходить консультації, заняття і процедури відповідно до складеного графіка.\n\nАмбулаторний формат\nПацієнт приїжджає до центру на консультації, заняття та процедури без проживання.\n\nОкремий дистанційний супровід\nМоже включати консультації, контроль виконання рекомендацій та корекцію подальшого плану, якщо такий формат допустимий для конкретного пацієнта.\n\nДистанційний супровід не замінює очну оцінку, діагностику та контрольовані заняття, коли вони необхідні.",
		pricePrimary: [
			{
				name: "Профілактична програма",
				time: "потрібне підтвердження",
				price: "потрібне підтвердження"
			},
			{
				name: "Базова програма",
				time: "потрібне підтвердження",
				price: "потрібне підтвердження"
			},
			{
				name: "Інтенсивна програма",
				time: "потрібне підтвердження",
				price: "потрібне підтвердження"
			},
			{
				name: "Повна програма",
				time: "потрібне підтвердження",
				price: "потрібне підтвердження"
			}
		],
		priceFooterText: "Залежно від стану пацієнта додатково можуть знадобитися консультації лікарів, лабораторні або функціональні дослідження та окремі процедури. Перед початком програми пацієнт має отримати повний перелік включених послуг і можливих додаткових витрат.",
		priceFooterButton: "ДІЗНАТИСЯ ПРО УМОВИ ПРОГРАМИ",
		ctaTitle: "ОБГОВОРІТЬ МОЖЛИВІСТЬ ПРОХОДЖЕННЯ ПРОГРАМИ",
		ctaBody: "Залиште заявку та коротко повідомте про перенесене захворювання, операцію або втручання. Адміністратор пояснить, які документи потрібно підготувати та як організовується попередня оцінка.",
		ctaButton: "ЗАПИСАТИСЯ НА КОНСУЛЬТАЦІЮ",
		methodNote: "Програма не замінює лікування у кардіолога та не передбачає самостійного скасування або зміни призначених препаратів."
	},
	faq: [
		{
			question: "Скільки триває програма?",
			answer: "Тривалість залежить від стану пацієнта, перенесеного лікування, поставлених завдань і формату проходження. Точний план визначається після ознайомлення з медичними документами та оцінки стану."
		},
		{
			question: "Чи потрібне направлення лікаря?",
			answer: "Для першого звернення можна залишити заявку або зателефонувати до центру. Якщо у вас є направлення, виписка, висновок кардіолога або рекомендації після стаціонарного лікування, їх потрібно надати для попереднього ознайомлення. Після аналізу документів вам повідомлять, чи потрібна додаткова консультація перед початком програми."
		},
		{
			question: "Які документи потрібно підготувати?",
			answer: "Бажано надати: виписку зі стаціонару; висновок кардіолога; результати останніх обстежень; інформацію про перенесені операції та втручання; перелік лікарських засобів; рекомендації лікаря, якщо вони є. Якщо частини документів немає, повідомте про це адміністратору."
		},
		{
			question: "Чи можна проходити програму амбулаторно?",
			answer: "Так, амбулаторний формат передбачає приїзд до центру на консультації, заняття та процедури без проживання. Можливість такого формату залежить від стабільності стану, необхідного рівня контролю та здатності пацієнта регулярно відвідувати центр."
		},
		{
			question: "Чи можна проходити програму дистанційно?",
			answer: "Окремі консультації та подальший супровід можуть проводитися дистанційно. Однак дистанційний формат не завжди може замінити очну медичну оцінку, функціональну діагностику та контрольовані заняття."
		},
		{
			question: "Чи входять проживання та харчування у вартість?",
			answer: "Умови залежать від обраної програми та формату проходження. Перед оплатою пацієнт має отримати повний перелік послуг, включених до вартості."
		},
		{
			question: "Що входить у вартість програми?",
			answer: "Склад залежить від обраного пакета. Частина консультацій, обстежень або додаткових процедур може оплачуватися окремо. Перед початком пацієнт отримує інформацію про включені послуги, тривалість програми, кількість занять, додаткові дослідження та можливі окремі витрати."
		},
		{
			question: "Як записатися?",
			answer: "Залиште заявку на сайті або зателефонуйте до центру. Адміністратор уточнить ваш запит, повідомить, які документи потрібно надати, та пояснить наступні кроки."
		}
	],
	children: cardiologyPrograms.map((programData) => ({
		...program("rehab-cardio", CARDIO_REHAB_ROUTE, programData.id, programData.title, programData.description, `${programData.duration} / ${programData.format}`, programData.price, service_rehab_default),
		route: programData.detailsUrl,
		duration: programData.duration,
		priceLabel: programData.price,
		shortDescription: programData.description,
		formats: [programData.format],
		detailsUrl: programData.detailsUrl,
		orderAction: programData.orderAction
	}))
};
var ORTHO_ROUTE = "/reabilitatsiia/ortopedychna";
var orthoRehab = {
	id: "rehab-ortho",
	slug: "ortopedychna",
	parentId: "rehab",
	type: "direction",
	title: "Ортопедична та травматологічна реабілітація",
	eyebrow: "РЕАБІЛІТАЦІЯ",
	route: ORTHO_ROUTE,
	shortDescription: "Відновлення рухливості та сили після травм і ортопедичних операцій.",
	duration: "10–21 день",
	priceLabel: "Вартість уточнюється",
	image: service_rehab_default,
	published: true,
	featured: true,
	...rehabDefaults,
	children: [
		program("rehab-ortho", ORTHO_ROUTE, "pislia-endoprotezuvannia", "Реабілітація після ендопротезування суглобів", "Повернення опори, амплітуди руху та ходьби після ендопротезування."),
		program("rehab-ortho", ORTHO_ROUTE, "pislia-perelomiv", "Реабілітація після переломів", "Відновлення функції кінцівки після зрощення перелому."),
		program("rehab-ortho", ORTHO_ROUTE, "pislia-artroskopii", "Реабілітація після артроскопії", "Поступове навантаження суглоба після артроскопічного втручання."),
		program("rehab-ortho", ORTHO_ROUTE, "pislia-operatsii-na-zviazkakh", "Реабілітація після операцій на зв’язках", "Стабільність суглоба та повернення до активності."),
		program("rehab-ortho", ORTHO_ROUTE, "pislia-operatsii-na-sukhozhylliakh", "Реабілітація після операцій на сухожиллях", "Відновлення сили та рухливості після втручань на сухожиллях."),
		program("rehab-ortho", ORTHO_ROUTE, "pislia-travm-suhlobiv", "Реабілітація після травм суглобів", "Робота з болем, набряком і обмеженням руху."),
		program("rehab-ortho", ORTHO_ROUTE, "pislia-ortopedychnykh-operatsii", "Реабілітація після ортопедичних операцій", "Індивідуальний план відновлення після планових операцій.")
	]
};
var VERT_ROUTE = "/reabilitatsiia/vertebrolohichna";
var vertRehab = {
	id: "rehab-vert",
	slug: "vertebrolohichna",
	parentId: "rehab",
	type: "direction",
	title: "Вертебрологічна реабілітація",
	eyebrow: "РЕАБІЛІТАЦІЯ",
	route: VERT_ROUTE,
	shortDescription: "Робота з болем у спині та шиї, поставою і станом після операцій на хребті.",
	duration: "10–21 день",
	priceLabel: "Вартість уточнюється",
	image: service_rehab_default,
	published: true,
	...rehabDefaults,
	children: [
		program("rehab-vert", VERT_ROUTE, "bil-u-spyni", "Реабілітація при болю у спині", "Зменшення болю та повернення до звичного рівня активності."),
		program("rehab-vert", VERT_ROUTE, "bil-u-shyi", "Реабілітація при болю у шиї", "Робота з м’язовим напруженням та рухливістю шийного відділу."),
		program("rehab-vert", VERT_ROUTE, "protruzii", "Реабілітація при протрузіях", "Безпечні вправи та контроль навантаження на хребет."),
		program("rehab-vert", VERT_ROUTE, "hryzhi-dyskiv", "Реабілітація при грижах міжхребцевих дисків", "Індивідуальна програма з урахуванням симптомів."),
		program("rehab-vert", VERT_ROUTE, "porushennia-postavy", "Реабілітація при порушеннях постави", "Корекція постави та зміцнення м’язового корсета."),
		program("rehab-vert", VERT_ROUTE, "pislia-operatsii-na-khrebti", "Реабілітація після операцій на хребті", "Поетапне відновлення після хірургічного лікування.")
	]
};
var simpleRehabDirection = (slug, title, shortDescription, priceLabel = "від 1 600 грн / день") => ({
	id: `rehab-${slug}`,
	slug,
	parentId: "rehab",
	type: "direction",
	title,
	eyebrow: "РЕАБІЛІТАЦІЯ",
	route: `/reabilitatsiia/${slug}`,
	shortDescription,
	duration: "Визначається лікарем",
	priceLabel,
	image: service_rehab_default,
	published: true,
	...rehabDefaults,
	children: []
});
var rehab$2 = {
	id: "rehab",
	slug: "reabilitatsiia",
	parentId: "services",
	type: "category",
	title: "Реабілітація",
	eyebrow: "ПОСЛУГИ ОСНОВИ",
	route: "/reabilitatsiia",
	shortDescription: "Програми відновлення після захворювань, травм і операцій під наглядом лікарів та фізичних терапевтів.",
	image: service_rehab_default,
	published: true,
	featured: true,
	faq: REHAB_FAQ,
	children: [
		cardioRehab,
		orthoRehab,
		vertRehab,
		simpleRehabDirection("nevrolohichna", "Неврологічна реабілітація", "Відновлення рухів, координації та повсякденних навичок після неврологічних станів.", "2 400 грн / день"),
		simpleRehabDirection("revmatolohichna", "Ревматологічна реабілітація", "Підтримка рухливості суглобів і функціональності при ревматологічних захворюваннях.", "1 700 грн / день"),
		simpleRehabDirection("psykholohichna", "Психологічна реабілітація", "Психологічний супровід під час відновлення та адаптації до змін.", "1 200 грн / сеанс"),
		simpleRehabDirection("profilaktychna", "Профілактична реабілітація", "Програми для збереження здоров’я, рухливості та витривалості.", "1 400 грн / день")
	]
};
var CARDIO_DIAG_ROUTE = "/diagnostyka/kardiodiahnostyka";
var cardioDiag = {
	id: "diag-cardio",
	slug: "kardiodiahnostyka",
	parentId: "diag",
	type: "direction",
	title: "Кардіодіагностика",
	eyebrow: "ДІАГНОСТИКА",
	route: CARDIO_DIAG_ROUTE,
	shortDescription: "Комплексна оцінка роботи серця, ритму, тиску та переносимості фізичних навантажень.",
	duration: "від 15 хв",
	priceLabel: "від 600 грн",
	priceFrom: 600,
	image: cpet_test_default,
	published: true,
	featured: true,
	customPage: "cardio-diagnostics",
	seoTitle: "Кардіологічна діагностика — OSNOVA Реабілітація, Буковель",
	seoDescription: "Комплексна оцінка роботи серця: ЕКГ, Холтер, ДМАТ, кардіопульмональний тест, спірографія. Медичний висновок і персональні рекомендації.",
	faq: BASE_FAQ,
	children: [
		method("diag-cardio", CARDIO_DIAG_ROUTE, "ekg", "ЕКГ", "Базова оцінка електричної активності серця, ритму та провідності.", "15 хв", "600 грн"),
		method("diag-cardio", CARDIO_DIAG_ROUTE, "kholter-ekg", "Холтер ЕКГ", "Добове моніторування серцевого ритму в умовах звичайної активності.", "1 доба", "1200 грн"),
		method("diag-cardio", CARDIO_DIAG_ROUTE, "dmat", "ДМАТ", "Добове моніторування артеріального тиску вдень і вночі.", "1 доба", "600 грн"),
		method("diag-cardio", CARDIO_DIAG_ROUTE, "ekhokardiohrafiia", "Ехокардіографія", "Ультразвукова оцінка структури та роботи серця.", "30 хв", "800 грн"),
		method("diag-cardio", CARDIO_DIAG_ROUTE, "veloerhometriia", "Велоергометрія", "Навантажувальний тест на велоергометрі під контролем лікаря.", "60 хв", "1200 грн", ergometer_default),
		method("diag-cardio", CARDIO_DIAG_ROUTE, "tredmil-test", "Тредміл-тест", "Навантажувальний тест на біговій доріжці.", "60 хв", "1200 грн", ergometer_default),
		method("diag-cardio", CARDIO_DIAG_ROUTE, "cpet", "Кардіопульмональний тест CPET", "Оцінка роботи серця, легень і витривалості під навантаженням.", "90 хв", "2000 грн", cpet_test_default),
		method("diag-cardio", CARDIO_DIAG_ROUTE, "spirohrafiia", "Спірографія", "Оцінка функції дихання та стану серцево-легеневої системи.", "20 хв", "500 грн"),
		method("diag-cardio", CARDIO_DIAG_ROUTE, "shestykhvylynnyi-test", "Тест із шестихвилинною ходьбою", "Проста оцінка переносимості навантаження та витривалості.", "20 хв", "400 грн")
	]
};
var MSK_ROUTE = "/diagnostyka/oporno-rukhovoho-aparatu";
var diag$2 = {
	id: "diag",
	slug: "diagnostyka",
	parentId: "services",
	type: "category",
	title: "Діагностика",
	eyebrow: "ПОСЛУГИ ОСНОВИ",
	route: "/diagnostyka",
	shortDescription: "Функціональні, інструментальні та лабораторні дослідження для точної оцінки стану здоров’я.",
	image: ecg_review_default,
	published: true,
	featured: true,
	faq: BASE_FAQ,
	children: [
		cardioDiag,
		{
			id: "diag-msk",
			slug: "oporno-rukhovoho-aparatu",
			parentId: "diag",
			type: "direction",
			title: "Діагностика опорно-рухового апарату",
			eyebrow: "ДІАГНОСТИКА",
			route: MSK_ROUTE,
			shortDescription: "Оцінка ходьби, м’язової роботи та стану хребта перед програмою відновлення.",
			duration: "від 30 хв",
			priceLabel: "від 900 грн",
			image: service_rehab_default,
			published: true,
			faq: BASE_FAQ,
			children: [
				method("diag-msk", MSK_ROUTE, "laboratoriia-khodby", "Лабораторія ходьби", "Апаратний аналіз ходи, кроку та розподілу навантаження.", "45 хв", "1500 грн", service_rehab_default),
				method("diag-msk", MSK_ROUTE, "neiromiazove-testuvannia", "Нейром’язове тестування", "Оцінка сили та роботи м’язових груп.", "40 хв", "1200 грн", service_rehab_default),
				method("diag-msk", MSK_ROUTE, "diahnostyka-khrebta", "Діагностика хребта", "Оцінка постави, рухливості та функції відділів хребта.", "30 хв", "900 грн", service_rehab_default)
			]
		},
		{
			id: "diag-lab",
			slug: "laboratorna",
			parentId: "diag",
			type: "direction",
			title: "Лабораторна діагностика",
			eyebrow: "ДІАГНОСТИКА",
			route: "/diagnostyka/laboratorna",
			shortDescription: "Аналізи та лабораторні панелі для оцінки стану організму й контролю динаміки.",
			duration: "від 1 дня",
			priceLabel: "від 450 грн",
			image: service_checkup_default,
			published: true,
			faq: BASE_FAQ,
			children: []
		}
	]
};
var edc = {
	id: "edc",
	slug: "yedynyi-diahnostychnyi-tsentr",
	parentId: "diag",
	type: "direction",
	title: "Єдиний діагностичний центр",
	eyebrow: "ДІАГНОСТИКА",
	route: "/yedynyi-diahnostychnyi-tsentr",
	shortDescription: "Діагностичний хаб: встановлення Холтера ЕКГ і ДМАТ, передавання даних, розшифровка та повернення висновку лікарю.",
	fullDescription: "Пацієнту встановлюють Холтер ЕКГ або ДМАТ. Дані передаються до діагностичного центру, лікар функціональної діагностики проводить розшифровку, а готовий висновок повертається лікарю, який веде пацієнта.",
	duration: "1–2 доби",
	priceLabel: "від 1 200 грн",
	image: ecg_review_default,
	published: true,
	stages: [
		"Встановлення Холтера ЕКГ або ДМАТ пацієнту",
		"Передавання даних до діагностичного центру",
		"Розшифровка лікарем функціональної діагностики",
		"Повернення готового висновку лікарю, який веде пацієнта"
	],
	methods: [
		"Холтер ЕКГ",
		"ДМАТ",
		"Передавання даних",
		"Розшифровка досліджень"
	],
	faq: BASE_FAQ,
	children: []
};
var checkupBase = {
	formats: ["Амбулаторно", "За один або два дні"],
	included: [
		"Огляди профільних спеціалістів",
		"Інструментальні дослідження",
		"Лабораторна діагностика",
		"Підсумковий медичний висновок"
	],
	stages: [
		"Запис і підготовка до обстеження",
		"Проходження досліджень за програмою",
		"Огляд лікаря та формування висновку",
		"Рекомендації щодо подальших дій"
	],
	results: [
		"Об’єктивна картина стану здоров’я",
		"Виявлення відхилень на ранньому етапі",
		"Персональні рекомендації щодо профілактики"
	],
	faq: BASE_FAQ
};
var checkupItem = (slug, title, shortDescription, priceLabel = "від 4 500 грн") => ({
	id: `checkup-${slug}`,
	slug,
	parentId: "checkup",
	type: "checkup",
	title,
	eyebrow: "ЧЕК-АПИ ЗДОРОВ’Я",
	route: `/check-up/${slug}`,
	shortDescription,
	duration: "1–2 дні",
	priceLabel,
	image: service_checkup_default,
	published: true,
	...checkupBase
});
var checkup$1 = {
	id: "checkup",
	slug: "check-up",
	parentId: "services",
	type: "category",
	title: "Чек-апи здоров’я",
	eyebrow: "ПОСЛУГИ ОСНОВИ",
	route: "/check-up",
	shortDescription: "Комплексні програми обстеження з фіксованим складом досліджень і підсумковим висновком лікаря.",
	image: service_checkup_default,
	published: true,
	featured: true,
	faq: BASE_FAQ,
	children: [
		checkupItem("kardiolohichnyi", "Кардіологічний чек-ап", "Комплексна оцінка роботи серця та судин.", "4 500 грн"),
		checkupItem("ortopedo-travmatolohichnyi", "Ортопедо-травматологічний чек-ап", "Оцінка стану суглобів, хребта та наслідків травм.", "4 800 грн"),
		checkupItem("sportyvnyi", "Спортивний чек-ап", "Оцінка функціонального стану та переносимості навантажень.", "5 200 грн"),
		checkupItem("zdorovia-kistok-ta-suhlobiv", "Чек-ап «Здоров’я кісток та суглобів»", "Обстеження стану кісткової тканини та суглобів.", "3 900 грн"),
		checkupItem("55-plus", "Чек-ап 55+", "Програма обстеження для людей старшого віку.", "5 500 грн")
	]
};
var recoveryItem = (slug, title, shortDescription, priceLabel = "600 грн / сеанс") => ({
	id: `recovery-${slug}`,
	slug,
	parentId: "recovery",
	type: "service",
	title,
	eyebrow: "ВІДНОВЛЕННЯ ТА ФІЗИЧНА АКТИВНІСТЬ",
	route: `/vidnovlennia/${slug}`,
	shortDescription,
	duration: "від 30 хв",
	priceLabel,
	image: service_sports_default,
	published: true,
	formats: ["Разові заняття", "Курс занять"],
	included: [
		"Заняття або процедура зі спеціалістом",
		"Контроль самопочуття",
		"Рекомендації після курсу"
	],
	results: ["Покращення самопочуття та рухливості", "Підтримка результатів реабілітації"],
	faq: BASE_FAQ
});
var recovery$2 = {
	id: "recovery",
	slug: "vidnovlennia",
	parentId: "services",
	type: "category",
	title: "Відновлення та фізична активність",
	eyebrow: "ПОСЛУГИ ОСНОВИ",
	route: "/vidnovlennia",
	shortDescription: "Процедури, заняття та тренування для підтримки рухливості, сили й загального самопочуття.",
	image: service_sports_default,
	published: true,
	featured: true,
	faq: BASE_FAQ,
	children: [
		recoveryItem("fizioterapiia", "Фізіотерапія", "Апаратні процедури для зменшення болю та відновлення тканин.", "500 грн / сеанс"),
		recoveryItem("hidrokinezioterapiia", "Гідрокінезіотерапія", "Лікувальні вправи у воді з мінімальним навантаженням на суглоби.", "800 грн / сеанс"),
		recoveryItem("likuvalnyi-basein", "Лікувальний басейн", "Заняття у басейні під наглядом спеціаліста.", "600 грн / сеанс"),
		recoveryItem("likuvalnyi-masazh", "Лікувальний масаж", "Робота з м’язовим напруженням і больовими зонами.", "900 грн / сеанс"),
		recoveryItem("pilates", "Пілатес", "Контрольовані вправи для сили, балансу та постави.", "500 грн / сеанс"),
		recoveryItem("hur", "Тренування на обладнанні HUR", "Силові тренування з точним дозуванням навантаження.", "700 грн / сеанс"),
		recoveryItem("funktsionalne-trenuvannia", "Функціональне тренування", "Вправи для повсякденних рухів і витривалості.", "600 грн / сеанс"),
		recoveryItem("fitnes-zal", "Фітнес-зал", "Самостійні або супроводжувані тренування у залі.", "400 грн / день"),
		recoveryItem("balneolohiia", "Бальнеологія", "Водні та бальнеологічні процедури.", "750 грн / процедура"),
		recoveryItem("spa", "SPA та релакс", "Процедури для відновлення після навантажень.", "1 200 грн / сеанс")
	]
};
var mobileRehab = {
	id: "mobile-rehab",
	slug: "vyizna-reabilitatsiia",
	parentId: "services",
	type: "category",
	title: "Виїзна реабілітація",
	eyebrow: "ПОСЛУГИ ОСНОВИ",
	route: "/vyizna-reabilitatsiia",
	shortDescription: "Реабілітаційна команда приїжджає до пацієнта додому, у готель або за місцем перебування.",
	fullDescription: "Виїзна реабілітація OSNOVA — це індивідуальна програма відновлення за місцем перебування пацієнта. Фахівці оцінюють стан, підбирають безпечні навантаження, проводять заняття та допомагають продовжити відновлення поза центром.",
	duration: "За програмою",
	priceLabel: "від 1 500 грн",
	image: service_rehab_default,
	published: true,
	featured: true,
	customPage: "mobile-rehab",
	seoTitle: "Виїзна реабілітація — OSNOVA Реабілітація",
	seoDescription: "Виїзна реабілітація вдома, у готелі або за місцем перебування пацієнта: консультація, заняття з фізичним терапевтом, курс з обладнанням.",
	...rehabDefaults,
	formats: [
		"Реабілітація вдома",
		"Виїзд спеціаліста",
		"Виїзд з обладнанням"
	],
	indications: [
		"Складно або небезпечно регулярно приїжджати до центру",
		"Потрібне продовження програми після стаціонарної чи амбулаторної реабілітації",
		"Після травм, операцій, інсульту або тривалої іммобілізації",
		"Потрібна оцінка побутових навичок і безпечного пересування вдома"
	],
	included: [
		"Уточнення стану та аналіз медичних документів",
		"Первинна функціональна оцінка пацієнта",
		"Індивідуальна програма занять за місцем перебування",
		"Контроль самопочуття та корекція навантажень",
		"Рекомендації для самостійного продовження програми"
	],
	results: [
		"Безпечне відновлення без зайвої дороги до центру",
		"Поступове повернення рухливості, сили та витривалості",
		"Зрозумілий план домашніх вправ і щоденної активності",
		"Підтримка пацієнта та родини під час відновлення"
	],
	faq: [
		...BASE_FAQ,
		{
			question: "Куди може приїхати спеціаліст?",
			answer: "Формат погоджується індивідуально: це може бути дім, готель або інше місце перебування пацієнта, якщо умови дозволяють безпечно провести заняття."
		},
		{
			question: "Чи можна замовити виїзд з обладнанням?",
			answer: "Так. За потреби команда підбирає портативне обладнання для занять, але склад обладнання залежить від стану пацієнта та цілей програми."
		}
	],
	children: [
		{
			id: "mobile-rehab--vdoma",
			slug: "vdoma",
			parentId: "mobile-rehab",
			type: "service",
			title: "Реабілітація вдома",
			route: "/vyizna-reabilitatsiia/vdoma",
			shortDescription: "Курс занять і процедур за місцем перебування пацієнта.",
			duration: "За програмою",
			priceLabel: "від 2 500 грн / день",
			image: service_rehab_default,
			published: true,
			...rehabDefaults
		},
		{
			id: "mobile-rehab--vyizd-spetsialista",
			slug: "vyizd-spetsialista",
			parentId: "mobile-rehab",
			type: "service",
			title: "Виїзд спеціаліста",
			route: "/vyizna-reabilitatsiia/vyizd-spetsialista",
			shortDescription: "Окремі заняття з фізичним терапевтом або консультація лікаря вдома.",
			duration: "60 хв",
			priceLabel: "1 500 грн / візит",
			image: service_rehab_default,
			published: true,
			...rehabDefaults
		},
		{
			id: "mobile-rehab--z-obladnanniam",
			slug: "z-obladnanniam",
			parentId: "mobile-rehab",
			type: "service",
			title: "Виїзд з обладнанням",
			route: "/vyizna-reabilitatsiia/z-obladnanniam",
			shortDescription: "Заняття вдома з використанням реабілітаційного обладнання центру.",
			duration: "За програмою",
			priceLabel: "3 000 грн / день",
			image: service_rehab_default,
			published: true,
			...rehabDefaults
		}
	]
};
var rental = {
	id: "rental",
	slug: "orenda-obladnannia",
	parentId: "services",
	type: "category",
	title: "Оренда реабілітаційного обладнання",
	eyebrow: "ПОСЛУГИ ОСНОВИ",
	route: "/orenda-obladnannia",
	shortDescription: "Реабілітаційне обладнання в оренду для продовження занять удома.",
	priceLabel: "від 800 грн / доба",
	image: service_rehab_default,
	published: true,
	customPage: "rental-equipment",
	faq: BASE_FAQ,
	children: [{
		id: "rental--mekhanoterapiia",
		slug: "aktyvna-pasyvna-mekhanoterapiia",
		parentId: "rental",
		type: "service",
		title: "Апарат активної та пасивної механотерапії",
		route: "/orenda-obladnannia/aktyvna-pasyvna-mekhanoterapiia",
		shortDescription: "Апарат для розробки суглобів в активному та пасивному режимах.",
		duration: "Від тижня",
		priceLabel: "800 грн / доба",
		image: service_rehab_default,
		published: true,
		faq: BASE_FAQ
	}]
};
var education$1 = {
	id: "education",
	slug: "navchannia",
	type: "section",
	title: "Навчання",
	eyebrow: "ОСНОВА",
	route: "/navchannia",
	shortDescription: "Курси та конференції для лікарів, фізичних терапевтів і суміжних спеціалістів.",
	image: service_sports_default,
	published: true,
	faq: BASE_FAQ,
	children: [{
		id: "courses",
		slug: "kursy",
		parentId: "education",
		type: "category",
		title: "Курси",
		eyebrow: "НАВЧАННЯ",
		route: "/kursy",
		shortDescription: "Практичні курси для спеціалістів у сфері реабілітації та відновлення.",
		image: service_sports_default,
		published: true,
		faq: BASE_FAQ,
		children: []
	}, {
		id: "conferences",
		slug: "konferentsii",
		parentId: "education",
		type: "category",
		title: "Конференції",
		eyebrow: "НАВЧАННЯ",
		route: "/konferentsii",
		shortDescription: "Фахові події для обміну досвідом між спеціалістами.",
		image: service_checkup_default,
		published: true,
		faq: BASE_FAQ,
		children: []
	}]
};
var events = {
	id: "events",
	slug: "iventy",
	type: "page",
	title: "Івенти",
	eyebrow: "ОСНОВА",
	route: "/iventy",
	shortDescription: "Відкриті тренування, лекції, практичні зустрічі та дні діагностики у фітнес-залі або медичному центрі.",
	image: service_sports_default,
	published: true,
	methods: [
		"Події у фітнес-залі",
		"Лекції та консультаційні зустрічі",
		"Дні діагностики",
		"Формати для партнерів і груп"
	],
	faq: BASE_FAQ
};
var partnership$1 = {
	id: "partnership",
	slug: "partnerstvo",
	type: "section",
	title: "Партнерство",
	eyebrow: "ОСНОВА",
	route: "/partnerstvo",
	shortDescription: "Співпраця з лікарями, організаціями та науковими установами.",
	image: ecg_review_default,
	published: true,
	faq: BASE_FAQ,
	children: [
		{
			id: "partnership-doctors",
			slug: "likariam",
			parentId: "partnership",
			type: "page",
			title: "Співпраця з лікарями",
			eyebrow: "ПАРТНЕРСТВО",
			route: "/partnerstvo/likariam",
			shortDescription: "Направлення пацієнтів на діагностику, реабілітацію та контрольоване відновлення зі зворотним зв'язком для лікаря.",
			image: ecg_review_default,
			published: true,
			seoTitle: "Співпраця для лікарів — ОСНОВА Реабілітація",
			seoDescription: "ОСНОВА Реабілітація співпрацює з лікарями: направлення пацієнтів, діагностика, реабілітація, спільне ведення, висновки та рекомендації.",
			methods: [
				"Кардіологи",
				"Ортопеди",
				"Травматологи",
				"Вертебрологи",
				"Інші спеціалісти"
			],
			stages: [
				"Лікар звертається до центру та передає медичну документацію",
				"Пацієнт проходить первинну оцінку в ОСНОВІ",
				"Формується програма реабілітації",
				"Лікар отримує проміжні та підсумкові результати"
			],
			faq: [
				{
					question: "Як лікар може направити пацієнта в ОСНОВУ?",
					answer: "Зв'яжіться з координатором центру телефоном або через форму контактів. Бажано передати клінічний запит, виписку, результати обстежень і коротку мету направлення."
				},
				{
					question: "Чи отримує лікар підсумковий висновок?",
					answer: "Так. Після діагностики або реабілітаційної програми ми формуємо висновок із результатами, динамікою та рекомендаціями для подальшого ведення пацієнта."
				},
				{
					question: "Чи можна узгодити програму з лікарем, який веде пацієнта?",
					answer: "Так. За потреби команда ОСНОВИ може уточнити клінічні деталі, цілі програми та обмеження, щоб реабілітація відповідала загальній тактиці лікування."
				},
				{
					question: "З якими спеціалістами співпрацює центр?",
					answer: "Ми співпрацюємо з кардіологами, ортопедами, травматологами, неврологами, ревматологами, сімейними лікарями, спортивними лікарями та іншими фахівцями."
				}
			]
		},
		{
			id: "partnership-org",
			slug: "orhanizatsiiam",
			parentId: "partnership",
			type: "page",
			title: "Співпраця з організаціями",
			eyebrow: "ПАРТНЕРСТВО",
			route: "/partnerstvo/orhanizatsiiam",
			shortDescription: "Програми для медичних закладів, компаній і спортивних організацій.",
			image: service_checkup_default,
			published: true,
			methods: [
				"Медичні заклади",
				"Компанії",
				"Спортивні організації",
				"Інші партнери"
			],
			faq: BASE_FAQ
		},
		{
			id: "partnership-science",
			slug: "naukove",
			parentId: "partnership",
			type: "page",
			title: "Співпраця для інститутів",
			eyebrow: "ПАРТНЕРСТВО",
			route: "/partnerstvo/naukove",
			shortDescription: "Клінічна, освітня та наукова база для медичних університетів, наукових інститутів, профільних кафедр і дослідницьких команд.",
			image: service_sports_default,
			published: true,
			customPage: "institute-partnership",
			seoTitle: "Співпраця для інститутів — ОСНОВА Реабілітація",
			seoDescription: "ОСНОВА Реабілітація співпрацює з медичними університетами, науковими інститутами та кафедрами: клінічна база, навчання, стажування, дослідження, протоколи.",
			methods: [
				"Клінічна база",
				"Практичні навчальні модулі",
				"Наукові дослідження",
				"Стажування команд",
				"Конференції та події"
			],
			faq: [
				{
					question: "Які інституції можуть звернутися щодо співпраці?",
					answer: "Ми відкриті до співпраці з медичними університетами, науковими інститутами, профільними кафедрами, асоціаціями та освітніми центрами."
				},
				{
					question: "Чи можна організувати практику для студентів або інтернів?",
					answer: "Так. Формат, кількість учасників, тривалість і клінічні модулі узгоджуються індивідуально після знайомства з цілями навчальної програми."
				},
				{
					question: "Чи підтримує ОСНОВА спільні дослідження?",
					answer: "Так. Ми розглядаємо дослідницькі проєкти, пов’язані з реабілітацією, функціональним тестуванням, профілактикою та спортивною медициною."
				}
			]
		},
		edc
	]
};
var about$1 = {
	id: "about",
	slug: "pro-osnovu",
	type: "section",
	title: "Про ОСНОВУ",
	eyebrow: "ОСНОВА",
	route: "/pro-osnovu",
	shortDescription: "Медична оцінка, функціональна діагностика та персональна програма відновлення в одному центрі у Буковелі.",
	image: service_rehab_default,
	published: true,
	seoTitle: "Про ОСНОВУ — медичний центр відновлення в Буковелі",
	seoDescription: "Як працює ОСНОВА Реабілітація: оцінка стану, персональна програма, командний супровід, контроль динаміки та подальші рекомендації.",
	faq: BASE_FAQ,
	children: [
		{
			id: "infrastructure",
			slug: "infrastruktura",
			parentId: "about",
			type: "page",
			title: "Інфраструктура",
			eyebrow: "ПРО ОСНОВУ",
			route: "/infrastruktura",
			shortDescription: "Простір центру: зали, палати, басейн, медичні та тренувальні зони.",
			image: service_sports_default,
			published: true,
			methods: [
				"Реабілітаційний зал",
				"Палати",
				"Реанімація",
				"Операційний блок",
				"Басейн",
				"Фітнес-зал",
				"Швидка медична допомога"
			],
			faq: BASE_FAQ
		},
		{
			id: "team",
			slug: "komanda",
			parentId: "about",
			type: "category",
			title: "Команда",
			eyebrow: "ПРО ОСНОВУ",
			route: "/komanda",
			shortDescription: "Лікарі, фізичні терапевти та спеціалісти центру.",
			image: ecg_review_default,
			published: true,
			children: []
		},
		{
			id: "social",
			slug: "sotsialni-proiekty",
			parentId: "about",
			type: "category",
			title: "Соціальні проєкти",
			eyebrow: "ПРО ОСНОВУ",
			route: "/sotsialni-proiekty",
			shortDescription: "Соціальний проєкт «Повернись до руху»: реабілітаційна підтримка для людей після травм, поранень і операцій.",
			image: service_rehab_default,
			published: true,
			seoTitle: "Соціальний проєкт «Повернись до руху» — ОСНОВА Реабілітація",
			seoDescription: "Соціальний проєкт ОСНОВИ для людей після травм, поранень і операцій: медичний відбір, індивідуальна реабілітація та партнерська підтримка курсу.",
			children: []
		}
	]
};
var legalPage = (slug, title, body) => ({
	id: `legal-${slug}`,
	slug,
	type: "page",
	title,
	eyebrow: "ДОКУМЕНТИ",
	route: `/${slug}`,
	shortDescription: title,
	published: true,
	customPage: "legal",
	legalBody: body
});
var systemPages = [
	{
		id: "faq",
		slug: "faq",
		type: "page",
		title: "Питання та відповіді",
		eyebrow: "ДОВІДКА",
		route: "/faq",
		shortDescription: "Відповіді на поширені питання про послуги, документи, оплату та запис.",
		published: true,
		customPage: "faq"
	},
	{
		id: "contacts",
		slug: "kontakty",
		type: "page",
		title: "Контакти",
		eyebrow: "ОСНОВА",
		route: "/kontakty",
		shortDescription: "Адреса, телефони, графік роботи та форма звернення.",
		published: true,
		customPage: "contacts"
	},
	{
		id: "success",
		slug: "success",
		type: "page",
		title: "Заявку надіслано",
		eyebrow: "ДЯКУЄМО",
		route: "/success",
		shortDescription: "Ми отримали вашу заявку.",
		published: true,
		customPage: "success"
	},
	legalPage("polityka-konfidentsiinosti", "Політика конфіденційності", [
		"Ми обробляємо персональні дані лише для запису на послуги, консультування та зворотного зв’язку.",
		"Дані не передаються третім особам без згоди, окрім випадків, передбачених законодавством України.",
		"Ви можете звернутися до нас, щоб отримати інформацію про свої дані, змінити їх або відкликати згоду на обробку."
	]),
	legalPage("cookies", "Політика cookies", ["Сайт використовує файли cookies для коректної роботи інтерфейсу та аналізу відвідуваності.", "Ви можете вимкнути cookies у налаштуваннях браузера — частина функцій сайту може працювати обмежено."]),
	legalPage("zhoda-na-obrobku-danykh", "Згода на обробку персональних даних", ["Надсилаючи форму на сайті, ви надаєте згоду на обробку зазначених вами персональних даних.", "Згоду можна відкликати у будь-який момент, звернувшись за контактами, вказаними на сторінці «Контакти»."])
];
var siteTree = [
	{
		id: "services",
		slug: "poslugy",
		type: "section",
		title: "Послуги",
		eyebrow: "ПОСЛУГИ ОСНОВИ",
		route: "/poslugy",
		shortDescription: "Повний перелік напрямів центру: реабілітація, діагностика, чек-апи, відновлення та фізична активність.",
		published: true,
		customPage: "all-services",
		children: [
			rehab$2,
			diag$2,
			checkup$1,
			recovery$2,
			mobileRehab,
			rental
		]
	},
	education$1,
	events,
	partnership$1,
	about$1,
	...systemPages
];
var CONTACTS = {
	phone: "+380 674 702 788",
	phoneHref: "tel:+380674702788",
	email: "info@osnova-rehab.com.ua",
	emailHref: "mailto:info@osnova-rehab.com.ua",
	address: "ТРК Буковель, Україна",
	addressFull: "Івано-Франківська обл., с. Поляниця, ТРК Буковель",
	workingHours: "Тренажерний зал: 07:00 – 21:00 | Реабілітаційне відділення: 09:00 – 19:00",
	gymHours: "07:00 – 21:00",
	rehabHours: "09:00 – 19:00",
	schedules: [{
		title: "Тренажерний зал",
		hours: "07:00 – 21:00",
		days: "Щодня (Пн–Нд)",
		tag: "Спорт та фітнес"
	}, {
		title: "Реабілітаційне відділення",
		hours: "09:00 – 19:00",
		days: "Щодня (Пн–Нд)",
		tag: "Медичні послуги"
	}],
	messengers: {
		telegram: "https://t.me/osnova_rehab",
		telegramHandle: "@osnova_rehab",
		whatsapp: "https://wa.me/380674702788",
		viber: "viber://chat?number=%2B380674702788"
	},
	socials: {
		instagram: "https://instagram.com/osnova_rehab",
		facebook: "https://facebook.com/osnova.rehab",
		youtube: "https://youtube.com/@osnova_rehab",
		tiktok: "https://tiktok.com/@osnova_rehab"
	}
};
var DropdownMenu = DropdownMenu$1;
var DropdownMenuTrigger = DropdownMenuTrigger$1;
var DropdownMenuRadioGroup = DropdownMenuRadioGroup$1;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubTrigger$1, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = DropdownMenuSubTrigger$1.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubContent$1, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = DropdownMenuSubContent$1.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent$1, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = DropdownMenuContent$1.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = DropdownMenuItem$1.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuCheckboxItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = DropdownMenuCheckboxItem$1.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuRadioItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = DropdownMenuRadioItem$1.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = DropdownMenuLabel$1.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = DropdownMenuSeparator$1.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var services$1 = siteTree.find((n) => n.id === "services");
var rehab$1 = services$1.children.find((n) => n.id === "rehab");
var diag$1 = services$1.children.find((n) => n.id === "diag");
var checkup = services$1.children.find((n) => n.id === "checkup");
var recovery$1 = services$1.children.find((n) => n.id === "recovery");
var fitnesZal = recovery$1.children.find((n) => n.slug === "fitnes-zal");
var HEADER_NAV = [
	{
		label: "ГОЛОВНА",
		to: "/"
	},
	{
		label: "РЕАБІЛІТАЦІЯ",
		to: rehab$1.route,
		children: rehab$1.children
	},
	{
		label: "ДІАГНОСТИКА",
		to: diag$1.route,
		children: diag$1.children
	},
	{
		label: "ЧЕКАПИ",
		to: checkup.route,
		children: checkup.children
	},
	{
		label: "СПОРТИВНА МЕДИЦИНА",
		to: recovery$1.route,
		children: recovery$1.children
	},
	{
		label: "ФІТНЕС ТА ТРЕНАЖЕРНИЙ ЗАЛ",
		to: fitnesZal.route
	},
	{
		label: "ЦІНИ ТА ПОСЛУГИ",
		to: services$1.route
	},
	{
		label: "КОНТАКТИ",
		to: "/kontakty"
	}
];
var SOCIALS$1 = [
	Instagram,
	Music2,
	Youtube,
	Facebook
];
var LANGS = [
	{
		value: "uk",
		shortLabel: "УКР",
		label: "Українська"
	},
	{
		value: "ru",
		shortLabel: "RU",
		label: "Русский"
	},
	{
		value: "en",
		shortLabel: "EN",
		label: "English"
	}
];
function LanguageSelect({ value, onValueChange, className, tone = "dark" }) {
	const currentLang = LANGS.find((lang) => lang.value === value) ?? LANGS[0];
	const isDark = tone === "dark";
	const handleValueChange = (nextValue) => {
		const nextLang = LANGS.find((lang) => lang.value === nextValue);
		if (nextLang) onValueChange(nextLang.value);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-label": `Вибір мови: ${currentLang.label}`,
			className: cn("inline-flex h-9 min-w-[96px] items-center justify-between gap-1.5 rounded-md px-3 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-1", isDark ? "border border-background/40 bg-transparent text-background hover:bg-background/10 focus-visible:ring-background/35" : "border border-navy/20 bg-secondary/60 text-navy hover:bg-secondary focus-visible:ring-primary/35", className),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "size-4 opacity-85" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentLang.shortLabel }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5 opacity-80" })
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
		align: isDark ? "end" : "center",
		side: "bottom",
		sideOffset: 8,
		className: cn("z-[60] min-w-[154px] rounded-lg p-1.5 shadow-2xl backdrop-blur-none", isDark ? "border-background/15 bg-navy-deep text-background ring-1 ring-background/10" : "border-navy/10 bg-white text-navy ring-1 ring-navy/10"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioGroup, {
			value,
			onValueChange: handleValueChange,
			children: LANGS.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuRadioItem, {
				value: lang.value,
				className: cn("cursor-pointer rounded-md py-2 pl-8 pr-3 text-xs font-semibold", isDark ? "text-background/90 focus:bg-primary/25 focus:text-white data-[state=checked]:text-white" : "text-navy/85 focus:bg-secondary focus:text-navy data-[state=checked]:text-primary"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex w-full items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lang.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] uppercase opacity-60",
						children: lang.shortLabel
					})]
				})
			}, lang.value))
		})
	})] });
}
function DesktopNavItem({ item }) {
	const [isOpen, setIsOpen] = import_react.useState(false);
	const [activeChildId, setActiveChildId] = import_react.useState(null);
	const timeoutRef = import_react.useRef(null);
	const handleMouseEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setIsOpen(true);
	};
	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setIsOpen(false);
			setActiveChildId(null);
		}, 180);
	};
	const activeChild = item.children?.find((c) => c.id === activeChildId);
	const hasLevel2 = activeChild?.children && activeChild.children.length > 0;
	const hasChildren = item.children && item.children.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "relative group py-2",
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
				to: item.to,
				className: "text-[13px] font-medium tracking-[0.06em] text-background/90 transition-colors hover:text-white flex items-center gap-1 py-1",
				activeProps: { className: "text-white font-bold" },
				children: [item.label, hasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" })]
			})
		}), isOpen && hasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex bg-navy-deep/95 backdrop-blur-md border border-border/40 rounded-xl p-2 shadow-2xl min-w-[280px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "w-full space-y-1 min-w-[260px]",
					children: item.children.map((child) => {
						const childHasChildren = child.children && child.children.length > 0;
						const isHovered = activeChildId === child.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "relative",
							onMouseEnter: () => setActiveChildId(child.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
								to: child.route,
								onClick: () => setIsOpen(false),
								className: cn("flex items-center justify-between gap-3 px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-colors text-background/90 hover:text-white hover:bg-primary/25", isHovered && "bg-primary/25 text-white font-bold"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: child.title
								}), childHasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5 shrink-0 opacity-70 text-primary-foreground" })]
							})
						}, child.id);
					})
				}), hasLevel2 && activeChild && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-l border-border/30 pl-2 ml-2 min-w-[300px] max-w-[360px] max-h-[500px] overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 py-2 text-[10px] font-bold tracking-widest text-primary uppercase border-b border-border/30",
						children: activeChild.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-1.5 space-y-1",
						children: activeChild.children.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							to: sub.route,
							onClick: () => setIsOpen(false),
							className: "block px-3 py-2 text-xs font-medium text-background/85 hover:text-white hover:bg-primary/20 rounded-lg transition-colors",
							children: sub.title
						}) }, sub.id))
					})]
				})]
			})
		})]
	});
}
function MobileNavItem({ item, onClose }) {
	const [expanded, setExpanded] = import_react.useState(false);
	const [expandedChildId, setExpandedChildId] = import_react.useState(null);
	const hasChildren = item.children && item.children.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "border-b border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
				to: item.to,
				onClick: onClose,
				className: "font-medium text-navy text-sm hover:text-primary transition-colors",
				activeProps: { className: "text-primary font-bold" },
				children: item.label
			}), hasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setExpanded((v) => !v),
				"aria-label": "Переключити підменю",
				className: "p-1.5 text-navy/70 hover:text-navy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform", expanded && "rotate-180") })
			})]
		}), expanded && hasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "pl-4 pb-3 space-y-2 border-l-2 border-primary/40 ml-2",
			children: item.children.map((child) => {
				const childHasChildren = child.children && child.children.length > 0;
				const isChildExpanded = expandedChildId === child.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
						to: child.route,
						onClick: onClose,
						className: "text-xs font-semibold text-navy/90 hover:text-primary transition-colors",
						children: child.title
					}), childHasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setExpandedChildId((curr) => curr === child.id ? null : child.id),
						className: "p-1 text-navy/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 transition-transform", isChildExpanded && "rotate-180") })
					})]
				}), isChildExpanded && childHasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "pl-3 py-1 space-y-1.5 border-l border-border/60 ml-1",
					children: child.children.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
						to: sub.route,
						onClick: onClose,
						className: "block text-[11px] text-navy/75 hover:text-primary py-1",
						children: sub.title
					}) }, sub.id))
				})] }, child.id);
			})
		})]
	});
}
function SiteHeader() {
	const [menuOpen, setMenuOpen] = import_react.useState(false);
	const [language, setLanguage] = import_react.useState("uk");
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { openModal } = useConsultationModal();
	import_react.useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "w-full relative z-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-navy-deep",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
							to: "/",
							className: "flex flex-col leading-none text-background shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl sm:text-2xl font-bold tracking-[0.22em] sm:tracking-[0.28em]",
								children: "ŎSNOVA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] tracking-[0.35em] sm:tracking-[0.42em] text-background/70",
								children: "РЕАБІЛІТАЦІЯ"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden items-center gap-3 lg:ml-8 lg:flex",
							children: SOCIALS$1.map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-8 items-center justify-center rounded-full border border-background/40 text-background hover:bg-background/10 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 sm:gap-4 lg:gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "hidden items-center gap-2 text-sm font-medium text-background/90 xl:flex",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }),
										" ",
										CONTACTS.address
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: CONTACTS.phoneHref,
									className: "hidden items-center gap-2 text-base font-bold text-background sm:flex hover:text-primary-foreground transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
										" ",
										CONTACTS.phone
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => openModal("Записатися на консультацію"),
									className: "hidden rounded-md bg-brand-green px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide text-brand-green-foreground transition-all hover:bg-brand-green/90 md:inline-block cursor-pointer",
									children: "ЗАПИСАТИСЯ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelect, {
									value: language,
									onValueChange: setLanguage,
									className: "hidden lg:inline-flex"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": menuOpen ? "Закрити меню" : "Відкрити меню",
									"aria-expanded": menuOpen,
									onClick: () => setMenuOpen((v) => !v),
									className: "flex size-9 sm:size-10 items-center justify-center rounded-md border border-background/40 text-background lg:hidden hover:bg-background/10 transition-colors",
									children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden bg-navy lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3 lg:px-10",
					children: HEADER_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopNavItem, { item }, item.label))
				})
			}),
			menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border bg-card shadow-2xl lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mx-auto max-w-[1600px] px-5 py-3 space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "flex justify-end border-b border-border/60 pb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelect, {
								value: language,
								onValueChange: setLanguage,
								tone: "light",
								className: "min-w-[154px]"
							})
						}),
						HEADER_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNavItem, {
							item,
							onClose: () => setMenuOpen(false)
						}, item.label)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "pt-4 pb-2 space-y-3 border-t border-border/60 mt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: CONTACTS.phoneHref,
									className: "flex items-center justify-center gap-2 rounded-xl border border-navy/20 bg-secondary/60 py-3 text-sm font-bold text-navy",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-primary" }),
										" ",
										CONTACTS.phone
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setMenuOpen(false);
										openModal("Записатися на консультацію");
									},
									className: "w-full rounded-xl bg-brand-green px-6 py-3.5 text-center text-sm font-bold text-brand-green-foreground shadow-md cursor-pointer",
									children: "ЗАПИСАТИСЯ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-center gap-2 pt-2 text-xs text-navy/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: CONTACTS.address
									})]
								})
							]
						})
					]
				})
			})
		]
	});
}
var allNodes = (function flatten(nodes) {
	return nodes.flatMap((n) => [n, ...flatten(n.children ?? [])]);
})(siteTree);
var byRoute = new Map(allNodes.map((n) => [n.route, n]));
var byId = new Map(allNodes.map((n) => [n.id, n]));
function getNodeByRoute(route) {
	const clean = route.length > 1 ? route.replace(/\/+$/, "") : route;
	return byRoute.get(clean);
}
function getNodeById(id) {
	return byId.get(id);
}
function getParent(node) {
	return node.parentId ? byId.get(node.parentId) : void 0;
}
function getAncestors(node) {
	const chain = [];
	let current = getParent(node);
	while (current) {
		chain.unshift(current);
		current = getParent(current);
	}
	return chain;
}
function getBreadcrumbs(node) {
	return [
		{
			title: "Головна",
			route: "/"
		},
		...getAncestors(node).map((n) => ({
			title: n.title,
			route: n.route
		})),
		{
			title: node.title,
			route: node.route
		}
	];
}
var services = siteTree.find((n) => n.id === "services");
var rehab = getNodeById("rehab");
var diag = getNodeById("diag");
var recovery = getNodeById("recovery");
var education = siteTree.find((n) => n.id === "education");
var partnership = siteTree.find((n) => n.id === "partnership");
var about = siteTree.find((n) => n.id === "about");
var SOCIALS = [
	{
		Icon: Facebook,
		href: CONTACTS.socials.facebook,
		label: "Facebook"
	},
	{
		Icon: Instagram,
		href: CONTACTS.socials.instagram,
		label: "Instagram"
	},
	{
		Icon: Youtube,
		href: CONTACTS.socials.youtube,
		label: "YouTube"
	},
	{
		Icon: Music2,
		href: CONTACTS.socials.tiktok,
		label: "TikTok"
	}
];
function LinkColumn({ title, items, allRoute, allLabel = "Усі послуги" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "min-h-[2.75rem] text-sm font-bold uppercase leading-snug tracking-[0.08em] text-background",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-px w-full bg-background/15" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-3",
				children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
					to: i.route,
					className: "group flex items-start gap-2 text-sm leading-snug text-background/70 transition-colors hover:text-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "mt-0.5 size-4 shrink-0 text-background/40 transition-colors group-hover:text-primary-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i.title })]
				}) }, i.route))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
				to: allRoute,
				className: "inline-flex items-center gap-2 pt-6 text-sm font-semibold text-background transition-colors hover:text-brand-green",
				children: [allLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		]
	});
}
function SiteFooter() {
	const rehabItems = (rehab?.children ?? []).slice(0, 6).map((c) => ({
		title: c.title,
		route: c.route
	}));
	const diagItems = (diag?.children ?? []).slice(0, 6).map((c) => ({
		title: c.title,
		route: c.route
	}));
	const recoveryItems = (recovery?.children ?? []).slice(0, 6).map((c) => ({
		title: c.title,
		route: c.route
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-navy-deep pt-14 pb-8 sm:pt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.15fr_1fr_1fr_1fr_1.05fr] lg:gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
								to: "/",
								className: "flex flex-col leading-none text-background",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl font-bold tracking-[0.24em] sm:text-2xl sm:tracking-[0.28em]",
									children: "ŎSNOVA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 text-[9px] tracking-[0.35em] text-background/70 sm:text-[10px] sm:tracking-[0.42em]",
									children: "РЕАБІЛІТАЦІЯ"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-px w-full max-w-[15rem] bg-background/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-5 space-y-2 text-sm text-background/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
										to: about.route,
										className: "transition-colors hover:text-background",
										children: about.title
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
										to: education.route,
										className: "transition-colors hover:text-background",
										children: education.title
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
										to: partnership.route,
										className: "transition-colors hover:text-background",
										children: partnership.title
									}) })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex items-center gap-3",
								children: SOCIALS.map(({ Icon, href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									"aria-label": label,
									target: "_blank",
									rel: "noreferrer",
									className: "flex size-9 items-center justify-center rounded-full border border-background/25 text-background transition-colors hover:bg-background/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
								}, label))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkColumn, {
						title: "Реабілітація",
						items: rehabItems,
						allRoute: rehab?.route ?? services.route
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkColumn, {
						title: "Діагностика",
						items: diagItems,
						allRoute: diag?.route ?? services.route
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkColumn, {
						title: "Відновлення та інші послуги",
						items: recoveryItems,
						allRoute: services.route
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col rounded-2xl border border-background/20 bg-background/[0.04] p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold uppercase tracking-[0.08em] text-background",
									children: "Контакти"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-5 space-y-4 text-sm text-background/75",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary-foreground/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CONTACTS.addressFull })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-brand-green" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: CONTACTS.phoneHref,
												className: "font-semibold text-background hover:underline",
												children: CONTACTS.phone
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-primary-foreground/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: CONTACTS.emailHref,
												className: "hover:text-background",
												children: CONTACTS.email
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-4 shrink-0 text-primary-foreground/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"Зал: ",
												CONTACTS.gymHours,
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Реабілітація: ",
												CONTACTS.rehabHours
											] })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: CONTACTS.messengers.telegram,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-5 inline-flex items-center gap-2 text-sm text-background/75 transition-colors hover:text-background",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4 text-primary-foreground/80" }),
										" ",
										CONTACTS.messengers.telegramHandle
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-px w-full bg-background/15" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
									to: "/kontakty",
									className: "mt-auto inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 pt-3 text-xs font-bold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-primary/90",
									children: "Записатися на прийом"
								})
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col gap-4 border-t border-background/15 pt-6 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ОСНОВА Реабілітація. Усі права захищені."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-4 sm:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/sitemap.xml",
							className: "transition-colors hover:text-background",
							children: "Карта сайту"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							to: "/polityka-konfidentsiinosti",
							className: "transition-colors hover:text-background",
							children: "Політика конфіденційності"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							to: "/cookies",
							className: "transition-colors hover:text-background",
							children: "Політика cookies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							to: "/zhoda-na-obrobku-danykh",
							className: "transition-colors hover:text-background",
							children: "Згода на обробку даних"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Нагору",
							onClick: () => window.scrollTo({
								top: 0,
								behavior: "smooth"
							}),
							className: "flex size-8 items-center justify-center rounded-md border border-background/25 text-background transition-colors hover:bg-background/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { service_rehab_default as _, ConsultationModalProvider as a, useConsultationModal as b, SiteHeader as c, ecg_review_default as d, ergometer_default as f, service_checkup_default as g, getNodeByRoute as h, ConsultationForm as i, cn as l, getNodeById as m, CARDIO_REHAB_PROGRAMS as n, IMAGES as o, getBreadcrumbs as p, CONTACTS as r, SiteFooter as s, AppLink as t, cpet_test_default as u, service_sports_default as v, siteTree as y };
