"use client";
import type { ReactNode } from "react";
import { useState, useEffect, useRef } from "react";
import { motion, type Variants, useAnimation, useInView, AnimatePresence } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";


import {
  CreditCard,
  Link as LinkIcon,
  Spa,
  Dashboard,
  People,
  Speed,
  Psychology,
  DoneAll,
  Language,
  Star,
  Brush,
  Campaign,
  Monitor,
  Event,
  MonetizationOn,
  Smartphone,
  TrendingUp,
  CurrencyExchange,
  Translate,
  PriceCheck,
  Extension,
  CheckCircleRounded,
  Add,
  Remove
} from "@mui/icons-material";

import HardwareCardsInteractive from "@/app/components/HardwareCardsInteractive";

import imgNail1 from "@/app/assets/nail1.png";
import imgNail2 from "@/app/assets/nail2.png";
import imgNail3 from "@/app/assets/nail3.png";
import imgNail4 from "@/app/assets/nail4.png";
import imgNail5 from "@/app/assets/nail5.png";
import imgNail6 from "@/app/assets/nail6.png";
import imgNail7 from "@/app/assets/nail7.png";
import imgNail8 from "@/app/assets/nail8.png";
import imgNail9 from "@/app/assets/nail9.png";
import imgNail10 from "@/app/assets/nail10.png";
import imgNail11 from "@/app/assets/nail11.png";
import imgNail12 from "@/app/assets/nail12.png";
import about1 from "@/app/assets/about1.png";
import about2 from "@/app/assets/about2.png";
import about3 from "@/app/assets/about3.png";
import about4 from "@/app/assets/about4.png";
import about5 from "@/app/assets/about5.png";
import about6 from "@/app/assets/about6.png";
import about7 from "@/app/assets/about7.png";
import about8 from "@/app/assets/about8.png";
import about9 from "@/app/assets/about9.png";
import about10 from "@/app/assets/about10.png";
import about11 from "@/app/assets/about11.png";
import imgWeb1 from "@/app/assets/website1.png";
import imgWeb2 from "@/app/assets/website2.png";
import imgWeb3 from "@/app/assets/website3.png";
import imgWeb4 from "@/app/assets/website4.png";
import imgWeb5 from "@/app/assets/website5.png";
import imgWeb6 from "@/app/assets/website6.png";
import imgWeb7 from "@/app/assets/website7.png";
import imgWeb8 from "@/app/assets/website8.png";
import imgWeb9 from "@/app/assets/website9.png";
import TrySplitSection from "./components/ContactSection";


type LogoSrc = string | StaticImageData;

type Tile = {
  id: string;
  src: string | StaticImageData;
  alt: string;
  className?: string;
  size: number;
  href?: string;
};

type CardItem = {
  key: string;
  vertical: string;
  large: string;
  detail?: string;
  bg: string;
};

type Bullet = {
  icon: ReactNode;
  text: string;
};

type Step = {
  title: string;
  img: string;
  bullets: Bullet[];
};

type QA = { q: string; a: string };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function HomePage() {
  const videoSrc = "/videoBg.mp4";

  const logos: LogoSrc[] = [
    imgNail1, imgNail2, imgNail3, imgNail4, imgNail5, imgNail6,
    imgNail7, imgNail8, imgNail9, imgNail10, imgNail11, imgNail12,
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  const ITEMS: CardItem[] = [
    { key: "Expertise", vertical: "Nail Focus", large: "Nail Focus", detail: "4Built for Vietnamese salons with bilingual tools and ready-to-use service templates.", bg: about1.src },
    { key: "Payments", vertical: "Transparent Rates", large: "Transparent Rates", detail: "Wholesale pricing, clear reports, and next-day deposits.", bg: about2.src },
    { key: "Simplicity", vertical: "Faster Flow", large: "Faster Flow", detail: "Streamlined setup and daily operations for your whole team.", bg: about3.src },
    { key: "Growth", vertical: "Connected Tools", large: "Connected Tools", detail: "Marketing, reviews, and website all linked to your POS.", bg: about4.src },
  ];

  const STEPS: Step[] = [
    {
      title: "All-In-One NAIL POS",
      img: about5.src,
      bullets: [
        {
          icon: <CreditCard className="text-gray-700 text-[22px]" />,
          text:
            "Fast, secure transactions: Process credit card payments quickly and safely without relying on third-party gateways.",
        },
        {
          icon: <LinkIcon className="text-gray-700 text-[22px]" />,
          text:
            "Fully connected system: Seamlessly link your POS software, terminals, printers, and salon tools within one unified platform.",
        },
        {
          icon: <Spa className="text-gray-700 text-[22px]" />,
          text: "Beauty-industry optimized: Manage service menus, add-ons, upsells, tips, and technician commissions with ease.",
        },
        {
          icon: <Dashboard className="text-gray-700 text-[22px]" />,
          text:
            "Complete control: One provider, one dashboard—everything you need to run your salon efficiently.",
        },
      ],
    },
    {
      title: "Unlimited Check-In/Check-Out",
      img: about6.src,
      bullets: [
        {
          icon: <People className="text-gray-700 text-[22px]" />,
          text: "No customer limits: Store unlimited client profiles, visit histories, and booking data without extra fees.",
        },
        {
          icon: <Speed className="text-gray-700 text-[22px]" />,
          text: "Quick and simple flow: Check in guests, assign technicians, and complete checkouts in just a few taps.",
        },
        {
          icon: <Psychology className="text-gray-700 text-[22px]" />,
          text: "Faster front desk: Reduce errors and wait times with an intuitive layout built for busy salons.",
        },
        {
          icon: <DoneAll className="text-gray-700 text-[22px]" />,
          text: "Keep operations smooth: Maintain a steady workflow and never lose a client at the door.",
        },
      ],
    },
    {
      title: "Marketing Services",
      img: about7.src,
      bullets: [
        {
          icon: <Language className="text-gray-700 text-[22px]" />,
          text: "Professional websites with booking: Beautiful, mobile-friendly designs that turn visitors into confirmed appointments.",
        },
        {
          icon: <Campaign className="text-gray-700 text-[22px]" />,
          text: "Marketing materials: Professionally designed service menus, posters, flyers, and promotional signage.",
        },
        {
          icon: <Star className="text-gray-700 text-[22px]" />,
          text: "Local SEO optimization: Rank higher on Google for “nail salon near me” and service-based searches.",
        },
        {
          icon: <Brush className="text-gray-700 text-[22px]" />,
          text: "Google review automation: Automatically request and respond to reviews to build a 5-star reputation online.",
        },
      ],
    },
    {
      title: "Design Services",
      img: about8.src,
      bullets: [
        {
          icon: <Brush className="text-gray-700 text-[22px]" />,
          text: "Custom branding: Get a personalized logo, color palette, and font set that reflect your salon’s personality.",
        },
        {
          icon: <Campaign className="text-gray-700 text-[22px]" />,
          text: "Marketing materials: Professionally designed service menus, posters, flyers, and promotional signage.",
        },
        {
          icon: <Spa className="text-gray-700 text-[22px]" />,
          text: "Digital assets: Ready-to-use templates for social media, stories, and seasonal promotions.",
        },
        {
          icon: <LinkIcon className="text-gray-700 text-[22px]" />,
          text: "**Fully synchronized:** Prices and promotions update automatically across your POS, website, and in-store displays.",
        },
      ],
    },
    {
      title: "Digital Signage for Nail Salons",
      img: about9.src,
      bullets: [
        {
          icon: <Monitor className="text-gray-700 text-[22px]" />,
          text: "Real-time displays: Showcase your latest services, prices, and packages instantly.",
        },
        {
          icon: <Event className="text-gray-700 text-[22px]" />,
          text: "Seasonal inspiration: Highlight trending nail sets, holiday designs, and creative ideas.",
        },
        {
          icon: <Campaign className="text-gray-700 text-[22px]" />,
          text: "Effortless promotions: Advertise memberships, gift cards, and special offers directly from your POS.",
        },
        {
          icon: <TrendingUp className="text-gray-700 text-[22px]" />,
          text: "Increase sales naturally: Encourage more add-ons and upgrades without extra effort from your staff.",
        },
      ],
    },
    {
      title: "RAVO App",
      img: about10.src,
      bullets: [
        {
          icon: <Smartphone className="text-gray-700 text-[22px]" />,
          text: "Salon management on the go: Access live data anytime through the RAVO app for iOS and Android.",
        },
        {
          icon: <TrendingUp className="text-gray-700 text-[22px]" />,
          text: "Instant performance tracking: Monitor daily sales, revenue, and deposits in real time.",
        },
        {
          icon: <MonetizationOn className="text-gray-700 text-[22px]" />,
          text: "Payroll and commissions: Easily view technician earnings, tips, and commission structures.",
        },
        {
          icon: <Translate className="text-gray-700 text-[22px]" />,
          text: "Bilingual experience: English and Vietnamese interface for smooth communication and usability.",
        },
      ],
    },
    {
      title: "Transparent Pricing",
      img: about11.src,
      bullets: [
        {
          icon: <PriceCheck className="text-gray-700 text-[22px]" />,
          text: "No hidden fees: What you see is what you pay—no surprises or extra charges.",
        },
        {
          icon: <Extension className="text-gray-700 text-[22px]" />,
          text: "Flexible packages: Choose the plan that best fits your salon’s size and workflow.",
        },
        {
          icon: <DoneAll className="text-gray-700 text-[22px]" />,
          text: "Everything included: Bilingual support, essential POS features, integrated payments, and reporting tools.",
        },
        {
          icon: <TrendingUp className="text-gray-700 text-[22px]" />,
          text: "Expandable options: Add digital signage, advanced marketing, extra devices, or multi-location management as your salon grows.",
        },
      ],
    },
  ];

  const tiles: Tile[] = [
    { id: "t1", src: imgWeb1, alt: "tile", className: "top-20 left-4 md:top-16 md:left-12", size: 116 },
    { id: "t2", src: imgWeb2, alt: "tile", className: "top-10 right-28 md:top-8 md:right-80", size: 92 },
    { id: "t3", src: imgWeb3, alt: "tile", className: "top-36 right-6 md:top-24 md:right-16", size: 132 },
    { id: "t4", src: imgWeb4, alt: "tile", className: "top-56 left-64 md:top-56 md:left-80", size: 116 },
    { id: "t5", src: imgWeb5, alt: "tile", className: "bottom-44 left-6 md:bottom-28 md:left-14", size: 120 },
    { id: "t6", src: imgWeb6, alt: "tile", className: "bottom-24 left-72 md:bottom-16 md:left-96", size: 132 },
    { id: "t7", src: imgWeb7, alt: "tile", className: "bottom-16 right-8 md:bottom-12 md:right-16", size: 116 },
    { id: "t8", src: imgWeb8, alt: "tile", className: "top-2 left-1/2 -translate-x-1/2 md:left-[45%] md:translate-x-0", size: 92 },
    { id: "t9", src: imgWeb9, alt: "tile", className: "right-56 top-1/2 -translate-y-1/2", size: 120 },
  ];

  const ITEMSFAQ: { q: string; a: string }[] = [
    {
      q: "Is RAVO really optimized for nail salons?",
      a: "Yes. RAVO is a Nail Salon POS system tuned for services, add-ons, tips, commissions, memberships, and multi-tech tickets.",
    },
    {
      q: "Can my Vietnamese-speaking team use it comfortably?",
      a: "Absolutely. RAVO’s interface is simple and intuitive, and when questions come up, our bilingual support team helps in Vietnamese or English, any time.",
    },
    {
      q: "Do you limit the number of clients or check-ins?",
      a: "No. RAVO offers unlimited check-in/out and unlimited client profiles.",
    },
    {
      q: "How long does setup take?",
      a: "When we collect your details in advance (service menu, prices, commission/tip rules, staff list, devices), setup and training usually take 30–60 minutes. We’ll plug in devices, confirm your menu, configure commissions/tips, and walk your team through check-in/out and payments. Most salons start running same day.",
    },
    {
      q: "Do you help with Google reviews and SEO?",
      a: "Yes. Our marketing services include SEO, review generation, and social media content made for salons.",
    },
    {
      q: "Can I manage multiple locations?",
      a: "Yes. Centralized reporting and user controls make multi-location management easy.",
    },
    {
      q: "What about pricing and fees?",
      a: "We use transparent, wholesale-style pricing. No hidden fees, no surprise hikes.",
    },
    {
      q: "What are your support hours?",
      a: "Our support is available daily from 8:00 AM to 1:00 AM EST. Support is available to English and Vietnamese speakers.",
    },
  ];

  const scope = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(scope, { amount: 0.3 });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (inView) controls.start("show");
    else controls.start("hidden");
  }, [inView, controls]);

  return (
    <main className="min-h-screen w-full">
      <section className="relative h-screen min-h-[520px] w-full overflow-hidden mask-[linear-gradient(to_top,transparent_0%,white_10%)] ">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/70 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl"
          >
            Designed for Nail Artists
            <br className="hidden sm:block" /> Perfected for Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 max-w-2xl text-balance text-base/7 text-white/80 sm:text-lg/8"
          >
            RAVO helps you manage clients, payments, and growth effortlessly — beauty meets precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="tel:+14048064448"
              className="rounded-full border border-white px-10 py-3 font-medium text-white shadow-lg transition hover:scale-[1.1] hover:bg-white hover:text-black active:scale-[0.98]"
            >
              Get Started
            </a>
          </motion.div>

        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <LogoMarquee logos={logos} speedSeconds={25} gapRem={4} showEdges={false} />
        </div>
      </section>
      <section className="min-h-screen text-black py-20 ">
        <section className="mx-auto max-w-6xl px-4 pt-16 pb-8">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs tracking-[0.25em] text-gray-400 uppercase"
          >
            Why Choose RAVO?
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-3 font-serif text2xl leading-tight sm:text-4xl md:text-6xl"
          >
            Work Faster, Serve Better {<br></br>} Stay in Control with RAVO
          </motion.h1>
        </section>
        <section className="mx-auto max-w-[1200px] px-4 py-10">
          <div
            className="
            flex gap-4 justify-center overflow-x-auto lg:overflow-visible
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          "
          >
            {ITEMS.map((it, i) => {
              const active = hovered === i;
              return (
                <motion.div
                  key={it.key}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative isolate h-[520px] shrink-0 overflow-hidden rounded-2xl"
                  animate={{ width: active ? 500 : 250, opacity: active ? 1 : 0.8, scale: active ? 1.02 : 1 }}
                  initial={{ width: 200, opacity: 0.8, scale: 1 }}
                  transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
                >
                  <Image
                    src={it.bg}
                    alt={it.vertical}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                  <motion.div
                    className="absolute inset-0"
                    animate={{ backgroundColor: active ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.45)" }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="pointer-events-none absolute right-3 top-3"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    animate={{ opacity: active ? 0 : 1, y: active ? -8 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="select-none text-3xl sm:text-4xl font-semibold tracking-tight text-white/85 drop-shadow">
                      {it.vertical}
                    </span>
                  </motion.div>
                  <div className="pointer-events-none absolute inset-0 flex items-end">
                    <motion.div
                      className="m-6"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 12 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="whitespace-pre-line text-left text-white/80 text-3xl sm:text-4xl font-bold leading-[0.95] tracking-[-0.02em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                        {it.large}
                      </div>
                      <hr className="border-t border-gray-400 my-5" />

                      {it.detail && (
                        <div className="mt-3 text-sm font-mono text-white/90">
                          {it.detail}

                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </section>
      <section className="mx-auto h-screen max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-10 ">
        <p className="text-xs tracking-[0.18em] font-medium text-gray-500 uppercase">
          RAVO Hardware that works beautifully
        </p>
        <motion.div
          ref={scope}
          variants={stagger}
          initial="hidden"
          animate={controls}
          className="relative z-10 mt-3 flex flex-col justify-center"
        >
          <motion.h1
            variants={fadeUp}
            className="font-serif text-black text-2xl sm:text-4xl md:text-6xl leading-tight"
          >
            Smooth check-in <br className="hidden sm:block" /> Seamless checkout every time
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-3xl text-base sm:text-lg text-gray-600 font-sans"
          >
            From terminals to digital signage — All elegant, connected, and easy to use.
          </motion.p>
          <div className="pointer-events-none absolute -bottom-2 left-0 w-full h-40 bg-linear-to-t from-white/80 via-white/40 to-transparent" />
        </motion.div>
        <div className="mt-10">
          <HardwareCardsInteractive />
        </div>
      </section>
      <section className="mx-auto h-screen py-20">
        <CollageHero tiles={tiles} />
      </section>
      <section className="px-20 pt-10 min-h-screen flex flex-col items-center justify-center text-black ">
        <section className="mx-auto max-w-6xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-3 font-serif text2xl text-center leading-tight sm:text-4xl md:text-6xl"
          >
            Everything Your Nail Salon Needs {<br />} In One POS System
          </motion.h1>
        </section>
        <StickyScrollySteps steps={STEPS} />
      </section>
      <section className="w-full h-screen">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.07)] backdrop-blur"
          >
            <p className="text-xs tracking-[0.18em] text-gray-500 uppercase">
              Fast, Secure &amp; Affordable
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Credit Card Processing
            </h2>
            <p className="mt-4 text-gray-700">
              Payments are the heartbeat of your business. RAVO brings wholesale credit card
              processing into your POS for nail salons — for clarity, speed, and savings.
            </p>

            <motion.ul variants={stagger} className="mt-6 space-y-4">
              {[
                {
                  title: "Guaranteed Low Rates",
                  desc: "Transparent pricing, no hidden fees, no surprise increases.",
                },
                {
                  title: "Lightning-Fast Support",
                  desc: "Speak with an expert right away — English or Vietnamese.",
                },
                {
                  title: "Seamless Transactions",
                  desc: "Chip, tap, phone wallets, and gift cards. Done.",
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex gap-3 text-left"
                >
                  <CheckCircleRounded className="mt-0.5 text-black" fontSize="small" />
                  <div>
                    <p className="font-medium text-black">{item.title}</p>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <p className="mt-6 text-sm text-gray-700">
              Peace of mind: next-day funding options, clear statements, and automatic reconciliation.
            </p>

            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-black bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-black"
              >
                View Details on Card Processing ↗
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.07)] backdrop-blur"
          >
            <p className="text-xs tracking-[0.18em] text-gray-500 uppercase">
              Payroll Services
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Stress-Free Payroll, Every Time
            </h2>
            <p className="mt-4 text-gray-700">
              Payroll at salons is unique: commissions, tips, tech payouts, and compliance.
              RAVO’s payroll services simplify everything.
            </p>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-semibold text-black">
                Financial Wellbeing (for employees)
              </p>
              <motion.ul variants={stagger} className="mt-4 space-y-3">
                {[
                  {
                    title: "Direct Deposit",
                    desc: "Fast, secure access to earnings.",
                  },
                  {
                    title: "Transparent Pay Stubs",
                    desc: "Clear tip and commission breakdowns.",
                  },
                  { title: "Managing Benefits & Deductions" },
                  {
                    title: "Optional Savings & Retirement",
                    desc: "Setup assistance for tax-advantaged programs.",
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex gap-3 text-gray-700"
                  >
                    <CheckCircleRounded className="mt-0.5 text-black" fontSize="small" />
                    <span>
                      <span className="font-medium text-black">{item.title}</span>
                      {item.desc ? ` — ${item.desc}` : ""}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <div className="mt-6 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-semibold text-black">For owners</p>
              <motion.ul variants={stagger} className="mt-4 space-y-3">
                {[
                  {
                    title: "Tip & Commission Logic",
                    desc: "Configured to your exact policy.",
                  },
                  {
                    title: "Year-End Forms & Compliance",
                    desc: "Stay audit-ready without the headache.",
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex gap-3 text-gray-700"
                  >
                    <CheckCircleRounded className="mt-0.5 text-black" fontSize="small" />
                    <span>
                      <span className="font-medium text-black">{item.title}</span> —{" "}
                      {item.desc}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-black bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-black"
              >
                Streamline Salon Payroll ↗
              </Link>
            </div>
          </motion.div>
        </motion.div>
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
      <section className="w-full py-20">
        <TrySplitSection />
      </section>
    </main>
  );
}

function CollageHero({ tiles }: { tiles: Tile[] }) {
  const float: Variants = {
    initial: { y: 0, opacity: 0 },
    animate: (i: number) => ({
      y: [0, -8, 0],
      opacity: 1,
      transition: {
        duration: 4 + (i % 3),
        repeat: Infinity,
        ease: [0.45, 0.05, 0.55, 0.95],
        delay: i * 0.12,
      },
    }),
  };

  return (
    <section className="relative isolate bg-white text-black overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="relative h-[560px] md:h-[620px]">
          <div className="relative z-20 grid place-items-center h-full px-6 text-center">
            <div className="mx-auto max-w-4xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
                Web Design for Nail Salons
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-[56px] leading-tight tracking-tight bg-linear-to-b from-black to-gray-700 bg-clip-text text-transparent">
                Custom websites for nail salons
                <br className="hidden sm:block" />
                <span className="font-sans text-gray-800">
                  From nails to clicks — we make your salon shine online.
                </span>
              </h2>
              <div className="mt-8 flex justify-center gap-4">
                <a className="px-6 py-3 rounded-full border border-gray-400 text-md font-serif font-medium text-gray-700 cursor-pointer hover:scale-105 hover:bg-black/80 hover:text-white transition-colors duration-300">
                  View Templates
                </a>
              </div>
            </div>
          </div>
          {tiles.map((t, i) => {
            const content = (
              <motion.div
                key={t.id}
                custom={i}
                variants={float}
                initial="initial"
                animate="animate"
                className={[
                  "absolute z-10 rounded-2xl overflow-hidden shadow-sm bg-white",
                  "hover:scale-105 transition-transform duration-300",
                  t.className || "",
                ].join(" ")}
                style={{ width: t.size, height: t.size }}
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 120px, 140px"
                  priority={i < 5}
                />
              </motion.div>
            );

            // Nếu có href thì bọc Link, không thì render div thường
            return t.href ? (
              <Link key={t.id} href={t.href} aria-label={t.alt} className="absolute" style={{ width: t.size, height: t.size }}>
                {content}
              </Link>
            ) : (
              content
            );
          })}
        </div>
      </div>

      {/* background */}
      <div className="absolute inset-0 -z-10 bg-white" />
    </section>
  );
}

function LogoMarquee({
  logos,
  speedSeconds = 20,
  gapRem = 3,
  showEdges = false,
  altPrefix = "Salon logo",
}: {
  logos: LogoSrc[];
  speedSeconds?: number;
  gapRem?: number;
  showEdges?: boolean;
  altPrefix?: string;
}) {
  const items = [...logos, ...logos];

  return (
    <div className="relative">
      <div
        className="group pointer-events-auto marquee"
        style={
          {
            // @ts-ignore custom CSS vars for styled-jsx
            "--gap": `${gapRem}rem`,
            "--speed": `${speedSeconds}s`,
          } as React.CSSProperties
        }
      >
        <div className="marquee__track" aria-hidden>
          {items.map((src, i) => (
            <div key={i} className="marquee__item">
              <Image
                src={src}
                alt={`${altPrefix} ${i + 1}`}
                className="h-10 w-auto md:h-16 lg:h-20 xl:h-36 opacity-80 transition group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {showEdges && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black to-transparent" />
        </>
      )}

      <style jsx>{`
        .marquee {
          position: relative;
          overflow: hidden;
          padding: 0.5rem 0;
        }
        .marquee__track {
          display: flex;
          gap: var(--gap);
          width: max-content;
          will-change: transform;
          animation: marquee var(--speed) linear infinite;
        }
        .group:hover .marquee__track {
          animation-play-state: paused;
        }
        .marquee__item {
          display: grid;
          place-items: center;
          padding-inline: 0.25rem;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee__track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

function StickyScrollySteps({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(0);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const setStepRef = (el: HTMLDivElement | null, i: number) => {
    if (el) stepsRef.current[i] = el;
  };

  useEffect(() => {
    if (!stepsRef.current.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let next = active;
        let best = 0;
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > best) {
            best = e.intersectionRatio;
            next = Number((e.target as HTMLElement).dataset.index);
          }
        }
        if (next !== active) setActive(next);
      },
      { root: null, rootMargin: "-45% 0px -45% 0px", threshold: buildThresholdList(30) }
    );

    stepsRef.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);

  useEffect(() => {
    if (active !== prevActive) setPrevActive(active);
  }, [active, prevActive]);

  const totalH = `${steps.length * 100}vh`;

  return (
    <section className="relative w-full" style={{ height: totalH }}>
      <div className="mx-auto grid h-1/2 grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6">
        <div className="relative hidden md:block">
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden rounded-3xl ">
            <AnimatePresence initial={false} mode="sync">
              <motion.img
                key={`prev-${prevActive}-${steps[prevActive].img}`}
                src={steps[prevActive].img}
                alt={steps[prevActive].title}
                className="h-8/15 w-full object-cover rounded-3xl will-change-transform will-change-opacity"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: active === prevActive ? 1 : 0, scale: 1.005 }}
                exit={{ opacity: 0, scale: 1.005 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              />
              <motion.img
                key={`curr-${active}-${steps[active].img}`}
                src={steps[active].img}
                alt={steps[active].title}
                className="absolute h-8/15 w-full object-cover rounded-3xl will-change-transform will-change-opacity"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.98 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
              />
            </AnimatePresence>
          </div>
        </div>
        <div className="relative">
          {steps.map((s, i) => (
            <div
              key={i}
              data-index={i}
              ref={(el) => setStepRef(el, i)}
              className="flex min-h-screen items-center"
            >
              <article
                className={`mx-auto w-full   p-6  md:p-8 ${i === active ? " bg-white" : " bg-white/70"
                  }`}
              >
                <motion.h3
                  className="text-2xl font-extrabold text-gray-900 md:text-3xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: i === active ? 1 : 0.7, y: i === active ? 0 : 6 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  {s.title}
                </motion.h3>

                <div className="my-4 h-px w-full bg-gray-200" />

                <ul className="space-y-5">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">{b.icon}</div>
                      <p className="leading-relaxed  text-gray-600">{b.text}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white" />
    </section>
  );
}

function buildThresholdList(steps = 20) {
  return Array.from({ length: steps }, (_, i) => i / (steps - 1));
}

function AccordionItem({
  idx, q, a, isOpen, onToggle,
}: {
  idx: number; q: string; a: string; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="py-10 text-black border-b border-neutral-200 last:border-b"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${idx}`}
        className="group flex w-full items-start justify-between gap-6 text-left"
      >
        <span className="text-2xl font-mono font-semibold leading-snug sm:text-[28px] text-black">
          {q}
        </span>
        <motion.span
          className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center text-black"
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          aria-hidden
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "minus" : "plus"}
              initial={{ opacity: 0, scale: 0.7, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.7, rotate: 90 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="text-black"
            >
              {isOpen ? <Remove fontSize="large" /> : <Add fontSize="large" />}
            </motion.span>
          </AnimatePresence>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${idx}`}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                height: "auto",
                opacity: 1,
                marginTop: 16,
                clipPath: "inset(0% 0 0% 0 round 0px)",
                transition: {
                  height: { type: "spring", stiffness: 280, damping: 30 },
                  opacity: { duration: 0.2 },
                  clipPath: { duration: 0.28, ease: "easeOut" },
                },
              },
              collapsed: {
                height: 0,
                opacity: 0,
                marginTop: 0,
                clipPath: "inset(0% 0 100% 0 round 0px)",
                transition: {
                  height: { duration: 0.24, ease: "easeInOut" },
                  opacity: { duration: 0.18 },
                  clipPath: { duration: 0.22, ease: "easeIn" },
                },
              },
            }}
            style={{ overflow: "hidden", willChange: "height, opacity, clip-path" }}
          >
            <p className="max-w-3xl mt-4 text-base leading-relaxed text-black/80">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}






