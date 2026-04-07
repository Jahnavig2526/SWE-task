"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Check,
  Gift,
  PartyPopper,
  Printer,
  Star,
  Tag,
} from "lucide-react";
import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";

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
  image: string;
};

type CalendarNote = {
  id: number;
  text: string;
  dateKey: string;
  done: boolean;
};

const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const THEMES: Record<ThemeName, ThemeDefinition> = {
  "climber-blue": {
    label: "Climber Blue",
    accent: "#2f9be3",
    accentSoft: "#d9eefc",
    accentRibbon: "#4aaef2",
    image: "/images/theme-climber-blue.svg",
  },
  "moss-green": {
    label: "Moss Green",
    accent: "#3f8f65",
    accentSoft: "#dff1e5",
    accentRibbon: "#67b78a",
    image: "/images/theme-moss-green.svg",
  },
  "sunset-orange": {
    label: "Sunset Orange",
    accent: "#e67b3c",
    accentSoft: "#fde6d8",
    accentRibbon: "#f3a16e",
    image: "/images/theme-sunset-orange.svg",
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

function formatLabel(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
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
  const [viewDate, setViewDate] = useState(() => {
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [themeName, setThemeName] = useState<ThemeName>("climber-blue");
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

  const days = useMemo(() => getCalendarDays(viewDate), [viewDate]);
  const monthLabel = useMemo(
    () =>
      viewDate.toLocaleDateString("en-US", {
        month: "long",
      }),
    [viewDate],
  );

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

  return (
    <section
      className="print-only-calendar mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:py-10"
      style={
        {
          "--accent": theme.accent,
          "--accent-soft": theme.accentSoft,
          "--accent-ribbon": theme.accentRibbon,
        } as CSSProperties
      }
    >
      <div className="rounded-[2px] bg-[#f5f6f7] p-3 shadow-[0_26px_55px_rgba(32,52,72,0.22)]">
        <div className="relative overflow-hidden bg-[#f1f2f3]">
          <div className="pointer-events-none absolute left-1/2 top-2.5 z-20 flex -translate-x-1/2 gap-4 print:hidden">
            {Array.from({ length: 14 }).map((_, index) => (
              <span
                key={index}
                className="h-6 w-4 rounded-full border-[3px] border-[#aeb4ba] bg-transparent"
              />
            ))}
          </div>

          <div className="relative h-[255px] overflow-hidden sm:h-[392px] print:h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={monthTransitionKey + themeName}
                initial={{ rotateX: -90, opacity: 0.2, transformPerspective: 900 }}
                animate={{ rotateX: 0, opacity: 1, transformPerspective: 900 }}
                exit={{ rotateX: 85, opacity: 0, transformPerspective: 900 }}
                transition={{ duration: 0.55, ease: [0.22, 0.68, 0, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={theme.image}
                  alt={`${monthLabel} ${yearLabel}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 900px"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={() => {
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
                setViewDate((current) =>
                  new Date(current.getFullYear(), current.getMonth() + 1, 1),
                );
              }}
              className="no-print absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/78 text-2xl text-slate-700 shadow hover:bg-white"
              aria-label="Next month"
            >
              ›
            </button>

            <div className="absolute bottom-0 right-0 h-[131px] w-[74%] bg-[var(--accent)] [clip-path:polygon(17%_100%,100%_100%,100%_0)]" />
            <div className="absolute bottom-0 right-0 h-[126px] w-[74%] bg-[var(--accent-ribbon)]/72 [clip-path:polygon(22%_100%,100%_100%,100%_9%)]" />

            <div className="absolute bottom-4 right-6 text-right text-white sm:bottom-5 sm:right-8">
              <p className="text-[23px] font-semibold tracking-[0.18em]">{yearLabel}</p>
              <h1 className="font-display text-[66px] leading-none tracking-[0.04em] sm:text-[70px]">
                {monthLabel.toUpperCase()}
              </h1>
            </div>
          </div>

          <div className="bg-[#f2f2f3] px-4 pb-4 pt-5 sm:px-6">
            <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-600">
                <CalendarDays size={14} />
                Theme
              </div>
              <div className="flex items-center gap-2">
                {Object.entries(THEMES).map(([key, value]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setThemeName(key as ThemeName)}
                    className={[
                      "rounded-full border px-3 py-1 text-xs font-semibold transition",
                      themeName === key
                        ? "border-slate-700 bg-slate-800 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100",
                    ].join(" ")}
                  >
                    {value.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  <Printer size={14} />
                  Print Range
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[0.34fr_0.66fr] md:gap-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700">
                  Notes
                </p>
                <div className="mt-3 min-h-[208px] rounded-sm bg-[repeating-linear-gradient(180deg,transparent_0,transparent_20px,#d9d9dc_21px)] px-1 py-1">
                  <ul className="space-y-2 text-[13px] leading-[21px] text-slate-700">
                    {activeNotes.map((note) => (
                      <li key={note.id} className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateNote(note.id, { done: !note.done })}
                          className={[
                            "grid h-4 w-4 place-items-center rounded-sm border text-white transition",
                            note.done ? "bg-[var(--accent)] border-[var(--accent)]" : "border-slate-400",
                          ].join(" ")}
                          aria-label="Toggle task"
                        >
                          {note.done ? <Check size={11} /> : null}
                        </button>
                        <motion.input
                          value={note.text}
                          onChange={(event) => updateNote(note.id, { text: event.target.value })}
                          animate={{
                            opacity: note.done ? 0.55 : 1,
                            textDecorationThickness: note.done ? "2px" : "0px",
                          }}
                          className={[
                            "max-w-[80%] flex-1 bg-transparent outline-none",
                            note.done ? "line-through" : "",
                          ].join(" ")}
                        />
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                          {note.dateKey.slice(8)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="no-print mt-3 space-y-2 border-b border-[#cbccd1] pb-2">
                  <button
                    type="button"
                    onClick={addQuickTask}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    <Tag size={14} />
                    Add Quick Task
                  </button>
                  <p className="text-[11px] text-slate-500">
                    Added tasks map to selected start date or today.
                  </p>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-7 border-b border-[#d2d6db] pb-2 text-center text-[12px] font-bold tracking-[0.08em] text-slate-700">
                  {WEEKDAYS.map((day) => (
                    <span key={day} className={day === "SAT" || day === "SUN" ? "text-[#42a8eb]" : ""}>
                      {day}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.12em] text-slate-500">
                  <span>
                    {rangeStart && rangeEnd
                      ? `Selected ${formatLabel(rangeStart)} to ${formatLabel(rangeEnd)}`
                      : rangeStart && previewEnd
                        ? `Preview ${formatLabel(rangeStart)} to ${formatLabel(previewEnd)}`
                        : "Select a start date"}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setRangeStart(null);
                      setRangeEnd(null);
                      setHoverDate(null);
                    }}
                    className="rounded-full border border-slate-200 px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em] text-slate-600 transition hover:bg-white"
                  >
                    Clear
                  </button>
                </div>

                <div className="print-grid grid grid-cols-7 gap-y-1 pt-2">
                  {days.map(({ date, inCurrentMonth }) => {
                    const isStart = isSameDay(date, rangeStart);
                    const isEnd = isSameDay(date, rangeEnd);
                    const isToday = isSameDay(date, today);
                    const isInRange = isSelectedRangeDay(date);
                    const isPreview = isPreviewRangeDay(date);
                    const isDisabled = !inCurrentMonth;
                    const hasNote = notes.some((note) => note.dateKey === toDateKey(date));
                    const holidayType = HOLIDAYS[toMonthDayKey(date)];

                    return (
                      <motion.button
                        key={toDateKey(date)}
                        type="button"
                        disabled={isDisabled}
                        whileHover={isDisabled ? undefined : { scale: 1.08 }}
                        whileTap={isDisabled ? undefined : { scale: 0.96 }}
                        onClick={() => handleDateSelect(date)}
                        onMouseEnter={() => setHoverDate(date)}
                        onMouseLeave={() => setHoverDate(null)}
                        onFocus={() => setHoverDate(date)}
                        onBlur={() => setHoverDate(null)}
                        className={[
                          "relative mx-auto flex h-10 w-10 items-center justify-center rounded-full text-[28px] font-medium transition",
                          isDisabled ? "text-[#c8ccd2]" : "text-slate-800",
                          isPreview ? "bg-[var(--accent-soft)]/70 text-slate-900" : "",
                          isInRange ? "bg-[var(--accent-soft)]" : "",
                          isStart || isEnd
                            ? "bg-[var(--accent)] text-white shadow-[0_2px_9px_rgba(47,155,227,0.35)]"
                            : "",
                          isToday && !isStart && !isEnd
                            ? "ring-1 ring-[var(--accent)]/35 ring-offset-1 ring-offset-[#f2f2f3]"
                            : "",
                        ].join(" ")}
                      >
                        {(isInRange || isPreview) && !isStart && !isEnd ? (
                          <motion.span
                            layoutId={`range-ribbon-${toDateKey(date)}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 -z-10 rounded-full bg-[var(--accent-soft)]"
                          />
                        ) : null}
                        {date.getDate()}
                        {hasNote ? <Star size={10} className="absolute right-0.5 top-0.5 text-amber-500" /> : null}
                        {holidayType === "gift" ? (
                          <Gift size={10} className="absolute left-0.5 top-0.5 text-rose-500" />
                        ) : null}
                        {holidayType === "confetti" ? (
                          <PartyPopper size={10} className="absolute left-0.5 top-0.5 text-violet-500" />
                        ) : null}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="pb-1 pt-4 text-center text-[13px] text-slate-600">
              Click to select start · Click again for end · Notes saved locally
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
