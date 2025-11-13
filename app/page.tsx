"use client";

import { useState, useEffect, useRef } from "react";
import { motion, type Variants, useAnimation, useInView } from "framer-motion";
import { stagger, fadeUp } from "@/app/components/variants";
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
  Translate,
  PriceCheck,
  Extension,
  CheckCircleRounded,
  NorthEast
} from "@mui/icons-material";

import HardwareCardsInteractive from "@/app/components/HardwareCardsInteractive";
import AccordionItem from "@/app/components/AccordionItem";
import StickyScrollySteps, { type Step } from "@/app/components/StickyScrollySteps";

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

const logos: LogoSrc[] = [
  imgNail1, imgNail2, imgNail3, imgNail4, imgNail5, imgNail6,
  imgNail7, imgNail8, imgNail9, imgNail10, imgNail11, imgNail12,
];

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
        icon: <CreditCard className="text-[22px] text-gray-700" />,
        text:
          "Fast, secure transactions: Process credit card payments quickly and safely without relying on third-party gateways.",
      },
      {
        icon: <LinkIcon className="text-[22px] text-gray-700" />,
        text:
          "Fully connected system: Seamlessly link your POS software, terminals, printers, and salon tools within one unified platform.",
      },
      {
        icon: <Spa className="text-[22px] text-gray-700" />,
        text: "Beauty-industry optimized: Manage service menus, add-ons, upsells, tips, and technician commissions with ease.",
      },
      {
        icon: <Dashboard className="text-[22px] text-gray-700" />,
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
        icon: <People className="text-[22px] text-gray-700" />,
        text: "No customer limits: Store unlimited client profiles, visit histories, and booking data without extra fees.",
      },
      {
        icon: <Speed className="text-[22px] text-gray-700" />,
        text: "Quick and simple flow: Check in guests, assign technicians, and complete checkouts in just a few taps.",
      },
      {
        icon: <Psychology className="text-[22px] text-gray-700" />,
        text: "Faster front desk: Reduce errors and wait times with an intuitive layout built for busy salons.",
      },
      {
        icon: <DoneAll className="text-[22px] text-gray-700" />,
        text: "Keep operations smooth: Maintain a steady workflow and never lose a client at the door.",
      },
    ],
  },
  {
    title: "Marketing Services",
    img: about7.src,
    bullets: [
      {
        icon: <Language className="text-[22px] text-gray-700" />,
        text: "Professional websites with booking: Beautiful, mobile-friendly designs that turn visitors into confirmed appointments.",
      },
      {
        icon: <Campaign className="text-[22px] text-gray-700" />,
        text: "Marketing materials: Professionally designed service menus, posters, flyers, and promotional signage.",
      },
      {
        icon: <Star className="text-[22px] text-gray-700" />,
        text: "Local SEO optimization: Rank higher on Google for “nail salon near me” and service-based searches.",
      },
      {
        icon: <Brush className="text-[22px] text-gray-700" />,
        text: "Google review automation: Automatically request and respond to reviews to build a 5-star reputation online.",
      },
    ],
  },
  {
    title: "Design Services",
    img: about8.src,
    bullets: [
      {
        icon: <Brush className="text-[22px] text-gray-700" />,
        text: "Custom branding: Get a personalized logo, color palette, and font set that reflect your salon’s personality.",
      },
      {
        icon: <Campaign className="text-[22px] text-gray-700" />,
        text: "Marketing materials: Professionally designed service menus, posters, flyers, and promotional signage.",
      },
      {
        icon: <Spa className="text-[22px] text-gray-700" />,
        text: "Digital assets: Ready-to-use templates for social media, stories, and seasonal promotions.",
      },
      {
        icon: <LinkIcon className="text-[22px] text-gray-700" />,
        text: "**Fully synchronized:** Prices and promotions update automatically across your POS, website, and in-store displays.",
      },
    ],
  },
  {
    title: "Digital Signage for Nail Salons",
    img: about9.src,
    bullets: [
      {
        icon: <Monitor className="text-[22px] text-gray-700" />,
        text: "Real-time displays: Showcase your latest services, prices, and packages instantly.",
      },
      {
        icon: <Event className="text-[22px] text-gray-700" />,
        text: "Seasonal inspiration: Highlight trending nail sets, holiday designs, and creative ideas.",
      },
      {
        icon: <Campaign className="text-[22px] text-gray-700" />,
        text: "Effortless promotions: Advertise memberships, gift cards, and special offers directly from your POS.",
      },
      {
        icon: <TrendingUp className="text-[22px] text-gray-700" />,
        text: "Increase sales naturally: Encourage more add-ons and upgrades without extra effort from your staff.",
      },
    ],
  },
  {
    title: "RAVO App",
    img: about10.src,
    bullets: [
      {
        icon: <Smartphone className="text-[22px] text-gray-700" />,
        text: "Salon management on the go: Access live data anytime through the RAVO app for iOS and Android.",
      },
      {
        icon: <TrendingUp className="text-[22px] text-gray-700" />,
        text: "Instant performance tracking: Monitor daily sales, revenue, and deposits in real time.",
      },
      {
        icon: <MonetizationOn className="text-[22px] text-gray-700" />,
        text: "Payroll and commissions: Easily view technician earnings, tips, and commission structures.",
      },
      {
        icon: <Translate className="text-[22px] text-gray-700" />,
        text: "Bilingual experience: English and Vietnamese interface for smooth communication and usability.",
      },
    ],
  },
  {
    title: "Transparent Pricing",
    img: about11.src,
    bullets: [
      {
        icon: <PriceCheck className="text-[22px] text-gray-700" />,
        text: "No hidden fees: What you see is what you pay—no surprises or extra charges.",
      },
      {
        icon: <Extension className="text-[22px] text-gray-700" />,
        text: "Flexible packages: Choose the plan that best fits your salon’s size and workflow.",
      },
      {
        icon: <DoneAll className="text-[22px] text-gray-700" />,
        text: "Everything included: Bilingual support, essential POS features, integrated payments, and reporting tools.",
      },
      {
        icon: <TrendingUp className="text-[22px] text-gray-700" />,
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
  { id: "t7", src: imgWeb7, alt: "tile", className: "bottom-16 right-70 md:bottom-12 md:right-16", size: 116 },
  { id: "t8", src: imgWeb8, alt: "tile", className: "top-40 left-1/2 -translate-x-1/2 md:left-[45%] md:translate-x-0", size: 92 },
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

const videoSrc = "/videoBg.mp4";

export default function HomePage() {

  const [hovered, setHovered] = useState<number | null>(null);

  const scope = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(scope, { amount: 0.3 });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (inView) controls.start("show");
    else controls.start("hidden");
  }, [inView, controls]);

  return (
    <main className="w-full min-h-screen">
      <section className="relative w-full h-screen min-h-[520px] overflow-hidden mask-[linear-gradient(to_top,transparent_0%,white_10%)]">
        <video
          className="absolute inset-0 w-full h-full object-[50%_35%] object-cover sm:object-center"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50 sm:bg-black/35" />
        <div className="bottom-0 absolute inset-x-0 bg-linear-to-t from-black/70 to-transparent h-40" />
        <div className="z-10 relative flex flex-col justify-center items-center mx-auto px-4 max-w-6xl h-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight"
          >
            Designed for Nail Artists
            <br className="hidden sm:block" /> Perfected for Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 max-w-2xl text-white/60 text-base/7 sm:text-lg/8 text-balance"
          >
            RAVO helps you manage clients, payments, and growth effortlessly — beauty meets precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-4 mt-8"
          >
            <a
              href="tel:+13463267765"
              className="hover:bg-white shadow-lg px-10 py-3 border border-white rounded-full font-medium text-white hover:text-black hover:scale-[1.1] active:scale-[0.98] transition"
            >
              Get Started
            </a>
          </motion.div>

        </div>
        <div className="bottom-5 md:bottom-0 left-0 absolute w-full">
          <LogoMarquee logos={logos} speedSeconds={25} gapRem={4} showEdges={false} />
        </div>
      </section>
      <section className="py-10 md:py-20 min-h-screen text-black">
        <section className="mx-auto px-4 pt-16 pb-8 max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[10px] text-gray-400 sm:text-xs uppercase tracking-[0.25em]"
          >
            Why Choose RAVO?
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-3 font-serif text-3xl md:text-6xl leading-tight"
          >
            Work Faster, Serve Better <br className="hidden sm:block" />
            Stay in Control with RAVO
          </motion.h1>
        </section>

        <section className="mx-auto px-4 py-10 max-w-[1200px]">
          <div
            className="[&::-webkit-scrollbar]:hidden flex justify-start gap-3 sm:gap-4 lg:gap-5 lg:overflow-visible overflow-x-auto snap-mandatory snap-x [scrollbar-width:none]"
          >
            {ITEMS.map((it, i) => {
              const active = hovered === i;
              return (
                <motion.div
                  key={it.key}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="isolate relative rounded-2xl w-[82vw] xs:w-[78vw] sm:w-[70vw] md:w-[52vw] lg:w-[250px] min-w-[70vw] xs:min-w-[68vw] sm:min-w-[60vw] md:min-w-[46vw] lg:min-w-[250px] max-w-[86vw] sm:max-w-[72vw] md:max-w-[54vw] lg:max-w-none h-[420px] xs:h-[440px] sm:h-[480px] lg:h-[520px] overflow-hidden snap-center shrink-0"
                  animate={{
                    width: active ? 500 : 250,
                    opacity: active ? 1 : 0.8,
                    scale: active ? 1.02 : 1,
                  }}
                  initial={{ width: 200, opacity: 0.8, scale: 1 }}
                  transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
                >
                  <Image
                    src={it.bg}
                    alt={it.vertical}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    sizes="(max-width:1024px) 80vw, 500px"
                  />

                  <motion.div
                    className="absolute inset-0 bg-black"
                    animate={{ opacity: active ? 0.25 : 0.45 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="lg:hidden top-3 left-3 absolute">
                    <span className="bg-black/40 backdrop-blur px-2 py-1 rounded-lg font-semibold text-white/90 text-sm">
                      {it.vertical}
                    </span>
                  </div>
                  <motion.div
                    className="hidden lg:block top-3 right-3 absolute pointer-events-none"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    animate={{ opacity: active ? 0 : 1, y: active ? -8 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="drop-shadow font-semibold text-white/85 text-3xl sm:text-4xl tracking-tight select-none">
                      {it.vertical}
                    </span>
                  </motion.div>
                  <div className="absolute inset-0 flex items-end pointer-events-none">
                    <motion.div
                      className="m-4 sm:m-5 lg:m-6"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: active ? 1 : 0, y: active ? 0 : 12 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] font-bold text-white/90 text-2xl sm:text-3xl lg:text-4xl text-left leading-[1.05] tracking-[-0.01em] whitespace-pre-line">
                        {it.large}
                      </div>

                      <hr className="my-3 sm:my-4 lg:my-5 border-white/40 border-t" />

                      {it.detail && (
                        <div
                          className="bg-black/25 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-0 mt-2 sm:mt-3 p-3 lg:p-0 rounded-lg font-mono text-[13px] text-white/90 sm:text-sm"
                        >
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
      <section className="mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-10 max-w-7xl h-screen">
        <p className="font-medium text-[10px] text-gray-500 md:text-xs uppercase tracking-[0.18em]">
          RAVO Hardware that works beautifully
        </p>
        <motion.div
          ref={scope}
          variants={stagger}
          initial="hidden"
          animate={controls}
          className="z-10 relative flex flex-col justify-center mt-3"
        >
          <motion.h1
            variants={fadeUp}
            className="font-serif text-black text-3xl md:text-6xl leading-tight"
          >
            Smooth check-in <br className="hidden sm:block" /> Seamless checkout every time
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-3xl font-sans text-gray-600 text-base md:text-lg"
          >
            From terminals to digital signage — All elegant, connected, and easy to use.
          </motion.p>
          <div className="-bottom-2 left-0 absolute bg-linear-to-t from-white/80 via-white/40 to-transparent w-full h-40 pointer-events-none" />
        </motion.div>
        <div className="mt-10">
          <HardwareCardsInteractive />
        </div>
      </section>
      <section className="mx-auto py-0 md:py-20 h-screen">
        <CollageHero tiles={tiles} />
      </section>
      <section className="flex flex-col justify-center items-center md:px-20 md:pt-10 min-h-screen text-black">
        <section className="mx-auto px-4 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.6, once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:mt-3 mb-10 font-serif text-4xl md:text-6xl text-center leading-tight text2xl"
          >
            Everything Your Nail Salon Needs {<br />} In One POS System
          </motion.h1>
        </section>
        <StickyScrollySteps steps={STEPS} />
      </section>
      <section className="w-full h-auto md:h-screen">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="gap-6 sm:gap-8 lg:gap-14 grid grid-cols-1 lg:grid-cols-2 mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 max-w-7xl"
        >
          <motion.div
            variants={fadeUp}
            className="bg-white/70 shadow-[0_18px_50px_rgba(0,0,0,0.07)] backdrop-blur p-5 sm:p-7 md:p-8 border border-black/10 rounded-2xl md:rounded-3xl"
          >
            <p className="text-[11px] text-gray-500 sm:text-xs uppercase tracking-[0.18em]">
              Fast, Secure &amp; Affordable
            </p>
            <h2 className="mt-2 font-semibold text-black text-2xl sm:text-3xl md:text-4xl tracking-tight">
              Credit Card Processing
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              Payments are the heartbeat of your business. RAVO brings wholesale credit card
              processing into your POS for nail salons — for clarity, speed, and savings.
            </p>

            <motion.ul variants={stagger} className="space-y-3 sm:space-y-4 mt-5 sm:mt-6">
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
                <motion.li key={i} variants={fadeUp} className="flex gap-2.5 sm:gap-3 text-left">
                  <CheckCircleRounded className="mt-0.5 text-black" fontSize="small" />
                  <div>
                    <p className="font-medium text-black text-sm sm:text-base">{item.title}</p>
                    <p className="text-gray-600 sm:text-[15px] text-sm">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <p className="mt-5 sm:mt-6 text-gray-700 text-xs sm:text-sm leading-relaxed">
              Peace of mind: next-day funding options, clear statements, and automatic reconciliation.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/products/creditCard/"
                className="inline-flex justify-center items-center gap-2 bg-black hover:bg-transparent px-5 py-2.5 border border-black rounded-full w-full sm:w-auto font-medium text-white hover:text-black text-sm transition-colors"
              >
                View Details on Card Processing <NorthEast />
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-white/70 shadow-[0_18px_50px_rgba(0,0,0,0.07)] backdrop-blur p-5 sm:p-7 md:p-8 border border-black/10 rounded-2xl md:rounded-3xl"
          >
            <p className="text-[11px] text-gray-500 sm:text-xs uppercase tracking-[0.18em]">
              Payroll Services
            </p>
            <h2 className="mt-2 font-semibold text-black text-2xl sm:text-3xl md:text-4xl tracking-tight">
              Stress-Free Payroll, Every Time
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              Payroll at salons is unique: commissions, tips, tech payouts, and compliance.
              RAVO’s payroll services simplify everything.
            </p>

            <div className="bg-gray-50 mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl">
              <p className="font-semibold text-black text-sm">Financial Wellbeing (for employees)</p>
              <motion.ul variants={stagger} className="space-y-2.5 sm:space-y-3 mt-3 sm:mt-4">
                {[
                  { title: "Direct Deposit", desc: "Fast, secure access to earnings." },
                  { title: "Transparent Pay Stubs", desc: "Clear tip and commission breakdowns." },
                  { title: "Managing Benefits & Deductions" },
                  {
                    title: "Optional Savings & Retirement",
                    desc: "Setup assistance for tax-advantaged programs.",
                  },
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex gap-2.5 sm:gap-3 text-gray-700">
                    <CheckCircleRounded className="mt-0.5 text-black" fontSize="small" />
                    <span className="sm:text-[15px] text-sm">
                      <span className="font-medium text-black">{item.title}</span>
                      {item.desc ? ` — ${item.desc}` : ""}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="bg-gray-50 mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl">
              <p className="font-semibold text-black text-sm">For owners</p>
              <motion.ul variants={stagger} className="space-y-2.5 sm:space-y-3 mt-3 sm:mt-4">
                {[
                  { title: "Tip & Commission Logic", desc: "Configured to your exact policy." },
                  { title: "Year-End Forms & Compliance", desc: "Stay audit-ready without the headache." },
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex gap-2.5 sm:gap-3 text-gray-700">
                    <CheckCircleRounded className="mt-0.5 text-black" fontSize="small" />
                    <span className="sm:text-[15px] text-sm">
                      <span className="font-medium text-black">{item.title}</span> — {item.desc}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/products/payroll/"
                className="inline-flex justify-center items-center gap-2 bg-black hover:bg-transparent px-5 py-2.5 border border-black rounded-full w-full sm:w-auto font-medium text-white hover:text-black text-sm transition-colors"
              >
                Streamline Salon Payroll <NorthEast />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
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
      <section className="md:py-20 w-full">
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
    <section className="isolate relative bg-white overflow-hidden text-black">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="relative h-[560px] md:h-[620px]">
          <div className="z-20 relative place-items-center grid px-6 h-full text-center">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-gray-500 text-sm uppercase tracking-[0.2em]">
                Web Design for Nail Salons
              </p>
              <h2 className="bg-clip-text bg-linear-to-b from-black to-gray-700 font-serif text-transparent md:text-[56px] text-4xl sm:text-5xl leading-tight tracking-tight">
                Custom websites for nail salons
                <br className="hidden sm:block" />
                <span className="font-sans text-gray-800">
                  From nails to clicks — we make your salon shine online.
                </span>
              </h2>
              <div className="flex justify-center gap-4 mt-8">
                <a
                  href="/other/website/"
                  className="hover:bg-black/80 px-6 py-3 border border-gray-400 rounded-full font-serif font-medium text-gray-700 text-md hover:text-white hover:scale-105 transition-colors duration-300 cursor-pointer">
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
                  "w-20 h-20 sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px]",
                  t.className || "",
                ].join(" ")}
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 140px"
                  priority={i < 5}
                />
              </motion.div>
            );

            return t.href ? (
              <Link
                key={t.id}
                href={t.href}
                aria-label={t.alt}
                className="absolute"
              >
                {content}
              </Link>
            ) : (
              content
            );
          })}

        </div>
      </div>

      {/* background */}
      <div className="-z-10 absolute inset-0 bg-white" />
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
                className="opacity-80 group-hover:opacity-100 w-auto h-30 md:h-32 lg:h-36 transition"
              />
            </div>
          ))}
        </div>
      </div>

      {showEdges && (
        <>
          <div className="left-0 absolute inset-y-0 bg-linear-to-r from-black to-transparent w-24 pointer-events-none" />
          <div className="right-0 absolute inset-y-0 bg-linear-to-l from-black to-transparent w-24 pointer-events-none" />
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










