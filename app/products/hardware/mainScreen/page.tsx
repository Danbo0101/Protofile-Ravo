"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

import { send } from "emailjs-com";
import { toast } from "sonner";

import CheckIcon from '@mui/icons-material/Check';
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PaidIcon from "@mui/icons-material/Paid";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GroupsIcon from "@mui/icons-material/Groups";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

import imgMainScreen from "@/app/assets/imgMainScreen.png";
import imgMainScreen1 from "@/app/assets/imgMainScreen1.png";
import imgTapPay from "@/app/assets/imgTapPay.png";
import imgTurn from "@/app/assets/imgTurn.png";
import imgCheckMainScreen from "@/app/assets/imgCheckMainScreen.png";
import imgPayroll from "@/app/assets/imgPayroll.png";
import imgAppt from "@/app/assets/imgAppt.png";
import imgCheck from "@/app/assets/imgCheck.png";
import imgDigital from "@/app/assets/imgDigital.png";
import imgTerminal from "@/app/assets/imgTerminal.png";

import AccordionItem from "@/app/components/AccordionItem";
import HardwareGrid from "@/app/components/HardwareGrid";
import { stagger, fadeUp, EASE_OUT } from "@/app/components/variants";

type Tab = {
    id: string;
    label: string;
    heading: string;
    title: string;
    intro: string;
    bullets: string[];
    footer?: string;
    cta: string;
    img: any; // static import
    imgAlt: string;
};

type Tile = { label: string; Icon: any; bg: string };

const slide: Variants = {
    hidden: (dir: 1 | -1) => ({ opacity: 0, x: 28 * dir }),
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: EASE_OUT },
    },
    exit: (dir: 1 | -1) => ({
        opacity: 0,
        x: -28 * dir,
        transition: { duration: 0.35, ease: EASE_OUT },
    }),
};

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

const TARGET_EMAIL = "nguyenhuutho029@gmail.com";

const TABS: Tab[] = [
    {
        id: "turn",
        label: "Turn Management",
        heading: "Turn Management That Matches Your Salon",
        title: "Turn Management That Matches Your Salon",
        intro:
            "Every salon handles turns differently. RAVO adapts to your method, so you don’t have to change the way you work. Avoid conflicts, keep techs happy. The system clearly shows who’s next, why, and what’s assigned — reducing front-desk disputes and keeping the day moving.",
        bullets: [
            "FIFO (first-in, first-out): Fair, transparent order for walk-ins.",
            "Clock-in time: Reward early starters and promote punctuality.",
            "Turn credit: Flexible credits for seniority, specialty services, or workload balancing.",
        ],
        cta: "Learn more ↗",
        img: imgTurn,
        imgAlt: "RAVO Turn Management",
    },
    {
        id: "check",
        label: "Check-In & Check-Out",
        heading: "Check-In & Check-Out That Don’t Slow You Down",
        title: "Check-In & Check-Out That Don’t Slow You Down",
        intro:
            "RAVO’s point of sale system for nail salon teams speeds up the high-traffic moments of your day.",
        bullets: [
            "Fast check-in: Search by name/phone, add walk-ins, assign techs, and capture services in seconds.",
            "Smart queue: Real-time status of who’s waiting, who’s in service, and who’s ready to pay.",
            "Lightning check-out: Tips, add-ons, promos, and gift cards handled quickly and accurately.",
            "Benefits you’ll feel: Shorter lines, fewer errors, more satisfied clients — and a front desk that finally keeps up with demand.",
        ],
        cta: "Learn more ↗",
        img: imgCheckMainScreen,
        imgAlt: "RAVO Check-In POS",
    },
    {
        id: "payroll",
        label: "Payroll",
        heading: "Payroll Calculations in Minutes",
        title: "Payroll Calculations in Minutes",
        intro:
            "Payroll shouldn’t be a job. With RAVO, you can run payroll in minutes, even with complex salon rules.",
        bullets: [
            "Commission & tips: Individual tips, pooling, tiered commissions, service/add-on splits. Configured to your policy.",
            "Employee types: Salary, hourly, piece work, or commission — we handle the math.",
            "Accurate reports: Instant payroll summaries that your accountant will love.",
            "Fewer errors: Automation reduces re-runs, disputes, and time wasted.",
        ],
        cta: "Learn more ↗",
        img: imgPayroll,
        imgAlt: "RAVO Payroll System",
    },
    {
        id: "booking",
        label: "Appointments",
        heading: "24/7 Online Appointment Booking",
        title: "24/7 Online Appointment Booking",
        intro:
            "Let clients book when it’s convenient for them. RAVO’s online appointment tool connects directly to your POS.",
        bullets: [
            "Real-time sync: Appointments update instantly — no over-booking.",
            "Less phone time: Free your front desk to serve in-store clients.",
            "More new clients: Capture bookings from Google, social media, and your website.",
        ],
        cta: "Learn more ↗",
        img: imgAppt,
        imgAlt: "RAVO Appointment Booking",
    },
];

const TILES: Tile[] = [
    { label: "Ravo Online Store", Icon: StorefrontIcon, bg: "bg-blue-500" },
    { label: "Ravo Payroll", Icon: PaidIcon, bg: "bg-green-500" },
    { label: "Ravo Gift Cards", Icon: CardGiftcardIcon, bg: "bg-purple-500" },
    { label: "Ravo Team", Icon: GroupsIcon, bg: "bg-sky-500" },
    { label: "Ravo Loyalty", Icon: LoyaltyIcon, bg: "bg-violet-500" },
    { label: "Ravo Invoices", Icon: ReceiptLongIcon, bg: "bg-indigo-500" },
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


const MainScreenPage = () => {

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


    const [active, setActive] = useState(0);
    const [prev, setPrev] = useState(0);
    const tab = TABS[active];
    const dir: 1 | -1 = active > prev ? 1 : -1;

    const onSelect = (i: number) => {
        if (i === active) return;
        setPrev(active);
        setActive(i);
    };

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="bg-white w-full min-h-screen text-white">
            <section className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={imgMainScreen}
                        alt="RAVO POS Main Screen Background"
                        fill
                        priority
                        className="object-[80%_90%] object-cover sm:object-center"
                        sizes="100vw"
                    />


                    <div className="absolute inset-0 bg-linear-to-b from-black/70 sm:from-black/50 via-black/45 sm:via-black/20 to-white/5 sm:to-white/20" />
                </div>
                <div className="z-10 relative flex items-center mx-auto px-6 md:px-12 max-w-7xl h-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <p className="mb-4 font-mono text-white/60 text-xs md:text-sm uppercase tracking-[0.18em]">
                            RAVO Main Screen
                        </p>

                        <h1 className="font-serif font-semibold text-4xl lg:text-6xl text-balance leading-tight">
                            A fully-integrated POS register
                            <br />
                            <span className="text-white/90">built for nail salons.</span>
                        </h1>

                        <p className="mt-6 font-light text-[15px] text-white/70 md:text-lg leading-relaxed">
                            Handle check-in/out, payments, commissions, memberships, and reports —
                            all in one clean, intuitive interface designed for modern salons.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-10">
                            <Link
                                href="tel:+13463267765"
                                className="hover:bg-white px-6 md:px-8 py-2 md:py-3 border border-white/60 rounded-full font-bold text-white hover:text-black text-sm md:text-base hover:scale-105 transition-all duration-300"
                            >
                                Connect with me
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="bottom-0 absolute inset-x-0 bg-linear-to-t from-white/20 via-white/10 to-transparent h-48 pointer-events-none" />
            </section>
            <section className="px-4 sm:px-8 lg:px-20 py-12 sm:py-14 w-full text-black">
                <section className="mx-auto px-2 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 max-w-6xl">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center"
                    >
                        <h1 className="font-serif font-semibold text-3xl md:text-6xl leading-snug sm:leading-tight tracking-tight">
                            Our Powerful Point of Sale System
                        </h1>
                        <p className="mx-auto mt-10 sm:mt-6 max-w-3xl text-[15px] text-neutral-600 sm:text-[17px] leading-relaxed">
                            Your success is our focus. RAVO’s{" "}
                            <span className="font-medium">nail salon point of sale system</span>
                            {" "}keeps check-in lines short and finances clear. Combining{" "}
                            <strong>integrated payments</strong>,
                            <strong> effortless turn management</strong>, and{" "}
                            <strong>payroll in minutes</strong>, so your team
                            can focus on clients and your business can grow with confidence.
                        </p>
                    </motion.div>
                </section>

                <section className="mx-auto px-2 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28 max-w-7xl">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="items-center gap-10 lg:gap-12 grid lg:grid-cols-2"
                    >
                        <motion.figure
                            variants={fadeUp}
                            className="relative mx-auto w-full lg:max-w-none max-w-md overflow-hidden"
                        >
                            <div className="relative aspect-4/3 sm:aspect-square">
                                <Image
                                    src={imgMainScreen1}
                                    alt="RAVO POS System"
                                    fill
                                    priority
                                    className="p-4 sm:p-6 object-contain"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </motion.figure>
                        <motion.div variants={fadeUp} className="lg:pl-4">
                            <h2 className="font-serif font-semibold md:text-[34px] text-2xl tracking-tight">
                                See More. Do More.
                            </h2>
                            <p className="mt-2 font-medium text-neutral-500 text-sm md:text-base">
                                Bigger RAVO POS Screen
                            </p>

                            <p className="mt-4 text-[15px] text-neutral-900 sm:text-[18px] leading-relaxed">
                                Get more done on a bigger screen. Technicians and managers can
                                view service menus, client profiles, ticket details, tips, and
                                commissions without constantly switching windows.
                            </p>

                            <ul className="space-y-3 sm:space-y-4 mt-6 sm:mt-8 text-[15px] text-neutral-800 md:text-[17px]">
                                <li className="flex items-start gap-3">
                                    <CheckIcon
                                        className="mt-0.5 shrink-0"
                                        fontSize="small"
                                    />
                                    <span>
                                        <strong>Faster decisions:</strong> Key information in one view.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckIcon
                                        className="mt-0.5 shrink-0"
                                        fontSize="small"
                                    />
                                    <span>
                                        <strong>Fewer clicks:</strong> Less time hunting, more time
                                        helping clients.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckIcon
                                        className="mt-0.5 shrink-0"
                                        fontSize="small"
                                    />
                                    <span>
                                        <strong>Smoother training:</strong> Clear layout keeps the
                                        learning curve short.
                                    </span>
                                </li>
                            </ul>

                            <p className="mt-6 sm:mt-8 text-[15px] text-neutral-600 sm:text-[17px] italic leading-relaxed">
                                Result: a front desk that feels calm, even when the salon is busy.
                            </p>
                        </motion.div>
                    </motion.div>
                </section>

                <div className="mx-auto mt-8 sm:mt-10 border-neutral-200 border-t max-w-5xl" />
            </section>
            <section className="px-4 sm:px-6 lg:px-20 pt-14 sm:pt-16 pb-16 w-full text-black">
                <motion.section
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="flex flex-col items-center gap-4 w-full"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="font-serif font-extrabold text-3xl md:text-6xl text-center leading-snug sm:leading-[1.1] tracking-tight"
                    >
                        Learn more about what
                        <br className="hidden sm:block" /> RAVO can do for you.
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mt-4 sm:mt-6 max-w-2xl text-black/70 text-base sm:text-lg text-center"
                    >
                        Join our mailing list to get insights, updates, and smart tools that help your nail salon work faster and grow effortlessly.
                    </motion.p>

                    <motion.form
                        variants={fadeUp}
                        onSubmit={onSubmit}
                        className="mt-5 sm:mt-6 w-full max-w-3xl"
                        aria-label="Join our mailing list"
                    >
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>

                        <div className="group flex sm:flex-row flex-col items-stretch sm:items-center gap-2 sm:gap-3 bg-white p-1.5 sm:p-1 md:border border-black/15 focus-within:border-black/40 rounded-md">
                            <input
                                id="email"
                                type="email"
                                placeholder="Email address"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                className="flex-1 px-3 sm:px-4 py-4 md:py-0 border border-black/15 md:border-0 rounded-md outline-none w-full h-11 sm:h-12 text-sm sm:text-base"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex justify-center items-center bg-black hover:bg-white hover:opacity-90 disabled:opacity-50 px-4 sm:px-5 rounded-md w-full sm:w-auto h-11 sm:h-12 font-semibold text-white hover:text-black text-sm hover:scale-105 transition cursor-pointer disabled:cursor-not-allowed shrink-0"
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>
                        </div>
                    </motion.form>

                    <motion.p
                        variants={fadeUp}
                        className="mt-3 max-w-md text-[11px] text-black/50 sm:text-xs text-center"
                    >
                        *This information may be transcribed, used, and stored by third parties in
                        accordance with our{" "}
                        <span
                            className="hover:text-black underline cursor-pointer"
                            onClick={() => window.open("/policies/privacy/", "_blank")}
                        >
                            Privacy Policy
                        </span>
                        .
                    </motion.p>
                </motion.section>
                <motion.section
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mx-auto mt-10 sm:mt-12 px-0 sm:px-2 pb-4 sm:pb-8 w-full max-w-6xl"
                >
                    <motion.div
                        variants={fadeUp}
                        className="bg-black/2 p-3 sm:p-6 border border-black/10 rounded-2xl"
                    >
                        <div className="items-center gap-6 md:gap-10 grid grid-cols-1 md:grid-cols-2">
                            <motion.div
                                variants={fadeUp}
                                className="relative rounded-xl w-full aspect-16/11 overflow-hidden"
                            >
                                <Image
                                    src={imgTapPay}
                                    alt="Cash App Pay at the counter"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                            <motion.div variants={fadeUp} className="py-1 sm:py-2">
                                <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl tracking-tight">
                                    RAVO Tap-to-Pay
                                </h2>

                                <p className="mt-3 text-black/70 text-sm sm:text-base leading-7">
                                    Soon, your clients will be able to <span className="font-medium text-black">tap their phone to pay directly in the RAVO App</span> — fast, contactless, and effortless. A modern checkout experience designed for busy salons.
                                </p>

                                <p className="mt-2 font-semibold text-black/80 text-sm sm:text-base">
                                    Launching soon.
                                </p>
                            </motion.div>

                        </div>
                    </motion.div>
                </motion.section>
            </section>
            <section className="bg-[#f2f2f2] py-12 sm:py-14 w-full min-h-screen text-black">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="mx-auto px-4 sm:px-6 pt-12 sm:pt-16 max-w-6xl"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="pb-8 sm:pb-10 font-serif font-extrabold text-3xl md:text-6xl text-center leading-snug sm:leading-[1.08] tracking-tight"
                    >
                        RAVO POS System Features
                    </motion.h1>

                    <div className="mx-auto mt-4 sm:mt-6 w-full max-w-xl">
                        <div className="relative">
                            {/* Thanh tab */}
                            <div className="flex items-center gap-2 sm:gap-3 bg-black/5 p-1.5 sm:p-2 rounded-full w-full sm:overflow-visible overflow-x-auto no-scrollbar">
                                {TABS.map((t, i) => {
                                    const selected = i === active;
                                    return (
                                        <button
                                            key={t.id}
                                            onClick={() => onSelect(i)}
                                            className={[
                                                "cursor-pointer rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-[13px] sm:text-sm transition whitespace-nowrap",
                                                "shrink-0",
                                                selected
                                                    ? "bg-white font-semibold shadow-sm text-black ring-1 ring-black/5"
                                                    : "text-black/70 hover:bg-white/70 hover:text-black",
                                            ].join(" ")}
                                        >
                                            {t.label}
                                        </button>
                                    );
                                })}
                            </div>
                            {TABS.length > 3 && (
                                <div className="sm:hidden right-0 absolute inset-y-0 bg-linear-to-l from-[#f2f2f2] to-transparent rounded-full w-10 pointer-events-none" />
                            )}
                        </div>
                        {TABS.length > 3 && (
                            <p className="sm:hidden mt-1 text-[11px] text-black/40 text-center">
                                Swipe để xem thêm tab →
                            </p>
                        )}
                    </div>


                </motion.div>
                <div className="items-center gap-8 sm:gap-10 md:gap-12 grid grid-cols-1 md:grid-cols-2 mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-14 sm:pb-16 max-w-6xl">
                    <div className="relative order-1">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={tab.id}
                                custom={dir}
                                variants={slide}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="mx-auto md:mx-0 max-w-xl text-left"
                            >
                                <h2 className="font-semibold text-2xl md:text-3xl">
                                    {tab.title}
                                </h2>

                                <p className="mt-3 sm:mt-4 text-[15px] text-black/75 md:text-base leading-7">
                                    {tab.intro}
                                </p>

                                <ul className="space-y-3 mt-5 sm:mt-6">
                                    {tab.bullets.map((b, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="inline-flex mt-1 shrink-0">
                                                <RadioButtonCheckedIcon fontSize="small" />
                                            </span>
                                            <span className="text-[15px] md:text-base leading-7">
                                                {b}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="relative order-2 mt-6 md:mt-0">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={`${tab.id}-img`}
                                custom={dir}
                                variants={slide}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="relative mx-auto w-full max-w-[720px]"
                            >
                                <div className="relative shadow-[0_10px_40px_rgba(0,0,0,0.25)] rounded-[28px]">
                                    <div className="relative bg-black rounded-[22px] w-full aspect-video overflow-hidden">
                                        <Image
                                            src={tab.img}
                                            alt={tab.imgAlt}
                                            fill
                                            sizes="(min-width: 1024px) 640px, 100vw"
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <section className="w-full text-black">
                <div className="space-y-20 mx-auto px-6 sm:px-8 py-16 lg:py-28 max-w-6xl">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="space-y-6 text-center"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="font-extrabold text-4xl sm:text-6xl leading-tight sm:leading-[1.1] tracking-tight"
                        >
                            Simplify your salon operations with
                            <br className="hidden sm:block" />
                            {" "}RAVO’s smart - connected tools
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mx-auto mt-6 max-w-3xl text-[17px] text-black/70 leading-relaxed"
                        >
                            From day one, RAVO helps your business run smoother — with built-in features made for salons and seamless integrations . Find the perfect tools to grow your business, all in one system.
                        </motion.p>

                        {/* <motion.div variants={fadeUp}>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 hover:opacity-70 mt-8 font-semibold text-[15px] text-black"
                                aria-label="Learn more about RAVO App Marketplace"
                            >
                                Learn more about RAVO App Marketplace
                                <ArrowOutwardIcon fontSize="small" />
                            </Link>
                        </motion.div> */}
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        className="gap-x-6 gap-y-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mt-14"
                    >
                        {TILES.map(({ label, Icon, bg }) => (
                            <motion.div key={label} variants={fadeUp} className="group flex flex-col items-center text-center">
                                <motion.div
                                    whileHover={{ y: -6, scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.25, ease: EASE_OUT }}
                                    className={`cursor-pointer grid h-16 w-16 place-items-center rounded-2xl text-white shadow-sm ${bg}`}
                                    aria-hidden
                                >
                                    <Icon fontSize="medium" />
                                </motion.div>
                                <motion.span
                                    variants={fadeUp}
                                    className="mt-3 text-black/80 text-sm"
                                >
                                    {label}
                                </motion.span>
                            </motion.div>
                        ))}
                    </motion.div>
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
    );
};


export default MainScreenPage;
