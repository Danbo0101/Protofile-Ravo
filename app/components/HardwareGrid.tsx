"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

type Card = {
    eyebrow: string;
    title: string;
    blurb?: string;
    href: string;
    img: string;
    imgAlt: string;
};

interface HardwareGridProps {
    cards: Card[];
    fadeUp: any;
    stagger: any;
    title?: string;
}

// ====== COMPONENT ======
export default function HardwareGrid({
    cards,
    fadeUp,
    stagger,
    title = "Other hardware options",
}: HardwareGridProps) {
    return (
        <section className="bg-neutral-50 py-16 sm:py-20 w-full text-black">
            <div className="mx-auto px-6 sm:px-8 max-w-7xl">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="py-10 font-serif font-extrabold text-4xl sm:text-5xl text-center tracking-tight"
                >
                    {title}
                </motion.h2>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:mt-12"
                >
                    {cards.map((c) => (
                        <Link key={c.href} href={c.href} className="group block cursor-pointer">
                            <motion.article
                                variants={fadeUp}
                                className="bg-white shadow-sm p-6 border border-neutral-200 rounded-3xl transition-transform group-hover:-translate-y-1 duration-300"
                            >
                                <div className="font-medium text-neutral-500 text-sm">{c.eyebrow}</div>

                                <h3 className="mt-2 font-semibold text-2xl leading-snug">{c.title}</h3>

                                <div className="relative mt-8 w-full h-48">
                                    <Image
                                        src={c.img}
                                        alt={c.imgAlt}
                                        fill
                                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                                        className="object-contain"
                                    />
                                </div>

                                <div className="mt-8 font-semibold text-base">
                                    <span className="inline-flex items-center gap-2 text-black">
                                        Learn more
                                        <ArrowOutwardIcon fontSize="small" />
                                    </span>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
