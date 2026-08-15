import { AppLink } from "@/components/app-link";
import * as React from "react";
import { ArrowRight, ChevronDown, Check, Phone, Send, MapPin, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { useConsultationModal } from "@/components/consultation-form";
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
    <section className={cn("mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10", className)}>{children}</section>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-2xl leading-tight font-bold text-navy sm:text-3xl md:text-4xl">{children}</h2>
      <div className="mt-4 sm:mt-6 h-1 w-16 rounded-full bg-primary" />
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
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.28em] text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-2 sm:mt-4 text-2xl leading-tight font-bold text-navy sm:text-3xl md:text-4xl">{title}</h2>
      <div className="mt-4 sm:mt-6 h-1 w-16 rounded-full bg-primary" />
      {text && <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg text-navy/85">{text}</p>}
    </div>
  );
}

export function Breadcrumbs({
  items,
  className,
  align = "left",
}: {
  items: { title: string; route: string }[];
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <nav aria-label="Навігаційний ланцюжок" className={cn("pt-4 sm:pt-8 overflow-x-auto scrollbar-none", className)}>
      <ol className={cn("flex items-center gap-2 text-xs sm:text-sm text-navy/60 whitespace-nowrap", align === "center" && "justify-center")}>
        {items.map((item, i) => (
          <li key={item.route + i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i === items.length - 1 ? (
              <span className="font-semibold text-navy">
                {i === 0 ? (
                  <span className="inline-flex items-center gap-1">
                    <Home className="size-3.5" /> {item.title}
                  </span>
                ) : (
                  item.title
                )}
              </span>
            ) : (
              <AppLink to={item.route} className="hover:text-primary transition-colors">
                {i === 0 ? (
                  <span className="inline-flex items-center gap-1">
                    <Home className="size-3.5" /> {item.title}
                  </span>
                ) : (
                  item.title
                )}
              </AppLink>
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
  const { openModal } = useConsultationModal();

  return (
    <section className="relative overflow-hidden bg-navy-deep">
      {image && (
        <>
          <img
            src={image}
            alt={title}
            width={1200}
            height={800}
            className="absolute inset-0 size-full object-cover object-right opacity-40 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20" />
        </>
      )}
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 py-14 sm:py-20 lg:px-10 lg:py-32">
        {eyebrow && (
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.28em] text-primary-foreground/70 uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 sm:mt-6 max-w-3xl text-3xl leading-[1.1] font-extrabold text-background sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {text && <p className="mt-4 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-background/85">{text}</p>}

        {facts && facts.length > 0 && (
          <dl className="mt-6 sm:mt-8 flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-4">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-[10px] sm:text-xs tracking-[0.16em] text-background/60 uppercase">{f.label}</dt>
                <dd className="mt-1 text-sm sm:text-base font-bold text-background">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => openModal(primaryLabel)}
            className="w-full sm:w-auto text-center rounded-lg bg-brand-green px-6 sm:px-9 py-4 sm:py-5 text-sm sm:text-base font-bold tracking-wide text-brand-green-foreground transition-opacity hover:opacity-90 shadow-md cursor-pointer"
          >
            {primaryLabel}
          </button>
          {secondaryTo && secondaryLabel && (
            <AppLink
              to={secondaryTo}
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 sm:gap-3 rounded-lg border border-background/40 px-6 sm:px-9 py-4 sm:py-5 text-sm sm:text-base font-bold tracking-wide text-background transition-colors hover:bg-background/10"
            >
              {secondaryLabel} <ArrowRight className="size-4 sm:size-5" />
            </AppLink>
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
          <AppLink to={node.route} className="hover:text-primary">
            {node.title}
          </AppLink>
        </h3>
        {node.shortDescription && (
          <p className="mt-3 line-clamp-3 text-navy/75">{node.shortDescription}</p>
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          {node.duration ? `Тривалість: ${node.duration}` : null}
        </p>
        <AppLink
          to={node.route}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Детальніше <ArrowRight className="size-4" />
        </AppLink>
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
  const { openModal } = useConsultationModal();

  return (
    <PageContainer className="pb-16">
      <div className="relative overflow-hidden rounded-2xl bg-soft-blue px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-wide text-navy md:text-5xl">{title}</h2>
        <div className="mx-auto mt-8 h-0.5 w-20 bg-primary/50" />
        <p className="mx-auto mt-8 max-w-3xl text-lg text-navy/85">{text}</p>
        <button
          type="button"
          onClick={() => openModal(buttonLabel)}
          className="mt-12 inline-block rounded-full bg-primary px-14 py-6 text-lg font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90 cursor-pointer"
        >
          {buttonLabel}
        </button>
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

export function WhenToPassCardioRehabBlock({
  title = "Коли варто пройти кардіологічну реабілітацію",
  description = "Багато захворювань та порушень розвитку часто протікають приховано і тривалий час можуть не проявлятися вираженими симптомами. Саме тому важливо вчасно реагувати на найменші зміни самопочуття та регулярно проходити обстеження та профілактику.",
  calloutTitle = "Звернутися до лікаря варто при:",
  items = [
    "Після перенесеного захворювання, травми або операції",
    "При зниженні витривалості та повсякденної активності",
    "За рекомендацією лікуючого лікаря",
  ],
  buttonLabel = "Детальніше",
  onButtonClick,
  href = "#for-whom",
  className,
}: {
  title?: string;
  description?: string;
  calloutTitle?: string;
  items?: string[];
  buttonLabel?: string;
  onButtonClick?: () => void;
  href?: string;
  className?: string;
}) {
  const handleClick = (e: React.MouseEvent) => {
    if (onButtonClick) {
      e.preventDefault();
      onButtonClick();
    } else if (href && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 sm:p-10 lg:p-12 shadow-sm transition-all",
        className,
      )}
    >
      <div className="max-w-3xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-navy tracking-tight">
          {title}
        </h2>

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-navy/75">{description}</p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-lg border-l-4 border-primary bg-[#edf4fc] px-4 py-2.5 text-sm sm:text-base font-bold text-navy">
          <span>{calloutTitle}</span>
        </div>

        <ul className="mt-5 space-y-3">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-sm sm:text-base font-medium text-navy/85"
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <Check className="size-3.5 stroke-[3]" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <a
            href={href}
            onClick={handleClick}
            className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-primary/90 cursor-pointer"
          >
            <span>{buttonLabel}</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

