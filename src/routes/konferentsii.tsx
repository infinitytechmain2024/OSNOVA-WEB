import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  LayoutGrid,
} from "lucide-react";

import { AppLink } from "@/components/app-link";
import { Breadcrumbs, PageContainer } from "@/components/blocks";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONFERENCES, type ConferenceItem, type ConferenceStatus } from "@/data/conferences";
import { cn } from "@/lib/utils";

import educationConferenceImg from "@/assets/education-conference.png";

export const Route = createFileRoute("/konferentsii")({
  validateSearch: (search: Record<string, unknown>): { page?: number } => {
    const page = Number(search.page);
    return {
      page: Number.isFinite(page) && page > 1 ? Math.floor(page) : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Конференції — ОСНОВА Реабілітація" },
      {
        name: "description",
        content:
          "Календар та архів конференцій ОСНОВА Реабілітація: фахові події, дати проведення та статуси.",
      },
      { property: "og:title", content: "Конференції — ОСНОВА Реабілітація" },
      {
        property: "og:description",
        content: "Переглядайте заплановані, активні та завершені конференції ОСНОВА Реабілітація.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/konferentsii" }],
  }),
  component: ConferencesPage,
});

const CONFERENCES_PER_PAGE = 8;

const STATUS_META: Record<
  ConferenceStatus,
  { label: string; className: string; icon: typeof CheckCircle2 }
> = {
  finished: {
    label: "Завершена",
    className: "bg-slate-100 text-slate-700 ring-slate-200",
    icon: CheckCircle2,
  },
  active: {
    label: "Не завершена",
    className: "bg-emerald-100 text-emerald-800 ring-emerald-200",
    icon: Clock3,
  },
  planned: {
    label: "У планах",
    className: "bg-amber-100 text-amber-800 ring-amber-200",
    icon: CalendarDays,
  },
};

const pageNumbers = Array.from(
  { length: Math.ceil(CONFERENCES.length / CONFERENCES_PER_PAGE) },
  (_, index) => index + 1,
);

function ConferencesPage() {
  const { page } = Route.useSearch();
  const navigate = Route.useNavigate();
  const totalPages = pageNumbers.length;
  const currentPage = page ?? 1;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safePage - 1) * CONFERENCES_PER_PAGE;
  const visibleConferences = CONFERENCES.slice(startIndex, startIndex + CONFERENCES_PER_PAGE);
  const finishedCount = CONFERENCES.filter((conference) => conference.status === "finished").length;
  const plannedCount = CONFERENCES.filter((conference) => conference.status === "planned").length;
  const activeCount = CONFERENCES.filter((conference) => conference.status === "active").length;

  React.useEffect(() => {
    if (currentPage !== safePage) {
      void navigate({
        replace: true,
        search: { page: safePage > 1 ? safePage : undefined },
      });
    }
  }, [currentPage, navigate, safePage]);

  const handlePageChange = (nextPage: number) => {
    void navigate({
      search: { page: nextPage > 1 ? nextPage : undefined },
    });
    window.requestAnimationFrame(() => {
      document.getElementById("conferences-grid")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-navy-deep">
          <img
            src={educationConferenceImg}
            alt="Конференції ОСНОВА Реабілітація"
            width={1200}
            height={800}
            className="absolute inset-0 size-full object-cover object-center opacity-45 mix-blend-luminosity lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/25" />
          <div className="relative mx-auto max-w-[1600px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70 sm:text-sm sm:tracking-[0.28em]">
              КОНФЕРЕНЦІЇ
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-[1.1] text-background sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl">
              Конференції ОСНОВА
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-background/85 sm:mt-8 sm:text-lg">
              Єдина сторінка для запланованих, поточних та завершених фахових подій центру.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-background">
              <HeroFact label="Усього подій" value={`${CONFERENCES.length}`} />
              <HeroFact label="На сторінці" value={`${CONFERENCES_PER_PAGE}`} />
              <HeroFact label="Сторінок" value={`${totalPages}`} />
            </div>
          </div>
        </section>

        <PageContainer className="py-5">
          <Breadcrumbs
            className="pt-0"
            items={[
              { title: "Головна", route: "/" },
              { title: "Конференції", route: "/konferentsii" },
            ]}
          />
        </PageContainer>

        <section className="border-y border-slate-200/70 bg-slate-50/80 py-6">
          <PageContainer>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3 text-navy">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <LayoutGrid className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Архів конференцій
                  </p>
                  <p className="mt-1 text-sm font-semibold text-navy">
                    Показуємо по {CONFERENCES_PER_PAGE} блоків на сторінку
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <StatusSummary label="Не завершена" value={activeCount} status="active" />
                <StatusSummary label="У планах" value={plannedCount} status="planned" />
                <StatusSummary label="Завершена" value={finishedCount} status="finished" />
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="bg-background py-16 md:py-24">
          <PageContainer>
            <div
              id="conferences-grid"
              className="grid scroll-mt-8 gap-6 sm:grid-cols-2 xl:grid-cols-4"
            >
              {visibleConferences.map((conference) => (
                <ConferenceCard key={conference.id} conference={conference} />
              ))}
            </div>

            <ConferencePagination
              currentPage={safePage}
              onPageChange={handlePageChange}
              startIndex={startIndex}
              total={CONFERENCES.length}
              visibleCount={visibleConferences.length}
            />
          </PageContainer>
        </section>

        <section className="bg-soft-blue py-20 md:py-24">
          <PageContainer className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              ОРГАНІЗАЦІЯ ПОДІЙ
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-navy md:text-5xl">
              Маєте питання щодо участі у конференції?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy/75 md:text-lg">
              Команда ОСНОВА допоможе зорієнтуватися за датами, форматом участі та програмою події.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AppLink
                to="/kontakty"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-primary/90 sm:w-auto"
              >
                ЗВʼЯЗАТИСЯ З НАМИ <ArrowRight className="size-4" />
              </AppLink>
            </div>
          </PageContainer>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function HeroFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-background/60">
        {label}
      </p>
      <p className="mt-1 text-lg font-extrabold text-background">{value}</p>
    </div>
  );
}

function StatusSummary({
  label,
  value,
  status,
}: {
  label: string;
  value: number;
  status: ConferenceStatus;
}) {
  const statusMeta = STATUS_META[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold ring-1",
        statusMeta.className,
      )}
    >
      {label}
      <span className="rounded-md bg-white/70 px-2 py-0.5 text-[11px]">{value}</span>
    </span>
  );
}

function ConferenceCard({ conference }: { conference: ConferenceItem }) {
  const statusMeta = STATUS_META[conference.status];
  const StatusIcon = statusMeta.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={conference.image}
          alt={conference.imageAlt}
          width={900}
          height={675}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] shadow-sm ring-1 backdrop-blur-md",
            statusMeta.className,
          )}
        >
          <StatusIcon className="size-3.5" />
          {statusMeta.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
          <CalendarDays className="size-4 text-primary" />
          <time dateTime={conference.dateIso}>{conference.date}</time>
        </div>
        <h2 className="text-lg font-bold leading-snug text-navy transition-colors group-hover:text-primary">
          {conference.title}
        </h2>
      </div>
    </article>
  );
}

function ConferencePagination({
  currentPage,
  onPageChange,
  startIndex,
  total,
  visibleCount,
}: {
  currentPage: number;
  onPageChange: (page: number) => void;
  startIndex: number;
  total: number;
  visibleCount: number;
}) {
  const lastVisible = startIndex + visibleCount;

  return (
    <nav className="mt-12 flex flex-col items-center gap-5" aria-label="Пагінація конференцій">
      <p className="text-sm font-semibold text-muted-foreground">
        Показано {startIndex + 1}-{lastVisible} із {total}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <PaginationButton
          label="Попередня сторінка"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft className="size-4" />
        </PaginationButton>

        {pageNumbers.map((page) => (
          <PaginationButton
            key={page}
            label={`Сторінка ${page}`}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PaginationButton>
        ))}

        <PaginationButton
          label="Наступна сторінка"
          disabled={currentPage === pageNumbers.length}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight className="size-4" />
        </PaginationButton>
      </div>
    </nav>
  );
}

function PaginationButton({
  active,
  children,
  disabled,
  label,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex size-10 items-center justify-center rounded-lg border text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-40",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-slate-200 bg-white text-navy hover:border-primary/40 hover:text-primary",
      )}
    >
      {children}
    </button>
  );
}
