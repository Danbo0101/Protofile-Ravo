"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import about1 from "@/app/assets/about1.png";


type Slide = {
    img: any;
    logo: any;
    quote: string;
    name: string;
    title: string;
    company: string;
    gradient: string;
};

const SLIDES: Slide[] = [
    {
        img: about1,
        logo: about1,
        quote:
            "The wonderful thing about Square is I can launch a product, wake up in the morning, and get a snapshot of sales for all the stores and what percentage of sales are from the new product.",
        name: "Matt Longwell",
        title: "Product Manager Coffee & Equipment",
        company: "Blue Bottle Coffee",
        gradient: "from-[#202a36] via-[#2a3241] to-[#0b0f16]",
    },
    {
        img: about1,
        logo: about1,
        quote:
            "As of today we're processing millions in revenue per day with more than 523 locations using Square. They helped us truly customize a solution for our franchises with our proprietary POS system.",
        name: "Robyn Powell",
        title: "VP of IT",
        company: "HOTWORX",
        gradient: "from-[#d29a61] via-[#c58a4f] to-[#8a3a15]",
    },
    {
        img: about1,
        logo: about1,
        quote:
            "Square allowed us to build a solution tailor-made for SoFi Stadium. It’s immediately familiar to our customers—efficient, fast, and reliable.",
        name: "Skarpi Hedinsson",
        title: "Former CTO of SoFi Stadium & Hollywood Park",
        company: "SoFi Stadium",
        gradient: "from-[#e7ebf1] via-[#d7dde6] to-[#aeb6c1]",
    },
];

export default function EnterpriseTestimonialsSection() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState<1 | -1>(1);

    const slide = SLIDES[index];

    const go = (step: 1 | -1) => {
        setDir(step);
        setIndex((p) => (p + step + SLIDES.length) % SLIDES.length);
    };

    // Nhẹ – nhanh – mượt
    const SPRING = {
        type: "spring" as const,
        stiffness: 340,
        damping: 30,
        mass: 0.7,
    };

    return (
        <section className="w-full bg-white text-black">
            <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-20">
                {/* Header */}
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <h2 className="text-center font-serif text-3xl leading-tight sm:text-5xl md:text-6xl sm:text-left">
                        Serving complex businesses at scale
                    </h2>
                    <button className="rounded-full border border-black px-6 py-2 text-sm font-medium transition hover:bg-black hover:text-white">
                        Explore our payment platform
                    </button>
                </div>

                {/* Big Card */}
                <div className="mt-10 overflow-hidden rounded-[28px] ring-1 ring-neutral-200">
                    <div
                        className={`relative bg-linear-to-br ${slide.gradient} px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16`}
                    >
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(80%_80%_at_10%_10%,rgba(255,255,255,.08),transparent),radial-gradient(70%_70%_at_90%_90%,rgba(0,0,0,.16),transparent)]" />

                        <AnimatePresence mode="wait" custom={dir}>
                            <motion.div
                                key={index}
                                custom={dir}
                                initial={{ x: dir > 0 ? 24 : -24, opacity: 0, filter: "blur(4px)" }}
                                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ x: dir > 0 ? -24 : 24, opacity: 0, filter: "blur(4px)" }}
                                transition={{ ...SPRING, duration: 0.28 }}
                                className="relative z-10 grid items-center gap-8 lg:grid-cols-[360px_1fr] xl:grid-cols-[420px_1fr]"
                            >
                                {/* Image */}
                                <motion.figure
                                    whileHover={{ scale: 1.008 }}
                                    transition={{ ...SPRING, duration: 0.22 }}
                                    className="mx-auto w-full max-w-[420px]"
                                >
                                    <div className="overflow-hidden rounded-3xl ring-1 ring-black/10">
                                        <motion.div
                                            initial={{ x: dir > 0 ? 8 : -8 }}
                                            animate={{ x: 0 }}
                                            exit={{ x: dir > 0 ? -8 : 8 }}
                                            transition={SPRING}
                                            className="relative aspect-4/5"
                                        >
                                            <Image
                                                src={slide.img}
                                                alt={slide.company}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 40vw, 380px"
                                                priority
                                            />
                                        </motion.div>
                                    </div>
                                </motion.figure>

                                {/* Quote */}
                                <div className="text-white/95">
                                    <motion.blockquote
                                        initial={{ y: 6, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -6, opacity: 0 }}
                                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                                        className="font-serif text-2xl leading-tight sm:text-3xl md:text-[32px] md:leading-[1.22]"
                                    >
                                        “{slide.quote}”
                                    </motion.blockquote>

                                    <div className="mt-8 flex flex-col gap-6 lg:mt-12">
                                        <div className="flex items-center gap-4">
                                            <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white/95 p-2 ring-1 ring-black/10">
                                                <Image
                                                    src={slide.logo}
                                                    alt={slide.company}
                                                    fill
                                                    className="object-contain p-2"
                                                />
                                            </div>
                                            <div className="text-white/90">
                                                <div className="text-[15px] font-medium">{slide.name}</div>
                                                <div className="text-sm opacity-90">
                                                    {slide.title}
                                                    <br />
                                                    {slide.company}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Controls */}
                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-3">
                                                <CircleBtn label="Previous" onClick={() => go(-1)}>
                                                    <ArrowBackRoundedIcon fontSize="small" />
                                                </CircleBtn>
                                                <CircleBtn label="Next" onClick={() => go(1)}>
                                                    <ArrowForwardRoundedIcon fontSize="small" />
                                                </CircleBtn>
                                            </div>

                                            <button
                                                type="button"
                                                className="inline-flex items-center gap-2 text-sm font-medium text-white/95 transition hover:text-white"
                                            >
                                                Watch video
                                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-black">
                                                    <PlayArrowRoundedIcon fontSize="inherit" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CircleBtn({
    children,
    onClick,
    label,
}: {
    children: React.ReactNode;
    onClick: () => void;
    label: string;
}) {
    return (
        <button
            aria-label={label}
            onClick={onClick}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow-sm ring-1 ring-black/10 
                 transition hover:scale-[1.02] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
            {children}
        </button>
    );
}
