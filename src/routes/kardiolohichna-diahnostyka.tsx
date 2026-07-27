import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailTemplate } from "@/components/service-detail-template";
import { getNodeByRoute } from "@/lib/tree";

export const Route = createFileRoute("/kardiolohichna-diahnostyka")({
  head: () => ({
    meta: [
      { title: "Кардіологічна діагностика — OSNOVA Реабілітація, Буковель" },
      {
        name: "description",
        content:
          "Комплексна оцінка роботи серця: ЕКГ, Холтер, ДМАТ, кардіопульмональний тест, спірографія. Медичний висновок і персональні рекомендації.",
      },
      { property: "og:title", content: "Кардіологічна діагностика — OSNOVA Реабілітація" },
      {
        property: "og:description",
        content:
          "Оцінка серця, ритму, тиску та переносимості навантажень. Ціни, методи та запис на діагностику в Буковелі.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const node = getNodeByRoute("/diagnostyka/kardiodiahnostyka");
  if (!node) return null;
  return <ServiceDetailTemplate node={node} />;
}
