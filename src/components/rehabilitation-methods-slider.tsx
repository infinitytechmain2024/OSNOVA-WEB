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

const AUTOPLAY_INTERVAL = 4500;
const DESKTOP_MQ = "(min-width: 1024px)";
const FLIP_DURATION = "600ms";
const FLIP_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

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

function MethodCard({
  card,
  featured = false,
}: {
  card: RehabilitationMethod;
  featured?: boolean;
}) {
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
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/5" />

      {card.badge && (
        <span className="absolute top-4 left-4 z-10 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md md:top-6 md:left-6">
          {card.badge}
        </span>
      )}

      <div className={cn("relative z-10 p-5 md:p-6", featured && "md:p-8")}>
        <h3
          className={cn(
            "mb-2.5 font-extrabold leading-snug text-white",
            featured ? "text-2xl md:text-3xl xl:text-4xl" : "text-lg md:text-xl",
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            "mb-5 text-sm leading-relaxed text-slate-200 line-clamp-3",
            featured && "line-clamp-4 md:text-base",
          )}
        >
          {card.description}
        </p>
        <span className="inline-flex translate-y-4 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-lg:translate-y-0 max-lg:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100">
          Детальніше
          <ArrowUpRightIcon className="size-4" />
        </span>
      </div>
    </AppLink>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia(DESKTOP_MQ);
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

const rectsEqual = (a: DOMRect, b: DOMRect) =>
  Math.abs(a.left - b.left) < 1 &&
  Math.abs(a.top - b.top) < 1 &&
  Math.abs(a.width - b.width) < 1 &&
  Math.abs(a.height - b.height) < 1;

function MethodGrid({ currentIndex }: { currentIndex: number }) {
  const total = REHABILITATION_METHODS.length;
  const featuredCard = REHABILITATION_METHODS[currentIndex];
  const smallCards = Array.from(
    { length: total - 1 },
    (_, k) => REHABILITATION_METHODS[(currentIndex + 1 + k) % total],
  );

  const slotRefs = React.useRef<Array<HTMLElement | null>>([]);
  const prevRectsRef = React.useRef<Map<string, DOMRect>>(new Map());
  const isDesktop = useIsDesktop();
  const reducedMotionRef = React.useRef(false);

  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mql.matches;
    const update = () => {
      reducedMotionRef.current = mql.matches;
    };
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  React.useLayoutEffect(() => {
    if (!isDesktop || reducedMotionRef.current) {
      prevRectsRef.current.clear();
      return;
    }

    const newRects = new Map<string, DOMRect>();
    for (const el of slotRefs.current) {
      const id = el?.dataset.flipId;
      if (!el || !id) continue;
      newRects.set(id, el.getBoundingClientRect());
    }

    const prev = prevRectsRef.current;
    const clearInline = (el: HTMLElement) => {
      el.style.transition = "";
      el.style.width = "";
      el.style.height = "";
      el.style.transform = "";
      el.style.transformOrigin = "";
    };

    for (const el of slotRefs.current) {
      const id = el?.dataset.flipId;
      if (!el || !id) continue;
      const prevRect = prev.get(id);
      const nextRect = newRects.get(id);
      if (!prevRect || !nextRect || rectsEqual(prevRect, nextRect)) continue;

      const dx = prevRect.left - nextRect.left;
      const dy = prevRect.top - nextRect.top;

      el.style.transition = "none";
      el.style.transformOrigin = "top left";
      el.style.width = `${prevRect.width}px`;
      el.style.height = `${prevRect.height}px`;
      el.style.transform = `translate(${dx}px, ${dy}px)`;

      void el.offsetWidth;

      el.style.transition = `transform ${FLIP_DURATION} ${FLIP_EASING}, width ${FLIP_DURATION} ${FLIP_EASING}, height ${FLIP_DURATION} ${FLIP_EASING}`;
      el.style.width = `${nextRect.width}px`;
      el.style.height = `${nextRect.height}px`;
      el.style.transform = "none";

      el.addEventListener("transitionend", () => clearInline(el), { once: true });
    }

    prevRectsRef.current = newRects;
  }, [currentIndex, isDesktop]);

  React.useEffect(() => {
    const clear = () => {
      for (const el of slotRefs.current) {
        if (el) {
          el.style.transition = "";
          el.style.width = "";
          el.style.height = "";
          el.style.transform = "";
          el.style.transformOrigin = "";
        }
      }
    };
    return clear;
  }, []);

  return (
    <div className="grid h-[560px] grid-cols-12 grid-rows-2 gap-6 xl:h-[620px]">
      <div
        key="featured"
        data-flip-id={featuredCard.id}
        ref={(el) => {
          slotRefs.current[0] = el;
        }}
        className="col-span-4 row-span-2 overflow-hidden rounded-[20px]"
      >
        <MethodCard card={featuredCard} featured />
      </div>

      <div className="col-span-8 row-span-2 grid grid-rows-2 gap-6">
        <div className="grid grid-cols-3 gap-6">
          {smallCards.slice(0, 3).map((card, i) => (
            <div
              key={`a${i + 1}`}
              data-flip-id={card.id}
              ref={(el) => {
                slotRefs.current[i + 1] = el;
              }}
              className="overflow-hidden rounded-[20px]"
            >
              <MethodCard card={card} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          {smallCards.slice(3, 5).map((card, i) => (
            <div
              key={`b${i + 1}`}
              data-flip-id={card.id}
              ref={(el) => {
                slotRefs.current[i + 4] = el;
              }}
              className="overflow-hidden rounded-[20px]"
            >
              <MethodCard card={card} />
            </div>
          ))}
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
  const total = REHABILITATION_METHODS.length;
  const [methodsApi, setMethodsApi] = React.useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const isDesktop = useIsDesktop();

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

  React.useEffect(() => {
    if (!isDesktop || paused) return;

    const id = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % total);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(id);
  }, [isDesktop, paused, total]);

  const goTo = (index: number) => {
    const normalized = ((index % total) + total) % total;
    if (window.matchMedia(DESKTOP_MQ).matches) {
      setCurrentIndex(normalized);
    } else {
      methodsApi?.scrollTo(normalized);
    }
  };

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  return (
    <section
      id="methods"
      className="overflow-hidden bg-white pt-24 pb-12 md:pt-32 md:pb-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <SectionHeader />

        <div className="lg:hidden">
          <Carousel
            setApi={setMethodsApi}
            plugins={[Autoplay({ delay: AUTOPLAY_INTERVAL, stopOnInteraction: true })]}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {REHABILITATION_METHODS.map((card) => (
                <CarouselItem key={card.id} className="basis-full pl-4">
                  <div className="h-[420px] sm:h-[460px]">
                    <MethodCard card={card} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-12 hidden lg:block">
          <MethodGrid currentIndex={currentIndex} />
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex items-center justify-center gap-2.5">
            {REHABILITATION_METHODS.map((card, index) => (
              <button
                key={card.id}
                type="button"
                onClick={() => goTo(index)}
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
              onClick={goPrev}
              aria-label="Попередній слайд"
              className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-navy shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ArrowLeftIcon className="size-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
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
