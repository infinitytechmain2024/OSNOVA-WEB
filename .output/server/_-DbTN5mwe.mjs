import { n as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { A as MessageCircle, C as Package, Ct as Building2, E as Navigation, Et as BadgeCheck, G as Handshake, H as Heart, K as HandHeart, L as Layers, M as MapPinned, Mt as Activity, N as MapPin, O as Microscope, P as Mail, Q as FileSearch, S as Percent, Tt as BookOpen, U as HeartPulse, V as House, Y as FlaskConical, Z as FileText, _ as Search, _t as ChevronDown, a as Users, at as Clock, b as Phone, ct as ClipboardList, d as TriangleAlert, f as Stethoscope, ft as CircleCheck, g as Send, gt as ChevronLeft, h as Share2, ht as ChevronRight, i as Wrench, it as CloudUpload, jt as Ambulance, k as MessageSquare, kt as ArrowRight, lt as ClipboardCheck, m as ShieldCheck, mt as ChevronUp, nt as Dumbbell, p as Sparkles, q as GraduationCap, rt as Compass, s as UserRoundCheck, st as ClipboardPenLine, tt as ExternalLink, u as Truck, v as Route, vt as Check, x as PhoneCall, xt as CalendarDays$1, y as Presentation, yt as ChartLine } from "./_libs/lucide-react.mjs";
import { C as getNodeById, D as service_sports_default, E as service_rehab_default, O as siteTree, S as getBreadcrumbs, T as service_checkup_default, _ as SiteHeader, a as ConsultationForm, b as ecg_review_default, c as DialogContent, d as DialogTitle, f as FAQAccordion, g as SiteFooter, h as SectionHeader$1, i as CONTACTS, k as useConsultationModal, l as DialogDescription, m as PageContainer, n as Breadcrumbs, p as IMAGES, r as CARDIO_REHAB_PROGRAMS, s as Dialog, t as AppLink, u as DialogHeader, v as cn, w as getNodeByRoute, x as ergometer_default, y as cpet_test_default } from "./_ssr/blocks-DXP6dtSJ.mjs";
import { t as Route$1 } from "./_-AKpk0fm9.mjs";
import { n as ServiceDetailTemplate, r as getServicePageData, t as OtherServices } from "./_ssr/service-detail-template-CW2_VTDb.mjs";
import { n as education_training_default, t as education_conference_default } from "./_ssr/education-training-D0E3Ecw7.mjs";
import { a as companyOverviewCtaClassName, c as partner_chnu_default, d as partner_karpatska_akademiia_default, f as partner_sytenko_default, i as cardio_rehab_cta_photo_v3_default, l as partner_heart_default, n as FAQConsultationCTA, o as medical_assessment_default, r as balance_reference_card_default, s as partner_asmu_default, t as CompanyOverviewSection, u as partner_ifnmu_default } from "./_ssr/company-overview-section-XNJkcN8a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_-DbTN5mwe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var rootCategories = (siteTree.find((n) => n.id === "services") || siteTree[0]).children ?? [];
function getCategoryIcon(id) {
	switch (id) {
		case "rehab": return Activity;
		case "diag": return HeartPulse;
		case "checkup": return Stethoscope;
		case "recovery": return Dumbbell;
		case "mobile-rehab": return Truck;
		case "rental": return Package;
		default: return Sparkles;
	}
}
/** Flatten all service items under a category or subcategory to compute count */
function countServices(node) {
	if (!node.children || node.children.length === 0) return 1;
	return node.children.reduce((acc, child) => acc + countServices(child), 0);
}
function AllServicesPricePage({ node }) {
	const [searchQuery, setSearchQuery] = import_react.useState("");
	const [selectedCategoryFilter, setSelectedCategoryFilter] = import_react.useState("all");
	const { openModal } = useConsultationModal();
	const [openCategories, setOpenCategories] = import_react.useState(() => ({}));
	const [openSubcategories, setOpenSubcategories] = import_react.useState(() => ({}));
	const isSearchActive = searchQuery.trim().length > 0;
	const toggleCategory = (catId) => {
		setOpenCategories((prev) => ({
			...prev,
			[catId]: !prev[catId]
		}));
	};
	const toggleSubcategory = (subId) => {
		setOpenSubcategories((prev) => ({
			...prev,
			[subId]: !prev[subId]
		}));
	};
	const expandAll = () => {
		const allCats = {};
		const allSubs = {};
		rootCategories.forEach((cat) => {
			allCats[cat.id] = true;
			(cat.children ?? []).forEach((sub) => {
				allSubs[sub.id] = true;
			});
		});
		setOpenCategories(allCats);
		setOpenSubcategories(allSubs);
	};
	const collapseAll = () => {
		setOpenCategories({});
		setOpenSubcategories({});
	};
	const filteredCategories = import_react.useMemo(() => {
		const q = searchQuery.trim().toLowerCase();
		return rootCategories.filter((cat) => {
			if (selectedCategoryFilter !== "all" && cat.id !== selectedCategoryFilter) return false;
			return true;
		}).map((cat) => {
			const catMatches = cat.title.toLowerCase().includes(q) || (cat.shortDescription ?? "").toLowerCase().includes(q);
			const subcategories = (cat.children ?? []).map((sub) => {
				const subMatches = sub.title.toLowerCase().includes(q) || (sub.shortDescription ?? "").toLowerCase().includes(q);
				const filteredItems = (sub.children && sub.children.length > 0 ? sub.children : [sub]).filter((item) => {
					if (!q) return true;
					const text = `${item.title} ${item.shortDescription ?? ""} ${item.priceLabel ?? ""}`.toLowerCase();
					return catMatches || subMatches || text.includes(q);
				});
				return {
					...sub,
					items: filteredItems,
					hasMatch: filteredItems.length > 0
				};
			}).filter((sub) => sub.hasMatch);
			return {
				...cat,
				subcategories,
				hasMatch: subcategories.length > 0
			};
		}).filter((cat) => cat.hasMatch);
	}, [searchQuery, selectedCategoryFilter]);
	const totalMatchingItems = import_react.useMemo(() => {
		let count = 0;
		filteredCategories.forEach((cat) => {
			cat.subcategories.forEach((sub) => {
				count += sub.items.length;
			});
		});
		return count;
	}, [filteredCategories]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative overflow-hidden bg-navy-deep text-background py-14 lg:py-18",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-navy-deep to-navy-deep opacity-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
							className: "relative z-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: getBreadcrumbs(node) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 max-w-3xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full bg-primary/20 px-3.5 py-1 text-xs font-semibold tracking-wider text-primary-foreground border border-primary/30 uppercase",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-3.5" }), " Прейскурант медичних послуг"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl",
										children: "Послуги та ціни"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-base md:text-lg text-white/85 leading-relaxed",
										children: "Актуальний прайс-лист медичного центру ОСНОВА. Оберіть потрібний напрямок, відкрийте категорію та натисніть на назву послуги для перегляду деталей та запису."
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "sticky top-0 z-30 border-b border-border/80 bg-background/95 backdrop-blur-md shadow-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
							className: "py-3 sm:py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex-1 max-w-xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: searchQuery,
												onChange: (e) => setSearchQuery(e.target.value),
												placeholder: "Пошук послуги (напр. ЕКГ, інфаркт, масаж...)",
												className: "w-full rounded-xl border border-input bg-card pl-10 pr-10 py-2.5 text-xs sm:text-sm text-foreground shadow-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
											}),
											searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setSearchQuery(""),
												className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground hover:text-foreground",
												children: "Очистити"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 w-full sm:w-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: expandAll,
											className: "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-semibold text-navy hover:bg-secondary transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" }), " Розгорнути все"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: collapseAll,
											className: "flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-semibold text-navy hover:bg-secondary transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-3.5" }), " Згорнути все"]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 sm:mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setSelectedCategoryFilter("all"),
										className: `whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${selectedCategoryFilter === "all" ? "bg-navy text-white shadow-xs" : "bg-secondary/70 text-navy hover:bg-secondary"}`,
										children: [
											"Всі напрями (",
											rootCategories.reduce((acc, cat) => acc + countServices(cat), 0),
											")"
										]
									}), rootCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setSelectedCategoryFilter(cat.id),
										className: `whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${selectedCategoryFilter === cat.id ? "bg-navy text-white shadow-xs" : "bg-secondary/70 text-navy hover:bg-secondary"}`,
										children: [
											cat.title,
											" (",
											countServices(cat),
											")"
										]
									}, cat.id))]
								}),
								isSearchActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2.5 text-xs font-medium text-navy/70",
									children: [
										"Знайдено послуг за запитом «",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-navy",
											children: searchQuery
										}),
										"»: ",
										totalMatchingItems
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
						className: "mt-6 sm:mt-8 space-y-4 sm:space-y-6",
						children: filteredCategories.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-dashed border-border p-8 sm:p-12 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base sm:text-lg font-bold text-navy",
									children: "За вашим запитом послуг не знайдено"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs sm:text-sm text-muted-foreground",
									children: [
										"Спробуйте змінити формулювання або зателефонуйте адміністратору за номером",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: CONTACTS.phoneHref,
											className: "font-bold text-primary",
											children: CONTACTS.phone
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setSearchQuery("");
										setSelectedCategoryFilter("all");
									},
									className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground",
									children: "Скинути фільтри"
								})
							]
						}) : filteredCategories.map((cat) => {
							const Icon = getCategoryIcon(cat.id);
							const isOpen = isSearchActive || openCategories[cat.id];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/80 bg-card shadow-xs transition-all duration-200 overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => toggleCategory(cat.id),
									className: "w-full flex items-center justify-between p-4 sm:p-6 bg-card hover:bg-secondary/30 transition-colors text-left border-b border-border/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 sm:gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex size-10 sm:size-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 sm:size-6" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-lg sm:text-2xl font-bold text-navy",
												children: cat.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-full bg-secondary px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold text-navy/80",
												children: [cat.subcategories.reduce((acc, sub) => acc + sub.items.length, 0), " послуг"]
											})]
										}), cat.shortDescription && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 sm:mt-1 text-xs sm:text-sm text-muted-foreground line-clamp-1",
											children: cat.shortDescription
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 shrink-0 ml-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden sm:inline-block text-xs font-bold uppercase tracking-wider text-primary",
											children: isOpen ? "Сховати" : "Розгорнути"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex size-8 sm:size-9 items-center justify-center rounded-full bg-secondary text-navy",
											children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4 sm:size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 sm:size-5" })
										})]
									})]
								}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-3 sm:p-6 bg-background/40 space-y-4 sm:space-y-5",
									children: cat.subcategories.map((sub) => {
										const isSubOpen = isSearchActive || Boolean(openSubcategories[sub.id]);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border bg-card overflow-hidden shadow-2xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => toggleSubcategory(sub.id),
												className: "w-full flex items-center justify-between p-3.5 sm:px-6 bg-secondary/30 hover:bg-secondary/60 transition-colors text-left border-b border-border/60",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2.5 sm:gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-2 sm:size-2.5 rounded-full bg-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-sm sm:text-lg font-bold text-navy",
														children: sub.title
													}), sub.shortDescription && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] sm:text-xs text-muted-foreground line-clamp-1 font-normal",
														children: sub.shortDescription
													})] })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-xs font-semibold text-navy/70 shrink-0 ml-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-muted-foreground text-[11px] sm:text-xs font-normal",
														children: [
															"(",
															sub.items.length,
															")"
														]
													}), isSubOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })]
												})]
											}), isSubOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "hidden sm:block overflow-x-auto",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
													className: "w-full text-left text-sm border-collapse",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
														className: "border-b border-border bg-secondary/15 text-xs uppercase tracking-wider font-semibold text-navy/70",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
																className: "py-3 px-4 sm:px-6",
																children: "Назва послуги"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
																className: "py-3 px-4 text-center sm:w-44",
																children: "Тривалість / Формат"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
																className: "py-3 px-4 text-right sm:w-44",
																children: "Вартість"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
																className: "py-3 px-4 sm:px-6 text-right w-28",
																children: "Дія"
															})
														]
													}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
														className: "divide-y divide-border/50",
														children: sub.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
															className: "hover:bg-primary/5 transition-colors group",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
																	className: "py-4 px-4 sm:px-6 font-medium",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
																		to: item.route,
																		className: "font-bold text-navy group-hover:text-primary transition-colors inline-flex items-center gap-1.5 hover:underline",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 text-primary opacity-60 group-hover:opacity-100 transition-opacity shrink-0" })]
																	}), item.shortDescription && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "mt-0.5 text-xs text-muted-foreground font-normal line-clamp-1",
																		children: item.shortDescription
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																	className: "py-4 px-4 text-center text-xs text-navy/80 whitespace-nowrap",
																	children: item.duration ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "inline-block rounded-md bg-secondary/80 px-2.5 py-1 font-medium",
																		children: item.duration
																	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-muted-foreground",
																		children: "—"
																	})
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																	className: "py-4 px-4 text-right font-extrabold text-navy whitespace-nowrap",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-base text-primary",
																		children: item.priceLabel || "Вартість уточнюється"
																	})
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																	className: "py-4 px-4 sm:px-6 text-right whitespace-nowrap",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		type: "button",
																		onClick: () => openModal(item.orderAction || "Замовити послугу"),
																		className: "inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-brand-green px-3.5 py-2 text-[11px] font-bold text-brand-green-foreground shadow-sm transition-all hover:bg-brand-green/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/30",
																		children: item.orderAction || "Замовити послугу"
																	})
																})
															]
														}, item.id))
													})]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "block sm:hidden divide-y divide-border/50",
												children: sub.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3.5 space-y-2 hover:bg-primary/5 transition-colors",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
															to: item.route,
															className: "font-bold text-navy text-sm hover:text-primary transition-colors flex items-start justify-between gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 text-primary shrink-0 mt-0.5" })]
														}),
														item.shortDescription && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-muted-foreground line-clamp-2",
															children: item.shortDescription
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between pt-1 gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-2",
																children: [item.duration && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-medium bg-secondary px-2 py-0.5 rounded text-navy/80",
																	children: item.duration
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-sm font-extrabold text-primary",
																	children: item.priceLabel || "Вартість уточнюється"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => openModal(item.orderAction || "Замовити послугу"),
																className: "inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-md bg-brand-green px-3 py-2 text-[11px] font-bold text-brand-green-foreground shadow-sm transition-all hover:bg-brand-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/30",
																children: item.orderAction || "Замовити послугу"
															})]
														})
													]
												}, item.id))
											})] })]
										}, sub.id);
									})
								})]
							}, cat.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
						className: "mt-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl bg-navy-deep p-8 md:p-12 text-background relative overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -bottom-10 size-64 rounded-full bg-primary/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 grid gap-8 md:grid-cols-3 md:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "md:col-span-2 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-2xl font-extrabold md:text-3xl text-white",
										children: "Потрібна консультація щодо вибору послуги або запису?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/80 leading-relaxed text-sm md:text-base",
										children: "Наші адміністратори підкажуть актуальні дати, допоможуть обрати потрібну програму або чек-ап та дадуть відповіді на всі питання."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row md:flex-col gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: CONTACTS.phoneHref,
										className: "inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-4 text-sm font-bold text-brand-green-foreground transition-all hover:bg-brand-green/90 shadow-lg",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
											" ",
											CONTACTS.phone
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
										to: "/kontakty",
										className: "inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white hover:bg-white/20 transition-colors",
										children: "Записатися онлайн"
									})]
								})]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var DOCTOR_AUDIENCES = [
	{
		title: "Кардіологи",
		text: "Кардіореабілітація, навантажувальні тести, контроль витривалості та супровід після серцево-судинних подій.",
		icon: HeartPulse
	},
	{
		title: "Ортопеди та травматологи",
		text: "Відновлення після операцій, травм, ендопротезування, переломів і тривалих обмежень руху.",
		icon: Activity
	},
	{
		title: "Неврологи та ревматологи",
		text: "Поступове повернення функції, робота з болем, рухливістю, координацією та щоденною активністю.",
		icon: Stethoscope
	},
	{
		title: "Сімейні лікарі та спортивні лікарі",
		text: "Профілактичні чекапи, спортивна адаптація, оцінка ризиків і маршрутизація пацієнтів.",
		icon: Users
	}
];
var COOPERATION_FORMATS = [
	{
		title: "Направлення пацієнта",
		text: "Приймаємо пацієнта на діагностику або реабілітацію за вашим клінічним запитом і передаємо зрозумілий результат.",
		icon: Send
	},
	{
		title: "Спільне ведення",
		text: "Узгоджуємо цілі програми, контролюємо динаміку та повертаємо пацієнта до вас із підсумковими рекомендаціями.",
		icon: Handshake
	},
	{
		title: "Діагностичний хаб",
		text: "Проводимо функціональні обстеження, ЕКГ, Холтер, ДМАТ, CPET та інші дослідження для прийняття рішень.",
		icon: ClipboardCheck
	},
	{
		title: "Освіта та події",
		text: "Запрошуємо лікарів до курсів, конференцій, стажувань і професійного обміну в межах платформи ОСНОВА.",
		icon: GraduationCap
	}
];
var REFERRAL_STEPS = [
	"Ви передаєте клінічний запит, виписку або результати попередніх обстежень.",
	"Команда ОСНОВИ проводить первинну оцінку, уточнює обмеження та цілі відновлення.",
	"Пацієнт проходить діагностику, реабілітацію або комбіновану програму під наглядом фахівців.",
	"Ви отримуєте підсумковий висновок, динаміку та рекомендації для подальшого ведення."
];
var DOCTOR_RECEIVES = [
	"Структурований медичний висновок після діагностики або курсу реабілітації.",
	"Опис функціонального стану пацієнта до та після програми.",
	"Рекомендації щодо навантажень, домашньої активності та подальшого контролю.",
	"Комунікацію з командою центру за потреби уточнення клінічних деталей."
];
var TRUST_POINTS = [
	"Працюємо в межах призначень і поважаємо роль лікаря, який веде пацієнта.",
	"Не замінюємо основне лікування, а підсилюємо його діагностикою та відновленням.",
	"Фіксуємо стартовий стан, цілі, динаміку та підсумковий результат програми."
];
function SectionHeader({ eyebrow, title, text, centered = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: centered ? "text-center" : "",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-extrabold leading-[1.15] text-navy md:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green ${centered ? "mx-auto" : ""}` }),
			text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-6 text-base leading-relaxed text-navy/75 md:text-lg ${centered ? "mx-auto max-w-3xl" : "max-w-3xl"}`,
				children: text
			})
		]
	});
}
function DoctorPartnershipPage({ node }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-navy-deep",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMAGES.ecgImg,
							alt: "Співпраця ОСНОВИ з лікарями",
							width: 1400,
							height: 900,
							className: "absolute inset-0 size-full object-cover object-right opacity-45 mix-blend-luminosity lg:opacity-100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto grid max-w-[1600px] gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-32",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/70 sm:text-sm",
									children: "ПАРТНЕРСТВО ДЛЯ ЛІКАРІВ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 max-w-4xl text-3xl font-extrabold leading-[1.08] text-background sm:text-5xl md:text-6xl lg:text-7xl",
									children: "Співпраця з лікарями"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-2xl text-base leading-relaxed text-background/84 sm:text-lg",
									children: "ОСНОВА працює як продовження вашого лікувального плану: приймаємо пацієнтів на діагностику, реабілітацію та контрольований супровід, а лікар отримує зрозумілий висновок і зворотний зв'язок."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
										to: "/kontakty",
										className: "inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-green px-7 py-4 text-sm font-bold tracking-wide text-brand-green-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-brand-green/90 sm:w-auto sm:px-9 sm:py-5 sm:text-base",
										children: ["Обговорити співпрацю ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: CONTACTS.phoneHref,
										className: "inline-flex w-full items-center justify-center gap-3 rounded-xl border border-background/35 bg-background/5 px-7 py-4 text-sm font-bold tracking-wide text-background backdrop-blur-sm transition-colors hover:bg-background/10 sm:w-auto sm:px-9 sm:py-5 sm:text-base",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }), CONTACTS.phone]
									})]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid content-end gap-4 sm:grid-cols-3 lg:grid-cols-1",
								children: [
									["Формат", "Направлення та спільне ведення"],
									["Фокус", "Діагностика, реабілітація, контроль динаміки"],
									["Результат", "Висновок і рекомендації для лікаря"]
								].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-bold uppercase tracking-[0.18em] text-background/55",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm font-bold leading-snug text-background sm:text-base",
										children: value
									})]
								}, label))
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
					className: "py-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: getBreadcrumbs(node) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-background py-16 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl shadow-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: IMAGES.cpetImg,
								alt: "Функціональна діагностика для пацієнтів лікарів-партнерів",
								width: 1200,
								height: 900,
								loading: "lazy",
								className: "h-full min-h-[320px] w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							eyebrow: "КОЛИ НАПРАВЛЯТИ",
							title: "Клінічна підтримка там, де потрібен контрольований наступний крок",
							text: "Сторінка створена для лікарів, які хочуть швидко зорієнтувати пацієнта в діагностиці, реабілітації або безпечному поверненні до активності."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-3",
							children: TRUST_POINTS.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4 border-b border-border py-4 last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-brand-green-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-navy/90 sm:text-base",
									children: point
								})]
							}, point))
						})] })]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-slate-200/70 bg-slate-50/90 py-16 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						centered: true,
						eyebrow: "ДЛЯ КОГО",
						title: "Працюємо з лікарями різних спеціальностей",
						text: "Команда центру підключається тоді, коли пацієнту потрібна точна оцінка стану, дозоване навантаження або реабілітаційна програма."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4",
						children: DOCTOR_AUDIENCES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group flex h-full flex-col rounded-[24px] border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-7 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold leading-tight text-navy",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-slate-600",
									children: item.text
								})
							]
						}, item.title))
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-white py-16 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							eyebrow: "ФОРМАТИ",
							title: "Як може виглядати співпраця",
							text: "Ми підлаштовуємо формат під клінічний запит: від одноразового обстеження до повного курсу відновлення з проміжним контролем."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
							to: "/kontakty",
							className: "mt-9 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold tracking-wide text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90 sm:w-auto",
							children: ["Зв'язатися з координатором ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-5" })]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: COOPERATION_FORMATS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group rounded-[24px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-5 flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold text-navy",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-navy/70",
										children: item.text
									})
								]
							}, item.title))
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-soft-blue py-16 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							eyebrow: "МАРШРУТ ПАЦІЄНТА",
							title: "Простий процес направлення",
							text: "Лікар зберігає контроль над медичною логікою, а ОСНОВА бере на себе діагностичну та реабілітаційну частину маршруту."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 space-y-4",
							children: REFERRAL_STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 rounded-2xl bg-white p-5 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-extrabold text-white",
									children: index + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pt-1 text-sm leading-relaxed text-navy/85 sm:text-base",
									children: step
								})]
							}, step))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl shadow-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: IMAGES.rehabImg,
								alt: "Реабілітаційна програма після направлення лікаря",
								width: 1200,
								height: 900,
								loading: "lazy",
								className: "h-full min-h-[360px] w-full object-cover"
							})
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-background py-16 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
								eyebrow: "ЩО ОТРИМУЄ ЛІКАР",
								title: "Прозорий результат після роботи з пацієнтом"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8",
								children: DOCTOR_RECEIVES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-4 border-b border-border py-4 last:border-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-brand-green-foreground" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm leading-relaxed text-navy/90 sm:text-base",
										children: item
									})]
								}, item))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between rounded-3xl bg-navy-deep p-6 text-background shadow-lg sm:p-8 lg:p-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-7 flex size-14 items-center justify-center rounded-2xl bg-white/10 text-brand-green",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-[0.2em] text-background/55",
									children: "Документація"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-3xl font-extrabold leading-tight md:text-4xl",
									children: "Висновок, який зручно використати в подальшому веденні"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm leading-relaxed text-background/72 sm:text-base",
									children: "Ми формуємо рекомендації людською мовою: що зроблено, яка динаміка, які обмеження залишаються та що варто контролювати після програми."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 rounded-2xl border border-white/10 bg-white/8 p-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-1 size-6 shrink-0 text-brand-green" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-background/80",
										children: "Усі рішення щодо лікування та довгострокової тактики залишаються за лікарем, який веде пацієнта."
									})]
								})
							})]
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-slate-50/90 py-16 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl shadow-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: IMAGES.sportsImg,
								alt: "Освітня та практична співпраця для лікарів",
								width: 1200,
								height: 900,
								loading: "lazy",
								className: "h-full min-h-[320px] w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							eyebrow: "ОСВІТА",
							title: "Професійний обмін, курси та конференції",
							text: "Для лікарів і фахівців доступні освітні формати ОСНОВИ: практичні курси, конференції, стажування та спільні клінічні обговорення."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
								to: "/kursy",
								className: "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90",
								children: ["Курси ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
								to: "/konferentsii",
								className: "inline-flex items-center justify-center gap-2 rounded-xl border border-navy/20 bg-white px-7 py-4 text-sm font-bold text-navy transition-all hover:border-primary hover:text-primary",
								children: ["Конференції ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})]
						})] })]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-soft-blue py-16 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-5xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.22em] text-primary",
								children: "ПОЧАТИ СПІВПРАЦЮ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-3xl font-extrabold leading-tight text-navy md:text-5xl",
								children: "Направте пацієнта або обговоріть партнерський формат"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-3xl text-base leading-relaxed text-navy/75 md:text-lg",
								children: "Залиште запит, і координатор ОСНОВИ допоможе підібрати правильний маршрут: діагностику, реабілітацію, чекап або освітній формат для вашої команди."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
									to: "/kontakty",
									className: "inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-9 py-4 text-base font-bold text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90 sm:w-auto",
									children: ["Залишити запит ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: CONTACTS.phoneHref,
									className: "inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-navy px-9 py-4 text-base font-bold text-navy transition-all hover:bg-navy hover:text-white sm:w-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }), CONTACTS.phone]
								})]
							})
						]
					}) })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var AUDIENCES = [
	{
		icon: GraduationCap,
		title: "Медичні університети",
		text: "Практичні модулі, клінічні заняття та стажування для студентів, інтернів і викладачів."
	},
	{
		icon: Microscope,
		title: "Наукові інститути",
		text: "Спільні дослідження, валідація методик і робота з клінічними даними в межах погоджених протоколів."
	},
	{
		icon: Stethoscope,
		title: "Профільні кафедри",
		text: "База для ортопедії, кардіології, фізичної терапії, спортивної медицини та реабілітації."
	}
];
var COOPERATION_DIRECTIONS = [
	{
		icon: Building2,
		title: "Клінічна база",
		text: "Організовуємо практичне навчання на базі центру з доступом до реабілітаційних зон, діагностики та командної роботи фахівців."
	},
	{
		icon: BookOpen,
		title: "Освітні програми",
		text: "Проводимо курси, семінари, hands-on модулі та тематичні інтенсиви для студентів і медичних команд."
	},
	{
		icon: FlaskConical,
		title: "Наукові проєкти",
		text: "Підтримуємо дослідницькі ініціативи у відновленні, спортивній медицині, функціональній діагностиці та профілактиці."
	},
	{
		icon: ClipboardList,
		title: "Протоколи та методики",
		text: "Спільно формуємо, тестуємо й удосконалюємо реабілітаційні маршрути для різних клінічних груп."
	},
	{
		icon: Presentation,
		title: "Конференції та події",
		text: "Створюємо фахові зустрічі, воркшопи й демонстраційні сесії для медичної та академічної спільноти."
	},
	{
		icon: Users,
		title: "Стажування команд",
		text: "Приймаємо групи фахівців для занурення у мультидисциплінарну модель роботи ОСНОВИ."
	}
];
var PROCESS_STEPS$2 = [
	"Узгоджуємо цілі інституції, аудиторію та бажаний формат співпраці.",
	"Формуємо програму: навчальні модулі, клінічну практику, дослідження або комбінований формат.",
	"Погоджуємо графік, відповідальних фахівців, вимоги до документів і очікувані результати.",
	"Проводимо програму на базі ОСНОВА Реабілітація або в гібридному форматі.",
	"Передаємо підсумки, рекомендації та пропозиції для подальших спільних етапів."
];
var BENEFITS = [
	"Доступ до сучасної реабілітаційної та діагностичної інфраструктури.",
	"Практичні кейси з кардіології, ортопедії, неврології, спортивної медицини та превентивної реабілітації.",
	"Можливість поєднати навчання, клінічну практику, конференційний формат і дослідницьку роботу.",
	"Команда лікарів, фізичних терапевтів і профільних фахівців, яка супроводжує програму.",
	"Гнучкий формат для університетів, кафедр, наукових груп і медичних інститутів."
];
var PARTNERS$1 = [
	{
		name: "Карпатська Академія",
		logo: partner_karpatska_akademiia_default
	},
	{
		name: "Черкаський національний університет імені Богдана Хмельницького",
		logo: partner_chnu_default
	},
	{
		name: "Асоціація спортивної медицини України",
		logo: partner_asmu_default
	},
	{
		name: "Інститут ім. проф. М. І. Ситенка",
		logo: partner_sytenko_default
	},
	{
		name: "Інститут серця МОЗ України",
		logo: partner_heart_default
	},
	{
		name: "Івано-Франківський національний медичний університет",
		logo: partner_ifnmu_default
	}
];
var FAQS$2 = [
	{
		question: "Які інституції можуть звернутися щодо співпраці?",
		answer: "Ми відкриті до співпраці з медичними університетами, науковими інститутами, профільними кафедрами, асоціаціями та освітніми центрами, які працюють у сфері медицини, реабілітації, фізичної терапії або спортивної медицини."
	},
	{
		question: "Чи можна організувати практику для студентів або інтернів?",
		answer: "Так. Формат, кількість учасників, тривалість і клінічні модулі узгоджуються індивідуально після знайомства з цілями навчальної програми."
	},
	{
		question: "Чи підтримує ОСНОВА спільні дослідження?",
		answer: "Так. Ми розглядаємо дослідницькі проєкти, пов’язані з реабілітацією, функціональним тестуванням, відновленням після травм і серцево-судинних подій, профілактикою та спортивною адаптацією."
	},
	{
		question: "Як почати перемовини?",
		answer: "Надішліть короткий опис інституції, бажаного формату та контакт відповідальної особи. Команда ОСНОВИ зв’яжеться з вами, щоб узгодити наступні кроки."
	}
];
function DirectionCard$1({ item }) {
	const Icon = item.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-xl sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-xl font-extrabold leading-snug text-navy",
				children: item.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-slate-600",
				children: item.text
			})
		]
	});
}
function AudienceCard({ item }) {
	const Icon = item.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-[24px] border border-slate-200/80 bg-card p-6 shadow-md shadow-slate-900/5 sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-8 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-xl font-bold text-navy",
				children: item.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-slate-600",
				children: item.text
			})
		]
	});
}
function PartnerLogo({ partner }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-32 items-center justify-center rounded-[20px] border border-slate-200/80 bg-white p-5 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: partner.logo,
			alt: partner.name,
			loading: "lazy",
			className: "max-h-20 w-full object-contain"
		})
	});
}
function HeroBreadcrumbs({ node }) {
	const items = getBreadcrumbs(node);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Навігаційний ланцюжок",
		className: "overflow-x-auto pt-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex items-center gap-2 whitespace-nowrap text-xs text-background/65 sm:text-sm",
			children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2",
				children: [index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					children: "/"
				}), index === items.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-background",
					children: item.title
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
					to: item.route,
					className: "transition-colors hover:text-background",
					children: item.title
				})]
			}, `${item.route}-${index}`))
		})
	});
}
function InstitutePartnershipPage({ node }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-navy-deep",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: education_training_default,
							alt: node.title,
							width: 1400,
							height: 900,
							className: "absolute inset-0 size-full object-cover object-center opacity-40 lg:opacity-100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/25" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto max-w-[1600px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBreadcrumbs, { node }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 text-xs font-semibold tracking-[0.26em] text-primary-foreground/70 uppercase sm:text-sm",
									children: node.eyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 max-w-4xl text-3xl font-extrabold leading-[1.08] text-background sm:text-5xl md:text-6xl lg:text-7xl",
									children: node.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg",
									children: node.shortDescription
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-8 grid max-w-3xl gap-4 sm:grid-cols-3",
									children: [
										{
											label: "Формат",
											value: "клінічна база"
										},
										{
											label: "Аудиторія",
											value: "інститути та ЗВО"
										},
										{
											label: "Фокус",
											value: "практика і наука"
										}
									].map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-[10px] font-bold uppercase tracking-[0.18em] text-background/55",
											children: fact.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-2 text-sm font-bold text-background sm:text-base",
											children: fact.value
										})]
									}, fact.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-9 flex flex-col gap-3 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
										to: "/kontakty",
										className: "inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-green px-7 py-4 text-sm font-bold tracking-wide text-brand-green-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-brand-green/90 sm:w-auto",
										children: ["Обговорити співпрацю ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
										to: "/navchannia",
										className: "inline-flex w-full items-center justify-center gap-3 rounded-xl border border-background/35 bg-white/5 px-7 py-4 text-sm font-bold tracking-wide text-background backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto",
										children: ["Навчання та події ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4" })]
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
					className: "py-16 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {
							eyebrow: "ДЛЯ КОГО",
							title: "Партнерська платформа для медичної освіти та науки",
							text: "ОСНОВА Реабілітація поєднує клінічну практику, функціональну діагностику, реабілітаційні програми й освітню інфраструктуру в Буковелі."
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 md:grid-cols-3",
							children: AUDIENCES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudienceCard, { item }, item.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-slate-200/70 bg-slate-50/80 py-16 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {
						eyebrow: "НАПРЯМИ",
						title: "Формати співпраці з інститутами",
						text: "Ми можемо зібрати окремий формат під вашу навчальну, дослідницьку або клінічну задачу."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: COOPERATION_DIRECTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionCard$1, { item }, item.title))
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
					className: "py-16 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-2 lg:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[28px] shadow-xl shadow-slate-900/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: education_conference_default,
								alt: "Освітні та наукові події ОСНОВА",
								loading: "lazy",
								className: "h-full min-h-[360px] w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-shell",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {
								eyebrow: "ПРОЦЕС",
								title: "Як запускається спільна програма"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8 space-y-4",
								children: PROCESS_STEPS$2.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4 rounded-2xl bg-white p-4 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white",
										children: index + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pt-1 text-sm leading-relaxed text-navy/90 sm:text-base",
										children: step
									})]
								}, step))
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-soft-blue py-16 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {
							eyebrow: "РЕЗУЛЬТАТ",
							title: "Що отримує інституція",
							text: "Сторони заздалегідь узгоджують мету, відповідальних, формат доступу до клінічної бази та очікуваний результат."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8",
							children: BENEFITS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-4 border-b border-navy/10 py-4 last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-brand-green-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm leading-relaxed text-navy/90 sm:text-base",
									children: item
								})]
							}, item))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[24px] bg-navy p-7 text-white shadow-xl shadow-slate-900/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, { className: "size-9 text-brand-green" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-2xl font-extrabold",
										children: "Гнучка модель"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-white/75",
										children: "Програма може бути коротким візитом, серією практичних модулів, конференцією, стажуванням або довгостроковою співпрацею."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[24px] bg-white p-7 shadow-xl shadow-slate-900/5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-9 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-2xl font-extrabold text-navy",
										children: "Фаховий супровід"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-slate-600",
										children: "Кожен формат супроводжують відповідальні фахівці ОСНОВИ з медичного, освітнього та організаційного боку."
									})
								]
							})]
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
					className: "py-16 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {
							eyebrow: "ПАРТНЕРИ",
							title: "Працюємо з академічною та медичною спільнотою",
							text: "ОСНОВА розвиває партнерства з університетами, інститутами, професійними асоціаціями та освітніми платформами."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
							to: "/kontakty",
							className: "mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-bold tracking-wide text-white shadow-md transition-all hover:scale-[1.02] hover:bg-primary/90 sm:w-auto",
							children: ["Запропонувати партнерство ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
							children: PARTNERS$1.map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerLogo, { partner }, partner.name))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-navy-deep py-16 sm:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: service_rehab_default,
							alt: "Команда ОСНОВА Реабілітація",
							loading: "lazy",
							className: "absolute inset-0 size-full object-cover opacity-20"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy-deep/85" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
							className: "relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-4xl text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-[0.24em] text-primary-foreground/65",
										children: "ПОЧАТИ СПІВПРАЦЮ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl",
										children: "Створімо практичну базу для вашої інституції"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg",
										children: "Розкажіть про вашу задачу, а ми запропонуємо формат, який поєднає навчання, практику, дослідження та можливості центру."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
											to: "/kontakty",
											className: "inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-green px-8 py-4 text-sm font-bold tracking-wide text-brand-green-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-brand-green/90 sm:w-auto",
											children: ["Залишити заявку ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "tel:+380674702788",
											className: "inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white/10 sm:w-auto",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-brand-green" }), " +380 674 702 788"]
										})]
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
					className: "py-16 sm:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {
						eyebrow: "FAQ",
						title: "Поширені питання"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, { items: FAQS$2 })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "pb-16 sm:pb-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-md shadow-slate-900/5 md:grid-cols-[0.7fr_1fr] md:p-8 lg:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: cpet_test_default,
							alt: "Функціональна діагностика ОСНОВА",
							loading: "lazy",
							className: "h-full min-h-[240px] w-full rounded-[22px] object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
									children: "ДОДАТКОВІ МОЖЛИВОСТІ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-2xl font-extrabold leading-tight text-navy sm:text-4xl",
									children: "Діагностика, реабілітація та спортивна медицина в одному середовищі"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm leading-relaxed text-slate-600 sm:text-base",
									children: "Для навчальних і дослідницьких задач інституція може поєднувати роботу з клінічними кейсами, функціональним тестуванням, реабілітаційними програмами та освітніми подіями."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
									to: "/poslugy",
									className: "mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-navy px-7 py-4 text-sm font-bold tracking-wide text-white transition-all hover:scale-[1.02] hover:bg-primary sm:w-auto",
									children: ["Переглянути послуги ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						})]
					}) })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var cardio_heart_3d_default = "/assets/cardio-heart-3d-DLgiMZPh.jpg";
var movement_testing_default = "/assets/movement-testing-D-Z8rK8Z.jpg";
var therapy_session_default = "/assets/therapy-session-COxtdhNK.jpg";
var functional_training_default = "/assets/functional-training-DdTLWrlH.jpg";
var consultation_default = "/assets/consultation-BtlF2SeR.jpg";
var sharedProgramsText = "Точну вартість і детальний склад кожного пакету повідомляє адміністратор після попереднього розгляду документів і консультації лікаря.";
var rehabTemplateConfigs = {
	"rehab-cardio": {
		heroTitle: "Реабілітація в кардіології",
		heroSubtitle: "Профілактика • діагностика • лікування • відновлення • навчання • супровід",
		heroButtonLabel: "Записатися на консультацію",
		heroImage: cpet_test_default,
		heroImageAlt: "Медична команда контролює заняття пацієнта під час відновлення",
		introTitle: "Що таке кардіологічна реабілітація",
		introShort: "Кардіологічна реабілітація — це структурована програма відновлення після серцевих подій і операцій. Вона поєднує контрольовані фізичні навантаження, навчання пацієнта правилам життя з хворобою серця та психологічну підтримку. Головна мета програми — знизити ризик повторних ускладнень, підвищити витривалість і допомогти людині безпечно повернутися до звичайного ритму життя.",
		introExpanded: "Програму складають індивідуально. Лікар враховує діагноз, результати обстежень і поточний рівень фізичних можливостей. До програми входять дозовані тренування, робота з факторами ризику, навчання правильному харчуванню та прийому ліків, а також допомога в подоланні тривоги, пов’язаної із захворюванням.",
		introImage: medical_assessment_default,
		introImageAlt: "Лікар переглядає результати кардіологічного обстеження",
		timingTitle: "Що варто знати перед початком програми",
		timingText: "Ця програма створена, щоб безпечно підтримати ваше відновлення після серцевої події. Ознайомтеся з ключовими орієнтирами нижче, щоб почуватися впевненіше та отримати максимальну користь від кожного етапу реабілітації.",
		timingColumns: [
			{
				title: "Показання",
				items: [
					"Після інфаркту міокарда",
					"Після стентування коронарних артерій",
					"Після операцій на серці (АКШ, клапани)",
					"При хронічній серцевій недостатності",
					"При зниженій переносимості навантажень"
				]
			},
			{
				title: "Результати реабілітації",
				items: [
					"Підвищення витривалості та сили",
					"Зменшення задишки та втоми",
					"Стабілізація артеріального тиску",
					"Покращення якості життя та настрою",
					"Безпечне повернення до активності"
				]
			},
			{
				title: "Протипоказання",
				items: [
					"Гостра інфекція або підвищена температура",
					"Нестабільний тиск чи виражена аритмія",
					"Загострення хронічного захворювання",
					"Старт програми визначає лікар після оцінки стану"
				]
			}
		],
		timingStartTitle: "Початок програми",
		timingStartText: "Старт програми залежить від стабільності стану, медичних документів і дозволу лікаря.",
		timingStartNote: "Рішення щодо початку приймається індивідуально після оцінки стану та наданих результатів обстежень і тестів.",
		timingStartImage: medical_assessment_default,
		timingStartImageAlt: "Лікар консультує пацієнта перед початком програми",
		emergencyTitle: "Ознаки невідкладного стану",
		emergencyText: "Не розпочинайте та не продовжуйте програму, якщо стан раптово погіршився та потребує екстреної медичної допомоги.",
		emergencyItems: [
			"раптовий або інтенсивний біль у грудях",
			"виражена задишка або утруднене дихання",
			"втрата або порушення свідомості",
			"раптове порушення мовлення, зору або слабкість у кінцівках"
		],
		conditionsTitle: "Коли потрібна кардіологічна реабілітація",
		conditionsText: "Діагнози, стани та оперативні втручання, після яких варто пройти програму відновлення в Основа.",
		conditions: [
			{
				title: "Реабілітація після інфаркту міокарда",
				text: "Після інфаркту програма допомагає серцю відновити роботу та поступово повернути людині активність без надмірного ризику.",
				to: "/reabilitatsiia/pislia-infarktu-miokarda"
			},
			{
				title: "Реабілітація після стентування коронарних артерій",
				text: "Після стентування важливо закріпити звички, які підтримують судини, і знизити ризик повторного звуження артерій."
			},
			{
				title: "Реабілітація після аортокоронарного шунтування",
				text: "Після шунтування відновлення проходить поетапно: від дихальної гімнастики до вправ на силу та витривалість."
			},
			{
				title: "Реабілітація при хронічній серцевій недостатності",
				text: "Програма допомагає стабілізувати самопочуття, збільшити переносимість навантажень і навчити безпечному ритму життя."
			},
			{
				title: "Реабілітація після операцій на клапанах серця",
				text: "Після клапанних втручань важливо поступово відновлювати фізичну активність і контролювати фактори ризику."
			}
		],
		processBadge: "Етапи відновлення",
		processTitle: "Як проходить відновлення?",
		processText: "Відновлення — це поступовий процес, який базується на оцінці стану, індивідуальному плані та постійному контролі. Ми поруч на кожному етапі вашого повернення до активного життя.",
		processSteps: [
			{
				title: "Оцінка стану та документів",
				text: "Ми комплексно оцінюємо ваш стан здоров’я, аналізуємо медичні документи та визначаємо ключові потреби для ефективної реабілітації."
			},
			{
				title: "Індивідуальний план реабілітації",
				text: "Створюємо персональний план з урахуванням ваших цілей, потреб, стану здоров’я, можливостей та етапів відновлення."
			},
			{
				title: "Заняття та процедури під контролем",
				text: "Проводимо індивідуальні та групові заняття, процедури й тренування під наглядом досвідчених фахівців."
			},
			{
				title: "Контроль прогресу та корекція",
				text: "Регулярно відстежуємо ваш прогрес, оцінюємо результати та коригуємо план реабілітації для досягнення максимального ефекту."
			}
		],
		programsText: sharedProgramsText,
		otherServicesTitle: "Інші послуги",
		otherServicesText: "Суміжні напрями, які можуть знадобитися до, під час або після програми.",
		otherServices: [
			{
				title: "Кардіологічна діагностика",
				text: "Сучасні методи обстеження серця та судин допомагають точно оцінити стан перед початком реабілітації та відстежувати зміни в процесі програми.",
				to: "/diagnostyka/kardiodiahnostyka",
				image: ecg_review_default
			},
			{
				title: "Кардіологічний чек-ап",
				text: "Комплексне обстеження, яке дозволяє виявити приховані ризики та вчасно скоригувати лікування і профілактику.",
				to: "/check-up/kardiolohichnyi",
				image: service_checkup_default
			},
			{
				title: "Виїзна реабілітація",
				text: "Можливість продовжити програму вдома або в іншому зручному місці під дистанційним супроводом лікарів і реабілітологів.",
				to: "/vyizna-reabilitatsiia",
				image: service_rehab_default
			},
			{
				title: "Лікувальний басейн",
				text: "Заняття у воді зменшують навантаження на суглоби та дозволяють безпечно тренувати серцево-судинну систему навіть при обмеженій рухливості.",
				to: "/vidnovlennia/likuvalnyi-basein",
				image: service_sports_default
			},
			{
				title: "Функціональне тестування",
				text: "Оцінка фізичної працездатності та реакції серця на навантаження допомагає точно підібрати інтенсивність програми і контролювати прогрес.",
				to: "/diagnostyka/kardiodiahnostyka/cpet",
				image: cpet_test_default
			},
			{
				title: "Реабілітація після інфаркту міокарка",
				text: "Спеціалізований маршрут відновлення, створений для безпечного повернення до активності після інфаркту міокарда.",
				to: "/reabilitatsiia/pislia-infarktu-miokarda",
				image: cardio_heart_3d_default
			}
		],
		faqText: "Зібрали найпоширеніші запитання про кардіологічну реабілітацію. Якщо не знайшли відповідь, зверніться до нас і ми допоможемо підібрати наступний крок.",
		ctaBadge: "Кардіологічна реабілітація",
		ctaTitleLines: [
			"Зробіть свій",
			"перший крок",
			"до відновлення"
		],
		ctaText: "Допоможемо безпечно розпочати відновлення, оцінити ваш стан і підібрати програму кардіологічної реабілітації під наглядом фахівців. Первинна консультація допоможе зрозуміти, з чого починати програму відновлення.",
		ctaButtonLabel: "Замовити консультацію",
		ctaImage: cardio_rehab_cta_photo_v3_default,
		ctaImageAlt: "Фахівець допомагає пацієнтці виконувати вправу під час реабілітації",
		seoBadge: "ВІДНОВЛЕННЯ В БУКОВЕЛІ",
		seoTitle: "Кардіологічна реабілітація",
		seoLeadTitle: "Чому відновлення після серцевих втручань потребує контролю",
		seoLeadText: "Після операцій на серці або перенесеного інфаркту міокарда організм ще певний час не працює у звичному режимі. Саме тому період відновлення має проходити під наглядом фахівців із чітким розумінням допустимого рівня навантаження.",
		seoSections: [
			{
				type: "h3",
				text: "Відмінність спеціалізованої кардіореабілітації від санаторного підходу"
			},
			{
				type: "p",
				text: "У спеціалізованому центрі програму розробляють так, що кожне навантаження має чіткі межі. Ці межі визначаються на основі контролю стану серцево-судинної системи."
			},
			{
				type: "h3",
				text: "Значення психологічної підтримки під час відновлення"
			},
			{
				type: "p",
				text: "Психологічна підтримка допомагає зменшити тривогу, адаптуватися до нового ритму життя та краще дотримуватися рекомендацій команди."
			},
			{
				type: "qa",
				q: "Чи обов’язкова кардіореабілітація після операції?",
				a: "Вона не є формальною вимогою, але допомагає безпечніше повернутися до активності й зменшити ризики повторних ускладнень."
			},
			{
				type: "qa",
				q: "Скільки часу триває реабілітація?",
				a: "Тривалість залежить від стану пацієнта, цілей програми та переносимості навантаження."
			}
		],
		seoImage: cardio_heart_3d_default,
		seoImageAlt: "Стилізована 3D-модель серця",
		seoImageCaption: "Серце під контролем команди",
		faq: [
			{
				question: "Скільки триває програма?",
				answer: "Тривалість залежить від діагнозу, перенесеного втручання, результатів обстежень і реакції на навантаження. Після первинної оцінки команда визначає орієнтовний маршрут відновлення."
			},
			{
				question: "Чи потрібне направлення лікаря?",
				answer: "Направлення бажане, але не завжди обов’язкове. Якщо є виписка, рекомендації кардіолога або результати обстежень, їх варто надати перед стартом."
			},
			{
				question: "Які документи потрібно підготувати?",
				answer: "Бажано мати виписку, результати останніх обстежень, перелік ліків і рекомендації лікаря. Це допомагає безпечніше спланувати програму."
			},
			{
				question: "Чи можна проходити програму амбулаторно?",
				answer: "Так, формат підбирають індивідуально. Частина пацієнтів проходить програму амбулаторно, якщо такий режим безпечний у конкретній клінічній ситуації."
			},
			{
				question: "Що входить у вартість програми?",
				answer: "Склад пакета залежить від обраної програми. Адміністратор пояснює, які консультації, заняття та елементи супроводу включені."
			},
			{
				question: "Як записатися?",
				answer: "Залиште заявку на сайті або зателефонуйте до центру. Після цього адміністратор підкаже наступні кроки та перелік потрібних документів."
			}
		]
	},
	"rehab-ortho": {
		heroTitle: "Реабілітація в ортопедії та травматології",
		heroSubtitle: "Профілактика • діагностика • лікування • відновлення • навчання • супровід",
		heroButtonLabel: "Записатися на консультацію",
		heroImage: service_rehab_default,
		heroImageAlt: "Ортопедична реабілітація в ОСНОВА",
		introTitle: "Що таке реабілітація в ортопедії та травматології",
		introShort: "Це структурована програма відновлення після травм, переломів, ендопротезування, артроскопічних втручань і операцій на суглобах, зв’язках та сухожиллях. Її мета — повернути рухливість, силу, стабільність і функцію.",
		introExpanded: "Програму будують поетапно: рухливість → сила → стабільність → координація → функція → повернення до активності. Враховуються етап загоєння тканин, дозволене навантаження, біль, набряк, якість ходьби та готовність до побутових або спортивних навантажень.",
		introImage: movement_testing_default,
		introImageAlt: "Оцінка рухливості та ходьби після травми",
		timingTitle: "Що варто знати перед початком програми",
		timingText: "Ортопедична і травматологічна реабілітація має відповідати стадії загоєння, типу операції або травми та індивідуальній переносимості навантаження.",
		timingColumns: [
			{
				title: "Показання",
				items: [
					"Після переломів та іммобілізації",
					"Після ендопротезування суглобів",
					"Після артроскопічних операцій",
					"Після ушкоджень зв’язок і сухожиль",
					"При порушенні ходьби, слабкості та зниженні рухливості"
				]
			},
			{
				title: "Результати реабілітації",
				items: [
					"Відновлення амплітуди руху",
					"Повернення сили та стабільності",
					"Покращення ходьби й координації",
					"Зменшення наслідків іммобілізації",
					"Повернення до побутової активності та спорту"
				]
			},
			{
				title: "Протипоказання",
				items: [
					"Гострі післяопераційні ускладнення",
					"Ознаки інфекції або нестабільності фіксації",
					"Нова виражена біль або швидке наростання набряку",
					"Початок навантаження без дозволу лікаря"
				]
			}
		],
		timingStartTitle: "Початок програми",
		timingStartText: "Старт залежить від типу травми чи операції, темпу загоєння тканин та допустимого рівня навантаження.",
		timingStartNote: "Перед початком команда оцінює рухливість, біль, силу, опору на кінцівку, ходу та післяопераційні обмеження.",
		timingStartImage: movement_testing_default,
		timingStartImageAlt: "Оцінка функції після ортопедичної операції",
		emergencyTitle: "Ознаки невідкладного стану",
		emergencyText: "Не продовжуйте навантаження, якщо з’явилися ознаки можливого ускладнення після травми чи операції.",
		emergencyItems: [
			"різке посилення болю",
			"швидке наростання набряку або деформації",
			"підвищення температури, почервоніння рани або виділення",
			"раптова неможливість спиратися на кінцівку"
		],
		conditionsTitle: "Коли потрібна реабілітація в ортопедії та травматології",
		conditionsText: "Стани, після яких відновлення допомагає повернути рух, силу, стабільність і функцію.",
		conditions: [
			{
				title: "Після переломів",
				text: "Відновлення рухливості, сили та контролю руху після зрощення перелому та періоду іммобілізації."
			},
			{
				title: "Після ендопротезування",
				text: "Повернення опори, ходьби, амплітуди руху та впевненості у повсякденних навантаженнях."
			},
			{
				title: "Після артроскопії",
				text: "Поетапне повернення функції суглоба після малоінвазивного втручання."
			},
			{
				title: "Після ушкоджень зв’язок",
				text: "Робота зі стабільністю, координацією та підготовкою до повернення в активність."
			},
			{
				title: "Після ушкоджень сухожиль",
				text: "Контрольоване відновлення сили, рухливості та якості руху без перевантаження тканин."
			}
		],
		processBadge: "Етапи відновлення",
		processTitle: "Як проходить відновлення?",
		processText: "Ми рухаємося від оцінки обмежень до повернення в щоденну активність або спорт, коригуючи навантаження за фактичним прогресом.",
		processSteps: [
			{
				title: "Оцінка травми або операції",
				text: "Аналізуємо документи, стадію загоєння, обмеження опори, біль, набряк і функціональні дефіцити."
			},
			{
				title: "План відновлення",
				text: "Формуємо індивідуальний маршрут із чіткими цілями для рухливості, сили, стабільності та функції."
			},
			{
				title: "Контрольовані заняття",
				text: "Працюємо з вправами, ходьбою, координацією, балансом і поступовим поверненням навантаження."
			},
			{
				title: "Повернення до активності",
				text: "Оцінюємо готовність до побутових завдань, роботи, тренувань або повернення до спорту."
			}
		],
		programsText: sharedProgramsText,
		otherServicesTitle: "Інші послуги",
		otherServicesText: "Суміжні напрями, які можуть підсилити ортопедичне відновлення.",
		otherServices: [
			{
				title: "Спортивна медицина",
				text: "Функціональна оцінка та план повернення до тренувань після травм і операцій.",
				to: "/reabilitatsiia/sportyvna",
				image: service_sports_default
			},
			{
				title: "Функціональне тестування",
				text: "Оцінка сили, контролю руху, витривалості та якості ходьби перед збільшенням навантаження.",
				to: "/diagnostyka/kardiodiahnostyka/cpet",
				image: cpet_test_default
			},
			{
				title: "Лікувальний басейн",
				text: "Водне середовище може допомогти раніше повернутися до руху при зниженому навантаженні на суглоби.",
				to: "/vidnovlennia/likuvalnyi-basein",
				image: therapy_session_default
			},
			{
				title: "Виїзна реабілітація",
				text: "Можливість продовжити відновлення вдома, якщо очні візити тимчасово складні.",
				to: "/vyizna-reabilitatsiia",
				image: service_rehab_default
			}
		],
		faqText: "Зібрали найпоширеніші запитання про ортопедичну та травматологічну реабілітацію.",
		ctaBadge: "Ортопедія та травматологія",
		ctaTitleLines: [
			"Зробіть свій",
			"перший крок",
			"до відновлення"
		],
		ctaText: "Допоможемо оцінити ваш стан після травми чи операції та підібрати програму відновлення з урахуванням етапу загоєння, рухливості та цілей повернення до активності.",
		ctaButtonLabel: "Замовити консультацію",
		ctaImage: functional_training_default,
		ctaImageAlt: "Тренування для відновлення після травми",
		seoBadge: "ВІДНОВЛЕННЯ В БУКОВЕЛІ",
		seoTitle: "Реабілітація в ортопедії та травматології",
		seoLeadTitle: "Коли відновлення після травм і операцій має бути структурованим",
		seoLeadText: "Після переломів, ендопротезування чи реконструкції зв’язок важливо не просто рухатися, а робити це в правильний час і з правильним навантаженням.",
		seoSections: [
			{
				type: "h3",
				text: "Основна логіка програми"
			},
			{
				type: "p",
				text: "Ми рухаємося від відновлення рухливості до сили, стабільності, координації та повернення функції."
			},
			{
				type: "qa",
				q: "Чи можна починати відновлення одразу після зняття фіксації?",
				a: "Терміни залежать від типу травми, операції, рентгенологічних та клінічних даних. Рішення приймається індивідуально."
			},
			{
				type: "qa",
				q: "Чи допоможе програма повернутися до спорту?",
				a: "Так, якщо це безпечно у вашій ситуації. Ми оцінюємо готовність до спортивних навантажень поетапно."
			}
		],
		seoImage: consultation_default,
		seoImageAlt: "Консультація з ортопедичного відновлення",
		seoImageCaption: "Рух, сила і контроль",
		faq: [
			{
				question: "Коли можна починати реабілітацію після операції?",
				answer: "Це залежить від типу втручання, стану тканин і рекомендацій хірурга. Команда оцінює безпечний старт індивідуально."
			},
			{
				question: "Чи можна проходити програму після перелому?",
				answer: "Так, після медичної оцінки та з урахуванням стадії зрощення перелому й дозволеного навантаження."
			},
			{
				question: "Чи підходить програма після ендопротезування?",
				answer: "Так, відновлення після ендопротезування є одним із типових показань. Програма допомагає повернути опору, ходу та побутову активність."
			},
			{
				question: "Що робити, якщо рух у суглобі обмежений?",
				answer: "Ми оцінюємо причину обмеження і підбираємо вправи, темп навантаження та супровід для поступового відновлення амплітуди руху."
			},
			{
				question: "Чи можна повернутися до спорту?",
				answer: "Так, якщо стан дозволяє. Перед return-to-sport команда оцінює силу, стабільність, контроль руху та толерантність до навантаження."
			},
			{
				question: "Чи потрібні знімки або виписка?",
				answer: "Бажано мати виписку, рекомендації лікаря, результати операції, рентген, МРТ або інші доступні документи."
			}
		]
	},
	"rehab-vert": {
		heroTitle: "Реабілітація у вертебрології",
		heroSubtitle: "Лікування та відновлення при захворюваннях хребта",
		heroButtonLabel: "Записатися на консультацію",
		heroImage: therapy_session_default,
		heroImageAlt: "Реабілітація при захворюваннях хребта",
		introTitle: "Що таке реабілітація у вертебрології",
		introShort: "Це структурована програма допомоги при болю в попереку, шиї, грудному відділі, дегенеративних змінах хребта, радикулопатіях, ішіасі та післяопераційному відновленні.",
		introExpanded: "Програма базується на принципі: рухливість → контроль руху → сила → витривалість → функція → повернення до активності. Ми не використовуємо псевдомедичні обіцянки, а працюємо з функціональними порушеннями, симптомами та реальними цілями пацієнта.",
		introImage: consultation_default,
		introImageAlt: "Консультація щодо болю в спині",
		timingTitle: "Що варто знати перед початком програми",
		timingText: "При болю в спині або шиї важливо оцінити симптоми, неврологічний статус, рівень обмежень і те, як навантаження впливає на ваш стан.",
		timingColumns: [
			{
				title: "Показання",
				items: [
					"Біль у попереку, шиї або грудному відділі",
					"Міжхребцеві грижі та протрузії",
					"Радикулопатії та ішіас",
					"Спондильоз, спондилоартроз, стеноз",
					"Сколіоз і відновлення після операцій на хребті"
				]
			},
			{
				title: "Результати реабілітації",
				items: [
					"Краща рухливість і контроль руху",
					"Зменшення функціональних обмежень",
					"Покращення сили й витривалості",
					"Повернення до побутової активності",
					"Більш впевнене керування навантаженням"
				]
			},
			{
				title: "Протипоказання",
				items: [
					"Гострий невідкладний стан, що потребує термінової оцінки",
					"Наростаючий неврологічний дефіцит",
					"Гарячка, травма або інші ознаки неортопедичної причини болю",
					"Початок програми без медичної оцінки при тривожних симптомах"
				]
			}
		],
		timingStartTitle: "Початок програми",
		timingStartText: "Старт залежить від симптомів, рухових обмежень, результатів обстежень і медичних рекомендацій.",
		timingStartNote: "Ми оцінюємо не лише біль, а і якість руху, толерантність до навантаження, силу, витривалість та функцію.",
		timingStartImage: consultation_default,
		timingStartImageAlt: "Оцінка стану хребта",
		emergencyTitle: "Ознаки невідкладного стану",
		emergencyText: "Деякі симптоми потребують не реабілітації, а термінового медичного огляду.",
		emergencyItems: [
			"раптова слабкість у кінцівках",
			"порушення контролю сечовипускання або дефекації",
			"післятравматичний сильний біль у спині",
			"виражене погіршення стану з гарячкою або різким неврологічним дефіцитом"
		],
		conditionsTitle: "При яких станах хребта потрібне відновлення",
		conditionsText: "Поширені клінічні ситуації, коли структурована програма допомагає повернути функцію.",
		conditions: [
			{
				title: "Біль у попереку",
				text: "Робота з рухливістю, контролем навантаження та поступовим поверненням до звичних дій."
			},
			{
				title: "Біль у шиї",
				text: "Відновлення руху, сили, витривалості та зменшення рухових обмежень."
			},
			{
				title: "Грижі та протрузії",
				text: "Підбір вправ і навантаження відповідно до симптомів і функціонального стану."
			},
			{
				title: "Радикулопатія та ішіас",
				text: "Контроль симптомів, відновлення руху та повернення до активності у безпечному темпі."
			},
			{
				title: "Після операцій на хребті",
				text: "Поетапна реабілітація після стабілізації стану та за дозволом лікаря."
			}
		],
		processBadge: "Етапи відновлення",
		processTitle: "Як проходить відновлення?",
		processText: "Програма допомагає поступово повернути контроль руху, силу, витривалість і функцію без псевдомедичних обіцянок.",
		processSteps: [
			{
				title: "Клінічна оцінка",
				text: "Визначаємо характер симптомів, обмеження руху, тригери болю та поточний рівень функції."
			},
			{
				title: "Індивідуальний план",
				text: "Формуємо програму вправ, навантаження та рекомендацій з урахуванням вашого стану."
			},
			{
				title: "Робота з рухом і силою",
				text: "Працюємо над рухливістю, контролем руху, силою та витривалістю в безпечному діапазоні."
			},
			{
				title: "Повернення до активності",
				text: "Допомагаємо поступово повернутися до повсякденних завдань, роботи або тренувань."
			}
		],
		programsText: sharedProgramsText,
		otherServicesTitle: "Інші послуги",
		otherServicesText: "Суміжні напрями, які можуть бути корисними при захворюваннях хребта.",
		otherServices: [
			{
				title: "Ортопедія та травматологія",
				text: "Супровід при поєднаних станах суглобів, зв’язок і м’язово-скелетної системи.",
				to: "/reabilitatsiia/ortopedychna",
				image: service_rehab_default
			},
			{
				title: "Спортивна медицина",
				text: "Оцінка готовності до повернення у тренування після болю у спині чи шиї.",
				to: "/reabilitatsiia/sportyvna",
				image: service_sports_default
			},
			{
				title: "Психологічна підтримка",
				text: "Допомога при хронічному болю, тривозі й адаптації до тривалого відновлення.",
				to: "/reabilitatsiia/psykholohichna",
				image: consultation_default
			}
		],
		faqText: "Зібрали часті запитання про відновлення при захворюваннях хребта.",
		ctaBadge: "Вертебрологія",
		ctaTitleLines: [
			"Поверніться до",
			"руху без",
			"зайвих обмежень"
		],
		ctaText: "Допоможемо оцінити ваш функціональний стан, підібрати безпечне навантаження та побудувати реалістичний план повернення до активності при захворюваннях хребта.",
		ctaButtonLabel: "Замовити консультацію",
		ctaImage: therapy_session_default,
		ctaImageAlt: "Вправи для відновлення функції хребта",
		seoBadge: "ВІДНОВЛЕННЯ В БУКОВЕЛІ",
		seoTitle: "Реабілітація у вертебрології",
		seoLeadTitle: "Що дає структурована програма при захворюваннях хребта",
		seoLeadText: "При болю в спині чи шиї важливо не шукати швидких обіцянок, а працювати з функцією, контролем руху, силою та толерантністю до навантаження.",
		seoSections: [
			{
				type: "p",
				text: "Ми не «вправляємо хребет» і не обіцяємо «прибрати грижу». Наше завдання — допомогти вам рухатися краще й безпечніше."
			},
			{
				type: "qa",
				q: "Чи можна займатися при грижі диска?",
				a: "У багатьох випадках так, але програма має бути індивідуальною та враховувати симптоми, результати обстежень і поточну функцію."
			},
			{
				type: "qa",
				q: "Чи підходить програма після операції на хребті?",
				a: "Так, після дозволу лікаря та клінічної оцінки. Структура навантаження залежить від виду операції й етапу відновлення."
			}
		],
		seoImage: consultation_default,
		seoImageAlt: "Консультація з вертебрології",
		seoImageCaption: "Рух і контроль без зайвих обіцянок",
		faq: [
			{
				question: "Чи можна проходити програму при болю в попереку?",
				answer: "Так, якщо після оцінки немає ознак невідкладного стану, а навантаження підібране індивідуально."
			},
			{
				question: "Чи потрібне МРТ перед початком?",
				answer: "Не завжди. Ми враховуємо клінічну картину, доступні обстеження й медичні рекомендації."
			},
			{
				question: "Чи можна займатися при грижі або протрузії?",
				answer: "У багатьох випадках так. Рішення залежить від симптомів, функції та загальної клінічної ситуації."
			},
			{
				question: "Чи допоможе програма після операції на хребті?",
				answer: "Так, після дозволу лікаря та оцінки поточного стану. Програма будується поетапно."
			},
			{
				question: "Чи можна повернутися до тренувань?",
				answer: "Так, якщо це безпечно. Ми оцінюємо готовність до навантажень поступово."
			},
			{
				question: "Що робити, якщо біль посилюється?",
				answer: "Потрібно повідомити команду. Програму коригують за реакцією на навантаження та новими симптомами."
			}
		]
	},
	"rehab-revmatolohichna": {
		heroTitle: "Реабілітація в ревматології",
		heroSubtitle: "Профілактика • діагностика • лікування • відновлення • навчання • супровід",
		heroButtonLabel: "Записатися на консультацію",
		heroImage: functional_training_default,
		heroImageAlt: "Реабілітація в ревматології",
		introTitle: "Що таке реабілітація в ревматології",
		introShort: "Реабілітація в ревматології допомагає підтримувати рухливість, силу, витривалість і функціональну незалежність при хронічних захворюваннях опорно-рухового апарату та системних ревматологічних станах.",
		introExpanded: "Вона не замінює медикаментозне лікування ревматолога, а є частиною комплексного ведення пацієнта. Основний принцип: збереження рухливості → сила → витривалість → контроль навантаження → функціональна незалежність.",
		introImage: functional_training_default,
		introImageAlt: "Функціональне тренування при ревматологічних захворюваннях",
		timingTitle: "Що варто знати перед початком програми",
		timingText: "Програму адаптують до діагнозу, активності захворювання, болю, скутості, втоми та рівня повсякденного функціонування.",
		timingColumns: [
			{
				title: "Показання",
				items: [
					"Ревматоїдний артрит",
					"Псоріатичний артрит",
					"Аксіальний спондилоартрит та анкілозивний спондиліт",
					"Остеоартрит, остеопороз, подагра",
					"Фіброміалгія, слабкість, втома, зниження витривалості"
				]
			},
			{
				title: "Результати реабілітації",
				items: [
					"Підтримка рухливості суглобів",
					"Покращення сили та витривалості",
					"Кращий контроль навантаження",
					"Зменшення функціональних обмежень",
					"Підтримка самостійності в побуті"
				]
			},
			{
				title: "Протипоказання",
				items: [
					"Гострі медичні стани, що потребують окремої оцінки",
					"Виражене загострення з потребою корекції лікування",
					"Стан, при якому навантаження тимчасово не рекомендоване лікарем",
					"Початок без узгодження при високій активності захворювання"
				]
			}
		],
		timingStartTitle: "Початок програми",
		timingStartText: "Старт залежить від поточного стану, рівня болю, активності хвороби та рекомендацій ревматолога.",
		timingStartNote: "Команда враховує не тільки діагноз, а й втому, ранкову скутість, переносимість навантаження та супутні обмеження.",
		timingStartImage: functional_training_default,
		timingStartImageAlt: "Оцінка функціонального стану при ревматологічних захворюваннях",
		emergencyTitle: "Ознаки невідкладного стану",
		emergencyText: "При різкому погіршенні стану або симптомах, що потребують невідкладної допомоги, програму не продовжують без медичної оцінки.",
		emergencyItems: [
			"раптовий сильний набряк або гострий біль у суглобі",
			"виражена загальна слабкість із лихоманкою",
			"різке обмеження руху, яке швидко наростає",
			"нові симптоми, що потребують термінової медичної оцінки"
		],
		conditionsTitle: "При яких ревматологічних захворюваннях потрібна реабілітація",
		conditionsText: "Ситуації, коли структурована фізична активність і функціональна підтримка є важливою частиною комплексного ведення.",
		conditions: [
			{
				title: "Ревматоїдний артрит",
				text: "Підтримка рухливості, сили та контроль навантаження у поєднанні з лікуванням ревматолога."
			},
			{
				title: "Псоріатичний артрит",
				text: "Робота з болем, скутістю, силою та функціональною витривалістю."
			},
			{
				title: "Аксіальний спондилоартрит",
				text: "Підтримка руху, постави, сили і щоденної активності."
			},
			{
				title: "Остеоартрит",
				text: "Зменшення функціональних обмежень і покращення переносимості навантажень."
			},
			{
				title: "Фіброміалгія",
				text: "Поступове й обережне підвищення фізичної активності з урахуванням втоми та чутливості до навантаження."
			}
		],
		processBadge: "Етапи відновлення",
		processTitle: "Як проходить відновлення?",
		processText: "Програму будують з урахуванням активності захворювання, симптомів і реальних функціональних цілей пацієнта.",
		processSteps: [
			{
				title: "Оцінка стану",
				text: "Враховуємо діагноз, активність процесу, біль, скутість, втому і поточну функцію."
			},
			{
				title: "Індивідуальний план",
				text: "Підбираємо обсяг активності, вправ і темп прогресії без перевантаження."
			},
			{
				title: "Тренування та навчання",
				text: "Працюємо над рухливістю, силою, витривалістю та самоконтролем навантаження."
			},
			{
				title: "Довгострокова підтримка",
				text: "Формуємо рекомендації для самостійної активності й збереження функціональної незалежності."
			}
		],
		programsText: sharedProgramsText,
		otherServicesTitle: "Інші послуги",
		otherServicesText: "Напрями, які можуть доповнити ревматологічну реабілітацію.",
		otherServices: [
			{
				title: "Профілактична реабілітація",
				text: "Підтримка активності, сили та витривалості у довгостроковій перспективі.",
				to: "/reabilitatsiia/profilaktychna",
				image: service_rehab_default
			},
			{
				title: "Психологічна підтримка",
				text: "Допомога в адаптації до хронічного захворювання, втоми та тривалого лікування.",
				to: "/reabilitatsiia/psykholohichna",
				image: consultation_default
			},
			{
				title: "Лікувальний басейн",
				text: "Робота з рухом у середовищі зі зниженим навантаженням на суглоби.",
				to: "/vidnovlennia/likuvalnyi-basein",
				image: therapy_session_default
			}
		],
		faqText: "Поширені запитання про роль реабілітації при ревматологічних захворюваннях.",
		ctaBadge: "Ревматологія",
		ctaTitleLines: [
			"Зберігайте",
			"рухливість та",
			"залишайтеся активними"
		],
		ctaText: "Допоможемо побудувати програму фізичної активності, що доповнює лікування ревматолога та враховує ваші симптоми, функціональні обмеження і життєві цілі.",
		ctaButtonLabel: "Замовити консультацію",
		ctaImage: functional_training_default,
		ctaImageAlt: "Реабілітація в ревматології",
		seoBadge: "ВІДНОВЛЕННЯ В БУКОВЕЛІ",
		seoTitle: "Реабілітація в ревматології",
		seoLeadTitle: "Чому реабілітація важлива при хронічних ревматологічних станах",
		seoLeadText: "Структурована фізична активність допомагає підтримувати функцію, але вона має доповнювати, а не замінювати медикаментозне лікування.",
		seoSections: [
			{
				type: "p",
				text: "Реабілітація є частиною комплексного ведення пацієнта разом із ревматологом."
			},
			{
				type: "qa",
				q: "Чи можна тренуватися при ревматоїдному артриті?",
				a: "Так, але програма має враховувати активність захворювання, біль, втому та рекомендації лікаря."
			},
			{
				type: "qa",
				q: "Чи замінює реабілітація лікування ревматолога?",
				a: "Ні. Вона є додатковою складовою комплексного ведення і не замінює медикаментозну терапію."
			}
		],
		seoImage: consultation_default,
		seoImageAlt: "Консультація при ревматологічних станах",
		seoImageCaption: "Рухливість, сила і самостійність",
		faq: [
			{
				question: "Чи замінює реабілітація лікування у ревматолога?",
				answer: "Ні. Реабілітація доповнює медикаментозне лікування і є частиною комплексного ведення."
			},
			{
				question: "Чи можна займатися під час болю та скутості?",
				answer: "У багатьох випадках так, але навантаження має бути адаптоване до поточного стану."
			},
			{
				question: "Чи допоможе програма при втомі?",
				answer: "Так, робота з витривалістю, дозуванням активності та відновленням може допомогти краще керувати втомою."
			},
			{
				question: "Чи підходить реабілітація при остеоартриті?",
				answer: "Так. Програма допомагає підтримувати рух, силу та функціональну активність."
			},
			{
				question: "Що робити при загостренні захворювання?",
				answer: "Потрібно повідомити команду та, за потреби, узгодити подальші кроки з ревматологом."
			},
			{
				question: "Чи можна займатися при остеопорозі?",
				answer: "Так, але програма повинна враховувати ризики, силу, баланс і тип допустимого навантаження."
			}
		]
	},
	"rehab-psykholohichna": {
		heroTitle: "Психічне (ментальне) здоров’я",
		heroSubtitle: "Психологічна підтримка • адаптація • якість життя",
		heroButtonLabel: "Записатися на консультацію",
		heroImage: consultation_default,
		heroImageAlt: "Психологічна консультація",
		introTitle: "Що таке напрям психічного (ментального) здоров’я",
		introShort: "Це підтримка людей, які переживають стрес, тривогу, емоційне виснаження, труднощі адаптації, порушення сну, втрату, травматичний досвід або психологічні виклики під час фізичного відновлення.",
		introExpanded: "Основний принцип: емоційна рівновага → адаптація → стресостійкість → підтримка → якість життя. Важливо розрізняти психологічну допомогу, психотерапевтичну допомогу та психіатричну допомогу. Консультація психолога не замінює психіатричної оцінки у станах, що потребують медичної діагностики та лікування.",
		introImage: consultation_default,
		introImageAlt: "Розмова з психологом",
		timingTitle: "Що варто знати перед початком програми",
		timingText: "Ментальне здоров’я є важливою частиною загального відновлення, особливо після захворювань, травм, операцій або складних життєвих подій.",
		timingColumns: [
			{
				title: "Показання",
				items: [
					"Стрес, тривога, емоційне виснаження",
					"Порушення сну і труднощі адаптації",
					"Переживання втрати або травматичного досвіду",
					"Психологічна адаптація після захворювання",
					"Психологічний супровід фізичної реабілітації"
				]
			},
			{
				title: "Результати підтримки",
				items: [
					"Краща емоційна рівновага",
					"Покращення адаптації до змін",
					"Підвищення стресостійкості",
					"Краща залученість у відновлення",
					"Покращення якості життя"
				]
			},
			{
				title: "Коли потрібна інша допомога",
				items: [
					"Стани, що потребують психіатричної діагностики",
					"Ситуації з ризиком для безпеки людини",
					"Потреба в медикаментозному лікуванні",
					"Необхідність вузькоспеціалізованої психотерапії"
				]
			}
		],
		timingStartTitle: "Початок програми",
		timingStartText: "Перший крок — зрозуміти ваш запит, актуальні труднощі та формат підтримки, який потрібен саме зараз.",
		timingStartNote: "На первинній зустрічі ми окреслюємо межі психологічної допомоги та за потреби рекомендуємо суміжних фахівців.",
		timingStartImage: consultation_default,
		timingStartImageAlt: "Початок психологічного супроводу",
		emergencyTitle: "Коли потрібна невідкладна допомога",
		emergencyText: "У деяких ситуаціях першочергово потрібна не планова консультація, а термінове звернення по спеціалізовану медичну допомогу.",
		emergencyItems: [
			"ризик самопошкодження або суїцидальні думки",
			"різке порушення контакту з реальністю",
			"стан, що загрожує безпеці людини чи оточення",
			"гостре психічне погіршення, яке потребує медичної оцінки"
		],
		conditionsTitle: "Коли варто звернутися по психологічну допомогу",
		conditionsText: "Поширені запити, з якими може бути корисним психологічний супровід.",
		conditions: [
			{
				title: "Стрес і тривога",
				text: "Підтримка у ситуаціях емоційного перенапруження, невизначеності та тривожних переживань."
			},
			{
				title: "Емоційне виснаження",
				text: "Робота з втомою, виснаженням ресурсів і відновленням стабільності."
			},
			{
				title: "Порушення сну",
				text: "Оцінка психологічних чинників і підтримка у формуванні більш стабільного режиму."
			},
			{
				title: "Переживання втрати",
				text: "Психологічний супровід у період проживання втрати та адаптації до змін."
			},
			{
				title: "Супровід фізичної реабілітації",
				text: "Допомога у мотивації, адаптації та поверненні до активного життя після хвороби чи травми."
			}
		],
		processBadge: "Етапи підтримки",
		processTitle: "Як проходить супровід?",
		processText: "Формат підтримки залежить від вашого запиту, емоційного стану та того, яка допомога є найбільш доречною саме зараз.",
		processSteps: [
			{
				title: "Первинна зустріч",
				text: "Уточнюємо запит, поточні труднощі, контекст ситуації та межі психологічної допомоги."
			},
			{
				title: "Формування плану",
				text: "Погоджуємо формат підтримки, частоту зустрічей та орієнтири роботи."
			},
			{
				title: "Психологічний супровід",
				text: "Працюємо з емоційною регуляцією, адаптацією, стресостійкістю та ресурсністю."
			},
			{
				title: "Подальші рекомендації",
				text: "За потреби рекомендуємо психотерапевтичну або психіатричну допомогу, якщо цього вимагає стан."
			}
		],
		programsText: sharedProgramsText,
		otherServicesTitle: "Інші послуги",
		otherServicesText: "Суміжні напрями, які можуть бути важливими в процесі відновлення.",
		otherServices: [
			{
				title: "Профілактична реабілітація",
				text: "Підтримка активності, самостійності й якості життя у довгостроковій перспективі.",
				to: "/reabilitatsiia/profilaktychna",
				image: service_rehab_default
			},
			{
				title: "Спортивна медицина",
				text: "Допомога людям, які повертаються до тренувань після перерви, стресу чи травми.",
				to: "/reabilitatsiia/sportyvna",
				image: service_sports_default
			},
			{
				title: "Ортопедія та травматологія",
				text: "Психологічний супровід відновлення після травм, болю й тривалого обмеження руху.",
				to: "/reabilitatsiia/ortopedychna",
				image: service_rehab_default
			}
		],
		faqText: "Зібрали запитання про психологічну підтримку, психотерапевтичну і психіатричну допомогу.",
		ctaBadge: "Ментальне здоров’я",
		ctaTitleLines: [
			"Піклування про себе",
			"може починатися",
			"з розмови"
		],
		ctaText: "Допоможемо визначити, який формат підтримки доречний саме зараз, і разом окреслимо перший крок до кращої емоційної рівноваги та якості життя.",
		ctaButtonLabel: "Замовити консультацію",
		ctaImage: consultation_default,
		ctaImageAlt: "Психологічна підтримка",
		seoBadge: "ПІДТРИМКА В БУКОВЕЛІ",
		seoTitle: "Психічне (ментальне) здоров’я",
		seoLeadTitle: "Чому психологічна підтримка може бути частиною відновлення",
		seoLeadText: "Емоційний стан впливає на сон, мотивацію, здатність адаптуватися до змін і брати участь у фізичному відновленні.",
		seoSections: [
			{
				type: "p",
				text: "Психологічна допомога не тотожна психотерапії й не замінює психіатричної допомоги у станах, що потребують медичної діагностики."
			},
			{
				type: "qa",
				q: "Коли достатньо психологічної консультації?",
				a: "Коли йдеться про підтримку, адаптацію, стрес, тривогу, емоційне виснаження чи переживання змін."
			},
			{
				type: "qa",
				q: "Коли потрібна психіатрична допомога?",
				a: "Коли стан потребує медичної діагностики, оцінки ризиків або можливого медикаментозного лікування."
			}
		],
		seoImage: consultation_default,
		seoImageAlt: "Ментальне здоров’я",
		seoImageCaption: "Підтримка, адаптація і якість життя",
		faq: [
			{
				question: "Чим відрізняється психологічна допомога від психотерапевтичної?",
				answer: "Психологічна допомога може бути підтримувальною та консультативною. Психотерапевтична допомога передбачає окремий формат довшої цілеспрямованої роботи."
			},
			{
				question: "Чи замінює консультація психолога психіатра?",
				answer: "Ні. Якщо стан потребує психіатричної оцінки або лікування, психолог не замінює психіатра."
			},
			{
				question: "Чи можна звертатися через стрес і безсоння?",
				answer: "Так. Це поширені запити, з якими психологічна підтримка може бути корисною."
			},
			{
				question: "Чи підходить супровід після хвороби або травми?",
				answer: "Так. Психологічна адаптація після захворювання чи травми є важливою частиною повернення до активного життя."
			},
			{
				question: "Чи працюєте ви з переживанням втрати?",
				answer: "Так, у межах психологічного супроводу ми можемо підтримати людину в період проживання втрати та адаптації."
			},
			{
				question: "Як зрозуміти, куди звертатися спочатку?",
				answer: "Почніть із консультації. Ми допоможемо зорієнтуватися, який формат допомоги є найбільш доречним."
			}
		]
	},
	"rehab-sportyvna": {
		heroTitle: "Спортивна медицина",
		heroSubtitle: "Здоров’я → функціональна оцінка → навантаження → профілактика → результат → повернення до спорту",
		heroButtonLabel: "Записатися на консультацію",
		heroImage: service_sports_default,
		heroImageAlt: "Спортивна медицина в ОСНОВА",
		introTitle: "Що таке спортивна медицина",
		introShort: "Це напрям для людей, які тренуються професійно або для себе, повертаються після травми, готуються до стартів або хочуть безпечніше планувати фізичні навантаження.",
		introExpanded: "Спортивна медицина охоплює оцінку готовності до навантажень, кардіологічну, ортопедо-травматологічну та вертебрологічну оцінку, функціональну діагностику, контроль навантаження, профілактику травм, відновлення та return-to-sport testing.",
		introImage: service_sports_default,
		introImageAlt: "Оцінка готовності до фізичних навантажень",
		timingTitle: "Що варто знати перед початком програми",
		timingText: "Спортивна медицина потрібна не лише професійним спортсменам. Вона актуальна для початківців, людей після перерви, 35+, 45+, 60+, а також для тих, хто готується до змагань.",
		timingColumns: [
			{
				title: "Показання",
				items: [
					"Повернення до тренувань після перерви",
					"Підготовка до стартів або підвищення навантажень",
					"Після травм і перед return-to-sport",
					"Потреба у спортивному чекапі",
					"Профілактика спортивних травм і контроль навантаження"
				]
			},
			{
				title: "Результати оцінки",
				items: [
					"Розуміння готовності до навантаження",
					"Більш безпечне планування тренувань",
					"Оцінка функціональних обмежень",
					"Кращий контроль відновлення",
					"Повернення до спорту на основі критеріїв"
				]
			},
			{
				title: "Протипоказання",
				items: [
					"Гострі стани без завершеної медичної оцінки",
					"Симптоми, що потребують окремого обстеження",
					"Погіршення стану під час навантаження",
					"Повернення в спорт без завершеного етапу відновлення"
				]
			}
		],
		timingStartTitle: "Початок програми",
		timingStartText: "Старт залежить від вашої мети: чекап, оцінка готовності до навантаження, повернення після травми або побудова плану відновлення.",
		timingStartNote: "Ми враховуємо вік, рівень підготовки, медичну історію, спортивний контекст і результати функціональних тестів.",
		timingStartImage: service_sports_default,
		timingStartImageAlt: "Функціональна оцінка в спортивній медицині",
		emergencyTitle: "Ознаки невідкладного стану",
		emergencyText: "Якщо під час навантаження або після нього з’являються небезпечні симптоми, потрібно не продовжувати тренування, а звернутися по медичну допомогу.",
		emergencyItems: [
			"біль у грудях, запаморочення або втрата свідомості",
			"виражена задишка, нехарактерна для навантаження",
			"гостра травма з деформацією або різким болем",
			"раптове погіршення стану під час або після тренування"
		],
		conditionsTitle: "Коли варто звернутися до спортивного лікаря",
		conditionsText: "Запити, з якими спортивна медицина може бути корисною людям різного рівня активності.",
		conditions: [
			{
				title: "Перед стартом тренувань",
				text: "Оцінка готовності до фізичних навантажень після перерви або перед новим циклом."
			},
			{
				title: "Перед змаганнями",
				text: "Функціональна оцінка для більш усвідомленого планування навантаження та відновлення."
			},
			{
				title: "Після травми",
				text: "Перевірка готовності до повернення в тренування або спорт після відновлення."
			},
			{
				title: "При підозрі на перевантаження",
				text: "Аналіз симптомів, функції та толерантності до навантаження."
			},
			{
				title: "Для спортивного чекапу",
				text: "Комплексна оцінка для тих, хто тренується для себе або професійно."
			}
		],
		processBadge: "Етапи оцінки",
		processTitle: "Як проходить оцінка та супровід?",
		processText: "Ми поєднуємо медичну оцінку, функціональну діагностику та практичні рекомендації для безпечної фізичної активності.",
		processSteps: [
			{
				title: "Первинна оцінка",
				text: "Збираємо медичний і спортивний анамнез, визначаємо мету та поточні ризики."
			},
			{
				title: "Функціональне тестування",
				text: "За потреби застосовуємо CPET, велоергометрію, тредміл, нейром’язове тестування, аналіз ходьби та інші методи."
			},
			{
				title: "План навантаження",
				text: "Формуємо рекомендації щодо тренувань, профілактики травм, відновлення або повернення у спорт."
			},
			{
				title: "Контроль і повторна оцінка",
				text: "За потреби переглядаємо план на основі прогресу, симптомів і результатів тестів."
			}
		],
		programsText: sharedProgramsText,
		otherServicesTitle: "Інші послуги",
		otherServicesText: "Напрями, які часто поєднуються зі спортивною медициною.",
		otherServices: [
			{
				title: "Кардіологічна діагностика",
				text: "Кардіологічна оцінка готовності до навантажень, CPET, тредміл-тест або велоергометрія.",
				to: "/diagnostyka/kardiodiahnostyka",
				image: cpet_test_default
			},
			{
				title: "Ортопедія та травматологія",
				text: "Оцінка після спортивних травм, операцій та підготовка до повернення у спорт.",
				to: "/reabilitatsiia/ortopedychna",
				image: service_rehab_default
			},
			{
				title: "Вертебрологія",
				text: "Супровід людей із болем у спині або шиї, які хочуть безпечніше тренуватися.",
				to: "/reabilitatsiia/vertebrolohichna",
				image: therapy_session_default
			}
		],
		faqText: "Поширені запитання про спортивну медицину для професіоналів і людей, які тренуються для себе.",
		ctaBadge: "Спортивна медицина",
		ctaTitleLines: [
			"Тренуйтеся,",
			"розуміючи можливості",
			"свого організму"
		],
		ctaText: "Допоможемо оцінити готовність до навантажень, вчасно побачити обмеження та побудувати безпечний маршрут до тренувань, стартів або повернення в спорт.",
		ctaButtonLabel: "Замовити консультацію",
		ctaImage: service_sports_default,
		ctaImageAlt: "Спортивне тестування",
		seoBadge: "СПОРТИВНА ОЦІНКА В БУКОВЕЛІ",
		seoTitle: "Спортивна медицина",
		seoLeadTitle: "Кому підходить спортивна медицина",
		seoLeadText: "Не лише професійним спортсменам. Цей напрям корисний людям, які тренуються для себе, повертаються після паузи, хочуть безпечніше збільшити навантаження або повернутися після травми.",
		seoSections: [{
			type: "qa",
			q: "Чи потрібна спортивна медицина, якщо я не професійний спортсмен?",
			a: "Так. Оцінка корисна всім, хто планує або вже виконує регулярні фізичні навантаження."
		}, {
			type: "qa",
			q: "Що таке return-to-sport testing?",
			a: "Це оцінка, яка допомагає зрозуміти, чи готова людина безпечніше повертатися до спортивної активності після травми або перерви."
		}],
		seoImage: service_sports_default,
		seoImageAlt: "Спортивна медицина",
		seoImageCaption: "Оцінка, навантаження і результат",
		faq: [
			{
				question: "Чи підходить спортивна медицина тим, хто тренується для себе?",
				answer: "Так. Це напрям не лише для професійних спортсменів, а й для людей будь-якого рівня фізичної активності."
			},
			{
				question: "Чи можна звернутися після довгої перерви?",
				answer: "Так. Ми допомагаємо оцінити готовність до повернення у фізичну активність після паузи."
			},
			{
				question: "Які тести можуть знадобитися?",
				answer: "Залежно від запиту це можуть бути CPET, велоергометрія, тредміл-тест, функціональне або нейром’язове тестування."
			},
			{
				question: "Чи допомагаєте ви після спортивних травм?",
				answer: "Так. Ми оцінюємо стан після травми та допомагаємо спланувати повернення до навантажень."
			},
			{
				question: "Що таке спортивний чекап?",
				answer: "Це комплексна оцінка здоров’я, функції та готовності до фізичних навантажень."
			},
			{
				question: "Чи можна звернутися перед змаганнями?",
				answer: "Так. Це допомагає краще зрозуміти функціональний стан і підготуватися до навантажень."
			}
		]
	},
	"rehab-profilaktychna": {
		heroTitle: "Профілактична (превентивна) реабілітація",
		heroSubtitle: "Оцінка → профілактика функціонального зниження → фізична активність → сила → витривалість → активне довголіття",
		heroButtonLabel: "Записатися на консультацію",
		heroImage: service_rehab_default,
		heroImageAlt: "Профілактична реабілітація",
		introTitle: "Що таке профілактична (превентивна) реабілітація",
		introShort: "Це напрям для людей, які хочуть оцінити функціональний стан, підтримати силу, витривалість, баланс, координацію та самостійність, а також безпечніше повернутися до фізичної активності.",
		introExpanded: "Мета програми — не «зупинити старіння» і не «гарантувати відсутність травм», а допомогти вчасно побачити функціональне зниження, підвищити рухову активність і підтримати активне довголіття.",
		introImage: movement_testing_default,
		introImageAlt: "Функціональна оцінка для профілактичної реабілітації",
		timingTitle: "Що варто знати перед початком програми",
		timingText: "Програма підходить людям із малорухливим способом життя, віковими функціональними змінами, після перерви у фізичній активності або перед збільшенням навантаження.",
		timingColumns: [
			{
				title: "Показання",
				items: [
					"Зниження сили, витривалості або мобільності",
					"Порушення балансу чи координації",
					"Профілактика падінь",
					"Підготовка до збільшення фізичних навантажень",
					"Повернення до активності після перерви"
				]
			},
			{
				title: "Результати програми",
				items: [
					"Краща сила і витривалість",
					"Підтримка ходьби, балансу й координації",
					"Більш усвідомлена фізична активність",
					"Збереження самостійності у повсякденному житті",
					"Підтримка активного довголіття"
				]
			},
			{
				title: "Протипоказання",
				items: [
					"Гострий стан без медичної оцінки",
					"Симптоми, що потребують окремого обстеження",
					"Погіршення самопочуття під час активності",
					"Початок програми без уточнення причин вираженого функціонального зниження"
				]
			}
		],
		timingStartTitle: "Початок програми",
		timingStartText: "Старт починається з оцінки того, як ви рухаєтеся, переносите навантаження і які функціональні завдання зараз даються найскладніше.",
		timingStartNote: "Після оцінки ми підбираємо реалістичний план активності, що відповідає вашому рівню, віку, супутнім станам і цілям.",
		timingStartImage: movement_testing_default,
		timingStartImageAlt: "Оцінка ходьби та балансу",
		emergencyTitle: "Ознаки невідкладного стану",
		emergencyText: "Якщо під час активності з’являються небезпечні симптоми, заняття не продовжують без медичної оцінки.",
		emergencyItems: [
			"раптовий біль у грудях або виражена задишка",
			"запаморочення або втрата свідомості",
			"раптове різке погіршення ходьби або рівноваги",
			"новий сильний біль, слабкість або інші гострі симптоми"
		],
		conditionsTitle: "Коли варто пройти функціональну оцінку",
		conditionsText: "Ситуації, коли профілактична програма допомагає підтримати активність і самостійність.",
		conditions: [
			{
				title: "Після тривалої малорухливості",
				text: "Поступове повернення до фізичної активності з урахуванням сили, витривалості та балансу."
			},
			{
				title: "При вікових функціональних змінах",
				text: "Підтримка рухливості, ходьби, координації та самостійності у щоденному житті."
			},
			{
				title: "При ризику падінь",
				text: "Робота з балансом, координацією та безпечнішими патернами руху."
			},
			{
				title: "Перед збільшенням навантаження",
				text: "Оцінка готовності до активнішого способу життя або нової програми тренувань."
			},
			{
				title: "Для активного довголіття",
				text: "Підтримка фізичних можливостей сьогодні, щоб довше залишатися самостійними."
			}
		],
		processBadge: "Етапи підтримки",
		processTitle: "Як проходить програма?",
		processText: "Ми починаємо з функціональної оцінки, а далі поступово будуємо безпечний план фізичної активності, сили та витривалості.",
		processSteps: [
			{
				title: "Функціональна оцінка",
				text: "Визначаємо рівень сили, мобільності, витривалості, балансу, координації та ходьби."
			},
			{
				title: "Індивідуальний маршрут",
				text: "Підбираємо обсяг активності та вправ відповідно до ваших цілей і поточного рівня."
			},
			{
				title: "Поступове навантаження",
				text: "Працюємо над силою, витривалістю, координацією та впевненішим рухом."
			},
			{
				title: "Підтримка активності",
				text: "Формуємо звичку до регулярної активності та рекомендації для тривалого самостійного руху."
			}
		],
		programsText: sharedProgramsText,
		otherServicesTitle: "Інші послуги",
		otherServicesText: "Суміжні напрями, які можуть доповнити профілактичний маршрут.",
		otherServices: [
			{
				title: "Спортивна медицина",
				text: "Оцінка готовності до підвищення фізичних навантажень або повернення в тренування.",
				to: "/reabilitatsiia/sportyvna",
				image: service_sports_default
			},
			{
				title: "Кардіологічна діагностика",
				text: "Додаткова оцінка, якщо потрібно зрозуміти безпеку навантажень для серцево-судинної системи.",
				to: "/diagnostyka/kardiodiahnostyka",
				image: ecg_review_default
			},
			{
				title: "Психологічна підтримка",
				text: "Підтримка мотивації, адаптації та формування нових поведінкових звичок.",
				to: "/reabilitatsiia/psykholohichna",
				image: consultation_default
			}
		],
		faqText: "Поширені запитання про профілактичну та превентивну реабілітацію.",
		ctaBadge: "Профілактична реабілітація",
		ctaTitleLines: [
			"Підтримуйте свої",
			"фізичні можливості",
			"сьогодні"
		],
		ctaText: "Допоможемо оцінити функціональний стан, знайти реалістичний рівень активності та побудувати програму, що підтримує силу, витривалість і самостійність.",
		ctaButtonLabel: "Замовити консультацію",
		ctaImage: movement_testing_default,
		ctaImageAlt: "Профілактична реабілітація",
		seoBadge: "АКТИВНІСТЬ В БУКОВЕЛІ",
		seoTitle: "Профілактична (превентивна) реабілітація",
		seoLeadTitle: "Навіщо потрібна функціональна оцінка до появи виражених обмежень",
		seoLeadText: "Раннє виявлення зниження сили, витривалості, балансу або ходьби допомагає вчасно адаптувати фізичну активність і зберігати самостійність.",
		seoSections: [
			{
				type: "p",
				text: "Мета програми — підтримати функцію і активність, а не давати нереалістичні обіцянки на кшталт «зупинимо старіння»."
			},
			{
				type: "qa",
				q: "Кому підходить ця програма?",
				a: "Людям після перерви в активності, при вікових функціональних змінах, ризику падінь або бажанні безпечніше збільшити навантаження."
			},
			{
				type: "qa",
				q: "Чи гарантує програма відсутність травм?",
				a: "Ні. Вона допомагає краще підготуватися до активності, але не дає абсолютних гарантій."
			}
		],
		seoImage: movement_testing_default,
		seoImageAlt: "Функціональна оцінка",
		seoImageCaption: "Сила, витривалість і активне довголіття",
		faq: [
			{
				question: "Кому підходить профілактична реабілітація?",
				answer: "Людям, які хочуть підтримати активність, силу, витривалість, баланс і самостійність або повернутися до руху після перерви."
			},
			{
				question: "Чи потрібна програма, якщо я просто мало рухаюся?",
				answer: "Так. Функціональна оцінка допомагає зрозуміти, з чого безпечніше почати і як поступово збільшувати активність."
			},
			{
				question: "Чи можна пройти оцінку перед тренуваннями?",
				answer: "Так. Це корисно перед стартом нової програми фізичної активності або перед підвищенням навантаження."
			},
			{
				question: "Чи допомагає програма при ризику падінь?",
				answer: "Так. Ми працюємо з балансом, координацією, силою та ходьбою."
			},
			{
				question: "Чи підходить програма людям старшого віку?",
				answer: "Так. Один із ключових напрямів — підтримка функції та активного довголіття."
			},
			{
				question: "Чи обіцяє програма запобігти всім хворобам?",
				answer: "Ні. Її мета — підтримка функціональних можливостей і більш усвідомлена фізична активність."
			}
		]
	}
};
var ANCHORS$1 = [
	{
		href: "#about",
		label: "Про програму"
	},
	{
		href: "#for-whom",
		label: "Кому підходить"
	},
	{
		href: "#process",
		label: "Як проходить"
	},
	{
		href: "#programs",
		label: "Вартість"
	},
	{
		href: "#documents",
		label: "Документи"
	},
	{
		href: "#faq",
		label: "FAQ"
	}
];
var TIMING_COLUMN_STYLES = [
	{
		icon: Heart,
		iconColor: "text-primary",
		iconBg: "bg-primary/10",
		bulletColor: "bg-primary"
	},
	{
		icon: CircleCheck,
		iconColor: "text-emerald-500",
		iconBg: "bg-emerald-50",
		bulletColor: "bg-emerald-500"
	},
	{
		icon: TriangleAlert,
		iconColor: "text-amber-500",
		iconBg: "bg-amber-50",
		bulletColor: "bg-amber-500"
	}
];
var PROCESS_STEP_ICONS = [
	{ icon: FileSearch },
	{ icon: ClipboardPenLine },
	{ icon: Dumbbell },
	{ icon: ChartLine }
];
var CARE_FORMATS$1 = [
	"стаціонарна",
	"амбулаторна",
	"денна",
	"домашня",
	"дистанційна (телереабілітація)"
];
var CONDITION_IMAGES$1 = [
	cpet_test_default,
	service_rehab_default,
	ecg_review_default,
	service_checkup_default,
	service_sports_default
];
var FAQ_VISIBLE_COUNT$1 = 3;
var CARDIO_PROGRAMS$1 = CARDIO_REHAB_PROGRAMS.map((program) => ({
	title: program.title,
	shortDescription: program.description,
	duration: program.duration,
	priceLabel: program.price,
	route: program.detailsUrl,
	isPopular: program.id === "standartna"
}));
var SUPPORT_HIGHLIGHTS$1 = [
	{
		id: "senior",
		title: "Акція 60+",
		description: "Знижка 10% на стартову консультацію та супровід первинного етапу програми.",
		ctaLabel: "Детальніше",
		ctaHref: "#documents",
		icon: CalendarDays$1,
		iconClass: "bg-lime-100/95 text-lime-700 ring-lime-200/90 shadow-[0_14px_28px_rgba(132,204,22,0.14)]"
	},
	{
		id: "military",
		title: "Для військових і ветеранів",
		description: "Спеціальні умови на програму відновлення та швидший старт після розгляду документів.",
		ctaLabel: "Детальніше",
		ctaHref: "#documents",
		icon: ShieldCheck,
		iconClass: "bg-emerald-100/92 text-emerald-700 ring-emerald-200/90 shadow-[0_14px_28px_rgba(52,211,153,0.18)]"
	},
	{
		id: "social",
		title: "Соціальні проєкти",
		description: "Окремі умови для групових програм відновлення та адресної підтримки під запит.",
		ctaLabel: "Детальніше",
		ctaHref: "/sotsialni-proiekty",
		icon: HandHeart,
		iconClass: "bg-teal-100/92 text-teal-700 ring-teal-200/90 shadow-[0_14px_28px_rgba(45,212,191,0.16)]"
	}
];
var ALL_SERVICES_ROUTE$1 = getNodeById("services")?.route ?? "/poslugy";
function CardioRehabPage({ node }) {
	const data = getServicePageData(node);
	const pageConfig = rehabTemplateConfigs[node.id] ?? rehabTemplateConfigs["rehab-cardio"];
	node.pageContent;
	const { openModal } = useConsultationModal();
	const [introExpanded, setIntroExpanded] = import_react.useState(false);
	const [showAllConditions, setShowAllConditions] = import_react.useState(false);
	const [faqExpanded, setFaqExpanded] = import_react.useState(false);
	const [documentsModalOpen, setDocumentsModalOpen] = import_react.useState(false);
	const allConditionCards = pageConfig.conditions;
	const visibleConditionCards = showAllConditions ? allConditionCards : allConditionCards.slice(0, 3);
	const programCards = CARDIO_PROGRAMS$1.map((program, index) => ({
		...program,
		id: `cardio-program-${index}`,
		route: node.children?.[index]?.route || node.route
	}));
	const faqItems = pickFaqItems$1((node.faq && node.faq.length > 0 ? node.faq : pageConfig.faq) || []);
	const visibleFaqItems = faqExpanded ? faqItems : faqItems.slice(0, FAQ_VISIBLE_COUNT$1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-navy-deep",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: pageConfig.heroImage || data.heroImage,
							alt: pageConfig.heroImageAlt,
							width: 1400,
							height: 900,
							className: "absolute inset-0 size-full object-cover object-right opacity-50 mix-blend-luminosity lg:opacity-90"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy-deep/25" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mx-auto grid max-w-[1600px] gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:min-h-[620px] lg:px-10 lg:py-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex max-w-3xl flex-col justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex w-fit items-center rounded-full bg-sky-100/95 px-3.5 py-1 text-xs font-semibold tracking-[0.12em] text-navy ring-1 ring-white/50",
										children: data.heroEyebrow
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-5 text-3xl font-extrabold leading-[1.08] text-background sm:text-5xl lg:text-6xl",
										children: pageConfig.heroTitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-2xl text-base leading-relaxed text-background/86 sm:text-lg",
										children: pageConfig.heroSubtitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => openModal("Записатися на консультацію"),
											className: "inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-green px-6 py-3 text-sm font-bold text-brand-green-foreground shadow-md transition-colors hover:bg-brand-green/90 sm:min-h-14 sm:px-8",
											children: pageConfig.heroButtonLabel
										})
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnchorNav$1, { breadcrumbItems: getBreadcrumbs(node) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection$1, {
					id: "about",
					className: "pt-10 sm:pt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandableIntroSection$1, {
						title: pageConfig.introTitle,
						shortDescription: pageConfig.introShort,
						expandedContent: pageConfig.introExpanded,
						image: pageConfig.introImage || data.introImage,
						imageAlt: pageConfig.introImageAlt,
						isExpanded: introExpanded,
						onToggle: () => setIntroExpanded((value) => !value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection$1, {
					className: "pb-10 sm:pb-16 mt-6 sm:mt-10 lg:mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimingSection$1, { pageConfig })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "for-whom",
					className: "scroll-mt-24 bg-white py-12 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mx-auto max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl",
										children: pageConfig.conditionsTitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-1 w-16 rounded-full bg-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-3xl text-base leading-relaxed text-navy/76",
										children: pageConfig.conditionsText
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid justify-center gap-7 sm:grid-cols-2 lg:grid-cols-3",
								children: visibleConditionCards.map((card, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConditionCard$1, {
									card,
									image: CONDITION_IMAGES$1[index % CONDITION_IMAGES$1.length]
								}, card.title))
							}),
							allConditionCards.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowAllConditions((value) => !value),
									className: "rounded-full border-2 border-primary/20 px-10 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary",
									children: showAllConditions ? "Згорнути" : "Більше"
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "process",
					className: "relative scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.98)_0%,rgba(237,244,255,0.95)_48%,rgba(225,236,255,0.95)_100%)] py-14 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -right-28 -top-44 h-[420px] w-[420px] rounded-full border border-white/60",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute right-[7%] top-[-110px] h-[310px] w-[310px] rounded-full border border-white/45",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-white/45 blur-3xl",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-[1180px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex rounded-full border border-primary/22 bg-white/48 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary shadow-[0_12px_30px_rgba(47,99,190,0.08)] backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm",
											children: pageConfig.processBadge
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-6 max-w-4xl text-3xl font-extrabold leading-[1.02] text-navy sm:text-4xl xl:text-[3.4rem]",
											children: pageConfig.processTitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-2 w-28 rounded-full bg-[linear-gradient(90deg,#2f63be_0%,#2f63be_68%,#35c88a_100%)] shadow-[0_8px_20px_rgba(53,200,138,0.18)] sm:w-32" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg",
											children: pageConfig.processText
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6",
									children: pageConfig.processSteps.map((step, index) => {
										const Icon = PROCESS_STEP_ICONS[index]?.icon ?? ChartLine;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "relative flex min-h-[270px] flex-col rounded-[28px] border border-primary/16 bg-white/88 p-6 shadow-[0_24px_50px_rgba(31,61,120,0.08)] backdrop-blur-sm sm:min-h-[300px] sm:p-7",
											children: [
												index < pageConfig.processSteps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute left-[calc(100%-8px)] top-18 hidden h-[2px] w-6 bg-primary/55 xl:block",
													"aria-hidden": true
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-[74px] items-center justify-center rounded-[24px] bg-[linear-gradient(135deg,#35c88a_0%,#67d8a4_100%)] text-white shadow-[0_18px_34px_rgba(53,200,138,0.28)] ring-1 ring-emerald-200/80",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
														className: "size-9",
														strokeWidth: 2.15
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-5 max-w-[16ch] text-[1.55rem] font-extrabold leading-[1.1] text-navy sm:text-[1.75rem]",
													children: step.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-sm leading-relaxed text-navy/76 sm:text-[0.95rem]",
													children: step.text
												})
											]
										}, step.title);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-7 overflow-hidden rounded-[30px] border border-primary/16 bg-white/68 shadow-[0_18px_40px_rgba(31,61,120,0.06)] backdrop-blur-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-4 px-5 py-5 sm:px-7 sm:py-6 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-6 lg:px-7",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 lg:min-w-[280px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(235,244,255,0.95),rgba(255,255,255,0.98))] text-primary shadow-inner ring-1 ring-primary/10",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, {
														className: "size-7",
														strokeWidth: 2.05
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-lg font-extrabold leading-tight text-navy sm:text-[1.6rem]",
													children: "Формати надання допомоги"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "hidden h-12 w-px bg-primary/18 lg:block",
												"aria-hidden": true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-primary sm:text-[0.95rem] lg:min-w-0 lg:flex-1 lg:flex-nowrap lg:gap-x-3 lg:whitespace-nowrap xl:text-base",
												children: CARE_FORMATS$1.map((format, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: format }), index < CARE_FORMATS$1.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-primary/55",
													"aria-hidden": true,
													children: "•"
												})] }, format))
											})
										]
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "programs",
					className: "scroll-mt-24 bg-white py-14 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl",
								children: "Програми та вартість"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1 w-16 rounded-full bg-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-3xl text-base leading-relaxed text-navy/70",
								children: pageConfig.programsText
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,1fr))_0.94fr]",
							children: [programCards.map((program) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramCard$1, { program }, program.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportHighlightsCard$1, {})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OtherServicesSlider$1, { pageConfig }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentsReviewSection$1, {
					pageConfig,
					onOpenDocumentsModal: () => setDocumentsModalOpen(true)
				}),
				faqItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "faq",
					className: "scroll-mt-24 border-t border-slate-200/60 bg-slate-50/70 py-20 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-2xl font-bold leading-tight text-navy sm:text-3xl md:text-4xl",
										children: "Питання та відповіді"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-1 w-16 rounded-full bg-primary sm:mt-6" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-6 max-w-[640px] text-sm leading-relaxed text-slate-600 md:text-base",
										children: pageConfig.faqText
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, {
								items: visibleFaqItems,
								variant: "home"
							}),
							faqItems.length > FAQ_VISIBLE_COUNT$1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setFaqExpanded((value) => !value),
									"aria-expanded": faqExpanded,
									className: "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-7 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white md:text-base",
									children: [faqExpanded ? "Показати менше питань" : "Показати більше питань", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-5 transition-transform duration-300", faqExpanded && "rotate-180") })]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQConsultationCTA, { className: "mt-16" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection$1, {
					className: "pb-14 sm:pb-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoBlock$1, { pageConfig })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicalDocumentsModal$1, {
				open: documentsModalOpen,
				onOpenChange: setDocumentsModalOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function AnchorNav$1({ breadcrumbItems }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-border/70 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
				items: breadcrumbItems,
				className: "pb-3 pt-4 sm:pt-4"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto pb-4 scrollbar-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-max items-center gap-4 sm:gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "shrink-0 text-sm font-bold text-navy/70",
						children: "Що вас цікавить:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Розділи сторінки",
						className: "flex min-w-max gap-2 sm:gap-3",
						children: ANCHORS$1.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "rounded-full border border-border bg-soft px-4 py-2 text-sm font-semibold text-navy/78 transition-colors hover:border-primary/40 hover:bg-soft-blue hover:text-primary",
							children: item.label
						}, item.href))
					})]
				})
			})]
		})
	});
}
function PageSection$1({ id, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("mx-auto max-w-[1600px] scroll-mt-24 px-4 sm:px-6 lg:px-10", className),
		children
	});
}
function SectionHeading$2({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1 w-16 rounded-full bg-primary" }),
		text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-3xl text-base leading-relaxed text-navy/76",
			children: text
		})
	] });
}
function ExpandableIntroSection$1({ title, shortDescription, expandedContent, image, imageAlt, includeTitle, includeItems, isExpanded, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl border border-blue-100 bg-soft p-5 shadow-sm sm:p-8 lg:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold leading-tight text-navy sm:text-4xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-1 w-16 rounded-full bg-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base leading-relaxed text-navy/82 sm:text-lg",
					children: shortDescription
				}),
				includeItems && includeItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [includeTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-extrabold leading-snug text-navy sm:text-xl",
						children: includeTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: includeItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm leading-relaxed text-navy/78",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					})]
				}),
				!isExpanded && expandedContent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onToggle,
					className: "mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90",
					"aria-expanded": false,
					"aria-controls": "cardio-intro-expanded",
					children: ["Детальніше", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: imageAlt,
				width: 1100,
				height: 760,
				loading: "lazy",
				className: "h-64 w-full rounded-xl object-contain bg-white/60 shadow-sm sm:h-80 lg:h-[380px]"
			})]
		}), expandedContent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "cardio-intro-expanded",
			className: cn("overflow-hidden transition-[max-height,opacity] duration-300", isExpanded ? "mt-7 max-h-[3600px] opacity-100" : "max-h-0 opacity-0"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-blue-100 pt-6 text-base leading-relaxed text-navy/82 whitespace-pre-line",
				children: expandedContent
			}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onToggle,
				className: "mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/25 px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/8",
				"aria-expanded": true,
				"aria-controls": "cardio-intro-expanded",
				children: ["Згорнути", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 rotate-180" })]
			})]
		})]
	});
}
function TimingSection$1({ pageConfig }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-[28px] border border-blue-100/90 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:p-8 lg:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -left-20 top-0 h-56 w-56 rounded-full bg-primary/8 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading$2, {
						title: pageConfig.timingTitle,
						text: pageConfig.timingText
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 overflow-hidden rounded-[28px] border border-blue-100/90 bg-white/92 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-0 lg:grid-cols-3",
							children: pageConfig.timingColumns.map((column, index) => {
								const style = TIMING_COLUMN_STYLES[index];
								const Icon = style.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border-t border-blue-100/90 p-5 sm:p-7 lg:border-l lg:border-t-0 first:border-t-0 first:lg:border-l-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4 sm:gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("flex size-14 shrink-0 items-center justify-center rounded-full shadow-inner ring-1 ring-black/4 sm:size-[78px]", style.iconBg),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: cn("size-7 sm:size-9", style.iconColor),
												strokeWidth: 2.1
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg font-extrabold leading-snug text-navy sm:text-[1.45rem] lg:text-[1.6rem]",
												children: column.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-5 space-y-3.5 sm:mt-6 sm:space-y-4",
												children: column.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex gap-3 text-sm leading-relaxed text-navy/80 sm:text-base",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-2.5 size-2 shrink-0 rounded-full", style.bulletColor) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
												}, item))
											})]
										})]
									})
								}, column.title);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-hidden rounded-[28px] border border-blue-100/90 bg-[linear-gradient(135deg,rgba(239,246,255,0.95),rgba(255,255,255,0.98))] shadow-[0_18px_40px_rgba(37,99,235,0.08)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-5 sm:p-7 lg:p-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-5 sm:flex-row sm:items-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-16 shrink-0 items-center justify-center rounded-full bg-white/88 shadow-inner ring-1 ring-primary/8 sm:size-20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays$1, {
											className: "size-8 text-primary sm:size-10",
											strokeWidth: 2.05
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "max-w-2xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-2xl font-extrabold leading-tight text-navy sm:text-3xl",
												children: pageConfig.timingStartTitle
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1 w-16 rounded-full bg-primary" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-5 text-base leading-relaxed text-navy/82 sm:text-lg",
												children: pageConfig.timingStartText
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-base leading-relaxed text-navy/72 sm:text-lg",
												children: pageConfig.timingStartNote
											})
										]
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative min-h-[240px] overflow-hidden border-t border-blue-100/90 lg:min-h-[320px] lg:border-l lg:border-t-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: pageConfig.timingStartImage,
									alt: pageConfig.timingStartImageAlt,
									width: 1800,
									height: 1200,
									loading: "lazy",
									className: "h-full w-full object-cover object-center"
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-hidden rounded-[28px] border border-red-100/90 bg-[linear-gradient(135deg,rgba(255,244,244,0.98),rgba(255,250,250,0.96))] shadow-[0_18px_40px_rgba(239,68,68,0.08)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-0 lg:grid-cols-[0.92fr_1.08fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-5 sm:p-7 lg:p-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-5 sm:flex-row sm:items-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-16 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-inner ring-1 ring-red-100 sm:size-20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
											className: "size-8 text-red-500 sm:size-10",
											strokeWidth: 2.05
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "max-w-2xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-2xl font-extrabold leading-tight text-red-600 sm:text-3xl",
												children: pageConfig.emergencyTitle
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1 w-16 rounded-full bg-red-500" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-5 text-base leading-relaxed text-navy/78 sm:text-lg",
												children: pageConfig.emergencyText
											}),
											pageConfig.emergencyNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-relaxed text-navy/62 sm:text-base",
												children: pageConfig.emergencyNote
											})
										]
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative overflow-hidden border-t border-red-100/90 lg:border-l lg:border-t-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-full p-5 sm:p-7 lg:p-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-3.5",
										children: pageConfig.emergencyItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3 text-sm leading-relaxed text-navy/80 sm:text-base",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2.5 size-2 shrink-0 rounded-full bg-red-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
										}, item))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ambulance, {
										className: "pointer-events-none absolute bottom-2 right-3 hidden h-36 w-36 text-red-100 lg:block xl:h-44 xl:w-44",
										strokeWidth: 1.35,
										"aria-hidden": true
									})]
								})
							})]
						})
					})
				]
			})
		]
	});
}
function ConditionCard$1({ card, image }) {
	if (card.to) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-[210px] w-full overflow-hidden bg-slate-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: card.title,
				loading: "lazy",
				width: 900,
				height: 620,
				className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-between bg-white p-6 md:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-xl font-bold leading-snug text-navy",
				children: card.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 line-clamp-3 text-sm font-normal leading-relaxed text-slate-600",
				children: card.text
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
				to: card.to,
				className: "inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white",
				children: ["Детальніше", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
			}) })]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-[210px] w-full overflow-hidden bg-slate-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: card.title,
				loading: "lazy",
				width: 900,
				height: 620,
				className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-between bg-white p-6 md:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-xl font-bold leading-snug text-navy",
				children: card.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 line-clamp-3 text-sm font-normal leading-relaxed text-slate-600",
				children: card.text
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#documents",
				onClick: (e) => {
					e.preventDefault();
					document.getElementById("documents")?.scrollIntoView({
						behavior: "smooth",
						block: "start"
					});
				},
				className: "inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white",
				children: ["Детальніше", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
			}) })]
		})]
	});
}
function ProgramCard$1({ program }) {
	const duration = program.duration === "За програмою" ? "Індивідуально" : program.duration;
	const isPopular = Boolean(program.isPopular);
	const priceLabel = program.id === "indyvidualna" ? "Уточнюйте" : program.priceLabel || "Уточнюйте";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("relative flex min-h-[286px] flex-col rounded-2xl border p-5 shadow-sm sm:min-h-[300px] sm:p-6", isPopular ? "border-primary bg-primary text-white shadow-primary/20" : "border-blue-100 bg-white"),
		children: [
			isPopular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-4 top-4 rounded-full bg-white px-2.5 py-1 text-[0.7rem] font-bold text-primary shadow-sm sm:right-5 sm:top-5",
				children: "Популярна"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: cn("text-[1.45rem] font-bold leading-[1.12] sm:text-xl", isPopular ? "pr-24 text-white" : "text-navy"),
				children: program.title
			}),
			program.shortDescription && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-2.5 text-[0.92rem] leading-[1.65] sm:mt-3 sm:text-sm", isPopular ? "text-white/82" : "text-navy/72"),
				children: program.shortDescription
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: cn("mt-5 space-y-3 border-t pt-4 text-sm sm:mt-6 sm:space-y-4 sm:pt-5", isPopular ? "border-white/22" : "border-border"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: cn("text-xs font-bold uppercase tracking-[0.14em]", isPopular ? "text-white/70" : "text-muted-foreground"),
					children: "Тривалість"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: cn("mt-1 font-semibold", isPopular ? "text-white" : "text-navy"),
					children: duration || "Індивідуально"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: cn("text-xs font-bold uppercase tracking-[0.14em]", isPopular ? "text-white/70" : "text-muted-foreground"),
					children: "Ціна"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: cn("mt-1 text-[1.35rem] font-extrabold sm:text-lg", isPopular ? "text-white" : "text-primary"),
					children: priceLabel
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto pt-6 sm:pt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
					to: program.route,
					className: cn("inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors sm:px-5 sm:py-3", isPopular ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-primary-foreground hover:bg-primary/90"),
					children: ["Детальніше", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		]
	});
}
function SupportHighlightsCard$1() {
	const [activeIndex, setActiveIndex] = import_react.useState(0);
	const [isPaused, setIsPaused] = import_react.useState(false);
	import_react.useEffect(() => {
		if (isPaused || typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const intervalId = window.setInterval(() => {
			setActiveIndex((current) => (current + 1) % SUPPORT_HIGHLIGHTS$1.length);
		}, 5e3);
		return () => window.clearInterval(intervalId);
	}, [isPaused]);
	const activeHighlight = SUPPORT_HIGHLIGHTS$1[activeIndex];
	const currentSlideLabel = String(activeIndex + 1).padStart(2, "0");
	const totalSlidesLabel = String(SUPPORT_HIGHLIGHTS$1.length).padStart(2, "0");
	const isAnchorLink = activeHighlight.ctaHref.startsWith("#");
	const buttonClassName = "inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-[16px] border border-emerald-400/80 bg-white/92 px-4 py-3 text-[0.95rem] font-bold text-emerald-700 shadow-[0_14px_28px_rgba(21,128,61,0.12)] transition-all hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-white sm:min-h-[52px] sm:px-5 sm:py-3.5 sm:text-base";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "relative isolate flex h-full min-h-[414px] overflow-hidden rounded-[28px] border border-emerald-300/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.99)_0%,rgba(247,255,250,0.99)_62%,rgba(239,252,245,0.99)_100%)] p-4 shadow-[0_24px_46px_rgba(53,200,138,0.14)] sm:min-h-[426px] sm:p-5 xl:min-h-[438px] xl:-translate-y-1",
		onMouseEnter: () => setIsPaused(true),
		onMouseLeave: () => setIsPaused(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(53,200,138,0.16),transparent_36%)]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-[-28px] top-10 h-28 w-28 rounded-full bg-white/75 blur-2xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-brand-green/12 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full w-full flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[1.28rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-emerald-800 sm:text-[1.4rem]",
						children: "Акції та спецумови"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2.5 sm:mt-4 sm:gap-3",
						role: "tablist",
						"aria-label": "Акції та спеціальні умови",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-[54px] text-[0.98rem] font-extrabold tracking-[-0.03em] text-emerald-800 sm:min-w-[58px] sm:text-[1.05rem]",
							children: [
								currentSlideLabel,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-1.5 text-emerald-800/38",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-emerald-800/62",
									children: totalSlidesLabel
								})
							]
						}), SUPPORT_HIGHLIGHTS$1.map((highlight, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": activeIndex === index,
							"aria-label": highlight.title,
							onClick: () => setActiveIndex(index),
							className: cn("h-1.5 rounded-full transition-all duration-300", activeIndex === index ? "w-8 bg-[linear-gradient(90deg,#1f9d68_0%,#35c88a_55%,#6ee7a8_100%)] shadow-[0_6px_14px_rgba(53,200,138,0.22)]" : "w-6 bg-emerald-100 hover:bg-emerald-200")
						}, highlight.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-1 flex-col animate-in fade-in slide-in-from-bottom-2 duration-500 sm:mt-5",
						"aria-live": "polite",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportHighlightVisual$1, { highlight: activeHighlight }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex h-[58px] items-start sm:mt-5 sm:h-[66px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "max-w-[12ch] text-[1.5rem] font-black leading-[1.02] tracking-[-0.04em] text-emerald-700 sm:text-[1.7rem]",
									children: activeHighlight.title
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex h-[82px] items-start sm:h-[88px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-[25ch] text-[0.86rem] leading-[1.58] text-navy/72 sm:text-[0.9rem] sm:leading-[1.62]",
									children: activeHighlight.description
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-auto pt-4",
								children: activeHighlight.ctaLabel && (isAnchorLink ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: activeHighlight.ctaHref,
									onClick: (event) => {
										event.preventDefault();
										document.getElementById(activeHighlight.ctaHref.slice(1))?.scrollIntoView({
											behavior: "smooth",
											block: "start"
										});
									},
									className: buttonClassName,
									children: [activeHighlight.ctaLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
									to: activeHighlight.ctaHref,
									className: buttonClassName,
									children: [activeHighlight.ctaLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}))
							})
						]
					}, activeHighlight.id)
				]
			})
		]
	});
}
function SupportHighlightVisual$1({ highlight }) {
	if (highlight.id === "senior") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-[144px] sm:h-[150px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-4 h-[110px] w-[110px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(93,215,146,0.28)_0%,rgba(93,215,146,0.14)_46%,rgba(93,215,146,0.04)_74%,transparent_76%)] sm:top-5 sm:h-[118px] sm:w-[118px]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute left-2 top-10 size-3.5 text-emerald-200 sm:top-11 sm:size-4",
				strokeWidth: 2.2,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute right-4 top-3 size-4 text-emerald-500 sm:top-4 sm:size-4.5",
				strokeWidth: 2.1,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute bottom-6 right-5 size-4 text-emerald-600 sm:bottom-7 sm:size-4.5",
				strokeWidth: 2.1,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute left-1/2 top-5 flex h-[96px] w-[72px] -translate-x-1/2 rotate-[18deg] items-center justify-center rounded-[22px] bg-[linear-gradient(180deg,#34d67b_0%,#10a44e_100%)] shadow-[0_18px_32px_rgba(16,164,78,0.24)] sm:top-6 sm:h-[104px] sm:w-[78px] sm:rounded-[24px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute right-2.5 top-2.5 size-3 rounded-full bg-emerald-900/45 ring-3 ring-white/14 sm:right-3 sm:top-3 sm:size-3.5",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Percent, {
					className: "size-8 text-white sm:size-9",
					strokeWidth: 2.7
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-0 left-2.5 flex items-center gap-1.5 rounded-[16px] border border-emerald-100 bg-white/96 px-2.5 py-1.5 shadow-[0_12px_22px_rgba(21,128,61,0.12)] sm:left-3 sm:gap-2 sm:px-3 sm:py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays$1, {
					className: "size-4 text-emerald-600 sm:size-4.5",
					strokeWidth: 2.1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.66rem] font-bold uppercase tracking-[0.14em] text-emerald-700 sm:text-[0.7rem]",
					children: "60+"
				})]
			})
		]
	});
	const Icon = highlight.icon;
	const SecondaryIcon = highlight.id === "military" ? ShieldCheck : HandHeart;
	const secondaryLabel = highlight.id === "military" ? "Підтримка" : "Разом";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-[144px] items-center justify-center sm:h-[150px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-4 h-[114px] w-[114px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(93,215,146,0.2)_0%,rgba(93,215,146,0.08)_50%,transparent_76%)] sm:top-5 sm:h-[122px] sm:w-[122px]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute left-3 top-8 size-3.5 text-emerald-200 sm:top-9 sm:size-4",
				strokeWidth: 2.2,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute right-6 top-4 size-4 text-emerald-400 sm:top-5 sm:size-4.5",
				strokeWidth: 2.1,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute bottom-7 right-4 size-4 text-emerald-600 sm:bottom-8 sm:size-4.5",
				strokeWidth: 2.1,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex size-[92px] items-center justify-center rounded-[28px] bg-[linear-gradient(165deg,#35c88a_0%,#149b56_100%)] shadow-[0_18px_32px_rgba(16,164,78,0.22)] sm:size-[98px] sm:rounded-[30px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-9 text-white sm:size-10",
					strokeWidth: 2.15
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-0 left-2.5 flex items-center gap-1.5 rounded-[16px] border border-emerald-100 bg-white/96 px-2.5 py-1.5 shadow-[0_12px_22px_rgba(21,128,61,0.12)] sm:left-3 sm:gap-2 sm:px-3 sm:py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryIcon, {
					className: "size-4 text-emerald-600 sm:size-4.5",
					strokeWidth: 2.1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.66rem] font-bold uppercase tracking-[0.14em] text-emerald-700 sm:text-[0.7rem]",
					children: secondaryLabel
				})]
			})
		]
	});
}
function OtherServicesSlider$1({ pageConfig }) {
	const trackRef = import_react.useRef(null);
	const [active, setActive] = import_react.useState(0);
	const services = pageConfig.otherServices;
	const isFirstSlide = active === 0;
	const isLastSlide = active === services.length - 1;
	const scrollToIndex = (index) => {
		const track = trackRef.current;
		if (!track) return;
		const card = track.children[index];
		if (card) track.scrollTo({
			left: card.offsetLeft - track.offsetLeft,
			behavior: "smooth"
		});
	};
	const onScroll = () => {
		const track = trackRef.current;
		if (!track) return;
		const next = Array.from(track.children).reduce((closest, card, index) => {
			const distance = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);
			return distance < closest.distance ? {
				index,
				distance
			} : closest;
		}, {
			index: 0,
			distance: Number.POSITIVE_INFINITY
		});
		setActive(next.index);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-soft-blue py-12 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading$2, {
						title: pageConfig.otherServicesTitle,
						text: pageConfig.otherServicesText
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
						to: ALL_SERVICES_ROUTE$1,
						className: "inline-flex w-fit items-center gap-2 rounded-lg border border-primary/25 bg-white px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/8",
						children: ["Всі-послуги", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: trackRef,
					onScroll,
					className: "mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid w-[84%] shrink-0 snap-start overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm sm:w-[54%] lg:w-[37%] xl:w-[30%]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: service.image,
							alt: service.title,
							width: 900,
							height: 620,
							loading: "lazy",
							className: "h-44 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-navy",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 line-clamp-3 text-sm leading-relaxed text-navy/72",
									children: service.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
									to: service.to,
									className: "mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-primary/25 px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/8",
									children: ["Детальніше", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						})]
					}, service.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-center gap-3 sm:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Попередня послуга",
							onClick: () => scrollToIndex(Math.max(0, active - 1)),
							disabled: isFirstSlide,
							className: cn("flex size-10 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:bg-soft sm:size-11", isFirstSlide && "cursor-not-allowed opacity-45 hover:bg-white"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center gap-2.5",
							children: services.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => scrollToIndex(index),
								className: cn("size-2.5 rounded-full transition-all duration-300", active === index ? "bg-primary scale-110" : "bg-slate-300 hover:bg-slate-400"),
								"aria-label": `Перейти до послуги ${index + 1}`
							}, service.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Наступна послуга",
							onClick: () => scrollToIndex(Math.min(services.length - 1, active + 1)),
							disabled: isLastSlide,
							className: cn("flex size-10 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:bg-soft sm:size-11", isLastSlide && "cursor-not-allowed opacity-45 hover:bg-white"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
						})
					]
				})
			]
		})
	});
}
function DocumentsReviewSection$1({ pageConfig, onOpenDocumentsModal }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "documents",
		className: "scroll-mt-24 py-12 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[38px] border border-blue-100/70 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.99)_0%,rgba(246,250,255,0.98)_32%,rgba(234,242,255,0.97)_100%)] px-5 py-6 shadow-[0_30px_90px_rgba(31,61,120,0.12)] sm:px-8 sm:py-8 lg:px-12 lg:py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-white/95 blur-3xl",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute -right-10 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-brand-green/10 blur-3xl",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-8 xl:grid-cols-[minmax(0,0.96fr)_minmax(460px,1.04fr)] xl:items-center xl:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl xl:py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center rounded-full border border-primary/20 bg-white/92 px-5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-primary shadow-[0_12px_28px_rgba(31,61,120,0.1)] sm:px-6 sm:text-[0.92rem]",
									children: pageConfig.ctaBadge
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-7 max-w-[13.9ch] font-black leading-[0.9] tracking-[-0.045em] text-navy lg:max-w-[12.8ch]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block whitespace-nowrap text-[2.5rem] sm:text-[3.75rem] lg:text-[4.3rem]",
											children: pageConfig.ctaTitleLines[0]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block whitespace-nowrap text-[3.2rem] text-primary sm:text-[4.8rem] lg:text-[5.45rem]",
											children: pageConfig.ctaTitleLines[1]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block whitespace-nowrap text-[2.5rem] sm:text-[3.75rem] lg:text-[4.3rem]",
											children: pageConfig.ctaTitleLines[2]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-7 max-w-[34rem] text-base leading-relaxed text-navy/72 sm:text-[1.15rem] sm:leading-[1.7]",
									children: pageConfig.ctaText
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: onOpenDocumentsModal,
										className: "inline-flex min-h-[4.5rem] items-center justify-center gap-2.5 rounded-[20px] bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground shadow-[0_22px_48px_rgba(52,211,153,0.28)] transition-all hover:-translate-y-0.5 hover:bg-brand-green/92 hover:shadow-[0_28px_58px_rgba(52,211,153,0.34)] sm:min-w-[23rem] sm:px-8 sm:text-base",
										children: pageConfig.ctaButtonLabel
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: CONTACTS.phoneHref,
										className: "inline-flex min-h-[4.5rem] items-center justify-center gap-3 rounded-[20px] border border-[#7A8397] bg-white/96 px-7 py-4 text-base font-bold text-[#586279] shadow-[0_18px_40px_rgba(88,98,121,0.1)] transition-colors hover:border-[#586279] hover:bg-white hover:text-[#3F4758] sm:min-w-[16rem] sm:px-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-6 text-[#586279]" }), CONTACTS.phone]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4 sm:space-y-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-[34px] border border-white/80 bg-white/95 shadow-[0_28px_65px_rgba(31,61,120,0.14)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: pageConfig.ctaImage,
									alt: pageConfig.ctaImageAlt,
									loading: "lazy",
									width: 1536,
									height: 1024,
									className: "aspect-[1.22/1] w-full object-cover object-center md:object-[center_58%]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.08)_100%)]",
									"aria-hidden": true
								})]
							})
						})]
					})
				]
			})
		})
	});
}
function MedicalDocumentsModal$1({ open, onOpenChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "overflow-hidden border-none bg-white p-0 shadow-[0_32px_90px_rgba(15,23,42,0.32)] sm:max-w-3xl sm:rounded-[32px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "sr-only",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Надіслати медичні документи" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Форма для надсилання медичних документів на попередній розгляд." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicalDocumentsForm$1, { className: "rounded-none border-0 shadow-none" })]
		})
	});
}
function MedicalDocumentsForm$1({ className }) {
	const inputRef = import_react.useRef(null);
	const [files, setFiles] = import_react.useState([]);
	const [name, setName] = import_react.useState("");
	const [phone, setPhone] = import_react.useState("");
	const [dragActive, setDragActive] = import_react.useState(false);
	const [submitState, setSubmitState] = import_react.useState({
		type: "idle",
		message: ""
	});
	const validatePhone = (value) => {
		const cleaned = value.replace(/[\s()+-]/g, "");
		return /^\d{10,13}$/.test(cleaned);
	};
	const validateFiles = (nextFiles) => {
		const invalidFormat = nextFiles.find((file) => {
			const extension = file.name.split(".").pop()?.toLowerCase();
			return !extension || ![
				"pdf",
				"jpg",
				"jpeg",
				"png"
			].includes(extension);
		});
		if (invalidFormat) return `Файл "${invalidFormat.name}" має недопустимий формат. Доступні PDF, JPG і PNG.`;
		const tooLarge = nextFiles.find((file) => file.size > 10 * 1024 * 1024);
		if (tooLarge) return `Файл "${tooLarge.name}" перевищує 10 МБ.`;
		return null;
	};
	const applyFiles = (nextFiles) => {
		if (nextFiles.length === 0) return;
		const validationError = validateFiles(nextFiles);
		if (validationError) {
			setSubmitState({
				type: "error",
				message: validationError
			});
			return;
		}
		setFiles(nextFiles);
		setSubmitState({
			type: "idle",
			message: ""
		});
	};
	const onFileChange = (event) => {
		applyFiles(Array.from(event.target.files || []));
		event.target.value = "";
	};
	const formatFileSize = (size) => {
		if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} КБ`;
		return `${(size / (1024 * 1024)).toFixed(1)} МБ`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden rounded-[32px] border border-blue-100/90 bg-white p-5 shadow-[0_22px_60px_rgba(31,61,120,0.08)] sm:p-8 lg:p-10", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-14 top-0 h-52 w-52 rounded-full bg-primary/8 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-0 left-8 h-40 w-40 rounded-full bg-sky-100/70 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-[2.2rem]",
						children: "Надішліть медичні документи для попереднього розгляду"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-base leading-relaxed text-navy/68 sm:text-lg",
						children: "Це допоможе лікарю ознайомитися з вашим станом і підготувати персональні рекомендації ще до першого контакту."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8",
						noValidate: true,
						onSubmit: (event) => {
							event.preventDefault();
							if (!files.length) {
								setSubmitState({
									type: "error",
									message: "Додайте хоча б один медичний документ для попереднього розгляду."
								});
								return;
							}
							if (!name.trim()) {
								setSubmitState({
									type: "error",
									message: "Вкажіть ваше ім’я, щоб ми знали, як до вас звертатися."
								});
								return;
							}
							if (!phone.trim()) {
								setSubmitState({
									type: "error",
									message: "Вкажіть номер телефону для зв’язку з адміністратором."
								});
								return;
							}
							if (!validatePhone(phone)) {
								setSubmitState({
									type: "error",
									message: "Введіть коректний номер телефону у форматі +380 XX XXX XX XX."
								});
								return;
							}
							setSubmitState({
								type: "success",
								message: "Документи надіслано. Після попереднього розгляду адміністратор зв’яжеться з вами."
							});
							setFiles([]);
							setName("");
							setPhone("");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => inputRef.current?.click(),
								onDragOver: (event) => {
									event.preventDefault();
									setDragActive(true);
								},
								onDragLeave: (event) => {
									event.preventDefault();
									setDragActive(false);
								},
								onDrop: (event) => {
									event.preventDefault();
									setDragActive(false);
									applyFiles(Array.from(event.dataTransfer.files || []));
								},
								className: cn("group flex w-full flex-col items-center justify-center rounded-[24px] border border-dashed px-6 py-10 text-center transition-all sm:px-8 sm:py-12", dragActive ? "border-primary bg-soft-blue/80 shadow-[0_18px_40px_rgba(37,99,235,0.12)]" : "border-primary/20 bg-[linear-gradient(180deg,rgba(248,251,255,0.9)_0%,rgba(255,255,255,0.96)_100%)] hover:border-primary/35 hover:bg-soft-blue/40"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-[72px] items-center justify-center rounded-full bg-primary/10 text-primary sm:size-20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, {
											className: "size-9 sm:size-10",
											strokeWidth: 1.85
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-5 text-xl font-bold leading-tight text-navy",
										children: "Додайте файли"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 text-sm leading-relaxed text-navy/58 sm:text-base",
										children: "PDF, JPG, PNG (до 10 МБ на файл)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 text-xs leading-relaxed text-navy/48 sm:text-sm",
										children: "Перетягніть файли сюди або натисніть, щоб вибрати"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: inputRef,
								type: "file",
								accept: ".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png",
								multiple: true,
								className: "hidden",
								onChange: onFileChange
							}),
							files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid gap-3 md:grid-cols-2",
								children: files.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-[18px] border border-blue-100/90 bg-white/92 px-4 py-3 shadow-[0_10px_25px_rgba(31,61,120,0.04)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-semibold text-navy",
											children: file.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-xs text-navy/55",
											children: formatFileSize(file.size)
										})]
									})]
								}, `${file.name}-${file.size}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-3 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Ваше ім’я"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "Ваше ім’я",
										value: name,
										onChange: (event) => {
											setName(event.target.value);
											if (submitState.type !== "idle") setSubmitState({
												type: "idle",
												message: ""
											});
										},
										className: "min-h-14 w-full rounded-[18px] border border-blue-100 bg-white px-5 text-sm font-medium text-navy outline-none transition-all placeholder:text-navy/36 focus:border-primary focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Номер телефону"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										placeholder: "Номер телефону",
										value: phone,
										onChange: (event) => {
											setPhone(event.target.value);
											if (submitState.type !== "idle") setSubmitState({
												type: "idle",
												message: ""
											});
										},
										className: "min-h-14 w-full rounded-[18px] border border-blue-100 bg-white px-5 text-sm font-medium text-navy outline-none transition-all placeholder:text-navy/36 focus:border-primary focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-[18px] bg-[linear-gradient(90deg,rgba(37,99,235,0.46)_0%,#1d4ed8_100%)] px-6 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(37,99,235,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(37,99,235,0.24)] sm:text-base",
								children: ["Надіслати документи", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4 sm:size-5" })]
							}),
							submitState.type !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-4 rounded-[18px] px-4 py-3 text-sm font-semibold leading-relaxed", submitState.type === "success" ? "border border-brand-green/25 bg-brand-green/10 text-navy" : "border border-red-200 bg-red-50 text-red-700"),
								role: submitState.type === "success" ? "status" : "alert",
								children: submitState.message
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-center gap-2 text-center text-xs font-medium text-navy/56 sm:text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 shrink-0 text-primary/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ваші дані захищені та не передаються третім особам" })]
							})
						]
					})
				]
			})
		]
	});
}
function SeoBlock$1({ pageConfig }) {
	const [expanded, setExpanded] = import_react.useState(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white px-5 py-8 shadow-[0_24px_70px_-38px_rgba(30,64,175,0.3)] sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-14 xl:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 -top-28 size-64 rounded-full bg-sky-100/60 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-32 right-1/4 size-72 rounded-full bg-emerald-100/40 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(500px,0.82fr)] lg:gap-12 xl:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/15 bg-soft-blue px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary sm:text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-brand-green" }), pageConfig.seoBadge]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-3xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl",
							children: pageConfig.seoTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 text-sm leading-relaxed text-navy/72 sm:text-base sm:leading-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-navy mt-4 mb-2",
								children: pageConfig.seoLeadTitle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4",
								children: pageConfig.seoLeadText
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setExpanded((value) => !value),
								className: "group inline-flex min-h-12 cursor-pointer items-center gap-2.5 rounded-xl bg-navy px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_-16px_rgba(15,34,68,0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_18px_36px_-16px_rgba(43,93,190,0.75)]",
								"aria-expanded": expanded,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: expanded ? "Згорнути" : "Детальніше" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: cn("size-4 transition-transform duration-300 group-hover:translate-x-0.5", expanded && "rotate-90 group-hover:translate-x-0") })]
							})
						}),
						expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 border-t border-sky-100 pt-5 text-sm leading-relaxed text-navy/72 sm:text-base sm:leading-7 animate-in fade-in slide-in-from-top-2 duration-300",
							children: pageConfig.seoSections.map((section, index) => {
								if (section.type === "h3") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-navy mt-6 mb-2",
									children: section.text
								}, index);
								if (section.type === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: section.text
								}, index);
								if (section.type === "ul") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "list-disc pl-5 mb-4 space-y-1",
									children: section.items?.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
								}, index);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: section.q })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: section.a
								})] }, index);
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-full items-center justify-center lg:justify-end lg:self-start mt-6 lg:mt-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "group relative w-full max-w-[520px] aspect-square overflow-hidden rounded-[1.75rem] border border-sky-100 bg-[#eaf5ff] shadow-[0_20px_50px_-30px_rgba(30,64,175,0.55)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: pageConfig.seoImage,
							alt: pageConfig.seoImageAlt,
							loading: "lazy",
							width: 1024,
							height: 1536,
							className: "absolute inset-0 size-full object-contain transition-transform duration-700 group-hover:scale-[1.025]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0 bg-white/80 px-5 py-4 backdrop-blur-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase tracking-[0.14em] text-primary",
								children: pageConfig.seoImageCaption
							})
						})]
					})
				})]
			})
		]
	});
}
function pickFaqItems$1(items) {
	const picked = [
		"Скільки триває програма?",
		"Чи потрібне направлення лікаря?",
		"Які документи потрібно підготувати?",
		"Чи можна проходити програму амбулаторно?",
		"Що входить у вартість програми?",
		"Як записатися?"
	].map((question) => items.find((item) => item.question === question)).filter(Boolean);
	return picked.length > 0 ? picked : items.slice(0, 6);
}
var ANCHORS = [
	{
		href: "#about",
		label: "Про програму"
	},
	{
		href: "#indications",
		label: "Показання"
	},
	{
		href: "#contraindications",
		label: "Протипоказання"
	},
	{
		href: "#start",
		label: "Початок програми"
	},
	{
		href: "#emergency",
		label: "Ознаки невідкладного стану"
	},
	{
		href: "#methods",
		label: "Що входить"
	},
	{
		href: "#safety",
		label: "Безпека"
	},
	{
		href: "#rehab-methods",
		label: "Методи"
	},
	{
		href: "#process",
		label: "Як проходить"
	},
	{
		href: "#team",
		label: "Хто працює"
	},
	{
		href: "#formats",
		label: "Формати"
	},
	{
		href: "#results",
		label: "Результати"
	},
	{
		href: "#programs",
		label: "Вартість"
	},
	{
		href: "#documents",
		label: "Документи"
	},
	{
		href: "#faq",
		label: "FAQ"
	}
];
var POST_INFARCTION_ROUTE = "/reabilitatsiia/pislia-infarktu-miokarda";
var TIMING_COLUMNS = [{
	title: "Показання",
	icon: Heart,
	iconColor: "text-primary",
	iconBg: "bg-primary/10",
	bulletColor: "bg-primary",
	items: [
		"після інфаркту міокарда;",
		"після інфаркту зі стентуванням коронарних артерій;",
		"після інфаркту з подальшим оперативним лікуванням;",
		"при зниженій переносимості фізичного навантаження після інфаркту;",
		"при появі слабкості або швидкої втомлюваності під час звичної активності;",
		"для поступового повернення до роботи та побутової активності;",
		"для відновлення фізичної активності після тривалого обмеження навантажень;",
		"для контролю факторів ризику повторних серцево-судинних подій."
	]
}, {
	title: "Протипоказання",
	icon: AlertTriangle,
	iconColor: "text-amber-500",
	iconBg: "bg-amber-50",
	bulletColor: "bg-amber-500",
	items: [
		"нестабільний стан серцево-судинної системи;",
		"гострий коронарний синдром;",
		"неконтрольовані порушення серцевого ритму;",
		"декомпенсована серцева недостатність;",
		"значні неконтрольовані зміни артеріального тиску;",
		"гострі запальні або інфекційні захворювання;",
		"інші стани, за яких фізичне навантаження може бути небезпечним."
	]
}];
var PROCESS_STEPS$1 = [
	{
		icon: FileSearch,
		title: "Первинна оцінка",
		text: "Лікар аналізує медичну історію, перенесений інфаркт, результати лікування, поточний стан та можливі обмеження."
	},
	{
		icon: ClipboardPenLine,
		title: "Функціональна оцінка",
		text: "За необхідності проводяться додаткові обстеження та тести для визначення фізичних можливостей і безпечного рівня навантаження."
	},
	{
		icon: Dumbbell,
		title: "Формування програми",
		text: "Визначаються цілі, частота занять, інтенсивність навантаження та методи реабілітації."
	},
	{
		icon: ChartLine,
		title: "Реабілітаційні заняття",
		text: "Людина проходить програму з поступовим збільшенням фізичної активності відповідно до переносимості навантаження."
	}
];
var CARE_FORMATS = [
	"Стаціонарна реабілітація",
	"Амбулаторна реабілітація",
	"Денна програма",
	"Дистанційний супровід"
];
var CONDITION_IMAGES = [
	cpet_test_default,
	service_rehab_default,
	ecg_review_default,
	service_checkup_default,
	service_sports_default
];
var FAQ_VISIBLE_COUNT = 3;
var REHAB_METHODS = [
	{
		title: "Кардіотренування",
		text: "Дозовані аеробні навантаження для поступового розвитку витривалості та адаптації серцево-судинної системи."
	},
	{
		title: "Функціональні тренування",
		text: "Вправи для розвитку сили, витривалості, балансу, координації та впевненого виконання повсякденних рухів."
	},
	{
		title: "Велоергометр",
		text: "Контрольоване фізичне навантаження на велоергометрі з можливістю поступового регулювання інтенсивності."
	},
	{
		title: "Бігова доріжка",
		text: "Ходьба з індивідуально визначеною швидкістю та тривалістю навантаження."
	},
	{
		title: "Активна та пасивна механотерапія",
		text: "Тренування із застосуванням реабілітаційного обладнання для поступового відновлення фізичної активності."
	},
	{
		title: "Дихальні вправи",
		text: "Вправи, спрямовані на покращення контролю дихання та переносимості фізичного навантаження."
	},
	{
		title: "Лікувальний басейн",
		text: "Заняття у воді можуть використовуватися як один із методів фізичної активності за відсутності протипоказань."
	}
];
var CARDIO_PROGRAMS = [
	{
		title: "Коротка програма",
		shortDescription: "Для первинної оцінки, визначення безпечного рівня фізичної активності та формування подальших рекомендацій.",
		duration: "Індивідуально",
		priceLabel: "Дізнатися вартість",
		route: `${POST_INFARCTION_ROUTE}/short`,
		isPopular: false
	},
	{
		title: "Програма відновлення",
		shortDescription: "Комплекс реабілітаційних заходів із регулярними заняттями та контролем динаміки.",
		duration: "Індивідуально",
		priceLabel: "Дізнатися вартість",
		route: `${POST_INFARCTION_ROUTE}/recovery`,
		isPopular: true
	},
	{
		title: "Розширена програма",
		shortDescription: "Триваліша програма для пацієнтів, яким необхідне поступове збільшення фізичної активності та більш тривалий реабілітаційний супровід.",
		duration: "Індивідуально",
		priceLabel: "Дізнатися вартість",
		route: `${POST_INFARCTION_ROUTE}/extended`,
		isPopular: false
	}
];
var SUPPORT_HIGHLIGHTS = [
	{
		id: "senior",
		title: "Акція 60+",
		description: "Знижка 10% на стартову консультацію та супровід первинного етапу програми.",
		ctaLabel: "Детальніше",
		ctaHref: "#documents",
		icon: CalendarDays,
		iconClass: "bg-lime-100/95 text-lime-700 ring-lime-200/90 shadow-[0_14px_28px_rgba(132,204,22,0.14)]"
	},
	{
		id: "military",
		title: "Для військових і ветеранів",
		description: "Спеціальні умови на програму відновлення та швидший старт після розгляду документів.",
		ctaLabel: "Детальніше",
		ctaHref: "#documents",
		icon: ShieldCheck,
		iconClass: "bg-emerald-100/92 text-emerald-700 ring-emerald-200/90 shadow-[0_14px_28px_rgba(52,211,153,0.18)]"
	},
	{
		id: "social",
		title: "Соціальні проєкти",
		description: "Окремі умови для групових програм відновлення та адресної підтримки під запит.",
		ctaLabel: "Детальніше",
		ctaHref: "/sotsialni-proiekty",
		icon: HandHeart,
		iconClass: "bg-teal-100/92 text-teal-700 ring-teal-200/90 shadow-[0_14px_28px_rgba(45,212,191,0.16)]"
	}
];
var OTHER_SERVICES = [
	{
		title: "Кардіологічна діагностика",
		text: "Сучасні методи обстеження серця та судин допомагають точно оцінити стан перед початком реабілітації та відстежувати зміни в процесі програми.",
		to: "/diagnostyka/kardiodiahnostyka",
		image: ecg_review_default
	},
	{
		title: "Кардіологічний чек-ап",
		text: "Комплексне обстеження, яке дозволяє виявити приховані ризики та вчасно скоригувати лікування і профілактику.",
		to: "/check-up/kardiolohichnyi",
		image: service_checkup_default
	},
	{
		title: "Виїзна реабілітація",
		text: "Можливість продовжити програму вдома або в іншому зручному місці під дистанційним супроводом лікарів і реабілітологів.",
		to: "/vyizna-reabilitatsiia",
		image: service_rehab_default
	},
	{
		title: "Лікувальний басейн",
		text: "Заняття у воді зменшують навантаження на суглоби та дозволяють безпечно тренувати серцево-судинну систему навіть при обмеженій рухливості.",
		to: "/vidnovlennia/likuvalnyi-basein",
		image: service_sports_default
	},
	{
		title: "Функціональне тестування",
		text: "Оцінка фізичної працездатності та реакції серця на навантаження допомагає точно підібрати інтенсивність програми і контролювати прогрес.",
		to: "/diagnostyka/kardiodiahnostyka/cpet",
		image: cpet_test_default
	}
];
var ALL_SERVICES_ROUTE = getNodeById("services")?.route ?? "/poslugy";
function PostInfarctionRehabPage({ node }) {
	const data = getServicePageData(node);
	const custom = node.pageContent || {};
	const { openModal } = useConsultationModal();
	const [introExpanded, setIntroExpanded] = import_react.useState(false);
	const [showAllConditions, setShowAllConditions] = import_react.useState(false);
	const [faqExpanded, setFaqExpanded] = import_react.useState(false);
	const [documentsModalOpen, setDocumentsModalOpen] = import_react.useState(false);
	const allConditionCards = REHAB_METHODS;
	const visibleConditionCards = showAllConditions ? allConditionCards : allConditionCards.slice(0, 3);
	const programCards = CARDIO_PROGRAMS.map((program, index) => ({
		...program,
		id: `cardio-program-${index}`,
		route: node.children?.[index]?.route || node.route
	}));
	const faqItems = pickFaqItems(node.faq || []);
	const visibleFaqItems = faqExpanded ? faqItems : faqItems.slice(0, FAQ_VISIBLE_COUNT);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-navy-deep",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: data.heroImage,
							alt: "Медична команда контролює заняття пацієнта під час відновлення",
							width: 1400,
							height: 900,
							className: "absolute inset-0 size-full object-cover object-right opacity-50 mix-blend-luminosity lg:opacity-90"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy-deep/25" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mx-auto grid max-w-[1600px] gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:min-h-[620px] lg:px-10 lg:py-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex max-w-3xl flex-col justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex w-fit items-center rounded-full bg-sky-100/95 px-3.5 py-1 text-xs font-semibold tracking-[0.12em] text-navy ring-1 ring-white/50",
										children: "Серцево-судинна система"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-5 text-3xl font-extrabold leading-[1.08] text-background sm:text-5xl lg:text-6xl",
										children: "Реабілітація після інфаркту міокарда"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-2xl text-base leading-relaxed text-background/86 sm:text-lg",
										children: "Комплексна програма відновлення після інфаркту міокарда допомагає безпечно повертатися до фізичної активності, покращувати витривалість і контролювати фактори серцево-судинного ризику під наглядом фахівців."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => openModal("Записатися на консультацію"),
											className: "inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-green px-6 py-3 text-sm font-bold text-brand-green-foreground shadow-md transition-colors hover:bg-brand-green/90 sm:min-h-14 sm:px-8",
											children: "Записатися на консультацію"
										})
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnchorNav, { breadcrumbItems: getBreadcrumbs(node) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
					id: "about",
					className: "pt-10 sm:pt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandableIntroSection, {
						title: "ЩО ТАКЕ ІНФАРКТ МІОКАРДА",
						shortDescription: "Інфаркт міокарда — це гострий стан, при якому через порушення кровопостачання частина серцевого м’яза не отримує достатньо кисню та зазнає пошкодження.",
						expandedContent: "Найчастіше інфаркт виникає через перекриття або значне звуження коронарної артерії, яка постачає кров до серця. Для відновлення кровотоку можуть застосовувати медикаментозне лікування, стентування коронарних артерій або інші методи залежно від клінічної ситуації.\n\nПісля стабілізації стану лікування не завершується. Організму необхідно поступово адаптуватися до фізичних навантажень, а людині — контролювати фактори серцево-судинного ризику та безпечно повертатися до повсякденної активності. Важливою частиною цього етапу є кардіологічна реабілітація.",
						image: data.introImage,
						imageAlt: "Лікар переглядає результати обстеження пацієнта після інфаркту",
						isExpanded: introExpanded,
						onToggle: () => setIntroExpanded((value) => !value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
					className: "pb-10 sm:pb-16 mt-6 sm:mt-10 lg:mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimingSection, { emergencyBody: typeof custom.emergencyBody === "string" ? custom.emergencyBody : void 0 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
					id: "importance",
					className: "py-12 sm:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[28px] border border-blue-100/90 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:p-8 lg:p-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl",
										children: "Чому важливо проходити відновлення після інфаркту"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1 w-16 rounded-full bg-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-3xl text-base leading-relaxed text-navy/82 sm:text-lg",
										children: "После завершения гострого етапу лікування важливо не лише приймати призначені препарати, а й поступово відновлювати фізичну активність та контролювати фактори ризику."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-3xl text-base leading-relaxed text-navy/72 sm:text-lg",
										children: "Надто швидке повернення до звичних навантажень може бути небезпечним, а надмірне обмеження активності — призводити до втрати витривалості, м'язової слабкості та страху фізичного навантаження."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-3xl text-base leading-relaxed text-navy/72 sm:text-lg",
										children: "Контрольована реабілітація допомагає визначити безпечний рівень активності та поступово розширювати фізичні можливості відповідно до реакції організму."
									})
								]
							})
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
					id: "results",
					className: "py-12 sm:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[28px] border border-emerald-100/90 bg-[linear-gradient(180deg,#f0fdf4_0%,#dcfce7_100%)] p-5 shadow-[0_20px_60px_rgba(34,197,94,0.08)] sm:p-8 lg:p-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700 shadow-[0_12px_30px_rgba(34,197,94,0.08)] backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm",
										children: "Результати реабілітації"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-6 max-w-4xl text-3xl font-extrabold leading-[1.02] text-navy sm:text-4xl xl:text-[3.4rem]",
										children: "Чого можна досягти"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-2 w-28 rounded-full bg-emerald-500 shadow-[0_8px_20px_rgba(53,200,138,0.18)] sm:w-32" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg",
										children: "Реабілітація допомагає безпечно повернутися до активного життя та зменшити ризики повторних серцево-судинних подій."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "підвищення витривалості;" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "покращення переносимості фізичних навантажень;" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "поступове повернення до повсякденної активності;" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "контроль пульсу, тиску та самопочуття;" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "зниження ризику повторних серцево-судинних подій." })]
											})
										]
									})
								]
							})
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
					id: "what-includes",
					className: "py-12 sm:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mx-auto max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl",
									children: "Що може входити у програму реабілітації"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-1 w-16 rounded-full bg-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-3xl text-base leading-relaxed text-navy/76",
									children: "Програма формується індивідуально після оцінки стану людини. Не всі елементи необхідні кожному пацієнту."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodCard, {
									title: "Медична оцінка",
									text: "Оцінка перенесеного інфаркту, проведеного лікування, супутніх захворювань, поточних скарг, медикаментозної терапії та можливих обмежень."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodCard, {
									title: "Функціональна діагностика",
									text: "За показаннями можуть використовуватися функціональні тести та інструментальні дослідження для оцінки роботи серцево-судинної і дихальної систем, витривалості та реакції організму на навантаження."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodCard, {
									title: "Дозоване фізичне навантаження",
									text: "Індивідуально підібрані вправи та кардіонавантаження з поступовою зміною інтенсивності відповідно до стану і реакції організму."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodCard, {
									title: "Контроль факторів ризику",
									text: "Оцінка факторів, які можуть впливати на ризик повторних серцево-судинних подій, та рекомендації щодо їх контролю."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodCard, {
									title: "Навчання самоконтролю",
									text: "Рекомендації щодо контролю пульсу, артеріального тиску, фізичної активності та симптомів, які необхідно враховувати під час повсякденного життя."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodCard, {
									title: "Харчування та спосіб життя",
									text: "Рекомендації щодо харчування, фізичної активності, маси тіла, режиму дня та інших факторів способу життя."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodCard, {
									title: "Психологічна підтримка",
									text: "За потреби програма може включати роботу зі страхом повторного інфаркту, тривогою, зниженим настроєм та труднощами повернення до звичного життя."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodCard, {
									title: "План подальшої активності",
									text: "Після завершення програми пацієнт отримує рекомендації щодо подальшої фізичної активності та підтримання досягнутих результатів."
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
					id: "safety",
					className: "py-12 sm:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[28px] border border-blue-100/90 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:p-8 lg:p-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex rounded-full border border-primary/22 bg-white/48 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary shadow-[0_12px_30px_rgba(47,99,190,0.08)] backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm",
										children: "Контроль навантаження"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-6 max-w-4xl text-3xl font-extrabold leading-[1.02] text-navy sm:text-4xl xl:text-[3.4rem]",
										children: "Як контролюється безпека фізичної активності"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-2 w-28 rounded-full bg-[linear-gradient(90deg,#2f63be_0%,#2f63be_68%,#35c88a_100%)] shadow-[0_8px_20px_rgba(53,200,138,0.18)] sm:w-32" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg",
										children: "Інтенсивність навантаження визначається не за універсальною програмою, а відповідно до стану людини та її реакції на фізичну активність."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyStep, {
												number: "1",
												title: "Оцінка стану",
												text: "Перед початком програми аналізуються медичні документи, результати обстежень, скарги та фізичні можливості."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyStep, {
												number: "2",
												title: "Визначення навантаження",
												text: "Визначається допустима інтенсивність і тип фізичної активності."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyStep, {
												number: "3",
												title: "Контроль під час занять",
												text: "Під час реабілітації оцінюються самопочуття та реакція організму на навантаження."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyStep, {
												number: "4",
												title: "Корекція програми",
												text: "Інтенсивність і обсяг занять можуть змінюватися відповідно до прогресу або змін у стані людини."
											})
										]
									})
								]
							})
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
					id: "rehab-methods",
					className: "py-12 sm:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mx-auto max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl",
										children: "Методи реабілітації"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-1 w-16 rounded-full bg-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-3xl text-base leading-relaxed text-navy/76",
										children: "Конкретні методи підбираються відповідно до завдань реабілітації, функціонального стану та переносимості навантаження."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid justify-center gap-7 sm:grid-cols-2 lg:grid-cols-3",
								children: visibleConditionCards.map((card, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConditionCard, {
									card,
									image: CONDITION_IMAGES[index % CONDITION_IMAGES.length]
								}, card.title))
							}),
							allConditionCards.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowAllConditions((value) => !value),
									className: "rounded-full border-2 border-primary/20 px-10 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary",
									children: showAllConditions ? "Згорнути" : "Більше"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-center text-sm text-navy/60",
								children: "Перелік методів визначається індивідуально. Частина процедур може не входити до конкретної програми."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "for-whom",
					className: "scroll-mt-24 bg-white py-12 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mx-auto max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl",
										children: "Які методи реабілітації ми використовуємо"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-1 w-16 rounded-full bg-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-3xl text-base leading-relaxed text-navy/76",
										children: "Підбираємо комбінацію методів залежно від етапу відновлення, переносимості навантаження та цілей пацієнта після інфаркту міокарда."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid justify-center gap-7 sm:grid-cols-2 lg:grid-cols-3",
								children: visibleConditionCards.map((card, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConditionCard, {
									card,
									image: CONDITION_IMAGES[index % CONDITION_IMAGES.length]
								}, card.title))
							}),
							allConditionCards.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowAllConditions((value) => !value),
									className: "rounded-full border-2 border-primary/20 px-10 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary",
									children: showAllConditions ? "Згорнути" : "Більше"
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "process",
					className: "relative scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.98)_0%,rgba(237,244,255,0.95)_48%,rgba(225,236,255,0.95)_100%)] py-14 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -right-28 -top-44 h-[420px] w-[420px] rounded-full border border-white/60",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute right-[7%] top-[-110px] h-[310px] w-[310px] rounded-full border border-white/45",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-white/45 blur-3xl",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-[1180px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex rounded-full border border-primary/22 bg-white/48 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary shadow-[0_12px_30px_rgba(47,99,190,0.08)] backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm",
											children: "Етапи відновлення"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-6 max-w-4xl text-3xl font-extrabold leading-[1.02] text-navy sm:text-4xl xl:text-[3.4rem]",
											children: "Як проходить відновлення"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-2 w-28 rounded-full bg-[linear-gradient(90deg,#2f63be_0%,#2f63be_68%,#35c88a_100%)] shadow-[0_8px_20px_rgba(53,200,138,0.18)] sm:w-32" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg",
											children: "Реабілітація будується поетапно — від первинної оцінки до рекомендацій після завершення програми."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-6",
									children: PROCESS_STEPS$1.map((step, index) => {
										const Icon = step.icon;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "relative flex min-h-[270px] flex-col rounded-[28px] border border-primary/16 bg-white/88 p-6 shadow-[0_24px_50px_rgba(31,61,120,0.08)] backdrop-blur-sm sm:min-h-[300px] sm:p-7",
											children: [
												index < PROCESS_STEPS$1.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute left-[calc(100%-8px)] top-18 hidden h-[2px] w-6 bg-primary/55 xl:block",
													"aria-hidden": true
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-[74px] items-center justify-center rounded-[24px] bg-[linear-gradient(135deg,#35c88a_0%,#67d8a4_100%)] text-white shadow-[0_18px_34px_rgba(53,200,138,0.28)] ring-1 ring-emerald-200/80",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
														className: "size-9",
														strokeWidth: 2.15
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-5 max-w-[16ch] text-[1.55rem] font-extrabold leading-[1.1] text-navy sm:text-[1.75rem]",
													children: step.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-sm leading-relaxed text-navy/76 sm:text-[0.95rem]",
													children: step.text
												})
											]
										}, step.title);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-7 overflow-hidden rounded-[30px] border border-primary/16 bg-white/68 shadow-[0_18px_40px_rgba(31,61,120,0.06)] backdrop-blur-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-4 px-5 py-5 sm:px-7 sm:py-6 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-6 lg:px-7",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 lg:min-w-[280px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(235,244,255,0.95),rgba(255,255,255,0.98))] text-primary shadow-inner ring-1 ring-primary/10",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, {
														className: "size-7",
														strokeWidth: 2.05
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-lg font-extrabold leading-tight text-navy sm:text-[1.6rem]",
													children: "Формати надання допомоги"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "hidden h-12 w-px bg-primary/18 lg:block",
												"aria-hidden": true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-primary sm:text-[0.95rem] lg:min-w-0 lg:flex-1 lg:flex-nowrap lg:gap-x-3 lg:whitespace-nowrap xl:text-base",
												children: CARE_FORMATS.map((format, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: format }), index < CARE_FORMATS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-primary/55",
													"aria-hidden": true,
													children: "•"
												})] }, format))
											})
										]
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
					id: "team",
					className: "py-12 sm:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[28px] border border-blue-100/90 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:p-8 lg:p-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex rounded-full border border-primary/22 bg-white/48 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary shadow-[0_12px_30px_rgba(47,99,190,0.08)] backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm",
										children: "Міждисциплінарна команда"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-6 max-w-4xl text-3xl font-extrabold leading-[1.02] text-navy sm:text-4xl xl:text-[3.4rem]",
										children: "Відновлення під наглядом фахівців"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-2 w-28 rounded-full bg-[linear-gradient(90deg,#2f63be_0%,#2f63be_68%,#35c88a_100%)] shadow-[0_8px_20px_rgba(53,200,138,0.18)] sm:w-32" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg",
										children: "До програми можуть залучатися спеціалісти різних напрямів залежно від стану людини та поставлених реабілітаційних завдань."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "лікар-кардіолог" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "лікар фізичної та реабілітаційної медицини" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "фізичний терапевт" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "психолог" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "інші спеціалісти за показаннями" })]
											})
										]
									})
								]
							})
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
					id: "formats",
					className: "py-12 sm:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mx-auto max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl",
									children: "Формати реабілітації"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-1 w-16 rounded-full bg-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-3xl text-base leading-relaxed text-navy/76",
									children: "Формат проходження програми визначається відповідно до стану пацієнта, необхідного обсягу медичного контролю та можливості регулярно відвідувати центр."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatCard, {
									title: "Стаціонарна реабілітація",
									text: "Пацієнт перебуває у центрі та проходить заплановану програму відновлення протягом визначеного періоду."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatCard, {
									title: "Амбулаторна реабілітація",
									text: "Пацієнт відвідує центр у визначені дні та проходить заняття і консультації відповідно до індивідуального графіка."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatCard, {
									title: "Денна програма",
									text: "Реабілітаційні заходи проводяться протягом дня без цілодобового перебування у центрі."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatCard, {
									title: "Дистанційний супровід",
									text: "Окремі елементи програми та подальший контроль можуть проводитися дистанційно, якщо це дозволяє стан людини."
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
					id: "results",
					className: "py-12 sm:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[28px] border border-emerald-100/90 bg-[linear-gradient(180deg,#f0fdf4_0%,#dcfce7_100%)] p-5 shadow-[0_20px_60px_rgba(34,197,94,0.08)] sm:p-8 lg:p-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700 shadow-[0_12px_30px_rgba(34,197,94,0.08)] backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm",
										children: "Результати реабілітації"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-6 max-w-4xl text-3xl font-extrabold leading-[1.02] text-navy sm:text-4xl xl:text-[3.4rem]",
										children: "Чого можна досягти"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-2 w-28 rounded-full bg-emerald-500 shadow-[0_8px_20px_rgba(53,200,138,0.18)] sm:w-32" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg",
										children: "Метою програми є не досягнення універсального показника, а покращення функціонального стану та безпечне повернення людини до активності."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "покращенню переносимості фізичного навантаження;" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "поступовому збільшенню рівня повсякденної активності;" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "зменшенню фізичної декондиції після госпіталізації;" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "покращенню витривалості;" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "більш впевненому поверненню до побутової активності;" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "формуванню навичок самоконтролю;" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "кращому розумінню безпечного рівня фізичного навантаження;" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "контролю факторів серцево-судинного ризику;" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-3 text-base leading-relaxed text-navy/82",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "підготовці до подальшої самостійної фізичної активності." })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-sm text-navy/60",
										children: "Результати залежать від вихідного стану, перебігу захворювання, супутніх станів, регулярності занять та інших індивідуальних факторів і не можуть бути гарантовані."
									})
								]
							})
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "programs",
					className: "scroll-mt-24 bg-white py-14 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl",
									children: "Програми та вартість"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1 w-16 rounded-full bg-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-3xl text-base leading-relaxed text-navy/70",
									children: "Тривалість і наповнення програми залежать від стану пацієнта, необхідної кількості занять, консультацій, функціональної діагностики та формату проходження реабілітації."
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,1fr))_0.94fr]",
								children: [programCards.map((program) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramCard, { program }, program.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportHighlightsCard, {})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-center text-sm text-navy/60",
								children: "Точне наповнення та вартість програми визначаються після консультації та оцінки стану."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OtherServicesSlider, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentsReviewSection, { onOpenDocumentsModal: () => setDocumentsModalOpen(true) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
					id: "cta",
					className: "py-12 sm:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[38px] border border-emerald-100/70 bg-[linear-gradient(135deg,rgba(236,253,245,0.95)_0%,rgba(255,255,255,0.98)_100%)] px-5 py-6 shadow-[0_30px_90px_rgba(34,197,94,0.12)] sm:px-8 sm:py-8 lg:px-12 lg:py-12 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "max-w-3xl mx-auto text-3xl font-extrabold leading-[1.08] text-navy sm:text-4xl lg:text-5xl",
									children: "Зробіть перший крок до відновлення"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-2xl mx-auto text-base leading-relaxed text-navy/72 sm:text-lg",
									children: "Запишіться на консультацію, щоб оцінити ваш поточний стан, визначити можливий формат реабілітації та сформувати подальший план відновлення після інфаркту."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => openModal("Записатися на консультацію"),
										className: "inline-flex min-h-[4.5rem] items-center justify-center gap-2.5 rounded-[20px] bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground shadow-[0_22px_48px_rgba(52,211,153,0.28)] transition-all hover:-translate-y-0.5 hover:bg-brand-green/92 hover:shadow-[0_28px_58px_rgba(52,211,153,0.34)] sm:min-w-[23rem] sm:px-8 sm:text-base",
										children: "Записатися на консультацію"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-navy/60",
									children: "Адміністратор зв'яжеться з вами для уточнення деталей та погодження зручного часу."
								})
							]
						})
					})
				}),
				faqItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "faq",
					className: "scroll-mt-24 border-t border-slate-200/60 bg-slate-50/70 py-20 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-2xl font-bold leading-tight text-navy sm:text-3xl md:text-4xl",
										children: "Питання та відповіді"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-1 w-16 rounded-full bg-primary sm:mt-6" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-6 max-w-[640px] text-sm leading-relaxed text-slate-600 md:text-base",
										children: "Зібрали найпоширеніші запитання про реабілітацію після інфаркту міокарда. Якщо не знайшли відповідь, зверніться до нас і ми допоможемо підібрати наступний крок."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, {
								items: visibleFaqItems,
								variant: "home"
							}),
							faqItems.length > FAQ_VISIBLE_COUNT && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setFaqExpanded((value) => !value),
									"aria-expanded": faqExpanded,
									className: "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-7 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white md:text-base",
									children: [faqExpanded ? "Показати менше питань" : "Показати більше питань", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-5 transition-transform duration-300", faqExpanded && "rotate-180") })]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQConsultationCTA, { className: "mt-16" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSection, {
					className: "pb-14 sm:pb-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoBlock, {})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicalDocumentsModal, {
				open: documentsModalOpen,
				onOpenChange: setDocumentsModalOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function AnchorNav({ breadcrumbItems }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-border/70 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
				items: breadcrumbItems,
				className: "pb-3 pt-4 sm:pt-4"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto pb-4 scrollbar-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-max items-center gap-4 sm:gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "shrink-0 text-sm font-bold text-navy/70",
						children: "Що вас цікавить:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Розділи сторінки",
						className: "flex min-w-max gap-2 sm:gap-3",
						children: ANCHORS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "rounded-full border border-border bg-soft px-4 py-2 text-sm font-semibold text-navy/78 transition-colors hover:border-primary/40 hover:bg-soft-blue hover:text-primary",
							children: item.label
						}, item.href))
					})]
				})
			})]
		})
	});
}
function PageSection({ id, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("mx-auto max-w-[1600px] scroll-mt-24 px-4 sm:px-6 lg:px-10", className),
		children
	});
}
function SectionHeading$1({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1 w-16 rounded-full bg-primary" }),
		text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-3xl text-base leading-relaxed text-navy/76",
			children: text
		})
	] });
}
function MethodCard({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "relative flex flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-xl font-bold leading-snug text-navy",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 text-sm font-normal leading-relaxed text-slate-600",
				children: text
			})]
		})
	});
}
function SafetyStep({ number, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "relative flex flex-col rounded-[24px] border border-slate-200/80 bg-white p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-extrabold text-lg",
				children: number
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-lg font-bold leading-snug text-navy",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-navy/72",
				children: text
			})
		]
	});
}
function FormatCard({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "relative flex flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-xl font-bold leading-snug text-navy",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 text-sm font-normal leading-relaxed text-slate-600",
				children: text
			})]
		})
	});
}
function ExpandableIntroSection({ title, shortDescription, expandedContent, image, imageAlt, includeTitle, includeItems, isExpanded, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl border border-blue-100 bg-soft p-5 shadow-sm sm:p-8 lg:p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold leading-tight text-navy sm:text-4xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-1 w-16 rounded-full bg-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base leading-relaxed text-navy/82 sm:text-lg",
					children: shortDescription
				}),
				includeItems && includeItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [includeTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-extrabold leading-snug text-navy sm:text-xl",
						children: includeTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: includeItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm leading-relaxed text-navy/78",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					})]
				}),
				!isExpanded && expandedContent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onToggle,
					className: "mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90",
					"aria-expanded": false,
					"aria-controls": "cardio-intro-expanded",
					children: ["Детальніше", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: imageAlt,
				width: 1100,
				height: 760,
				loading: "lazy",
				className: "h-64 w-full rounded-xl object-contain bg-white/60 shadow-sm sm:h-80 lg:h-[380px]"
			})]
		}), expandedContent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "cardio-intro-expanded",
			className: cn("overflow-hidden transition-[max-height,opacity] duration-300", isExpanded ? "mt-7 max-h-[3600px] opacity-100" : "max-h-0 opacity-0"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-blue-100 pt-6 text-base leading-relaxed text-navy/82 whitespace-pre-line",
				children: expandedContent
			}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onToggle,
				className: "mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/25 px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/8",
				"aria-expanded": true,
				"aria-controls": "cardio-intro-expanded",
				children: ["Згорнути", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 rotate-180" })]
			})]
		})]
	});
}
function TimingSection({ emergencyBody }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-[28px] border border-blue-100/90 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:p-8 lg:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -left-20 top-0 h-56 w-56 rounded-full bg-primary/8 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading$1, {
						title: "Що варто знати перед початком програми",
						text: "Ця програма створена, щоб безпечно підтримати ваше відновлення після серцевої події. Ознайомтеся з ключовими орієнтирами нижче, щоб почуватися впевненіше та отримати максимальну користь від кожного етапу реабілітації."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 overflow-hidden rounded-[28px] border border-blue-100/90 bg-white/92 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-0 lg:grid-cols-2",
							children: TIMING_COLUMNS.map((column) => {
								const Icon = column.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border-t border-blue-100/90 p-5 sm:p-7 lg:border-l lg:border-t-0 first:border-t-0 first:lg:border-l-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4 sm:gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("flex size-14 shrink-0 items-center justify-center rounded-full shadow-inner ring-1 ring-black/4 sm:size-[78px]", column.iconBg),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: cn("size-7 sm:size-9", column.iconColor),
												strokeWidth: 2.1
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg font-extrabold leading-snug text-navy sm:text-[1.45rem] lg:text-[1.6rem]",
												children: column.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-5 space-y-3.5 sm:mt-6 sm:space-y-4",
												children: column.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex gap-3 text-sm leading-relaxed text-navy/80 sm:text-base",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-2.5 size-2 shrink-0 rounded-full", column.bulletColor) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
												}, item))
											})]
										})]
									})
								}, column.title);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-hidden rounded-[28px] border border-blue-100/90 bg-[linear-gradient(135deg,rgba(239,246,255,0.95),rgba(255,255,255,0.98))] shadow-[0_18px_40px_rgba(37,99,235,0.08)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-5 sm:p-7 lg:p-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-5 sm:flex-row sm:items-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-16 shrink-0 items-center justify-center rounded-full bg-white/88 shadow-inner ring-1 ring-primary/8 sm:size-20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
											className: "size-8 text-primary sm:size-10",
											strokeWidth: 2.05
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "max-w-2xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-2xl font-extrabold leading-tight text-navy sm:text-3xl",
												children: "Про протипоказання"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1 w-16 rounded-full bg-primary" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-5 text-base leading-relaxed text-navy/82 sm:text-lg",
												children: "Перед початком фізичної реабілітації лікар оцінює стан людини та можливість безпечного виконання навантажень."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-base leading-relaxed text-navy/72 sm:text-lg",
												children: "Остаточне рішення щодо початку та обсягу реабілітації приймається лікарем після оцінки стану пацієнта."
											})
										]
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative min-h-[240px] overflow-hidden border-t border-blue-100/90 lg:min-h-[320px] lg:border-l lg:border-t-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: medical_assessment_default,
									alt: "Лікар консультує пацієнта перед початком програми",
									width: 1800,
									height: 1200,
									loading: "lazy",
									className: "h-full w-full object-cover object-center"
								})
							})]
						})
					})
				]
			})
		]
	});
}
function ConditionCard({ card, image }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-[210px] w-full overflow-hidden bg-slate-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: card.title,
				loading: "lazy",
				width: 900,
				height: 620,
				className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-between bg-white p-6 md:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-3 text-xl font-bold leading-snug text-navy",
				children: card.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 line-clamp-3 text-sm font-normal leading-relaxed text-slate-600",
				children: card.text
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#documents",
				onClick: (e) => {
					e.preventDefault();
					document.getElementById("documents")?.scrollIntoView({
						behavior: "smooth",
						block: "start"
					});
				},
				className: "inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white",
				children: ["Детальніше", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
			}) })]
		})]
	});
}
function ProgramCard({ program }) {
	const isPopular = Boolean(program.isPopular);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("relative flex min-h-[286px] flex-col rounded-2xl border p-5 shadow-sm sm:min-h-[300px] sm:p-6", isPopular ? "border-primary bg-primary text-white shadow-primary/20" : "border-blue-100 bg-white"),
		children: [
			isPopular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-4 top-4 rounded-full bg-white px-2.5 py-1 text-[0.7rem] font-bold text-primary shadow-sm sm:right-5 sm:top-5",
				children: "Популярна"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: cn("text-[1.45rem] font-bold leading-[1.12] sm:text-xl", isPopular ? "pr-24 text-white" : "text-navy"),
				children: program.title
			}),
			program.shortDescription && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-2.5 text-[0.92rem] leading-[1.65] sm:mt-3 sm:text-sm", isPopular ? "text-white/82" : "text-navy/72"),
				children: program.shortDescription
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: cn("mt-5 space-y-3 border-t pt-4 text-sm sm:mt-6 sm:space-y-4 sm:pt-5", isPopular ? "border-white/22" : "border-border"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: cn("text-xs font-bold uppercase tracking-[0.14em]", isPopular ? "text-white/70" : "text-muted-foreground"),
					children: "Тривалість"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: cn("mt-1 font-semibold", isPopular ? "text-white" : "text-navy"),
					children: program.duration
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: cn("text-xs font-bold uppercase tracking-[0.14em]", isPopular ? "text-white/70" : "text-muted-foreground"),
					children: "Ціна"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: cn("mt-1 text-[1.35rem] font-extrabold sm:text-lg", isPopular ? "text-white" : "text-primary"),
					children: program.priceLabel
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto pt-6 sm:pt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
					to: program.route,
					className: cn("inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors sm:px-5 sm:py-3", isPopular ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-primary-foreground hover:bg-primary/90"),
					children: [program.priceLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		]
	});
}
function SupportHighlightsCard() {
	const [activeIndex, setActiveIndex] = import_react.useState(0);
	const [isPaused, setIsPaused] = import_react.useState(false);
	import_react.useEffect(() => {
		if (isPaused || typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const intervalId = window.setInterval(() => {
			setActiveIndex((current) => (current + 1) % SUPPORT_HIGHLIGHTS.length);
		}, 5e3);
		return () => window.clearInterval(intervalId);
	}, [isPaused]);
	const activeHighlight = SUPPORT_HIGHLIGHTS[activeIndex];
	const currentSlideLabel = String(activeIndex + 1).padStart(2, "0");
	const totalSlidesLabel = String(SUPPORT_HIGHLIGHTS.length).padStart(2, "0");
	const isAnchorLink = activeHighlight.ctaHref.startsWith("#");
	const buttonClassName = "inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-[16px] border border-emerald-400/80 bg-white/92 px-4 py-3 text-[0.95rem] font-bold text-emerald-700 shadow-[0_14px_28px_rgba(21,128,61,0.12)] transition-all hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-white sm:min-h-[52px] sm:px-5 sm:py-3.5 sm:text-base";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "relative isolate flex h-full min-h-[414px] overflow-hidden rounded-[28px] border border-emerald-300/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.99)_0%,rgba(247,255,250,0.99)_62%,rgba(239,252,245,0.99)_100%)] p-4 shadow-[0_24px_46px_rgba(53,200,138,0.14)] sm:min-h-[426px] sm:p-5 xl:min-h-[438px] xl:-translate-y-1",
		onMouseEnter: () => setIsPaused(true),
		onMouseLeave: () => setIsPaused(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(53,200,138,0.16),transparent_36%)]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-[-28px] top-10 h-28 w-28 rounded-full bg-white/75 blur-2xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-brand-green/12 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full w-full flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[1.28rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-emerald-800 sm:text-[1.4rem]",
						children: "Акції та спецумови"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2.5 sm:mt-4 sm:gap-3",
						role: "tablist",
						"aria-label": "Акції та спеціальні умови",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-[54px] text-[0.98rem] font-extrabold tracking-[-0.03em] text-emerald-800 sm:min-w-[58px] sm:text-[1.05rem]",
							children: [
								currentSlideLabel,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-1.5 text-emerald-800/38",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-emerald-800/62",
									children: totalSlidesLabel
								})
							]
						}), SUPPORT_HIGHLIGHTS.map((highlight, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": activeIndex === index,
							"aria-label": highlight.title,
							onClick: () => setActiveIndex(index),
							className: cn("h-1.5 rounded-full transition-all duration-300", activeIndex === index ? "w-8 bg-[linear-gradient(90deg,#1f9d68_0%,#35c88a_55%,#6ee7a8_100%)] shadow-[0_6px_14px_rgba(53,200,138,0.22)]" : "w-6 bg-emerald-100 hover:bg-emerald-200")
						}, highlight.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-1 flex-col animate-in fade-in slide-in-from-bottom-2 duration-500 sm:mt-5",
						"aria-live": "polite",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportHighlightVisual, { highlight: activeHighlight }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex h-[58px] items-start sm:mt-5 sm:h-[66px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "max-w-[12ch] text-[1.5rem] font-black leading-[1.02] tracking-[-0.04em] text-emerald-700 sm:text-[1.7rem]",
									children: activeHighlight.title
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex h-[82px] items-start sm:h-[88px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-[25ch] text-[0.86rem] leading-[1.58] text-navy/72 sm:text-[0.9rem] sm:leading-[1.62]",
									children: activeHighlight.description
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-auto pt-4",
								children: activeHighlight.ctaLabel && (isAnchorLink ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: activeHighlight.ctaHref,
									onClick: (event) => {
										event.preventDefault();
										document.getElementById(activeHighlight.ctaHref.slice(1))?.scrollIntoView({
											behavior: "smooth",
											block: "start"
										});
									},
									className: buttonClassName,
									children: [activeHighlight.ctaLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
									to: activeHighlight.ctaHref,
									className: buttonClassName,
									children: [activeHighlight.ctaLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}))
							})
						]
					}, activeHighlight.id)
				]
			})
		]
	});
}
function SupportHighlightVisual({ highlight }) {
	if (highlight.id === "senior") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-[144px] sm:h-[150px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-4 h-[110px] w-[110px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(93,215,146,0.28)_0%,rgba(93,215,146,0.14)_46%,rgba(93,215,146,0.04)_74%,transparent_76%)] sm:top-5 sm:h-[118px] sm:w-[118px]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute left-2 top-10 size-3.5 text-emerald-200 sm:top-11 sm:size-4",
				strokeWidth: 2.2,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute right-4 top-3 size-4 text-emerald-500 sm:top-4 sm:size-4.5",
				strokeWidth: 2.1,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute bottom-6 right-5 size-4 text-emerald-600 sm:bottom-7 sm:size-4.5",
				strokeWidth: 2.1,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute left-1/2 top-5 flex h-[96px] w-[72px] -translate-x-1/2 rotate-[18deg] items-center justify-center rounded-[22px] bg-[linear-gradient(180deg,#34d67b_0%,#10a44e_100%)] shadow-[0_18px_32px_rgba(16,164,78,0.24)] sm:top-6 sm:h-[104px] sm:w-[78px] sm:rounded-[24px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute right-2.5 top-2.5 size-3 rounded-full bg-emerald-900/45 ring-3 ring-white/14 sm:right-3 sm:top-3 sm:size-3.5",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Percent, {
					className: "size-8 text-white sm:size-9",
					strokeWidth: 2.7
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-0 left-2.5 flex items-center gap-1.5 rounded-[16px] border border-emerald-100 bg-white/96 px-2.5 py-1.5 shadow-[0_12px_22px_rgba(21,128,61,0.12)] sm:left-3 sm:gap-2 sm:px-3 sm:py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
					className: "size-4 text-emerald-600 sm:size-4.5",
					strokeWidth: 2.1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.66rem] font-bold uppercase tracking-[0.14em] text-emerald-700 sm:text-[0.7rem]",
					children: "60+"
				})]
			})
		]
	});
	const Icon = highlight.icon;
	const SecondaryIcon = highlight.id === "military" ? ShieldCheck : HandHeart;
	const secondaryLabel = highlight.id === "military" ? "Підтримка" : "Разом";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-[144px] items-center justify-center sm:h-[150px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-4 h-[114px] w-[114px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(93,215,146,0.2)_0%,rgba(93,215,146,0.08)_50%,transparent_76%)] sm:top-5 sm:h-[122px] sm:w-[122px]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute left-3 top-8 size-3.5 text-emerald-200 sm:top-9 sm:size-4",
				strokeWidth: 2.2,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute right-6 top-4 size-4 text-emerald-400 sm:top-5 sm:size-4.5",
				strokeWidth: 2.1,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "absolute bottom-7 right-4 size-4 text-emerald-600 sm:bottom-8 sm:size-4.5",
				strokeWidth: 2.1,
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex size-[92px] items-center justify-center rounded-[28px] bg-[linear-gradient(165deg,#35c88a_0%,#149b56_100%)] shadow-[0_18px_32px_rgba(16,164,78,0.22)] sm:size-[98px] sm:rounded-[30px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-9 text-white sm:size-10",
					strokeWidth: 2.15
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-0 left-2.5 flex items-center gap-1.5 rounded-[16px] border border-emerald-100 bg-white/96 px-2.5 py-1.5 shadow-[0_12px_22px_rgba(21,128,61,0.12)] sm:left-3 sm:gap-2 sm:px-3 sm:py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryIcon, {
					className: "size-4 text-emerald-600 sm:size-4.5",
					strokeWidth: 2.1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.66rem] font-bold uppercase tracking-[0.14em] text-emerald-700 sm:text-[0.7rem]",
					children: secondaryLabel
				})]
			})
		]
	});
}
function OtherServicesSlider() {
	const trackRef = import_react.useRef(null);
	const [active, setActive] = import_react.useState(0);
	const isFirstSlide = active === 0;
	const isLastSlide = active === OTHER_SERVICES.length - 1;
	const scrollToIndex = (index) => {
		const track = trackRef.current;
		if (!track) return;
		const card = track.children[index];
		if (card) track.scrollTo({
			left: card.offsetLeft - track.offsetLeft,
			behavior: "smooth"
		});
	};
	const onScroll = () => {
		const track = trackRef.current;
		if (!track) return;
		const next = Array.from(track.children).reduce((closest, card, index) => {
			const distance = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);
			return distance < closest.distance ? {
				index,
				distance
			} : closest;
		}, {
			index: 0,
			distance: Number.POSITIVE_INFINITY
		});
		setActive(next.index);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-soft-blue py-12 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading$1, {
						title: "Інші послуги",
						text: "Суміжні напрями, які можуть знадобитися до, під час або після програми."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
						to: ALL_SERVICES_ROUTE,
						className: "inline-flex w-fit items-center gap-2 rounded-lg border border-primary/25 bg-white px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/8",
						children: ["Всі-послуги", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: trackRef,
					onScroll,
					className: "mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: OTHER_SERVICES.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid w-[84%] shrink-0 snap-start overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm sm:w-[54%] lg:w-[37%] xl:w-[30%]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: service.image,
							alt: service.title,
							width: 900,
							height: 620,
							loading: "lazy",
							className: "h-44 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-navy",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 line-clamp-3 text-sm leading-relaxed text-navy/72",
									children: service.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
									to: service.to,
									className: "mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-primary/25 px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/8",
									children: ["Детальніше", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						})]
					}, service.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-center gap-3 sm:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Попередня послуга",
							onClick: () => scrollToIndex(Math.max(0, active - 1)),
							disabled: isFirstSlide,
							className: cn("flex size-10 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:bg-soft sm:size-11", isFirstSlide && "cursor-not-allowed opacity-45 hover:bg-white"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center gap-2.5",
							children: OTHER_SERVICES.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => scrollToIndex(index),
								className: cn("size-2.5 rounded-full transition-all duration-300", active === index ? "bg-primary scale-110" : "bg-slate-300 hover:bg-slate-400"),
								"aria-label": `Перейти до послуги ${index + 1}`
							}, service.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Наступна послуга",
							onClick: () => scrollToIndex(Math.min(OTHER_SERVICES.length - 1, active + 1)),
							disabled: isLastSlide,
							className: cn("flex size-10 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:bg-soft sm:size-11", isLastSlide && "cursor-not-allowed opacity-45 hover:bg-white"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
						})
					]
				})
			]
		})
	});
}
function DocumentsReviewSection({ onOpenDocumentsModal }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "documents",
		className: "scroll-mt-24 py-12 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[38px] border border-blue-100/70 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.99)_0%,rgba(246,250,255,0.98)_32%,rgba(234,242,255,0.97)_100%)] px-5 py-6 shadow-[0_30px_90px_rgba(31,61,120,0.12)] sm:px-8 sm:py-8 lg:px-12 lg:py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-white/95 blur-3xl",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute -right-10 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-brand-green/10 blur-3xl",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-8 xl:grid-cols-[minmax(0,0.96fr)_minmax(460px,1.04fr)] xl:items-center xl:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl xl:py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center rounded-full border border-primary/20 bg-white/92 px-5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-primary shadow-[0_12px_28px_rgba(31,61,120,0.1)] sm:px-6 sm:text-[0.92rem]",
									children: "Онлайн-звернення"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-7 max-w-[13.9ch] font-black leading-[0.9] tracking-[-0.045em] text-navy lg:max-w-[12.8ch]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block whitespace-nowrap text-[2.5rem] sm:text-[3.75rem] lg:text-[4.3rem]",
											children: "Попередньо надішліть"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block whitespace-nowrap text-[3.2rem] text-primary sm:text-[4.8rem] lg:text-[5.45rem]",
											children: "документи"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block whitespace-nowrap text-[2.5rem] sm:text-[3.75rem] lg:text-[4.3rem]",
											children: "для ознайомлення"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-7 max-w-[34rem] text-base leading-relaxed text-navy/72 sm:text-[1.15rem] sm:leading-[1.7]",
									children: "Якщо ви не впевнені, яка програма вам підходить, надішліть наявні медичні документи. Це допоможе краще підготуватися до консультації та визначити подальші кроки."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-bold text-navy",
											children: "Як це працює"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "space-y-2 text-base leading-relaxed text-navy/76",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Надішліть документи" }), " — передайте наявні медичні висновки та результати обстежень через форму або адміністратору."] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Попереднє ознайомлення" }), " — фахівець ознайомиться з наданою інформацією перед консультацією."] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Зв'язок з адміністратором" }), " — адміністратор зв'яжеться з вами для уточнення деталей і погодження консультації."] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Визначення подальших кроків" }), " — після консультації визначається необхідність додаткової діагностики та можливий формат реабілітації."] })]
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg font-bold text-navy",
												children: "Які документи бажано надати"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-base leading-relaxed text-navy/72",
												children: "Якщо вони у вас є:"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
												className: "space-y-2 text-base leading-relaxed text-navy/76",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-start gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "виписка зі стаціонару;" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-start gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "висновок кардіолога;" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-start gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "результати ЕКГ та ЕхоКГ;" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-start gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "результати коронарографії;" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-start gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "документи про проведене стентування або операцію;" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-start gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "результати лабораторних та інших обстежень;" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-start gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "перелік препаратів, які ви приймаєте;" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-start gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-2 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "інші медичні документи, що стосуються перенесеного інфаркту." })]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-navy/60",
												children: "Якщо у вас немає повного комплекту документів, ви все одно можете звернутися до адміністратора."
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: onOpenDocumentsModal,
										className: "inline-flex min-h-[4.5rem] items-center justify-center gap-2.5 rounded-[20px] bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground shadow-[0_22px_48px_rgba(52,211,153,0.28)] transition-all hover:-translate-y-0.5 hover:bg-brand-green/92 hover:shadow-[0_28px_58px_rgba(52,211,153,0.34)] sm:min-w-[23rem] sm:px-8 sm:text-base",
										children: "Надіслати документи"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: CONTACTS.phoneHref,
										className: "inline-flex min-h-[4.5rem] items-center justify-center gap-3 rounded-[20px] border border-[#7A8397] bg-white/96 px-7 py-4 text-base font-bold text-[#586279] shadow-[0_18px_40px_rgba(88,98,121,0.1)] transition-colors hover:border-[#586279] hover:bg-white hover:text-[#3F4758] sm:min-w-[16rem] sm:px-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-6 text-[#586279]" }), CONTACTS.phone]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4 sm:space-y-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-[34px] border border-white/80 bg-white/95 shadow-[0_28px_65px_rgba(31,61,120,0.14)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: cardio_rehab_cta_photo_v3_default,
									alt: "Фахівець допомагає пацієнтці виконувати вправу під час реабілітації",
									loading: "lazy",
									width: 1536,
									height: 1024,
									className: "aspect-[1.22/1] w-full object-cover object-center md:object-[center_58%]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.08)_100%)]",
									"aria-hidden": true
								})]
							})
						})]
					})
				]
			})
		})
	});
}
function MedicalDocumentsModal({ open, onOpenChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "overflow-hidden border-none bg-white p-0 shadow-[0_32px_90px_rgba(15,23,42,0.32)] sm:max-w-3xl sm:rounded-[32px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "sr-only",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Надіслати медичні документи" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Форма для надсилання медичних документів на попередній розгляд." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicalDocumentsForm, { className: "rounded-none border-0 shadow-none" })]
		})
	});
}
function MedicalDocumentsForm({ className }) {
	const inputRef = import_react.useRef(null);
	const [files, setFiles] = import_react.useState([]);
	const [name, setName] = import_react.useState("");
	const [phone, setPhone] = import_react.useState("");
	const [dragActive, setDragActive] = import_react.useState(false);
	const [submitState, setSubmitState] = import_react.useState({
		type: "idle",
		message: ""
	});
	const validatePhone = (value) => {
		const cleaned = value.replace(/[\s()+-]/g, "");
		return /^\d{10,13}$/.test(cleaned);
	};
	const validateFiles = (nextFiles) => {
		const invalidFormat = nextFiles.find((file) => {
			const extension = file.name.split(".").pop()?.toLowerCase();
			return !extension || ![
				"pdf",
				"jpg",
				"jpeg",
				"png"
			].includes(extension);
		});
		if (invalidFormat) return `Файл "${invalidFormat.name}" має недопустимий формат. Доступні PDF, JPG і PNG.`;
		const tooLarge = nextFiles.find((file) => file.size > 10 * 1024 * 1024);
		if (tooLarge) return `Файл "${tooLarge.name}" перевищує 10 МБ.`;
		return null;
	};
	const applyFiles = (nextFiles) => {
		if (nextFiles.length === 0) return;
		const validationError = validateFiles(nextFiles);
		if (validationError) {
			setSubmitState({
				type: "error",
				message: validationError
			});
			return;
		}
		setFiles(nextFiles);
		setSubmitState({
			type: "idle",
			message: ""
		});
	};
	const onFileChange = (event) => {
		applyFiles(Array.from(event.target.files || []));
		event.target.value = "";
	};
	const formatFileSize = (size) => {
		if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} КБ`;
		return `${(size / (1024 * 1024)).toFixed(1)} МБ`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden rounded-[32px] border border-blue-100/90 bg-white p-5 shadow-[0_22px_60px_rgba(31,61,120,0.08)] sm:p-8 lg:p-10", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-14 top-0 h-52 w-52 rounded-full bg-primary/8 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-0 left-8 h-40 w-40 rounded-full bg-sky-100/70 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-[2.2rem]",
						children: "Надішліть медичні документи для попереднього розгляду"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-base leading-relaxed text-navy/68 sm:text-lg",
						children: "Це допоможе лікарю ознайомитися з вашим станом і підготувати персональні рекомендації ще до першого контакту."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8",
						noValidate: true,
						onSubmit: (event) => {
							event.preventDefault();
							if (!files.length) {
								setSubmitState({
									type: "error",
									message: "Додайте хоча б один медичний документ для попереднього розгляду."
								});
								return;
							}
							if (!name.trim()) {
								setSubmitState({
									type: "error",
									message: "Вкажіть ваше ім’я, щоб ми знали, як до вас звертатися."
								});
								return;
							}
							if (!phone.trim()) {
								setSubmitState({
									type: "error",
									message: "Вкажіть номер телефону для зв’язку з адміністратором."
								});
								return;
							}
							if (!validatePhone(phone)) {
								setSubmitState({
									type: "error",
									message: "Введіть коректний номер телефону у форматі +380 XX XXX XX XX."
								});
								return;
							}
							setSubmitState({
								type: "success",
								message: "Документи надіслано. Після попереднього розгляду адміністратор зв’яжеться з вами."
							});
							setFiles([]);
							setName("");
							setPhone("");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => inputRef.current?.click(),
								onDragOver: (event) => {
									event.preventDefault();
									setDragActive(true);
								},
								onDragLeave: (event) => {
									event.preventDefault();
									setDragActive(false);
								},
								onDrop: (event) => {
									event.preventDefault();
									setDragActive(false);
									applyFiles(Array.from(event.dataTransfer.files || []));
								},
								className: cn("group flex w-full flex-col items-center justify-center rounded-[24px] border border-dashed px-6 py-10 text-center transition-all sm:px-8 sm:py-12", dragActive ? "border-primary bg-soft-blue/80 shadow-[0_18px_40px_rgba(37,99,235,0.12)]" : "border-primary/20 bg-[linear-gradient(180deg,rgba(248,251,255,0.9)_0%,rgba(255,255,255,0.96)_100%)] hover:border-primary/35 hover:bg-soft-blue/40"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-[72px] items-center justify-center rounded-full bg-primary/10 text-primary sm:size-20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, {
											className: "size-9 sm:size-10",
											strokeWidth: 1.85
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-5 text-xl font-bold leading-tight text-navy",
										children: "Додайте файли"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 text-sm leading-relaxed text-navy/58 sm:text-base",
										children: "PDF, JPG, PNG (до 10 МБ на файл)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 text-xs leading-relaxed text-navy/48 sm:text-sm",
										children: "Перетягніть файли сюди або натисніть, щоб вибрати"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: inputRef,
								type: "file",
								accept: ".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png",
								multiple: true,
								className: "hidden",
								onChange: onFileChange
							}),
							files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid gap-3 md:grid-cols-2",
								children: files.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-[18px] border border-blue-100/90 bg-white/92 px-4 py-3 shadow-[0_10px_25px_rgba(31,61,120,0.04)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-semibold text-navy",
											children: file.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-xs text-navy/55",
											children: formatFileSize(file.size)
										})]
									})]
								}, `${file.name}-${file.size}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-3 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Ваше ім’я"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "Ваше ім’я",
										value: name,
										onChange: (event) => {
											setName(event.target.value);
											if (submitState.type !== "idle") setSubmitState({
												type: "idle",
												message: ""
											});
										},
										className: "min-h-14 w-full rounded-[18px] border border-blue-100 bg-white px-5 text-sm font-medium text-navy outline-none transition-all placeholder:text-navy/36 focus:border-primary focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Номер телефону"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										placeholder: "Номер телефону",
										value: phone,
										onChange: (event) => {
											setPhone(event.target.value);
											if (submitState.type !== "idle") setSubmitState({
												type: "idle",
												message: ""
											});
										},
										className: "min-h-14 w-full rounded-[18px] border border-blue-100 bg-white px-5 text-sm font-medium text-navy outline-none transition-all placeholder:text-navy/36 focus:border-primary focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-[18px] bg-[linear-gradient(90deg,rgba(37,99,235,0.46)_0%,#1d4ed8_100%)] px-6 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(37,99,235,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(37,99,235,0.24)] sm:text-base",
								children: ["Надіслати документи", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4 sm:size-5" })]
							}),
							submitState.type !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-4 rounded-[18px] px-4 py-3 text-sm font-semibold leading-relaxed", submitState.type === "success" ? "border border-brand-green/25 bg-brand-green/10 text-navy" : "border border-red-200 bg-red-50 text-red-700"),
								role: submitState.type === "success" ? "status" : "alert",
								children: submitState.message
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-center gap-2 text-center text-xs font-medium text-navy/56 sm:text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 shrink-0 text-primary/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ваші дані захищені та не передаються третім особам" })]
							})
						]
					})
				]
			})
		]
	});
}
function SeoBlock() {
	const [expanded, setExpanded] = import_react.useState(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white px-5 py-8 shadow-[0_24px_70px_-38px_rgba(30,64,175,0.3)] sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-14 xl:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 -top-28 size-64 rounded-full bg-sky-100/60 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-32 right-1/4 size-72 rounded-full bg-emerald-100/40 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(500px,0.82fr)] lg:gap-12 xl:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/15 bg-soft-blue px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary sm:text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-brand-green" }), "ВІДНОВЛЕННЯ В БУКОВЕЛІ"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-3xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl",
							children: "Реабілітація після інфаркту міокарка"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 text-sm leading-relaxed text-navy/72 sm:text-base sm:leading-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-navy mt-4 mb-2",
								children: "Чому відновлення після інфаркту міокарка потребує контролю"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4",
								children: "Після операцій на серці або перенесеного інфаркту міокарда організм ще певний час не працює у звичному режимі. Серцево-судинна система не готова до звичного ритму життя, тому будь-яка активність без контролю може створити додаткове навантаження на серце. Саме тому період відновлення має проходити під наглядом фахівців із чітким розумінням допустимого рівня навантаження."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setExpanded((value) => !value),
								className: "group inline-flex min-h-12 cursor-pointer items-center gap-2.5 rounded-xl bg-navy px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_-16px_rgba(15,34,68,0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_18px_36px_-16px_rgba(43,93,190,0.75)]",
								"aria-expanded": expanded,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: expanded ? "Згорнути" : "Детальніше" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: cn("size-4 transition-transform duration-300 group-hover:translate-x-0.5", expanded && "rotate-90 group-hover:translate-x-0") })]
							})
						}),
						expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 border-t border-sky-100 pt-5 text-sm leading-relaxed text-navy/72 sm:text-base sm:leading-7 animate-in fade-in slide-in-from-top-2 duration-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Ключове завдання реабілітації після інфаркту міокарка — не просто відновити фізичну активність, а зробити це безпечно. Навантаження підбирають індивідуально з урахуванням стану пацієнта, показників серцевого ритму, артеріального тиску та реакції організму на вправи."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Самостійні тренування після серцевих втручань можуть бути небезпечними:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "list-disc pl-5 mb-4 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "надмірна інтенсивність або різкі зміни активності здатні спровокувати порушення ритму чи повторні серцеві проблеми;" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "повна відмова від руху уповільнює кровообіг і знижує функціональні можливості організму." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Контрольоване відновлення дозволяє досягти балансу між безпекою і прогресом. Пацієнт поступово повертається до активного життя, зменшується ризик повторних ускладнень, покращується загальне самопочуття та якість життя."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-navy mt-4 mb-2",
									children: "Де можливо пройти реабілітацію після інфаркту міокарка в Україні"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Після інфаркту міокарка пацієнти зазвичай обирають між двома форматами відновлення — санаторним або спеціалізованим медичним центром. Вибір здається простим, але саме тут часто виникає помилка: не кожен варіант однаково підходить для відновлення серця."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Санаторії здебільшого орієнтовані на загальне зміцнення організму. Це комфортний формат із базовою фізичною активністю, але без спеціалізації з реабілітації після інфаркту міокарка. У багатьох випадках програми не враховують конкретний тип втручання, стан серця після операції та індивідуальні ризики. Як результат — процес відновлення проходить без чіткої медичної логіки та контролю."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Спеціалізовані центри, наприклад Центр Основа, працюють інакше. Відновлення будується навколо конкретного стану серцево-судинної системи. Пацієнт не залишається сам на сам зі своїми відчуттями — кожен етап проходить під наглядом, з урахуванням реакції організму. Саме такий підхід дозволяє уникнути помилок і скоротити шлях до стабільного результату."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-navy mt-6 mb-2",
									children: "Відмінність спеціалізованої реабілітації після інфаркту міокарка від санаторного підходу"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Головна відмінність полягає у рівні відповідальності за стан пацієнта. У санаторному форматі навантаження зазвичай мають загальний характер і не прив’язані до конкретних показників роботи серця. Пацієнт рухається «за самопочуттям», але після операцій цього недостатньо — організм не завжди дає чіткі сигнали про перевантаження."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "У спеціалізованому центрі реабілітації після інфаркту міокарка програму розробляють так, що кожне навантаження має чіткі межі. Ці межі визначаються не інтуїтивно, а на основі контролю стану серцево-судинної системи. Відстежуються ключові показники, і саме вони вирішують, що безпечно, а що — ні. Замість підходу «спробувати і подивитись» пацієнт рухається за контрольованою логікою. Постійний контроль дозволяє поступово підвищувати навантаження без ризику для серця і уникати ситуацій, коли відновлення може обернутися погіршенням стану."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-navy mt-6 mb-2",
									children: "Значення психологічної підтримки під час відновлення"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Психологічна реабілітація після операції на серці є невід’ємною частиною повноцінного відновлення. Серцево-судинні захворювання часто супроводжуються тривогою, депресією та страхом рецидиву. Ці стани можуть гальмувати фізичне оздоровлення, знижувати мотивацію виконувати рекомендації лікарів і впливати на якість сну та загальний настрій."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "У Центрі Основа психологічній підтримці приділяють значну увагу. Вона допомагає пацієнтам:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "list-disc pl-5 mb-4 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "сформувати стійкість до стресу;" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "адаптуватися до нового способу життя;" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "зміцнити психоемоційний стан." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-navy mt-6 mb-2",
									children: "Фактори, які впливають на якість відновлення"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "На результати реабілітації після інфаркту міокарка значною мірою впливають:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "list-disc pl-5 mb-4 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "загальний стан здоров’я пацієнта;" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "наявність супутніх хронічних захворювань;" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "рівень фізичної активності до операції." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Люди, які раніше підтримували помірну форму, як правило, швидше відновлюються і легше адаптуються до реабілітаційних навантажень. Водночас навіть за низького рівня підготовки фізична реабілітація під медичним контролем залишається безпечною і результативною."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Важливо також враховувати особливості харчування, регулярність медичних оглядів і індивідуальний підхід. Центр Основа пропонує підтримку, яка враховує всі ці фактори і забезпечує не лише фізичне відновлення, а й стабілізацію тиску та серцевої діяльності."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-navy mt-6 mb-2",
									children: "Відповіді на часті питання"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Чи обов’язкова реабілітація після інфаркту міокарка?" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Реабілітація після інфаркту міокарка не є формальною вимогою, але без неї ризик ускладнень і рецидивів збільшується, а якість життя знижується."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Чим відрізняється реабілітація після інфаркту міокарка від звичайного санаторного лікування?" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Реабілітація після інфаркту міокарка передбачає постійний медичний контроль та індивідуальний підбір навантажень. Це принципово відрізняється від стандартних підходів більшості санаторіїв."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Скільки часу триває реабілітація після інфаркту міокарка?" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4",
									children: "Тривалість залежить від стану пацієнта. Зазвичай це кілька тижнів із подальшим довготривалим контролем."
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-full items-center justify-center lg:justify-end lg:self-start mt-6 lg:mt-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "group relative w-full max-w-[520px] aspect-square overflow-hidden rounded-[1.75rem] border border-sky-100 bg-[#eaf5ff] shadow-[0_20px_50px_-30px_rgba(30,64,175,0.55)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: cardio_heart_3d_default,
							alt: "Стилізована 3D-модель серця",
							loading: "lazy",
							width: 1024,
							height: 1536,
							className: "absolute inset-0 size-full object-contain transition-transform duration-700 group-hover:scale-[1.025]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0 bg-white/80 px-5 py-4 backdrop-blur-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase tracking-[0.14em] text-primary",
								children: "Серце під контролем команди"
							})
						})]
					})
				})]
			})
		]
	});
}
function pickFaqItems(items) {
	const picked = [
		"Коли можна починати реабілітацію після інфаркту?",
		"Чи можна проходити реабілітацію після стентування?",
		"Чи безпечні фізичні навантаження після інфаркту?",
		"Скільки триває реабілітація?",
		"Чи потрібно проходити обстеження перед початком реабілітації?",
		"Чи потрібне направлення лікаря?",
		"Які документи потрібно взяти на консультацію?",
		"Чи можна проходити реабілітацію амбулаторно?",
		"Чи можна продовжити реабілітацію вдома?",
		"Як дізнатися вартість програми?"
	].map((question) => items.find((item) => item.question === question)).filter(Boolean);
	return picked.length > 0 ? picked : items.slice(0, 6);
}
var QUICK_FACTS = [
	{
		label: "Формат",
		value: "вдома, у готелі або за місцем перебування"
	},
	{
		label: "Команда",
		value: "лікар, фізичний терапевт, профільні спеціалісти"
	},
	{
		label: "План",
		value: "програма після первинної оцінки стану"
	}
];
var FORMATS = [
	{
		icon: House,
		title: "Реабілітація вдома",
		text: "Курс занять для пацієнтів, яким складно або небажано регулярно приїжджати до центру."
	},
	{
		icon: Stethoscope,
		title: "Виїзд спеціаліста",
		text: "Окрема консультація, функціональна оцінка або заняття з фізичним терапевтом."
	},
	{
		icon: Ambulance,
		title: "Виїзд з обладнанням",
		text: "Заняття з портативним реабілітаційним обладнанням для безпечного відновлення."
	}
];
var INDICATIONS = [
	"відновлення після травм, переломів або ортопедичних операцій",
	"стан після інсульту, неврологічних порушень або тривалої іммобілізації",
	"кардіологічна реабілітація після погодження з лікарем",
	"біль у спині, обмеження рухливості, слабкість або порушення ходи",
	"потреба продовжити програму після стаціонарного чи амбулаторного курсу"
];
var STEPS$1 = [
	{
		title: "Заявка та медичні дані",
		text: "Адміністратор уточнює адресу, стан пацієнта, попередні висновки та бажаний формат виїзду."
	},
	{
		title: "Первинна оцінка",
		text: "Спеціаліст оцінює рухливість, силу, переносимість навантаження та побутові потреби пацієнта."
	},
	{
		title: "Індивідуальна програма",
		text: "Команда формує план занять, процедур, домашніх рекомендацій і контрольних точок."
	},
	{
		title: "Курс і контроль динаміки",
		text: "Фахівець веде заняття на місці, відстежує самопочуття та коригує навантаження."
	}
];
var PACKAGES = [
	{
		title: "Разовий виїзд",
		price: "від 1 500 грн",
		details: "консультація або одне заняття"
	},
	{
		title: "Курс вдома",
		price: "від 2 500 грн / день",
		details: "програма занять за місцем перебування"
	},
	{
		title: "Виїзд з обладнанням",
		price: "від 3 000 грн / день",
		details: "заняття з портативним обладнанням центру"
	}
];
var SAFETY_POINTS = [
	"перед початком фахівець перевіряє показання та можливі обмеження",
	"навантаження дозується за самопочуттям, пульсом, тиском і функціональним станом",
	"при гострих симптомах плановий виїзд відкладається, а пацієнту радять невідкладну допомогу"
];
function SectionIntro$1({ eyebrow, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
			children: eyebrow
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-3 max-w-4xl text-3xl font-extrabold leading-tight text-navy md:text-5xl",
			children: title
		}),
		text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-5 max-w-3xl text-base leading-relaxed text-navy/75 md:text-lg",
			children: text
		})
	] });
}
function MobileRehabPage({ node }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative min-h-[620px] overflow-hidden bg-navy-deep",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: service_rehab_default,
							alt: node.title,
							className: "absolute inset-0 size-full object-cover object-center opacity-45",
							width: 1600,
							height: 1067
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy-deep/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto grid min-h-[620px] max-w-[1600px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-3xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinned, { className: "size-4 text-brand-green" }), "Спеціалісти OSNOVA приїжджають до пацієнта"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl",
										children: "Виїзна реабілітація"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-2xl text-base leading-relaxed text-white/82 md:text-xl",
										children: "Допомагаємо відновлювати рух, силу та самостійність там, де пацієнту безпечніше й зручніше проходити програму: вдома, у готелі або за місцем перебування."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-9 flex flex-col gap-3 sm:flex-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
											to: "/kontakty",
											className: "inline-flex items-center justify-center gap-3 rounded-lg bg-brand-green px-7 py-4 text-sm font-bold uppercase tracking-wide text-brand-green-foreground shadow-lg transition-all hover:bg-brand-green/90 hover:scale-[1.02]",
											children: ["Замовити виїзд ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: CONTACTS.phoneHref,
											className: "inline-flex items-center justify-center gap-3 rounded-lg border border-white/35 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition-colors hover:bg-white/18",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "size-5" }), CONTACTS.phone]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden gap-3 rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur-xl lg:grid lg:grid-cols-1 xl:grid-cols-3",
								children: QUICK_FACTS.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-white/12 p-4 ring-1 ring-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-bold uppercase tracking-[0.16em] text-brand-green",
										children: fact.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm font-semibold leading-snug text-white",
										children: fact.value
									})]
								}, fact.label))
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-white px-4 py-5 sm:px-6 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3",
						children: QUICK_FACTS.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-slate-200 bg-slate-50 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase tracking-[0.16em] text-primary",
								children: fact.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm font-semibold leading-snug text-navy",
								children: fact.value
							})]
						}, fact.label))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-white py-18 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro$1, {
							eyebrow: "Формати",
							title: "Реабілітаційна команда працює навколо пацієнта, а не навпаки",
							text: "Формат виїзду підбирається після короткого медичного уточнення: важливо зрозуміти стан, цілі, безпеку навантаження та умови, у яких проходитиме програма."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-5 md:grid-cols-3",
							children: FORMATS.map((format) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:bg-white hover:shadow-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(format.icon, { className: "size-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 text-xl font-extrabold text-navy",
										children: format.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-slate-600",
										children: format.text
									})
								]
							}, format.title))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-soft-blue py-18 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1600px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro$1, {
							eyebrow: "Коли доречно",
							title: "Виїзний формат потрібен, коли дорога до центру ускладнює відновлення"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 overflow-hidden rounded-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: service_sports_default,
								alt: "Фізична терапія та відновлення",
								className: "h-[320px] w-full object-cover md:h-[420px]",
								width: 1200,
								height: 800,
								loading: "lazy"
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid content-start gap-3",
							children: INDICATIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-6 shrink-0 text-brand-green" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base leading-relaxed text-navy/85",
									children: item
								})]
							}, item))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-white py-18 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 lg:grid-cols-[0.8fr_1.2fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro$1, {
								eyebrow: "Процес",
								title: "Курс має зрозумілу послідовність від заявки до рекомендацій",
								text: "Мета виїзної програми — не просто провести заняття, а побудувати безпечний темп відновлення з вимірюваною динамікою."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4",
								children: STEPS$1.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[72px_1fr]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex size-14 items-center justify-center rounded-lg bg-navy text-lg font-extrabold text-white",
										children: String(index + 1).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-extrabold text-navy",
										children: step.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-slate-600",
										children: step.text
									})] })]
								}, step.title))
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "overflow-hidden bg-slate-50 py-18 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1600px] gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro$1, {
							eyebrow: "Пакети",
							title: "Можна замовити разовий виїзд або курс з регулярним супроводом",
							text: "Фінальна вартість залежить від адреси, тривалості, складу команди, необхідного обладнання та кількості занять у програмі."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 grid gap-4",
							children: PACKAGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-extrabold text-navy",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-slate-600",
									children: item.details
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xl font-extrabold text-primary",
									children: item.price
								})]
							}, item.title))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ergometer_default,
									alt: "Реабілітаційне обладнання",
									className: "h-[300px] w-full object-cover md:h-[360px]",
									width: 1200,
									height: 800,
									loading: "lazy"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-navy p-6 text-white shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-7 text-brand-green" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-extrabold",
										children: "Безпека передусім"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-3",
									children: SAFETY_POINTS.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm leading-relaxed text-white/82",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-brand-green" }), point]
									}, point))
								})]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-white py-18 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 md:grid-cols-4",
							children: [
								{
									icon: ClipboardCheck,
									label: "медичний план",
									value: "індивідуальні цілі та обмеження"
								},
								{
									icon: Clock,
									label: "графік",
									value: "частота занять за програмою"
								},
								{
									icon: Route,
									label: "логістика",
									value: "виїзд за погодженою адресою"
								},
								{
									icon: UserRoundCheck,
									label: "результат",
									value: "рекомендації для продовження вдома"
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-lg border border-slate-200 bg-slate-50 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-7 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500",
										children: item.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-semibold leading-snug text-navy",
										children: item.value
									})
								]
							}, item.label))
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-navy-deep py-18 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1400px] gap-8 px-4 text-white sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.2em] text-brand-green",
								children: "Запис"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl",
								children: "Підберемо формат виїзної реабілітації під стан пацієнта"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-2xl text-base leading-relaxed text-white/75",
								children: "Залиште заявку або зателефонуйте: адміністратор уточнить деталі, а медична команда підкаже безпечний наступний крок."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row lg:flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
								to: "/kontakty",
								className: "inline-flex items-center justify-center gap-3 rounded-lg bg-brand-green px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-green-foreground shadow-lg transition-all hover:bg-brand-green/90 hover:scale-[1.02]",
								children: ["Залишити заявку ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: CONTACTS.phoneHref,
								className: "inline-flex items-center justify-center gap-3 rounded-lg border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "size-5" }), CONTACTS.phone]
							})]
						})]
					})
				}),
				node.faq && node.faq.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-[1400px] px-4 py-18 sm:px-6 md:py-24 lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro$1, {
						eyebrow: "FAQ",
						title: "Поширені питання про виїзну реабілітацію"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, { items: node.faq })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OtherServices, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var USE_CASES = [
	{
		title: "Після операцій та травм",
		text: "Коли потрібно продовжити розробку суглоба вдома між консультаціями спеціаліста.",
		icon: Activity
	},
	{
		title: "Домашнє відновлення",
		text: "Для пацієнтів, яким зручніше виконувати частину програми у своєму темпі вдома.",
		icon: House
	},
	{
		title: "Медичні заклади",
		text: "Для клінік і реабілітаційних кабінетів, яким потрібне обладнання на конкретний період.",
		icon: ShieldCheck
	}
];
var INCLUDED = [
	{
		title: "Підбір формату оренди",
		text: "Адміністратор уточнює термін, адресу, ціль використання та допомагає узгодити деталі.",
		icon: ClipboardCheck
	},
	{
		title: "Підготовка обладнання",
		text: "Перед передачею апарат перевіряють і готують до використання за обраним сценарієм.",
		icon: Wrench
	},
	{
		title: "Доставка за домовленістю",
		text: "Можна погодити передачу у центрі або доставку за місцем перебування пацієнта.",
		icon: Truck
	},
	{
		title: "Підтримка протягом оренди",
		text: "Команда залишається на зв’язку, якщо потрібно уточнити організаційні питання.",
		icon: Phone
	}
];
var STEPS = [
	"Заявка або дзвінок адміністратору",
	"Узгодження обладнання, терміну та адреси",
	"Підготовка апарата і передача пацієнту",
	"Повернення обладнання після завершення оренди"
];
var EQUIPMENT$1 = [{
	title: "Апарат активної та пасивної механотерапії",
	description: "Обладнання для контрольованої розробки суглобів у пасивному та активному режимах після консультації спеціаліста.",
	price: "800 грн / доба",
	term: "від 7 днів",
	route: "/orenda-obladnannia/aktyvna-pasyvna-mekhanoterapiia",
	image: cpet_test_default,
	tags: [
		"Активний режим",
		"Пасивний режим",
		"Домашнє використання"
	]
}];
function SectionHeading({ eyebrow, title, text, centered = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold tracking-[0.22em] text-primary uppercase sm:text-sm",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-2xl leading-tight font-extrabold text-navy sm:text-4xl md:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: centered ? "mx-auto mt-5 h-1 w-16 rounded-full bg-primary" : "mt-5 h-1 w-16 rounded-full bg-primary" }),
			text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm leading-relaxed text-navy/80 sm:text-lg",
				children: text
			})
		]
	});
}
function FeatureCard({ item }) {
	const Icon = item.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-lg font-bold text-navy",
				children: item.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-navy/75",
				children: item.text
			})
		]
	});
}
function ContactStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 rounded-xl border border-primary/20 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-bold tracking-[0.18em] text-primary uppercase",
			children: "Консультація щодо оренди"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-navy/75",
			children: "Адміністратор уточнить наявність, терміни та зручний формат передачі обладнання."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: CONTACTS.phoneHref,
			className: "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
				" ",
				CONTACTS.phone
			]
		})]
	});
}
function RentalEquipmentPage({ node }) {
	const heroImage = node.image ?? "/assets/service-sports-DGsoGTzw.jpg";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
					className: "py-4 sm:py-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
						items: getBreadcrumbs(node),
						className: "pt-0"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-navy-deep text-background",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: heroImage,
							alt: node.title,
							width: 1200,
							height: 800,
							className: "absolute inset-0 size-full object-cover object-right opacity-35 mix-blend-luminosity lg:opacity-60"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy-deep/35" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
							className: "relative grid gap-10 py-14 sm:py-18 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center lg:py-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold tracking-[0.28em] text-background/65 uppercase sm:text-sm",
									children: node.eyebrow ?? "Оренда обладнання"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 max-w-4xl text-3xl leading-[1.08] font-extrabold text-white sm:text-5xl md:text-6xl",
									children: node.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg",
									children: "Візьміть реабілітаційне обладнання додому або в медичний простір, щоб не переривати програму відновлення між візитами до спеціаліста."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
										to: "/kontakty",
										className: "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground shadow-md transition-opacity hover:opacity-90 sm:w-auto",
										children: ["Орендувати обладнання ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#catalog",
										className: "inline-flex w-full items-center justify-center rounded-lg border border-background/40 px-7 py-4 text-sm font-bold text-background transition-colors hover:bg-background/10 sm:w-auto",
										children: "Переглянути каталог"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3",
									children: [
										{
											label: "Вартість",
											value: node.priceLabel ?? "за запитом"
										},
										{
											label: "Термін",
											value: "від 7 днів"
										},
										{
											label: "Формат",
											value: "дім / клініка"
										}
									].map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-l border-background/25 pl-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-[10px] font-semibold tracking-[0.18em] text-background/55 uppercase",
											children: fact.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-2 text-sm font-extrabold text-white sm:text-base",
											children: fact.value
										})]
									}, fact.label))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "rounded-xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md sm:p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden rounded-lg bg-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: ergometer_default,
										alt: "Реабілітаційне обладнання",
										width: 900,
										height: 700,
										className: "h-56 w-full object-cover sm:h-72"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg bg-white/12 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5 text-brand-green" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-xs text-background/65",
												children: "Мінімальний період"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-bold text-white",
												children: "1 тиждень"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg bg-white/12 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-5 text-brand-green" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-xs text-background/65",
												children: "Підготовка"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-bold text-white",
												children: "перед видачею"
											})
										]
									})]
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-soft py-12 sm:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Кому підходить",
						title: "Обладнання тоді, коли відновлення має продовжуватися",
						text: "Оренда допомагає зберегти регулярність занять, якщо пацієнт уже має рекомендації спеціаліста та потребує апарата на визначений період."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-3",
						children: USE_CASES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, { item }, item.title))
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "catalog",
					className: "scroll-mt-24 py-12 sm:py-18",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Каталог",
						title: "Доступне обладнання для оренди",
						text: "Поточний перелік обладнання можна уточнити телефоном. Якщо потрібна конкретна модель або формат використання, команда підкаже найближчий доступний варіант."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-5",
							children: EQUIPMENT$1.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "grid overflow-hidden rounded-xl border border-border bg-card shadow-sm md:grid-cols-[280px_minmax(0,1fr)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: item.title,
									width: 900,
									height: 700,
									loading: "lazy",
									className: "h-56 w-full object-cover md:h-full"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 sm:p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-secondary px-3 py-1 text-[11px] font-bold text-navy/75",
												children: tag
											}, tag))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-5 text-xl font-extrabold leading-tight text-navy sm:text-2xl",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm leading-relaxed text-navy/75",
											children: item.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 grid gap-3 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-lg bg-soft p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase",
													children: "Ціна"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-lg font-extrabold text-primary",
													children: item.price
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-lg bg-soft p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase",
													children: "Термін"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-lg font-extrabold text-navy",
													children: item.term
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex flex-col gap-3 sm:flex-row",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
												to: item.route,
												className: "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90",
												children: ["Детальніше ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
												to: "/kontakty",
												className: "inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-secondary",
												children: "Запитати наявність"
											})]
										})
									]
								})]
							}, item.title))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "h-fit rounded-xl border border-border bg-soft p-5 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-9 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl font-extrabold text-navy",
									children: "Що варто узгодити перед орендою"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-3",
									children: [
										"Термін користування обладнанням",
										"Місце передачі або доставки",
										"Наявність рекомендацій спеціаліста",
										"Потребу в додатковій консультації"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm text-navy/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-brand-green-foreground" })
										}), item]
									}, item))
								})
							]
						})]
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-soft-blue py-12 sm:py-18",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						centered: true,
						eyebrow: "Як це працює",
						title: "Простий процес без зайвих візитів",
						text: "Ми не ускладнюємо оренду: спочатку уточнюємо задачу, потім готуємо обладнання і погоджуємо зручний формат передачі."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-4",
						children: STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-white p-5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-extrabold text-primary-foreground",
								children: index + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm font-bold leading-relaxed text-navy",
								children: step
							})]
						}, step))
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "py-12 sm:py-18",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Сервіс",
							title: "Що входить в організацію оренди",
							text: "Сторінка оренди має швидко відповідати на головні питання: що доступно, скільки коштує, як отримати обладнання та до кого звернутися."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactStrip, {})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: INCLUDED.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, { item }, item.title))
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "pb-12 sm:pb-18",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-xl bg-navy-deep p-6 text-background shadow-lg sm:p-10 lg:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: service_sports_default,
								alt: "Реабілітаційне обладнання в центрі OSNOVA",
								width: 1200,
								height: 800,
								loading: "lazy",
								className: "absolute inset-0 size-full object-cover opacity-20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/65" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold tracking-[0.22em] text-background/65 uppercase",
										children: "Готові уточнити наявність?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-4xl",
										children: "Залиште заявку, і ми підберемо зручний формат оренди обладнання"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex flex-col gap-3 text-sm text-background/75 sm:flex-row sm:flex-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays$1, { className: "size-4 text-brand-green" }), " термін за домовленістю"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-brand-green" }), " передача або доставка"]
										})]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 sm:flex-row lg:flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
										to: "/kontakty",
										className: "inline-flex items-center justify-center rounded-lg bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground transition-opacity hover:opacity-90",
										children: "Залишити заявку"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: CONTACTS.phoneHref,
										className: "inline-flex items-center justify-center gap-2 rounded-lg border border-background/35 px-7 py-4 text-sm font-bold text-background transition-colors hover:bg-background/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " Подзвонити"]
									})]
								})]
							})
						]
					}) })
				}),
				node.faq && node.faq.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "pb-16 sm:pb-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "FAQ",
						title: "Поширені питання про оренду"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, { items: node.faq })] })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var SOCIAL_DIRECTIONS = [
	{
		icon: Heart,
		title: "Допомога пацієнтам",
		text: "Соціальні умови участі в діагностиці або реабілітації для людей, які потребують підтримки після травм, операцій чи складних станів."
	},
	{
		icon: ShieldCheck,
		title: "Відновлення після травм",
		text: "Окремі програми можуть бути спрямовані на ветеранів, людей після поранень, тривалого лікування або втрати фізичної активності."
	},
	{
		icon: BookOpen,
		title: "Просвіта для громади",
		text: "Лекції, відкриті зустрічі та матеріали про профілактику, безпечні навантаження, серцево-судинні ризики й рухливість."
	},
	{
		icon: GraduationCap,
		title: "Підтримка фахівців",
		text: "Освітні ініціативи для лікарів, фізичних терапевтів і команд, які працюють із відновленням та фізичною активністю."
	}
];
var PARTICIPATION_FORMATS = [
	"Індивідуальна заявка від людини або родини, яка потребує допомоги.",
	"Направлення від лікаря, медичного закладу, фонду або громадської організації.",
	"Партнерська програма з бізнесом, благодійним фондом чи освітньою інституцією.",
	"Відкрита подія для громади: консультаційний день, лекція, скринінг або тренінг."
];
var PROCESS_STEPS = [
	"Описуємо потребу, аудиторію та очікуваний результат соціального проєкту.",
	"Перевіряємо медичні показання, формат участі, ресурси команди та можливі обмеження.",
	"Погоджуємо програму, відповідальних, строки, комунікацію та критерії відбору учасників.",
	"Запускаємо ініціативу, супроводжуємо учасників і збираємо підсумки для наступних кроків."
];
var PARTNER_OPTIONS = [
	{
		title: "Фонди та громадські організації",
		text: "Спільний відбір учасників, координація документів і супровід людей, яким потрібне відновлення."
	},
	{
		title: "Медичні заклади",
		text: "Маршрутизація пацієнтів, функціональна оцінка, реабілітаційні програми та підсумкові рекомендації."
	},
	{
		title: "Бізнес і меценати",
		text: "Підтримка окремих програм, освітніх подій, обладнання або участі пацієнтів у реабілітації."
	}
];
var FAQS$1 = [
	{
		question: "Хто може звернутися щодо соціального проєкту?",
		answer: "Звернутися може людина, родина, лікар, фонд, громадська організація, бізнес або інституція, яка хоче підтримати медичну чи реабілітаційну ініціативу."
	},
	{
		question: "Чи гарантує звернення участь у програмі?",
		answer: "Участь залежить від медичних показань, формату конкретної ініціативи, доступних місць і ресурсів команди. Після звернення координатор допоможе уточнити наступні кроки."
	},
	{
		question: "Які документи можуть знадобитися?",
		answer: "Зазвичай корисні виписки, результати обстежень, рекомендації лікаря та короткий опис ситуації. Для партнерських програм перелік документів узгоджується окремо."
	},
	{
		question: "Як запропонувати партнерство?",
		answer: "Надішліть короткий опис ідеї, аудиторії, бажаного формату та контакт відповідальної особи. Команда ОСНОВИ зв'яжеться з вами, щоб обговорити можливу модель співпраці."
	}
];
function DirectionCard({ item }) {
	const Icon = item.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-xl sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-xl font-extrabold leading-snug text-navy",
				children: item.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-slate-600",
				children: item.text
			})
		]
	});
}
function SocialProjectsPage({ node }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-navy-deep",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMAGES.rehabImg,
							alt: node.title,
							width: 1400,
							height: 900,
							className: "absolute inset-0 size-full object-cover object-center opacity-45 mix-blend-luminosity lg:opacity-100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto max-w-[1600px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
									items: getBreadcrumbs(node),
									className: "pt-0 text-background/65"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 text-xs font-semibold uppercase tracking-[0.26em] text-primary-foreground/70 sm:text-sm",
									children: node.eyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-5 max-w-4xl text-3xl font-extrabold leading-[1.08] text-background sm:text-5xl md:text-6xl lg:text-7xl",
									children: node.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg",
									children: node.shortDescription
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-8 grid max-w-4xl gap-4 sm:grid-cols-3",
									children: [
										{
											label: "Фокус",
											value: "доступ до відновлення"
										},
										{
											label: "Формат",
											value: "заявки, події, партнерства"
										},
										{
											label: "Команда",
											value: "лікарі та фізичні терапевти"
										}
									].map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-[10px] font-bold uppercase tracking-[0.18em] text-background/55",
											children: fact.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-2 text-sm font-bold leading-snug text-background sm:text-base",
											children: fact.value
										})]
									}, fact.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
										to: "/kontakty",
										className: "inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-green px-7 py-4 text-sm font-bold tracking-wide text-brand-green-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-brand-green/90 sm:w-auto",
										children: ["Звернутися щодо проєкту ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: CONTACTS.phoneHref,
										className: "inline-flex w-full items-center justify-center gap-3 rounded-xl border border-background/35 bg-white/5 px-7 py-4 text-sm font-bold tracking-wide text-background backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), CONTACTS.phone]
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
					className: "py-16 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[28px] shadow-xl shadow-slate-900/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: IMAGES.sportsImg,
								alt: "Соціальні ініціативи ОСНОВА Реабілітація",
								width: 1200,
								height: 900,
								loading: "lazy",
								className: "h-full min-h-[320px] w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {
							eyebrow: "МІСІЯ",
							title: "Робимо відновлення ближчим для тих, кому воно особливо потрібне",
							text: "Соціальні проєкти ОСНОВИ поєднують медичну експертизу, партнерства та людську підтримку. Ми розглядаємо ініціативи, де реабілітація, діагностика або просвіта можуть реально змінити якість життя."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8",
							children: PARTICIPATION_FORMATS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-4 border-b border-border py-4 last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-brand-green-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm leading-relaxed text-navy/90 sm:text-base",
									children: item
								})]
							}, item))
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-slate-200/70 bg-slate-50/90 py-16 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {
						eyebrow: "НАПРЯМИ",
						title: "Які соціальні ініціативи ми розвиваємо",
						text: "Кожен проєкт має бути зрозумілим за метою, безпечним за медичними критеріями та корисним для конкретної групи людей."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4",
						children: SOCIAL_DIRECTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionCard, { item }, item.title))
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
					className: "py-16 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-2 lg:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-shell",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {
								eyebrow: "ПРОЦЕС",
								title: "Як запускається соціальний проєкт"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8 space-y-4",
								children: PROCESS_STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4 rounded-2xl bg-white p-4 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white",
										children: index + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pt-1 text-sm leading-relaxed text-navy/90 sm:text-base",
										children: step
									})]
								}, step))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[28px] shadow-xl shadow-slate-900/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: IMAGES.checkupImg,
								alt: "Планування соціальної програми ОСНОВА",
								width: 1200,
								height: 900,
								loading: "lazy",
								className: "h-full min-h-[360px] w-full object-cover"
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-soft-blue py-16 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {
							eyebrow: "ПАРТНЕРСТВО",
							title: "Запрошуємо до спільних програм",
							text: "Соціальний проєкт стає сильнішим, коли поруч є медична команда, координатори, партнери та люди, які розуміють потребу аудиторії."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
							to: "/kontakty",
							className: "mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-bold tracking-wide text-white shadow-md transition-all hover:scale-[1.02] hover:bg-primary/90 sm:w-auto",
							children: ["Запропонувати співпрацю ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 md:grid-cols-3",
							children: PARTNER_OPTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-[24px] bg-white p-6 shadow-md shadow-slate-900/5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, { className: "size-8 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-xl font-extrabold leading-snug text-navy",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-slate-600",
										children: item.text
									})
								]
							}, item.title))
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-navy-deep py-16 sm:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMAGES.cpetImg,
							alt: "Команда ОСНОВА Реабілітація",
							width: 1200,
							height: 900,
							loading: "lazy",
							className: "absolute inset-0 size-full object-cover opacity-20"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy-deep/85" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
							className: "relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-4xl text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-[0.24em] text-primary-foreground/65",
										children: "ДОЛУЧИТИСЯ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl",
										children: "Маєте ідею або знаєте людей, яким потрібна підтримка?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg",
										children: "Напишіть нам коротко про ситуацію чи майбутній проєкт. Ми розглянемо запит і підкажемо, який формат може бути реалістичним та безпечним."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
											to: "/kontakty",
											className: "inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-green px-8 py-4 text-sm font-bold tracking-wide text-brand-green-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-brand-green/90 sm:w-auto",
											children: ["Залишити звернення ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: CONTACTS.phoneHref,
											className: "inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white/10 sm:w-auto",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-brand-green" }),
												" ",
												CONTACTS.phone
											]
										})]
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
					className: "py-16 sm:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {
						eyebrow: "FAQ",
						title: "Поширені питання"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, { items: FAQS$1 })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "pb-16 sm:pb-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-md shadow-slate-900/5 md:grid-cols-[0.7fr_1fr] md:p-8 lg:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex min-h-[240px] items-center justify-center rounded-[22px] bg-white p-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-20 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-[0.2em] text-primary",
									children: "ПОВ'ЯЗАНІ РОЗДІЛИ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-2xl font-extrabold leading-tight text-navy sm:text-4xl",
									children: "Більше можливостей для співпраці з ОСНОВОЮ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm leading-relaxed text-slate-600 sm:text-base",
									children: "Якщо ваш запит стосується лікарів, інституцій або навчальних подій, перейдіть до партнерських і освітніх напрямів центру."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
										to: "/partnerstvo",
										className: "inline-flex w-full items-center justify-center gap-3 rounded-xl bg-navy px-7 py-4 text-sm font-bold tracking-wide text-white transition-all hover:scale-[1.02] hover:bg-primary sm:w-auto",
										children: ["Партнерство ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
										to: "/navchannia",
										className: "inline-flex w-full items-center justify-center gap-3 rounded-xl border border-navy/15 bg-white px-7 py-4 text-sm font-bold tracking-wide text-navy transition-all hover:border-primary hover:text-primary sm:w-auto",
										children: ["Навчання ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4" })]
									})]
								})
							]
						})]
					}) })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var CONTACT_PAGE_ANCHORS = [
	{
		href: "#quick-contacts",
		label: "Швидкий зв'язок"
	},
	{
		href: "#contact-form",
		label: "Форма"
	},
	{
		href: "#messengers",
		label: "Месенджери"
	},
	{
		href: "#socials",
		label: "Соцмережі"
	},
	{
		href: "#location",
		label: "Локація"
	},
	{
		href: "#faq",
		label: "FAQ"
	}
];
function TelegramIcon({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.37-.27-2.04-.49-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8.01-3.45 3.81-1.59 4.6-1.87 5.12-1.88.11 0 .37.03.54.17.14.12.18.28.2.4.01.06.02.22 0 .37z" })
	});
}
function WhatsAppIcon({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
	});
}
function ViberIcon({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.782 14.195c-.567-.406-1.18-.745-1.777-1.077-.38-.21-.734-.23-1.096.113-.349.333-.717.653-1.066.987-.13.124-.265.186-.44.116-.395-.158-.783-.33-1.157-.527-1.572-.828-2.846-1.975-3.864-3.376-.296-.407-.549-.844-.755-1.3-.086-.189-.045-.333.104-.475.32-.305.626-.622.935-.937.382-.39.387-.768.163-1.189-.313-.586-.642-1.168-1.018-1.722-.249-.368-.58-.518-.992-.484-.523.044-.984.249-1.385.589-.705.597-1.074 1.373-1.144 2.285-.112 1.458.337 2.808 1.017 4.053 1.341 2.456 3.197 4.417 5.566 5.86 1.439.876 2.986 1.41 4.654 1.503.96.054 1.846-.206 2.576-.84.453-.393.755-.873.882-1.464.088-.415-.052-.776-.408-1.031zM14.545 3c.319 0 .638.026.953.078 1.956.326 3.526 1.896 3.852 3.852.052.315.078.634.078.953h-1.353c0-.233-.018-.465-.056-.694-.241-1.442-1.393-2.594-2.835-2.835-.229-.038-.461-.056-.694-.056V3zM14.545 6.061c.159 0 .319.013.476.039.81.135 1.454.779 1.589 1.589.026.157.039.317.039.476h-1.353c0-.079-.006-.159-.02-.236-.056-.33-.315-.589-.645-.645-.077-.014-.157-.02-.236-.02V6.061z" })
	});
}
function InstagramIcon({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })
	});
}
function FacebookIcon({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
	});
}
function YoutubeIcon({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
	});
}
function TikTokIcon({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" })
	});
}
function MallBuildingIcon({ className = "size-5 text-slate-600" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 21h18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 21V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 21v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 10h2v2H8zM14 10h2v2h-2zM8 14h2v2H8zM14 14h2v2h-2z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 3h6" })
		]
	});
}
function CableCarIcon({ className = "size-5 text-slate-600" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.4",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 4.5l20-2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3.5v4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "6.5",
				y: "9",
				width: "11",
				height: "8.5",
				rx: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.5 11.5h7v3h-7z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 17.5v2.5M15 17.5v2.5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.5 20h9" })
		]
	});
}
function ParkingBadgeIcon({ className = "size-5 text-slate-600" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.4",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3.5",
			y: "3.5",
			width: "17",
			height: "17",
			rx: "4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M9.5 16V8h4a2.5 2.5 0 0 1 0 5H9.5",
			strokeWidth: "1.8"
		})]
	});
}
function ContactAnchorNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sticky top-0 z-30 border-b border-border/70 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
			className: "py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "-mx-4 flex items-center gap-3 overflow-x-auto px-4 scrollbar-none sm:mx-0 sm:px-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "shrink-0 text-sm font-bold text-navy/70",
					children: "Що вас цікавить:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Розділи сторінки контактів",
					className: "flex min-w-max gap-2 sm:gap-3",
					children: CONTACT_PAGE_ANCHORS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "whitespace-nowrap rounded-full border border-border bg-soft px-4 py-2 text-sm font-semibold text-navy/78 transition-colors hover:border-primary/35 hover:bg-soft-blue hover:text-primary",
						children: item.label
					}, item.href))
				})]
			})
		})
	});
}
function ContactsPage({ node }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
					className: "pt-6 pb-4 sm:pt-8 sm:pb-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
						items: getBreadcrumbs(node),
						className: "pt-0"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAnchorNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "quick-contacts",
					className: "scroll-mt-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
						className: "pt-8 pb-12 sm:pt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader$1, {
							eyebrow: "Контактна інформація",
							eyebrowClassName: "inline-flex items-center rounded-full border border-[#D5E1F4] bg-[#F5F8FE] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#215FBC] sm:text-[11px]",
							title: "Як з нами зв'язатися",
							text: "Оберіть найзручніший спосіб зв'язку — зателефонуйте, напишіть у месенджер або заповніть форму зворотного зв'язку. Ми завжди раді надати підтримку."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-6" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase",
											children: "Телефон Центру"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: CONTACTS.phoneHref,
											className: "mt-2 block text-base font-bold text-navy hover:text-primary transition-colors truncate",
											children: CONTACTS.phone
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-2 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Дзвінки безкоштовні" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-amber-500/40 hover:shadow-md",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex size-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition-transform group-hover:scale-110",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-6" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase",
											children: "Графік роботи"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 space-y-2 text-xs font-bold text-navy",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between border-b border-border/50 pb-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground font-semibold",
													children: "Тренажерний зал:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-primary font-extrabold",
													children: CONTACTS.gymHours
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground font-semibold",
													children: "Реабілітація:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-emerald-600 font-extrabold",
													children: CONTACTS.rehabHours
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-[11px] text-muted-foreground",
											children: "Прийом за попереднім записом"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-emerald-500/40 hover:shadow-md",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-transform group-hover:scale-110",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-6" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase",
											children: "Де ми знаходимось"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm font-bold text-navy",
											children: CONTACTS.address
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-muted-foreground line-clamp-2",
											children: CONTACTS.addressFull
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-sky-500/40 hover:shadow-md",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex size-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition-transform group-hover:scale-110",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase",
											children: "Швидкі Месенджери"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs font-semibold text-navy",
											children: "Telegram, WhatsApp, Viber"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: CONTACTS.messengers.telegram,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "flex items-center gap-1.5 rounded-lg bg-[#229ED9]/10 px-2 py-1 text-[11px] font-medium text-[#229ED9] hover:bg-[#229ED9] hover:text-white transition-colors",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramIcon, { className: "size-3" }), " Telegram"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: CONTACTS.messengers.whatsapp,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "flex items-center gap-1.5 rounded-lg bg-[#25D366]/10 px-2 py-1 text-[11px] font-medium text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-3" }), " WhatsApp"]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-indigo-500/40 hover:shadow-md",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex size-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 transition-transform group-hover:scale-110",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-6" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase",
											children: "Електронна пошта"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: CONTACTS.emailHref,
											className: "mt-2 block text-xs font-bold text-navy hover:text-primary transition-colors truncate",
											children: CONTACTS.email
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-xs text-muted-foreground",
											children: "Для офіційних звернень"
										})
									]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "contact-form",
					className: "scroll-mt-32 border-y border-border/60 bg-slate-50/80 py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex items-center rounded-full border border-[#D5E1F4] bg-[#F5F8FE] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#215FBC] sm:text-[11px]",
									children: "ОНЛАЙН-КАНАЛИ ЗВ'ЯЗКУ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-2xl font-extrabold sm:text-3xl lg:text-4xl text-navy tracking-tight",
									children: "Оберіть зручний спосіб зв'язку"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-1 w-16 rounded-full bg-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm sm:text-base text-muted-foreground",
									children: "Заповніть форму для запису на консультацію або зв’яжіться з адміністратором у зручному месенджері."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 border-t border-slate-200",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-8 lg:gap-10 lg:grid-cols-12 items-stretch",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-7 flex flex-col",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationForm, {
									title: "Записатися на консультацію",
									subtitle: "Заповніть форму нижче, і наш адміністратор зв'яжеться з вами для уточнення всіх деталей.",
									className: "bg-white p-6 sm:p-10 shadow-sm border border-border h-full flex flex-col justify-between rounded-3xl",
									showPrivacyConsent: true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5 space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									id: "messengers",
									className: "scroll-mt-32 rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex size-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-bold text-navy",
											children: "Прямі месенджери"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Миттєвий чат з адміністратором"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: CONTACTS.messengers.telegram,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "group flex items-center justify-between rounded-2xl border border-border bg-slate-50/50 p-4 transition-all hover:border-[#229ED9]/50 hover:bg-[#229ED9]/5 hover:shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex size-10 items-center justify-center rounded-xl bg-[#229ED9] text-white shadow-sm transition-transform group-hover:scale-105",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramIcon, { className: "size-5" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-bold text-navy group-hover:text-[#229ED9] transition-colors",
														children: "Telegram"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground",
														children: CONTACTS.messengers.telegramHandle
													})] })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-muted-foreground group-hover:text-[#229ED9] transition-colors" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: CONTACTS.messengers.whatsapp,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "group flex items-center justify-between rounded-2xl border border-border bg-slate-50/50 p-4 transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/5 hover:shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex size-10 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm transition-transform group-hover:scale-105",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-bold text-navy group-hover:text-[#25D366] transition-colors",
														children: "WhatsApp"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground",
														children: CONTACTS.phone
													})] })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-muted-foreground group-hover:text-[#25D366] transition-colors" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: CONTACTS.messengers.viber,
												className: "group flex items-center justify-between rounded-2xl border border-border bg-slate-50/50 p-4 transition-all hover:border-[#7360F2]/50 hover:bg-[#7360F2]/5 hover:shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex size-10 items-center justify-center rounded-xl bg-[#7360F2] text-white shadow-sm transition-transform group-hover:scale-105",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViberIcon, { className: "size-5" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-bold text-navy group-hover:text-[#7360F2] transition-colors",
														children: "Viber"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground",
														children: CONTACTS.phone
													})] })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-muted-foreground group-hover:text-[#7360F2] transition-colors" })]
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									id: "socials",
									className: "scroll-mt-32 rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex size-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-bold text-navy",
											children: "Стежити за основою в соціальних мережах"
										}) })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 grid grid-cols-2 gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: CONTACTS.socials.instagram,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "flex items-center gap-3 rounded-2xl border border-border bg-slate-50/50 p-3.5 transition-all hover:border-pink-500/40 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramIcon, { className: "size-4" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-bold text-navy truncate",
														children: "Instagram"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "@osnova_rehab"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: CONTACTS.socials.facebook,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "flex items-center gap-3 rounded-2xl border border-border bg-slate-50/50 p-3.5 transition-all hover:border-blue-600/40 hover:bg-blue-600/5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacebookIcon, { className: "size-4" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-bold text-navy truncate",
														children: "Facebook"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Основа Реабілітація"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: CONTACTS.socials.youtube,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "flex items-center gap-3 rounded-2xl border border-border bg-slate-50/50 p-3.5 transition-all hover:border-red-600/40 hover:bg-red-600/5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#FF0000] text-white shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YoutubeIcon, { className: "size-4" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-bold text-navy truncate",
														children: "YouTube"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "Основа Rehab"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: CONTACTS.socials.tiktok,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "flex items-center gap-3 rounded-2xl border border-border bg-slate-50/50 p-3.5 transition-all hover:border-slate-900/40 hover:bg-slate-900/5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TikTokIcon, { className: "size-4" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-bold text-navy truncate",
														children: "TikTok"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-muted-foreground",
														children: "@osnova_rehab"
													})]
												})]
											})
										]
									})]
								})]
							})]
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "location",
					className: "scroll-mt-32 py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-3xl border border-border bg-card overflow-hidden shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-8 lg:p-12 lg:col-span-5 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-700 uppercase",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3.5" }), " ГЕОЛОКАЦІЯ"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-2xl font-extrabold text-navy sm:text-3xl",
										children: "Де ми знаходимося"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground leading-relaxed",
										children: "Наш єдиний медичний та реабілітаційний центр розташований у серці курорту Буковель. Для вашої зручності у центрі функціонують два відділення з власними графіками прийому."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 space-y-5 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3.5 rounded-2xl bg-slate-50/80 p-4 border border-border/60",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "block text-navy font-bold text-xs uppercase tracking-wider text-muted-foreground",
														children: "Точна адреса:"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-navy font-bold text-sm block mt-0.5",
														children: CONTACTS.addressFull
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs text-muted-foreground block mt-0.5",
														children: "Курортний комплекс ТРК Буковель"
													})
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl bg-white p-4 border border-border/60 shadow-2xs space-y-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex size-5.5 shrink-0 items-center justify-center rounded-full border border-emerald-500 text-emerald-600 bg-emerald-50/40",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-3.5" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-xs font-black uppercase tracking-wider text-slate-700",
														children: "ОРІЄНТИРИ:"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 text-xs sm:text-sm pt-0.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2 font-bold text-navy",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 shrink-0 rounded-full bg-emerald-500" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ТРК Бука" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MallBuildingIcon, { className: "size-5 text-slate-500 shrink-0 ml-0.5" })
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2 font-bold text-navy",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 shrink-0 rounded-full bg-emerald-500" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Підйомник №7" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CableCarIcon, { className: "size-5 text-slate-500 shrink-0 ml-0.5" })
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2 font-bold text-navy",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 shrink-0 rounded-full bg-emerald-500" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Паркінг №2" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParkingBadgeIcon, { className: "size-5 text-slate-500 shrink-0 ml-0.5" })
															]
														})
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl bg-slate-50/80 p-4 border border-border/60 space-y-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Графік роботи (2 відділення):" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-2 pt-1 text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between rounded-xl bg-white p-3 border border-border/50 shadow-2xs",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-2.5 rounded-full bg-amber-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-bold text-navy block leading-tight",
																children: "Тренажерний зал"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] text-muted-foreground",
																children: "Щодня (Пн – Нд)"
															})] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-lg text-xs",
															children: CONTACTS.gymHours
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between rounded-xl bg-white p-3 border border-border/50 shadow-2xs",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-2.5 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-bold text-navy block leading-tight",
																children: "Реабілітаційне відділення"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] text-muted-foreground",
																children: "Щодня (Пн – Нд)"
															})] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg text-xs",
															children: CONTACTS.rehabHours
														})]
													})]
												})]
											})
										]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 pt-6 border-t border-border/80 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://maps.google.com/?q=Bukovel",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white hover:bg-primary/95 transition-colors shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4" }), " Google Maps"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://waze.com/ul?q=Bukovel",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-2 rounded-xl border border-border bg-slate-50 px-5 py-2.5 text-xs font-bold text-navy hover:bg-slate-100 transition-colors shadow-2xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-sky-600" }), " Waze Навігатор"]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7 bg-slate-900 relative min-h-[420px] flex items-center justify-center p-6 lg:p-10 overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										title: "Карта локації ОСНОВА Реабілітація Буковель",
										src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10565.410940562477!2d24.4077876!3d48.3540845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47373fefbc3a7d57%3A0x6b71f9cf74092b3a!2sBukovel!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua",
										className: "absolute inset-0 size-full border-0 opacity-80 filter contrast-[1.05]",
										loading: "lazy",
										referrerPolicy: "no-referrer-when-downgrade"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative z-10 max-w-md w-full rounded-2xl bg-white/95 p-4 shadow-2xl border border-white/50 backdrop-blur-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "overflow-hidden rounded-xl border border-border/60 bg-slate-100",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: service_rehab_default,
												alt: "Центр «ŎSNOVA» у Буковелі",
												className: "h-36 w-full object-cover"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-block rounded-full bg-emerald-100 px-3 py-0.5 text-[11px] font-bold text-emerald-800 uppercase tracking-wider",
													children: "📍 ДЕ МИ ЗНАХОДИМОСЬ"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "mt-2 text-lg font-extrabold text-navy",
													children: "Центр «ŎSNOVA» у Буковелі"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-muted-foreground font-medium",
													children: CONTACTS.addressFull
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-4 grid grid-cols-2 gap-2 text-left pt-3 border-t border-border/60",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "bg-slate-50 p-2.5 rounded-xl border border-border/40",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[10px] font-bold text-muted-foreground uppercase",
															children: "Тренажерний зал"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs font-extrabold text-navy mt-0.5",
															children: CONTACTS.gymHours
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "bg-slate-50 p-2.5 rounded-xl border border-border/40",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[10px] font-bold text-muted-foreground uppercase",
															children: "Реабілітація"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs font-extrabold text-navy mt-0.5",
															children: CONTACTS.rehabHours
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "https://maps.google.com/?q=Bukovel",
													target: "_blank",
													rel: "noopener noreferrer",
													className: "mt-4 flex items-center justify-center gap-2 w-full rounded-xl bg-navy py-2.5 text-xs font-bold text-white hover:bg-navy-deep transition-colors shadow-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3.5" }), " Побудувати маршрут"]
												})
											]
										})]
									})
								]
							})]
						})
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "faq",
					className: "scroll-mt-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
						className: "pb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-bold text-navy sm:text-3xl md:text-4xl",
									children: "Питання та відповіді"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 sm:mt-6 h-1 w-16 rounded-full bg-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-6 max-w-[640px] text-sm leading-relaxed text-slate-600 md:text-base",
									children: "Зібрали найпоширеніші запитання про запис, підготовку до прийому та звернення до центру. Якщо не знайшли відповідь — зв’яжіться з нами, ми допоможемо."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto max-w-[1000px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, {
								variant: "home",
								items: [
									{
										question: "Як підготуватися до першого прийому?",
										answer: "Рекомендуємо мати при собі наявні медичні виписки, результати попередніх обстежень (МРТ, КТ, ЕКГ, лабораторні аналізи), а також зручний спортивний або вільний одяг для огляду фізичного терапевта."
									},
									{
										question: "Чи потрібне попереднє направлення від лікаря?",
										answer: "Ні, попереднє направлення не є обов'язковим. Наші фахівці проведуть первинну діагностику та консультацію безпосередньо в центрі та складуть індивідуальний план."
									},
									{
										question: "Як можна записатися на конкретний день?",
										answer: "Ви можете зателефонувати за номером +380 674 702 788, написати у Telegram/WhatsApp чи залишити заявку у формі зворотного зв'язку на цій сторінці."
									},
									{
										question: "Чи є умови для осіб з обмеженою мобільністю?",
										answer: "Так, наш центр повністю обладнаний безбар'єрним доступом, пандусами та ширшими дверними отворами для комфортного пересування на кріслі-колясці або з милицями."
									}
								]
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "pb-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQConsultationCTA, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "about-methods",
					className: "relative overflow-hidden bg-background pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 top-10 size-72 rounded-full bg-primary/[0.05] blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-24 size-80 rounded-full bg-primary/[0.04] blur-[140px]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mx-auto max-w-[1600px] px-6 lg:px-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(460px,525px)] lg:gap-14 xl:gap-20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-[41rem] pt-2 lg:pt-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex rounded-full border border-[#C9D8F1] bg-[#F4F8FF] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary shadow-[0_8px_18px_rgba(33,95,188,0.08)] sm:px-5 sm:text-xs",
											children: "Корисна інформація"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "mt-7 text-[2.55rem] font-extrabold leading-[0.98] tracking-[-0.04em] text-navy sm:text-[3rem] md:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.72rem]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block",
												children: "Баланс — основа"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-2 block text-primary",
												children: "здоров'я та відновлення"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-9 flex items-center gap-1.5",
											"aria-hidden": "true",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-13 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-8 rounded-full bg-brand-green" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-11 space-y-7",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "max-w-[34rem] text-lg font-semibold leading-[1.55] text-navy md:text-[1.1rem]",
												children: "В ОСНОВА Реабілітація ми поєднуємо турботу, доказовий підхід і сучасні методики, щоб допомогти людині відновити здоров'я, рух і внутрішню рівновагу."
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "max-w-[35rem] text-[1.05rem] leading-[1.7] text-slate-500 md:text-[1.12rem]",
												children: "Індивідуальні програми, фізична терапія, гідрокінезіотерапія, фізіотерапевтичні методи та командний супровід формують цілісну систему відновлення для кращої якості життя."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-10 md:mt-12",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
												to: "/pro-osnovu",
												className: "inline-flex items-center gap-3 rounded-[1.15rem] bg-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_16px_34px_rgba(9,25,54,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_20px_38px_rgba(33,95,188,0.28)] md:px-9 md:text-[0.95rem]",
												children: ["Детальніше ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })]
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex w-full items-center justify-center pb-14 lg:justify-end lg:pb-16",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
										className: "w-full max-w-[525px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: balance_reference_card_default,
											alt: "Баланс, що підтримує відновлення",
											loading: "lazy",
											width: 525,
											height: 657,
											className: "block h-auto w-full"
										})
									})
								})]
							})
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var carpathians_location_default = "/assets/carpathians-location-B-Ld24ho.jpg";
var diagnostics_session_default = "/assets/diagnostics-session-C_IAYVuL.jpg";
var hur_equipment_default = "/assets/hur-equipment-CoFDjXe2.jpg";
var pool_default = "/assets/pool-DjxJpGDq.jpg";
var therapy_hall_default = "/assets/therapy-hall-l4sXoJ4m.jpg";
var PROFILES = [
	"Ортопедія та травматологія",
	"Кардіологія",
	"Ревматологія",
	"Вертебрологія",
	"Неврологія",
	"Спортивна медицина",
	"Психологія ментального здоров’я"
];
var METHODS = [
	{
		title: "Фізіотерапія та апаратні методи",
		text: "Магнітотерапія, ударно-хвильова терапія, високопотужний лазер, електростимуляція, пресотерапія та лімфодренаж. Ці методи зменшують біль, знімають набряк, покращують мікроциркуляцію та прискорюють процеси загоєння.",
		image: therapy_hall_default
	},
	{
		title: "Гідрокінезіотерапія та бальнеологія",
		text: "Заняття у воді та використання водних процедур дозволяють безпечно відновлювати рух при обмеженому навантаженні на суглоби й хребет. Вода зменшує вагу тіла, знижує біль і дає можливість раніше починати активну роботу.",
		image: pool_default
	},
	{
		title: "Механотерапія та функціональне тренування",
		text: "Робота на сучасному обладнанні HUR з точним дозуванням навантаження, підвісні системи Levitas і Redcord, нейром’язове тренування на системах Witty SEM Pro. Ці методи дозволяють контрольовано відновлювати силу, витривалість, баланс і координацію.",
		image: hur_equipment_default
	},
	{
		title: "Лікувальна фізкультура, пілатес і TRX",
		text: "Індивідуальні та групові заняття, спрямовані на відновлення амплітуди рухів, зміцнення м’язового корсета та повернення до повсякденної активності.",
		image: functional_training_default
	},
	{
		title: "Масаж і мануальні техніки",
		text: "Лікувальний, лімфодренажний та інші види масажу, які доповнюють основну програму, знімають напругу та покращують кровообіг.",
		image: therapy_session_default
	},
	{
		title: "Додаткові підтримуючі методи",
		text: "Капельниці (інфузійна терапія), ін’єкційні методики та інші призначення лікаря за показаннями. Вони використовуються для корекції дефіцитів, зменшення запалення та підтримки загального стану організму.",
		image: diagnostics_session_default
	}
];
var EQUIPMENT = [
	"Системи силового тренування HUR",
	"Zimmer EmFieldPro, Enraf-Nonius Endomed 484",
	"EMS DolorClast High Power Laser, Intelect RPW",
	"BTL-6000 Lymphastim",
	"Підвісні системи Levitas і Redcord",
	"Кардіологічне обладнання (ЕКГ, холтери, велоергометр, тредміл, MetaLyzer 3B)",
	"Апарати для нейром’язового тестування та функціональної діагностики"
];
var PARTNERS = [
	{
		name: "Івано-Франківський національний медичний університет",
		logo: partner_ifnmu_default,
		href: "https://www.ifnmu.edu.ua/"
	},
	{
		name: "Інститут серця МОЗ України",
		logo: partner_heart_default,
		href: "https://heart.kyiv.ua/"
	},
	{
		name: "Інститут ім. проф. М. І. Ситенка",
		logo: partner_sytenko_default,
		href: "https://sytenko.org.ua/"
	},
	{
		name: "Асоціація спортивної медицини України",
		logo: partner_asmu_default,
		href: "https://asmu.com.ua/"
	}
];
var FAQS = [
	{
		question: "З чого почати звернення до ОСНОВИ?",
		answer: "Опишіть ситуацію у заявці на сайті або зателефонуйте. Адміністратор підкаже, з чого почати та які документи знадобляться для першої консультації."
	},
	{
		question: "Чи можна надіслати медичні документи до приїзду?",
		answer: "Так, ви можете надіслати виписки та результати обстежень у наш Telegram. Це допоможе команді попередньо оцінити ситуацію."
	},
	{
		question: "Чи потрібне направлення лікаря?",
		answer: "Направлення не є обов'язковим. Якщо у вас є рекомендації від лікуючого лікаря, просто візьміть їх із собою."
	},
	{
		question: "Чи можна пройти лише діагностику?",
		answer: "Так, ви можете звернутися до нас для проходження функціональної діагностики та отримання медичного висновку."
	},
	{
		question: "Як обрати формат програми?",
		answer: "Після первинної оцінки стану та цілей, лікар і команда порекомендують найефективніший формат: амбулаторний, стаціонарний або комбінований."
	},
	{
		question: "Чи можна проходити відновлення амбулаторно, стаціонарно або онлайн?",
		answer: "Так. Центр пропонує стаціонарне відновлення (з проживанням), амбулаторні візити та, за можливості, подальший онлайн-супровід."
	}
];
function Container({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 ${className}`,
		children
	});
}
function SectionIntro({ eyebrow, title, text, centered = false, titleId }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: titleId,
				className: "mt-3 text-3xl font-extrabold leading-[1.14] text-navy sm:text-4xl lg:text-5xl",
				children: title
			}),
			text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base leading-relaxed text-slate-600 sm:text-lg",
				children: text
			})
		]
	});
}
function AboutOsnovaPage({ node }) {
	const { openModal } = useConsultationModal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanyOverviewSection, {
					titleAs: "h1",
					cta: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => openModal("Записатися на консультацію"),
						className: companyOverviewCtaClassName,
						children: ["ДЕТАЛЬНІШЕ ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 stroke-[2.4]" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-y border-slate-200/80 bg-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
						className: "py-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex flex-col items-center justify-center gap-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-navy sm:flex-row sm:gap-4 sm:text-sm sm:tracking-[0.16em]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Медична оцінка" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden size-1.5 rounded-full bg-brand-green sm:block",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Команда фахівців" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden size-1.5 rounded-full bg-brand-green sm:block",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Відновлення в одному центрі" })
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "py-16 sm:py-24 lg:py-28",
					"aria-labelledby": "state-understanding-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "state-understanding-title",
								className: "mt-4 text-3xl font-extrabold leading-[1.14] text-navy sm:text-4xl lg:text-5xl",
								children: "Головний підхід — персональна програма"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-base leading-relaxed text-slate-600 sm:text-lg",
								children: "ОСНОВА не пропонує випадковий набір процедур, а формує персональну програму, яка починається з медичної та функціональної оцінки. Команда визначає стан пацієнта, його обмеження й цілі, формує послідовний план і контролює динаміку на кожному етапі. Усе необхідне — консультації, діагностика, фізична терапія та відновлювальні методи — зібрано в одному процесі."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => openModal("Обговорити свій випадок"),
									className: "inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 sm:w-auto",
									children: "Обговорити свій випадок"
								})
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[28px] shadow-xl shadow-slate-900/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: consultation_default,
								alt: "Консультація лікаря",
								width: 1400,
								height: 800,
								loading: "lazy",
								className: "aspect-[16/10] size-full object-cover"
							})
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-slate-200/70 bg-soft-blue py-16 sm:py-24 lg:py-28",
					"aria-labelledby": "profiles-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
						title: "Основні напрямки роботи",
						text: "Центр допомагає пацієнтам після травм, операцій, інсультів, а також людям із хронічними захворюваннями опорно-рухового апарату, нервової та серцево-судинної систем.",
						titleId: "profiles-title"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
						children: PROFILES.map((profile, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold text-navy",
								children: profile
							})]
						}, i))
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "py-16 sm:py-24 lg:py-28",
					"aria-labelledby": "methods-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
						title: "Методи відновлення",
						text: "ОСНОВА застосовує широкий спектр сучасних і доведених методів, які підбираються індивідуально. Усі методи застосовуються під контролем лікаря та фізичного терапевта з постійним коригуванням програми.",
						titleId: "methods-title"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: METHODS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md shadow-slate-900/5 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[16/10] overflow-hidden bg-slate-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: item.title,
									loading: "lazy",
									className: "size-full object-cover transition duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-extrabold leading-snug text-navy",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-slate-600",
									children: item.text
								})]
							})]
						}, item.title))
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-slate-200/70 bg-slate-50/80 py-16 sm:py-24 lg:py-28",
					"aria-labelledby": "equipment-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
							title: "Сучасне обладнання",
							text: "Центр оснащений професійним обладнанням європейського та світового рівня. Це дозволяє не лише проводити ефективну терапію, а й точно оцінювати стан пацієнта до, під час і після програми.",
							titleId: "equipment-title"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-4",
							children: EQUIPMENT.map((eq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-slate-700",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1 size-2 rounded-full bg-brand-green shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold",
									children: eq
								})]
							}, i))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
								title: "Діагностика",
								text: "До початку будь-якої програми проводиться комплексна оцінка: КТ, МРТ, УЗД, рентген, лабораторія ходи, кардіопульмональний тест, холтерівське моніторування та нейром’язове тестування.",
								titleId: "diagnostic-title"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base leading-relaxed text-slate-600",
								children: "Результати дають об’єктивну картину і стають основою для персонального плану."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 overflow-hidden rounded-[24px] shadow-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: diagnostics_session_default,
									alt: "Діагностика",
									width: 800,
									height: 600,
									loading: "lazy",
									className: "aspect-[4/3] size-full object-cover"
								})
							})
						] })]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "py-16 sm:py-24 lg:py-28",
					"aria-labelledby": "prevention-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-[32px] bg-brand-green p-8 sm:p-12 lg:p-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-4xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl",
									children: "Профілактична медицина"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-base leading-relaxed text-white/90 sm:text-lg",
									children: "Окремий важливий напрямок центру — профілактика. ОСНОВА пропонує чек-апи та профілактичні програми, спрямовані на раннє виявлення ризиків і підтримку здоров’я."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-relaxed text-white/90 sm:text-lg",
									children: "Це особливо актуально для людей із підвищеним ризиком серцево-судинних захворювань, проблемами опорно-рухового апарату, а також для тих, хто хоче безпечно повертатися до фізичних навантажень або підтримувати активний спосіб життя. Профілактичні програми включають функціональну діагностику, оцінку витривалості, рекомендації щодо навантажень і спостереження динаміки."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
									to: "/poslugy/check-up",
									className: "mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-green shadow-md transition hover:-translate-y-0.5 hover:bg-white/90 sm:w-auto",
									children: "Дізнатися більше про чек-апи"
								})
							]
						})
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-slate-200/70 bg-soft-blue py-16 sm:py-24 lg:py-28",
					"aria-labelledby": "education-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
							eyebrow: "ОСВІТА ТА НАУКА",
							title: "Наукова та освітня діяльність",
							text: "ОСНОВА є клінічною базою провідних установ України. Центр бере участь у клінічних дослідженнях (зокрема EUROASPIRE VI) і проводить науково-практичні конференції. Це забезпечує постійне впровадження актуальних протоколів і високий професійний рівень команди.",
							titleId: "education-title"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
								to: "/navchannia",
								className: "inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90",
								children: "Навчання для фахівців"
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: PARTNERS.map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: partner.href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": `Перейти на сайт партнера: ${partner.name}`,
								className: "group flex min-h-52 flex-col items-center justify-between rounded-[22px] border border-slate-200/80 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-28 w-full items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: partner.logo,
										alt: partner.name,
										loading: "lazy",
										className: "max-h-20 max-w-full object-contain grayscale transition group-hover:grayscale-0"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-sm font-bold leading-snug text-navy",
									children: partner.name
								})]
							}, partner.name))
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "py-16 sm:py-24 lg:py-28",
					"aria-labelledby": "carpathians-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-h-[520px] overflow-hidden rounded-[30px] bg-navy-deep shadow-2xl shadow-slate-900/15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: carpathians_location_default,
								alt: "Локація центру ОСНОВА Реабілітація в Буковелі",
								loading: "lazy",
								className: "absolute inset-0 size-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/68 to-navy-deep/5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex min-h-[520px] max-w-3xl flex-col justify-center p-6 sm:p-10 lg:p-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										id: "carpathians-title",
										className: "mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl",
										children: "Переваги розташування"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-base leading-relaxed text-white/80 sm:text-lg",
										children: "Карпати та Буковель створюють унікальне середовище для відновлення: свіже повітря, спокійний ритм і можливість поєднати лікування з відпочинком."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-base leading-relaxed text-white/80 sm:text-lg",
										children: "Усі кабінети діагностики, зали терапії, басейн і зони проживання розташовані в одному комплексі — пацієнту не потрібно переміщатися між різними установами."
									})
								]
							})
						]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-slate-200/70 bg-slate-50/80 py-16 sm:py-24 lg:py-28",
					"aria-labelledby": "faq-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
						className: "!max-w-[1120px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
							title: "Поширені запитання",
							titleId: "faq-title"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, { items: FAQS })
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-navy-deep py-16 sm:py-20 lg:py-24",
					"aria-labelledby": "final-cta-title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "final-cta-title",
								className: "text-3xl font-extrabold leading-tight text-white sm:text-5xl",
								children: "ОСНОВА Реабілітація"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg",
								children: "ОСНОВА Реабілітація поєднує сучасні методи, точну діагностику, професійну команду та природне середовище Карпат, щоб допомогти пацієнту не просто пройти курс процедур, а повернути рух, витривалість і якість життя."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex w-full flex-col gap-3 lg:min-w-[340px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => openModal("Записатися на консультацію"),
									className: "inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-brand-green px-6 py-3 text-center text-sm font-bold text-brand-green-foreground shadow-md shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-brand-green/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/25",
									children: "Записатися на консультацію"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: CONTACTS.messengers.telegram,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10",
									children: ["Надіслати документи ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col gap-4 border-t border-white/15 pt-7 text-sm text-white/75 md:flex-row md:items-center md:flex-wrap md:gap-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-white/90",
									children: "Адреса: Івано-Франківська область, Надвірнянський р-н, с. Поляниця, участок Вишня 354/А, ТРК Буковель"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+380675101575",
									className: "inline-flex items-center gap-2 font-bold text-white transition hover:text-brand-green",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " +38 (067) 510 15 75"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+380674702788",
									className: "inline-flex items-center gap-2 font-bold text-white transition hover:text-brand-green",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " +380 674 702 788"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:osnova.rehabilitation@gmail.com",
									className: "font-bold text-white transition hover:text-brand-green",
									children: "osnova.rehabilitation@gmail.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:info@osnova-rehab.com.ua",
									className: "font-bold text-white transition hover:text-brand-green",
									children: "info@osnova-rehab.com.ua"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 text-sm text-white/75 font-semibold flex flex-wrap gap-4",
							children: [
								"Соцмережі:",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://instagram.com/osnova.rehab.bukovel",
									target: "_blank",
									rel: "noreferrer",
									className: "text-white hover:text-brand-green transition",
									children: "Instagram @osnova.rehab.bukovel"
								}),
								",",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://facebook.com/OsnovaRehab",
									target: "_blank",
									rel: "noreferrer",
									className: "text-white hover:text-brand-green transition",
									children: "Facebook @Osnova Rehab"
								}),
								",",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white",
									children: "TikTok і YouTube @osnova_rehabilitation"
								})
							]
						})
					] })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function NodePage() {
	const { route } = Route$1.useLoaderData();
	const node = getNodeByRoute(route);
	if (!node) return null;
	if (node.customPage === "cardio-rehab" || node.customPage === "direction-template" && node.parentId === "rehab" || node.route === "/reabilitatsiia/kardiolohichna") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardioRehabPage, { node });
	if (node.customPage === "post-infarction-rehab") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostInfarctionRehabPage, { node });
	if (node.customPage === "all-services" || node.id === "services") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllServicesPricePage, { node });
	if (node.id === "partnership-doctors") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorPartnershipPage, { node });
	if (node.id === "social") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialProjectsPage, { node });
	if (node.id === "about") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutOsnovaPage, { node });
	if (node.customPage === "institute-partnership") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstitutePartnershipPage, { node });
	if (node.customPage === "mobile-rehab") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileRehabPage, { node });
	if (node.customPage === "rental-equipment") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RentalEquipmentPage, { node });
	if (node.customPage === "legal" && node.legalBody) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, {
				className: "py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: getBreadcrumbs(node) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, {
				className: "pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-extrabold text-navy",
					children: node.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 section-shell max-w-4xl",
					children: node.legalBody.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-6 text-navy/90 last:mb-0",
						children: p
					}, p))
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
	if (node.customPage === "contacts") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactsPage, { node });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceDetailTemplate, { node });
}
//#endregion
export { NodePage as component };
