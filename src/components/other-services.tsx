import * as React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import rehabImg from "@/assets/service-rehab.jpg";
import checkupImg from "@/assets/service-checkup.jpg";
import sportsImg from "@/assets/service-sports.jpg";

const SERVICES = [
  {
    title: "Реабілітація",
    text: "Індивідуальні програми відновлення після травм, операцій та захворювань під наглядом лікарів і фізичних терапевтів.",
    img: rehabImg,
  },
  {
    title: "Чекапи",
    text: "Комплексні програми обстеження організму: лабораторна діагностика, огляди спеціалістів та підсумковий медичний висновок.",
    img: checkupImg,
  },
  {
    title: "Спортивна медицина",
    text: "Оцінка функціонального стану спортсменів, тестування витривалості та рекомендації щодо безпечних тренувальних навантажень.",
    img: sportsImg,
  },
  {
    title: "Функціональна діагностика",
    text: "Апаратні дослідження серця, судин і дихальної системи для точної оцінки стану здоров'я та контролю динаміки.",
    img: checkupImg,
  },
];

export function OtherServices() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    let closest = 0;
    let min = Infinity;
    children.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - track.offsetLeft - track.scrollLeft);
      if (d < min) {
        min = d;
        closest = i;
      }
    });
    setActive(closest);
  };

  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-4xl font-extrabold text-navy md:text-5xl">Інші послуги</h2>
        <div className="hidden gap-3 md:flex">
          <button
            type="button"
            aria-label="Попередній слайд"
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            className="flex size-12 items-center justify-center rounded-full border border-border text-navy transition-colors hover:bg-soft-blue"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Наступний слайд"
            onClick={() => scrollToIndex(Math.min(SERVICES.length - 1, active + 1))}
            className="flex size-12 items-center justify-center rounded-full border border-border text-navy transition-colors hover:bg-soft-blue"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SERVICES.map((s) => (
          <article
            key={s.title}
            className="flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-soft shadow-sm sm:w-[55%] lg:w-[calc((100%-3rem)/3-1.5rem)]"
          >
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width={1024}
              height={768}
              className="h-56 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-3 line-clamp-3 text-navy/75">{s.text}</p>
              <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                Детальніше <ArrowRight className="size-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        {SERVICES.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Слайд ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === active ? "w-8 bg-primary" : "w-2.5 bg-navy/20",
            )}
          />
        ))}
      </div>
    </section>
  );
}
