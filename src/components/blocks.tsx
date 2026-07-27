import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Check, Phone, Send, MapPin, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem, SiteNode } from "@/data/types";
import { CONTACTS } from "@/data/site-tree";

export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-[1600px] px-6 lg:px-10", className)}>{children}</section>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-3xl leading-tight font-bold text-navy md:text-4xl">{children}</h2>
      <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
    </>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.28em] text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-4 text-3xl leading-tight font-bold text-navy md:text-4xl">{title}</h2>
      <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
      {text && <p className="mt-6 max-w-3xl text-lg text-navy/85">{text}</p>}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { title: string; route: string }[] }) {
  return (
    <nav aria-label="Навігаційний ланцюжок" className="pt-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-navy/60">
        {items.map((item, i) => (
          <li key={item.route + i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i === items.length - 1 ? (
              <span className="font-semibold text-navy">{item.title}</span>
            ) : (
              <Link to={item.route} className="hover:text-primary">
                {i === 0 ? (
                  <span className="inline-flex items-center gap-1">
                    <Home className="size-3.5" /> {item.title}
                  </span>
                ) : (
                  item.title
                )}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  facts,
  primaryLabel = "ЗАПИСАТИСЯ",
  secondaryTo,
  secondaryLabel,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  image?: string;
  facts?: { label: string; value: string }[];
  primaryLabel?: string;
  secondaryTo?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      {image && (
        <>
          <img
            src={image}
            alt={title}
            width={1200}
            height={800}
            className="absolute inset-0 size-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20" />
        </>
      )}
      <div className="relative mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-24">
        {eyebrow && (
          <p className="text-sm font-semibold tracking-[0.28em] text-primary-foreground/70">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] font-extrabold text-background md:text-6xl">
          {title}
        </h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/85">{text}</p>}

        {facts && facts.length > 0 && (
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs tracking-[0.16em] text-background/60">{f.label}</dt>
                <dd className="mt-1 font-bold text-background">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/kontakty"
            className="rounded-lg bg-brand-green px-9 py-5 text-base font-bold tracking-wide text-brand-green-foreground transition-opacity hover:opacity-90"
          >
            {primaryLabel}
          </Link>
          {secondaryTo && secondaryLabel && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center gap-3 rounded-lg border border-background/40 px-9 py-5 text-base font-bold tracking-wide text-background transition-colors hover:bg-background/10"
            >
              {secondaryLabel} <ArrowRight className="size-5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function QuickFacts({ items }: { items: { label: string; value: string }[] }) {
  if (!items.length) return null;
  return (
    <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3">
      {items.map((i) => (
        <div key={i.label}>
          <p className="text-xs tracking-[0.16em] text-muted-foreground">{i.label}</p>
          <p className="mt-2 font-bold text-navy">{i.value}</p>
        </div>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 border-b border-border py-4 last:border-0">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green">
            <Check className="size-4 text-brand-green-foreground" />
          </span>
          <span className="text-navy/90">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-navy/90">
          <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = React.useState<string[]>([]);
  if (!items.length) return null;

  const toggle = (q: string) =>
    setOpen((prev) => (prev.includes(q) ? prev.filter((x) => x !== q) : [...prev, q]));

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((i) => ({
              "@type": "Question",
              name: i.question,
              acceptedAnswer: { "@type": "Answer", text: i.answer },
            })),
          }),
        }}
      />
      <ul className="mt-10 space-y-3">
        {items.map((item, i) => {
          const isOpen = open.includes(item.question);
          const panelId = `faq-panel-${i}`;
          return (
            <li key={item.question} className="rounded-xl border border-border bg-card">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.question)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-navy"
              >
                <span className="font-semibold">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-primary transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                id={panelId}
                hidden={!isOpen}
                className="px-6 pb-5 text-navy/85 transition-all duration-200"
              >
                {item.answer}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ServiceCard({ node }: { node: SiteNode }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-soft shadow-sm">
      {node.image && (
        <img
          src={node.image}
          alt={node.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-navy">
          <Link to={node.route} className="hover:text-primary">
            {node.title}
          </Link>
        </h3>
        {node.shortDescription && (
          <p className="mt-3 line-clamp-3 text-navy/75">{node.shortDescription}</p>
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          {node.duration ? `Тривалість: ${node.duration}` : null}
          {node.duration && (node.priceLabel || node.priceFrom) ? " · " : null}
          {node.priceLabel ?? (node.priceFrom ? `від ${node.priceFrom} грн` : null)}
        </p>
        <Link
          to={node.route}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Детальніше <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}

export function CTASection({
  title,
  text,
  buttonLabel = "Записатися на консультацію",
}: {
  title: string;
  text: string;
  buttonLabel?: string;
}) {
  return (
    <PageContainer className="pb-16">
      <div className="relative overflow-hidden rounded-2xl bg-soft-blue px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-wide text-navy md:text-5xl">{title}</h2>
        <div className="mx-auto mt-8 h-0.5 w-20 bg-primary/50" />
        <p className="mx-auto mt-8 max-w-3xl text-lg text-navy/85">{text}</p>
        <Link
          to="/kontakty"
          className="mt-12 inline-block rounded-full bg-primary px-14 py-6 text-lg font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
        >
          {buttonLabel}
        </Link>
        <div className="mx-auto mt-12 h-px w-full max-w-2xl bg-border" />
        <a
          href={CONTACTS.phoneHref}
          className="mt-10 inline-flex items-center gap-3 text-2xl font-bold text-primary"
        >
          <Phone className="size-6" /> {CONTACTS.phone}
        </a>
        <div className="absolute top-1/2 right-6 hidden -translate-y-1/2 flex-col gap-4 md:flex">
          {[Phone, Send, MapPin].map((Icon, i) => (
            <span
              key={i}
              className="flex size-12 items-center justify-center rounded-full bg-primary/25 text-primary"
            >
              <Icon className="size-5" />
            </span>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
