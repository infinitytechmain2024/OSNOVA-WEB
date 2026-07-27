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
  customPage?: "cardio-diagnostics" | "all-services" | "faq" | "contacts" | "legal" | "success";
  legalBody?: string[];

  children?: SiteNode[];
};
