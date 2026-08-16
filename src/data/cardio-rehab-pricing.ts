export const CARDIO_REHAB_ROUTE = "/reabilitatsiia/kardiolohichna";

export const CARDIO_REHAB_PROGRAMS = [
  {
    id: "bazova",
    title: "Базова",
    description:
      "Базова програма для поступового відновлення витривалості, мобільності та самоконтролю.",
    duration: "4–6 занять",
    format: "амбулаторно",
    price: "3 000 грн",
    detailsUrl: `${CARDIO_REHAB_ROUTE}/bazova`,
    orderAction: "Замовити послугу",
  },
  {
    id: "standartna",
    title: "Стандартна",
    description: "Розширена програма з більш регулярним контролем навантаження та динаміки стану.",
    duration: "6–8 занять",
    format: "амбулаторно",
    price: "21 000 грн",
    detailsUrl: `${CARDIO_REHAB_ROUTE}/standartna`,
    orderAction: "Замовити послугу",
  },
  {
    id: "rozshyrena",
    title: "Розширена",
    description:
      "Програма з більш повним обсягом навантаження, контролю та рекомендацій для відновлення.",
    duration: "8–12 занять",
    format: "амбулаторно",
    price: "42 000 грн",
    detailsUrl: `${CARDIO_REHAB_ROUTE}/rozshyrena`,
    orderAction: "Замовити послугу",
  },
  {
    id: "indyvidualna",
    title: "Індивідуальна",
    description:
      "Індивідуальний маршрут реабілітації з адаптацією до особливостей пацієнта і темпу відновлення.",
    duration: "за індивідуальним планом",
    format: "амбулаторно / виїзно",
    price: "Уточнюється",
    detailsUrl: `${CARDIO_REHAB_ROUTE}/indyvidualna`,
    orderAction: "Замовити послугу",
  },
] as const;
