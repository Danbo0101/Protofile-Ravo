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
        <main className="min-h-screen bg-white text-black">
            <section className="mx-auto h-screen w-full ">
                <div className="relative overflow-hidden ">
                    <div className="absolute inset-0">
                        <Image
                            src={imgTerminal1}
                            alt="RAVO Terminal"
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw 100vh"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                        className="relative z-10 grid min-h-screen place-items-center px-4 py-12 sm:py-16 md:py-20"
                    >
                        <div className="w-full max-w-6xl">
                            <motion.p
                                variants={fadeUp}
                                className="text-white/90 text-base font-semibold tracking-wide"
                            >
                                Ravo Terminal
                            </motion.p>

                            <motion.h1
                                variants={fadeUp}
                                className="mt-3 font-serif text-white text-4xl leading-tight sm:text-5xl sm:leading-[1.1] md:text-6xl md:leading-[1.08]"
                            >
                                The compact credit
                                <br className="hidden sm:block" />
                                card machine that
                                <br className="hidden sm:block" />
                                flexes to your needs
                            </motion.h1>

                            <motion.div
                                variants={fadeUp}
                                className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                            >
                                <a
                                    href="#buy"
                                    className="inline-flex items-center justify-center rounded-full border border-white bg-transfer px-10 py-4 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                                >
                                    Buy now
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-2xl sm:rounded-3xl" />
                </div>
            </section>
            <section className="w-full h-fit bg-white text-neutral-700">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-20"
                >
                    <div className="flex flex-row divide-x divide-neutral-200 ">
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className="flex-1 flex items-center justify-center py-8 text-center text-xl font-semibold leading-snug"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
            <section ref={sectionRef} className="w-full h-screen bg-white text-black">
                <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-20">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        className="text-center font-serif text-3xl leading-tight sm:text-5xl md:text-6xl"
                    >
                        Small footprint. Lots of possibilities.
                    </motion.h2>

                    <motion.div
                        className="mt-10 md:mt-20"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.35 }}
                    >
                        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl">
                            <video
                                ref={videoRef}
                                className="h-auto w-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            >
                                <source src="/videoTerminal.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="px-20 pt-10 min-h-fit shadow-2xl flex flex-col items-center justify-center text-black ">
                <StickyScrollySteps steps={SIMPLE} />
            </section>
            <section className="w-full h-screen mb-10 bg-white text-black">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center mb-40 font-serif text-3xl leading-tight sm:text-6xl"
                    >
                        Let customers pay their way
                    </motion.h2>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8"
                    >
                        {items.map((it, i) => (
                            <motion.figure
                                key={i}
                                variants={fadeUp}
                                className="group rounded-2xl"
                            >
                                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition will-change-transform group-hover:-translate-y-0.5 group-hover:shadow-md">
                                    <div className="relative aspect-4/3">
                                        <Image
                                            src={it.img}
                                            alt={it.alt}
                                            fill
                                            priority={i === 0}
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                                <figcaption className="mt-4 text-center text-lg font-semibold">
                                    {it.label}
                                </figcaption>
                            </motion.figure>
                        ))}
                    </motion.div>
                </div>
            </section>
            <section
                ref={sectionRef}
                className="relative w-full bg-white text-black"
            >
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="mx-auto h-152 max-w-7xl bg-[radial-gradient(60%_60%_at_50%_20%,rgba(0,0,0,0.06),transparent_60%)]" />
                </div>

                <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-8 lg:pb-24">
                    <motion.figure
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur supports-backdrop-filter:bg-white/80"
                    >
                        <div className="relative aspect-video">
                            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(0,0,0,0.18),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.12),transparent_25%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <video
                                ref={videoRef}
                                src="/videoTerminal1.mp4"
                                className="absolute inset-0 h-full w-full object-cover"
                                muted
                                playsInline
                                preload="metadata"
                                controls={false}
                            />
                            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 transition-opacity group-hover:ring-black/10" />
                        </div>
                    </motion.figure>
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="mx-auto mt-10 grid gap-8 md:grid-cols-12 md:gap-10"
                    >
                        <motion.div variants={fadeUp} className="md:col-span-7">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-700">
                                    New hardware
                                </span>
                                <span className="inline-flex items-center rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                    In stock
                                </span>
                            </div>

                            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-5xl">
                                Make it yours for <span className="whitespace-nowrap">$299</span>
                            </h2>

                            <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
                                <p className="text-[17px] text-neutral-800">
                                    Or <span className="font-semibold">$27</span> per month over 12 months
                                    <sup className="ml-0.5 align-super text-[10px]">1</sup>
                                </p>
                                <span className="inline-flex items-center rounded-md border border-black/10 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 shadow-sm">
                                    0% APR for qualified buyers
                                </span>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <a
                                    href="#buy"
                                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                                >
                                    Buy now
                                </a>
                                <a
                                    href="#learn-more"
                                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-base font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
                                >
                                    Learn more
                                    <ArrowOutwardIcon fontSize="small" className="ml-1" />
                                </a>
                            </div>
                            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" />
                                    1-year limited warranty
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" />
                                    30-day returns
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" />
                                    Free shipping
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div variants={fadeUp} className="md:col-span-5 md:pl-2">
                            <p className="text-[15.5px] leading-relaxed text-neutral-700">
                                Discover how our transparent payment processing rates differ based on the
                                plan you select. Choose the option that fits your salon today, and scale
                                without surprise fees tomorrow.
                            </p>

                            <a
                                href="#learn-more"
                                className="mt-4 inline-flex items-center gap-2 text-[15.5px] font-semibold text-neutral-900 underline-offset-4 hover:underline"
                            >
                                Explore rates & plans <ArrowOutwardIcon fontSize="small" />
                            </a>

                            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-700">
                                <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
                                    <p className="font-semibold">Tap • Dip • Swipe</p>
                                    <p className="mt-1 text-neutral-600">Fast, PCI-compliant payments.</p>
                                </div>
                                <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
                                    <p className="font-semibold">Plug & play</p>
                                    <p className="mt-1 text-neutral-600">Works out of the box.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <section className="mx-auto w-full px-20 py-20 text-black">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    className="faq-heading font-serif text-5xl sm:text-6xl text-black"
                >
                    FAQ
                </motion.h2>


                <div className="mt-20 h-px w-full bg-neutral-200" />

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="border-t border-neutral-200 text-black"
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
            <section className="w-full bg-white text-black">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center font-serif text-3xl leading-tight sm:text-5xl"
                    >
                        Which compact POS is right for you?
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        className="mx-auto mt-3 mb-20 max-w-2xl text-center text-[15.5px] text-neutral-600"
                    >
                        Compare handheld and countertop options designed for fast checkouts and a tidy setup.
                    </motion.p>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
                    >
                        <motion.article
                            variants={fadeUp}
                            className="group rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-700">
                                    Countertop
                                </span>
                                <span className="inline-flex items-center rounded-full bg-black px-2.5 py-1 text-xs font-semibold text-white">
                                    Built-in printer
                                </span>
                            </div>

                            <div className="relative mx-auto mt-4 max-w-[520px] overflow-hidden rounded-2xl ring-1 ring-inset ring-black/5">
                                <div className="relative aspect-16/10 bg-white">
                                    <Image
                                        src={imgTerminal7}
                                        alt="Ravo Terminal"
                                        fill
                                        priority
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-xl font-semibold">Ravo Terminal</h3>
                                <ul className="mt-3 space-y-1.5 text-[15.5px] text-neutral-700">
                                    <li>Streamlined countertop selling</li>
                                    <li>Receipt printer built in</li>
                                    <li>Tap, dip, and swipe in one</li>
                                </ul>

                                <a
                                    href="#buy-terminal"
                                    className="mt-4 inline-flex items-center gap-1.5 text-[15.5px] font-semibold text-black underline-offset-4 hover:underline focus:outline-none"
                                >
                                    Buy Ravo Terminal
                                    <ArrowOutwardIcon fontSize="small" />
                                </a>
                            </div>
                        </motion.article>
                        <motion.article
                            variants={fadeUp}
                            className="group rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-700">
                                    Mobile
                                </span>
                                <span className="inline-flex items-center rounded-full bg-neutral-900 px-2.5 py-1 text-xs font-semibold text-white">
                                    Built-in scanner
                                </span>
                            </div>

                            <div className="relative mx-auto mt-4 max-w-[520px] overflow-hidden rounded-2xl ring-1 ring-inset ring-black/5">
                                <div className="relative aspect-16/10 bg-white">
                                    <Image
                                        src={imgTerminal8}
                                        alt="Ravo Handheld"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-xl font-semibold">Ravo Handheld</h3>
                                <ul className="mt-3 space-y-1.5 text-[15.5px] text-neutral-700">
                                    <li>Sell anywhere with all-day battery</li>
                                    <li>Integrated scanner and camera</li>
                                    <li>Tap and dip payments</li>
                                </ul>

                                <a
                                    href="#explore-handheld"
                                    className="mt-4 inline-flex items-center gap-1.5 text-[15.5px] font-semibold text-black underline-offset-4 hover:underline focus:outline-none"
                                >
                                    Explore Ravo Handheld
                                    <ArrowOutwardIcon fontSize="small" />
                                </a>
                            </div>
                        </motion.article>
                        <motion.aside
                            variants={fadeUp}
                            className="relative overflow-hidden rounded-3xl bg-black p-6 sm:p-8"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_0%,#ffffff14_0%,transparent_60%)]" />
                            <div className="relative mt-auto">
                                <h3 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                                    Looking for
                                    <br className="hidden sm:block" />
                                    something else?
                                </h3>
                                <p className="mt-3 max-w-sm text-[15.5px] text-white/80">
                                    See all devices side-by-side and pick the one that fits your counter, budget, and workflow.
                                </p>
                                <a
                                    href="#compare-more"
                                    className="mt-4 inline-flex items-center gap-1.5 text-[15.5px] font-semibold text-white underline-offset-4 hover:underline focus:outline-none"
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