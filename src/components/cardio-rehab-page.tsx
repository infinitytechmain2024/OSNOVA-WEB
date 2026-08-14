import * as React from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  Send,
  UploadCloud,
  CheckCircle2,
  Heart,
  AlertTriangle,
} from "lucide-react";
import { AppLink } from "@/components/app-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumbs, FAQAccordion, WhenToPassCardioRehabBlock } from "@/components/blocks";
import { getServicePageData } from "@/data/service-content-generator";
import { useConsultationModal } from "@/components/consultation-form";
import type { FAQItem, ServiceMethodCard, SiteNode } from "@/data/types";
import { cn } from "@/lib/utils";
import checkupImg from "@/assets/service-checkup.jpg";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import rehabImg from "@/assets/service-rehab.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import cardioHeart3dImg from "@/assets/cardio-heart-3d.jpg";
import osnovaLogo3dImg from "@/assets/osnova-logo-3d.jpg";

const ANCHORS = [
  { href: "#about", label: "Про програму" },
  { href: "#when-to-pass", label: "Коли варто пройти" },
  { href: "#for-whom", label: "Кому підходить" },
  { href: "#process", label: "Як проходить" },
  { href: "#programs", label: "Вартість" },
  { href: "#documents", label: "Документи" },
  { href: "#faq", label: "FAQ" },
];

const TIMING_COLUMNS = [
  {
    title: "Коли рекомендовано",
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    items: [
      "Після інфаркту міокарда",
      "Після стентування коронарних артерій",
      "Після операцій на серці (АКШ, клапани)",
      "При хронічній серцевій недостатності",
      "При зниженій переносимості навантажень",
    ],
  },
  {
    title: "Яких результатів очікувати",
    icon: Heart,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    items: [
      "Підвищення витривалості та сили",
      "Зменшення задишки та втоми",
      "Стабілізація артеріального тиску",
      "Покращення якості життя та настрою",
      "Безпечне повернення до активності",
    ],
  },
  {
    title: "Коли варто відкласти",
    icon: AlertTriangle,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    tone: "warning",
    items: [
      "Гострі стани, декомпенсація захворювань, деякі протипоказання.",
      "Рішення приймає лікар після оцінки ваших документів.",
    ],
  },
];

const PROCESS_STEPS = [
  {
    title: "Оцінка стану та документів",
    text: "Лікар вивчає історію хвороби, результати обстежень і рівень активності, щоб вибрати безпечну програму відновлення.",
  },
  {
    title: "Індивідуальний план реабілітації",
    text: "План складають індивідуально: фізичні навантаження, контроль факторів ризику та навчання здоровим звичкам.",
  },
  {
    title: "Тренування під контролем",
    text: "Пацієнт рухається поступово, а навантаження коригують відповідно до самопочуття, тиску та реакції серця.",
  },
  {
    title: "Психологічна підтримка та контроль прогресу",
    text: "Фахівці допомагають впоратися з тривогою, страхом та стресом, а також оцінюють динаміку покращення.",
  },
];

const DOCUMENT_STEPS = ["Заявка", "Документи", "Попередній розгляд", "Зв’язок адміністратора"];

const CONDITION_IMAGES = [cpetImg, rehabImg, ecgImg, checkupImg, sportsImg];

const CARDIO_CONDITIONS = [
  {
    title: "Реабілітація після інфаркту міокарда",
    text: "Після інфаркту програма допомагає серцю відновити роботу та поступово повернути людині активність без надмірного ризику.",
  },
  {
    title: "Реабілітація після стентування коронарних артерій",
    text: "Після стентування важливо закріпити звички, які підтримують судини, і знизити ризик повторного звуження артерій.",
  },
  {
    title: "Реабілітація після аортокоронарного шунтування",
    text: "Після шунтування відновлення проходить поетапно: від дихальної гімнастики до вправ на силу та витривалість.",
  },
  {
    title: "Реабілітація при хронічній серцевій недостатності",
    text: "Програма допомагає стабілізувати самопочуття, збільшити переносимість навантажень і навчити безпечному ритму життя.",
  },
  {
    title: "Реабілітація після операцій на клапанах серця",
    text: "Після клапанних втручань важливо поступово відновлювати фізичну активність і контролювати фактори ризику.",
  },
];

const CARDIO_PROGRAMS = [
  {
    title: "Базовий пакет",
    shortDescription: "Коротка програма з акцентом на фізичну реабілітацію та базове навчання правилам життя після серцевої події.",
    duration: "7–10 днів",
    priceLabel: "Уточнюється",
  },
  {
    title: "Стандартний пакет",
    shortDescription: "Комплексна програма, яка включає тренування, навчання та психологічну підтримку.",
    duration: "2–3 тижні",
    priceLabel: "Уточнюється",
    isPopular: true,
  },
  {
    title: "Розширений пакет",
    shortDescription: "Поглиблена програма з додатковими методами відновлення та більш інтенсивним супроводом фахівців.",
    duration: "3–4 тижні",
    priceLabel: "Уточнюється",
  },
  {
    title: "Індивідуальний пакет",
    shortDescription: "Програма, яку повністю адаптують під конкретний діагноз, супутні захворювання та побажання пацієнта.",
    duration: "Індивідуально",
    priceLabel: "Уточнюється",
  },
];

const OTHER_SERVICES = [
  {
    title: "Кардіологічна діагностика",
    text: "Сучасні методи обстеження серця та судин допомагають точно оцінити стан перед початком реабілітації та відстежувати зміни в процесі програми.",
    to: "/diagnostyka/kardiodiahnostyka",
    image: ecgImg,
  },
  {
    title: "Кардіологічний чек-ап",
    text: "Комплексне обстеження, яке дозволяє виявити приховані ризики та вчасно скоригувати лікування і профілактику.",
    to: "/check-up/kardiolohichnyi",
    image: checkupImg,
  },
  {
    title: "Виїзна реабілітація",
    text: "Можливість продовжити програму вдома або в іншому зручному місці під дистанційним супроводом лікарів і реабілітологів.",
    to: "/vyizna-reabilitatsiia",
    image: rehabImg,
  },
  {
    title: "Лікувальний басейн",
    text: "Заняття у воді зменшують навантаження на суглоби та дозволяють безпечно тренувати серцево-судинну систему навіть при обмеженій рухливості.",
    to: "/vidnovlennia/likuvalnyi-basein",
    image: sportsImg,
  },
  {
    title: "Функціональне тестування",
    text: "Оцінка фізичної працездатності та реакції серця на навантаження допомагає точно підібрати інтенсивність програми і контролювати прогрес.",
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

  const allConditionCards = CARDIO_CONDITIONS;
  const visibleConditionCards = showAllConditions
    ? allConditionCards
    : allConditionCards.slice(0, 3);
  const programCards = CARDIO_PROGRAMS.map((program, index) => ({
    id: `cardio-program-${index}`,
    route: node.children?.[index]?.route || node.route,
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
                Профілактика • діагностика • лікування • відновлення • навчання • супровід
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => openModal("Записатися на консультацію")}
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-green px-6 py-3 text-sm font-bold text-brand-green-foreground shadow-md transition-colors hover:bg-brand-green/90 sm:min-h-14 sm:px-8"
                >
                  Записатися на консультацію
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

        <PageSection id="about" className="pt-10 sm:pt-16">
          <ExpandableIntroSection
            title="Що таке кардіологічна реабілітація"
            shortDescription="Кардіологічна реабілітація — це структурована програма відновлення після серцевих подій і операцій. Вона поєднує контрольовані фізичні навантаження, навчання пацієнта правилам життя з хворобою серця та психологічну підтримку. Головна мета програми — знизити ризик повторних ускладнень, підвищити витривалість і допомогти людині безпечно повернутися до звичайного ритму життя."
            expandedContent="Програму складають індивідуально. Лікар враховує діагноз, результати обстежень і поточний рівень фізичних можливостей. До програми входять дозовані тренування, робота з факторами ризику (тиск, холестерин, вага, куріння), навчання правильному харчуванню та прийому ліків, а також допомога в подоланні тривоги, пов’язаної із захворюванням."
            image={data.introImage}
            imageAlt="Лікар переглядає результати кардіологічного обстеження"
            isExpanded={introExpanded}
            onToggle={() => setIntroExpanded((value) => !value)}
          />
        </PageSection>

        <PageSection id="when-to-pass" className="py-10 sm:py-16">
          <WhenToPassCardioRehabBlock 
            title="Коли варто пройти кардіологічну реабілітацію"
            description="Реабілітацію рекомендують після гострих серцевих подій, операцій на серці та судинах, а також при хронічних захворюваннях, коли потрібно підвищити витривалість і зменшити ймовірність нових ускладнень."
            calloutTitle="Найчастіше програму призначають у таких випадках:"
            items={[
              "після перенесеного інфаркту міокарда;",
              "після стентування коронарних артерій;",
              "після аортокоронарного шунтування;",
              "після операцій на клапанах серця;",
              "при хронічній серцевій недостатності;",
              "при стабільній стенокардії;",
              "після імплантації кардіостимулятора або кардіовертера-дефібрилятора."
            ]}
            href="#for-whom" 
          />
        </PageSection>

        <PageSection className="pb-10 sm:pb-16">
          <TimingSection />
        </PageSection>

        <section id="for-whom" className="scroll-mt-24 bg-soft-blue py-12 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <div className="text-center">
              <h2 className="mx-auto max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                Які напрямки реабілітації та лікування можна пройти в «Основа»?
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-navy/76">
                Основні напрями, з якими може працювати команда після попереднього ознайомлення з документами та оцінки стану.
              </p>
            </div>
            <div className="mt-10 grid justify-center gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {visibleConditionCards.map((card, index) => (
                <ConditionCard
                  key={card.title}
                  card={card}
                  image={CONDITION_IMAGES[index % CONDITION_IMAGES.length]}
                />
              ))}
            </div>
            {allConditionCards.length > 3 && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllConditions((value) => !value)}
                  className="rounded-full border-2 border-primary/20 px-10 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
                >
                  {showAllConditions ? "Згорнути" : "Більше"}
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="process" className="scroll-mt-24 bg-navy-deep py-14 text-background sm:py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                Як проходить
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                Як проходить відновлення?
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-background/78 sm:text-base">
                Процес не рухається “за календарем”. Навантаження змінюють після оцінки самопочуття,
                реакції організму та медичних рекомендацій.
              </p>
            </div>

            <div className="relative mt-9 grid gap-4 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, index) => (
                <article
                  key={step.title}
                  className="relative rounded-2xl border border-background/12 bg-background/8 p-5 lg:min-h-[250px]"
                >
                  {index < PROCESS_STEPS.length - 1 && (
                    <span className="absolute left-[calc(100%-10px)] top-10 hidden h-px w-8 bg-background/24 lg:block" />
                  )}
                  <span className="flex size-12 items-center justify-center rounded-full bg-brand-green text-lg font-extrabold text-brand-green-foreground">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/76">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="scroll-mt-24 bg-soft-blue py-14 sm:py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div>
              <h2 className="max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                Програми та вартість
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy/70">
                Точну вартість і детальний склад кожного пакету повідомляє адміністратор після попереднього розгляду документів і консультації лікаря.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,1fr))_0.82fr]">
              {programCards.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
              <MilitaryInfoCard />
            </div>
          </div>
        </section>

        <OtherServicesSlider />

        <DocumentsReviewSection />

        {faqItems.length > 0 && (
          <PageSection id="faq" className="py-12 sm:py-20">
            <SectionHeading
              title="Питання та відповіді"
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
      <div className="mx-auto flex max-w-[1600px] items-center gap-4 overflow-x-auto px-4 py-3 sm:px-6 lg:px-10">
        <p className="shrink-0 text-sm font-bold text-navy/70">Що вас цікавить?</p>
        <nav aria-label="Розділи сторінки" className="flex min-w-max gap-2 sm:gap-3">
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
  includeTitle,
  includeItems,
  isExpanded,
  onToggle,
}: {
  title: string;
  shortDescription: string;
  expandedContent?: string;
  image: string;
  imageAlt: string;
  includeTitle?: string;
  includeItems?: string[];
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
          {includeItems && includeItems.length > 0 && (
            <div className="mt-8">
              {includeTitle && (
                <h3 className="text-lg font-extrabold leading-snug text-navy sm:text-xl">
                  {includeTitle}
                </h3>
              )}
              <ul className="mt-4 space-y-3">
                {includeItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy/78">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
          className="h-64 w-full rounded-xl object-contain bg-white/60 shadow-sm sm:h-80 lg:h-[380px]"
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
    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
      <div className="bg-soft-blue p-5 sm:p-8 lg:p-10">
        <div className="flex items-start justify-between gap-6">
          <SectionHeading
            title="Коли варто розпочати програму"
            text="Старт залежить від стабільності стану, медичних документів і дозволу лікаря. Нижче — короткий орієнтир, який не замінює консультацію."
          />
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <img
              src={osnovaLogo3dImg}
              alt="Логотип клініки Основа"
              className="size-20 rounded-xl object-cover shadow-sm"
            />
            <DecorativeHeart />
          </div>
        </div>
      </div>
      <div className="grid gap-0 lg:grid-cols-3">
        {TIMING_COLUMNS.map((column) => {
          const Icon = column.icon;
          return (
            <div
              key={column.title}
              className="border-t border-blue-100 p-5 sm:p-7 lg:border-l lg:border-t-0 first:lg:border-l-0"
            >
              <div className="flex items-start gap-4">
                <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-full", column.iconBg)}>
                  <Icon className={cn("size-5", column.iconColor)} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy">{column.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {column.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy/76">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DecorativeHeart() {
  return (
    <svg
      viewBox="0 0 280 220"
      aria-label="Декоративне серце"
      className="h-24 w-32 text-sky-400/90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44 79C44 38 84 34 104 48C123 33 165 37 182 60C197 81 196 101 176 118C156 136 131 147 108 170C84 147 60 136 40 118C20 101 19 81 44 79Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M146 75C173 52 197 42 221 55C245 68 251 101 237 121C223 141 203 150 175 165"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M33 98C42 97 50 102 58 112C69 126 80 132 96 136"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConditionCard({ card, image }: { card: { title: string; text: string; expandedText?: string }; image: string }) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative h-[210px] w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={card.title}
          loading="lazy"
          width={900}
          height={620}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6 md:p-7">
        <div>
          <h3 className="mb-3 text-xl font-bold leading-snug text-navy">{card.title}</h3>
          <p className="mb-6 line-clamp-3 text-sm font-normal leading-relaxed text-slate-600">{card.text}</p>
        </div>
        <div>
          <a
            href="#documents"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("documents")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            Детальніше <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
}


function ExpandableCardText({ expandedText }: { expandedText: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div
        className={cn(
          "mt-4 overflow-hidden whitespace-pre-line text-sm leading-relaxed text-navy/70 transition-all duration-300",
          open ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {expandedText}
      </div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
        {open ? "Згорнути" : "Детальніше"}
        <ChevronDown
          className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
    </>
  );
}

function ProgramCard({
  program,
}: {
  program: Pick<
    SiteNode,
    "id" | "title" | "shortDescription" | "duration" | "priceLabel" | "route"
  > & {
    isPopular?: boolean;
  };
}) {
  const duration = program.duration === "За програмою" ? "Індивідуально" : program.duration;
  const isPopular = Boolean(program.isPopular);

  return (
    <article
      className={cn(
        "relative flex min-h-[320px] flex-col rounded-2xl border p-6 shadow-sm",
        isPopular
          ? "border-primary bg-primary text-white shadow-primary/20"
          : "border-blue-100 bg-white",
      )}
    >
      {isPopular && (
        <span className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-bold text-primary shadow-sm">
          Популярна
        </span>
      )}
      <h3
        className={cn(
          "text-xl font-bold leading-snug",
          isPopular ? "pr-24 text-white" : "text-navy",
        )}
      >
        {program.title}
      </h3>
      {program.shortDescription && (
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed",
            isPopular ? "text-white/82" : "text-navy/72",
          )}
        >
          {program.shortDescription}
        </p>
      )}
      <dl
        className={cn(
          "mt-6 space-y-4 border-t pt-5 text-sm",
          isPopular ? "border-white/22" : "border-border",
        )}
      >
        <div>
          <dt
            className={cn(
              "text-xs font-bold uppercase tracking-[0.14em]",
              isPopular ? "text-white/70" : "text-muted-foreground",
            )}
          >
            Тривалість
          </dt>
          <dd className={cn("mt-1 font-semibold", isPopular ? "text-white" : "text-navy")}>
            {duration || "Індивідуально"}
          </dd>
        </div>
        <div>
          <dt
            className={cn(
              "text-xs font-bold uppercase tracking-[0.14em]",
              isPopular ? "text-white/70" : "text-muted-foreground",
            )}
          >
            Ціна
          </dt>
          <dd
            className={cn("mt-1 text-lg font-extrabold", isPopular ? "text-white" : "text-primary")}
          >
            {program.priceLabel || "Уточнюється"}
          </dd>
        </div>
      </dl>
      <div className="mt-auto pt-8">
        <AppLink
          to={program.route}
          className={cn(
            "inline-flex w-fit items-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition-colors",
            isPopular
              ? "bg-white text-primary hover:bg-white/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90",
          )}
        >
          Детальніше
          <ArrowRight className="size-4" />
        </AppLink>
      </div>
    </article>
  );
}

function MilitaryInfoCard() {
  return (
    <aside className="flex min-h-[320px] flex-col justify-center rounded-2xl border border-brand-green/25 bg-brand-green/10 p-6 shadow-sm">
      <h3 className="text-lg font-extrabold text-navy">Для військових</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy/72">
        Діють спеціальні умови та знижки на програми відновлення.
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

        {/* Dot indicators */}
        <div className="mt-6 flex items-center justify-center gap-2.5">
          {OTHER_SERVICES.map((service, index) => (
            <button
              key={service.title}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={cn(
                "size-2.5 rounded-full transition-all duration-300",
                active === index ? "bg-primary scale-110" : "bg-slate-300 hover:bg-slate-400",
              )}
              aria-label={`Перейти до послуги ${index + 1}`}
            />
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
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <SectionHeading
            title="Надішліть документи для попереднього розгляду"
            text="Перед стартом команді важливо побачити виписки, результати обстежень і рекомендації лікаря. Це не замінює консультацію, але допомагає підготувати наступний крок."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {DOCUMENT_STEPS.map((step, index) => (
              <div key={step} className="rounded-xl border border-blue-100 bg-soft p-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-bold text-navy">{step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/68">
                  {getDocumentStepText(index)}
                </p>
              </div>
            ))}
          </div>

          <form
            className="mt-8 rounded-xl border border-border bg-soft p-5 sm:p-6"
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
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white px-5 py-8 shadow-[0_24px_70px_-38px_rgba(30,64,175,0.3)] sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-14 xl:py-14">
      <div className="pointer-events-none absolute -left-24 -top-28 size-64 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 size-72 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(500px,0.82fr)] lg:gap-12 xl:gap-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-soft-blue px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary sm:text-xs">
            <span className="size-1.5 rounded-full bg-brand-green" />
            ВІДНОВЛЕННЯ В БУКОВЕЛІ
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Кардіологічна реабілітація
          </h2>

          <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green" />

          <div className="mt-6 text-sm leading-relaxed text-navy/72 sm:text-base sm:leading-7">
            <h3 className="font-bold text-navy mt-4 mb-2">Чому відновлення після серцевих втручань потребує контролю</h3>
            <p className="mb-4">
              Після операцій на серці або перенесеного інфаркту міокарда організм ще певний час не працює у звичному режимі. Серцево-судинна система не готова до звичного ритму життя, тому будь-яка активність без контролю може створити додаткове навантаження на серце. Саме тому період відновлення має проходити під наглядом фахівців із чітким розумінням допустимого рівня навантаження.
            </p>
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="group inline-flex min-h-12 cursor-pointer items-center gap-2.5 rounded-xl bg-navy px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_-16px_rgba(15,34,68,0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_18px_36px_-16px_rgba(43,93,190,0.75)]"
              aria-expanded={expanded}
            >
              <span>{expanded ? "Згорнути" : "Детальніше"}</span>
              <ArrowRight
                className={cn(
                  "size-4 transition-transform duration-300 group-hover:translate-x-0.5",
                  expanded && "rotate-90 group-hover:translate-x-0",
                )}
              />
            </button>
          </div>

          {expanded && (
            <div className="mt-6 border-t border-sky-100 pt-5 text-sm leading-relaxed text-navy/72 sm:text-base sm:leading-7 animate-in fade-in slide-in-from-top-2 duration-300">
              <p className="mb-4">
                Ключове завдання кардіореабілітації — не просто відновити фізичну активність, а зробити це безпечно. Навантаження підбирають індивідуально з урахуванням стану пацієнта, показників серцевого ритму, артеріального тиску та реакції організму на вправи.
              </p>
              <p className="mb-4">Самостійні тренування після серцевих втручань можуть бути небезпечними:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>надмірна інтенсивність або різкі зміни активності здатні спровокувати порушення ритму чи повторні серцеві проблеми;</li>
                <li>повна відмова від руху уповільнює кровообіг і знижує функціональні можливості організму.</li>
              </ul>
              <p className="mb-4">
                Контрольоване відновлення дозволяє досягти балансу між безпекою і прогресом. Пацієнт поступово повертається до активного життя, зменшується ризик повторних ускладнень, покращується загальне самопочуття та якість життя.
              </p>
              <h3 className="font-bold text-navy mt-4 mb-2">Де можливо пройти реабілітацію після операції на серці в Україні</h3>
              <p className="mb-4">
                Після кардіологічних втручань пацієнти зазвичай обирають між двома форматами відновлення — санаторним або спеціалізованим медичним центром. Вибір здається простим, але саме тут часто виникає помилка: не кожен варіант однаково підходить для відновлення серця.
              </p>
              <p className="mb-4">
                Санаторії здебільшого орієнтовані на загальне зміцнення організму. Це комфортний формат із базовою фізичною активністю, але без глибокої кардіологічної спеціалізації. У багатьох випадках програми не враховують конкретний тип втручання, стан серця після операції та індивідуальні ризики. Як результат — процес відновлення проходить без чіткої медичної логіки та контролю.
              </p>
              <p className="mb-4">
                Спеціалізовані центри, наприклад Центр Основа, працюють інакше. Відновлення будується навколо конкретного стану серцево-судинної системи. Пацієнт не залишається сам на сам зі своїми відчуттями — кожен етап проходить під наглядом, з урахуванням реакції організму. Саме такий підхід дозволяє уникнути помилок і скоротити шлях до стабільного результату.
              </p>

              <h3 className="font-bold text-navy mt-6 mb-2">Відмінність спеціалізованої кардіореабілітації від санаторного підходу</h3>
              <p className="mb-4">
                Головна відмінність полягає у рівні відповідальності за стан пацієнта. У санаторному форматі навантаження зазвичай мають загальний характер і не прив’язані до конкретних показників роботи серця. Пацієнт рухається «за самопочуттям», але після операцій цього недостатньо — організм не завжди дає чіткі сигнали про перевантаження.
              </p>
              <p className="mb-4">
                У спеціалізованому центрі реабілітації кардіологічних хворих програму розробляють так, що кожне навантаження має чіткі межі. Ці межі визначаються не інтуїтивно, а на основі контролю стану серцево-судинної системи. Відстежуються ключові показники, і саме вони вирішують, що безпечно, а що — ні. Замість підходу «спробувати і подивитись» пацієнт рухається за контрольованою логікою. Постійний контроль дозволяє поступово підвищувати навантаження без ризику для серця і уникати ситуацій, коли відновлення може обернутися погіршенням стану.
              </p>

              <h3 className="font-bold text-navy mt-6 mb-2">Значення психологічної підтримки під час відновлення</h3>
              <p className="mb-4">
                Психологічна реабілітація після операції на серці є невід’ємною частиною повноцінного відновлення. Кардіологічні хвороби часто супроводжуються тривогою, депресією та страхом рецидиву. Ці стани можуть гальмувати фізичне оздоровлення, знижувати мотивацію виконувати рекомендації лікарів і впливати на якість сну та загальний настрій.
              </p>
              <p className="mb-4">У Центрі Основа психологічній підтримці приділяють значну увагу. Вона допомагає пацієнтам:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>сформувати стійкість до стресу;</li>
                <li>адаптуватися до нового способу життя;</li>
                <li>зміцнити психоемоційний стан.</li>
              </ul>

              <h3 className="font-bold text-navy mt-6 mb-2">Фактори, які впливають на якість відновлення</h3>
              <p className="mb-4">На результати кардіореабілітації значною мірою впливають:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>загальний стан здоров’я пацієнта;</li>
                <li>наявність супутніх хронічних захворювань;</li>
                <li>рівень фізичної активності до операції.</li>
              </ul>
              <p className="mb-4">
                Люди, які раніше підтримували помірну форму, як правило, швидше відновлюються і легше адаптуються до реабілітаційних навантажень. Водночас навіть за низького рівня підготовки фізична реабілітація під медичним контролем залишається безпечною і результативною.
              </p>
              <p className="mb-4">
                Важливо також враховувати особливості харчування, регулярність медичних оглядів і індивідуальний підхід. Центр Основа пропонує підтримку, яка враховує всі ці фактори і забезпечує не лише фізичне відновлення, а й стабілізацію тиску та серцевої діяльності.
              </p>

              <h3 className="font-bold text-navy mt-6 mb-2">Відповіді на часті питання</h3>
              <p className="mb-2"><strong>Чи обов’язкова кардіореабілітація після операції?</strong></p>
              <p className="mb-4">Кардіореабілітація не є формальною вимогою, але без неї ризик ускладнень і рецидивів збільшується, а якість життя знижується.</p>
              <p className="mb-2"><strong>Чим відрізняється кардіологічна реабілітація від звичайного санаторного лікування?</strong></p>
              <p className="mb-4">Кардіологічна реабілітація передбачає постійний медичний контроль та індивідуальний підбір навантажень. Це принципово відрізняється від стандартних підходів більшості санаторіїв.</p>
              <p className="mb-2"><strong>Скільки часу триває реабілітація після операцій на серці?</strong></p>
              <p className="mb-4">Тривалість залежить від стану пацієнта. Зазвичай це кілька тижнів із подальшим довготривалим контролем.</p>
            </div>
          )}
        </div>

        <div className="flex w-full items-center justify-center lg:justify-end lg:self-start mt-6 lg:mt-0">
          <figure className="group relative w-full max-w-[520px] aspect-square overflow-hidden rounded-[1.75rem] border border-sky-100 bg-[#eaf5ff] shadow-[0_20px_50px_-30px_rgba(30,64,175,0.55)]">
            <img
              src={cardioHeart3dImg}
              alt="Стилізована 3D-модель серця"
              loading="lazy"
              width={1024}
              height={1536}
              className="absolute inset-0 size-full object-contain transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-white/80 px-5 py-4 backdrop-blur-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                Серце під контролем команди
              </p>
            </div>
          </figure>
        </div>
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
      return "Залиште заявку на сайті або зателефонуйте. Це займає лише кілька хвилин і не зобов’язує до подальших дій.";
    case 1:
      return "Підготуйте виписки з лікарень, результати останніх обстежень і рекомендації кардіолога. Чим повніша інформація, тим точніше ми зможемо оцінити, яка програма вам підходить.";
    case 2:
      return "Лікарі центру вивчають надані матеріали і визначають, чи можна розпочинати реабілітацію, а також які додаткові обстеження можуть знадобитися.";
    default:
      return "Після розгляду з вами зв’яжеться адміністратор. Він відповість на всі запитання, запропонує зручний час і допоможе з організацією приїзду.";
  }
}
