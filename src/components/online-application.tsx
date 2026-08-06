import * as React from "react";
import {
  FileText,
  UploadCloud,
  User,
  Phone,
  Send,
  MessageCircle,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type UploadStatus = "pending" | "uploading" | "done" | "error";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  status: UploadStatus;
  error?: string;
}

interface OnlineApplicationProps {
  onSubmit?: (data: {
    name: string;
    phone: string;
    files: File[];
  }) => Promise<void>;
}

export function OnlineApplication({ onSubmit }: OnlineApplicationProps) {
  const [files, setFiles] = React.useState<UploadedFile[]>([]);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = React.useState("");
  const [dragActive, setDragActive] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const dropZoneRef = React.useRef<HTMLDivElement>(null);

  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  const ALLOWED_TYPES = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];
  const ALLOWED_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png"];

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return `Неправильний формат файлу "${file.name}". Допускаються PDF, JPG, PNG.`;
    }
    if (file.size > MAX_FILE_SIZE) {
      return `Файл "${file.name}" перевищує 10 МБ.`;
    }
    return null;
  };

  const addFiles = (newFiles: FileList | File[]) => {
    const errors: string[] = [];
    const validFiles: UploadedFile[] = [];

    Array.from(newFiles).forEach((file) => {
      const error = validateFile(file);
      if (error) {
        errors.push(error);
        return;
      }
      const isDuplicate = files.some(
        (f) => f.name === file.name && f.size === file.size,
      );
      if (isDuplicate) {
        errors.push(`Файл "${file.name}" вже додано.`);
        return;
      }
      validFiles.push({
        id: `${file.name}-${file.size}-${Date.now()}`,
        name: file.name,
        size: file.size,
        status: "pending",
      });
    });

    if (errors.length > 0) {
      setSubmitMessage(errors[0]);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
        setSubmitMessage("");
      }, 5000);
    }

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const formatSize = (bytes: number): string => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(0)} КБ`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} МБ`;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(e.target.files);
      e.target.value = "";
    }
  };

  const validatePhone = (value: string): boolean => {
    const cleaned = value.replace(/[\s\-\(\)\+]/g, "");
    return /^\d{10,13}$/.test(cleaned);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      setSubmitMessage("Вкажіть ваше ім'я.");
      setSubmitStatus("error");
      return;
    }

    if (!phone.trim()) {
      setSubmitMessage("Вкажіть номер телефону.");
      setSubmitStatus("error");
      return;
    }

    if (!validatePhone(phone)) {
      setSubmitMessage("Введіть коректний номер телефону.");
      setSubmitStatus("error");
      return;
    }

    if (files.length === 0) {
      setSubmitMessage("Додіть хоча б один медичний документ.");
      setSubmitStatus("error");
      return;
    }

    if (!consent) {
      setSubmitMessage("Погодьтеся з обробкою персональних даних.");
      setSubmitStatus("error");
      return;
    }

    setSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      if (onSubmit) {
        await onSubmit({
          name: name.trim(),
          phone: phone.trim(),
          files: files.map((f) => {
            const blob = new Blob([], { type: "application/octet-stream" });
            return new File([blob], f.name, { size: f.size });
          }),
        });
      }
      setSubmitStatus("success");
      setSubmitMessage(
        "Документи успішно надіслано. Адміністратор зв'яжеться з вами після попереднього розгляду.",
      );
      setName("");
      setPhone("");
      setConsent(false);
      setFiles([]);
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(
        "Сталася помилка при надсиланні. Спробуйте ще раз або зв'яжіться з нами.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="relative mx-auto w-[calc(100%-48px)] max-w-[1440px] overflow-hidden rounded-[40px] border border-[#E3E9F1] bg-white px-16 py-18 shadow-[0_18px_50px_rgba(11,31,68,0.05)] sm:px-10 sm:py-14 lg:w-full lg:max-w-none"
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
        <span className="inline-flex h-[38px] items-center justify-center rounded-full border border-[rgba(23,99,232,0.35)] bg-white px-[22px] py-0 text-[13px] font-bold uppercase tracking-[0.12em] text-[#1763E8]">
          Онлайн-звернення
        </span>

        <div className="mt-5 h-0 w-0" />

        <h2 className="text-[clamp(42px,4vw,64px)] w-full max-w-[1100px] text-center text-[#0B1F44] text-[800] leading-[1.05] tracking-[-0.02em]">
          НАДІШЛІТЬ ДОКУМЕНТИ — МИ ОЦІНИМО ВАШ ЗАПИТ
        </h2>

        <div className="mt-5 h-0 w-0" />

        <div className="h-[4px] w-[84px] rounded-full bg-[#1763E8]" />

        <div className="h-[4px] w-[84px] rounded-full bg-gradient-to-r from-[#1763E8] to-[#20C7A6]" style={{ width: '21px', marginLeft: '63px', marginTop: '-4px' }} />

        <div className="mt-5 h-0 w-0" />

        <p className="max-w-[850px] text-center text-[18px] leading-[1.55] text-[#68758C]">
          Завантажте медичні документи онлайн — наші фахівці ознайомляться з ними та запропонують подальші кроки.
        </p>
      </div>

      <div className="mt-12 grid gap-[30px] lg:grid-cols-[0.92fr_1.08fr]">
        {/* Left column — 4 stages */}
        <div className="grid grid-cols-2 gap-[18px]">
          <StageCard
            number={1}
            icon={FileText}
            title="Залиште заявку"
            description="Вкажіть контактні дані та коротко опишіть свій запит."
          />
          <StageCard
            number={2}
            icon={UploadCloud}
            title="Завантажте документи"
            description="Додайте виписки, результати обстежень та інші наявні матеріали."
          />
          <StageCard
            number={3}
            icon={ShieldCheck}
            title="Отримайте попередню оцінку"
            description="Фахівці ознайомляться з документами та визначать подальші кроки."
          />
          <StageCard
            number={4}
            icon={MessageCircle}
            title="Узгодьте подальші дії"
            description="Адміністратор зв'яжеться з вами, щоб обговорити формат і дату початку."
          />
        </div>

        {/* Right column — Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col rounded-[24px] border border-[#E3E9F1] bg-white p-8 shadow-[0_14px_38px_rgba(11,31,68,0.07)]"
          noValidate
        >
          <h3 className="text-center text-[26px] font-bold leading-[1.25] text-[#0B1F44]">
            Завантажте медичні документи
          </h3>
          <p className="mt-2 text-center text-[15px] leading-[1.5] text-[#7A879C]">
            Приймаємо PDF, JPG і PNG — до 10 МБ кожен файл
          </p>

          {/* Drop zone */}
          <div
            ref={dropZoneRef}
            role="button"
            tabIndex={0}
            aria-label="Зона завантаження файлів. Перетягніть файли сюди або натисніть, щоб вибрати."
            className={cn(
              "mt-6 flex w-full flex-col items-center justify-center rounded-[20px] border-[1.5px] border-dashed border-[#B8C8E3] bg-[#FBFCFE] p-7 text-center transition-colors duration-[180ms] cursor-pointer",
              dragActive && "border-[#1763E8] bg-[#F2F7FF]",
            )}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
          >
            <UploadCloud className="mb-5 size-[66px] text-[#1763E8]" strokeWidth={1.8} />
            <p className="text-[17px] font-bold leading-[1.4] text-[#0B1F44] text-center">
              Перетягніть файли сюди або натисніть, щоб вибрати
            </p>
            <p className="mt-2.5 text-[14px] leading-[1.5] text-[#7A879C] text-center">
              Виписки, результати обстежень, знімки та висновки лікарів
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
              multiple
              className="hidden"
              onChange={handleFileSelect}
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>

          {/* File list */}
          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center gap-3 rounded-lg border border-[#E3E9F1] bg-white px-3 py-2"
                >
                  <FileText className="size-5 shrink-0 text-[#1763E8]" />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-[13px] font-medium text-[#0B1F44]">
                      {file.name}
                    </span>
                    <span className="text-[12px] text-[#7A879C]">
                      {formatSize(file.size)}
                    </span>
                  </div>
                  {file.status === "done" && (
                    <CheckCircle2 className="size-5 shrink-0 text-[#20C7A6]" />
                  )}
                  {file.status === "error" && (
                    <AlertCircle className="size-5 shrink-0 text-red-500" />
                  )}
                  <button
                    type="button"
                    onClick={() => removeFile(file.id)}
                    className="ml-auto shrink-0 rounded-full p-1 text-[#8B98AC] transition-colors hover:text-[#0B1F44] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1763E8]"
                    aria-label={`Видалити файл ${file.name}`}
                  >
                    <X className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Contact fields */}
          <div className="mt-4 grid grid-cols-2 gap-[14px]">
            <div className="relative">
              <User className="absolute left-4 top-1/2 size-[21px] -translate-y-1/2 text-[#8B98AC] pointer-events-none" />
              <input
                type="text"
                placeholder="Ваше ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[58px] w-full rounded-[14px] border border-[#D9E2EF] bg-white pl-12 pr-4 text-[15px] text-[#0B1F44] outline-none transition-all focus:border-[#1763E8] focus:shadow-[0_0_0_3px_rgba(23,99,232,0.1)]"
                required
                aria-label="Ваше ім'я"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 size-[21px] -translate-y-1/2 text-[#8B98AC] pointer-events-none" />
              <input
                type="tel"
                placeholder="Номер телефону"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-[58px] w-full rounded-[14px] border border-[#D9E2EF] bg-white pl-12 pr-4 text-[15px] text-[#0B1F44] outline-none transition-all focus:border-[#1763E8] focus:shadow-[0_0_0_3px_rgba(23,99,232,0.1)]"
                required
                aria-label="Номер телефону"
              />
            </div>
          </div>

          {/* Consent checkbox */}
          <label className="mt-4 flex items-start gap-2.5 text-[13px] leading-[1.5] text-[#68758C] cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 size-4 accent-[#1763E8]"
              required
              aria-label="Я погоджуюся з обробкою персональних даних"
            />
            <span>
              Я погоджуюся з{" "}
              <a href="/politika-konfidentialnosti" className="text-[#1763E8] underline underline-offset-2">
                обробкою персональних даних
              </a>
            </span>
          </label>

          {/* Submit button */}
          <button
            type="submit"
            disabled={submitting}
            className="mt-[18px] flex h-[60px] w-full items-center justify-center gap-2.5 rounded-[14px] bg-[#1763E8] text-[17px] font-bold text-white transition-all duration-[180ms] hover:bg-[#0F52C9] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(23,99,232,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Надсилання…
              </>
            ) : (
              <>
                <Send className="size-5" />
                НАДІСЛАТИ ДОКУМЕНТИ
              </>
            )}
          </button>

          {/* Status messages */}
          {submitStatus === "success" && (
            <div
              className="mt-4 rounded-lg bg-[#F0FDF4] border border-[#20C7A6] p-3 text-[14px] text-[#0B1F44] text-center"
              role="status"
              aria-live="polite"
            >
              {submitMessage}
            </div>
          )}
          {submitStatus === "error" && (
            <div
              className="mt-4 rounded-lg bg-[#FEF2F2] border border-red-300 p-3 text-[14px] text-red-700 text-center"
              role="alert"
              aria-live="assertive"
            >
              {submitMessage}
            </div>
          )}
        </form>
      </div>

      {/* Bottom info panel */}
      <div className="mt-[24px] grid grid-cols-2 gap-[28px] rounded-[20px] border border-[#E3E9F1] bg-white p-[22px] px-[26px] shadow-[0_8px_26px_rgba(11,31,68,0.04)] lg:grid-cols-[1fr_1fr_auto]">
        {/* Left: Help */}
        <div className="flex items-start gap-4">
          <div className="flex size-[58px] shrink-0 items-center justify-center rounded-full bg-[#F2F6FC]">
            <HelpCircle className="size-[30px] text-[#1763E8]" />
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-[#0B1F44]">Потрібна допомога?</h4>
            <p className="mt-1 text-[13px] leading-[1.5] text-[#68758C]">
              Адміністратор допоможе завантажити документи та відповість на ваші запитання.
            </p>
          </div>
        </div>

        {/* Center: No all docs */}
        <div className="flex items-start gap-4">
          <div className="flex size-[58px] shrink-0 items-center justify-center rounded-full bg-[#F2F6FC]">
            <ShieldCheck className="size-[30px] text-[#1763E8]" />
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-[#0B1F44]">
              Не маєте всіх документів?
            </h4>
            <p className="mt-1 text-[13px] leading-[1.5] text-[#68758C]">
              Надішліть ті, що є. Ми підкажемо, які матеріали можуть знадобитися додатково.
            </p>
          </div>
        </div>

        {/* Right: Contact button */}
        <a
          href="tel:+380674702788"
          className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[14px] border border-[#1763E8] bg-white px-6 text-[15px] font-bold text-[#1763E8] transition-colors hover:bg-[#F2F6FC] whitespace-nowrap"
        >
          <MessageCircle className="size-5" />
          ЗВ'ЯЗАТИСЯ З НАМИ
        </a>
      </div>
    </section>
  );
}

function StageCard({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="relative min-h-[260px] flex flex-col rounded-[22px] border border-[#E3E9F1] bg-white p-[30px_26px_26px] shadow-[0_10px_30px_rgba(11,31,68,0.05)] transition-all duration-[220ms] hover:-translate-y-1 hover:shadow-lg">
      <span className="absolute left-[18px] top-[18px] flex size-[38px] items-center justify-center rounded-full bg-[#1763E8] text-[16px] font-bold text-white z-[2]">
        {number}
      </span>

      <div className="mx-auto mt-4 flex size-[86px] items-center justify-center rounded-full bg-[#F2F6FC]">
        <Icon className="size-[46px] text-[#1763E8]" strokeWidth={1.8} />
      </div>

      <div className="mt-[22px] flex-1">
        <h4 className="text-[18px] font-bold leading-[1.3] text-[#0B1F44]">{title}</h4>
        <div className="mt-3 h-[3px] w-[30px] rounded-full bg-[#1763E8]" />
        <p className="mt-3.5 text-[15px] leading-[1.55] text-[#53627A]">{description}</p>
      </div>
    </div>
  );
}