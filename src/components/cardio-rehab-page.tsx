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
  { href: "#programs", label: "Вартість" },
  { href: "#faq", label: "Запитання" },
];

const SUMMARY_CARDS = [
  {
    title: "Кому підходить",
    text: "Пацієнтам після стабілізації стану, серцево-судинних подій, операцій або втручань.",
  },
  {
    title: "Що входить",
    text: "Оцінка стану, дозовані заняття, контроль показників і рекомендації для безпечної активності.",
  },
  {
    title: "Формати",
    text: "Стаціонарно у Буковелі або амбулаторно. Дистанційний супровід можливий лише за показаннями.",
  },
  {
    title: "Як почати",
    text: "Залиште заявку або надішліть медичні документи для попереднього розгляду командою.",
  },
];

const TIMING_COLUMNS = [
  {
    title: "Коли рекомендовано",
    items: [
      "Після інфаркту, стентування або кардіохірургічної операції, коли стан стабільний.",
      "Якщо знизилася переносимість щоденних навантажень.",
      "За рекомендацією кардіолога або лікуючого лікаря.",
    ],
  },
  {
    title: "Яких результатів можна очікувати",
    items: [
      "Поступово впевненіше повертатися до побутової активності.",
      "Краще розуміти безпечний рівень навантаження, пульс і самопочуття.",
      "Отримати персональні рекомендації для продовження вправ удома.",
    ],
  },
  {
    title: "Коли програму варто відкласти",
    tone: "warning",
    items: [
      "При болю або тиску у грудях, раптовій задишці чи різкому погіршенні стану.",
      "При температурі, гострій інфекції або загостренні супутніх захворювань.",
      "Якщо лікар ще не дозволив фізичні навантаження після втручання.",
    ],
  },
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

const DOCUMENT_STEPS = ["Заявка", "Документи", "Попередній розгляд", "Зв’язок адміністратора"];

const OTHER_SERVICES = [
  {
    title: "Кардіологічна діагностика",
    text: "ЕКГ, Холтер, ДМАТ, ЕхоКГ та навантажувальні тести для оцінки стану серця.",
    to: "/diagnostyka/kardiodiahnostyka",
    image: ecgImg,
  },
  {
    title: "Кардіологічний чек-ап",
    text: "Комплексне обстеження серця та судин із підсумковим медичним висновком.",
    to: "/check-up/kardiolohichnyi",
    image: checkupImg,
  },
  {
    title: "Виїзна реабілітація",
    text: "Супровід удома, у готелі або за місцем перебування, якщо дорога до центру складна.",
    to: "/vyizna-reabilitatsiia",
    image: rehabImg,
  },
  {
    title: "Лікувальний басейн",
    text: "Заняття у воді з м’яким навантаженням на суглоби та контрольованим темпом.",
    to: "/vidnovlennia/likuvalnyi-basein",
    image: sportsImg,
  },
  {
    title: "Функціональне тестування",
    text: "Оцінка витривалості й реакції організму на навантаження перед активністю.",
    to: "/diagnostyka/kardiodiahnostyka/cpet",
    image: cpetImg,
  },
];

export function CardioRehabPage({ node }: { node: SiteNode }) {
  const data = getServicePageData(node);
  const custom = node.pageContent || {};
  const { openModal } = useConsultationModal();
  const [introExpanded, setIntroExpanded] = React.useState(false);

  const conditionCards = (custom.methodCards || data.methodCards).slice(0, 4);
  const programCards =
    node.children && node.children.length > 0
      ? node.children
      : custom.pricePrimary?.map((item, index) => ({
          id: `program-${index}`,
          title: item.name,
          shortDescription: "Склад програми уточнюється після попередньої оцінки стану.",
          duration: item.time,
          priceLabel: item.price,
          route: node.route,
        })) || [];
  const faqItems = pickFaqItems(node.faq || []);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
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

        <section className="relative overflow-hidden bg-navy-deep">
          <img
            src={data.heroImage}
            alt="Медична команда контролює заняття пацієнта під час відновлення"
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
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-green px-6 py-3 text-sm font-bold text-brand-green-foreground shadow-md transition-colors hover:bg-brand-green/90 sm:min-h-14 sm:px-8"
                >
                  Записатися на консультацію
                </button>
                <button
                  type="button"
                  onClick={() => scrollToId("documents")}
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-background/45 bg-background/8 px-6 py-3 text-sm font-bold text-background transition-colors hover:bg-background/14 sm:min-h-14 sm:px-8"
                >
                  Надіслати документи
                </button>
              </div>
            </div>
          </div>
        </section>

        <AnchorNav />

        <PageSection id="about" className="pt-10 sm:pt-16">
          <ExpandableIntroSection
            title="Що таке кардіологічна реабілітація"
            shortDescription="Це процес під медичним наглядом, який допомагає поступово адаптувати серцево-судинну систему до навантажень і повернути людині більше впевненості у щоденній активності."
            expandedContent={custom.introExpandedBody}
            image={data.introImage}
            imageAlt="Лікар переглядає результати кардіологічного обстеження"
            isExpanded={introExpanded}
            onToggle={() => setIntroExpanded((value) => !value)}
          />
        </PageSection>

        <PageSection className="py-10 sm:py-16">
          <SectionHeading
            title="Коротко про програму"
            text="Чотири орієнтири, які допомагають швидко зрозуміти, для кого створена програма і як почати."
          />
          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {SUMMARY_CARDS.map((card, index) => (
              <article
                key={card.title}
                className="rounded-2xl border border-border bg-white p-5 shadow-sm"
              >
                <span className="text-xs font-bold tracking-[0.18em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/72">{card.text}</p>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection className="pb-10 sm:pb-16">
          <TimingSection />
        </PageSection>

        <PageSection id="for-whom" className="pb-10 sm:pb-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              title="Кому підходить кардіологічна реабілітація"
              text="Основні напрями, з якими може працювати команда після попереднього ознайомлення з документами та оцінки стану."
            />
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {conditionCards.map((card) => (
                  <ConditionCard key={card.title} card={card} />
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollToId("programs")}
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/30 px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/8"
              >
                Переглянути всі напрями
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </PageSection>

        <section id="process" className="scroll-mt-24 bg-navy-deep py-14 text-background sm:py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  Як проходить
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Як проходить відновлення
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-background/78 sm:text-base">
                  Процес не рухається “за календарем”. Навантаження змінюють після оцінки
                  самопочуття, реакції організму та медичних рекомендацій.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {PROCESS_STEPS.map((step, index) => (
                  <article
                    key={step.title}
                    className="relative overflow-hidden rounded-2xl border border-background/12 bg-background/8 p-5"
                  >
                    <span className="text-4xl font-extrabold text-brand-green/75">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-background/76">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PageSection id="programs" className="py-12 sm:py-20">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              title="Програми та вартість"
              text="Картки нижче показують основні напрями. Остаточний склад програми залежить від стану пацієнта, документів і рекомендацій лікаря."
            />
            <button
              type="button"
              onClick={() => scrollToId("documents")}
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Надіслати документи
              <ArrowRight className="size-4" />
            </button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programCards.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
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
          <SeoBlock />
        </PageSection>
      </main>

      <SiteFooter />
    </div>
  );
}

function AnchorNav() {
  return (
    <div className="border-b border-border bg-white">
      <div className="mx-auto max-w-[1600px] overflow-x-auto px-4 sm:px-6 lg:px-10">
        <nav aria-label="Розділи сторінки" className="flex min-w-max gap-2 py-3 sm:gap-3">
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
  return (
    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-soft p-5 shadow-sm sm:p-8 lg:p-10">
      <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-4xl">{title}</h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-6 text-base leading-relaxed text-navy/82 sm:text-lg">
            {shortDescription}
          </p>
          {!isExpanded && expandedContent && (
            <button
              type="button"
              onClick={onToggle}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              aria-expanded={false}
              aria-controls="cardio-intro-expanded"
            >
              Детальніше
              <ChevronDown className="size-4" />
            </button>
          )}
        </div>
        <img
          src={image}
          alt={imageAlt}
          width={1100}
          height={760}
          loading="lazy"
          className="h-64 w-full rounded-xl object-cover shadow-sm sm:h-80 lg:h-[380px]"
        />
      </div>

      {expandedContent && (
        <div
          id="cardio-intro-expanded"
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
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/25 px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/8"
              aria-expanded={true}
              aria-controls="cardio-intro-expanded"
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

function TimingSection() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-8 lg:p-10">
      <SectionHeading
        title="Коли варто розпочати програму"
        text="Старт залежить від стабільності стану, медичних документів і дозволу лікаря. Тут зібрано короткий орієнтир без обіцянок гарантованого результату."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:divide-x lg:divide-border">
        {TIMING_COLUMNS.map((column) => (
          <div
            key={column.title}
            className={cn(
              "lg:px-7 first:lg:pl-0 last:lg:pr-0",
              column.tone === "warning" &&
                "rounded-xl border border-destructive/20 bg-destructive/5 p-5 lg:border-0 lg:bg-transparent lg:p-0",
            )}
          >
            <h3
              className={cn(
                "text-lg font-bold text-navy",
                column.tone === "warning" && "text-destructive",
              )}
            >
              {column.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {column.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy/76">
                  <span
                    className={cn(
                      "mt-2 size-1.5 shrink-0 rounded-full bg-primary",
                      column.tone === "warning" && "bg-destructive",
                    )}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConditionCard({ card }: { card: ServiceMethodCard }) {
  return (
    <article className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-lg font-bold leading-snug text-navy">{card.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy/72">{card.text}</p>
    </article>
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
  const duration = program.duration === "За програмою" ? "Індивідуально" : program.duration;

  return (
    <article className="flex min-h-[260px] flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold leading-snug text-navy">{program.title}</h3>
      {program.shortDescription && (
        <p className="mt-3 text-sm leading-relaxed text-navy/72">{program.shortDescription}</p>
      )}
      <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5 text-sm">
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Формат
          </dt>
          <dd className="mt-1 font-semibold text-navy">Стаціонарно або амбулаторно</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Тривалість
          </dt>
          <dd className="mt-1 font-semibold text-navy">{duration || "Індивідуально"}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Ціна
          </dt>
          <dd className="mt-1 text-lg font-extrabold text-primary">
            {program.priceLabel || "Уточнюється"}
          </dd>
        </div>
      </dl>
      <AppLink
        to={program.route}
        className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Детальніше
        <ArrowRight className="size-4" />
      </AppLink>
    </article>
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
    <section className="bg-soft-blue py-12 sm:py-20">
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
              className="flex size-11 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:bg-soft"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Наступна послуга"
              onClick={() => scrollToIndex(Math.min(OTHER_SERVICES.length - 1, active + 1))}
              className="flex size-11 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:bg-soft"
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
              className="grid w-[84%] shrink-0 snap-start overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm sm:w-[54%] lg:w-[37%] xl:w-[30%]"
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
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-navy/72">
                  {service.text}
                </p>
                <AppLink
                  to={service.to}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-primary/25 px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/8"
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
    <section id="documents" className="scroll-mt-24 py-12 sm:py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <SectionHeading
              title="Надішліть документи для попереднього розгляду"
              text="Перед стартом команді важливо побачити виписки, результати обстежень і рекомендації лікаря. Це не замінює консультацію, але допомагає підготувати наступний крок."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {DOCUMENT_STEPS.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">{step}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy/68">
                      {getDocumentStepText(index)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            className="rounded-xl border border-border bg-soft p-5 sm:p-6"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <h3 className="text-xl font-bold text-navy">Попередній розгляд</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">
              Додайте наявні документи та контактні дані. Адміністратор зв’яжеться з вами після
              попереднього розгляду.
            </p>

            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="mt-5 flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-primary/35 bg-white px-4 py-7 text-center transition-colors hover:border-primary hover:bg-soft-blue/50"
            >
              <UploadCloud className="size-9 text-primary" />
              <span className="mt-3 text-sm font-bold text-navy">Обрати PDF, JPG або PNG</span>
              <span className="mt-1 text-xs text-navy/58">до 10 МБ кожен файл</span>
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
              <ul className="mt-4 space-y-2">
                {files.map((file) => (
                  <li
                    key={file}
                    className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-sm text-navy/78"
                  >
                    <FileText className="size-4 shrink-0 text-primary" />
                    <span className="truncate">{file}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Ваше ім’я"
                className="min-h-12 rounded-lg border border-border bg-white px-4 text-sm font-medium text-navy outline-none transition-colors focus:border-primary"
              />
              <input
                type="tel"
                required
                placeholder="Номер телефону"
                className="min-h-12 rounded-lg border border-border bg-white px-4 text-sm font-medium text-navy outline-none transition-colors focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Надіслати документи
              <Send className="size-4" />
            </button>

            {submitted && (
              <p className="mt-4 rounded-lg border border-brand-green/25 bg-brand-green/10 px-4 py-3 text-sm font-semibold text-navy">
                Дякуємо. Адміністратор зв’яжеться з вами після попереднього розгляду.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function SeoBlock() {
  return (
    <div className="rounded-2xl bg-soft px-5 py-8 sm:px-8 lg:px-10">
      <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
        Кардіологічна реабілітація в Буковелі
      </h2>
      <div className="mt-4 grid gap-4 text-sm leading-relaxed text-navy/72 md:grid-cols-2">
        <p>
          ОСНОВА Реабілітація у Буковелі працює з пацієнтами після серцево-судинних захворювань,
          операцій і втручань. Програма формується індивідуально після аналізу медичних документів,
          оцінки стану та визначення допустимого навантаження.
        </p>
        <p>
          Відновлення може включати консультації, контрольовані заняття, функціональну оцінку,
          рекомендації щодо активності та подальшого самоконтролю. Остаточний план визначає команда
          фахівців з урахуванням рекомендацій лікаря.
        </p>
      </div>
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

function getDocumentStepText(index: number) {
  switch (index) {
    case 0:
      return "Залиште контактні дані та короткий запит.";
    case 1:
      return "Додайте виписки, висновки або результати обстежень.";
    case 2:
      return "Команда перевірить, чи достатньо інформації для наступного кроку.";
    default:
      return "Адміністратор уточнить деталі та запропонує зручний формат.";
  }
}
