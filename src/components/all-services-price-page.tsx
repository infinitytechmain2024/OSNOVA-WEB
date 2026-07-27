import * as React from "react";
import { AppLink } from "@/components/app-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumbs, PageContainer } from "@/components/blocks";
import { getBreadcrumbs } from "@/lib/tree";
import { siteTree, CONTACTS } from "@/data/site-tree";
import type { SiteNode } from "@/data/types";
import {
  Search,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  HeartPulse,
  Activity,
  Stethoscope,
  Sparkles,
  Dumbbell,
  Truck,
  Package,
  Phone,
  Layers,
  ExternalLink,
} from "lucide-react";

// Get root services node and its categories
const servicesNode = siteTree.find((n) => n.id === "services") || siteTree[0];
const rootCategories = servicesNode.children ?? [];

function getCategoryIcon(id: string) {
  switch (id) {
    case "rehab":
      return Activity;
    case "diag":
      return HeartPulse;
    case "checkup":
      return Stethoscope;
    case "recovery":
      return Dumbbell;
    case "mobile-rehab":
      return Truck;
    case "rental":
      return Package;
    default:
      return Sparkles;
  }
}

/** Flatten all service items under a category or subcategory to compute count */
function countServices(node: SiteNode): number {
  if (!node.children || node.children.length === 0) return 1;
  return node.children.reduce((acc, child) => acc + countServices(child), 0);
}

export function AllServicesPricePage({ node }: { node: SiteNode }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = React.useState<string>("all");

  // Track open state of Level 1 Categories
  const [openCategories, setOpenCategories] = React.useState<Record<string, boolean>>(() => {
    return { rehab: true, diag: true, checkup: true, recovery: true, "mobile-rehab": true, rental: true };
  });

  // Track open state of Level 2 Subcategories
  const [openSubcategories, setOpenSubcategories] = React.useState<Record<string, boolean>>(() => {
    return {
      "rehab-cardio": true,
      "rehab-ortho": true,
      "rehab-vert": true,
      "diag-cardio": true,
      "diag-msk": true,
      checkup: true,
      recovery: true,
    };
  });

  const isSearchActive = searchQuery.trim().length > 0;

  const toggleCategory = (catId: string) => {
    setOpenCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const toggleSubcategory = (subId: string) => {
    setOpenSubcategories((prev) => ({ ...prev, [subId]: !prev[subId] }));
  };

  const expandAll = () => {
    const allCats: Record<string, boolean> = {};
    const allSubs: Record<string, boolean> = {};
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

  // Filter categories based on search or category filter selection
  const filteredCategories = React.useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return rootCategories
      .filter((cat) => {
        if (selectedCategoryFilter !== "all" && cat.id !== selectedCategoryFilter) {
          return false;
        }
        return true;
      })
      .map((cat) => {
        const catMatches = cat.title.toLowerCase().includes(q) || (cat.shortDescription ?? "").toLowerCase().includes(q);

        const subcategories = (cat.children ?? []).map((sub) => {
          const subMatches = sub.title.toLowerCase().includes(q) || (sub.shortDescription ?? "").toLowerCase().includes(q);
          const items = sub.children && sub.children.length > 0 ? sub.children : [sub];

          const filteredItems = items.filter((item) => {
            if (!q) return true;
            const text = `${item.title} ${item.shortDescription ?? ""} ${item.priceLabel ?? ""}`.toLowerCase();
            return catMatches || subMatches || text.includes(q);
          });

          return {
            ...sub,
            items: filteredItems,
            hasMatch: filteredItems.length > 0,
          };
        }).filter((sub) => sub.hasMatch);

        return {
          ...cat,
          subcategories,
          hasMatch: subcategories.length > 0,
        };
      })
      .filter((cat) => cat.hasMatch);
  }, [searchQuery, selectedCategoryFilter]);

  // Total matching items count
  const totalMatchingItems = React.useMemo(() => {
    let count = 0;
    filteredCategories.forEach((cat) => {
      cat.subcategories.forEach((sub) => {
        count += sub.items.length;
      });
    });
    return count;
  }, [filteredCategories]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pb-24">
        {/* Hero Header */}
        <section className="relative overflow-hidden bg-navy-deep text-background py-14 lg:py-18">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-navy-deep to-navy-deep opacity-80" />
          <PageContainer className="relative z-10">
            <Breadcrumbs items={getBreadcrumbs(node)} className="text-white/70" />
            <div className="mt-6 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3.5 py-1 text-xs font-semibold tracking-wider text-primary-foreground border border-primary/30 uppercase">
                <Layers className="size-3.5" /> Прейскурант медичних послуг
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Послуги та ціни
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
                Актуальний прайс-лист медичного центру ОСНОВА. Оберіть потрібний напрямок, відкрийте категорію та натисніть на назву послуги для перегляду деталей та запису.
              </p>
            </div>
          </PageContainer>
        </section>

        {/* Filter and Controls Bar */}
        <section className="sticky top-0 z-30 border-b border-border/80 bg-background/95 backdrop-blur-md shadow-xs">
          <PageContainer className="py-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Live Search Input */}
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Пошук за назвою послуги (напр. ЕКГ, інфаркт, масаж...)"
                  className="w-full rounded-xl border border-input bg-card pl-10 pr-10 py-2.5 text-sm text-foreground shadow-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground hover:text-foreground"
                  >
                    Очистити
                  </button>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 self-start md:self-auto">
                <button
                  type="button"
                  onClick={expandAll}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-semibold text-navy hover:bg-secondary transition-colors"
                >
                  <ChevronDown className="size-3.5" /> Розгорнути все
                </button>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-semibold text-navy hover:bg-secondary transition-colors"
                >
                  <ChevronUp className="size-3.5" /> Згорнути все
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedCategoryFilter("all")}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategoryFilter === "all"
                    ? "bg-navy text-white shadow-xs"
                    : "bg-secondary/70 text-navy hover:bg-secondary"
                }`}
              >
                Всі напрями ({rootCategories.reduce((acc, cat) => acc + countServices(cat), 0)})
              </button>
              {rootCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategoryFilter(cat.id)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    selectedCategoryFilter === cat.id
                      ? "bg-navy text-white shadow-xs"
                      : "bg-secondary/70 text-navy hover:bg-secondary"
                  }`}
                >
                  {cat.title} ({countServices(cat)})
                </button>
              ))}
            </div>

            {/* Match Counter when searching */}
            {isSearchActive && (
              <div className="mt-3 text-xs font-medium text-navy/70">
                Знайдено послуг за запитом «<span className="font-bold text-navy">{searchQuery}</span>»: {totalMatchingItems}
              </div>
            )}
          </PageContainer>
        </section>

        {/* Main Price Directory Accordion Hierarchy */}
        <PageContainer className="mt-8 space-y-6">
          {filteredCategories.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border p-12 text-center">
              <p className="text-lg font-bold text-navy">За вашим запитом послуг не знайдено</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Спробуйте змінити формулювання або зателефонуйте адміністратору за номером{" "}
                <a href={CONTACTS.phoneHref} className="font-bold text-primary">
                  {CONTACTS.phone}
                </a>
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategoryFilter("all");
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
              >
                Скинути фільтри
              </button>
            </div>
          ) : (
            filteredCategories.map((cat) => {
              const Icon = getCategoryIcon(cat.id);
              const isOpen = isSearchActive || openCategories[cat.id];

              return (
                <div
                  key={cat.id}
                  className="rounded-2xl border border-border/80 bg-card shadow-xs transition-all duration-200 overflow-hidden"
                >
                  {/* Category Level 1 Header */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 bg-card hover:bg-secondary/30 transition-colors text-left border-b border-border/40"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h2 className="text-xl sm:text-2xl font-bold text-navy">{cat.title}</h2>
                          <span className="rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold text-navy/80">
                            {cat.subcategories.reduce((acc, sub) => acc + sub.items.length, 0)} послуг
                          </span>
                        </div>
                        {cat.shortDescription && (
                          <p className="mt-1 text-xs sm:text-sm text-muted-foreground line-clamp-1">
                            {cat.shortDescription}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-2">
                      <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider text-primary">
                        {isOpen ? "Сховати" : "Розгорнути"}
                      </span>
                      <div className="flex size-9 items-center justify-center rounded-full bg-secondary text-navy">
                        {isOpen ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                      </div>
                    </div>
                  </button>

                  {/* Level 1 Content */}
                  {isOpen && (
                    <div className="p-4 sm:p-6 bg-background/40 space-y-5">
                      {cat.subcategories.map((sub) => {
                        const isSubOpen = isSearchActive || openSubcategories[sub.id] !== false;

                        return (
                          <div
                            key={sub.id}
                            className="rounded-xl border border-border bg-card overflow-hidden shadow-2xs"
                          >
                            {/* Level 2 Subcategory Header */}
                            <button
                              type="button"
                              onClick={() => toggleSubcategory(sub.id)}
                              className="w-full flex items-center justify-between p-4 sm:px-6 bg-secondary/30 hover:bg-secondary/60 transition-colors text-left border-b border-border/60"
                            >
                              <div className="flex items-center gap-3">
                                <div className="size-2.5 rounded-full bg-primary shrink-0" />
                                <div>
                                  <h3 className="text-base sm:text-lg font-bold text-navy">{sub.title}</h3>
                                  {sub.shortDescription && (
                                    <p className="text-xs text-muted-foreground line-clamp-1 font-normal">
                                      {sub.shortDescription}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-xs font-semibold text-navy/70 shrink-0 ml-2">
                                <span className="hidden sm:inline text-muted-foreground font-normal">
                                  ({sub.items.length} {sub.items.length === 1 ? "послуга" : "послуг"})
                                </span>
                                {isSubOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                              </div>
                            </button>

                            {/* Level 3 Table of Services */}
                            {isSubOpen && (
                              <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm border-collapse">
                                  <thead>
                                    <tr className="border-b border-border bg-secondary/15 text-xs uppercase tracking-wider font-semibold text-navy/70">
                                      <th className="py-3 px-4 sm:px-6">Назва послуги</th>
                                      <th className="py-3 px-4 text-center sm:w-44">Тривалість / Формат</th>
                                      <th className="py-3 px-4 text-right sm:w-44">Вартість</th>
                                      <th className="py-3 px-4 sm:px-6 text-right w-28">Дія</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-border/50">
                                    {sub.items.map((item) => (
                                      <tr
                                        key={item.id}
                                        className="hover:bg-primary/5 transition-colors group"
                                      >
                                        {/* Clickable Title (Embedded Link in Title) */}
                                        <td className="py-4 px-4 sm:px-6 font-medium">
                                          <AppLink
                                            to={item.route}
                                            className="font-bold text-navy group-hover:text-primary transition-colors inline-flex items-center gap-1.5 hover:underline"
                                          >
                                            <span>{item.title}</span>
                                            <ExternalLink className="size-3.5 text-primary opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                                          </AppLink>
                                          {item.shortDescription && (
                                            <p className="mt-0.5 text-xs text-muted-foreground font-normal line-clamp-1">
                                              {item.shortDescription}
                                            </p>
                                          )}
                                        </td>

                                        {/* Duration */}
                                        <td className="py-4 px-4 text-center text-xs text-navy/80 whitespace-nowrap">
                                          {item.duration ? (
                                            <span className="inline-block rounded-md bg-secondary/80 px-2.5 py-1 font-medium">
                                              {item.duration}
                                            </span>
                                          ) : (
                                            <span className="text-muted-foreground">—</span>
                                          )}
                                        </td>

                                        {/* Price */}
                                        <td className="py-4 px-4 text-right font-extrabold text-navy whitespace-nowrap">
                                          <span className="text-base text-primary">
                                            {item.priceLabel || "За запитом"}
                                          </span>
                                        </td>

                                        {/* Action Link Button */}
                                        <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                                          <AppLink
                                            to={item.route}
                                            className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-primary bg-secondary/80 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-all"
                                          >
                                            Перейти <ArrowRight className="size-3.5" />
                                          </AppLink>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </PageContainer>

        {/* Bottom Booking Banner */}
        <PageContainer className="mt-16">
          <div className="rounded-3xl bg-navy-deep p-8 md:p-12 text-background relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 size-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative z-10 grid gap-8 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2 space-y-3">
                <h2 className="text-2xl font-extrabold md:text-3xl text-white">
                  Потрібна консультація щодо вибору послуги або запису?
                </h2>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  Наші адміністратори підкажуть актуальні дати, допоможуть обрати потрібну програму або чек-ап та дадуть відповіді на всі питання.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <a
                  href={CONTACTS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-4 text-sm font-bold text-brand-green-foreground transition-all hover:bg-brand-green/90 shadow-lg"
                >
                  <Phone className="size-4" /> {CONTACTS.phone}
                </a>
                <AppLink
                  to="/kontakty"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white hover:bg-white/20 transition-colors"
                >
                  Записатися онлайн
                </AppLink>
              </div>
            </div>
          </div>
        </PageContainer>
      </main>

      <SiteFooter />
    </div>
  );
}
