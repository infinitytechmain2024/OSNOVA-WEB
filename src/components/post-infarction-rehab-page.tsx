import * as React from "react";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Dumbbell,
  FileText,
  HeartPulse,
  Phone,
  ShieldCheck,
  Stethoscope,
  TimerReset,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AppLink } from "@/components/app-link";
import { Breadcrumbs, FAQAccordion } from "@/components/blocks";
import { useConsultationModal } from "@/components/consultation-form";
import { CONTACTS } from "@/data/site-tree";
import { CARDIO_REHAB_PROGRAMS } from "@/data/cardio-rehab-pricing";
import type { SiteNode } from "@/data/types";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/about/cardio-rehab-cta-photo-v3.jpg";
import assessmentImg from "@/assets/about/medical-assessment.jpg";
import rehabImg from "@/assets/service-rehab.jpg";

const ANCHORS = [
  { href: "#for-whom", label: "Кому підходить" },
  { href: "#benefits", label: "Переваги" },
  { href: "#journey", label: "Як проходить" },
  { href: "#methods", label: "Методи" },
  { href: "#formats", label: "Формати" },
  { href: "#pricing", label: "Ціни" },
  { href: "#faq", label: "FAQ" },
] as const;

const SUITABLE_FOR = [
  {
    title: "Після інфаркту міокарда",
    text: "Для поступового повернення до фізичної активності після стабілізації стану.",
    icon: HeartPulse,
  },
  {
    title: "Після стентування",
    text: "Для безпечного відновлення активності відповідно до рекомендацій лікаря.",
    icon: ShieldCheck,
  },
  {
    title: "Після аортокоронарного шунтування",
    text: "Для поетапного відновлення після оперативного втручання.",
    icon: Stethoscope,
  },
  {
    title: "Для повернення до активного способу життя",
    text: "Якщо після серцевої події знизилась витривалість або з’явився страх фізичного навантаження.",
    icon: Activity,
  },
] as const;

const BENEFITS = [
  {
    title: "Безпечне повернення до активності",
    text: "Формуємо навантаження поступово та з урахуванням поточного стану.",
  },
  {
    title: "Покращення переносимості навантаження",
    text: "Допомагаємо відновити витривалість без надмірного поспіху.",
  },
  {
    title: "Контроль факторів ризику",
    text: "Пояснюємо, як працювати з активністю, звичками та самоконтролем.",
  },
  {
    title: "Більше впевненості у щоденному житті",
    text: "Пацієнт краще розуміє свої можливості та безпечний ритм відновлення.",
  },
] as const;

const STEPS = [
  {
    title: "Консультація",
    text: "Знайомимося зі станом пацієнта, скаргами та цілями.",
    icon: Stethoscope,
  },
  {
    title: "Медичні документи",
    text: "Оцінюємо виписку, результати обстежень і рекомендації лікаря.",
    icon: FileText,
  },
  {
    title: "Первинна оцінка",
    text: "Визначаємо поточні функціональні можливості та переносимість навантаження.",
    icon: ClipboardCheck,
  },
  {
    title: "Індивідуальна програма",
    text: "Формуємо план занять, контролю та супроводу.",
    icon: Dumbbell,
  },
  {
    title: "Динамічний контроль",
    text: "Коригуємо навантаження відповідно до стану та прогресу.",
    icon: TimerReset,
  },
] as const;

const METHODS = [
  "Лікувальна фізкультура",
  "Аеробні тренування",
  "Контрольоване фізичне навантаження",
  "Моніторинг тиску, пульсу та самопочуття",
  "Дихальні вправи",
  "Освітня підтримка",
  "Консультація кардіолога",
  "Рекомендації щодо способу життя",
] as const;

const METHOD_TEXT: Record<(typeof METHODS)[number], string> = {
  "Лікувальна фізкультура": "Вправи під контролем фахівця з поступовим збільшенням навантаження.",
  "Аеробні тренування":
    "Ходьба, велотренажер або інше кардіообладнання відповідно до стану пацієнта.",
  "Контрольоване фізичне навантаження": "Індивідуальний вибір інтенсивності та тривалості занять.",
  "Моніторинг тиску, пульсу та самопочуття":
    "Контроль основних показників під час і після фізичної активності.",
  "Дихальні вправи": "Вправи для контролю дихання та покращення переносимості активності.",
  "Освітня підтримка": "Пояснення щодо фізичної активності, самоконтролю та факторів ризику.",
  "Консультація кардіолога": "Оцінка стану та медичний супровід за показаннями.",
  "Рекомендації щодо способу життя":
    "Рухова активність, сон, харчування, звички та подальша профілактика.",
};

const FORMATS = [
  {
    title: "Стаціонарно",
    text: "Для пацієнтів, яким потрібен більш інтенсивний супровід.",
  },
  {
    title: "Амбулаторно",
    text: "Регулярні заняття та контроль без постійного перебування у центрі.",
  },
  {
    title: "Онлайн / дистанційно",
    text: "Для консультацій, контролю прогресу та уточнення подальших кроків у випадках, де це доречно.",
  },
] as const;

const RESULTS = [
  "Покращення переносимості фізичного навантаження.",
  "Поступове повернення до щоденної активності.",
  "Краще розуміння власних можливостей та обмежень.",
  "Формування безпечного режиму фізичної активності.",
  "Більша впевненість після перенесеного інфаркту.",
] as const;

export function PostInfarctionRehabPage({ node }: { node: SiteNode }) {
  const { openModal } = useConsultationModal();
  const [faqExpanded, setFaqExpanded] = React.useState(false);
  const faqItems = faqExpanded ? (node.faq ?? []) : (node.faq ?? []).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <section className="bg-white px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
          <div className="relative mx-auto max-w-[1800px] overflow-hidden rounded-[42px] bg-navy-deep">
            <img
              src={heroImg}
              alt="Пацієнт проходить контрольоване тренування разом із фахівцем"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,23,58,0.94)_0%,rgba(8,23,58,0.88)_34%,rgba(8,23,58,0.52)_58%,rgba(8,23,58,0.14)_100%)]" />

            <div className="relative mx-auto grid min-h-[540px] max-w-[1800px] items-center px-6 py-14 sm:px-10 sm:py-16 lg:min-h-[620px] lg:px-16 lg:py-20 xl:px-20">
              <div className="max-w-[640px]">
                <span className="inline-flex w-fit rounded-full border border-white/25 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-[0_10px_30px_rgba(6,18,46,0.18)]">
                  Кардіологічна реабілітація
                </span>
                <h1 className="mt-6 max-w-[12ch] text-4xl font-extrabold leading-[0.98] text-white sm:text-5xl lg:text-6xl xl:text-[5.25rem]">
                  Реабілітація після інфаркту міокарда
                </h1>
                <p className="mt-6 max-w-[24ch] text-lg leading-relaxed text-white/88 sm:text-[1.35rem]">
                  Індивідуальна програма відновлення для безпечного повернення до активного життя
                  під контролем фахівців.
                </p>
                <div className="mt-10">
                  <button
                    type="button"
                    onClick={() => openModal("Замовити консультацію")}
                    className="inline-flex min-h-16 items-center justify-center rounded-2xl bg-brand-green px-8 py-4 text-base font-bold text-brand-green-foreground shadow-[0_18px_40px_rgba(53,200,138,0.28)] transition-colors hover:bg-brand-green/90"
                  >
                    Замовити консультацію
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/70 bg-white">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <Breadcrumbs
              items={[
                { title: "Головна", route: "/" },
                { title: "Реабілітація", route: "/reabilitatsiia" },
                { title: "Кардіологічна реабілітація", route: "/reabilitatsiia/kardiolohichna" },
                { title: node.title, route: node.route },
              ]}
              className="pb-3 pt-4 sm:pt-4"
            />

            <div className="overflow-x-auto pb-4 scrollbar-none">
              <nav aria-label="Навігація по сторінці" className="flex min-w-max gap-2 sm:gap-3">
                {ANCHORS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-navy/80 transition-colors hover:border-primary/35 hover:bg-sky-50 hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        <section id="for-whom" className="scroll-mt-24 bg-[#f4f9ff] py-14 sm:py-20">
          <Container>
            <SectionHeading
              title="Кому підходить реабілітація"
              text="Програма орієнтована на пацієнтів, яким потрібно повернутися до безпечної активності після серцевої події або втручання."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {SUITABLE_FOR.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[26px] border border-sky-100 bg-white p-6 shadow-[0_18px_40px_rgba(31,61,120,0.06)]"
                  >
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon className="size-7" strokeWidth={2.1} />
                    </span>
                    <h3 className="mt-5 text-xl font-extrabold leading-snug text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/72">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section id="benefits" className="scroll-mt-24 bg-navy py-14 text-white sm:py-20">
          <Container>
            <SectionHeading
              title="Що дає програма відновлення"
              text="Ключова мета програми — допомогти пацієнту безпечно відновити активність і почуватися впевненіше в повсякденному житті."
              inverse
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {BENEFITS.map((item, index) => (
                <article
                  key={item.title}
                  className={cn(
                    "rounded-[28px] border p-6 sm:p-7",
                    index === 0 || index === 3
                      ? "border-white/12 bg-white/8"
                      : "border-sky-300/14 bg-sky-400/8",
                  )}
                >
                  <div className="text-sm font-bold uppercase tracking-[0.16em] text-sky-200">
                    0{index + 1}
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold leading-tight">{item.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/76">{item.text}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="journey" className="scroll-mt-24 bg-white py-14 sm:py-20">
          <Container>
            <SectionHeading
              title="Як формується програма"
              text="Послідовність етапів допомагає розпочати відновлення без поспіху й з урахуванням реального стану пацієнта."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
              <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50">
                <img
                  src={assessmentImg}
                  alt="Первинна оцінка стану пацієнта перед програмою"
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                {STEPS.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <article
                      key={step.title}
                      className="relative rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                    >
                      {index < STEPS.length - 1 && (
                        <span className="absolute left-10 top-[100%] hidden h-6 w-px bg-primary/25 sm:block" />
                      )}
                      <div className="flex gap-4">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                          <Icon className="size-5" strokeWidth={2.2} />
                        </span>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-[0.16em] text-primary/72">
                            Етап {index + 1}
                          </div>
                          <h3 className="mt-1 text-xl font-extrabold text-navy">{step.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-navy/72">{step.text}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        <section id="methods" className="scroll-mt-24 bg-white pb-14 sm:pb-20">
          <Container>
            <div className="rounded-[34px] bg-[linear-gradient(180deg,#ecf5ff_0%,#f6fbff_100%)] p-6 sm:p-8 lg:p-10">
              <SectionHeading
                title="Методи, які можуть входити до програми"
                text="Склад програми залежить від етапу відновлення, поточного стану та рекомендацій лікаря."
              />
              <div className="mt-10 grid gap-4 lg:grid-cols-2">
                {METHODS.map((title, index) => (
                  <article
                    key={title}
                    className={cn(
                      "rounded-[24px] border p-5",
                      index % 3 === 0
                        ? "border-primary/12 bg-white"
                        : "border-white/80 bg-white/70",
                    )}
                  >
                    <h3 className="text-lg font-extrabold text-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/72">
                      {METHOD_TEXT[title]}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-6 max-w-4xl text-sm leading-relaxed text-navy/66">
                Конкретний набір методів визначається індивідуально залежно від стану пацієнта,
                етапу відновлення та рекомендацій лікаря.
              </p>
            </div>
          </Container>
        </section>

        <section id="formats" className="scroll-mt-24 bg-white py-14 sm:py-20">
          <Container>
            <SectionHeading title="Формати участі" />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {FORMATS.map((item, index) => (
                <article
                  key={item.title}
                  className={cn(
                    "rounded-[30px] border p-6 sm:p-7",
                    index === 1
                      ? "border-primary/18 bg-[linear-gradient(180deg,#ffffff_0%,#f2f8ff_100%)]"
                      : "border-slate-200 bg-white",
                  )}
                >
                  <h3 className="text-2xl font-extrabold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/72">{item.text}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#f8fbff] py-14 sm:py-20">
          <Container>
            <SectionHeading title="Яких результатів можна очікувати" />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {RESULTS.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-navy/76">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-navy/64">
              Результат залежить від вихідного стану, супутніх захворювань, регулярності занять та
              дотримання рекомендацій.
            </p>
          </Container>
        </section>

        <section id="pricing" className="scroll-mt-24 bg-navy-deep py-14 sm:py-20">
          <Container>
            <SectionHeading
              title="Програми та вартість"
              text="Використовуємо актуальну систему програм ОСНОВА для кардіологічної реабілітації."
              inverse
            />
            <div className="mt-10 grid gap-5 xl:grid-cols-[repeat(4,minmax(0,1fr))_0.88fr]">
              {CARDIO_REHAB_PROGRAMS.map((program) => {
                const popular = program.id === "standartna";
                return (
                  <article
                    key={program.id}
                    className={cn(
                      "flex min-h-[310px] flex-col rounded-[28px] p-6",
                      popular ? "bg-primary text-white" : "bg-white text-navy",
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-extrabold">{program.title}</h3>
                      {popular && (
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                          Основна
                        </span>
                      )}
                    </div>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed",
                        popular ? "text-white/78" : "text-navy/70",
                      )}
                    >
                      {program.description}
                    </p>
                    <div
                      className={cn(
                        "mt-6 border-t pt-5",
                        popular ? "border-white/18" : "border-slate-200",
                      )}
                    >
                      <div className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">
                        Тривалість
                      </div>
                      <div className="mt-1 font-semibold">{program.duration}</div>
                      <div className="mt-4 text-xs font-bold uppercase tracking-[0.16em] opacity-70">
                        Вартість
                      </div>
                      <div className="mt-1 text-[1.7rem] font-extrabold">{program.price}</div>
                    </div>
                    <AppLink
                      to={program.detailsUrl}
                      className={cn(
                        "mt-auto inline-flex w-fit items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors",
                        popular
                          ? "bg-white text-primary hover:bg-white/92"
                          : "bg-primary text-white hover:bg-primary/90",
                      )}
                    >
                      Детальніше
                      <ArrowRight className="size-4" />
                    </AppLink>
                  </article>
                );
              })}

              <aside className="rounded-[28px] border border-white/12 bg-white/8 p-5 text-white">
                <h3 className="text-xl font-extrabold">Акції та спецумови</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/74">
                  Адміністратор підкаже актуальні умови для старту програми після попереднього
                  ознайомлення з документами.
                </p>
              </aside>
            </div>
          </Container>
        </section>

        <section className="bg-[#f4f9ff] py-14 sm:py-20">
          <Container>
            <div className="grid gap-8 overflow-hidden rounded-[34px] border border-sky-100 bg-white p-6 shadow-[0_22px_55px_rgba(31,61,120,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
              <div className="flex flex-col justify-center">
                <SectionHeading
                  title="Потрібна допомога з вибором програми?"
                  text="Залиште заявку, і команда ОСНОВА допоможе зрозуміти, з чого почати відновлення після інфаркту."
                />
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={() => openModal("Замовити консультацію")}
                    className="inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-primary/90"
                  >
                    Замовити консультацію
                  </button>
                  <a
                    href={CONTACTS.phoneHref}
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-slate-200 px-7 py-4 text-sm font-bold text-navy transition-colors hover:border-primary/35 hover:text-primary"
                  >
                    <Phone className="size-4" />
                    {CONTACTS.phone}
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-[28px] bg-slate-50">
                <img
                  src={rehabImg}
                  alt="Спокійна реабілітаційна атмосфера під час відновлення"
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <Container>
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <SectionHeading
                title="Надішліть медичні документи"
                text="Якщо у вас є виписка або результати обстежень, їх можна надіслати команді ОСНОВА для попереднього ознайомлення."
              />
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => openModal("Надіслати медичні документи")}
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-navy px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-navy/92"
                >
                  Замовити консультацію
                </button>
              </div>
            </div>
          </Container>
        </section>

        <section id="faq" className="scroll-mt-24 bg-[#f8fbff] py-14 sm:py-20">
          <Container className="max-w-[1000px]">
            <div className="text-center">
              <SectionHeading title="Поширені запитання" centered />
            </div>
            <div className="mt-10">
              <FAQAccordion items={faqItems} variant="home" />
            </div>
            {(node.faq?.length ?? 0) > 3 && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setFaqExpanded((value) => !value)}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  {faqExpanded ? "Показати менше питань" : "Показати більше питань"}
                  <ChevronDown
                    className={cn("size-4 transition-transform", faqExpanded && "rotate-180")}
                  />
                </button>
              </div>
            )}
          </Container>
        </section>

        <section className="bg-navy py-14 text-white sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                  Зробіть перший крок до відновлення
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/76 sm:text-lg">
                  Допоможемо зрозуміти, який формат відновлення може підійти саме у вашій ситуації.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={() => openModal("Замовити консультацію")}
                    className="inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-7 py-4 text-sm font-bold text-primary transition-colors hover:bg-white/92"
                  >
                    Замовити консультацію
                  </button>
                  <a
                    href={CONTACTS.phoneHref}
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/18 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/8"
                  >
                    <Phone className="size-4" />
                    {CONTACTS.phone}
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-[30px] border border-white/10">
                <img
                  src={heroImg}
                  alt="Пацієнт повертається до активності після кардіореабілітації"
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10", className)}>{children}</div>
  );
}

function SectionHeading({
  title,
  text,
  inverse,
  centered,
}: {
  title: string;
  text?: string;
  inverse?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={cn(centered && "text-center")}>
      <h2
        className={cn(
          "text-3xl font-extrabold leading-tight sm:text-4xl",
          inverse ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      <div className={cn("mt-4 h-1 w-16 rounded-full bg-primary", centered && "mx-auto")} />
      {text && (
        <p
          className={cn(
            "mt-4 max-w-3xl text-base leading-relaxed",
            inverse ? "text-white/74" : "text-navy/72",
            centered && "mx-auto",
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}
