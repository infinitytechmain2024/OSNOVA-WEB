import { AppLink } from "@/components/app-link";
import type { NewsArticle } from "@/data/news";
import { cn } from "@/lib/utils";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

export function NewsCard({
  article,
  variant = "default",
}: {
  article: NewsArticle;
  variant?: "default" | "featured";
}) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl",
        isFeatured ? "grid lg:grid-cols-[1.08fr_0.92fr]" : "flex h-full flex-col",
      )}
    >
      <AppLink
        to={article.href}
        className={cn(
          "relative block overflow-hidden",
          isFeatured ? "min-h-[320px] lg:h-full" : "h-80",
        )}
        aria-label={article.title}
      >
        <img
          src={article.image}
          alt={article.imageAlt}
          width={1200}
          height={800}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-navy/80 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {article.date}
        </span>
      </AppLink>

      <div className={cn("flex flex-1 flex-col", isFeatured ? "p-7 sm:p-10 lg:p-12" : "p-8")}>
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 text-primary">
            <CalendarDays className="size-3.5" />
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="size-3.5" />
            {article.readTime}
          </span>
        </div>

        <h3
          className={cn(
            "font-bold leading-snug text-navy transition-colors group-hover:text-primary",
            isFeatured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl md:text-2xl",
          )}
        >
          <AppLink to={article.href}>{article.title}</AppLink>
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {article.excerpt}
        </p>

        <AppLink
          to={article.href}
          className="mt-7 inline-flex w-fit items-center gap-2 font-bold text-primary transition-colors hover:text-navy"
        >
          ЧИТАТИ ДАЛІ{" "}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </AppLink>
      </div>
    </article>
  );
}
