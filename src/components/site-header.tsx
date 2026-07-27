import { AppLink } from "@/components/app-link";
import * as React from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  Instagram,
  Youtube,
  Facebook,
  MapPin,
  Phone,
  Music2,
  Menu,
  X,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteTree, CONTACTS } from "@/data/site-tree";

const services = siteTree.find((n) => n.id === "services")!;
const rehab = services.children!.find((n) => n.id === "rehab")!;
const diag = services.children!.find((n) => n.id === "diag")!;
const checkup = services.children!.find((n) => n.id === "checkup")!;
const recovery = services.children!.find((n) => n.id === "recovery")!;
const fitnesZal = recovery.children!.find((n) => n.slug === "fitnes-zal")!;

const HEADER_NAV = [
  { label: "ГОЛОВНА", to: "/" },
  { label: "РЕАБІЛІТАЦІЯ", to: rehab.route },
  { label: "ДІАГНОСТИКА", to: diag.route },
  { label: "ЧЕКАПИ", to: checkup.route },
  { label: "СПОРТИВНА МЕДИЦИНА", to: recovery.route },
  { label: "ФІТНЕС ТА ТРЕНАЖЕРНИЙ ЗАЛ", to: fitnesZal.route },
  { label: "ЦІНИ ТА ПОСЛУГИ", to: services.route },
  { label: "КОНТАКТИ", to: "/kontakty" },
] as const;

const SOCIALS = [Instagram, Music2, Youtube, Facebook];
const LANGS = ["УКР", "RU", "EN"];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full">
      <div className="bg-navy-deep">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-6 px-6 py-4 lg:px-10">
          <AppLink to="/" className="flex flex-col leading-none text-background">
            <span className="text-2xl font-bold tracking-[0.28em]">ŎSNOVA</span>
            <span className="mt-1 text-[10px] tracking-[0.42em] text-background/70">
              РЕАБІЛІТАЦІЯ
            </span>
          </AppLink>

          <div className="hidden items-center gap-3 lg:ml-8 lg:flex">
            {SOCIALS.map((Icon, i) => (
              <span
                key={i}
                className="flex size-8 items-center justify-center rounded-full border border-background/40 text-background"
              >
                <Icon className="size-4" />
              </span>
            ))}
          </div>

          <div className="ml-auto flex flex-wrap items-center gap-4 lg:gap-6">
            <span className="hidden items-center gap-2 text-sm font-medium text-background/90 xl:flex">
              <MapPin className="size-4" /> {CONTACTS.address}
            </span>
            <a
              href={CONTACTS.phoneHref}
              className="hidden items-center gap-2 text-base font-bold text-background sm:flex"
            >
              <Phone className="size-4" /> {CONTACTS.phone}
            </a>
            <AppLink
              to="/kontakty"
              className="hidden rounded-md bg-brand-green px-6 py-3 text-sm font-bold tracking-wide text-brand-green-foreground transition-opacity hover:opacity-90 md:inline-block"
            >
              ЗАПИСАТИСЯ
            </AppLink>
            <AppLink
              to="/poshuk"
              aria-label="Пошук по сайту"
              className="flex size-9 items-center justify-center rounded-full border border-background/40 text-background"
            >
              <Search className="size-4" />
            </AppLink>
            <div className="hidden items-center gap-2 text-sm font-semibold text-background lg:flex">
              {LANGS.map((l, i) => (
                <span key={l} className={cn(i === 0 ? "text-background" : "text-background/50")}>
                  {l}
                </span>
              ))}
            </div>
            <button
              type="button"
              aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex size-10 items-center justify-center rounded-md border border-background/40 text-background lg:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden bg-navy lg:block">
        <ul className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-5 lg:px-10">
          {HEADER_NAV.map((item) => (
            <li key={item.label}>
              <AppLink
                to={item.to}
                className="text-[13px] font-medium tracking-[0.06em] text-background/90 transition-colors hover:text-background"
                activeProps={{ className: "text-background font-bold" }}
              >
                {item.label}
              </AppLink>
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <div className="border-b border-border bg-card lg:hidden">
          <ul className="mx-auto max-w-[1600px] px-4 py-2">
            {HEADER_NAV.map((item) => (
              <li key={item.label}>
                <AppLink
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-border/60 py-3 font-medium text-navy"
                  activeProps={{ className: "text-primary font-bold" }}
                >
                  {item.label}
                </AppLink>
              </li>
            ))}
            <li className="py-4">
              <AppLink
                to="/kontakty"
                className="block rounded-md bg-brand-green px-6 py-4 text-center text-sm font-bold text-brand-green-foreground"
              >
                ЗАПИСАТИСЯ
              </AppLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
