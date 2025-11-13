"use client";

import { useEffect, useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUpExit, fadeUp, stagger } from "@/app/components/variants";

import img from "@/app/assets/about1.png"

type Pair = {
    large: StaticImageData | string;
    small: StaticImageData | string;
    altLarge?: string;
    altSmall?: string;
};


const DesignServicesPage = () => {
    const PAIRS: Pair[] = useMemo(
        () => [
            { large: "/images/gift-large-1.jpg", small: "/images/gift-small-1.jpg" },
            { large: "/images/gift-large-2.jpg", small: "/images/gift-small-2.jpg" },
            { large: "/images/gift-large-3.jpg", small: "/images/gift-small-3.jpg" },
            { large: "/images/gift-large-4.jpg", small: "/images/gift-small-4.jpg" },
        ],
        []
    );

    const [idx, setIdx] = useState(0);

    // Auto change ảnh mỗi 1 giây
    useEffect(() => {
        const t = setInterval(() => {
            setIdx((i) => (i + 1) % PAIRS.length);
        }, 1000);
        return () => clearInterval(t);
    }, [PAIRS.length]);

    const pair = PAIRS[idx];

    return (
        <main>
            <section className="relative w-full bg-white overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        {/* LEFT — text giữ nguyên */}
                        <div className="max-w-xl">
                            <p className="font-serif text-7xl leading-none tracking-tight text-neutral-300 sm:text-8xl">
                                Square
                            </p>
                            <h1 className="mt-2 font-serif text-6xl font-extrabold leading-[0.95] text-neutral-900 sm:text-7xl">
                                Gift Cards
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-neutral-600">
                                Bring in new business with digital and physical gift cards you can
                                sell in person and online.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-neutral-800"
                                >
                                    Set up eGift Cards
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition-colors hover:border-neutral-400"
                                >
                                    Order Gift Cards
                                </a>
                            </div>
                        </div>

                        {/* RIGHT — Hai hình: nhỏ trên, lớn dưới */}
                        <div className="relative flex flex-col items-center">
                            {/* Ảnh nhỏ (trên) */}
                            <div className="relative z-10 w-4/5 max-w-md">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`small-${idx}`}
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg"
                                    >
                                        <Image
                                            src={pair.small}
                                            alt={pair.altSmall ?? "Gift card small"}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 80vw, 40vw"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Ảnh lớn (dưới) */}
                            <div className="relative -mt-6 w-full">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`large-${idx}`}
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl"
                                    >
                                        <Image
                                            src={pair.large}
                                            alt={pair.altLarge ?? "Gift card large"}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 48vw"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-neutral-50 py-16 sm:py-24 text-black">
                <div className="mx-auto max-w-7xl px-6 sm:px-8">
                    <div className="grid gap-10 lg:grid-cols-2">
                        {/* Left big image */}
                        <motion.figure
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative overflow-hidden rounded-[32px] bg-neutral-200 shadow-sm"
                        >
                            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
                                <Image
                                    src={img}
                                    alt="Customer at counter"
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </motion.figure>

                        {/* Right column: headline, copy, small image */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="flex flex-col"
                        >
                            <motion.h2
                                variants={fadeUp}
                                className="font-serif text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                            >
                                <span className="block">Redeem just like</span>
                                <span className="block">any other form of</span>
                                <span className="block">payment.</span>
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="mt-6 max-w-xl text-base leading-7 text-neutral-700 sm:text-[17px]"
                            >
                                With scannable QR codes and barcodes, Square Gift Cards are easy
                                to redeem for you and your customers. Store them as a card on file
                                in your customer’s profile for extra convenience.
                            </motion.p>

                            <motion.figure
                                variants={fadeUp}
                                className="mt-10 self-start overflow-hidden rounded-[28px] bg-neutral-200 shadow-sm"
                            >
                                <div className="relative aspect-[16/11] w-full sm:w-[520px]">
                                    <Image
                                        src={img}
                                        alt="Tablet scanning gift card"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 520px"
                                    />
                                </div>
                            </motion.figure>
                        </motion.div>
                    </div>
                </div>
            </section>


        </main>

    )
}

export default DesignServicesPage;