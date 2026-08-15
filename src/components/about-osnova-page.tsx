import { ArrowRight, Phone, Send, CheckCircle2 } from "lucide-react";
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

const PROFILES = [
  "Ортопедія та травматологія",
  "Кардіологія",
  "Ревматологія",
  "Вертебрологія",
  "Неврологія",
  "Спортивна медицина",
  "Психологія ментального здоров’я",
];

const METHODS = [
  {
    title: "Фізіотерапія та апаратні методи",
    text: "Магнітотерапія, ударно-хвильова терапія, високопотужний лазер, електростимуляція, пресотерапія та лімфодренаж. Ці методи зменшують біль, знімають набряк, покращують мікроциркуляцію та прискорюють процеси загоєння.",
    image: therapyHallImg,
  },
  {
    title: "Гідрокінезіотерапія та бальнеологія",
    text: "Заняття у воді та використання водних процедур дозволяють безпечно відновлювати рух при обмеженому навантаженні на суглоби й хребет. Вода зменшує вагу тіла, знижує біль і дає можливість раніше починати активну роботу.",
    image: poolImg,
  },
  {
    title: "Механотерапія та функціональне тренування",
    text: "Робота на сучасному обладнанні HUR з точним дозуванням навантаження, підвісні системи Levitas і Redcord, нейром’язове тренування на системах Witty SEM Pro. Ці методи дозволяють контрольовано відновлювати силу, витривалість, баланс і координацію.",
    image: hurEquipmentImg,
  },
  {
    title: "Лікувальна фізкультура, пілатес і TRX",
    text: "Індивідуальні та групові заняття, спрямовані на відновлення амплітуди рухів, зміцнення м’язового корсета та повернення до повсякденної активності.",
    image: functionalTrainingImg,
  },
  {
    title: "Масаж і мануальні техніки",
    text: "Лікувальний, лімфодренажний та інші види масажу, які доповнюють основну програму, знімають напругу та покращують кровообіг.",
    image: therapySessionImg,
  },
  {
    title: "Додаткові підтримуючі методи",
    text: "Капельниці (інфузійна терапія), ін’єкційні методики та інші призначення лікаря за показаннями. Вони використовуються для корекції дефіцитів, зменшення запалення та підтримки загального стану організму.",
    image: diagnosticsSessionImg,
  }
];

const EQUIPMENT = [
  "Системи силового тренування HUR",
  "Zimmer EmFieldPro, Enraf-Nonius Endomed 484",
  "EMS DolorClast High Power Laser, Intelect RPW",
  "BTL-6000 Lymphastim",
  "Підвісні системи Levitas і Redcord",
  "Кардіологічне обладнання (ЕКГ, холтери, велоергометр, тредміл, MetaLyzer 3B)",
  "Апарати для нейром’язового тестування та функціональної діагностики",
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
        {/* 1. КОМПАНІЯ - ПРО НАС */}
        <section className="bg-white py-16 md:py-24 lg:py-28">
          <Container className="max-w-[1560px] px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="grid items-center gap-10 lg:gap-14 xl:gap-20 lg:grid-cols-[1.08fr_1fr]">
              <div className="w-full max-w-[720px] lg:max-w-none">
                <div className="mb-5 inline-flex items-center rounded-full bg-[#edf4ff] border border-[#d4e4fa] px-4.5 py-1.5 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#1d63ed]">
                  ПРО КОМПАНІЮ
                </div>

                <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-black tracking-tight leading-[1.08] text-[#0b192c]">
                  ОСНОВА <span className="text-[#1d63ed]">Реабілітація</span>
                </h1>

                <div className="mb-8 h-[4px] w-20 rounded-full bg-gradient-to-r from-[#1d63ed] via-[#1d63ed] 50% to-[#10b981]" />

                <div className="space-y-5 sm:space-y-6 text-base sm:text-[17px] lg:text-[17px] xl:text-[18px] leading-[1.7] sm:leading-[1.75]">
                  <p className="font-semibold text-[#1e293b]">
                    ОСНОВА Реабілітація — сучасна медична компанія, що
                    спеціалізується на лікуванні та комплексній реабілітації пацієнтів у
                    сферах кардіології, ортопедії, травматології, ревматології,
                    вертебрології та психології.
                  </p>

                  <p className="font-normal text-[#475569]">
                    Ми працюємо не лише з наслідками хвороб і травм, а й виявляємо ризики
                    ще до появи симптомів — завдяки сучасній діагностиці, точним
                    обстеженням і персоналізованим профілактичним програмам.
                  </p>

                  <p className="py-1 font-bold text-[#1d63ed]">
                    Наше завдання — допомогти вам відновити здоров'я, рухливість і якість
                    життя.
                  </p>

                  <p className="font-normal text-[#475569]">
                    ОСНОВА Реабілітація також є науково-освітньою платформою, що
                    розробляє та вдосконалює протоколи лікування, співпрацює з провідними
                    медичними університетами світу, впроваджує інноваційні технології та
                    розвиває виїзні формати реабілітаційної допомоги для пацієнтів поза
                    центром.
                  </p>
                </div>

                <div className="mt-10 lg:mt-12">
                  <button
                    type="button"
                    onClick={() => openModal("Записатися на консультацію")}
                    className="inline-flex items-center gap-3 rounded-full bg-[#0b192c] px-8 py-4 sm:px-9 sm:py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_12px_28px_rgba(11,25,44,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d63ed] hover:shadow-[0_14px_32px_rgba(29,99,237,0.35)]"
                  >
                    ДЕТАЛЬНІШЕ <ArrowRight className="h-4.5 w-4.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* RIGHT 2X2 GRID */}
              <div className="w-full">
                <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                  {/* Top-Left: Image 1 */}
                  <div className="overflow-hidden rounded-[28px] lg:rounded-[32px] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.05)] border border-slate-100/90 aspect-[4/3.3] min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] xl:min-h-[300px]">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
                      alt="Реабілітаційний процес з фахівцем у світлому залі"
                      className="size-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Top-Right: Stat Card 8+ */}
                  <div className="flex flex-col justify-center rounded-[28px] lg:rounded-[32px] bg-[#edf4ff] p-7 sm:p-8 lg:p-9 text-left border border-[#e2edfd] shadow-[0_12px_32px_rgba(0,0,0,0.03)] aspect-[4/3.3] min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] xl:min-h-[300px] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(29,99,237,0.08)]">
                    <div className="mb-3 text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-black tracking-tight text-[#1d63ed] leading-none">
                      8+
                    </div>
                    <p className="text-xs sm:text-sm lg:text-base font-bold text-[#334155] leading-snug">
                      Напрямків реабілітації
                    </p>
                  </div>

                  {/* Bottom-Left: Stat Card 30+ */}
                  <div className="flex flex-col justify-center rounded-[28px] lg:rounded-[32px] bg-[#dcebfe] p-7 sm:p-8 lg:p-9 text-left border border-[#cbe0fd] shadow-[0_12px_32px_rgba(0,0,0,0.03)] aspect-[4/3.3] min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] xl:min-h-[300px] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(11,25,44,0.08)]">
                    <div className="mb-3 text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-black tracking-tight text-[#0b192c] leading-none">
                      30+
                    </div>
                    <p className="text-xs sm:text-sm lg:text-base font-bold text-[#334155] leading-snug">
                      Методів реабілітації
                    </p>
                  </div>

                  {/* Bottom-Right: Image 2 */}
                  <div className="overflow-hidden rounded-[28px] lg:rounded-[32px] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.05)] border border-slate-100/90 aspect-[4/3.3] min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] xl:min-h-[300px]">
                    <img
                      src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80"
                      alt="Медичний персонал за обладнанням"
                      className="size-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
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

        {/* 2. ГОЛОВНИЙ ПІДХІД */}
        <section className="py-16 sm:py-24 lg:py-28" aria-labelledby="state-understanding-title">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div>
                <h2
                  id="state-understanding-title"
                  className="mt-4 text-3xl font-extrabold leading-[1.14] text-navy sm:text-4xl lg:text-5xl"
                >
                  Головний підхід — персональна програма
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                  ОСНОВА не пропонує випадковий набір процедур, а формує персональну програму, яка починається з медичної та функціональної оцінки. Команда визначає стан пацієнта, його обмеження й цілі, формує послідовний план і контролює динаміку на кожному етапі. Усе необхідне — консультації, діагностика, фізична терапія та відновлювальні методи — зібрано в одному процесі.
                </p>
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => openModal("Обговорити свій випадок")}
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 sm:w-auto"
                  >
                    Обговорити свій випадок
                  </button>
                </div>
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

        {/* 3. НАПРЯМКИ РОБОТИ ТА ПРОФІЛІ */}
        <section
          className="border-y border-slate-200/70 bg-soft-blue py-16 sm:py-24 lg:py-28"
          aria-labelledby="profiles-title"
        >
          <Container>
            <SectionIntro
              title="Основні напрямки роботи"
              text="Центр допомагає пацієнтам після травм, операцій, інсультів, а також людям із хронічними захворюваннями опорно-рухового апарату, нервової та серцево-судинної систем."
              titleId="profiles-title"
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {PROFILES.map((profile, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <span className="text-sm font-bold text-navy">{profile}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 4. МЕТОДИ ВІДНОВЛЕННЯ */}
        <section className="py-16 sm:py-24 lg:py-28" aria-labelledby="methods-title">
          <Container>
            <SectionIntro
              title="Методи відновлення"
              text="ОСНОВА застосовує широкий спектр сучасних і доведених методів, які підбираються індивідуально. Усі методи застосовуються під контролем лікаря та фізичного терапевта з постійним коригуванням програми."
              titleId="methods-title"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {METHODS.map((item) => (
                <article
                  key={item.title}
                  className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-md shadow-slate-900/5 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="size-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-extrabold leading-snug text-navy">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. ОБЛАДНАННЯ ТА ДІАГНОСТИКА */}
        <section
          className="border-y border-slate-200/70 bg-slate-50/80 py-16 sm:py-24 lg:py-28"
          aria-labelledby="equipment-title"
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div>
                <SectionIntro
                  title="Сучасне обладнання"
                  text="Центр оснащений професійним обладнанням європейського та світового рівня. Це дозволяє не лише проводити ефективну терапію, а й точно оцінювати стан пацієнта до, під час і після програми."
                  titleId="equipment-title"
                />
                <ul className="mt-8 space-y-4">
                  {EQUIPMENT.map((eq, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <div className="mt-1 size-2 rounded-full bg-brand-green shrink-0" />
                      <span className="text-sm font-semibold">{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionIntro
                  title="Діагностика"
                  text="До початку будь-якої програми проводиться комплексна оцінка: КТ, МРТ, УЗД, рентген, лабораторія ходи, кардіопульмональний тест, холтерівське моніторування та нейром’язове тестування."
                  titleId="diagnostic-title"
                />
                <p className="mt-5 text-base leading-relaxed text-slate-600">
                  Результати дають об’єктивну картину і стають основою для персонального плану.
                </p>
                
                <div className="mt-10 overflow-hidden rounded-[24px] shadow-lg">
                  <img
                    src={diagnosticsSessionImg}
                    alt="Діагностика"
                    width={800}
                    height={600}
                    loading="lazy"
                    className="aspect-[4/3] size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 6. ПРОФІЛАКТИКА */}
        <section className="py-16 sm:py-24 lg:py-28" aria-labelledby="prevention-title">
          <Container>
            <div className="rounded-[32px] bg-brand-green p-8 sm:p-12 lg:p-16">
              <div className="max-w-4xl">
                <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Профілактична медицина
                </h2>
                <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
                  Окремий важливий напрямок центру — профілактика. ОСНОВА пропонує чек-апи та профілактичні програми, спрямовані на раннє виявлення ризиків і підтримку здоров’я.
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
                  Це особливо актуально для людей із підвищеним ризиком серцево-судинних захворювань, проблемами опорно-рухового апарату, а також для тих, хто хоче безпечно повертатися до фізичних навантажень або підтримувати активний спосіб життя. Профілактичні програми включають функціональну діагностику, оцінку витривалості, рекомендації щодо навантажень і спостереження динаміки.
                </p>
                <AppLink
                  to="/poslugy/check-up"
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-green shadow-md transition hover:-translate-y-0.5 hover:bg-white/90 sm:w-auto"
                >
                  Дізнатися більше про чек-апи
                </AppLink>
              </div>
            </div>
          </Container>
        </section>

        {/* 7. НАУКА ТА ОСВІТА */}
        <section
          className="border-y border-slate-200/70 bg-soft-blue py-16 sm:py-24 lg:py-28"
          aria-labelledby="education-title"
        >
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <SectionIntro
                  eyebrow="ОСВІТА ТА НАУКА"
                  title="Наукова та освітня діяльність"
                  text="ОСНОВА є клінічною базою провідних установ України. Центр бере участь у клінічних дослідженнях (зокрема EUROASPIRE VI) і проводить науково-практичні конференції. Це забезпечує постійне впровадження актуальних протоколів і високий професійний рівень команди."
                  titleId="education-title"
                />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <AppLink
                    to="/navchannia"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
                  >
                    Навчання для фахівців
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
                  Переваги розташування
                </h2>
                <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
                  Карпати та Буковель створюють унікальне середовище для відновлення: свіже повітря, спокійний ритм і можливість поєднати лікування з відпочинком. 
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                  Усі кабінети діагностики, зали терапії, басейн і зони проживання розташовані в одному комплексі — пацієнту не потрібно переміщатися між різними установами.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 12. FAQ */}
        <section
          className="border-y border-slate-200/70 bg-slate-50/80 py-16 sm:py-24 lg:py-28"
          aria-labelledby="faq-title"
        >
          <Container className="!max-w-[1120px]">
            <SectionIntro title="Поширені запитання" titleId="faq-title" />
            <div className="mt-12">
              <FAQAccordion items={FAQS} />
            </div>
          </Container>
        </section>

        {/* 13. CTA / CONTACTS */}
        <section className="bg-navy-deep py-16 sm:py-20 lg:py-24" aria-labelledby="final-cta-title">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div>
                <h2
                  id="final-cta-title"
                  className="text-3xl font-extrabold leading-tight text-white sm:text-5xl"
                >
                  ОСНОВА Реабілітація
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
                  ОСНОВА Реабілітація поєднує сучасні методи, точну діагностику, професійну команду та природне середовище Карпат, щоб допомогти пацієнту не просто пройти курс процедур, а повернути рух, витривалість і якість життя.
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

            <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-7 text-sm text-white/75 md:flex-row md:items-center md:flex-wrap md:gap-8">
              <span className="font-semibold text-white/90">
                Адреса: Івано-Франківська область, Надвірнянський р-н, с. Поляниця, участок Вишня 354/А, ТРК Буковель
              </span>
              <a
                href="tel:+380675101575"
                className="inline-flex items-center gap-2 font-bold text-white transition hover:text-brand-green"
              >
                <Phone className="size-4" /> +38 (067) 510 15 75
              </a>
              <a
                href="tel:+380674702788"
                className="inline-flex items-center gap-2 font-bold text-white transition hover:text-brand-green"
              >
                <Phone className="size-4" /> +380 674 702 788
              </a>
              <a
                href="mailto:osnova.rehabilitation@gmail.com"
                className="font-bold text-white transition hover:text-brand-green"
              >
                osnova.rehabilitation@gmail.com
              </a>
              <a
                href="mailto:info@osnova-rehab.com.ua"
                className="font-bold text-white transition hover:text-brand-green"
              >
                info@osnova-rehab.com.ua
              </a>
            </div>
            
            <div className="mt-4 text-sm text-white/75 font-semibold flex flex-wrap gap-4">
               Соцмережі: 
               <a href="https://instagram.com/osnova.rehab.bukovel" target="_blank" rel="noreferrer" className="text-white hover:text-brand-green transition">Instagram @osnova.rehab.bukovel</a>,
               <a href="https://facebook.com/OsnovaRehab" target="_blank" rel="noreferrer" className="text-white hover:text-brand-green transition">Facebook @Osnova Rehab</a>,
               <span className="text-white">TikTok і YouTube @osnova_rehabilitation</span>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
