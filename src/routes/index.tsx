import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/app-link";
import {
  ArrowRight,
  Heart,
  Dumbbell,
  Phone,
  Users,
  ChevronRight,
  ChevronLeft,
  Brain,
  Sparkles,
  Trophy,
  ShieldCheck,
  Building2,
  GraduationCap,
  BookOpen,
  Calendar,
  UserCheck,
  Flame,
  Zap,
  Ambulance,
  ClipboardList,
  Network,
  Microscope,
  Droplets,
  Stethoscope,
  GraduationCap as AcademicCap,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NewsCard } from "@/components/news-card";
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

// Images
import rehabImg from "@/assets/service-rehab.jpg";
import checkupImg from "@/assets/service-checkup.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import ergoImg from "@/assets/ergometer.jpg";
import educationTrainingImg from "@/assets/education-training.png";
import educationConferenceImg from "@/assets/education-conference.png";
import partnerAsmuLogo from "@/assets/partners/partner-asmu.png";
import partnerChnuLogo from "@/assets/partners/partner-chnu.png";
import partnerHeartLogo from "@/assets/partners/partner-heart.svg";
import partnerIfnmuLogo from "@/assets/partners/partner-ifnmu.png";
import partnerKarpatskaAkademiiaLogo from "@/assets/partners/partner-karpatska-akademiia.png";
import partnerSytenkoLogo from "@/assets/partners/partner-sytenko.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ОСНОВА Реабілітація — Медичний та реабілітаційний центр у Буковелі" },
      {
        name: "description",
        content:
          "ОСНОВА Реабілітація — сучасна медична компанія у Буковелі. Комплексне лікування та реабілітація: кардіологія, ортопедія, вертебрологія, ревматологія, неврологія, психологія, спортивна медицина.",
      },
    ],
  }),
  component: Index,
});

const HERO_SLIDES = [
  {
    image: rehabImg,
    title: "Відновлення руху без болю",
    subtitle: "Сучасний реабілітаційний центр",
    text: "Повертаємо радість активного життя завдяки індивідуальним програмам реабілітації після травм, операцій та захворювань.",
    ctaLabel: "Записатися на реабілітацію",
  },
  {
    image: cpetImg,
    title: "Кардіологічна діагностика",
    subtitle: "Перевірте своє серце",
    text: "Комплексна оцінка роботи серцево-судинної системи. Від ЕКГ до кардіопульмонального тестування в умовах гірського клімату.",
    ctaLabel: "Записатися на діагностику",
  },
  {
    image: sportsImg,
    title: "Спортивна медицина",
    subtitle: "Для любителів та професіоналів",
    text: "Підвищуйте витривалість, тренуйтеся безпечно. Спортивні чекапи та супровід для найкращих результатів.",
    ctaLabel: "Записатися на консультацію",
  },
];

// 8 Напрямів реабілітації та лікування
const DIRECTIONS = [
  {
    icon: Heart,
    title: "КАРДІОЛОГІЯ",
    text: "Лікування захворювань серця, відновлення після інфаркту та операцій, ЕКГ та CPET-діагностика.",
    image: ecgImg,
    href: "/poslugy/reabilitatsiia/kardioreabilitatsiia",
    badge: "Серцево-судинна система",
  },
  {
    icon: Dumbbell,
    title: "ОРТОПЕДІЯ ТА ТРАВМАТОЛОГІЯ",
    text: "Відновлення після травм, переломів, хірургічних втручань на суглобах та ендопротезування.",
    image: rehabImg,
    href: "/poslugy/reabilitatsiia/ortopedichna-reabilitatsiia",
    badge: "Суглоби та зв'язки",
  },
  {
    icon: Flame,
    title: "ВЕРТЕБРОЛОГІЯ (ЗАХВОРЮВАННЯ ХРЕБТА)",
    text: "Лікування та реабілітація захворювань хребта, гриж, остеохондрозу та відновлення біомеханіки спини.",
    image: ergoImg,
    href: "/poslugy/reabilitatsiia/vertebrolohichna-reabilitatsiia",
    badge: "Здоров'я хребта",
  },
  {
    icon: ShieldCheck,
    title: "РЕВМАТОЛОГІЯ",
    text: "Комплексна терапія артриту, артрозу, системних захворювань сполучної тканини зі збереженням рухливості.",
    image: checkupImg,
    href: "/poslugy/reabilitatsiia/revmatolohichna-reabilitatsiia",
    badge: "Суглоби та імунітет",
  },
  {
    icon: Brain,
    title: "НЕВРОЛОГІЯ",
    text: "Відновлення після інсультів, нейропатій, уражень центральної та периферичної нервової системи.",
    image: cpetImg,
    href: "/poslugy/reabilitatsiia/nevrolohichna-reabilitatsiia",
    badge: "Нервова система",
  },
  {
    icon: Sparkles,
    title: "ПСИХОЛОГІЯ ТА ПСИХІЧНЕ (МЕНТАЛЬНЕ) ЗДОРОВ’Я",
    text: "Психологічна підтримка, зняття стресу, відновлення ментального здоров'я та адаптація після навантажень.",
    image: sportsImg,
    href: "/poslugy/reabilitatsiia/psykholohichna-pidtrymka",
    badge: "Ментальний баланс",
  },
  {
    icon: Trophy,
    title: "СПОРТИВНА МЕДИЦИНА",
    text: "Підвищення фізичних показників, спортивна адаптація та швидке реабілітаційне відновлення фізичної форми.",
    image: sportsImg,
    href: "/poslugy/vidnovlennia",
    badge: "Спорт & Адаптація",
  },
  {
    icon: Zap,
    title: "ПРОФІЛАКТИЧНА РЕАБІЛІТАЦІЯ (ПРЕВЕНТИВНА)",
    text: "Виявлення прихованих медичних ризиків до появи симптомів, превентивні програми здоров'я та довголіття.",
    image: checkupImg,
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
    icon: AcademicCap,
    title: "Наукова база",
    text: "Клінічна практика, навчання та розвиток методик на основі фахової медичної експертизи.",
    image: ecgImg,
  },
  {
    icon: Sparkles,
    title: "Середовище Карпат",
    text: "Чисте повітря, спокійна атмосфера та природне оточення, що підтримують процес відновлення.",
    image: sportsImg,
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
    icon: Users,
    title: "Досвідчена команда",
    text: "Лікарі та терапевти з підтвердженою кваліфікацією та практикою.",
  },
  {
    icon: Microscope,
    title: "Професійна діагностика",
    text: "Сучасні методи оцінки для точного плану відновлення.",
  },
  {
    icon: ShieldCheck,
    title: "Комфорт і конфіденційність",
    text: "Спокійна атмосфера, повага до вас і вашого особистого простору.",
  },
  {
    icon: Droplets,
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

// Співпраця
const COOPERATION_ITEMS = [
  {
    title: "ВИЇЗНА РЕАБІЛІТАЦІЯ",
    text: "Команда ОСНОВА приїжджає до пацієнта додому, у готель або за місцем перебування з програмою відновлення.",
    href: "/vyizna-reabilitatsiia",
    icon: Ambulance,
    image: rehabImg,
  },
  {
    title: "ДЛЯ ЛІКАРІВ",
    text: "Програми обміну досвідом, підвищення кваліфікації, стажування та спільна практична робота.",
    href: "/partnerstvo/likariam",
    icon: UserCheck,
    image: cpetImg,
  },
  {
    title: "ДЛЯ ІНСТИТУТІВ",
    text: "Спільні наукові дослідження, розробка медичних протоколів та клінічні бази для студентів ЗВО.",
    href: "/partnerstvo/naukove",
    icon: GraduationCap,
    image: educationTrainingImg,
  },
  {
    title: "ОРЕНДА ОБЛАДНАННЯ",
    text: "Надання високотехнологічних пристроїв та тренажерів для медичних установ та центрів.",
    href: "/orenda-obladnannia",
    icon: Building2,
    image: ergoImg,
  },
  {
    title: "ІВЕНТИ",
    text: "Організація медичних форумів, конференцій, виставок та професійних заходів.",
    href: "/iventy",
    icon: Calendar,
    image: educationConferenceImg,
  },
  {
    title: "СОЦІАЛЬНІ ПРОЄКТИ",
    text: "Благодійні та реабілітаційні ініціативи, допомога громаді та соціальні програми.",
    href: "/sotsialni-proiekty",
    icon: Heart,
    image: sportsImg,
  },
];

const EDUCATION_CARDS = [
  {
    title: "НАВЧАННЯ",
    text: "Курси є важливими для вдосконалення хірургічної техніки, вивчення анатомії та освоєння нових медичних технологій і методик.",
    href: "/kursy",
    image: educationTrainingImg,
    label: "Практичні курси",
    kicker: "Hands-on формат",
    audience: "Для лікарів та фахівців",
    format: "Практичні модулі",
    icon: GraduationCap,
  },
  {
    title: "КОНФЕРЕНЦІЇ",
    text: "Професійні зустрічі для обміну досвідом, презентації нових методик і обговорення актуальних питань реабілітаційної медицини.",
    href: "/konferentsii",
    image: educationConferenceImg,
    label: "Фахові події",
    kicker: "Наукова платформа",
    audience: "Для медичної спільноти",
    format: "Лекції та дискусії",
    icon: BookOpen,
  },
];

// FAQ
const FAQS = [
  {
    question: "ЯКІ НАПРЯМКИ РЕАБІЛІТАЦІЇ В OSNOVA Реабілітація?",
    answer:
      "У нашому центрі представлені наступні ключові напрямки: кардіологія, ортопедія та травматологія, вертебрологія (захворювання хребта), ревматологія, неврологія, психологія та ментальне здоров'я, спортивна медицина, а також профілактична (превентивна) реабілітація.",
  },
  {
    question: "ЯКА ВАРТІСТЬ ОНЛАЙН-КОНСУЛЬТАЦІЇ?",
    answer:
      "Вартість первинної онлайн-консультації провідного лікаря-реабілітолога складає від 800 грн. Під час розмови лікар детально аналізує надані медичні документи, виписки чи результати обстежень і формує попередній план відновлення.",
  },
  {
    question: "Що включає первинна консультація?",
    answer:
      "Первинна консультація включає огляд лікарем-спеціалістом, збір анамнезу, оцінку вашого поточного функціонального стану та складання індивідуального плану обстежень або реабілітації.",
  },
  {
    question: "Чи потрібне направлення для проходження реабілітації?",
    answer:
      "Ні, направлення від сімейного лікаря не є обов'язковим. Ви можете звернутися до нас самостійно, і наші фахівці проведуть первинну оцінку та підберуть необхідну програму.",
  },
  {
    question: "Скільки триває курс реабілітації?",
    answer:
      "Тривалість курсу визначається індивідуально і залежить від вашого стану та поставлених цілей. Зазвичай інтенсивні програми тривають від 10 до 21 дня.",
  },
  {
    question: "Чи можна суміщати реабілітацію з відпочинком?",
    answer:
      "Так! Наше розташування на курорті Буковель дозволяє ідеально поєднувати лікувальні та реабілітаційні процедури з відпочинком, чистим гірським повітрям і прогулянками.",
  },
];

function SectionHeader({
  subtitle,
  title,
  centered = false,
}: {
  subtitle?: string;
  title: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
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
  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative h-[210px] w-full overflow-hidden bg-slate-100">
        <img
          src={direction.image}
          alt={direction.title}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between bg-white p-6 md:p-7">
        <div>
          <h3 className="mb-3 text-xl font-bold leading-snug text-navy">{direction.title}</h3>
          <p className="mb-6 line-clamp-3 text-sm font-normal leading-relaxed text-slate-600">
            {direction.text}
          </p>
        </div>

        <div>
          <AppLink
            to={direction.href}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-md"
          >
            Детальніше{" "}
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
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-card shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-2xl hover:shadow-slate-900/10"
    >
      <div className="relative h-56 w-full overflow-hidden bg-slate-100 sm:h-64 lg:h-72">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent" />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
            <Icon className="size-4" />
            {item.label}
          </span>
          <span className="hidden rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md sm:inline-flex">
            {item.kicker}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
        <div className="mb-5 flex flex-wrap gap-2.5 text-[11px] font-semibold text-navy/70">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/7 px-3 py-1.5 text-primary">
            <Users className="size-3.5" />
            {item.audience}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1.5 text-navy">
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

        <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 group-hover:bg-primary/90 group-hover:shadow-md">
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

  const next = () => setCurrent((p) => Math.min(p + 1, totalPages - 1));
  const prev = () => setCurrent((p) => Math.max(p - 1, 0));

  const visible = articles.slice(current * perPage, current * perPage + perPage);

  return (
    <div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-3xl bg-navy p-8 sm:p-10 lg:p-12 text-white">
          <div>
            <h3 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
              Наш блог —<br />ваш орієнтир
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
              Корисні поради, новини центру та експертні матеріали про реабілітацію, здоров'я та якість життя.
            </p>
            <div className="mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-primary to-brand-green" />
          </div>
          <AppLink
            to="/novyny"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-primary/90"
          >
            Усі статті <ArrowRight className="size-4" />
          </AppLink>
        </div>

        {visible.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`size-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-slate-300"}`}
              aria-label={`Сторінка ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex size-12 items-center justify-center rounded-full border border-slate-300 bg-white text-navy transition-colors hover:bg-slate-50 disabled:opacity-40"
            aria-label="Попередня"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={next}
            disabled={current === totalPages - 1}
            className="flex size-12 items-center justify-center rounded-full border border-slate-300 bg-white text-navy transition-colors hover:bg-slate-50 disabled:opacity-40"
            aria-label="Наступна"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const { openModal } = useConsultationModal();
  const [heroApi, setHeroApi] = React.useState<CarouselApi>();
  const [currentHeroSlide, setCurrentHeroSlide] = React.useState(0);
  const [heroSlideCount, setHeroSlideCount] = React.useState(0);
  const [directionsApi, setDirectionsApi] = React.useState<CarouselApi>();
  const [currentDirectionsSlide, setCurrentDirectionsSlide] = React.useState(0);
  const [directionsSlideCount, setDirectionsSlideCount] = React.useState(0);
  const [cooperationApi, setCooperationApi] = React.useState<CarouselApi>();
  const [currentCooperationSlide, setCurrentCooperationSlide] = React.useState(0);
  const [cooperationSlideCount, setCooperationSlideCount] = React.useState(0);
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
    if (!cooperationApi) return;

    const updateState = () => {
      setCooperationSlideCount(cooperationApi.scrollSnapList().length);
      setCurrentCooperationSlide(cooperationApi.selectedScrollSnap());
    };

    updateState();
    cooperationApi.on("select", updateState);
    cooperationApi.on("reInit", updateState);

    return () => {
      cooperationApi.off("select", updateState);
      cooperationApi.off("reInit", updateState);
    };
  }, [cooperationApi]);

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
        <section className="relative h-[500px] w-screen max-w-none overflow-hidden bg-navy-deep md:h-[560px] lg:h-[600px]">
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

        {/* 2. ПРО КОМПАНІЮ */}
        <section className="relative overflow-hidden bg-background py-24 md:py-32">
          <div className="absolute -left-[10%] top-[20%] size-[500px] rounded-full bg-primary/5 blur-[120px]" />

          <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <SectionHeader
                  subtitle="ПРО КОМПАНІЮ"
                  title={
                    <>
                      ОСНОВА <span className="text-primary">Реабілітація</span>
                    </>
                  }
                />

                <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p className="font-medium text-navy text-xl leading-relaxed">
                    ОСНОВА Реабілітація — сучасна медична компанія, що спеціалізується на лікуванні
                    та комплексній реабілітації пацієнтів у сферах кардіології, ортопедії,
                    травматології, ревматології, вертебрології та психології.
                  </p>
                  <p>
                    Ми працюємо не лише з наслідками хвороб і травм, а й виявляємо ризики ще до
                    появи симптомів — завдяки сучасній діагностиці, точним обстеженням і
                    персоналізованим профілактичним програмам.
                  </p>
                  <p className="font-semibold text-primary">
                    Наше завдання — допомогти вам відновити здоров’я, рухливість і якість життя.
                  </p>
                  <p>
                    ОСНОВА Реабілітація також є науково-освітньою платформою, що розробляє та
                    вдосконалює протоколи лікування, співпрацює з провідними медичними
                    університетами світу, впроваджує інноваційні технології та розвиває виїзні
                    формати реабілітаційної допомоги для пацієнтів поза центром.
                  </p>
                </div>

                <div className="mt-10">
                  <AppLink
                    to="/pro-nas"
                    className="inline-flex items-center gap-3 rounded-xl bg-navy px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:bg-primary hover:scale-105"
                  >
                    ДЕТАЛЬНІШЕ <ChevronRight className="size-5" />
                  </AppLink>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 overflow-hidden rounded-3xl lg:col-span-1 shadow-lg">
                  <img
                    src={rehabImg}
                    alt="Реабілітація"
                    className="size-full object-cover min-h-[280px] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col justify-center rounded-3xl bg-primary/10 border border-primary/20 p-8 shadow-xl lg:p-10">
                  <h3 className="text-5xl font-black text-primary mb-3">10+</h3>
                  <p className="text-base font-medium text-navy/80">
                    Років досвіду медичної команди
                  </p>
                </div>
                <div className="flex flex-col justify-center rounded-3xl bg-secondary p-8 shadow-xl lg:p-10 border border-primary/10">
                  <h3 className="text-5xl font-black text-navy mb-3">100%</h3>
                  <p className="text-base font-medium text-navy/80">
                    Персоналізований підхід до кожного пацієнта
                  </p>
                </div>
                <div className="col-span-2 overflow-hidden rounded-3xl lg:col-span-1 shadow-lg">
                  <img
                    src={cpetImg}
                    alt="Діагностика"
                    className="size-full object-cover min-h-[280px] hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. НАПРЯМИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ */}
        <section className="bg-slate-50/80 py-24 md:py-32 border-y border-slate-200/60">
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

              <div className="mt-10 flex flex-col items-center gap-6 sm:hidden">
                {directionsSlideCount > 0 && (
                  <div className="flex items-center justify-center gap-2.5">
                    {Array.from({ length: directionsSlideCount }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => directionsApi?.scrollTo(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          currentDirectionsSlide === index
                            ? "w-8 bg-primary shadow-sm"
                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Перейти до слайду ${index + 1}`}
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-center gap-3">
                  <CarouselPrevious className="static size-11 translate-y-0 border-slate-200 bg-slate-100 text-navy shadow-sm hover:bg-primary hover:text-white hover:border-primary" />
                  <CarouselNext className="static size-11 translate-y-0 border-slate-200 bg-slate-100 text-navy shadow-sm hover:bg-primary hover:text-white hover:border-primary" />
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* 4. МЕТОДИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ (Слайдером в 1 строчку) */}
        <RehabilitationMethodsSlider />

        {/* 5. ЧОМУ ОБИРАЮТЬ ОСНОВА РЕАБІЛІТАЦІЯ */}
        <section className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-background">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="text-center mb-16">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-5 py-1.5 text-xs font-bold tracking-widest text-primary uppercase mb-6">
                ПЕРЕВАГИ
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-tight mb-4">
                ЧОМУ ОБИРАЮТЬ ОСНОВА
                <br />
                <span className="text-navy">РЕАБІЛІТАЦІЯ</span>
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
                        <h3 className="text-lg font-bold text-navy">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feature.text}
                      </p>
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
                      <h3 className="text-base font-bold text-navy">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. НАШІ ПАРТНЕРИ */}
        <section className="overflow-hidden bg-secondary/40 py-20 md:py-24">
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

              <div className="mt-10 flex flex-col items-center gap-6">
                {partnersSlideCount > 0 && (
                  <div className="flex items-center justify-center gap-2.5">
                    {Array.from({ length: partnersSlideCount }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => partnersApi?.scrollTo(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          currentPartnersSlide === index
                            ? "w-8 bg-primary shadow-sm"
                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Перейти до блоку партнерів ${index + 1}`}
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-center gap-3">
                  <CarouselPrevious className="static size-11 translate-y-0 border-slate-200 bg-white text-navy shadow-sm hover:border-primary hover:bg-primary hover:text-white" />
                  <CarouselNext className="static size-11 translate-y-0 border-slate-200 bg-white text-navy shadow-sm hover:border-primary hover:bg-primary hover:text-white" />
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* 7. НАВЧАННЯ ТА КОНФЕРЕНЦІЇ */}
        <section className="py-24 md:py-32 bg-background">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader centered subtitle="ОСВІТА ТА НАУКА" title="НАВЧАННЯ ТА КОНФЕРЕНЦІЇ" />

            <div className="mx-auto mt-12 grid max-w-7xl gap-7 md:grid-cols-2 lg:gap-8">
              {EDUCATION_CARDS.map((item) => (
                <EducationCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* 8. СПІВПРАЦЯ */}
        <section className="bg-slate-50/90 py-24 md:py-32 border-y border-slate-200/80">
          <div className="mx-auto max-w-[1840px] px-4 sm:px-6 lg:px-8">
            <SectionHeader centered subtitle="ПАРТНЕРСЬКА ПЛАТФОРМА" title="СПІВПРАЦЯ" />

            <Carousel
              setApi={setCooperationApi}
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
              opts={{ align: "start", loop: true, slidesToScroll: 1 }}
              className="mt-12 w-full"
            >
              <CarouselContent className="-ml-4 items-stretch md:-ml-5">
                {COOPERATION_ITEMS.map((item, idx) => (
                  <CarouselItem
                    key={idx}
                    className="flex basis-[88%] pl-4 sm:basis-[56%] md:basis-[48%] md:pl-5 lg:basis-1/3"
                  >
                    <AppLink
                      to={item.href}
                      className="group relative flex h-full min-h-[320px] w-full flex-col justify-between overflow-hidden rounded-[24px] border-2 border-transparent p-7 shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-2xl md:min-h-[360px] md:p-8 lg:min-h-[400px]"
                    >
                      <div className="absolute inset-0 z-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="size-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-navy-deep/80 transition-all duration-500 group-hover:bg-navy-deep/50" />
                      </div>

                      <div className="relative z-10">
                        <div className="mb-7 flex size-14 items-center justify-center rounded-2xl bg-white text-primary shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                          <item.icon className="size-7" />
                        </div>
                        <h3 className="mb-4 text-xl font-bold leading-tight text-white md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/90 md:text-base transition-colors duration-300 group-hover:text-white">
                          {item.text}
                        </p>
                      </div>

                      <div className="relative z-10 mt-8 flex items-center gap-2 text-xs font-bold uppercase text-white md:text-sm">
                        Деталі{" "}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </AppLink>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-10 flex flex-col items-center gap-6">
                {cooperationSlideCount > 0 && (
                  <div className="flex items-center justify-center gap-2.5">
                    {Array.from({ length: cooperationSlideCount }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => cooperationApi?.scrollTo(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          currentCooperationSlide === index
                            ? "w-8 bg-primary shadow-sm"
                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Перейти до слайду співпраці ${index + 1}`}
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-center gap-3">
                  <CarouselPrevious className="static size-11 translate-y-0 border-slate-200 bg-slate-100 text-navy shadow-sm hover:border-primary hover:bg-primary hover:text-white" />
                  <CarouselNext className="static size-11 translate-y-0 border-slate-200 bg-slate-100 text-navy shadow-sm hover:border-primary hover:bg-primary hover:text-white" />
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* 9. БЛОГ */}
        <section className="py-24 md:py-32 bg-background">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="mb-10 md:mb-12 text-center">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-primary backdrop-blur-md uppercase">
                НОВИНИ ТА СТАТТІ
              </span>
              <h2 className="text-3xl font-extrabold leading-[1.15] text-navy md:text-5xl lg:text-6xl">
                БЛОГ
              </h2>
              <div className="mt-6 flex justify-center">
                <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green" />
              </div>
            </div>

            <BlogCarousel />
          </div>
        </section>

        {/* 10. ПИТАННЯ ТА ВІДПОВІДІ (FAQ) */}
        <section className="bg-slate-50/70 py-24 md:py-32 border-t border-slate-200/60">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <SectionHeader centered subtitle="ВІДПОВІДІ" title="ПИТАННЯ ТА ВІДПОВІДІ" />

            <Accordion type="single" collapsible className="w-full space-y-5 mt-12">
              {FAQS.map((faq, i) => (
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
          </div>
        </section>

        {/* 11. CTA BANNER */}
        <section className="py-24 md:py-32 bg-soft-blue">
          <div className="mx-auto max-w-[1000px] px-6 text-center lg:px-10">
            <h2 className="mb-6 text-3xl font-extrabold text-navy md:text-5xl lg:text-6xl">
              Зробіть перший крок
              <br />
              до <span className="text-primary">здорового</span> життя
            </h2>
            <p className="mb-10 text-lg md:text-xl text-navy/70 max-w-2xl mx-auto leading-relaxed">
              Залиште заявку, і наші спеціалісти зв'яжуться з вами для детальної консультації та
              підбору оптимальної програми відновлення.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => openModal("Отримати консультацію")}
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-primary px-10 py-4 md:py-5 text-base md:text-lg font-bold tracking-wide text-primary-foreground shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.5)] sm:w-auto cursor-pointer"
              >
                <span className="relative z-10">ОТРИМАТИ КОНСУЛЬТАЦІЮ</span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
              </button>
              <a
                href="tel:+380674702788"
                className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-navy bg-transparent px-10 py-4 md:py-5 text-base md:text-lg font-bold text-navy transition-all hover:bg-navy hover:text-white sm:w-auto"
              >
                <Phone className="size-5" />
                +380 674 702 788
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
