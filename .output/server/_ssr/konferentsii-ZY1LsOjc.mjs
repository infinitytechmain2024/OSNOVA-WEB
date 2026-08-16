import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/konferentsii-ZY1LsOjc.js
var $$splitComponentImporter = () => import("./konferentsii-BnX_CN4m.mjs");
var Route = createFileRoute("/konferentsii")({
	validateSearch: (search) => {
		const page = Number(search.page);
		return { page: Number.isFinite(page) && page > 1 ? Math.floor(page) : void 0 };
	},
	head: () => ({
		meta: [
			{ title: "Конференції — ОСНОВА Реабілітація" },
			{
				name: "description",
				content: "Календар та архів конференцій ОСНОВА Реабілітація: фахові події, дати проведення та статуси."
			},
			{
				property: "og:title",
				content: "Конференції — ОСНОВА Реабілітація"
			},
			{
				property: "og:description",
				content: "Переглядайте заплановані, активні та завершені конференції ОСНОВА Реабілітація."
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
			href: "/konferentsii"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
