import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { m as getNodeByRoute } from "./site-footer-DpAKTwkw.mjs";
import { n as ServiceDetailTemplate } from "./service-detail-template-Bn1N87G4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kardiolohichna-diahnostyka-Cw81cYJS.js
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	const node = getNodeByRoute("/diagnostyka/kardiodiahnostyka");
	if (!node) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceDetailTemplate, { node });
}
//#endregion
export { Index as component };
