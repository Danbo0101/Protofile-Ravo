"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
// Nếu bạn đã có sẵn, import 3 thứ này thay cho local variants:
import { EASE_OUT, fadeUp, floatIn } from "@/app/components/variants";

// ===== Demo images (đổi sang ảnh thật của bạn) =====
// import vesaMain from "@/app/assets/kiosk/vesa-main.png";
// import vesaScene from "@/app/assets/kiosk/vesa-scene.jpg";
// import vesaPlate from "@/app/assets/kiosk/vesa-plate.png";
// ... tương tự cho angled / flat / counter
const placeholder = "https://dummyimage.com/1200x800/efefef/aaa.png&text=Replace+image";

type MountItem = {
    key: string;
    label: string;                 // text trên nút
    desc: string;                  // mô tả dưới bên phải
    note?: string;                 // ghi chú nhỏ (ví dụ: “sold separately”)
    main: StaticImageData | string;    // ảnh lớn bên trái
    scene: StaticImageData | string;   // ảnh scene bên phải
    plate?: StaticImageData | string;  // ảnh plate nhỏ dưới scene
};

const ITEMS: MountItem[] = [
    {
        key: "vesa",
        label: "VESA mount",
        desc:
            "Customize your setup with any 100×100 mm VESA mounting system, like a floor stand or swing arm (both sold separately).",
        note: "Bosstab Floor Stand sold separately.",
        main: placeholder, // vesaMain,
        scene: placeholder, // vesaScene,
        plate: placeholder, // vesaPlate,
    },
    {
        key: "angled",
        label: "Angled wall mount",
        desc:
            "Space-saving and ergonomic viewing angle for quick, self-serve flows along your walls and queue rails.",
        main: placeholder,
        scene: placeholder,
        plate: placeholder,
    },
    {
        key: "flat",
        label: "Flat wall mount",
        desc:
            "Minimal, low-profile installation that keeps traffic areas clear while staying easy to reach.",
        main: placeholder,
        scene: placeholder,
        plate: placeholder,
    },
    {
        key: "counter",
        label: "Countertop mount",
        desc:
            "Compact footprint for bars and host stands—stable, tidy, and simple to clean around.",
        main: placeholder,
        scene: placeholder,
        plate: placeholder,
    },
];

const fade = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.35, ease: EASE_OUT } },
};

export default function KioskMountShowcase() {
    const [active, setActive] = useState(ITEMS[0].key);
    const current = ITEMS.find((i) => i.key === active)!;

    return (
        <section className="bg-white text-neutral-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-24">
                {/* Top: title + description + tabs */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-6">
                        <h2 className="font-serif text-5xl sm:text-6xl leading-[1.08]">
                            Add a kiosk right<br />where you need one.
                        </h2>
                    </div>

                    <div className="lg:col-span-6">
                        <p className="text-[17px] leading-7 text-neutral-700 max-w-[58ch]">
                            With a range of mounting options, you can put a self ordering kiosk exactly
                            where it makes sense for your unique space and your flow of business. Plus,
                            all the installation hardware is in the box.
                        </p>

                        {/* Pills */}
                        <div className="mt-5 flex flex-wrap gap-3">
                            {ITEMS.map((it) => {
                                const isActive = it.key === active;
                                return (
                                    <button
                                        key={it.key}
                                        onClick={() => setActive(it.key)}
                                        className={[
                                            "rounded-full border px-4 sm:px-5 py-2 text-sm font-medium transition-all",
                                            isActive
                                                ? "bg-black text-white border-black shadow-sm"
                                                : "bg-white text-neutral-900 border-neutral-300 hover:border-neutral-500",
                                        ].join(" ")}
                                        role="tab"
                                        aria-selected={isActive}
                                    >
                                        {it.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Gallery below */}
                <div className="mt-8 lg:mt-12 grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left big image */}
                    <div className="lg:col-span-7">
                        <div className="relative rounded-3xl bg-neutral-100 p-4 sm:p-5 md:p-6">
                            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div key={current.key + "-main"} {...fade} className="absolute inset-0">
                                        <Image
                                            src={current.main}
                                            alt={`${current.label} main`}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {current.note && (
                                <motion.p
                                    className="mt-3 text-sm text-neutral-500"
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="show"
                                >
                                    {current.note}
                                </motion.p>
                            )}
                        </div>
                    </div>

                    {/* Right column: scene image + plate + description */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Scene */}
                        <div className="relative rounded-3xl overflow-hidden">
                            <div className="relative aspect-4/3 w-full">
                                <AnimatePresence mode="wait">
                                    <motion.div key={current.key + "-scene"} {...fade} className="absolute inset-0">
                                        <Image
                                            src={current.scene}
                                            alt={`${current.label} scene`}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Plate + text */}
                        <div className="grid grid-cols-[120px,1fr] gap-4 sm:gap-6 items-start">
                            <div className="rounded-2xl border border-neutral-200 bg-white p-3">
                                <div className="relative aspect-square w-full">
                                    <AnimatePresence mode="wait">
                                        <motion.div key={current.key + "-plate"} {...fade} className="absolute inset-0">
                                            <Image
                                                src={current.plate ?? placeholder}
                                                alt={`${current.label} plate`}
                                                fill
                                                className="object-contain"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={current.key + "-desc"}
                                    {...fade}
                                    className="text-[17px] leading-7 text-neutral-700"
                                >
                                    {current.desc}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
