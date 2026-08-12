import * as React from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  Send,
  UploadCloud,
} from "lucide-react";
import { AppLink } from "@/components/app-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumbs, FAQAccordion } from "@/components/blocks";
import { getServicePageData } from "@/data/service-content-generator";
import { useConsultationModal } from "@/components/consultation-form";
import type { FAQItem, ServiceMethodCard, SiteNode } from "@/data/types";
import { cn } from "@/lib/utils";
import checkupImg from "@/assets/service-checkup.jpg";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import rehabImg from "@/assets/service-rehab.jpg";
import sportsImg from "@/assets/service-sports.jpg";

const ANCHORS = [
  { href: "#about", label: "Про програму" },
  { href: "#for-whom", label: "Кому підходить" },
  { href: "#process", label: "Як проходить" },
  { href: "#programs", label: "Програми та вартість" },
  { href: "#documents", label: "Надіслати документи" },
  { href: "#faq", label: "Поширені запитання" },
];

const ABOUT_BULLETS = [
  "Оцінити поточний стан і допустимий рівень навантаження.",
  "Поступово повертати витривалість і впевненість у щоденній активності.",
  "Навчити самоконтролю пульсу, тиску та самопочуття.",
];

const PROCESS_STEPS = [
  {
    title: "Оцінка стану",
    text: "Команда ознайомлюється з документами, самопочуттям і поточними обмеженнями.",
  },
  {
    title: "Індивідуальна програма",
    text: "Визначаються цілі, формат, допустиме навантаження і потрібний рівень контролю.",
  },
  {
    title: "Заняття та процедури",
    text: "Пацієнт проходить вправи й процедури з контролем реакції організму.",
  },
  {
    title: "Контроль і корекція",
    text: "План змінюють відповідно до самопочуття, переносимості та рекомендацій лікаря.",
  },
];

const DOCUMENT_STEPS = [
  "Залиште заявку",
  "Додайте документи",
  "Отримайте попередній розгляд",
  "Адміністратор зв’яжеться з вами",
];

const CARDIO_PROGRAMS = [
  { title: "Профілактична", duration: "1 день", priceLabel: "3000 грн" },
  { title: "Базова", duration: "7 днів", priceLabel: "21000 грн" },
  { title: "Інтенсивна", duration: "14 днів", priceLabel: "42000 грн" },
  { title: "Повна", duration: "21 день", priceLabel: "63000 грн" },
];

const CONDITION_IMAGES = [cpetImg, rehabImg, ecgImg, checkupImg, sportsImg];

const OTHER_SERVICES = [
  {
    title: "Кардіологічна діагностика",
    text: "ЕКГ, Холтер, ДМАТ та навантажувальні тести.",
    to: "/diagnostyka/kardiodiahnostyka",
    image: ecgImg,
  },
  {
    title: "Кардіологічний чек-ап",
    text: "Комплексна оцінка роботи серця та судин.",
    to: "/check-up/kardiolohichnyi",
    image: checkupImg,
  },
  {
    title: "Виїзна реабілітація",
    text: "Супровід удома, у готелі або за місцем перебування.",
    to: "/vyizna-reabilitatsiia",
    image: rehabImg,
  },
  {
    title: "Лікувальний басейн",
    text: "М’яке контрольоване навантаження у воді.",
    to: "/vidnovlennia/likuvalnyi-basein",
    image: sportsImg,
  },
  {
    title: "Функціональне тестування",
    text: "Оцінка витривалості та реакції на навантаження.",
    to: "/diagnostyka/kardiodiahnostyka/cpet",
    image: cpetImg,
  },
];

export function CardioRehabPage({ node }: { node: SiteNode }) {
  const data = getServicePageData(node);
  const custom = node.pageContent || {};
  const { openModal } = useConsultationModal();
  const [introExpanded, setIntroExpanded] = React.useState(false);
  const [showAllConditions, setShowAllConditions] = React.useState(false);
  const [seoExpanded, setSeoExpanded] = React.useState(false);

  const allConditionCards = custom.methodCards || data.methodCards;
  const visibleConditionCards = showAllConditions
    ? allConditionCards
    : allConditionCards.slice(0, 4);
  const programCards = CARDIO_PROGRAMS.map((program, index) => ({
    id: `cardio-program-${index}`,
    route: node.children?.[index]?.route || node.route,
    shortDescription:
      node.children?.[index]?.shortDescription ||
      "Склад програми уточнюється після попередньої оцінки стану.",
    ...program,
  }));
  const faqItems = pickFaqItems(node.faq || []);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-navy-deep">
          <img
            src={data.heroImage}
            alt="Пацієнт виконує контрольовану вправу поруч із медичним спеціалістом"
            width={1400}
            height={900}
            className="absolute inset-0 size-full object-cover object-right opacity-50 mix-blend-luminosity lg:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy-deep/25" />
          <div className="relative mx-auto grid max-w-[1600px] gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:min-h-[620px] lg:px-10 lg:py-24">
            <div className="flex max-w-3xl flex-col justify-center">
              <span className="inline-flex w-fit items-center rounded-full bg-sky-100/95 px-3.5 py-1 text-xs font-semibold tracking-[0.12em] text-navy ring-1 ring-white/50">
                {data.heroEyebrow}
              </span>
              <h1 className="mt-5 text-3xl font-extrabold leading-[1.08] text-background sm:text-5xl lg:text-6xl">
                Реабілітація в кардіології
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/86 sm:text-lg">
                Контрольована програма відновлення для людей після серцево-судинних захворювань,
                операцій або втручань. Команда допомагає безпечно повернутися до активності з
                урахуванням стану серця, самопочуття та рекомендацій лікаря.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => openModal("Записатися на консультацію")}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-green px-6 py-3 text-sm font-bold text-brand-green-foreground shadow-md transition-colors hover:bg-brand-green/90 sm:min-h-14 sm:px-8"
                >
                  Записатися на консультацію
                </button>
                <button
                  type="button"
                  onClick={() => scrollToId("documents")}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-background/45 bg-background/8 px-6 py-3 text-sm font-bold text-background transition-colors hover:bg-background/14 sm:min-h-14 sm:px-8"
                >
                  Надіслати документи
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="border-b border-border/70 bg-white">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <Breadcrumbs
              items={[
                { title: "Головна", route: "/" },
                { title: "Реабілітація", route: "/reabilitatsiia" },
                { title: "Кардіологічна реабілітація", route: node.route },
              ]}
              className="pb-4"
            />
          </div>
        </div>

        <AnchorNav />

        <PageSection id="about" className="py-10 sm:py-16">
          <ExpandableTextBlock
            title="Що таке кардіологічна реабілітація"
            visibleText="Це процес під медичним наглядом, який допомагає поступово адаптувати серцево-судинну систему до навантажень і повернути людині більше впевненості у щоденній активності."
            subtitle="Основні завдання програми"
            bullets={ABOUT_BULLETS}
            expandedContent={custom.introExpandedBody}
            isExpanded={introExpanded}
            onToggle={() => setIntroExpanded((value) => !value)}
            controlId="cardio-intro-expanded"
          />
        </PageSection>

        <PageSection id="for-whom" className="pb-12 sm:pb-20">
          <SectionHeading
            title="Кому підходить кардіологічна реабілітація"
            text="Основні напрями, з якими може працювати команда після попереднього ознайомлення з документами та оцінки стану."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {visibleConditionCards.map((card, index) => (
              <ConditionCard
                key={card.title}
                card={card}
                image={card.image || CONDITION_IMAGES[index % CONDITION_IMAGES.length]}
              />
            ))}
          </div>
          {allConditionCards.length > 4 && (
            <button
              type="button"
              onClick={() => setShowAllConditions((value) => !value)}
              className="mt-7 inline-flex items-center gap-2 rounded-xl border border-primary/30 px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/8"
            >
              {showAllConditions ? "Згорнути напрями" : "Переглянути всі напрями"}
              <ArrowRight className={cn("size-4", showAllConditions && "rotate-90")} />
            </button>
          )}
        </PageSection>

        <ProcessSection />

        <PageSection id="programs" className="py-12 sm:py-20">
          <SectionHeading
            title="Програми та вартість"
            text="Остаточний склад програми залежить від стану пацієнта, медичних документів і рекомендацій лікаря."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,1fr))_0.78fr]">
            {programCards.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
            <MilitaryInfoCard />
          </div>
        </PageSection>

        <OtherServicesSlider />

        <DocumentsReviewSection />

        {faqItems.length > 0 && (
          <PageSection id="faq" className="py-12 sm:py-20">
            <SectionHeading
              title="Поширені питання"
              text="Короткі відповіді на запитання, які найчастіше виникають перед стартом програми."
            />
            <FAQAccordion items={faqItems} />
          </PageSection>
        )}

        <PageSection className="pb-14 sm:pb-20">
          <ExpandableTextBlock
            title="Кардіологічна реабілітація"
            visibleText="ОСНОВА Реабілітація у Буковелі працює з пацієнтами після серцево-судинних захворювань, операцій і втручань. Програма формується індивідуально після аналізу документів та оцінки стану."
            expandedContent="Відновлення може включати консультації, контрольовані заняття, функціональну оцінку, рекомендації щодо активності та подальшого самоконтролю. Остаточний план визначає команда фахівців з урахуванням рекомендацій лікаря, стабільності стану та переносимості навантаження."
            isExpanded={seoExpanded}
            onToggle={() => setSeoExpanded((value) => !value)}
            controlId="cardio-seo-expanded"
          />
        </PageSection>
      </main>

      <SiteFooter />
    </div>
  );
}

function AnchorNav() {
  return (
    <div className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-[1600px] items-center gap-4 overflow-x-auto px-4 py-3 sm:px-6 lg:px-10">
        <p className="shrink-0 text-sm font-bold text-navy/70">Що вас цікавить?</p>
        <nav aria-label="Розділи сторінки" className="flex min-w-max gap-2">
          {ANCHORS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-border bg-soft px-4 py-2 text-sm font-semibold text-navy/78 transition-colors hover:border-primary/40 hover:bg-soft-blue hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

function PageSection({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-[1600px] scroll-mt-24 px-4 sm:px-6 lg:px-10", className)}
    >
      {children}
    </section>
  );
}

function SectionHeading({ title, text }: { title: string; text?: string }) {
  return (
    <div>
      <h2 className="max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
      {text && <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy/76">{text}</p>}
    </div>
  );
}

function ExpandableTextBlock({
  title,
  visibleText,
  subtitle,
  bullets,
  expandedContent,
  isExpanded,
  onToggle,
  controlId,
}: {
  title: string;
  visibleText: string;
  subtitle?: string;
  bullets?: string[];
  expandedContent?: string;
  isExpanded: boolean;
  onToggle: () => void;
  controlId: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-soft p-5 shadow-sm sm:p-8 lg:p-10">
      <h2 className="max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      <div className="mt-5 h-1 w-16 rounded-full bg-primary" />
      <p className="mt-6 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg">
        {visibleText}
      </p>

      {subtitle && <h3 className="mt-8 text-lg font-bold text-navy sm:text-xl">{subtitle}</h3>}
      {bullets && bullets.length > 0 && (
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {bullets.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-blue-100 bg-white/65 p-4 text-sm text-navy/76"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {!isExpanded && expandedContent && (
        <button
          type="button"
          onClick={onToggle}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          aria-expanded={false}
          aria-controls={controlId}
        >
          Детальніше
          <ChevronDown className="size-4" />
        </button>
      )}

      {expandedContent && (
        <div
          id={controlId}
          className={cn(
            "overflow-hidden transition-[max-height,opacity] duration-300",
            isExpanded ? "mt-7 max-h-[3600px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="border-t border-blue-100 pt-6 text-base leading-relaxed text-navy/82 whitespace-pre-line">
            {expandedContent}
          </div>
          {isExpanded && (
            <button
              type="button"
              onClick={onToggle}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-primary/25 px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/8"
              aria-expanded={true}
              aria-controls={controlId}
            >
              Згорнути
              <ChevronDown className="size-4 rotate-180" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function ConditionCard({ card, image }: { card: ServiceMethodCard; image: string }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <img
        src={image}
        alt={card.title}
        width={800}
        height={520}
        loading="lazy"
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold leading-snug text-navy">{card.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-navy/72">{card.text}</p>
      </div>
    </article>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 bg-soft-blue py-12 sm:py-20">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <img
          src={rehabImg}
          alt="Пацієнт виконує вправу поруч із фахівцем"
          width={900}
          height={1200}
          loading="lazy"
          className="h-[360px] w-full rounded-2xl object-cover shadow-sm sm:h-[520px] lg:h-full"
        />
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <SectionHeading
            title="Як проходить реабілітація"
            text="Кожен етап пов’язаний з попереднім: навантаження не збільшують автоматично, а коригують за самопочуттям і медичними показниками."
          />
          <div className="relative mt-8 space-y-7 before:absolute before:left-[23px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-blue-100">
            {PROCESS_STEPS.map((step, index) => (
              <article key={step.title} className="relative flex gap-5">
                <span className="z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-extrabold text-primary-foreground shadow-sm">
                  {index + 1}
                </span>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/72">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  program,
}: {
  program: Pick<
    SiteNode,
    "id" | "title" | "shortDescription" | "duration" | "priceLabel" | "route"
  >;
}) {
  return (
    <article className="flex min-h-[300px] flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold leading-snug text-navy">{program.title}</h3>
      {program.shortDescription && (
        <p className="mt-3 text-sm leading-relaxed text-navy/72">{program.shortDescription}</p>
      )}
      <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Тривалість
          </dt>
          <dd className="mt-1 font-semibold text-navy">{program.duration || "Індивідуально"}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Вартість
          </dt>
          <dd className="mt-1 text-lg font-extrabold text-primary">
            {program.priceLabel || "Уточнюється"}
          </dd>
        </div>
      </dl>
      <AppLink
        to={program.route}
        className="mt-auto inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Детальніше
        <ArrowRight className="size-4" />
      </AppLink>
    </article>
  );
}

function MilitaryInfoCard() {
  return (
    <aside className="flex min-h-[220px] flex-col justify-center rounded-2xl border border-brand-green/25 bg-brand-green/10 p-5 shadow-sm xl:self-center">
      <h3 className="text-lg font-extrabold text-navy">Для військових</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy/72">
        Діють спеціальні умови та знижки на програми відновлення
      </p>
    </aside>
  );
}

function OtherServicesSlider() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const next = cards.reduce(
      (closest, card, index) => {
        const distance = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);
        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );
    setActive(next.index);
  };

  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-end justify-between gap-5">
          <SectionHeading
            title="Інші послуги"
            text="Суміжні напрями, які можуть знадобитися до, під час або після програми."
          />
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              aria-label="Попередня послуга"
              onClick={() => scrollToIndex(Math.max(0, active - 1))}
              className="flex size-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-sm transition-colors hover:bg-soft"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Наступна послуга"
              onClick={() => scrollToIndex(Math.min(OTHER_SERVICES.length - 1, active + 1))}
              className="flex size-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-sm transition-colors hover:bg-soft"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {OTHER_SERVICES.map((service) => (
            <article
              key={service.title}
              className="grid w-[84%] shrink-0 snap-start overflow-hidden rounded-2xl border border-blue-100 bg-soft shadow-sm sm:w-[54%] lg:w-[37%] xl:w-[30%]"
            >
              <img
                src={service.image}
                alt={service.title}
                width={900}
                height={620}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-col p-5">
                <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-navy/72">
                  {service.text}
                </p>
                <AppLink
                  to={service.to}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl border border-primary/25 bg-white px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/8"
                >
                  Детальніше
                  <ArrowRight className="size-4" />
                </AppLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocumentsReviewSection() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [files, setFiles] = React.useState<string[]>([]);
  const [submitted, setSubmitted] = React.useState(false);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextFiles = Array.from(event.target.files || []).map((file) => file.name);
    setFiles(nextFiles);
    setSubmitted(false);
  };

  return (
    <section id="documents" className="scroll-mt-24 bg-soft-blue py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-10">
        <SectionHeadingCentered
          title="Надішліть документи для попереднього розгляду"
          text="Перед стартом команді важливо побачити виписки, результати обстежень і рекомендації лікаря. Це допомагає підготувати наступний крок."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {DOCUMENT_STEPS.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-blue-100 bg-white p-5 text-left shadow-sm"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="mt-4 font-bold leading-snug text-navy">{step}</h3>
            </div>
          ))}
        </div>

        <form
          className="mx-auto mt-8 max-w-2xl rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-7"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-primary/35 bg-soft px-4 py-10 text-center transition-colors hover:border-primary hover:bg-soft-blue/50"
          >
            <UploadCloud className="size-10 text-primary" />
            <span className="mt-4 text-base font-bold text-navy">Обрати файли</span>
            <span className="mt-2 text-sm text-navy/60">
              PDF, JPG або PNG до 10 МБ. Можна додати виписки, висновки та результати обстежень.
            </span>
          </button>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
            multiple
            className="hidden"
            onChange={onFileChange}
          />

          {files.length > 0 && (
            <ul className="mt-4 space-y-2 text-left">
              {files.map((file) => (
                <li
                  key={file}
                  className="flex items-center gap-2 rounded-xl border border-border bg-soft px-3 py-2 text-sm text-navy/78"
                >
                  <FileText className="size-4 shrink-0 text-primary" />
                  <span className="truncate">{file}</span>
                </li>
              ))}
            </ul>
          )}

          <button
            type="submit"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Надіслати документи
            <Send className="size-4" />
          </button>

          {submitted && (
            <p className="mt-4 rounded-xl border border-brand-green/25 bg-brand-green/10 px-4 py-3 text-sm font-semibold text-navy">
              Дякуємо. Адміністратор зв’яжеться з вами після попереднього розгляду.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function SectionHeadingCentered({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
      {text && <p className="mt-4 text-base leading-relaxed text-navy/76">{text}</p>}
    </div>
  );
}

function pickFaqItems(items: FAQItem[]) {
  const preferred = [
    "Скільки триває програма?",
    "Чи потрібне направлення лікаря?",
    "Які документи потрібно підготувати?",
    "Чи можна проходити програму амбулаторно?",
    "Що входить у вартість програми?",
    "Як записатися?",
  ];

  const picked = preferred
    .map((question) => items.find((item) => item.question === question))
    .filter(Boolean) as FAQItem[];

  return picked.length > 0 ? picked : items.slice(0, 6);
}
