import * as React from "react";
import { AppLink } from "@/components/app-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OtherServices } from "@/components/other-services";
import { FAQAccordion } from "@/components/blocks";
import { PricesAndServicesBlock } from "@/components/prices-and-services-block";
import { getServicePageData } from "@/data/service-content-generator";
import type { SiteNode } from "@/data/types";
import { ArrowRight, Check, MapPin, Phone, Send } from "lucide-react";

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
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.28em] text-primary-foreground/70 uppercase">
              {data.heroEyebrow}
            </p>
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
          <div className="section-shell grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl leading-tight font-extrabold tracking-wide text-navy sm:text-4xl md:text-5xl whitespace-pre-line uppercase">
                {data.introTitle}
              </h2>
              <div className="mt-4 sm:mt-6 h-1 w-20 sm:w-24 rounded-full bg-primary/60" />
              <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-navy/90">{data.introBody}</p>
              <button
                type="button"
                onClick={scrollToContact}
                className="mt-6 sm:mt-10 w-full sm:w-auto inline-flex items-center justify-center gap-4 sm:gap-6 rounded-xl bg-secondary px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm font-bold tracking-wide text-navy transition-colors hover:bg-accent"
              >
                ДЕТАЛЬНІШЕ <ArrowRight className="size-4 sm:size-5" />
              </button>
            </div>
            <img
              src={data.introImage}
              alt={data.heroTitle}
              width={1200}
              height={800}
              loading="lazy"
              className="h-full max-h-[280px] sm:max-h-[460px] w-full rounded-xl object-cover shadow-md"
            />
          </div>
        </section>

        {/* 2 — Коли рекомендовано */}
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-10 sm:py-16 lg:px-10">
          <div className="section-shell grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle>{data.recommendedTitle}</SectionTitle>
              <p className="mt-6 sm:mt-10 text-base sm:text-lg font-bold text-navy">{data.recommendedSubtitle}</p>
              <ul className="mt-4 sm:mt-6 space-y-3">
                {data.recommendedItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm sm:text-base text-navy/90">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={scrollToContact}
                className="mt-6 sm:mt-10 w-full sm:w-auto inline-flex items-center justify-center gap-4 sm:gap-6 rounded-xl bg-secondary px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm font-bold tracking-wide text-navy transition-colors hover:bg-accent"
              >
                ДЕТАЛЬНІШЕ <ArrowRight className="size-4 sm:size-5" />
              </button>
            </div>
            <img
              src={data.recommendedImage}
              alt={data.recommendedTitle}
              width={1200}
              height={800}
              loading="lazy"
              className="h-full max-h-[280px] sm:max-h-[440px] w-full rounded-xl object-cover shadow-md"
            />
          </div>
        </section>

        {/* 3 — Коли відкласти */}
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 pb-10 sm:pb-16 lg:px-10">
          <div className="rounded-2xl sm:rounded-3xl border border-border p-5 sm:p-8 md:p-12 shadow-sm">
            <SectionTitle>{data.postponeTitle}</SectionTitle>
            <p className="mt-6 sm:mt-10 text-base sm:text-lg font-bold text-navy">{data.postponeIntro}</p>
            <div className="mt-4 sm:mt-6 grid gap-x-16 gap-y-3 sm:gap-y-4 md:grid-cols-2">
              {[...data.postponeLeft, ...data.postponeRight].map((item, idx) => (
                <p key={`${item}-${idx}`} className="text-sm sm:text-base text-navy/90">
                  <span className="mr-2 text-muted-foreground">–</span>
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-8 sm:mt-10 rounded-xl border border-destructive/25 bg-destructive/8 p-4 sm:p-6">
              <p className="font-bold text-navy text-sm sm:text-base">{data.emergencyTitle}</p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-navy/90">{data.emergencyBody}</p>
            </div>
          </div>
        </section>

        {/* 4 — Як часто */}
        <section className="mx-auto max-w-[1600px] px-4 sm:px-6 pb-10 sm:pb-16 lg:px-10">
          <div className="section-shell grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle>{data.frequencyTitle}</SectionTitle>
              {data.frequencyParagraphs.map((p, i) => (
                <p key={i} className="mt-4 sm:mt-6 text-sm sm:text-base text-navy/90 first:mt-6 sm:first:mt-10">
                  {p}
                </p>
              ))}
              <button
                type="button"
                onClick={scrollToContact}
                className="mt-6 sm:mt-10 w-full sm:w-auto inline-flex items-center justify-center gap-4 sm:gap-6 rounded-xl bg-secondary px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm font-bold tracking-wide text-navy transition-colors hover:bg-accent"
              >
                ДЕТАЛЬНІШЕ <ArrowRight className="size-4 sm:size-5" />
              </button>
            </div>
            <img
              src={data.frequencyImage}
              alt={data.frequencyTitle}
              width={1200}
              height={800}
              loading="lazy"
              className="h-full max-h-[280px] sm:max-h-[440px] w-full rounded-xl object-cover shadow-md"
            />
          </div>
        </section>

        {/* 5 — Методи */}
        <section className="bg-soft-blue py-12 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <h2 className="text-center text-2xl sm:text-3xl leading-tight font-bold text-navy md:text-4xl whitespace-pre-line">
              {data.methodSectionTitle}
            </h2>
            <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.methodCards.map((m) => (
                <article
                  key={m.title}
                  className="flex flex-col rounded-xl bg-card p-5 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="text-base sm:text-lg font-bold text-primary">{m.title}</h3>
                  <div className="mt-3 sm:mt-4 h-0.5 w-10 bg-primary/60" />
                  <p className="mt-3 mb-5 sm:mt-5 sm:mb-6 text-xs sm:text-sm text-navy/85">{m.text}</p>
                  {m.to && (
                    <AppLink
                      to={m.to}
                      aria-label={`Детальніше про ${m.title}`}
                      className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:px-5 sm:text-sm"
                    >
                      Детальніше <ArrowRight className="size-4" />
                    </AppLink>
                  )}
                </article>
              ))}
            </div>
            <div className="mt-8 sm:mt-10 rounded-xl bg-secondary/60 p-4 sm:p-6 pl-6 sm:pl-8 [border-left:4px_solid_var(--color-primary)]">
              <p className="text-xs sm:text-sm font-semibold text-navy">{data.methodNote}</p>
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
              height={1000}
              loading="lazy"
              className="h-full max-h-[300px] sm:max-h-[640px] w-full rounded-xl object-cover shadow-md"
            />
          </div>
        </section>

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

        {/* 8 — CTA */}
        <section id="cta-section" className="relative mx-auto max-w-[1600px] px-4 sm:px-6 pb-10 sm:pb-16 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl bg-soft-blue px-4 sm:px-6 py-12 sm:py-24 text-center shadow-sm">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-wide text-navy md:text-5xl whitespace-pre-line uppercase">
              {data.ctaTitle}
            </h2>
            <div className="mx-auto mt-6 sm:mt-8 h-0.5 w-16 sm:w-20 bg-primary/50" />
            <p className="mx-auto mt-6 sm:mt-8 max-w-3xl text-sm sm:text-lg text-navy/85">
              {data.ctaBody}
            </p>
            <AppLink
              to="/kontakty"
              className="mt-8 sm:mt-12 inline-block w-full sm:w-auto rounded-full bg-primary px-8 sm:px-14 py-4 sm:py-6 text-base sm:text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105"
            >
              {data.ctaButton}
            </AppLink>
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

        {/* 9 — Коли варто пройти обстеження */}
        <section className="mx-auto max-w-[1400px] px-4 sm:px-6 pb-16 sm:pb-24 lg:px-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy md:text-5xl">
            {data.signsTitle}
          </h2>
          <p className="mt-4 sm:mt-8 text-sm sm:text-lg leading-relaxed text-navy/85">
            {data.signsIntro}
          </p>
          <p className="mt-6 sm:mt-8 font-bold text-navy text-sm sm:text-base">
            {data.signsListIntro}
          </p>
          <ul className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
            {data.signsItems.map((s) => (
              <li key={s} className="flex gap-3 text-xs sm:text-base text-navy/90">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                {s};
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={scrollToContact}
            className="mt-8 sm:mt-10 w-full sm:w-auto rounded-lg bg-primary px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Детальніше
          </button>
        </section>

        {/* 10 — FAQ */}
        {node.faq && node.faq.length > 0 && (
          <section className="mx-auto max-w-[1400px] px-4 sm:px-6 pb-16 sm:pb-24 lg:px-10">
            <SectionTitle>Поширені питання</SectionTitle>
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
