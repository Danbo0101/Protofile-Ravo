// app/marketing/_components/ThreeLayerShowcase.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/app/components/variants";

type Props = {
    bg: StaticImageData | string;
    left: StaticImageData | string;
    right: StaticImageData | string;
    altBg?: string;
    altLeft?: string;
    altRight?: string;
};

export default function ThreeLayerShowcase({
    bg,
    left,
    right,
    altBg = "Background",
    altLeft = "Left card",
    altRight = "Right card",
}: Props) {
    return (
        <section className="w-full bg-white text-black">
            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mx-auto max-w-7xl px-6 sm:px-8 pt-6 pb-16 sm:pt-10 sm:pb-24"
            >
                {/* Wrapper relative để xếp chồng */}
                <div className="relative mx-auto max-w-[1200px]">
                    {/* BG large card */}
                    <motion.div
                        variants={fadeUp}
                        className="relative mx-auto w-full overflow-hidden rounded-3xl border border-neutral-200/70 bg-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.25)]"
                    >
                        {/* tạo khoảng cao cho BG (responsive) */}
                        <div className="aspect-21/10 sm:aspect-21/9 lg:aspect-21/8">
                            <Image
                                src={bg}
                                alt={altBg}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 1100px"
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Left overlay */}
                    <motion.div
                        variants={fadeUp}
                        whileHover={{ y: -6, rotate: -0.2 }}
                        transition={{ type: "spring", stiffness: 160, damping: 18 }}
                        className="absolute left-[-2%] top-[30%] w-[68%] max-w-[640px]
                       sm:left-[2%] sm:top-[28%] md:top-[24%] lg:top-[22%]"
                    >
                        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl">
                            <div className="relative w-full">
                                <div className="aspect-16/11">
                                    <Image
                                        src={left}
                                        alt={altLeft}
                                        fill
                                        sizes="(max-width: 1024px) 66vw, 560px"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right overlay (điện thoại/chat bubble vibe) */}
                    <motion.div
                        variants={fadeUp}
                        whileHover={{ y: -8, rotate: 0.2 }}
                        transition={{ type: "spring", stiffness: 160, damping: 18 }}
                        className="absolute right-[-4%] bottom-[-8%] w-[38%] max-w-[420px]
                       sm:right-0 sm:bottom-[-6%]"
                    >
                        <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-2xl">
                            <div className="relative w-full">
                                <div className="aspect-10/19">
                                    <Image
                                        src={right}
                                        alt={altRight}
                                        fill
                                        sizes="(max-width: 1024px) 42vw, 380px"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* gradient shadow dưới cùng để “đỡ” stack (nhẹ) */}
                    <div className="pointer-events-none absolute inset-x-10 -bottom-10 h-24 rounded-full bg-linear-to-t from-black/10 to-transparent blur-2xl" />
                </div>
            </motion.div>
        </section>
    );
}
