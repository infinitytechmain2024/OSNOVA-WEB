import { Instagram, Youtube, Facebook, Music2, Phone, MapPin } from "lucide-react";
import { siteTree, CONTACTS } from "@/data/site-tree";

const services = siteTree.find((n) => n.id === "services")!;
const education = siteTree.find((n) => n.id === "education")!;
const partnership = siteTree.find((n) => n.id === "partnership")!;
const about = siteTree.find((n) => n.id === "about")!;

const SOCIALS = [Instagram, Music2, Youtube, Facebook];

function Column({ title, items }: { title: string; items: { title: string; route: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold tracking-[0.08em] text-background">{title}</h3>
      <ul className="mt-5 space-y-2">
        {items.map((i) => (
          <li key={i.route}>
            <AppLink to={i.route} className="text-sm text-background/70 hover:text-background">
              {i.title}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep pt-16 pb-8">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <AppLink to="/" className="flex flex-col leading-none text-background">
              <span className="text-2xl font-bold tracking-[0.28em]">ŎSNOVA</span>
              <span className="mt-1 text-[10px] tracking-[0.42em] text-background/70">
                РЕАБІЛІТАЦІЯ
              </span>
            </AppLink>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70">
              Медичний та реабілітаційний центр: діагностика, програми відновлення після
              захворювань, травм і операцій, підтримка фізичної активності.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((Icon, i) => (
                <span
                  key={i}
                  className="flex size-9 items-center justify-center rounded-full border border-background/30 text-background"
                >
                  <Icon className="size-4" />
                </span>
              ))}
            </div>
          </div>

          <Column
            title="НАПРЯМИ"
            items={(services.children ?? []).map((c) => ({ title: c.title, route: c.route }))}
          />
          <Column
            title="НАВЧАННЯ ТА ПАРТНЕРСТВО"
            items={[
              { title: education.title, route: education.route },
              ...(education.children ?? []).map((c) => ({ title: c.title, route: c.route })),
              { title: partnership.title, route: partnership.route },
            ]}
          />
          <div>
            <h3 className="text-sm font-bold tracking-[0.08em] text-background">КОНТАКТИ</h3>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" /> {CONTACTS.address}
              </li>
              <li>
                <a
                  href={CONTACTS.phoneHref}
                  className="flex items-center gap-2 font-bold text-background"
                >
                  <Phone className="size-4" /> {CONTACTS.phone}
                </a>
              </li>
              <li>
                <AppLink to={about.route} className="hover:text-background">
                  {about.title}
                </AppLink>
              </li>
              <li>
                <AppLink to="/kontakty" className="hover:text-background">
                  Контакти
                </AppLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-background/15 pt-6 text-xs text-background/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ОСНОВА Реабілітація</p>
          <div className="flex flex-wrap gap-6">
            <AppLink to="/polityka-konfidentsiinosti" className="hover:text-background">
              Політика конфіденційності
            </AppLink>
            <AppLink to="/cookies" className="hover:text-background">
              Політика cookies
            </AppLink>
            <AppLink to="/zhoda-na-obrobku-danykh" className="hover:text-background">
              Згода на обробку даних
            </AppLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
