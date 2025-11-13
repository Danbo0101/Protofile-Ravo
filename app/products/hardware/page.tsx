"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { toast } from "sonner";
import { send } from "emailjs-com";

import { fadeUp } from "@/app/components/variants";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import imgCheck from "@/app/assets/imgCheck.png"
import imgScreen from "@/app/assets/imgScreen.png"
import imgTerminal from "@/app/assets/imgTerminal.png"
import imgDigital from "@/app/assets/imgDigital.png"
import imgCheckOut from "@/app/assets/imgCheckOut.png"
import imgRouter from "@/app/assets/imgRouter.png"
import imgPrinter from "@/app/assets/imgPrinter.png"
import imgCashDrawer from "@/app/assets/imgCashDrawer.png"
import imgTapPay from "@/app/assets/imgTapPay.png"
import imgFullPOS from "@/app/assets/imgFullPOS.png"
import imgStore from "@/app/assets/imgStore.png"
import imgRavo from "@/app/assets/imgRavo.png"


const TARGET_EMAIL = "nguyenhuutho029@gmail.com";

const ITEMS = [
    {
        label: "RAVO Main Screen",
        headline: "The central hub for managing your entire salon",

        imageSrc: imgScreen.src,
        imageAlt: "RAVO Main Screen",
        href: "/products/hardware/mainScreen",
    },
    {
        label: "RAVO Terminal",
        headline: "Fast, portable POS for smooth Check-In & Check-Out",

        imageSrc: imgTerminal.src,
        imageAlt: "RAVO Terminal",
        href: "/products/hardware/terminal",
    },
    {
        label: "RAVO Digital Screen",
        headline: "Modern displays for promos, menus & real-time updates",

        imageSrc: imgDigital.src,
        imageAlt: "RAVO Digital Screen",
        href: "/products/hardware/digital",
    },
    {
        label: "RAVO Check-In Table",
        headline: "Seamless client arrivals with smart check-in tools",

        imageSrc: imgCheck.src,
        imageAlt: "RAVO Check-In Table",
        href: "/products/hardware/check",
    },
    {
        label: "RAVO Check-Out Table",
        headline: "Effortless payments and fast client flow",

        imageSrc: imgCheckOut.src,
        imageAlt: "RAVO Check-Out Table",
        href: "/products/hardware/check",
    },
    {
        label: "RAVO Router",
        headline: "A dedicated, ultra-stable network for your entire POS system",

        imageSrc: imgRouter.src,
        imageAlt: "RAVO Router",
        href: "",
    },
    {
        label: "RAVO Printer",
        headline: "Fast, quiet thermal printing for receipts and order tickets",

        imageSrc: imgPrinter.src,
        imageAlt: "RAVO Printer",
        href: "",
    },
    {
        label: "RAVO Cash Drawer",
        headline: "Secure, smooth-glide cash management for busy salons",

        imageSrc: imgCashDrawer.src,
        imageAlt: "RAVO Cash Drawer",
        href: "",
    },


];

const TILESS = [
    {
        eyebrow: "Platform",
        title: "One Seamless POS Ecosystem",
        cta: "Explore the ecosystem",
        img: imgStore.src,
        alt: "RAVO POS ecosystem",
        href: "",
    },
    {
        eyebrow: "Purpose-Built",
        title: "Designed for Nail Salons",
        cta: "See how it works",
        img: imgFullPOS.src,
        alt: "RAVO built for nail salons",
        href: "",
    },
    {
        eyebrow: "Business-Ready",
        title: "Ready for Growth",
        cta: "Start with RAVO",
        img: imgRavo.src,
        alt: "Grow with RAVO",
        href: "",
    },
];


const AllHardwarePage = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = true;
        (video as any).playsInline = true;
        video.play().catch(() => { });
    }, []);

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!email) {
            toast.warning("Please enter your email.");
            return;
        }

        setLoading(true);
        const t = toast.loading("Sending...");

        try {
            await send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    user_email: email,
                    target_email: TARGET_EMAIL,
                    message:
                        "New mailing list request. Please share more information about RAVO solutions.",
                },
                PUBLIC_KEY
            );

            toast.success("Thanks! We’ll be in touch soon.", { id: t });
            setEmail("");
        } catch (err) {
            console.error(err);
            toast.error("Sorry, something went wrong. Please try again.", { id: t });
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="bg-white w-full">
            <section className="relative flex justify-start items-center bg-black w-full min-h-screen overflow-hidden">
                <video
                    ref={videoRef}
                    className="absolute inset-0 opacity-60 sm:opacity-70 brightness-[0.85] sm:brightness-90 saturate-[1.1] w-full h-full object-cover contrast-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                >
                    <source src="/videoAllHardware.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/70 sm:bg-black/60" />
                <div className="absolute inset-0 bg-linear-to-b from-white/4 to-white/15" />
                <div className="z-10 relative px-5 sm:px-12 md:px-20 lg:px-28 py-20 md:py-32 w-full max-w-7xl">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="max-w-xl sm:max-w-2xl"
                    >
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <span className="bg-white px-2.5 sm:px-3 py-0.5 rounded-md font-semibold text-[10px] text-black sm:text-xs tracking-wide">
                                RAVO POS
                            </span>
                            <span className="font-semibold text-white text-sm sm:text-lg tracking-tight">
                                All-in-One Hardware Collection
                            </span>
                        </div>
                        <h1 className="font-serif text-white text-3xl md:text-6xl leading-tight tracking-tight">
                            One ecosystem. <br />
                            Every device you need.
                        </h1>

                        <p className="mt-4 sm:mt-5 max-w-lg text-white/70 text-sm sm:text-base leading-relaxed">
                            From check-in to checkout, RAVO brings together a seamless family of
                            hardware—built for speed, crafted for salons, and ready to elevate every
                            moment of your client experience.
                        </p>
                    </motion.div>
                </div>
            </section>
            <section className="bg-[#f5f5f5] py-12 sm:py-24 w-full">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mb-10 sm:mb-16 text-center"
                    >
                        <p className="text-neutral-500 text-xs sm:text-sm uppercase tracking-[0.2em]">
                            RAVO Hardware Options
                        </p>

                        <h2 className="mt-3 font-serif font-semibold text-black text-3xl md:text-6xl leading-tight">
                            Powerful Tools for Modern Salons
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-neutral-500 text-sm sm:text-base leading-relaxed">
                            Choose the hardware that fits your workflow — from handheld terminals to full check-in / check-out systems.
                        </p>
                    </motion.div>
                    <div className="gap-6 sm:gap-8 lg:gap-10 grid grid-cols-1 md:grid-cols-2">
                        {ITEMS.map((item, idx) => (
                            <motion.article
                                key={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: idx * 0.15 }}
                                className="group flex flex-col bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm border border-black/5 rounded-3xl h-full overflow-hidden"
                            >
                                <div className="relative bg-neutral-50 w-full">
                                    <div className="relative mx-auto max-w-md aspect-4/3">
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            fill
                                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 90vw, 520px"
                                        />
                                    </div>
                                    <div className="bottom-0 absolute inset-x-0 bg-linear-to-t from-black/5 to-transparent h-16 pointer-events-none" />
                                </div>

                                <div className="flex flex-col flex-1 px-5 sm:px-8 pt-5 sm:pt-7 pb-5 sm:pb-8">
                                    <p className="inline-flex items-center gap-2 font-medium text-[0.7rem] text-neutral-500 sm:text-xs uppercase tracking-[0.18em]">
                                        <span className="bg-black rounded-full w-1.5 h-1.5" />
                                        {item.label}
                                    </p>

                                    <h3 className="mt-3 font-serif text-black md:text-[1.9rem] text-2xl sm:text-3xl leading-tight">
                                        {item.headline}
                                    </h3>

                                    <div className="flex sm:flex-row flex-col gap-3 mt-5 sm:mt-8">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="inline-flex justify-center items-center bg-white hover:bg-black shadow-sm px-6 py-3 border border-black/10 hover:border-black/30 rounded-full w-full min-h-11 font-medium text-black hover:text-white/80 text-sm hover:scale-105 transition"
                                            >
                                                Learn more
                                            </Link>
                                        ) : null}

                                        <Link
                                            href="tel:+13463267765"
                                            className="inline-flex justify-center items-center bg-black hover:bg-black/90 shadow-sm px-6 py-3 rounded-full w-full min-h-11 font-medium text-white text-sm hover:scale-105 transition"
                                        >
                                            Buy now
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-neutral-50 w-full text-black">
                <div className="mx-auto px-6 sm:px-8 py-14 sm:py-28 max-w-7xl">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="items-center gap-10 lg:gap-12 grid lg:grid-cols-[1.1fr_1fr]"
                    >
                        <motion.figure
                            variants={fadeUp}
                            className="relative bg-white shadow-sm p-4 sm:p-6 rounded-4xl ring-1 ring-black/5 overflow-hidden"
                        >
                            <div className="relative bg-white mx-auto rounded-2xl w-full aspect-video overflow-hidden">
                                <Image
                                    src={imgTapPay}
                                    alt="RAVO hardware family"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </div>
                            <motion.div
                                className="absolute inset-0 rounded-4xl"
                                whileHover={{ y: -6, transition: { duration: 0.4 } }}
                            />
                        </motion.figure>

                        <motion.div
                            variants={fadeUp}
                            className="space-y-6 lg:text-left text-center"
                        >
                            <h2 className="font-serif text-[28px] sm:text-4xl md:text-6xl leading-tight tracking-tight">
                                Turn your
                                <br />
                                phone into a POS
                            </h2>

                            <p className="mx-auto lg:mx-0 max-w-md lg:max-w-lg text-[14px] text-neutral-600 sm:text-base leading-relaxed">
                                With our new plug-in Tap Device, you can accept contactless payments
                                directly from the RAVO App — fast, secure, and as seamless as Apple Pay.
                                No bulky machines. Just tap and done.
                            </p>

                            <a
                                href="#"
                                className="inline-block bg-linear-to-r from-[#0C807E] to-[#86E3A8] shadow-lg hover:shadow-xl px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto font-bold text-[14px] text-white sm:text-[15px] hover:scale-105 transition-transform duration-300"
                            >
                                Launching soon.
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <section className="bg-neutral-50 w-full h-screen text-black">
                <div className="mx-auto px-4 sm:px-8 py-14 sm:py-20 md:py-28 max-w-7xl">
                    <div className="bg-white/70 shadow-sm p-10 rounded-3xl md:rounded-[28px] ring-1 ring-black/5">
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="font-serif text-3xl md:text-6xl text-center leading-tight tracking-tight"
                        >
                            Build your perfect RAVO setup
                        </motion.h2>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="items-center gap-8 lg:gap-10 grid lg:grid-cols-2 mt-8 sm:mt-10"
                        >
                            <motion.div
                                variants={fadeUp}
                                className="order-2 lg:order-1 lg:text-left text-center"
                            >
                                <div className="inline-flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 bg-neutral-50 px-4 sm:px-5 py-1.5 sm:py-2 border border-neutral-200 rounded-full font-semibold sm:font-bold text-neutral-600 text-xs sm:text-sm">
                                    <span>Flexible RAVO add-ons</span>
                                    <span className="hidden sm:inline-flex bg-neutral-300 rounded-full w-1 h-1" />
                                    <span className="block sm:inline">Built for nail salons</span>
                                </div>

                                <h3 className="mt-4 sm:mt-5 font-semibold text-xl sm:text-2xl md:text-3xl tracking-tight">
                                    Add only the hardware you need
                                </h3>

                                <p className="mx-auto lg:mx-0 mt-3 max-w-xl text-neutral-600/90 text-sm sm:text-base leading-relaxed">
                                    Pair your RAVO POS with scanners, receipt printers, routers, cash drawers, and more—so every station in your salon runs smoothly from check-in to check-out.
                                </p>

                                <ul className="space-y-2.5 mt-5 sm:mt-6 text-neutral-800">
                                    {[
                                        "Designed to work seamlessly with RAVO POS",
                                        "USB, LAN, and Bluetooth-ready options",
                                        "Simple, plug-and-play installation",
                                    ].map((t) => (
                                        <li
                                            key={t}
                                            className="flex justify-start lg:justify-start items-start gap-2 text-sm sm:text-base"
                                        >
                                            <CheckCircleRoundedIcon
                                                className="mt-0.5 text-neutral-700 shrink-0"
                                                fontSize="small"
                                            />
                                            <span className="text-left">{t}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="tel:+13463267765"
                                    className="group inline-flex justify-center items-center gap-2 hover:bg-neutral-900 mt-6 sm:mt-7 px-5 sm:px-6 py-2.5 sm:py-3 border border-neutral-900 rounded-full w-full sm:w-auto font-medium sm:text-[16px] hover:text-white text-sm transition-all"
                                >
                                    Explore RAVO accessories
                                    <ArrowOutwardRoundedIcon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-200" />
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={fadeUp}
                                className="flex justify-center order-1 lg:order-2"
                            >
                                <motion.figure
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                                    className="group relative bg-linear-to-b from-white to-neutral-50 shadow-md p-3.5 sm:p-4 rounded-2xl ring-1 ring-black/5 w-full max-w-[520px] sm:max-w-[640px]"
                                >
                                    <div className="-z-10 absolute -inset-3 sm:-inset-4 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none" />
                                    <div className="relative rounded-xl w-full aspect-4/3 overflow-hidden">
                                        <Image
                                            src={imgFullPOS}
                                            alt="RAVO POS accessories – barcode scanner"
                                            fill
                                            priority
                                            className="drop-shadow-sm object-contain"
                                        />
                                    </div>
                                </motion.figure>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="bg-neutral-50 w-full text-black">
                <div className="mx-auto px-4 sm:px-6 py-14 sm:py-24 max-w-7xl">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mb-14 font-serif text-3xl md:text-6xl text-center leading-tight tracking-tight"
                    >
                        Made to power your business
                    </motion.h2>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="gap-6 sm:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 sm:mt-12"
                    >
                        {TILESS.map((t, idx) => (
                            <motion.article
                                key={t.title}
                                variants={fadeUp}
                                transition={{ delay: idx * 0.12 }}
                                className="group relative bg-white shadow-sm hover:shadow-md rounded-3xl ring-1 ring-black/5 overflow-hidden transition-all hover:-translate-y-1 duration-300"
                            >
                                <div className="relative w-full aspect-4/3">
                                    <Image
                                        src={t.img}
                                        alt={t.alt}
                                        fill
                                        className="group-hover:brightness-[1.05] object-cover group-hover:scale-[1.02] transition duration-300 group-hover:contrast-[1.05]"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/0 via-black/0 to-black/0 pointer-events-none" />
                                </div>

                                <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-5 sm:pb-6">
                                    {t.eyebrow && (
                                        <span className="inline-flex items-center gap-2 bg-neutral-50 px-3 py-1 border border-neutral-200 rounded-full font-medium text-[11px] text-neutral-600 sm:text-xs">
                                            {t.eyebrow}
                                        </span>
                                    )}

                                    <h3 className="mt-2 sm:mt-3 font-semibold text-[18px] sm:text-[22px] leading-snug tracking-tight">
                                        {t.title}
                                    </h3>

                                    <Link
                                        href={t.href}
                                        className="group/cta inline-flex items-center gap-1.5 mt-2 sm:mt-3 font-medium text-[14px] text-neutral-800 sm:text-[15px] hover:underline underline-offset-4"
                                    >
                                        {t.cta}
                                        <ArrowOutwardRoundedIcon
                                            fontSize="small"
                                            className="transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5 duration-200"
                                        />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
            <section className="bg-neutral-50 w-full text-black">
                <div className="mx-auto px-6 sm:px-8 py-10 sm:py-24 max-w-7xl">
                    <div className="mx-auto pt-10 sm:pt-14 border-neutral-200/70 border-t max-w-7xl">
                        <div className="items-start gap-10 lg:gap-14 grid lg:grid-cols-[1.1fr_1fr]">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="space-y-4"
                            >
                                <span className="inline-flex items-center gap-2 bg-black px-3 py-1 rounded-full text-[11px] text-white/90 sm:text-xs uppercase tracking-[0.18em]">
                                    <span className="bg-white rounded-full size-1.5" />
                                    RAVO newsletter
                                </span>

                                <h2 className="font-serif text-[34px] lg:text-[58px] sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
                                    Get updates and
                                    <span className="block sm:inline"> insights from RAVO.</span>
                                </h2>

                                <p className="max-w-xl text-neutral-600 text-sm sm:text-base">
                                    Be the first to hear about new RAVO features, hardware drops, and
                                    practical tips to keep your nail salon running smoother every day.
                                </p>
                            </motion.div>
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="relative bg-linear-to-br from-white via-neutral-50 to-neutral-100 shadow-sm border border-neutral-200/80 rounded-[26px] overflow-hidden"
                            >
                                <div className="bg-linear-to-r from-black via-neutral-700 to-neutral-400 w-full h-1" />

                                <div className="p-6 sm:p-7">
                                    <p className="font-medium text-neutral-900 text-lg sm:text-xl leading-snug">
                                        Join the RAVO community and get salon-focused insights delivered straight to your inbox.
                                    </p>

                                    <form
                                        onSubmit={onSubmit}
                                        className="space-y-3 mt-5 sm:mt-6"
                                        aria-label="Join our mailing list"
                                    >
                                        <label htmlFor="email" className="sr-only">
                                            Email address
                                        </label>

                                        <div className="flex sm:flex-row flex-col items-stretch sm:items-center gap-2.5 bg-white/80 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] focus-within:shadow-[0_0_0_3px_rgba(0,0,0,0.05)] px-2.5 py-1.5 md:border border-neutral-300/80 focus-within:border-neutral-900 rounded-2xl sm:rounded-full ring-0 transition">
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                autoComplete="email"
                                                className="flex-1 bg-transparent px-10 sm:px-3 py-4 border border-neutral-300/80 md:border-0 rounded-full outline-none h-11 sm:h-12 text-[14px] sm:text-[15px] placeholder:text-neutral-400"
                                            />

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="inline-flex justify-center items-center gap-2 bg-black hover:bg-black/90 disabled:bg-black/70 px-4 sm:px-5 rounded-xl sm:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/35 h-11 sm:h-12 font-semibold text-white sm:text-[15px] text-sm hover:scale-105 disabled:scale-100 transition cursor-pointer disabled:cursor-not-allowed will-change-transform shrink-0"
                                            >
                                                {loading && (
                                                    <svg
                                                        className="size-4 animate-spin"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        />
                                                        <path
                                                            className="opacity-75"
                                                            d="M4 12a8 8 0 0 1 8-8"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        />
                                                    </svg>
                                                )}
                                                {loading ? "Sending..." : "Subscribe"}
                                            </button>
                                        </div>

                                        <p className="text-[12px] text-neutral-500 sm:text-[13px] leading-relaxed">
                                            By subscribing, you agree to receive emails from RAVO about products and services.
                                            Read our{" "}
                                            <Link
                                                href="/policies/privacy"
                                                className="hover:text-black underline underline-offset-2"
                                            >
                                                Privacy Policy
                                            </Link>
                                            .
                                        </p>
                                    </form>
                                </div>


                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default AllHardwarePage;
