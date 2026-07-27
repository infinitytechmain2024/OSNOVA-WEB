import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, Heart, Stethoscope, Dumbbell, MapPin, Phone, Users, Shield, Clock, ChevronRight } from "lucide-react";
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
    href: "/reabilitatsiia"
  },
  {
    icon: Heart,
    title: "Кардіологічна реабілітація",
    text: "Програми для пацієнтів після інфаркту, операцій на серці та судинах.",
    image: ecgImg,
    href: "/diagnostyka"
  },
  {
    icon: Dumbbell,
    title: "Спортивна медицина",
    text: "Підвищення показників та безпечне відновлення для спортсменів.",
    image: sportsImg,
    href: "/vidnovlennia"
  },
  {
    icon: Stethoscope,
    title: "Поліклініка",
    text: "Консультації вузьких спеціалістів та діагностичні послуги на сучасному обладнанні.",
    image: checkupImg,
    href: "/check-up"
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

function SectionHeader({ subtitle, title, centered = false }: { subtitle?: string; title: React.ReactNode; centered?: boolean }) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-primary backdrop-blur-md">
          {subtitle.toUpperCase()}
        </span>
      )}
      <h2 className="text-4xl font-extrabold leading-[1.15] text-navy md:text-5xl lg:text-6xl">{title}</h2>
      <div className={`mt-8 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SiteHeader />

      <main>
        {/* 1. HERO CAROUSEL */}
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-navy-deep">
          <Carousel
            plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
            opts={{ loop: true, watchDrag: false }}
            className="size-full"
          >
            <CarouselContent className="h-full">
              {HERO_SLIDES.map((slide, index) => (
                <CarouselItem key={index} className="relative h-screen min-h-[700px] w-full basis-full">
                  <div className="absolute inset-0 size-full">
                    <img src={slide.image} alt={slide.title} className="size-full object-cover object-center scale-105 animate-[slow-pan_20s_ease-in-out_infinite_alternate]" />
                    {/* Modern Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20" />
                  </div>
                  
                  {/* Floating Content Card */}
                  <div className="relative flex h-full items-center">
                    <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
                      <div className="max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl animate-in slide-in-from-bottom-12 fade-in duration-1000 fill-mode-both lg:p-12 shadow-2xl">
                        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold tracking-wider text-primary ring-1 ring-primary/30">
                          <span className="size-2 rounded-full bg-primary animate-pulse" />
                          {slide.subtitle}
                        </span>
                        <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] text-white md:text-6xl lg:text-7xl">
                          {slide.title}
                        </h1>
                        <p className="mb-10 text-lg leading-relaxed text-white/80 md:text-xl">
                          {slide.text}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <Link href="/kontakty" className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-8 py-4 font-bold tracking-wide text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.5)]">
                            <span className="relative z-10">ЗАПИСАТИСЯ</span>
                            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
                          </Link>
                          <Link href="/poslugy" className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-bold tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/10">
                            НАШІ ПОСЛУГИ <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Carousel Controls */}
            <div className="absolute bottom-12 right-12 hidden items-center gap-4 lg:flex">
              <CarouselPrevious className="static size-14 translate-y-0 translate-x-0 border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-navy hover:scale-110" />
              <CarouselNext className="static size-14 translate-y-0 translate-x-0 border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-navy hover:scale-110" />
            </div>
          </Carousel>
        </section>

        {/* 2. BENTO GRID ABOUT SECTION */}
        <section className="relative overflow-hidden bg-background py-32">
          {/* Subtle background decoration */}
          <div className="absolute -left-[10%] top-[20%] size-[500px] rounded-full bg-primary/5 blur-[120px]" />
          
          <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="pr-8">
                <SectionHeader subtitle="Про центр" title={<>Сучасний центр <br/>відновлення <span className="text-primary">здоров'я</span></>} />
                <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                  Розташований у самому серці Карпат — на курорті Буковель. Ми поєднуємо передові медичні технології, доказову медицину та цілющий гірський клімат для вашого найшвидшого відновлення.
                </p>
                <p className="mb-12 text-lg leading-relaxed text-muted-foreground/80">
                  Наша місія — не просто лікувати симптоми, а повертати якість життя, радість руху та впевненість у власному тілі.
                </p>
                <Link href="/kontakty" className="inline-flex items-center gap-3 text-lg font-bold text-navy transition-colors hover:text-primary">
                  Дізнатися більше <ChevronRight className="size-5" />
                </Link>
              </div>
              
              {/* Bento Grid layout */}
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 overflow-hidden rounded-3xl lg:col-span-1">
                  <img src={rehabImg} alt="Реабілітація" className="size-full object-cover min-h-[300px] hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex flex-col justify-center rounded-3xl bg-navy-deep p-8 text-white shadow-2xl lg:p-10">
                  <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-brand-green mb-4">10+</h3>
                  <p className="text-lg font-medium text-white/80">Років сумарного досвіду наших лікарів</p>
                </div>
                <div className="flex flex-col justify-center rounded-3xl bg-secondary p-8 shadow-xl lg:p-10 border border-primary/10">
                  <h3 className="text-6xl font-black text-navy mb-4">500+</h3>
                  <p className="text-lg font-medium text-navy/80">Успішних програм реабілітації</p>
                </div>
                <div className="col-span-2 overflow-hidden rounded-3xl lg:col-span-1">
                  <img src={checkupImg} alt="Діагностика" className="size-full object-cover min-h-[300px] hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DIRECTIONS - IMMERSIVE CARDS */}
        <section className="bg-secondary/40 py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <SectionHeader
              centered
              subtitle="Напрямки роботи"
              title="Наші ключові послуги"
            />
            
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mt-16">
              {DIRECTIONS.map((dir, i) => (
                <Link key={i} href={dir.href} className="group relative flex h-[450px] flex-col justify-end overflow-hidden rounded-3xl">
                  {/* Background Image & Overlay */}
                  <div className="absolute inset-0">
                    <img src={dir.image} alt={dir.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                    <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-primary/90 text-primary-foreground backdrop-blur-md shadow-lg shadow-primary/30">
                      <dir.icon className="size-7" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-white">{dir.title}</h3>
                    <p className="mb-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-white/80 line-clamp-3">
                      {dir.text}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold tracking-wider text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100 uppercase">
                      Перейти <ArrowRight className="size-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE US */}
        <section className="relative py-32 overflow-hidden bg-background">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <SectionHeader centered subtitle="Переваги" title="Чому обирають нас?" />
              <p className="text-xl text-muted-foreground">
                Ми створили унікальний простір, де інноваційна медицина зустрічається з комфортом преміум-класу.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ADVANTAGES.map((adv, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5">
                  <div className="absolute -right-8 -top-8 size-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                  <adv.icon className="relative z-10 mb-8 size-12 text-primary" />
                  <h3 className="relative z-10 mb-4 text-xl font-bold text-navy">{adv.title}</h3>
                  <p className="relative z-10 text-muted-foreground leading-relaxed">{adv.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="bg-navy-deep py-32 text-white">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-white backdrop-blur-md">
                ВІДПОВІДІ
              </span>
              <h2 className="text-4xl font-extrabold leading-[1.15] md:text-5xl lg:text-6xl">Часті запитання</h2>
              <div className="mx-auto mt-8 h-1.5 w-24 rounded-full bg-primary" />
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-6">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-white/10 bg-white/5 px-8 py-2 backdrop-blur-sm transition-colors hover:bg-white/10">
                  <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-white/70 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-soft-blue">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
          <div className="relative mx-auto max-w-[1000px] px-6 text-center lg:px-10">
            <h2 className="mb-8 text-4xl font-extrabold text-navy md:text-6xl">
              Зробіть перший крок<br/>до <span className="text-primary">здорового</span> життя
            </h2>
            <p className="mb-12 text-xl text-navy/70 max-w-2xl mx-auto">
              Залиште заявку, і наші спеціалісти зв'яжуться з вами для детальної консультації та підбору оптимальної програми.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link href="/kontakty" className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-primary px-10 py-5 text-lg font-bold tracking-wide text-primary-foreground shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.5)] sm:w-auto">
                <span className="relative z-10">ОТРИМАТИ КОНСУЛЬТАЦІЮ</span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
              <a
                href="tel:+380674702788"
                className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-navy bg-transparent px-10 py-5 text-lg font-bold text-navy transition-all hover:bg-navy hover:text-white sm:w-auto"
              >
                <Phone className="size-5" />
                +380 674 702 788
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-background py-10 text-center border-t border-border">
          <p className="text-muted-foreground font-medium">&copy; 2024 OSNOVA Реабілітація. Всі права захищені.</p>
      </footer>
    </div>
  );
}
