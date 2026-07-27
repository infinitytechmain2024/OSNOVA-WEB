import { AppLink } from "@/components/app-link";
import { Breadcrumbs, FAQAccordion, PageContainer, SectionHeader } from "@/components/blocks";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACTS, IMAGES } from "@/data/site-tree";
import type { SiteNode } from "@/data/types";
import { getBreadcrumbs } from "@/lib/tree";
import {
  ArrowRight,
  BookOpen,
  Check,
  GraduationCap,
  Handshake,
  Heart,
  Phone,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";

const SOCIAL_DIRECTIONS = [
  {
    icon: Heart,
    title: "Допомога пацієнтам",
    text: "Соціальні умови участі в діагностиці або реабілітації для людей, які потребують підтримки після травм, операцій чи складних станів.",
  },
  {
    icon: ShieldCheck,
    title: "Відновлення після травм",
    text: "Окремі програми можуть бути спрямовані на ветеранів, людей після поранень, тривалого лікування або втрати фізичної активності.",
  },
  {
    icon: BookOpen,
    title: "Просвіта для громади",
    text: "Лекції, відкриті зустрічі та матеріали про профілактику, безпечні навантаження, серцево-судинні ризики й рухливість.",
  },
  {
    icon: GraduationCap,
    title: "Підтримка фахівців",
    text: "Освітні ініціативи для лікарів, фізичних терапевтів і команд, які працюють із відновленням та фізичною активністю.",
  },
];

const PARTICIPATION_FORMATS = [
  "Індивідуальна заявка від людини або родини, яка потребує допомоги.",
  "Направлення від лікаря, медичного закладу, фонду або громадської організації.",
  "Партнерська програма з бізнесом, благодійним фондом чи освітньою інституцією.",
  "Відкрита подія для громади: консультаційний день, лекція, скринінг або тренінг.",
];

const PROCESS_STEPS = [
  "Описуємо потребу, аудиторію та очікуваний результат соціального проєкту.",
  "Перевіряємо медичні показання, формат участі, ресурси команди та можливі обмеження.",
  "Погоджуємо програму, відповідальних, строки, комунікацію та критерії відбору учасників.",
  "Запускаємо ініціативу, супроводжуємо учасників і збираємо підсумки для наступних кроків.",
];

const PARTNER_OPTIONS = [
  {
    title: "Фонди та громадські організації",
    text: "Спільний відбір учасників, координація документів і супровід людей, яким потрібне відновлення.",
  },
  {
    title: "Медичні заклади",
    text: "Маршрутизація пацієнтів, функціональна оцінка, реабілітаційні програми та підсумкові рекомендації.",
  },
  {
    title: "Бізнес і меценати",
    text: "Підтримка окремих програм, освітніх подій, обладнання або участі пацієнтів у реабілітації.",
  },
];

const FAQS = [
  {
    question: "Хто може звернутися щодо соціального проєкту?",
    answer:
      "Звернутися може людина, родина, лікар, фонд, громадська організація, бізнес або інституція, яка хоче підтримати медичну чи реабілітаційну ініціативу.",
  },
  {
    question: "Чи гарантує звернення участь у програмі?",
    answer:
      "Участь залежить від медичних показань, формату конкретної ініціативи, доступних місць і ресурсів команди. Після звернення координатор допоможе уточнити наступні кроки.",
  },
  {
    question: "Які документи можуть знадобитися?",
    answer:
      "Зазвичай корисні виписки, результати обстежень, рекомендації лікаря та короткий опис ситуації. Для партнерських програм перелік документів узгоджується окремо.",
  },
  {
    question: "Як запропонувати партнерство?",
    answer:
      "Надішліть короткий опис ідеї, аудиторії, бажаного формату та контакт відповідальної особи. Команда ОСНОВИ зв'яжеться з вами, щоб обговорити можливу модель співпраці.",
  },
];

function DirectionCard({ item }: { item: (typeof SOCIAL_DIRECTIONS)[number] }) {
  const Icon = item.icon;

  return (
    <article className="group flex h-full flex-col rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-xl sm:p-7">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-6 text-xl font-extrabold leading-snug text-navy">{item.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.text}</p>
    </article>
  );
}

export function SocialProjectsPage({ node }: { node: SiteNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-navy-deep">
          <img
            src={IMAGES.rehabImg}
            alt={node.title}
            width={1400}
            height={900}
            className="absolute inset-0 size-full object-cover object-center opacity-45 mix-blend-luminosity lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20" />

          <div className="relative mx-auto max-w-[1600px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
            <Breadcrumbs items={getBreadcrumbs(node)} className="pt-0 text-background/65" />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.26em] text-primary-foreground/70 sm:text-sm">
              {node.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.08] text-background sm:text-5xl md:text-6xl lg:text-7xl">
              {node.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg">
              {node.shortDescription}
            </p>

            <dl className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
              {[
                { label: "Фокус", value: "доступ до відновлення" },
                { label: "Формат", value: "заявки, події, партнерства" },
                { label: "Команда", value: "лікарі та фізичні терапевти" },
              ].map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-background/55">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm font-bold leading-snug text-background sm:text-base">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AppLink
                to="/kontakty"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-green px-7 py-4 text-sm font-bold tracking-wide text-brand-green-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-brand-green/90 sm:w-auto"
              >
                Звернутися щодо проєкту <ArrowRight className="size-4" />
              </AppLink>
              <a
                href={CONTACTS.phoneHref}
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-background/35 bg-white/5 px-7 py-4 text-sm font-bold tracking-wide text-background backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
              >
                <Phone className="size-4" />
                {CONTACTS.phone}
              </a>
            </div>
          </div>
        </section>

        <PageContainer className="py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="overflow-hidden rounded-[28px] shadow-xl shadow-slate-900/10">
              <img
                src={IMAGES.sportsImg}
                alt="Соціальні ініціативи ОСНОВА Реабілітація"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="МІСІЯ"
                title="Робимо відновлення ближчим для тих, кому воно особливо потрібне"
                text="Соціальні проєкти ОСНОВИ поєднують медичну експертизу, партнерства та людську підтримку. Ми розглядаємо ініціативи, де реабілітація, діагностика або просвіта можуть реально змінити якість життя."
              />
              <ul className="mt-8">
                {PARTICIPATION_FORMATS.map((item) => (
                  <li key={item} className="flex items-start gap-4 border-b border-border py-4 last:border-0">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green">
                      <Check className="size-4 text-brand-green-foreground" />
                    </span>
                    <span className="text-sm leading-relaxed text-navy/90 sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageContainer>

        <section className="border-y border-slate-200/70 bg-slate-50/90 py-16 sm:py-24">
          <PageContainer>
            <SectionHeader
              eyebrow="НАПРЯМИ"
              title="Які соціальні ініціативи ми розвиваємо"
              text="Кожен проєкт має бути зрозумілим за метою, безпечним за медичними критеріями та корисним для конкретної групи людей."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {SOCIAL_DIRECTIONS.map((item) => (
                <DirectionCard key={item.title} item={item} />
              ))}
            </div>
          </PageContainer>
        </section>

        <PageContainer className="py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="section-shell">
              <SectionHeader eyebrow="ПРОЦЕС" title="Як запускається соціальний проєкт" />
              <ol className="mt-8 space-y-4">
                {PROCESS_STEPS.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-sm leading-relaxed text-navy/90 sm:text-base">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="overflow-hidden rounded-[28px] shadow-xl shadow-slate-900/10">
              <img
                src={IMAGES.checkupImg}
                alt="Планування соціальної програми ОСНОВА"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>
          </div>
        </PageContainer>

        <section className="bg-soft-blue py-16 sm:py-24">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <div>
                <SectionHeader
                  eyebrow="ПАРТНЕРСТВО"
                  title="Запрошуємо до спільних програм"
                  text="Соціальний проєкт стає сильнішим, коли поруч є медична команда, координатори, партнери та люди, які розуміють потребу аудиторії."
                />
                <AppLink
                  to="/kontakty"
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-bold tracking-wide text-white shadow-md transition-all hover:scale-[1.02] hover:bg-primary/90 sm:w-auto"
                >
                  Запропонувати співпрацю <Send className="size-4" />
                </AppLink>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {PARTNER_OPTIONS.map((item) => (
                  <article key={item.title} className="rounded-[24px] bg-white p-6 shadow-md shadow-slate-900/5">
                    <Handshake className="size-8 text-primary" />
                    <h3 className="mt-5 text-xl font-extrabold leading-snug text-navy">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="relative overflow-hidden bg-navy-deep py-16 sm:py-24">
          <img
            src={IMAGES.cpetImg}
            alt="Команда ОСНОВА Реабілітація"
            width={1200}
            height={900}
            loading="lazy"
            className="absolute inset-0 size-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-navy-deep/85" />
          <PageContainer className="relative">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary-foreground/65">
                ДОЛУЧИТИСЯ
              </p>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                Маєте ідею або знаєте людей, яким потрібна підтримка?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Напишіть нам коротко про ситуацію чи майбутній проєкт. Ми розглянемо запит і
                підкажемо, який формат може бути реалістичним та безпечним.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <AppLink
                  to="/kontakty"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-green px-8 py-4 text-sm font-bold tracking-wide text-brand-green-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-brand-green/90 sm:w-auto"
                >
                  Залишити звернення <ArrowRight className="size-4" />
                </AppLink>
                <a
                  href={CONTACTS.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  <Phone className="size-4 text-brand-green" /> {CONTACTS.phone}
                </a>
              </div>
            </div>
          </PageContainer>
        </section>

        <PageContainer className="py-16 sm:py-24">
          <SectionHeader eyebrow="FAQ" title="Поширені питання" />
          <FAQAccordion items={FAQS} />
        </PageContainer>

        <section className="pb-16 sm:pb-24">
          <PageContainer>
            <div className="grid gap-6 rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-md shadow-slate-900/5 md:grid-cols-[0.7fr_1fr] md:p-8 lg:p-10">
              <div className="flex min-h-[240px] items-center justify-center rounded-[22px] bg-white p-8">
                <Users className="size-20 text-primary" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  ПОВ'ЯЗАНІ РОЗДІЛИ
                </p>
                <h2 className="mt-4 text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
                  Більше можливостей для співпраці з ОСНОВОЮ
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Якщо ваш запит стосується лікарів, інституцій або навчальних подій, перейдіть до
                  партнерських і освітніх напрямів центру.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <AppLink
                    to="/partnerstvo"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-navy px-7 py-4 text-sm font-bold tracking-wide text-white transition-all hover:scale-[1.02] hover:bg-primary sm:w-auto"
                  >
                    Партнерство <ArrowRight className="size-4" />
                  </AppLink>
                  <AppLink
                    to="/navchannia"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-navy/15 bg-white px-7 py-4 text-sm font-bold tracking-wide text-navy transition-all hover:border-primary hover:text-primary sm:w-auto"
                  >
                    Навчання <BookOpen className="size-4" />
                  </AppLink>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
