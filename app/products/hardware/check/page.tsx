"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/app/components/variants";

import ReliablePOSSection, { Tab } from "@/app/components/ReliablePOSSection";
import HotspotTabsSection, { TabData } from "@/app/components/HotspotTabsSection";
import AccordionItem from "@/app/components/AccordionItem";

import PointOfSaleRoundedIcon from "@mui/icons-material/PointOfSaleRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import imgCheck1 from "@/app/assets/imgCheck1.png";
import imgCheck2 from "@/app/assets/imgCheck2.png";
import imgCheck3 from "@/app/assets/imgCheck3.png";
import imgCheck4 from "@/app/assets/imgCheck4.png";
import imgCheck5 from "@/app/assets/imgCheck5.png";
import imgCheck6 from "@/app/assets/imgCheck6.png";
import imgCheck7 from "@/app/assets/imgCheck7.png";

const TABS: Tab[] = [
    {
        key: "collect",
        title: "Collect Data & Auto-Update",
        blurb:
            "Capture details at check-in and auto-sync profiles. See preferences, frequency, spend, and services at a glance.",
        bullets: [
            "Quick intake: phone lookup, quick add, visit reason.",
            "Live sync: updates flow into POS instantly.",
            "Targeted marketing: segment by service, recency, birthday, spend.",
            "Cleaner decisions: spot top days, services, promos.",
        ],
        img: imgCheck1.src,
    },
    {
        key: "reviews",
        title: "Review Management",
        blurb:
            "Request reviews at the right moment and manage feedback from one place to boost ratings and bookings.",
        bullets: [
            "Real-time monitoring.",
            "Reply fast from a central dashboard.",
            "Reputation flywheel: more recent 5★ → higher rank → more bookings.",
        ],
        img: imgCheck2.src,
    },
];

const TABSS: TabData<"Loyalty System" | "Promotional Mini-Games">[] = [

    {
        key: "Loyalty System",
        label: "Loyalty System",
        leftImg: imgCheck3.src,
        rightImg: imgCheck5.src,
        description: `RAVO POS makes engagement effortless and fun — fully built-in and customizable.<br/> <br/>Sync loyalty games, link rewards across visits, and turn every check-in into a moment clients remember.`,
        hotspots: [
            { x: 23, y: 46, note: "Reward Points: give loyalty points." },
            { x: 56, y: 54, note: "Start Stamp: check your loyalty stars." },
            { x: 42, y: 76, note: "Add Star: tap after payment (once only)." },

        ],
    },
    {
        key: "Promotional Mini-Games",
        label: "Promotional Mini-Games",
        leftImg: imgCheck4.src,
        rightImg: imgCheck6.src,
        description: "Loyalty mode: customize points, tiers, and rewards to keep clients coming back.",
        hotspots: [
            { x: 47, y: 47, note: "Spin Wheel: start the mini-game." },
            { x: 66, y: 50, note: "Prize: show the reward you won." },
            { x: 35, y: 86, note: "Condition: see what qualifies for a spin." },
        ],
    }
];

const FEATURES = [
    {
        icon: <EditNoteRoundedIcon fontSize="medium" />,
        title: "E-signature",
        desc: "Capture signatures for card payments; reduce paper and clutter.",
    },
    {
        icon: <LoyaltyRoundedIcon fontSize="medium" />,
        title: "Tip prompts",
        desc: "On-screen suggestions make tipping easier — no awkward asks.",
    },
    {
        icon: <ReceiptLongRoundedIcon fontSize="medium" />,
        title: "Digital receipts",
        desc: "Text or email receipts instantly; keep contact info fresh.",
    },
    {
        icon: <AssessmentRoundedIcon fontSize="medium" />,
        title: "Automatic reconciliation",
        desc: "Card sales, fees, and deposits line up for you in reports.",
    },
];

const ITEMSFAQ: { q: string; a: string }[] = [
    {
        q: "How fast is the check-in process?",
        a: "Very fast. Clients can be looked up by phone number or added in seconds, then immediately placed in the queue and assigned to a tech.",
    },
    {
        q: "Can we customize data fields on the tablet?",
        a: "Yes. Collect the basics by default and add fields (e.g., birthday, preferred tech, favorite designs) based on your needs.",
    },
    {
        q: "Is the review text automatic?",
        a: "You can set it to send after checkout or trigger it manually for special cases. Replies and ratings are visible in your dashboard.",
    },
    {
        q: "How do loyalty points work?",
        a: "Choose your rules (per visit, per dollar, or specific services). Rewards can be %-off, freebies, or priority booking access.",
    },
    {
        q: "What about SMS compliance?",
        a: "We include opt-in and opt-out controls and follow standard best practices. You can customize message templates and frequency.",
    },
    {
        q: "Can we capture tips without awkward conversations?",
        a: "Yes. Tip prompts appear during checkout on the signature screen, so clients can choose quickly and privately.",
    },
    {
        q: "Ready to turn rush hour into repeat business?",
        a: "Book a Live Demo · See RAVO Packages · Talk to an Expert (EN/VI)",
    },
];



const CheckInOutPOSPage = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(0);


    return (
        <main className="w-full bg-white">
            <section className="relative w-full min-h-screen overflow-hidden text-white">
                <div className="absolute inset-0 ">
                    <video
                        className="absolute inset-0 h-full w-full object-cover object-right mask-[linear-gradient(to_top,transparent_0%,white_6%)]"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    >
                        <source src="/videoCheck1.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-linear-to-r from-white/50 via-white/20 to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-transparent " />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_50%,rgba(0,0,0,0.15),transparent_60%)]" />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
                    <div className="flex min-h-screen items-center py-16 sm:py-20 lg:py-28">
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate="show"
                            className="max-w-2xl"
                        >
                            <motion.h1
                                variants={fadeUp}
                                className="font-serif tracking-tight leading-[0.95] text-2xl sm:text-4xl md:text-6xl"
                            >
                                Smart Salon Check-In
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                className="mt-4 text-base leading-relaxed text-neutral-200 md:max-w-xl"
                            >
                                Welcome every client with ease. RAVO’s smart check-in POS connects your
                                front desk, staff, and payments—all in one elegant system made for nail
                                salons.
                            </motion.p>

                            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href="#buy"
                                    className="inline-flex items-center justify-center rounded-full bg-transfer border border-white px-10 py-3 text-base font-semibold text-white shadow-lg shadow-black/10 ring-1 ring-black/10 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                                >
                                    Buy now
                                </a>

                            </motion.div>
                        </motion.div>
                    </div>
                </div>

            </section>
            <section className="w-full bg-white text-black">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 lg:py-24">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="grid gap-10 md:grid-cols-3"
                    >
                        <motion.article
                            variants={fadeUp}
                            className="group max-w-xl md:pr-8"
                        >
                            <PointOfSaleRoundedIcon
                                sx={{ fontSize: 40 }}
                                className="mb-4 text-black"
                                aria-hidden
                            />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-700 tracking-tight">
                                Faster front desk flow
                            </h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                                Streamline every arrival and checkout. RAVO keeps the line moving
                                while techs get notified automatically—no shouting names or
                                counter confusion.
                            </p>
                        </motion.article>
                        <motion.article
                            variants={fadeUp}
                            className="group max-w-xl md:px-8"
                        >
                            <InsightsRoundedIcon
                                sx={{ fontSize: 40 }}
                                className="mb-4 text-black"
                                aria-hidden
                            />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-700 tracking-tight">
                                Smarter insights from every visit
                            </h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                                Track client patterns, popular services, and team performance in
                                one place. Turn daily operations into data that fuels growth.
                            </p>
                        </motion.article>
                        <motion.article variants={fadeUp} className="group max-w-xl md:pl-8">
                            <StarsRoundedIcon
                                sx={{ fontSize: 40 }}
                                className="mb-4 text-black"
                                aria-hidden
                            />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-700 tracking-tight">
                                Happier clients, higher reviews
                            </h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                                Give every guest a smooth, consistent experience—shorter waits,
                                clear handoffs, and checkouts that feel effortless.
                            </p>
                        </motion.article>
                    </motion.div>
                </div>
            </section>
            <section>
                <ReliablePOSSection tabs={TABS} />
            </section>
            <section>
                <HotspotTabsSection tabs={TABSS} />
            </section>
            <section className="w-full bg-white text-black">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
                    <div className="grid overflow-hidden rounded-3xl border border-neutral-200 shadow-sm lg:grid-cols-2">
                        <motion.figure
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative aspect-4/3 lg:aspect-auto"
                        >
                            <Image
                                src={imgCheck7}
                                alt="RAVO SMS Marketing"
                                fill
                                priority
                                sizes="(max-width:1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.figure>
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex flex-col justify-center bg-neutral-400 text-white p-10 sm:p-14 md:p-16 lg:p-20"
                        >
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                                “Keep in Touch” with SMS
                            </h2>

                            <p className="mt-2 text-lg text-neutral-300 font-medium">
                                Low Cost, High Impact
                            </p>

                            <p className="mt-6 text-[17px] leading-relaxed text-neutral-200">
                                Timely messages your clients actually see. RAVO’s SMS tools help
                                you send relevant texts that drive bookings and upsells at a
                                fraction of traditional ad costs.
                            </p>

                            <ul className="mt-8 space-y-4 text-[17px] text-neutral-200">
                                <li className="flex items-start gap-3">
                                    <MarkEmailReadOutlinedIcon className="text-white mt-0.5" fontSize="small" />
                                    <span>
                                        <strong>Promotions & codes:</strong> flash sales, weekly or monthly
                                        specials, new set designs.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MarkEmailReadOutlinedIcon className="text-white mt-0.5" fontSize="small" />
                                    <span>
                                        <strong>Reminders:</strong> upcoming appointment reminders reduce
                                        no-shows.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MarkEmailReadOutlinedIcon className="text-white mt-0.5" fontSize="small" />
                                    <span>
                                        <strong>Personalization:</strong> segment by visit history, favorite
                                        services, or birthdays.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MarkEmailReadOutlinedIcon className="text-white mt-0.5" fontSize="small" />
                                    <span>
                                        <strong>Best practices:</strong> include opt-in/opt-out language and
                                        honor preferences to protect trust.
                                    </span>
                                </li>
                            </ul>

                            <p className="mt-8 text-[17px] text-neutral-100 font-medium">
                                Spend less to get more bookings, especially on slow days.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="w-full shadow-2xl text-black py-24 sm:py-32">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <motion.blockquote
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
                    >
                        “My customers love it. It’s clear, it’s concise, easy to read, and they
                        know exactly what they’re paying for.”
                    </motion.blockquote>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        className="mt-8 text-lg text-neutral-600"
                    >
                        Trina Gregory-Propst, Se7en Bites, Orlando, Florida
                    </motion.p>
                </div>
            </section>
            <section className="w-full bg-white text-black">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
                    <div className="grid gap-10 lg:grid-cols-2 items-stretch">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex flex-col justify-center rounded-3xl bg-neutral-400 text-white p-10 sm:p-14 md:p-16 lg:p-20 shadow-sm"
                        >
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                                Fast, Friendly Check-Out
                            </h2>

                            <p className="mt-3 text-lg text-neutral-300">
                                End the visit cleanly, capture tips naturally.
                                <br className="hidden sm:block" />
                                RAVO’s checkout is built for clarity and speed.
                            </p>

                            <ul className="mt-8 space-y-4 text-[17px] text-neutral-200 leading-relaxed">
                                {FEATURES.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircleRoundedIcon className="text-white mt-0.5" fontSize="small" />
                                        <span>
                                            <strong className="text-white">{item.title}:</strong> {item.desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-8 text-[17px] font-medium text-neutral-100">
                                Happier techs. Less end-of-day stress.
                            </p>
                        </motion.div>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {FEATURES.map((f, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.25 }}
                                    className="group rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    <div className="flex items-center justify-center rounded-2xl bg-white p-3 ring-1 ring-neutral-200 w-fit">
                                        {f.icon}
                                    </div>
                                    <h3 className="mt-5 text-xl font-medium">{f.title}</h3>
                                    <p className="mt-2 text-[15px] text-neutral-600">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
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

export default CheckInOutPOSPage;
