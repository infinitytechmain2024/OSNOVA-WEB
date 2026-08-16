import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { y as getNodeByRoute } from "./_ssr/blocks-qYXwqIeb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_-B7YsbbYK.js
var $$splitComponentImporter = () => import("./_-D5bcBJ7E.mjs");
var Route = createFileRoute("/$")({
	loader: ({ params }) => {
		const route = `/${(params._splat ?? "").replace(/\/+$/, "")}`;
		if (!getNodeByRoute(route)) throw notFound();
		return { route };
	},
	head: ({ loaderData }) => {
		const node = loaderData ? getNodeByRoute(loaderData.route) : void 0;
		if (!node) return { meta: [{ title: "Сторінку не знайдено — ОСНОВА" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = node.seoTitle ?? `${node.title} — ОСНОВА Реабілітація`;
		const description = node.seoDescription ?? node.shortDescription ?? "ОСНОВА Реабілітація — діагностика та відновлення.";
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:url",
					content: node.route
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: node.route
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
