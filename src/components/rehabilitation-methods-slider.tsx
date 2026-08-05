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
  badge?: string;
};

const REHABILITATION_METHODS: RehabilitationMethod[] = [
  {
    id: "individual-plan",
    title: "Індивідуальний план реабілітації",
    description:
      "Персональна програма відновлення після травм, операцій і захворювань, складена лікарем ФРМ з урахуванням діагнозу, стану здоров'я та цілей пацієнта.",
    image: rehabImg,
    href: "/reabilitatsiia",
    badge: "План відновлення",
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

function ArrowUpRightIcon({ className }: { className?: string }) {
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
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
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

function MethodCard({ card }: { card: RehabilitationMethod }) {
  return (
    <AppLink
      to={card.href}
      className="group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-[20px] bg-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/70"
    >
      <img
        src={card.image}
        alt={card.title}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />

      {card.badge && (
        <span className="absolute top-4 left-4 z-10 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md md:top-6 md:left-6">
          {card.badge}
        </span>
      )}

      <div className="relative z-10 p-5 md:p-6">
        <h3 className="mb-2.5 text-lg font-extrabold leading-snug text-white md:text-xl">
          {card.title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-slate-200 line-clamp-3">
          {card.description}
        </p>
        <span className="inline-flex translate-y-4 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100">
          Детальніше
          <ArrowUpRightIcon className="size-4" />
        </span>
      </div>
    </AppLink>
  );
}

function SectionHeader() {
  return (
    <div className="mb-12 text-center md:mb-16">
      <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-primary backdrop-blur-md uppercase">
        Методи реабілітації
      </span>
      <h2 className="text-3xl font-extrabold leading-[1.15] text-navy md:text-5xl lg:text-6xl">
        Як проходить відновлення
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
                className="pl-4 basis-[85%] sm:basis-[48%] lg:basis-[32%] xl:basis-[24%]"
              >
                <div className="h-[400px]">
                  <MethodCard card={card} />
                </div>
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
    </section>
  );
}
