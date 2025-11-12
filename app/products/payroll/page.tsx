"use client";

import { motion } from "framer-motion";

import ReturningInsightsSection from "@/app/components/ReturningInsightsSection";

import ShowChartIcon from "@mui/icons-material/ShowChart";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";


const FEATURES = [
    {
        icon: ShowChartIcon,
        title: "Real-time data",
        desc: "Keep your finger on the pulse. See what sells best, when funds hit, and your bottom line at a glance.",
    },
    {
        icon: InsightsOutlinedIcon,
        title: "Customer insights",
        desc: "Know your customers better—how much they spend and how frequently they return.",
    },
    {
        icon: DescriptionOutlinedIcon,
        title: "Powerful reports",
        desc: "Detailed data for locations, employees, and items. Export CSVs to make bookkeeping easier.",
    },
    {
        icon: PhoneIphoneOutlinedIcon,
        title: "Take it all on the go",
        desc: "Use web or the iOS Dashboard app to track sales and download reports from anywhere.",
    },
];


const PayrollPage = () => {
    return (
        <main>
            <section>
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative w-full bg-linear-to-b from-white to-neutral-50 text-black"
                >
                    <div className="mx-auto max-w-6xl px-6 py-28 text-center sm:py-36">
                        {/* Label */}
                        <p className="text-sm font-semibold tracking-[0.28em] text-neutral-500 uppercase">
                            Square Analytics
                        </p>

                        {/* Headline */}
                        <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-6xl md:text-[70px] md:leading-[1.05]">
                            Make more informed <br className="hidden sm:block" />
                            <span className="text-blue-600">business decisions.</span>
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-600">
                            Gain insights that help your salon grow. Turn your daily data into clear,
                            confident decisions with real-time analytics.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3.5 text-base font-medium text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Get started
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center text-sm font-medium text-neutral-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                Contact sales
                                <span className="ml-1.5 text-blue-600 transition-transform duration-200 group-hover:translate-x-0.5">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Subtle decorative background */}
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
                </motion.section>
            </section>
            <section className="relative w-full overflow-hidden bg-white text-black">
                {/* subtle radial bg */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(59,130,246,0.08),transparent_60%)]" />

                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
                    {/* Screenshot “browser frame” */}
                    <div className="mx-auto max-w-5xl">
                        <div className="rounded-[28px] border border-neutral-200/80 bg-white shadow-[0_40px_80px_-30px_rgba(2,6,23,0.25)] ring-1 ring-black/5">
                            {/* top chrome */}
                            <div className="flex items-center gap-2 rounded-t-[28px] border-b border-neutral-200/70 bg-neutral-50/70 px-5 py-3">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
                                </div>
                                <div className="mx-auto text-xs font-medium tracking-wide text-neutral-500">
                                    Reports — Sales Summary
                                </div>
                            </div>

                            {/* pure <img> screenshot */}
                            <div className="overflow-hidden rounded-b-[28px]">
                                <img
                                    src="/images/report-screenshot.png" // 🔁 đổi link của bạn
                                    alt="Analytics dashboard"
                                    className="block h-auto w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mx-auto mt-16 max-w-6xl">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {FEATURES.map(({ icon: Icon, title, desc }) => (
                                <article
                                    key={title}
                                    className="group relative rounded-2xl border border-neutral-200/70 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-blue-500/10"
                                >
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-200/70 transition-transform duration-200 group-hover:scale-105">
                                        <Icon fontSize="small" />
                                    </div>
                                    <h3 className="text-[15px] font-semibold text-neutral-900">
                                        {title}
                                    </h3>
                                    <div className="mt-1 h-0.5 w-8 rounded bg-blue-600/70 opacity-60 transition-opacity duration-200 group-hover:opacity-100" />
                                    <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                                        {desc}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <ReturningInsightsSection
                    circles={[
                        { percent: 67, label: "New", tone: "solid", subnote: "235 People $7,342" },
                        { percent: 33, label: "Returning", tone: "muted", subnote: "116 People $3,755" },
                    ]}
                    tiles={[
                        { title: "Customer Spending", value: "$32", subtitle: "Average Spend", footer: "Per Visit", tone: "black" },
                        { title: "Customer Visits", value: "2.1", subtitle: "Average Visits", footer: "30-Day Period", tone: "dark" },
                    ]}
                />
            </section>
            <section className="relative w-full overflow-hidden bg-white text-black">
                {/* radial bg rất nhẹ để tạo chiều sâu */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(0,0,0,0.06),transparent_60%)]" />

                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 sm:py-28">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                        {/* Left text */}
                        <div className="lg:col-span-5">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                                Overview
                            </span>
                            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                                Break down how it adds up.
                            </h2>
                            <div className="mt-4 h-[3px] w-16 rounded bg-neutral-900/90" />
                            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-neutral-600">
                                See how you did in total sales this week—and how this week compares to
                                last week, last month, and six months ago. Figure out how and why your
                                sales are up or down.
                            </p>
                        </div>

                        {/* Right image (card frame) */}
                        <div className="lg:col-span-7">
                            <div className="mx-auto w-full max-w-xl rounded-3xl border border-neutral-200/80 bg-white shadow-[0_40px_80px_-35px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
                                {/* browser chrome */}
                                <div className="flex items-center gap-1.5 rounded-t-3xl border-b border-neutral-200/70 bg-neutral-50/70 px-5 py-3">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
                                    <div className="mx-auto text-[11px] font-medium tracking-wide text-neutral-500">
                                        Sales
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-b-3xl">
                                    <img
                                        src="/images/sales-card.png"  /* 👉 thay ảnh thật */
                                        alt="Sales card"
                                        className="block h-auto w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:mt-20 lg:grid-cols-12">
                        {/* Left image (card frame) */}
                        <div className="lg:order-1 lg:col-span-7">
                            <div className="mx-auto w-full max-w-xl rounded-3xl border border-neutral-200/80 bg-white shadow-[0_40px_80px_-35px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
                                <div className="flex items-center gap-1.5 rounded-t-3xl border-b border-neutral-200/70 bg-neutral-50/70 px-5 py-3">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
                                    <div className="mx-auto text-[11px] font-medium tracking-wide text-neutral-500">
                                        Gross Sales
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-b-3xl">
                                    <img
                                        src="/images/gross-sales-card.png"  /* 👉 thay ảnh thật */
                                        alt="Gross sales card"
                                        className="block h-auto w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right text */}
                        <div className="lg:order-2 lg:col-span-5">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                                Reports
                            </span>
                            <h3 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                                Insights in your inbox.
                            </h3>
                            <div className="mt-4 h-[3px] w-16 rounded bg-neutral-900/90" />
                            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-neutral-600">
                                Get simple daily summaries delivered to your inbox. See that day’s data
                                on sales, items, and customers all in one neat digest.
                            </p>
                            <p className="mt-6 text-[15px] font-semibold text-neutral-900">
                                Spreadsheets made simple
                            </p>
                            <p className="mt-1 max-w-md text-[15px] text-neutral-600">
                                Download up-to-the-minute CSVs of your transactions, transfers, and
                                sales by item and by staff.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-neutral-100 text-black">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-16 sm:pt-24">
                    {/* Heading */}
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                            Keep track of your
                            <br className="hidden sm:block" /> business from anywhere.
                        </h2>
                        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
                            Sign in to your Square account on Square.com to access all your data.
                            Check your most crucial sales information from anywhere on the free
                            Square Dashboard app.
                        </p>
                    </div>

                    {/* Device preview */}
                    <div className="relative mt-10 sm:mt-14">
                        {/* Desktop screenshot card */}
                        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-neutral-200 bg-white shadow-[0_40px_80px_-35px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
                            {/* optional browser bar */}
                            <div className="flex items-center gap-1.5 rounded-t-3xl border-b border-neutral-200/70 bg-neutral-50/80 px-5 py-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                                <span className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
                                <div className="mx-auto text-[11px] font-medium tracking-wide text-neutral-500">
                                    Reports — Sales Trends
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-b-3xl">
                                <img
                                    src="/images/desktop-dashboard.png" /* 👉 thay bằng ảnh của bạn */
                                    alt="Dashboard on the web"
                                    className="block h-auto w-full"
                                />
                            </div>
                        </div>

                        {/* Mobile phone overlay */}
                        <div className="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 sm:block">
                            <div className="w-[280px] rounded-[40px] border border-black/10 bg-white p-2 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)]">
                                <img
                                    src="/images/mobile-dashboard.png" /* 👉 thay bằng ảnh của bạn */
                                    alt="Square Dashboard app"
                                    className="block h-auto w-full rounded-[34px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom copy */}
                <div className="mx-auto max-w-7xl px-6 sm:px-8 pb-20 sm:pb-28">
                    <div className="mt-12 grid grid-cols-1 gap-12 sm:mt-16 sm:grid-cols-2">
                        <div>
                            <h3 className="text-lg font-semibold text-neutral-900">
                                Dashboard on the web
                            </h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                                Your Square Dashboard at Square.com gives you access to all your reports.
                                Keep tabs on all your locations, employees, and items. Download CSVs to
                                make bookkeeping easy.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-neutral-900">
                                Square Dashboard app for iPhone and Android
                            </h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                                The new and improved Square Dashboard app lets you view and manage
                                essential features in real time. Track your business performance and
                                handle tasks that need attention right away, all while you’re on the go.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white text-black">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 sm:py-28">
                    {/* Heading */}
                    <h2 className="text-center text-3xl font-bold tracking-tight sm:text-5xl">
                        Testimonials
                    </h2>

                    {/* Gallery grid */}
                    <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
                        {/* Left: big image (spans 2 rows) */}
                        <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl">
                            <img
                                src="/images/testimonial-main.jpg" // 👉 thay ảnh lớn
                                alt="Customer portrait"
                                className="block h-full w-full object-cover"
                            />
                        </div>

                        {/* Right top: blue text block */}
                        <div className="overflow-hidden rounded-2xl bg-[#0B63F6] p-6 sm:p-8 text-white md:col-span-1">
                            <p className="max-w-xs text-sm sm:text-base font-medium leading-relaxed">
                                Millions of businesses are using Square Analytics to
                                increase sales.
                            </p>
                        </div>

                        {/* Right bottom: two small images */}
                        <div className="overflow-hidden rounded-2xl md:col-span-1">
                            <img
                                src="/images/testimonial-small-1.jpg" // 👉 thay ảnh nhỏ 1
                                alt="Product closeup"
                                className="block h-full w-full object-cover"
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl md:col-span-1">
                            <img
                                src="/images/testimonial-small-2.jpg" // 👉 thay ảnh nhỏ 2
                                alt="Accessories"
                                className="block h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Quote */}
                    <figure className="mx-auto mt-12 max-w-4xl text-center sm:mt-16">
                        <blockquote className="text-lg leading-relaxed text-neutral-900 sm:text-xl">
                            “Our business has been able to operate like a much larger operation
                            with Square. Analytics help us make decisions that were more
                            challenging to calculate with other tools.”
                        </blockquote>
                        <figcaption className="mt-6 text-xs tracking-[0.28em] text-neutral-500">
                            JESSICA, SON OF A SAILOR
                        </figcaption>
                    </figure>
                </div>
            </section>
        </main >
    );
}

export default PayrollPage;