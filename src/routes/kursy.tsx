import { createFileRoute } from "@tanstack/react-router";
import { EducationCoursesPage } from "@/components/education-courses-page";

export const Route = createFileRoute("/kursy")({
  head: () => ({
    meta: [
      { title: "Курси — ОСНОВА Реабілітація" },
      {
        name: "description",
        content:
          "Каталог курсів ОСНОВА Реабілітація: навчання для лікарів, фізичних терапевтів, тренерів і медичних команд.",
      },
      { property: "og:title", content: "Курси — ОСНОВА Реабілітація" },
      {
        property: "og:description",
        content:
          "Практичні курси, семінари, клінічні розбори та освітні модулі ОСНОВА Реабілітація.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kursy" }],
  }),
  component: KursyPage,
});

function KursyPage() {
  return <EducationCoursesPage title="Курси" />;
}
