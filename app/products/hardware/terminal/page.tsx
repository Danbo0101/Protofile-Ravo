"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/app/components/variants";
import Image from "next/image";

import StickyScrollySteps, { defineSimpleSteps } from "@/app/components/StickyScrollySteps";
import AccordionItem from "@/app/components/AccordionItem";


import imgTerminal1 from "@/app/assets/imgTerminal1.png";
import imgTerminal2 from "@/app/assets/imgTerminal2.png";
import imgTerminal3 from "@/app/assets/imgTerminal3.png";
import imgTerminal4 from "@/app/assets/imgTerminal4.png";
import imgTerminal5 from "@/app/assets/imgTerminal5.png";
import imgTerminal6 from "@/app/assets/imgTerminal6.png";
import imgTerminal7 from "@/app/assets/imgTerminal7.png";
import imgTerminal8 from "@/app/assets/imgTerminal8.png";

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const features = [
    "Built-in receipt printer",
    "Space-saving design",
    "Long-lasting battery",
    "Simple setup",
];

const SIMPLE = defineSimpleSteps([
    { title: "Made to fit your space", img: imgTerminal2.src, text: "The streamlined, transportable payment terminal fits and moves easily across your counter." },
    { title: "Internet down? No problem.", img: imgTerminal3.src, text: "With offline payments you can keep selling even when you’re temporarily disconnected." },
]);

const items = [
    {
        img: imgTerminal5,
        alt: "Insert chip card into terminal",
        label: "Dip a chip card",
    },
    {
        img: imgTerminal6,
        alt: "Tap contactless card or device on terminal",
        label: "Tap a contactless card or device",
    },
    {
        img: imgTerminal4,
        alt: "Swipe magstripe card on terminal",
        label: "Swipe a magstripe card",
    },
];

const ITEMSFAQ: { q: string; a: string }[] = [
    {
        q: "What is RAVO Terminal?",
        a: "RAVO Terminal is an all-in-one device for taking card payments and printing receipts. This credit card machine comes with free RAVO Point-of-Sale software that’s easy to set up and simple to use. With a built-in battery that lasts all day, you’ll never miss a sale.",
    },
    {
        q: "Where can I buy RAVO Terminal?",
        a: "You can contact our sales representative Tho Nguyen at (346) 326-7765 to purchase your RAVO Terminal.",
    },
    {
        q: "How does RAVO Terminal work?",
        a: "RAVO Terminal makes it easy for any business to accept card payments and run a point of sale that’s tailored to what your salon or shop does best. The built-in RAVO POS software simplifies selling, tracking, and daily operations—so you can focus on clients, not complexity.",
    },
    {
        q: "What’s the difference between RAVO Terminal and RAVO Handheld?",
        a: "RAVO Terminal is a complete POS solution with a built-in receipt printer, designed to work best on a countertop while still being compact and portable. RAVO Handheld is a slim, mobile POS with a built-in camera and barcode scanner—perfect for taking payments, managing orders, or checking inventory on the go.",
    },
    {
        q: "Does RAVO Terminal need Wi-Fi?",
        a: "Yes. RAVO Terminal requires an internet connection. You can connect it via Wi-Fi or Ethernet. If you don’t have Wi-Fi, you can use Offline Payments to continue accepting transactions for up to 24 hours. (Additional terms apply.)",
    },
    {
        q: "What accessories can I use with RAVO Terminal?",
        a: "RAVO Terminal becomes even more powerful when you connect the right accessories. Secure it on your counter with a RAVO Countertop Mount for smoother checkout. Add a belt clip to keep it handy while taking orders or payments on the go. Connect a barcode scanner or cash drawer for a complete setup—just plug them in through the optional RAVO Hub.",
    },
];

const TerminalPage = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const video = videoRef.current;
        if (!section || !video) return;

        video.muted = true;
        (video as any).playsInline = true;

        let isIntersectingNow = false;

        const tryPlay = () => video.play().catch(() => { });
        const tryPause = () => video.pause();

        const onVisibility = () => {
            if (document.hidden) tryPause();
            else if (isIntersectingNow) tryPlay();
        };
        document.addEventListener("visibilitychange", onVisibility);

        const observer = new IntersectionObserver(
            ([entry]) => {
                isIntersectingNow = entry.isIntersecting;
                if (entry.isIntersecting) tryPlay();
                else tryPause();
            },
            {
                threshold: 0.25,
                rootMargin: "0px 0px -15% 0px",
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
            document.removeEventListener("visibilitychange", onVisibility);
        };
    }, []);


    return (
        <main className="bg-white min-h-screen text-black">
            <section className="mx-auto w-full h-screen">
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src={imgTerminal1}
                            alt="RAVO Terminal"
                            fill
                            priority
                            className="object-[55%_60%] object-cover sm:object-center"
                            sizes="100vw"
                        />

                        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/20" />
                    </div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                        className="z-10 relative place-items-center grid px-4 py-12 sm:py-16 md:py-20 min-h-screen"
                    >
                        <div className="w-full max-w-6xl">
                            <motion.p
                                variants={fadeUp}
                                className="font-mono text-white/90 text-xs md:text-sm uppercase tracking-wide"
                            >
                                Ravo Terminal
                            </motion.p>

                            <motion.h1
                                variants={fadeUp}
                                className="mt-3 font-serif text-white text-4xl md:text-6xl leading-tight sm:leading-[1.1] md:leading-[1.08]"
                            >
                                The compact credit
                                <br className="hidden sm:block" />
                                card machine that
                                <br className="hidden sm:block" />
                                flexes to your needs
                            </motion.h1>

                            <motion.div
                                variants={fadeUp}
                                className="flex sm:flex-row flex-col items-start sm:items-center gap-4 mt-8"
                            >
                                <a
                                    href="tel:+13463267765"
                                    className="inline-flex justify-center items-center bg-transfer hover:bg-white shadow-sm hover:shadow-md px-10 py-4 border border-white rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 font-semibold text-white hover:text-black text-base md:text-lg transition hover:-translate-y-0.5"
                                >
                                    Buy now
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-black/5 pointer-events-none" />
                </div>
            </section>
            <section className="bg-white w-full h-fit text-neutral-700">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    className="mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 max-w-7xl"
                >
                    <div
                        className="flex sm:flex-row flex-col sm:divide-x divide-y sm:divide-y-0 divide-neutral-200 /* mobile: dọc, sm+: ngang */ /* mobile: gạch ngang */ /* desktop: gạch dọc như cũ */"
                    >
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className="flex flex-1 justify-center items-center py-5 sm:py-8 font-semibold text-base sm:text-lg lg:text-xl text-center leading-snug"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
            <section
                ref={sectionRef}
                className="bg-white w-full min-h-96 md:min-h-screen text-black"
            >
                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 max-w-6xl">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="font-serif text-3xl md:text-6xl text-center leading-tight"
                    >
                        Small footprint. Lots of possibilities.
                    </motion.h2>

                    {/* <motion.div
                        className="mt-14 md:mt-16"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.35 }}
                    >
                        <div
                            className="relative mx-auto rounded-lg sm:rounded-xl lg:rounded-2xl max-w-full sm:max-w-3xl lg:max-w-4xl overflow-hidden"
                        >
                            <video
                                ref={videoRef}
                                className="w-full h-auto object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            >
                                <source src="/videoTerminal.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </motion.div> */}
                </div>
            </section>

            <section className="flex flex-col justify-center items-center shadow-2xl md:px-20 pt-8 md:pt-10 min-h-fit text-black /* mobile → tablet → desktop */">
                <StickyScrollySteps steps={SIMPLE} />
            </section>
            <section className="bg-white mb-10 w-full h-auto md:h-screen text-black">
                <div className="mx-auto px-6 lg:px-8 py-10 sm:py-16 lg:py-20 max-w-7xl">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mb-14 md:mb-24 font-serif text-3xl md:text-6xl text-center leading-tight"
                    >
                        Let customers pay their way
                    </motion.h2>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="gap-5 sm:gap-6 md:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 sm:mt-10"
                    >
                        {items.map((it, i) => (
                            <motion.figure
                                key={i}
                                variants={fadeUp}
                                className="group rounded-2xl"
                            >
                                <div className="relative bg-white shadow-sm group-hover:shadow-md border border-neutral-200 rounded-2xl overflow-hidden transition-transform group-hover:-translate-y-0.5 will-change-transform">
                                    <div className="relative aspect-4/3">
                                        <Image
                                            src={it.img}
                                            alt={it.alt}
                                            fill
                                            priority={i === 0}
                                            className="object-cover"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                                <figcaption className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg text-center">
                                    {it.label}
                                </figcaption>
                            </motion.figure>
                        ))}
                    </motion.div>
                </div>
            </section>
            <section
                ref={sectionRef}
                className="relative bg-white w-full text-black"
            >
                <div className="-z-10 absolute inset-0 pointer-events-none">
                    <div className="bg-[radial-gradient(60%_60%_at_50%_20%,rgba(0,0,0,0.06),transparent_60%)] mx-auto max-w-7xl h-[420px] md:h-152" />
                </div>

                <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-12 sm:pb-16 lg:pb-24 max-w-7xl">
                    <motion.figure
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="group bg-white supports-backdrop-filter:bg-white/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur border border-black/5 rounded-2xl overflow-hidden"
                    >
                        <div className="relative aspect-video">
                            <div className="z-10 absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.18),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.12),transparent_25%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <video
                                ref={videoRef}
                                src="/videoTerminal1.mp4"
                                className="absolute inset-0 w-full h-full object-cover"
                                muted
                                playsInline
                                preload="metadata"
                                controls={false}
                            />
                            <div className="absolute inset-0 ring-1 ring-black/5 group-hover:ring-black/10 ring-inset transition-opacity pointer-events-none" />
                        </div>
                    </motion.figure>
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="gap-8 md:gap-10 grid md:grid-cols-12 mt-8 sm:mt-10"
                    >
                        <motion.div variants={fadeUp} className="md:col-span-7">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center bg-black/5 px-3 py-1 border border-black/10 rounded-full font-semibold text-neutral-700 text-xs tracking-wide">
                                    New hardware
                                </span>
                                <span className="inline-flex items-center bg-emerald-50 px-3 py-1 border border-emerald-600/20 rounded-full font-semibold text-emerald-700 text-xs">
                                    In stock
                                </span>
                            </div>

                            <h2 className="mt-3 font-serif text-2xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                                Make it yours for <span className="whitespace-nowrap">$</span>
                            </h2>

                            <div className="flex flex-wrap items-end gap-x-4 gap-y-2 mt-3">
                                <p className="text-neutral-800 sm:text-[17px] text-sm">
                                    Or <span className="font-semibold">$</span> per month over 12 months
                                    <sup className="ml-0.5 text-[10px] align-super">1</sup>
                                </p>
                                <span className="inline-flex items-center bg-white shadow-sm px-2.5 py-1 border border-black/10 rounded-md font-medium text-[11px] text-neutral-700 sm:text-xs">
                                    0% APR for qualified buyers
                                </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 mt-5">
                                <a
                                    href="tel:+13463267765"
                                    className="inline-flex justify-center items-center bg-black shadow-sm hover:shadow-md px-5 sm:px-6 py-2.5 sm:py-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 font-semibold text-white text-sm sm:text-base transition hover:-translate-y-0.5"
                                >
                                    Buy now
                                </a>
                                <a
                                    href="tel:+13463267765"
                                    className="inline-flex justify-center items-center bg-white shadow-sm hover:shadow-md px-4 sm:px-5 py-2.5 sm:py-3 border border-black/10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10 font-semibold text-neutral-800 text-sm sm:text-base transition hover:-translate-y-0.5"
                                >
                                    Learn more
                                    <ArrowOutwardIcon fontSize="small" className="ml-1" />
                                </a>
                            </div>

                            <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6 mt-5 text-neutral-600 text-xs sm:text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="inline-block bg-emerald-600 rounded-full w-1.5 h-1.5" />
                                    1-year limited warranty
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block bg-emerald-600 rounded-full w-1.5 h-1.5" />
                                    30-day returns
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block bg-emerald-600 rounded-full w-1.5 h-1.5" />
                                    Free shipping
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div variants={fadeUp} className="md:col-span-5 md:pl-2">
                            <p className="text-neutral-700 sm:text-[15.5px] text-sm leading-relaxed">
                                Discover how our transparent payment processing rates differ based on the
                                plan you select. Choose the option that fits your salon today, and scale
                                without surprise fees tomorrow.
                            </p>

                            <a
                                href="tel:+13463267765"
                                className="inline-flex items-center gap-2 mt-3 font-semibold text-neutral-900 sm:text-[15.5px] text-sm hover:underline underline-offset-4"
                            >
                                Explore rates &amp; plans <ArrowOutwardIcon fontSize="small" />
                            </a>

                            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mt-5 text-neutral-700 text-sm">
                                <div className="bg-white shadow-sm p-4 border border-black/10 rounded-xl">
                                    <p className="font-semibold">Tap • Dip • Swipe</p>
                                    <p className="mt-1 text-neutral-600 text-xs sm:text-sm">
                                        Fast, PCI-compliant payments.
                                    </p>
                                </div>
                                <div className="bg-white shadow-sm p-4 border border-black/10 rounded-xl">
                                    <p className="font-semibold">Plug &amp; play</p>
                                    <p className="mt-1 text-neutral-600 text-xs sm:text-sm">
                                        Works out of the box.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
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
            <section className="bg-white w-full text-black">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="font-serif text-3xl md:text-5xl text-center leading-tight"
                    >
                        Which compact POS is right for you?
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        className="mx-auto mt-3 mb-10 sm:mb-16 lg:mb-20 max-w-2xl text-neutral-500 sm:text-[15px] text-sm text-center"
                    >
                        Compare handheld and countertop options designed for fast checkouts and a tidy setup.
                    </motion.p>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="gap-5 sm:gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-3 mt-6 sm:mt-10"
                    >
                        <motion.article
                            variants={fadeUp}
                            className="group bg-neutral-50 shadow-sm hover:shadow-md p-5 sm:p-6 border border-neutral-200 rounded-3xl transition hover:-translate-y-0.5 will-change-transform"
                        >
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center px-2.5 py-1 border border-neutral-200 rounded-full font-medium text-[11px] text-neutral-700 sm:text-xs">
                                    Countertop
                                </span>
                                <span className="inline-flex items-center bg-black px-2.5 py-1 rounded-full font-semibold text-[11px] text-white sm:text-xs">
                                    Built-in printer
                                </span>
                            </div>

                            <div className="relative mx-auto mt-4 rounded-2xl ring-1 ring-black/5 ring-inset max-w-[520px] overflow-hidden">
                                <div className="relative bg-white aspect-16/10">
                                    <Image
                                        src={imgTerminal7}
                                        alt="Ravo Terminal"
                                        fill
                                        priority
                                        className="object-contain"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            </div>

                            <div className="mt-5 sm:mt-6">
                                <h3 className="font-semibold text-lg sm:text-xl">Ravo Terminal</h3>
                                <ul className="space-y-1.5 mt-3 text-neutral-700 sm:text-[15.5px] text-sm">
                                    <li>Streamlined countertop selling</li>
                                    <li>Receipt printer built in</li>
                                    <li>Tap, dip, and swipe in one</li>
                                </ul>

                                <a
                                    href="tel:+13463267765"
                                    className="inline-flex items-center gap-1.5 mt-4 focus:outline-none font-semibold text-black sm:text-[15.5px] text-sm hover:underline underline-offset-4"
                                >
                                    Buy Ravo Terminal
                                    <ArrowOutwardIcon fontSize="small" />
                                </a>
                            </div>
                        </motion.article>
                        <motion.article
                            variants={fadeUp}
                            className="group bg-neutral-50 shadow-sm hover:shadow-md p-5 sm:p-6 border border-neutral-200 rounded-3xl transition hover:-translate-y-0.5 will-change-transform"
                        >
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center px-2.5 py-1 border border-neutral-200 rounded-full font-medium text-[11px] text-neutral-700 sm:text-xs">
                                    Mobile
                                </span>
                                <span className="inline-flex items-center bg-neutral-900 px-2.5 py-1 rounded-full font-semibold text-[11px] text-white sm:text-xs">
                                    Built-in scanner
                                </span>
                            </div>

                            <div className="relative mx-auto mt-4 rounded-2xl ring-1 ring-black/5 ring-inset max-w-[520px] overflow-hidden">
                                <div className="relative bg-white aspect-16/10">
                                    <Image
                                        src={imgTerminal8}
                                        alt="Ravo Handheld"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            </div>

                            <div className="mt-5 sm:mt-6">
                                <h3 className="font-semibold text-lg sm:text-xl">Ravo Handheld</h3>
                                <ul className="space-y-1.5 mt-3 text-neutral-700 sm:text-[15.5px] text-sm">
                                    <li>Sell anywhere with all-day battery</li>
                                    <li>Integrated scanner and camera</li>
                                    <li>Tap and dip payments</li>
                                </ul>

                                <a
                                    href="tel:+13463267765"
                                    className="inline-flex items-center gap-1.5 mt-4 focus:outline-none font-semibold text-black sm:text-[15.5px] text-sm hover:underline underline-offset-4"
                                >
                                    Explore Ravo Handheld
                                    <ArrowOutwardIcon fontSize="small" />
                                </a>
                            </div>
                        </motion.article>

                        <motion.aside
                            variants={fadeUp}
                            className="relative bg-black p-5 sm:p-8 rounded-3xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_0%,#ffffff14_0%,transparent_60%)] pointer-events-none" />
                            <div className="relative">
                                <h3 className="font-serif text-white text-2xl sm:text-3xl lg:text-4xl leading-tight">
                                    Looking for
                                    <br className="hidden sm:block" />
                                    something else?
                                </h3>
                                <p className="mt-3 max-w-sm text-white/80 sm:text-[15.5px] text-sm">
                                    See all devices side-by-side and pick the one that fits your counter,
                                    budget, and workflow.
                                </p>
                                <a
                                    href="tel:+13463267765"
                                    className="inline-flex items-center gap-1.5 mt-4 focus:outline-none font-semibold text-white sm:text-[15.5px] text-sm hover:underline underline-offset-4"
                                >
                                    Compare more devices
                                    <ArrowOutwardIcon fontSize="small" />
                                </a>
                            </div>
                        </motion.aside>
                    </motion.div>
                </div>
            </section>

        </main >
    );
}


export default TerminalPage;