// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";


// import { fadeUp, stagger } from "@/app/components/variants";
// import ThreeLayerShowcase from "@/app/components/ThreeLayerShowcase";
// import AccordionItem from "@/app/components/AccordionItem";


// import NorthEastIcon from "@mui/icons-material/NorthEast";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
// import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";


// import bg from "@/app/assets/about1.png";
// import left from "@/app/assets/about1.png";
// import right from "@/app/assets/about1.png";


// const ITEMS = [
//     {
//         title: "Market your business more effectively.",
//         desc: "Whether you want to promote in-store events and new products, send last-minute deals, or provide seasonal offers, RAVO Marketing can help you drive traffic to your stores. Choose a campaign type and template based on your goals.",
//         image: bg,
//     },
//     {
//         title: "Save time with automations.",
//         desc: "Let RAVO do the work so you can focus on running your business. Set up automated campaigns to welcome new customers, send birthday wishes, bring back lapsed guests, or send reminders—all trackable from your dashboard.",
//         image: bg,
//     },
//     {
//         title: "Make the most of our free CRM tools.",
//         desc: "RAVO Customer Directory gives you a 360° view of your customers. Track interactions, group them by behavior, and sync sales across channels—all in one place.",
//         image: bg,
//     },
//     {
//         title: "Reach new customers with Google Reviews.",
//         desc: "Automatically request reviews after checkout. Build trust, attract new clients, and grow your reputation—at no extra cost.",
//         image: bg,
//     },
// ];

// const TOOLITEMS = [
//     {
//         title: "Square Email Marketing",
//         desc:
//             "Create, send, and track email campaigns in minutes to increase repeat business.",
//         image: bg,
//         ctaLabel: "Explore Square Email Marketing",
//         ctaHref: "/products/marketing/email",
//     },
//     {
//         title: "Square Text Message Marketing",
//         desc:
//             "Reach customers directly and easily with one-time and automated text message campaigns.",
//         image: bg,
//         ctaLabel: "Explore Square Text Message Marketing",
//         ctaHref: "/products/marketing/sms",
//     },
// ];

// const INTERGRATIONITEMS = [
//     {
//         icon: <ChatBubbleOutlineIcon sx={{ fontSize: 40 }} />,
//         title: "Follow up email campaigns with a text.",
//         desc: (
//             <>
//                 Boost <strong>customer engagement</strong> by following up an email campaign
//                 with a text message to remind customers about your promotion before it ends.
//             </>
//         ),
//     },
//     {
//         icon: <StorefrontOutlinedIcon sx={{ fontSize: 40 }} />,
//         title: "Drive traffic to all your storefronts.",
//         desc: (
//             <>
//                 Email and text message campaigns are a great way to promote your online or
//                 physical store. When used together, they can help take customers from
//                 interested to sold.
//             </>
//         ),
//     },
//     {
//         icon: <CampaignOutlinedIcon sx={{ fontSize: 40 }} />,
//         title: "Reach a broader audience.",
//         desc: (
//             <>
//                 Texts have a <strong>98% open rate</strong> and are a direct, personal way to
//                 reach customers. Use text and email campaigns together to engage customers
//                 wherever they are.
//             </>
//         ),
//     },
// ];

// const ITEMSFAQ: { q: string; a: string }[] = [
//     {
//         q: "Is RAVO really optimized for nail salons?",
//         a: "Yes. RAVO is a Nail Salon POS system tuned for services, add-ons, tips, commissions, memberships, and multi-tech tickets.",
//     },
//     {
//         q: "Can my Vietnamese-speaking team use it comfortably?",
//         a: "Absolutely. RAVO’s interface is simple and intuitive, and when questions come up, our bilingual support team helps in Vietnamese or English, any time.",
//     },
//     {
//         q: "Do you limit the number of clients or check-ins?",
//         a: "No. RAVO offers unlimited check-in/out and unlimited client profiles.",
//     },
//     {
//         q: "How long does setup take?",
//         a: "When we collect your details in advance (service menu, prices, commission/tip rules, staff list, devices), setup and training usually take 30–60 minutes. We’ll plug in devices, confirm your menu, configure commissions/tips, and walk your team through check-in/out and payments. Most salons start running same day.",
//     },
//     {
//         q: "Do you help with Google reviews and SEO?",
//         a: "Yes. Our marketing services include SEO, review generation, and social media content made for salons.",
//     },
//     {
//         q: "Can I manage multiple locations?",
//         a: "Yes. Centralized reporting and user controls make multi-location management easy.",
//     },
//     {
//         q: "What about pricing and fees?",
//         a: "We use transparent, wholesale-style pricing. No hidden fees, no surprise hikes.",
//     },
//     {
//         q: "What are your support hours?",
//         a: "Our support is available daily from 8:00 AM to 1:00 AM EST. Support is available to English and Vietnamese speakers.",
//     },
// ];


// const MarketingPage = () => {
//     const [openIndex, setOpenIndex] = useState<number | null>(0);
//     return (
//         <main>
//             <section className="bg-white w-full overflow-hidden text-black">
//                 <motion.div
//                     variants={stagger}
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: true, amount: 0.3 }}
//                     className="mx-auto px-6 sm:px-8 pt-12 sm:pt-20 pb-16 sm:pb-28 max-w-7xl"
//                 >
//                     {/* Eyebrow */}
//                     <motion.p
//                         variants={fadeUp}
//                         className="font-medium text-neutral-500 text-sm tracking-wide"
//                     >
//                         Square Marketing
//                     </motion.p>

//                     {/* Headline */}
//                     <motion.h1
//                         variants={fadeUp}
//                         className="mt-4 font-serif font-semibold text-[40px] sm:text-[64px] md:text-[84px] lg:text-[108px] xl:text-[124px] leading-[0.95] tracking-tight"
//                     >
//                         Engage customers
//                         <br />
//                         and reach new ones.
//                     </motion.h1>

//                     {/* Sub copy */}
//                     <motion.p
//                         variants={fadeUp}
//                         className="mt-6 max-w-4xl text-[18px] text-neutral-600 md:text-[20px] leading-7 md:leading-8"
//                     >
//                         Expand your business with personalized, one-time and automated email and text
//                         campaigns to keep your customers engaged.
//                     </motion.p>

//                     {/* CTAs */}
//                     <motion.div
//                         variants={fadeUp}
//                         className="flex flex-wrap gap-4 mt-8"
//                     >
//                         <Link
//                             href="#email"
//                             className="inline-flex justify-center items-center bg-black shadow-sm hover:shadow-md px-6 py-3 rounded-full focus:outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-black font-semibold text-[15px] text-white transition hover:-translate-y-0.5"
//                         >
//                             Try email marketing
//                         </Link>

//                         <Link
//                             href="#sms"
//                             className="inline-flex justify-center items-center bg-white shadow-sm hover:shadow-md px-6 py-3 border border-neutral-300 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400 font-semibold text-[15px] text-black transition hover:-translate-y-0.5"
//                         >
//                             Try text message marketing
//                         </Link>
//                     </motion.div>
//                 </motion.div>
//             </section>
//             <section>
//                 {/* ...Hero ở trên */}
//                 <ThreeLayerShowcase
//                     bg={bg}
//                     left={left}
//                     right={right}
//                     altBg="Design your campaign canvas"
//                     altLeft="Email campaign preview"
//                     altRight="SMS coupon preview"
//                 />
//                 {/* ...section tiếp theo */}
//             </section>
//             <section className="bg-white w-full text-black">
//                 <div className="mx-auto px-6 sm:px-8 py-20 sm:py-28 max-w-7xl">
//                     {/* Heading */}
//                     <motion.h2
//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true, amount: 0.35 }}
//                         className="max-w-3xl font-serif font-semibold text-3xl sm:text-5xl leading-tight"
//                     >
//                         Build stronger customer relationships and drive repeat business
//                     </motion.h2>

//                     {/* Items */}
//                     <div className="flex flex-col gap-20 mt-16">
//                         {ITEMS.map((item, i) => (
//                             <div
//                                 key={i}
//                                 className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""
//                                     }`}
//                             >
//                                 {/* Text */}
//                                 <motion.div
//                                     variants={fadeUp}
//                                     initial="hidden"
//                                     whileInView="show"
//                                     viewport={{ once: true }}
//                                     className="max-w-lg"
//                                 >
//                                     <h3 className="font-semibold text-xl">{item.title}</h3>
//                                     <p className="mt-3 text-neutral-700 leading-relaxed">{item.desc}</p>
//                                 </motion.div>

//                                 {/* Image */}
//                                 <motion.figure
//                                     variants={fadeUp}
//                                     initial="hidden"
//                                     whileInView="show"
//                                     viewport={{ once: true }}
//                                     className="relative rounded-2xl ring-1 ring-black/5 overflow-hidden"
//                                 >
//                                     <Image
//                                         src={item.image}
//                                         alt={""}
//                                         className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
//                                     />
//                                 </motion.figure>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             <section className="bg-white w-full text-black">
//                 <div className="mx-auto px-6 sm:px-8 py-20 sm:py-28 max-w-7xl">
//                     <motion.h2
//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true, amount: 0.3 }}
//                         className="font-serif text-3xl sm:text-6xl leading-tight"
//                     >
//                         Marketing tools to help you keep growing
//                     </motion.h2>

//                     <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-14">
//                         {TOOLITEMS.map((it, i) => (
//                             <motion.article
//                                 key={i}
//                                 variants={fadeUp}
//                                 initial="hidden"
//                                 whileInView="show"
//                                 viewport={{ once: true, amount: 0.25 }}
//                                 className="group"
//                             >
//                                 {/* Image */}
//                                 <figure className="relative rounded-3xl ring-1 ring-black/5 overflow-hidden">
//                                     <div className="relative aspect-16/10">
//                                         <Image
//                                             src={it.image}
//                                             alt={""}
//                                             fill
//                                             sizes="(max-width: 1024px) 100vw, 50vw"
//                                             className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
//                                             priority={i < 2}
//                                         />
//                                     </div>
//                                 </figure>

//                                 {/* Text */}
//                                 <div className="mt-6">
//                                     <h3 className="font-semibold text-[28px] sm:text-[34px] leading-[1.15]">
//                                         {it.title}
//                                     </h3>
//                                     <p className="mt-3 text-[15px] text-neutral-700 leading-7">
//                                         {it.desc}
//                                     </p>

//                                     <a
//                                         href={it.ctaHref}
//                                         className="inline-flex items-center gap-2 mt-4 font-semibold text-[15px] hover:underline underline-offset-4"
//                                     >
//                                         {it.ctaLabel} <NorthEastIcon fontSize="small" />
//                                     </a>
//                                 </div>
//                             </motion.article>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             <section className="bg-white w-full text-black">
//                 <div className="mx-auto px-6 sm:px-8 py-20 sm:py-28 max-w-7xl text-center">
//                     <motion.h2
//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true, amount: 0.3 }}
//                         className="mx-auto max-w-3xl font-serif text-3xl sm:text-5xl leading-tight"
//                     >
//                         Tools that work together for a complete marketing solution
//                     </motion.h2>

//                     <div className="gap-12 sm:gap-10 grid grid-cols-1 md:grid-cols-3 mt-16 text-left">
//                         {INTERGRATIONITEMS.map((item, i) => (
//                             <motion.div
//                                 key={i}
//                                 variants={fadeUp}
//                                 initial="hidden"
//                                 whileInView="show"
//                                 viewport={{ once: true }}
//                                 className="flex flex-col items-start"
//                             >
//                                 <div className="inline-flex bg-neutral-100 mb-5 p-4 rounded-2xl">
//                                     {item.icon}
//                                 </div>
//                                 <h3 className="font-semibold text-lg sm:text-xl">{item.title}</h3>
//                                 <p className="mt-3 text-[15px] text-neutral-700 leading-7">
//                                     {item.desc}
//                                 </p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             <section className="bg-neutral-100/80 w-full text-black">
//                 {/* subtle pattern */}
//                 <div className="relative">
//                     <div className="absolute inset-0 bg-size-[22px_22px] pointer-events-none [background:radial-gradient(circle_at_20px_20px,#0000000d_1px,transparent_1px)]"></div>

//                     <div className="relative mx-auto px-6 sm:px-8 py-20 sm:py-28 max-w-7xl">
//                         {/* card container */}
//                         <div className="bg-white/70 shadow-sm backdrop-blur-sm border border-black/5 rounded-3xl overflow-hidden">
//                             <div className="items-center gap-10 grid lg:grid-cols-2 p-8 sm:p-12">
//                                 {/* left */}
//                                 <motion.div
//                                     variants={fadeUp}
//                                     initial="hidden"
//                                     whileInView="show"
//                                     viewport={{ once: true, amount: 0.3 }}
//                                 >
//                                     <span className="inline-flex items-center gap-2 bg-white px-3 py-1 border border-black/10 rounded-full font-medium text-neutral-700 text-xs">
//                                         Simple pricing
//                                         <span className="bg-emerald-500 rounded-full w-1.5 h-1.5"></span>
//                                     </span>

//                                     <h2 className="mt-4 max-w-xl font-serif text-3xl sm:text-5xl leading-tight">
//                                         Get one plan for your entire business
//                                     </h2>
//                                 </motion.div>

//                                 {/* right */}
//                                 <motion.div
//                                     variants={fadeUp}
//                                     initial="hidden"
//                                     whileInView="show"
//                                     viewport={{ once: true }}
//                                     className="lg:justify-self-end max-w-xl"
//                                 >
//                                     <p className="text-[15px] text-neutral-700 leading-7">
//                                         Run marketing campaigns alongside your daily operations. No hidden fees or
//                                         locked-in contracts. Cancel or switch plans anytime.
//                                     </p>

//                                     {/* tiny perks */}
//                                     <ul className="gap-2 grid grid-cols-1 sm:grid-cols-2 mt-4 text-[13px] text-neutral-600">
//                                         <li className="flex items-center gap-2">
//                                             <span className="bg-black/80 rounded-full w-1.5 h-1.5" />
//                                             Month-to-month flexibility
//                                         </li>
//                                         <li className="flex items-center gap-2">
//                                             <span className="bg-black/80 rounded-full w-1.5 h-1.5" />
//                                             Transparent pricing
//                                         </li>
//                                         <li className="flex items-center gap-2">
//                                             <span className="bg-black/80 rounded-full w-1.5 h-1.5" />
//                                             Cancel anytime
//                                         </li>
//                                         <li className="flex items-center gap-2">
//                                             <span className="bg-black/80 rounded-full w-1.5 h-1.5" />
//                                             Upgrade/downgrade instantly
//                                         </li>
//                                     </ul>

//                                     {/* CTAs */}
//                                     <div className="flex flex-wrap items-center gap-3 mt-6">
//                                         <Link
//                                             href="/pricing"
//                                             className="inline-flex justify-center items-center bg-black shadow-sm hover:shadow-md px-6 py-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60 font-semibold text-white text-sm transition hover:-translate-y-0.5 active:translate-y-0 will-change-transform"
//                                         >
//                                             Compare plans
//                                         </Link>

//                                         <Link
//                                             href="/contact"
//                                             className="inline-flex justify-center items-center px-4 py-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 font-semibold text-neutral-800 text-sm hover:underline underline-offset-4"
//                                         >
//                                             Talk to sales
//                                         </Link>
//                                     </div>
//                                 </motion.div>
//                             </div>

//                             {/* soft bottom separator */}
//                             <div className="bg-linear-to-r from-transparent via-black/5 to-transparent w-full h-2" />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="mx-auto px-20 py-20 w-full text-black">
//                 <motion.h2
//                     variants={fadeUp}
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: true, amount: 0.4 }}
//                     className="font-serif text-black text-5xl sm:text-6xl faq-heading"
//                 >
//                     FAQ
//                 </motion.h2>


//                 <div className="bg-neutral-200 mt-20 w-full h-px" />

//                 <motion.div
//                     variants={stagger}
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: true, amount: 0.2 }}
//                     className="border-neutral-200 border-t text-black"
//                 >
//                     {ITEMSFAQ.map((item, i) => (
//                         <AccordionItem
//                             key={i}
//                             idx={i}
//                             q={item.q}
//                             a={item.a}
//                             isOpen={openIndex === i}
//                             onToggle={() => setOpenIndex(openIndex === i ? null : i)}
//                         />
//                     ))}
//                 </motion.div>

//             </section>
//         </main>
//     )

// }

const MarketingPage = () => { }

export default MarketingPage;