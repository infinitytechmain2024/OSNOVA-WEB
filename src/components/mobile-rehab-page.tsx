import { AppLink } from "@/components/app-link";
import { FAQAccordion } from "@/components/blocks";
import { OtherServices } from "@/components/other-services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACTS } from "@/data/site-tree";
import type { SiteNode } from "@/data/types";
import cpetImg from "@/assets/cpet-test.jpg";
import ergoImg from "@/assets/ergometer.jpg";
import rehabImg from "@/assets/service-rehab.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import {
  Ambulance,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  HeartPulse,
  Home,
  MapPinned,
  PhoneCall,
  Route as RouteIcon,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";

const QUICK_FACTS = [
  { label: "Формат", value: "вдома, у готелі або за місцем перебування" },
  { label: "Команда", value: "лікар, фізичний терапевт, профільні спеціалісти" },
  { label: "План", value: "програма після первинної оцінки стану" },
];

const FORMATS = [
  {
    icon: Home,
    title: "Реабілітація вдома",
    text: "Курс занять для пацієнтів, яким складно або небажано регулярно приїжджати до центру.",
  },
  {
    icon: Stethoscope,
    title: "Виїзд спеціаліста",
    text: "Окрема консультація, функціональна оцінка або заняття з фізичним терапевтом.",
  },
  {
    icon: Ambulance,
    title: "Виїзд з обладнанням",
    text: "Заняття з портативним реабілітаційним обладнанням для безпечного відновлення.",
  },
];

const INDICATIONS = [
  "відновлення після травм, переломів або ортопедичних операцій",
  "стан після інсульту, неврологічних порушень або тривалої іммобілізації",
  "кардіологічна реабілітація після погодження з лікарем",
  "біль у спині, обмеження рухливості, слабкість або порушення ходи",
  "потреба продовжити програму після стаціонарного чи амбулаторного курсу",
];

const STEPS = [
  {
    title: "Заявка та медичні дані",
    text: "Адміністратор уточнює адресу, стан пацієнта, попередні висновки та бажаний формат виїзду.",
  },
  {
    title: "Первинна оцінка",
    text: "Спеціаліст оцінює рухливість, силу, переносимість навантаження та побутові потреби пацієнта.",
  },
  {
    title: "Індивідуальна програма",
    text: "Команда формує план занять, процедур, домашніх рекомендацій і контрольних точок.",
  },
  {
    title: "Курс і контроль динаміки",
    text: "Фахівець веде заняття на місці, відстежує самопочуття та коригує навантаження.",
  },
];

const PACKAGES = [
  {
    title: "Разовий виїзд",
    price: "від 1 500 грн",
    details: "консультація або одне заняття",
  },
  {
    title: "Курс вдома",
    price: "від 2 500 грн / день",
    details: "програма занять за місцем перебування",
  },
  {
    title: "Виїзд з обладнанням",
    price: "від 3 000 грн / день",
    details: "заняття з портативним обладнанням центру",
  },
];

const SAFETY_POINTS = [
  "перед початком фахівець перевіряє показання та можливі обмеження",
  "навантаження дозується за самопочуттям, пульсом, тиском і функціональним станом",
  "при гострих симптомах плановий виїзд відкладається, а пацієнту радять невідкладну допомогу",
];

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight text-navy md:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-navy/75 md:text-lg">{text}</p>
      )}
    </div>
  );
}

export function MobileRehabPage({ node }: { node: SiteNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative min-h-[620px] overflow-hidden bg-navy-deep">
          <img
            src={rehabImg}
            alt={node.title}
            className="absolute inset-0 size-full object-cover object-center opacity-45"
            width={1600}
            height={1067}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy-deep/20" />
          <div className="relative mx-auto grid min-h-[620px] max-w-[1600px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                <MapPinned className="size-4 text-brand-green" />
                Спеціалісти OSNOVA приїжджають до пацієнта
              </p>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Виїзна реабілітація
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/82 md:text-xl">
                Допомагаємо відновлювати рух, силу та самостійність там, де пацієнту безпечніше й
                зручніше проходити програму: вдома, у готелі або за місцем перебування.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <AppLink
                  to="/kontakty"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-brand-green px-7 py-4 text-sm font-bold uppercase tracking-wide text-brand-green-foreground shadow-lg transition-all hover:bg-brand-green/90 hover:scale-[1.02]"
                >
                  Замовити виїзд <ArrowRight className="size-5" />
                </AppLink>
                <a
                  href={CONTACTS.phoneHref}
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/35 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition-colors hover:bg-white/18"
                >
                  <PhoneCall className="size-5" />
                  {CONTACTS.phone}
                </a>
              </div>
            </div>

            <div className="hidden gap-3 rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur-xl lg:grid lg:grid-cols-1 xl:grid-cols-3">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label} className="rounded-lg bg-white/12 p-4 ring-1 ring-white/10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-green">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-white">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-5 sm:px-6 lg:hidden">
          <div className="grid gap-3">
            {QUICK_FACTS.map((fact) => (
              <div key={fact.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug text-navy">{fact.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-18 md:py-24">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <SectionIntro
              eyebrow="Формати"
              title="Реабілітаційна команда працює навколо пацієнта, а не навпаки"
              text="Формат виїзду підбирається після короткого медичного уточнення: важливо зрозуміти стан, цілі, безпеку навантаження та умови, у яких проходитиме програма."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {FORMATS.map((format) => (
                <article
                  key={format.title}
                  className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <format.icon className="size-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-navy">{format.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{format.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-soft-blue py-18 md:py-24">
          <div className="mx-auto grid max-w-[1600px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <SectionIntro
                eyebrow="Коли доречно"
                title="Виїзний формат потрібен, коли дорога до центру ускладнює відновлення"
              />
              <div className="mt-8 overflow-hidden rounded-lg">
                <img
                  src={sportsImg}
                  alt="Фізична терапія та відновлення"
                  className="h-[320px] w-full object-cover md:h-[420px]"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid content-start gap-3">
              {INDICATIONS.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-brand-green" />
                  <p className="text-base leading-relaxed text-navy/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-18 md:py-24">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionIntro
                eyebrow="Процес"
                title="Курс має зрозумілу послідовність від заявки до рекомендацій"
                text="Мета виїзної програми — не просто провести заняття, а побудувати безпечний темп відновлення з вимірюваною динамікою."
              />

              <div className="grid gap-4">
                {STEPS.map((step, index) => (
                  <article
                    key={step.title}
                    className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[72px_1fr]"
                  >
                    <div className="flex size-14 items-center justify-center rounded-lg bg-navy text-lg font-extrabold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-navy">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-slate-50 py-18 md:py-24">
          <div className="mx-auto grid max-w-[1600px] gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <div>
              <SectionIntro
                eyebrow="Пакети"
                title="Можна замовити разовий виїзд або курс з регулярним супроводом"
                text="Фінальна вартість залежить від адреси, тривалості, складу команди, необхідного обладнання та кількості занять у програмі."
              />

              <div className="mt-9 grid gap-4">
                {PACKAGES.map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center"
                  >
                    <div>
                      <h3 className="text-lg font-extrabold text-navy">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{item.details}</p>
                    </div>
                    <p className="text-xl font-extrabold text-primary">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={ergoImg}
                  alt="Реабілітаційне обладнання"
                  className="h-[300px] w-full object-cover md:h-[360px]"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg bg-navy p-6 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-7 text-brand-green" />
                  <h3 className="text-xl font-extrabold">Безпека передусім</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {SAFETY_POINTS.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-white/82">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-green" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-18 md:py-24">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-5 md:grid-cols-4">
              {[
                {
                  icon: ClipboardCheck,
                  label: "медичний план",
                  value: "індивідуальні цілі та обмеження",
                },
                { icon: Clock, label: "графік", value: "частота занять за програмою" },
                { icon: RouteIcon, label: "логістика", value: "виїзд за погодженою адресою" },
                {
                  icon: UserRoundCheck,
                  label: "результат",
                  value: "рекомендації для продовження вдома",
                },
              ].map((item) => (
                <article
                  key={item.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-5"
                >
                  <item.icon className="size-7 text-primary" />
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 font-semibold leading-snug text-navy">{item.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy-deep py-18 md:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-8 px-4 text-white sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">Запис</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
                Підберемо формат виїзної реабілітації під стан пацієнта
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
                Залиште заявку або зателефонуйте: адміністратор уточнить деталі, а медична команда
                підкаже безпечний наступний крок.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <AppLink
                to="/kontakty"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-brand-green px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-green-foreground shadow-lg transition-all hover:bg-brand-green/90 hover:scale-[1.02]"
              >
                Залишити заявку <ArrowRight className="size-5" />
              </AppLink>
              <a
                href={CONTACTS.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                <HeartPulse className="size-5" />
                {CONTACTS.phone}
              </a>
            </div>
          </div>
        </section>

        {node.faq && node.faq.length > 0 && (
          <section className="mx-auto max-w-[1400px] px-4 py-18 sm:px-6 md:py-24 lg:px-10">
            <SectionIntro eyebrow="FAQ" title="Поширені питання про виїзну реабілітацію" />
            <FAQAccordion items={node.faq} />
          </section>
        )}

        <OtherServices />
      </main>

      <SiteFooter />
    </div>
  );
}
