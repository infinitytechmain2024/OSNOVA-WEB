import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/app-link";
import {
  CompanyOverviewSection,
  companyOverviewCtaClassName,
} from "@/components/company-overview-section";
import { CooperationCascade } from "@/components/cooperation-cascade";
import {
  ArrowRight,
  Heart,
  Dumbbell,
  Phone,
  Users,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Brain,
  Trophy,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  UserCheck,
  Flame,
  Zap,
  Network,
  Microscope,
  Stethoscope,
  ClipboardList,
  Calendar,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NewsCard } from "@/components/news-card";
import { FAQConsultationCTA } from "@/components/faq-consultation-cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { NEWS_ARTICLES } from "@/data/news";
import { useConsultationModal } from "@/components/consultation-form";
import { RehabilitationMethodsSlider } from "@/components/rehabilitation-methods-slider";
import { Breadcrumbs } from "@/components/blocks";
import { CarouselNavigation } from "@/components/carousel-navigation";
import { cn } from "@/lib/utils";

// Images
import rehabImg from "@/assets/service-rehab.jpg";
import checkupImg from "@/assets/service-checkup.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import ergoImg from "@/assets/ergometer.jpg";
import educationTrainingImg from "@/assets/education-training.png";
import educationConferenceImg from "@/assets/education-conference.png";
import educationPracticalTrainingImg from "@/assets/education-practical-training-v2.jpg";
import educationScienceEventImg from "@/assets/education-science-event-v2.jpg";
import balanceReferenceCardImg from "@/assets/home/balance-reference-card.png";
import partnerAsmuLogo from "@/assets/partners/partner-asmu.png";
import partnerChnuLogo from "@/assets/partners/partner-chnu.png";
import partnerHeartLogo from "@/assets/partners/partner-heart.svg";
import partnerIfnmuLogo from "@/assets/partners/partner-ifnmu.png";
import partnerKarpatskaAkademiiaLogo from "@/assets/partners/partner-karpatska-akademiia.png";
import partnerSytenkoLogo from "@/assets/partners/partner-sytenko.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Снова Реабілітація — Медичний центр діагностики та відновлення" },
      {
        name: "description",
        content:
          "Снова Реабілітація — медичний центр, де діагностика, лікування та відновлення об'єднані в єдину систему. Індивідуальні програми реабілітації після захворювань, травм та операцій.",
      },
    ],
  }),
  component: Index,
});

const HERO_SLIDES = [
  {
    image: rehabImg,
    title: "Реабілітація",
    subtitle: "Верніться до активного життя",
    text: "Індивідуальна програма відновлення після захворювань, операцій та травм з урахуванням вашого стану.",
    ctaLabel: "Записатися на реабілітацію",
  },
  {
    image: cpetImg,
    title: "Кардіореабілітація",
    subtitle: "Відновлення серця безпечно",
    text: "Персональна програма відновлення після серцево-судинних захворювань та операцій.",
    ctaLabel: "Записатися на кардіореабілітацію",
  },
  {
    image: ecgImg,
    title: "Діагностика",
    subtitle: "Дізнайтеся більше про своє здоров'я",
    text: "Комплексна оцінка стану організму для вибору правильного напряму відновлення.",
    ctaLabel: "Записатися на діагностику",
  },
  {
    image: checkupImg,
    title: "Чекап здоров'я",
    subtitle: "Контролюйте здоров'я завчасно",
    text: "Комплексне обстеження для оцінки стану організму та виявлення ризиків.",
    ctaLabel: "Обрати чекап",
  },
  {
    image: sportsImg,
    title: "Спортивна медицина",
    subtitle: "Тренуйтеся безпечніше",
    text: "Оцінка фізичних можливостей організму та підбір оптимальних навантажень.",
    ctaLabel: "Записатися на консультацію",
  },
];

// 8 Напрямів реабілітації та лікування
const DIRECTIONS = [
  {
    icon: Heart,
    title: "КАРДІОЛОГІЯ",
    text: "Лікування захворювань серця, відновлення після інфаркту та операцій, ЕКГ та CPET-діагностика.",
    expandedText:
      "Працюємо з пацієнтами після інфаркту, стентування, шунтування та інших кардіологічних втручань. Програма може включати кардіологічний контроль, оцінку переносимості навантажень, безпечні тренування та поетапне повернення до щоденної активності.",
    image: ecgImg,
    href: "/poslugy/reabilitatsiia/kardioreabilitatsiia",
    badge: "Серцево-судинна система",
  },
  {
    icon: Dumbbell,
    title: "ОРТОПЕДІЯ ТА ТРАВМАТОЛОГІЯ",
    text: "Відновлення після травм, переломів, хірургічних втручань на суглобах та ендопротезування.",
    expandedText:
      "Допомагаємо відновити рухливість після переломів, операцій, ушкоджень зв'язок і заміни суглобів. У фокусі програми - зменшення болю, повернення опори, корекція рухових стереотипів і поступове повернення до звичного рівня активності.",
    image: rehabImg,
    href: "/poslugy/reabilitatsiia/ortopedichna-reabilitatsiia",
    badge: "Суглоби та зв'язки",
  },
  {
    icon: Flame,
    title: "ВЕРТЕБРОЛОГІЯ (ЗАХВОРЮВАННЯ ХРЕБТА)",
    text: "Лікування та реабілітація захворювань хребта, гриж, остеохондрозу та відновлення біомеханіки спини.",
    expandedText:
      "Напрямок підходить при болю в шиї та спині, міжхребцевих грижах, порушеннях постави та перевантаженні хребта. Програма спрямована на зниження больового синдрому, відновлення стабільності корпусу, рухливості та правильної біомеханіки.",
    image: ergoImg,
    href: "/poslugy/reabilitatsiia/vertebrolohichna-reabilitatsiia",
    badge: "Здоров'я хребта",
  },
  {
    icon: Stethoscope,
    title: "РЕВМАТОЛОГІЯ",
    text: "Комплексна терапія артриту, артрозу, системних захворювань сполучної тканини зі збереженням рухливості.",
    expandedText:
      "Підтримуємо пацієнтів із хронічними та системними захворюваннями суглобів і сполучної тканини. Основні завдання - контролювати біль і запалення, зберегти рухливість суглобів та адаптувати навантаження до поточного стану.",
    image: checkupImg,
    href: "/poslugy/reabilitatsiia/revmatolohichna-reabilitatsiia",
    badge: "Суглоби та сполучна тканина",
  },
  {
    icon: Brain,
    title: "НЕВРОЛОГІЯ",
    text: "Відновлення після інсультів, нейропатій, уражень центральної та периферичної нервової системи.",
    expandedText:
      "Реабілітація допомагає при наслідках інсульту, травм нервової системи, порушеннях координації та чутливості. Ми працюємо над відновленням руху, рівноваги, побутової самостійності та якості життя пацієнта.",
    image: cpetImg,
    href: "/poslugy/reabilitatsiia/nevrolohichna-reabilitatsiia",
    badge: "Нервова система",
  },
  {
    icon: Users,
    title: "ПСИХОЛОГІЯ ТА ПСИХІЧНЕ (МЕНТАЛЬНЕ) ЗДОРОВ'Я",
    text: "Психологічна підтримка, зняття стресу, відновлення ментального здоров'я та адаптація після навантажень.",
    expandedText:
      "Підтримуємо людей у стані хронічного стресу, тривоги, емоційного виснаження або після складних медичних подій. Робота може включати стабілізацію емоційного стану, адаптацію до змін у житті та відновлення внутрішнього ресурсу.",
    image: educationTrainingImg,
    href: "/poslugy/reabilitatsiia/psykholohichna-pidtrymka",
    badge: "Психологія",
  },
  {
    icon: Trophy,
    title: "СПОРТИВНА МЕДИЦИНА",
    text: "Підвищення фізичних показників, спортивна адаптація та контрольоване відновлення після навантажень.",
    expandedText:
      "Напрямок поєднує функціональну оцінку, супровід спортсменів і безпечне повернення до тренувань після травм або перерви. Ми допомагаємо коригувати навантаження, запобігати перевантаженню та покращувати фізичну готовність.",
    image: sportsImg,
    href: "/poslugy/vidnovlennia",
    badge: "Спорт & Адаптація",
  },
  {
    icon: Zap,
    title: "ПРОФІЛАКТИЧНА РЕАБІЛІТАЦІЯ (ПРЕВЕНТИВНА)",
    text: "Виявлення прихованих медичних ризиків до появи симптомів і формування превентивної програми здоров'я.",
    expandedText:
      "Цей напрямок орієнтований на людей, які хочуть вчасно побачити ризики та скоригувати спосіб життя ще до розвитку захворювання. У програмі можуть поєднуватися діагностика, оцінка факторів ризику, рекомендації щодо активності, відновлення та профілактики.",
    image: educationConferenceImg,
    href: "/poslugy/check-up",
    badge: "Раннє виявлення ризиків",
  },
];

// Переваги — Featured (з зображеннями)
const FEATURED_FEATURES = [
  {
    icon: Stethoscope,
    title: "Провідні методики",
    text: "Починаємо фізичну терапію, апаратні методики, гідрокінезотерапію та інші підходи у персональній програмі відновлення.",
    image: rehabImg,
  },
  {
    icon: Microscope,
    title: "Наукова база",
    text: "Клінічна практика, навчання та розвиток методик на основі фахової медичної експертизи.",
    image: ecgImg,
  },
  {
    icon: ClipboardList,
    title: "Середовище Карпат",
    text: "Чисте повітря, спокійна атмосфера та природне оточення, що підтримують процес відновлення.",
    image: cpetImg,
  },
];

// Переваги — Secondary (з іконками)
const SECONDARY_FEATURES = [
  {
    icon: ClipboardList,
    title: "Індивідуальні програми",
    text: "Програма реабілітації формується під ваші потреби та стан.",
  },
  {
    icon: Network,
    title: "Комплексний підхід",
    text: "Об'єднуємо різні напрямки роботи для максимального результату.",
  },
  {
    icon: ShieldCheck,
    title: "Досвідчена команда",
    text: "Лікарі та терапевти з підтвердженою кваліфікацією та практикою.",
  },
  {
    icon: Stethoscope,
    title: "Професійна діагностика",
    text: "Сучасні методи оцінки для точного плану відновлення.",
  },
  {
    icon: ShieldCheck,
    title: "Комфорт і конфіденційність",
    text: "Спокійна атмосфера, повага до вас і вашого особистого простору.",
  },
  {
    icon: Microscope,
    title: "Мінеральні води",
    text: "Природний ресурс, що доповнює програму оздоровлення.",
  },
];

// Партнери
const PARTNERS = [
  {
    name: "Карпатська Академія",
    role: "Освітня платформа",
    href: "https://osnovahub.com/",
    logo: partnerKarpatskaAkademiiaLogo,
  },
  {
    name: "Черкаський національний університет імені Богдана Хмельницького",
    role: "Університетський партнер",
    href: "https://cdu.edu.ua/",
    logo: partnerChnuLogo,
  },
  {
    name: "Асоціація спортивної медицини України",
    role: "Професійна асоціація",
    href: "https://asmu.com.ua/",
    logo: partnerAsmuLogo,
  },
  {
    name: "Інститут ім. проф. М. І. Ситенка, Харків",
    role: "Науково-медичний інститут",
    href: "https://sytenko.org.ua/",
    logo: partnerSytenkoLogo,
  },
  {
    name: "Інститут серця МОЗ України",
    role: "Кардіохірургічний центр",
    href: "https://heart.kyiv.ua/",
    logo: partnerHeartLogo,
  },
  {
    name: "Івано-Франківський національний медичний університет",
    role: "Медичний університет",
    href: "https://www.ifnmu.edu.ua/",
    logo: partnerIfnmuLogo,
  },
];

const PARTNERS_PER_SLIDE = 3;
const PARTNER_GROUPS = Array.from(
  { length: Math.ceil(PARTNERS.length / PARTNERS_PER_SLIDE) },
  (_, index) =>
    PARTNERS.slice(index * PARTNERS_PER_SLIDE, index * PARTNERS_PER_SLIDE + PARTNERS_PER_SLIDE),
);

const EDUCATION_CARDS = [
  {
    title: "КУРСИ ТА МАЙСТЕР-КЛАСИ",
    text: "Практичні формати для відпрацювання навичок, сучасних методик та клінічних підходів.",
    href: "/kursy",
    image: educationPracticalTrainingImg,
    label: "ПРАКТИЧНЕ НАВЧАННЯ",
    audience: "Для лікарів та фахівців",
    format: "Практичні модулі",
    icon: GraduationCap,
  },
  {
    title: "НАУКОВІ ПОДІЇ",
    text: "Зустрічі фахівців для обміну досвідом, презентації досліджень і професійного діалогу.",
    href: "/konferentsii",
    image: educationScienceEventImg,
    label: "МІЖНАРОДНИЙ ОБМІН ДОСВІДОМ",
    audience: "Для медичної спільноти",
    format: "Лекції та дискусії",
    icon: BookOpen,
  },
];

// FAQ
const FAQ_VISIBLE_COUNT = 3;

const FAQS = [
  {
    question: "З чого почати реабілітацію?",
    answer:
      "Перший крок — консультація з нашим спеціалістом. Ми оцінюємо стан, визначаємо потреби та розробляємо індивідуальний план відновлення. Залиште заявку або зателефонуйте нам — і ми допоможемо почати шлях до відновлення правильно.",
  },
  {
    question: "Чи потрібне направлення лікаря?",
    answer:
      "Ні. Ви можете почати з консультації, після якої спеціалісти визначать необхідні кроки.",
  },
  {
    question: "Скільки триває реабілітація?",
    answer: "Тривалість залежить від стану пацієнта та цілей відновлення.",
  },
  {
    question: "Чи можна пройти лише діагностику?",
    answer: "Так. Ви можете пройти окреме обстеження та отримати рекомендації спеціалістів.",
  },
  {
    question: "Як проходить перша консультація?",
    answer:
      "Спеціаліст збирає анамнез, проводить огляд і функціональне тестування, після чого пояснює можливі варіанти відновлення та орієнтовний план.",
  },
  {
    question: "Чи можна пройти реабілітацію після операції?",
    answer:
      "Так. Програму підбираємо з урахуванням типу операції, рекомендацій лікаря та поточного стану пацієнта.",
  },
];

const HOME_PAGE_SECTION_LINKS = [
  { href: "#about-company", label: "Про компанію" },
  { href: "#directions", label: "Напрями реабілітації" },
  { href: "#consultation", label: "Консультація" },
  { href: "#methods", label: "Методи відновлення" },
  { href: "#advantages", label: "Переваги" },
  { href: "#partners", label: "Наші партнери" },
  { href: "#education", label: "Освіта та наука" },
  { href: "#cooperation", label: "Співпраця" },
  { href: "#blog", label: "Блог" },
  { href: "#faq", label: "Питання та відповіді" },
  { href: "#about-methods", label: "Сучасні методики" },
] as const;

function SectionHeader({
  subtitle,
  title,
  centered = false,
  className = "",
}: {
  subtitle?: string;
  title: React.ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      {subtitle && (
        <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-primary backdrop-blur-md uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-extrabold leading-[1.15] text-navy md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <div
        className={`mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}

function DirectionCard({ direction }: { direction: (typeof DIRECTIONS)[number] }) {
  const [expanded, setExpanded] = React.useState(false);
  const expandedContentId = React.useId();

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative h-[210px] w-full overflow-hidden bg-slate-100">
        <img
          src={direction.image}
          alt={direction.title}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col bg-white p-6 md:p-7">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-primary/15 bg-primary/[0.06] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
            {direction.badge}
          </span>
          <h3 className="mb-3 text-xl font-bold leading-snug text-navy">{direction.title}</h3>
          <p className="text-sm font-normal leading-relaxed text-slate-600">{direction.text}</p>

          <div
            id={expandedContentId}
            className={cn(
              "grid overflow-hidden transition-all duration-300 ease-out",
              expanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <div className="border-t border-slate-200 pt-5 text-sm leading-relaxed text-slate-600">
                {direction.expandedText}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start gap-3">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls={expandedContentId}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            <span>{expanded ? "Згорнути" : "Детальніше"}</span>
            <ChevronDown
              className={cn("size-4 transition-transform duration-200", expanded && "rotate-180")}
            />
          </button>

          <AppLink
            to={direction.href}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-md"
          >
            Перейти до напряму{" "}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </AppLink>
        </div>
      </div>
    </div>
  );
}

function PartnerCard({ partner }: { partner: (typeof PARTNERS)[number] }) {
  return (
    <article className="group flex h-full min-h-[360px] flex-col rounded-[28px] border border-slate-200/80 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-xl">
      <div className="flex h-40 items-center justify-center rounded-[22px] bg-slate-50 p-6 ring-1 ring-slate-100 transition-colors duration-300 group-hover:bg-white">
        <img
          src={partner.logo}
          alt={partner.name}
          loading="lazy"
          className="max-h-28 w-full object-contain"
        />
      </div>

      <div className="mt-7 flex flex-1 flex-col items-center">
        <span className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
          {partner.role}
        </span>
        <h3 className="max-w-sm text-xl font-extrabold leading-snug text-navy md:text-2xl">
          {partner.name}
        </h3>
      </div>

      <a
        href={partner.href}
        target="_blank"
        rel="noreferrer"
        className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-md"
        aria-label={`Детальніше про ${partner.name}`}
      >
        Детальніше <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  );
}

function EducationCard({ item }: { item: (typeof EDUCATION_CARDS)[number] }) {
  const Icon = item.icon;

  return (
    <AppLink
      to={item.href}
      aria-label={`Детальніше про ${item.title}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_18px_50px_-28px_rgba(15,50,92,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_24px_60px_-30px_rgba(15,50,92,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
    >
      <div className="relative h-60 w-full overflow-hidden bg-navy-deep sm:h-72 lg:h-80">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-navy-deep/20 to-navy-deep/5" />
        <div className="absolute inset-x-5 bottom-5 flex items-end sm:inset-x-6 sm:bottom-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
            <Icon className="size-4" />
            {item.label}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col bg-white p-6 sm:p-7 lg:p-8">
        <div className="mb-5 flex flex-wrap gap-2.5 text-[11px] font-semibold text-navy/70">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/[0.07] px-3 py-1.5 text-primary">
            <Users className="size-3.5" />
            {item.audience}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/25 bg-brand-green/10 px-3 py-1.5 text-navy">
            <Calendar className="size-3.5 text-brand-green" />
            {item.format}
          </span>
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="text-2xl font-extrabold leading-tight text-navy transition-colors group-hover:text-primary md:text-3xl">
            {item.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{item.text}</p>
        </div>

        <span className="mt-8 inline-flex min-w-40 w-fit items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 group-hover:bg-primary/90 group-hover:shadow-lg group-hover:shadow-primary/25">
          Детальніше{" "}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </AppLink>
  );
}

function BlogCarousel() {
  const articles = NEWS_ARTICLES;
  const [current, setCurrent] = React.useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(articles.length / perPage);

  const visible = articles.slice(current * perPage, current * perPage + perPage);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % totalPages);
  };

  return (
    <div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {/* Left Navy Hero Card */}
        <div className="flex flex-col justify-between rounded-[24px] bg-[#07152D] p-8 lg:p-10 text-white shadow-sm min-h-[480px]">
          <div>
            <span className="inline-block rounded-full border border-white/25 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white/90">
              НОВИНИ ТА СТАТТІ
            </span>
            <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              БЛОГ
            </h2>
            <div className="mt-4 mb-8 h-1.5 w-20 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-[#22C55E]" />
            <p className="text-sm md:text-base leading-relaxed text-white/80 max-w-xs">
              Корисні поради, новини центру та експертні матеріали про реабілітацію, здоров'я та
              якість життя.
            </p>
          </div>
          <AppLink
            to="/novyny"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#22C55E] px-6 py-4 text-base font-bold text-white shadow-sm transition-all hover:bg-[#16A34A] hover:scale-[1.01]"
          >
            Усі статті <ArrowRight className="size-5" />
          </AppLink>
        </div>

        {/* 2 Article Cards */}
        {visible.map((article) => {
          const CategoryIcon =
            article.category === "Кардіологія"
              ? Heart
              : article.category === "Реабілітація"
                ? UserCheck
                : article.category === "Діагностика"
                  ? Microscope
                  : article.category === "Спортивна медицина"
                    ? Trophy
                    : Stethoscope;

          return (
            <article
              key={article.id}
              className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md min-h-[480px]"
            >
              <div>
                <AppLink
                  to={article.href}
                  className="relative block h-56 w-full overflow-hidden bg-slate-100 rounded-t-[24px]"
                >
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-[#07152D] px-3.5 py-1 text-xs font-bold text-white shadow-sm">
                    {article.date}
                  </span>
                </AppLink>

                <div className="p-6 md:p-7">
                  <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#1E64B4]">
                    <CategoryIcon className="size-4" />
                    <span>{article.category}</span>
                    <span className="text-slate-300 font-normal">|</span>
                    <span className="text-slate-400">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-[#07152D] transition-colors group-hover:text-[#1E64B4] line-clamp-2">
                    <AppLink to={article.href}>{article.title}</AppLink>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 md:p-7 md:pt-0">
                <AppLink
                  to={article.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1E64B4] transition-colors hover:text-[#07152D]"
                >
                  Читати далі{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </AppLink>
              </div>
            </article>
          );
        })}
      </div>

      <CarouselNavigation
        total={totalPages}
        activeIndex={current}
        onSelect={setCurrent}
        onPrevious={goToPrevious}
        onNext={goToNext}
        previousLabel="Попередня сторінка блогу"
        nextLabel="Наступна сторінка блогу"
        getSlideLabel={(index) => `Сторінка блогу ${index + 1}`}
        className="mt-10"
      />
    </div>
  );
}

function HomePageAnchorNav() {
  return (
    <div className="border-b border-border/70 bg-white">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <Breadcrumbs items={[{ title: "Головна", route: "/" }]} className="pb-3 pt-4 sm:pt-4" />

        <div className="overflow-x-auto pb-4 scrollbar-none">
          <div className="flex min-w-max items-center gap-4 sm:gap-5">
            <p className="shrink-0 text-sm font-bold text-navy/70">Що вас цікавить:</p>
            <nav aria-label="Розділи головної сторінки" className="flex min-w-max gap-2 sm:gap-3">
              {HOME_PAGE_SECTION_LINKS.map((item) => (
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

function Index() {
  const { openModal } = useConsultationModal();
  const [faqExpanded, setFaqExpanded] = React.useState(false);
  const [heroApi, setHeroApi] = React.useState<CarouselApi>();
  const [currentHeroSlide, setCurrentHeroSlide] = React.useState(0);
  const [heroSlideCount, setHeroSlideCount] = React.useState(0);
  const [directionsApi, setDirectionsApi] = React.useState<CarouselApi>();
  const [currentDirectionsSlide, setCurrentDirectionsSlide] = React.useState(0);
  const [directionsSlideCount, setDirectionsSlideCount] = React.useState(0);
  const [partnersApi, setPartnersApi] = React.useState<CarouselApi>();
  const [currentPartnersSlide, setCurrentPartnersSlide] = React.useState(0);
  const [partnersSlideCount, setPartnersSlideCount] = React.useState(0);
  React.useEffect(() => {
    if (!heroApi) return;

    const updateState = () => {
      setHeroSlideCount(heroApi.scrollSnapList().length);
      setCurrentHeroSlide(heroApi.selectedScrollSnap());
    };

    updateState();
    heroApi.on("select", updateState);
    heroApi.on("reInit", updateState);

    return () => {
      heroApi.off("select", updateState);
      heroApi.off("reInit", updateState);
    };
  }, [heroApi]);

  React.useEffect(() => {
    if (!directionsApi) return;

    const updateState = () => {
      setDirectionsSlideCount(directionsApi.scrollSnapList().length);
      setCurrentDirectionsSlide(directionsApi.selectedScrollSnap());
    };

    updateState();
    directionsApi.on("select", updateState);
    directionsApi.on("reInit", updateState);

    return () => {
      directionsApi.off("select", updateState);
      directionsApi.off("reInit", updateState);
    };
  }, [directionsApi]);

  React.useEffect(() => {
    if (!partnersApi) return;

    const updateState = () => {
      setPartnersSlideCount(partnersApi.scrollSnapList().length);
      setCurrentPartnersSlide(partnersApi.selectedScrollSnap());
    };

    updateState();
    partnersApi.on("select", updateState);
    partnersApi.on("reInit", updateState);

    return () => {
      partnersApi.off("select", updateState);
      partnersApi.off("reInit", updateState);
    };
  }, [partnersApi]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SiteHeader />

      <main>
        {/* 1. HERO CAROUSEL */}
        <section
          id="home"
          className="relative h-[500px] w-screen max-w-none scroll-mt-24 overflow-hidden bg-navy-deep md:h-[560px] lg:h-[600px]"
        >
          <Carousel
            setApi={setHeroApi}
            plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
            opts={{ loop: true, watchDrag: false }}
            className="size-full"
          >
            <CarouselContent className="!ml-0 h-full w-full">
              {HERO_SLIDES.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className="relative h-[500px] min-w-full basis-full overflow-hidden !pl-0 md:h-[560px] lg:h-[600px]"
                >
                  <div className="absolute inset-0 size-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="size-full object-cover object-center scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20" />
                  </div>

                  <div className="relative flex h-full items-center">
                    <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
                      <div className="max-w-xl lg:max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 lg:p-10 backdrop-blur-xl animate-in slide-in-from-bottom-12 fade-in duration-1000 fill-mode-both shadow-2xl">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100/95 px-3.5 py-1 text-xs md:text-sm font-semibold tracking-wider text-navy ring-1 ring-white/50 shadow-sm">
                          <span className="size-2 rounded-full bg-primary animate-pulse" />
                          {slide.subtitle}
                        </span>
                        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-white">
                          {slide.title}
                        </h1>
                        <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
                          {slide.text}
                        </p>
                        <div className="flex flex-wrap gap-3 md:gap-4">
                          <button
                            type="button"
                            onClick={() => openModal(slide.ctaLabel)}
                            className="group relative inline-flex max-w-full items-center justify-center overflow-hidden rounded-xl bg-brand-green px-5 py-3.5 text-center text-sm font-bold leading-tight tracking-wide text-brand-green-foreground transition-all hover:scale-105 hover:bg-brand-green/90 hover:shadow-[0_0_36px_rgba(62,190,110,0.4)] md:px-7 md:py-4 md:text-base cursor-pointer"
                          >
                            <span className="relative z-10">{slide.ctaLabel}</span>
                            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
                          </button>
                          <AppLink
                            to="/poslugy"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 md:px-8 md:py-4 text-sm md:text-base font-bold tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/10"
                          >
                            НАШІ ПОСЛУГИ{" "}
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                          </AppLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 hidden items-center gap-3 lg:flex">
              <CarouselPrevious className="static size-11 md:size-12 translate-y-0 translate-x-0 border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-navy hover:scale-110" />
              <CarouselNext className="static size-11 md:size-12 translate-y-0 translate-x-0 border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-navy hover:scale-110" />
            </div>

            {heroSlideCount > 0 && (
              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2.5 md:bottom-8">
                {Array.from({ length: heroSlideCount }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => heroApi?.scrollTo(index)}
                    className={`h-2.5 rounded-full ring-1 ring-white/40 transition-all duration-300 ${
                      currentHeroSlide === index
                        ? "w-8 bg-white shadow-sm"
                        : "w-2.5 bg-white/45 hover:bg-white/75"
                    }`}
                    aria-label={`Перейти до головного слайду ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </Carousel>
        </section>

        <HomePageAnchorNav />

        {/* 2. ПРО КОМПАНІЮ */}
        <CompanyOverviewSection
          id="about-company"
          className="scroll-mt-24"
          cta={
            <AppLink to="/pro-osnovu" className={companyOverviewCtaClassName}>
              ДЕТАЛЬНІШЕ <ChevronRight className="size-4 stroke-[2.4]" />
            </AppLink>
          }
        />

        {/* 4. НАПРЯМИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ */}
        <section
          id="directions"
          className="scroll-mt-24 border-y border-slate-200/60 bg-slate-50/80 py-24 md:py-32"
        >
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader centered subtitle="НАПРЯМИ" title="НАПРЯМИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ" />

            <div className="mt-12 hidden gap-7 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {DIRECTIONS.map((direction, index) => (
                <DirectionCard key={index} direction={direction} />
              ))}
            </div>

            <Carousel
              setApi={setDirectionsApi}
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
              opts={{ align: "start", loop: true }}
              className="mt-12 w-full sm:hidden"
            >
              <CarouselContent className="-ml-4">
                {DIRECTIONS.map((direction, index) => (
                  <CarouselItem key={index} className="basis-[84%] pl-4">
                    <DirectionCard direction={direction} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselNavigation
                total={directionsSlideCount}
                activeIndex={currentDirectionsSlide}
                onSelect={(index) => directionsApi?.scrollTo(index)}
                onPrevious={() => directionsApi?.scrollPrev()}
                onNext={() => directionsApi?.scrollNext()}
                previousLabel="Попередній слайд"
                nextLabel="Наступний слайд"
                className="mt-10 sm:hidden"
              />
            </Carousel>
          </div>
        </section>

        {/* CTA BANNER */}
        <section
          id="consultation"
          className="relative scroll-mt-24 overflow-hidden border-y border-sky-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(14,101,241,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.16),_transparent_38%),linear-gradient(135deg,#eef8ff_0%,#f5fbff_35%,#ecfaf7_100%)] py-20 md:py-28"
        >
          <div className="absolute -left-20 top-8 size-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-16 bottom-6 size-72 rounded-full bg-emerald-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-[1100px] px-6 text-center lg:px-10">
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/70 bg-white/60 p-8 shadow-[0_22px_60px_-35px_rgba(17,55,110,0.45)] backdrop-blur-sm md:p-12">
              <h2 className="mb-6 text-3xl font-extrabold text-navy md:text-5xl lg:text-6xl">
                Зробіть перший крок
                <br />
                до <span className="text-primary">відновлення</span>
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-navy/70 md:text-xl">
                Розкажіть про свою ситуацію — спеціаліст допоможе визначити відповідну програму та
                подальші дії.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openModal("Отримати консультацію")}
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-primary px-10 py-4 text-base font-bold tracking-wide text-primary-foreground shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.5)] sm:w-auto md:py-5 md:text-lg cursor-pointer"
                >
                  <span className="relative z-10">ОТРИМАТИ КОНСУЛЬТАЦІЮ</span>
                  <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
                </button>
                <a
                  href="tel:+380674702788"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-navy bg-transparent px-10 py-4 text-base font-bold text-navy transition-all hover:bg-navy hover:text-white sm:w-auto md:py-5 md:text-lg"
                >
                  <Phone className="size-5" />
                  +380 674 702 788
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. МЕТОДИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ (Слайдером в 1 строчку) */}
        <RehabilitationMethodsSlider />

        {/* 5. ЧОМУ ОБИРАЮТЬ ОСНОВА РЕАБІЛІТАЦІЯ */}
        <section
          id="advantages"
          className="relative scroll-mt-24 overflow-hidden bg-background pt-12 pb-24 md:pt-16 md:pb-32"
        >
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="text-center mb-16">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-5 py-1.5 text-xs font-bold tracking-widest text-primary uppercase mb-6">
                ПЕРЕВАГИ
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-tight mb-4">
                ЧОМУ ОБИРАЮТЬ
                <br />
                <span className="text-navy">«ОСНОВА РЕАБІЛІТАЦІЯ»</span>
              </h2>
              <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-emerald-400 to-primary" />
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Поєднання науки, досвіду та турботи для вашого стійкого відновлення.
              </p>
            </div>

            {/* Featured cards with images */}
            <div className="grid gap-6 md:grid-cols-3 mb-6">
              {FEATURED_FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                        <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{feature.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Secondary cards with icons only */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SECONDARY_FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="group relative flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold text-navy">{feature.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{feature.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. НАШІ ПАРТНЕРИ */}
        <section
          id="partners"
          className="scroll-mt-24 overflow-hidden bg-secondary/40 py-20 md:py-24"
        >
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader centered subtitle="ПАРТНЕРСТВО" title="НАШІ ПАРТНЕРИ" />

            <Carousel
              setApi={setPartnersApi}
              plugins={[Autoplay({ delay: 5200, stopOnInteraction: true })]}
              opts={{ align: "start", loop: true }}
              className="mt-12 w-full"
            >
              <CarouselContent className="-ml-5">
                {PARTNER_GROUPS.map((group, index) => (
                  <CarouselItem key={index} className="basis-full pl-5">
                    <div className="grid gap-6 md:grid-cols-3">
                      {group.map((partner) => (
                        <PartnerCard key={partner.name} partner={partner} />
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselNavigation
                total={partnersSlideCount}
                activeIndex={currentPartnersSlide}
                onSelect={(index) => partnersApi?.scrollTo(index)}
                onPrevious={() => partnersApi?.scrollPrev()}
                onNext={() => partnersApi?.scrollNext()}
                previousLabel="Попередній блок партнерів"
                nextLabel="Наступний блок партнерів"
                getSlideLabel={(index) => `Перейти до блоку партнерів ${index + 1}`}
                className="mt-10"
              />
            </Carousel>
          </div>
        </section>

        {/* 7. ОСВІТА ТА НАУКА */}
        <section id="education" className="scroll-mt-24 bg-white py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader
              centered
              subtitle="ОСВІТА ТА НАУКА"
              title="МІЖНАРОДНА МЕДИЧНА НАУКОВА БАЗА"
            />

            <div className="mx-auto mt-12 grid max-w-7xl auto-rows-fr gap-7 md:grid-cols-2 lg:gap-8">
              {EDUCATION_CARDS.map((item) => (
                <EducationCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* 8. СПІВПРАЦЯ */}
        <section id="cooperation" className="scroll-mt-24 bg-[#FCFDFE] py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="text-center">
              <span className="inline-block rounded-full bg-[#EEF5FF] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#2467D8]">
                ПАРТНЕРСЬКА ПЛАТФОРМА
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] text-navy md:text-5xl">
                СПІВПРАЦЯ
              </h2>
              <div className="mx-auto mt-5 h-1 w-[62px] rounded-full bg-gradient-to-r from-[#2467D8] to-[#42B883]" />
              <p className="mx-auto mt-6 max-w-[620px] text-sm leading-relaxed text-[#68758A] md:text-base">
                Об'єднуємо зусилля з партнерами для розвитку інноваційних рішень, які змінюють
                якість відновлення та життя людей.
              </p>
            </div>

            <div className="mt-11 md:mt-14">
              <CooperationCascade />
            </div>
          </div>
        </section>

        {/* 9. БЛОГ */}
        <section id="blog" className="scroll-mt-24 bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <BlogCarousel />
          </div>
        </section>

        {/* 10. ПИТАННЯ ТА ВІДПОВІДІ (FAQ) */}
        <section
          id="faq"
          className="scroll-mt-24 border-t border-slate-200/60 bg-slate-50/70 py-24 md:py-32"
        >
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <div className="text-center">
              <h2 className="text-2xl leading-tight font-bold text-navy sm:text-3xl md:text-4xl">
                Питання та відповіді
              </h2>
              <div className="mx-auto mt-4 sm:mt-6 h-1 w-16 rounded-full bg-primary" />
              <p className="mx-auto mt-6 max-w-[640px] text-sm leading-relaxed text-slate-600 md:text-base">
                Зібрали найпоширеніші запитання про реабілітацію, лікування та відновлення. Якщо не
                знайшли відповідь — зверніться до нас, ми допоможемо.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-5 mt-12">
              {(faqExpanded ? FAQS : FAQS.slice(0, FAQ_VISIBLE_COUNT)).map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-slate-200 bg-white px-6 md:px-8 py-2 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-bold text-navy hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base leading-relaxed text-slate-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {FAQS.length > FAQ_VISIBLE_COUNT && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setFaqExpanded((prev) => !prev)}
                  aria-expanded={faqExpanded}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-7 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white md:text-base"
                >
                  {faqExpanded ? "Показати менше питань" : "Показати більше питань"}
                  <ChevronDown
                    className={`size-5 transition-transform duration-300 ${faqExpanded ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            )}
          </div>

          <FAQConsultationCTA className="mt-16" />
        </section>

        {/* 10.5. ПРО МЕТОДИКИ РЕАБІЛІТАЦІЇ */}
        <section
          id="about-methods"
          className="relative scroll-mt-24 overflow-hidden bg-background pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24"
        >
          <div className="absolute -left-20 top-10 size-72 rounded-full bg-primary/[0.05] blur-3xl" />
          <div className="absolute right-0 top-24 size-80 rounded-full bg-primary/[0.04] blur-[140px]" />

          <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(460px,525px)] lg:gap-14 xl:gap-20">
              <div className="max-w-[41rem] pt-2 lg:pt-0">
                <span className="inline-flex rounded-full border border-[#C9D8F1] bg-[#F4F8FF] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary shadow-[0_8px_18px_rgba(33,95,188,0.08)] sm:px-5 sm:text-xs">
                  Корисна інформація
                </span>

                <h2 className="mt-7 text-[2.55rem] font-extrabold leading-[0.98] tracking-[-0.04em] text-navy sm:text-[3rem] md:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.72rem]">
                  <span className="block">Баланс — основа</span>
                  <span className="mt-2 block text-primary">здоров&apos;я та відновлення</span>
                </h2>

                <div className="mt-9 flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-1.5 w-13 rounded-full bg-primary" />
                  <span className="h-1.5 w-8 rounded-full bg-brand-green" />
                </div>

                <div className="mt-11 space-y-7">
                  <p className="max-w-[34rem] text-lg font-semibold leading-[1.55] text-navy md:text-[1.1rem]">
                    В ОСНОВА Реабілітація ми поєднуємо турботу, доказовий підхід і сучасні
                    методики, щоб допомогти людині відновити здоров&apos;я, рух і внутрішню
                    рівновагу.
                  </p>
                  <p className="max-w-[35rem] text-[1.05rem] leading-[1.7] text-slate-500 md:text-[1.12rem]">
                    Індивідуальні програми, фізична терапія, гідрокінезіотерапія, фізіотерапевтичні
                    методи та командний супровід формують цілісну систему відновлення для кращої
                    якості життя.
                  </p>
                </div>

                <div className="mt-10 md:mt-12">
                  <AppLink
                    to="/pro-osnovu"
                    className="inline-flex items-center gap-3 rounded-[1.15rem] bg-navy px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_16px_34px_rgba(9,25,54,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_20px_38px_rgba(33,95,188,0.28)] md:px-9 md:text-[0.95rem]"
                  >
                    Детальніше <ArrowRight className="size-5" />
                  </AppLink>
                </div>
              </div>

              <div className="flex w-full items-center justify-center pb-14 lg:justify-end lg:pb-16">
                <figure className="w-full max-w-[525px]">
                  <img
                    src={balanceReferenceCardImg}
                    alt="Баланс, що підтримує відновлення"
                    loading="lazy"
                    width={525}
                    height={657}
                    className="block h-auto w-full"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
