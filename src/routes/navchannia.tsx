import { createFileRoute } from "@tanstack/react-router";
import { EducationCoursesPage } from "@/components/education-courses-page";

export const Route = createFileRoute("/navchannia")({
  head: () => ({
    meta: [
      { title: "Навчання — курси ОСНОВА Реабілітація" },
      {
        name: "description",
        content:
          "Усі курси ОСНОВА Реабілітація для лікарів, фізичних терапевтів, тренерів і медичних команд: практичні модулі, клінічні розбори та освітні події.",
      },
      { property: "og:title", content: "Навчання — курси ОСНОВА Реабілітація" },
      {
        property: "og:description",
        content:
          "Каталог освітніх курсів ОСНОВА: кардіореабілітація, ортопедія, діагностика, спортивна медицина та командні практичні модулі.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/navchannia" }],
  }),
  component: NavchanniaPage,
});

function NavchanniaPage() {
  return <EducationCoursesPage />;
}
