import serviceRehab from "@/assets/service-rehab.jpg";
import { AppLink } from "@/components/app-link";
import { ConsultationForm } from "@/components/consultation-form";
import { Breadcrumbs, FAQAccordion, PageContainer, SectionHeader } from "@/components/blocks";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACTS } from "@/data/site-tree";
import type { SiteNode } from "@/data/types";
import { getBreadcrumbs } from "@/lib/tree";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Share2,
  Navigation,
  Compass,
} from "lucide-react";

// Brand icons or custom SVGs for Telegram, WhatsApp, Viber, Instagram, Facebook, YouTube, TikTok
function TelegramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.37-.27-2.04-.49-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8.01-3.45 3.81-1.59 4.6-1.87 5.12-1.88.11 0 .37.03.54.17.14.12.18.28.2.4.01.06.02.22 0 .37z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ViberIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.782 14.195c-.567-.406-1.18-.745-1.777-1.077-.38-.21-.734-.23-1.096.113-.349.333-.717.653-1.066.987-.13.124-.265.186-.44.116-.395-.158-.783-.33-1.157-.527-1.572-.828-2.846-1.975-3.864-3.376-.296-.407-.549-.844-.755-1.3-.086-.189-.045-.333.104-.475.32-.305.626-.622.935-.937.382-.39.387-.768.163-1.189-.313-.586-.642-1.168-1.018-1.722-.249-.368-.58-.518-.992-.484-.523.044-.984.249-1.385.589-.705.597-1.074 1.373-1.144 2.285-.112 1.458.337 2.808 1.017 4.053 1.341 2.456 3.197 4.417 5.566 5.86 1.439.876 2.986 1.41 4.654 1.503.96.054 1.846-.206 2.576-.84.453-.393.755-.873.882-1.464.088-.415-.052-.776-.408-1.031zM14.545 3c.319 0 .638.026.953.078 1.956.326 3.526 1.896 3.852 3.852.052.315.078.634.078.953h-1.353c0-.233-.018-.465-.056-.694-.241-1.442-1.393-2.594-2.835-2.835-.229-.038-.461-.056-.694-.056V3zM14.545 6.061c.159 0 .319.013.476.039.81.135 1.454.779 1.589 1.589.026.157.039.317.039.476h-1.353c0-.079-.006-.159-.02-.236-.056-.33-.315-.589-.645-.645-.077-.014-.157-.02-.236-.02V6.061z" />
    </svg>
  );
}

function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function MallBuildingIcon({ className = "size-5 text-slate-600" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14" />
      <path d="M9 21v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4" />
      <path d="M8 10h2v2H8zM14 10h2v2h-2zM8 14h2v2H8zM14 14h2v2h-2z" />
      <path d="M9 3h6" />
    </svg>
  );
}

function CableCarIcon({ className = "size-5 text-slate-600" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4.5l20-2" />
      <path d="M12 3.5v4" />
      <rect x="6.5" y="9" width="11" height="8.5" rx="2.5" />
      <path d="M8.5 11.5h7v3h-7z" />
      <path d="M9 17.5v2.5M15 17.5v2.5" />
      <path d="M7.5 20h9" />
    </svg>
  );
}

function ParkingBadgeIcon({ className = "size-5 text-slate-600" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M9.5 16V8h4a2.5 2.5 0 0 1 0 5H9.5" strokeWidth="1.8" />
    </svg>
  );
}

export function ContactsPage({ node }: { node: SiteNode }) {

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Breadcrumb Header */}
      <PageContainer className="py-6 sm:py-8">
        <Breadcrumbs items={getBreadcrumbs(node)} />
      </PageContainer>

      <main>
        {/* Top Hero Section */}
        <PageContainer className="pb-12">
          <SectionHeader
            eyebrow="КОНТАКТИ ТА ЗВ'ЯЗОК"
            title="Як з нами зв'язатися"
            text="Оберіть найзручніший спосіб зв'язку — зателефонуйте, напишіть у месенджер або заповніть форму зворотного зв'язку. Ми завжди раді надати підтримку."
          />

          {/* Quick Contact Cards Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {/* Phone Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Phone className="size-6" />
              </div>
              <p className="mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                Телефон Центру
              </p>
              <a
                href={CONTACTS.phoneHref}
                className="mt-2 block text-base font-bold text-navy hover:text-primary transition-colors truncate"
              >
                {CONTACTS.phone}
              </a>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Дзвінки безкоштовні</span>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-amber-500/40 hover:shadow-md">
              <div className="flex size-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition-transform group-hover:scale-110">
                <Clock className="size-6" />
              </div>
              <p className="mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                Графік роботи
              </p>
              <div className="mt-3 space-y-2 text-xs font-bold text-navy">
                <div className="flex items-center justify-between border-b border-border/50 pb-1.5">
                  <span className="text-muted-foreground font-semibold">Тренажерний зал:</span>
                  <span className="text-primary font-extrabold">{CONTACTS.gymHours}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-semibold">Реабілітація:</span>
                  <span className="text-emerald-600 font-extrabold">{CONTACTS.rehabHours}</span>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground">
                Прийом за попереднім записом
              </p>
            </div>

            {/* Address Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-emerald-500/40 hover:shadow-md">
              <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-transform group-hover:scale-110">
                <MapPin className="size-6" />
              </div>
              <p className="mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                Де ми знаходимось
              </p>
              <p className="mt-2 text-sm font-bold text-navy">
                {CONTACTS.address}
              </p>
              <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                {CONTACTS.addressFull}
              </p>
            </div>

            {/* Messengers Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-sky-500/40 hover:shadow-md">
              <div className="flex size-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition-transform group-hover:scale-110">
                <MessageCircle className="size-6" />
              </div>
              <p className="mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                Швидкі Месенджери
              </p>
              <p className="mt-2 text-xs font-semibold text-navy">
                Telegram, WhatsApp, Viber
              </p>
              <div className="mt-3 flex items-center gap-2">
                <a
                  href={CONTACTS.messengers.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-[#229ED9]/10 px-2 py-1 text-[11px] font-medium text-[#229ED9] hover:bg-[#229ED9] hover:text-white transition-colors"
                >
                  <TelegramIcon className="size-3" /> Telegram
                </a>
                <a
                  href={CONTACTS.messengers.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-[#25D366]/10 px-2 py-1 text-[11px] font-medium text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                >
                  <WhatsAppIcon className="size-3" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-indigo-500/40 hover:shadow-md">
              <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 transition-transform group-hover:scale-110">
                <Mail className="size-6" />
              </div>
              <p className="mt-4 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase">
                Електронна пошта
              </p>
              <a
                href={CONTACTS.emailHref}
                className="mt-2 block text-xs font-bold text-navy hover:text-primary transition-colors truncate"
              >
                {CONTACTS.email}
              </a>
              <p className="mt-4 text-xs text-muted-foreground">
                Для офіційних звернень
              </p>
            </div>
          </div>
        </PageContainer>

        {/* Dedicated Block: Contact Form, Messengers & Social Networks */}
        <section className="bg-slate-50/80 py-16 border-y border-border/60">
          <PageContainer>
            <div className="max-w-3xl text-left">
              <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl text-navy tracking-tight">
                Оберіть зручний спосіб зв'язку
              </h2>
              <div className="mt-5 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Заповніть форму для запису на консультацію або зв’яжіться з адміністратором у
                зручному месенджері.
              </p>
            </div>

            <div className="mt-6 border-t border-slate-200" aria-hidden="true" />

            <div className="mt-6 grid gap-8 lg:gap-10 lg:grid-cols-12 items-stretch">
              {/* Left Column: Form (7 cols) */}
              <div className="lg:col-span-7 flex flex-col">
                <ConsultationForm
                  title="Записатися на консультацію"
                  subtitle="Заповніть форму нижче, і наш адміністратор зв'яжеться з вами для уточнення всіх деталей."
                  className="bg-white p-6 sm:p-10 shadow-sm border border-border h-full flex flex-col justify-between rounded-3xl"
                  showPrivacyConsent
                />
              </div>

              {/* Right Column: Messengers & Social Networks (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Direct Messengers Block */}
                <div className="rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                      <MessageCircle className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy">Прямі месенджери</h3>
                      <p className="text-xs text-muted-foreground">Миттєвий чат з адміністратором</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {/* Telegram */}
                    <a
                      href={CONTACTS.messengers.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-border bg-slate-50/50 p-4 transition-all hover:border-[#229ED9]/50 hover:bg-[#229ED9]/5 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-[#229ED9] text-white shadow-sm transition-transform group-hover:scale-105">
                          <TelegramIcon className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-navy group-hover:text-[#229ED9] transition-colors">
                            Telegram
                          </p>
                          <p className="text-xs text-muted-foreground">{CONTACTS.messengers.telegramHandle}</p>
                        </div>
                      </div>
                      <ExternalLink className="size-4 text-muted-foreground group-hover:text-[#229ED9] transition-colors" />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={CONTACTS.messengers.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-border bg-slate-50/50 p-4 transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/5 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm transition-transform group-hover:scale-105">
                          <WhatsAppIcon className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-navy group-hover:text-[#25D366] transition-colors">
                            WhatsApp
                          </p>
                          <p className="text-xs text-muted-foreground">{CONTACTS.phone}</p>
                        </div>
                      </div>
                      <ExternalLink className="size-4 text-muted-foreground group-hover:text-[#25D366] transition-colors" />
                    </a>

                    {/* Viber */}
                    <a
                      href={CONTACTS.messengers.viber}
                      className="group flex items-center justify-between rounded-2xl border border-border bg-slate-50/50 p-4 transition-all hover:border-[#7360F2]/50 hover:bg-[#7360F2]/5 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-[#7360F2] text-white shadow-sm transition-transform group-hover:scale-105">
                          <ViberIcon className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-navy group-hover:text-[#7360F2] transition-colors">
                            Viber
                          </p>
                          <p className="text-xs text-muted-foreground">{CONTACTS.phone}</p>
                        </div>
                      </div>
                      <ExternalLink className="size-4 text-muted-foreground group-hover:text-[#7360F2] transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Social Networks Block */}
                <div className="rounded-3xl border border-border bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                      <Share2 className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy">Стежити за основою в соціальних мережах</h3>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {/* Instagram */}
                    <a
                      href={CONTACTS.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-border bg-slate-50/50 p-3.5 transition-all hover:border-pink-500/40 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-sm">
                        <InstagramIcon className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-navy truncate">Instagram</p>
                        <p className="text-[10px] text-muted-foreground">@osnova_rehab</p>
                      </div>
                    </a>

                    {/* Facebook */}
                    <a
                      href={CONTACTS.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-border bg-slate-50/50 p-3.5 transition-all hover:border-blue-600/40 hover:bg-blue-600/5"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-sm">
                        <FacebookIcon className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-navy truncate">Facebook</p>
                        <p className="text-[10px] text-muted-foreground">Основа Реабілітація</p>
                      </div>
                    </a>

                    {/* YouTube */}
                    <a
                      href={CONTACTS.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-border bg-slate-50/50 p-3.5 transition-all hover:border-red-600/40 hover:bg-red-600/5"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#FF0000] text-white shadow-sm">
                        <YoutubeIcon className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-navy truncate">YouTube</p>
                        <p className="text-[10px] text-muted-foreground">Основа Rehab</p>
                      </div>
                    </a>

                    {/* TikTok */}
                    <a
                      href={CONTACTS.socials.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-border bg-slate-50/50 p-3.5 transition-all hover:border-slate-900/40 hover:bg-slate-900/5"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                        <TikTokIcon className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-navy truncate">TikTok</p>
                        <p className="text-[10px] text-muted-foreground">@osnova_rehab</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* Location & Map Block - "Де ми знаходимось" */}
        <section id="de-my-znakhodymos" className="py-16">
          <PageContainer>
            <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="grid lg:grid-cols-12">
                {/* Left Side Details */}
                <div className="p-8 lg:p-12 lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-700 uppercase">
                      <Navigation className="size-3.5" /> ГЕОЛОКАЦІЯ
                    </span>
                    <h3 className="mt-4 text-2xl font-extrabold text-navy sm:text-3xl">
                      Де ми знаходимося
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      Наш єдиний медичний та реабілітаційний центр розташований у серці курорту Буковель. Для вашої зручності у центрі функціонують два відділення з власними графіками прийому.
                    </p>

                    <div className="mt-8 space-y-5 text-sm">
                      {/* Address item */}
                      <div className="flex items-start gap-3.5 rounded-2xl bg-slate-50/80 p-4 border border-border/60">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <MapPin className="size-5" />
                        </div>
                        <div>
                          <strong className="block text-navy font-bold text-xs uppercase tracking-wider text-muted-foreground">Точна адреса:</strong>
                          <span className="text-navy font-bold text-sm block mt-0.5">{CONTACTS.addressFull}</span>
                          <span className="text-xs text-muted-foreground block mt-0.5">Курортний комплекс ТРК Буковель</span>
                        </div>
                      </div>

                      {/* Landmarks Card - "Орієнтири" */}
                      <div className="rounded-2xl bg-white p-4 border border-border/60 shadow-2xs space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="flex size-5.5 shrink-0 items-center justify-center rounded-full border border-emerald-500 text-emerald-600 bg-emerald-50/40">
                            <Compass className="size-3.5" />
                          </div>
                          <strong className="text-xs font-black uppercase tracking-wider text-slate-700">
                            ОРІЄНТИРИ:
                          </strong>
                        </div>

                        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 text-xs sm:text-sm pt-0.5">
                          {/* Item 1: ТРК Бука */}
                          <div className="flex items-center gap-2 font-bold text-navy">
                            <span className="size-2.5 shrink-0 rounded-full bg-emerald-500" />
                            <span>ТРК Бука</span>
                            <MallBuildingIcon className="size-5 text-slate-500 shrink-0 ml-0.5" />
                          </div>

                          {/* Item 2: Підйомник №7 */}
                          <div className="flex items-center gap-2 font-bold text-navy">
                            <span className="size-2.5 shrink-0 rounded-full bg-emerald-500" />
                            <span>Підйомник №7</span>
                            <CableCarIcon className="size-5 text-slate-500 shrink-0 ml-0.5" />
                          </div>

                          {/* Item 3: Паркінг №2 */}
                          <div className="flex items-center gap-2 font-bold text-navy">
                            <span className="size-2.5 shrink-0 rounded-full bg-emerald-500" />
                            <span>Паркінг №2</span>
                            <ParkingBadgeIcon className="size-5 text-slate-500 shrink-0 ml-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Working Hours split item */}
                      <div className="rounded-2xl bg-slate-50/80 p-4 border border-border/60 space-y-3">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          <Clock className="size-4 text-amber-600" />
                          <span>Графік роботи (2 відділення):</span>
                        </div>
                        
                        <div className="space-y-2 pt-1 text-xs">
                          {/* Gym schedule */}
                          <div className="flex items-center justify-between rounded-xl bg-white p-3 border border-border/50 shadow-2xs">
                            <div className="flex items-center gap-2.5">
                              <span className="inline-block size-2.5 rounded-full bg-amber-500 animate-pulse" />
                              <div>
                                <span className="font-bold text-navy block leading-tight">Тренажерний зал</span>
                                <span className="text-[10px] text-muted-foreground">Щодня (Пн – Нд)</span>
                              </div>
                            </div>
                            <span className="font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-lg text-xs">
                              {CONTACTS.gymHours}
                            </span>
                          </div>

                          {/* Rehab schedule */}
                          <div className="flex items-center justify-between rounded-xl bg-white p-3 border border-border/50 shadow-2xs">
                            <div className="flex items-center gap-2.5">
                              <span className="inline-block size-2.5 rounded-full bg-emerald-500 animate-pulse" />
                              <div>
                                <span className="font-bold text-navy block leading-tight">Реабілітаційне відділення</span>
                                <span className="text-[10px] text-muted-foreground">Щодня (Пн – Нд)</span>
                              </div>
                            </div>
                            <span className="font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg text-xs">
                              {CONTACTS.rehabHours}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/80 flex flex-wrap gap-3">
                    <a
                      href="https://maps.google.com/?q=Bukovel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white hover:bg-primary/95 transition-colors shadow-sm"
                    >
                      <Navigation className="size-4" /> Google Maps
                    </a>
                    <a
                      href="https://waze.com/ul?q=Bukovel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-slate-50 px-5 py-2.5 text-xs font-bold text-navy hover:bg-slate-100 transition-colors shadow-2xs"
                    >
                      <ExternalLink className="size-4 text-sky-600" /> Waze Навігатор
                    </a>
                  </div>
                </div>

                {/* Right Side Map Visual Box */}
                <div className="lg:col-span-7 bg-slate-900 relative min-h-[420px] flex items-center justify-center p-6 lg:p-10 overflow-hidden">
                  <iframe
                    title="Карта локації ОСНОВА Реабілітація Буковель"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10565.410940562477!2d24.4077876!3d48.3540845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47373fefbc3a7d57%3A0x6b71f9cf74092b3a!2sBukovel!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua"
                    className="absolute inset-0 size-full border-0 opacity-80 filter contrast-[1.05]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent pointer-events-none" />

                  {/* Location Pin & Hours Overlay Card */}
                  <div className="relative z-10 max-w-md w-full rounded-2xl bg-white/95 p-4 shadow-2xl border border-white/50 backdrop-blur-md">
                    <div className="overflow-hidden rounded-xl border border-border/60 bg-slate-100">
                      <img
                        src={serviceRehab}
                        alt="Центр «ŎSNOVA» у Буковелі"
                        className="h-36 w-full object-cover"
                      />
                    </div>

                    <div className="mt-4 text-center">
                      <span className="inline-block rounded-full bg-emerald-100 px-3 py-0.5 text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                        📍 ДЕ МИ ЗНАХОДИМОСЬ
                      </span>
                      <h4 className="mt-2 text-lg font-extrabold text-navy">Центр «ŎSNOVA» у Буковелі</h4>
                      <p className="mt-1 text-xs text-muted-foreground font-medium">
                        {CONTACTS.addressFull}
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-2 text-left pt-3 border-t border-border/60">
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-border/40">
                          <p className="text-[10px] font-bold text-muted-foreground uppercase">Тренажерний зал</p>
                          <p className="text-xs font-extrabold text-navy mt-0.5">{CONTACTS.gymHours}</p>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-border/40">
                          <p className="text-[10px] font-bold text-muted-foreground uppercase">Реабілітація</p>
                          <p className="text-xs font-extrabold text-navy mt-0.5">{CONTACTS.rehabHours}</p>
                        </div>
                      </div>

                      <a
                        href="https://maps.google.com/?q=Bukovel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center justify-center gap-2 w-full rounded-xl bg-navy py-2.5 text-xs font-bold text-white hover:bg-navy-deep transition-colors shadow-sm"
                      >
                        <Navigation className="size-3.5" /> Побудувати маршрут
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* FAQ Section */}
        <PageContainer className="pb-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl md:text-4xl">Питання та відповіді</h2>
            <div className="mx-auto mt-4 sm:mt-6 h-1 w-16 rounded-full bg-primary" />
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <FAQAccordion
              items={[
                {
                  question: "Як підготуватися до першого прийому?",
                  answer:
                    "Рекомендуємо мати при собі наявні медичні виписки, результати попередніх обстежень (МРТ, КТ, ЕКГ, лабораторні аналізи), а також зручний спортивний або вільний одяг для огляду фізичного терапевта.",
                },
                {
                  question: "Чи потрібне попереднє направлення від лікаря?",
                  answer:
                    "Ні, попереднє направлення не є обов'язковим. Наші фахівці проведуть первинну діагностику та консультацію безпосередньо в центрі та складуть індивідуальний план.",
                },
                {
                  question: "Як можна записатися на конкретний день?",
                  answer:
                    "Ви можете зателефонувати за номером +380 674 702 788, написати у Telegram/WhatsApp чи залишити заявку у формі зворотного зв'язку на цій сторінці.",
                },
                {
                  question: "Чи є умови для осіб з обмеженою мобільністю?",
                  answer:
                    "Так, наш центр повністю обладнаний безбар'єрним доступом, пандусами та ширшими дверними отворами для комфортного пересування на кріслі-колясці або з милицями.",
                },
              ]}
            />
          </div>
        </PageContainer>
      </main>

      <SiteFooter />
    </div>
  );
}
