import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Phone, Send, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import ergoImg from "@/assets/ergometer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Кардіологічна діагностика — OSNOVA Реабілітація, Буковель" },
      {
        name: "description",
        content:
          "Комплексна оцінка роботи серця: ЕКГ, Холтер, ДМАТ, кардіопульмональний тест, спірографія. Медичний висновок і персональні рекомендації.",
      },
      { property: "og:title", content: "Кардіологічна діагностика — OSNOVA Реабілітація" },
      {
        property: "og:description",
        content:
          "Оцінка серця, ритму, тиску та переносимості навантажень. Ціни, методи та запис на діагностику в Буковелі.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const AFTER_EVENTS = [
  "Після інфаркту міокарда",
  "Після стентування коронарних артерій",
  "Після аортокоронарного шунтування",
  "Після операцій на клапанах серця",
  "Після встановлення кардіостимулятора",
  "Після перенесених порушень серцевого ритму",
];

const POSTPONE_LEFT = [
  "При гострому або раптовому болю у грудній клітці",
  "При підозрі на гострий коронарний синдром",
  "Після нещодавнього інфаркту або інсульту без дозволу лікаря",
  "При неконтрольованій артеріальній гіпертензії",
  "При неконтрольованих порушеннях серцевого ритму",
];

const POSTPONE_RIGHT = [
  "При гострому інфекційному захворюванні",
  "При підвищеній температурі тіла",
  "При декомпенсованій серцевій недостатності",
  "При загостренні тяжких супутніх захворювань",
];

const METHODS = [
  { title: "ЕКГ", text: "Базова оцінка електричної активності серця, ритму та провідності." },
  {
    title: "Холтер ЕКГ",
    text: "Добове або триваліше моніторування серцевого ритму в умовах звичайної активності.",
  },
  { title: "ДМАТ", text: "Добове моніторування артеріального тиску протягом дня і ночі." },
  {
    title: "Кардіопульмональний тест (CPET)",
    text: "Оцінка роботи серця, легень і витривалості під час фізичного навантаження.",
  },
  { title: "Спірографія", text: "Оцінка функції дихання та стану серцево-легеневої системи." },
  {
    title: "Лабораторно-інструментальна діагностика",
    text: "Додаткові обстеження за показаннями: аналізи, ЕхоКГ, УЗД судин та інші методи.",
  },
];

const RESULTS = [
  "Оцінка реального стану серця та судин",
  "Виявлення прихованих порушень серцевого ритму",
  "Виявлення підвищеного або нестабільного артеріального тиску",
  "Оцінка фізичної витривалості та переносимості навантажень",
  "Визначення безпечної пульсової зони для тренувань",
  "Контроль стану після серцево-судинних захворювань або втручань",
  "Підбір подальшої тактики профілактики, лікування або реабілітації",
  "Персональні рекомендації щодо способу життя, харчування та фізичної активності",
];

const PRICES = [
  { name: "ЕКГ (електрокардіограма)", time: "15 хв", price: "600 грн" },
  { name: "Кардіопульмональний тест (CPET)", time: "90 хв", price: "2000 грн" },
  { name: "Велоергометрія / Тредміл-тест", time: "60 хв", price: "1200 грн" },
  { name: "Добове моніторування ЕКГ (по Холтеру)", time: "1 доба", price: "1200 грн" },
  { name: "ДМАТ (добове моніторування АТ)", time: "1 доба", price: "600 грн" },
  { name: "Спірографія", time: "20 хв", price: "500 грн" },
  { name: "ЕхоКГ (ехокардіографія)", time: "30 хв", price: "800 грн" },
  { name: "Лабораторні аналізи", time: "—", price: "За запитом" },
];

const OTHER_PRICES = [
  "УЗД судин",
  "МРТ серця",
  "Розширені лабораторні панелі",
  "Консультація кардіолога",
  "Аналіз результатів попередніх обстежень",
];

const SIGNS = [
  "болю або дискомфорті у грудях",
  "задишці при звичному навантаженні",
  "перебоях у роботі серця або прискореному серцебитті",
  "запамороченні та епізодах втрати свідомості",
  "підвищеному або нестабільному артеріальному тиску",
  "швидкій втомлюваності та зниженні витривалості",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-3xl leading-tight font-bold text-navy md:text-4xl">{children}</h2>
      <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
    </>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* 1 — Hero */}
        <section className="relative overflow-hidden bg-navy-deep">
          <img
            src={cpetImg}
            alt="Кардіологічна діагностика: пацієнт на велоергометрі під наглядом лікаря"
            width={1200}
            height={800}
            className="absolute inset-0 size-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/10" />
          <div className="relative mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
            <p className="text-sm font-semibold tracking-[0.28em] text-primary-foreground/70">
              КОМПЛЕКСНА ОЦІНКА РОБОТИ СЕРЦЯ
            </p>
            <h1 className="mt-6 max-w-2xl text-5xl leading-[1.05] font-extrabold text-background md:text-7xl">
              Кардіологічна діагностика
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-background/85">
              Оцініть роботу <strong className="font-bold">серця</strong>, ритм, артеріальний тиск і
              переносимість фізичних навантажень. Отримайте медичний висновок, оцінку ризиків і
              персональні рекомендації щодо подальших дій.
            </p>
            <button className="mt-10 rounded-lg bg-brand-green px-9 py-5 text-base font-bold tracking-wide text-brand-green-foreground transition-opacity hover:opacity-90">
              ЗАПИСАТИСЯ НА ДІАГНОСТИКУ
            </button>
          </div>
        </section>

        {/* 2 — Коли рекомендовано */}
        <section className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle>Коли рекомендовано пройти кардіодіагностику</SectionTitle>
              <p className="mt-10 text-lg font-bold text-navy">
                Після серцево-судинних подій, операцій і втручань
              </p>
              <ul className="mt-6 space-y-3">
                {AFTER_EVENTS.map((item) => (
                  <li key={item} className="flex gap-3 text-navy/90">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-10 inline-flex items-center gap-6 rounded-xl bg-secondary px-8 py-5 text-sm font-bold tracking-wide text-navy transition-colors hover:bg-accent">
                ДЕТАЛЬНІШЕ <ArrowRight className="size-5" />
              </button>
            </div>
            <img
              src={cpetImg}
              alt="Навантажувальний тест на велоергометрі"
              width={1200}
              height={800}
              loading="lazy"
              className="h-full max-h-[440px] w-full rounded-xl object-cover"
            />
          </div>
        </section>

        {/* 3 — Коли відкласти */}
        <section className="mx-auto max-w-[1600px] px-6 pb-16 lg:px-10">
          <div className="rounded-3xl border border-border p-8 md:p-12">
            <SectionTitle>
              Коли планову діагностику або навантажувальні тести потрібно відкласти?
            </SectionTitle>
            <p className="mt-10 text-lg font-bold text-navy">
              Планову кардіодіагностику або навантажувальні тести слід відкласти:
            </p>
            <div className="mt-6 grid gap-x-16 gap-y-4 md:grid-cols-2">
              {[...POSTPONE_LEFT, ...POSTPONE_RIGHT].map((item) => (
                <p key={item} className="text-navy/90">
                  <span className="mr-2 text-muted-foreground">–</span>
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-10 rounded-xl border border-destructive/25 bg-destructive/8 p-6">
              <p className="font-bold text-navy">Коли потрібна невідкладна медична допомога</p>
              <p className="mt-2 text-navy/90">
                При гострому болю у грудях, раптовій вираженій задишці, втраті свідомості або
                різкому погіршенні самопочуття необхідно звернутися по невідкладну медичну допомогу.
              </p>
            </div>
          </div>
        </section>

        {/* 4 — Як часто */}
        <section className="mx-auto max-w-[1600px] px-6 pb-16 lg:px-10">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle>Як часто проходити кардіодіагностику?</SectionTitle>
              <p className="mt-10 text-navy/90">
                Періодичність обстежень визначає лікар з урахуванням віку, скарг, факторів ризику,
                наявних захворювань і результатів попередньої діагностики.
              </p>
              <p className="mt-6 text-navy/90">
                Після інфаркту, стентування, операцій на серці або перед початком реабілітації
                графік контрольних обстежень формується індивідуально.
              </p>
              <button className="mt-10 inline-flex items-center gap-6 rounded-xl bg-secondary px-8 py-5 text-sm font-bold tracking-wide text-navy transition-colors hover:bg-accent">
                ДЕТАЛЬНІШЕ <ArrowRight className="size-5" />
              </button>
            </div>
            <img
              src={ecgImg}
              alt="Лікар аналізує результати ЕКГ"
              width={1200}
              height={800}
              loading="lazy"
              className="h-full max-h-[440px] w-full rounded-xl object-cover"
            />
          </div>
        </section>

        {/* 5 — Методи */}
        <section className="bg-soft-blue py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <h2 className="text-center text-3xl leading-tight font-bold text-navy md:text-4xl">
              Які методи кардіодіагностики
              <br />
              ми використовуємо
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {METHODS.map((m) => (
                <article key={m.title} className="rounded-xl bg-card p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-primary">{m.title}</h3>
                  <div className="mt-4 h-0.5 w-10 bg-primary/60" />
                  <p className="mt-5 text-navy/85">{m.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-xl bg-secondary/60 p-6 pl-8 [border-left:4px_solid_var(--color-primary)]">
              <p className="font-semibold text-navy">
                Програму кардіодіагностики лікар формує індивідуально з урахуванням скарг, факторів
                ризику та цілей обстеження.
              </p>
            </div>
          </div>
        </section>

        {/* 6 — Результати */}
        <section className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl leading-tight font-bold text-navy md:text-4xl">
                Результати кардіодіагностики
              </h2>
              <ul className="mt-10">
                {RESULTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-border py-4 last:border-0"
                  >
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green">
                      <Check className="size-4 text-brand-green-foreground" />
                    </span>
                    <span className="text-navy/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={ergoImg}
              alt="Рука на кермі велоергометра"
              width={1200}
              height={1000}
              loading="lazy"
              className="h-full max-h-[640px] w-full rounded-xl object-cover"
            />
          </div>
        </section>

        {/* 7 — Ціни */}
        <section className="mx-auto max-w-[1600px] px-6 pb-16 lg:px-10">
          <div className="section-shell">
            <h2 className="text-center text-4xl font-extrabold text-navy md:text-5xl">
              Ціни та послуги
            </h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-sm font-bold tracking-[0.08em] text-primary">
                  ДІАГНОСТИКА В OSNOVA
                </h3>
                <ul className="mt-6">
                  {PRICES.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-center gap-4 border-b border-border py-4 last:border-0"
                    >
                      <span className="flex-1 text-navy">{p.name}</span>
                      <span className="text-sm text-muted-foreground">{p.time}</span>
                      <span className="w-28 text-right font-bold text-navy">{p.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-sm font-bold tracking-[0.08em] text-primary">
                  ІНШІ ДІАГНОСТИЧНІ ПОСЛУГИ
                </h3>
                <ul className="mt-6">
                  {OTHER_PRICES.map((p) => (
                    <li
                      key={p}
                      className="flex items-center justify-between gap-4 border-b border-border py-6 last:border-0"
                    >
                      <span className="text-navy">{p}</span>
                      <span className="font-semibold text-navy">За запитом</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center gap-8 rounded-xl bg-secondary/50 p-8 lg:flex-row">
              <p className="flex-1 pl-6 text-navy/90 [border-left:4px_solid_var(--color-primary)]">
                Програма кардіодіагностики та перелік обстежень формуються індивідуально з
                урахуванням скарг, фізичного стану, факторів ризику, супутніх захворювань і цілей
                пацієнта.
              </p>
              <button className="rounded-lg bg-primary px-12 py-5 text-base font-bold tracking-wide text-primary-foreground transition-opacity hover:opacity-90">
                ЗАМОВИТИ ПОСЛУГУ
              </button>
            </div>
          </div>
        </section>

        {/* 8 — CTA */}
        <section className="relative mx-auto max-w-[1600px] px-6 pb-16 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl bg-soft-blue px-6 py-24 text-center">
            <h2 className="text-4xl font-extrabold tracking-wide text-navy md:text-5xl">
              ПЕРЕВІРТЕ СЕРЦЕ
              <br />
              ВЖЕ ЗАРАЗ
            </h2>
            <div className="mx-auto mt-8 h-0.5 w-20 bg-primary/50" />
            <p className="mx-auto mt-8 max-w-3xl text-lg text-navy/85">
              Не відкладайте кардіодіагностику — своєчасне обстеження допомагає виявити ризики,
              оцінити роботу серця та підібрати правильну тактику лікування або профілактики. Чим
              раніше пройти діагностику — тим більше можливостей попередити ускладнення.
            </p>
            <button className="mt-12 rounded-full bg-primary px-14 py-6 text-lg font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90">
              Записатися на консультацію
            </button>
            <div className="mx-auto mt-12 h-px w-full max-w-2xl bg-border" />
            <a
              href="tel:+380674702788"
              className="mt-10 inline-flex items-center gap-3 text-2xl font-bold text-primary"
            >
              <Phone className="size-6" /> +380 674 702 788
            </a>

            <div className="absolute top-1/2 right-6 hidden -translate-y-1/2 flex-col gap-4 md:flex">
              {[Phone, Send, MapPin].map((Icon, i) => (
                <span
                  key={i}
                  className="flex size-12 items-center justify-center rounded-full bg-primary/25 text-primary"
                >
                  <Icon className="size-5" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 9 — Коли варто пройти обстеження серця */}
        <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10">
          <h2 className="text-4xl font-extrabold text-navy md:text-5xl">
            Коли варто пройти обстеження серця
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-navy/85">
            Серцево-судинні захворювання часто розвиваються поступово та тривалий час можуть не
            проявлятися вираженими симптомами. Саме тому важливо вчасно реагувати навіть на незначні
            зміни самопочуття та регулярно проходити обстеження серця. Своєчасне звернення до
            спеціаліста і повне обстеження серця допомагає виявити порушення на ранніх стадіях та
            запобігти розвитку серйозних ускладнень.
          </p>
          <p className="mt-8 font-bold text-navy">
            Звернутися до лікаря та провести обстеження серця варто при:
          </p>
          <ul className="mt-6 space-y-3">
            {SIGNS.map((s) => (
              <li key={s} className="flex gap-3 text-navy/90">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                {s};
              </li>
            ))}
          </ul>
          <button className="mt-10 rounded-lg bg-primary px-10 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Детальніше
          </button>
        </section>
      </main>
    </div>
  );
}
