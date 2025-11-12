(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/variants.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EASE_OUT",
    ()=>EASE_OUT,
    "fadeDown",
    ()=>fadeDown,
    "fadeIn",
    ()=>fadeIn,
    "fadeUp",
    ()=>fadeUp,
    "floatIn",
    ()=>floatIn,
    "slideLeft",
    ()=>slideLeft,
    "slideRight",
    ()=>slideRight,
    "stagger",
    ()=>stagger
]);
const EASE_OUT = [
    0.22,
    1,
    0.36,
    1
];
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 28
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: EASE_OUT
        }
    }
};
const fadeDown = {
    hidden: {
        opacity: 0,
        y: -28
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: EASE_OUT
        }
    }
};
const fadeIn = {
    hidden: {
        opacity: 0,
        scale: 0.98
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: EASE_OUT
        }
    }
};
const floatIn = {
    hidden: {
        opacity: 0,
        y: 15,
        scale: 0.9
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [
                0.4,
                0,
                0.2,
                1
            ]
        }
    }
};
const slideLeft = {
    hidden: {
        opacity: 0,
        x: 40
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: EASE_OUT
        }
    }
};
const slideRight = {
    hidden: {
        opacity: 0,
        x: -40
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: EASE_OUT
        }
    }
};
const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/StickyScrollySteps.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StickyScrollySteps,
    "defineSimpleSteps",
    ()=>defineSimpleSteps,
    "defineSteps",
    ()=>defineSteps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const defineSteps = (v)=>v;
const defineSimpleSteps = (v)=>v;
/* =========================
   🔹 TYPE GUARDS & NORMALIZER
========================= */ function isSimpleSteps(arr) {
    // kiểm tra phần tử đầu tiên có 'text' và không có 'bullets'
    const first = arr[0];
    return !!first && "text" in first && !("bullets" in first);
}
function toBulletedSteps(arr) {
    return arr.map((s)=>({
            title: s.title,
            img: s.img,
            bullets: [
                {
                    text: s.text
                }
            ]
        }));
}
function StickyScrollySteps({ steps }) {
    _s();
    // Chuẩn hoá về Step[]
    const normalized = isSimpleSteps(steps) ? toBulletedSteps(steps) : steps;
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [prevActive, setPrevActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const stepsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const setStepRef = (el, i)=>{
        if (el) stepsRef.current[i] = el;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StickyScrollySteps.useEffect": ()=>{
            if (!stepsRef.current.length) return;
            const observer = new IntersectionObserver({
                "StickyScrollySteps.useEffect": (entries)=>{
                    let next = active;
                    let best = 0;
                    for (const e of entries){
                        if (e.isIntersecting && e.intersectionRatio > best) {
                            best = e.intersectionRatio;
                            next = Number(e.target.dataset.index);
                        }
                    }
                    if (next !== active) setActive(next);
                }
            }["StickyScrollySteps.useEffect"], {
                root: null,
                rootMargin: "-45% 0px -45% 0px",
                threshold: buildThresholdList(30)
            });
            stepsRef.current.forEach({
                "StickyScrollySteps.useEffect": (el)=>observer.observe(el)
            }["StickyScrollySteps.useEffect"]);
            return ({
                "StickyScrollySteps.useEffect": ()=>observer.disconnect()
            })["StickyScrollySteps.useEffect"];
        }
    }["StickyScrollySteps.useEffect"], [
        active
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StickyScrollySteps.useEffect": ()=>{
            if (active !== prevActive) setPrevActive(active);
        }
    }["StickyScrollySteps.useEffect"], [
        active,
        prevActive
    ]);
    const totalH = `${normalized.length * 100}vh`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full",
        style: {
            height: totalH
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid h-1/2 grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 flex h-screen items-center justify-center overflow-hidden rounded-3xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                initial: false,
                                mode: "sync",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                        src: normalized[prevActive].img,
                                        alt: normalized[prevActive].title,
                                        className: "h-8/15 w-full object-cover rounded-3xl will-change-transform will-change-opacity",
                                        initial: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        animate: {
                                            opacity: active === prevActive ? 1 : 0,
                                            scale: 1.005
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: 1.005
                                        },
                                        transition: {
                                            duration: 0.45,
                                            ease: "easeOut"
                                        }
                                    }, `prev-${prevActive}-${normalized[prevActive].img}`, false, {
                                        fileName: "[project]/app/components/StickyScrollySteps.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                        src: normalized[active].img,
                                        alt: normalized[active].title,
                                        className: "absolute h-8/15 w-full object-cover rounded-3xl will-change-transform will-change-opacity",
                                        initial: {
                                            opacity: 0,
                                            scale: 1.02
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0.98
                                        },
                                        transition: {
                                            duration: 0.55,
                                            ease: "easeOut"
                                        }
                                    }, `curr-${active}-${normalized[active].img}`, false, {
                                        fileName: "[project]/app/components/StickyScrollySteps.tsx",
                                        lineNumber: 115,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/StickyScrollySteps.tsx",
                                lineNumber: 104,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/StickyScrollySteps.tsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/StickyScrollySteps.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: normalized.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-index": i,
                                ref: (el)=>setStepRef(el, i),
                                className: "flex min-h-screen items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: `mx-auto w-full p-6 md:p-8 ${i === active ? "bg-white" : "bg-white/70"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                            className: "text-2xl font-extrabold text-gray-900 md:text-3xl",
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: i === active ? 1 : 0.7,
                                                y: i === active ? 0 : 6
                                            },
                                            transition: {
                                                duration: 0.55,
                                                ease: "easeOut"
                                            },
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/StickyScrollySteps.tsx",
                                            lineNumber: 141,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "my-4 h-px w-full bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/StickyScrollySteps.tsx",
                                            lineNumber: 150,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-5",
                                            children: s.bullets.map((b, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        b.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-0.5 shrink-0",
                                                            children: b.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/StickyScrollySteps.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 55
                                                        }, this) : null,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "leading-relaxed text-gray-600",
                                                            children: b.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/StickyScrollySteps.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, j, true, {
                                                    fileName: "[project]/app/components/StickyScrollySteps.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/StickyScrollySteps.tsx",
                                            lineNumber: 152,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/StickyScrollySteps.tsx",
                                    lineNumber: 138,
                                    columnNumber: 29
                                }, this)
                            }, i, false, {
                                fileName: "[project]/app/components/StickyScrollySteps.tsx",
                                lineNumber: 132,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/StickyScrollySteps.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/StickyScrollySteps.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white"
            }, void 0, false, {
                fileName: "[project]/app/components/StickyScrollySteps.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/StickyScrollySteps.tsx",
        lineNumber: 99,
        columnNumber: 9
    }, this);
}
_s(StickyScrollySteps, "HO8DFd0Sgc03IZITe4m4rPWLm7w=");
_c = StickyScrollySteps;
/* =========================
   🔹 UTIL
========================= */ function buildThresholdList(steps = 20) {
    return Array.from({
        length: steps
    }, (_, i)=>i / (steps - 1));
}
var _c;
__turbopack_context__.k.register(_c, "StickyScrollySteps");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/AccordionItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccordionItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Remove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/variants.tsx [app-client] (ecmascript)");
;
;
;
;
;
function AccordionItem({ idx, q, a, isOpen, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
        className: "py-10 text-black border-b border-neutral-200 last:border-b",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                "aria-expanded": isOpen,
                "aria-controls": `faq-panel-${idx}`,
                className: "group flex w-full items-start justify-between gap-6 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-mono font-semibold leading-snug sm:text-[28px] text-black",
                        children: q
                    }, void 0, false, {
                        fileName: "[project]/app/components/AccordionItem.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center text-black",
                        whileTap: {
                            scale: 0.9
                        },
                        animate: {
                            rotate: isOpen ? 180 : 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 380,
                            damping: 26
                        },
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            initial: false,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.7,
                                    rotate: -90
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.7,
                                    rotate: 90
                                },
                                transition: {
                                    duration: 0.18,
                                    ease: "easeOut"
                                },
                                className: "text-black",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AccordionItem.tsx",
                                    lineNumber: 46,
                                    columnNumber: 39
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "large"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AccordionItem.tsx",
                                    lineNumber: 46,
                                    columnNumber: 69
                                }, this)
                            }, isOpen ? "minus" : "plus", false, {
                                fileName: "[project]/app/components/AccordionItem.tsx",
                                lineNumber: 38,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/AccordionItem.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/AccordionItem.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AccordionItem.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    id: `faq-panel-${idx}`,
                    initial: "collapsed",
                    animate: "open",
                    exit: "collapsed",
                    variants: {
                        open: {
                            height: "auto",
                            opacity: 1,
                            marginTop: 16,
                            clipPath: "inset(0% 0 0% 0 round 0px)",
                            transition: {
                                height: {
                                    type: "spring",
                                    stiffness: 280,
                                    damping: 30
                                },
                                opacity: {
                                    duration: 0.2
                                },
                                clipPath: {
                                    duration: 0.28,
                                    ease: "easeOut"
                                }
                            }
                        },
                        collapsed: {
                            height: 0,
                            opacity: 0,
                            marginTop: 0,
                            clipPath: "inset(0% 0 100% 0 round 0px)",
                            transition: {
                                height: {
                                    duration: 0.24,
                                    ease: "easeInOut"
                                },
                                opacity: {
                                    duration: 0.18
                                },
                                clipPath: {
                                    duration: 0.22,
                                    ease: "easeIn"
                                }
                            }
                        }
                    },
                    style: {
                        overflow: "hidden",
                        willChange: "height, opacity, clip-path"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-3xl mt-4 text-base leading-relaxed text-black/80",
                        children: a
                    }, void 0, false, {
                        fileName: "[project]/app/components/AccordionItem.tsx",
                        lineNumber: 86,
                        columnNumber: 25
                    }, this)
                }, "content", false, {
                    fileName: "[project]/app/components/AccordionItem.tsx",
                    lineNumber: 54,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/AccordionItem.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AccordionItem.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = AccordionItem;
var _c;
__turbopack_context__.k.register(_c, "AccordionItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/assets/imgTerminal1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/imgTerminal1.d15eea86.png");}),
"[project]/app/assets/imgTerminal1.png.mjs { IMAGE => \"[project]/app/assets/imgTerminal1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/assets/imgTerminal1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 100,
    height: 100,
    blurWidth: 1,
    blurHeight: 1,
    blurDataURL: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/assets/imgTerminal2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/imgTerminal2.dbbfd99b.png");}),
"[project]/app/assets/imgTerminal2.png.mjs { IMAGE => \"[project]/app/assets/imgTerminal2.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/assets/imgTerminal2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AMzP097i59bW2Nnh5NDa3szHwbqrob2uowC1t7/BxtC7u8PEzdTO1dm/ta2fiH+ojn8AsKqk0tnfnqKnkpKTsrS4s6GVtZZ+pol2AKORbMnAuJ2ZlqycjpmHf45wYsyie8KXcwC8on3Vv6uupJzYxbODdmxHQDyAX0CYbkkA06h+xZ15v6KGuKuchoaKMiklSzgquY1oAHJOLlc2IWJFM4l2br2Xf1dDNTMqIridggBnRi+LYU2TbVBzTzW3hGKXclQ3KyFpWEjtKWzofmMtmQAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/assets/imgTerminal3.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/imgTerminal3.f3c8a941.png");}),
"[project]/app/assets/imgTerminal3.png.mjs { IMAGE => \"[project]/app/assets/imgTerminal3.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/assets/imgTerminal3.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1248,
    height: 832,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ANPSztfX09HRzMfCusG2qtjY0tPPyc/MxgDFvbTCx8DV2Ne9s6ypkIDR0c3Qy8THw70AvLKpr66lxMPAm4qBZlZLc25ppJGFi352AGRIOpKEd7W0tJiOh3lvZoh/d5V+cqmVigBnUD1nWUS2qJqJb1WDZkqekIGlkXySiXYy/kpKe8DDkwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/assets/imgTerminal4.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/imgTerminal4.dc23196f.png");}),
"[project]/app/assets/imgTerminal4.png.mjs { IMAGE => \"[project]/app/assets/imgTerminal4.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal4$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/assets/imgTerminal4.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal4$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1344,
    height: 768,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AM3J0d7j6PD2+eLn6t7g4sbEwaWam5+YowDBu8fEy9bI2eSzs7uym5uwmpScg3qCcW4Axsats7ehorO8gpChn5Wbn42CdmNce2JeAMuvi6CNeFNeallpfIKKmZ6Md6SBY56IdgDov4Kuk248MilFTVlGTVtSRTyoflqpfFjsGEfKvjnMZAAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/assets/imgTerminal5.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/imgTerminal5.40e605ab.png");}),
"[project]/app/assets/imgTerminal5.png.mjs { IMAGE => \"[project]/app/assets/imgTerminal5.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal5$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/assets/imgTerminal5.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal5$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1280,
    height: 800,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AKigpLu3ubOyr9TT09DR0dvc3N3d3dnX1gClk5aQiYyhm5qWkJG9sq7Zy8TKtqyilpAA0c3MuLWxsp+WmIaBm4qAzqiZ2aiQzKCKAMPAsq2oltHDttCvnoF3gpOTop2FeqSOggDFrpW9pIfDsJvhwq7Hppe1s6+SkY6vraloRFFDQUXjhwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/assets/imgTerminal6.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/imgTerminal6.87785e31.png");}),
"[project]/app/assets/imgTerminal6.png.mjs { IMAGE => \"[project]/app/assets/imgTerminal6.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal6$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/assets/imgTerminal6.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal6$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 724,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/webp;base64,UklGRgMBAABXRUJQVlA4TPcAAAAvB0ABAM1VICICHgiADQIAAADnhwAgCDwAAAgOBAAABAAAAEABHAAAAADgAADEOQeH+88JFWcXpRcHAADAAwGwQQAAADj/r/4+mp4d3GUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwYJAuhV/3QABsEAAAAM5/+/YkTgwEwAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDhOopJtO4+c64oBmhkS6rSq8uehX/kSIx35bc/2b380XONCpQwiHfqF4XbbLa/PYWoNeX+F+MjLu4kitmGkft5mNSTf4CMvAwAIeX9cKBg4ClfxnW+YeMJikv5xS8/D/g0CAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/assets/imgTerminal7.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/imgTerminal7.5bab46ba.png");}),
"[project]/app/assets/imgTerminal7.png.mjs { IMAGE => \"[project]/app/assets/imgTerminal7.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal7$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/assets/imgTerminal7.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal7$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 3000,
    height: 1723,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/webp;base64,UklGRgcBAABXRUJQVlA4TPsAAAAvBwABEM1VICICHghACgMAAIB7zQ8FAADGQwAAAAAAAAAAAAAAAAAAAAAAAAAAIAAjgAAC4g13AwAAPBCCEwAAAIDzvz4DAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCQcsDGTABAAAAOP+9pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBO9PBBgEwAAAIDzX0QAAAUBAAAAAAABAAAAoBCEAAABQAAcABAAAAAAIIQAiiiRkjAAEXEm9Z3uFwvg/1Ap4nqzzJ+BcADlhBz35neX23UOVw/wAWSxa17zHtQxQTIegNyfcZZ/attGLVwAAQA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/assets/imgTerminal8.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/imgTerminal8.87d5b5cf.png");}),
"[project]/app/assets/imgTerminal8.png.mjs { IMAGE => \"[project]/app/assets/imgTerminal8.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal8$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/assets/imgTerminal8.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal8$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 720,
    height: 612,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAvUlEQVR42lXLvQqCUAAFYMsHqMHoJYLW5hqUvGqB4E8IKmaiplftB9simqolWozoZSKCiJ6jll4g4kaUkMNZzvkORkKA/YKzfS1QYHTUQ2NLB1zx06cjRnks4SySy3KzR3DkXUHYLmUA5/O12Sp5mO4U2bGzowIG/wc5wVMiyZy/SCA+1VhX0+MXuHS53mycBVFGltO780OhmgG0RVcslrwZ4y6yB/YBhK1CBjCQI3xPXmsT7STBTkhBkE/BG273T+K45UStAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/products/hardware/terminal/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/variants.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StickyScrollySteps$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/StickyScrollySteps.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AccordionItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AccordionItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/assets/imgTerminal1.png.mjs { IMAGE => "[project]/app/assets/imgTerminal1.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/assets/imgTerminal2.png.mjs { IMAGE => "[project]/app/assets/imgTerminal2.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/assets/imgTerminal3.png.mjs { IMAGE => "[project]/app/assets/imgTerminal3.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal4$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/assets/imgTerminal4.png.mjs { IMAGE => "[project]/app/assets/imgTerminal4.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal5$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/assets/imgTerminal5.png.mjs { IMAGE => "[project]/app/assets/imgTerminal5.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal6$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/assets/imgTerminal6.png.mjs { IMAGE => "[project]/app/assets/imgTerminal6.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal7$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal7$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/assets/imgTerminal7.png.mjs { IMAGE => "[project]/app/assets/imgTerminal7.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal8$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/assets/imgTerminal8.png.mjs { IMAGE => "[project]/app/assets/imgTerminal8.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowOutward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ArrowOutward.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const features = [
    "Built-in receipt printer",
    "Space-saving design",
    "Long-lasting battery",
    "Simple setup"
];
const SIMPLE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StickyScrollySteps$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineSimpleSteps"])([
    {
        title: "Made to fit your space",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        text: "The streamlined, transportable payment terminal fits and moves easily across your counter."
    },
    {
        title: "Internet down? No problem.",
        img: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        text: "With offline payments you can keep selling even when you’re temporarily disconnected."
    }
]);
const items = [
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal5$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Insert chip card into terminal",
        label: "Dip a chip card"
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal6$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Tap contactless card or device on terminal",
        label: "Tap a contactless card or device"
    },
    {
        img: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal4$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        alt: "Swipe magstripe card on terminal",
        label: "Swipe a magstripe card"
    }
];
const ITEMSFAQ = [
    {
        q: "What is RAVO Terminal?",
        a: "RAVO Terminal is an all-in-one device for taking card payments and printing receipts. This credit card machine comes with free RAVO Point-of-Sale software that’s easy to set up and simple to use. With a built-in battery that lasts all day, you’ll never miss a sale."
    },
    {
        q: "Where can I buy RAVO Terminal?",
        a: "You can contact our sales representative Tho Nguyen at (346) 326-7765 to purchase your RAVO Terminal."
    },
    {
        q: "How does RAVO Terminal work?",
        a: "RAVO Terminal makes it easy for any business to accept card payments and run a point of sale that’s tailored to what your salon or shop does best. The built-in RAVO POS software simplifies selling, tracking, and daily operations—so you can focus on clients, not complexity."
    },
    {
        q: "What’s the difference between RAVO Terminal and RAVO Handheld?",
        a: "RAVO Terminal is a complete POS solution with a built-in receipt printer, designed to work best on a countertop while still being compact and portable. RAVO Handheld is a slim, mobile POS with a built-in camera and barcode scanner—perfect for taking payments, managing orders, or checking inventory on the go."
    },
    {
        q: "Does RAVO Terminal need Wi-Fi?",
        a: "Yes. RAVO Terminal requires an internet connection. You can connect it via Wi-Fi or Ethernet. If you don’t have Wi-Fi, you can use Offline Payments to continue accepting transactions for up to 24 hours. (Additional terms apply.)"
    },
    {
        q: "What accessories can I use with RAVO Terminal?",
        a: "RAVO Terminal becomes even more powerful when you connect the right accessories. Secure it on your counter with a RAVO Countertop Mount for smoother checkout. Add a belt clip to keep it handy while taking orders or payments on the go. Connect a barcode scanner or cash drawer for a complete setup—just plug them in through the optional RAVO Hub."
    }
];
const TerminalPage = ()=>{
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalPage.useEffect": ()=>{
            const section = sectionRef.current;
            const video = videoRef.current;
            if (!section || !video) return;
            video.muted = true;
            video.playsInline = true;
            let isIntersectingNow = false;
            const tryPlay = {
                "TerminalPage.useEffect.tryPlay": ()=>video.play().catch({
                        "TerminalPage.useEffect.tryPlay": ()=>{}
                    }["TerminalPage.useEffect.tryPlay"])
            }["TerminalPage.useEffect.tryPlay"];
            const tryPause = {
                "TerminalPage.useEffect.tryPause": ()=>video.pause()
            }["TerminalPage.useEffect.tryPause"];
            const onVisibility = {
                "TerminalPage.useEffect.onVisibility": ()=>{
                    if (document.hidden) tryPause();
                    else if (isIntersectingNow) tryPlay();
                }
            }["TerminalPage.useEffect.onVisibility"];
            document.addEventListener("visibilitychange", onVisibility);
            const observer = new IntersectionObserver({
                "TerminalPage.useEffect": ([entry])=>{
                    isIntersectingNow = entry.isIntersecting;
                    if (entry.isIntersecting) tryPlay();
                    else tryPause();
                }
            }["TerminalPage.useEffect"], {
                threshold: 0.25,
                rootMargin: "0px 0px -15% 0px"
            });
            observer.observe(section);
            return ({
                "TerminalPage.useEffect": ()=>{
                    observer.disconnect();
                    document.removeEventListener("visibilitychange", onVisibility);
                }
            })["TerminalPage.useEffect"];
        }
    }["TerminalPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto h-screen w-full ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "RAVO Terminal",
                                    fill: true,
                                    priority: true,
                                    className: "object-cover",
                                    sizes: "100vw 100vh"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/20"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                            lineNumber: 132,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                            initial: "hidden",
                            animate: "show",
                            className: "relative z-10 grid min-h-screen place-items-center px-4 py-12 sm:py-16 md:py-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-6xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        className: "text-white/90 text-base font-semibold tracking-wide",
                                        children: "Ravo Terminal"
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        className: "mt-3 font-serif text-white text-4xl leading-tight sm:text-5xl sm:leading-[1.1] md:text-6xl md:leading-[1.08]",
                                        children: [
                                            "The compact credit",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "hidden sm:block"
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "card machine that",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "hidden sm:block"
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "flexes to your needs"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        className: "mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#buy",
                                            className: "inline-flex items-center justify-center rounded-full border border-white bg-transfer px-10 py-4 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                                            children: "Buy now"
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                            lineNumber: 143,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-2xl sm:rounded-3xl"
                        }, void 0, false, {
                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                            lineNumber: 181,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                    lineNumber: 131,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                lineNumber: 130,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-fit bg-white text-neutral-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: true,
                        amount: 0.4
                    },
                    className: "mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row divide-x divide-neutral-200 ",
                        children: features.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                className: "flex-1 flex items-center justify-center py-8 text-center text-xl font-semibold leading-snug",
                                children: item
                            }, idx, false, {
                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                lineNumber: 194,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                        lineNumber: 192,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                    lineNumber: 185,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                lineNumber: 184,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "w-full h-screen bg-white text-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: false,
                                amount: 0.4
                            },
                            className: "text-center font-serif text-3xl leading-tight sm:text-5xl md:text-6xl",
                            children: "Small footprint. Lots of possibilities."
                        }, void 0, false, {
                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                            lineNumber: 207,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "mt-10 md:mt-20",
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: false,
                                amount: 0.35
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mx-auto max-w-4xl overflow-hidden rounded-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    ref: videoRef,
                                    className: "h-auto w-full object-cover",
                                    autoPlay: true,
                                    loop: true,
                                    muted: true,
                                    playsInline: true,
                                    preload: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                        src: "/videoTerminal11.mp4",
                                        type: "video/mp4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                lineNumber: 223,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                            lineNumber: 217,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                    lineNumber: 206,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                lineNumber: 205,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-20 pt-10 min-h-fit shadow-2xl flex flex-col items-center justify-center text-black ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$StickyScrollySteps$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    steps: SIMPLE
                }, void 0, false, {
                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                    lineNumber: 240,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                lineNumber: 239,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-screen mb-10 bg-white text-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: true,
                                amount: 0.3
                            },
                            className: "text-center mb-40 font-serif text-3xl leading-tight sm:text-6xl",
                            children: "Let customers pay their way"
                        }, void 0, false, {
                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                            lineNumber: 244,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            className: "mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8",
                            children: items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].figure, {
                                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                    className: "group rounded-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition will-change-transform group-hover:-translate-y-0.5 group-hover:shadow-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-4/3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: it.img,
                                                    alt: it.alt,
                                                    fill: true,
                                                    priority: i === 0,
                                                    className: "object-cover",
                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 268,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                            className: "mt-4 text-center text-lg font-semibold",
                                            children: it.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                            lineNumber: 254,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                    lineNumber: 243,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                lineNumber: 242,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "relative w-full bg-white text-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 -z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto h-152 max-w-7xl bg-[radial-gradient(60%_60%_at_50%_20%,rgba(0,0,0,0.06),transparent_60%)]"
                        }, void 0, false, {
                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                            lineNumber: 292,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                        lineNumber: 291,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-8 lg:pb-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].figure, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                initial: "hidden",
                                whileInView: "show",
                                viewport: {
                                    once: true,
                                    amount: 0.25
                                },
                                className: "group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur supports-backdrop-filter:bg-white/80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-video",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(0,0,0,0.18),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.12),transparent_25%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 304,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            ref: videoRef,
                                            src: "/videoTerminal1.mp4",
                                            className: "absolute inset-0 h-full w-full object-cover",
                                            muted: true,
                                            playsInline: true,
                                            preload: "metadata",
                                            controls: false
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 transition-opacity group-hover:ring-black/10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 314,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                lineNumber: 296,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                                initial: "hidden",
                                whileInView: "show",
                                viewport: {
                                    once: true,
                                    amount: 0.25
                                },
                                className: "mx-auto mt-10 grid gap-8 md:grid-cols-12 md:gap-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        className: "md:col-span-7",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-700",
                                                        children: "New hardware"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700",
                                                        children: "In stock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-5xl",
                                                children: [
                                                    "Make it yours for ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "whitespace-nowrap",
                                                        children: "$299"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 51
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex flex-wrap items-end gap-x-4 gap-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[17px] text-neutral-800",
                                                        children: [
                                                            "Or ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold",
                                                                children: "$27"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 40
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " per month over 12 months",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                                className: "ml-0.5 align-super text-[10px]",
                                                                children: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center rounded-md border border-black/10 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 shadow-sm",
                                                        children: "0% APR for qualified buyers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 flex flex-wrap items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#buy",
                                                        className: "inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
                                                        children: "Buy now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#learn-more",
                                                        className: "inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-base font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10",
                                                        children: [
                                                            "Learn more",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowOutward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                fontSize: "small",
                                                                className: "ml-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 348,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "1-year limited warranty"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "30-day returns"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "Free shipping"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        className: "md:col-span-5 md:pl-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[15.5px] leading-relaxed text-neutral-700",
                                                children: "Discover how our transparent payment processing rates differ based on the plan you select. Choose the option that fits your salon today, and scale without surprise fees tomorrow."
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#learn-more",
                                                className: "mt-4 inline-flex items-center gap-2 text-[15.5px] font-semibold text-neutral-900 underline-offset-4 hover:underline",
                                                children: [
                                                    "Explore rates & plans ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowOutward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        fontSize: "small"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 55
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-black/10 bg-white p-4 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold",
                                                                children: "Tap • Dip • Swipe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-neutral-600",
                                                                children: "Fast, PCI-compliant payments."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-black/10 bg-white p-4 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold",
                                                                children: "Plug & play"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-neutral-600",
                                                                children: "Works out of the box."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                lineNumber: 317,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                        lineNumber: 295,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                lineNumber: 287,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto w-full px-20 py-20 text-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: true,
                            amount: 0.4
                        },
                        className: "faq-heading font-serif text-5xl sm:text-6xl text-black",
                        children: "FAQ"
                    }, void 0, false, {
                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                        lineNumber: 407,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-20 h-px w-full bg-neutral-200"
                    }, void 0, false, {
                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                        lineNumber: 418,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        className: "border-t border-neutral-200 text-black",
                        children: ITEMSFAQ.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AccordionItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                idx: i,
                                q: item.q,
                                a: item.a,
                                isOpen: openIndex === i,
                                onToggle: ()=>setOpenIndex(openIndex === i ? null : i)
                            }, i, false, {
                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                lineNumber: 428,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/products/hardware/terminal/page.tsx",
                        lineNumber: 420,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                lineNumber: 406,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full bg-white text-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: true,
                                amount: 0.3
                            },
                            className: "text-center font-serif text-3xl leading-tight sm:text-5xl",
                            children: "Which compact POS is right for you?"
                        }, void 0, false, {
                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                            lineNumber: 442,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: true,
                                amount: 0.35
                            },
                            className: "mx-auto mt-3 mb-20 max-w-2xl text-center text-[15.5px] text-neutral-600",
                            children: "Compare handheld and countertop options designed for fast checkouts and a tidy setup."
                        }, void 0, false, {
                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                            lineNumber: 452,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            className: "mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                    className: "group rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-700",
                                                    children: "Countertop"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center rounded-full bg-black px-2.5 py-1 text-xs font-semibold text-white",
                                                    children: "Built-in printer"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mx-auto mt-4 max-w-[520px] overflow-hidden rounded-2xl ring-1 ring-inset ring-black/5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-16/10 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal7$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal7$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    alt: "Ravo Terminal",
                                                    fill: true,
                                                    priority: true,
                                                    className: "object-contain",
                                                    sizes: "(max-width: 768px) 100vw, 33vw"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 483,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 482,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold",
                                                    children: "Ravo Terminal"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-3 space-y-1.5 text-[15.5px] text-neutral-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Streamlined countertop selling"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Receipt printer built in"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                            lineNumber: 499,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Tap, dip, and swipe in one"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#buy-terminal",
                                                    className: "mt-4 inline-flex items-center gap-1.5 text-[15.5px] font-semibold text-black underline-offset-4 hover:underline focus:outline-none",
                                                    children: [
                                                        "Buy Ravo Terminal",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowOutward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            fontSize: "small"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 495,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                    lineNumber: 469,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                    className: "group rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-700",
                                                    children: "Mobile"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center rounded-full bg-neutral-900 px-2.5 py-1 text-xs font-semibold text-white",
                                                    children: "Built-in scanner"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mx-auto mt-4 max-w-[520px] overflow-hidden rounded-2xl ring-1 ring-inset ring-black/5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-16/10 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$imgTerminal8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$imgTerminal8$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    alt: "Ravo Handheld",
                                                    fill: true,
                                                    className: "object-contain",
                                                    sizes: "(max-width: 768px) 100vw, 33vw"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 525,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold",
                                                    children: "Ravo Handheld"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-3 space-y-1.5 text-[15.5px] text-neutral-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Sell anywhere with all-day battery"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Integrated scanner and camera"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                            lineNumber: 541,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "Tap and dip payments"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#explore-handheld",
                                                    className: "mt-4 inline-flex items-center gap-1.5 text-[15.5px] font-semibold text-black underline-offset-4 hover:underline focus:outline-none",
                                                    children: [
                                                        "Explore Ravo Handheld",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowOutward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            fontSize: "small"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 537,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                    lineNumber: 512,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$variants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                    className: "relative overflow-hidden rounded-3xl bg-black p-6 sm:p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_0%,#ffffff14_0%,transparent_60%)]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 558,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mt-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-serif text-3xl leading-tight text-white sm:text-4xl",
                                                    children: [
                                                        "Looking for",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                            className: "hidden sm:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                            lineNumber: 562,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "something else?"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 max-w-sm text-[15.5px] text-white/80",
                                                    children: "See all devices side-by-side and pick the one that fits your counter, budget, and workflow."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 565,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#compare-more",
                                                    className: "mt-4 inline-flex items-center gap-1.5 text-[15.5px] font-semibold text-white underline-offset-4 hover:underline focus:outline-none",
                                                    children: [
                                                        "Compare more devices",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowOutward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            fontSize: "small"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                            lineNumber: 573,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                            lineNumber: 559,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                                    lineNumber: 554,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/hardware/terminal/page.tsx",
                            lineNumber: 462,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/hardware/terminal/page.tsx",
                    lineNumber: 441,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/products/hardware/terminal/page.tsx",
                lineNumber: 440,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/products/hardware/terminal/page.tsx",
        lineNumber: 129,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TerminalPage, "9EgtoeSU+Fei0L734faRHBiCREQ=");
_c = TerminalPage;
const __TURBOPACK__default__export__ = TerminalPage;
var _c;
__turbopack_context__.k.register(_c, "TerminalPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_f622e7ed._.js.map