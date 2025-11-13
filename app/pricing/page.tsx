"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import PreviewTextBorderBox from "@/app/components/TextBorderBox";
import { fadeUp, fadeIn, floatIn, EASE_OUT } from "@/app/components/variants";

type BillingCycle = "monthly" | "yearly";
type TierKey = "free" | "bronze" | "silver" | "gold";

type Tier = {
    key: TierKey;
    label: string;
    price: string;
    per: string;
    blurb?: string;
    tapDipSwipe: string;
    online: string;
    features: string[];
    cta: string;
    badge?: "Best value" | "Popular";
};

const PRICING: Record<BillingCycle, Tier[]> = {
    monthly: [
        {
            key: "free",
            label: "Free",
            price: "$0",
            per: "/mo",
            blurb: "Essentials to sell anywhere. Only pay per transaction.",
            tapDipSwipe: "2.6% + 15¢",
            online: "3.3% + 30¢",
            features: [
                "POS app for any payment",
                "Online site",
                "Item library",
                "Invoicing",
                "Booking",
                "Checking & savings accounts",
            ],
            cta: "Get started",
        },
        {
            key: "bronze",
            label: "Bronze",
            price: "$29",
            per: "/mo",
            blurb: "Core tools for small shops with light automation.",
            tapDipSwipe: "2.6% + 10¢",
            online: "3.1% + 25¢",
            features: [
                "Everything in Free",
                "POS features for every industry",
                "Lower processing fees",
                "Email marketing (lite)",
                "Basic staff management",
            ],
            cta: "Try free for 30 days",
            badge: "Popular",
        },
        {
            key: "silver",
            label: "Silver",
            price: "$79",
            per: "/mo",
            blurb: "Loyalty + text campaigns + advanced reporting.",
            tapDipSwipe: "2.5% + 10¢",
            online: "2.9% + 30¢",
            features: [
                "Everything in Bronze",
                "Loyalty rewards program",
                "Email & SMS marketing",
                "Advanced staff management",
                "Custom reports",
            ],
            cta: "Try free for 30 days",
            badge: "Best value",
        },
        {
            key: "gold",
            label: "Gold",
            price: "$149",
            per: "/mo",
            blurb: "Advanced features + priority support to scale.",
            tapDipSwipe: "2.4% + 10¢",
            online: "2.9% + 30¢",
            features: [
                "Everything in Silver",
                "24/7 priority support",
                "Lowest processing fees",
                "More SMS marketing",
                "No gift card load fees",
            ],
            cta: "Try free for 30 days",
        },
    ],
    yearly: [
        {
            key: "free",
            label: "Free",
            price: "$0",
            per: "/mo",
            blurb: "Same as Monthly Free. Only pay per transaction.",
            tapDipSwipe: "2.6% + 15¢",
            online: "3.3% + 30¢",
            features: [
                "POS app for any payment",
                "Online site",
                "Item library",
                "Invoicing",
                "Booking",
                "Checking & savings accounts",
            ],
            cta: "Get started",
        },
        {
            key: "bronze",
            label: "Bronze",
            price: "$19",
            per: "/mo billed yearly",
            blurb: "Save vs monthly. Great for shops getting started.",
            tapDipSwipe: "2.6% + 10¢",
            online: "3.1% + 25¢",
            features: [
                "Everything in Free",
                "POS features for every industry",
                "Lower processing fees",
                "Email marketing (lite)",
                "Basic staff management",
            ],
            cta: "Start yearly trial",
            badge: "Popular",
        },
        {
            key: "silver",
            label: "Silver",
            price: "$59",
            per: "/mo billed yearly",
            blurb: "Best value: loyalty + texting + reporting.",
            tapDipSwipe: "2.5% + 10¢",
            online: "2.9% + 30¢",
            features: [
                "Everything in Bronze",
                "Loyalty rewards program",
                "Email & SMS marketing",
                "Advanced staff management",
                "Custom reports",
            ],
            cta: "Start yearly trial",
            badge: "Best value",
        },
        {
            key: "gold",
            label: "Gold",
            price: "$119",
            per: "/mo billed yearly",
            blurb: "Advanced + priority support at a discount.",
            tapDipSwipe: "2.4% + 10¢",
            online: "2.9% + 30¢",
            features: [
                "Everything in Silver",
                "24/7 priority support",
                "Lowest processing fees",
                "More SMS marketing",
                "No gift card load fees",
            ],
            cta: "Start yearly trial",
        },
    ],
};

const fadeSlide = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

type FeatureRow = [string, boolean[]];

interface Section {
    key: string;
    title: string;
    rows: FeatureRow[];
}


const PricingPage = () => {

    const [cycle, setCycle] = useState<BillingCycle>("monthly");
    const tiers = useMemo(() => PRICING[cycle], [cycle]);

    const [open, setOpen] = useState<string | null>("top");

    const toggle = (key: string) => {
        setOpen((prev) => (prev === key ? null : key));
    };

    const features: Section[] = [
        {
            key: "top",
            title: "Top beauty features",
            rows: [
                ["Online booking website and booking integrations", [true, true, true]],
                ["Cancellation policy and no-show fees", [false, true, true]],
                ["Loyalty rewards program and promotions", [false, true, true]],
                ["Future bookings report", [false, false, true]],
            ],
        },
        {
            key: "payments",
            title: "Payments & checkout",
            rows: [
                ["Card payments integration", [true, true, true]],
                ["Digital receipts & tips", [false, true, true]],
            ],
        },
        {
            key: "bookings",
            title: "Bookings",
            rows: [
                ["Calendar sync and staff schedules", [true, true, true]],
                ["Client reminders and confirmations", [false, true, true]],
            ],
        },
    ];

    const plans = ["Square Free", "Square Plus", "Square Premium"];


    return (
        <main className="min-h-screen bg-white p-6 sm:p-10">
            <PreviewTextBorderBox />
            <section className="w-full">
                {/* Toggle */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mx-auto mb-6 flex max-w-6xl items-center justify-center"
                >
                    <div className="relative inline-flex items-center rounded-full bg-white p-1 shadow-sm ring-1 ring-neutral-200">
                        {(["monthly", "yearly"] as BillingCycle[]).map((c) => {
                            const active = c === cycle;
                            return (
                                <button
                                    key={c}
                                    onClick={() => setCycle(c)}
                                    className={[
                                        "relative z-10 rounded-full px-4 py-2 text-sm font-medium transition",
                                        active
                                            ? "text-neutral-900"
                                            : "text-neutral-500 hover:text-neutral-800",
                                    ].join(" ")}
                                >
                                    {c === "monthly" ? "Monthly" : "Year"}
                                </button>
                            );
                        })}
                        {/* Thumb */}
                        <motion.span
                            layout
                            layoutId="billing-thumb"
                            transition={{ type: "spring", stiffness: 420, damping: 30 }}
                            className={[
                                "absolute inset-1 w-[calc(50%-0.25rem)] rounded-full bg-neutral-100",
                                cycle === "monthly" ? "left-1" : "left-[calc(50%+0.25rem)]",
                            ].join(" ")}
                        />
                    </div>
                </motion.div>

                {/* Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={cycle}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4, ease: EASE_OUT },
                        }}
                        exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
                        className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4"
                    >
                        {tiers.map((t) => (
                            <motion.article
                                key={t.key}
                                variants={floatIn}
                                initial="hidden"
                                animate="show"
                                //viewport={{ once: true, amount: 0.2 }}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.45, ease: EASE_OUT }}
                                className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 transition-shadow hover:shadow-xl"
                            >
                                {/* top hairline */}
                                <motion.div
                                    variants={floatIn}
                                    className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-neutral-200 via-neutral-400 to-neutral-200 opacity-60"
                                />
                                {/* badge */}
                                {t.badge && (
                                    <div
                                        className={[
                                            "absolute right-4 top-4 rounded-full px-2.5 py-1 text-xs font-semibold",
                                            t.badge === "Best value"
                                                ? "bg-amber-100 text-amber-800"
                                                : "bg-neutral-900 text-white",
                                        ].join(" ")}
                                    >
                                        {t.badge}
                                    </div>
                                )}

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-neutral-900">
                                        {t.label}
                                    </h3>
                                    {t.blurb && (
                                        <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                                            {t.blurb}
                                        </p>
                                    )}

                                    <div className="mt-6 flex items-baseline gap-2">
                                        <span className="text-4xl font-bold tracking-tight text-neutral-900">
                                            {t.price}
                                        </span>
                                        <span className="text-sm text-neutral-500">{t.per}</span>
                                    </div>

                                    <motion.button
                                        whileTap={{ scale: 0.98 }}
                                        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none"
                                    >
                                        {t.cta}
                                    </motion.button>

                                    {/* Fees */}
                                    <div className="mt-6 rounded-2xl bg-neutral-50 p-4">
                                        <p className="text-[13px] font-medium text-neutral-900">
                                            Processing fees
                                        </p>
                                        <div className="mt-2 space-y-1.5">
                                            <div className="flex items-center justify-between text-[13px] text-neutral-600">
                                                <span>Tap, dip, or swipe</span>
                                                <span className="tabular-nums">{t.tapDipSwipe}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-[13px] text-neutral-600">
                                                <span>Online</span>
                                                <span className="tabular-nums">{t.online}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mt-6">
                                        <p className="text-[13px] font-medium text-neutral-900">
                                            What you get
                                        </p>
                                        <ul className="mt-2 space-y-2">
                                            {t.features.map((f, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <CheckCircleRoundedIcon
                                                        fontSize="small"
                                                        className="mt-0.5 text-neutral-900 opacity-90"
                                                    />
                                                    <span className="text-[13px] leading-relaxed text-neutral-700">
                                                        {f}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* glow */}
                                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 transition duration-200 group-hover:ring-2 group-hover:ring-neutral-900/10" />
                            </motion.article>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Giữ nguyên “cột ngang” bên dưới của bạn tại đây */}
                {/* <YourBottomStrip /> */}
            </section>
            <section className="mx-auto mt-10 w-full max-w-6xl">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 shadow-sm"
                >
                    {/* subtle top hairline */}
                    <div className="h-[3px] w-full bg-linear-to-r from-neutral-200 via-neutral-400 to-neutral-200 opacity-60" />

                    <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_2fr] md:items-center md:p-8">
                        {/* Left: title + CTA */}
                        <div className="space-y-4">
                            <p className="text-[12px] uppercase tracking-[0.18em] text-neutral-500">
                                RAVO Pro
                            </p>
                            <h3 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
                                Get custom pricing
                            </h3>

                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none"
                            >
                                Talk to our team
                                <ArrowForwardRoundedIcon fontSize="small" className="ml-2" />
                            </motion.button>
                        </div>

                        {/* Right: copy */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.5, ease: EASE_OUT }}
                            className="text-[15px] leading-relaxed text-neutral-700"
                        >
                            <p>
                                If you process over <span className="font-medium">$250,000</span>{" "}
                                per year, talk to our team to see if you’re eligible for custom
                                pricing and processing fees. You can also ask about hardware
                                discounts, onboarding and implementation support, technical
                                specialists, and account management.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
            <section className="max-w-6xl mx-auto px-6 py-20">
                {/* ====== FIXED COLUMN TITLES ====== */}
                <div className="grid grid-cols-4 items-center border-b border-neutral-200 pb-3 mb-6">
                    <div></div>
                    {plans.map((p) => (
                        <p
                            key={p}
                            className="text-center font-medium text-neutral-800 text-sm sm:text-base"
                        >
                            {p}
                        </p>
                    ))}
                </div>

                {/* ====== ACCORDION SECTIONS ====== */}
                {features.map((section) => (
                    <div key={section.key} className="border-b border-neutral-200 py-6">
                        {/* HEADER */}
                        <button
                            onClick={() => toggle(section.key)}
                            className="w-full flex items-center justify-between"
                        >
                            <h2 className="text-2xl font-semibold text-neutral-900">
                                {section.title}
                            </h2>
                            <div className="text-neutral-800">
                                {open === section.key ? (
                                    <RemoveIcon fontSize="large" />
                                ) : (
                                    <AddIcon fontSize="large" />
                                )}
                            </div>
                        </button>

                        {/* CONTENT */}
                        <AnimatePresence initial={false}>
                            {open === section.key && (
                                <motion.div
                                    key={section.key}
                                    variants={fadeSlide}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className="overflow-hidden mt-6"
                                >
                                    <div className="divide-y divide-neutral-200">
                                        {section.rows.map(([label, cols], i) => (
                                            <div
                                                key={i}
                                                className="grid grid-cols-4 items-center py-3 text-sm text-neutral-800"
                                            >
                                                <p>{label}</p>
                                                {cols.map((val, j) => (
                                                    <div key={j} className="text-center">
                                                        {val ? (
                                                            <CheckIcon className="text-neutral-700" />
                                                        ) : (
                                                            <span className="text-neutral-300">—</span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </section>
        </main>
    )
}


export default PricingPage;