import type { ServicePageContent, SiteNode } from "./types";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import ergoImg from "@/assets/ergometer.jpg";
import rehabImg from "@/assets/service-rehab.jpg";
import checkupImg from "@/assets/service-checkup.jpg";
import sportsImg from "@/assets/service-sports.jpg";

export type ResolvedServicePageData = {
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  heroButtonLabel: string;
  heroImage: string;

  introTitle: string;
  introBody: string;
  introImage: string;

  recommendedTitle: string;
  recommendedSubtitle: string;
  recommendedItems: string[];
  recommendedImage: string;

  postponeTitle: string;
  postponeIntro: string;
  postponeLeft: string[];
  postponeRight: string[];
  emergencyTitle: string;
  emergencyBody: string;

  frequencyTitle: string;
  frequencyParagraphs: string[];
  frequencyImage: string;

  methodSectionTitle: string;
  methodCards: { title: string; text: string }[];
  methodNote: string;

  resultsTitle: string;
  resultsItems: string[];
  resultsImage: string;

  priceSectionTitle: string;
  pricePrimaryTitle: string;
  priceSecondaryTitle: string;
  pricePrimary: { name: string; time?: string; price: string }[];
  priceSecondary: { name: string; price?: string }[];
  priceFooterText: string;
  priceFooterButton: string;

  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;

  signsTitle: string;
  signsIntro: string;
  signsListIntro: string;
  signsItems: string[];
};

export function getServicePageData(node: SiteNode): ResolvedServicePageData {
  const custom = node.pageContent || {};
  const isCardio =
    node.id.includes("cardio") ||
    node.slug.includes("kardio") ||
    node.title.toLowerCase().includes("кардіо");

  const isRehab =
    node.type === "category" && node.id === "rehab" ||
    node.parentId === "rehab" ||
    node.route.startsWith("/reabilitatsiia");

  const isDiag =
    node.type === "category" && node.id === "diag" ||
    node.parentId === "diag" ||
    node.route.startsWith("/diagnostyka");

  const isCheckup =
    node.type === "checkup" ||
    node.id === "checkup" ||
    node.route.startsWith("/check-up");

  const heroImage = node.image || (isCardio ? cpetImg : isCheckup ? checkupImg : isRehab ? rehabImg : sportsImg);
  const secondaryImage = custom.secondaryImage || (isCardio ? ecgImg : isRehab ? rehabImg : checkupImg);
  const tertiaryImage = custom.tertiaryImage || (isCardio ? ergoImg : sportsImg);

  // Indications / Recommended
  const defaultIndications = node.indications?.length
    ? node.indications
    : isCardio
    ? [
        "Після інфаркту міокарда",
        "Після стентування коронарних артерій",
        "Після аортокоронарного шунтування",
        "Після операцій на клапанах серця",
        "Після встановлення кардіостимулятора",
        "Після перенесених порушень серцевого ритму",
      ]
    : isRehab
    ? [
        "Після травм, переломів та хірургічних втручань",
        "При обмеженні рухливості суглобів та хребта",
        "Після ендопротезування або операцій на зв’язках",
        "При хронічному болю у спині, шиї або суглобах",
        "При зниженні м’язової сили та витривалості",
        "За рекомендацією ортопеда, травматолога чи невролога",
      ]
    : isCheckup
    ? [
        "Для планової оцінки стану здоров’я раз на рік",
        "При високих фізичних чи психоемоційних навантаженнях",
        "Перед початком інтенсивних спортивних тренувань",
        "За наявності спадкової схильності до захворювань",
        "При перших симптомах втоми чи зниження працездатності",
      ]
    : [
        "Планова оцінка та контроль динаміки стану здоров’я",
        "Скарги на дискомфорт або зменшення активності",
        "Підготовка до курсів відновлення та оздоровлення",
      ];

  // Contraindications / Postpone
  const defaultContraindicationsLeft = custom.postponeLeft?.length
    ? custom.postponeLeft
    : [
        "При гострому або раптовому болю у грудній клітці / суглобах",
        "При підозрі на гострий запальний або коронарний процес",
        "Після нещодавніх операцій без офіційного дозволу лікаря",
        "При неконтрольованому артеріальному тиску",
      ];

  const defaultContraindicationsRight = custom.postponeRight?.length
    ? custom.postponeRight
    : [
        "При гострому інфекційному захворюванні",
        "При підвищеній температурі тіла",
        "При декомпенсованих станах внутрішніх органів",
        "При загостренні тяжких супутніх патологій",
      ];

  // Frequency
  const defaultFrequencyParagraphs = custom.frequencyParagraphs?.length
    ? custom.frequencyParagraphs
    : [
        `Періодичність та тривалість послуги «${node.title}» визначає лікар з урахуванням віку, скарг, факторів ризику, наявних захворювань і результатів попередніх обстежень.`,
        "Після перенесених операцій, травм або перед початком комплексної програми відновлення графік контрольних етапів формується індивідуально.",
      ];

  // Methods
  const defaultMethods = custom.methodCards?.length
    ? custom.methodCards
    : node.children?.length
    ? node.children.map((c) => ({
        title: c.title,
        text: c.shortDescription || "Сучасний метод обстеження та відновлення здоров’я.",
      }))
    : node.methods?.length
    ? node.methods.map((m) => ({
        title: m,
        text: "Професійне виконання відповідно до сучасних медичних протоколів.",
      }))
    : [
        {
          title: "Первинна оцінка та консультація",
          text: "Детальний огляд лікаря, аналіз скарг та збір анамнезу.",
        },
        {
          title: "Функціональне тестування",
          text: "Апаратні та інструментальні методи оцінки стану організму.",
        },
        {
          title: "Персоналізована програма",
          text: "Складання індивідуального плану занять та медичних процедур.",
        },
        {
          title: "Моніторинг та контроль",
          text: "Відстеження динаміки відновлення на кожному етапі.",
        },
      ];

  // Results
  const defaultResults = custom.resultsTitle
    ? node.results || []
    : node.results?.length
    ? node.results
    : [
        "Об’єктивна оцінка реального стану здоров’я та функціональних резервів",
        "Виявлення прихованих порушень на ранніх стадіях",
        "Зменшення больового синдрому та відновлення амплітуди рухів",
        "Визначення безпечної пульсової та фізичної зони для тренувань",
        "Контроль стану після захворювань, травм або втручань",
        "Підбір персональної тактики профілактики, лікування або реабілітації",
        "Персональні рекомендації щодо способу життя та фізичної активності",
      ];

  // Price table items
  const defaultPricesPrimary = custom.pricePrimary?.length
    ? custom.pricePrimary
    : node.children?.length
    ? node.children.map((c) => ({
        name: c.title,
        time: c.duration || "За призначенням",
        price: c.priceLabel || (c.priceFrom ? `від ${c.priceFrom} грн` : "Вартість уточнюється"),
      }))
    : [
        {
          name: node.title,
          time: node.duration || "За призначенням",
          price: node.priceLabel || (node.priceFrom ? `від ${node.priceFrom} грн` : "Вартість уточнюється"),
        },
        {
          name: "Первинна консультація лікаря",
          time: "30 хв",
          price: "800 грн",
        },
        {
          name: "Повторний огляд та корекція програми",
          time: "20 хв",
          price: "500 грн",
        },
      ];

  const defaultPricesSecondary = custom.priceSecondary?.length
    ? custom.priceSecondary
    : [
        { name: "Лабораторні аналізи та панелі", price: "За запитом" },
        { name: "Функціональне тестування під навантаженням", price: "За запитом" },
        { name: "Розширені інструментальні дослідження", price: "За запитом" },
        { name: "Консультація суміжних спеціалістів", price: "За запитом" },
        { name: "Аналіз результатів попередніх обстежень", price: "За запитом" },
      ];

  return {
    heroEyebrow: node.eyebrow || (isCardio ? "КОМПЛЕКСНА ОЦІНКА РОБОТИ СЕРЦЯ" : "ПОСЛУГИ ОСНОВИ"),
    heroTitle: node.title,
    heroText:
      custom.introBody ||
      node.shortDescription ||
      "Оцініть стан організму, фізичну витривалість та функціональні резерви. Отримайте медичний висновок і персональні рекомендації від фахівців OSNOVA.",
    heroButtonLabel: custom.heroPrimaryLabel || (isDiag ? "ЗАПИСАТИСЯ НА ДІАГНОСТИКУ" : "ЗАПИСАТИСЯ НА КОНСУЛЬТАЦІЮ"),
    heroImage,

    introTitle: `ЩО ТАКЕ\n${node.title.toUpperCase()}?`,
    introBody:
      custom.introBody ||
      node.fullDescription ||
      node.shortDescription ||
      `${node.title} — це комплексний медичний напрям у центрі OSNOVA, який поєднує сучасне обладнання, досвідчених фахівців та індивідуальний підхід до кожного пацієнта для досягнення найкращих результатів відновлення здоров’я.`,
    introImage: secondaryImage,

    recommendedTitle: custom.recommendedTitle || `Коли рекомендовано пройти ${node.title.toLowerCase()}`,
    recommendedSubtitle: custom.recommendedSubtitle || (isCardio ? "Після серцево-судинних подій, операцій і втручань" : "Основні показання та рекомендації лікарів"),
    recommendedItems: defaultIndications,
    recommendedImage: heroImage,

    postponeTitle: custom.postponeTitle || `Коли планову послугу або тестування потрібно відкласти?`,
    postponeIntro: custom.postponeIntro || `Планову послугу «${node.title}» слід відкласти:`,
    postponeLeft: defaultContraindicationsLeft,
    postponeRight: defaultContraindicationsRight,
    emergencyTitle: custom.emergencyTitle || "Коли потрібна невідкладна медична допомога",
    emergencyBody:
      custom.emergencyBody ||
      "При гострому болю у грудях, раптовій вираженій задишці, втраті свідомості або різкому погіршенні самопочуття необхідно негайно звернутися по невідкладну медичну допомогу.",

    frequencyTitle: `Як часто проходити ${node.title.toLowerCase()}?`,
    frequencyParagraphs: defaultFrequencyParagraphs,
    frequencyImage: secondaryImage,

    methodSectionTitle: custom.methodSectionTitle || `Які методи ${node.title.toLowerCase()}\nми використовуємо`,
    methodCards: defaultMethods,
    methodNote:
      custom.methodNote ||
      `Програму «${node.title}» лікар формує індивідуально з урахуванням скарг, факторів ризику, фізичного стану та цілей обстеження чи відновлення.`,

    resultsTitle: custom.resultsTitle || `Результати ${node.title.toLowerCase()}`,
    resultsItems: defaultResults,
    resultsImage: tertiaryImage,

    priceSectionTitle: custom.priceSectionTitle || "Ціни та послуги",
    pricePrimaryTitle: custom.pricePrimaryTitle || `ПОСЛУГИ В OSNOVA`,
    priceSecondaryTitle: custom.priceSecondaryTitle || `ІНШІ ПОСЛУГИ ТА ОБСТЕЖЕННЯ`,
    pricePrimary: defaultPricesPrimary,
    priceSecondary: defaultPricesSecondary,
    priceFooterText:
      custom.priceFooterText ||
      `Програма та перелік послуг «${node.title}» формуються індивідуально з урахуванням скарг, фізичного стану, факторів ризику та цілей пацієнта.`,
    priceFooterButton: custom.priceFooterButton || "ЗАМОВИТИ ПОСЛУГУ",

    ctaTitle: custom.ctaTitle || `ПЕРЕВІРТЕ ЗДОРОВ’Я\nВЖЕ ЗАРАЗ`,
    ctaBody:
      custom.ctaBody ||
      `Не відкладайте турботу про здоров’я — своєчасне звернення допомагає виявити ризики, оцінити стан організму та підібрати правильну тактику лікування або профілактики.`,
    ctaButton: custom.ctaButton || "Записатися на консультацію",

    signsTitle: custom.signsTitle || `Коли варто пройти ${node.title.toLowerCase()}`,
    signsIntro:
      custom.signsIntro ||
      `Багато захворювань та порушень розвитку часто протікають приховано і тривалий час можуть не проявлятися вираженими симптомами. Саме тому важливо вчасно реагувати на найменші зміни самопочуття та регулярно проходити обстеження та профілактику.`,
    signsListIntro: custom.signsListIntro || `Звернутися до лікаря варто при:`,
    signsItems: custom.signsItems || defaultIndications,
  };
}
