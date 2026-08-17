import medicalAssessmentImg from "@/assets/about/medical-assessment.jpg";
import { useConsultationModal } from "@/components/consultation-form";
import { cn } from "@/lib/utils";
import { ArrowUpRight, MessageCircle } from "lucide-react";

interface FAQConsultationCTAProps {
  className?: string;
  cardClassName?: string;
  buttonLabel?: string;
  modalTitle?: string;
}

export function FAQConsultationCTA({
  className,
  cardClassName,
  buttonLabel = "Зв'язатися з нами",
  modalTitle = "Зв'язатися з нами",
}: FAQConsultationCTAProps) {
  const { openModal } = useConsultationModal();

  return (
    <div className={cn("mx-auto max-w-[1320px] px-6 lg:px-10", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_32px_90px_-52px_rgba(15,23,42,0.3)]",
          cardClassName,
        )}
      >
        <div className="grid items-stretch gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(380px,640px)]">
          <div className="relative z-10 flex flex-col justify-center gap-6 px-8 py-9 sm:px-10 md:px-12 md:py-12 lg:px-16 lg:py-16">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              <MessageCircle className="size-4" />
              Індивідуальна консультація
            </span>

            <div className="max-w-[35rem]">
              <h3 className="text-2xl font-bold leading-[1.05] text-navy sm:text-3xl md:text-[2.4rem]">
                Не знайшли відповіді
                <br className="hidden sm:block" /> на своє питання?
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base lg:text-[1.05rem]">
                Наша команда завжди готова допомогти. Зв'яжіться з нами — ми надамо індивідуальну
                консультацію та підберемо найкраще рішення для вашої ситуації.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => openModal(modalTitle)}
                className="inline-flex items-center gap-3 rounded-2xl bg-primary px-7 py-4 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-navy md:text-base"
              >
                {buttonLabel} <ArrowUpRight className="size-5" />
              </button>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden lg:min-h-[460px]">
            <img
              src={medicalAssessmentImg}
              alt="Спеціаліст центру консультує пацієнтку перед відновленням"
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-[62%_center] lg:scale-[1.02]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.16) 12%, rgba(0, 0, 0, 0.7) 30%, #000 44%)",
                maskImage:
                  "linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.16) 12%, rgba(0, 0, 0, 0.7) 30%, #000 44%)",
              }}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/85 to-transparent blur-2xl sm:w-36 lg:w-44" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/8 via-transparent to-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
