import { ArrowRight, Phone, Send, Info, FileText } from "lucide-react";
import type { ReactNode } from "react";

import { AppLink } from "@/components/app-link";
import { FAQAccordion } from "@/components/blocks";
import { useConsultationModal } from "@/components/consultation-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACTS } from "@/data/site-tree";
import type { FAQItem, SiteNode } from "@/data/types";

import carpathiansLocationImg from "@/assets/about/carpathians-location.jpg";
import consultationImg from "@/assets/about/consultation.jpg";
import diagnosticsSessionImg from "@/assets/about/diagnostics-session.jpg";
import functionalTrainingImg from "@/assets/about/functional-training.jpg";
import hurEquipmentImg from "@/assets/about/hur-equipment.jpg";
import poolImg from "@/assets/about/pool.jpg";
import therapyHallImg from "@/assets/about/therapy-hall.jpg";
import therapySessionImg from "@/assets/about/therapy-session.jpg";

import partnerAsmuLogo from "@/assets/partners/partner-asmu.png";
import partnerHeartLogo from "@/assets/partners/partner-heart.svg";
import partnerIfnmuLogo from "@/assets/partners/partner-ifnmu.png";
import partnerSytenkoLogo from "@/assets/partners/partner-sytenko.svg";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Попередній запит",
    text: "Пацієнт описує ситуацію або надсилає наявні медичні документи.",
  },
  {
    number: "02",
    title: "Консультація та оцінка",
    text: "Лікар і фахівці визначають стан, обмеження, цілі та доцільний формат роботи.",
  },
  {
    number: "03",
    title: "Програма відновлення",
    text: "Формується персональний план із потрібних методів, навантаження та графіка.",
  },
  {
    number: "04",
    title: "Робота й контроль динаміки",
    text: "Команда супроводжує процес і за потреби коригує програму.",
  },
  {
    number: "05",
    title: "Рекомендації далі",
    text: "Пацієнт отримує зрозумілі подальші кроки для активності, профілактики або продовження відновлення.",
  },
];

const DIRECTIONS = [
  {
    title: "Реабілітація",
    text: "Повернення руху, витривалості та самостійності.",
    image: therapySessionImg,
    href: "/poslugy/reabilitatsiia",
  },
  {
    title: "Функціональна діагностика",
    text: "Об’єктивна оцінка стану й реакції організму на навантаження.",
    image: diagnosticsSessionImg,
    href: "/poslugy/diahnostyka",
  },
  {
    title: "Відновлювальні методи",
    text: "Допоміжні методи для комплексного відновлення.",
    image: functionalTrainingImg,
    href: "/poslugy/vidnovlennia",
  },
  {
    title: "Спортивна медицина",
    text: "Оцінка готовності до навантажень і безпечне повернення до тренувань.",
    image: hurEquipmentImg,
    href: "/poslugy/vidnovlennia/funktsionalne-trenuvannia",
  },
  {
    title: "Профілактика та чек-апи",
    text: "Комплексна перевірка стану здоров’я з висновком лікаря.",
    image: consultationImg,
    href: "/poslugy/check-up",
  },
];

const TEAM_ROLES = [
  {
    title: "Лікар",
    text: "Визначає медичну тактику та безпечні межі навантаження.",
  },
  {
    title: "Фізичний терапевт",
    text: "Працює з рухом, витривалістю, силою та поверненням до повсякденної активності.",
  },
  {
    title: "Профільні спеціалісти",
    text: "Підключаються відповідно до стану та цілей пацієнта.",
  },
];

const SPACE_CARDS = [
  {
    title: "Кабінети діагностики",
    text: "Допомагають оцінити стан до початку програми.",
    image: diagnosticsSessionImg,
    className: "md:col-span-1 lg:col-span-7",
  },
  {
    title: "Зали для фізичної терапії",
    text: "Простір для індивідуальних занять і роботи з рухом.",
    image: therapyHallImg,
    className: "md:col-span-1 lg:col-span-5",
  },
  {
    title: "Обладнання HUR",
    text: "Дає змогу точно дозувати та контролювати силове навантаження.",
    image: hurEquipmentImg,
    className: "md:col-span-1 lg:col-span-4",
  },
  {
    title: "Басейн та гідрокінезіотерапія",
    text: "Басейн допомагає безпечніше починати рух при обмеженні навантаження на суглоби.",
    image: poolImg,
    className: "md:col-span-1 lg:col-span-8",
  },
  {
    title: "Зони проживання / відпочинку",
    text: "Комфортні умови для відновлення в стаціонарному форматі.",
    image: carpathiansLocationImg,
    className: "md:col-span-2 lg:col-span-12",
  },
];

const PARTNERS = [
  {
    name: "Івано-Франківський національний медичний університет",
    logo: partnerIfnmuLogo,
    href: "https://www.ifnmu.edu.ua/",
  },
  {
    name: "Інститут серця МОЗ України",
    logo: partnerHeartLogo,
    href: "https://heart.kyiv.ua/",
  },
  {
    name: "Інститут ім. проф. М. І. Ситенка",
    logo: partnerSytenkoLogo,
    href: "https://sytenko.org.ua/",
  },
  {
    name: "Асоціація спортивної медицини України",
    logo: partnerAsmuLogo,
    href: "https://asmu.com.ua/",
  },
];

const SUITABILITY = [
  {
    title: "Після захворювання, операції або травми",
    text: "Коли потрібно поступово повернути рух, витривалість і самостійність.",
  },
  {
    title: "Коли активність стала обмеженою",
    text: "Коли біль, слабкість, скутість або зниження витривалості заважають у повсякденному житті.",
  },
  {
    title: "Для безпечного повернення до навантажень",
    text: "Коли потрібна оцінка стану та зрозумілий план фізичної активності.",
  },
];

const PATIENT_CASES = [
  {
    title: "Відновлення після травми суглоба",
    start: "Через тривале обмеження руху після травми виникла слабкість і невпевненість у нозі.",
    goal: "Відновити амплітуду, силу та здатність безпечно спиратися на ногу під час ходьби.",
    process:
      "Оцінка амплітуди та болю, поступова робота з фізичним терапевтом для відновлення сили, включення вправ на баланс.",
    next: "Пацієнт отримав домашню програму вправ для підтримання результату.",
  },
  {
    title: "Кардіологічна реабілітація після операції",
    start: "Невпевненість щодо допустимих навантажень після оперативного втручання.",
    goal: "Безпечно повернути витривалість і підвищити рівень щоденної активності.",
    process:
      "Медичний огляд, функціональне тестування під наглядом, аеробні тренування з контролем пульсу та тиску.",
    next: "Визначено безпечний пульсовий коридор, надані рекомендації щодо тривалості прогулянок.",
  },
];

const FAQS: FAQItem[] = [
  {
    question: "З чого почати звернення до ОСНОВИ?",
    answer:
      "Опишіть ситуацію у заявці на сайті або зателефонуйте. Адміністратор підкаже, з чого почати та які документи знадобляться для першої консультації.",
  },
  {
    question: "Чи можна надіслати медичні документи до приїзду?",
    answer:
      "Так, ви можете надіслати виписки та результати обстежень у наш Telegram. Це допоможе команді попередньо оцінити ситуацію.",
  },
  {
    question: "Чи потрібне направлення лікаря?",
    answer:
      "Направлення не є обов'язковим. Якщо у вас є рекомендації від лікуючого лікаря, просто візьміть їх із собою.",
  },
  {
    question: "Чи можна пройти лише діагностику?",
    answer:
      "Так, ви можете звернутися до нас для проходження функціональної діагностики та отримання медичного висновку.",
  },
  {
    question: "Як обрати формат програми?",
    answer:
      "Після первинної оцінки стану та цілей, лікар і команда порекомендують найефективніший формат: амбулаторний, стаціонарний або комбінований.",
  },
  {
    question: "Чи можна проходити відновлення амбулаторно, стаціонарно або онлайн?",
    answer:
      "Так. Центр пропонує стаціонарне відновлення (з проживанням), амбулаторні візити та, за можливості, подальший онлайн-супровід.",
  },
];

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 ${className}`}>{children}</div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  centered = false,
  titleId,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
  titleId?: string;
}) {
  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2
        id={titleId}
        className="mt-3 text-3xl font-extrabold leading-[1.14] text-navy sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{text}</p>}
    </div>
  );
}

export function AboutOsnovaPage({ node }: { node: SiteNode }) {
  const { openModal } = useConsultationModal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* 1. ПЕРШИЙ ЕКРАН */}
        <section className="overflow-hidden bg-[linear-gradient(135deg,var(--color-soft-blue),white_62%)] py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary sm:text-sm">
                  ОСНОВА РЕАБІЛІТАЦІЯ
                </p>
                <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem]">
                  ОСНОВА Реабілітація — медичний центр відновлення в Буковелі
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
                  Ми поєднуємо медичну оцінку, функціональну діагностику та персональну програму
                  відновлення, щоб пацієнт розумів свій стан і наступні кроки.
                </p>
                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => openModal("Записатися на консультацію")}
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-center text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 sm:w-auto"
                  >
                    Записатися на консультацію
                  </button>
                  <a
                    href={CONTACTS.messengers.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-12 items-center gap-2 px-1 text-sm font-bold text-primary underline decoration-primary/30 decoration-2 underline-offset-8 transition hover:text-navy"
                  >
                    Надіслати документи
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-5 -z-0 rounded-[38px] bg-primary/8 blur-2xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-2xl shadow-slate-900/15">
                  <img
                    src={therapySessionImg}
                    alt="Реабілітація в ОСНОВА"
                    width={1400}
                    height={940}
                    className="aspect-[4/3] w-full object-cover object-center lg:aspect-[1.12/1]"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* СТРОКА ДОВІРИ */}
        <div className="border-y border-slate-200/80 bg-white">
          <Container className="py-5">
            <p className="flex flex-col items-center justify-center gap-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-navy sm:flex-row sm:gap-4 sm:text-sm sm:tracking-[0.16em]">
              <span>Медична оцінка</span>
              <span className="hidden size-1.5 rounded-full bg-brand-green sm:block" aria-hidden />
              <span>Команда фахівців</span>
              <span className="hidden size-1.5 rounded-full bg-brand-green sm:block" aria-hidden />
              <span>Відновлення в одному центрі</span>
            </p>
          </Container>
        </div>

        {/* 2. ВІДНОВЛЕННЯ ПОЧИНАЄТЬСЯ */}
        <section className="py-16 sm:py-24 lg:py-28" aria-labelledby="state-understanding-title">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div>
                <h2
                  id="state-understanding-title"
                  className="mt-4 text-3xl font-extrabold leading-[1.14] text-navy sm:text-4xl lg:text-5xl"
                >
                  Відновлення починається з розуміння вашого стану
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                  ОСНОВА не формує програму за шаблоном і не пропонує випадковий набір процедур.
                  Спочатку команда визначає медичні та функціональні завдання пацієнта, після чого
                  формує послідовний план роботи й контролює динаміку.
                </p>
              </div>
              <div className="overflow-hidden rounded-[28px] shadow-xl shadow-slate-900/10">
                <img
                  src={consultationImg}
                  alt="Консультація лікаря"
                  width={1400}
                  height={800}
                  loading="lazy"
                  className="aspect-[16/10] size-full object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* 3. ЯК ПРАЦЮЄ ОСНОВА */}
        <section
          className="border-y border-slate-200/70 bg-soft-blue py-16 sm:py-24 lg:py-28"
          aria-labelledby="process-title"
        >
          <Container>
            <SectionIntro title="Від першого звернення до наступного кроку" titleId="process-title" />

            <ol className="relative mt-12 grid gap-8 lg:grid-cols-5 lg:gap-5">
              <div
                className="absolute bottom-7 left-[1.2rem] top-7 w-px bg-primary/25 lg:hidden"
                aria-hidden
              />
              <div
                className="absolute left-[8%] right-[8%] top-6 hidden h-px bg-primary/25 lg:block"
                aria-hidden
              />
              {PROCESS_STEPS.map((step) => (
                <li key={step.number} className="relative grid grid-cols-[3rem_1fr] gap-4 lg:block">
                  <span className="relative z-10 flex size-12 items-center justify-center rounded-full border-4 border-soft-blue bg-primary text-xs font-extrabold text-white shadow-sm lg:mx-auto">
                    {step.number}
                  </span>
                  <div className="pt-1 lg:pt-6 lg:text-center">
                    <h3 className="text-lg font-extrabold leading-snug text-navy">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 lg:text-center">
              <button
                type="button"
                onClick={() => openModal("Обговорити свій випадок")}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 sm:w-auto"
              >
                Обговорити свій випадок
              </button>
            </div>
          </Container>
        </section>

        {/* 4. ОДИН ЦЕНТР */}
        <section className="py-16 sm:py-24 lg:py-28" aria-labelledby="connected-care-title">
          <Container>
            <SectionIntro
              title="Усе необхідне для відновлення — в одному процесі"
              text="Пацієнту не потрібно самостійно поєднувати консультації, діагностику, фізичну терапію та відновлювальні методи в різних місцях. ОСНОВА об’єднує їх навколо однієї мети."
              titleId="connected-care-title"
            />

            <div className="mt-12 grid gap-5 md:grid-cols-3 xl:grid-cols-5">
              {DIRECTIONS.map((item) => (
                <article
                  key={item.title}
                  className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md shadow-slate-900/5 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="size-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-extrabold leading-snug text-navy">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                    <AppLink
                      to={item.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-navy"
                    >
                      Переглянути <ArrowRight className="size-4" />
                    </AppLink>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. КОМАНДА */}
        <section
          className="border-y border-slate-200/70 bg-slate-50/80 py-16 sm:py-24 lg:py-28"
          aria-labelledby="team-title"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <SectionIntro
                  title="Не один спеціаліст, а узгоджена робота команди"
                  text="Програму формують і супроводжують фахівці різних напрямів. Кожен відповідає за свою частину процесу, але всі працюють із єдиною метою пацієнта."
                  titleId="team-title"
                />
                <AppLink
                  to="/komanda"
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-primary sm:w-auto"
                >
                  Познайомитися з командою <ArrowRight className="size-4" />
                </AppLink>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {TEAM_ROLES.map((role) => (
                  <article
                    key={role.title}
                    className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
                  >
                    <h3 className="mt-2 text-xl font-extrabold text-navy">{role.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{role.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* 6. ПРОСТІР ДЛЯ ВІДНОВЛЕННЯ */}
        <section className="py-16 sm:py-24 lg:py-28" aria-labelledby="space-title">
          <Container>
            <SectionIntro
              title="Простір, де програма переходить у щоденну практику"
              titleId="space-title"
            />

            <div className="mt-12 grid auto-rows-[minmax(280px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-12">
              {SPACE_CARDS.map((item) => (
                <article
                  key={item.title}
                  className={`group relative min-h-[300px] overflow-hidden rounded-[26px] bg-navy-deep shadow-lg shadow-slate-900/10 ${item.className}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <h3 className="text-xl font-extrabold text-white sm:text-2xl">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* 7. ОСВІТА ТА НАУКА */}
        <section
          className="border-y border-slate-200/70 bg-soft-blue py-16 sm:py-24 lg:py-28"
          aria-labelledby="education-title"
        >
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <SectionIntro
                  eyebrow="ОСВІТА ТА НАУКА"
                  title="Практика, що розвивається разом із професійною спільнотою"
                  text="ОСНОВА поєднує практичну роботу з навчанням, професійним обміном і співпрацею з медичними та освітніми партнерами."
                  titleId="education-title"
                />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <AppLink
                    to="/navchannia"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
                  >
                    Навчання для фахівців
                  </AppLink>
                  <AppLink
                    to="/iventy"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-primary/30 bg-white px-6 py-3 text-sm font-bold text-primary transition hover:border-primary hover:bg-primary/5"
                  >
                    Наукові події
                  </AppLink>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {PARTNERS.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Перейти на сайт партнера: ${partner.name}`}
                    className="group flex min-h-52 flex-col items-center justify-between rounded-[22px] border border-slate-200/80 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="flex h-28 w-full items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        loading="lazy"
                        className="max-h-20 max-w-full object-contain grayscale transition group-hover:grayscale-0"
                      />
                    </div>
                    <h3 className="mt-4 text-sm font-bold leading-snug text-navy">
                      {partner.name}
                    </h3>
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* 8. БУКОВЕЛЬ І КАРПАТИ */}
        <section className="py-16 sm:py-24 lg:py-28" aria-labelledby="carpathians-title">
          <Container>
            <div className="relative min-h-[520px] overflow-hidden rounded-[30px] bg-navy-deep shadow-2xl shadow-slate-900/15">
              <img
                src={carpathiansLocationImg}
                alt="Локація центру ОСНОВА Реабілітація в Буковелі"
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/68 to-navy-deep/5" />
              <div className="relative flex min-h-[520px] max-w-3xl flex-col justify-center p-6 sm:p-10 lg:p-16">
                <h2
                  id="carpathians-title"
                  className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl"
                >
                  Карпати — середовище для зосередженого відновлення
                </h2>
                <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
                  Спокійний ритм, природа та можливість пройти консультації, заняття й відпочинок в
                  одному місці допомагають приділити більше уваги процесу відновлення.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 9. КОМУ МОЖЕ ПІДІЙТИ ОСНОВА */}
        <section
          className="border-y border-slate-200/70 bg-slate-50/80 py-16 sm:py-24 lg:py-28"
          aria-labelledby="suitability-title"
        >
          <Container>
            <SectionIntro
              title="Кому може підійти ОСНОВА"
              titleId="suitability-title"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {SUITABILITY.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                >
                  <h3 className="mt-2 text-xl font-extrabold leading-snug text-navy sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
            <AppLink
              to="/poslugy/reabilitatsiia"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-navy"
            >
              Переглянути напрями реабілітації <ArrowRight className="size-4" />
            </AppLink>
          </Container>
        </section>

        {/* 10. СОЦІАЛЬНІ ПРОЄКТИ */}
        <section className="py-16 sm:py-24 lg:py-28">
          <Container>
            <div className="rounded-[32px] bg-brand-green p-8 sm:p-12 lg:p-16">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Повертаємо можливість рухатися далі
                </h2>
                <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
                  ОСНОВА реалізує соціальні ініціативи для підтримки відновлення людей після травм,
                  поранень та операцій. Ми об’єднуємо зусилля фахівців для забезпечення системної допомоги тим, хто цього найбільше потребує.
                </p>
                <AppLink
                  to="/sotsialni-proiekty"
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-green shadow-md transition hover:-translate-y-0.5 hover:bg-white/90 sm:w-auto"
                >
                  Дізнатися про соціальні проєкти
                </AppLink>
              </div>
            </div>
          </Container>
        </section>

        {/* 11. ІСТОРІЇ ВІДНОВЛЕННЯ */}
        <section
          className="border-y border-slate-200/70 bg-slate-50/80 py-16 sm:py-24 lg:py-28"
          aria-labelledby="patient-route-title"
        >
          <Container>
            <SectionIntro
              title="Шлях пацієнта — не лише діагноз"
              titleId="patient-route-title"
            />
            <p className="mt-5 max-w-4xl text-sm font-semibold leading-relaxed text-navy/75 sm:text-base">
              Кожен план залежить від діагнозу, загального стану, супутніх факторів і дотримання
              рекомендацій.
            </p>

            <div className="mt-10 grid gap-5 xl:grid-cols-2">
              {PATIENT_CASES.map((route) => (
                <article
                  key={route.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-md shadow-slate-900/5 sm:p-8"
                >
                  <h3 className="text-xl font-extrabold leading-snug text-navy sm:text-2xl">
                    {route.title}
                  </h3>
                  <dl className="mt-6 space-y-5">
                    {[
                      ["Ситуація", route.start],
                      ["Мета", route.goal],
                      ["Процес", route.process],
                      ["Результат етапу", route.next],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="border-t border-slate-200 pt-4 first:border-0 first:pt-0"
                      >
                        <dt className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
                          {label}
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-slate-600">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* 12. FAQ */}
        <section
          className="py-16 sm:py-24 lg:py-28"
          aria-labelledby="faq-title"
        >
          <Container className="!max-w-[1120px]">
            <SectionIntro title="Поширені запитання" titleId="faq-title" />
            <div className="mt-12">
              <FAQAccordion items={FAQS} />
            </div>
          </Container>
        </section>

        {/* 13. CTA */}
        <section className="bg-navy-deep py-16 sm:py-20 lg:py-24" aria-labelledby="final-cta-title">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div>
                <h2
                  id="final-cta-title"
                  className="text-3xl font-extrabold leading-tight text-white sm:text-5xl"
                >
                  Не знаєте, з чого почати?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
                  Опишіть свою ситуацію або надішліть наявні документи. Адміністратор допоможе
                  визначити зручний наступний крок.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 lg:min-w-[340px]">
                <button
                  type="button"
                  onClick={() => openModal("Записатися на консультацію")}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-brand-green px-6 py-3 text-center text-sm font-bold text-brand-green-foreground shadow-md shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-brand-green/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/25"
                >
                  Записатися на консультацію
                </button>
                <a
                  href={CONTACTS.messengers.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Надіслати документи <Send className="size-4" />
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-7 text-sm text-white/75 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={CONTACTS.phoneHref}
                className="inline-flex items-center gap-2 font-bold text-white transition hover:text-brand-green"
              >
                <Phone className="size-4" /> {CONTACTS.phone}
              </a>
              <a
                href={CONTACTS.messengers.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold transition hover:text-white"
              >
                <Send className="size-4" /> Telegram {CONTACTS.messengers.telegramHandle}
              </a>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
