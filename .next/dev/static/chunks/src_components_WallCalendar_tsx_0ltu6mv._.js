(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/WallCalendar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WallCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CircleCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-client] (ecmascript) <export default as PartyPopper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const WEEKDAYS = [
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN"
];
const mountainImages = {
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
    December: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000"
};
const PAGE_FLIP_ANIMATION = {
    enter: (direction)=>({
            opacity: 0.35,
            rotateX: direction > 0 ? -78 : 78,
            y: direction > 0 ? -24 : 24,
            transformPerspective: 1200,
            transformOrigin: "top center"
        }),
    center: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        transformPerspective: 1200,
        transformOrigin: "top center",
        transition: {
            duration: 0.62,
            ease: [
                0.2,
                0.7,
                0,
                1
            ]
        }
    },
    exit: (direction)=>({
            opacity: 0,
            rotateX: direction > 0 ? 78 : -78,
            y: direction > 0 ? 24 : -24,
            transformPerspective: 1200,
            transformOrigin: "top center",
            transition: {
                duration: 0.5,
                ease: [
                    0.28,
                    0.5,
                    0.2,
                    1
                ]
            }
        })
};
function MagneticDateCell({ date, inCurrentMonth, isStart, isEnd, isToday, isInRange, isPreview, isRangeSegment, isRangeStartEdge, isRangeEndEdge, hasNote, events, isHovered, holidayType, activityLevel, accent, darkMode, onSelect, onRangeSelect, onHoverStart, onHoverEnd }) {
    _s();
    const magneticX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const magneticY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(magneticX, {
        stiffness: 220,
        damping: 20,
        mass: 0.22
    });
    const springY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(magneticY, {
        stiffness: 220,
        damping: 20,
        mass: 0.22
    });
    const isDisabled = !inCurrentMonth;
    const glowOpacity = Math.min(0.2 + activityLevel * 0.18, 0.8);
    const topEvent = events[0];
    const extraEvents = Math.max(events.length - 1, 0);
    const handleMouseMove = (event)=>{
        if (isDisabled) {
            return;
        }
        const bounds = event.currentTarget.getBoundingClientRect();
        const localX = event.clientX - bounds.left - bounds.width / 2;
        const localY = event.clientY - bounds.top - bounds.height / 2;
        magneticX.set(Math.max(-6, Math.min(6, localX / 3.5)));
        magneticY.set(Math.max(-6, Math.min(6, localY / 3.5)));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        type: "button",
        disabled: isDisabled,
        whileHover: isDisabled ? undefined : {
            scale: 1.08
        },
        whileTap: isDisabled ? undefined : {
            scale: 0.96
        },
        onClick: ()=>onSelect(date),
        onDoubleClick: ()=>onRangeSelect(date),
        onMouseEnter: ()=>onHoverStart(date),
        onMouseMove: handleMouseMove,
        onMouseLeave: ()=>{
            magneticX.set(0);
            magneticY.set(0);
            onHoverEnd();
        },
        onFocus: ()=>onHoverStart(date),
        onBlur: ()=>{
            magneticX.set(0);
            magneticY.set(0);
            onHoverEnd();
        },
        className: [
            "relative mx-auto flex h-12 w-full items-center justify-center text-[28px] font-medium transition",
            isDisabled ? "text-[var(--calendar-inactive-date)]" : "text-[var(--calendar-text)]",
            isToday && !isStart && !isEnd ? "ring-1 ring-[var(--accent)]/35 ring-offset-1 ring-offset-[var(--calendar-today-offset)]" : "",
            darkMode ? "hover:bg-white/10" : ""
        ].join(" "),
        children: [
            isRangeSegment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: [
                    "pointer-events-none absolute left-0 right-0 top-1/2 h-8 -translate-y-1/2",
                    darkMode ? "bg-[var(--accent)]/30 shadow-[0_0_10px_var(--accent-ribbon)]" : "bg-[var(--accent-soft)]",
                    isRangeStartEdge ? "rounded-l-full" : "rounded-none",
                    isRangeEndEdge ? "rounded-r-full" : "rounded-none"
                ].join(" ")
            }, void 0, false, {
                fileName: "[project]/src/components/WallCalendar.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this) : null,
            activityLevel > 0 && !isDisabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                "aria-hidden": "true",
                className: "pointer-events-none absolute -inset-1 -z-10 rounded-full",
                animate: {
                    opacity: [
                        glowOpacity * 0.55,
                        glowOpacity,
                        glowOpacity * 0.55
                    ],
                    scale: [
                        0.96,
                        1.08,
                        0.96
                    ]
                },
                transition: {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                style: {
                    boxShadow: `0 0 18px ${accent}`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/WallCalendar.tsx",
                lineNumber: 224,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                style: {
                    x: springX,
                    y: springY
                },
                className: [
                    "relative z-10 grid h-10 w-10 place-items-center rounded-full",
                    isStart || isEnd ? "bg-[var(--accent)] text-white shadow-[0_2px_9px_rgba(47,155,227,0.35)]" : "",
                    isPreview && !isStart && !isEnd ? darkMode ? "bg-[var(--accent)]/20" : "bg-[var(--accent-soft)]/70" : "",
                    isInRange && !isStart && !isEnd ? darkMode ? "bg-[var(--accent)]/15" : "bg-[var(--accent-soft)]" : ""
                ].join(" "),
                children: date.getDate()
            }, void 0, false, {
                fileName: "[project]/src/components/WallCalendar.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            events.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-0.5 top-0.5 z-20 inline-flex items-center gap-0.5 rounded-full bg-[var(--calendar-button-bg)] px-1 py-0.5 text-[9px] leading-none shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: getEventTypeEmoji(topEvent.type)
                    }, void 0, false, {
                        fileName: "[project]/src/components/WallCalendar.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this),
                    extraEvents > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-[var(--accent)]",
                        children: [
                            "+",
                            extraEvents
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WallCalendar.tsx",
                        lineNumber: 259,
                        columnNumber: 30
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WallCalendar.tsx",
                lineNumber: 257,
                columnNumber: 9
            }, this) : null,
            hasNote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                size: 10,
                className: "absolute bottom-0.5 right-0.5 text-amber-500"
            }, void 0, false, {
                fileName: "[project]/src/components/WallCalendar.tsx",
                lineNumber: 262,
                columnNumber: 18
            }, this) : null,
            holidayType === "gift" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                size: 10,
                className: "absolute left-0.5 top-0.5 text-rose-500"
            }, void 0, false, {
                fileName: "[project]/src/components/WallCalendar.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, this) : null,
            holidayType === "confetti" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__["PartyPopper"], {
                size: 10,
                className: "absolute left-0.5 top-0.5 text-violet-500"
            }, void 0, false, {
                fileName: "[project]/src/components/WallCalendar.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, this) : null,
            isHovered && events.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 6
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 6
                },
                className: [
                    "pointer-events-none absolute left-1/2 top-0 z-30 w-44 -translate-x-1/2 -translate-y-[110%] rounded-lg border px-2 py-1.5 text-left text-[10px] shadow-xl",
                    darkMode ? "border-slate-700 bg-slate-900/95 text-slate-100" : "border-slate-200 bg-white/95 text-slate-700"
                ].join(" "),
                children: [
                    events.slice(0, 3).map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "truncate",
                            children: [
                                getEventTypeEmoji(event.type),
                                " Event: ",
                                event.title
                            ]
                        }, event.id, true, {
                            fileName: "[project]/src/components/WallCalendar.tsx",
                            lineNumber: 282,
                            columnNumber: 13
                        }, this)),
                    events.length > 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[var(--accent)]",
                        children: [
                            "+",
                            events.length - 3,
                            " more"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WallCalendar.tsx",
                        lineNumber: 286,
                        columnNumber: 32
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WallCalendar.tsx",
                lineNumber: 270,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WallCalendar.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
_s(MagneticDateCell, "7/Qgu1bBgb9vOSlTFZCFOfh0VqY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = MagneticDateCell;
const THEMES = {
    "climber-blue": {
        label: "Climber Blue",
        accent: "#3b82f6",
        accentSoft: "#dbeafe",
        accentRibbon: "#60a5fa",
        accentBg: "#eff6ff",
        accentBorder: "#bfdbfe"
    },
    "moss-green": {
        label: "Moss Green",
        accent: "#22c55e",
        accentSoft: "#dcfce7",
        accentRibbon: "#4ade80",
        accentBg: "#f0fdf4",
        accentBorder: "#bbf7d0"
    },
    "sunset-orange": {
        label: "Sunset Orange",
        accent: "#f97316",
        accentSoft: "#ffedd5",
        accentRibbon: "#fb923c",
        accentBg: "#fff7ed",
        accentBorder: "#fed7aa"
    }
};
const HOLIDAYS = {
    "01-01": "gift",
    "07-04": "confetti",
    "12-25": "gift"
};
const EVENT_TYPE_OPTIONS = [
    {
        type: "Birthday",
        label: "Birthday",
        emoji: "🎂"
    },
    {
        type: "Dinner",
        label: "Dinner",
        emoji: "🍽️"
    },
    {
        type: "Trek",
        label: "Trek",
        emoji: "🏔️"
    },
    {
        type: "Meeting",
        label: "Meeting",
        emoji: "📅"
    },
    {
        type: "Other",
        label: "Other",
        emoji: "✨"
    }
];
function pad(value) {
    return value.toString().padStart(2, "0");
}
function toDateKey(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
function toMonthKey(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}
function toMonthDayKey(date) {
    return `${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}
function isSameDay(a, b) {
    if (!a || !b) {
        return false;
    }
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isBetweenDates(day, start, end) {
    if (!start || !end) {
        return false;
    }
    const dayValue = startOfDay(day);
    const startValue = startOfDay(start);
    const endValue = startOfDay(end);
    return dayValue > startValue && dayValue < endValue;
}
function isDateInsideRange(dateKey, start, end) {
    const date = new Date(dateKey);
    const min = start < end ? start : end;
    const max = start < end ? end : start;
    const value = startOfDay(date);
    return value >= startOfDay(min) && value <= startOfDay(max);
}
function formatRangeLong(date) {
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
function getEventTypeEmoji(type) {
    return EVENT_TYPE_OPTIONS.find((option)=>option.type === type)?.emoji ?? "✨";
}
function formatRangeTagDate(date) {
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    });
}
function getDateOffset(base, offset) {
    const next = new Date(base);
    next.setDate(base.getDate() + offset);
    return next;
}
function isDateInRange(day, start, end) {
    if (!start || !end) {
        return false;
    }
    return isSameDay(day, start) || isSameDay(day, end) || isBetweenDates(day, start, end);
}
function getCalendarDays(viewDate) {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const mondayIndex = (firstDay.getDay() + 6) % 7;
    const gridStart = new Date(year, month, 1 - mondayIndex);
    return Array.from({
        length: 42
    }, (_, index)=>{
        const date = new Date(gridStart);
        date.setDate(gridStart.getDate() + index);
        return {
            date,
            inCurrentMonth: date.getMonth() === month
        };
    });
}
function WallCalendar() {
    _s1();
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WallCalendar.useMemo[today]": ()=>new Date()
    }["WallCalendar.useMemo[today]"], []);
    const calendarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const confettiTriggeredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [viewDate, setViewDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "WallCalendar.useState": ()=>{
            return new Date(today.getFullYear(), today.getMonth(), 1);
        }
    }["WallCalendar.useState"]);
    const [navigationDirection, setNavigationDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [heroImageFailed, setHeroImageFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rangeStart, setRangeStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rangeEnd, setRangeEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoverDate, setHoverDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [themeName, setThemeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("climber-blue");
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [eventModalDate, setEventModalDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const clickTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [eventDraft, setEventDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: "Meeting",
        title: "",
        time: "09:00"
    });
    const [eventsByDate, setEventsByDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        [toDateKey(today)]: [
            {
                id: Date.now(),
                type: "Meeting",
                title: "Trail planning",
                time: "10:30"
            }
        ]
    });
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            text: "Gear check",
            dateKey: toDateKey(today),
            done: false
        },
        {
            id: 2,
            text: "Quick task: route review",
            dateKey: toDateKey(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2)),
            done: false
        }
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WallCalendar.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const savedEventsRaw = window.localStorage.getItem("wall-calendar-events");
                const savedRangeRaw = window.localStorage.getItem("wall-calendar-range");
                if (savedEventsRaw) {
                    const parsedEvents = JSON.parse(savedEventsRaw);
                    setEventsByDate(parsedEvents);
                }
                if (savedRangeRaw) {
                    const parsedRange = JSON.parse(savedRangeRaw);
                    setRangeStart(parsedRange.start ? new Date(parsedRange.start) : null);
                    setRangeEnd(parsedRange.end ? new Date(parsedRange.end) : null);
                }
            } catch  {
            // Ignore malformed persisted state and keep defaults.
            }
        }
    }["WallCalendar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WallCalendar.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.localStorage.setItem("wall-calendar-events", JSON.stringify(eventsByDate));
        }
    }["WallCalendar.useEffect"], [
        eventsByDate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WallCalendar.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.localStorage.setItem("wall-calendar-range", JSON.stringify({
                start: rangeStart ? rangeStart.toISOString() : null,
                end: rangeEnd ? rangeEnd.toISOString() : null
            }));
        }
    }["WallCalendar.useEffect"], [
        rangeEnd,
        rangeStart
    ]);
    const theme = THEMES[themeName];
    const monthTransitionKey = `${viewDate.getFullYear()}-${viewDate.getMonth()}`;
    const modeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WallCalendar.useMemo[modeColors]": ()=>darkMode ? {
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
                todayRingOffset: "#0f172a"
            } : {
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
                todayRingOffset: "#ffffff"
            }
    }["WallCalendar.useMemo[modeColors]"], [
        darkMode
    ]);
    const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WallCalendar.useMemo[days]": ()=>getCalendarDays(viewDate)
    }["WallCalendar.useMemo[days]"], [
        viewDate
    ]);
    const monthLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WallCalendar.useMemo[monthLabel]": ()=>viewDate.toLocaleDateString("en-US", {
                month: "long"
            })
    }["WallCalendar.useMemo[monthLabel]"], [
        viewDate
    ]);
    const currentMonth = monthLabel;
    const monthHeroImage = mountainImages[currentMonth] ?? mountainImages.January;
    const monthHeroImageHiRes = monthHeroImage.replace("w=1000", "w=2200");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WallCalendar.useEffect": ()=>{
            setHeroImageFailed(false);
        }
    }["WallCalendar.useEffect"], [
        currentMonth
    ]);
    const yearLabel = viewDate.getFullYear();
    const previewEnd = rangeStart && !rangeEnd ? hoverDate : null;
    const rangePreviewStart = rangeStart && previewEnd && previewEnd < rangeStart ? previewEnd : rangeStart;
    const rangePreviewEnd = rangeStart && previewEnd && previewEnd < rangeStart ? rangeStart : previewEnd;
    const monthKey = toMonthKey(viewDate);
    const activeNotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WallCalendar.useMemo[activeNotes]": ()=>{
            if (rangeStart && rangeEnd) {
                return notes.filter({
                    "WallCalendar.useMemo[activeNotes]": (note)=>isDateInsideRange(note.dateKey, rangeStart, rangeEnd)
                }["WallCalendar.useMemo[activeNotes]"]);
            }
            return notes.filter({
                "WallCalendar.useMemo[activeNotes]": (note)=>note.dateKey.startsWith(monthKey)
            }["WallCalendar.useMemo[activeNotes]"]);
        }
    }["WallCalendar.useMemo[activeNotes]"], [
        monthKey,
        notes,
        rangeEnd,
        rangeStart
    ]);
    const noteCountByDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WallCalendar.useMemo[noteCountByDate]": ()=>{
            const counts = {};
            for (const note of notes){
                counts[note.dateKey] = (counts[note.dateKey] ?? 0) + 1;
            }
            return counts;
        }
    }["WallCalendar.useMemo[noteCountByDate]"], [
        notes
    ]);
    const selectedRangeSpanDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WallCalendar.useMemo[selectedRangeSpanDays]": ()=>{
            if (!rangeStart || !rangeEnd) {
                return 0;
            }
            const min = rangeStart < rangeEnd ? rangeStart : rangeEnd;
            const max = rangeStart < rangeEnd ? rangeEnd : rangeStart;
            const milliseconds = startOfDay(max) - startOfDay(min);
            return Math.floor(milliseconds / (24 * 60 * 60 * 1000)) + 1;
        }
    }["WallCalendar.useMemo[selectedRangeSpanDays]"], [
        rangeEnd,
        rangeStart
    ]);
    const isRangeActive = Boolean(rangeStart || rangeEnd);
    const hasCommittedRange = Boolean(rangeStart && rangeEnd);
    const rangeSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WallCalendar.useMemo[rangeSummary]": ()=>{
            if (!rangeStart || !rangeEnd) {
                return null;
            }
            const min = rangeStart < rangeEnd ? rangeStart : rangeEnd;
            const max = rangeStart < rangeEnd ? rangeEnd : rangeStart;
            const isCrossMonth = min.getFullYear() !== max.getFullYear() || min.getMonth() !== max.getMonth();
            const totalDays = Math.floor((startOfDay(max) - startOfDay(min)) / (24 * 60 * 60 * 1000)) + 1;
            return {
                durationDays: totalDays,
                start: min,
                end: max,
                isCrossMonth,
                title: `Selected Range: ${min.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric"
                })} - ${max.toLocaleDateString("en-US", {
                    month: isCrossMonth ? "long" : undefined,
                    day: "numeric"
                })} (${totalDays} days)`,
                subtitle: `Trekking Expedition (${totalDays} days)`
            };
        }
    }["WallCalendar.useMemo[rangeSummary]"], [
        rangeEnd,
        rangeStart
    ]);
    const triggerRangeCompletionConfetti = ()=>{
        const bounds = gridRef.current?.getBoundingClientRect();
        const centerX = bounds ? (bounds.left + bounds.width / 2) / window.innerWidth : 0.5;
        const centerY = bounds ? (bounds.top + bounds.height * 0.35) / window.innerHeight : 0.45;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            particleCount: 56,
            spread: 58,
            startVelocity: 34,
            gravity: 0.82,
            scalar: 0.82,
            origin: {
                x: centerX,
                y: centerY
            },
            ticks: 140
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WallCalendar.useEffect": ()=>{
            if (!rangeStart || !rangeEnd) {
                confettiTriggeredRef.current = false;
                return;
            }
            const inRangeNotes = notes.filter({
                "WallCalendar.useEffect.inRangeNotes": (note)=>isDateInsideRange(note.dateKey, rangeStart, rangeEnd)
            }["WallCalendar.useEffect.inRangeNotes"]);
            if (inRangeNotes.length === 0) {
                confettiTriggeredRef.current = false;
                return;
            }
            const allDone = inRangeNotes.every({
                "WallCalendar.useEffect.allDone": (note)=>note.done
            }["WallCalendar.useEffect.allDone"]);
            if (allDone && !confettiTriggeredRef.current) {
                confettiTriggeredRef.current = true;
                triggerRangeCompletionConfetti();
            }
            if (!allDone) {
                confettiTriggeredRef.current = false;
            }
        }
    }["WallCalendar.useEffect"], [
        notes,
        rangeEnd,
        rangeStart
    ]);
    const handleSnapshot = ()=>{
        if (!calendarRef.current) {
            return;
        }
        window.print();
    };
    const openEventModal = (day)=>{
        setEventModalDate(day);
        setEventDraft({
            type: "Meeting",
            title: "",
            time: "09:00"
        });
    };
    const closeEventModal = ()=>{
        setEventModalDate(null);
    };
    const saveEvent = ()=>{
        if (!eventModalDate || !eventDraft.title.trim()) {
            return;
        }
        const dateKey = toDateKey(eventModalDate);
        const nextEvent = {
            id: Date.now(),
            type: eventDraft.type,
            title: eventDraft.title.trim(),
            time: eventDraft.time
        };
        setEventsByDate((current)=>({
                ...current,
                [dateKey]: [
                    ...current[dateKey] ?? [],
                    nextEvent
                ]
            }));
        closeEventModal();
    };
    const handleDateSelect = (day)=>{
        if (!rangeStart || rangeStart && rangeEnd) {
            setRangeStart(day);
            setRangeEnd(null);
            setHoverDate(null);
            return;
        }
        const picked = new Date(day);
        const start = new Date(rangeStart);
        if (picked < start) {
            setRangeStart(picked);
            setRangeEnd(start);
            setHoverDate(null);
            return;
        }
        setRangeEnd(picked);
        setHoverDate(null);
        if (("TURBOPACK compile-time value", "object") !== "undefined" && "vibrate" in navigator) {
            const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
            if (isTouchDevice) {
                navigator.vibrate(18);
            }
        }
    };
    const handleDayClick = (day)=>{
        if (clickTimerRef.current) {
            window.clearTimeout(clickTimerRef.current);
        }
        clickTimerRef.current = window.setTimeout(()=>{
            openEventModal(day);
            clickTimerRef.current = null;
        }, 220);
    };
    const handleDayDoubleClick = (day)=>{
        if (clickTimerRef.current) {
            window.clearTimeout(clickTimerRef.current);
            clickTimerRef.current = null;
        }
        handleDateSelect(day);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WallCalendar.useEffect": ()=>{
            return ({
                "WallCalendar.useEffect": ()=>{
                    if (clickTimerRef.current) {
                        window.clearTimeout(clickTimerRef.current);
                    }
                }
            })["WallCalendar.useEffect"];
        }
    }["WallCalendar.useEffect"], []);
    const addQuickTask = ()=>{
        setNotes((current)=>[
                ...current,
                {
                    id: Date.now(),
                    text: "New quick task",
                    dateKey: rangeStart ? toDateKey(rangeStart) : toDateKey(today),
                    done: false
                }
            ]);
    };
    const updateNote = (id, updates)=>{
        setNotes((current)=>current.map((note)=>note.id === id ? {
                    ...note,
                    ...updates
                } : note));
    };
    const isSelectedRangeDay = (day)=>{
        if (!rangeStart || !rangeEnd) {
            return false;
        }
        return isBetweenDates(day, rangeStart, rangeEnd);
    };
    const isPreviewRangeDay = (day)=>{
        if (!rangePreviewStart || !rangePreviewEnd || rangeEnd) {
            return false;
        }
        return isBetweenDates(day, rangePreviewStart, rangePreviewEnd);
    };
    const isWithinCommittedRange = (day)=>{
        if (!rangeStart || !rangeEnd) {
            return false;
        }
        const min = rangeStart < rangeEnd ? rangeStart : rangeEnd;
        const max = rangeStart < rangeEnd ? rangeEnd : rangeStart;
        const dayValue = startOfDay(day);
        return dayValue >= startOfDay(min) && dayValue <= startOfDay(max);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: calendarRef,
        className: [
            "print-only-calendar mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:py-10",
            darkMode ? "dark" : ""
        ].join(" "),
        style: {
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
            "--calendar-today-offset": modeColors.todayRingOffset
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[2px] bg-[var(--calendar-shell-bg)] p-3 shadow-[0_26px_55px_rgba(32,52,72,0.22)] transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    initial: false,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        custom: navigationDirection,
                        variants: PAGE_FLIP_ANIMATION,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        className: "relative overflow-hidden bg-[var(--calendar-panel-bg)] transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute left-1/2 top-2.5 z-20 flex -translate-x-1/2 gap-4 print:hidden",
                                children: Array.from({
                                    length: 14
                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-6 w-4 rounded-full border-[3px] border-[#aeb4ba] bg-transparent"
                                    }, index, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 886,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/WallCalendar.tsx",
                                lineNumber: 884,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-print relative h-64 overflow-hidden md:h-96 print:h-[240px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-slate-500 to-slate-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 894,
                                        columnNumber: 13
                                    }, this),
                                    !heroImageFailed ? // eslint-disable-next-line @next/next/no-img-element
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: monthHeroImageHiRes,
                                        alt: "Mountain trekking landscape",
                                        className: "h-full w-full object-cover transition-opacity duration-500 object-[center_78%] md:object-[center_82%] contrast-110 saturate-110",
                                        loading: "eager",
                                        onError: ()=>setHeroImageFailed(true)
                                    }, monthTransitionKey, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 897,
                                        columnNumber: 15
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setNavigationDirection(-1);
                                            setViewDate((current)=>new Date(current.getFullYear(), current.getMonth() - 1, 1));
                                        },
                                        className: "no-print absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/78 text-2xl text-slate-700 shadow hover:bg-white",
                                        "aria-label": "Previous month",
                                        children: "‹"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 907,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setNavigationDirection(1);
                                            setViewDate((current)=>new Date(current.getFullYear(), current.getMonth() + 1, 1));
                                        },
                                        className: "no-print absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/78 text-2xl text-slate-700 shadow hover:bg-white",
                                        "aria-label": "Next month",
                                        children: "›"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 921,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: [
                                            "absolute bottom-6 right-6 overflow-hidden rounded-2xl border px-5 py-3 text-right text-white shadow-[0_8px_30px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:bottom-8 sm:right-8",
                                            darkMode ? "bg-black/40 border-white/20" : "bg-white/40 border-white/50"
                                        ].join(" "),
                                        style: {
                                            borderColor: `${theme.accent}66`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: "absolute inset-0",
                                                style: {
                                                    backgroundColor: `${theme.accent}30`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                lineNumber: 942,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold tracking-[0.18em] text-white/90",
                                                        children: yearLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 948,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "font-display text-4xl leading-none tracking-[0.05em] sm:text-6xl",
                                                        children: monthLabel.toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 949,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                lineNumber: 947,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 935,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WallCalendar.tsx",
                                lineNumber: 893,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--calendar-content-bg)] px-4 pb-4 pt-5 text-[var(--calendar-text)] transition-colors sm:px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "no-print mb-4 flex flex-wrap items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-2 rounded-full border border-[var(--calendar-ring-border)] bg-[var(--calendar-button-bg)]/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--calendar-button-text)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                        size: 14,
                                                        className: "text-[var(--accent)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 959,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Theme"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                lineNumber: 958,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2",
                                                children: [
                                                    Object.entries(THEMES).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setThemeName(key),
                                                            className: [
                                                                "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold transition",
                                                                themeName === key ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--calendar-ring-border)] bg-[var(--calendar-button-bg)] text-[var(--calendar-button-text)] hover:bg-[var(--calendar-button-hover)]"
                                                            ].join(" "),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "h-2.5 w-2.5 rounded-full",
                                                                    style: {
                                                                        backgroundColor: value.accent
                                                                    },
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/WallCalendar.tsx",
                                                                    lineNumber: 975,
                                                                    columnNumber: 21
                                                                }, this),
                                                                value.label
                                                            ]
                                                        }, key, true, {
                                                            fileName: "[project]/src/components/WallCalendar.tsx",
                                                            lineNumber: 964,
                                                            columnNumber: 19
                                                        }, this)),
                                                    isRangeActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setRangeStart(null);
                                                            setRangeEnd(null);
                                                            setHoverDate(null);
                                                        },
                                                        className: "inline-flex items-center gap-1 rounded-full border border-[var(--calendar-ring-border)] bg-[var(--calendar-button-bg)] px-2 py-1 text-[11px] font-semibold text-[var(--calendar-button-text)] transition hover:bg-[var(--calendar-button-hover)]",
                                                        "aria-label": "Reset range",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                                size: 12,
                                                                className: "text-[var(--accent)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                lineNumber: 994,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Reset Range"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 984,
                                                        columnNumber: 19
                                                    }, this) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>window.print(),
                                                        className: "inline-flex items-center gap-2 rounded-full border border-[var(--calendar-ring-border)] bg-[var(--calendar-button-bg)] px-3 py-1 text-xs font-semibold text-[var(--calendar-button-text)] hover:bg-[var(--calendar-button-hover)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                lineNumber: 1003,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Print Range"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 998,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleSnapshot,
                                                        className: "inline-flex items-center gap-2 rounded-full border border-[var(--calendar-ring-border)] bg-[var(--calendar-button-bg)] px-3 py-1 text-xs font-semibold text-[var(--calendar-button-text)] hover:bg-[var(--calendar-button-hover)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                lineNumber: 1011,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Snapshot"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 1006,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setDarkMode((current)=>!current),
                                                        className: "inline-flex items-center justify-center rounded-full border border-[var(--calendar-ring-border)] bg-[var(--calendar-button-bg)] p-2 text-[var(--calendar-button-text)] transition hover:bg-[var(--calendar-button-hover)]",
                                                        "aria-label": darkMode ? "Switch to light mode" : "Switch to dark mode",
                                                        title: darkMode ? "Switch to light mode" : "Switch to dark mode",
                                                        children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                            size: 16,
                                                            className: "text-amber-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WallCalendar.tsx",
                                                            lineNumber: 1021,
                                                            columnNumber: 31
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                            size: 16,
                                                            className: "text-[var(--accent)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WallCalendar.tsx",
                                                            lineNumber: 1021,
                                                            columnNumber: 78
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 1014,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                lineNumber: 962,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 957,
                                        columnNumber: 13
                                    }, this),
                                    rangeSummary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "print-range-summary mb-4 hidden rounded-xl border border-[var(--accent-border)] bg-white/20 p-3 shadow-[0_8px_20px_rgba(15,23,42,0.12)] backdrop-blur-md print:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "mb-2 text-[11px] font-bold tracking-[0.14em] text-[var(--calendar-text-muted)]",
                                                children: "RANGE SUMMARY"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                lineNumber: 1028,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 border-l-4 border-[var(--accent)] pl-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheck$3e$__["CircleCheck"], {
                                                        size: 16,
                                                        className: "text-[var(--accent)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 1032,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-[var(--calendar-text)]",
                                                                children: rangeSummary.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                lineNumber: 1034,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-[var(--calendar-text-muted)]",
                                                                children: rangeSummary.subtitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                lineNumber: 1035,
                                                                columnNumber: 21
                                                            }, this),
                                                            rangeSummary.isCrossMonth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-[var(--accent)]",
                                                                children: [
                                                                    "Trek: ",
                                                                    formatRangeTagDate(rangeSummary.start),
                                                                    " - ",
                                                                    formatRangeTagDate(rangeSummary.end)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                lineNumber: 1037,
                                                                columnNumber: 23
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 1033,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                lineNumber: 1031,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 1027,
                                        columnNumber: 15
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-6 md:grid-cols-[0.34fr_0.66fr] md:gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--calendar-text-secondary)]",
                                                        children: "Notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 1048,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 min-h-[208px] rounded-sm bg-[repeating-linear-gradient(180deg,transparent_0,transparent_20px,var(--calendar-border)_21px)] px-1 py-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2 text-[13px] leading-[21px] text-[var(--calendar-text-secondary)]",
                                                            children: activeNotes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>updateNote(note.id, {
                                                                                    done: !note.done
                                                                                }),
                                                                            className: [
                                                                                "grid h-4 w-4 place-items-center rounded-sm border text-white transition",
                                                                                note.done ? "bg-[var(--accent)] border-[var(--accent)]" : "border-[var(--calendar-text-muted)]"
                                                                            ].join(" "),
                                                                            "aria-label": "Toggle task",
                                                                            children: note.done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                size: 11
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                                lineNumber: 1064,
                                                                                columnNumber: 40
                                                                            }, this) : null
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/WallCalendar.tsx",
                                                                            lineNumber: 1055,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: note.text,
                                                                            onChange: (event)=>updateNote(note.id, {
                                                                                    text: event.target.value
                                                                                }),
                                                                            className: [
                                                                                "max-w-[80%] flex-1 bg-transparent outline-none",
                                                                                note.done ? "line-through opacity-60" : "opacity-100"
                                                                            ].join(" ")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/WallCalendar.tsx",
                                                                            lineNumber: 1066,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "rounded-full bg-[var(--calendar-chip-bg)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--calendar-chip-text)]",
                                                                            children: note.dateKey.slice(8)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/WallCalendar.tsx",
                                                                            lineNumber: 1074,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, note.id, true, {
                                                                    fileName: "[project]/src/components/WallCalendar.tsx",
                                                                    lineNumber: 1054,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WallCalendar.tsx",
                                                            lineNumber: 1052,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 17
                                                    }, this),
                                                    rangeSummary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "range-recap-box mt-3 rounded-xl border border-[var(--accent-border)] bg-white/20 p-3 shadow-[0_8px_20px_rgba(15,23,42,0.12)] backdrop-blur-md print:hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "mb-2 text-[11px] font-bold tracking-[0.14em] text-[var(--calendar-text-muted)]",
                                                                children: "RANGE SUMMARY"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                lineNumber: 1084,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 border-l-4 border-[var(--accent)] pl-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheck$3e$__["CircleCheck"], {
                                                                        size: 16,
                                                                        className: "text-[var(--accent)]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                                        lineNumber: 1088,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "range-recaps",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-bold text-[var(--calendar-text)]",
                                                                                children: rangeSummary.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                                lineNumber: 1090,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-[var(--calendar-text-muted)]",
                                                                                children: rangeSummary.subtitle
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                                lineNumber: 1091,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            rangeSummary.isCrossMonth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[11px] text-[var(--accent)]",
                                                                                children: [
                                                                                    "Trek: ",
                                                                                    formatRangeTagDate(rangeSummary.start),
                                                                                    " - ",
                                                                                    formatRangeTagDate(rangeSummary.end)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                                lineNumber: 1093,
                                                                                columnNumber: 27
                                                                            }, this) : null
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                                        lineNumber: 1089,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                lineNumber: 1087,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 1083,
                                                        columnNumber: 19
                                                    }, this) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "no-print mt-3 space-y-2 border-b border-[var(--calendar-border)] pb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: addQuickTask,
                                                                className: "inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white shadow-[0_6px_18px_rgba(15,23,42,0.16)] transition hover:brightness-110",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                        size: 14,
                                                                        className: "text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                                        lineNumber: 1108,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    "Add Quick Task"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                lineNumber: 1103,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-[var(--calendar-text-muted)]",
                                                                children: "Added tasks map to selected start date or today."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                lineNumber: 1111,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 1102,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                lineNumber: 1047,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-7 border-b border-[var(--calendar-border)] pb-2 text-center text-[12px] font-bold tracking-[0.08em] text-[var(--calendar-text-secondary)]",
                                                        children: WEEKDAYS.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: day === "SAT" || day === "SUN" ? "text-[var(--calendar-weekend)]" : "",
                                                                children: day
                                                            }, day, false, {
                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                lineNumber: 1120,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 1118,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ref: gridRef,
                                                        className: "print-grid grid grid-cols-7 gap-y-1 pt-3",
                                                        children: days.map(({ date, inCurrentMonth }, index)=>{
                                                            const isStart = isSameDay(date, rangeStart);
                                                            const isEnd = isSameDay(date, rangeEnd);
                                                            const isToday = isSameDay(date, today);
                                                            const isInRange = isSelectedRangeDay(date);
                                                            const isPreview = isPreviewRangeDay(date);
                                                            const isRangeSegment = isStart || isEnd || isInRange || isPreview;
                                                            const prevDate = getDateOffset(date, -1);
                                                            const nextDate = getDateOffset(date, 1);
                                                            const prevActive = isSameDay(prevDate, rangeStart) || isSameDay(prevDate, rangeEnd) || isSelectedRangeDay(prevDate) || isPreviewRangeDay(prevDate);
                                                            const nextActive = isSameDay(nextDate, rangeStart) || isSameDay(nextDate, rangeEnd) || isSelectedRangeDay(nextDate) || isPreviewRangeDay(nextDate);
                                                            const isRangeStartEdge = !prevActive || index % 7 === 0;
                                                            const isRangeEndEdge = !nextActive || index % 7 === 6;
                                                            const hasNote = notes.some((note)=>note.dateKey === toDateKey(date));
                                                            const dayEvents = eventsByDate[toDateKey(date)] ?? [];
                                                            const holidayType = HOLIDAYS[toMonthDayKey(date)];
                                                            const noteCount = noteCountByDate[toDateKey(date)] ?? 0;
                                                            const rangeIntensity = isWithinCommittedRange(date) ? Math.min(selectedRangeSpanDays / 8, 1.6) : 0;
                                                            const activityLevel = noteCount + rangeIntensity + Math.min(dayEvents.length * 0.35, 1.2);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MagneticDateCell, {
                                                                date: date,
                                                                inCurrentMonth: inCurrentMonth,
                                                                isStart: isStart,
                                                                isEnd: isEnd,
                                                                isToday: isToday,
                                                                isInRange: isInRange,
                                                                isPreview: isPreview,
                                                                isRangeSegment: isRangeSegment,
                                                                isRangeStartEdge: isRangeStartEdge,
                                                                isRangeEndEdge: isRangeEndEdge,
                                                                hasNote: hasNote,
                                                                events: dayEvents,
                                                                isHovered: isSameDay(date, hoverDate),
                                                                holidayType: holidayType,
                                                                activityLevel: activityLevel,
                                                                accent: theme.accent,
                                                                darkMode: darkMode,
                                                                onSelect: handleDayClick,
                                                                onRangeSelect: handleDayDoubleClick,
                                                                onHoverStart: setHoverDate,
                                                                onHoverEnd: ()=>setHoverDate(null)
                                                            }, toDateKey(date), false, {
                                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                                lineNumber: 1164,
                                                                columnNumber: 23
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                                        lineNumber: 1129,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                lineNumber: 1117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 1046,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "pb-1 pt-4 text-center text-[13px] text-[var(--calendar-text-muted)]",
                                        children: [
                                            "Click to select start · Click again for end",
                                            hasCommittedRange ? "" : " or a later date",
                                            " · Notes saved locally"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 1194,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WallCalendar.tsx",
                                lineNumber: 956,
                                columnNumber: 11
                            }, this)
                        ]
                    }, monthTransitionKey, true, {
                        fileName: "[project]/src/components/WallCalendar.tsx",
                        lineNumber: 875,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/WallCalendar.tsx",
                    lineNumber: 874,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WallCalendar.tsx",
                lineNumber: 873,
                columnNumber: 7
            }, this),
            typeof document !== "undefined" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: eventModalDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "no-print fixed inset-0 z-[90] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: closeEventModal,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.8,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.9,
                            y: 10
                        },
                        transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 22
                        },
                        onClick: (event)=>event.stopPropagation(),
                        className: [
                            "w-full max-w-md rounded-2xl border p-5 shadow-2xl backdrop-blur-lg",
                            darkMode ? "border-white/20 bg-slate-800/60 text-slate-100" : "border-white/20 bg-black/40 text-slate-100"
                        ].join(" "),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold uppercase tracking-wider text-white",
                                children: [
                                    "Add Event • ",
                                    formatRangeLong(eventModalDate)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WallCalendar.tsx",
                                lineNumber: 1226,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold uppercase tracking-[0.08em] text-white/90 [text-shadow:0px_1px_2px_rgba(0,0,0,0.5)]",
                                        children: "Event Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 1231,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: eventDraft.type,
                                        onChange: (event)=>setEventDraft((current)=>({
                                                    ...current,
                                                    type: event.target.value
                                                })),
                                        className: [
                                            "w-full rounded-lg border px-3 py-2 text-sm outline-none",
                                            darkMode ? "border-slate-700 bg-slate-800 text-slate-100" : "border-white/25 bg-slate-800/70 text-slate-100"
                                        ].join(" "),
                                        children: EVENT_TYPE_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: option.type,
                                                children: [
                                                    option.emoji,
                                                    " ",
                                                    option.label
                                                ]
                                            }, option.type, true, {
                                                fileName: "[project]/src/components/WallCalendar.tsx",
                                                lineNumber: 1247,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 1234,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold uppercase tracking-[0.08em] text-white/90 [text-shadow:0px_1px_2px_rgba(0,0,0,0.5)]",
                                        children: "Event Title"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 1253,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: eventDraft.title,
                                        onChange: (event)=>setEventDraft((current)=>({
                                                    ...current,
                                                    title: event.target.value
                                                })),
                                        placeholder: "Add event title",
                                        className: [
                                            "w-full rounded-lg border px-3 py-2 text-sm outline-none",
                                            darkMode ? "border-slate-700 bg-slate-800 text-slate-100 placeholder:text-gray-400" : "border-white/25 bg-slate-800/70 text-slate-100 placeholder:text-gray-400"
                                        ].join(" ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 1256,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold uppercase tracking-[0.08em] text-white/90 [text-shadow:0px_1px_2px_rgba(0,0,0,0.5)]",
                                        children: "Time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 1270,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: eventDraft.time,
                                        onChange: (event)=>setEventDraft((current)=>({
                                                    ...current,
                                                    time: event.target.value
                                                })),
                                        className: [
                                            "w-full rounded-lg border px-3 py-2 text-sm outline-none",
                                            darkMode ? "border-slate-700 bg-slate-800 text-slate-100" : "border-white/25 bg-slate-800/70 text-slate-100"
                                        ].join(" ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 1273,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WallCalendar.tsx",
                                lineNumber: 1230,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: closeEventModal,
                                        className: [
                                            "rounded-full border border-white/50 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/10",
                                            darkMode ? "text-slate-300" : "text-white"
                                        ].join(" "),
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 1289,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: saveEvent,
                                        className: "rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg",
                                        style: {
                                            backgroundColor: theme.accent
                                        },
                                        children: "Save Event"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WallCalendar.tsx",
                                        lineNumber: 1299,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WallCalendar.tsx",
                                lineNumber: 1288,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WallCalendar.tsx",
                        lineNumber: 1213,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/WallCalendar.tsx",
                    lineNumber: 1206,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/WallCalendar.tsx",
                lineNumber: 1204,
                columnNumber: 13
            }, this), document.body) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WallCalendar.tsx",
        lineNumber: 841,
        columnNumber: 5
    }, this);
}
_s1(WallCalendar, "rZ3FdmKzpIeoMBh/QocduA/omnA=");
_c1 = WallCalendar;
var _c, _c1;
__turbopack_context__.k.register(_c, "MagneticDateCell");
__turbopack_context__.k.register(_c1, "WallCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_WallCalendar_tsx_0ltu6mv._.js.map