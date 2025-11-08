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
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PaidIcon from "@mui/icons-material/Paid";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GroupsIcon from "@mui/icons-material/Groups";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

import imgMainScreen from "@/app/assets/imgMainScreen.png";
import imgMainScreen1 from "@/app/assets/imgMainScreen1.png";
import imgQRPayment from "@/app/assets/imgQRPayment.png";
import imgTurn from "@/app/assets/imgTurn.png";
import imgCheckMainScreen from "@/app/assets/imgCheckMainScreen.png";
import imgPayroll from "@/app/assets/imgPayroll.png";
import imgAppt from "@/app/assets/imgAppt.png";
import imgCheck from "@/app/assets/imgCheck.png";
import imgDigital from "@/app/assets/imgDigital.png";
import imgTerminal from "@/app/assets/imgTerminal.png";

import AccordionItem from "@/app/components/AccordionItem";

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

type Card = {
    eyebrow: string;
    title: string;
    blurb: string;
    href: string;
    img: string;
    imgAlt: string;
};

const CARDS: Card[] = [
    {
        eyebrow: "Terminal",
        title: "Compact countertop POS built for speed and style",
        blurb: "",
        href: "/hardware/stand",
        img: imgTerminal.src,
        imgAlt: "Terminal",
    },
    {
        eyebrow: "Digital Screen",
        title: "Smart display that engages clients and boosts visibility",
        blurb: "",
        href: "/hardware/kiosk",
        img: imgDigital.src,
        imgAlt: "Digital Screen",
    },
    {
        eyebrow: "CheckIn - CheckOut Screen",
        title: "Portable all-in-one system for seamless client flow",
        blurb: "",
        href: "/hardware/terminal",
        img: imgCheck.src,
        imgAlt: "CheckIn-CheckOut POS",
    },
];


const TARGET_EMAIL = "nguyenhuutho029@gmail.com";

const EASE_OUT: Transition["ease"] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE_OUT },
    },
};

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

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
        <main className="min-h-screen w-full bg-white text-white">
            <section className="relative h-screen min-h-[620px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={imgMainScreen}
                        alt="RAVO POS Main Screen Background"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-white/20" />
                </div>
                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <p className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-white/60">
                            RAVO Main Screen
                        </p>

                        <h1 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                            A fully-integrated POS register
                            <br />
                            <span className="text-white/90">built for nail salons.</span>
                        </h1>

                        <p className="mt-6 font-light text-lg leading-relaxed text-white/70">
                            Handle check-in/out, payments, commissions, memberships, and reports —
                            all in one clean, intuitive interface designed for modern salons.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <Link
                                href="/contact"
                                className="rounded-full border border-white/60 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:scale-105 hover:text-black"
                            >
                                Connect with me
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-white/20 via-white/10 to-transparent" />
            </section>
            <section className="w-full px-20 py-14  text-black">
                <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-24">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center"
                    >
                        <h1 className="font-semibold font-serif tracking-tight text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Our Powerful Point of Sale System
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-relaxed text-neutral-600">
                            Your success is our focus. RAVO’s <span className="font-medium">nail salon point of sale system</span>
                            keeps check-in lines short and finances clear. Combining <strong>integrated payments</strong>,
                            <strong> effortless turn management</strong>, and <strong>payroll in minutes</strong>, so your team
                            can focus on clients and your business can grow with confidence.
                        </p>
                    </motion.div>
                </section>
                <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:pb-28">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid items-center gap-12 lg:grid-cols-2"
                    >
                        <motion.figure
                            variants={fadeUp}
                            className="relative w-full overflow-hidden"
                        >
                            <div className="relative aspect-video">
                                <Image
                                    src={imgMainScreen1}
                                    alt="RAVO POS System"
                                    fill
                                    priority
                                    className="object-contain p-6"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </motion.figure>
                        <motion.div variants={fadeUp} className="lg:pl-4">
                            <h2 className="text-3xl font-semibold font-serif tracking-tight sm:text-[34px]">
                                See More. Do More.
                            </h2>
                            <p className="mt-2 text-base font-medium text-neutral-500">
                                Bigger RAVO POS Screen
                            </p>

                            <p className="mt-4 text-[18px] leading-relaxed text-neutral-900">
                                Get more done on a bigger screen. Technicians and managers can
                                view service menus, client profiles, ticket details, tips, and
                                commissions without constantly switching windows.
                            </p>

                            <ul className="mt-8 space-y-4 text-[17px] text-neutral-800">
                                <li className="flex items-start gap-3">
                                    <CheckIcon
                                        className="mt-0.5 shrink-0 "
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

                            <p className="mt-8 text-[17px] leading-relaxed text-neutral-600 italic">
                                Result: a front desk that feels calm, even when the salon is busy.
                            </p>
                        </motion.div>
                    </motion.div>
                </section>
                <div className="max-w-5xl mx-auto border-t border-neutral-200 mt-10" />
            </section>
            <section className="min-h-screen w-full  text-black">
                <motion.section
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="w-full flex flex-col items-center gap-4 px-6 pt-16 pb-12 sm:pt-20"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="text-4xl font-serif font-extrabold leading-tight tracking-tight sm:text-6xl sm:leading-[1.1]"
                    >
                        Learn more about what
                        <br className="hidden sm:block" /> Square can do for you.
                    </motion.h1>

                    <motion.p variants={fadeUp} className="mt-6 text-lg text-black/70">
                        Join our mailing list for more information about how Square’s solutions can
                        serve your entire business.
                    </motion.p>

                    <motion.form
                        variants={fadeUp}
                        onSubmit={onSubmit}
                        className="mt-6 w-full max-w-3xl"
                        aria-label="Join our mailing list"
                    >
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>

                        <div className="group flex items-center gap-3 rounded-md border border-black/15 bg-white p-1 focus-within:border-black/40">
                            <input
                                id="email"
                                type="email"
                                placeholder="Email address"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                className="h-11 w-full flex-1 rounded-md px-4 text-base outline-none"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex cursor-pointer h-11 shrink-0 items-center justify-center rounded-md bg-black px-5 text-sm font-semibold text-white transition hover:scale-105 hover:text-black hover:bg-white hover:border hover:border-black hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>
                        </div>
                    </motion.form>

                    <motion.p variants={fadeUp} className="mt-3 text-xs text-black/50">
                        *This information may be transcribed, used, and stored by third parties in
                        accordance with our <span
                            className="underline hover:text-black cursor-pointer"
                            onClick={() => window.open("/privacy", "_blank")}
                        >Privacy Policy</span>.
                    </motion.p>
                </motion.section>
                <motion.section
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mx-auto max-w-6xl px-6 pb-20"
                >
                    <motion.div
                        variants={fadeUp}
                        className="rounded-2xl border border-black/10 bg-black/2 p-4 sm:p-6"
                    >
                        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
                            <motion.div
                                variants={fadeUp}
                                className="relative aspect-16/11 w-full overflow-hidden rounded-xl"
                            >
                                <Image
                                    src={imgQRPayment}
                                    alt="Cash App Pay at the counter"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                            {/* Text */}
                            <motion.div variants={fadeUp} className="py-2">
                                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                    Take Cash App pay, too
                                </h2>
                                <p className="mt-3 text-base leading-7 text-black/70">
                                    It’s fast, simple, and connects you with a network of 70+ million
                                    customers who discover new businesses like yours every day.
                                </p>
                                <p className="mt-1 text-base leading-7 text-black/70">Every day.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.section>
            </section>
            <section className="min-h-screen w-full py-14 bg-[#f2f2f2] text-black">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="mx-auto max-w-6xl px-6 pt-16 sm:pt-20"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="text-center pb-10 font-serif text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl sm:leading-[1.08]"
                    >
                        RAVO POS System Features
                    </motion.h1>

                    <div className="mx-auto mt-6 flex w-full max-w-xl items-center justify-center gap-3 rounded-full bg-black/5 p-2">
                        {TABS.map((t, i) => {
                            const selected = i === active;
                            return (
                                <button
                                    key={t.id}
                                    onClick={() => onSelect(i)}
                                    className={[
                                        "cursor-pointer rounded-full px-4 py-2 text-sm transition",
                                        selected
                                            ? "bg-white font-semibold shadow-sm"
                                            : "text-black/70 hover:bg-white/60",
                                    ].join(" ")}
                                >
                                    {t.label}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-10 sm:gap-12 sm:pt-14 md:grid-cols-2">
                    <div className="relative">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={tab.id}
                                custom={dir}
                                variants={slide}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="max-w-xl"
                            >
                                <h2 className="text-2xl font-semibold sm:text-3xl">
                                    {tab.title}
                                </h2>

                                <p className="mt-4 text-base leading-7 text-black/75">
                                    {tab.intro}
                                </p>

                                <ul className="mt-6 space-y-3">
                                    {tab.bullets.map((b, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="mt-1 inline-flex">
                                                <RadioButtonCheckedIcon fontSize="small" />
                                            </span>
                                            <span className="text-base leading-7">{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* <button className="mt-6 inline-flex items-center gap-1 rounded-full border border-black px-5 py-2 text-sm font-medium transition hover:-translate-y-0.5">
                                    {tab.cta}
                                </button> */}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="relative">
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
                                <div className="relative rounded-[28px]  shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                                    <div className="relative aspect-video w-full overflow-hidden rounded-[22px] bg-black">
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
            <section className="w-full  text-black">
                <div className="mx-auto max-w-6xl space-y-20 px-6 py-16 sm:px-8 lg:py-28">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="text-center space-y-6"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl sm:leading-[1.1]"
                        >
                            Simplify your salon operations with
                            <br className="hidden sm:block" />
                            {" "}RAVO’s smart - connected tools
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mx-auto mt-6 max-w-3xl text-[17px] leading-relaxed text-black/70"
                        >
                            From day one, RAVO helps your business run smoother — with built-in features made for salons and seamless integrations . Find the perfect tools to grow your business, all in one system.
                        </motion.p>

                        {/* <motion.div variants={fadeUp}>
                            <Link
                                href="#"
                                className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-black hover:opacity-70"
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
                        className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
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
                                    className="mt-3 text-sm text-black/80"
                                >
                                    {label}
                                </motion.span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <section className="w-full bg-neutral-50 py-16 text-black sm:py-20">
                <div className="mx-auto max-w-7xl px-6 sm:px-8">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-center font-serif text-4xl font-extrabold tracking-tight sm:text-5xl py-10"
                    >
                        Other hardware options
                    </motion.h2>
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {CARDS.map((c) => (
                            <Link
                                key={c.href}
                                href={c.href}
                                className="group block cursor-pointer"
                            >
                                <motion.article
                                    variants={fadeUp}
                                    className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-transform duration-300 group-hover:-translate-y-1"
                                >
                                    <div className="text-sm font-medium text-neutral-500">
                                        {c.eyebrow}
                                    </div>

                                    <h3 className="mt-2 text-2xl font-semibold leading-snug">
                                        {c.title}
                                    </h3>
                                    <div className="relative mt-8 h-48 w-full">
                                        <Image
                                            src={c.img}
                                            alt={c.imgAlt}
                                            fill
                                            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                                            className="object-contain"
                                            priority={false}
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
    );
};


export default MainScreenPage;
