"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { EASE_OUT, fadeIn, stagger, fadeDown, fadeUp, floatIn } from "@/app/components/variants";

import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';


export type Tab = {
    key: string;
    title: string;
    blurb?: string;
    bullets?: string[];
    img: string;
    imgAlt?: string;
};



export default function ReliablePOSSection({ tabs }: { tabs: Tab[] }) {
    const safeTabs = tabs.slice(0, 2);
    const [active, setActive] = useState(0);
    const [dir, setDir] = useState<1 | -1>(1);

    const onTab = (i: number) => {
        if (i === active) return;
        setDir(i > active ? 1 : -1);
        setActive(i);
    };

    const slide = {
        initial: (d: 1 | -1) => ({ x: 36 * d, opacity: 0 }),
        animate: { x: 0, opacity: 1, transition: { duration: 0.55, ease: EASE_OUT } },
        exit: (d: 1 | -1) => ({
            x: -36 * d,
            opacity: 0,
            transition: { duration: 0.45, ease: EASE_OUT },
        }),
    };

    return (
        <section className="w-full bg-white text-black">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 py-14 sm:py-20">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="overflow-hidden rounded-3xl shadow-sm relative"
                >
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 text-center"
                    >
                        <motion.h2
                            variants={fadeDown}
                            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-white drop-shadow-md"
                        >
                            Collect & Understand Your Customers
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="mt-3 max-w-xl text-neutral-100/90 text-[17px]"
                        >
                            From check-in to review — automate your customer flow beautifully.
                        </motion.p>
                    </motion.div>
                    <motion.div variants={fadeIn} className="relative mx-auto h-64 sm:h-80 md:h-96 lg:h-[520px] w-full max-w-[1100px] overflow-hidden rounded-2xl">
                        <AnimatePresence mode="wait" custom={dir}>
                            <motion.div
                                key={safeTabs[active]?.key}
                                custom={dir}
                                variants={slide}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute inset-0"
                            >
                                <Image
                                    src={safeTabs[active]?.img || ""}
                                    alt={safeTabs[active]?.imgAlt || safeTabs[active]?.title || ""}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 1100px"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="px-5 py-6 sm:px-8 sm:py-8"
                >
                    <motion.div variants={fadeDown} className="mx-auto max-w-md">
                        <div className="relative grid grid-cols-2 rounded-full border border-neutral-200 p-1">
                            <motion.span
                                layout
                                layoutId="pill"
                                className="absolute top-1 bottom-1 w-1/2 rounded-full bg-black"
                                style={{ left: active === 0 ? "0.25rem" : "calc(50% + 0.25rem)" }}
                                transition={{ duration: 0.35, ease: EASE_OUT }}
                            />
                            {safeTabs.map((t: any, i: number) => (
                                <button
                                    key={t.key}
                                    onClick={() => onTab(i)}
                                    className="relative z-10 h-10 rounded-full text-sm font-semibold transition-colors cursor-pointer"
                                >
                                    <span className={i === active ? "text-white" : "text-neutral-800"}>
                                        {t.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp} className="mt-8">
                        {safeTabs[active]?.bullets?.length ? (
                            <motion.ul
                                variants={stagger}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4"
                            >
                                {safeTabs[active].bullets!.map((b: string, idx: number) => (
                                    <motion.li
                                        key={idx}
                                        variants={floatIn}
                                        className="flex items-start gap-3 rounded-xl bg-neutral-50/80 shadow-sm p-3 transition hover:-translate-x-0.5 hover:bg-neutral-100"
                                    >
                                        <div className="flex h-6 w-6 items-center justify-center rounded-md">
                                            <IndeterminateCheckBoxOutlinedIcon fontSize="small" />
                                        </div>
                                        <span className="text-[15.5px] leading-relaxed text-neutral-900">
                                            {b}
                                        </span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        ) : null}
                    </motion.div>
                </motion.div>
            </div>
        </section>


    );
}
