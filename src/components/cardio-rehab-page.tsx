import * as React from "react";
import {
  Ambulance,
  ArrowRight,
  ClipboardCheck,
  ClipboardPlus,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  Send,
  UploadCloud,
  CheckCircle2,
  HandHeart,
  Heart,
  HeartPulse,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import { AppLink } from "@/components/app-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumbs, FAQAccordion } from "@/components/blocks";
import { getServicePageData } from "@/data/service-content-generator";
import { useConsultationModal } from "@/components/consultation-form";
import { FAQConsultationCTA } from "@/components/faq-consultation-cta";
import type { FAQItem, ServiceMethodCard, SiteNode } from "@/data/types";
import { cn } from "@/lib/utils";
import { CARDIO_REHAB_PROGRAMS } from "@/data/cardio-rehab-pricing";
import checkupImg from "@/assets/service-checkup.jpg";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import rehabImg from "@/assets/service-rehab.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import cardioHeart3dImg from "@/assets/cardio-heart-3d.jpg";
import osnovaLogo3dImg from "@/assets/osnova-logo-3d.jpg";
import medicalAssessmentImg from "@/assets/about/medical-assessment.jpg";
import { getNodeById } from "@/lib/tree";

const ANCHORS = [
  { href: "#about", label: "Про програму" },
  { href: "#for-whom", label: "Кому підходить" },
  { href: "#process", label: "Як проходить" },
  { href: "#programs", label: "Вартість" },
  { href: "#documents", label: "Документи" },
  { href: "#faq", label: "FAQ" },
];

const TIMING_COLUMNS = [
  {
    title: "Коли рекомендовано",
    icon: Heart,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    bulletColor: "bg-primary",
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
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    bulletColor: "bg-emerald-500",
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
    bulletColor: "bg-amber-500",
    items: [
      "Гостра інфекція або підвищена температура",
      "Нестабільний тиск чи виражена аритмія",
      "Загострення хронічного захворювання",
      "Старт програми визначає лікар після оцінки стану",
    ],
  },
];

const EMERGENCY_CALL_ITEMS = [
  "раптовий або інтенсивний біль у грудях",
  "виражена задишка або утруднене дихання",
  "втрата або порушення свідомості",
  "раптове порушення мовлення, зору або слабкість у кінцівках",
  "інші ознаки різкого погіршення стану",
];

const PROCESS_STEPS = [
  {
    title: "Оцінка стану та документів",
    text: "Ми комплексно оцінюємо ваш стан здоров’я, аналізуємо медичні документи та визначаємо ключові потреби для ефективної реабілітації.",
    icon: ClipboardPlus,
  },
  {
    title: "Індивідуальний план реабілітації",
    text: "Створюємо персональний план з урахуванням ваших цілей, потреб, стану здоров’я, можливостей та етапів відновлення.",
    icon: ClipboardCheck,
  },
  {
    title: "Заняття та процедури під контролем",
    text: "Проводимо індивідуальні та групові заняття, процедури й тренування під наглядом досвідчених фахівців для вашої безпеки та результативності.",
    icon: HeartPulse,
  },
  {
    title: "Контроль прогресу та корекція",
    text: "Регулярно відстежуємо ваш прогрес, оцінюємо результати та коригуємо план реабілітації для досягнення максимального ефекту відновлення.",
    icon: ShieldCheck,
  },
];

const CARE_FORMATS = [
  "стаціонарна",
  "амбулаторна",
  "денна",
  "домашня",
  "дистанційна (телереабілітація)",
];

const DOCUMENT_STEPS = ["Заявка", "Документи", "Попередній розгляд", "Зв’язок адміністратора"];

const CONDITION_IMAGES = [cpetImg, rehabImg, ecgImg, checkupImg, sportsImg];
const FAQ_VISIBLE_COUNT = 3;

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

const CARDIO_PROGRAMS = CARDIO_REHAB_PROGRAMS.map((program) => ({
  title: program.title,
  shortDescription: program.description,
  duration: program.duration,
  priceLabel: program.price,
  route: program.detailsUrl,
  isPopular: program.id === "standartna",
}));

const SUPPORT_HIGHLIGHTS = [
  {
    id: "military",
    title: "Для військових і ветеранів",
    description: "Спеціальні умови на програму відновлення та швидший старт після розгляду документів.",
    ctaLabel: "Детальніше",
    ctaHref: "#documents",
    icon: Heart,
    iconClass: "bg-brand-green/15 text-brand-green ring-brand-green/15",
  },
  {
    id: "social",
    title: "Соціальні проєкти",
    description: "Окремі умови для групових програм відновлення та адресної підтримки під запит.",
    ctaLabel: "Детальніше",
    ctaHref: "/sotsialni-proiekty",
    icon: CheckCircle2,
    iconClass: "bg-primary/10 text-primary ring-primary/10",
  },
  {
    id: "senior",
    title: "Акція 60+",
    description: "Знижка 10% на стартову консультацію та супровід первинного етапу програми.",
    ctaLabel: "Детальніше",
    ctaHref: "#documents",
    icon: CalendarDays,
    iconClass: "bg-amber-100 text-amber-600 ring-amber-200/70",
  },
] as const;

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

const ALL_SERVICES_ROUTE = getNodeById("services")?.route ?? "/poslugy";

export function CardioRehabPage({ node }: { node: SiteNode }) {
  const data = getServicePageData(node);
  const custom = node.pageContent || {};
  const { openModal } = useConsultationModal();
  const [introExpanded, setIntroExpanded] = React.useState(false);
  const [showAllConditions, setShowAllConditions] = React.useState(false);
  const [faqExpanded, setFaqExpanded] = React.useState(false);

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
  const visibleFaqItems = faqExpanded ? faqItems : faqItems.slice(0, FAQ_VISIBLE_COUNT);

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

        <PageSection className="pb-10 sm:pb-16 mt-6 sm:mt-10 lg:mt-12">
          <TimingSection
            emergencyBody={
              typeof custom.emergencyBody === "string" ? custom.emergencyBody : undefined
            }
          />
        </PageSection>

        <section id="for-whom" className="scroll-mt-24 bg-white py-12 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <div className="text-center">
              <h2 className="mx-auto max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                Коли потрібна кардіологічна реабілітація
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-navy/76">
                Діагнози, стани та оперативні втручання, після яких варто пройти програму
                відновлення в Основа.
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

        <section
          id="process"
          className="relative scroll-mt-24 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.98)_0%,rgba(237,244,255,0.95)_48%,rgba(225,236,255,0.95)_100%)] py-14 sm:py-20"
        >
          <div
            className="absolute -right-28 -top-44 h-[420px] w-[420px] rounded-full border border-white/60"
            aria-hidden
          />
          <div
            className="absolute right-[7%] top-[-110px] h-[310px] w-[310px] rounded-full border border-white/45"
            aria-hidden
          />
          <div
            className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-white/45 blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="max-w-[1180px]">
              <span className="inline-flex rounded-full border border-primary/22 bg-white/48 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary shadow-[0_12px_30px_rgba(47,99,190,0.08)] backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm">
                Етапи відновлення
              </span>
              <h2 className="mt-6 max-w-4xl text-3xl font-extrabold leading-[1.02] text-navy sm:text-4xl xl:text-[3.4rem]">
                Як проходить відновлення?
              </h2>
              <div className="mt-5 h-2 w-28 rounded-full bg-[linear-gradient(90deg,#2f63be_0%,#2f63be_68%,#35c88a_100%)] shadow-[0_8px_20px_rgba(53,200,138,0.18)] sm:w-32" />
              <p className="mt-5 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg">
                Відновлення — це поступовий процес, який базується на оцінці стану, індивідуальному
                плані та постійному контролі. Ми поруч на кожному етапі вашого повернення до
                активного життя.
              </p>
            </div>

            <div className="relative mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="relative flex min-h-[270px] flex-col rounded-[28px] border border-primary/16 bg-white/88 p-6 shadow-[0_24px_50px_rgba(31,61,120,0.08)] backdrop-blur-sm sm:min-h-[300px] sm:p-7"
                  >
                    {index < PROCESS_STEPS.length - 1 && (
                      <span
                        className="absolute left-[calc(100%-8px)] top-18 hidden h-[2px] w-6 bg-primary/55 xl:block"
                        aria-hidden
                      />
                    )}

                    <span className="flex size-[74px] items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(233,242,255,0.98),rgba(248,251,255,0.95))] text-primary shadow-inner ring-1 ring-primary/10">
                      <Icon className="size-9" strokeWidth={2.1} />
                    </span>
                    <h3 className="mt-5 max-w-[16ch] text-[1.55rem] font-extrabold leading-[1.1] text-navy sm:text-[1.75rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/76 sm:text-[0.95rem]">
                      {step.text}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-7 overflow-hidden rounded-[30px] border border-primary/16 bg-white/68 shadow-[0_18px_40px_rgba(31,61,120,0.06)] backdrop-blur-sm">
              <div className="flex flex-col gap-4 px-5 py-5 sm:px-7 sm:py-6 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-6 lg:px-7">
                <div className="flex items-center gap-3 lg:min-w-[280px]">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(235,244,255,0.95),rgba(255,255,255,0.98))] text-primary shadow-inner ring-1 ring-primary/10">
                    <HandHeart className="size-7" strokeWidth={2.05} />
                  </span>
                  <p className="text-lg font-extrabold leading-tight text-navy sm:text-[1.6rem]">
                    Формати надання допомоги
                  </p>
                </div>

                <div className="hidden h-12 w-px bg-primary/18 lg:block" aria-hidden />

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-primary sm:text-[0.95rem] lg:min-w-0 lg:flex-1 lg:flex-nowrap lg:gap-x-3 lg:whitespace-nowrap xl:text-base">
                  {CARE_FORMATS.map((format, index) => (
                    <React.Fragment key={format}>
                      <span>{format}</span>
                      {index < CARE_FORMATS.length - 1 && (
                        <span className="text-primary/55" aria-hidden>
                          •
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="scroll-mt-24 bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div>
              <h2 className="max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                Програми та вартість
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy/70">
                Точну вартість і детальний склад кожного пакету повідомляє адміністратор після
                попереднього розгляду документів і консультації лікаря.
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
          <section
            id="faq"
            className="scroll-mt-24 border-t border-slate-200/60 bg-slate-50/70 py-20 md:py-28"
          >
            <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-10">
              <div className="text-center">
                <h2 className="text-2xl font-bold leading-tight text-navy sm:text-3xl md:text-4xl">
                  Питання та відповіді
                </h2>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary sm:mt-6" />
                <p className="mx-auto mt-6 max-w-[640px] text-sm leading-relaxed text-slate-600 md:text-base">
                  Зібрали найпоширеніші запитання про кардіологічну реабілітацію. Якщо не знайшли
                  відповідь, зверніться до нас і ми допоможемо підібрати наступний крок.
                </p>
              </div>

              <FAQAccordion items={visibleFaqItems} variant="home" />

              {faqItems.length > FAQ_VISIBLE_COUNT && (
                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setFaqExpanded((value) => !value)}
                    aria-expanded={faqExpanded}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-7 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white md:text-base"
                  >
                    {faqExpanded ? "Показати менше питань" : "Показати більше питань"}
                    <ChevronDown
                      className={cn(
                        "size-5 transition-transform duration-300",
                        faqExpanded && "rotate-180",
                      )}
                    />
                  </button>
                </div>
              )}
            </div>

            <FAQConsultationCTA className="mt-16" />
          </section>
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
        <p className="shrink-0 text-sm font-bold text-navy/70">Що вас цікавить:</p>
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

function TimingSection({ emergencyBody }: { emergencyBody?: string }) {
  const emergencyNote = emergencyBody?.split("\n\n")[1];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-blue-100/90 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:p-8 lg:p-10">
      <div
        className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-primary/8 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl"
        aria-hidden
      />

      <div className="relative">
        <SectionHeading
          title="Що варто знати перед початком програми"
          text="Ця програма створена, щоб безпечно підтримати ваше відновлення після серцевої події. Ознайомтеся з ключовими орієнтирами нижче, щоб почуватися впевненіше та отримати максимальну користь від кожного етапу реабілітації."
        />

        <div className="mt-8 overflow-hidden rounded-[28px] border border-blue-100/90 bg-white/92 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-3">
            {TIMING_COLUMNS.map((column) => {
              const Icon = column.icon;
              return (
                <div
                  key={column.title}
                  className="border-t border-blue-100/90 p-5 sm:p-7 lg:border-l lg:border-t-0 first:border-t-0 first:lg:border-l-0"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span
                      className={cn(
                        "flex size-14 shrink-0 items-center justify-center rounded-full shadow-inner ring-1 ring-black/4 sm:size-[78px]",
                        column.iconBg,
                      )}
                    >
                      <Icon
                        className={cn("size-7 sm:size-9", column.iconColor)}
                        strokeWidth={2.1}
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-extrabold leading-snug text-navy sm:text-[1.45rem] lg:text-[1.6rem]">
                        {column.title}
                      </h3>
                      <ul className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
                        {column.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-navy/80 sm:text-base"
                          >
                            <span
                              className={cn(
                                "mt-2.5 size-2 shrink-0 rounded-full",
                                column.bulletColor,
                              )}
                            />
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

        <div className="mt-6 overflow-hidden rounded-[28px] border border-blue-100/90 bg-[linear-gradient(135deg,rgba(239,246,255,0.95),rgba(255,255,255,0.98))] shadow-[0_18px_40px_rgba(37,99,235,0.08)]">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-5 sm:p-7 lg:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white/88 shadow-inner ring-1 ring-primary/8 sm:size-20">
                  <CalendarDays className="size-8 text-primary sm:size-10" strokeWidth={2.05} />
                </span>
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
                    Коли варто розпочати програму
                  </h3>
                  <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
                  <p className="mt-5 text-base leading-relaxed text-navy/82 sm:text-lg">
                    Старт програми залежить від стабільності стану, медичних документів і дозволу
                    лікаря.
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-navy/72 sm:text-lg">
                    Рішення щодо початку приймається індивідуально після оцінки стану та наданих
                    результатів обстежень.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[240px] overflow-hidden border-t border-blue-100/90 lg:min-h-[320px] lg:border-l lg:border-t-0">
              <img
                src={medicalAssessmentImg}
                alt="Лікар консультує пацієнта перед початком програми"
                width={1800}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[28px] border border-red-100/90 bg-[linear-gradient(135deg,rgba(255,244,244,0.98),rgba(255,250,250,0.96))] shadow-[0_18px_40px_rgba(239,68,68,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="p-5 sm:p-7 lg:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-inner ring-1 ring-red-100 sm:size-20">
                  <AlertTriangle className="size-8 text-red-500 sm:size-10" strokeWidth={2.05} />
                </span>
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-extrabold leading-tight text-red-600 sm:text-3xl">
                    Коли потрібно терміново телефонувати 103
                  </h3>
                  <div className="mt-4 h-1 w-16 rounded-full bg-red-500" />
                  <p className="mt-5 text-base leading-relaxed text-navy/78 sm:text-lg">
                    Не розпочинайте та не продовжуйте програму, якщо стан раптово погіршився та
                    потребує екстреної медичної допомоги.
                  </p>
                  {emergencyNote && (
                    <p className="mt-3 text-sm leading-relaxed text-navy/62 sm:text-base">
                      {emergencyNote}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden border-t border-red-100/90 lg:border-l lg:border-t-0">
              <div className="relative h-full p-5 sm:p-7 lg:p-10">
                <ul className="space-y-3.5">
                  {EMERGENCY_CALL_ITEMS.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-navy/80 sm:text-base"
                    >
                      <span className="mt-2.5 size-2 shrink-0 rounded-full bg-red-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Ambulance
                  className="pointer-events-none absolute bottom-2 right-3 hidden h-36 w-36 text-red-100 lg:block xl:h-44 xl:w-44"
                  strokeWidth={1.35}
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
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

function ConditionCard({
  card,
  image,
}: {
  card: { title: string; text: string; expandedText?: string };
  image: string;
}) {
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
          <p className="mb-6 line-clamp-3 text-sm font-normal leading-relaxed text-slate-600">
            {card.text}
          </p>
        </div>
        <div>
          <a
            href="#documents"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("documents")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            Детальніше{" "}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
  const priceLabel =
    program.id === "indyvidualna" ? "Уточнюйте" : program.priceLabel || "Уточнюйте";

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
            {priceLabel}
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
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SUPPORT_HIGHLIGHTS.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const activeHighlight = SUPPORT_HIGHLIGHTS[activeIndex];
  const Icon = activeHighlight.icon;
  const isAnchorLink = activeHighlight.ctaHref.startsWith("#");
  const buttonClassName =
    "mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90";

  return (
    <aside
      className="relative isolate flex min-h-[320px] overflow-hidden rounded-2xl border border-blue-100 bg-[linear-gradient(160deg,rgba(255,255,255,1)_0%,rgba(239,246,255,0.94)_52%,rgba(236,253,245,0.92)_100%)] p-5 shadow-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_38%)]"
        aria-hidden
      />
      <div
        className="absolute -bottom-12 -right-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative flex w-full flex-col">
        <div
          key={activeHighlight.id}
          className="flex flex-1 flex-col animate-in fade-in slide-in-from-bottom-2 duration-500"
          aria-live="polite"
        >
          <div className="flex items-center gap-4">
            <span
              className={cn(
                "flex size-14 shrink-0 items-center justify-center rounded-2xl ring-1",
                activeHighlight.iconClass,
              )}
            >
              <Icon className="size-7" strokeWidth={2} />
            </span>
          </div>

          <h3 className="mt-5 max-w-[12ch] text-xl font-extrabold leading-snug text-navy">
            {activeHighlight.title}
          </h3>
          <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-navy/72">
            {activeHighlight.description}
          </p>

          {activeHighlight.ctaLabel && (
            isAnchorLink ? (
              <a
                href={activeHighlight.ctaHref}
                onClick={(event) => {
                  event.preventDefault();
                  document
                    .getElementById(activeHighlight.ctaHref.slice(1))
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={buttonClassName}
              >
                {activeHighlight.ctaLabel}
                <ArrowRight className="size-4" />
              </a>
            ) : (
              <AppLink to={activeHighlight.ctaHref} className={buttonClassName}>
                {activeHighlight.ctaLabel}
                <ArrowRight className="size-4" />
              </AppLink>
            )
          )}
        </div>
      </div>
    </aside>
  );
}

function OtherServicesSlider() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);
  const isFirstSlide = active === 0;
  const isLastSlide = active === OTHER_SERVICES.length - 1;

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
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Інші послуги"
            text="Суміжні напрями, які можуть знадобитися до, під час або після програми."
          />
          <AppLink
            to={ALL_SERVICES_ROUTE}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-primary/25 bg-white px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/8"
          >
            Всі-послуги
            <ArrowRight className="size-4" />
          </AppLink>
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

        <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="Попередня послуга"
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            disabled={isFirstSlide}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:bg-soft sm:size-11",
              isFirstSlide && "cursor-not-allowed opacity-45 hover:bg-white",
            )}
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex items-center justify-center gap-2.5">
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

          <button
            type="button"
            aria-label="Наступна послуга"
            onClick={() => scrollToIndex(Math.min(OTHER_SERVICES.length - 1, active + 1))}
            disabled={isLastSlide}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:bg-soft sm:size-11",
              isLastSlide && "cursor-not-allowed opacity-45 hover:bg-white",
            )}
          >
            <ChevronRight className="size-5" />
          </button>
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
            <h3 className="font-bold text-navy mt-4 mb-2">
              Чому відновлення після серцевих втручань потребує контролю
            </h3>
            <p className="mb-4">
              Після операцій на серці або перенесеного інфаркту міокарда організм ще певний час не
              працює у звичному режимі. Серцево-судинна система не готова до звичного ритму життя,
              тому будь-яка активність без контролю може створити додаткове навантаження на серце.
              Саме тому період відновлення має проходити під наглядом фахівців із чітким розумінням
              допустимого рівня навантаження.
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
                Ключове завдання кардіореабілітації — не просто відновити фізичну активність, а
                зробити це безпечно. Навантаження підбирають індивідуально з урахуванням стану
                пацієнта, показників серцевого ритму, артеріального тиску та реакції організму на
                вправи.
              </p>
              <p className="mb-4">
                Самостійні тренування після серцевих втручань можуть бути небезпечними:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>
                  надмірна інтенсивність або різкі зміни активності здатні спровокувати порушення
                  ритму чи повторні серцеві проблеми;
                </li>
                <li>
                  повна відмова від руху уповільнює кровообіг і знижує функціональні можливості
                  організму.
                </li>
              </ul>
              <p className="mb-4">
                Контрольоване відновлення дозволяє досягти балансу між безпекою і прогресом. Пацієнт
                поступово повертається до активного життя, зменшується ризик повторних ускладнень,
                покращується загальне самопочуття та якість життя.
              </p>
              <h3 className="font-bold text-navy mt-4 mb-2">
                Де можливо пройти реабілітацію після операції на серці в Україні
              </h3>
              <p className="mb-4">
                Після кардіологічних втручань пацієнти зазвичай обирають між двома форматами
                відновлення — санаторним або спеціалізованим медичним центром. Вибір здається
                простим, але саме тут часто виникає помилка: не кожен варіант однаково підходить для
                відновлення серця.
              </p>
              <p className="mb-4">
                Санаторії здебільшого орієнтовані на загальне зміцнення організму. Це комфортний
                формат із базовою фізичною активністю, але без глибокої кардіологічної
                спеціалізації. У багатьох випадках програми не враховують конкретний тип втручання,
                стан серця після операції та індивідуальні ризики. Як результат — процес відновлення
                проходить без чіткої медичної логіки та контролю.
              </p>
              <p className="mb-4">
                Спеціалізовані центри, наприклад Центр Основа, працюють інакше. Відновлення
                будується навколо конкретного стану серцево-судинної системи. Пацієнт не залишається
                сам на сам зі своїми відчуттями — кожен етап проходить під наглядом, з урахуванням
                реакції організму. Саме такий підхід дозволяє уникнути помилок і скоротити шлях до
                стабільного результату.
              </p>

              <h3 className="font-bold text-navy mt-6 mb-2">
                Відмінність спеціалізованої кардіореабілітації від санаторного підходу
              </h3>
              <p className="mb-4">
                Головна відмінність полягає у рівні відповідальності за стан пацієнта. У санаторному
                форматі навантаження зазвичай мають загальний характер і не прив’язані до конкретних
                показників роботи серця. Пацієнт рухається «за самопочуттям», але після операцій
                цього недостатньо — організм не завжди дає чіткі сигнали про перевантаження.
              </p>
              <p className="mb-4">
                У спеціалізованому центрі реабілітації кардіологічних хворих програму розробляють
                так, що кожне навантаження має чіткі межі. Ці межі визначаються не інтуїтивно, а на
                основі контролю стану серцево-судинної системи. Відстежуються ключові показники, і
                саме вони вирішують, що безпечно, а що — ні. Замість підходу «спробувати і
                подивитись» пацієнт рухається за контрольованою логікою. Постійний контроль дозволяє
                поступово підвищувати навантаження без ризику для серця і уникати ситуацій, коли
                відновлення може обернутися погіршенням стану.
              </p>

              <h3 className="font-bold text-navy mt-6 mb-2">
                Значення психологічної підтримки під час відновлення
              </h3>
              <p className="mb-4">
                Психологічна реабілітація після операції на серці є невід’ємною частиною
                повноцінного відновлення. Кардіологічні хвороби часто супроводжуються тривогою,
                депресією та страхом рецидиву. Ці стани можуть гальмувати фізичне оздоровлення,
                знижувати мотивацію виконувати рекомендації лікарів і впливати на якість сну та
                загальний настрій.
              </p>
              <p className="mb-4">
                У Центрі Основа психологічній підтримці приділяють значну увагу. Вона допомагає
                пацієнтам:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>сформувати стійкість до стресу;</li>
                <li>адаптуватися до нового способу життя;</li>
                <li>зміцнити психоемоційний стан.</li>
              </ul>

              <h3 className="font-bold text-navy mt-6 mb-2">
                Фактори, які впливають на якість відновлення
              </h3>
              <p className="mb-4">На результати кардіореабілітації значною мірою впливають:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>загальний стан здоров’я пацієнта;</li>
                <li>наявність супутніх хронічних захворювань;</li>
                <li>рівень фізичної активності до операції.</li>
              </ul>
              <p className="mb-4">
                Люди, які раніше підтримували помірну форму, як правило, швидше відновлюються і
                легше адаптуються до реабілітаційних навантажень. Водночас навіть за низького рівня
                підготовки фізична реабілітація під медичним контролем залишається безпечною і
                результативною.
              </p>
              <p className="mb-4">
                Важливо також враховувати особливості харчування, регулярність медичних оглядів і
                індивідуальний підхід. Центр Основа пропонує підтримку, яка враховує всі ці фактори
                і забезпечує не лише фізичне відновлення, а й стабілізацію тиску та серцевої
                діяльності.
              </p>

              <h3 className="font-bold text-navy mt-6 mb-2">Відповіді на часті питання</h3>
              <p className="mb-2">
                <strong>Чи обов’язкова кардіореабілітація після операції?</strong>
              </p>
              <p className="mb-4">
                Кардіореабілітація не є формальною вимогою, але без неї ризик ускладнень і рецидивів
                збільшується, а якість життя знижується.
              </p>
              <p className="mb-2">
                <strong>
                  Чим відрізняється кардіологічна реабілітація від звичайного санаторного лікування?
                </strong>
              </p>
              <p className="mb-4">
                Кардіологічна реабілітація передбачає постійний медичний контроль та індивідуальний
                підбір навантажень. Це принципово відрізняється від стандартних підходів більшості
                санаторіїв.
              </p>
              <p className="mb-2">
                <strong>Скільки часу триває реабілітація після операцій на серці?</strong>
              </p>
              <p className="mb-4">
                Тривалість залежить від стану пацієнта. Зазвичай це кілька тижнів із подальшим
                довготривалим контролем.
              </p>
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
