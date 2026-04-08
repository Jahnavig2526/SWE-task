"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import {
  Camera,
  CalendarDays,
  Check,
  Gift,
  Moon,
  PartyPopper,
  Printer,
  RotateCcw,
  Star,
  Sun,
  Tag,
} from "lucide-react";
import confetti from "canvas-confetti";
import html2canvas from "html2canvas";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";

type DayCell = {
  date: Date;
  inCurrentMonth: boolean;
};

type ThemeName = "climber-blue" | "moss-green" | "sunset-orange";
type ThemeDefinition = {
  label: string;
  accent: string;
  accentSoft: string;
  accentRibbon: string;
  accentBg: string;
  accentBorder: string;
};

type CalendarNote = {
  id: number;
  text: string;
  dateKey: string;
  done: boolean;
};

const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const mountainImages: Record<string, string> = {
  January: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1000",
  February: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
  March: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000",
  April: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1000",
  May: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1000",
  June: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000",
  July: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1000",
  August: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1000",
  September: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1000",
  October: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1000",
  November: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1000",
  December: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
};

const PAGE_FLIP_ANIMATION = {
  enter: (direction: number) => ({
    opacity: 0.35,
    rotateX: direction > 0 ? -78 : 78,
    y: direction > 0 ? -24 : 24,
    transformPerspective: 1200,
    transformOrigin: "top center",
  }),
  center: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transformPerspective: 1200,
    transformOrigin: "top center",
    transition: { duration: 0.62, ease: [0.2, 0.7, 0, 1] },
  },
  exit: (direction: number) => ({
    opacity: 0,
    rotateX: direction > 0 ? 78 : -78,
    y: direction > 0 ? 24 : -24,
    transformPerspective: 1200,
    transformOrigin: "top center",
    transition: { duration: 0.5, ease: [0.28, 0.5, 0.2, 1] },
  }),
};

type MagneticDateCellProps = {
  date: Date;
  inCurrentMonth: boolean;
  isStart: boolean;
  isEnd: boolean;
  isToday: boolean;
  isInRange: boolean;
  isPreview: boolean;
  hasNote: boolean;
  holidayType: "gift" | "confetti" | undefined;
  activityLevel: number;
  accent: string;
  darkMode: boolean;
  onSelect: (day: Date) => void;
  onHoverStart: (day: Date) => void;
  onHoverEnd: () => void;
};

function MagneticDateCell({
  date,
  inCurrentMonth,
  isStart,
  isEnd,
  isToday,
  isInRange,
  isPreview,
  hasNote,
  holidayType,
  activityLevel,
  accent,
  darkMode,
  onSelect,
  onHoverStart,
  onHoverEnd,
}: MagneticDateCellProps) {
  const magneticX = useMotionValue(0);
  const magneticY = useMotionValue(0);
  const springX = useSpring(magneticX, { stiffness: 220, damping: 20, mass: 0.22 });
  const springY = useSpring(magneticY, { stiffness: 220, damping: 20, mass: 0.22 });
  const isDisabled = !inCurrentMonth;
  const glowOpacity = Math.min(0.2 + activityLevel * 0.18, 0.8);

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const localX = event.clientX - bounds.left - bounds.width / 2;
    const localY = event.clientY - bounds.top - bounds.height / 2;
    magneticX.set(Math.max(-6, Math.min(6, localX / 3.5)));
    magneticY.set(Math.max(-6, Math.min(6, localY / 3.5)));
  };

  return (
    <motion.button
      type="button"
      disabled={isDisabled}
      whileHover={isDisabled ? undefined : { scale: 1.08 }}
      whileTap={isDisabled ? undefined : { scale: 0.96 }}
      onClick={() => onSelect(date)}
      onMouseEnter={() => onHoverStart(date)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        magneticX.set(0);
        magneticY.set(0);
        onHoverEnd();
      }}
      onFocus={() => onHoverStart(date)}
      onBlur={() => {
        magneticX.set(0);
        magneticY.set(0);
        onHoverEnd();
      }}
      className={[
        "relative mx-auto flex h-10 w-10 items-center justify-center rounded-full text-[28px] font-medium transition",
        isDisabled ? "text-[var(--calendar-inactive-date)]" : "text-[var(--calendar-text)]",
        isPreview ? "bg-[var(--accent-soft)]/70 text-[var(--calendar-text)]" : "",
        isInRange ? "bg-[var(--accent-soft)]" : "",
        isStart || isEnd
          ? "bg-[var(--accent)] text-white shadow-[0_2px_9px_rgba(47,155,227,0.35)]"
          : "",
        isToday && !isStart && !isEnd
          ? "ring-1 ring-[var(--accent)]/35 ring-offset-1 ring-offset-[var(--calendar-today-offset)]"
          : "",
        darkMode ? "hover:bg-white/10" : "",
      ].join(" ")}
    >
      {activityLevel > 0 && !isDisabled ? (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-1 -z-10 rounded-full"
          animate={{
            opacity: [glowOpacity * 0.55, glowOpacity, glowOpacity * 0.55],
            scale: [0.96, 1.08, 0.96],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ boxShadow: `0 0 18px ${accent}` }}
        />
      ) : null}
      {(isInRange || isPreview) && !isStart && !isEnd ? (
        <motion.span
          layoutId={`range-ribbon-${toDateKey(date)}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 -z-10 rounded-full bg-[var(--accent-soft)]"
        />
      ) : null}
      <motion.span style={{ x: springX, y: springY }} className="relative z-10">
        {date.getDate()}
      </motion.span>
      {hasNote ? <Star size={10} className="absolute right-0.5 top-0.5 text-amber-500" /> : null}
      {holidayType === "gift" ? (
        <Gift size={10} className="absolute left-0.5 top-0.5 text-rose-500" />
      ) : null}
      {holidayType === "confetti" ? (
        <PartyPopper size={10} className="absolute left-0.5 top-0.5 text-violet-500" />
      ) : null}
    </motion.button>
  );
}

const THEMES: Record<ThemeName, ThemeDefinition> = {
  "climber-blue": {
    label: "Climber Blue",
    accent: "#3b82f6",
    accentSoft: "#dbeafe",
    accentRibbon: "#60a5fa",
    accentBg: "#eff6ff",
    accentBorder: "#bfdbfe",
  },
  "moss-green": {
    label: "Moss Green",
    accent: "#22c55e",
    accentSoft: "#dcfce7",
    accentRibbon: "#4ade80",
    accentBg: "#f0fdf4",
    accentBorder: "#bbf7d0",
  },
  "sunset-orange": {
    label: "Sunset Orange",
    accent: "#f97316",
    accentSoft: "#ffedd5",
    accentRibbon: "#fb923c",
    accentBg: "#fff7ed",
    accentBorder: "#fed7aa",
  },
};

const HOLIDAYS: Record<string, "gift" | "confetti"> = {
  "01-01": "gift",
  "07-04": "confetti",
  "12-25": "gift",
};

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

function toDateKey(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function toMonthKey(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}

function toMonthDayKey(date: Date) {
  return `${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) {
    return false;
  }

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isBetweenDates(day: Date, start: Date | null, end: Date | null) {
  if (!start || !end) {
    return false;
  }

  const dayValue = startOfDay(day);
  const startValue = startOfDay(start);
  const endValue = startOfDay(end);
  return dayValue > startValue && dayValue < endValue;
}

function isDateInsideRange(dateKey: string, start: Date, end: Date) {
  const date = new Date(dateKey);
  const min = start < end ? start : end;
  const max = start < end ? end : start;
  const value = startOfDay(date);
  return value >= startOfDay(min) && value <= startOfDay(max);
}

function getCalendarDays(viewDate: Date): DayCell[] {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const mondayIndex = (firstDay.getDay() + 6) % 7;
  const gridStart = new Date(year, month, 1 - mondayIndex);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    return {
      date,
      inCurrentMonth: date.getMonth() === month,
    };
  });
}

export default function WallCalendar() {
  const today = useMemo(() => new Date(), []);
  const calendarRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const confettiTriggeredRef = useRef(false);
  const [viewDate, setViewDate] = useState(() => {
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const [navigationDirection, setNavigationDirection] = useState(1);
  const [heroImageFailed, setHeroImageFailed] = useState(false);
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [themeName, setThemeName] = useState<ThemeName>("climber-blue");
  const [darkMode, setDarkMode] = useState(false);
  const [isSnapshotting, setIsSnapshotting] = useState(false);
  const [notes, setNotes] = useState<CalendarNote[]>([
    {
      id: 1,
      text: "Gear check",
      dateKey: toDateKey(today),
      done: false,
    },
    {
      id: 2,
      text: "Quick task: route review",
      dateKey: toDateKey(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)),
      done: false,
    },
  ]);

  const theme = THEMES[themeName];
  const monthTransitionKey = `${viewDate.getFullYear()}-${viewDate.getMonth()}`;

  const modeColors = useMemo(
    () =>
      darkMode
        ? {
            shellBg: "#0f172a",
            panelBg: "#111827",
            contentBg: "#0f172a",
            textPrimary: "#e5e7eb",
            textSecondary: "#d1d5db",
            textMuted: "#9ca3af",
            border: "#334155",
            chipBg: "#1e293b",
            chipText: "#cbd5e1",
            buttonBg: "#1e293b",
            buttonHoverBg: "#334155",
            buttonText: "#e2e8f0",
            ringBorder: "#475569",
            weekdayWeekend: "#60a5fa",
            inactiveDateText: "#475569",
            todayRingOffset: "#0f172a",
          }
        : {
            shellBg: "#ffffff",
            panelBg: "#f8fafc",
            contentBg: "#ffffff",
            textPrimary: "#1f2937",
            textSecondary: "#374151",
            textMuted: "#6b7280",
            border: "#dbe5f3",
            chipBg: "#f1f5f9",
            chipText: "#64748b",
            buttonBg: "#ffffff",
            buttonHoverBg: "#eff6ff",
            buttonText: "#1f2937",
            ringBorder: "#dbe5f3",
            weekdayWeekend: "#3b82f6",
            inactiveDateText: "#cbd5e1",
            todayRingOffset: "#ffffff",
          },
    [darkMode],
  );

  const days = useMemo(() => getCalendarDays(viewDate), [viewDate]);
  const monthLabel = useMemo(
    () =>
      viewDate.toLocaleDateString("en-US", {
        month: "long",
      }),
    [viewDate],
  );
  const currentMonth = monthLabel;
  const monthHeroImage = mountainImages[currentMonth] ?? mountainImages.January;

  useEffect(() => {
    setHeroImageFailed(false);
  }, [currentMonth]);

  const yearLabel = viewDate.getFullYear();
  const previewEnd = rangeStart && !rangeEnd ? hoverDate : null;
  const rangePreviewStart =
    rangeStart && previewEnd && previewEnd < rangeStart ? previewEnd : rangeStart;
  const rangePreviewEnd =
    rangeStart && previewEnd && previewEnd < rangeStart ? rangeStart : previewEnd;
  const monthKey = toMonthKey(viewDate);
  const activeNotes = useMemo(() => {
    if (rangeStart && rangeEnd) {
      return notes.filter((note) => isDateInsideRange(note.dateKey, rangeStart, rangeEnd));
    }

    return notes.filter((note) => note.dateKey.startsWith(monthKey));
  }, [monthKey, notes, rangeEnd, rangeStart]);

  const noteCountByDate = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const note of notes) {
      counts[note.dateKey] = (counts[note.dateKey] ?? 0) + 1;
    }
    return counts;
  }, [notes]);

  const selectedRangeSpanDays = useMemo(() => {
    if (!rangeStart || !rangeEnd) {
      return 0;
    }

    const min = rangeStart < rangeEnd ? rangeStart : rangeEnd;
    const max = rangeStart < rangeEnd ? rangeEnd : rangeStart;
    const milliseconds = startOfDay(max) - startOfDay(min);
    return Math.floor(milliseconds / (24 * 60 * 60 * 1000)) + 1;
  }, [rangeEnd, rangeStart]);

  const triggerRangeCompletionConfetti = () => {
    const bounds = gridRef.current?.getBoundingClientRect();
    const centerX = bounds ? (bounds.left + bounds.width / 2) / window.innerWidth : 0.5;
    const centerY = bounds ? (bounds.top + bounds.height * 0.35) / window.innerHeight : 0.45;

    confetti({
      particleCount: 56,
      spread: 58,
      startVelocity: 34,
      gravity: 0.82,
      scalar: 0.82,
      origin: { x: centerX, y: centerY },
      ticks: 140,
    });
  };

  useEffect(() => {
    if (!rangeStart || !rangeEnd) {
      confettiTriggeredRef.current = false;
      return;
    }

    const inRangeNotes = notes.filter((note) => isDateInsideRange(note.dateKey, rangeStart, rangeEnd));

    if (inRangeNotes.length === 0) {
      confettiTriggeredRef.current = false;
      return;
    }

    const allDone = inRangeNotes.every((note) => note.done);
    if (allDone && !confettiTriggeredRef.current) {
      confettiTriggeredRef.current = true;
      triggerRangeCompletionConfetti();
    }

    if (!allDone) {
      confettiTriggeredRef.current = false;
    }
  }, [notes, rangeEnd, rangeStart]);

  const handleSnapshot = async () => {
    if (!calendarRef.current || isSnapshotting) {
      return;
    }

    setIsSnapshotting(true);
    try {
      const canvas = await html2canvas(calendarRef.current, {
        useCORS: true,
        backgroundColor: modeColors.shellBg,
        scale: 2,
      });
      const link = document.createElement("a");
      link.download = `wall-calendar-${monthKey}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch {
      window.print();
    } finally {
      setIsSnapshotting(false);
    }
  };

  const handleDateSelect = (day: Date) => {
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(day);
      setRangeEnd(null);
      setHoverDate(null);
      return;
    }

    const picked = new Date(day);
    const start = new Date(rangeStart);

    if (picked < start) {
      setRangeEnd(start);
      setRangeStart(picked);
      setHoverDate(null);
      return;
    }

    setRangeEnd(picked);
    setHoverDate(null);

    if (typeof window !== "undefined" && "vibrate" in navigator) {
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
      if (isTouchDevice) {
        navigator.vibrate(18);
      }
    }
  };

  const addQuickTask = () => {
    setNotes((current) => [
      ...current,
      {
        id: Date.now(),
        text: "New quick task",
        dateKey: rangeStart ? toDateKey(rangeStart) : toDateKey(today),
        done: false,
      },
    ]);
  };

  const updateNote = (id: number, updates: Partial<CalendarNote>) => {
    setNotes((current) =>
      current.map((note) => (note.id === id ? { ...note, ...updates } : note)),
    );
  };

  const isSelectedRangeDay = (day: Date) => {
    if (!rangeStart || !rangeEnd) {
      return false;
    }

    return isBetweenDates(day, rangeStart, rangeEnd);
  };

  const isPreviewRangeDay = (day: Date) => {
    if (!rangePreviewStart || !rangePreviewEnd || rangeEnd) {
      return false;
    }

    return isBetweenDates(day, rangePreviewStart, rangePreviewEnd);
  };

  const isWithinCommittedRange = (day: Date) => {
    if (!rangeStart || !rangeEnd) {
      return false;
    }

    const min = rangeStart < rangeEnd ? rangeStart : rangeEnd;
    const max = rangeStart < rangeEnd ? rangeEnd : rangeStart;
    const dayValue = startOfDay(day);
    return dayValue >= startOfDay(min) && dayValue <= startOfDay(max);
  };

  return (
    <section
      ref={calendarRef}
      className={[
        "print-only-calendar mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:py-10",
        darkMode ? "dark" : "",
      ].join(" ")}
      style={
        {
          "--accent": theme.accent,
          "--accent-soft": theme.accentSoft,
          "--accent-ribbon": theme.accentRibbon,
          "--accent-bg": theme.accentBg,
          "--accent-border": theme.accentBorder,
          "--calendar-shell-bg": modeColors.shellBg,
          "--calendar-panel-bg": modeColors.panelBg,
          "--calendar-content-bg": modeColors.contentBg,
          "--calendar-text": modeColors.textPrimary,
          "--calendar-text-secondary": modeColors.textSecondary,
          "--calendar-text-muted": modeColors.textMuted,
          "--calendar-border": modeColors.border,
          "--calendar-chip-bg": modeColors.chipBg,
          "--calendar-chip-text": modeColors.chipText,
          "--calendar-button-bg": modeColors.buttonBg,
          "--calendar-button-hover": modeColors.buttonHoverBg,
          "--calendar-button-text": modeColors.buttonText,
          "--calendar-ring-border": modeColors.ringBorder,
          "--calendar-weekend": modeColors.weekdayWeekend,
          "--calendar-inactive-date": modeColors.inactiveDateText,
          "--calendar-today-offset": modeColors.todayRingOffset,
        } as CSSProperties
      }
    >
      <div className="rounded-[2px] bg-[var(--calendar-shell-bg)] p-3 shadow-[0_26px_55px_rgba(32,52,72,0.22)] transition-colors">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={monthTransitionKey}
            custom={navigationDirection}
            variants={PAGE_FLIP_ANIMATION}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative overflow-hidden bg-[var(--calendar-panel-bg)] transition-colors"
          >
          <div className="pointer-events-none absolute left-1/2 top-2.5 z-20 flex -translate-x-1/2 gap-4 print:hidden">
            {Array.from({ length: 14 }).map((_, index) => (
              <span
                key={index}
                className="h-6 w-4 rounded-full border-[3px] border-[#aeb4ba] bg-transparent"
              />
            ))}
          </div>

          <div className="relative h-64 overflow-hidden md:h-96 print:h-[240px]">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-500 to-slate-300" />
            {!heroImageFailed ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={monthTransitionKey}
                src={monthHeroImage}
                alt="Mountain trekking landscape"
                className="h-full w-full object-cover transition-opacity duration-500 object-[center_78%] md:object-[center_82%] contrast-110 saturate-110"
                loading="eager"
                onError={() => setHeroImageFailed(true)}
              />
            ) : null}

            <button
              type="button"
              onClick={() => {
                setNavigationDirection(-1);
                setViewDate((current) =>
                  new Date(current.getFullYear(), current.getMonth() - 1, 1),
                );
              }}
              className="no-print absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/78 text-2xl text-slate-700 shadow hover:bg-white"
              aria-label="Previous month"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={() => {
                setNavigationDirection(1);
                setViewDate((current) =>
                  new Date(current.getFullYear(), current.getMonth() + 1, 1),
                );
              }}
              className="no-print absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/78 text-2xl text-slate-700 shadow hover:bg-white"
              aria-label="Next month"
            >
              ›
            </button>

            <div
              className={[
                "absolute bottom-6 right-6 overflow-hidden rounded-2xl border px-5 py-3 text-right text-white shadow-[0_8px_30px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:bottom-8 sm:right-8",
                darkMode ? "bg-black/40 border-white/20" : "bg-white/40 border-white/50",
              ].join(" ")}
              style={{ borderColor: `${theme.accent}66` }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0"
                style={{ backgroundColor: `${theme.accent}30` }}
              />
              <div className="relative">
                <p className="text-sm font-semibold tracking-[0.18em] text-white/90">{yearLabel}</p>
                <h1 className="font-display text-4xl leading-none tracking-[0.05em] sm:text-6xl">
                  {monthLabel.toUpperCase()}
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-[var(--calendar-content-bg)] px-4 pb-4 pt-5 text-[var(--calendar-text)] transition-colors sm:px-6">
            <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--calendar-ring-border)] bg-[var(--calendar-button-bg)]/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--calendar-button-text)]">
                <CalendarDays size={14} className="text-[var(--accent)]" />
                Theme
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {Object.entries(THEMES).map(([key, value]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setThemeName(key as ThemeName)}
                    className={[
                      "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold transition",
                      themeName === key
                        ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                        : "border-[var(--calendar-ring-border)] bg-[var(--calendar-button-bg)] text-[var(--calendar-button-text)] hover:bg-[var(--calendar-button-hover)]",
                    ].join(" ")}
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: value.accent }}
                      aria-hidden="true"
                    />
                    {value.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--calendar-ring-border)] bg-[var(--calendar-button-bg)] px-3 py-1 text-xs font-semibold text-[var(--calendar-button-text)] hover:bg-[var(--calendar-button-hover)]"
                >
                  <Printer size={14} />
                  Print Range
                </button>
                <button
                  type="button"
                  onClick={handleSnapshot}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--calendar-ring-border)] bg-[var(--calendar-button-bg)] px-3 py-1 text-xs font-semibold text-[var(--calendar-button-text)] hover:bg-[var(--calendar-button-hover)] disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isSnapshotting}
                >
                  <Camera size={14} />
                  {isSnapshotting ? "Capturing..." : "Snapshot"}
                </button>
                <button
                  type="button"
                  onClick={() => setDarkMode((current) => !current)}
                  className="inline-flex items-center justify-center rounded-full border border-[var(--calendar-ring-border)] bg-[var(--calendar-button-bg)] p-2 text-[var(--calendar-button-text)] transition hover:bg-[var(--calendar-button-hover)]"
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {darkMode ? <Sun size={16} className="text-amber-300" /> : <Moon size={16} className="text-[var(--accent)]" />}
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[0.34fr_0.66fr] md:gap-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--calendar-text-secondary)]">
                  Notes
                </p>
                <div className="mt-3 min-h-[208px] rounded-sm bg-[repeating-linear-gradient(180deg,transparent_0,transparent_20px,var(--calendar-border)_21px)] px-1 py-1">
                  <ul className="space-y-2 text-[13px] leading-[21px] text-[var(--calendar-text-secondary)]">
                    {activeNotes.map((note) => (
                      <li key={note.id} className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateNote(note.id, { done: !note.done })}
                          className={[
                            "grid h-4 w-4 place-items-center rounded-sm border text-white transition",
                            note.done ? "bg-[var(--accent)] border-[var(--accent)]" : "border-[var(--calendar-text-muted)]",
                          ].join(" ")}
                          aria-label="Toggle task"
                        >
                          {note.done ? <Check size={11} /> : null}
                        </button>
                        <input
                          value={note.text}
                          onChange={(event) => updateNote(note.id, { text: event.target.value })}
                          className={[
                            "max-w-[80%] flex-1 bg-transparent outline-none",
                            note.done ? "line-through opacity-60" : "opacity-100",
                          ].join(" ")}
                        />
                        <span className="rounded-full bg-[var(--calendar-chip-bg)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--calendar-chip-text)]">
                          {note.dateKey.slice(8)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="no-print mt-3 space-y-2 border-b border-[var(--calendar-border)] pb-2">
                  <button
                    type="button"
                    onClick={addQuickTask}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white shadow-[0_6px_18px_rgba(15,23,42,0.16)] transition hover:brightness-110"
                  >
                    <Tag size={14} className="text-white" />
                    Add Quick Task
                  </button>
                  <p className="text-[11px] text-[var(--calendar-text-muted)]">
                    Added tasks map to selected start date or today.
                  </p>
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setRangeStart(null);
                      setRangeEnd(null);
                      setHoverDate(null);
                    }}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--calendar-ring-border)] bg-[var(--calendar-button-bg)] text-[var(--calendar-button-text)] transition hover:bg-[var(--calendar-button-hover)]"
                    aria-label="Reset selected range"
                    title="Reset selected range"
                  >
                    <RotateCcw size={14} className="text-[var(--accent)]" />
                  </button>
                </div>
                <div className="grid grid-cols-7 border-b border-[var(--calendar-border)] pb-2 text-center text-[12px] font-bold tracking-[0.08em] text-[var(--calendar-text-secondary)]">
                  {WEEKDAYS.map((day) => (
                    <span
                      key={day}
                      className={day === "SAT" || day === "SUN" ? "text-[var(--calendar-weekend)]" : ""}
                    >
                      {day}
                    </span>
                  ))}
                </div>

                <div ref={gridRef} className="print-grid grid grid-cols-7 gap-y-1 pt-3">
                  {days.map(({ date, inCurrentMonth }) => {
                    const isStart = isSameDay(date, rangeStart);
                    const isEnd = isSameDay(date, rangeEnd);
                    const isToday = isSameDay(date, today);
                    const isInRange = isSelectedRangeDay(date);
                    const isPreview = isPreviewRangeDay(date);
                    const hasNote = notes.some((note) => note.dateKey === toDateKey(date));
                    const holidayType = HOLIDAYS[toMonthDayKey(date)];
                    const noteCount = noteCountByDate[toDateKey(date)] ?? 0;
                    const rangeIntensity = isWithinCommittedRange(date)
                      ? Math.min(selectedRangeSpanDays / 8, 1.6)
                      : 0;
                    const activityLevel = noteCount + rangeIntensity;

                    return (
                      <MagneticDateCell
                        key={toDateKey(date)}
                        date={date}
                        inCurrentMonth={inCurrentMonth}
                        isStart={isStart}
                        isEnd={isEnd}
                        isToday={isToday}
                        isInRange={isInRange}
                        isPreview={isPreview}
                        hasNote={hasNote}
                        holidayType={holidayType}
                        activityLevel={activityLevel}
                        accent={theme.accent}
                        darkMode={darkMode}
                        onSelect={handleDateSelect}
                        onHoverStart={setHoverDate}
                        onHoverEnd={() => setHoverDate(null)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="pb-1 pt-4 text-center text-[13px] text-[var(--calendar-text-muted)]">
              Click to select start · Click again for end · Notes saved locally
            </p>
          </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
