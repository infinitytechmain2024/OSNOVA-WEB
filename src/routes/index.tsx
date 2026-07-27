import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Activity, Heart, Stethoscope, Dumbbell, MapPin, Phone, Users, Shield, Clock } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Images
import rehabImg from "@/assets/service-rehab.jpg";
import checkupImg from "@/assets/service-checkup.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ОСНОВА Реабілітація — Оздоровчий центр у Буковелі" },
      {
        name: "description",
        content:
          "Реабілітаційний центр у Буковелі — сучасний медичний центр відновлення здоров'я. Реабілітація після травм, кардіореабілітація, спортивна медицина.",
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

const ADVANTAGES = [
  {
    icon: MapPin,
    title: "Розташування в Буковелі",
    text: "Цілющий гірський клімат сприяє швидшому відновленню та покращує загальне самопочуття.",
  },
  {
    icon: Shield,
    title: "Сучасне обладнання",
    text: "Використовуємо інноваційні технології та апарати для точної діагностики та ефективної реабілітації.",
  },
  {
    icon: Users,
    title: "Команда професіоналів",
    text: "Досвідчені лікарі, реабілітологи та фізіотерапевти працюють для досягнення ваших цілей.",
  },
  {
    icon: Clock,
    title: "Індивідуальний підхід",
    text: "Кожна програма створюється з урахуванням ваших особистих потреб та стану здоров'я.",
  },
];

const DIRECTIONS = [
  {
    icon: Activity,
    title: "Травматологічна реабілітація",
    text: "Відновлення після переломів, операцій на суглобах та спортивних травм.",
    image: rehabImg,
  },
  {
    icon: Heart,
    title: "Кардіологічна реабілітація",
    text: "Програми для пацієнтів після інфаркту, операцій на серці та судинах.",
    image: ecgImg,
  },
  {
    icon: Dumbbell,
    title: "Спортивна медицина",
    text: "Підвищення показників та безпечне відновлення для спортсменів.",
    image: sportsImg,
  },
  {
    icon: Stethoscope,
    title: "Поліклініка",
    text: "Консультації вузьких спеціалістів та діагностичні послуги на сучасному обладнанні.",
    image: checkupImg,
  },
];

const FAQS = [
  {
    question: "Що включає первинна консультація?",
    answer: "Первинна консультація включає огляд лікарем-спеціалістом, збір анамнезу, оцінку вашого поточного стану та складання індивідуального плану обстежень або реабілітації.",
  },
  {
    question: "Чи потрібне направлення для проходження реабілітації?",
    answer: "Ні, направлення не є обов'язковим. Ви можете звернутися до нас самостійно, і наші фахівці підберуть необхідну програму.",
  },
  {
    question: "Скільки триває курс реабілітації?",
    answer: "Тривалість курсу визначається індивідуально і залежить від вашого стану. Зазвичай програми тривають від 10 до 21 дня.",
  },
  {
    question: "Чи можна суміщати реабілітацію з відпочинком?",
    answer: "Так! Наше розташування в Буковелі дозволяє ідеально поєднувати лікувальні процедури з відпочинком, прогулянками та релаксом.",
  },
];

function SectionTitle({ subtitle, title, centered = false }: { subtitle?: string; title: React.ReactNode; centered?: boolean }) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && <p className="mb-3 text-sm font-bold tracking-[0.2em] text-primary">{subtitle.toUpperCase()}</p>}
      <h2 className="text-3xl font-extrabold leading-tight text-navy md:text-5xl">{title}</h2>
      <div className={`mt-6 h-1 w-20 rounded-full bg-primary ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SiteHeader />

      <main>
        {/* 1. HERO CAROUSEL */}
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-navy-deep">
          <Carousel
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            opts={{ loop: true }}
            className="size-full"
          >
            <CarouselContent className="h-full">
              {HERO_SLIDES.map((slide, index) => (
                <CarouselItem key={index} className="relative h-screen min-h-[600px] w-full basis-full">
                  <div className="absolute inset-0 size-full">
                    <img src={slide.image} alt={slide.title} className="size-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
                  </div>
                  <div className="relative flex h-full items-center">
                    <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
                      <div className="max-w-2xl animate-in slide-in-from-bottom-8 fade-in duration-1000 fill-mode-both">
                        <span className="mb-4 inline-block rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-primary">
                          {slide.subtitle}
                        </span>
                        <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] text-white md:text-7xl">
                          {slide.title}
                        </h1>
                        <p className="mb-10 text-lg leading-relaxed text-white/80 md:text-xl">
                          {slide.text}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <button className="rounded-xl bg-primary px-8 py-4 font-bold tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40">
                            ДІЗНАТИСЯ БІЛЬШЕ
                          </button>
                          <button className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-bold tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/10">
                            НАШІ ПОСЛУГИ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-10 right-10 hidden gap-4 md:flex">
              <CarouselPrevious className="static translate-y-0 translate-x-0 border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy" />
              <CarouselNext className="static translate-y-0 translate-x-0 border-white/20 bg-white/10 text-white hover:bg-white hover:text-navy" />
            </div>
          </Carousel>
        </section>

        {/* 2. ABOUT OSNOVA */}
        <section className="relative overflow-hidden py-24">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative">
                <div className="absolute -left-4 -top-4 size-24 rounded-tl-3xl border-l-4 border-t-4 border-primary/30" />
                <div className="absolute -bottom-4 -right-4 size-24 rounded-br-3xl border-b-4 border-r-4 border-primary/30" />
                <img
                  src={rehabImg}
                  alt="Реабілітаційний центр"
                  className="relative z-10 rounded-2xl object-cover shadow-2xl"
                />
              </div>
              <div>
                <SectionTitle subtitle="Про центр" title={<>ОСНОВА <br className="hidden md:block" />Реабілітація</>} />
                <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                  Сучасний медичний центр відновлення здоров'я, розташований у самому серці Карпат — на курорті Буковель. Ми поєднуємо передові медичні технології, доказову медицину та цілющий гірський клімат для вашого найшвидшого відновлення.
                </p>
                <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                  Наша місія — не просто лікувати симптоми, а повертати якість життя, радість руху та впевненість у власному тілі.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
                  <div>
                    <p className="text-4xl font-extrabold text-primary">10+</p>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">Років сумарного досвіду лікарів</p>
                  </div>
                  <div>
                    <p className="text-4xl font-extrabold text-primary">500+</p>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">Успішних програм реабілітації</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DIRECTIONS */}
        <section className="bg-secondary/30 py-24">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionTitle
              centered
              subtitle="Наші напрямки"
              title="Напрямки реабілітації та лікування"
            />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {DIRECTIONS.map((dir, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src={dir.image} alt={dir.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-8">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <dir.icon className="size-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-navy">{dir.title}</h3>
                    <p className="mb-6 text-muted-foreground">{dir.text}</p>
                    <button className="flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-navy">
                      ДЕТАЛЬНІШЕ <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE US */}
        <section className="py-24">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <SectionTitle subtitle="Переваги" title="Чому обирають ОСНОВУ?" />
                <p className="mb-8 text-lg text-muted-foreground">
                  Ми створили унікальний простір, де інноваційна медицина зустрічається з комфортом преміум-класу та турботою про кожного пацієнта.
                </p>
                <button className="rounded-xl bg-navy px-8 py-4 font-bold tracking-wide text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/25">
                  ЗАПИСАТИСЯ НА ПРИЙОМ
                </button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
                {ADVANTAGES.map((adv, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50">
                    <adv.icon className="mb-6 size-10 text-primary" />
                    <h3 className="mb-3 text-lg font-bold text-navy">{adv.title}</h3>
                    <p className="text-muted-foreground">{adv.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="bg-soft-blue py-24">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <SectionTitle centered subtitle="Відповіді" title="Часті запитання" />
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card px-6">
                  <AccordionTrigger className="text-left text-lg font-bold text-navy hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="relative py-32">
          <div className="absolute inset-0 bg-navy-deep">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
          <div className="relative mx-auto max-w-[1000px] px-6 text-center lg:px-10">
            <h2 className="mb-8 text-4xl font-extrabold text-white md:text-6xl">
              Зробіть перший крок до здорового життя
            </h2>
            <p className="mb-12 text-xl text-white/70">
              Залиште заявку, і наші спеціалісти зв'яжуться з вами для детальної консультації та підбору оптимальної програми.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="w-full rounded-xl bg-primary px-10 py-5 text-lg font-bold tracking-wide text-primary-foreground transition-all hover:bg-primary/90 sm:w-auto">
                ОТРИМАТИ КОНСУЛЬТАЦІЮ
              </button>
              <a
                href="tel:+380674702788"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto"
              >
                <Phone className="size-5" />
                +380 674 702 788
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-background py-10 text-center border-t border-border">
          <p className="text-muted-foreground">&copy; 2024 OSNOVA Реабілітація. Всі права захищені.</p>
      </footer>
    </div>
  );
}
