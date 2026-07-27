import * as React from "react";
import { AppLink } from "@/components/app-link";
import { Breadcrumbs, FAQAccordion, PageContainer } from "@/components/blocks";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACTS } from "@/data/site-tree";
import type { SiteNode } from "@/data/types";
import { getBreadcrumbs } from "@/lib/tree";
import cpetImg from "@/assets/cpet-test.jpg";
import ergometerImg from "@/assets/ergometer.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ClipboardCheck,
  Clock,
  Home,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type IconItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const USE_CASES: IconItem[] = [
  {
    title: "Після операцій та травм",
    text: "Коли потрібно продовжити розробку суглоба вдома між консультаціями спеціаліста.",
    icon: Activity,
  },
  {
    title: "Домашнє відновлення",
    text: "Для пацієнтів, яким зручніше виконувати частину програми у своєму темпі вдома.",
    icon: Home,
  },
  {
    title: "Медичні заклади",
    text: "Для клінік і реабілітаційних кабінетів, яким потрібне обладнання на конкретний період.",
    icon: ShieldCheck,
  },
];

const INCLUDED: IconItem[] = [
  {
    title: "Підбір формату оренди",
    text: "Адміністратор уточнює термін, адресу, ціль використання та допомагає узгодити деталі.",
    icon: ClipboardCheck,
  },
  {
    title: "Підготовка обладнання",
    text: "Перед передачею апарат перевіряють і готують до використання за обраним сценарієм.",
    icon: Wrench,
  },
  {
    title: "Доставка за домовленістю",
    text: "Можна погодити передачу у центрі або доставку за місцем перебування пацієнта.",
    icon: Truck,
  },
  {
    title: "Підтримка протягом оренди",
    text: "Команда залишається на зв’язку, якщо потрібно уточнити організаційні питання.",
    icon: Phone,
  },
];

const STEPS = [
  "Заявка або дзвінок адміністратору",
  "Узгодження обладнання, терміну та адреси",
  "Підготовка апарата і передача пацієнту",
  "Повернення обладнання після завершення оренди",
];

const EQUIPMENT = [
  {
    title: "Апарат активної та пасивної механотерапії",
    description:
      "Обладнання для контрольованої розробки суглобів у пасивному та активному режимах після консультації спеціаліста.",
    price: "800 грн / доба",
    term: "від 7 днів",
    route: "/orenda-obladnannia/aktyvna-pasyvna-mekhanoterapiia",
    image: cpetImg,
    tags: ["Активний режим", "Пасивний режим", "Домашнє використання"],
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="text-xs font-bold tracking-[0.22em] text-primary uppercase sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-2xl leading-tight font-extrabold text-navy sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div
        className={
          centered
            ? "mx-auto mt-5 h-1 w-16 rounded-full bg-primary"
            : "mt-5 h-1 w-16 rounded-full bg-primary"
        }
      />
      {text && <p className="mt-5 text-sm leading-relaxed text-navy/80 sm:text-lg">{text}</p>}
    </div>
  );
}

function FeatureCard({ item }: { item: IconItem }) {
  const Icon = item.icon;

  return (
    <article className="rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
      <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy/75">{item.text}</p>
    </article>
  );
}

function ContactStrip() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div>
        <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase">
          Консультація щодо оренди
        </p>
        <p className="mt-2 text-sm text-navy/75">
          Адміністратор уточнить наявність, терміни та зручний формат передачі обладнання.
        </p>
      </div>
      <a
        href={CONTACTS.phoneHref}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Phone className="size-4" /> {CONTACTS.phone}
      </a>
    </div>
  );
}

export function RentalEquipmentPage({ node }: { node: SiteNode }) {
  const heroImage = node.image ?? sportsImg;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <PageContainer className="py-4 sm:py-6">
          <Breadcrumbs items={getBreadcrumbs(node)} className="pt-0" />
        </PageContainer>

        <section className="relative overflow-hidden bg-navy-deep text-background">
          <img
            src={heroImage}
            alt={node.title}
            width={1200}
            height={800}
            className="absolute inset-0 size-full object-cover object-right opacity-35 mix-blend-luminosity lg:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy-deep/35" />

          <PageContainer className="relative grid gap-10 py-14 sm:py-18 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center lg:py-24">
            <div>
              <p className="text-xs font-bold tracking-[0.28em] text-background/65 uppercase sm:text-sm">
                {node.eyebrow ?? "Оренда обладнання"}
              </p>
              <h1 className="mt-5 max-w-4xl text-3xl leading-[1.08] font-extrabold text-white sm:text-5xl md:text-6xl">
                {node.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg">
                Візьміть реабілітаційне обладнання додому або в медичний простір, щоб не переривати
                програму відновлення між візитами до спеціаліста.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <AppLink
                  to="/kontakty"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground shadow-md transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Орендувати обладнання <ArrowRight className="size-4" />
                </AppLink>
                <a
                  href="#catalog"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-background/40 px-7 py-4 text-sm font-bold text-background transition-colors hover:bg-background/10 sm:w-auto"
                >
                  Переглянути каталог
                </a>
              </div>

              <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { label: "Вартість", value: node.priceLabel ?? "за запитом" },
                  { label: "Термін", value: "від 7 днів" },
                  { label: "Формат", value: "дім / клініка" },
                ].map((fact) => (
                  <div key={fact.label} className="border-l border-background/25 pl-4">
                    <dt className="text-[10px] font-semibold tracking-[0.18em] text-background/55 uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 text-sm font-extrabold text-white sm:text-base">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="rounded-xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md sm:p-5">
              <div className="overflow-hidden rounded-lg bg-white">
                <img
                  src={ergometerImg}
                  alt="Реабілітаційне обладнання"
                  width={900}
                  height={700}
                  className="h-56 w-full object-cover sm:h-72"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/12 p-4">
                  <Clock className="size-5 text-brand-green" />
                  <p className="mt-3 text-xs text-background/65">Мінімальний період</p>
                  <p className="mt-1 font-bold text-white">1 тиждень</p>
                </div>
                <div className="rounded-lg bg-white/12 p-4">
                  <BadgeCheck className="size-5 text-brand-green" />
                  <p className="mt-3 text-xs text-background/65">Підготовка</p>
                  <p className="mt-1 font-bold text-white">перед видачею</p>
                </div>
              </div>
            </aside>
          </PageContainer>
        </section>

        <section className="bg-soft py-12 sm:py-16">
          <PageContainer>
            <SectionHeading
              eyebrow="Кому підходить"
              title="Обладнання тоді, коли відновлення має продовжуватися"
              text="Оренда допомагає зберегти регулярність занять, якщо пацієнт уже має рекомендації спеціаліста та потребує апарата на визначений період."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {USE_CASES.map((item) => (
                <FeatureCard key={item.title} item={item} />
              ))}
            </div>
          </PageContainer>
        </section>

        <section id="catalog" className="scroll-mt-24 py-12 sm:py-18">
          <PageContainer>
            <SectionHeading
              eyebrow="Каталог"
              title="Доступне обладнання для оренди"
              text="Поточний перелік обладнання можна уточнити телефоном. Якщо потрібна конкретна модель або формат використання, команда підкаже найближчий доступний варіант."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-5">
                {EQUIPMENT.map((item) => (
                  <article
                    key={item.title}
                    className="grid overflow-hidden rounded-xl border border-border bg-card shadow-sm md:grid-cols-[280px_minmax(0,1fr)]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      width={900}
                      height={700}
                      loading="lazy"
                      className="h-56 w-full object-cover md:h-full"
                    />
                    <div className="p-5 sm:p-7">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-secondary px-3 py-1 text-[11px] font-bold text-navy/75"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-5 text-xl font-extrabold leading-tight text-navy sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-navy/75">
                        {item.description}
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-lg bg-soft p-4">
                          <p className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
                            Ціна
                          </p>
                          <p className="mt-2 text-lg font-extrabold text-primary">{item.price}</p>
                        </div>
                        <div className="rounded-lg bg-soft p-4">
                          <p className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
                            Термін
                          </p>
                          <p className="mt-2 text-lg font-extrabold text-navy">{item.term}</p>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <AppLink
                          to={item.route}
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                        >
                          Детальніше <ArrowRight className="size-4" />
                        </AppLink>
                        <AppLink
                          to="/kontakty"
                          className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-secondary"
                        >
                          Запитати наявність
                        </AppLink>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="h-fit rounded-xl border border-border bg-soft p-5 sm:p-6">
                <Package className="size-9 text-primary" />
                <h3 className="mt-4 text-xl font-extrabold text-navy">
                  Що варто узгодити перед орендою
                </h3>
                <ul className="mt-5 space-y-3">
                  {[
                    "Термін користування обладнанням",
                    "Місце передачі або доставки",
                    "Наявність рекомендацій спеціаліста",
                    "Потребу в додатковій консультації",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-navy/80">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green">
                        <Check className="size-3.5 text-brand-green-foreground" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </PageContainer>
        </section>

        <section className="bg-soft-blue py-12 sm:py-18">
          <PageContainer>
            <SectionHeading
              centered
              eyebrow="Як це працює"
              title="Простий процес без зайвих візитів"
              text="Ми не ускладнюємо оренду: спочатку уточнюємо задачу, потім готуємо обладнання і погоджуємо зручний формат передачі."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {STEPS.map((step, index) => (
                <article
                  key={step}
                  className="rounded-xl border border-border bg-white p-5 shadow-sm"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-extrabold text-primary-foreground">
                    {index + 1}
                  </span>
                  <p className="mt-5 text-sm font-bold leading-relaxed text-navy">{step}</p>
                </article>
              ))}
            </div>
          </PageContainer>
        </section>

        <section className="py-12 sm:py-18">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Сервіс"
                  title="Що входить в організацію оренди"
                  text="Сторінка оренди має швидко відповідати на головні питання: що доступно, скільки коштує, як отримати обладнання та до кого звернутися."
                />
                <div className="mt-8">
                  <ContactStrip />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {INCLUDED.map((item) => (
                  <FeatureCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="pb-12 sm:pb-18">
          <PageContainer>
            <div className="relative overflow-hidden rounded-xl bg-navy-deep p-6 text-background shadow-lg sm:p-10 lg:p-12">
              <img
                src={sportsImg}
                alt="Реабілітаційне обладнання в центрі OSNOVA"
                width={1200}
                height={800}
                loading="lazy"
                className="absolute inset-0 size-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/65" />
              <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="text-xs font-bold tracking-[0.22em] text-background/65 uppercase">
                    Готові уточнити наявність?
                  </p>
                  <h2 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-4xl">
                    Залиште заявку, і ми підберемо зручний формат оренди обладнання
                  </h2>
                  <div className="mt-6 flex flex-col gap-3 text-sm text-background/75 sm:flex-row sm:flex-wrap">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="size-4 text-brand-green" /> термін за домовленістю
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="size-4 text-brand-green" /> передача або доставка
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <AppLink
                    to="/kontakty"
                    className="inline-flex items-center justify-center rounded-lg bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground transition-opacity hover:opacity-90"
                  >
                    Залишити заявку
                  </AppLink>
                  <a
                    href={CONTACTS.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-background/35 px-7 py-4 text-sm font-bold text-background transition-colors hover:bg-background/10"
                  >
                    <Phone className="size-4" /> Подзвонити
                  </a>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        {node.faq && node.faq.length > 0 && (
          <section className="pb-16 sm:pb-24">
            <PageContainer>
              <SectionHeading eyebrow="FAQ" title="Поширені питання про оренду" />
              <FAQAccordion items={node.faq} />
            </PageContainer>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
