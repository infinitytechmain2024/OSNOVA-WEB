import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  MapPin,
  MessageCircle,
  Users,
} from "lucide-react";

import { AppLink } from "@/components/app-link";
import { Breadcrumbs, PageContainer, SectionHeader } from "@/components/blocks";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACTS } from "@/data/site-tree";
import { getBreadcrumbs, getNodeByRoute } from "@/lib/tree";

import cpetImg from "@/assets/cpet-test.jpg";
import rehabImg from "@/assets/service-rehab.jpg";
import sportsImg from "@/assets/service-sports.jpg";

export const Route = createFileRoute("/iventy")({
  head: () => ({
    meta: [
      { title: "Івенти — ОСНОВА Реабілітація, Буковель" },
      {
        name: "description",
        content:
          "Події ОСНОВИ: відкриті тренування, лекції, практичні зустрічі та дні діагностики у фітнес-залі або медичному центрі в Буковелі.",
      },
      { property: "og:title", content: "Івенти — ОСНОВА Реабілітація" },
      {
        property: "og:description",
        content:
          "Анонси подій у фітнес-залі та центрі ОСНОВА: тренування, освітні зустрічі й практичні формати для здорового відновлення.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

const venueCards = [
  {
    icon: Dumbbell,
    title: "Фітнес-зал",
    label: "рухові події",
    text: "Відкриті тренування, функціональні заняття, mobility-класи та практики з безпечним навантаженням.",
    bullets: ["групові тренування", "майстер-класи з техніки руху", "відновлення після активності"],
  },
  {
    icon: Building2,
    title: "Медичний центр",
    label: "освітні та діагностичні формати",
    text: "Лекції лікарів, консультаційні дні, зустрічі зі спеціалістами та події для пацієнтів і партнерів.",
    bullets: ["лекції та Q&A", "дні діагностики", "зустрічі для партнерів"],
  },
];

const events = [
  {
    icon: Activity,
    title: "Відкрите функціональне тренування",
    tag: "Фітнес",
    venue: "Фітнес-зал",
    date: "дату анонсуємо",
    audience: "для гостей центру та мешканців курорту",
    image: sportsImg,
    text: "Практичне заняття з контролем техніки, розминкою, силовим блоком і мʼяким відновленням після навантаження.",
  },
  {
    icon: HeartPulse,
    title: "День кардіологічної діагностики",
    tag: "Діагностика",
    venue: "Медичний центр",
    date: "дату анонсуємо",
    audience: "для тих, хто хоче оцінити серце перед активністю",
    image: cpetImg,
    text: "Зустріч із командою кардіологічного напряму, базові рекомендації та пояснення, які обстеження потрібні перед тренуваннями.",
  },
  {
    icon: GraduationCap,
    title: "Лекція про здоровʼя спини",
    tag: "Освіта",
    venue: "Центр ОСНОВА",
    date: "дату анонсуємо",
    audience: "для пацієнтів, спортсменів і всіх, хто багато сидить або тренується",
    image: rehabImg,
    text: "Розмова зі спеціалістом про біль, поставу, відновлення рухливості та прості звички, які допомагають спині щодня.",
  },
];

const formats = [
  "групові тренування та recovery-сесії",
  "лекції лікарів і фізичних терапевтів",
  "дні відкритих консультацій",
  "події для партнерів, команд і спортивних груп",
];

function EventsPage() {
  const pageNode = getNodeByRoute("/iventy");
  const breadcrumbs = pageNode
    ? getBreadcrumbs(pageNode)
    : [
        { title: "Головна", route: "/" },
        { title: "Івенти", route: "/iventy" },
      ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageContainer className="py-4 sm:py-6">
        <Breadcrumbs items={breadcrumbs} className="pt-0" />
      </PageContainer>

      <main>
        <section className="relative overflow-hidden bg-navy-deep">
          <img
            src={sportsImg}
            alt="Фітнес-зал ОСНОВА"
            width={1600}
            height={1000}
            className="absolute inset-0 size-full object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy-deep/30" />

          <PageContainer className="relative py-16 sm:py-20 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/75 sm:text-sm">
                ПОДІЇ ОСНОВИ
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-normal text-background sm:text-5xl lg:text-7xl">
                Івенти у фітнес-залі та центрі
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg">
                Проводимо події про рух, відновлення, діагностику та здоровий спосіб життя. Частина
                форматів проходить у фітнес-залі, частина — у медичному центрі ОСНОВА.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <AppLink
                  to="/kontakty"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 py-3 text-center text-sm font-bold text-brand-green-foreground shadow-md transition-opacity hover:opacity-90 sm:px-8"
                >
                  <MessageCircle className="size-4" />
                  Запитати про найближчий івент
                </AppLink>
                <a
                  href={CONTACTS.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-background/45 px-6 py-3 text-center text-sm font-bold text-background transition-colors hover:bg-background/10 sm:px-8"
                >
                  <CalendarDays className="size-4" />
                  {CONTACTS.phone}
                </a>
              </div>
            </div>

            <dl className="mt-12 grid gap-4 sm:grid-cols-3 lg:max-w-4xl">
              {[
                { label: "локації", value: "фітнес-зал / центр" },
                { label: "формати", value: "тренування, лекції, діагностика" },
                { label: "участь", value: "за попереднім записом" },
              ].map((item) => (
                <div key={item.label} className="border-t border-background/25 pt-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-background/60">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm font-bold text-background sm:text-base">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </PageContainer>
        </section>

        <PageContainer className="py-14 sm:py-16 lg:py-20">
          <SectionHeader
            eyebrow="ДЕ ПРОХОДЯТЬ"
            title="Дві локації для різних форматів"
            text="Для рухових практик використовуємо тренувальний простір, для лекцій, консультацій і діагностичних зустрічей — простір медичного центру."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {venueCards.map((venue) => (
              <article
                key={venue.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <venue.icon className="size-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {venue.label}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-normal text-navy">
                      {venue.title}
                    </h2>
                    <p className="mt-4 text-navy/80">{venue.text}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {venue.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm font-medium text-navy/80"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-brand-green"
                        aria-hidden
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </PageContainer>

        <section className="bg-soft py-14 sm:py-16 lg:py-20">
          <PageContainer>
            <SectionHeader
              eyebrow="АНОНСИ"
              title="Найближчі формати"
              text="Поки що залишили події як формати для анонсів. Коли будуть точні дати, їх можна швидко замінити в картках."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {events.map((event) => (
                <article
                  key={event.title}
                  className="flex flex-col overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    width={900}
                    height={620}
                    className="h-56 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                        <event.icon className="size-3.5" aria-hidden />
                        {event.tag}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1 text-xs font-semibold text-navy/75">
                        <MapPin className="size-3.5" aria-hidden />
                        {event.venue}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold tracking-normal text-navy">
                      {event.title}
                    </h3>
                    <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-navy/70">
                      <Clock3 className="size-4 text-primary" aria-hidden />
                      {event.date}
                    </p>
                    <p className="mt-3 flex items-start gap-2 text-sm font-semibold text-navy/70">
                      <Users className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      {event.audience}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/80">{event.text}</p>

                    <AppLink
                      to="/kontakty"
                      className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Дізнатися про участь <ArrowRight className="size-4" aria-hidden />
                    </AppLink>
                  </div>
                </article>
              ))}
            </div>
          </PageContainer>
        </section>

        <PageContainer className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="МОЖЕМО ПРОВЕСТИ"
              title="Події для пацієнтів, гостей і партнерів"
              text="Формат можна адаптувати під невелику групу, корпоративну команду, спортивний клуб або освітню зустріч зі спеціалістами ОСНОВИ."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {formats.map((format) => (
                <div key={format} className="rounded-xl border border-border bg-card p-6">
                  <CheckCircle2 className="size-6 text-brand-green" aria-hidden />
                  <p className="mt-4 font-bold leading-snug text-navy">{format}</p>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>

        <section className="bg-navy-deep py-14 sm:py-16 lg:py-20">
          <PageContainer>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/65">
                  ЗАПИС НА ПОДІЇ
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-normal text-background sm:text-4xl">
                  Хочете відвідати івент або провести подію разом з ОСНОВОЮ?
                </h2>
                <p className="mt-5 max-w-2xl text-background/80">
                  Напишіть або зателефонуйте нам — підкажемо найближчі анонси, вільні формати та
                  можливу локацію: фітнес-зал або центр.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <AppLink
                  to="/kontakty"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-green px-7 py-3 text-sm font-bold text-brand-green-foreground shadow-md transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Залишити запит
                </AppLink>
                <a
                  href={CONTACTS.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-background/35 px-7 py-3 text-sm font-bold text-background transition-colors hover:bg-background/10"
                >
                  <CalendarDays className="size-4" aria-hidden />
                  {CONTACTS.phone}
                </a>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
