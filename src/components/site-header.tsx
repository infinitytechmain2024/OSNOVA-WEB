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
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteTree, CONTACTS } from "@/data/site-tree";
import type { SiteNode } from "@/data/types";

const services = siteTree.find((n) => n.id === "services")!;
const rehab = services.children!.find((n) => n.id === "rehab")!;
const diag = services.children!.find((n) => n.id === "diag")!;
const checkup = services.children!.find((n) => n.id === "checkup")!;
const recovery = services.children!.find((n) => n.id === "recovery")!;
const fitnesZal = recovery.children!.find((n) => n.slug === "fitnes-zal")!;

export type NavNodeItem = {
  label: string;
  to: string;
  children?: SiteNode[];
};

export const HEADER_NAV: NavNodeItem[] = [
  { label: "ГОЛОВНА", to: "/" },
  { label: "РЕАБІЛІТАЦІЯ", to: rehab.route, children: rehab.children },
  { label: "ДІАГНОСТИКА", to: diag.route, children: diag.children },
  { label: "ЧЕКАПИ", to: checkup.route, children: checkup.children },
  { label: "СПОРТИВНА МЕДИЦИНА", to: recovery.route, children: recovery.children },
  { label: "ФІТНЕС ТА ТРЕНАЖЕРНИЙ ЗАЛ", to: fitnesZal.route },
  { label: "ЦІНИ ТА ПОСЛУГИ", to: services.route, children: services.children },
  { label: "КОНТАКТИ", to: "/kontakty" },
];

const SOCIALS = [Instagram, Music2, Youtube, Facebook];
const LANGS = ["УКР", "RU", "EN"];

function DesktopNavItem({ item }: { item: NavNodeItem }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeChildId, setActiveChildId] = React.useState<string | null>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveChildId(null);
    }, 180);
  };

  const activeChild = item.children?.find((c) => c.id === activeChildId);
  const hasLevel2 = activeChild?.children && activeChild.children.length > 0;
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li
      className="relative group py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-1">
        <AppLink
          to={item.to}
          className="text-[13px] font-medium tracking-[0.06em] text-background/90 transition-colors hover:text-white flex items-center gap-1 py-1"
          activeProps={{ className: "text-white font-bold" }}
        >
          {item.label}
          {hasChildren && (
            <ChevronDown className="size-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
          )}
        </AppLink>
      </div>

      {/* Level 1 Dropdown */}
      {isOpen && hasChildren && (
        <div className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex bg-navy-deep/95 backdrop-blur-md border border-border/40 rounded-xl p-2 shadow-2xl min-w-[280px]">
            {/* Level 1 List */}
            <ul className="w-full space-y-1 min-w-[260px]">
              {item.children!.map((child) => {
                const childHasChildren = child.children && child.children.length > 0;
                const isHovered = activeChildId === child.id;

                return (
                  <li
                    key={child.id}
                    className="relative"
                    onMouseEnter={() => setActiveChildId(child.id)}
                  >
                    <AppLink
                      to={child.route}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between gap-3 px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-colors text-background/90 hover:text-white hover:bg-primary/25",
                        isHovered && "bg-primary/25 text-white font-bold"
                      )}
                    >
                      <span className="truncate">{child.title}</span>
                      {childHasChildren && (
                        <ChevronRight className="size-3.5 shrink-0 opacity-70 text-primary-foreground" />
                      )}
                    </AppLink>
                  </li>
                );
              })}
            </ul>

            {/* Level 2 Flyout Panel */}
            {hasLevel2 && activeChild && (
              <div className="border-l border-border/30 pl-2 ml-2 min-w-[300px] max-w-[360px] max-h-[500px] overflow-y-auto">
                <p className="px-3 py-2 text-[10px] font-bold tracking-widest text-primary uppercase border-b border-border/30">
                  {activeChild.title}
                </p>
                <ul className="mt-1.5 space-y-1">
                  {activeChild.children!.map((sub) => (
                    <li key={sub.id}>
                      <AppLink
                        to={sub.route}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-xs font-medium text-background/85 hover:text-white hover:bg-primary/20 rounded-lg transition-colors"
                      >
                        {sub.title}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </li>
  );
}

function MobileNavItem({ item, onClose }: { item: NavNodeItem; onClose: () => void }) {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedChildId, setExpandedChildId] = React.useState<string | null>(null);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className="border-b border-border/60">
      <div className="flex items-center justify-between py-3">
        <AppLink
          to={item.to}
          onClick={onClose}
          className="font-medium text-navy text-sm hover:text-primary transition-colors"
          activeProps={{ className: "text-primary font-bold" }}
        >
          {item.label}
        </AppLink>
        {hasChildren && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-label="Переключити підменю"
            className="p-1.5 text-navy/70 hover:text-navy"
          >
            <ChevronDown className={cn("size-4 transition-transform", expanded && "rotate-180")} />
          </button>
        )}
      </div>

      {expanded && hasChildren && (
        <ul className="pl-4 pb-3 space-y-2 border-l-2 border-primary/40 ml-2">
          {item.children!.map((child) => {
            const childHasChildren = child.children && child.children.length > 0;
            const isChildExpanded = expandedChildId === child.id;

            return (
              <li key={child.id}>
                <div className="flex items-center justify-between py-1.5">
                  <AppLink
                    to={child.route}
                    onClick={onClose}
                    className="text-xs font-semibold text-navy/90 hover:text-primary transition-colors"
                  >
                    {child.title}
                  </AppLink>
                  {childHasChildren && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedChildId((curr) => (curr === child.id ? null : child.id))
                      }
                      className="p-1 text-navy/60"
                    >
                      <ChevronDown
                        className={cn("size-3.5 transition-transform", isChildExpanded && "rotate-180")}
                      />
                    </button>
                  )}
                </div>

                {isChildExpanded && childHasChildren && (
                  <ul className="pl-3 py-1 space-y-1.5 border-l border-border/60 ml-1">
                    {child.children!.map((sub) => (
                      <li key={sub.id}>
                        <AppLink
                          to={sub.route}
                          onClick={onClose}
                          className="block text-[11px] text-navy/75 hover:text-primary py-1"
                        >
                          {sub.title}
                        </AppLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full relative z-40">
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
                className="flex size-8 items-center justify-center rounded-full border border-background/40 text-background hover:bg-background/10 transition-colors"
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
              className="hidden items-center gap-2 text-base font-bold text-background sm:flex hover:text-primary-foreground transition-colors"
            >
              <Phone className="size-4" /> {CONTACTS.phone}
            </a>
            <AppLink
              to="/kontakty"
              className="hidden rounded-md bg-brand-green px-6 py-3 text-sm font-bold tracking-wide text-brand-green-foreground transition-all hover:bg-brand-green/90 md:inline-block"
            >
              ЗАПИСАТИСЯ
            </AppLink>
            <AppLink
              to="/poshuk"
              aria-label="Пошук по сайту"
              className="flex size-9 items-center justify-center rounded-full border border-background/40 text-background hover:bg-background/10 transition-colors"
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
        <ul className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3 lg:px-10">
          {HEADER_NAV.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <div className="border-b border-border bg-card lg:hidden">
          <ul className="mx-auto max-w-[1600px] px-4 py-2">
            {HEADER_NAV.map((item) => (
              <MobileNavItem key={item.label} item={item} onClose={() => setMenuOpen(false)} />
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
