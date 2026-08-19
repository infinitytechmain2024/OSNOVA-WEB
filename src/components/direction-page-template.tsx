import React, { useMemo, useState } from "react";
import { Breadcrumbs, FAQAccordion } from "@/components/blocks";
import { useConsultationModal } from "@/components/consultation-form";
import type { DirectionPageData } from "@/data/direction-pages-content";
import { FAQ_VISIBLE_COUNT } from "@/data/direction-pages-content";
import { getBreadcrumbs, getNodeById } from "@/lib/tree";

interface DirectionPageTemplateProps {
  config: DirectionPageData;
  nodeRoute: string;
}

export function DirectionPageTemplate({ config, nodeRoute }: DirectionPageTemplateProps) {
  const node = useMemo(() => getNodeById(nodeRoute), [nodeRoute]);
  const { openModal } = useConsultationModal();
  const [faqExpanded, setFaqExpanded] = useState(false);

  const breadcrumbItems = useMemo(
    () => (node ? getBreadcrumbs(node) : []),
    [node],
  );

  const visibleFaqItems = useMemo(
    () =>
      faqExpanded
        ? config.faq.items
        : config.faq.items.slice(0, FAQ_VISIBLE_COUNT),
    [config.faq.items, faqExpanded],
  );

  const hasMoreFaq = config.faq.items.length > FAQ_VISIBLE_COUNT;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-12 sm:px-8 md:flex-row md:gap-10 md:py-16">
          <div className="flex-1 text-center md:text-left">
            <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
              {config.heroBadge}
            </span>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {config.directionTitle}
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              {config.heroSubtitle}
            </p>
            <button
              onClick={() => openModal("Записатися на консультацію")}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              {config.heroButton}
            </button>
          </div>
          <div className="relative h-56 w-full flex-shrink-0 overflow-hidden rounded-2xl md:h-72 md:w-1/2 lg:h-80">
            <img
              src={config.heroImage}
              alt={config.heroImageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Breadcrumbs items={breadcrumbItems} className="pb-3 pt-4 sm:pt-4" />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">{config.intro.title}</h2>
        <p className="mt-2 text-lg text-navy/60">{config.intro.subtitle}</p>
        <div className="mt-6 space-y-4 text-navy/70">
          {config.intro.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-soft-blue py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{config.advantages.title}</h2>
          <p className="mt-2 text-navy/60">{config.advantages.subtitle}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {config.advantages.highlights.map((h, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-navy">{h.title}</h3>
                <p className="mt-1 text-sm text-navy/60">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">{config.whatYouGet.title}</h2>
        <p className="mt-2 text-navy/60">{config.whatYouGet.subtitle}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.whatYouGet.cards.map((c, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-navy">{c.title}</h3>
              <p className="mt-1 text-sm text-navy/60">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{config.programs.title}</h2>
          <p className="mt-2 text-navy/60">{config.programs.subtitle}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {config.programs.cards.map((p) => (
              <div
                key={p.id}
                className={`relative rounded-2xl border p-6 ${
                  p.isPopular
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-gray-200 bg-white"
                }`}
              >
                {p.isPopular && (
                  <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-white">
                    Популярна
                  </span>
                )}
                <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-navy/60">{p.shortDescription}</p>
                <div className="mt-4 text-sm text-navy/50">{p.duration}</div>
                <div className="mt-1 text-sm font-semibold text-primary">{p.priceLabel}</div>
                <button
                  onClick={() => openModal("Записатися на консультацію")}
                  className="mt-4 w-full rounded-full bg-primary py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  {config.heroButtonLabel}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-24 bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{config.process.title}</h2>
          <p className="mt-2 text-navy/60">{config.process.subtitle}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {config.process.steps.map((s) => (
              <div key={s.number} className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {s.number}
                </div>
                <h3 className="mt-3 font-semibold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-navy/60">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">{config.indications.title}</h2>
        <p className="mt-2 text-navy/60">{config.indications.subtitle}</p>
        <ul className="mt-6 space-y-2">
          {config.indications.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-navy/70">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Contraindications */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{config.contraindications.title}</h2>
          <p className="mt-2 text-navy/60">{config.contraindications.subtitle}</p>
          <ul className="mt-6 space-y-2">
            {config.contraindications.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-navy/70">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 className="font-semibold text-red-700">Невідкладна допомога</h3>
            <p className="mt-2 whitespace-pre-line text-sm text-red-600">
              {config.contraindications.emergency}
            </p>
            <ul className="mt-4 space-y-1">
              {config.contraindications.emergencyItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-600">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">{config.formats.title}</h2>
        <p className="mt-2 text-navy/60">{config.formats.subtitle}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.formats.items.map((f, i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-navy">{f.title}</h3>
                <p className="mt-1 text-sm text-navy/60">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-14 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 sm:px-8 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/80">
              {config.cta.imageBadge}
            </span>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{config.cta.title}</h2>
            <p className="mt-3 max-w-lg text-white/70">{config.cta.subtitle}</p>
            <button
              onClick={() => openModal("Записатися на консультацію")}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              {config.heroButtonLabel}
            </button>
          </div>
          <div className="relative h-56 w-full flex-shrink-0 overflow-hidden rounded-2xl md:h-72 md:w-1/2">
            <img
              src={config.cta.image}
              alt={config.cta.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{config.faq.title}</h2>
          <p className="mt-2 text-navy/60">{config.faq.subtitle}</p>
          <div className="mt-8">
            <FAQAccordion items={visibleFaqItems} variant="home" />
            {hasMoreFaq && (
              <button
                onClick={() => setFaqExpanded(!faqExpanded)}
                className="mt-4 text-sm font-medium text-primary hover:underline"
              >
                {faqExpanded ? "Приховати питання" : "Показати більше питань"}
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
