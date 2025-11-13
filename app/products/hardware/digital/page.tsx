"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


import imgKiosk from "@/app/assets/imgDigital.png";
import imgCheck from "@/app/assets/imgCheck.png";
import imgDigital from "@/app/assets/imgDigital.png";
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
        href: "/hardware/stand",
        img: imgTerminal.src,
        imgAlt: "Terminal",
    },
    {
        eyebrow: "Digital Screen",
        title: "Smart display that engages clients and boosts visibility",
        href: "/hardware/kiosk",
        img: imgDigital.src,
        imgAlt: "Digital Screen",
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
        q: "Can RAVO handle our unique turn method?",
        a: "Yes. FIFO, clock-in time, or credit. We configure RAVO to match your policy, and everything is visible at the front desk to avoid confusion.",
    },
    {
        q: "How does payroll work with tips and commissions?",
        a: "Your rules are built in. RAVO calculates tips, commissions, and any splits automatically and generates clean reports in minutes.",
    },
    {
        q: "What payment options do you support?",
        a: "Chip, tap, mobile wallets, and gift cards. You’ll get transparent pricing, clear statements, and optional next-day funding.",
    },
];

const DigitalScreenPage = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main>
            <section className="relative bg-neutral-100 text-neutral-900 py-24 lg:py-32 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT SIDE */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div>
                            <h1 className="font-serif text-6xl sm:text-7xl leading-none">
                                <span className="text-neutral-400">Square</span>{" "}
                                <span className="text-neutral-900 block">Kiosk</span>
                            </h1>
                        </div>

                        <p className="text-lg text-neutral-600 max-w-md">
                            Shorten wait times, free up staff, and let customers build their own
                            orders with a customizable, iPad-run device.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-all">
                                Buy now
                            </button>
                            <button className="px-8 py-4 border border-neutral-900 rounded-full font-medium hover:bg-neutral-200 transition-all">
                                Contact sales
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        variants={floatIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: EASE_OUT }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-[580px] max-w-full">
                            <Image
                                src={imgKiosk}
                                alt="Square Kiosk"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="bg-white text-neutral-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
                    <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
                        {/* 1 */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="max-w-[34ch]"
                        >
                            <EmojiEmotionsOutlinedIcon className="w-10 h-10" />
                            <h3 className="mt-6 font-serif text-4xl md:text-[40px] leading-[1.1]">
                                Affordable, easy setup
                            </h3>
                            <p className="mt-5 text-lg text-neutral-600">
                                For real. No costly service visits. No pricey installation fees. Just add an
                                iPad and set up your kiosk entirely on your own.
                            </p>

                            <Link
                                href="#"
                                className="mt-8 inline-flex items-center gap-2 font-semibold text-neutral-900 hover:opacity-80"
                            >
                                <span>See compatible iPads</span>
                                <span className="text-2xl leading-none">+</span>
                            </Link>
                        </motion.div>

                        {/* 2 */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="max-w-[34ch]"
                        >
                            <BoltOutlinedIcon className="w-10 h-10" />
                            <h3 className="mt-6 font-serif text-4xl md:text-[40px] leading-[1.1]">
                                Stays powered unplugged
                            </h3>
                            <p className="mt-5 text-lg text-neutral-600">
                                If you lose power or need to unplug, Square Kiosk can run off iPad battery.
                                iPad powered mode is only available on Square Kiosk (USB-C).
                            </p>
                        </motion.div>

                        {/* 3 */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="max-w-[34ch]"
                        >
                            <FitScreenOutlinedIcon className="w-10 h-10" />
                            <h3 className="mt-6 font-serif text-4xl md:text-[40px] leading-[1.1]">
                                Flexes to fit in your space
                            </h3>
                            <p className="mt-5 text-lg text-neutral-600">
                                With multiple mounting options and a compact design, this self-serve kiosk
                                adapts to fit your space and business.
                            </p>
                        </motion.div>

                        {/* 4 */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="max-w-[34ch]"
                        >
                            <AppsOutlinedIcon className="w-10 h-10" />
                            <h3 className="mt-6 font-serif text-4xl md:text-[40px] leading-[1.1]">
                                A kiosk solution by Square
                            </h3>
                            <p className="mt-5 text-lg text-neutral-600">
                                Simply pair Square Kiosk hardware and the Square Kiosk app (additional fees
                                apply) with your primary Square POS hardware.
                                <sup className="ml-0.5 align-super text-xs">1</sup>
                            </p>

                            <Link
                                href="#"
                                className="mt-8 inline-flex items-center gap-2 font-semibold text-neutral-900 hover:opacity-80"
                            >
                                <span>Learn about the Square Kiosk app</span>
                                <span className="text-xl">↗</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
            <KioskMountShowcase />
            <section className="bg-white text-neutral-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-24">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* LEFT */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <h2 className="font-serif text-5xl sm:text-6xl leading-[1.05]">
                                Get the Square Kiosk<br /> app and beat the rush.
                            </h2>

                            <p className="mt-6 text-[17px] leading-7 text-neutral-700 max-w-[58ch]">
                                With a Square Kiosk app subscription, your front of house and back of house
                                stay in sync with instant menu updates and real-time sales data.
                                No third-party software needed.
                            </p>

                            <Link
                                href="#"
                                className="mt-10 inline-flex items-center gap-2 font-semibold hover:opacity-80"
                            >
                                <span>Learn more</span>
                                <span className="text-xl">↗</span>
                            </Link>
                        </motion.div>

                        {/* RIGHT — device frame */}
                        <motion.div
                            variants={floatIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="relative"
                        >
                            {/* Outer device body */}
                            <div className="relative rounded-[56px] bg-neutral-900/95 shadow-[0_25px_80px_rgba(0,0,0,0.25)] p-4 sm:p-6 md:p-8">
                                {/* Inner bezel */}
                                <div className="rounded-[36px] bg-neutral-800 p-2 sm:p-3 md:p-4">
                                    {/* Screen */}
                                    <div className="relative rounded-3xl bg-white overflow-hidden">
                                        <div className="relative aspect-video w-full">
                                            <Image
                                                src={imgKiosk}
                                                alt="Kiosk app screen"
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Camera / sensor nốt nhỏ để giống thiết bị */}
                                <span className="absolute right-8 top-8 h-4 w-4 rounded-full bg-neutral-700/60" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="bg-white text-neutral-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-24 space-y-16 lg:space-y-24">
                    {/* Processing fees card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="rounded-3xl bg-neutral-100 p-6 sm:p-10 lg:p-14"
                    >
                        <div className="grid gap-10 lg:grid-cols-3">
                            {/* Col 1 */}
                            <div>
                                <h2 className="font-serif text-5xl sm:text-6xl leading-[1.05]">
                                    Processing fees
                                </h2>

                                <div className="mt-8">
                                    <div className="text-4xl sm:text-5xl font-semibold">
                                        2.5% + 15¢
                                    </div>
                                    <p className="mt-3 text-neutral-600">
                                        per tap, dip, or swipe with Square Plus.
                                    </p>
                                </div>
                            </div>

                            {/* Col 2 */}
                            <div className="lg:pt-[52px]">
                                <div className="text-4xl sm:text-5xl font-semibold">6% + 30¢</div>
                                <p className="mt-3 text-neutral-600">
                                    per Cash App Afterpay transaction.
                                </p>
                            </div>

                            {/* Col 3 */}
                            <div className="lg:pt-2.5">
                                <h3 className="text-4xl sm:text-[40px] leading-[1.1] font-semibold">
                                    Get a custom rate
                                </h3>
                                <p className="mt-4 text-neutral-700">
                                    Some businesses that process $250K+ per year in credit card sales can get
                                    custom pricing and processing fees.{" "}
                                    <Link href="#" className="underline underline-offset-2">
                                        Connect with us
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3 features row */}
                    <div className="grid gap-14 lg:grid-cols-3">
                        {/* One-year warranty */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="max-w-[44ch]"
                        >
                            <CheckCircleOutlineIcon className="h-11 w-11" />
                            <h3 className="mt-5 text-3xl sm:text-4xl font-semibold">
                                One-year warranty
                            </h3>
                            <p className="mt-4 text-neutral-700">
                                Square Kiosk hardware gets up and running fast, but if you run into anything
                                on the way, there’s a one-year warranty.
                            </p>
                        </motion.div>

                        {/* Works with your iPad */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="max-w-[44ch]"
                        >
                            <RocketLaunchOutlinedIcon className="h-11 w-11" />
                            <h3 className="mt-5 text-3xl sm:text-4xl font-semibold">
                                Works with your iPad
                            </h3>
                            <p className="mt-4 text-neutral-700">
                                Square Kiosk is instantly intuitive. Use a{" "}
                                <Link href="#" className="underline underline-offset-2">
                                    compatible iPad
                                </Link>{" "}
                                you already own or add one to cart as you check out.
                            </p>
                        </motion.div>

                        {/* Help along the way */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="max-w-[44ch]"
                        >
                            <SupportAgentOutlinedIcon className="h-11 w-11" />
                            <h3 className="mt-5 text-3xl sm:text-4xl font-semibold">
                                Help along the way
                            </h3>
                            <p className="mt-4 text-neutral-700">
                                The{" "}
                                <Link href="#" className="underline underline-offset-2">
                                    Square Kiosk Guide
                                </Link>{" "}
                                has instructions and helpful FAQ. Or chat with{" "}
                                <Link href="#" className="underline underline-offset-2">
                                    customer support
                                </Link>{" "}
                                for help when you need it.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <HardwareGrid cards={CARDS} fadeUp={fadeUp} stagger={stagger} />;
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
        </main>

    )
}

export default DigitalScreenPage;