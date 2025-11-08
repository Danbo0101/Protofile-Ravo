"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants, type Transition } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ravoLogo from "@/app/assets/logo.png";
import { IconButton } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import imgScreen from "@/app/assets/imgScreen.png";
import imgCheck from "@/app/assets/imgCheck.png";
import imgDigital from "@/app/assets/imgDigital.png";
import imgTerminal from "@/app/assets/imgTerminal.png";

type MenuKey = "Home" | "Products" | "Pricing" | "Other" | "Policies";
type LeftItem = { label: string; href: string };
type NavItem = { key: MenuKey; label: string; href?: string };

const NAV: NavItem[] = [
    { key: "Home", label: "Home", href: "/" },
    { key: "Products", label: "Products" },
    { key: "Pricing", label: "Pricing", href: "/pricing" },
    { key: "Other", label: "Other" },
    { key: "Policies", label: "Policies" },
];

const LEFT_LIST: Record<MenuKey, LeftItem[]> = {
    Home: [],
    Products: [
        { label: "POS System", href: "/products/hardware" },
        { label: "RAVO Marketing", href: "/products/marketing" },
        { label: "RAVO Design Service", href: "/products/design" },
        { label: "Credit Card Processing", href: "/products/creditCard" },
        { label: "Payroll", href: "/products/payroll" },
    ],
    Pricing: [],
    Other: [{ label: "Website Design", href: "/other/website" }],
    Policies: [
        { label: "Privacy Policy", href: "/policies/privacy" },
        { label: "Terms & Conditions", href: "/policies/terms" },
        { label: "SMS Terms & Conditions", href: "/policies/smsTerms" },
    ],
};

const RIGHT_CONTENT: Record<string, { label: string; img?: string; href?: string }[]> = {
    "POS System": [
        { label: "Main Screen", img: imgScreen.src, href: "/products/hardware/mainScreen" },
        { label: "Terminal", img: imgTerminal.src, href: "/products/hardware/terminal" },
        { label: "CheckIn - CheckOut POS", img: imgCheck.src, href: "/products/hardware/check" },
        { label: "Digital Screen", img: imgDigital.src, href: "/products/hardware/digital" },
        { label: "All hardware", href: "/products/hardware" },
    ],
};

const useMotionPrefs = () => {
    const prefersReduced = useReducedMotion();

    const overlayIn: Transition = prefersReduced ? { duration: 0 } : { duration: 0.25 };
    const overlayOut: Transition = prefersReduced ? { duration: 0 } : { duration: 0.2 };

    const sheetIn: Transition = prefersReduced
        ? { duration: 0 }
        : { type: "spring", stiffness: 420, damping: 38, mass: 0.9 };

    const sheetOut: Transition = prefersReduced
        ? { duration: 0 }
        : { type: "tween", duration: 0.22 };

    const listIn: Transition = prefersReduced ? { duration: 0 } : { delayChildren: 0.04, staggerChildren: 0.045 };
    const itemIn: Transition = prefersReduced ? { duration: 0 } : { duration: 0.22, ease: "easeOut" };
    const itemOut: Transition = { duration: 0.18 };

    const accIn: Transition = prefersReduced ? { duration: 0 } : { duration: 0.22, ease: "easeOut" };
    const accOut: Transition = { duration: 0.18 };

    const overlay: Variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: overlayIn },
        exit: { opacity: 0, transition: overlayOut },
    };

    const sheet: Variants = {
        initial: { x: "100%", scale: 0.98, opacity: 0.9 },
        animate: { x: 0, scale: 1, opacity: 1, transition: sheetIn },
        exit: { x: "100%", opacity: 0.9, transition: sheetOut },
    };

    const list: Variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: listIn },
        exit: { opacity: 0 },
    };

    const item: Variants = {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0, transition: itemIn },
        exit: { opacity: 0, y: 8, transition: itemOut },
    };

    const acc: Variants = {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1, transition: accIn },
        exit: { height: 0, opacity: 0, transition: accOut },
    };

    return { overlay, sheet, list, item, acc };
};


const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    const mv = useMotionPrefs();

    const [openKey, setOpenKey] = useState<MenuKey | null>(null);
    const [hoverKey, setHoverKey] = useState<MenuKey | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<Record<MenuKey, boolean>>({
        Home: false, Products: false, Pricing: false, Other: false, Policies: false,
    });

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 32);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) document.body.classList.add("overflow-hidden");
        else document.body.classList.remove("overflow-hidden");
        return () => document.body.classList.remove("overflow-hidden");
    }, [mobileOpen]);

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

    const immediateClose = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpenKey(null);
    };

    const panelVariants: Variants = {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
        exit: { y: -20, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
    };

    const hasPanelOpen = !!(openKey && LEFT_LIST[openKey].length > 0);
    const isWhiteHeader = scrolled || hasPanelOpen;

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
                <div className="mx-auto max-w-7xl h-16 md:h-20 px-4 md:py-14 flex items-center justify-between gap-4 md:gap-8 transition-colors duration-300">
                    <div className="flex items-center gap-4 md:gap-8">
                        <Link href="/" onMouseEnter={immediateClose} className="flex items-center">
                            <Image src={ravoLogo} className="h-10 w-auto md:h-16" alt="Logo" priority />
                        </Link>
                        <nav className="hidden md:flex items-center gap-8 font-mono">
                            {NAV.map(({ key, label, href }) =>
                                href ? (
                                    <Link
                                        key={key}
                                        href={href}
                                        onMouseEnter={immediateClose}
                                        onFocus={immediateClose}
                                        className={`text-[16px] md:text-[18px] font-bold transition-colors ${isWhiteHeader ? "text-neutral-400 hover:text-black" : "text-neutral-400 hover:text-white"
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                ) : (
                                    <button
                                        key={key}
                                        onMouseEnter={() => {
                                            setHoverKey(key);
                                            open(key);
                                        }}
                                        onMouseLeave={() => setHoverKey(null)}
                                        className={`text-[16px] md:text-[18px] font-bold transition-colors ${isWhiteHeader ? "text-neutral-400 hover:text-black" : "text-neutral-400 hover:text-white"
                                            }`}
                                    >
                                        {label}
                                    </button>
                                )
                            )}
                        </nav>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="hidden md:flex items-center space-x-3">
                            <IconButton onClick={() => window.open("https://www.facebook.com/thonguyenzota", "_blank")}>
                                <FacebookOutlinedIcon className="text-blue-700/80" sx={{ fontSize: 26 }} />
                            </IconButton>
                            <IconButton onClick={() => window.open("https://www.instagram.com/ravopos_tho_nguyen", "_blank")}>
                                <InstagramIcon className="text-pink-500/80" sx={{ fontSize: 26 }} />
                            </IconButton>
                            <IconButton onClick={() => window.open("https://www.facebook.com/RavoPosByThoNguyen", "_blank")}>
                                <FacebookIcon className="text-blue-600/80" sx={{ fontSize: 26 }} />
                            </IconButton>
                            <a
                                href="tel:+13463267765"
                                className="ml-2 text-white font-bold text-[14px] md:text-[15px] bg-linear-to-r from-[#0C807E] to-[#86E3A8] px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <CallIcon sx={{ fontSize: 16 }} /> (346) 326-7765
                            </a>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20"
                            aria-label="Open menu"
                            onClick={() => setMobileOpen(true)}
                        >
                            <MenuIcon fontSize="medium" />
                        </button>
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

            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-60 bg-black/40 backdrop-blur-[2px] md:hidden"
                            variants={mv.overlay}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.aside
                            className="fixed inset-y-0 right-0 z-61 w-[88%] max-w-[380px] bg-white text-black shadow-2xl md:hidden flex flex-col rounded-l-2xl"
                            variants={mv.sheet}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.04}
                            onDragEnd={(_, info) => {
                                if (info.offset.x > 70 || info.velocity.x > 800) setMobileOpen(false);
                            }}
                        >
                            <div className="pointer-events-none absolute inset-y-0 -left-1 w-1 bg-linear-to-b from-[#86E3A8]/70 via-transparent to-[#0C807E]/70 blur-[2px]" />

                            <div className="flex items-center justify-end px-4 py-3 border-b border-neutral-200">
                                <motion.button
                                    whileTap={{ scale: 0.96 }}
                                    aria-label="Close menu"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    ✕
                                </motion.button>
                            </div>
                            <motion.nav
                                className="flex-1 overflow-y-auto px-2 py-2"
                                variants={mv.list}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                {NAV.map(({ key, label, href }) => {
                                    const hasSub = LEFT_LIST[key].length > 0;

                                    if (!hasSub && href) {
                                        return (
                                            <motion.div key={key} variants={mv.item}>
                                                <Link
                                                    href={href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block rounded-xl px-4 py-3 text-base font-semibold text-neutral-800 hover:bg-neutral-100 active:scale-[0.995] transition"
                                                >
                                                    {label}
                                                </Link>
                                            </motion.div>
                                        );
                                    }

                                    return (
                                        <motion.div key={key} variants={mv.item} className="mb-1">
                                            <button
                                                className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-neutral-800 hover:bg-neutral-100 active:scale-[0.995] transition"
                                                aria-expanded={mobileExpanded[key]}
                                                onClick={() =>
                                                    setMobileExpanded((s) => ({ ...s, [key]: !s[key] }))
                                                }
                                            >
                                                <span>{label}</span>
                                                <motion.span
                                                    animate={{ rotate: mobileExpanded[key] ? 180 : 0 }}
                                                    transition={{ type: "tween", duration: 0.2 }}
                                                    className="inline-block"
                                                >
                                                    ▾
                                                </motion.span>
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {mobileExpanded[key] && (
                                                    <motion.div
                                                        variants={mv.acc}
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                        className="overflow-hidden"
                                                    >
                                                        <ul className="px-3 pb-2">
                                                            {LEFT_LIST[key].map((sub) => (
                                                                <li key={sub.label}>
                                                                    <Link
                                                                        href={sub.href}
                                                                        onClick={() => setMobileOpen(false)}
                                                                        className="block rounded-lg px-3 py-2 text-[15px] text-neutral-700 hover:bg-neutral-100 active:scale-[0.995] transition"
                                                                    >
                                                                        {sub.label}
                                                                    </Link>
                                                                    {key === "Products" && RIGHT_CONTENT[sub.label] && (
                                                                        <div className="px-3 pb-2">
                                                                            <div className="grid grid-cols-2 gap-3">
                                                                                {RIGHT_CONTENT[sub.label]!.slice(0, 4).map((it, idx) => (
                                                                                    <Link
                                                                                        key={`${it.label}-${idx}`}
                                                                                        href={it.href ?? "#"}
                                                                                        onClick={() => setMobileOpen(false)}
                                                                                        className="flex items-center gap-2 rounded-md p-2 hover:bg-neutral-100 active:scale-[0.995] transition"
                                                                                    >
                                                                                        {it.img ? (
                                                                                            <div className="relative h-10 w-10 shrink-0">
                                                                                                <Image src={it.img} alt={it.label} fill className="object-contain" />
                                                                                            </div>
                                                                                        ) : (
                                                                                            <div className="h-10 w-10 shrink-0 rounded bg-neutral-100" />
                                                                                        )}
                                                                                        <span className="text-sm font-medium text-neutral-800 line-clamp-1">
                                                                                            {it.label}
                                                                                        </span>
                                                                                    </Link>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })}
                            </motion.nav>
                            <div className="border-t border-neutral-200 p-3 flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <motion.button whileTap={{ scale: 0.9 }} onClick={() => window.open("https://www.facebook.com/thonguyenzota", "_blank")} className="p-2 rounded-md hover:bg-neutral-100">
                                        <span className="sr-only">Facebook (Tho Nguyen)</span>👍
                                    </motion.button>
                                    <motion.button whileTap={{ scale: 0.9 }} onClick={() => window.open("https://www.instagram.com/ravopos_tho_nguyen", "_blank")} className="p-2 rounded-md hover:bg-neutral-100">
                                        <span className="sr-only">Instagram</span>📷
                                    </motion.button>
                                    <motion.button whileTap={{ scale: 0.9 }} onClick={() => window.open("https://www.facebook.com/RavoPosByThoNguyen", "_blank")} className="p-2 rounded-md hover:bg-neutral-100">
                                        <span className="sr-only">Facebook Page</span>📘
                                    </motion.button>
                                </div>
                                <Link
                                    href="tel:+13463267765"
                                    className="text-white font-semibold text-sm bg-linear-to-r from-[#0C807E] to-[#86E3A8] px-3 py-2 rounded-lg shadow active:scale-[0.98] transition"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Call
                                </Link>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

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
    items: LeftItem[];
    onKeepOpen: () => void;
    onClose: () => void;
    variants: Variants;
}) => {
    const [activeLeft, setActiveLeft] = useState<string | null>(null);
    useEffect(() => {
        setActiveLeft(items[0]?.label ?? null);
    }, [openKey, items]);

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            onMouseEnter={onKeepOpen}
            onMouseLeave={onClose}
            className="absolute left-0 right-0 top-full bg-white text-black shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)] hidden md:block"
        >
            <div className="mx-auto max-w-7xl px-6 py-10 ">
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-12 md:col-span-3">
                        <ul className="space-y-5">
                            {items.map((t) => {
                                const isActive = activeLeft === t.label;
                                return (
                                    <li key={t.label}>
                                        <Link
                                            href={t.href}
                                            onMouseEnter={() => setActiveLeft(t.label)}
                                            className={`block text-left text-[22px] leading-none font-semibold transition-colors ${isActive ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-700"
                                                }`}
                                        >
                                            {t.label}
                                        </Link>
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
                                            <Link
                                                key={`${it.label}-${idx}`}
                                                href={it.href ?? "#"}
                                                className="group flex flex-col items-center text-center cursor-pointer"
                                            >
                                                {it.img ? (
                                                    <div className="h-16 w-16 mb-2 relative">
                                                        <Image
                                                            src={it.img}
                                                            alt={it.label}
                                                            fill
                                                            className="object-contain transition-transform group-hover:scale-110"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="mb-2 h-8" />
                                                )}
                                                {it.label ? (
                                                    <div className="text-sm font-semibold text-neutral-900">{it.label}</div>
                                                ) : null}
                                            </Link>
                                        ))}
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
