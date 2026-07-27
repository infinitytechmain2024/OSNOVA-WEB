import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SiteNode } from "@/data/types";
import { ServiceCard } from "@/components/blocks";

export function RelatedServices({
  items,
  title = "Інші послуги",
}: {
  items: SiteNode[];
  title?: string;
}) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);
  if (!items.length) return null;

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
        <h2 className="text-3xl font-extrabold text-navy md:text-5xl">{title}</h2>
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
            onClick={() => scrollToIndex(Math.min(items.length - 1, active + 1))}
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
        {items.map((s) => (
          <div
            key={s.id}
            className="flex w-[82%] shrink-0 snap-start sm:w-[55%] lg:w-[calc((100%-3rem)/3-1.5rem)]"
          >
            <ServiceCard node={s} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        {items.map((s, i) => (
          <button
            key={s.id}
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
