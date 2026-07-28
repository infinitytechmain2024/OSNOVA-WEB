import { AppLink } from "@/components/app-link";
import {
  Instagram,
  Youtube,
  Facebook,
  Music2,
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  ArrowRight,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import { siteTree, CONTACTS } from "@/data/site-tree";
import { getNodeById } from "@/lib/tree";

const services = siteTree.find((n) => n.id === "services")!;
const rehab = getNodeById("rehab");
const diag = getNodeById("diag");
const recovery = getNodeById("recovery");
const education = siteTree.find((n) => n.id === "education")!;
const partnership = siteTree.find((n) => n.id === "partnership")!;
const about = siteTree.find((n) => n.id === "about")!;

const SOCIALS = [
  { Icon: Facebook, href: CONTACTS.socials.facebook, label: "Facebook" },
  { Icon: Instagram, href: CONTACTS.socials.instagram, label: "Instagram" },
  { Icon: Youtube, href: CONTACTS.socials.youtube, label: "YouTube" },
  { Icon: Music2, href: CONTACTS.socials.tiktok, label: "TikTok" },
];

type LinkItem = { title: string; route: string };

function LinkColumn({
  title,
  items,
  allRoute,
  allLabel = "Усі послуги",
}: {
  title: string;
  items: LinkItem[];
  allRoute: string;
  allLabel?: string;
}) {
  return (
    <div className="flex h-full flex-col">
      <h3 className="min-h-[2.75rem] text-sm font-bold uppercase leading-snug tracking-[0.08em] text-background">
        {title}
      </h3>
      <div className="mt-3 h-px w-full bg-background/15" />
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.route}>
            <AppLink
              to={i.route}
              className="group flex items-start gap-2 text-sm leading-snug text-background/70 transition-colors hover:text-background"
            >
              <ChevronRight className="mt-0.5 size-4 shrink-0 text-background/40 transition-colors group-hover:text-primary-foreground" />
              <span>{i.title}</span>
            </AppLink>
          </li>
        ))}
      </ul>
      <AppLink
        to={allRoute}
        className="inline-flex items-center gap-2 pt-6 text-sm font-semibold text-background transition-colors hover:text-brand-green"
      >
        {allLabel}
        <ArrowRight className="size-4" />
      </AppLink>
    </div>
  );
}

export function SiteFooter() {
  const rehabItems = (rehab?.children ?? []).slice(0, 6).map((c) => ({ title: c.title, route: c.route }));
  const diagItems = (diag?.children ?? []).slice(0, 6).map((c) => ({ title: c.title, route: c.route }));
  const recoveryItems = (recovery?.children ?? []).slice(0, 6).map((c) => ({
    title: c.title,
    route: c.route,
  }));

  return (
    <footer className="bg-navy-deep pt-14 pb-8 sm:pt-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr_1fr_1fr_1.05fr] lg:gap-8">
          {/* Бренд */}
          <div className="flex h-full flex-col">
            <AppLink to="/" className="flex flex-col leading-none text-background">
              <span className="text-xl font-bold tracking-[0.24em] sm:text-2xl sm:tracking-[0.28em]">
                ŎSNOVA
              </span>
              <span className="mt-1 text-[9px] tracking-[0.35em] text-background/70 sm:text-[10px] sm:tracking-[0.42em]">
                РЕАБІЛІТАЦІЯ
              </span>
            </AppLink>
            <div className="mt-6 h-px w-full max-w-[15rem] bg-background/15" />
            <ul className="mt-5 space-y-2 text-sm text-background/70">
              <li>
                <AppLink to={about.route} className="transition-colors hover:text-background">
                  {about.title}
                </AppLink>
              </li>
              <li>
                <AppLink to={education.route} className="transition-colors hover:text-background">
                  {education.title}
                </AppLink>
              </li>
              <li>
                <AppLink to={partnership.route} className="transition-colors hover:text-background">
                  {partnership.title}
                </AppLink>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-9 items-center justify-center rounded-full border border-background/25 text-background transition-colors hover:bg-background/10"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Реабілітація" items={rehabItems} allRoute={rehab?.route ?? services.route} />
          <LinkColumn title="Діагностика" items={diagItems} allRoute={diag?.route ?? services.route} />
          <LinkColumn
            title="Відновлення та інші послуги"
            items={recoveryItems}
            allRoute={services.route}
          />

          {/* Контакти */}
          <div className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-background/20 bg-background/[0.04] p-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-background">
                Контакти
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-background/75">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary-foreground/80" />
                  <span>{CONTACTS.addressFull}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand-green" />
                  <a href={CONTACTS.phoneHref} className="font-semibold text-background hover:underline">
                    {CONTACTS.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary-foreground/80" />
                  <a href={CONTACTS.emailHref} className="hover:text-background">
                    {CONTACTS.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary-foreground/80" />
                  <span>
                    Зал: {CONTACTS.gymHours}
                    <br />
                    Реабілітація: {CONTACTS.rehabHours}
                  </span>
                </li>
              </ul>
              <a
                href={CONTACTS.messengers.telegram}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-background/75 transition-colors hover:text-background"
              >
                <Send className="size-4 text-primary-foreground/80" /> {CONTACTS.messengers.telegramHandle}
              </a>
              <div className="mt-6 h-px w-full bg-background/15" />
              <AppLink
                to="/kontakty"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 pt-3 text-xs font-bold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Записатися на прийом
              </AppLink>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-background/15 pt-6 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ОСНОВА Реабілітація. Усі права захищені.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="/sitemap.xml" className="transition-colors hover:text-background">
              Карта сайту
            </a>
            <AppLink to="/polityka-konfidentsiinosti" className="transition-colors hover:text-background">
              Політика конфіденційності
            </AppLink>
            <AppLink to="/cookies" className="transition-colors hover:text-background">
              Політика cookies
            </AppLink>
            <AppLink to="/zhoda-na-obrobku-danykh" className="transition-colors hover:text-background">
              Згода на обробку даних
            </AppLink>
            <button
              type="button"
              aria-label="Нагору"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex size-8 items-center justify-center rounded-md border border-background/25 text-background transition-colors hover:bg-background/10"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
