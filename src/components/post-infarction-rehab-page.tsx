import * as React from "react";
import {
  Activity,
  ArrowRight,
  ChartLine,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardPenLine,
  FileText,
  FileSearch,
  Phone,
  Send,
  CheckCircle2,
  HandHeart,
  Heart,
  HeartPulse,
  Percent,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  UserRound,
  UsersRound,
  Dumbbell,
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
import { CONTACTS } from "@/data/site-tree";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import checkupImg from "@/assets/service-checkup.jpg";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import rehabImg from "@/assets/service-rehab.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import cardioHeart3dImg from "@/assets/cardio-heart-3d.jpg";
import cardioRehabCtaImg from "@/assets/about/cardio-rehab-cta-photo-v3.jpg";
import medicalAssessmentImg from "@/assets/about/medical-assessment.jpg";
import { getBreadcrumbs, getNodeById } from "@/lib/tree";

const ANCHORS = [
  { href: "#about", label: "Про програму" },
  { href: "#importance", label: "Чому важливо" },
  { href: "#results", label: "Результати" },
  { href: "#what-includes", label: "Що входить" },
  { href: "#safety", label: "Безпека" },
  { href: "#rehab-methods", label: "Методи" },
  { href: "#process", label: "Як проходить" },
  { href: "#team", label: "Хто працює" },
  { href: "#formats", label: "Формати" },
  { href: "#programs", label: "Вартість" },
  { href: "#documents", label: "Документи" },
  { href: "#faq", label: "FAQ" },
];

const POST_INFARCTION_ROUTE = "/reabilitatsiia/pislia-infarktu-miokarda";

const TIMING_COLUMNS = [
  {
    title: "Показання",
    icon: Heart,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    bulletColor: "bg-primary",
    items: [
      "після інфаркту міокарда;",
      "після інфаркту зі стентуванням коронарних артерій;",
      "після інфаркту з подальшим оперативним лікуванням;",
      "при зниженій переносимості фізичного навантаження після інфаркту;",
      "при появі слабкості або швидкої втомлюваності під час звичної активності;",
      "для поступового повернення до роботи та побутової активності;",
      "для відновлення фізичної активності після тривалого обмеження навантажень;",
      "для контролю факторів ризику повторних серцево-судинних подій.",
    ],
  },
  {
    title: "Протипоказання",
    icon: AlertTriangle,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    bulletColor: "bg-amber-500",
    items: [
      "нестабільний стан серцево-судинної системи;",
      "гострий коронарний синдром;",
      "неконтрольовані порушення серцевого ритму;",
      "декомпенсована серцева недостатність;",
      "значні неконтрольовані зміни артеріального тиску;",
      "гострі запальні або інфекційні захворювання;",
      "інші стани, за яких фізичне навантаження може бути небезпечним.",
    ],
  },
];

const PROCESS_STEPS = [
  {
    icon: FileSearch,
    title: "Первинна оцінка",
    text: "Лікар аналізує медичну історію, перенесений інфаркт, результати лікування, поточний стан та можливі обмеження.",
  },
  {
    icon: ClipboardPenLine,
    title: "Функціональна оцінка",
    text: "За необхідності проводяться додаткові обстеження та тести для визначення фізичних можливостей і безпечного рівня навантаження.",
  },
  {
    icon: Dumbbell,
    title: "Формування програми",
    text: "Визначаються цілі, частота занять, інтенсивність навантаження та методи реабілітації.",
  },
  {
    icon: ChartLine,
    title: "Реабілітаційні заняття",
    text: "Людина проходить програму з поступовим збільшенням фізичної активності відповідно до переносимості навантаження.",
  },
];

const CARE_FORMATS = [
  "Стаціонарна реабілітація",
  "Амбулаторна реабілітація",
  "Денна програма",
  "Дистанційний супровід",
];

const CONDITION_IMAGES = [cpetImg, rehabImg, ecgImg, checkupImg, sportsImg];
const FAQ_VISIBLE_COUNT = 3;

const REHAB_METHODS = [
  {
    title: "Кардіотренування",
    text: "Дозовані аеробні навантаження для поступового розвитку витривалості та адаптації серцево-судинної системи.",
  },
  {
    title: "Функціональні тренування",
    text: "Вправи для розвитку сили, витривалості, балансу, координації та впевненого виконання повсякденних рухів.",
  },
  {
    title: "Велоергометр",
    text: "Контрольоване фізичне навантаження на велоергометрі з можливістю поступового регулювання інтенсивності.",
  },
  {
    title: "Бігова доріжка",
    text: "Ходьба з індивідуально визначеною швидкістю та тривалістю навантаження.",
  },
  {
    title: "Активна та пасивна механотерапія",
    text: "Тренування із застосуванням реабілітаційного обладнання для поступового відновлення фізичної активності.",
  },
  {
    title: "Дихальні вправи",
    text: "Вправи, спрямовані на покращення контролю дихання та переносимості фізичного навантаження.",
  },
  {
    title: "Лікувальний басейн",
    text: "Заняття у воді можуть використовуватися як один із методів фізичної активності за відсутності протипоказань.",
  },
];

const CARDIO_PROGRAMS = [
  {
    title: "Коротка програма",
    shortDescription: "Для первинної оцінки, визначення безпечного рівня фізичної активності та формування подальших рекомендацій.",
    duration: "Індивідуально",
    priceLabel: "Дізнатися вартість",
    route: `${POST_INFARCTION_ROUTE}/short`,
    isPopular: false,
  },
  {
    title: "Програма відновлення",
    shortDescription: "Комплекс реабілітаційних заходів із регулярними заняттями та контролем динаміки.",
    duration: "Індивідуально",
    priceLabel: "Дізнатися вартість",
    route: `${POST_INFARCTION_ROUTE}/recovery`,
    isPopular: true,
  },
  {
    title: "Розширена програма",
    shortDescription: "Триваліша програма для пацієнтів, яким необхідне поступове збільшення фізичної активності та більш тривалий реабілітаційний супровід.",
    duration: "Індивідуально",
    priceLabel: "Дізнатися вартість",
    route: `${POST_INFARCTION_ROUTE}/extended`,
    isPopular: false,
  },
];

const SUPPORT_HIGHLIGHTS = [
  {
    id: "senior",
    title: "Акція 60+",
    description: "Знижка 10% на стартову консультацію та супровід первинного етапу програми.",
    ctaLabel: "Детальніше",
    ctaHref: "#documents",
    icon: CalendarDays,
    iconClass:
      "bg-lime-100/95 text-lime-700 ring-lime-200/90 shadow-[0_14px_28px_rgba(132,204,22,0.14)]",
  },
  {
    id: "military",
    title: "Для військових і ветеранів",
    description:
      "Спеціальні умови на програму відновлення та швидший старт після розгляду документів.",
    ctaLabel: "Детальніше",
    ctaHref: "#documents",
    icon: ShieldCheck,
    iconClass:
      "bg-emerald-100/92 text-emerald-700 ring-emerald-200/90 shadow-[0_14px_28px_rgba(52,211,153,0.18)]",
  },
  {
    id: "social",
    title: "Соціальні проєкти",
    description: "Окремі умови для групових програм відновлення та адресної підтримки під запит.",
    ctaLabel: "Детальніше",
    ctaHref: "/sotsialni-proiekty",
    icon: HandHeart,
    iconClass:
      "bg-teal-100/92 text-teal-700 ring-teal-200/90 shadow-[0_14px_28px_rgba(45,212,191,0.16)]",
  },
] as const;
type SupportHighlight = (typeof SUPPORT_HIGHLIGHTS)[number];

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

export function PostInfarctionRehabPage({ node }: { node: SiteNode }) {
  const data = getServicePageData(node);
  const custom = node.pageContent || {};
  const { openModal } = useConsultationModal();
  const [introExpanded, setIntroExpanded] = React.useState(false);
  const [showAllConditions, setShowAllConditions] = React.useState(false);
  const [faqExpanded, setFaqExpanded] = React.useState(false);
  const [documentsModalOpen, setDocumentsModalOpen] = React.useState(false);

  const allConditionCards = REHAB_METHODS;
  const visibleConditionCards = showAllConditions
    ? allConditionCards
    : allConditionCards.slice(0, 3);
  const programCards = CARDIO_PROGRAMS.map((program, index) => ({
    ...program,
    id: `cardio-program-${index}`,
    route: node.children?.[index]?.route || node.route,
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
            Серцево-судинна система
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-[1.08] text-background sm:text-5xl lg:text-6xl">
            Реабілітація після інфаркту міокарда
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/86 sm:text-lg">
            Комплексна програма відновлення після інфаркту міокарда допомагає безпечно повертатися до фізичної активності, покращувати витривалість і контролювати фактори серцево-судинного ризику під наглядом фахівців.
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

        <AnchorNav breadcrumbItems={getBreadcrumbs(node)} />

        <PageSection id="about" className="pt-10 sm:pt-16">
          <ExpandableIntroSection
            title="ЩО ТАКЕ ІНФАРКТ МІОКАРДА"
            shortDescription="Інфаркт міокарда — це гострий стан, при якому через порушення кровопостачання частина серцевого м’яза не отримує достатньо кисню та зазнає пошкодження."
            expandedContent="Найчастіше інфаркт виникає через перекриття або значне звуження коронарної артерії, яка постачає кров до серця. Для відновлення кровотоку можуть застосовувати медикаментозне лікування, стентування коронарних артерій або інші методи залежно від клінічної ситуації.

Після стабілізації стану лікування не завершується. Організму необхідно поступово адаптуватися до фізичних навантажень, а людині — контролювати фактори серцево-судинного ризику та безпечно повертатися до повсякденної активності. Важливою частиною цього етапу є кардіологічна реабілітація."
            image={data.introImage}
            imageAlt="Лікар переглядає результати обстеження пацієнта після інфаркту"
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

<PageSection id="importance" className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[28px] border border-blue-100/90 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:p-8 lg:p-10">
              <div className="relative">
                <h2 className="max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                  Чому важливо проходити відновлення після інфаркту
                </h2>
                <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-navy/82 sm:text-lg">
                  После завершения гострого етапу лікування важливо не лише приймати призначені препарати, а й поступово відновлювати фізичну активність та контролювати фактори ризику.
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy/72 sm:text-lg">
                  Надто швидке повернення до звичних навантажень може бути небезпечним, а надмірне обмеження активності — призводити до втрати витривалості, м'язової слабкості та страху фізичного навантаження.
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy/72 sm:text-lg">
                  Контрольована реабілітація допомагає визначити безпечний рівень активності та поступово розширювати фізичні можливості відповідно до реакції організму.
                </p>
              </div>
            </div>
          </div>
        </PageSection>

        <PageSection id="results" className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[28px] border border-emerald-100/90 bg-[linear-gradient(180deg,#f0fdf4_0%,#dcfce7_100%)] p-5 shadow-[0_20px_60px_rgba(34,197,94,0.08)] sm:p-8 lg:p-10">
              <div className="relative">
                <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700 shadow-[0_12px_30px_rgba(34,197,94,0.08)] backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm">
                  Результати реабілітації
                </span>
                <h2 className="mt-6 max-w-4xl text-3xl font-extrabold leading-[1.02] text-navy sm:text-4xl xl:text-[3.4rem]">
                  Чого можна досягти
                </h2>
                <div className="mt-5 h-2 w-28 rounded-full bg-emerald-500 shadow-[0_8px_20px_rgba(53,200,138,0.18)] sm:w-32" />
                <p className="mt-5 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg">
                  Реабілітація допомагає безпечно повернутися до активного життя та зменшити ризики повторних серцево-судинних подій.
                </p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>підвищення витривалості;</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>покращення переносимості фізичних навантажень;</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>поступове повернення до повсякденної активності;</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>контроль пульсу, тиску та самопочуття;</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>зниження ризику повторних серцево-судинних подій.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </PageSection>

        <PageSection id="what-includes" className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="text-center">
              <h2 className="mx-auto max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                Що може входити у програму реабілітації
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy/76">
                Програма формується індивідуально після оцінки стану людини. Не всі елементи необхідні кожному пацієнту.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <MethodCard title="Медична оцінка" text="Оцінка перенесеного інфаркту, проведеного лікування, супутніх захворювань, поточних скарг, медикаментозної терапії та можливих обмежень." />
              <MethodCard title="Функціональна діагностика" text="За показаннями можуть використовуватися функціональні тести та інструментальні дослідження для оцінки роботи серцево-судинної і дихальної систем, витривалості та реакції організму на навантаження." />
              <MethodCard title="Дозоване фізичне навантаження" text="Індивідуально підібрані вправи та кардіонавантаження з поступовою зміною інтенсивності відповідно до стану і реакції організму." />
              <MethodCard title="Контроль факторів ризику" text="Оцінка факторів, які можуть впливати на ризик повторних серцево-судинних подій, та рекомендації щодо їх контролю." />
              <MethodCard title="Навчання самоконтролю" text="Рекомендації щодо контролю пульсу, артеріального тиску, фізичної активності та симптомів, які необхідно враховувати під час повсякденного життя." />
              <MethodCard title="Харчування та спосіб життя" text="Рекомендації щодо харчування, фізичної активності, маси тіла, режиму дня та інших факторів способу життя." />
              <MethodCard title="Психологічна підтримка" text="За потреби програма може включати роботу зі страхом повторного інфаркту, тривогою, зниженим настроєм та труднощами повернення до звичного життя." />
              <MethodCard title="План подальшої активності" text="Після завершення програми пацієнт отримує рекомендації щодо подальшої фізичної активності та підтримання досягнутих результатів." />
            </div>
          </div>
        </PageSection>

        <PageSection id="safety" className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[28px] border border-blue-100/90 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:p-8 lg:p-10">
              <div className="relative">
                <span className="inline-flex rounded-full border border-primary/22 bg-white/48 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary shadow-[0_12px_30px_rgba(47,99,190,0.08)] backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm">
                  Контроль навантаження
                </span>
                <h2 className="mt-6 max-w-4xl text-3xl font-extrabold leading-[1.02] text-navy sm:text-4xl xl:text-[3.4rem]">
                  Як контролюється безпека фізичної активності
                </h2>
                <div className="mt-5 h-2 w-28 rounded-full bg-[linear-gradient(90deg,#2f63be_0%,#2f63be_68%,#35c88a_100%)] shadow-[0_8px_20px_rgba(53,200,138,0.18)] sm:w-32" />
                <p className="mt-5 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg">
                  Інтенсивність навантаження визначається не за універсальною програмою, а відповідно до стану людини та її реакції на фізичну активність.
                </p>
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <SafetyStep number="1" title="Оцінка стану" text="Перед початком програми аналізуються медичні документи, результати обстежень, скарги та фізичні можливості." />
                  <SafetyStep number="2" title="Визначення навантаження" text="Визначається допустима інтенсивність і тип фізичної активності." />
                  <SafetyStep number="3" title="Контроль під час занять" text="Під час реабілітації оцінюються самопочуття та реакція організму на навантаження." />
                  <SafetyStep number="4" title="Корекція програми" text="Інтенсивність і обсяг занять можуть змінюватися відповідно до прогресу або змін у стані людини." />
                </div>
              </div>
            </div>
          </div>
        </PageSection>

        <PageSection id="rehab-methods" className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="text-center">
              <h2 className="mx-auto max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                Методи реабілітації
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy/76">
                Конкретні методи підбираються відповідно до завдань реабілітації, функціонального стану та переносимості навантаження.
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
            <p className="mt-6 text-center text-sm text-navy/60">
              Перелік методів визначається індивідуально. Частина процедур може не входити до конкретної програми.
            </p>
          </div>
        </PageSection>

        <section id="for-whom" className="scroll-mt-24 bg-white py-12 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <div className="text-center">
              <h2 className="mx-auto max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                Які методи реабілітації ми використовуємо
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-navy/76">
                Підбираємо комбінацію методів залежно від етапу відновлення, переносимості
                навантаження та цілей пацієнта після інфаркту міокарда.
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
                Як проходить відновлення
              </h2>
              <div className="mt-5 h-2 w-28 rounded-full bg-[linear-gradient(90deg,#2f63be_0%,#2f63be_68%,#35c88a_100%)] shadow-[0_8px_20px_rgba(53,200,138,0.18)] sm:w-32" />
              <p className="mt-5 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg">
                Реабілітація будується поетапно — від первинної оцінки до рекомендацій після завершення програми.
              </p>
            </div>

            <div className="relative mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-6">
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

                    <span className="flex size-[74px] items-center justify-center rounded-[24px] bg-[linear-gradient(135deg,#35c88a_0%,#67d8a4_100%)] text-white shadow-[0_18px_34px_rgba(53,200,138,0.28)] ring-1 ring-emerald-200/80">
                      <Icon className="size-9" strokeWidth={2.15} />
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

        <PageSection id="team" className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[28px] border border-blue-100/90 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-5 shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:p-8 lg:p-10">
              <div className="relative">
                <span className="inline-flex rounded-full border border-primary/22 bg-white/48 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-primary shadow-[0_12px_30px_rgba(47,99,190,0.08)] backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm">
                  Міждисциплінарна команда
                </span>
                <h2 className="mt-6 max-w-4xl text-3xl font-extrabold leading-[1.02] text-navy sm:text-4xl xl:text-[3.4rem]">
                  Відновлення під наглядом фахівців
                </h2>
                <div className="mt-5 h-2 w-28 rounded-full bg-[linear-gradient(90deg,#2f63be_0%,#2f63be_68%,#35c88a_100%)] shadow-[0_8px_20px_rgba(53,200,138,0.18)] sm:w-32" />
                <p className="mt-5 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg">
                  До програми можуть залучатися спеціалісти різних напрямів залежно від стану людини та поставлених реабілітаційних завдань.
                </p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  <li className="flex items-center gap-3 text-base leading-relaxed text-navy/82">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>лікар-кардіолог</span>
                  </li>
                  <li className="flex items-center gap-3 text-base leading-relaxed text-navy/82">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>лікар фізичної та реабілітаційної медицини</span>
                  </li>
                  <li className="flex items-center gap-3 text-base leading-relaxed text-navy/82">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>фізичний терапевт</span>
                  </li>
                  <li className="flex items-center gap-3 text-base leading-relaxed text-navy/82">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>психолог</span>
                  </li>
                  <li className="flex items-center gap-3 text-base leading-relaxed text-navy/82">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    <span>інші спеціалісти за показаннями</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </PageSection>

        <PageSection id="formats" className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="text-center">
              <h2 className="mx-auto max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                Формати реабілітації
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy/76">
                Формат проходження програми визначається відповідно до стану пацієнта, необхідного обсягу медичного контролю та можливості регулярно відвідувати центр.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <FormatCard title="Стаціонарна реабілітація" text="Пацієнт перебуває у центрі та проходить заплановану програму відновлення протягом визначеного періоду." />
              <FormatCard title="Амбулаторна реабілітація" text="Пацієнт відвідує центр у визначені дні та проходить заняття і консультації відповідно до індивідуального графіка." />
              <FormatCard title="Денна програма" text="Реабілітаційні заходи проводяться протягом дня без цілодобового перебування у центрі." />
              <FormatCard title="Дистанційний супровід" text="Окремі елементи програми та подальший контроль можуть проводитися дистанційно, якщо це дозволяє стан людини." />
            </div>
          </div>
        </PageSection>

        <PageSection id="results" className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[28px] border border-emerald-100/90 bg-[linear-gradient(180deg,#f0fdf4_0%,#dcfce7_100%)] p-5 shadow-[0_20px_60px_rgba(34,197,94,0.08)] sm:p-8 lg:p-10">
              <div className="relative">
                <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700 shadow-[0_12px_30px_rgba(34,197,94,0.08)] backdrop-blur-sm sm:px-8 sm:py-3 sm:text-sm">
                  Результати реабілітації
                </span>
                <h2 className="mt-6 max-w-4xl text-3xl font-extrabold leading-[1.02] text-navy sm:text-4xl xl:text-[3.4rem]">
                  Чого можна досягти
                </h2>
                <div className="mt-5 h-2 w-28 rounded-full bg-emerald-500 shadow-[0_8px_20px_rgba(53,200,138,0.18)] sm:w-32" />
                <p className="mt-5 max-w-4xl text-base leading-relaxed text-navy/82 sm:text-lg">
                  Метою програми є не досягнення універсального показника, а покращення функціонального стану та безпечне повернення людини до активності.
                </p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>покращенню переносимості фізичного навантаження;</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>поступовому збільшенню рівня повсякденної активності;</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>зменшенню фізичної декондиції після госпіталізації;</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>покращенню витривалості;</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>більш впевненому поверненню до побутової активності;</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>формуванню навичок самоконтролю;</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>кращому розумінню безпечного рівня фізичного навантаження;</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>контролю факторів серцево-судинного ризику;</span>
                  </li>
                  <li className="flex items-start gap-3 text-base leading-relaxed text-navy/82">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
                    <span>підготовці до подальшої самостійної фізичної активності.</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-navy/60">
                  Результати залежать від вихідного стану, перебігу захворювання, супутніх станів, регулярності занять та інших індивідуальних факторів і не можуть бути гарантовані.
                </p>
              </div>
            </div>
          </div>
        </PageSection>

        <section id="programs" className="scroll-mt-24 bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div>
              <h2 className="max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
                Програми та вартість
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy/70">
                Тривалість і наповнення програми залежать від стану пацієнта, необхідної кількості занять, консультацій, функціональної діагностики та формату проходження реабілітації.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,1fr))_0.94fr]">
              {programCards.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
              <SupportHighlightsCard />
            </div>
            <p className="mt-6 text-center text-sm text-navy/60">
              Точне наповнення та вартість програми визначаються після консультації та оцінки стану.
            </p>
          </div>
        </section>

        <OtherServicesSlider />

        <DocumentsReviewSection onOpenDocumentsModal={() => setDocumentsModalOpen(true)} />

        <PageSection id="cta" className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="relative overflow-hidden rounded-[38px] border border-emerald-100/70 bg-[linear-gradient(135deg,rgba(236,253,245,0.95)_0%,rgba(255,255,255,0.98)_100%)] px-5 py-6 shadow-[0_30px_90px_rgba(34,197,94,0.12)] sm:px-8 sm:py-8 lg:px-12 lg:py-12 text-center">
              <h2 className="max-w-3xl mx-auto text-3xl font-extrabold leading-[1.08] text-navy sm:text-4xl lg:text-5xl">
                Зробіть перший крок до відновлення
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-base leading-relaxed text-navy/72 sm:text-lg">
                Запишіться на консультацію, щоб оцінити ваш поточний стан, визначити можливий формат реабілітації та сформувати подальший план відновлення після інфаркту.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => openModal("Записатися на консультацію")}
                  className="inline-flex min-h-[4.5rem] items-center justify-center gap-2.5 rounded-[20px] bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground shadow-[0_22px_48px_rgba(52,211,153,0.28)] transition-all hover:-translate-y-0.5 hover:bg-brand-green/92 hover:shadow-[0_28px_58px_rgba(52,211,153,0.34)] sm:min-w-[23rem] sm:px-8 sm:text-base"
                >
                  Записатися на консультацію
                </button>
              </div>
              <p className="mt-4 text-sm text-navy/60">
                Адміністратор зв'яжеться з вами для уточнення деталей та погодження зручного часу.
              </p>
            </div>
          </div>
        </PageSection>

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
                  Зібрали найпоширеніші запитання про реабілітацію після інфаркту міокарда. Якщо не знайшли
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

      <MedicalDocumentsModal open={documentsModalOpen} onOpenChange={setDocumentsModalOpen} />
      <SiteFooter />
    </div>
  );
}

function AnchorNav({
  breadcrumbItems,
}: {
  breadcrumbItems: Array<{ title: string; route: string }>;
}) {
  return (
    <div className="border-b border-border/70 bg-white">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <Breadcrumbs items={breadcrumbItems} className="pb-3 pt-4 sm:pt-4" />

        <div className="overflow-x-auto pb-4 scrollbar-none">
          <div className="flex min-w-max items-center gap-4 sm:gap-5">
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

function MethodCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-bold leading-snug text-navy">{title}</h3>
        <p className="mb-6 text-sm font-normal leading-relaxed text-slate-600">{text}</p>
      </div>
    </article>
  );
}

function SafetyStep({ number, title, text }: { number: number; title: string; text: string }) {
  return (
    <article className="relative flex flex-col rounded-[24px] border border-slate-200/80 bg-white p-6">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-extrabold text-lg">
        {number}
      </span>
      <h3 className="mt-4 text-lg font-bold leading-snug text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy/72">{text}</p>
    </article>
  );
}

function FormatCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-bold leading-snug text-navy">{title}</h3>
        <p className="mb-6 text-sm font-normal leading-relaxed text-slate-600">{text}</p>
      </div>
    </article>
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
          <div className="grid gap-0 lg:grid-cols-2">
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
                  <Heart className="size-8 text-primary sm:size-10" strokeWidth={2.05} />
                </span>
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
                    Про протипоказання
                  </h3>
                  <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
                  <p className="mt-5 text-base leading-relaxed text-navy/82 sm:text-lg">
                    Перед початком фізичної реабілітації лікар оцінює стан людини та можливість безпечного виконання навантажень.
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-navy/72 sm:text-lg">
                    Остаточне рішення щодо початку та обсягу реабілітації приймається лікарем після оцінки стану пацієнта.
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
              document.getElementById("documents")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            Детальніше
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
  program: {
    id: string;
    title: string;
    shortDescription: string;
    duration: string;
    priceLabel: string;
    route: string;
    isPopular?: boolean;
  };
}) {
  const isPopular = Boolean(program.isPopular);

  return (
    <article
      className={cn(
        "relative flex min-h-[286px] flex-col rounded-2xl border p-5 shadow-sm sm:min-h-[300px] sm:p-6",
        isPopular
          ? "border-primary bg-primary text-white shadow-primary/20"
          : "border-blue-100 bg-white",
      )}
    >
      {isPopular && (
        <span className="absolute right-4 top-4 rounded-full bg-white px-2.5 py-1 text-[0.7rem] font-bold text-primary shadow-sm sm:right-5 sm:top-5">
          Популярна
        </span>
      )}
      <h3
        className={cn(
          "text-[1.45rem] font-bold leading-[1.12] sm:text-xl",
          isPopular ? "pr-24 text-white" : "text-navy",
        )}
      >
        {program.title}
      </h3>
      {program.shortDescription && (
        <p
          className={cn(
            "mt-2.5 text-[0.92rem] leading-[1.65] sm:mt-3 sm:text-sm",
            isPopular ? "text-white/82" : "text-navy/72",
          )}
        >
          {program.shortDescription}
        </p>
      )}
      <dl
        className={cn(
          "mt-5 space-y-3 border-t pt-4 text-sm sm:mt-6 sm:space-y-4 sm:pt-5",
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
            {program.duration}
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
            className={cn(
              "mt-1 text-[1.35rem] font-extrabold sm:text-lg",
              isPopular ? "text-white" : "text-primary",
            )}
          >
            {program.priceLabel}
          </dd>
        </div>
      </dl>
      <div className="mt-auto pt-6 sm:pt-8">
        <AppLink
          to={program.route}
          className={cn(
            "inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors sm:px-5 sm:py-3",
            isPopular
              ? "bg-white text-primary hover:bg-white/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90",
          )}
        >
          {program.priceLabel}
          <ArrowRight className="size-4" />
        </AppLink>
      </div>
    </article>
  );
}

function SupportHighlightsCard() {
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
  const currentSlideLabel = String(activeIndex + 1).padStart(2, "0");
  const totalSlidesLabel = String(SUPPORT_HIGHLIGHTS.length).padStart(2, "0");
  const isAnchorLink = activeHighlight.ctaHref.startsWith("#");
  const buttonClassName =
    "inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-[16px] border border-emerald-400/80 bg-white/92 px-4 py-3 text-[0.95rem] font-bold text-emerald-700 shadow-[0_14px_28px_rgba(21,128,61,0.12)] transition-all hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-white sm:min-h-[52px] sm:px-5 sm:py-3.5 sm:text-base";

  return (
    <aside
      className="relative isolate flex h-full min-h-[414px] overflow-hidden rounded-[28px] border border-emerald-300/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.99)_0%,rgba(247,255,250,0.99)_62%,rgba(239,252,245,0.99)_100%)] p-4 shadow-[0_24px_46px_rgba(53,200,138,0.14)] sm:min-h-[426px] sm:p-5 xl:min-h-[438px] xl:-translate-y-1"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(53,200,138,0.16),transparent_36%)]"
        aria-hidden
      />
      <div
        className="absolute left-[-28px] top-10 h-28 w-28 rounded-full bg-white/75 blur-2xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-brand-green/12 blur-3xl"
        aria-hidden
      />

      <div className="relative flex h-full w-full flex-col">
        <span className="text-[1.28rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-emerald-800 sm:text-[1.4rem]">
          Акції та спецумови
        </span>
        <div
          className="mt-3 flex items-center gap-2.5 sm:mt-4 sm:gap-3"
          role="tablist"
          aria-label="Акції та спеціальні умови"
        >
          <span className="min-w-[54px] text-[0.98rem] font-extrabold tracking-[-0.03em] text-emerald-800 sm:min-w-[58px] sm:text-[1.05rem]">
            {currentSlideLabel}
            <span className="px-1.5 text-emerald-800/38">/</span>
            <span className="text-emerald-800/62">{totalSlidesLabel}</span>
          </span>

          {SUPPORT_HIGHLIGHTS.map((highlight, index) => (
            <button
              key={highlight.id}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={highlight.title}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeIndex === index
                  ? "w-8 bg-[linear-gradient(90deg,#1f9d68_0%,#35c88a_55%,#6ee7a8_100%)] shadow-[0_6px_14px_rgba(53,200,138,0.22)]"
                  : "w-6 bg-emerald-100 hover:bg-emerald-200",
              )}
            />
          ))}
        </div>

        <div
          key={activeHighlight.id}
          className="mt-4 flex flex-1 flex-col animate-in fade-in slide-in-from-bottom-2 duration-500 sm:mt-5"
          aria-live="polite"
        >
          <SupportHighlightVisual highlight={activeHighlight} />

          <div className="mt-4 flex h-[58px] items-start sm:mt-5 sm:h-[66px]">
            <h3 className="max-w-[12ch] text-[1.5rem] font-black leading-[1.02] tracking-[-0.04em] text-emerald-700 sm:text-[1.7rem]">
              {activeHighlight.title}
            </h3>
          </div>
          <div className="mt-2 flex h-[82px] items-start sm:h-[88px]">
            <p className="max-w-[25ch] text-[0.86rem] leading-[1.58] text-navy/72 sm:text-[0.9rem] sm:leading-[1.62]">
              {activeHighlight.description}
            </p>
          </div>

          <div className="mt-auto pt-4">
            {activeHighlight.ctaLabel &&
              (isAnchorLink ? (
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
              ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function SupportHighlightVisual({ highlight }: { highlight: SupportHighlight }) {
  if (highlight.id === "senior") {
    return (
      <div className="relative h-[144px] sm:h-[150px]">
        <div
          className="absolute left-1/2 top-4 h-[110px] w-[110px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(93,215,146,0.28)_0%,rgba(93,215,146,0.14)_46%,rgba(93,215,146,0.04)_74%,transparent_76%)] sm:top-5 sm:h-[118px] sm:w-[118px]"
          aria-hidden
        />
        <Sparkles
          className="absolute left-2 top-10 size-3.5 text-emerald-200 sm:top-11 sm:size-4"
          strokeWidth={2.2}
          aria-hidden
        />
        <Sparkles
          className="absolute right-4 top-3 size-4 text-emerald-500 sm:top-4 sm:size-4.5"
          strokeWidth={2.1}
          aria-hidden
        />
        <Sparkles
          className="absolute bottom-6 right-5 size-4 text-emerald-600 sm:bottom-7 sm:size-4.5"
          strokeWidth={2.1}
          aria-hidden
        />

        <div className="absolute left-1/2 top-5 flex h-[96px] w-[72px] -translate-x-1/2 rotate-[18deg] items-center justify-center rounded-[22px] bg-[linear-gradient(180deg,#34d67b_0%,#10a44e_100%)] shadow-[0_18px_32px_rgba(16,164,78,0.24)] sm:top-6 sm:h-[104px] sm:w-[78px] sm:rounded-[24px]">
          <span
            className="absolute right-2.5 top-2.5 size-3 rounded-full bg-emerald-900/45 ring-3 ring-white/14 sm:right-3 sm:top-3 sm:size-3.5"
            aria-hidden
          />
          <Percent className="size-8 text-white sm:size-9" strokeWidth={2.7} />
        </div>

        <div className="absolute bottom-0 left-2.5 flex items-center gap-1.5 rounded-[16px] border border-emerald-100 bg-white/96 px-2.5 py-1.5 shadow-[0_12px_22px_rgba(21,128,61,0.12)] sm:left-3 sm:gap-2 sm:px-3 sm:py-2">
          <CalendarDays className="size-4 text-emerald-600 sm:size-4.5" strokeWidth={2.1} />
          <span className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-emerald-700 sm:text-[0.7rem]">
            60+
          </span>
        </div>
      </div>
    );
  }

  const Icon = highlight.icon;
  const secondaryIcon = highlight.id === "military" ? ShieldCheck : HandHeart;
  const SecondaryIcon = secondaryIcon;
  const secondaryLabel = highlight.id === "military" ? "Підтримка" : "Разом";

  return (
    <div className="relative flex h-[144px] items-center justify-center sm:h-[150px]">
      <div
        className="absolute left-1/2 top-4 h-[114px] w-[114px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(93,215,146,0.2)_0%,rgba(93,215,146,0.08)_50%,transparent_76%)] sm:top-5 sm:h-[122px] sm:w-[122px]"
        aria-hidden
      />
      <Sparkles
        className="absolute left-3 top-8 size-3.5 text-emerald-200 sm:top-9 sm:size-4"
        strokeWidth={2.2}
        aria-hidden
      />
      <Sparkles
        className="absolute right-6 top-4 size-4 text-emerald-400 sm:top-5 sm:size-4.5"
        strokeWidth={2.1}
        aria-hidden
      />
      <Sparkles
        className="absolute bottom-7 right-4 size-4 text-emerald-600 sm:bottom-8 sm:size-4.5"
        strokeWidth={2.1}
        aria-hidden
      />

      <div className="relative flex size-[92px] items-center justify-center rounded-[28px] bg-[linear-gradient(165deg,#35c88a_0%,#149b56_100%)] shadow-[0_18px_32px_rgba(16,164,78,0.22)] sm:size-[98px] sm:rounded-[30px]">
        <Icon className="size-9 text-white sm:size-10" strokeWidth={2.15} />
      </div>

      <div className="absolute bottom-0 left-2.5 flex items-center gap-1.5 rounded-[16px] border border-emerald-100 bg-white/96 px-2.5 py-1.5 shadow-[0_12px_22px_rgba(21,128,61,0.12)] sm:left-3 sm:gap-2 sm:px-3 sm:py-2">
        <SecondaryIcon className="size-4 text-emerald-600 sm:size-4.5" strokeWidth={2.1} />
        <span className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-emerald-700 sm:text-[0.7rem]">
          {secondaryLabel}
        </span>
      </div>
    </div>
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

function DocumentsReviewSection({ onOpenDocumentsModal }: { onOpenDocumentsModal: () => void }) {
  return (
    <section id="documents" className="scroll-mt-24 py-12 sm:py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[38px] border border-blue-100/70 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.99)_0%,rgba(246,250,255,0.98)_32%,rgba(234,242,255,0.97)_100%)] px-5 py-6 shadow-[0_30px_90px_rgba(31,61,120,0.12)] sm:px-8 sm:py-8 lg:px-12 lg:py-12">
          <div
            className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-white/95 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-10 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-brand-green/10 blur-3xl"
            aria-hidden
          />

          <div className="relative grid gap-8 xl:grid-cols-[minmax(0,0.96fr)_minmax(460px,1.04fr)] xl:items-center xl:gap-12">
            <div className="max-w-3xl xl:py-4">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/92 px-5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-primary shadow-[0_12px_28px_rgba(31,61,120,0.1)] sm:px-6 sm:text-[0.92rem]">
                Онлайн-звернення
              </span>

              <h2 className="mt-7 max-w-[13.9ch] font-black leading-[0.9] tracking-[-0.045em] text-navy lg:max-w-[12.8ch]">
                <span className="block whitespace-nowrap text-[2.5rem] sm:text-[3.75rem] lg:text-[4.3rem]">
                  Попередньо надішліть
                </span>
                <span className="block whitespace-nowrap text-[3.2rem] text-primary sm:text-[4.8rem] lg:text-[5.45rem]">
                  документи
                </span>
                <span className="block whitespace-nowrap text-[2.5rem] sm:text-[3.75rem] lg:text-[4.3rem]">
                  для ознайомлення
                </span>
              </h2>

              <p className="mt-7 max-w-[34rem] text-base leading-relaxed text-navy/72 sm:text-[1.15rem] sm:leading-[1.7]">
                Якщо ви не впевнені, яка програма вам підходить, надішліть наявні медичні документи. Це допоможе краще підготуватися до консультації та визначити подальші кроки.
              </p>

              <div className="mt-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-navy">Як це працює</h3>
                  <ul className="space-y-2 text-base leading-relaxed text-navy/76">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      <span><strong>Надішліть документи</strong> — передайте наявні медичні висновки та результати обстежень через форму або адміністратору.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      <span><strong>Попереднє ознайомлення</strong> — фахівець ознайомиться з наданою інформацією перед консультацією.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      <span><strong>Зв'язок з адміністратором</strong> — адміністратор зв'яжеться з вами для уточнення деталей і погодження консультації.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      <span><strong>Визначення подальших кроків</strong> — після консультації визначається необхідність додаткової діагностики та можливий формат реабілітації.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-navy">Які документи бажано надати</h3>
                  <p className="text-base leading-relaxed text-navy/72">Якщо вони у вас є:</p>
                  <ul className="space-y-2 text-base leading-relaxed text-navy/76">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      <span>виписка зі стаціонару;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      <span>висновок кардіолога;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      <span>результати ЕКГ та ЕхоКГ;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      <span>результати коронарографії;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      <span>документи про проведене стентування або операцію;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      <span>результати лабораторних та інших обстежень;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      <span>перелік препаратів, які ви приймаєте;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                      <span>інші медичні документи, що стосуються перенесеного інфаркту.</span>
                    </li>
                  </ul>
                  <p className="text-sm text-navy/60">Якщо у вас немає повного комплекту документів, ви все одно можете звернутися до адміністратора.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch">
                <button
                  type="button"
                  onClick={onOpenDocumentsModal}
                  className="inline-flex min-h-[4.5rem] items-center justify-center gap-2.5 rounded-[20px] bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground shadow-[0_22px_48px_rgba(52,211,153,0.28)] transition-all hover:-translate-y-0.5 hover:bg-brand-green/92 hover:shadow-[0_28px_58px_rgba(52,211,153,0.34)] sm:min-w-[23rem] sm:px-8 sm:text-base"
                >
                  Надіслати документи
                </button>

                <a
                  href={CONTACTS.phoneHref}
                  className="inline-flex min-h-[4.5rem] items-center justify-center gap-3 rounded-[20px] border border-[#7A8397] bg-white/96 px-7 py-4 text-base font-bold text-[#586279] shadow-[0_18px_40px_rgba(88,98,121,0.1)] transition-colors hover:border-[#586279] hover:bg-white hover:text-[#3F4758] sm:min-w-[16rem] sm:px-8"
                >
                  <Phone className="size-6 text-[#586279]" />
                  {CONTACTS.phone}
                </a>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white/95 shadow-[0_28px_65px_rgba(31,61,120,0.14)]">
                <img
                  src={cardioRehabCtaImg}
                  alt="Фахівець допомагає пацієнтці виконувати вправу під час реабілітації"
                  loading="lazy"
                  width={1536}
                  height={1024}
                  className="aspect-[1.22/1] w-full object-cover object-center md:object-[center_58%]"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.08)_100%)]"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MedicalDocumentsModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden border-none bg-white p-0 shadow-[0_32px_90px_rgba(15,23,42,0.32)] sm:max-w-3xl sm:rounded-[32px]">
        <DialogHeader className="sr-only">
          <DialogTitle>Надіслати медичні документи</DialogTitle>
          <DialogDescription>
            Форма для надсилання медичних документів на попередній розгляд.
          </DialogDescription>
        </DialogHeader>
        <MedicalDocumentsForm className="rounded-none border-0 shadow-none" />
      </DialogContent>
    </Dialog>
  );
}

function MedicalDocumentsForm({ className }: { className?: string }) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [files, setFiles] = React.useState<File[]>([]);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [dragActive, setDragActive] = React.useState(false);
  const [submitState, setSubmitState] = React.useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const validatePhone = (value: string) => {
    const cleaned = value.replace(/[\s()+-]/g, "");
    return /^\d{10,13}$/.test(cleaned);
  };

  const validateFiles = (nextFiles: File[]) => {
    const invalidFormat = nextFiles.find((file) => {
      const extension = file.name.split(".").pop()?.toLowerCase();
      return !extension || !["pdf", "jpg", "jpeg", "png"].includes(extension);
    });

    if (invalidFormat) {
      return `Файл "${invalidFormat.name}" має недопустимий формат. Доступні PDF, JPG і PNG.`;
    }

    const tooLarge = nextFiles.find((file) => file.size > 10 * 1024 * 1024);

    if (tooLarge) {
      return `Файл "${tooLarge.name}" перевищує 10 МБ.`;
    }

    return null;
  };

  const applyFiles = (nextFiles: File[]) => {
    if (nextFiles.length === 0) return;

    const validationError = validateFiles(nextFiles);

    if (validationError) {
      setSubmitState({ type: "error", message: validationError });
      return;
    }

    setFiles(nextFiles);
    setSubmitState({ type: "idle", message: "" });
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    applyFiles(Array.from(event.target.files || []));
    event.target.value = "";
  };

  const formatFileSize = (size: number) => {
    if (size < 1024 * 1024) {
      return `${Math.max(1, Math.round(size / 1024))} КБ`;
    }

    return `${(size / (1024 * 1024)).toFixed(1)} МБ`;
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[32px] border border-blue-100/90 bg-white p-5 shadow-[0_22px_60px_rgba(31,61,120,0.08)] sm:p-8 lg:p-10",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -right-14 top-0 h-52 w-52 rounded-full bg-primary/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-8 h-40 w-40 rounded-full bg-sky-100/70 blur-3xl"
        aria-hidden
      />

      <div className="relative">
        <h3 className="max-w-4xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-[2.2rem]">
          Надішліть медичні документи для попереднього розгляду
        </h3>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-navy/68 sm:text-lg">
          Це допоможе лікарю ознайомитися з вашим станом і підготувати персональні рекомендації ще
          до першого контакту.
        </p>

        <form
          className="mt-8"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();

            if (!files.length) {
              setSubmitState({
                type: "error",
                message: "Додайте хоча б один медичний документ для попереднього розгляду.",
              });
              return;
            }

            if (!name.trim()) {
              setSubmitState({
                type: "error",
                message: "Вкажіть ваше ім’я, щоб ми знали, як до вас звертатися.",
              });
              return;
            }

            if (!phone.trim()) {
              setSubmitState({
                type: "error",
                message: "Вкажіть номер телефону для зв’язку з адміністратором.",
              });
              return;
            }

            if (!validatePhone(phone)) {
              setSubmitState({
                type: "error",
                message: "Введіть коректний номер телефону у форматі +380 XX XXX XX XX.",
              });
              return;
            }

            setSubmitState({
              type: "success",
              message:
                "Документи надіслано. Після попереднього розгляду адміністратор зв’яжеться з вами.",
            });
            setFiles([]);
            setName("");
            setPhone("");
          }}
        >
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            onDragOver={(event) => {
              event.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={(event) => {
              event.preventDefault();
              setDragActive(false);
            }}
            onDrop={(event) => {
              event.preventDefault();
              setDragActive(false);
              applyFiles(Array.from(event.dataTransfer.files || []));
            }}
            className={cn(
              "group flex w-full flex-col items-center justify-center rounded-[24px] border border-dashed px-6 py-10 text-center transition-all sm:px-8 sm:py-12",
              dragActive
                ? "border-primary bg-soft-blue/80 shadow-[0_18px_40px_rgba(37,99,235,0.12)]"
                : "border-primary/20 bg-[linear-gradient(180deg,rgba(248,251,255,0.9)_0%,rgba(255,255,255,0.96)_100%)] hover:border-primary/35 hover:bg-soft-blue/40",
            )}
          >
            <span className="flex size-[72px] items-center justify-center rounded-full bg-primary/10 text-primary sm:size-20">
              <UploadCloud className="size-9 sm:size-10" strokeWidth={1.85} />
            </span>
            <span className="mt-5 text-xl font-bold leading-tight text-navy">Додайте файли</span>
            <span className="mt-2 text-sm leading-relaxed text-navy/58 sm:text-base">
              PDF, JPG, PNG (до 10 МБ на файл)
            </span>
            <span className="mt-1 text-xs leading-relaxed text-navy/48 sm:text-sm">
              Перетягніть файли сюди або натисніть, щоб вибрати
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
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {files.map((file) => (
                <div
                  key={`${file.name}-${file.size}`}
                  className="flex items-center gap-3 rounded-[18px] border border-blue-100/90 bg-white/92 px-4 py-3 shadow-[0_10px_25px_rgba(31,61,120,0.04)]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FileText className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-navy">{file.name}</p>
                    <p className="mt-0.5 text-xs text-navy/55">{formatFileSize(file.size)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 grid gap-3 lg:grid-cols-2">
            <label className="relative block">
              <span className="sr-only">Ваше ім’я</span>
              <input
                type="text"
                placeholder="Ваше ім’я"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  if (submitState.type !== "idle") {
                    setSubmitState({ type: "idle", message: "" });
                  }
                }}
                className="min-h-14 w-full rounded-[18px] border border-blue-100 bg-white px-5 text-sm font-medium text-navy outline-none transition-all placeholder:text-navy/36 focus:border-primary focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
              />
            </label>

            <label className="relative block">
              <span className="sr-only">Номер телефону</span>
              <input
                type="tel"
                placeholder="Номер телефону"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  if (submitState.type !== "idle") {
                    setSubmitState({ type: "idle", message: "" });
                  }
                }}
                className="min-h-14 w-full rounded-[18px] border border-blue-100 bg-white px-5 text-sm font-medium text-navy outline-none transition-all placeholder:text-navy/36 focus:border-primary focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-[18px] bg-[linear-gradient(90deg,rgba(37,99,235,0.46)_0%,#1d4ed8_100%)] px-6 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(37,99,235,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(37,99,235,0.24)] sm:text-base"
          >
            Надіслати документи
            <Send className="size-4 sm:size-5" />
          </button>

          {submitState.type !== "idle" && (
            <p
              className={cn(
                "mt-4 rounded-[18px] px-4 py-3 text-sm font-semibold leading-relaxed",
                submitState.type === "success"
                  ? "border border-brand-green/25 bg-brand-green/10 text-navy"
                  : "border border-red-200 bg-red-50 text-red-700",
              )}
              role={submitState.type === "success" ? "status" : "alert"}
            >
              {submitState.message}
            </p>
          )}

          <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-medium text-navy/56 sm:text-sm">
            <ShieldCheck className="size-4 shrink-0 text-primary/70" />
            <span>Ваші дані захищені та не передаються третім особам</span>
          </div>
        </form>
      </div>
    </div>
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
            Реабілітація після інфаркту міокарка
          </h2>

          <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green" />

          <div className="mt-6 text-sm leading-relaxed text-navy/72 sm:text-base sm:leading-7">
            <h3 className="font-bold text-navy mt-4 mb-2">
              Чому відновлення після інфаркту міокарка потребує контролю
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
                Ключове завдання реабілітації після інфаркту міокарка — не просто відновити фізичну активність, а
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
                Де можливо пройти реабілітацію після інфаркту міокарка в Україні
              </h3>
              <p className="mb-4">
                Після інфаркту міокарка пацієнти зазвичай обирають між двома форматами
                відновлення — санаторним або спеціалізованим медичним центром. Вибір здається
                простим, але саме тут часто виникає помилка: не кожен варіант однаково підходить для
                відновлення серця.
              </p>
              <p className="mb-4">
                Санаторії здебільшого орієнтовані на загальне зміцнення організму. Це комфортний
                формат із базовою фізичною активністю, але без спеціалізації з реабілітації після інфаркту міокарка. У багатьох випадках програми не враховують конкретний тип втручання,
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
                Відмінність спеціалізованої реабілітації після інфаркту міокарка від санаторного підходу
              </h3>
              <p className="mb-4">
                Головна відмінність полягає у рівні відповідальності за стан пацієнта. У санаторному
                форматі навантаження зазвичай мають загальний характер і не прив’язані до конкретних
                показників роботи серця. Пацієнт рухається «за самопочуттям», але після операцій
                цього недостатньо — організм не завжди дає чіткі сигнали про перевантаження.
              </p>
              <p className="mb-4">
                У спеціалізованому центрі реабілітації після інфаркту міокарка програму розробляють
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
                повноцінного відновлення. Серцево-судинні захворювання часто супроводжуються тривогою,
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
              <p className="mb-4">На результати реабілітації після інфаркту міокарка значною мірою впливають:</p>
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
                <strong>Чи обов’язкова реабілітація після інфаркту міокарка?</strong>
              </p>
              <p className="mb-4">
                Реабілітація після інфаркту міокарка не є формальною вимогою, але без неї ризик ускладнень і рецидивів
                збільшується, а якість життя знижується.
              </p>
              <p className="mb-2">
                <strong>
                  Чим відрізняється реабілітація після інфаркту міокарка від звичайного санаторного лікування?
                </strong>
              </p>
              <p className="mb-4">
                Реабілітація після інфаркту міокарка передбачає постійний медичний контроль та індивідуальний
                підбір навантажень. Це принципово відрізняється від стандартних підходів більшості
                санаторіїв.
              </p>
              <p className="mb-2">
                <strong>Скільки часу триває реабілітація після інфаркту міокарка?</strong>
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
    "Коли можна починати реабілітацію після інфаркту?",
    "Чи можна проходити реабілітацію після стентування?",
    "Чи безпечні фізичні навантаження після інфаркту?",
    "Скільки триває реабілітація?",
    "Чи потрібно проходити обстеження перед початком реабілітації?",
    "Чи потрібне направлення лікаря?",
    "Які документи потрібно взяти на консультацію?",
    "Чи можна проходити реабілітацію амбулаторно?",
    "Чи можна продовжити реабілітацію вдома?",
    "Як дізнатися вартість програми?",
  ];

  const picked = preferred
    .map((question) => items.find((item) => item.question === question))
    .filter(Boolean) as FAQItem[];

  return picked.length > 0 ? picked : items.slice(0, 6);
}
