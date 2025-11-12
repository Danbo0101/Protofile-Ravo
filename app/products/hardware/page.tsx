"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { toast } from "sonner";
import { send } from "emailjs-com";

import HoverVideoCard, { ProductTeaser } from "@/app/components/HoverVideoCard";
import { fadeUp } from "@/app/components/variants";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import imgCheck from "@/app/assets/imgCheck.png"


type Tile = {
    img: string;
    alt: string;
    eyebrow: string;
    title: string;
    cta: string;
    href: string;
};

const TARGET_EMAIL = "nguyenhuutho029@gmail.com";

const TILES: Tile[] = [
    {
        img: "/img-restaurant.jpg",
        alt: "Restaurant taking payment",
        eyebrow: "Restaurants",
        title: "Turn tables, keep orders flowing, and run your restaurant smoothly",
        cta: "Explore Square for Restaurants",
        href: "/solutions/restaurants",
    },
    {
        img: "/img-retail.jpg",
        alt: "Retail cashier using POS",
        eyebrow: "Retail",
        title: "Simplify your day-to-day with a complete retail POS system",
        cta: "Explore Square for Retail",
        href: "/solutions/retail",
    },
    {
        img: "/img-beauty.jpg",
        alt: "Salon staff using POS",
        eyebrow: "Beauty",
        title: "Manage salon staff, appointments, and payments with ease",
        cta: "Explore Square for Beauty",
        href: "/solutions/beauty",
    },
];


const ITEMS: ProductTeaser[] = [
    {
        label: "Square Register",
        headline: "The sleek, dual-screen system",
        priceLine: "$799 or $39/mo over 24 months¹",
        imageSrc: imgCheck.src,
        imageAlt: "Square Register",
        videoSrc: "/vdCheck.mp4",
    },
    {
        label: "Square Handheld",
        headline: "The powerful POS that moves with you",
        priceLine: "$399 or $37/mo over 12 months¹",
        imageSrc: imgCheck.src,
        imageAlt: "Square Handheld",
        videoSrc: "/vdCheck.mp4",
    },
    {
        label: "Square Register",
        headline: "The sleek, dual-screen system",
        priceLine: "$799 or $39/mo over 24 months¹",
        imageSrc: imgCheck.src,
        imageAlt: "Square Register",
        videoSrc: "/vdCheck.mp4",
    },
    {
        label: "Square Handheld",
        headline: "The powerful POS that moves with you",
        priceLine: "$399 or $37/mo over 12 months¹",
        imageSrc: imgCheck.src,
        imageAlt: "Square Handheld",
        videoSrc: "/vdCheck.mp4",
    },
    {
        label: "Square Register",
        headline: "The sleek, dual-screen system",
        priceLine: "$799 or $39/mo over 24 months¹",
        imageSrc: imgCheck.src,
        imageAlt: "Square Register",
        videoSrc: "/vdCheck.mp4",
    },
    {
        label: "Square Handheld",
        headline: "The powerful POS that moves with you",
        priceLine: "$399 or $37/mo over 12 months¹",
        imageSrc: imgCheck.src,
        imageAlt: "Square Handheld",
        videoSrc: "/vdCheck.mp4",
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
        <main>
            <section className="relative flex items-center justify-start w-full min-h-screen bg-neutral-50 overflow-hidden">
                <video
                    ref={videoRef}
                    className="absolute inset-0 h-full w-full object-cover opacity-40 brightness-105 contrast-105 saturate-[1.2]"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                >
                    <source src="/videoAllHardware.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-linear-to-r from-white/10 via-white/10 to-transparent" />

                <div className="relative z-10 max-w-7xl px-6 sm:px-28 py-24 md:py-32">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="max-w-2xl"
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <span className="rounded-md bg-black px-3 py-0.5 text-xs font-semibold text-white tracking-wide">
                                NEW
                            </span>
                            <span className="text-lg font-semibold tracking-tight text-neutral-900">
                                Square Handheld
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-neutral-900">
                            Fits in your pocket. <br />
                            Powers your day.
                        </h1>

                        {/* Description (optional) */}
                        <p className="mt-5 max-w-lg text-neutral-600 text-lg leading-relaxed">
                            Compact. Fast. Built to move with your business — from front desk to
                            table to checkout.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="#"
                                className="rounded-full border border-neutral-900 px-8 py-3 text-[17px] font-medium text-neutral-900 transition-all duration-200 hover:bg-neutral-900 hover:text-white hover:shadow-md"
                            >
                                Learn more
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full bg-neutral-900 px-8 py-3 text-[17px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 hover:shadow-md"
                            >
                                Buy now
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="w-full bg-white text-black">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        {ITEMS.map((item) => (
                            <HoverVideoCard key={item.label} {...item} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full bg-neutral-50 text-black">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 sm:py-28">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]"
                    >
                        {/* Left: image */}
                        <motion.figure
                            variants={fadeUp}
                            className="relative rounded-4xl bg-white p-5 sm:p-6 shadow-sm ring-1 ring-black/5 overflow-hidden"
                        >
                            <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl bg-white">
                                <Image
                                    src="/img-hardware-family.png" // thay bằng ảnh của bạn
                                    alt="RAVO hardware family"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </div>

                            {/* subtle floating effect on hover */}
                            <motion.div
                                className="absolute inset-0 rounded-4xl"
                                whileHover={{ y: -6, transition: { duration: 0.4 } }}
                            />
                        </motion.figure>

                        {/* Right: heading + button */}
                        <motion.div
                            variants={fadeUp}
                            className="text-center lg:text-left space-y-8"
                        >
                            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight">
                                Need help
                                <br />
                                choosing?
                            </h2>

                            <Link
                                href="/products/hardware/compare"
                                className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:shadow-lg active:scale-[0.97]"
                            >
                                Compare hardware
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <section className="w-full bg-neutral-50 text-black">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 sm:py-28">
                    {/* Wrap card for subtle separation */}
                    <div className="rounded-[28px] bg-white/70 p-6 sm:p-10 ring-1 ring-black/5 shadow-sm">
                        {/* Title */}
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="text-center font-serif text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight"
                        >
                            Customize your hardware setup
                        </motion.h2>

                        {/* Content */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="mt-10 grid items-center gap-10 lg:grid-cols-2"
                        >
                            {/* Left copy */}
                            <div className="order-2 text-center lg:order-1 lg:text-left">
                                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-600">
                                    Flexible picks
                                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                                    Works with POS
                                </div>

                                <h3 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">
                                    Choose specific accessories
                                </h3>

                                <p className="mt-3 max-w-xl text-neutral-600/90 mx-auto lg:mx-0">
                                    Build the exact setup you need—barcode scanners, cash drawers, stands, and more.
                                </p>

                                {/* bullets */}
                                <ul className="mt-6 space-y-2 text-neutral-800">
                                    {[
                                        "Compatible with RAVO POS",
                                        "Fast USB/Bluetooth options",
                                        "Plug-and-play setup",
                                    ].map((t) => (
                                        <li key={t} className="flex items-start justify-center gap-2 lg:justify-start">
                                            <CheckCircleRoundedIcon className="mt-0.5 text-neutral-700" fontSize="small" />
                                            <span>{t}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA link */}
                                <Link
                                    href="/products/hardware/accessories"
                                    className="group mt-7 inline-flex items-center gap-2 rounded-full border border-neutral-900 px-6 py-3 text-[16px] font-medium transition-all hover:bg-neutral-900 hover:text-white"
                                >
                                    Shop all accessories
                                    <ArrowOutwardRoundedIcon className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </Link>
                            </div>

                            {/* Right visual */}
                            <div className="order-1 flex justify-center lg:order-2">
                                <motion.figure
                                    whileHover={{ scale: 1.035 }}
                                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                                    className="relative w-full max-w-[640px] rounded-2xl bg-linear-to-b from-white to-neutral-50 p-4 ring-1 ring-black/5 shadow-md"
                                >
                                    {/* glow */}
                                    <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
                                        <Image
                                            src="/img-accessory-scanner.png" // thay bằng ảnh của bạn
                                            alt="Barcode scanner accessory"
                                            fill
                                            priority
                                            className="object-contain drop-shadow-sm"
                                        />
                                    </div>
                                </motion.figure>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-neutral-50 text-black">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 sm:py-28">
                    {/* Heading */}
                    <h2 className="text-center font-serif text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight">
                        Made to power your business
                    </h2>

                    {/* Cards */}
                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {TILES.map((t) => (
                            <article
                                key={t.title}
                                className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                {/* Media */}
                                <div className="relative aspect-4/3 w-full">
                                    <Image
                                        src={t.img}
                                        alt={t.alt}
                                        fill
                                        className="object-cover transition duration-300 group-hover:scale-[1.02] group-hover:brightness-[1.05] group-hover:contrast-[1.05]"
                                        priority
                                    />
                                    {/* subtle top-to-bottom fade for readability */}
                                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/0 via-black/0 to-black/0" />
                                </div>

                                {/* Text block */}
                                <div className="px-5 pb-6 pt-5 sm:px-6">
                                    {t.eyebrow && (
                                        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600">
                                            {t.eyebrow}
                                        </span>
                                    )}

                                    <h3 className="mt-3 text-[21px] sm:text-[22px] font-semibold leading-snug tracking-tight">
                                        {t.title}
                                    </h3>

                                    <Link
                                        href={t.href}
                                        className="group/cta mt-3 inline-flex items-center gap-1.5 text-[15px] font-medium text-neutral-800 underline-offset-4 hover:underline"
                                    >
                                        {t.cta}
                                        <ArrowOutwardRoundedIcon
                                            fontSize="small"
                                            className="transition-transform duration-200 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                                        />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full bg-white text-black">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 sm:py-24">
                    {/* viền top rất mảnh để chia section */}
                    <div className="mx-auto max-w-7xl border-t border-neutral-200/70 pt-12 sm:pt-14">
                        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
                            {/* LEFT */}
                            <motion.h2
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="font-serif tracking-tight text-[40px] leading-[1.05] sm:text-6xl md:text-7xl"
                            >
                                Get updates and insights.
                            </motion.h2>

                            {/* RIGHT CARD */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur"
                            >
                                <p className="text-xl sm:text-2xl leading-snug">
                                    Stay up to date on Square Handheld, new products, expert advice, and more.
                                </p>

                                <form onSubmit={onSubmit} className="mt-5" aria-label="Join our mailing list">
                                    <label htmlFor="email" className="sr-only">
                                        Email address
                                    </label>

                                    {/* group input dạng pill */}
                                    <div className="flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white p-1 pl-3 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] ring-0 transition focus-within:border-neutral-800 focus-within:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]">
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Email address"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoComplete="email"
                                            className="h-12 w-full flex-1 rounded-full bg-transparent px-2 text-[15px] outline-none placeholder:text-neutral-400"
                                        />
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-black px-5 text-sm font-semibold text-white transition will-change-transform hover:scale-[1.02] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {loading && (
                                                <svg
                                                    className="size-4 animate-spin"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                >
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" d="M4 12a8 8 0 0 1 8-8" stroke="currentColor" strokeWidth="4" />
                                                </svg>
                                            )}
                                            {loading ? "Sending..." : "Submit"}
                                        </button>
                                    </div>

                                    <p className="mt-3 text-[13px] leading-relaxed text-neutral-500">
                                        *This information may be transcribed, used, and stored by third parties in accordance with our{" "}
                                        <Link href="#" className="underline underline-offset-2 hover:text-black">
                                            Privacy Policy
                                        </Link>
                                        .
                                    </p>
                                </form>

                                {/* mảng décor nhẹ */}
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -right-24 -top-24 size-48 rounded-full bg-neutral-100"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default AllHardwarePage;
