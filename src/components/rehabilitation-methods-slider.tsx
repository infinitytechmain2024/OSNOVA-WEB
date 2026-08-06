import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { AppLink } from "@/components/app-link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import rehabImg from "@/assets/service-rehab.jpg";
import checkupImg from "@/assets/service-checkup.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import cpetImg from "@/assets/cpet-test.jpg";
import ergoImg from "@/assets/ergometer.jpg";

const AUTOPLAY_DELAY = 4500;

type RehabilitationMethod = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

const REHABILITATION_METHODS: RehabilitationMethod[] = [
  {
    id: "individual-plan",
    title: "Індивідуальний план реабілітації",
    description:
      "Персональна програма відновлення після травм, операцій і захворювань, складена лікарем ФРМ з урахуванням ваших цілей та стану здоров'я.",
    image: rehabImg,
    href: "/reabilitatsiia",
  },
  {
    id: "physical-therapy",
    title: "Фізична терапія",
    description:
      "Відновлення рухових функцій і повернення до активного життя під керівництвом досвідчених фізичних терапевтів.",
    image: ergoImg,
    href: "/vidnovlennia",
  },
  {
    id: "hydrokinesiotherapy",
    title: "Гідрокінезіотерапія",
    description:
      "Водні процедури та відновлювальна гімнастика в басейні для м'якого розвантаження суглобів і хребта.",
    image: sportsImg,
    href: "/vidnovlennia/hidrokinezioterapiia",
  },
  {
    id: "physiotherapy",
    title: "Фізіотерапія",
    description:
      "Сучасні апаратні методики: електротерапія, лазеротерапія, магнітотерапія та ударно-хвильова терапія.",
    image: cpetImg,
    href: "/vidnovlennia/fizioterapiia",
  },
  {
    id: "therapeutic-massage",
    title: "Лікувальний масаж",
    description:
      "Класичний і апаратний масаж для зняття м'язового напруження, покращення кровообігу та прискорення відновлення.",
    image: rehabImg,
    href: "/vidnovlennia/likuvalnyi-masazh",
  },
  {
    id: "mineral-water",
    title: "Оздоровчий бювет",
    description:
      "Цілюща мінеральна вода для оздоровлення, підтримки обміну речовин та комплексного відновлення.",
    image: checkupImg,
    href: "/infrastruktura",
  },
];

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

function MethodCard({ card }: { card: RehabilitationMethod }) {
  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative h-[210px] w-full overflow-hidden bg-slate-100">
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between bg-white p-6 md:p-7">
        <div>
          <h3 className="mb-3 text-xl font-bold leading-snug text-navy">{card.title}</h3>
          <p className="mb-6 line-clamp-3 text-sm font-normal leading-relaxed text-slate-600">
            {card.description}
          </p>
        </div>

        <div>
          <AppLink
            to={card.href}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-md"
          >
            Детальніше{" "}
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </AppLink>
        </div>
      </div>
    </div>
  );
}

function StatsPanel() {
  return (
    <div className="flex shrink-0 flex-col justify-center rounded-[24px] bg-navy px-8 py-10 text-white lg:min-w-[280px] lg:px-10">
      <h3 className="mb-8 text-2xl font-bold leading-snug">
        Наш підхід —
        <br />
        ваш результат
      </h3>

      <div className="space-y-8">
        <div>
          <span className="block text-5xl font-extrabold tracking-tight">5</span>
          <span className="mt-1 block text-sm font-medium leading-snug text-white/70">
            напрямків
            <br />
            реабілітації
          </span>
        </div>

        <div className="h-px w-full bg-white/15" />

        <div>
          <span className="block text-5xl font-extrabold tracking-tight">30+</span>
          <span className="mt-1 block text-sm font-medium leading-snug text-white/70">
            ефективних
            <br />
            методик
          </span>
        </div>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="mb-12 text-center md:mb-16">
      <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-primary backdrop-blur-md uppercase">
        Методи реабілітації
      </span>
      <h2 className="text-3xl font-extrabold leading-[1.15] text-navy md:text-5xl lg:text-6xl">
        МЕТОДИ РЕАБІЛІТАЦІЇ ТА ЛІКУВАННЯ
      </h2>
      <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green" />
      <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
        Повернення до активного життя після травм, операцій і захворювань: індивідуальні програми,
        сучасні методи фізичної терапії та лікарський супровід на кожному етапі відновлення.
      </p>
    </div>
  );
}

export function RehabilitationMethodsSlider() {
  const [methodsApi, setMethodsApi] = React.useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (!methodsApi) return;

    const onSelect = () => setCurrentIndex(methodsApi.selectedScrollSnap());
    onSelect();
    methodsApi.on("select", onSelect);
    methodsApi.on("reInit", onSelect);

    return () => {
      methodsApi.off("select", onSelect);
      methodsApi.off("reInit", onSelect);
    };
  }, [methodsApi]);

  return (
    <section id="methods" className="overflow-hidden bg-white pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <SectionHeader />

        <div className="flex flex-col gap-6 lg:flex-row">
          <StatsPanel />

          <div className="flex-1 overflow-hidden">
            <Carousel
              setApi={setMethodsApi}
              plugins={[Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: true })]}
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {REHABILITATION_METHODS.map((card) => (
                  <CarouselItem
                    key={card.id}
                    className="pl-4 basis-[85%] sm:basis-[48%] lg:basis-[45%] xl:basis-[32%]"
                  >
                    <MethodCard card={card} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="mt-10 flex flex-col items-center gap-6">
              <div className="flex items-center justify-center gap-2.5">
                {REHABILITATION_METHODS.map((card, index) => (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => methodsApi?.scrollTo(index)}
                    aria-label={`Перейти до методу ${card.title}`}
                    aria-current={currentIndex === index ? "true" : undefined}
                    className={cn(
                      "h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                      currentIndex === index
                        ? "w-8 bg-primary shadow-sm"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400",
                    )}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => methodsApi?.scrollPrev()}
                  aria-label="Попередній слайд"
                  className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-navy shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <ArrowLeftIcon className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => methodsApi?.scrollNext()}
                  aria-label="Наступний слайд"
                  className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-navy shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <ArrowRightIcon className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
