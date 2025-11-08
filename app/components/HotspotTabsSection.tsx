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
            <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
                <div className="grid items-start gap-12 lg:grid-cols-3">
                    <div className="col-span-2">
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.35 }}
                            className="font-serif text-4xl mb-20 leading-tight sm:text-5xl md:text-6xl"
                        >
                            {title}
                        </motion.h2>

                        <motion.div
                            variants={slideLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className="mt-10 overflow-hidden rounded-3xl bordershadow-sm"
                        >
                            <div className="relative mx-auto aspect-16/10 w-full">
                                <Image
                                    src={activeTab.leftImg}
                                    alt={`${activeTab.label} left`}
                                    fill
                                    className="object-contain rounded-4xl"
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
                                                            className="group cursor-pointer rounded-2xl shadow-sm bg-[#0C807E] hover:scale-110 hover:bg-black/50"
                                                            aria-label={`Show note ${idx + 1}`}
                                                        >
                                                            <AddIcon className="h-7 w-7 text-white transition hover:text-white group-hover:scale-[1.05]" />
                                                        </motion.button>
                                                    ) : (
                                                        <motion.div
                                                            key="note"
                                                            data-note
                                                            initial={{ opacity: 0, y: 6 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -6 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="max-w-60 rounded-xl bg-white/95 px-3.5 py-2.5 text-[12px] leading-snug shadow-md ring-1 ring-black/10 backdrop-blur"
                                                        >
                                                            <div className="mb-1 flex items-center gap-2  font-medium text-neutral-800">
                                                                <StickyNote2RoundedIcon className="h-4 w-4" />
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
                    <div className="flex flex-col">
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex flex-wrap gap-3"
                        >
                            {tabs.map((t) => {
                                const active = t.key === activeKey;
                                return (
                                    <Button
                                        key={t.key}
                                        onClick={() => setActiveKey(t.key as K)}
                                        variant="outlined"
                                        size="medium"
                                        sx={{
                                            borderRadius: 999,
                                            textTransform: "none",
                                            px: 2.5,
                                            py: 1.25,
                                            color: active ? "white" : "black",
                                            backgroundColor: active ? "black" : "white",
                                            borderColor: "black",
                                            "&:hover": {
                                                backgroundColor: active ? "#222" : "#f5f5f5",
                                                borderColor: "black",
                                            },
                                            transition: "all 0.2s ease",
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
                                className="mt-10 mb-5 overflow-hidden rounded-3xl border border-neutral-200 shadow-sm"
                            >
                                <div className="relative aspect-16/10 w-full">
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
                                    className="mt-4 text-[14px] leading-relaxed text-neutral-600"
                                    dangerouslySetInnerHTML={{ __html: des }}
                                />
                            ))
                            : activeTab.description && (
                                <motion.p
                                    key={`${activeTab.key}-desc`}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="mt-4 text-[14px] leading-relaxed text-neutral-600"
                                    dangerouslySetInnerHTML={{ __html: activeTab.description }}
                                />
                            )}
                    </div>
                </div>
            </div>
        </section>
    );
}
