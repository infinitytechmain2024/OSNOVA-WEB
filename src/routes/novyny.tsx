import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/app-link";
import { Breadcrumbs, PageContainer } from "@/components/blocks";
import { NewsCard } from "@/components/news-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { NEWS_ARTICLES } from "@/data/news";
import { ArrowRight, Newspaper, Phone } from "lucide-react";

export const Route = createFileRoute("/novyny")({
  head: () => ({
    meta: [
      { title: "Всі новини — ОСНОВА Реабілітація" },
      {
        name: "description",
        content:
          "Новини, статті та корисні матеріали ОСНОВА Реабілітація про кардіологію, діагностику, реабілітацію, чек-апи та спортивну медицину.",
      },
      { property: "og:title", content: "Всі новини — ОСНОВА Реабілітація" },
      {
        property: "og:description",
        content:
          "Читайте матеріали центру ОСНОВА про профілактику, діагностику, відновлення та безпечну фізичну активність.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/novyny" }],
  }),
  component: NewsPage,
});

const ALL_CATEGORY = "Всі новини";
const categories = [
  ALL_CATEGORY,
  ...Array.from(new Set(NEWS_ARTICLES.map((article) => article.category))),
];

function NewsPage() {
  const [activeCategory, setActiveCategory] = React.useState(ALL_CATEGORY);
  const visibleArticles =
    activeCategory === ALL_CATEGORY
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((article) => article.category === activeCategory);
  const [featuredArticle, ...restArticles] = visibleArticles;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-navy-deep">
          <img
            src={NEWS_ARTICLES[0].image}
            alt="Новини медичного та реабілітаційного центру ОСНОВА"
            width={1200}
            height={800}
            className="absolute inset-0 size-full object-cover object-center opacity-45 mix-blend-luminosity lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/30" />
          <div className="relative mx-auto max-w-[1600px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70 sm:text-sm sm:tracking-[0.28em]">
              НОВИНИ ТА СТАТТІ
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-[1.1] text-background sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl">
              Всі новини
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-background/85 sm:mt-8 sm:text-lg">
              Актуальні матеріали про діагностику, реабілітацію, профілактику та безпечне повернення
              до активного життя.
            </p>
          </div>
        </section>

        <PageContainer className="py-5">
          <Breadcrumbs
            className="pt-0"
            items={[
              { title: "Головна", route: "/" },
              { title: "Всі новини", route: "/novyny" },
            ]}
          />
        </PageContainer>

        <section className="border-y border-slate-200/70 bg-slate-50/80 py-6">
          <PageContainer>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3 text-navy">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Newspaper className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Архів матеріалів
                  </p>
                  <p className="mt-1 text-sm font-semibold text-navy">
                    {visibleArticles.length} матеріалів у добірці
                  </p>
                </div>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {categories.map((category) => {
                  const isActive = category === activeCategory;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`shrink-0 rounded-xl border px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] transition-all ${
                        isActive
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-slate-200 bg-white text-navy hover:border-primary/40 hover:text-primary"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="bg-background py-16 md:py-24">
          <PageContainer>
            {featuredArticle && <NewsCard article={featuredArticle} variant="featured" />}

            {restArticles.length > 0 && (
              <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {restArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </PageContainer>
        </section>

        <section className="bg-soft-blue py-20 md:py-24">
          <PageContainer className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              КОНСУЛЬТАЦІЯ
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-navy md:text-5xl">
              Потрібна порада щодо діагностики або реабілітації?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy/75 md:text-lg">
              Адміністратор допоможе обрати потрібний напрям, зорієнтує за датами та підкаже
              наступні кроки.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AppLink
                to="/kontakty"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-primary/90 sm:w-auto"
              >
                ЗВʼЯЗАТИСЯ З НАМИ <ArrowRight className="size-4" />
              </AppLink>
              <a
                href="tel:+380674702788"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-navy px-8 py-4 text-sm font-bold text-navy transition-all hover:bg-navy hover:text-white sm:w-auto"
              >
                <Phone className="size-4" /> +380 674 702 788
              </a>
            </div>
          </PageContainer>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
