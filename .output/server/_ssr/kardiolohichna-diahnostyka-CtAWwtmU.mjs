import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as getNodeByRoute } from "./blocks-YQtB1Ncn.mjs";
import { n as ServiceDetailTemplate } from "./service-detail-template-DynFR6wY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kardiolohichna-diahnostyka-CtAWwtmU.js
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	const node = getNodeByRoute("/diagnostyka/kardiodiahnostyka");
	if (!node) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceDetailTemplate, { node });
}
//#endregion
export { Index as component };
