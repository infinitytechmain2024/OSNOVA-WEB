import type { FAQItem, SiteNode } from "./types";

import rehabImg from "@/assets/service-rehab.jpg";
import checkupImg from "@/assets/service-checkup.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import cpetImg from "@/assets/cpet-test.jpg";
import ecgImg from "@/assets/ecg-review.jpg";
import ergoImg from "@/assets/ergometer.jpg";

export const IMAGES = { rehabImg, checkupImg, sportsImg, cpetImg, ecgImg, ergoImg };

const BASE_FAQ: FAQItem[] = [
  {
    question: "Скільки триває програма?",
    answer:
      "Тривалість визначає лікар після первинної оцінки стану — вона залежить від діагнозу, самопочуття та цілей пацієнта.",
  },
  {
    question: "Чи потрібне направлення лікаря?",
    answer:
      "Направлення не обов’язкове. Якщо у вас є висновки або призначення лікаря, візьміть їх із собою — це пришвидшує первинну оцінку.",
  },
  {
    question: "Які документи необхідно надати?",
    answer:
      "Виписки зі стаціонару, результати попередніх обстежень та перелік препаратів, які ви приймаєте, якщо такі є.",
  },
  {
    question: "Як записатися?",
    answer:
      "Залиште заявку у формі на сайті або зателефонуйте нам — адміністратор підбере зручний час і пояснить наступні кроки.",
  },
];

const REHAB_FAQ: FAQItem[] = [
  ...BASE_FAQ,
  {
    question: "Чи можна проходити програму амбулаторно?",
    answer:
      "Так. Доступні стаціонарний, амбулаторний та комбінований формати — формат обирається разом із лікарем.",
  },
];

const rehabDefaults = {
  formats: ["Стаціонарно", "Амбулаторно", "Виїзно"],
  indications: [
    "Після перенесеного захворювання, травми або операції",
    "При зниженні витривалості та повсякденної активності",
    "За рекомендацією лікуючого лікаря",
  ],
  contraindications: [
    "Гострий стан або загострення захворювання",
    "Підвищена температура тіла та гострі інфекції",
    "Стани, що потребують невідкладної медичної допомоги",
  ],
  included: [
    "Первинний огляд лікаря та оцінка стану",
    "Індивідуальний план відновлення",
    "Заняття з фізичним терапевтом",
    "Контроль динаміки та підсумковий висновок",
  ],
  stages: [
    "Первинна консультація та обстеження",
    "Формування індивідуальної програми",
    "Основний курс занять і процедур",
    "Проміжна оцінка та корекція програми",
    "Підсумковий висновок і рекомендації вдома",
  ],
  results: [
    "Поступове повернення до звичної активності",
    "Зменшення обмежень у русі та повсякденних діях",
    "Розуміння безпечного рівня навантажень",
    "Персональні рекомендації на період після програми",
  ],
  requiredDocuments: [
    "Виписка зі стаціонару або висновок лікаря",
    "Результати попередніх обстежень",
    "Перелік препаратів, які ви приймаєте",
  ],
  faq: REHAB_FAQ,
};

function program(
  parentId: string,
  parentRoute: string,
  slug: string,
  title: string,
  shortDescription: string,
  duration = "7–21 день",
  priceLabel = "від 1 600 грн / день",
  image = rehabImg,
): SiteNode {
  return {
    id: `${parentId}--${slug}`,
    slug,
    parentId,
    type: "service",
    title,
    route: `${parentRoute}/${slug}`,
    shortDescription,
    duration,
    priceLabel,
    image,
    published: true,
    ...rehabDefaults,
  };
}

function method(
  parentId: string,
  parentRoute: string,
  slug: string,
  title: string,
  shortDescription: string,
  duration: string,
  priceLabel = "Вартість уточнюється",
  image = ecgImg,
): SiteNode {
  return {
    id: `${parentId}--${slug}`,
    slug,
    parentId,
    type: "service",
    title,
    route: `${parentRoute}/${slug}`,
    shortDescription,
    duration,
    priceLabel,
    image,
    published: true,
    formats: ["Амбулаторно"],
    indications: [
      "Планове обстеження та контроль стану",
      "Скарги з боку серцево-судинної системи",
      "Підготовка до реабілітаційної програми",
    ],
    contraindications: [
      "Гострий стан, що потребує невідкладної допомоги",
      "Гостре інфекційне захворювання",
    ],
    included: ["Проведення дослідження", "Опис результату лікарем", "Медичний висновок"],
    results: [
      "Об’єктивні дані про стан здоров’я",
      "Основа для подальшої тактики лікування або реабілітації",
    ],
    faq: BASE_FAQ,
  };
}

// ─────────────────────────── РЕАБІЛІТАЦІЯ ───────────────────────────

const CARDIO_REHAB_ROUTE = "/reabilitatsiia/kardiolohichna";
const cardioRehab: SiteNode = {
  id: "rehab-cardio",
  slug: "kardiolohichna",
  parentId: "rehab",
  type: "direction",
  title: "Кардіологічна реабілітація",
  eyebrow: "РЕАБІЛІТАЦІЯ",
  route: CARDIO_REHAB_ROUTE,
  shortDescription:
    "Контрольоване повернення до фізичної активності після серцево-судинних захворювань та втручань.",
  fullDescription:
    "Програми кардіологічної реабілітації будуються на результатах діагностики: лікар оцінює стан серця, переносимість навантажень і підбирає безпечний темп відновлення під наглядом команди.",
  duration: "7–21 день",
  priceLabel: "Вартість уточнюється",
  image: cpetImg,
  published: true,
  featured: true,
  ...rehabDefaults,
  children: [
    program(
      "rehab-cardio",
      CARDIO_REHAB_ROUTE,
      "pislia-infarktu-miokarda",
      "Реабілітація після інфаркту міокарда",
      "Контрольоване повернення до фізичної активності після перенесеного інфаркту.",
      "7–21 день",
      cpetImg,
    ),
    program(
      "rehab-cardio",
      CARDIO_REHAB_ROUTE,
      "pislia-stentuvannia",
      "Реабілітація після стентування",
      "Поступове відновлення активності після стентування коронарних артерій.",
    ),
    program(
      "rehab-cardio",
      CARDIO_REHAB_ROUTE,
      "pislia-aksh",
      "Реабілітація після аортокоронарного шунтування",
      "Відновлення після кардіохірургічного втручання під наглядом лікарів.",
    ),
    program(
      "rehab-cardio",
      CARDIO_REHAB_ROUTE,
      "pislia-protezuvannia-klapaniv",
      "Реабілітація після протезування клапанів серця",
      "Програма відновлення після операцій на клапанах серця.",
    ),
    program(
      "rehab-cardio",
      CARDIO_REHAB_ROUTE,
      "pislia-vstanovlennia-kardiostymuliatora",
      "Реабілітація після встановлення кардіостимулятора",
      "Адаптація до навантажень після імплантації кардіостимулятора.",
    ),
    program(
      "rehab-cardio",
      CARDIO_REHAB_ROUTE,
      "sertseva-nedostatnist",
      "Реабілітація при серцевій недостатності",
      "Підтримка функціонального стану та щоденної активності.",
    ),
    program(
      "rehab-cardio",
      CARDIO_REHAB_ROUTE,
      "ishemichna-khvoroba-sertsia",
      "Реабілітація при ішемічній хворобі серця",
      "Безпечні навантаження та контроль факторів ризику.",
    ),
    program(
      "rehab-cardio",
      CARDIO_REHAB_ROUTE,
      "stabilna-stenokardiia",
      "Реабілітація при стабільній стенокардії",
      "Розширення переносимості навантажень під контролем лікаря.",
    ),
    program(
      "rehab-cardio",
      CARDIO_REHAB_ROUTE,
      "arterialna-hipertenziia",
      "Реабілітація при артеріальній гіпертензії",
      "Контроль тиску, фізична активність і зміна способу життя.",
    ),
    program(
      "rehab-cardio",
      CARDIO_REHAB_ROUTE,
      "porushennia-rytmu",
      "Реабілітація при порушеннях серцевого ритму",
      "Відновлення активності з урахуванням порушень ритму.",
    ),
  ],
};

const ORTHO_ROUTE = "/reabilitatsiia/ortopedychna";
const orthoRehab: SiteNode = {
  id: "rehab-ortho",
  slug: "ortopedychna",
  parentId: "rehab",
  type: "direction",
  title: "Ортопедична та травматологічна реабілітація",
  eyebrow: "РЕАБІЛІТАЦІЯ",
  route: ORTHO_ROUTE,
  shortDescription: "Відновлення рухливості та сили після травм і ортопедичних операцій.",
  duration: "10–21 день",
  priceLabel: "Вартість уточнюється",
  image: rehabImg,
  published: true,
  featured: true,
  ...rehabDefaults,
  children: [
    program(
      "rehab-ortho",
      ORTHO_ROUTE,
      "pislia-endoprotezuvannia",
      "Реабілітація після ендопротезування суглобів",
      "Повернення опори, амплітуди руху та ходьби після ендопротезування.",
    ),
    program(
      "rehab-ortho",
      ORTHO_ROUTE,
      "pislia-perelomiv",
      "Реабілітація після переломів",
      "Відновлення функції кінцівки після зрощення перелому.",
    ),
    program(
      "rehab-ortho",
      ORTHO_ROUTE,
      "pislia-artroskopii",
      "Реабілітація після артроскопії",
      "Поступове навантаження суглоба після артроскопічного втручання.",
    ),
    program(
      "rehab-ortho",
      ORTHO_ROUTE,
      "pislia-operatsii-na-zviazkakh",
      "Реабілітація після операцій на зв’язках",
      "Стабільність суглоба та повернення до активності.",
    ),
    program(
      "rehab-ortho",
      ORTHO_ROUTE,
      "pislia-operatsii-na-sukhozhylliakh",
      "Реабілітація після операцій на сухожиллях",
      "Відновлення сили та рухливості після втручань на сухожиллях.",
    ),
    program(
      "rehab-ortho",
      ORTHO_ROUTE,
      "pislia-travm-suhlobiv",
      "Реабілітація після травм суглобів",
      "Робота з болем, набряком і обмеженням руху.",
    ),
    program(
      "rehab-ortho",
      ORTHO_ROUTE,
      "pislia-ortopedychnykh-operatsii",
      "Реабілітація після ортопедичних операцій",
      "Індивідуальний план відновлення після планових операцій.",
    ),
  ],
};

const VERT_ROUTE = "/reabilitatsiia/vertebrolohichna";
const vertRehab: SiteNode = {
  id: "rehab-vert",
  slug: "vertebrolohichna",
  parentId: "rehab",
  type: "direction",
  title: "Вертебрологічна реабілітація",
  eyebrow: "РЕАБІЛІТАЦІЯ",
  route: VERT_ROUTE,
  shortDescription: "Робота з болем у спині та шиї, поставою і станом після операцій на хребті.",
  duration: "10–21 день",
  priceLabel: "Вартість уточнюється",
  image: rehabImg,
  published: true,
  ...rehabDefaults,
  children: [
    program("rehab-vert", VERT_ROUTE, "bil-u-spyni", "Реабілітація при болю у спині", "Зменшення болю та повернення до звичного рівня активності."),
    program("rehab-vert", VERT_ROUTE, "bil-u-shyi", "Реабілітація при болю у шиї", "Робота з м’язовим напруженням та рухливістю шийного відділу."),
    program("rehab-vert", VERT_ROUTE, "protruzii", "Реабілітація при протрузіях", "Безпечні вправи та контроль навантаження на хребет."),
    program("rehab-vert", VERT_ROUTE, "hryzhi-dyskiv", "Реабілітація при грижах міжхребцевих дисків", "Індивідуальна програма з урахуванням симптомів."),
    program("rehab-vert", VERT_ROUTE, "porushennia-postavy", "Реабілітація при порушеннях постави", "Корекція постави та зміцнення м’язового корсета."),
    program("rehab-vert", VERT_ROUTE, "pislia-operatsii-na-khrebti", "Реабілітація після операцій на хребті", "Поетапне відновлення після хірургічного лікування."),
  ],
};

const simpleRehabDirection = (
  slug: string,
  title: string,
  shortDescription: string,
  priceLabel = "від 1 600 грн / день",
): SiteNode => ({
  id: `rehab-${slug}`,
  slug,
  parentId: "rehab",
  type: "direction",
  title,
  eyebrow: "РЕАБІЛІТАЦІЯ",
  route: `/reabilitatsiia/${slug}`,
  shortDescription,
  duration: "Визначається лікарем",
  priceLabel,
  image: rehabImg,
  published: true,
  ...rehabDefaults,
  children: [],
});

const rehab: SiteNode = {
  id: "rehab",
  slug: "reabilitatsiia",
  parentId: "services",
  type: "category",
  title: "Реабілітація",
  eyebrow: "ПОСЛУГИ ОСНОВИ",
  route: "/reabilitatsiia",
  shortDescription:
    "Програми відновлення після захворювань, травм і операцій під наглядом лікарів та фізичних терапевтів.",
  image: rehabImg,
  published: true,
  featured: true,
  faq: REHAB_FAQ,
  children: [
    cardioRehab,
    orthoRehab,
    vertRehab,
    simpleRehabDirection(
      "nevrolohichna",
      "Неврологічна реабілітація",
      "Відновлення рухів, координації та повсякденних навичок після неврологічних станів.",
      "2 400 грн / день",
    ),
    simpleRehabDirection(
      "revmatolohichna",
      "Ревматологічна реабілітація",
      "Підтримка рухливості суглобів і функціональності при ревматологічних захворюваннях.",
      "1 700 грн / день",
    ),
    simpleRehabDirection(
      "psykholohichna",
      "Психологічна реабілітація",
      "Психологічний супровід під час відновлення та адаптації до змін.",
      "1 200 грн / сеанс",
    ),
    simpleRehabDirection(
      "profilaktychna",
      "Профілактична реабілітація",
      "Програми для збереження здоров’я, рухливості та витривалості.",
      "1 400 грн / день",
    ),
  ],
};

// ─────────────────────────── ДІАГНОСТИКА ───────────────────────────

const CARDIO_DIAG_ROUTE = "/diagnostyka/kardiodiahnostyka";
const cardioDiag: SiteNode = {
  id: "diag-cardio",
  slug: "kardiodiahnostyka",
  parentId: "diag",
  type: "direction",
  title: "Кардіодіагностика",
  eyebrow: "ДІАГНОСТИКА",
  route: CARDIO_DIAG_ROUTE,
  shortDescription:
    "Комплексна оцінка роботи серця, ритму, тиску та переносимості фізичних навантажень.",
  duration: "від 15 хв",
  priceLabel: "від 600 грн",
  priceFrom: 600,
  image: cpetImg,
  published: true,
  featured: true,
  customPage: "cardio-diagnostics",
  seoTitle: "Кардіологічна діагностика — OSNOVA Реабілітація, Буковель",
  seoDescription:
    "Комплексна оцінка роботи серця: ЕКГ, Холтер, ДМАТ, кардіопульмональний тест, спірографія. Медичний висновок і персональні рекомендації.",
  faq: BASE_FAQ,
  children: [
    method("diag-cardio", CARDIO_DIAG_ROUTE, "ekg", "ЕКГ", "Базова оцінка електричної активності серця, ритму та провідності.", "15 хв", "600 грн"),
    method("diag-cardio", CARDIO_DIAG_ROUTE, "kholter-ekg", "Холтер ЕКГ", "Добове моніторування серцевого ритму в умовах звичайної активності.", "1 доба", "1200 грн"),
    method("diag-cardio", CARDIO_DIAG_ROUTE, "dmat", "ДМАТ", "Добове моніторування артеріального тиску вдень і вночі.", "1 доба", "600 грн"),
    method("diag-cardio", CARDIO_DIAG_ROUTE, "ekhokardiohrafiia", "Ехокардіографія", "Ультразвукова оцінка структури та роботи серця.", "30 хв", "800 грн"),
    method("diag-cardio", CARDIO_DIAG_ROUTE, "veloerhometriia", "Велоергометрія", "Навантажувальний тест на велоергометрі під контролем лікаря.", "60 хв", "1200 грн", ergoImg),
    method("diag-cardio", CARDIO_DIAG_ROUTE, "tredmil-test", "Тредміл-тест", "Навантажувальний тест на біговій доріжці.", "60 хв", "1200 грн", ergoImg),
    method("diag-cardio", CARDIO_DIAG_ROUTE, "cpet", "Кардіопульмональний тест CPET", "Оцінка роботи серця, легень і витривалості під навантаженням.", "90 хв", "2000 грн", cpetImg),
    method("diag-cardio", CARDIO_DIAG_ROUTE, "spirohrafiia", "Спірографія", "Оцінка функції дихання та стану серцево-легеневої системи.", "20 хв", "500 грн"),
    method("diag-cardio", CARDIO_DIAG_ROUTE, "shestykhvylynnyi-test", "Тест із шестихвилинною ходьбою", "Проста оцінка переносимості навантаження та витривалості.", "20 хв", "400 грн"),
  ],
};

const MSK_ROUTE = "/diagnostyka/oporno-rukhovoho-aparatu";
const mskDiag: SiteNode = {
  id: "diag-msk",
  slug: "oporno-rukhovoho-aparatu",
  parentId: "diag",
  type: "direction",
  title: "Діагностика опорно-рухового апарату",
  eyebrow: "ДІАГНОСТИКА",
  route: MSK_ROUTE,
  shortDescription: "Оцінка ходьби, м’язової роботи та стану хребта перед програмою відновлення.",
  duration: "від 30 хв",
  priceLabel: "від 900 грн",
  image: rehabImg,
  published: true,
  faq: BASE_FAQ,
  children: [
    method("diag-msk", MSK_ROUTE, "laboratoriia-khodby", "Лабораторія ходьби", "Апаратний аналіз ходи, кроку та розподілу навантаження.", "45 хв", "1500 грн", rehabImg),
    method("diag-msk", MSK_ROUTE, "neiromiazove-testuvannia", "Нейром’язове тестування", "Оцінка сили та роботи м’язових груп.", "40 хв", "1200 грн", rehabImg),
    method("diag-msk", MSK_ROUTE, "diahnostyka-khrebta", "Діагностика хребта", "Оцінка постави, рухливості та функції відділів хребта.", "30 хв", "900 грн", rehabImg),
  ],
};

const diag: SiteNode = {
  id: "diag",
  slug: "diagnostyka",
  parentId: "services",
  type: "category",
  title: "Діагностика",
  eyebrow: "ПОСЛУГИ ОСНОВИ",
  route: "/diagnostyka",
  shortDescription:
    "Функціональні, інструментальні та лабораторні дослідження для точної оцінки стану здоров’я.",
  image: ecgImg,
  published: true,
  featured: true,
  faq: BASE_FAQ,
  children: [
    cardioDiag,
    mskDiag,
    {
      id: "diag-lab",
      slug: "laboratorna",
      parentId: "diag",
      type: "direction",
      title: "Лабораторна діагностика",
      eyebrow: "ДІАГНОСТИКА",
      route: "/diagnostyka/laboratorna",
      shortDescription: "Аналізи та лабораторні панелі для оцінки стану організму й контролю динаміки.",
      duration: "від 1 дня",
      priceLabel: "від 450 грн",
      image: checkupImg,
      published: true,
      faq: BASE_FAQ,
      children: [],
    },
  ],
};

const edc: SiteNode = {
  id: "edc",
  slug: "yedynyi-diahnostychnyi-tsentr",
  parentId: "diag",
  type: "direction",
  title: "Єдиний діагностичний центр",
  eyebrow: "ДІАГНОСТИКА",
  route: "/yedynyi-diahnostychnyi-tsentr",
  shortDescription:
    "Діагностичний хаб: встановлення Холтера ЕКГ і ДМАТ, передавання даних, розшифровка та повернення висновку лікарю.",
  fullDescription:
    "Пацієнту встановлюють Холтер ЕКГ або ДМАТ. Дані передаються до діагностичного центру, лікар функціональної діагностики проводить розшифровку, а готовий висновок повертається лікарю, який веде пацієнта.",
  duration: "1–2 доби",
  priceLabel: "від 1 200 грн",
  image: ecgImg,
  published: true,
  stages: [
    "Встановлення Холтера ЕКГ або ДМАТ пацієнту",
    "Передавання даних до діагностичного центру",
    "Розшифровка лікарем функціональної діагностики",
    "Повернення готового висновку лікарю, який веде пацієнта",
  ],
  methods: ["Холтер ЕКГ", "ДМАТ", "Передавання даних", "Розшифровка досліджень"],
  faq: BASE_FAQ,
  children: [],
};

// ─────────────────────────── ЧЕК-АПИ ───────────────────────────

const checkupBase = {
  formats: ["Амбулаторно", "За один або два дні"],
  included: [
    "Огляди профільних спеціалістів",
    "Інструментальні дослідження",
    "Лабораторна діагностика",
    "Підсумковий медичний висновок",
  ],
  stages: [
    "Запис і підготовка до обстеження",
    "Проходження досліджень за програмою",
    "Огляд лікаря та формування висновку",
    "Рекомендації щодо подальших дій",
  ],
  results: [
    "Об’єктивна картина стану здоров’я",
    "Виявлення відхилень на ранньому етапі",
    "Персональні рекомендації щодо профілактики",
  ],
  faq: BASE_FAQ,
};

const checkupItem = (slug: string, title: string, shortDescription: string, priceLabel = "від 4 500 грн"): SiteNode => ({
  id: `checkup-${slug}`,
  slug,
  parentId: "checkup",
  type: "checkup",
  title,
  eyebrow: "ЧЕК-АПИ ЗДОРОВ’Я",
  route: `/check-up/${slug}`,
  shortDescription,
  duration: "1–2 дні",
  priceLabel,
  image: checkupImg,
  published: true,
  ...checkupBase,
});

const checkup: SiteNode = {
  id: "checkup",
  slug: "check-up",
  parentId: "services",
  type: "category",
  title: "Чек-апи здоров’я",
  eyebrow: "ПОСЛУГИ ОСНОВИ",
  route: "/check-up",
  shortDescription:
    "Комплексні програми обстеження з фіксованим складом досліджень і підсумковим висновком лікаря.",
  image: checkupImg,
  published: true,
  featured: true,
  faq: BASE_FAQ,
  children: [
    checkupItem("kardiolohichnyi", "Кардіологічний чек-ап", "Комплексна оцінка роботи серця та судин.", "4 500 грн"),
    checkupItem(
      "ortopedo-travmatolohichnyi",
      "Ортопедо-травматологічний чек-ап",
      "Оцінка стану суглобів, хребта та наслідків травм.",
      "4 800 грн",
    ),
    checkupItem("sportyvnyi", "Спортивний чек-ап", "Оцінка функціонального стану та переносимості навантажень.", "5 200 грн"),
    checkupItem(
      "zdorovia-kistok-ta-suhlobiv",
      "Чек-ап «Здоров’я кісток та суглобів»",
      "Обстеження стану кісткової тканини та суглобів.",
      "3 900 грн",
    ),
    checkupItem("55-plus", "Чек-ап 55+", "Програма обстеження для людей старшого віку.", "5 500 грн"),
  ],
};

// ─────────────────────── ВІДНОВЛЕННЯ ТА АКТИВНІСТЬ ───────────────────────

const recoveryItem = (slug: string, title: string, shortDescription: string, priceLabel = "600 грн / сеанс"): SiteNode => ({
  id: `recovery-${slug}`,
  slug,
  parentId: "recovery",
  type: "service",
  title,
  eyebrow: "ВІДНОВЛЕННЯ ТА ФІЗИЧНА АКТИВНІСТЬ",
  route: `/vidnovlennia/${slug}`,
  shortDescription,
  duration: "від 30 хв",
  priceLabel,
  image: sportsImg,
  published: true,
  formats: ["Разові заняття", "Курс занять"],
  included: ["Заняття або процедура зі спеціалістом", "Контроль самопочуття", "Рекомендації після курсу"],
  results: ["Покращення самопочуття та рухливості", "Підтримка результатів реабілітації"],
  faq: BASE_FAQ,
});

const recovery: SiteNode = {
  id: "recovery",
  slug: "vidnovlennia",
  parentId: "services",
  type: "category",
  title: "Відновлення та фізична активність",
  eyebrow: "ПОСЛУГИ ОСНОВИ",
  route: "/vidnovlennia",
  shortDescription:
    "Процедури, заняття та тренування для підтримки рухливості, сили й загального самопочуття.",
  image: sportsImg,
  published: true,
  featured: true,
  faq: BASE_FAQ,
  children: [
    recoveryItem("fizioterapiia", "Фізіотерапія", "Апаратні процедури для зменшення болю та відновлення тканин.", "500 грн / сеанс"),
    recoveryItem("hidrokinezioterapiia", "Гідрокінезіотерапія", "Лікувальні вправи у воді з мінімальним навантаженням на суглоби.", "800 грн / сеанс"),
    recoveryItem("likuvalnyi-basein", "Лікувальний басейн", "Заняття у басейні під наглядом спеціаліста.", "600 грн / сеанс"),
    recoveryItem("likuvalnyi-masazh", "Лікувальний масаж", "Робота з м’язовим напруженням і больовими зонами.", "900 грн / сеанс"),
    recoveryItem("pilates", "Пілатес", "Контрольовані вправи для сили, балансу та постави.", "500 грн / сеанс"),
    recoveryItem("hur", "Тренування на обладнанні HUR", "Силові тренування з точним дозуванням навантаження.", "700 грн / сеанс"),
    recoveryItem("funktsionalne-trenuvannia", "Функціональне тренування", "Вправи для повсякденних рухів і витривалості.", "600 грн / сеанс"),
    recoveryItem("fitnes-zal", "Фітнес-зал", "Самостійні або супроводжувані тренування у залі.", "400 грн / день"),
    recoveryItem("balneolohiia", "Бальнеологія", "Водні та бальнеологічні процедури.", "750 грн / процедура"),
    recoveryItem("spa", "SPA та релакс", "Процедури для відновлення після навантажень.", "1 200 грн / сеанс"),
  ],
};

// ─────────────────────── ВИЇЗНА РЕАБІЛІТАЦІЯ / ОРЕНДА ───────────────────────

const mobileRehab: SiteNode = {
  id: "mobile-rehab",
  slug: "vyizna-reabilitatsiia",
  parentId: "services",
  type: "category",
  title: "Виїзна реабілітація",
  eyebrow: "ПОСЛУГИ ОСНОВИ",
  route: "/vyizna-reabilitatsiia",
  shortDescription:
    "Реабілітаційна команда приїжджає до пацієнта додому, у готель або за місцем перебування.",
  fullDescription:
    "Виїзна реабілітація OSNOVA — це індивідуальна програма відновлення за місцем перебування пацієнта. Фахівці оцінюють стан, підбирають безпечні навантаження, проводять заняття та допомагають продовжити відновлення поза центром.",
  duration: "За програмою",
  priceLabel: "від 1 500 грн",
  image: rehabImg,
  published: true,
  featured: true,
  customPage: "mobile-rehab",
  seoTitle: "Виїзна реабілітація — OSNOVA Реабілітація",
  seoDescription:
    "Виїзна реабілітація вдома, у готелі або за місцем перебування пацієнта: консультація, заняття з фізичним терапевтом, курс з обладнанням.",
  ...rehabDefaults,
  formats: ["Реабілітація вдома", "Виїзд спеціаліста", "Виїзд з обладнанням"],
  indications: [
    "Складно або небезпечно регулярно приїжджати до центру",
    "Потрібне продовження програми після стаціонарної чи амбулаторної реабілітації",
    "Після травм, операцій, інсульту або тривалої іммобілізації",
    "Потрібна оцінка побутових навичок і безпечного пересування вдома",
  ],
  included: [
    "Уточнення стану та аналіз медичних документів",
    "Первинна функціональна оцінка пацієнта",
    "Індивідуальна програма занять за місцем перебування",
    "Контроль самопочуття та корекція навантажень",
    "Рекомендації для самостійного продовження програми",
  ],
  results: [
    "Безпечне відновлення без зайвої дороги до центру",
    "Поступове повернення рухливості, сили та витривалості",
    "Зрозумілий план домашніх вправ і щоденної активності",
    "Підтримка пацієнта та родини під час відновлення",
  ],
  faq: [
    ...BASE_FAQ,
    {
      question: "Куди може приїхати спеціаліст?",
      answer:
        "Формат погоджується індивідуально: це може бути дім, готель або інше місце перебування пацієнта, якщо умови дозволяють безпечно провести заняття.",
    },
    {
      question: "Чи можна замовити виїзд з обладнанням?",
      answer:
        "Так. За потреби команда підбирає портативне обладнання для занять, але склад обладнання залежить від стану пацієнта та цілей програми.",
    },
  ],

  children: [
    {
      id: "mobile-rehab--vdoma",
      slug: "vdoma",
      parentId: "mobile-rehab",
      type: "service",
      title: "Реабілітація вдома",
      route: "/vyizna-reabilitatsiia/vdoma",
      shortDescription: "Курс занять і процедур за місцем перебування пацієнта.",
      duration: "За програмою",
      priceLabel: "від 2 500 грн / день",
      image: rehabImg,
      published: true,
      ...rehabDefaults,
    },
    {
      id: "mobile-rehab--vyizd-spetsialista",
      slug: "vyizd-spetsialista",
      parentId: "mobile-rehab",
      type: "service",
      title: "Виїзд спеціаліста",
      route: "/vyizna-reabilitatsiia/vyizd-spetsialista",
      shortDescription: "Окремі заняття з фізичним терапевтом або консультація лікаря вдома.",
      duration: "60 хв",
      priceLabel: "1 500 грн / візит",
      image: rehabImg,
      published: true,
      ...rehabDefaults,
    },
    {
      id: "mobile-rehab--z-obladnanniam",
      slug: "z-obladnanniam",
      parentId: "mobile-rehab",
      type: "service",
      title: "Виїзд з обладнанням",
      route: "/vyizna-reabilitatsiia/z-obladnanniam",
      shortDescription: "Заняття вдома з використанням реабілітаційного обладнання центру.",
      duration: "За програмою",
      priceLabel: "3 000 грн / день",
      image: rehabImg,
      published: true,
      ...rehabDefaults,
    },
  ],
};

const rental: SiteNode = {
  id: "rental",
  slug: "orenda-obladnannia",
  parentId: "services",
  type: "category",
  title: "Оренда реабілітаційного обладнання",
  eyebrow: "ПОСЛУГИ ОСНОВИ",
  route: "/orenda-obladnannia",
  shortDescription: "Реабілітаційне обладнання в оренду для продовження занять удома.",
  priceLabel: "від 800 грн / доба",
  image: rehabImg,
  published: true,
  customPage: "rental-equipment",
  faq: BASE_FAQ,
  children: [
    {
      id: "rental--mekhanoterapiia",
      slug: "aktyvna-pasyvna-mekhanoterapiia",
      parentId: "rental",
      type: "service",
      title: "Апарат активної та пасивної механотерапії",
      route: "/orenda-obladnannia/aktyvna-pasyvna-mekhanoterapiia",
      shortDescription: "Апарат для розробки суглобів в активному та пасивному режимах.",
      duration: "Від тижня",
      priceLabel: "800 грн / доба",
      image: rehabImg,
      published: true,
      faq: BASE_FAQ,
    },
  ],
};

// ─────────────────────────── НАВЧАННЯ ───────────────────────────

const courses: SiteNode = {
  id: "courses",
  slug: "kursy",
  parentId: "education",
  type: "category",
  title: "Курси",
  eyebrow: "НАВЧАННЯ",
  route: "/kursy",
  shortDescription: "Практичні курси для спеціалістів у сфері реабілітації та відновлення.",
  image: sportsImg,
  published: true,
  faq: BASE_FAQ,
  children: [],
};

const conferences: SiteNode = {
  id: "conferences",
  slug: "konferentsii",
  parentId: "education",
  type: "category",
  title: "Конференції",
  eyebrow: "НАВЧАННЯ",
  route: "/konferentsii",
  shortDescription: "Фахові події для обміну досвідом між спеціалістами.",
  image: checkupImg,
  published: true,
  faq: BASE_FAQ,
  children: [],
};

const education: SiteNode = {
  id: "education",
  slug: "navchannia",
  type: "section",
  title: "Навчання",
  eyebrow: "ОСНОВА",
  route: "/navchannia",
  shortDescription: "Курси та конференції для лікарів, фізичних терапевтів і суміжних спеціалістів.",
  image: sportsImg,
  published: true,
  faq: BASE_FAQ,
  children: [courses, conferences],
};

// ─────────────────────────── ІВЕНТИ ───────────────────────────

const events: SiteNode = {
  id: "events",
  slug: "iventy",
  type: "page",
  title: "Івенти",
  eyebrow: "ОСНОВА",
  route: "/iventy",
  shortDescription:
    "Відкриті тренування, лекції, практичні зустрічі та дні діагностики у фітнес-залі або медичному центрі.",
  image: sportsImg,
  published: true,
  methods: [
    "Події у фітнес-залі",
    "Лекції та консультаційні зустрічі",
    "Дні діагностики",
    "Формати для партнерів і груп",
  ],
  faq: BASE_FAQ,
};

// ─────────────────────────── ПАРТНЕРСТВО ───────────────────────────

const partnership: SiteNode = {
  id: "partnership",
  slug: "partnerstvo",
  type: "section",
  title: "Партнерство",
  eyebrow: "ОСНОВА",
  route: "/partnerstvo",
  shortDescription: "Співпраця з лікарями, організаціями та науковими установами.",
  image: ecgImg,
  published: true,
  faq: BASE_FAQ,
  children: [
    {
      id: "partnership-doctors",
      slug: "likariam",
      parentId: "partnership",
      type: "page",
      title: "Співпраця з лікарями",
      eyebrow: "ПАРТНЕРСТВО",
      route: "/partnerstvo/likariam",
      shortDescription:
        "Направлення пацієнтів на діагностику, реабілітацію та контрольоване відновлення зі зворотним зв'язком для лікаря.",
      image: ecgImg,
      published: true,
      seoTitle: "Співпраця для лікарів — ОСНОВА Реабілітація",
      seoDescription:
        "ОСНОВА Реабілітація співпрацює з лікарями: направлення пацієнтів, діагностика, реабілітація, спільне ведення, висновки та рекомендації.",
      methods: ["Кардіологи", "Ортопеди", "Травматологи", "Вертебрологи", "Інші спеціалісти"],
      stages: [
        "Лікар звертається до центру та передає медичну документацію",
        "Пацієнт проходить первинну оцінку в ОСНОВІ",
        "Формується програма реабілітації",
        "Лікар отримує проміжні та підсумкові результати",
      ],
      faq: [
        {
          question: "Як лікар може направити пацієнта в ОСНОВУ?",
          answer:
            "Зв'яжіться з координатором центру телефоном або через форму контактів. Бажано передати клінічний запит, виписку, результати обстежень і коротку мету направлення.",
        },
        {
          question: "Чи отримує лікар підсумковий висновок?",
          answer:
            "Так. Після діагностики або реабілітаційної програми ми формуємо висновок із результатами, динамікою та рекомендаціями для подальшого ведення пацієнта.",
        },
        {
          question: "Чи можна узгодити програму з лікарем, який веде пацієнта?",
          answer:
            "Так. За потреби команда ОСНОВИ може уточнити клінічні деталі, цілі програми та обмеження, щоб реабілітація відповідала загальній тактиці лікування.",
        },
        {
          question: "З якими спеціалістами співпрацює центр?",
          answer:
            "Ми співпрацюємо з кардіологами, ортопедами, травматологами, неврологами, ревматологами, сімейними лікарями, спортивними лікарями та іншими фахівцями.",
        },
      ],
    },
    {
      id: "partnership-org",
      slug: "orhanizatsiiam",
      parentId: "partnership",
      type: "page",
      title: "Співпраця з організаціями",
      eyebrow: "ПАРТНЕРСТВО",
      route: "/partnerstvo/orhanizatsiiam",
      shortDescription: "Програми для медичних закладів, компаній і спортивних організацій.",
      image: checkupImg,
      published: true,
      methods: ["Медичні заклади", "Компанії", "Спортивні організації", "Інші партнери"],
      faq: BASE_FAQ,
    },
    {
      id: "partnership-science",
      slug: "naukove",
      parentId: "partnership",
      type: "page",
      title: "Співпраця для інститутів",
      eyebrow: "ПАРТНЕРСТВО",
      route: "/partnerstvo/naukove",
      shortDescription:
        "Клінічна, освітня та наукова база для медичних університетів, наукових інститутів, профільних кафедр і дослідницьких команд.",
      image: sportsImg,
      published: true,
      customPage: "institute-partnership",
      seoTitle: "Співпраця для інститутів — ОСНОВА Реабілітація",
      seoDescription:
        "ОСНОВА Реабілітація співпрацює з медичними університетами, науковими інститутами та кафедрами: клінічна база, навчання, стажування, дослідження, протоколи.",
      methods: [
        "Клінічна база",
        "Практичні навчальні модулі",
        "Наукові дослідження",
        "Стажування команд",
        "Конференції та події",
      ],
      faq: [
        {
          question: "Які інституції можуть звернутися щодо співпраці?",
          answer:
            "Ми відкриті до співпраці з медичними університетами, науковими інститутами, профільними кафедрами, асоціаціями та освітніми центрами.",
        },
        {
          question: "Чи можна організувати практику для студентів або інтернів?",
          answer:
            "Так. Формат, кількість учасників, тривалість і клінічні модулі узгоджуються індивідуально після знайомства з цілями навчальної програми.",
        },
        {
          question: "Чи підтримує ОСНОВА спільні дослідження?",
          answer:
            "Так. Ми розглядаємо дослідницькі проєкти, пов’язані з реабілітацією, функціональним тестуванням, профілактикою та спортивною медициною.",
        },
      ],
    },
    edc,
  ],
};

// ─────────────────────────── ПРО ОСНОВУ ───────────────────────────

const about: SiteNode = {
  id: "about",
  slug: "pro-osnovu",
  type: "section",
  title: "Про ОСНОВУ",
  eyebrow: "ОСНОВА",
  route: "/pro-osnovu",
  shortDescription:
    "Медичний та реабілітаційний центр: діагностика, відновлення та підтримка фізичної активності.",
  image: rehabImg,
  published: true,
  faq: BASE_FAQ,
  children: [
    {
      id: "infrastructure",
      slug: "infrastruktura",
      parentId: "about",
      type: "page",
      title: "Інфраструктура",
      eyebrow: "ПРО ОСНОВУ",
      route: "/infrastruktura",
      shortDescription: "Простір центру: зали, палати, басейн, медичні та тренувальні зони.",
      image: sportsImg,
      published: true,
      methods: [
        "Реабілітаційний зал",
        "Палати",
        "Реанімація",
        "Операційний блок",
        "Басейн",
        "Фітнес-зал",
        "Швидка медична допомога",
      ],
      faq: BASE_FAQ,
    },
    {
      id: "team",
      slug: "komanda",
      parentId: "about",
      type: "category",
      title: "Команда",
      eyebrow: "ПРО ОСНОВУ",
      route: "/komanda",
      shortDescription: "Лікарі, фізичні терапевти та спеціалісти центру.",
      image: ecgImg,
      published: true,
      children: [],
    },
    {
      id: "social",
      slug: "sotsialni-proiekty",
      parentId: "about",
      type: "category",
      title: "Соціальні проєкти",
      eyebrow: "ПРО ОСНОВУ",
      route: "/sotsialni-proiekty",
      shortDescription:
        "Соціальний проєкт «Повернись до руху»: реабілітаційна підтримка для людей після травм, поранень і операцій.",
      image: rehabImg,
      published: true,
      seoTitle: "Соціальний проєкт «Повернись до руху» — ОСНОВА Реабілітація",
      seoDescription:
        "Соціальний проєкт ОСНОВИ для людей після травм, поранень і операцій: медичний відбір, індивідуальна реабілітація та партнерська підтримка курсу.",
      children: [],
    },
  ],
};

// ─────────────────────────── СИСТЕМНІ СТОРІНКИ ───────────────────────────

const legalPage = (slug: string, title: string, body: string[]): SiteNode => ({
  id: `legal-${slug}`,
  slug,
  type: "page",
  title,
  eyebrow: "ДОКУМЕНТИ",
  route: `/${slug}`,
  shortDescription: title,
  published: true,
  customPage: "legal",
  legalBody: body,
});

const systemPages: SiteNode[] = [
  {
    id: "faq",
    slug: "faq",
    type: "page",
    title: "Питання та відповіді",
    eyebrow: "ДОВІДКА",
    route: "/faq",
    shortDescription: "Відповіді на поширені питання про послуги, документи, оплату та запис.",
    published: true,
    customPage: "faq",
  },
  {
    id: "contacts",
    slug: "kontakty",
    type: "page",
    title: "Контакти",
    eyebrow: "ОСНОВА",
    route: "/kontakty",
    shortDescription: "Адреса, телефони, графік роботи та форма звернення.",
    published: true,
    customPage: "contacts",
  },
  {
    id: "success",
    slug: "success",
    type: "page",
    title: "Заявку надіслано",
    eyebrow: "ДЯКУЄМО",
    route: "/success",
    shortDescription: "Ми отримали вашу заявку.",
    published: true,
    customPage: "success",
  },
  legalPage("polityka-konfidentsiinosti", "Політика конфіденційності", [
    "Ми обробляємо персональні дані лише для запису на послуги, консультування та зворотного зв’язку.",
    "Дані не передаються третім особам без згоди, окрім випадків, передбачених законодавством України.",
    "Ви можете звернутися до нас, щоб отримати інформацію про свої дані, змінити їх або відкликати згоду на обробку.",
  ]),
  legalPage("cookies", "Політика cookies", [
    "Сайт використовує файли cookies для коректної роботи інтерфейсу та аналізу відвідуваності.",
    "Ви можете вимкнути cookies у налаштуваннях браузера — частина функцій сайту може працювати обмежено.",
  ]),
  legalPage("zhoda-na-obrobku-danykh", "Згода на обробку персональних даних", [
    "Надсилаючи форму на сайті, ви надаєте згоду на обробку зазначених вами персональних даних.",
    "Згоду можна відкликати у будь-який момент, звернувшись за контактами, вказаними на сторінці «Контакти».",
  ]),
];

// ─────────────────────────── КОРІНЬ ───────────────────────────

export const services: SiteNode = {
  id: "services",
  slug: "poslugy",
  type: "section",
  title: "Послуги",
  eyebrow: "ПОСЛУГИ ОСНОВИ",
  route: "/poslugy",
  shortDescription:
    "Повний перелік напрямів центру: реабілітація, діагностика, чек-апи, відновлення та фізична активність.",
  published: true,
  customPage: "all-services",
  children: [rehab, diag, checkup, recovery, mobileRehab, rental],
};

export const siteTree: SiteNode[] = [
  services,
  education,
  events,
  partnership,
  about,
  ...systemPages,
];

export const CONTACTS = {
  phone: "+380 674 702 788",
  phoneHref: "tel:+380674702788",
  address: "ТРК Буковель, Україна",
};
