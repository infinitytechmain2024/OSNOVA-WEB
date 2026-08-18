import * as React from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  HeartPulse,
  Info,
  Phone,
  ShieldAlert,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AppLink } from "@/components/app-link";
import { Breadcrumbs, FAQAccordion } from "@/components/blocks";
import { useConsultationModal } from "@/components/consultation-form";
import { CARDIO_REHAB_PROGRAMS } from "@/data/cardio-rehab-pricing";
import { CONTACTS } from "@/data/site-tree";
import type { SiteNode } from "@/data/types";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/about/cardio-rehab-cta-photo-v3.jpg";
import assessmentImg from "@/assets/about/medical-assessment.jpg";
import consultationImg from "@/assets/about/consultation.jpg";
import heartImg from "@/assets/cardio-heart-3d.jpg";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import rehabImg from "@/assets/service-rehab.jpg";
import sportsImg from "@/assets/service-sports.jpg";

const ANCHORS = [
  { href: "#about", label: "Про інфаркт" },
  { href: "#timing", label: "Показання" },
  { href: "#timing", label: "Протипоказання" },
  { href: "#methods", label: "Методи" },
  { href: "#process", label: "Як проходить" },
  { href: "#pricing", label: "Вартість" },
  { href: "#faq", label: "FAQ" },
] as const;

const ABOUT_POINTS = [
  "може знижуватися витривалість і фізична активність",
  "можуть з'являтися слабкість, задишка та тривожність",
  "важливо стежити за факторами ризику повторних серцево-судинних подій",
] as const;

const INDICATIONS = [
  "після гострого інфаркту міокарда після стабілізації стану",
  "після стентування коронарних артерій",
  "після аортокоронарного шунтування",
  "після інших кардіологічних втручань",
  "за наявності переносимості до легких навантажень",
  "коли потрібне безпечне повернення до активного життя",
  "за рекомендацією кардіолога",
] as const;

const CONTRAINDICATIONS = [
  "гострий або нестабільний стан",
  "неконтрольовані порушення гемодинаміки",
  "неконтрольована артеріальна гіпертензія",
  "декомпенсація серцевої недостатності",
  "гострі запальні або інфекційні захворювання",
  "інші стани, за яких лікар рекомендує відкласти фізичну реабілітацію",
] as const;

const EMERGENCY_SIGNS = [
  "раптовий або інтенсивний біль у грудях",
  "виражена задишка або утруднене дихання",
  "втрата або порушення свідомості",
  "раптове порушення мовлення, зору або слабкість у кінцівках",
] as const;

const SITUATIONS = [
  {
    title: "Після інфаркту міокарда",
    text: "Після першого інфаркту важливо поступово відновлювати активність та зменшувати ризик повторних подій.",
    image: consultationImg,
    route: "/reabilitatsiia/kardiolohichna/pislia-infarktu-miokarda",
  },
  {
    title: "Після стентування коронарних артерій",
    text: "Реабілітація допомагає покращити фізичну витривалість і адаптуватися до навантажень.",
    image: cpetImg,
    route: "/reabilitatsiia/kardiolohichna/pislia-stentuvannia-koronarnykh-arterii",
  },
  {
    title: "Після аортокоронарного шунтування",
    text: "Поступове відновлення серцево-судинної системи та безпечне повернення до повсякденного життя.",
    image: sportsImg,
    route: "/reabilitatsiia/kardiolohichna/pislia-aortokoronarnogo-shuntuvannia",
  },
] as const;

const PROCESS_STEPS = [
  {
    icon: ClipboardList,
    title: "Оцінка стану та документів",
    text: "Аналізуємо скарги, обстеження, виписку зі стаціонару та оцінюємо рівень поточної витривалості.",
  },
  {
    icon: Stethoscope,
    title: "Індивідуальний план реабілітації",
    text: "Формуємо безпечний план занять відповідно до стану серцево-судинної системи та ваших цілей.",
  },
  {
    icon: Activity,
    title: "Заняття та процедури під контролем",
    text: "Поступово тренуємо витривалість, навчаємо самоконтролю та відстежуємо реакцію на навантаження.",
  },
  {
    icon: HeartPulse,
    title: "Моніторинг прогресу та корекція",
    text: "Регулярно оцінюємо самопочуття, динаміку відновлення і коригуємо темп програми.",
  },
  {
    icon: CalendarCheck2,
    title: "Повернення до активного життя",
    text: "Допомагаємо закріпити безпечні звички, режим навантаження й упевненість у щоденній активності.",
  },
] as const;

const METHODS = [
  {
    title: "Лікувальна фізкультура",
    text: "Спеціально підібрані вправи для зниження втоми та підвищення витривалості.",
  },
  {
    title: "Аеробні тренування",
    text: "Дозовані кардіонавантаження для покращення роботи серцево-судинної системи.",
  },
  {
    title: "Контрольоване фізичне навантаження",
    text: "Поступове збільшення інтенсивності під контролем показників.",
  },
  {
    title: "Моніторинг стану",
    text: "Контроль ЕКГ, пульсу та тиску під час занять або за планом лікаря.",
  },
  {
    title: "Дихальні вправи",
    text: "Техніки для покращення функції легень та переносимості навантаження.",
  },
  {
    title: "Освітня підтримка",
    text: "Пояснення щодо фізичної активності, самоконтролю, стресу та способу життя.",
  },
  {
    title: "Консультація кардіолога",
    text: "Регулярний супровід лікаря на етапах старту і корекції програми.",
  },
  {
    title: "Рекомендації щодо способу життя",
    text: "Індивідуальні поради щодо руху, сну, харчування й подальшої профілактики.",
  },
] as const;

const OTHER_SERVICES = [
  {
    title: "Кардіологічна діагностика",
    text: "ЕхоКГ, ЕКГ, холтер, УЗД та інші обстеження серця й судин.",
    image: ecgImg,
    route: "/diagnostyka/kardiodiahnostyka",
  },
  {
    title: "Кардіологічний чек-ап",
    text: "Комплексна оцінка стану серця та серцево-судинного ризику.",
    image: cpetImg,
    route: "/check-up/kardiolohichnyi",
  },
  {
    title: "Виїзна реабілітація",
    text: "Продовження відновлення вдома або в іншому зручному форматі.",
    image: rehabImg,
    route: "/vyizna-reabilitatsiia",
  },
  {
    title: "Консультація з харчування",
    text: "Підтримка щодо харчових звичок для контролю ваги й факторів ризику.",
    image: sportsImg,
    route: "/tsiny-ta-posluhy",
  },
] as const;

export function PostInfarctionRehabPage({ node }: { node: SiteNode }) {
  const { openModal } = useConsultationModal();
  const [faqExpanded, setFaqExpanded] = React.useState(false);
  const [activeOtherService, setActiveOtherService] = React.useState(0);
  const otherServicesTrackRef = React.useRef<HTMLDivElement>(null);
  const faqItems = faqExpanded ? (node.faq ?? []) : (node.faq ?? []).slice(0, 3);

  const scrollOtherServicesToIndex = (index: number) => {
    const track = otherServicesTrackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const onOtherServicesScroll = () => {
    const track = otherServicesTrackRef.current;
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    let closest = 0;
    let min = Number.POSITIVE_INFINITY;
    children.forEach((child, index) => {
      const distance = Math.abs(child.offsetLeft - track.offsetLeft - track.scrollLeft);
      if (distance < min) {
        min = distance;
        closest = index;
      }
    });
    setActiveOtherService(closest);
  };

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="overflow-x-clip">
        <section className="bg-white px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
          <div className="relative mx-auto max-w-[1800px] overflow-hidden rounded-[40px] bg-navy-deep">
            <img
              src={heroImg}
              alt="Реабілітація після інфаркту міокарда"
              className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,23,58,0.96)_0%,rgba(8,23,58,0.88)_34%,rgba(8,23,58,0.54)_62%,rgba(8,23,58,0.1)_100%)]" />
            <div className="relative mx-auto flex min-h-[500px] max-w-[1800px] items-center px-6 py-14 sm:px-10 lg:min-h-[560px] lg:px-16 lg:py-20">
              <div className="max-w-[620px]">
                <span className="inline-flex rounded-full border border-white/20 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-[0_14px_38px_rgba(10,25,60,0.18)]">
                  Кардіологічна реабілітація
                </span>
                <h1 className="mt-6 max-w-[10ch] text-4xl font-extrabold leading-[0.95] text-white sm:text-5xl lg:text-[4.6rem]">
                  Реабілітація після інфаркту міокарда
                </h1>
                <p className="mt-5 max-w-[30rem] text-base leading-relaxed text-white/84 sm:text-lg">
                  Індивідуальна програма відновлення для безпечного повернення до активного життя
                  під контролем фахівців.
                </p>
                <button
                  type="button"
                  onClick={() => openModal("Замовити консультацію")}
                  className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground shadow-[0_18px_44px_rgba(53,200,138,0.32)] transition-colors hover:bg-brand-green/90"
                >
                  Замовити консультацію
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <Container>
            <Breadcrumbs
              items={[
                { title: "Головна", route: "/" },
                { title: "Реабілітація", route: "/reabilitatsiia" },
                { title: "Кардіологічна реабілітація", route: "/reabilitatsiia/kardiolohichna" },
                { title: node.title, route: node.route },
              ]}
              className="pb-3 pt-4"
            />
            <div className="overflow-x-auto pb-5 scrollbar-none">
              <nav aria-label="Навігація по сторінці" className="flex min-w-max gap-2">
                {ANCHORS.map((item, index) => (
                  <a
                    key={`${item.href}-${index}`}
                    href={item.href}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-navy/75 transition-colors hover:border-primary/30 hover:bg-sky-50 hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </Container>
        </section>

        <section id="about" className="bg-white pb-6 pt-2 sm:pb-8">
          <Container>
            <div className="rounded-[30px] border border-sky-100 bg-[linear-gradient(180deg,#f7fbff_0%,#f3f8ff_100%)] p-6 shadow-[0_18px_55px_rgba(31,61,120,0.06)] sm:p-8 lg:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr]">
                <div className="mx-auto max-w-[320px]">
                  <img src={heartImg} alt="Серце" className="w-full object-contain" />
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
                    Що таке інфаркт міокарда
                  </h2>
                  <p className="mt-4 max-w-4xl text-sm leading-relaxed text-navy/74 sm:text-base">
                    Інфаркт міокарда — це гостре порушення кровопостачання частини серцевого м'яза,
                    внаслідок якого його тканини можуть пошкоджуватися. Після стабілізації стану
                    важливо не лише продовжувати лікування, а й поступово повертатися до безпечної
                    фізичної активності.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {ABOUT_POINTS.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-navy/78">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex items-start gap-3 rounded-[22px] border border-primary/10 bg-white/80 px-5 py-4 text-sm font-semibold text-primary">
                <Info className="mt-0.5 size-5 shrink-0" />
                <p>
                  Реабілітація допомагає поступово відновлювати активність та формувати безпечний
                  маршрут повернення до повсякденного життя.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="timing" className="bg-white py-6 sm:py-8">
          <Container>
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
              Що варто знати перед початком програми
            </h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <InfoCard
                title="Показання"
                icon={HeartPulse}
                iconClassName="bg-primary/10 text-primary"
                items={INDICATIONS}
              />
              <InfoCard
                title="Протипоказання"
                icon={AlertTriangle}
                iconClassName="bg-amber-100 text-amber-500"
                items={CONTRAINDICATIONS}
                bulletClassName="bg-amber-400"
              />
            </div>
            <p className="mt-4 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy/62">
              Показання та можливі обмеження оцінюються лікарем індивідуально перед початком
              програми.
            </p>

            <div className="mt-6 overflow-hidden rounded-[28px] border border-sky-100 bg-[linear-gradient(90deg,#f5f9ff_0%,#ffffff_56%)]">
              <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-primary">
                    <CalendarCheck2 className="size-6" />
                    <h3 className="text-2xl font-extrabold text-navy">Початок програми</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-navy/74 sm:text-base">
                    Реабілітацію можна розпочинати після стабілізації стану та за рекомендацією
                    лікаря. Зазвичай це відбувається від кількох днів до кількох тижнів після події
                    залежно від клінічної ситуації та типу втручання.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy/74 sm:text-base">
                    Перший етап проходить під наглядом фахівців із поступовим збільшенням
                    навантажень.
                  </p>
                </div>
                <div className="min-h-[240px]">
                  <img
                    src={assessmentImg}
                    alt="Початок програми реабілітації"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 rounded-[28px] border border-red-200 bg-red-50/70 p-5 lg:grid-cols-[1fr_1fr]">
              <div>
                <div className="flex items-center gap-3 text-red-500">
                  <ShieldAlert className="size-6" />
                  <h3 className="text-2xl font-extrabold">Знаки невідкладного стану</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-red-500/80">
                  Не відкладайте звернення по допомогу, якщо з'являються такі симптоми. У разі їх
                  виникнення негайно викликайте швидку медичну допомогу.
                </p>
              </div>
              <ul className="space-y-3 self-center">
                {EMERGENCY_SIGNS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-red-500/90">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-red-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section className="bg-white py-6 sm:py-10">
          <Container>
            <SectionTitle title="Коли може бути потрібна реабілітація після інфаркту" centered />
            <div className="mt-8 grid gap-5 xl:grid-cols-3">
              {SITUATIONS.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_14px_38px_rgba(31,61,120,0.05)]"
                >
                  <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-extrabold text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/72">{item.text}</p>
                    <AppLink
                      to={item.route}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80"
                    >
                      Детальніше
                      <ArrowRight className="size-4" />
                    </AppLink>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <AppLink
                to="/reabilitatsiia/kardiolohichna"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-primary/30 hover:text-primary"
              >
                Більше
              </AppLink>
            </div>
          </Container>
        </section>

        <section id="process" className="bg-white py-6 sm:py-10">
          <Container>
            <div className="rounded-[30px] border border-sky-100 bg-[linear-gradient(180deg,#f6fbff_0%,#f4f8ff_100%)] p-6 sm:p-8 lg:p-10">
              <SectionTitle
                title="Як проходить відновлення?"
                text="Покроковий підхід і послідовний контроль забезпечують безпечне та ефективне відновлення."
                centered
              />
              <div className="mt-8 grid gap-4 xl:grid-cols-5">
                {PROCESS_STEPS.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <article
                      key={step.title}
                      className="relative rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      {index < PROCESS_STEPS.length - 1 && (
                        <span className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-primary/40 xl:block">
                          <ArrowRight className="size-6" />
                        </span>
                      )}
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-green/12 text-brand-green">
                        <Icon className="size-6" />
                      </span>
                      <h3 className="mt-4 text-lg font-extrabold text-navy">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-navy/72">{step.text}</p>
                    </article>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 rounded-[20px] border border-white/80 bg-white/70 px-5 py-4 text-sm text-navy/72">
                <span className="font-bold text-navy">Формати надання допомоги</span>
                <span className="font-semibold text-primary">стаціонарно</span>
                <span className="font-semibold text-primary">амбулаторно</span>
                <span className="font-semibold text-primary">онлайн</span>
              </div>
            </div>
          </Container>
        </section>

        <section id="methods" className="bg-white py-6 sm:py-10">
          <Container>
            <SectionTitle title="Методи, які можуть входити до програми" centered />
            <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {METHODS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(31,61,120,0.04)]"
                >
                  <h3 className="text-lg font-extrabold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/72">{item.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Перейти далі
                    <ArrowRight className="size-4" />
                  </span>
                </article>
              ))}
              <article className="rounded-[24px] bg-[linear-gradient(180deg,#dffbe9_0%,#b8f1cc_100%)] p-6 text-navy shadow-[0_16px_40px_rgba(53,200,138,0.16)] xl:col-span-1">
                <div className="flex items-center gap-3 text-brand-green">
                  <Sparkles className="size-6" />
                  <span className="text-sm font-bold uppercase tracking-[0.14em]">
                    Акції та спецумови
                  </span>
                </div>
                <p className="mt-4 text-4xl font-extrabold text-brand-green">до -15 %</p>
                <p className="mt-3 text-sm leading-relaxed text-navy/74">
                  Дізнайтеся про актуальні акції та спеціальні умови на програми реабілітації.
                </p>
                <button
                  type="button"
                  onClick={() => openModal("Детальніше про акції")}
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-green transition-colors hover:bg-white/90"
                >
                  Детальніше
                </button>
              </article>
            </div>
          </Container>
        </section>

        <section id="pricing" className="bg-white py-6 sm:py-10">
          <Container>
            <SectionTitle
              title="Програми та вартість"
              text="Тривалість і склад послуг підбираються індивідуально після оцінки стану."
              centered
            />
            <div className="mt-8 grid gap-5 xl:grid-cols-4">
              {CARDIO_REHAB_PROGRAMS.map((program) => {
                const isFeatured = program.id === "standartna";
                return (
                  <article
                    key={program.id}
                    className={cn(
                      "flex min-h-[320px] flex-col rounded-[24px] border p-6 shadow-[0_16px_36px_rgba(31,61,120,0.05)]",
                      isFeatured
                        ? "border-primary bg-primary text-white"
                        : "border-slate-200 bg-white text-navy",
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-2xl font-extrabold">{program.title}</h3>
                      {isFeatured && (
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-primary">
                          Оптимально
                        </span>
                      )}
                    </div>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed",
                        isFeatured ? "text-white/82" : "text-navy/70",
                      )}
                    >
                      {program.description}
                    </p>
                    <div
                      className={cn(
                        "mt-6 space-y-4 border-t pt-5",
                        isFeatured ? "border-white/20" : "border-slate-200",
                      )}
                    >
                      <div>
                        <div className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">
                          Тривалість
                        </div>
                        <div className="mt-1 font-semibold">{program.duration}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">
                          Ціна
                        </div>
                        <div className="mt-1 text-[2rem] font-extrabold">{program.price}</div>
                      </div>
                    </div>
                    <AppLink
                      to={program.detailsUrl}
                      className={cn(
                        "mt-auto inline-flex min-h-11 w-fit items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition-colors",
                        isFeatured
                          ? "bg-white text-primary hover:bg-white/90"
                          : "border border-slate-200 text-primary hover:border-primary/30 hover:bg-sky-50",
                      )}
                    >
                      Детальніше
                    </AppLink>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="bg-white py-6 sm:py-10">
          <Container>
            <div className="grid gap-8 overflow-hidden rounded-[30px] border border-sky-100 bg-[linear-gradient(180deg,#f5f9ff_0%,#ffffff_100%)] p-6 shadow-[0_18px_44px_rgba(31,61,120,0.06)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={heroImg}
                  alt="Допомога з вибором програми"
                  className="h-full min-h-[260px] w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
                  Потрібна допомога з вибором програми?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/72 sm:text-base">
                  Залиште заявку, і команда ОСНОВА допоможе зрозуміти, з чого почати відновлення
                  після інфаркту.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => openModal("Замовити консультацію")}
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground transition-colors hover:bg-brand-green/90"
                  >
                    Замовити консультацію
                    <ArrowRight className="size-4" />
                  </button>
                  <a
                    href={CONTACTS.phoneHref}
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-slate-200 px-7 py-4 text-sm font-bold text-primary transition-colors hover:border-primary/30 hover:bg-sky-50"
                  >
                    <Phone className="size-4" />
                    {CONTACTS.phone}
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="faq" className="bg-white py-6 sm:py-10">
          <Container className="max-w-[1120px]">
            <SectionTitle title="Поширені запитання" centered />
            <div className="mt-8">
              <FAQAccordion items={faqItems} variant="home" />
            </div>
            {(node.faq?.length ?? 0) > 3 && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setFaqExpanded((value) => !value)}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
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

        <section className="bg-white py-6 sm:py-10">
          <Container>
            <div className="rounded-[30px] bg-[linear-gradient(180deg,#f5f9ff_0%,#edf5ff_100%)] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Інші послуги</h2>
                <div className="hidden gap-3 md:flex">
                  <button
                    type="button"
                    aria-label="Попередній слайд"
                    onClick={() => scrollOtherServicesToIndex(Math.max(0, activeOtherService - 1))}
                    className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Наступний слайд"
                    onClick={() =>
                      scrollOtherServicesToIndex(
                        Math.min(OTHER_SERVICES.length - 1, activeOtherService + 1),
                      )
                    }
                    className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
              <div
                ref={otherServicesTrackRef}
                onScroll={onOtherServicesScroll}
                className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-none"
              >
                {OTHER_SERVICES.map((item) => (
                  <article
                    key={item.title}
                    className="flex w-[84%] shrink-0 snap-start flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white sm:w-[52%] xl:w-[calc((100%-3.75rem)/4)]"
                  >
                    <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-extrabold text-navy">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-navy/72">{item.text}</p>
                      <AppLink
                        to={item.route}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80"
                      >
                        Детальніше
                        <ArrowRight className="size-4" />
                      </AppLink>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center gap-2">
                {OTHER_SERVICES.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Слайд ${index + 1}`}
                    onClick={() => scrollOtherServicesToIndex(index)}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      index === activeOtherService ? "w-8 bg-primary" : "w-2.5 bg-navy/20",
                    )}
                  />
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white pb-10 pt-4 sm:pb-14">
          <Container>
            <div className="flex flex-col items-center justify-between gap-6 rounded-[28px] bg-[linear-gradient(90deg,#f4fbff_0%,#f8fdff_100%)] px-6 py-6 text-center shadow-[0_14px_34px_rgba(31,61,120,0.06)] lg:flex-row lg:text-left">
              <div className="flex items-center gap-4">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <HeartPulse className="size-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">
                    Відновлюйте серце разом з ОСНОВА
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy/72 sm:text-base">
                    Професійна підтримка на кожному етапі вашого відновлення.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => openModal("Записатися на консультацію")}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-brand-green px-7 py-4 text-sm font-bold text-brand-green-foreground transition-colors hover:bg-brand-green/90"
              >
                Записатися на консультацію
                <ArrowRight className="size-4" />
              </button>
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

function SectionTitle({
  title,
  text,
  centered,
}: {
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn(centered && "text-center")}>
      <h2 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">{title}</h2>
      {text && (
        <p
          className={cn(
            "mt-4 max-w-3xl text-sm leading-relaxed text-navy/72 sm:text-base",
            centered && "mx-auto",
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function InfoCard({
  title,
  icon: Icon,
  iconClassName,
  items,
  bulletClassName,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  iconClassName: string;
  items: readonly string[];
  bulletClassName?: string;
}) {
  return (
    <article className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(31,61,120,0.04)] sm:p-7">
      <div className="flex items-center gap-3">
        <span className={cn("flex size-11 items-center justify-center rounded-2xl", iconClassName)}>
          <Icon className="size-5" />
        </span>
        <h3 className="text-2xl font-extrabold text-navy">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy/75">
            <span
              className={cn("mt-2 size-1.5 shrink-0 rounded-full bg-primary", bulletClassName)}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
