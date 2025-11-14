"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


import imgbg from "@/app/assets/about9.png";
import imgCheck from "@/app/assets/imgCheck.png";
import imgScreen from "@/app/assets/imgScreen.png";
import imgDigital4 from "@/app/assets/imgDigital4.png";
import imgTerminal from "@/app/assets/imgTerminal.png";

import { fadeUp, floatIn, EASE_OUT, stagger } from "@/app/components/variants";
import KioskMountShowcase from "@/app/components/KioskMountShowcase";
import AccordionItem from "@/app/components/AccordionItem";
import HardwareGrid from "@/app/components/HardwareGrid";

import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import FitScreenOutlinedIcon from "@mui/icons-material/FitScreenOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";




const CARDS = [
    {
        eyebrow: "Terminal",
        title: "Compact countertop POS built for speed and style",
        href: "/products/hardware/terminal/",
        img: imgTerminal.src,
        imgAlt: "Terminal",
    },
    {
        eyebrow: "Main Screen",
        title: "Large 24-inch touchscreen built for nail salons",
        href: "/products/hardware/mainScreen/",
        img: imgScreen.src,
        imgAlt: "RAVO Main Screen",
    },
    {
        eyebrow: "CheckIn - CheckOut Screen",
        title: "Portable all-in-one system for seamless client flow",
        href: "/hardware/terminal",
        img: imgCheck.src,
        imgAlt: "CheckIn-CheckOut POS",
    },
];


const ITEMSFAQ: { q: string; a: string }[] = [
    {
        q: "Do I need special hardware?",
        a: "We support common commercial displays and media players. We’ll recommend a setup based on your layout and budget.",
    },
    {
        q: "Can I schedule different content by time or day?",
        a: "Yes. Create playlists for rush hours, weekdays vs. weekends, or seasonal windows.",
    },
    {
        q: "What if my prices change often?",
        a: "That’s the point—edit once in the cloud and publish instantly. No reprints, no ladders, no hassle.",
    },
    {
        q: "Can I show promos tied to my POS?",
        a: "Absolutely. Promotions and codes can be synced with RAVO POS so your front desk stays aligned.",
    },
];

const DigitalScreenPage = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="w-full min-h-screen">
            <section className="relative w-full min-h-screen overflow-hidden text-white">
                <Image
                    src={imgbg}
                    alt="RAVO Digital Signage"
                    fill
                    priority
                    className="object-center object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-neutral-900/60 via-neutral-900/40 to-neutral-900/80" />
                <div className="z-10 relative flex items-center mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-7xl min-h-screen">
                    <div className="items-center gap-10 grid lg:grid-cols-2 w-full">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="space-y-6 lg:text-left text-center"
                        >
                            <h1 className="font-serif text-4xl md:text-6xl leading-tight">
                                <span className="block text-white/70">RAVO</span>
                                <span className="block text-white">Digital Signage</span>
                            </h1>

                            <p className="mx-auto lg:mx-0 max-w-sm md:max-w-md text-white/80 text-sm sm:text-base md:text-lg">
                                Turn idle time into sales. RAVO digital signage helps your salon display menus,
                                prices, promos, and queue updates beautifully — all synced with your POS,
                                no reprints or manual updates needed.
                            </p>

                            <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-3 sm:gap-4 pt-4">
                                <a
                                    href="tel:+13463267765"
                                    className="inline-flex justify-center items-center bg-black/70 hover:bg-white backdrop-blur-sm px-7 sm:px-8 py-3.5 sm:py-4 border border-white/20 hover:border-black rounded-full font-medium text-white hover:text-black hover:scale-105 transition-all hover:translate-x-1"
                                >
                                    Explore features
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="bg-white text-neutral-900">
                <div className="mx-auto px-5 sm:px-6 lg:px-12 py-14 sm:py-20 max-w-7xl">
                    <div className="gap-x-10 gap-y-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="mx-auto w-full max-w-[34ch] sm:text-left text-center"
                        >
                            <EmojiEmotionsOutlinedIcon className="w-10 h-10" />
                            <h3 className="mt-4 sm:mt-6 font-serif text-2xl sm:text-3xl md:text-4xl leading-[1.1]">
                                Clear menus & pricing
                            </h3>
                            <p className="mt-4 sm:mt-5 text-[15px] text-neutral-600 sm:text-[17px]">
                                Display services, add-ons, and seasonal sets beautifully so clients choose faster
                                and ask fewer “How much?” questions.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="mx-auto w-full max-w-[34ch] sm:text-left text-center"
                        >
                            <BoltOutlinedIcon className="w-10 h-10" />
                            <h3 className="mt-4 sm:mt-6 font-serif text-2xl sm:text-3xl md:text-4xl leading-[1.1]">
                                Promotions in seconds
                            </h3>
                            <p className="mt-4 sm:mt-5 text-[15px] text-neutral-600 sm:text-[17px]">
                                Launch specials, bundles, and seasonal designs instantly—no printing and no
                                hassle at the front desk.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="mx-auto w-full max-w-[34ch] sm:text-left text-center"
                        >
                            <FitScreenOutlinedIcon className="w-10 h-10" />
                            <h3 className="mt-4 sm:mt-6 font-serif text-2xl sm:text-3xl md:text-4xl leading-[1.1]">
                                Update from anywhere
                            </h3>
                            <p className="mt-4 sm:mt-5 text-[15px] text-neutral-600 sm:text-[17px]">
                                Update photos, pricing, and captions remotely through the cloud. Set playlists to
                                rotate by time of day or day of week.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="mx-auto w-full max-w-[34ch] sm:text-left text-center"
                        >
                            <AppsOutlinedIcon className="w-10 h-10" />
                            <h3 className="mt-4 sm:mt-6 font-serif text-2xl sm:text-3xl md:text-4xl leading-[1.1]">
                                Smart queue display
                            </h3>
                            <p className="mt-4 sm:mt-5 text-[15px] text-neutral-600 sm:text-[17px]">
                                Show who’s waiting, who’s next, and estimated timing—reducing interruptions and
                                making your salon flow smoother for everyone.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <KioskMountShowcase />
            <section className="bg-white text-neutral-900">
                <div className="mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 max-w-7xl">
                    <div className="items-center gap-10 grid lg:grid-cols-2">
                        <motion.div
                            variants={floatIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="md:hidden relative flex justify-center order-first lg:order-0"
                        >
                            <div className="relative bg-white rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src={imgDigital4}
                                        alt="RAVO Waiting List Display"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                <span className="top-4 sm:top-6 right-4 sm:right-6 absolute bg-neutral-700/60 rounded-full w-4 h-4" />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="lg:text-left text-center"
                        >
                            <h2 className="font-serif text-3xl md:text-6xl leading-[1.05]">
                                Waiting area signage
                                <br className="hidden md:block" /> that reduces anxiety.
                            </h2>

                            <p className="mx-auto lg:mx-0 mt-6 max-w-[58ch] text-[15px] text-neutral-700 sm:text-[17px] leading-7">
                                Keep guests informed with a real-time waiting list display.
                                Show who’s waiting, who’s currently in service, and estimated
                                timing — reducing interruptions like “Am I next?” and creating
                                a calmer, more organized experience for both clients and technicians.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={floatIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="hidden relative md:flex justify-center order-first lg:order-0"
                        >
                            <div className="relative bg-white rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src={imgDigital4}
                                        alt="RAVO Waiting List Display"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                <span className="top-4 sm:top-6 right-4 sm:right-6 absolute bg-neutral-700/60 rounded-full w-4 h-4" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="bg-white text-neutral-900">
                <div className="mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-16 lg:py-24 max-w-7xl">
                    <div className="space-y-14 lg:space-y-20">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="relative bg-neutral-50/80 shadow-[0_18px_45px_rgba(0,0,0,0.06)] px-5 sm:px-8 lg:px-14 py-7 sm:py-9 lg:py-14 border border-neutral-200 rounded-[28px] sm:rounded-4xl overflow-hidden"
                        >
                            <div className="-top-24 absolute inset-x-0 bg-linear-to-br from-black/20 via-black/10 to-transparent opacity-70 blur-3xl h-40 pointer-events-none" />

                            <div className="relative lg:items-start gap-9 lg:gap-10 grid lg:grid-cols-[1.3fr_minmax(0,1fr)]">
                                <div className="space-y-5 sm:space-y-6">
                                    <div className="inline-flex items-center gap-2 bg-white/70 px-3 py-1 border border-neutral-300 rounded-full font-medium text-[11px] text-neutral-700 sm:text-[12px] uppercase tracking-[0.18em]">
                                        Live Turn Queue
                                    </div>

                                    <h2 className="font-serif text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.06] tracking-tight">
                                        Turn-detail display{" "}
                                        <span className="whitespace-nowrap">for a smoother workflow.</span>
                                    </h2>

                                    <p className="max-w-[60ch] text-[14px] text-neutral-700 sm:text-[16px] leading-7">
                                        Give every tech a clear, shared view of the line—who&apos;s waiting, who&apos;s
                                        in service, and who&apos;s on deck—so the floor flows smoothly without constant
                                        “Who&apos;s next?” questions.
                                    </p>
                                    <div className="flex flex-wrap gap-2.5 pt-1.5">
                                        <span className="inline-flex items-center gap-2 bg-white shadow-sm px-3 py-1.5 rounded-full ring-1 ring-neutral-200 text-neutral-900 text-xs sm:text-sm">
                                            <span className="bg-neutral-900 rounded-full w-1.5 h-1.5" />
                                            Real-time updates
                                        </span>

                                        <span className="inline-flex items-center gap-2 bg-white shadow-sm px-3 py-1.5 rounded-full ring-1 ring-neutral-200 text-neutral-900 text-xs sm:text-sm">
                                            <span className="bg-neutral-700 rounded-full w-1.5 h-1.5" />
                                            Shared on every screen
                                        </span>

                                        <span className="inline-flex items-center gap-2 bg-white shadow-sm px-3 py-1.5 rounded-full ring-1 ring-neutral-200 text-neutral-900 text-xs sm:text-sm">
                                            <span className="bg-black/70 rounded-full w-1.5 h-1.5" />
                                            Less disputes, more flow
                                        </span>
                                    </div>
                                </div>
                                <div className="lg:pl-4">
                                    <div className="relative bg-white/95 shadow-sm p-4 sm:p-6 lg:p-7 rounded-2xl ring-1 ring-neutral-200">
                                        <div className="flex justify-between items-center gap-4 mb-4 sm:mb-5">
                                            <div>
                                                <p className="font-semibold text-[11px] text-neutral-500 sm:text-xs uppercase tracking-[0.16em]">
                                                    Queue modes
                                                </p>
                                                <p className="mt-1 font-semibold text-[15px] text-neutral-900 sm:text-lg">
                                                    Choose rules that fit your salon
                                                </p>
                                            </div>

                                            <div className="flex justify-center items-center bg-neutral-100 rounded-full ring-1 ring-neutral-300 w-10 sm:w-11 h-10 sm:h-11 text-neutral-900">
                                                <RocketLaunchOutlinedIcon className="w-5 sm:w-6 h-5 sm:h-6" />
                                            </div>
                                        </div>

                                        <div className="space-y-3.5 sm:space-y-4 text-[13px] text-neutral-700 sm:text-sm">
                                            <div className="flex items-start gap-3 bg-neutral-100/80 px-3 py-3 rounded-xl">
                                                <span className="bg-neutral-900 mt-1 rounded-full w-1.5 h-1.5" />
                                                <div>
                                                    <p className="font-medium text-neutral-900">FIFO (First-In, First-Out)</p>
                                                    <p className="text-neutral-600">
                                                        Simple, fair queue—clients are taken in the order they arrive.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3 px-3 py-2.5 rounded-xl">
                                                <span className="bg-neutral-700 mt-1 rounded-full w-1.5 h-1.5" />
                                                <div>
                                                    <p className="font-medium text-neutral-900">Clock-in based rotation</p>
                                                    <p className="text-neutral-600">
                                                        Rotate turns based on who&apos;s clocked in and available.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3 px-3 py-2.5 rounded-xl">
                                                <span className="bg-black/70 mt-1 rounded-full w-1.5 h-1.5" />
                                                <div>
                                                    <p className="font-medium text-neutral-900">Point-based rules</p>
                                                    <p className="text-neutral-600">
                                                        Use points for long or complex services to keep things fair.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mt-4 sm:mt-5 text-[11px] text-neutral-500 sm:text-xs">
                                            All movements are logged with timestamps for full transparency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="gap-8 sm:gap-10 grid lg:grid-cols-3 px-4 md:px-0">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="max-w-[50ch]"
                            >
                                <div className="flex justify-center items-center bg-neutral-100 rounded-2xl ring-1 ring-neutral-300 w-11 sm:w-12 h-11 sm:h-12 text-neutral-900">
                                    <CheckCircleOutlineIcon className="w-6 sm:w-7 h-6 sm:h-7" />
                                </div>
                                <h3 className="mt-4 sm:mt-5 font-semibold text-[20px] sm:text-[24px] leading-[1.15]">
                                    Fair for every technician
                                </h3>
                                <p className="mt-3 text-[14px] text-neutral-700 sm:text-[16px] leading-7">
                                    Everyone sees the same turn board in real time—no misunderstandings, no
                                    &quot;I thought it was my turn&quot; moments.
                                </p>
                            </motion.div>
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="max-w-[50ch]"
                            >
                                <div className="flex justify-center items-center bg-neutral-100 rounded-2xl ring-1 ring-neutral-300 w-11 sm:w-12 h-11 sm:h-12 text-neutral-900">
                                    <RocketLaunchOutlinedIcon className="w-6 sm:w-7 h-6 sm:h-7" />
                                </div>
                                <h3 className="mt-4 sm:mt-5 font-semibold text-[20px] sm:text-[24px] leading-[1.15]">
                                    Transparent & flexible rules
                                </h3>
                                <p className="mt-3 text-[14px] text-neutral-700 sm:text-[16px] leading-7">
                                    Switch between FIFO, clock-in, or point-based rotation—your team always
                                    understands how turns are assigned.
                                </p>
                            </motion.div>
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="max-w-[50ch]"
                            >
                                <div className="flex justify-center items-center bg-neutral-100 rounded-2xl ring-1 ring-neutral-300 w-11 sm:w-12 h-11 sm:h-12 text-neutral-900">
                                    <SupportAgentOutlinedIcon className="w-6 sm:w-7 h-6 sm:h-7" />
                                </div>
                                <h3 className="mt-4 sm:mt-5 font-semibold text-[20px] sm:text-[24px] leading-[1.15]">
                                    Fewer disputes, smoother flow
                                </h3>
                                <p className="mt-3 text-[14px] text-neutral-700 sm:text-[16px] leading-7">
                                    Managers spend less time handling turn disputes and more time keeping
                                    the salon running efficiently.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <HardwareGrid cards={CARDS} fadeUp={fadeUp} stagger={stagger} />;
            <section className="mx-auto px-6 md:px-20 py-16 md:py-20 w-full text-black">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    className="font-serif text-black text-5xl md:text-6xl leading-tight faq-heading"
                >
                    FAQ
                </motion.h2>
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-2 sm:mt-4 border-neutral-200 border-t max-w-4xl md:max-w-7xl text-black"
                >
                    {ITEMSFAQ.map((item, i) => (
                        <AccordionItem
                            key={i}
                            idx={i}
                            q={item.q}
                            a={item.a}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </motion.div>
            </section>
        </main>

    )
}

export default DigitalScreenPage;