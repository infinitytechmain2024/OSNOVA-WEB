import { AppLink } from "@/components/app-link";
import { FAQAccordion, PageContainer, SectionHeader } from "@/components/blocks";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { SiteNode } from "@/data/types";
import { getBreadcrumbs } from "@/lib/tree";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  Check,
  ClipboardList,
  FlaskConical,
  GraduationCap,
  Handshake,
  Microscope,
  Phone,
  Presentation,
  Stethoscope,
  Users,
} from "lucide-react";

import cpetImg from "@/assets/cpet-test.jpg";
import educationConferenceImg from "@/assets/education-conference.png";
import educationTrainingImg from "@/assets/education-training.png";
import rehabImg from "@/assets/service-rehab.jpg";
import partnerAsmuLogo from "@/assets/partners/partner-asmu.png";
import partnerChnuLogo from "@/assets/partners/partner-chnu.png";
import partnerHeartLogo from "@/assets/partners/partner-heart.svg";
import partnerIfnmuLogo from "@/assets/partners/partner-ifnmu.png";
import partnerKarpatskaAkademiiaLogo from "@/assets/partners/partner-karpatska-akademiia.png";
import partnerSytenkoLogo from "@/assets/partners/partner-sytenko.svg";

const AUDIENCES = [
  {
    icon: GraduationCap,
    title: "Медичні університети",
    text: "Практичні модулі, клінічні заняття та стажування для студентів, інтернів і викладачів.",
  },
  {
    icon: Microscope,
    title: "Наукові інститути",
    text: "Спільні дослідження, валідація методик і робота з клінічними даними в межах погоджених протоколів.",
  },
  {
    icon: Stethoscope,
    title: "Профільні кафедри",
    text: "База для ортопедії, кардіології, фізичної терапії, спортивної медицини та реабілітації.",
  },
];

const COOPERATION_DIRECTIONS = [
  {
    icon: Building2,
    title: "Клінічна база",
    text: "Організовуємо практичне навчання на базі центру з доступом до реабілітаційних зон, діагностики та командної роботи фахівців.",
  },
  {
    icon: BookOpen,
    title: "Освітні програми",
    text: "Проводимо курси, семінари, hands-on модулі та тематичні інтенсиви для студентів і медичних команд.",
  },
  {
    icon: FlaskConical,
    title: "Наукові проєкти",
    text: "Підтримуємо дослідницькі ініціативи у відновленні, спортивній медицині, функціональній діагностиці та профілактиці.",
  },
  {
    icon: ClipboardList,
    title: "Протоколи та методики",
    text: "Спільно формуємо, тестуємо й удосконалюємо реабілітаційні маршрути для різних клінічних груп.",
  },
  {
    icon: Presentation,
    title: "Конференції та події",
    text: "Створюємо фахові зустрічі, воркшопи й демонстраційні сесії для медичної та академічної спільноти.",
  },
  {
    icon: Users,
    title: "Стажування команд",
    text: "Приймаємо групи фахівців для занурення у мультидисциплінарну модель роботи ОСНОВИ.",
  },
];

const PROCESS_STEPS = [
  "Узгоджуємо цілі інституції, аудиторію та бажаний формат співпраці.",
  "Формуємо програму: навчальні модулі, клінічну практику, дослідження або комбінований формат.",
  "Погоджуємо графік, відповідальних фахівців, вимоги до документів і очікувані результати.",
  "Проводимо програму на базі ОСНОВА Реабілітація або в гібридному форматі.",
  "Передаємо підсумки, рекомендації та пропозиції для подальших спільних етапів.",
];

const BENEFITS = [
  "Доступ до сучасної реабілітаційної та діагностичної інфраструктури.",
  "Практичні кейси з кардіології, ортопедії, неврології, спортивної медицини та превентивної реабілітації.",
  "Можливість поєднати навчання, клінічну практику, конференційний формат і дослідницьку роботу.",
  "Команда лікарів, фізичних терапевтів і профільних фахівців, яка супроводжує програму.",
  "Гнучкий формат для університетів, кафедр, наукових груп і медичних інститутів.",
];

const PARTNERS = [
  { name: "Карпатська Академія", logo: partnerKarpatskaAkademiiaLogo },
  { name: "Черкаський національний університет імені Богдана Хмельницького", logo: partnerChnuLogo },
  { name: "Асоціація спортивної медицини України", logo: partnerAsmuLogo },
  { name: "Інститут ім. проф. М. І. Ситенка", logo: partnerSytenkoLogo },
  { name: "Інститут серця МОЗ України", logo: partnerHeartLogo },
  { name: "Івано-Франківський національний медичний університет", logo: partnerIfnmuLogo },
];

const FAQS = [
  {
    question: "Які інституції можуть звернутися щодо співпраці?",
    answer:
      "Ми відкриті до співпраці з медичними університетами, науковими інститутами, профільними кафедрами, асоціаціями та освітніми центрами, які працюють у сфері медицини, реабілітації, фізичної терапії або спортивної медицини.",
  },
  {
    question: "Чи можна організувати практику для студентів або інтернів?",
    answer:
      "Так. Формат, кількість учасників, тривалість і клінічні модулі узгоджуються індивідуально після знайомства з цілями навчальної програми.",
  },
  {
    question: "Чи підтримує ОСНОВА спільні дослідження?",
    answer:
      "Так. Ми розглядаємо дослідницькі проєкти, пов’язані з реабілітацією, функціональним тестуванням, відновленням після травм і серцево-судинних подій, профілактикою та спортивною адаптацією.",
  },
  {
    question: "Як почати перемовини?",
    answer:
      "Надішліть короткий опис інституції, бажаного формату та контакт відповідальної особи. Команда ОСНОВИ зв’яжеться з вами, щоб узгодити наступні кроки.",
  },
];

function DirectionCard({ item }: { item: (typeof COOPERATION_DIRECTIONS)[number] }) {
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

function AudienceCard({ item }: { item: (typeof AUDIENCES)[number] }) {
  const Icon = item.icon;

  return (
    <article className="rounded-[24px] border border-slate-200/80 bg-card p-6 shadow-md shadow-slate-900/5 sm:p-7">
      <Icon className="size-8 text-primary" />
      <h3 className="mt-5 text-xl font-bold text-navy">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
    </article>
  );
}

function PartnerLogo({ partner }: { partner: (typeof PARTNERS)[number] }) {
  return (
    <div className="flex min-h-32 items-center justify-center rounded-[20px] border border-slate-200/80 bg-white p-5 shadow-sm">
      <img src={partner.logo} alt={partner.name} loading="lazy" className="max-h-20 w-full object-contain" />
    </div>
  );
}

function HeroBreadcrumbs({ node }: { node: SiteNode }) {
  const items = getBreadcrumbs(node);

  return (
    <nav aria-label="Навігаційний ланцюжок" className="overflow-x-auto pt-0">
      <ol className="flex items-center gap-2 whitespace-nowrap text-xs text-background/65 sm:text-sm">
        {items.map((item, index) => (
          <li key={`${item.route}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden>/</span>}
            {index === items.length - 1 ? (
              <span className="font-semibold text-background">{item.title}</span>
            ) : (
              <AppLink to={item.route} className="transition-colors hover:text-background">
                {item.title}
              </AppLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function InstitutePartnershipPage({ node }: { node: SiteNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-navy-deep">
          <img
            src={educationTrainingImg}
            alt={node.title}
            width={1400}
            height={900}
            className="absolute inset-0 size-full object-cover object-center opacity-40 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/25" />

          <div className="relative mx-auto max-w-[1600px] px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
            <HeroBreadcrumbs node={node} />
            <p className="mt-8 text-xs font-semibold tracking-[0.26em] text-primary-foreground/70 uppercase sm:text-sm">
              {node.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.08] text-background sm:text-5xl md:text-6xl lg:text-7xl">
              {node.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg">
              {node.shortDescription}
            </p>

            <dl className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                { label: "Формат", value: "клінічна база" },
                { label: "Аудиторія", value: "інститути та ЗВО" },
                { label: "Фокус", value: "практика і наука" },
              ].map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-background/55">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm font-bold text-background sm:text-base">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <AppLink
                to="/kontakty"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-green px-7 py-4 text-sm font-bold tracking-wide text-brand-green-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-brand-green/90 sm:w-auto"
              >
                Обговорити співпрацю <ArrowRight className="size-4" />
              </AppLink>
              <AppLink
                to="/navchannia"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-background/35 bg-white/5 px-7 py-4 text-sm font-bold tracking-wide text-background backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
              >
                Навчання та події <BookOpen className="size-4" />
              </AppLink>
            </div>
          </div>
        </section>

        <PageContainer className="py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeader
                eyebrow="ДЛЯ КОГО"
                title="Партнерська платформа для медичної освіти та науки"
                text="ОСНОВА Реабілітація поєднує клінічну практику, функціональну діагностику, реабілітаційні програми й освітню інфраструктуру в Буковелі."
              />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {AUDIENCES.map((item) => (
                <AudienceCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </PageContainer>

        <section className="border-y border-slate-200/70 bg-slate-50/80 py-16 sm:py-24">
          <PageContainer>
            <SectionHeader
              eyebrow="НАПРЯМИ"
              title="Формати співпраці з інститутами"
              text="Ми можемо зібрати окремий формат під вашу навчальну, дослідницьку або клінічну задачу."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {COOPERATION_DIRECTIONS.map((item) => (
                <DirectionCard key={item.title} item={item} />
              ))}
            </div>
          </PageContainer>
        </section>

        <PageContainer className="py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="overflow-hidden rounded-[28px] shadow-xl shadow-slate-900/10">
              <img
                src={educationConferenceImg}
                alt="Освітні та наукові події ОСНОВА"
                loading="lazy"
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>

            <div className="section-shell">
              <SectionHeader eyebrow="ПРОЦЕС" title="Як запускається спільна програма" />
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
          </div>
        </PageContainer>

        <section className="bg-soft-blue py-16 sm:py-24">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-14">
              <div>
                <SectionHeader
                  eyebrow="РЕЗУЛЬТАТ"
                  title="Що отримує інституція"
                  text="Сторони заздалегідь узгоджують мету, відповідальних, формат доступу до клінічної бази та очікуваний результат."
                />
                <ul className="mt-8">
                  {BENEFITS.map((item) => (
                    <li key={item} className="flex items-start gap-4 border-b border-navy/10 py-4 last:border-0">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green">
                        <Check className="size-4 text-brand-green-foreground" />
                      </span>
                      <span className="text-sm leading-relaxed text-navy/90 sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[24px] bg-navy p-7 text-white shadow-xl shadow-slate-900/10">
                  <Handshake className="size-9 text-brand-green" />
                  <h3 className="mt-5 text-2xl font-extrabold">Гнучка модель</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    Програма може бути коротким візитом, серією практичних модулів, конференцією,
                    стажуванням або довгостроковою співпрацею.
                  </p>
                </div>
                <div className="rounded-[24px] bg-white p-7 shadow-xl shadow-slate-900/5">
                  <BadgeCheck className="size-9 text-primary" />
                  <h3 className="mt-5 text-2xl font-extrabold text-navy">Фаховий супровід</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Кожен формат супроводжують відповідальні фахівці ОСНОВИ з медичного,
                    освітнього та організаційного боку.
                  </p>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        <PageContainer className="py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <SectionHeader
                eyebrow="ПАРТНЕРИ"
                title="Працюємо з академічною та медичною спільнотою"
                text="ОСНОВА розвиває партнерства з університетами, інститутами, професійними асоціаціями та освітніми платформами."
              />
              <AppLink
                to="/kontakty"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-bold tracking-wide text-white shadow-md transition-all hover:scale-[1.02] hover:bg-primary/90 sm:w-auto"
              >
                Запропонувати партнерство <ArrowRight className="size-4" />
              </AppLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PARTNERS.map((partner) => (
                <PartnerLogo key={partner.name} partner={partner} />
              ))}
            </div>
          </div>
        </PageContainer>

        <section className="relative overflow-hidden bg-navy-deep py-16 sm:py-24">
          <img
            src={rehabImg}
            alt="Команда ОСНОВА Реабілітація"
            loading="lazy"
            className="absolute inset-0 size-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-navy-deep/85" />
          <PageContainer className="relative">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary-foreground/65">
                ПОЧАТИ СПІВПРАЦЮ
              </p>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                Створімо практичну базу для вашої інституції
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Розкажіть про вашу задачу, а ми запропонуємо формат, який поєднає навчання,
                практику, дослідження та можливості центру.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <AppLink
                  to="/kontakty"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-green px-8 py-4 text-sm font-bold tracking-wide text-brand-green-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-brand-green/90 sm:w-auto"
                >
                  Залишити заявку <ArrowRight className="size-4" />
                </AppLink>
                <a
                  href="tel:+380674702788"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  <Phone className="size-4 text-brand-green" /> +380 674 702 788
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
              <img
                src={cpetImg}
                alt="Функціональна діагностика ОСНОВА"
                loading="lazy"
                className="h-full min-h-[240px] w-full rounded-[22px] object-cover"
              />
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  ДОДАТКОВІ МОЖЛИВОСТІ
                </p>
                <h2 className="mt-4 text-2xl font-extrabold leading-tight text-navy sm:text-4xl">
                  Діагностика, реабілітація та спортивна медицина в одному середовищі
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Для навчальних і дослідницьких задач інституція може поєднувати роботу з
                  клінічними кейсами, функціональним тестуванням, реабілітаційними програмами та
                  освітніми подіями.
                </p>
                <AppLink
                  to="/poslugy"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-navy px-7 py-4 text-sm font-bold tracking-wide text-white transition-all hover:scale-[1.02] hover:bg-primary sm:w-auto"
                >
                  Переглянути послуги <ArrowRight className="size-4" />
                </AppLink>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
