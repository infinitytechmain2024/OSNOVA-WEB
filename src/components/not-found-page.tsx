import { AppLink } from "@/components/app-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageContainer } from "@/components/blocks";
import { CONTACTS } from "@/data/site-tree";
import { getNodeById } from "@/lib/tree";
import heroImg from "@/assets/ergometer.jpg";
import {
  Activity,
  ArrowRight,
  ChevronRight,
  Dumbbell,
  Headphones,
  HeartPulse,
  Home,
  MapPin,
  Phone,
  Send,
  Stethoscope,
} from "lucide-react";

const rehab = getNodeById("rehab");
const diag = getNodeById("diag");
const recovery = getNodeById("recovery");

const CARDS = [
  {
    icon: HeartPulse,
    title: "Напрямки реабілітації",
    route: rehab?.route ?? "/reabilitatsiia",
    items: (rehab?.children ?? []).slice(0, 5).map((c) => c.title),
    cta: "Перейти до розділу",
  },
  {
    icon: Stethoscope,
    title: "Діагностика та чек-апи",
    route: diag?.route ?? "/diagnostyka",
    items: (diag?.children ?? []).slice(0, 5).map((c) => c.title),
    cta: "Перейти до розділу",
  },
  {
    icon: Dumbbell,
    title: "Відновлення та фітнес",
    route: recovery?.route ?? "/vidnovlennia",
    items: (recovery?.children ?? []).slice(0, 5).map((c) => c.title),
    cta: "Дізнатися більше",
  },
];

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero 404 */}
        <section className="relative overflow-hidden bg-navy-deep">
          <img
            src={heroImg}
            alt=""
            aria-hidden
            className="absolute inset-0 size-full object-cover object-right opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/40" />
          <PageContainer className="relative py-16 sm:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <h1 className="text-[5rem] font-extrabold leading-none tracking-tight text-primary-foreground/90 sm:text-[8rem]">
                  404
                </h1>
                <p className="mt-2 text-2xl font-bold text-background sm:text-4xl">
                  Сторінку не знайдено
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-background/75 sm:text-base">
                  На жаль, сторінка, яку ви шукаєте, була видалена, переміщена або посилання
                  введено неправильно.
                </p>
                <AppLink
                  to="/"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Home className="size-4" /> Повернутися на головну
                </AppLink>
              </div>
              <div className="hidden justify-center lg:flex">
                <div className="flex size-56 flex-col items-center justify-center rounded-full border border-dashed border-background/35 px-8 text-center">
                  <Activity className="size-8 text-primary-foreground" />
                  <p className="mt-4 text-sm leading-relaxed text-background/80">
                    Ми допомагаємо повернути рух до повноцінного життя
                  </p>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* Куди перейти далі */}
        <section className="py-14 sm:py-20">
          <PageContainer>
            <div className="flex items-center gap-4">
              <span className="hidden h-px flex-1 bg-border sm:block" />
              <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">
                Куди перейти далі?
              </h2>
              <span className="hidden h-px flex-1 bg-border sm:block" />
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {CARDS.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-soft-blue text-primary">
                      <card.icon className="size-5" />
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-[0.06em] text-navy">
                      {card.title}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-navy/75">
                        <ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <AppLink
                    to={card.route}
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold uppercase tracking-[0.06em] text-primary hover:underline"
                  >
                    {card.cta} <ArrowRight className="size-4" />
                  </AppLink>
                </div>
              ))}
            </div>

            {/* Допомога */}
            <div className="mt-8 grid items-center gap-8 rounded-2xl border border-border bg-soft-blue/60 p-6 sm:p-8 lg:grid-cols-[1.4fr_auto_1fr]">
              <div className="flex items-start gap-4">
                <span className="hidden size-14 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary sm:flex">
                  <Headphones className="size-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-navy">Не знайшли потрібну сторінку?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/75">
                    Залиште заявку, і ми допоможемо знайти потрібну інформацію або підібрати
                    оптимальне рішення для вашого здоров’я.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <AppLink
                  to="/kontakty"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Залишити заявку
                </AppLink>
                <a
                  href={CONTACTS.phoneHref}
                  className="inline-flex items-center justify-center rounded-lg border border-primary/40 bg-card px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-navy transition-colors hover:bg-card/70"
                >
                  Замовити дзвінок
                </a>
              </div>

              <ul className="space-y-3 text-sm text-navy/80 lg:border-l lg:border-border lg:pl-8">
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <a href={CONTACTS.phoneHref} className="font-semibold text-navy hover:underline">
                    {CONTACTS.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Send className="size-4 shrink-0 text-primary" />
                  <a
                    href={CONTACTS.messengers.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Написати в Telegram
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{CONTACTS.addressFull}</span>
                </li>
              </ul>
            </div>
          </PageContainer>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
