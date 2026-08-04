import * as React from "react";
import { Info } from "lucide-react";

export type PriceCategory = {
  name: string;
  items: {
    name: string;
    duration?: string;
    price: string;
  }[];
};

export type PricesAndServicesBlockProps = {
  title?: string;
  categories: PriceCategory[];
  footerText?: string;
  footerButtonLabel?: string;
  onFooterButtonClick?: () => void;
};

export function PricesAndServicesBlock({
  title = "Ціни та послуги",
  categories,
  footerText,
  footerButtonLabel = "ЗАМОВИТИ ПОСЛУГУ",
  onFooterButtonClick,
}: PricesAndServicesBlockProps) {
  return (
    <div className="section-shell">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-navy md:text-5xl mb-8 sm:mb-12">
        {title}
      </h2>

      <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 bg-white border-b border-blue-100">
          <div className="col-span-7 font-bold text-navy text-sm">Назва послуги</div>
          <div className="col-span-3 font-bold text-navy text-sm text-center">Тривалість</div>
          <div className="col-span-2 font-bold text-navy text-sm text-right pr-4">Ціна</div>
        </div>

        {/* Categories */}
        <div className="flex flex-col">
          {categories.map((category, catIdx) => (
            <div key={`${category.name}-${catIdx}`}>
              {/* Category Header */}
              <div className="bg-blue-50/60 px-6 py-4 border-b border-blue-100/50">
                <h3 className="font-bold text-primary text-base sm:text-lg flex items-center gap-3">
                  {category.name}
                </h3>
              </div>

              {/* Items */}
              <div className="flex flex-col">
                {category.items.map((item, itemIdx) => {
                  const isLast = itemIdx === category.items.length - 1;
                  return (
                    <div
                      key={`${item.name}-${itemIdx}`}
                      className={`grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-6 py-4 hover:bg-slate-50 transition-colors ${
                        !isLast ? "border-b border-blue-100/40" : ""
                      }`}
                    >
                      <div className="col-span-1 sm:col-span-7 flex items-start gap-3">
                        <span className="mt-2 flex size-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-sm sm:text-base text-navy/90 font-medium leading-tight">
                          {item.name}
                        </span>
                      </div>
                      
                      <div className="col-span-1 sm:col-span-3 flex sm:justify-center items-center pl-4 sm:pl-0">
                        {item.duration && (
                          <span className="text-xs sm:text-sm text-navy/70 whitespace-nowrap">
                            {item.duration}
                          </span>
                        )}
                      </div>

                      <div className="col-span-1 sm:col-span-2 flex sm:justify-end items-center pl-4 sm:pl-0">
                        <span className="text-sm sm:text-base font-bold text-primary text-left sm:text-right">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {footerText && (
          <div className="bg-blue-50/50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-blue-100">
            <div className="flex items-start sm:items-center gap-4 flex-1">
              <div className="shrink-0 flex items-center justify-center size-8 rounded-full border-2 border-primary text-primary">
                <Info className="size-4" strokeWidth={3} />
              </div>
              <p className="text-xs sm:text-sm text-navy/80 max-w-2xl leading-relaxed">
                {footerText}
              </p>
            </div>
            
            <button
              type="button"
              onClick={onFooterButtonClick}
              className="w-full sm:w-auto shrink-0 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold tracking-wide text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] shadow-sm text-center"
            >
              {footerButtonLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
