"use client";

// Use animation for page during fixing code

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import { stagger, fadeUp } from "@/app/components/variants";
import StickyScrollySteps, { defineSimpleSteps } from "@/app/components/StickyScrollySteps";
import AccordionItem from "@/app/components/AccordionItem";
import EnterpriseTestimonialsSection from "@/app/components/EnterpriseTestimonialsSection"


import {
    WifiOffRounded,
    FlashOnRounded,
    QueryStatsRounded,
    LockOutlined,
    OpenInNewRounded,
} from "@mui/icons-material";


import imgTerminal8 from "@/app/assets/imgTerminal8.png";


const featuresHeader = [
    "Built-in receipt printer",
    "Space-saving design",
    "Long-lasting battery",
    "Simple setup",
];

const SIMPLE = defineSimpleSteps([
    { title: "Made to fit your space", img: imgTerminal8.src, text: "The streamlined, transportable payment terminal fits and moves easily across your counter." },
    { title: "Internet down? No problem.", img: imgTerminal8.src, text: "With offline payments you can keep selling even when you’re temporarily disconnected." },
]);

const IMAGES: { src: string; alt: string }[] = [
    {
        src: imgTerminal8.src,
        alt: "Tap to pay 1",
    },
    {
        src: imgTerminal8.src,
        alt: "Shop counter 2",
    },
    {
        src: imgTerminal8.src,
        alt: "Card present 3",
    },
    {
        src: imgTerminal8.src,
        alt: "Artisan 4",
    },
    {
        src: imgTerminal8.src,
        alt: "Retail 5",
    },
];

const features = [
    {
        icon: WifiOffRounded,
        title: "Accept payments offline",
        desc:
            "Keep selling even without service or Wi-Fi. Offline payments and receipts are stored for 24 hours.",
        cta: "Learn more",
    },
    {
        icon: FlashOnRounded,
        title: "Move money fast",
        desc:
            "Transfer to bank next business day for free—or instantly for a small fee.",
        cta: "Explore transfers",
    },
    {
        icon: QueryStatsRounded,
        title: "Make smarter business decisions",
        desc:
            "See instant insights and detailed reports so you know where to invest.",
        cta: "Explore reports",
    },
    {
        icon: LockOutlined,
        title: "Keep transactions secure",
        desc:
            "Fraud protection, data security, dispute tools, and PCI compliance built in.",
        cta: "Explore security",
    },
];

const items = [
    {
        img: imgTerminal8,
        title: "Automatically save, budget, and organize your money",
        cta: "Explore Square Savings",
    },
    {
        img: imgTerminal8,
        title: "Instantly access, spend, and manage sales revenue",
        cta: "Explore Square Checking",
    },
    {
        img: imgTerminal8,
        title: "Get faster access to funds for your next move",
        cta: "Explore Square Loans",
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

const CreditCardPage = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main>
            <section className="w-full bg-white text-black">
                <div className="mx-auto max-w-7xl px-6 pt-16 sm:px-8 sm:pt-24">
                    {/* Eyebrow */}
                    <p className="text-center text-sm font-medium tracking-wide text-neutral-600">Square Payments</p>

                    {/* Big heading */}
                    <h1 className="mt-4 text-center font-serif text-4xl leading-tight sm:text-6xl md:text-7xl">
                        Built for however
                        <br className="hidden sm:block" /> you do business
                    </h1>

                    {/* CTAs */}
                    <div className="mt-7 flex items-center justify-center gap-3">
                        <Link
                            href="#"
                            className="rounded-full border border-neutral-900/10 bg-white px-5 py-2.5 text-[15px] font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            Get started
                        </Link>
                        <Link
                            href="#"
                            className="rounded-full bg-black px-5 py-2.5 text-[15px] font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-90"
                        >
                            Contact sales
                        </Link>
                    </div>

                    {/* Marquee wrapper */}
                    <div className="relative mt-12 select-none overflow-hidden pb-20">
                        {/* Soft gradient fades on edges */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white" />

                        <MarqueeRow images={IMAGES} heightClass="h-[260px]" speed={28} />
                    </div>
                </div>

                <style jsx global>{`
@keyframes cc-marquee {
from { transform: translateX(0); }
to { transform: translateX(-50%); }
}
/* Global classes so keyframes resolve correctly */
.cc-marquee .cc-track {
display: flex;
gap: 1.25rem; /* 5 */
width: max-content;
animation: cc-marquee var(--cc-speed, 24s) linear infinite;
will-change: transform;
}
.cc-marquee:hover .cc-track { animation-play-state: paused; }
`}</style>
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
                        {featuresHeader.map((item, idx) => (
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
            <section className="px-20 pt-10 min-h-fit shadow-2xl flex flex-col items-center justify-center text-black ">
                <StickyScrollySteps steps={SIMPLE} />
            </section>
            <section className="w-full bg-white text-black">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    {/* Heading */}
                    <h2 className="text-center font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight">
                        Peace of mind in every payment
                    </h2>

                    {/* Grid */}
                    <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <article
                                    key={i}
                                    className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-linear-to-b from-white to-neutral-50 p-6 sm:p-7 shadow-[0_1px_0_#0000000d,0_8px_20px_-8px_rgba(0,0,0,.06)] transition
                           hover:-translate-y-0.5 hover:shadow-[0_1px_0_#0000000d,0_16px_36px_-12px_rgba(0,0,0,.12)]"
                                >
                                    {/* Accent corner */}
                                    <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-[48px] bg-linear-to-br from-neutral-100 to-transparent opacity-60" />

                                    <div className="flex items-start gap-4">
                                        {/* Icon chip */}
                                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-700 ring-1 ring-inset ring-neutral-200 transition group-hover:bg-neutral-900 group-hover:text-white">
                                            <Icon className="h-5 w-5" />
                                        </span>

                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                                                {f.title}
                                            </h3>
                                            <p className="mt-2 text-[15px] leading-7 text-neutral-700">
                                                {f.desc}
                                            </p>

                                            <button
                                                className="mt-4 inline-flex items-center gap-1.5 rounded-full px-0.5 text-sm font-medium text-neutral-900 underline-offset-4 transition
                                 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30"
                                                type="button"
                                            >
                                                {f.cta}
                                                <OpenInNewRounded className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="w-full bg-white text-black">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    {/* Header */}
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <h2 className="font-serif text-3xl sm:text-5xl leading-tight text-center sm:text-left max-w-2xl">
                            Payments, banking, and cash flow working as one
                        </h2>
                        <button className="rounded-full border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
                            Explore Square Banking
                        </button>
                    </div>

                    {/* Cards */}
                    <div className="mt-16 grid gap-10 sm:grid-cols-3">
                        {items.map((it, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="relative mx-auto h-64 w-full max-w-[260px] overflow-hidden rounded-2xl"
                                >
                                    <Image
                                        src={it.img}
                                        alt={it.title}
                                        fill
                                        className="object-contain"
                                    />
                                </motion.div>

                                <h3 className="mt-6 text-[17px] font-semibold leading-snug max-w-xs">
                                    {it.title}
                                </h3>

                                <button className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-black hover:underline underline-offset-4">
                                    {it.cta}
                                    <OpenInNewRounded className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <EnterpriseTestimonialsSection />
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

function MarqueeRow({
    images,
    heightClass = "h-56",
    speed = 24,
}: {
    images: { src: string; alt: string }[];
    heightClass?: string;
    speed?: number;
}) {
    const track = [...images, ...images];

    return (
        <div className={`cc-marquee relative ${heightClass}`} style={{ ['--cc-speed' as any]: `${speed}s` }}
        >
            <div className="cc-track">
                {track.map((img, idx) => (
                    <figure
                        key={`${img.alt}-${idx}`}
                        className="relative aspect-4/3 w-[320px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm"
                    >
                        <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 1024px) 70vw, 320px" />
                    </figure>
                ))}
            </div>
        </div>
    );
}

export default CreditCardPage;
