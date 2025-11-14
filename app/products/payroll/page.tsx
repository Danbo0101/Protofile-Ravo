// "use client";

// import { motion } from "framer-motion";

// import ReturningInsightsSection from "@/app/components/ReturningInsightsSection";

// import ShowChartIcon from "@mui/icons-material/ShowChart";
// import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
// import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";


// const FEATURES = [
//     {
//         icon: ShowChartIcon,
//         title: "Real-time data",
//         desc: "Keep your finger on the pulse. See what sells best, when funds hit, and your bottom line at a glance.",
//     },
//     {
//         icon: InsightsOutlinedIcon,
//         title: "Customer insights",
//         desc: "Know your customers better—how much they spend and how frequently they return.",
//     },
//     {
//         icon: DescriptionOutlinedIcon,
//         title: "Powerful reports",
//         desc: "Detailed data for locations, employees, and items. Export CSVs to make bookkeeping easier.",
//     },
//     {
//         icon: PhoneIphoneOutlinedIcon,
//         title: "Take it all on the go",
//         desc: "Use web or the iOS Dashboard app to track sales and download reports from anywhere.",
//     },
// ];


// const PayrollPage = () => {
//     return (
//         <main>
//             <section>
//                 <motion.section
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, ease: "easeOut" }}
//                     className="relative bg-linear-to-b from-white to-neutral-50 w-full text-black"
//                 >
//                     <div className="mx-auto px-6 py-28 sm:py-36 max-w-6xl text-center">
//                         {/* Label */}
//                         <p className="font-semibold text-neutral-500 text-sm uppercase tracking-[0.28em]">
//                             Square Analytics
//                         </p>

//                         {/* Headline */}
//                         <h1 className="mt-6 font-bold text-gray-900 md:text-[70px] text-4xl sm:text-6xl leading-tight md:leading-[1.05]">
//                             Make more informed <br className="hidden sm:block" />
//                             <span className="text-blue-600">business decisions.</span>
//                         </h1>

//                         {/* Description */}
//                         <p className="mx-auto mt-5 max-w-2xl text-neutral-600 text-lg">
//                             Gain insights that help your salon grow. Turn your daily data into clear,
//                             confident decisions with real-time analytics.
//                         </p>

//                         {/* CTA Buttons */}
//                         <div className="flex sm:flex-row flex-col justify-center items-center gap-3 sm:gap-5 mt-10">
//                             <a
//                                 href="#"
//                                 className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 shadow-sm px-8 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium text-white text-base hover:scale-105 transition-all duration-200"
//                             >
//                                 Get started
//                             </a>
//                             <a
//                                 href="#"
//                                 className="inline-flex justify-center items-center font-medium text-neutral-600 hover:text-blue-600 text-sm transition-colors duration-200"
//                             >
//                                 Contact sales
//                                 <span className="ml-1.5 text-blue-600 transition-transform group-hover:translate-x-0.5 duration-200">
//                                     →
//                                 </span>
//                             </a>
//                         </div>
//                     </div>

//                     {/* Subtle decorative background */}
//                     <div className="-z-10 absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
//                 </motion.section>
//             </section>
//             <section className="relative bg-white w-full overflow-hidden text-black">
//                 {/* subtle radial bg */}
//                 <div className="-z-10 absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />

//                 <div className="mx-auto px-6 sm:px-8 py-16 sm:py-24 max-w-7xl">
//                     {/* Screenshot “browser frame” */}
//                     <div className="mx-auto max-w-5xl">
//                         <div className="bg-white shadow-[0_40px_80px_-30px_rgba(2,6,23,0.25)] border border-neutral-200/80 rounded-[28px] ring-1 ring-black/5">
//                             {/* top chrome */}
//                             <div className="flex items-center gap-2 bg-neutral-50/70 px-5 py-3 border-neutral-200/70 border-b rounded-t-[28px]">
//                                 <div className="flex items-center gap-1.5">
//                                     <span className="bg-red-400/90 rounded-full w-2.5 h-2.5" />
//                                     <span className="bg-yellow-400/90 rounded-full w-2.5 h-2.5" />
//                                     <span className="bg-green-400/90 rounded-full w-2.5 h-2.5" />
//                                 </div>
//                                 <div className="mx-auto font-medium text-neutral-500 text-xs tracking-wide">
//                                     Reports — Sales Summary
//                                 </div>
//                             </div>

//                             {/* pure <img> screenshot */}
//                             <div className="rounded-b-[28px] overflow-hidden">
//                                 <img
//                                     src="/images/report-screenshot.png" // 🔁 đổi link của bạn
//                                     alt="Analytics dashboard"
//                                     className="block w-full h-auto"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Features */}
//                     <div className="mx-auto mt-16 max-w-6xl">
//                         <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//                             {FEATURES.map(({ icon: Icon, title, desc }) => (
//                                 <article
//                                     key={title}
//                                     className="group relative bg-white hover:shadow-lg p-5 border border-neutral-200/70 rounded-2xl hover:ring-1 hover:ring-blue-500/10 transition-all hover:-translate-y-1 duration-200"
//                                 >
//                                     <div className="inline-flex justify-center items-center bg-blue-50 mb-4 rounded-xl ring-1 ring-blue-200/70 ring-inset w-12 h-12 text-blue-600 group-hover:scale-105 transition-transform duration-200">
//                                         <Icon fontSize="small" />
//                                     </div>
//                                     <h3 className="font-semibold text-[15px] text-neutral-900">
//                                         {title}
//                                     </h3>
//                                     <div className="bg-blue-600/70 opacity-60 group-hover:opacity-100 mt-1 rounded w-8 h-0.5 transition-opacity duration-200" />
//                                     <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">
//                                         {desc}
//                                     </p>
//                                 </article>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <ReturningInsightsSection
//                     circles={[
//                         { percent: 67, label: "New", tone: "solid", subnote: "235 People $7,342" },
//                         { percent: 33, label: "Returning", tone: "muted", subnote: "116 People $3,755" },
//                     ]}
//                     tiles={[
//                         { title: "Customer Spending", value: "$32", subtitle: "Average Spend", footer: "Per Visit", tone: "black" },
//                         { title: "Customer Visits", value: "2.1", subtitle: "Average Visits", footer: "30-Day Period", tone: "dark" },
//                     ]}
//                 />
//             </section>
//             <section className="relative bg-white w-full overflow-hidden text-black">
//                 {/* radial bg rất nhẹ để tạo chiều sâu */}
//                 <div className="-z-10 absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(0,0,0,0.06),transparent_60%)] pointer-events-none" />

//                 <div className="mx-auto px-6 sm:px-8 py-20 sm:py-28 max-w-7xl">
//                     {/* Row 1 */}
//                     <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-12">
//                         {/* Left text */}
//                         <div className="lg:col-span-5">
//                             <span className="font-semibold text-neutral-500 text-xs uppercase tracking-[0.18em]">
//                                 Overview
//                             </span>
//                             <h2 className="mt-3 font-bold text-3xl sm:text-5xl leading-tight tracking-tight">
//                                 Break down how it adds up.
//                             </h2>
//                             <div className="bg-neutral-900/90 mt-4 rounded w-16 h-[3px]" />
//                             <p className="mt-5 max-w-md text-[15px] text-neutral-600 leading-relaxed">
//                                 See how you did in total sales this week—and how this week compares to
//                                 last week, last month, and six months ago. Figure out how and why your
//                                 sales are up or down.
//                             </p>
//                         </div>

//                         {/* Right image (card frame) */}
//                         <div className="lg:col-span-7">
//                             <div className="bg-white shadow-[0_40px_80px_-35px_rgba(0,0,0,0.35)] mx-auto border border-neutral-200/80 rounded-3xl ring-1 ring-black/5 w-full max-w-xl">
//                                 {/* browser chrome */}
//                                 <div className="flex items-center gap-1.5 bg-neutral-50/70 px-5 py-3 border-neutral-200/70 border-b rounded-t-3xl">
//                                     <span className="bg-red-400/90 rounded-full w-2.5 h-2.5" />
//                                     <span className="bg-yellow-400/90 rounded-full w-2.5 h-2.5" />
//                                     <span className="bg-green-400/90 rounded-full w-2.5 h-2.5" />
//                                     <div className="mx-auto font-medium text-[11px] text-neutral-500 tracking-wide">
//                                         Sales
//                                     </div>
//                                 </div>
//                                 <div className="rounded-b-3xl overflow-hidden">
//                                     <img
//                                         src="/images/sales-card.png"  /* 👉 thay ảnh thật */
//                                         alt="Sales card"
//                                         className="block w-full h-auto"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Row 2 */}
//                     <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-12 mt-16 lg:mt-20">
//                         {/* Left image (card frame) */}
//                         <div className="lg:order-1 lg:col-span-7">
//                             <div className="bg-white shadow-[0_40px_80px_-35px_rgba(0,0,0,0.35)] mx-auto border border-neutral-200/80 rounded-3xl ring-1 ring-black/5 w-full max-w-xl">
//                                 <div className="flex items-center gap-1.5 bg-neutral-50/70 px-5 py-3 border-neutral-200/70 border-b rounded-t-3xl">
//                                     <span className="bg-red-400/90 rounded-full w-2.5 h-2.5" />
//                                     <span className="bg-yellow-400/90 rounded-full w-2.5 h-2.5" />
//                                     <span className="bg-green-400/90 rounded-full w-2.5 h-2.5" />
//                                     <div className="mx-auto font-medium text-[11px] text-neutral-500 tracking-wide">
//                                         Gross Sales
//                                     </div>
//                                 </div>
//                                 <div className="rounded-b-3xl overflow-hidden">
//                                     <img
//                                         src="/images/gross-sales-card.png"  /* 👉 thay ảnh thật */
//                                         alt="Gross sales card"
//                                         className="block w-full h-auto"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right text */}
//                         <div className="lg:order-2 lg:col-span-5">
//                             <span className="font-semibold text-neutral-500 text-xs uppercase tracking-[0.18em]">
//                                 Reports
//                             </span>
//                             <h3 className="mt-3 font-bold text-3xl sm:text-5xl leading-tight tracking-tight">
//                                 Insights in your inbox.
//                             </h3>
//                             <div className="bg-neutral-900/90 mt-4 rounded w-16 h-[3px]" />
//                             <p className="mt-5 max-w-md text-[15px] text-neutral-600 leading-relaxed">
//                                 Get simple daily summaries delivered to your inbox. See that day’s data
//                                 on sales, items, and customers all in one neat digest.
//                             </p>
//                             <p className="mt-6 font-semibold text-[15px] text-neutral-900">
//                                 Spreadsheets made simple
//                             </p>
//                             <p className="mt-1 max-w-md text-[15px] text-neutral-600">
//                                 Download up-to-the-minute CSVs of your transactions, transfers, and
//                                 sales by item and by staff.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="bg-neutral-100 w-full text-black">
//                 <div className="mx-auto px-6 sm:px-8 pt-16 sm:pt-24 max-w-7xl">
//                     {/* Heading */}
//                     <div className="max-w-3xl">
//                         <h2 className="font-bold text-4xl sm:text-6xl leading-tight tracking-tight">
//                             Keep track of your
//                             <br className="hidden sm:block" /> business from anywhere.
//                         </h2>
//                         <p className="mt-4 max-w-2xl text-[15px] text-neutral-600 leading-relaxed">
//                             Sign in to your Square account on Square.com to access all your data.
//                             Check your most crucial sales information from anywhere on the free
//                             Square Dashboard app.
//                         </p>
//                     </div>

//                     {/* Device preview */}
//                     <div className="relative mt-10 sm:mt-14">
//                         {/* Desktop screenshot card */}
//                         <div className="bg-white shadow-[0_40px_80px_-35px_rgba(0,0,0,0.35)] mx-auto border border-neutral-200 rounded-3xl ring-1 ring-black/5 w-full max-w-4xl">
//                             {/* optional browser bar */}
//                             <div className="flex items-center gap-1.5 bg-neutral-50/80 px-5 py-3 border-neutral-200/70 border-b rounded-t-3xl">
//                                 <span className="bg-red-400/90 rounded-full w-2.5 h-2.5" />
//                                 <span className="bg-yellow-400/90 rounded-full w-2.5 h-2.5" />
//                                 <span className="bg-green-400/90 rounded-full w-2.5 h-2.5" />
//                                 <div className="mx-auto font-medium text-[11px] text-neutral-500 tracking-wide">
//                                     Reports — Sales Trends
//                                 </div>
//                             </div>
//                             <div className="rounded-b-3xl overflow-hidden">
//                                 <img
//                                     src="/images/desktop-dashboard.png" /* 👉 thay bằng ảnh của bạn */
//                                     alt="Dashboard on the web"
//                                     className="block w-full h-auto"
//                                 />
//                             </div>
//                         </div>

//                         {/* Mobile phone overlay */}
//                         <div className="hidden sm:block top-1/2 -right-2 absolute -translate-y-1/2 pointer-events-none">
//                             <div className="bg-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] p-2 border border-black/10 rounded-[40px] w-[280px]">
//                                 <img
//                                     src="/images/mobile-dashboard.png" /* 👉 thay bằng ảnh của bạn */
//                                     alt="Square Dashboard app"
//                                     className="block rounded-[34px] w-full h-auto"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom copy */}
//                 <div className="mx-auto px-6 sm:px-8 pb-20 sm:pb-28 max-w-7xl">
//                     <div className="gap-12 grid grid-cols-1 sm:grid-cols-2 mt-12 sm:mt-16">
//                         <div>
//                             <h3 className="font-semibold text-neutral-900 text-lg">
//                                 Dashboard on the web
//                             </h3>
//                             <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">
//                                 Your Square Dashboard at Square.com gives you access to all your reports.
//                                 Keep tabs on all your locations, employees, and items. Download CSVs to
//                                 make bookkeeping easy.
//                             </p>
//                         </div>

//                         <div>
//                             <h3 className="font-semibold text-neutral-900 text-lg">
//                                 Square Dashboard app for iPhone and Android
//                             </h3>
//                             <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">
//                                 The new and improved Square Dashboard app lets you view and manage
//                                 essential features in real time. Track your business performance and
//                                 handle tasks that need attention right away, all while you’re on the go.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="bg-white w-full text-black">
//                 <div className="mx-auto px-6 sm:px-8 py-20 sm:py-28 max-w-7xl">
//                     {/* Heading */}
//                     <h2 className="font-bold text-3xl sm:text-5xl text-center tracking-tight">
//                         Testimonials
//                     </h2>

//                     {/* Gallery grid */}
//                     <div className="gap-6 sm:gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto mt-12 max-w-5xl">
//                         {/* Left: big image (spans 2 rows) */}
//                         <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden">
//                             <img
//                                 src="/images/testimonial-main.jpg" // 👉 thay ảnh lớn
//                                 alt="Customer portrait"
//                                 className="block w-full h-full object-cover"
//                             />
//                         </div>

//                         {/* Right top: blue text block */}
//                         <div className="md:col-span-1 bg-[#0B63F6] p-6 sm:p-8 rounded-2xl overflow-hidden text-white">
//                             <p className="max-w-xs font-medium text-sm sm:text-base leading-relaxed">
//                                 Millions of businesses are using Square Analytics to
//                                 increase sales.
//                             </p>
//                         </div>

//                         {/* Right bottom: two small images */}
//                         <div className="md:col-span-1 rounded-2xl overflow-hidden">
//                             <img
//                                 src="/images/testimonial-small-1.jpg" // 👉 thay ảnh nhỏ 1
//                                 alt="Product closeup"
//                                 className="block w-full h-full object-cover"
//                             />
//                         </div>
//                         <div className="md:col-span-1 rounded-2xl overflow-hidden">
//                             <img
//                                 src="/images/testimonial-small-2.jpg" // 👉 thay ảnh nhỏ 2
//                                 alt="Accessories"
//                                 className="block w-full h-full object-cover"
//                             />
//                         </div>
//                     </div>

//                     {/* Quote */}
//                     <figure className="mx-auto mt-12 sm:mt-16 max-w-4xl text-center">
//                         <blockquote className="text-neutral-900 text-lg sm:text-xl leading-relaxed">
//                             “Our business has been able to operate like a much larger operation
//                             with Square. Analytics help us make decisions that were more
//                             challenging to calculate with other tools.”
//                         </blockquote>
//                         <figcaption className="mt-6 text-neutral-500 text-xs tracking-[0.28em]">
//                             JESSICA, SON OF A SAILOR
//                         </figcaption>
//                     </figure>
//                 </div>
//             </section>
//         </main >
//     );
// }

const PayrollPage = () => { }

export default PayrollPage;