import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Instagram,
  Youtube,
  Facebook,
  MapPin,
  Phone,
  ChevronDown,
  ChevronRight,
  Music2,
  Menu,
  X,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteTree, CONTACTS } from "@/data/site-tree";
import type { SiteNode } from "@/data/types";

const services = siteTree.find((n) => n.id === "services")!;
const education = siteTree.find((n) => n.id === "education")!;
const partnership = siteTree.find((n) => n.id === "partnership")!;
const about = siteTree.find((n) => n.id === "about")!;

const SOCIALS = [Instagram, Music2, Youtube, Facebook];
const LANGS = ["УКР", "RU", "EN"];

function MegaMenu({ node }: { node: SiteNode }) {
  return (
    <div className="invisible absolute top-full left-0 z-50 w-full opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <div className="mx-auto max-w-[1600px] px-6 pt-2 lg:px-10">
        <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-lg md:grid-cols-3">
          {(node.children ?? []).map((cat) => (
            <div key={cat.id}>
              <Link
                to={cat.route}
                className="text-sm font-bold tracking-[0.06em] text-primary hover:underline"
              >
                {cat.title.toUpperCase()}
              </Link>
              <ul className="mt-4 space-y-2">
                {(cat.children ?? []).slice(0, 6).map((child) => (
                  <li key={child.id}>
                    <Link
                      to={child.route}
                      className="text-sm text-navy/80 transition-colors hover:text-primary"
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <Link
              to={node.route}
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-4 text-sm font-bold text-navy transition-colors hover:bg-accent"
            >
              Усі послуги <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileBranch({
  node,
  depth,
  onNavigate,
}: {
  node: SiteNode;
  depth: number;
  onNavigate: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  const hasChildren = !!node.children?.length;

  return (
    <li>
      <div className="flex items-center gap-2 border-b border-border/60">
        <Link
          to={node.route}
          onClick={onNavigate}
          style={{ paddingLeft: depth * 14 }}
          className="min-h-12 flex-1 py-3 text-[15px] font-medium text-navy"
          activeProps={{ className: "text-primary font-bold" }}
        >
          {node.title}
        </Link>
        {hasChildren && (
          <button
            type="button"
            aria-label={open ? `Згорнути ${node.title}` : `Розгорнути ${node.title}`}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 shrink-0 items-center justify-center rounded-full text-navy/70"
          >
            <ChevronDown className={cn("size-5 transition-transform", open && "rotate-180")} />
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul>
          {node.children!.map((child) => (
            <MobileBranch key={child.id} node={child} depth={depth + 1} onNavigate={onNavigate} />
          ))}
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

  const topNav = [services, education, partnership, about];

  return (
    <header className="w-full">
      <div className="bg-navy-deep">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-6 px-6 py-4 lg:px-10">
          <Link to="/" className="flex flex-col leading-none text-background">
            <span className="text-2xl font-bold tracking-[0.28em]">ŎSNOVA</span>
            <span className="mt-1 text-[10px] tracking-[0.42em] text-background/70">
              РЕАБІЛІТАЦІЯ
            </span>
          </Link>

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
            <Link
              to="/kontakty"
              className="hidden rounded-md bg-brand-green px-6 py-3 text-sm font-bold tracking-wide text-brand-green-foreground transition-opacity hover:opacity-90 md:inline-block"
            >
              ЗАПИСАТИСЯ
            </Link>
            <Link
              to="/poshuk"
              aria-label="Пошук по сайту"
              className="flex size-9 items-center justify-center rounded-full border border-background/40 text-background"
            >
              <Search className="size-4" />
            </Link>
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

      <nav className="relative hidden bg-navy lg:block">
        <ul className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-x-8 gap-y-3 px-6 py-5 lg:px-10">
          {topNav.map((item) => (
            <li key={item.id} className={item.id === "services" ? "group static" : undefined}>
              <Link
                to={item.route}
                className="flex items-center gap-1 text-[13px] font-medium tracking-[0.06em] text-background/90 transition-colors hover:text-background"
                activeProps={{ className: "text-background font-bold" }}
              >
                {item.title.toUpperCase()}
                {item.children?.length ? <ChevronDown className="size-3.5" /> : null}
              </Link>
              {item.id === "services" && <MegaMenu node={item} />}
            </li>
          ))}
          <li>
            <Link
              to="/faq"
              className="text-[13px] font-medium tracking-[0.06em] text-background/90 hover:text-background"
            >
              ПИТАННЯ ТА ВІДПОВІДІ
            </Link>
          </li>
          <li>
            <Link
              to="/kontakty"
              className="text-[13px] font-medium tracking-[0.06em] text-background/90 hover:text-background"
            >
              КОНТАКТИ
            </Link>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div className="border-b border-border bg-card lg:hidden">
          <ul className="mx-auto max-w-[1600px] px-4 py-2">
            {topNav.map((item) => (
              <MobileBranch
                key={item.id}
                node={item}
                depth={0}
                onNavigate={() => setMenuOpen(false)}
              />
            ))}
            <li>
              <Link to="/faq" className="block border-b border-border/60 py-3 font-medium text-navy">
                Питання та відповіді
              </Link>
            </li>
            <li>
              <Link to="/kontakty" className="block py-3 font-medium text-navy">
                Контакти
              </Link>
            </li>
            <li className="py-4">
              <Link
                to="/kontakty"
                className="block rounded-md bg-brand-green px-6 py-4 text-center text-sm font-bold text-brand-green-foreground"
              >
                ЗАПИСАТИСЯ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
