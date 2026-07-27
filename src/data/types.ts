export type SiteNodeType =
  | "section"
  | "category"
  | "direction"
  | "service"
  | "checkup"
  | "course"
  | "conference"
  | "project"
  | "specialist"
  | "page";

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceMethodCard = {
  title: string;
  text: string;
  to?: string;
};

export type ServicePriceRow = {
  name: string;
  time?: string;
  price: string;
};

/** Додатковий контент для шаблону сторінки послуги (перекриває автогенерацію). */
export type ServicePageContent = {
  heroPrimaryLabel?: string;
  introBody?: string;
  recommendedTitle?: string;
  recommendedSubtitle?: string;
  recommendedItems?: string[];
  postponeTitle?: string;
  postponeIntro?: string;
  postponeLeft?: string[];
  postponeRight?: string[];
  emergencyTitle?: string;
  emergencyBody?: string;
  frequencyParagraphs?: string[];
  methodCards?: ServiceMethodCard[];
  methodSectionTitle?: string;
  methodNote?: string;
  resultsTitle?: string;
  priceSectionTitle?: string;
  pricePrimaryTitle?: string;
  priceSecondaryTitle?: string;
  pricePrimary?: ServicePriceRow[];
  priceSecondary?: { name: string; price?: string }[];
  priceFooterText?: string;
  priceFooterButton?: string;
  ctaTitle?: string;
  ctaBody?: string;
  ctaButton?: string;
  signsTitle?: string;
  signsIntro?: string;
  signsListIntro?: string;
  signsItems?: string[];
  secondaryImage?: string;
  tertiaryImage?: string;
};

export type SiteNode = {
  id: string;
  slug: string;
  parentId?: string;
  type: SiteNodeType;

  title: string;
  shortTitle?: string;
  eyebrow?: string;

  route: string;
  shortDescription?: string;
  fullDescription?: string;

  priceFrom?: number;
  priceLabel?: string;
  duration?: string;
  formats?: string[];

  indications?: string[];
  contraindications?: string[];
  included?: string[];
  stages?: string[];
  methods?: string[];
  results?: string[];
  requiredDocuments?: string[];

  faq?: FAQItem[];
  relatedIds?: string[];

  image?: string;
  featured?: boolean;
  published?: boolean;

  seoTitle?: string;
  seoDescription?: string;

  /** Custom page renderer key for hand-built pages (e.g. кардіодіагностика) */
  customPage?:
    | "cardio-diagnostics"
    | "all-services"
    | "institute-partnership"
    | "mobile-rehab"
    | "rental-equipment"
    | "faq"
    | "contacts"
    | "legal"
    | "success";
  legalBody?: string[];
  pageContent?: ServicePageContent;

  children?: SiteNode[];
};
