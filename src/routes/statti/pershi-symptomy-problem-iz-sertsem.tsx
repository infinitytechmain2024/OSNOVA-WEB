import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  HeartPulse,
  Phone,
  Stethoscope,
} from "lucide-react";
import { AppLink } from "@/components/app-link";
import { Breadcrumbs, PageContainer } from "@/components/blocks";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACTS } from "@/data/site-tree";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import ergoImg from "@/assets/ergometer.jpg";

export const Route = createFileRoute("/statti/pershi-symptomy-problem-iz-sertsem")({
  head: () => ({
    meta: [
      {
        title: "Перші симптоми проблем із серцем — коли звертатися до кардіолога | ОСНОВА",
      },
      {
        name: "description",
        content:
          "Як розпізнати симптоми, які можуть вказувати на проблеми із серцем, коли потрібна планова кардіодіагностика та коли не варто відкладати звернення по допомогу.",
      },
      {
        property: "og:title",
        content: "Перші симптоми проблем із серцем: коли звертатися до кардіолога",
      },
      {
        property: "og:description",
        content:
          "Пояснюємо, на які сигнали звернути увагу та які методи діагностики допомагають оцінити роботу серця.",
      },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: "2026-07-11" },
      { property: "article:modified_time", content: "2026-07-27" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/statti/pershi-symptomy-problem-iz-sertsem" }],
  }),
  component: ArticlePage,
});

const breadcrumbs = [
  { title: "Головна", route: "/" },
  { title: "Блог", route: "/" },
  {
    title: "Перші симптоми проблем із серцем",
    route: "/statti/pershi-symptomy-problem-iz-sertsem",
  },
];

const articleSections = [
  { id: "symptoms", title: "Симптоми, які варто обговорити з кардіологом" },
  { id: "urgent", title: "Коли не чекати планового прийому" },
  { id: "diagnostics", title: "Що може входити в кардіодіагностику" },
  { id: "prepare", title: "Як підготуватися до консультації" },
];

const symptoms = [
  "стиснення, печіння або біль у грудній клітці під час навантаження чи у спокої;",
  "задишка, яка з’являється швидше, ніж зазвичай, або не відповідає рівню навантаження;",
  "перебої в роботі серця, прискорене серцебиття, відчуття пауз у ритмі;",
  "запаморочення, переднепритомний стан, непритомність;",
  "набряки гомілок, незвична втома, різке зниження витривалості;",
  "підвищений артеріальний тиск або значні коливання тиску протягом дня.",
];

const diagnostics = [
  {
    title: "ЕКГ",
    text: "Базове дослідження ритму та електричної активності серця. Часто є першим кроком при скаргах.",
  },
  {
    title: "Холтер ЕКГ",
    text: "Добовий запис серцевого ритму, який допомагає побачити перебої, що не завжди проявляються під час прийому.",
  },
  {
    title: "ДМАТ",
    text: "Добове моніторування артеріального тиску для оцінки коливань удень, уночі та під час звичайної активності.",
  },
  {
    title: "Ехокардіографія",
    text: "Ультразвукова оцінка структури серця, клапанів і скоротливої функції.",
  },
  {
    title: "Навантажувальні тести",
    text: "Велоергометрія або тредміл-тест показують, як серце реагує на дозоване фізичне навантаження.",
  },
  {
    title: "CPET",
    text: "Кардіопульмональний тест оцінює роботу серця, легень і витривалість організму під контролем фахівця.",
  },
];

const preparation = [
  "Запишіть, коли саме з’являються симптоми: у спокої, після стресу, під час підйому сходами чи тренування.",
  "Візьміть попередні висновки, ЕКГ, результати аналізів, виписки та перелік препаратів, які приймаєте.",
  "Не змінюйте самостійно дозування ліків перед обстеженням, якщо лікар не дав інших інструкцій.",
  "Для навантажувальних тестів оберіть зручний одяг і взуття, а деталі підготовки уточніть під час запису.",
];

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-xl border border-background/15 bg-background/10 px-4 py-3 text-background backdrop-blur-sm">
      <Icon className="size-5 shrink-0 text-brand-green" />
      <div className="min-w-0">
        <p className="text-[10px] font-semibold tracking-[0.16em] text-background/60 uppercase">
          {label}
        </p>
        <p className="mt-1 truncate text-sm font-bold">{value}</p>
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-border pb-10 last:border-0 last:pb-0">
      <h2 className="text-2xl font-extrabold leading-tight text-navy sm:text-3xl">{title}</h2>
      <div className="mt-5 h-1 w-14 rounded-full bg-primary" />
      <div className="mt-7 space-y-5 text-base leading-relaxed text-navy/88 sm:text-lg">
        {children}
      </div>
    </section>
  );
}

function ArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Перші симптоми проблем із серцем: коли звертатися до кардіолога",
            description:
              "Як розпізнати симптоми, які можуть вказувати на проблеми із серцем, та коли потрібна кардіодіагностика.",
            datePublished: "2026-07-11",
            dateModified: "2026-07-27",
            author: { "@type": "Organization", name: "ОСНОВА Реабілітація" },
            publisher: { "@type": "Organization", name: "ОСНОВА Реабілітація" },
            mainEntityOfPage: "/statti/pershi-symptomy-problem-iz-sertsem",
          }),
        }}
      />

      <main>
        <section className="relative overflow-hidden bg-navy-deep">
          <img
            src={ecgImg}
            alt="Кардіологічна діагностика серця"
            width={1400}
            height={900}
            className="absolute inset-0 size-full object-cover object-right opacity-35 mix-blend-luminosity lg:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy-deep/25" />

          <div className="relative mx-auto max-w-[1600px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
            <span className="inline-flex rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-background/80 uppercase">
              Стаття
            </span>
            <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.1] text-background sm:text-5xl md:text-6xl">
              Перші симптоми проблем із серцем: коли звертатися до кардіолога
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/84 sm:text-lg">
              Біль або дискомфорт у грудях не завжди означає невідкладний стан, але ігнорувати
              сигнали серця не варто. Розбираємо, на які зміни звернути увагу та які обстеження
              допомагають оцінити ризики.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-3xl">
              <MetaItem icon={CalendarDays} label="Дата" value="11.07.2026" />
              <MetaItem icon={Clock} label="Час читання" value="7 хв" />
              <MetaItem icon={Stethoscope} label="Тема" value="Кардіологія" />
            </div>
          </div>
        </section>

        <PageContainer className="py-6 sm:py-8">
          <Breadcrumbs items={breadcrumbs} className="pt-0" />
        </PageContainer>

        <PageContainer className="pb-14 sm:pb-20">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-6 lg:self-start">
              <div className="rounded-2xl border border-border bg-soft p-5 shadow-sm">
                <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase">
                  У статті
                </p>
                <nav aria-label="Зміст статті" className="mt-4 space-y-2">
                  {articleSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy/76 transition-colors hover:bg-card hover:text-primary"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 rounded-xl bg-card p-4">
                  <p className="text-sm font-bold text-navy">Потрібна консультація?</p>
                  <p className="mt-2 text-sm leading-relaxed text-navy/72">
                    Адміністратор допоможе підібрати зручний час для огляду або обстеження.
                  </p>
                  <a
                    href={CONTACTS.phoneHref}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-navy"
                  >
                    <Phone className="size-4" /> {CONTACTS.phone}
                  </a>
                </div>
              </div>
            </aside>

            <article className="min-w-0">
              <div className="section-shell">
                <div className="mx-auto max-w-4xl space-y-10">
                  <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
                    <div className="space-y-5 text-base leading-relaxed text-navy/88 sm:text-lg">
                      <p>
                        Серцево-судинні захворювання часто розвиваються поступово: спершу людина
                        помічає втому, задишку або нестабільний тиск, але пояснює це стресом, віком
                        чи навантаженням. Планова консультація кардіолога допомагає відрізнити
                        тимчасове нездужання від станів, які потребують спостереження або лікування.
                      </p>
                      <p>
                        Ця стаття має інформаційний характер і не замінює медичної консультації.
                        Якщо симптоми інтенсивні, з’явилися раптово або швидко посилюються, краще не
                        відкладати звернення по невідкладну допомогу.
                      </p>
                    </div>
                    <img
                      src={cpetImg}
                      alt="Кардіопульмональне тестування"
                      width={640}
                      height={520}
                      className="h-full max-h-[280px] w-full rounded-xl object-cover shadow-md"
                    />
                  </div>

                  <Section id="symptoms" title="Симптоми, які варто обговорити з кардіологом">
                    <p>
                      Звернення до фахівця доречне не лише тоді, коли з’являється біль. На роботу
                      серця можуть вказувати зміни витривалості, ритму, тиску та загального
                      самопочуття.
                    </p>
                    <ul className="space-y-3">
                      {symptoms.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Section>

                  <Section id="urgent" title="Коли не чекати планового прийому">
                    <div className="rounded-xl border border-destructive/25 bg-destructive/8 p-5 sm:p-6">
                      <div className="flex gap-3">
                        <AlertTriangle className="mt-1 size-5 shrink-0 text-destructive" />
                        <div>
                          <p className="font-bold text-navy">
                            Негайна допомога потрібна при сильному болю або тиску в грудях,
                            вираженій задишці, холодному поті, раптовій слабкості, порушенні мови,
                            асиметрії обличчя чи слабкості в руці або нозі.
                          </p>
                          <p className="mt-3 text-base text-navy/82">
                            У таких ситуаціях не варто їхати на плановий прийом самостійно.
                            Звертайтеся до екстреної медичної допомоги.
                          </p>
                        </div>
                      </div>
                    </div>
                    <p>
                      Якщо симптоми повторюються, але не мають ознак невідкладного стану, варто
                      запланувати огляд. Лікар збере анамнез, оцінить фактори ризику та визначить,
                      які обстеження потрібні саме у вашому випадку.
                    </p>
                  </Section>

                  <Section id="diagnostics" title="Що може входити в кардіодіагностику">
                    <p>
                      Набір досліджень залежить від скарг, віку, супутніх захворювань, рівня
                      фізичної активності та попередніх висновків. В ОСНОВІ кардіодіагностику
                      підбирають так, щоб отримати достатньо даних для безпечних рекомендацій.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {diagnostics.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-xl border border-border bg-card p-5 shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <HeartPulse className="size-5" />
                            </span>
                            <h3 className="text-base font-extrabold text-navy">{item.title}</h3>
                          </div>
                          <p className="mt-4 text-sm leading-relaxed text-navy/78">{item.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="overflow-hidden rounded-xl bg-navy-deep text-background">
                      <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                        <img
                          src={ergoImg}
                          alt="Навантажувальний тест"
                          width={700}
                          height={520}
                          loading="lazy"
                          className="h-56 w-full object-cover opacity-85 md:h-full"
                        />
                        <div className="p-6 sm:p-8">
                          <p className="text-xs font-bold tracking-[0.18em] text-brand-green uppercase">
                            Діагностика під навантаженням
                          </p>
                          <h3 className="mt-3 text-2xl font-extrabold leading-tight">
                            Перевірка серця в умовах, близьких до реального життя
                          </h3>
                          <p className="mt-4 text-sm leading-relaxed text-background/78 sm:text-base">
                            Навантажувальні тести допомагають оцінити переносимість фізичної
                            активності та підібрати безпечний рівень тренувань або реабілітації.
                          </p>
                          <AppLink
                            to="/diagnostyka/kardiodiahnostyka"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-green px-5 py-3 text-sm font-bold text-brand-green-foreground transition-opacity hover:opacity-90"
                          >
                            Дивитися послуги <ArrowRight className="size-4" />
                          </AppLink>
                        </div>
                      </div>
                    </div>
                  </Section>

                  <Section id="prepare" title="Як підготуватися до консультації">
                    <p>
                      Чим точніше ви опишете симптоми та покажете попередні результати, тим швидше
                      лікар складе зрозумілий план дій.
                    </p>
                    <ul className="space-y-4">
                      {preparation.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 border-b border-border pb-4 last:border-0"
                        >
                          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green">
                            <Check className="size-4 text-brand-green-foreground" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Section>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-soft-blue p-6 text-center sm:p-10">
                <p className="text-xs font-bold tracking-[0.22em] text-primary uppercase">
                  Запис на діагностику
                </p>
                <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
                  Якщо серце подає сигнали, краще перевірити їх спокійно та вчасно
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy/78">
                  Запишіться на консультацію або кардіологічне обстеження в ОСНОВІ. Ми допоможемо
                  обрати потрібний формат діагностики та підготуватися до прийому.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <AppLink
                    to="/kontakty"
                    className="inline-flex items-center justify-center rounded-lg bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground shadow-md transition-opacity hover:opacity-90"
                  >
                    Записатися
                  </AppLink>
                  <AppLink
                    to="/diagnostyka/kardiodiahnostyka"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy/15 bg-card px-7 py-4 text-sm font-bold text-navy transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Кардіодіагностика <ArrowRight className="size-4" />
                  </AppLink>
                </div>
              </div>
            </article>
          </div>
        </PageContainer>
      </main>

      <SiteFooter />
    </div>
  );
}
