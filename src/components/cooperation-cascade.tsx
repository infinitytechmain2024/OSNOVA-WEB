import * as React from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  GraduationCap,
  MapPin,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";

import { AppLink } from "@/components/app-link";
import cooperationEventsImg from "@/assets/cooperation/events.jpg";
import cooperationSocialImg from "@/assets/cooperation/social-projects.jpg";
import cooperationMobileRehabImg from "@/assets/cooperation/mobile-rehab.jpg";

export type CooperationItem = {
  title: string;
  text: string;
  tags: [string, string];
  href: string;
  image: string;
  icon: LucideIcon;
};

export const COOPERATION_ITEMS: CooperationItem[] = [
  {
    title: "ВИЇЗНА РЕАБІЛІТАЦІЯ",
    text: "Команда ОСНОВА приїжджає до пацієнта додому, у готель або за місцем перебування з програмою відновлення.",
    tags: ["Для пацієнтів", "На дому та в готелі"],
    href: "/vyizna-reabilitatsiia",
    image: cooperationMobileRehabImg,
    icon: MapPin,
  },
  {
    title: "ІВЕНТИ",
    text: "Організація медичних форумів, конференцій, виставок та професійних заходів.",
    tags: ["Для спеціалістів", "Інформація та контакти"],
    href: "/iventy",
    image: cooperationEventsImg,
    icon: CalendarDays,
  },
  {
    title: "СОЦІАЛЬНІ ПРОЄКТИ",
    text: "Благодійні та реабілітаційні ініціативи, допомога громаді та соціальні програми.",
    tags: ["Для громади", "Благодійні ініціативи"],
    href: "/sotsialni-proiekty",
    image: cooperationSocialImg,
    icon: Users,
  },
  {
    title: "КОНСУЛЬТАЦІЇ СПЕЦІАЛІСТІВ",
    text: "Фахові консультації лікарів-спеціалістів, діагностика та планування індивідуальної програми лікування.",
    tags: ["Для пацієнтів", "Онлайн та офлайн"],
    href: "/pro-osnovu",
    image: cooperationEventsImg,
    icon: Stethoscope,
  },
  {
    title: "ОСВІТНІ ПРОГРАМИ",
    text: "Навчальні курси та майстер-класи для медичних спеціалістів, обмін досвідом та професійний розвиток.",
    tags: ["Для лікарів", "Сертифікація та навички"],
    href: "/kursy",
    image: cooperationMobileRehabImg,
    icon: GraduationCap,
  },
  {
    title: "ДОСЛІДЖЕННЯ І РОЗРОБКИ",
    text: "Наукові проєкти, клінічні дослідження та інновації у сфері реабілітаційної медицини та оздоровлення.",
    tags: ["Для науковців", "Науковий обмін"],
    href: "/konferentsii",
    image: cooperationSocialImg,
    icon: FlaskConical,
  },
];

type LayerStyle = React.CSSProperties & Record<"--layer" | "--depth", string>;

function layerStyle(layer: number, depth: number, zIndex: number): LayerStyle {
  return {
    "--layer": String(layer),
    "--depth": String(depth),
    zIndex,
  } as LayerStyle;
}

function resolveDirection(currentIndex: number, nextIndex: number, total: number): -1 | 1 {
  const forwardDistance = (nextIndex - currentIndex + total) % total;
  const backwardDistance = (currentIndex - nextIndex + total) % total;

  return forwardDistance <= backwardDistance ? 1 : -1;
}

export function CooperationCascade({
  items = COOPERATION_ITEMS,
  initialIndex = 1,
}: {
  items?: CooperationItem[];
  initialIndex?: number;
}) {
  const [activeIndex, setActiveIndex] = React.useState(
    Math.min(Math.max(initialIndex, 0), items.length - 1),
  );
  const [pendingIndex, setPendingIndex] = React.useState<number | null>(null);
  const [motionDirection, setMotionDirection] = React.useState<-1 | 1>(1);
  const wheelLockRef = React.useRef(false);
  const prepareTimeoutRef = React.useRef<number | null>(null);
  const releaseTimeoutRef = React.useRef<number | null>(null);

  const clearMotionTimers = React.useCallback(() => {
    if (prepareTimeoutRef.current !== null) {
      window.clearTimeout(prepareTimeoutRef.current);
      prepareTimeoutRef.current = null;
    }

    if (releaseTimeoutRef.current !== null) {
      window.clearTimeout(releaseTimeoutRef.current);
      releaseTimeoutRef.current = null;
    }
  }, []);

  React.useEffect(() => clearMotionTimers, [clearMotionTimers]);

  const moveToIndex = React.useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex || wheelLockRef.current) return;

      const direction = resolveDirection(activeIndex, nextIndex, items.length);

      wheelLockRef.current = true;
      clearMotionTimers();
      setMotionDirection(direction);
      setPendingIndex(nextIndex);

      // First bring the next item to the front of the compact stack, then expand it.
      prepareTimeoutRef.current = window.setTimeout(() => {
        setActiveIndex(nextIndex);
        setPendingIndex(null);
      }, 130);

      releaseTimeoutRef.current = window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 780);
    },
    [activeIndex, clearMotionTimers, items.length],
  );

  const step = React.useCallback(
    (direction: -1 | 1) => {
      moveToIndex((activeIndex + direction + items.length) % items.length);
    },
    [activeIndex, items.length, moveToIndex],
  );

  const handleWheel = React.useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      if (Math.abs(event.deltaY) < 12 || wheelLockRef.current) return;
      const next = activeIndex + (event.deltaY > 0 ? 1 : -1);
      // Let the page keep scrolling once the cascade reaches its edges.
      if (next < 0 || next > items.length - 1) return;

      event.preventDefault();
      moveToIndex(next);
    },
    [activeIndex, items.length, moveToIndex],
  );

  // Compact layers stay in sequence, while the requested card briefly moves to the front
  // before becoming the active layer.
  const lastLayer = items.length - 1;
  const compactOrder = React.useMemo(() => {
    const beforeActive = items.map((_, index) => index).filter((index) => index < activeIndex);
    const afterActive = items.map((_, index) => index).filter((index) => index > activeIndex);
    const ordered =
      motionDirection === 1 ? [...beforeActive, ...afterActive] : [...afterActive, ...beforeActive];

    if (pendingIndex === null || pendingIndex === activeIndex) {
      return ordered;
    }

    return [...ordered.filter((index) => index !== pendingIndex), pendingIndex];
  }, [activeIndex, items, motionDirection, pendingIndex]);

  const layerOf = new Map<number, number>();
  compactOrder.forEach((index, compactLayer) => {
    layerOf.set(index, compactLayer);
  });
  layerOf.set(activeIndex, lastLayer);

  return (
    <div className="cascade">
      <div className="cascade-nav">
        <button
          type="button"
          onClick={() => step(-1)}
          className="cascade-nav-button"
          aria-label="Попередній напрям"
        >
          <ChevronUp className="size-5" strokeWidth={1.75} />
        </button>

        <div className="cascade-dots">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => moveToIndex(index)}
              className={`cascade-dot ${index === activeIndex ? "cascade-dot--active" : ""}`}
              aria-label={`Перейти до розділу «${item.title}»`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => step(1)}
          className="cascade-nav-button"
          aria-label="Наступний напрям"
        >
          <ChevronDown className="size-5" strokeWidth={1.75} />
        </button>
      </div>

      <div
        className="cascade-stack"
        onWheel={handleWheel}
        style={{ "--count": String(items.length) } as React.CSSProperties}
        data-direction={motionDirection === 1 ? "forward" : "backward"}
        data-transitioning={pendingIndex !== null}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeIndex;
          const isPendingTarget = index === pendingIndex;
          const layer = layerOf.get(index) ?? 0;
          // Narrow layers sit on top of the stack, each next one a little wider.
          const depth = isActive ? 0 : lastLayer - 1 - layer;

          return (
            <div
              key={item.title}
              className={`cascade-layer ${isActive ? "cascade-layer--active" : "cascade-layer--compact"}`}
              style={layerStyle(layer, depth, isActive ? 30 : 10 + layer)}
              data-depth={depth}
              data-motion={
                isActive ? "active" : isPendingTarget ? "queued" : "resting"
              }
              role={isActive ? undefined : "button"}
              tabIndex={isActive ? undefined : 0}
              aria-label={isActive ? undefined : `Розгорнути розділ «${item.title}»`}
              onClick={isActive ? undefined : () => moveToIndex(index)}
              onKeyDown={
                isActive
                  ? undefined
                  : (event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        moveToIndex(index);
                      }
                    }
              }
            >
              <div className="cascade-layer-copy">
                <span className="cascade-layer-icon" aria-hidden="true">
                  <Icon className="cascade-layer-glyph" strokeWidth={1.8} />
                </span>
                <h3 className="cascade-layer-title">{item.title}</h3>

                <div className="cascade-layer-details">
                  <p>{item.text}</p>
                  <div className="cascade-layer-tags">
                    <span>{item.tags[0]}</span>
                    <span>{item.tags[1]}</span>
                  </div>
                  <AppLink
                    to={item.href}
                    className="cascade-layer-cta"
                    tabIndex={isActive ? undefined : -1}
                    aria-hidden={isActive ? undefined : true}
                  >
                    Детальніше
                    <ArrowRight className="size-4" strokeWidth={2} />
                  </AppLink>
                </div>
              </div>

              <div className="cascade-layer-media">
                <img src={item.image} alt={isActive ? item.title : ""} loading="lazy" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
