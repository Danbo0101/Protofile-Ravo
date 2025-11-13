"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// ====== TYPES ======
type Card = {
    eyebrow: string;
    title: string;
    blurb?: string;
    href: string;
    img: string;
    imgAlt: string;
};

// ====== PROPS ======
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
        <section className="w-full bg-neutral-50 py-16 text-black sm:py-20">
            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center font-serif text-4xl font-extrabold tracking-tight sm:text-5xl py-10"
                >
                    {title}
                </motion.h2>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {cards.map((c) => (
                        <Link key={c.href} href={c.href} className="group block cursor-pointer">
                            <motion.article
                                variants={fadeUp}
                                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-transform duration-300 group-hover:-translate-y-1"
                            >
                                <div className="text-sm font-medium text-neutral-500">{c.eyebrow}</div>

                                <h3 className="mt-2 text-2xl font-semibold leading-snug">{c.title}</h3>

                                <div className="relative mt-8 h-48 w-full">
                                    <Image
                                        src={c.img}
                                        alt={c.imgAlt}
                                        fill
                                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                                        className="object-contain"
                                    />
                                </div>

                                <div className="mt-8 text-base font-semibold">
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
