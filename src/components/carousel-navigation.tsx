import * as React from "react";
import { cn } from "@/lib/utils";

type CarouselNavigationProps = {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  previousLabel: string;
  nextLabel: string;
  getSlideLabel?: (index: number) => string;
  className?: string;
};

function ArrowIcon({
  direction,
  className,
}: {
  direction: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className, direction === "left" && "rotate-180")}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function CarouselNavigation({
  total,
  activeIndex,
  onSelect,
  onPrevious,
  onNext,
  previousLabel,
  nextLabel,
  getSlideLabel,
  className,
}: CarouselNavigationProps) {
  if (total <= 1) return null;

  return (
    <div className={cn("flex items-center justify-center gap-4 sm:gap-7", className)}>
      <button
        type="button"
        onClick={onPrevious}
        aria-label={previousLabel}
        className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#D7E0EB] bg-white text-[#16233F] shadow-[0_10px_26px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:size-14"
      >
        <ArrowIcon direction="left" className="size-5 sm:size-6" />
      </button>

      <div className="flex items-center justify-center gap-2.5 px-1 sm:gap-4">
        {Array.from({ length: total }).map((_, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={getSlideLabel?.(index) ?? `Перейти до слайду ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "rounded-full bg-[#CCD6E4] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                isActive
                  ? "h-[14px] w-[40px] bg-primary shadow-[0_8px_18px_rgba(33,95,188,0.28)] sm:h-[18px] sm:w-[66px]"
                  : "size-[14px] hover:bg-[#B7C4D8] sm:size-[18px]",
              )}
            />
          );
        })}
      </div>

      <button
        type="button"
        onClick={onNext}
        aria-label={nextLabel}
        className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#D7E0EB] bg-white text-[#16233F] shadow-[0_10px_26px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:size-14"
      >
        <ArrowIcon direction="right" className="size-5 sm:size-6" />
      </button>
    </div>
  );
}
