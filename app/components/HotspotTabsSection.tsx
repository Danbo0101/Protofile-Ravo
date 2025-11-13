"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
import Image from "next/image";
import { fadeUp, fadeIn, slideLeft, slideRight } from "@/app/components/variants";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import StickyNote2RoundedIcon from "@mui/icons-material/StickyNote2Rounded";

export type Hotspot = {
    x: number;
    y: number;
    note: string;
};

export type TabData<K extends string = string> = {
    key: K;
    label: string;
    leftImg: string;
    rightImg: string;
    description: string;
    hotspots: Hotspot[];
};

type Props<K extends string = string> = {
    tabs: TabData<K>[];
    title?: string;
    initialKey?: K;
    className?: string;
};


export default function HotspotTabsSection<K extends string = string>({
    tabs,
    title = "Engage & Retain Clients",
    initialKey,
    className = "",
}: Props<K>) {
    const defaultKey = (initialKey ?? tabs[0]?.key) as K;
    const [activeKey, setActiveKey] = useState<K>(defaultKey);
    const [activeNoteIndex, setActiveNoteIndex] = useState<number | null>(null);
    const wrapRef = useRef<HTMLDivElement>(null);

    const activeTab = tabs.find((t) => t.key === activeKey)!;

    useEffect(() => {
        setActiveNoteIndex(null);
    }, [activeKey]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveNoteIndex(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const handleWrapperClick = (e: MouseEvent<HTMLDivElement>) => {
        const el = e.target as HTMLElement;
        if (!el.closest("[data-hotspot]") && !el.closest("[data-note]")) {
            setActiveNoteIndex(null);
        }
    };

    return (
        <section
            ref={wrapRef}
            onClick={handleWrapperClick}
            className={`w-full bg-white text-black ${className}`}
        >
            <div className="mx-auto px-4 sm:px-8 py-12 sm:py-24 max-w-7xl">
                <div className="items-start gap-10 lg:gap-12 grid lg:grid-cols-3">
                    <div className="col-span-2">
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.35 }}
                            className="mb-10 sm:mb-20 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
                        >
                            {title}
                        </motion.h2>
                        <motion.div
                            variants={slideLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="mt-6 sm:mt-10 rounded-3xl overflow-hidden bordershadow-sm"
                        >
                            <div className="relative mx-auto w-full aspect-16/10">
                                <Image
                                    src={activeTab.leftImg}
                                    alt={`${activeTab.label} left`}
                                    fill
                                    className="rounded-4xl object-contain"
                                    priority
                                />
                                <div className="absolute inset-0">
                                    {activeTab.hotspots.map((h, idx) => {
                                        const isOpen = activeNoteIndex === idx;
                                        return (
                                            <motion.div
                                                key={`hs-${idx}`}
                                                className="absolute -translate-x-1/2 -translate-y-1/2"
                                                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                                                layout
                                            >
                                                <AnimatePresence initial={false} mode="wait">
                                                    {!isOpen ? (
                                                        <motion.button
                                                            key="plus"
                                                            data-hotspot
                                                            initial={{ opacity: 0, scale: 0.85 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.85 }}
                                                            transition={{ duration: 0.2 }}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setActiveNoteIndex(idx);
                                                            }}
                                                            className="group bg-[#0C807E] hover:bg-black/50 shadow-sm rounded-2xl hover:scale-110 cursor-pointer"
                                                        >
                                                            <AddIcon className="w-7 h-7 text-white" />
                                                        </motion.button>
                                                    ) : (
                                                        <motion.div
                                                            key="note"
                                                            data-note
                                                            initial={{ opacity: 0, y: 6 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -6 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="bg-white/95 shadow-md backdrop-blur px-3.5 py-2.5 rounded-xl ring-1 ring-black/10 max-w-60 text-[12px] leading-snug"
                                                        >
                                                            <div className="flex items-center gap-2 mb-1 font-medium text-neutral-800">
                                                                <StickyNote2RoundedIcon className="w-4 h-4" />
                                                                Note
                                                            </div>
                                                            <p className="text-neutral-800">{h.note}</p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-col mt-4 lg:mt-0">
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex flex-wrap gap-2 sm:gap-3"
                        >
                            {tabs.map((t) => {
                                const active = t.key === activeKey;
                                return (
                                    <Button
                                        key={t.key}
                                        onClick={() => setActiveKey(t.key as K)}
                                        variant="outlined"
                                        size="small"
                                        className="px-3! py-1.5! rounded-full! text-xs! sm:text-sm!"
                                        sx={{
                                            textTransform: "none",
                                            color: active ? "white" : "black",
                                            backgroundColor: active ? "black" : "white",
                                            borderColor: "black",
                                            "&:hover": {
                                                backgroundColor: active ? "#222" : "#f5f5f5",
                                                borderColor: "black",
                                            },
                                        }}
                                    >
                                        {t.label}
                                    </Button>
                                );
                            })}
                        </motion.div>
                        <AnimatePresence mode="wait">
                            <motion.figure
                                key={activeTab.key}
                                variants={slideRight}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.25 }}
                                className="hidden md:block shadow-sm mt-6 sm:mt-10 mb-5 border border-neutral-200 rounded-3xl overflow-hidden"

                            >
                                <div className="relative w-full aspect-16/10">
                                    <Image
                                        src={activeTab.rightImg}
                                        alt={`${activeTab.label} right`}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </motion.figure>
                        </AnimatePresence>

                        {Array.isArray(activeTab.description)
                            ? activeTab.description.map((des, i) => (
                                <motion.p
                                    key={`${activeTab.key}-desc-${i}`}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="mt-3 text-[14px] text-neutral-600 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: des }}
                                />
                            ))
                            : activeTab.description && (
                                <motion.p
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="mt-10 md:mt-3 text-[14px] text-neutral-600 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: activeTab.description }}
                                />
                            )}
                    </div>
                </div>
            </div>
        </section>


    );
}
