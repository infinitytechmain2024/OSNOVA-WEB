import { Instagram, Youtube, Facebook, MapPin, Phone, ChevronDown, Music2 } from "lucide-react";

const NAV = [
  "ГОЛОВНА",
  "РЕАБІЛІТАЦІЯ",
  "ДІАГНОСТИКА",
  "ЧЕКАПИ",
  "СПОРТИВНА МЕДИЦИНА",
  "ФІТНЕС ТА ТРЕНАЖЕРНИЙ ЗАЛ",
  "ЦІНИ ТА ПОСЛУГИ",
  "КОНТАКТИ",
];

const SOCIALS = [Instagram, Music2, Youtube, Facebook];

export function SiteHeader() {
  return (
    <header className="w-full">
      <div className="bg-navy-deep">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-6 px-6 py-4 lg:px-10">
          <a href="/" className="flex flex-col leading-none text-background">
            <span className="text-2xl font-bold tracking-[0.28em]">ŎSNOVA</span>
            <span className="mt-1 text-[10px] tracking-[0.42em] text-background/70">
              РЕАБІЛІТАЦІЯ
            </span>
          </a>

          <div className="flex items-center gap-3 lg:ml-8">
            {SOCIALS.map((Icon, i) => (
              <span
                key={i}
                className="flex size-8 items-center justify-center rounded-full border border-background/40 text-background"
              >
                <Icon className="size-4" />
              </span>
            ))}
          </div>

          <div className="ml-auto flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2 text-sm font-medium text-background/90">
              <MapPin className="size-4" /> ТРК Буковель, Україна
            </span>
            <a
              href="tel:+380674702788"
              className="flex items-center gap-2 text-base font-bold text-background"
            >
              <Phone className="size-4" /> +380 674 702 788
            </a>
            <button className="rounded-md bg-brand-green px-6 py-3 text-sm font-bold tracking-wide text-brand-green-foreground transition-opacity hover:opacity-90">
              ЗАМОВИТИ ДЗВІНОК
            </button>
            <span className="flex items-center gap-1 text-sm font-semibold text-background">
              УКР <ChevronDown className="size-4" />
            </span>
          </div>
        </div>
      </div>

      <nav className="bg-navy">
        <ul className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-5 lg:px-10">
          {NAV.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-[13px] font-medium tracking-[0.06em] text-background/90 transition-colors hover:text-background"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
