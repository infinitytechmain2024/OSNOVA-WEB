import * as React from "react";
import { AppLink } from "@/components/app-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OtherServices } from "@/components/other-services";
import { FAQAccordion } from "@/components/blocks";
import { PricesAndServicesBlock } from "@/components/prices-and-services-block";
import { getServicePageData } from "@/data/service-content-generator";
import { useConsultationModal } from "@/components/consultation-form";
import { OnlineApplication } from "@/components/online-application";
import type { SiteNode } from "@/data/types";
import { ArrowRight, Check, ChevronDown, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-3xl leading-tight font-bold text-navy md:text-4xl">{children}</h2>
      <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
    </>
  );
}

export function ServiceDetailTemplate({ node }: { node: SiteNode }) {
  const data = getServicePageData(node);
  const custom = node.pageContent || {};
  const [showAllMethods, setShowAllMethods] = React.useState(false);
  const visibleMethods = showAllMethods ? data.methodCards : data.methodCards.slice(0, 3);
  const { openModal } = useConsultationModal();
  const [introExpanded, setIntroExpanded] = React.useState(false);
  const [recommendedExpanded, setRecommendedExpanded] = React.useState(false);
  const [frequencyExpanded, setFrequencyExpanded] = React.useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("cta-section") || document.getElementById("contacts-footer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/kontakty";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* 1 — Hero */}
        <section className="relative overflow-hidden bg-navy-deep">
          <img
            src={data.heroImage}
            alt={data.heroTitle}
            width={1200}
            height={800}
            className="absolute inset-0 size-full object-cover object-right opacity-40 mix-blend-luminosity lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20" />
          <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 py-14 sm:py-20 lg:px-10 lg:py-32">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100/95 px-3.5 py-1 text-xs md:text-sm font-semibold tracking-wider text-navy ring-1 ring-white/50 shadow-sm">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              {data.heroEyebrow}
            </span>
            <h1 className="mt-4 sm:mt-6 max-w-3xl text-3xl leading-[1.1] font-extrabold text-background sm:text-5xl md:text-6xl lg:text-7xl">
              {data.heroTitle}
            </h1>
            <p className="mt-4 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-background/85">
              {data.heroText}
            </p>
            <button
              type="button"
              onClick={scrollToContact}
              className="mt-6 sm:mt-10 w-full sm:w-auto rounded-xl bg-brand-green px-8 py-4 sm:px-9 sm:py-5 text-sm sm:text-base font-bold tracking-wide text-brand-green-foreground transition-all hover:bg-brand-green/90 hover:scale-[1.02] shadow-md"
            >
              {data.heroButtonLabel}
            </button>
          </div>
        </section>

        {/* 1.5 — Що таке [Назва] */}
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 pt-10 sm:pt-16 lg:px-10">
          <ExpandableIntroSection
            title={data.introTitle}
            shortDescription={data.introBody}
            expandedContent={custom.introExpandedBody}
            image={data.introImage}
            imageAlt={data.heroTitle}
            isExpanded={introExpanded}
            onToggle={() => setIntroExpanded(!introExpanded)}
          />
        </section>

        {/* 2 — Коли рекомендовано */}
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-10 sm:py-16 lg:px-10">
          <div className="rounded-2xl sm:rounded-3xl bg-card p-5 sm:p-8 md:p-12">
            <div className="section-shell grid gap-8 lg:gap-12 lg:grid-cols-2">
              <div className="flex flex-col">
                <SectionTitle>{data.recommendedTitle}</SectionTitle>
                <p className="mt-6 sm:mt-10 text-base sm:text-lg font-bold text-navy">
                  {data.recommendedSubtitle}
                </p>
                <ul className="mt-4 sm:mt-6 space-y-3">
                  {data.recommendedItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm sm:text-base text-navy/90">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                {custom.recommendedExpandedText && !recommendedExpanded && (
                  <button
                    type="button"
                    onClick={() => setRecommendedExpanded(true)}
                    className="mt-6 sm:mt-8 w-fit inline-flex items-center gap-2 rounded-lg bg-secondary px-5 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-accent"
                  >
                    ДЕТАЛЬНІШЕ
                    <ChevronDown className="size-4 transition-transform duration-200 shrink-0" />
                  </button>
                )}
              </div>
              <img
                src={data.recommendedImage}
                alt={data.recommendedTitle}
                width={1200}
                height={800}
                loading="lazy"
                className="h-full max-h-[280px] sm:max-h-[460px] w-full rounded-xl object-cover shadow-md"
              />
            </div>
            {custom.recommendedExpandedText && (
              <div
                className={cn(
                  "mt-6 text-base sm:text-lg leading-relaxed text-navy/90 whitespace-pre-line overflow-hidden transition-all duration-300",
                  recommendedExpanded ? "max-h-[8000px] opacity-100" : "max-h-0 opacity-0",
                )}
              >
                {custom.recommendedExpandedText}
              </div>
            )}
            {custom.recommendedExpandedText && recommendedExpanded && (
              <button
                type="button"
                onClick={() => setRecommendedExpanded(false)}
                className="mt-6 w-fit inline-flex items-center gap-2 rounded-lg bg-secondary px-5 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-accent"
              >
                ЗГОРНУТИ
                <ChevronDown className="size-4 transition-transform duration-200 rotate-180 shrink-0" />
              </button>
            )}
          </div>
        </section>

        {/* 3 — Протипоказання до реабілітації + Екстрений блок */}
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 pb-10 sm:pb-16 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Червоний блок — 1 колонка */}
            <div className="lg:col-span-1 rounded-xl border-2 border-destructive/30 bg-destructive/10 p-5 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center h-full">
              <p className="font-bold text-navy text-base sm:text-lg md:text-xl">
                {data.emergencyTitle}
              </p>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-navy/85">{data.emergencyBody}</p>
            </div>

            {/* Основний блок протипоказань — 2 колонки */}
            <div className="lg:col-span-2 rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-8 md:p-12 shadow-sm h-full">
              <SectionTitle>{data.postponeTitle}</SectionTitle>
              <p className="mt-6 sm:mt-10 text-base sm:text-lg font-bold text-navy">
                {data.postponeIntro}
              </p>
              <div className="mt-4 sm:mt-6 grid gap-x-16 gap-y-4 sm:gap-y-5 md:grid-cols-2">
                {[...data.postponeLeft, ...data.postponeRight].map((item, idx) => (
                  <p
                    key={`${item}-${idx}`}
                    className="flex items-start text-sm sm:text-base text-navy/90"
                  >
                    <span className="mt-0.5 mr-3 size-1.5 shrink-0 rounded-full bg-navy/25" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 — Як часто */}
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 pb-10 sm:pb-16 lg:px-10">
          <div className="rounded-2xl sm:rounded-3xl bg-card p-5 sm:p-8 md:p-12">
            <div className="section-shell grid gap-8 lg:gap-12 lg:grid-cols-2">
              <div className="flex flex-col">
                <SectionTitle>{data.frequencyTitle}</SectionTitle>
                {data.frequencyParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-4 sm:mt-6 text-sm sm:text-base text-navy/90 first:mt-6 sm:first:mt-10"
                  >
                    {p}
                  </p>
                ))}
                {custom.frequencyExpandedText && !frequencyExpanded && (
                  <button
                    type="button"
                    onClick={() => setFrequencyExpanded(true)}
                    className="mt-6 sm:mt-8 w-fit inline-flex items-center gap-2 rounded-lg bg-secondary px-5 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-accent"
                  >
                    ДЕТАЛЬНІШЕ
                    <ChevronDown className="size-4 transition-transform duration-200 shrink-0" />
                  </button>
                )}
              </div>
              <img
                src={data.frequencyImage}
                alt={data.frequencyTitle}
                width={1200}
                height={800}
                loading="lazy"
                className="h-full max-h-[280px] sm:max-h-[460px] w-full rounded-xl object-cover shadow-md"
              />
            </div>
            {custom.frequencyExpandedText && (
              <div
                className={cn(
                  "mt-6 text-base sm:text-lg leading-relaxed text-navy/90 whitespace-pre-line overflow-hidden transition-all duration-300",
                  frequencyExpanded ? "max-h-[8000px] opacity-100" : "max-h-0 opacity-0",
                )}
              >
                {custom.frequencyExpandedText}
              </div>
            )}
            {custom.frequencyExpandedText && frequencyExpanded && (
              <button
                type="button"
                onClick={() => setFrequencyExpanded(false)}
                className="mt-6 w-fit inline-flex items-center gap-2 rounded-lg bg-secondary px-5 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-accent"
              >
                ЗГОРНУТИ
                <ChevronDown className="size-4 transition-transform duration-200 rotate-180 shrink-0" />
              </button>
            )}
          </div>
        </section>

        {/* 5 — Методи */}
        <section className="bg-soft-blue py-12 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <h2 className="text-center text-2xl sm:text-3xl leading-tight font-extrabold uppercase text-navy md:text-4xl whitespace-pre-line">
              {data.methodSectionTitle}
            </h2>
            <div className="mt-8 sm:mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleMethods.map((m) => (
                <article
                  key={m.title}
                  className="group relative flex flex-col overflow-hidden rounded-3xl bg-slate-50 shadow-sm transition-shadow hover:shadow-md"
                >
                  {m.image && (
                    <div className="h-48 sm:h-56 w-full overflow-hidden bg-muted">
                      <img
                        src={m.image}
                        alt={m.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-bold text-navy">{m.title}</h3>
                    {m.text && (
                      <p className="mt-4 text-sm sm:text-base text-navy/70 line-clamp-3">
                        {m.text}
                      </p>
                    )}
                    <div className="mt-auto pt-6">
                      {m.to ? (
                        <AppLink
                          to={m.to}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                          Детальніше{" "}
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </AppLink>
                      ) : (
                        <div className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-opacity group-hover:opacity-90">
                          Детальніше{" "}
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      )}
                    </div>
                  </div>
                  {m.to && (
                    <AppLink
                      to={m.to}
                      aria-label={`Детальніше про ${m.title}`}
                      className="absolute inset-0 z-10"
                    />
                  )}
                </article>
              ))}
            </div>

            {data.methodCards.length > 3 && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllMethods(!showAllMethods)}
                  className="rounded-lg border-2 border-primary/20 px-8 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
                >
                  {showAllMethods ? "Згорнути" : "Більше"}
                </button>
              </div>
            )}

            <div className="mt-8 sm:mt-12 flex flex-col md:flex-row items-center gap-4 sm:gap-6 rounded-2xl bg-[#e2edf9] p-4 sm:p-6 md:p-8">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="size-6 text-primary" />
              </div>
              <p className="text-sm sm:text-base font-medium text-navy/90 flex-1 text-center md:text-left">
                {data.methodNote}
              </p>
              <button
                type="button"
                onClick={scrollToContact}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Уточнити можливість <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 6 — Результати */}
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-10 sm:py-16 lg:px-10">
          <div className="section-shell grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl leading-tight font-bold text-navy sm:text-3xl md:text-4xl">
                {data.resultsTitle}
              </h2>
              <ul className="mt-6 sm:mt-10 space-y-1">
                {data.resultsItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 sm:gap-4 border-b border-border py-3.5 sm:py-4 last:border-0"
                  >
                    <span className="mt-0.5 flex size-5 sm:size-6 shrink-0 items-center justify-center rounded-full bg-brand-green">
                      <Check className="size-3.5 sm:size-4 text-brand-green-foreground" />
                    </span>
                    <span className="text-xs sm:text-base text-navy/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={data.resultsImage}
              alt={data.resultsTitle}
              width={1200}
              height={800}
              loading="lazy"
              className="h-full max-h-[280px] sm:max-h-[460px] w-full rounded-xl object-cover shadow-md"
            />
          </div>
        </section>

        {/* 6.6 — CTA посередині (кастомний) */}
        {custom.ctaMiddleTitle && (
          <section
            id="cta-section"
            className="relative mx-auto max-w-[1600px] px-4 sm:px-6 pb-10 sm:pb-16 lg:px-10"
          >
            <div className="relative overflow-hidden rounded-2xl bg-soft-blue px-4 sm:px-6 py-12 sm:py-24 text-center shadow-sm">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-wide text-navy md:text-5xl whitespace-pre-line uppercase">
                {custom.ctaMiddleTitle}
              </h2>
              <div className="mx-auto mt-6 sm:mt-8 h-0.5 w-16 sm:w-20 bg-primary/50" />
              {custom.ctaMiddleText && (
                <p className="mx-auto mt-6 sm:mt-8 max-w-3xl text-sm sm:text-lg text-navy/85">
                  {custom.ctaMiddleText}
                </p>
              )}
              <button
                type="button"
                onClick={() => openModal(custom.ctaMiddleButton || "ЗАПИСАТИСЯ НА КОНСУЛЬТАЦІЮ")}
                className="mt-8 sm:mt-12 inline-block w-full sm:w-auto rounded-full bg-primary px-8 sm:px-14 py-4 sm:py-6 text-base sm:text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105"
              >
                {custom.ctaMiddleButton || "ЗАПИСАТИСЯ НА КОНСУЛЬТАЦІЮ"}
              </button>
              <div className="mx-auto mt-8 sm:mt-12 h-px w-full max-w-2xl bg-border" />
              <a
                href="tel:+380674702788"
                className="mt-6 sm:mt-10 inline-flex items-center justify-center gap-3 text-xl sm:text-2xl font-bold text-primary transition-colors hover:text-primary/80"
              >
                <Phone className="size-5 sm:size-6" /> +380 674 702 788
              </a>

              <div className="absolute top-1/2 right-6 hidden -translate-y-1/2 flex-col gap-4 md:flex">
                {[Phone, Send, MapPin].map((Icon, i) => (
                  <span
                    key={i}
                    className="flex size-12 items-center justify-center rounded-full bg-primary/25 text-primary shadow-sm"
                  >
                    <Icon className="size-5" />
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 7 — Ціни */}
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 pb-10 sm:pb-16 lg:px-10">
          <PricesAndServicesBlock
            title={data.priceSectionTitle}
            categories={data.priceCategories}
            footerText={data.priceFooterText}
            footerButtonLabel={data.priceFooterButton}
            onFooterButtonClick={scrollToContact}
          />
        </section>

        {/* 9 — Коли варто пройти обстеження */}
        <section className="relative overflow-hidden rounded-[32px] bg-[#F5F7FA] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20 mx-auto max-w-[1400px]">
          <div className="overflow-hidden rounded-[24px] bg-white p-6 shadow-sm sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
              <div className="max-w-[760px]">
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.15] text-navy tracking-tight">
                  {data.signsTitle}
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed sm:leading-[1.7] text-navy/75 max-w-[760px]">
                  {data.signsIntro}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-6 w-0.5 rounded-full bg-primary" />
                  <span className="text-sm sm:text-base font-bold text-navy">
                    {data.signsListIntro}
                  </span>
                </div>

                <ul className="mt-5 space-y-0">
                  {data.signsItems.map((s, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#E8F0FE]">
                        <Check className="size-3 stroke-[3] text-primary" />
                      </span>
                      <span className="text-sm sm:text-base font-medium text-navy/85 leading-relaxed">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1E3A5F] px-5 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#1E3A5F]/90 cursor-pointer"
                  >
                    <span>Детальніше</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-48 h-48 text-[#E8F0FE] opacity-60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" />
                    <path
                      d="M40 100 Q70 60 100 100 T160 100"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M50 120 Q80 80 110 110 T170 90"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Application Block */}
        <OnlineApplication />

        {/* 11 — FAQ */}
        {node.faq && node.faq.length > 0 && (
          <section className="mx-auto max-w-[1400px] px-4 sm:px-6 pb-20 sm:pb-28 lg:px-10">
            <h2 className="text-2xl sm:text-3xl leading-tight font-bold text-navy">
              Поширені питання
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
            <FAQAccordion items={node.faq} />
          </section>
        )}

        {/* 11 — Інші послуги */}
        <OtherServices />
      </main>

      <SiteFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Helper components                                                   */
/* ------------------------------------------------------------------ */

function ExpandableSectionBlock({
  section,
  alwaysOpen = false,
}: {
  section: { title: string; visibleText: string; expandedText: string; image?: string };
  alwaysOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(alwaysOpen);

  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-10 sm:py-16 lg:px-10">
      <div className="rounded-2xl sm:rounded-3xl bg-card p-5 sm:p-8 md:p-12">
        <div className={cn("section-shell", section.image && "grid gap-8 lg:gap-12 lg:grid-cols-2")}>
          <div className="flex flex-col">
            {section.title && (
              <h2 className="text-2xl leading-tight font-extrabold tracking-wide text-navy sm:text-4xl md:text-5xl">
                {section.title}
              </h2>
            )}
            {section.title && (
              <div className="mt-4 sm:mt-6 h-1 w-20 sm:w-24 rounded-full bg-primary/60" />
            )}
            {section.visibleText && (
              <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-navy/90 whitespace-pre-line">
                {section.visibleText}
              </p>
            )}
            {section.expandedText && !alwaysOpen && !open && (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="mt-6 sm:mt-8 w-fit inline-flex items-center gap-2 rounded-lg bg-secondary px-5 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-accent"
              >
                ДЕТАЛЬНІШЕ
                <ChevronDown className="size-4 transition-transform duration-200 shrink-0" />
              </button>
            )}
          </div>
          {section.image && (
            <img
              src={section.image}
              alt={section.title}
              width={1200}
              height={800}
              loading="lazy"
              className="h-full max-h-[280px] sm:max-h-[460px] w-full rounded-xl object-cover shadow-md"
            />
          )}
        </div>
        {section.expandedText && (
          <div
            className={cn(
              "mt-6 text-base sm:text-lg leading-relaxed text-navy/90 whitespace-pre-line overflow-hidden transition-all duration-300",
              open ? "max-h-[8000px] opacity-100" : "max-h-0 opacity-0",
            )}
          >
            {section.expandedText}
          </div>
        )}
            {section.expandedText && !alwaysOpen && open && (
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-6 w-fit inline-flex items-center gap-2 rounded-lg bg-secondary px-5 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-accent"
              >
                ЗГОРНУТИ
                <ChevronDown className="size-4 transition-transform duration-200 rotate-180 shrink-0" />
              </button>
            )}
      </div>
    </section>
  );
}

function ExpandableIntroSection({
  title,
  shortDescription,
  expandedContent,
  image,
  imageAlt,
  isExpanded,
  onToggle,
}: {
  title: string;
  shortDescription: string;
  expandedContent?: string;
  image: string;
  imageAlt: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [contentHeight, setContentHeight] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const expandedRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isExpanded && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isExpanded]);

  const handleToggle = () => {
    onToggle();
    if (!isExpanded) {
      setTimeout(() => {
        const el = document.getElementById("intro-section");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 350);
    }
  };

  return (
    <section
      id="intro-section"
      className="rounded-2xl sm:rounded-3xl bg-card p-5 sm:p-8 md:p-12 transition-all duration-300 ease-in-out"
    >
      <div className="section-shell grid gap-8 lg:gap-12 lg:grid-cols-2">
        <div className="flex flex-col">
          <h2 className="text-2xl leading-tight font-extrabold tracking-wide text-navy sm:text-4xl md:text-5xl whitespace-pre-line uppercase">
            {title}
          </h2>
          <div className="mt-4 sm:mt-6 h-1 w-20 sm:w-24 rounded-full bg-primary/60" />
          <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-navy/90 whitespace-pre-line">
            {shortDescription}
          </p>
          {!isExpanded && expandedContent && (
            <button
              type="button"
              onClick={handleToggle}
              className="mt-6 sm:mt-8 w-fit inline-flex items-center gap-2 rounded-lg bg-secondary px-5 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-accent"
              aria-expanded="false"
              aria-controls="intro-expanded-content"
            >
              ДЕТАЛЬНІШЕ
              <ChevronDown className="size-4 transition-transform duration-200 shrink-0" />
            </button>
          )}
        </div>
        <img
          src={image}
          alt={imageAlt}
          width={1200}
          height={800}
          loading="lazy"
          className="h-full max-h-[280px] sm:max-h-[460px] w-full rounded-xl object-cover shadow-md shrink-0"
          aria-hidden="true"
        />
      </div>
      {expandedContent && (
        <div
          id="intro-expanded-content"
          className="mt-6 overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isExpanded ? contentHeight : 0,
            opacity: isExpanded ? 1 : 0,
            transitionProperty: 'max-height, opacity',
            transitionDuration: '300ms',
            transitionTimingFunction: 'ease-in-out',
          }}
          ref={expandedRef}
        >
          <div ref={contentRef} className="text-base sm:text-lg leading-relaxed text-navy/90 whitespace-pre-line">
            {expandedContent}
          </div>
          {isExpanded && (
            <button
              type="button"
              onClick={handleToggle}
              className="mt-6 w-fit inline-flex items-center gap-2 rounded-lg bg-secondary px-5 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-semibold tracking-wide text-navy transition-colors hover:bg-accent"
              aria-expanded="true"
              aria-controls="intro-expanded-content"
            >
              ЗГОРНУТИ
              <ChevronDown className="size-4 transition-transform duration-200 rotate-180 shrink-0" />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

function ExpandableCardText({
  visibleText,
  expandedText,
}: {
  visibleText?: string;
  expandedText: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div
        className={cn(
          "mt-4 text-sm sm:text-base text-navy/70 overflow-hidden transition-all duration-300",
          open ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {expandedText}
      </div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
      >
        {open ? "Згорнути" : "Детальніше"}
        <ChevronDown
          className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
    </>
  );
}
