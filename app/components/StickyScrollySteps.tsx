"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   🔹 TYPES + HELPERS
========================= */

// Dạng Step có bullets (dùng cho component StickyScrollySteps)
export type Bullet = {
    icon?: ReactNode; // optional để dùng cho SimpleStep chuyển sang không cần icon
    text: string;
};

export type Step = {
    title: string;
    img: string;
    bullets: Bullet[];
};

// Dạng Step đơn giản chỉ có text (dùng cho section khác)
export type SimpleStep = {
    title: string;
    img: string;
    text: string;
};

// Helpers định nghĩa mảng (để tránh phải annotate : Step[] / : SimpleStep[])
export const defineSteps = <T extends Step[]>(v: T) => v;
export const defineSimpleSteps = <T extends SimpleStep[]>(v: T) => v;

// Type prop union: nhận được cả Step[] lẫn SimpleStep[]
type StepsProp = {
    steps: Step[] | SimpleStep[];
};

/* =========================
   🔹 TYPE GUARDS & NORMALIZER
========================= */
function isSimpleSteps(arr: Step[] | SimpleStep[]): arr is SimpleStep[] {
    // kiểm tra phần tử đầu tiên có 'text' và không có 'bullets'
    const first = (arr as any[])[0];
    return !!first && "text" in first && !("bullets" in first);
}

function toBulletedSteps(arr: SimpleStep[]): Step[] {
    return arr.map((s) => ({
        title: s.title,
        img: s.img,
        bullets: [{ text: s.text }], // map mỗi SimpleStep thành 1 bullet
    }));
}

/* =========================
   🔹 COMPONENT
========================= */

export default function StickyScrollySteps({ steps }: StepsProp) {
    // Chuẩn hoá về Step[]
    const normalized: Step[] = isSimpleSteps(steps) ? toBulletedSteps(steps) : (steps as Step[]);

    const [active, setActive] = useState(0);
    const [prevActive, setPrevActive] = useState(0);
    const stepsRef = useRef<HTMLDivElement[]>([]);
    const setStepRef = (el: HTMLDivElement | null, i: number) => {
        if (el) stepsRef.current[i] = el;
    };

    useEffect(() => {
        if (!stepsRef.current.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                let next = active;
                let best = 0;
                for (const e of entries) {
                    if (e.isIntersecting && e.intersectionRatio > best) {
                        best = e.intersectionRatio;
                        next = Number((e.target as HTMLElement).dataset.index);
                    }
                }
                if (next !== active) setActive(next);
            },
            { root: null, rootMargin: "-45% 0px -45% 0px", threshold: buildThresholdList(30) }
        );

        stepsRef.current.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [active]);

    useEffect(() => {
        if (active !== prevActive) setPrevActive(active);
    }, [active, prevActive]);

    const totalH = `${normalized.length * 100}vh`;

    return (
        <section className="relative w-full" style={{ height: totalH }}>
            <div className="mx-auto grid h-1/2 grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6">
                {/* ==== Left: Sticky Image ==== */}
                <div className="relative hidden md:block">
                    <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden rounded-3xl">
                        <AnimatePresence initial={false} mode="sync">
                            <motion.img
                                key={`prev-${prevActive}-${normalized[prevActive].img}`}
                                src={normalized[prevActive].img}
                                alt={normalized[prevActive].title}
                                className="h-8/15 w-full object-cover rounded-3xl will-change-transform will-change-opacity"
                                initial={{ opacity: 1, scale: 1 }}
                                animate={{ opacity: active === prevActive ? 1 : 0, scale: 1.005 }}
                                exit={{ opacity: 0, scale: 1.005 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                            />
                            <motion.img
                                key={`curr-${active}-${normalized[active].img}`}
                                src={normalized[active].img}
                                alt={normalized[active].title}
                                className="absolute h-8/15 w-full object-cover rounded-3xl will-change-transform will-change-opacity"
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0.98 }}
                                transition={{ duration: 0.55, ease: "easeOut" }}
                            />
                        </AnimatePresence>
                    </div>
                </div>

                {/* ==== Right: Text Steps ==== */}
                <div className="relative">
                    {normalized.map((s, i) => (
                        <div
                            key={i}
                            data-index={i}
                            ref={(el) => setStepRef(el, i)}
                            className="flex min-h-screen items-center"
                        >
                            <article
                                className={`mx-auto w-full p-6 md:p-8 ${i === active ? "bg-white" : "bg-white/70"}`}
                            >
                                <motion.h3
                                    className="text-2xl font-extrabold text-gray-900 md:text-3xl"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: i === active ? 1 : 0.7, y: i === active ? 0 : 6 }}
                                    transition={{ duration: 0.55, ease: "easeOut" }}
                                >
                                    {s.title}
                                </motion.h3>

                                <div className="my-4 h-px w-full bg-gray-200" />

                                <ul className="space-y-5">
                                    {s.bullets.map((b, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            {b.icon ? <div className="mt-0.5 shrink-0">{b.icon}</div> : null}
                                            <p className="leading-relaxed text-gray-600">{b.text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white" />
        </section>
    );
}

/* =========================
   🔹 UTIL
========================= */
function buildThresholdList(steps = 20) {
    return Array.from({ length: steps }, (_, i) => i / (steps - 1));
}
