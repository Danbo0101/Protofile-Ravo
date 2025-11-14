"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { EASE_OUT, fadeUp } from "@/app/components/variants";

import imgDigital1 from "@/app/assets/imgDigital1.png";
import imgDigital2 from "@/app/assets/imgDigital2.png";
import imgDigital3 from "@/app/assets/imgDigital3.png";

type MountItem = {
    key: string;
    label: string;
    desc: string[];
    note?: string;
    main: StaticImageData | string;
    scene: StaticImageData | string;
};


const ITEMS: MountItem[] = [
    {
        key: "menus-pricing",
        label: "Clear menus & transparent pricing",
        desc: [
            "Show services, add-ons, and seasonal sets beautifully.",
            "Help clients understand their options instantly.",
            "Reduce repeat questions and speed up decision-making.",
        ],
        note: "Fewer questions at the front desk.",
        main: imgDigital1,
        scene: imgDigital1,
    },
    {
        key: "promos",
        label: "Instant promos & new services",
        desc: [
            "Launch new services, bundles, and specials in seconds.",
            "Highlight high-margin add-ons and seasonal designs.",
            "All promotions stay synced with your RAVO POS.",
        ],
        note: "Fully synced with your RAVO POS.",
        main: imgDigital2,
        scene: imgDigital2,
    },
    {
        key: "cloud-control",
        label: "Cloud updates with no downtime",
        desc: [
            "Update photos, pricing, and captions from anywhere.",
            "Use ready-made templates for faster adjustments.",
            "Schedule playlists to keep screens fresh all day.",
        ],
        main: imgDigital3,
        scene: imgDigital3,
    },
];




const fade = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.35, ease: EASE_OUT } },
};

export default function KioskMountShowcase() {
    const [active, setActive] = useState(ITEMS[0].key);
    const current = ITEMS.find((i) => i.key === active)!;

    return (
        <section className="bg-white text-neutral-900">
            <div className="mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 max-w-7xl">
                <div className="lg:items-start gap-10 grid lg:grid-cols-12">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-4 lg:col-span-6 lg:text-left text-center"
                    >
                        <span className="inline-flex items-center bg-neutral-50 px-3 py-1 border border-neutral-200 rounded-full font-medium text-neutral-500 text-xs uppercase tracking-[0.18em]">
                            RAVO Digital Signage
                        </span>

                        <h2 className="font-serif text-3xl md:text-6xl leading-[1.06] tracking-tight">
                            Display what matters.
                            <br className="hidden sm:block" />
                            <span className="sm:whitespace-nowrap"> Update it in seconds.</span>
                        </h2>

                        <p className="mx-auto lg:mx-0 max-w-xl text-[15px] text-neutral-600 sm:text-[17px] leading-7">
                            RAVO’s digital signage helps your salon present services clearly, run promotions instantly,
                            and keep screens fresh all day—fully synced with your POS.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex flex-col gap-4 lg:col-span-6 mt-8 lg:mt-20"
                    >
                        <p className="text-[14px] text-neutral-500 sm:text-[15px]">
                            Choose a feature to preview how RAVO screens work in your salon.
                        </p>

                        <div className="bg-neutral-50/60 p-2.5 sm:p-3 border border-neutral-200 rounded-2xl">
                            <div className="gap-2.5 sm:gap-3 grid grid-cols-1 sm:grid-cols-3">
                                {ITEMS.map((it, idx) => {
                                    const isActive = it.key === active;
                                    return (
                                        <button
                                            key={it.key}
                                            onClick={() => setActive(it.key)}
                                            className={[
                                                "group flex h-full w-full flex-col items-start rounded-xl border px-3.5 py-3 text-left transition-all",
                                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50",
                                                isActive
                                                    ? "bg-white text-neutral-900 border-black/80 shadow-sm shadow-black/5"
                                                    : "bg-white/60 text-neutral-800 border-neutral-200 hover:bg-white hover:border-neutral-400",
                                            ].join(" ")}
                                            role="tab"
                                            aria-selected={isActive}
                                        >
                                            <div className="flex items-center gap-2 font-medium text-neutral-500 text-xs uppercase tracking-[0.18em]">
                                                <span
                                                    className={[
                                                        "inline-flex h-5 w-5 items-center justify-center rounded-full border text-[11px]",
                                                        isActive
                                                            ? "border-black bg-black text-white"
                                                            : "border-neutral-300 bg-white text-neutral-700 group-hover:border-neutral-500",
                                                    ].join(" ")}
                                                >
                                                    {idx + 1}
                                                </span>
                                                <span className="truncate">Feature {idx + 1}</span>
                                            </div>

                                            <span className="mt-2 font-medium sm:text-[15px] text-sm line-clamp-2">
                                                {it.label}
                                            </span>
                                            <span className="mt-1 text-[12px] text-neutral-500 line-clamp-2 leading-snug">
                                                {Array.isArray(it.desc) ? it.desc[0] : it.desc}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="lg:items-start gap-10 grid lg:grid-cols-12 mt-10 lg:mt-14">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="lg:col-span-7"
                    >
                        <div className="relative bg-linear-to-br from-neutral-50 via-neutral-100 to-neutral-200 shadow-sm p-3 sm:p-4 md:p-6 border border-neutral-200/80 rounded-[26px]">
                            <div
                                className="absolute inset-0 shadow-[0_30px_80px_rgba(15,23,42,0.08)] rounded-[26px] pointer-events-none"
                                aria-hidden="true"
                            />

                            <div className="relative backdrop-blur-sm rounded-2xl overflow-hidden">
                                <div className="relative w-full aspect-video">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={current.key + "-main"}
                                            {...fade}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={current.main}
                                                alt={current.label}
                                                fill
                                                className="object-contain"
                                                priority
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="lg:col-span-5"
                    >
                        <div className="flex flex-col gap-6 bg-neutral-50/80 p-4 sm:p-6 border border-neutral-200 rounded-2xl h-full">
                            <div className="space-y-3">
                                <p className="font-medium text-[11px] text-neutral-500 uppercase tracking-[0.18em]">
                                    Current focus
                                </p>
                                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl leading-tight">
                                    {current.label}
                                </h3>

                                <AnimatePresence mode="wait">
                                    <motion.ul
                                        key={current.key + "-desc"}
                                        {...fade}
                                        className="space-y-2 text-[15px] text-neutral-700 sm:text-[17px] leading-7"
                                    >
                                        {Array.isArray(current.desc) ? (
                                            current.desc.map((line, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="mt-1.5 text-xs">•</span>
                                                    <span>{line}</span>
                                                </li>
                                            ))
                                        ) : (
                                            <li>{current.desc}</li>
                                        )}
                                    </motion.ul>
                                </AnimatePresence>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4 text-[12px] text-neutral-500">
                                <span className="inline-flex items-center bg-white px-2.5 py-1 border border-neutral-200 rounded-full">
                                    No printing required
                                </span>
                                <span className="inline-flex items-center bg-white px-2.5 py-1 border border-neutral-200 rounded-full">
                                    Fully synced with RAVO POS
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>




    );
}
