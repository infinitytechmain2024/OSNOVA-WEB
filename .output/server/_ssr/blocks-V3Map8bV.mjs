import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as House, ft as ChevronDown } from "../_libs/lucide-react.mjs";
import { l as cn, t as AppLink } from "./site-footer-CIMyUY7e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blocks-V3Map8bV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PageContainer({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10", className),
		children
	});
}
function SectionHeader({ eyebrow, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.28em] text-primary",
			children: eyebrow
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 sm:mt-4 text-2xl leading-tight font-bold text-navy sm:text-3xl md:text-4xl",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 sm:mt-6 h-1 w-16 rounded-full bg-primary" }),
		text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg text-navy/85",
			children: text
		})
	] });
}
function Breadcrumbs({ items, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Навігаційний ланцюжок",
		className: cn("pt-4 sm:pt-8 overflow-x-auto scrollbar-none", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex items-center gap-2 text-xs sm:text-sm text-navy/60 whitespace-nowrap",
			children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2",
				children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					children: "/"
				}), i === items.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-navy",
					children: item.title
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
					to: item.route,
					className: "hover:text-primary transition-colors",
					children: i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-3.5" }),
							" ",
							item.title
						]
					}) : item.title
				})]
			}, item.route + i))
		})
	});
}
function FAQAccordion({ items }) {
	const [open, setOpen] = import_react.useState([]);
	if (!items.length) return null;
	const toggle = (q) => setOpen((prev) => prev.includes(q) ? prev.filter((x) => x !== q) : [...prev, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify({
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: items.map((i) => ({
				"@type": "Question",
				name: i.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: i.answer
				}
			}))
		}) }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-10 space-y-3",
		children: items.map((item, i) => {
			const isOpen = open.includes(item.question);
			const panelId = `faq-panel-${i}`;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-expanded": isOpen,
					"aria-controls": panelId,
					onClick: () => toggle(item.question),
					className: "flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-navy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: item.question
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-5 shrink-0 text-primary transition-transform duration-200", isOpen && "rotate-180") })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: panelId,
					hidden: !isOpen,
					className: "px-6 pb-5 text-navy/85 transition-all duration-200",
					children: item.answer
				})]
			}, item.question);
		})
	})] });
}
//#endregion
export { SectionHeader as i, FAQAccordion as n, PageContainer as r, Breadcrumbs as t };
