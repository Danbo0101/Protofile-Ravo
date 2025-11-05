"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";
import ravoLogo from "@/app/assets/logo.png";
import { IconButton } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";

type MenuKey = "Home" | "Products" | "Pricing" | "Other" | "Policies";

const NAV: { key: MenuKey; label: string }[] = [
    { key: "Home", label: "Home" },
    { key: "Products", label: "Products" },
    { key: "Pricing", label: "Pricing" },
    { key: "Other", label: "Other" },
    { key: "Policies", label: "Policies" },
];

const LEFT_LIST: Record<MenuKey, string[]> = {
    Home: [],
    Products: ["POS System", "RAVO Marketing", "RAVO Design Service", "Credit Card Processing", "Payroll"],
    Pricing: [],
    Other: ["Website Design"],
    Policies: ["Privacy Policy", "Terms & Conditions", "SMS Terms & Conditions"],
};
const RIGHT_CONTENT: Record<string, { label: string; sub?: string; img?: string }[]> = {
    "POS System": [
        { label: "Handheld", sub: "All-in-one", img: "/hw/handheld.png" },
        { label: "Terminal", sub: "Countertop", img: "/hw/terminal.png" },
        { label: "Register", sub: "Full setup", img: "/hw/register.png" },
        { label: "Stand", sub: "iPad stand", img: "/hw/stand.png" },
        { label: "Kiosk", sub: "Self-serve", img: "/hw/kiosk.png" },
        { label: "Reader (NFC+chip)", sub: "Compact", img: "/hw/reader-nfc.png" },
        { label: "Reader (magstripe)", sub: "Swipe", img: "/hw/reader-mag.png" },
        { label: "Accessories", sub: "Printers, drawers", img: "/hw/accessories.png" },
        { label: "Kits", sub: "Bundles", img: "/hw/kits.png" },
        { label: "All hardware" },
    ],
    "RAVO Marketing": [
        { label: "SMS Campaigns", img: "/mk/sms.png" },
        { label: "Email Automation", img: "/mk/email.png" },
        { label: "Promotions" },
    ],
    "RAVO Design Service": [
        { label: "Website Design", img: "/design/web.png" },
        { label: "Logo & Brand" },
    ],
    "Credit Card Processing": [
        { label: "In-person Payments", img: "/pay/inperson.png" },
        { label: "Online Payments", img: "/pay/online.png" },
    ],
    Payroll: [{ label: "Payroll Service" }],
    "Privacy Policy": [],
    "Terms & Conditions": [],
    "SMS Terms & Conditions": [],
};

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openKey, setOpenKey] = useState<MenuKey | null>(null);
    const [hoverKey, setHoverKey] = useState<MenuKey | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 32);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const open = (k: MenuKey) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        if (LEFT_LIST[k].length === 0) {
            setOpenKey(null);
            return;
        }
        setOpenKey(k);
    };

    const closeWithDelay = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpenKey(null), 120);
    };

    const panelVariants: Variants = {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
        exit: { y: -20, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
    };

    const isWhiteHeader = scrolled || (openKey && LEFT_LIST[openKey].length > 0);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isWhiteHeader ? "bg-white text-black border-b border-neutral-200" : "bg-transparent text-white"
                    }`}
                onMouseLeave={() => {
                    setHoverKey(null);
                    closeWithDelay();
                }}
            >
                <div className="mx-auto max-w-7xl h-20 px-4 py-14 flex items-center justify-between gap-8 transition-colors duration-300">
                    <div className="flex items-center gap-8">
                        <Image src={ravoLogo} className="h-16 w-auto" alt="Logo" priority />
                        <div className="flex items-center gap-8 font-mono">
                            {NAV.map(({ key, label }) => (
                                <button
                                    key={key}
                                    onMouseEnter={() => {
                                        setHoverKey(key);
                                        open(key);
                                    }}
                                    onMouseLeave={() => setHoverKey(null)}
                                    className={`text-[18px] transition-colors cursor-pointer ${hoverKey === key ? "font-bold" : "font-bold"
                                        } ${isWhiteHeader ? "text-neutral-400 hover:text-black" : "text-neutral-400 hover:text-white"
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-3">
                        <IconButton onClick={() => window.open("https://www.facebook.com/thonguyenzota", "_blank")}>
                            <FacebookOutlinedIcon className="text-blue-700/80" sx={{ fontSize: 30 }} />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.instagram.com/ravopos_tho_nguyen", "_blank")}>
                            <InstagramIcon className="text-pink-500/80" sx={{ fontSize: 30 }} />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.facebook.com/RavoPosByThoNguyen", "_blank")}>
                            <FacebookIcon className="text-blue-600/80" sx={{ fontSize: 30 }} />
                        </IconButton>
                        <a
                            href="tel:+14048064448"
                            className="ml-4 text-white font-bold text-[15px] bg-linear-to-r from-[#0C807E] to-[#86E3A8] px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <CallIcon sx={{ fontSize: 17 }} /> (404) 806-4448
                        </a>
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    {openKey && LEFT_LIST[openKey].length > 0 && (
                        <PanelTwoCols
                            key={openKey}
                            openKey={openKey}
                            items={LEFT_LIST[openKey]}
                            onKeepOpen={() => open(openKey)}
                            onClose={closeWithDelay}
                            variants={panelVariants}
                        />
                    )}
                </AnimatePresence>
            </header>

        </>
    );
};
const PanelTwoCols = ({
    openKey,
    items,
    onKeepOpen,
    onClose,
    variants,
}: {
    openKey: string;
    items: string[];
    onKeepOpen: () => void;
    onClose: () => void;
    variants: Variants;
}) => {
    const [activeLeft, setActiveLeft] = useState<string | null>(null);

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            onMouseEnter={onKeepOpen}
            onMouseLeave={onClose}
            className="absolute left-0 right-0 top-full bg-white text-black shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]"
        >
            <div className="mx-auto max-w-7xl px-6 py-10 ">
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-12 md:col-span-3">
                        <ul className="space-y-5">
                            {items.map((t) => {
                                const isActive = activeLeft === t;
                                return (
                                    <li key={t}>
                                        <button
                                            onMouseEnter={() => setActiveLeft(t)}
                                            className={`text-left text-[22px] leading-none font-semibold transition-colors ${isActive ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-700"
                                                }`}
                                        >
                                            {t}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <AnimatePresence mode="wait">
                            {activeLeft && (
                                <motion.div
                                    key={activeLeft}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
                                        {(RIGHT_CONTENT[activeLeft] ?? []).map((it, idx) => (
                                            <a key={`${it.label}-${idx}`} href="#" className="group flex flex-col items-center text-center">

                                                {it.img ? (
                                                    <div className="h-16 w-16 mb-2 relative">
                                                        <Image
                                                            src={it.img}
                                                            alt={it.label}
                                                            fill
                                                            className="object-contain transition-transform group-hover:scale-105"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="mb-2 h-8" />
                                                )}
                                                <div className="text-sm font-semibold text-neutral-900">{it.label}</div>
                                                {it.sub && (
                                                    <div className="text-xs text-neutral-500 group-hover:text-neutral-700 transition-colors">
                                                        {it.sub}
                                                    </div>
                                                )}
                                            </a>
                                        ))}


                                        {((RIGHT_CONTENT[activeLeft] ?? []).length === 0) && (
                                            <div className="col-span-full text-neutral-600 text-sm">
                                                {activeLeft}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;
