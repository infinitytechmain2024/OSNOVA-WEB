import * as React from "react";

interface ProblemArea {
  id: string;
  label: string;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  description: string;
}

const PROBLEM_AREAS: ProblemArea[] = [
  {
    id: "mitral",
    label: "Мітральний клапан",
    cx: 148,
    cy: 138,
    rx: 22,
    ry: 18,
    description: "Порушення функції мітрального клапана",
  },
  {
    id: "aortic",
    label: "Аортальний клапан",
    cx: 170,
    cy: 108,
    rx: 18,
    ry: 16,
    description: "Звуження аортального клапана",
  },
  {
    id: "tricuspid",
    label: "Трикуспідальний клапан",
    cx: 118,
    cy: 140,
    rx: 18,
    ry: 16,
    description: "Недостатність трикуспідального клапана",
  },
];

function HeartSVG() {
  return (
    <svg
      viewBox="0 0 300 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <filter id="glow-red" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="pulse-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="heart-gradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#9ca3af" />
        </radialGradient>
        <radialGradient id="problem-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Heart shape - gray body */}
      <path
        d="M150 250 C150 250 50 190 50 120 C50 80 80 50 115 50 C135 50 148 65 150 75 C152 65 165 50 185 50 C220 50 250 80 250 120 C250 190 150 250 150 250Z"
        fill="url(#heart-gradient)"
        stroke="#6b7280"
        strokeWidth="2"
      />

      {/* Internal heart structure lines */}
      <path
        d="M150 75 L150 220"
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.6"
      />
      <path
        d="M90 130 L210 130"
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.6"
      />
      <path
        d="M100 160 L200 160"
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.6"
      />

      {/* Chamber labels */}
      <text x="105" y="110" fontSize="9" fill="#6b7280" fontWeight="600" opacity="0.7">
        ПЗО
      </text>
      <text x="175" y="110" fontSize="9" fill="#6b7280" fontWeight="600" opacity="0.7">
        ЛЗО
      </text>
      <text x="105" y="185" fontSize="9" fill="#6b7280" fontWeight="600" opacity="0.7">
        ПЗШ
      </text>
      <text x="175" y="185" fontSize="9" fill="#6b7280" fontWeight="600" opacity="0.7">
        ЛЗШ
      </text>

      {/* Problem areas - red highlighted zones */}
      {PROBLEM_AREAS.map((area) => (
        <g key={area.id}>
          {/* Outer glow */}
          <ellipse
            cx={area.cx}
            cy={area.cy}
            rx={area.rx + 12}
            ry={area.ry + 12}
            fill="url(#problem-glow)"
            className="animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          {/* Red circle outline */}
          <ellipse
            cx={area.cx}
            cy={area.cy}
            rx={area.rx}
            ry={area.ry}
            fill="none"
            stroke="#ef4444"
            strokeWidth="2.5"
            strokeDasharray="6 3"
            filter="url(#glow-red)"
            className="animate-pulse"
            style={{ animationDuration: "1.5s" }}
          />
          {/* Inner red dot */}
          <circle
            cx={area.cx}
            cy={area.cy}
            r="4"
            fill="#ef4444"
            filter="url(#pulse-glow)"
            className="animate-pulse"
            style={{ animationDuration: "1s" }}
          />
        </g>
      ))}
    </svg>
  );
}

export function BodyPlacesSection() {
  const [activeArea, setActiveArea] = React.useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute -right-[10%] top-[10%] size-[400px] rounded-full bg-red-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left side - diagram */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[400px]">
              <HeartSVG />

              {/* Animated pulse rings around problem areas */}
              {PROBLEM_AREAS.map((area) => (
                <div
                  key={`pulse-${area.id}`}
                  className="absolute size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-red-400/40 animate-ping"
                  style={{
                    left: `${(area.cx / 300) * 100}%`,
                    top: `${(area.cy / 280) * 100}%`,
                    animationDuration: "2s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right side - description */}
          <div>
            <div className="mb-12 md:mb-16">
              <span className="mb-4 inline-block rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-red-600 backdrop-blur-md uppercase">
                ЗОНИ УВАГИ
              </span>
              <h2 className="text-3xl font-extrabold leading-[1.15] text-navy md:text-5xl lg:text-6xl">
                Де ми{" "}
                <span className="text-red-500">працюємо</span>
              </h2>
              <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-red-500 to-red-300" />
            </div>

            <p className="mb-10 text-base md:text-lg text-muted-foreground leading-relaxed">
              Наші фахівці спеціалізуються на лікуванні конкретних проблемних зон серцево-судинної
              системи. Ми точно визначаємо області порушень та застосовуємо targeted підхід до
              реабілітації.
            </p>

            {/* Problem areas list */}
            <div className="space-y-4">
              {PROBLEM_AREAS.map((area) => (
                <div
                  key={area.id}
                  className={`group relative rounded-2xl border p-5 transition-all duration-300 cursor-pointer ${
                    activeArea === area.id
                      ? "border-red-300 bg-red-50 shadow-lg shadow-red-500/10"
                      : "border-slate-200 bg-white hover:border-red-200 hover:shadow-md"
                  }`}
                  onMouseEnter={() => setActiveArea(area.id)}
                  onMouseLeave={() => setActiveArea(null)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        activeArea === area.id
                          ? "bg-red-500 text-white"
                          : "bg-red-100 text-red-500 group-hover:bg-red-500 group-hover:text-white"
                      }`}
                    >
                      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className={`text-base font-bold transition-colors duration-300 ${
                          activeArea === area.id ? "text-red-600" : "text-navy"
                        }`}
                      >
                        {area.label}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  {/* Active indicator line */}
                  <div
                    className={`absolute left-0 top-1/2 h-12 w-1 -translate-y-1/2 rounded-full bg-red-500 transition-all duration-300 ${
                      activeArea === area.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
