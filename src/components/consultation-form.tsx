import * as React from "react";
import { CheckCircle2, Loader2, Send, PhoneCall, Sparkles, User, Phone, MessageSquare, ShieldCheck, Clock } from "lucide-react";
import { AppLink } from "@/components/app-link";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export interface ConsultationFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  onSuccess?: () => void;
  compact?: boolean;
  tone?: "light" | "dark";
  showPrivacyConsent?: boolean;
}

export function ConsultationForm({
  title = "Записатися на консультацію",
  subtitle = "Заповніть форму нижче, і наш адміністратор зв'яжеться з вами для уточнення деталей.",
  className,
  onSuccess,
  compact = false,
  tone = "light",
  showPrivacyConsent = true,
}: ConsultationFormProps) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    }, 800);
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setComment("");
    setIsSubmitted(false);
  };

  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl transition-all duration-300",
        isDark
          ? "bg-navy-deep/95 text-background border border-background/15 shadow-2xl p-6 sm:p-8"
          : "bg-card text-card-foreground border border-border shadow-lg p-6 sm:p-8",
        className
      )}
    >
      {/* Subtle Background Glow */}
      <div
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 size-48 rounded-full blur-3xl opacity-20",
          isDark ? "bg-brand-green" : "bg-primary"
        )}
      />

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in-95 duration-500 h-full">
          <div className="relative mb-6 flex size-20 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 ring-8 ring-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20">
            <CheckCircle2 className="size-10 animate-in zoom-in duration-300" />
            <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md">
              <Sparkles className="size-3" />
            </span>
          </div>

          <h3 className="text-xl font-bold sm:text-2xl">Заявку успішно відправлено!</h3>

          <div className="mt-3 max-w-md rounded-xl bg-emerald-50/80 p-4 border border-emerald-200/60 dark:bg-emerald-950/40 dark:border-emerald-800/40">
            <p className="text-sm sm:text-base font-semibold leading-relaxed text-emerald-900 dark:text-emerald-200 flex items-center justify-center gap-2">
              <PhoneCall className="size-5 shrink-0 text-emerald-600 dark:text-emerald-400 animate-bounce" />
              <span>Ваше повідомлення відправлено, очікуйте дзвінка від адміністратора.</span>
            </p>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Дякуємо за довіру! Наші фахівці зв'яжуться з вами найближчим часом.
          </p>

          <button
            type="button"
            onClick={handleReset}
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/80 px-5 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary hover:scale-[1.02]"
          >
            Надіслати ще одну заявку
          </button>
        </div>
      ) : (
        <div className="animate-in fade-in duration-300 flex-1 flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <h3
                className={cn(
                  "text-xl sm:text-2xl font-extrabold tracking-tight",
                  isDark ? "text-white" : "text-navy"
                )}
              >
                {title}
              </h3>
              {subtitle && (
                <p
                  className={cn(
                    "mt-2 text-xs sm:text-sm leading-relaxed",
                    isDark ? "text-background/80" : "text-muted-foreground"
                  )}
                >
                  {subtitle}
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="consultation-name"
                  className={cn(
                    "block text-xs font-bold uppercase tracking-wider mb-1.5",
                    isDark ? "text-background/90" : "text-navy/90"
                  )}
                >
                  Ім'я <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-emerald-700/60 dark:text-emerald-400/60 pointer-events-none" />
                  <input
                    id="consultation-name"
                    type="text"
                    required
                    placeholder="Введіть ваше ім'я"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={cn(
                      "w-full rounded-xl border px-3.5 py-3 pl-10 text-sm font-medium transition-all focus:outline-none focus:ring-2",
                      isDark
                        ? "border-emerald-500/35 bg-background/10 text-white placeholder:text-background/50 focus:border-brand-green focus:ring-brand-green/30 hover:border-emerald-500/55"
                        : "border-emerald-600/30 bg-emerald-50/20 text-foreground placeholder:text-muted-foreground/60 focus:border-brand-green focus:ring-brand-green/30 hover:border-emerald-600/50"
                    )}
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="consultation-phone"
                  className={cn(
                    "block text-xs font-bold uppercase tracking-wider mb-1.5",
                    isDark ? "text-background/90" : "text-navy/90"
                  )}
                >
                  Номер телефону <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-emerald-700/60 dark:text-emerald-400/60 pointer-events-none" />
                  <input
                    id="consultation-phone"
                    type="tel"
                    required
                    placeholder="+380 (__) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={cn(
                      "w-full rounded-xl border px-3.5 py-3 pl-10 text-sm font-medium transition-all focus:outline-none focus:ring-2",
                      isDark
                        ? "border-emerald-500/35 bg-background/10 text-white placeholder:text-background/50 focus:border-brand-green focus:ring-brand-green/30 hover:border-emerald-500/55"
                        : "border-emerald-600/30 bg-emerald-50/20 text-foreground placeholder:text-muted-foreground/60 focus:border-brand-green focus:ring-brand-green/30 hover:border-emerald-600/50"
                    )}
                  />
                </div>
              </div>

              {/* Comment Field (Optional) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="consultation-comment"
                    className={cn(
                      "block text-xs font-bold uppercase tracking-wider",
                      isDark ? "text-background/90" : "text-navy/90"
                    )}
                  >
                    Коментар
                  </label>
                  <span className="rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                    не обов'язково
                  </span>
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 size-4 text-emerald-700/60 dark:text-emerald-400/60 pointer-events-none" />
                  <textarea
                    id="consultation-comment"
                    rows={compact ? 2 : 3}
                    placeholder="Ваші побажання, симптоми або зручний час для дзвінка..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className={cn(
                      "w-full rounded-xl border px-3.5 py-3 pl-10 text-sm font-medium transition-all focus:outline-none focus:ring-2 resize-none",
                      isDark
                        ? "border-emerald-500/35 bg-background/10 text-white placeholder:text-background/50 focus:border-brand-green focus:ring-brand-green/30 hover:border-emerald-500/55"
                        : "border-emerald-600/30 bg-emerald-50/20 text-foreground placeholder:text-muted-foreground/60 focus:border-brand-green focus:ring-brand-green/30 hover:border-emerald-600/50"
                    )}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "group relative flex w-full items-center justify-center gap-2.5 rounded-xl py-3.5 px-6 text-sm font-bold tracking-wide transition-all shadow-md active:scale-[0.98] bg-brand-green text-brand-green-foreground hover:bg-brand-green/90 shadow-brand-green/20 cursor-pointer",
                  isSubmitting && "opacity-80 cursor-wait"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Надіслати запит...</span>
                  </>
                ) : (
                  <>
                    <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                    <span>Надіслати запит</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Privacy Policy & Consent disclaimer notice */}
          {showPrivacyConsent && (
            <div className="mt-5 pt-4 border-t border-border/60 text-center space-y-2.5">
              <p className={cn("text-xs leading-relaxed", isDark ? "text-background/80" : "text-muted-foreground")}>
                Надсилаючи заявку, ви погоджуєтесь з нашою{" "}
                <AppLink
                  to="/polityka-konfidentsiinosti"
                  className={cn(
                    "font-semibold underline underline-offset-2 transition-colors",
                    isDark
                      ? "text-brand-green hover:text-white"
                      : "text-emerald-700 dark:text-emerald-400 hover:text-emerald-800"
                  )}
                >
                  політикою конфіденційності
                </AppLink>{" "}
                та{" "}
                <AppLink
                  to="/zhoda-na-obrobku-danykh"
                  className={cn(
                    "font-semibold underline underline-offset-2 transition-colors",
                    isDark
                      ? "text-brand-green hover:text-white"
                      : "text-emerald-700 dark:text-emerald-400 hover:text-emerald-800"
                  )}
                >
                  обробкою персональних даних
                </AppLink>.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-medium text-muted-foreground/80">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" /> Конфіденційність гарантовано
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" /> Відповідь протягом 15 хв
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Modal Dialog for Consultation Booking
 */
export function ConsultationModal({
  open,
  onOpenChange,
  title = "Записатися на консультацію",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-none bg-transparent shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Форма запису на консультацію в клініку Основа</DialogDescription>
        </DialogHeader>
        <ConsultationForm
          title={title}
          subtitle="Заповніть форму, і наш адміністратор підбере для вас найзручніший час."
        />
      </DialogContent>
    </Dialog>
  );
}

/**
 * Custom Hook / Context Helper for Consultation Modal trigger state
 */
const ConsultationModalContext = React.createContext<{
  isOpen: boolean;
  openModal: (title?: string) => void;
  closeModal: () => void;
}>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ConsultationModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("Записатися на консультацію");

  const openModal = React.useCallback((title?: string) => {
    if (title) setModalTitle(title);
    setIsOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ConsultationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ConsultationModal open={isOpen} onOpenChange={setIsOpen} title={modalTitle} />
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  return React.useContext(ConsultationModalContext);
}
