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
        <section className="bg-white w-full text-black">
            <div className="mx-auto px-4 sm:px-8 py-12 sm:py-20 max-w-7xl">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative shadow-sm rounded-3xl overflow-hidden"
                >
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="z-10 absolute inset-0 flex flex-col justify-center items-center bg-black/35 px-4 sm:px-8 text-center"
                    >
                        <motion.h2
                            variants={fadeDown}
                            className="drop-shadow-md font-serif font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                        >
                            Collect &amp; Understand Your Customers
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="mt-3 max-w-xl text-neutral-100/90 md:text-[17px] text-sm sm:text-base"
                        >
                            From check-in to review — automate your customer flow beautifully.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        variants={fadeIn}
                        className="relative mx-auto rounded-2xl w-full max-w-[1100px] h-72 sm:h-80 md:h-96 lg:h-[520px] overflow-hidden"
                    >
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

                {/* Tabs + bullets */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="px-3 sm:px-8 py-6 sm:py-8"
                >
                    <motion.div variants={fadeDown} className="mx-auto w-full max-w-md">
                        <div className="relative grid grid-cols-2 bg-white/70 p-1 border border-neutral-200 rounded-full">
                            <motion.span
                                layout
                                layoutId="pill"
                                className="top-1 bottom-1 absolute bg-black rounded-full w-1/2"
                                style={{
                                    left: active === 0 ? "0.25rem" : "calc(50% + 0.25rem)",
                                }}
                                transition={{ duration: 0.35, ease: EASE_OUT }}
                            />
                            {safeTabs.map((t: any, i: number) => (
                                <button
                                    key={t.key}
                                    onClick={() => onTab(i)}
                                    className="z-10 relative flex justify-center items-center rounded-full h-10 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                                >
                                    <span className={i === active ? "text-white" : "text-neutral-800"}>
                                        {t.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp} className="mt-6 sm:mt-8">
                        {safeTabs[active]?.bullets?.length ? (
                            <motion.ul
                                variants={stagger}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="flex flex-col gap-3 md:gap-4 md:grid md:grid-cols-2"
                            >
                                {safeTabs[active].bullets!.map((b: string, idx: number) => (
                                    <motion.li
                                        key={idx}
                                        variants={floatIn}
                                        className="flex items-start gap-3 bg-neutral-50/90 hover:bg-neutral-100 shadow-sm p-3.5 sm:p-4 rounded-xl transition hover:-translate-x-0.5"
                                    >
                                        <div className="flex justify-center items-center mt-1 rounded-md w-6 h-6 shrink-0">
                                            <IndeterminateCheckBoxOutlinedIcon fontSize="small" />
                                        </div>
                                        <span className="text-[14.5px] text-neutral-900 sm:text-[15.5px] leading-relaxed">
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
