"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Bullet = { icon?: ReactNode; text: string };
export type Step = { title: string; img: string; bullets: Bullet[] };
export type SimpleStep = { title: string; img: string; text: string };

export const defineSteps = <T extends Step[]>(v: T) => v;
export const defineSimpleSteps = <T extends SimpleStep[]>(v: T) => v;

type StepsProp = { steps: Step[] | SimpleStep[] };

function isSimpleSteps(arr: Step[] | SimpleStep[]): arr is SimpleStep[] {
    const first = (arr as any[])[0];
    return !!first && "text" in first && !("bullets" in first);
}
function toBulletedSteps(arr: SimpleStep[]): Step[] {
    return arr.map((s) => ({ title: s.title, img: s.img, bullets: [{ text: s.text }] }));
}

export default function StickyScrollySteps({ steps }: StepsProp) {
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
        <section className="relative w-full">
            <div className="md:hidden space-y-10 mx-auto px-4 py-8">
                {normalized.map((s, i) => (
                    <article
                        key={i}
                        className="bg-white shadow-sm border border-neutral-200 rounded-3xl overflow-hidden"
                    >
                        <img
                            src={s.img}
                            alt={s.title}
                            className="w-full object-cover aspect-4/3"
                        />
                        <div className="space-y-5 p-5">
                            <h3 className="font-semibold text-neutral-900 text-xl">
                                {s.title}
                            </h3>
                            <p className="mt-2 text-neutral-600 leading-relaxed">
                                {s.bullets.map(b => b.text).join(" • ")}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
            <div className="hidden md:block" style={{ height: totalH }}>
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto px-6 h-1/2">
                    <div className="relative">
                        <div className="top-0 sticky flex justify-center items-center rounded-3xl h-screen overflow-hidden">
                            <AnimatePresence initial={false} mode="sync">
                                <motion.img
                                    key={`prev-${prevActive}-${normalized[prevActive].img}`}
                                    src={normalized[prevActive].img}
                                    alt={normalized[prevActive].title}
                                    className="rounded-3xl w-full h-8/15 object-cover will-change-[opacity,transform]"
                                    initial={{ opacity: 1, scale: 1 }}
                                    animate={{ opacity: active === prevActive ? 1 : 0, scale: 1.005 }}
                                    exit={{ opacity: 0, scale: 1.005 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                />
                                <motion.img
                                    key={`curr-${active}-${normalized[active].img}`}
                                    src={normalized[active].img}
                                    alt={normalized[active].title}
                                    className="absolute rounded-3xl w-full h-8/15 object-cover will-change-[opacity,transform]"
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0.98 }}
                                    transition={{ duration: 0.55, ease: "easeOut" }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="relative">
                        {normalized.map((s, i) => (
                            <div
                                key={i}
                                data-index={i}
                                ref={(el) => setStepRef(el, i)}
                                className="flex items-center min-h-screen"
                            >
                                <article className={`mx-auto w-full p-8 ${i === active ? "bg-white" : "bg-white/70"}`}>
                                    <motion.h3
                                        className="font-extrabold text-gray-900 text-2xl md:text-3xl"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: i === active ? 1 : 0.7, y: i === active ? 0 : 6 }}
                                        transition={{ duration: 0.55, ease: "easeOut" }}
                                    >
                                        {s.title}
                                    </motion.h3>

                                    <div className="bg-gray-200 my-4 w-full h-px" />

                                    <ul className="space-y-5">
                                        {s.bullets.map((b, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                {b.icon ? <div className="mt-0.5 shrink-0">{b.icon}</div> : null}
                                                <p className="text-gray-600 leading-relaxed">{b.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="right-0 bottom-0 left-0 absolute bg-linear-to-b from-transparent to-white h-24 pointer-events-none" />
            </div>
        </section>
    );
}

function buildThresholdList(steps = 20) {
    return Array.from({ length: steps }, (_, i) => i / (steps - 1));
}
