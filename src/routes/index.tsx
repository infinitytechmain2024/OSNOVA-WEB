import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/app-link";
import {
  ArrowRight,
  Activity,
  Heart,
  Stethoscope,
  Dumbbell,
  MapPin,
  Phone,
  Users,
  Shield,
  Clock,
  ChevronRight,
  Brain,
  Sparkles,
  Trophy,
  ShieldCheck,
  Building2,
  GraduationCap,
  Handshake,
  BookOpen,
  Calendar,
  Award,
  Droplets,
  Trees,
  FileText,
  UserCheck,
  Flame,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Images
import rehabImg from "@/assets/service-rehab.jpg";
import checkupImg from "@/assets/service-checkup.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import ergoImg from "@/assets/ergometer.jpg";

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
  },
  {
    image: cpetImg,
    title: "Кардіологічна діагностика",
    subtitle: "Перевірте своє серце",
    text: "Комплексна оцінка роботи серцево-судинної системи. Від ЕКГ до кардіопульмонального тестування в умовах гірського клімату.",
  },
  {
    image: sportsImg,
    title: "Спортивна медицина",
    subtitle: "Для любителів та професіоналів",
    text: "Підвищуйте витривалість, тренуйтеся безпечно. Спортивні чекапи та супровід для найкращих результатів.",
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

// Методи реабілітації та лікування (для слайдера в 1 строчку)
const METHODS = [
  {
    title: "КОМПЛЕКСНА РЕАБІЛІТАЦІЯ",
    description: "Індивідуальні програми відновлення після травм, операцій та захворювань під наглядом лікарів і фізичних терапевтів.",
    image: rehabImg,
    href: "/poslugy/reabilitatsiia",
  },
  {
    title: "ДІАГНОСТИКА",
    description: "Високоточне обстеження серцево-судинної системи, ЕКГ, УЗД та кардіопульмональне тестування.",
    image: cpetImg,
    href: "/poslugy/diagnostyka",
  },
  {
    title: "КОНСУЛЬТАЦІЯ ФАХІВЦІВ",
    description: "Персоналізовані прийоми та медичний супровід провідних реабілітологів і профільних лікарів.",
    image: ecgImg,
    href: "/kontakty",
  },
  {
    title: "ФІЗІОТЕРАПІЯ",
    description: "Сучасні апаратні методики відновлення, електротерапія, лазеротерапія та магнітотерапія.",
    image: ergoImg,
    href: "/poslugy/reabilitatsiia",
  },
  {
    title: "ГІДРОКІНЕЗІОТЕРАПІЯ",
    description: "Водні процедури та відновлювальна гімнастика у басейні для м'якої розвантаження суглобів.",
    image: sportsImg,
    href: "/poslugy/vidnovlennia",
  },
  {
    title: "ФІТНЕС ТА ТРЕНАЖЕРНИЙ ЗАЛ",
    description: "Спеціалізовані реабілітаційні тренажери та дозована лікувальна фізкультура.",
    image: rehabImg,
    href: "/poslugy/vidnovlennia/fitnes-zal",
  },
  {
    title: "ОЗДОРОВЧИЙ БЮВЕТ",
    description: "Вживання цілющих мінеральних вод для оздоровлення та нормалізації обміну речовин.",
    image: checkupImg,
    href: "/pro-nas/infrastruktura",
  },
  {
    title: "ЧЕК-АПИ ЗДОРОВ’Я",
    description: "Комплексні експрес-обстеження організму для виявлення прихованих ризиків на ранніх стадіях.",
    image: checkupImg,
    href: "/poslugy/check-up",
  },
  {
    title: "СПОРТИВНА АДАПТАЦІЯ",
    description: "Підвищення фізичної витривалості, безпечний супровід тренувань та швидке відновлення.",
    image: sportsImg,
    href: "/poslugy/vidnovlennia",
  },
  {
    title: "ЕРГОТЕРАПІЯ ТА МЕХАНОТЕРАПІЯ",
    description: "Відновлення дрібної моторики, побутових навичок та біомеханіки суглобів.",
    image: ergoImg,
    href: "/poslugy/reabilitatsiia",
  },
];

// 10 Переваг
const ADVANTAGES = [
  {
    icon: UserCheck,
    title: "ІНДИВІДУАЛЬНІ ПРОГРАМИ",
    text: "Розробка персоналізованого графіку та інтенсивності процедур з урахуванням діагнозу.",
  },
  {
    icon: Activity,
    title: "КОМПЛЕКСНИЙ ПІДХІД",
    text: "Мультидисциплінарна взаємодія лікарів для досягнення швидкого та тривалого результату.",
  },
  {
    icon: Award,
    title: "ДОСВІДЧЕНІ ФАХІВЦІ ТА СЕРТИФІКОВАНА КОМАНДА",
    text: "Лікарі вищої категорії та фізичні терапевти з міжнародною акредитацією.",
  },
  {
    icon: Stethoscope,
    title: "ПРОФЕСІЙНА ДІАГНОСТИКА",
    text: "Інноваційні методи виявлення ризиків та оцінка функціональних резервів до появи симптомів.",
  },
  {
    icon: ShieldCheck,
    title: "СУЧАСНІ МЕТОДИКИ ТА ОБЛАДНАННЯ",
    text: "Використання передових медичних технологій та обладнання провідних світових брендів.",
  },
  {
    icon: GraduationCap,
    title: "НАУКОВО-ОСВІТНЯ БАЗА ДЛЯ ВИЩИХ НАВЧАЛЬНИХ ЗАКЛАДІВ",
    text: "Платформа для підготовки фахівців, вдосконалення протоколів та клінічних досліджень.",
  },
  {
    icon: Shield,
    title: "ВИСОКА ЯКІСТЬ І МІЖНАРОДНІ СТАНДАРТИ",
    text: "Суворе дотримання європейських медичних протоколів лікування та реабілітації.",
  },
  {
    icon: Clock,
    title: "КОМФОРТ І КОНФІДЕНЦІЙНІСТЬ",
    text: "Преміальні умови перебування, повна анонімність та індивідуальна турбота про кожного.",
  },
  {
    icon: Droplets,
    title: "БЮВЕТ З ЛІКУВАЛЬНИМИ ВОДАМИ",
    text: "Природне оздоровлення організму цілющими джерельними мінеральними водами.",
  },
  {
    icon: Trees,
    title: "ПРИРОДА КАРПАТ, ЩО СПРИЯЄ ВІДНОВЛЕННЮ",
    text: "Унікальний гірський клімат Буковеля підсилює ефект кліматотерапії та реабілітації.",
  },
];

// Партнери
const PARTNERS = [
  { name: "Львівський медичний университет ім. Данила Галицького", role: "Академічний партнер" },
  { name: "Івано-Франківський національний медичний університет", role: "Наукова база" },
  { name: "European Rehabilitation Academy", role: "Міжнародна співпраця" },
  { name: "Schiller Medical Switzerland", role: "Технологічне обладнання" },
  { name: "Enraf-Nonius Medical", role: "Фізіотерапевтичні системи" },
  { name: "Bukovel Health & Wellness Resort", role: "Кліматичний курорт" },
];

// Співпраця
const COOPERATION_ITEMS = [
  {
    title: "ФРАНШИЗА",
    text: "Готова модель масштабування ефективного реабілітаційного бізнесу з підтримкою команди ОСНОВА.",
    href: "/partnerstvo",
    icon: Handshake,
  },
  {
    title: "ДЛЯ ЛІКАРІВ",
    text: "Програми обміну досвідом, підвищення кваліфікації, стажування та спільна практична робота.",
    href: "/partnerstvo/likariam",
    icon: UserCheck,
  },
  {
    title: "ДЛЯ ІНСТИТУТІВ",
    text: "Спільні наукові дослідження, розробка медичних протоколів та клінічні бази для студентів ЗВО.",
    href: "/partnerstvo/naukove",
    icon: GraduationCap,
  },
  {
    title: "ОРЕНДА ОБЛАДНАННЯ",
    text: "Надання високотехнологічних пристроїв та тренажерів для медичних установ та центрів.",
    href: "/poslugy/orenda-obladnannia",
    icon: Building2,
  },
  {
    title: "ІВЕНТИ",
    text: "Організація медичних форумів, конференцій, виставок та професійних заходів.",
    href: "/iventy",
    icon: Calendar,
  },
  {
    title: "СОЦІАЛЬНІ ПРОЄКТИ",
    text: "Благодійні та реабілітаційні ініціативи, допомога громаді та соціальні програми.",
    href: "/sotsialni-proiekty",
    icon: Heart,
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

function SectionHeader({ subtitle, title, centered = false }: { subtitle?: string; title: React.ReactNode; centered?: boolean }) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-primary backdrop-blur-md uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-extrabold leading-[1.15] text-navy md:text-5xl lg:text-6xl">{title}</h2>
      <div className={`mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}

function Index() {
  const [methodsApi, setMethodsApi] = React.useState<CarouselApi>();
  const [currentMethodsSlide, setCurrentMethodsSlide] = React.useState(0);
  const [methodsSlideCount, setMethodsSlideCount] = React.useState(0);

  React.useEffect(() => {
    if (!methodsApi) return;

    const updateState = () => {
      setMethodsSlideCount(methodsApi.scrollSnapList().length);
      setCurrentMethodsSlide(methodsApi.selectedScrollSnap());
    };

    updateState();
    methodsApi.on("select", updateState);
    methodsApi.on("reInit", updateState);

    return () => {
      methodsApi.off("select", updateState);
    };
  }, [methodsApi]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SiteHeader />

      <main>
        {/* 1. HERO CAROUSEL */}
        <section className="relative h-[500px] md:h-[560px] lg:h-[600px] w-full overflow-hidden bg-navy-deep">
          <Carousel
            plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
            opts={{ loop: true, watchDrag: false }}
            className="size-full"
          >
            <CarouselContent className="h-full">
              {HERO_SLIDES.map((slide, index) => (
                <CarouselItem key={index} className="relative h-[500px] md:h-[560px] lg:h-[600px] w-full basis-full">
                  <div className="absolute inset-0 size-full">
                    <img src={slide.image} alt={slide.title} className="size-full object-cover object-center scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20" />
                  </div>
                  
                  <div className="relative flex h-full items-center">
                    <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
                      <div className="max-w-xl lg:max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 lg:p-10 backdrop-blur-xl animate-in slide-in-from-bottom-12 fade-in duration-1000 fill-mode-both shadow-2xl">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-3.5 py-1 text-xs md:text-sm font-semibold tracking-wider text-primary ring-1 ring-primary/30">
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
                          <AppLink to="/kontakty" className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-3.5 md:px-8 md:py-4 text-sm md:text-base font-bold tracking-wide text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.5)]">
                            <span className="relative z-10">ЗАПИСАТИСЯ</span>
                            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
                          </AppLink>
                          <AppLink to="/poslugy" className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 md:px-8 md:py-4 text-sm md:text-base font-bold tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/10">
                            НАШІ ПОСЛУГИ <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
                  title={<>ОСНОВА <span className="text-primary">Реабілітація</span></>}
                />
                
                <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p className="font-medium text-navy text-xl leading-relaxed">
                    ОСНОВА Реабілітація — сучасна медична компанія, що спеціалізується на лікуванні та комплексній реабілітації пацієнтів у сферах кардіології, ортопедії, травматології, ревматології, вертебрології та психології.
                  </p>
                  <p>
                    Ми працюємо не лише з наслідками хвороб і травм, а й виявляємо ризики ще до появи симптомів — завдяки сучасній діагностиці, точним обстеженням і персоналізованим профілактичним програмам.
                  </p>
                  <p className="font-semibold text-primary">
                    Наше завдання — допомогти вам відновити здоров’я, рухливість і якість життя.
                  </p>
                  <p>
                    ОСНОВА Реабілітація також є науково-освітньою платформою, що розробляє та вдосконалює протоколи лікування, співпрацює з провідними медичними університетами світу, впроваджує інноваційні технології та пропонує франшизу для масштабування ефективної реабілітаційної моделі.
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
                  <img src={rehabImg} alt="Реабілітація" className="size-full object-cover min-h-[280px] hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex flex-col justify-center rounded-3xl bg-primary/10 border border-primary/20 p-8 shadow-xl lg:p-10">
                  <h3 className="text-5xl font-black text-primary mb-3">10+</h3>
                  <p className="text-base font-medium text-navy/80">Років досвіду медичної команди</p>
                </div>
                <div className="flex flex-col justify-center rounded-3xl bg-secondary p-8 shadow-xl lg:p-10 border border-primary/10">
                  <h3 className="text-5xl font-black text-navy mb-3">100%</h3>
                  <p className="text-base font-medium text-navy/80">Персоналізований підхід до кожного пацієнта</p>
                </div>
                <div className="col-span-2 overflow-hidden rounded-3xl lg:col-span-1 shadow-lg">
                  <img src={cpetImg} alt="Діагностика" className="size-full object-cover min-h-[280px] hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. НАПРЯМИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ */}
        <section className="bg-slate-50/80 py-24 md:py-32 border-y border-slate-200/60">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader
              centered
              subtitle="НАПРЯМИ"
              title="НАПРЯМИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ"
            />
            
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
              {DIRECTIONS.map((dir, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative h-[210px] w-full overflow-hidden bg-slate-100">
                    <img
                      src={dir.image}
                      alt={dir.title}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex flex-col justify-between flex-1 p-6 md:p-7 bg-white">
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-navy leading-snug">
                        {dir.title}
                      </h3>
                      <p className="mb-6 text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                        {dir.text}
                      </p>
                    </div>

                    <div>
                      <AppLink
                        to={dir.href}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:scale-105"
                      >
                        Детальніше <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </AppLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. МЕТОДИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ (Слайдером в 1 строчку) */}
        <section className="bg-white py-24 md:py-32 overflow-hidden">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader
              centered
              subtitle="МЕТОДИКИ"
              title="МЕТОДИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ"
            />

            <Carousel
              setApi={setMethodsApi}
              plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]}
              opts={{ align: "start", loop: true }}
              className="w-full mt-12"
            >
              <CarouselContent className="-ml-4">
                {METHODS.map((item, idx) => (
                  <CarouselItem key={idx} className="pl-4 basis-[84%] sm:basis-[47%] lg:basis-[31%] xl:basis-[23.8%]">
                    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-slate-50/60 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:bg-white">
                      <div className="relative h-[210px] w-full overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex flex-col justify-between flex-1 p-6 md:p-7">
                        <div>
                          <h3 className="mb-3 text-xl font-bold text-navy leading-snug">
                            {item.title}
                          </h3>
                          <p className="mb-6 text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                            {item.description}
                          </p>
                        </div>

                        <div>
                          <AppLink
                            to={item.href}
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:scale-105"
                          >
                            Детальніше <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                          </AppLink>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Controls and Pagination Dots */}
              <div className="mt-10 flex flex-col items-center gap-6">
                {/* Dots Pagination */}
                {methodsSlideCount > 0 && (
                  <div className="flex items-center justify-center gap-2.5">
                    {Array.from({ length: methodsSlideCount }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => methodsApi?.scrollTo(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          currentMethodsSlide === index
                            ? "w-8 bg-primary shadow-sm"
                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Перейти до слайду ${index + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Prev / Next Arrows */}
                <div className="flex items-center justify-center gap-3">
                  <CarouselPrevious className="static size-11 translate-y-0 border-slate-200 bg-slate-100 text-navy shadow-sm hover:bg-primary hover:text-white hover:border-primary" />
                  <CarouselNext className="static size-11 translate-y-0 border-slate-200 bg-slate-100 text-navy shadow-sm hover:bg-primary hover:text-white hover:border-primary" />
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* 3. НАПРЯМИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ */}
        <section className="bg-slate-50/80 py-24 md:py-32 border-y border-slate-200/60">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader
              centered
              subtitle="НАПРЯМИ"
              title="НАПРЯМИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ"
            />
            
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
              {DIRECTIONS.map((dir, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative h-[210px] w-full overflow-hidden bg-slate-100">
                    <img
                      src={dir.image}
                      alt={dir.title}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex flex-col justify-between flex-1 p-6 md:p-7 bg-white">
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-navy leading-snug">
                        {dir.title}
                      </h3>
                      <p className="mb-6 text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                        {dir.text}
                      </p>
                    </div>

                    <div>
                      <AppLink
                        to={dir.href}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:scale-105"
                      >
                        Детальніше <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </AppLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. МЕТОДИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ (Слайдером в 1 строчку) */}
        <section className="bg-white py-24 md:py-32 overflow-hidden">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader
              centered
              subtitle="МЕТОДИКИ"
              title="МЕТОДИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ"
            />

            <Carousel
              plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]}
              opts={{ align: "start", loop: true }}
              className="w-full mt-12"
            >
              <CarouselContent className="-ml-4">
                {METHODS.map((item, idx) => (
                  <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-slate-50/60 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:bg-white">
                      <div className="relative h-[210px] w-full overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex flex-col justify-between flex-1 p-6 md:p-7">
                        <div>
                          <h3 className="mb-3 text-xl font-bold text-navy leading-snug">
                            {item.title}
                          </h3>
                          <p className="mb-6 text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                            {item.description}
                          </p>
                        </div>

                        <div>
                          <AppLink
                            to={item.href}
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:scale-105"
                          >
                            Детальніше <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                          </AppLink>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-10 flex justify-center gap-3">
                <CarouselPrevious className="static size-11 translate-y-0 border-slate-200 bg-slate-100 text-navy shadow-sm hover:bg-primary hover:text-white hover:border-primary" />
                <CarouselNext className="static size-11 translate-y-0 border-slate-200 bg-slate-100 text-navy shadow-sm hover:bg-primary hover:text-white hover:border-primary" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* 5. НАШІ ПЕРЕВАГИ (10 карт) */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-background">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader
              centered
              subtitle="ПЕРЕВАГИ"
              title="НАШІ ПЕРЕВАГИ"
            />
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {ADVANTAGES.map((adv, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between"
                >
                  <div className="absolute -right-8 -top-8 size-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                  <div>
                    <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <adv.icon className="size-6" />
                    </div>
                    <h3 className="mb-3 text-base font-extrabold text-navy leading-snug">{adv.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{adv.text}</p>
                  </div>
                  <div className="mt-6 h-1 w-12 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. НАШІ ПАРТНЕРИ */}
        <section className="bg-secondary/40 py-20">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader centered subtitle="ПАРТНЕРСТВО" title="НАШІ ПАРТНЕРИ" />
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-10">
              {PARTNERS.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <Building2 className="mb-3 size-8 text-primary/80" />
                  <h4 className="text-xs font-bold text-navy leading-tight">{partner.name}</h4>
                  <span className="mt-2 text-[10px] uppercase font-semibold text-primary tracking-wider">{partner.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. НАВЧАННЯ ТА КОНФЕРЕНЦІЇ */}
        <section className="py-24 md:py-32 bg-background">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader
              centered
              subtitle="ОСВІТА ТА НАУКА"
              title="НАВЧАННЯ ТА КОНФЕРЕНЦІЇ"
            />
            
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mt-12">
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-xl transition-all hover:border-primary/40 hover:shadow-2xl">
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap className="size-7" />
                </div>
                <h3 className="mb-4 text-2xl font-extrabold text-navy">НАВЧАННЯ</h3>
                <p className="mb-8 text-muted-foreground leading-relaxed text-base md:text-lg">
                  Курси є важливими для вдосконалення хірургічної техніки, вивчення анатомії та освоєння нових медичних технологій і методик.
                </p>
                <AppLink
                  to="/navchannia"
                  className="inline-flex items-center gap-2 font-bold text-primary hover:text-navy transition-colors"
                >
                  ДІЗНАТИСЯ БІЛЬШЕ <ArrowRight className="size-4" />
                </AppLink>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-xl transition-all hover:border-primary/40 hover:shadow-2xl">
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <BookOpen className="size-7" />
                </div>
                <h3 className="mb-4 text-2xl font-extrabold text-navy">КОНФЕРЕНЦІЇ</h3>
                <p className="mb-8 text-muted-foreground leading-relaxed text-base md:text-lg">
                  Збори, нарада груп осіб, окремих осіб, організації для обговорення певної проблематики, яка визначена заздалегідь.
                </p>
                <AppLink
                  to="/navchannia"
                  className="inline-flex items-center gap-2 font-bold text-primary hover:text-navy transition-colors"
                >
                  ПЕРЕГЛЯНУТИ ЗАХОДИ <ArrowRight className="size-4" />
                </AppLink>
              </div>
            </div>
          </div>
        </section>

        {/* 8. СПІВПРАЦЯ */}
        <section className="bg-slate-50/90 py-24 md:py-32 border-y border-slate-200/80">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader
              centered
              subtitle="ПАРТНЕРСЬКА ПЛАТФОРМА"
              title="СПІВПРАЦЯ"
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-12">
              {COOPERATION_ITEMS.map((item, idx) => (
                <AppLink
                  key={idx}
                  to={item.href}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"
                >
                  <div>
                    <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <item.icon className="size-6" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-navy leading-tight">{item.title}</h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary uppercase">
                    Деталі <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </AppLink>
              ))}
            </div>
          </div>
        </section>

        {/* 9. БЛОГ */}
        <section className="py-24 md:py-32 bg-background">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <SectionHeader subtitle="НОВИНИ ТА СТАТТІ" title="БЛОГ" />
              <AppLink
                to="/pro-nas"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-navy shadow-sm transition-all hover:bg-primary hover:text-white hover:border-primary"
              >
                ВСІ НОВИНИ <ArrowRight className="size-4" />
              </AppLink>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <article className="group rounded-3xl border border-border bg-card overflow-hidden shadow-lg transition-all hover:border-primary/40 hover:shadow-2xl">
                <div className="h-64 overflow-hidden relative">
                  <img src={ecgImg} alt="Серце" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 rounded-full bg-navy/80 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white">
                    11.07.2026
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="mb-4 text-xl md:text-2xl font-bold text-navy leading-snug group-hover:text-primary transition-colors">
                    Перші симптоми проблем із серцем: коли звертатися до кардіолога
                  </h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                    Біль у серці часто викликає тривогу та непокоїть багато людей. Але чому болить серце, коли це дійсно серйозна проблема, а коли потрібна профілактична діагностика...
                  </p>
                  <AppLink to="/poslugy/diagnostyka/kardiolohichna-diahnostyka" className="inline-flex items-center gap-2 font-bold text-primary hover:text-navy transition-colors">
                    ЧИТАТИ ДАЛІ <ArrowRight className="size-4" />
                  </AppLink>
                </div>
              </article>

              <article className="group rounded-3xl border border-border bg-card overflow-hidden shadow-lg transition-all hover:border-primary/40 hover:shadow-2xl">
                <div className="h-64 overflow-hidden relative">
                  <img src={rehabImg} alt="Артрит" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 rounded-full bg-navy/80 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white">
                    11.07.2026
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="mb-4 text-xl md:text-2xl font-bold text-navy leading-snug group-hover:text-primary transition-colors">
                    Артрит: причини, симптоми та найефективніші методи лікування
                  </h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                    Артрит — це запалення суглобів, яке може суттєво знижувати якість життя через біль, обмеження рухливості та розвиток дегенеративних змін. Тому своєчасна реабілітація вкрай важлива...
                  </p>
                  <AppLink to="/poslugy/reabilitatsiia/ortopedichna-reabilitatsiia" className="inline-flex items-center gap-2 font-bold text-primary hover:text-navy transition-colors">
                    ЧИТАТИ ДАЛІ <ArrowRight className="size-4" />
                  </AppLink>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 10. ПИТАННЯ ТА ВІДПОВІДІ (FAQ) */}
        <section className="bg-slate-50/70 py-24 md:py-32 border-t border-slate-200/60">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <SectionHeader centered subtitle="ВІДПОВІДІ" title="ПИТАННЯ ТА ВІДПОВІДІ" />
            
            <Accordion type="single" collapsible className="w-full space-y-5 mt-12">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-slate-200 bg-white px-6 md:px-8 py-2 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
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
        <section className="relative py-24 md:py-32 overflow-hidden bg-soft-blue">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative mx-auto max-w-[1000px] px-6 text-center lg:px-10">
            <h2 className="mb-6 text-3xl font-extrabold text-navy md:text-5xl lg:text-6xl">
              Зробіть перший крок<br />до <span className="text-primary">здорового</span> життя
            </h2>
            <p className="mb-10 text-lg md:text-xl text-navy/70 max-w-2xl mx-auto leading-relaxed">
              Залиште заявку, і наші спеціалісти зв'яжуться з вами для детальної консультації та підбору оптимальної програми відновлення.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AppLink to="/kontakty" className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-primary px-10 py-4 md:py-5 text-base md:text-lg font-bold tracking-wide text-primary-foreground shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.5)] sm:w-auto">
                <span className="relative z-10">ОТРИМАТИ КОНСУЛЬТАЦІЮ</span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
              </AppLink>
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
