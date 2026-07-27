import { AppLink } from "@/components/app-link";
import { Breadcrumbs, PageContainer } from "@/components/blocks";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACTS, IMAGES } from "@/data/site-tree";
import type { SiteNode } from "@/data/types";
import { getBreadcrumbs } from "@/lib/tree";
import {
  Activity,
  ArrowRight,
  Check,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Handshake,
  HeartPulse,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const DOCTOR_AUDIENCES = [
  {
    title: "Кардіологи",
    text: "Кардіореабілітація, навантажувальні тести, контроль витривалості та супровід після серцево-судинних подій.",
    icon: HeartPulse,
  },
  {
    title: "Ортопеди та травматологи",
    text: "Відновлення після операцій, травм, ендопротезування, переломів і тривалих обмежень руху.",
    icon: Activity,
  },
  {
    title: "Неврологи та ревматологи",
    text: "Поступове повернення функції, робота з болем, рухливістю, координацією та щоденною активністю.",
    icon: Stethoscope,
  },
  {
    title: "Сімейні лікарі та спортивні лікарі",
    text: "Профілактичні чекапи, спортивна адаптація, оцінка ризиків і маршрутизація пацієнтів.",
    icon: Users,
  },
];

const COOPERATION_FORMATS = [
  {
    title: "Направлення пацієнта",
    text: "Приймаємо пацієнта на діагностику або реабілітацію за вашим клінічним запитом і передаємо зрозумілий результат.",
    icon: Send,
  },
  {
    title: "Спільне ведення",
    text: "Узгоджуємо цілі програми, контролюємо динаміку та повертаємо пацієнта до вас із підсумковими рекомендаціями.",
    icon: Handshake,
  },
  {
    title: "Діагностичний хаб",
    text: "Проводимо функціональні обстеження, ЕКГ, Холтер, ДМАТ, CPET та інші дослідження для прийняття рішень.",
    icon: ClipboardCheck,
  },
  {
    title: "Освіта та події",
    text: "Запрошуємо лікарів до курсів, конференцій, стажувань і професійного обміну в межах платформи ОСНОВА.",
    icon: GraduationCap,
  },
];

const REFERRAL_STEPS = [
  "Ви передаєте клінічний запит, виписку або результати попередніх обстежень.",
  "Команда ОСНОВИ проводить первинну оцінку, уточнює обмеження та цілі відновлення.",
  "Пацієнт проходить діагностику, реабілітацію або комбіновану програму під наглядом фахівців.",
  "Ви отримуєте підсумковий висновок, динаміку та рекомендації для подальшого ведення.",
];

const DOCTOR_RECEIVES = [
  "Структурований медичний висновок після діагностики або курсу реабілітації.",
  "Опис функціонального стану пацієнта до та після програми.",
  "Рекомендації щодо навантажень, домашньої активності та подальшого контролю.",
  "Комунікацію з командою центру за потреби уточнення клінічних деталей.",
];

const TRUST_POINTS = [
  "Працюємо в межах призначень і поважаємо роль лікаря, який веде пацієнта.",
  "Не замінюємо основне лікування, а підсилюємо його діагностикою та відновленням.",
  "Фіксуємо стартовий стан, цілі, динаміку та підсумковий результат програми.",
];

function SectionHeader({
  eyebrow,
  title,
  text,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-extrabold leading-[1.15] text-navy md:text-5xl">{title}</h2>
      <div
        className={`mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-brand-green ${
          centered ? "mx-auto" : ""
        }`}
      />
      {text && (
        <p
          className={`mt-6 text-base leading-relaxed text-navy/75 md:text-lg ${centered ? "mx-auto max-w-3xl" : "max-w-3xl"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export function DoctorPartnershipPage({ node }: { node: SiteNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-navy-deep">
          <img
            src={IMAGES.ecgImg}
            alt="Співпраця ОСНОВИ з лікарями"
            width={1400}
            height={900}
            className="absolute inset-0 size-full object-cover object-right opacity-45 mix-blend-luminosity lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20" />
          <div className="relative mx-auto grid max-w-[1600px] gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-32">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/70 sm:text-sm">
                ПАРТНЕРСТВО ДЛЯ ЛІКАРІВ
              </p>
              <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.08] text-background sm:text-5xl md:text-6xl lg:text-7xl">
                Співпраця з лікарями
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/84 sm:text-lg">
                ОСНОВА працює як продовження вашого лікувального плану: приймаємо пацієнтів на
                діагностику, реабілітацію та контрольований супровід, а лікар отримує зрозумілий
                висновок і зворотний зв'язок.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <AppLink
                  to="/kontakty"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-green px-7 py-4 text-sm font-bold tracking-wide text-brand-green-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-brand-green/90 sm:w-auto sm:px-9 sm:py-5 sm:text-base"
                >
                  Обговорити співпрацю <ArrowRight className="size-5" />
                </AppLink>
                <a
                  href={CONTACTS.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-background/35 bg-background/5 px-7 py-4 text-sm font-bold tracking-wide text-background backdrop-blur-sm transition-colors hover:bg-background/10 sm:w-auto sm:px-9 sm:py-5 sm:text-base"
                >
                  <Phone className="size-5" />
                  {CONTACTS.phone}
                </a>
              </div>
            </div>

            <div className="grid content-end gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["Формат", "Направлення та спільне ведення"],
                ["Фокус", "Діагностика, реабілітація, контроль динаміки"],
                ["Результат", "Висновок і рекомендації для лікаря"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur-md"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-background/55">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-snug text-background sm:text-base">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageContainer className="py-6">
          <Breadcrumbs items={getBreadcrumbs(node)} />
        </PageContainer>

        <section className="bg-background py-16 md:py-24">
          <PageContainer>
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={IMAGES.cpetImg}
                  alt="Функціональна діагностика для пацієнтів лікарів-партнерів"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>
              <div>
                <SectionHeader
                  eyebrow="КОЛИ НАПРАВЛЯТИ"
                  title="Клінічна підтримка там, де потрібен контрольований наступний крок"
                  text="Сторінка створена для лікарів, які хочуть швидко зорієнтувати пацієнта в діагностиці, реабілітації або безпечному поверненні до активності."
                />
                <div className="mt-8 grid gap-3">
                  {TRUST_POINTS.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-4 border-b border-border py-4 last:border-0"
                    >
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green">
                        <Check className="size-4 text-brand-green-foreground" />
                      </span>
                      <p className="text-sm leading-relaxed text-navy/90 sm:text-base">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="border-y border-slate-200/70 bg-slate-50/90 py-16 md:py-24">
          <PageContainer>
            <SectionHeader
              centered
              eyebrow="ДЛЯ КОГО"
              title="Працюємо з лікарями різних спеціальностей"
              text="Команда центру підключається тоді, коли пацієнту потрібна точна оцінка стану, дозоване навантаження або реабілітаційна програма."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {DOCTOR_AUDIENCES.map((item) => (
                <article
                  key={item.title}
                  className="group flex h-full flex-col rounded-[24px] border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"
                >
                  <div className="mb-7 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <item.icon className="size-7" />
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-navy">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </PageContainer>
        </section>

        <section className="bg-white py-16 md:py-24">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div>
                <SectionHeader
                  eyebrow="ФОРМАТИ"
                  title="Як може виглядати співпраця"
                  text="Ми підлаштовуємо формат під клінічний запит: від одноразового обстеження до повного курсу відновлення з проміжним контролем."
                />
                <AppLink
                  to="/kontakty"
                  className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold tracking-wide text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90 sm:w-auto"
                >
                  Зв'язатися з координатором <MessageSquare className="size-5" />
                </AppLink>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {COOPERATION_FORMATS.map((item) => (
                  <article
                    key={item.title}
                    className="group rounded-[24px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg"
                  >
                    <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <item.icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/70">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="bg-soft-blue py-16 md:py-24">
          <PageContainer>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <SectionHeader
                  eyebrow="МАРШРУТ ПАЦІЄНТА"
                  title="Простий процес направлення"
                  text="Лікар зберігає контроль над медичною логікою, а ОСНОВА бере на себе діагностичну та реабілітаційну частину маршруту."
                />
                <div className="mt-10 space-y-4">
                  {REFERRAL_STEPS.map((step, index) => (
                    <div key={step} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-extrabold text-white">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-navy/85 sm:text-base">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={IMAGES.rehabImg}
                  alt="Реабілітаційна програма після направлення лікаря"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full min-h-[360px] w-full object-cover"
                />
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="bg-background py-16 md:py-24">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
                <SectionHeader
                  eyebrow="ЩО ОТРИМУЄ ЛІКАР"
                  title="Прозорий результат після роботи з пацієнтом"
                />
                <ul className="mt-8">
                  {DOCTOR_RECEIVES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 border-b border-border py-4 last:border-0"
                    >
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green">
                        <Check className="size-4 text-brand-green-foreground" />
                      </span>
                      <span className="text-sm leading-relaxed text-navy/90 sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between rounded-3xl bg-navy-deep p-6 text-background shadow-lg sm:p-8 lg:p-10">
                <div>
                  <div className="mb-7 flex size-14 items-center justify-center rounded-2xl bg-white/10 text-brand-green">
                    <FileText className="size-7" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-background/55">
                    Документація
                  </p>
                  <h3 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                    Висновок, який зручно використати в подальшому веденні
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-background/72 sm:text-base">
                    Ми формуємо рекомендації людською мовою: що зроблено, яка динаміка, які
                    обмеження залишаються та що варто контролювати після програми.
                  </p>
                </div>
                <div className="mt-10 rounded-2xl border border-white/10 bg-white/8 p-5">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="mt-1 size-6 shrink-0 text-brand-green" />
                    <p className="text-sm leading-relaxed text-background/80">
                      Усі рішення щодо лікування та довгострокової тактики залишаються за лікарем,
                      який веде пацієнта.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="bg-slate-50/90 py-16 md:py-24">
          <PageContainer>
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={IMAGES.sportsImg}
                  alt="Освітня та практична співпраця для лікарів"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>
              <div>
                <SectionHeader
                  eyebrow="ОСВІТА"
                  title="Професійний обмін, курси та конференції"
                  text="Для лікарів і фахівців доступні освітні формати ОСНОВИ: практичні курси, конференції, стажування та спільні клінічні обговорення."
                />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <AppLink
                    to="/kursy"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    Курси <ArrowRight className="size-4" />
                  </AppLink>
                  <AppLink
                    to="/konferentsii"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy/20 bg-white px-7 py-4 text-sm font-bold text-navy transition-all hover:border-primary hover:text-primary"
                  >
                    Конференції <ArrowRight className="size-4" />
                  </AppLink>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        <section className="bg-soft-blue py-16 md:py-24">
          <PageContainer>
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                ПОЧАТИ СПІВПРАЦЮ
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy md:text-5xl">
                Направте пацієнта або обговоріть партнерський формат
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-navy/75 md:text-lg">
                Залиште запит, і координатор ОСНОВИ допоможе підібрати правильний маршрут:
                діагностику, реабілітацію, чекап або освітній формат для вашої команди.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <AppLink
                  to="/kontakty"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-9 py-4 text-base font-bold text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90 sm:w-auto"
                >
                  Залишити запит <ArrowRight className="size-5" />
                </AppLink>
                <a
                  href={CONTACTS.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-navy px-9 py-4 text-base font-bold text-navy transition-all hover:bg-navy hover:text-white sm:w-auto"
                >
                  <Phone className="size-5" />
                  {CONTACTS.phone}
                </a>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
