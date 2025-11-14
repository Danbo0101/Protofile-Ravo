// "use client";

// import { useEffect } from "react";
// import { motion } from "framer-motion";
// // đổi path này về đúng chỗ bạn đang để variants
// import { fadeUp, fadeIn, floatIn, EASE_OUT } from "@/app/components/variants";

// /**
//  * PrivacyPolicyPage — version “sạch & sang”
//  * - Nền pattern radial rất nhẹ, không lòe loẹt
//  * - Hero lớn, badge "Legal", meta dates, breadcrumb
//  * - Card intro kiểu "glass" với viền gradient hairline
//  * - TOC sticky + hover mượt, anchor scroll offset cho header
//  * - Typography cân chỉnh lại: serif cho heading, tracking & leading đẹp
//  * - Dùng thuần Tailwind + variants có sẵn
//  */

// const TOC = [
//     { id: "overview", label: "Overview" },
//     { id: "information-we-collect", label: "Information We Collect" },
//     { id: "how-we-use", label: "How We Use Information" },
//     { id: "sms-privacy", label: "SMS Privacy" },
//     { id: "information-sharing", label: "Information Sharing" },
//     { id: "cookies-tracking", label: "Cookies & Tracking" },
//     { id: "data-security", label: "Data Security" },
//     { id: "data-retention", label: "Data Retention" },
//     { id: "your-rights", label: "Your Rights" },
//     { id: "contact", label: "Contact" },
// ];

// export default function PrivacyPolicyPage() {
//     // Smooth anchor scroll (offset ~ sticky header 96px)
//     useEffect(() => {
//         const onClick = (e: Event) => {
//             const t = e.target as HTMLElement;
//             const a = t.closest("a[href^='#']") as HTMLAnchorElement | null;
//             if (!a) return;
//             const id = a.getAttribute("href")!.slice(1);
//             const el = document.getElementById(id);
//             if (!el) return;
//             e.preventDefault();
//             const y = el.getBoundingClientRect().top + window.scrollY - 96;
//             window.scrollTo({ top: y, behavior: "smooth" });
//             history.replaceState(null, "", `#${id}`);
//         };
//         document.addEventListener("click", onClick);
//         return () => document.removeEventListener("click", onClick);
//     }, []);

//     return (
//         <div
//             className={[
//                 "min-h-screen text-neutral-900 selection:bg-neutral-900 selection:text-white",
//                 // Nền radial siêu nhẹ
//                 "bg-white",
//                 "bg-[radial-gradient(1000px_600px_at_40%_-10%,rgba(0,0,0,0.06),transparent_60%)]",
//             ].join(" ")}
//         >
//             <div className="mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 w-full max-w-6xl">
//                 {/* Breadcrumb + Hero */}
//                 <motion.div
//                     variants={floatIn}
//                     initial="hidden"
//                     animate="show"
//                     transition={{ duration: 0.6, ease: EASE_OUT }}
//                     className="mb-10 md:mb-14"
//                 >
//                     <nav className="text-neutral-500 text-xs uppercase tracking-[0.18em]">
//                         <span className="hover:text-neutral-900 transition-colors">Home</span>
//                         <span className="mx-2">/</span>
//                         <span className="text-neutral-800">Legal</span>
//                         <span className="mx-2">/</span>
//                         <span className="text-neutral-900">Privacy Policy</span>
//                     </nav>

//                     <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur mt-5 px-4 py-1.5 border border-neutral-200/80 rounded-full text-[11px] text-neutral-600 uppercase tracking-[0.2em]">
//                         Legal
//                     </div>

//                     <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight">
//                         Privacy Policy
//                     </h1>

//                     <div className="flex flex-wrap items-center gap-3 mt-4 text-neutral-600 text-sm">
//                         <MetaPill label="Effective Date" value="October 16, 2025" />
//                         <MetaPill label="Last Updated" value="October 16, 2025" />
//                     </div>

//                     {/* Intro “glass” card với hairline gradient */}
//                     <div className="relative mt-6">
//                         <GradientHairline />
//                         <div className="bg-white/70 backdrop-blur px-5 md:px-6 py-5 md:py-6 border border-neutral-200/80 rounded-2xl text-[15px] text-neutral-800 leading-relaxed">
//                             Ravo POS (“Company,” “we,” “us,” or “our”), located at{" "}
//                             <span className="font-medium">
//                                 5605 Bellaire Blvd, Suite B, Houston, TX 77081
//                             </span>
//                             , provides point-of-sale (POS) hardware and software solutions, payment
//                             processing, marketing, and design services under the business name “RAVO.”
//                             We respect your privacy and are committed to protecting the personal
//                             information you share with us. This Privacy Policy explains how we collect,
//                             use, disclose, and safeguard your information when you visit{" "}
//                             <span className="decoration-neutral-300 underline underline-offset-2">
//                                 https://ravopos.com
//                             </span>{" "}
//                             or use our services, including SMS messaging.
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Body: TOC + Content */}
//                 <div className="gap-10 grid lg:grid-cols-[290px,1fr]">
//                     {/* TOC */}
//                     <motion.aside
//                         variants={fadeIn}
//                         initial="hidden"
//                         animate="show"
//                         transition={{ duration: 0.5, ease: EASE_OUT }}
//                         className="lg:top-24 lg:sticky h-fit"
//                     >
//                         <div className="bg-white/70 backdrop-blur border border-neutral-200/80 rounded-2xl overflow-hidden">
//                             <div className="px-5 py-4 border-neutral-200/80 border-b">
//                                 <p className="text-neutral-500 text-xs uppercase tracking-[0.18em]">
//                                     Table of Contents
//                                 </p>
//                             </div>
//                             <ul className="p-2">
//                                 {TOC.map((item) => (
//                                     <li key={item.id}>
//                                         <a
//                                             href={`#${item.id}`}
//                                             className="group flex items-center gap-2 hover:bg-neutral-100/80 px-3 py-2 rounded-xl text-neutral-700 text-sm"
//                                         >
//                                             <span className="bg-neutral-300 group-hover:bg-neutral-900 rounded-full size-1.5 transition-colors" />
//                                             <span className="group-hover:text-neutral-900 transition-colors">
//                                                 {item.label}
//                                             </span>
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </motion.aside>

//                     {/* Article */}
//                     <article className="max-w-3xl">
//                         <Section id="overview" title="Overview">
//                             <p>
//                                 This Privacy Policy applies to our website and services, including POS
//                                 solutions, payment processing, marketing, and design services. By
//                                 accessing or using our services, you acknowledge that you have read and
//                                 understand this Policy.
//                             </p>
//                         </Section>

//                         <Section id="information-we-collect" title="Information We Collect">
//                             <p className="mb-3">We may collect the following types of information:</p>
//                             <UL>
//                                 <LI head="Personal Information">
//                                     Name, email, phone number, mailing/billing address, and payment details.
//                                 </LI>
//                                 <LI head="Business Information">
//                                     Merchant account details, transaction data, POS system usage, and
//                                     related records.
//                                 </LI>
//                                 <LI head="Technical Information">
//                                     IP address, browser type, device information, cookies, and usage data.
//                                 </LI>
//                             </UL>
//                         </Section>

//                         <Section id="how-we-use" title="How We Use Information">
//                             <p className="mb-3">We may use your information to:</p>
//                             <UL>
//                                 <li>Provide, operate, and improve our POS, payment, and marketing services.</li>
//                                 <li>Process payments securely and safeguard against fraudulent activity.</li>
//                                 <li>Send communications, including account updates, support responses, and service notices.</li>
//                                 <li>Deliver SMS communications where you have provided consent.</li>
//                                 <li>Comply with applicable U.S. federal and Texas state laws.</li>
//                             </UL>
//                         </Section>

//                         <Section id="sms-privacy" title="SMS Privacy" badge="SMS">
//                             <UL>
//                                 <LI head="Purpose">
//                                     Your phone number will only be used to send the types of messages you
//                                     agreed to receive (e.g., account alerts, reminders, security notices,
//                                     promotional offers).
//                                 </LI>
//                                 <LI head="No Sharing">
//                                     Phone numbers collected for SMS will not be shared with third parties or
//                                     affiliates for marketing purposes.
//                                 </LI>
//                                 <LI head="Frequency">
//                                     Transactional messages (alerts, reminders) may vary depending on your
//                                     activity. Promotional/marketing messages are limited to a maximum of 4
//                                     per month.
//                                 </LI>
//                                 <LI head="Opt-Out">
//                                     You may opt out at any time by replying “STOP” to a text message. For
//                                     assistance, reply “HELP” or contact us using the details below.
//                                 </LI>
//                                 <LI head="Charges">
//                                     Standard message and data rates may apply depending on your carrier.
//                                 </LI>
//                             </UL>
//                         </Section>

//                         <Section id="information-sharing" title="Information Sharing">
//                             <p className="mb-3">
//                                 We do not sell your personal information. We may share limited data only
//                                 in the following circumstances:
//                             </p>
//                             <UL>
//                                 <LI head="Service Providers">
//                                     With trusted third parties that support our operations (e.g., payment
//                                     processors, IT support).
//                                 </LI>
//                                 <LI head="Legal Authorities">
//                                     If required to comply with law, subpoena, or regulatory request.
//                                 </LI>
//                                 <LI head="Business Transfers">
//                                     In the event of a merger, acquisition, or sale of company assets.
//                                 </LI>
//                             </UL>
//                         </Section>

//                         <Section id="cookies-tracking" title="Cookies & Tracking">
//                             <p className="mb-3">We use cookies and similar technologies to:</p>
//                             <UL>
//                                 <li>Enhance site performance</li>
//                                 <li>Analyze usage trends</li>
//                                 <li>Personalize content</li>
//                             </UL>
//                             <p className="mt-3">
//                                 You may disable cookies in your browser settings, but certain features may
//                                 not function properly.
//                             </p>
//                         </Section>

//                         <Section id="data-security" title="Data Security">
//                             <p>
//                                 We implement technical, administrative, and physical safeguards to protect
//                                 your data. However, no transmission method over the Internet or storage
//                                 system is completely secure, and we cannot guarantee absolute protection.
//                             </p>
//                         </Section>

//                         <Section id="data-retention" title="Data Retention">
//                             <p>
//                                 We retain personal information only as long as necessary to provide
//                                 services, comply with legal obligations, resolve disputes, or enforce
//                                 agreements.
//                             </p>
//                         </Section>

//                         <Section id="your-rights" title="Your Rights">
//                             <p className="mb-3">If you are a U.S. resident, you have the right to:</p>
//                             <UL>
//                                 <li>Access the personal information we hold about you</li>
//                                 <li>Request corrections or updates</li>
//                                 <li>Request deletion of your personal information</li>
//                             </UL>
//                             <p className="mt-3">
//                                 To exercise these rights, contact us using the information below. If you
//                                 are located outside the U.S., additional rights may apply under your local
//                                 laws (e.g., GDPR or CCPA).
//                             </p>
//                         </Section>

//                         <Section id="contact" title="Contact">
//                             <div className="bg-white/70 backdrop-blur p-5 border border-neutral-200/80 rounded-xl text-[15px] leading-relaxed">
//                                 <div className="font-medium text-neutral-900">Ravo POS</div>
//                                 <div>5605 Bellaire Blvd, Suite B</div>
//                                 <div>Houston, TX 77081</div>
//                                 {/* Add phone/email nếu cần */}
//                             </div>
//                         </Section>

//                         <motion.div
//                             variants={fadeIn}
//                             initial="hidden"
//                             whileInView="show"
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, ease: EASE_OUT }}
//                             className="mt-10 text-neutral-500 text-xs"
//                         >
//                             We may update this Privacy Policy from time to time. When we make changes,
//                             we will revise the “Last Updated” date at the top of this page.
//                         </motion.div>
//                     </article>
//                 </div>
//             </div>
//         </div>
//     );
// }

// /* ===================== Sub-components ===================== */

// function MetaPill({ label, value }: { label: string; value: string }) {
//     return (
//         <div className="inline-flex items-center gap-2 bg-white/70 px-3 py-1 border border-neutral-200 rounded-full">
//             <span className="text-[11px] text-neutral-500 uppercase tracking-[0.18em]">
//                 {label}
//             </span>
//             <span className="text-neutral-800">{value}</span>
//         </div>
//     );
// }

// function GradientHairline() {
//     return (
//         <div
//             aria-hidden
//             className="absolute -inset-px rounded-[18px] pointer-events-none"
//             style={{
//                 background:
//                     "linear-gradient(90deg, rgba(0,0,0,0.08), rgba(0,0,0,0.18), rgba(0,0,0,0.08))",
//                 mask:
//                     "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
//                 WebkitMask:
//                     "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
//                 WebkitMaskComposite: "xor",
//                 maskComposite: "exclude",
//                 padding: "1px",
//             }}
//         />
//     );
// }

// function Section({
//     id,
//     title,
//     children,
//     badge,
// }: {
//     id: string;
//     title: string;
//     children: React.ReactNode;
//     badge?: string;
// }) {
//     return (
//         <motion.section
//             id={id}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
//             transition={{ duration: 0.55, ease: EASE_OUT }}
//             className="pt-10 scroll-mt-28"
//         >
//             <div className="flex items-center gap-3 mb-5">
//                 <h2 className="font-serif md:text-[28px] text-2xl leading-tight tracking-tight">
//                     {title}
//                 </h2>
//                 {badge ? (
//                     <span className="bg-white/70 px-2.5 py-0.5 border border-neutral-200 rounded-full text-[11px] text-neutral-600 uppercase tracking-[0.18em]">
//                         {badge}
//                     </span>
//                 ) : null}
//             </div>
//             <div className="prose-ul:my-2 max-w-none prose-li:leading-relaxed prose-p:leading-relaxed prose prose-neutral">
//                 {children}
//             </div>
//             <Divider />
//         </motion.section>
//     );
// }

// function Divider() {
//     return (
//         <div className="bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.15),transparent)] my-8 w-full h-px" />
//     );
// }

// function UL({ children }: { children: React.ReactNode }) {
//     return (
//         <ul className="space-y-2 pl-5 text-[15px] marker:text-neutral-400 list-disc">
//             {children}
//         </ul>
//     );
// }

// function LI({ head, children }: { head: string; children: React.ReactNode }) {
//     return (
//         <li>
//             <span className="font-medium text-neutral-900">{head}:</span>{" "}
//             <span className="text-neutral-800">{children}</span>
//         </li>
//     );
// }



export default function PrivacyPolicyPage() { }