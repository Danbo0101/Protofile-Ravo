"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import imgNail2 from "@/app/assets/nail2.png";
import imgCheck from "@/app/assets/imgCheck.png";
import imgScreen from "@/app/assets/imgScreen.png";
import imgTerminal from "@/app/assets/imgTerminal.png";
import imgDigital from "@/app/assets/imgDigital.png";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

type Item = {
    title: string;
    href: string;
    img: string;
    video: string;
    alt: string;
    tagline: string;
    price: string;
};

const ITEMS: Item[] = [
    {
        title: "CheckIn - CheckOut POS",
        href: "#",
        img: imgCheck.src,
        video: "/vdCheck.mp4",
        alt: "CheckIn - CheckOut POS",
        tagline: "Quick and simple client flow.",
        price: "$",
    },
    {
        title: "Main Screen",
        href: "#",
        img: imgScreen.src,
        video: "/vdScreen.mp4",
        alt: "Main Screen",
        tagline: "Your control hub for the salon.",
        price: "$",
    },
    {
        title: "Terminal",
        href: "#",
        img: imgTerminal.src,
        video: "/vdTerminal.mp4",
        alt: "Terminal",
        tagline: "Compact, powerful, and wireless.",
        price: "$",
    },
    {
        title: "Digital Signage",
        href: "#",
        img: imgDigital.src,
        video: "/vdDigital.mp4",
        alt: "Digital Signage",
        tagline: "Show. Engage. Inspire your clients.",
        price: "$",
    },
];


const VISIBLE = 3;

export default function HardwareCardsInteractive() {
    const N = ITEMS.length;
    const [start, setStart] = useState(0);
    const [dir, setDir] = useState<"next" | "prev">("next");
    const [active, setActive] = useState<number | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const setVideoRef = useCallback(
        (index: number) => (el: HTMLVideoElement | null) => {
            videoRefs.current[index] = el;
        },
        []
    );

    // 3 index global đang hiển thị (cửa sổ trượt bước = 1)
    const windowIndexes = useMemo(
        () => Array.from({ length: Math.min(VISIBLE, N) }, (_, i) => (start + i) % N),
        [start, N]
    );

    const goNext = () => {
        setDir("next");
        setStart((s) => (s + 1) % N);
        setActive(null);
    };
    const goPrev = () => {
        setDir("prev");
        setStart((s) => (s - 1 + N) % N);
        setActive(null);
    };

    useEffect(() => {
        videoRefs.current.forEach((v, i) => {
            if (!v) return;
            const inWindow = windowIndexes.includes(i);
            if (active === i && inWindow) {
                v.play().catch(() => { });
            } else {
                v.pause();
                try { v.currentTime = 0; } catch { }
            }
        });
    }, [active, windowIndexes]);

    return (
        <div className="w-full">
            <div className="mb-4 flex items-center justify-end">

                <div className="flex items-center gap-2">
                    <button
                        onClick={goPrev}
                        className="inline-flex h-10 w-10 items-center justify-center text-black cursor-pointer backdrop-blur-sm hover:scale-115 transition"
                        aria-label="Previous"
                        type="button"
                    >
                        <ArrowBackIosNewRoundedIcon sx={{ fontSize: 18 }} />
                    </button>
                    <button
                        onClick={goNext}
                        className="inline-flex h-10 w-10 items-center justify-center text-black cursor-pointer backdrop-blur-sm hover:scale-115 transition"
                        aria-label="Next"
                        type="button"
                    >
                        <ArrowForwardIosRoundedIcon sx={{ fontSize: 18 }} />
                    </button>
                </div>
            </div>
            <div className="relative overflow-hidden h-96">
                <AnimatePresence initial={false} mode="popLayout" custom={dir}>
                    <motion.div
                        key={start}
                        custom={dir}
                        initial={{ x: dir === "next" ? 40 : -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: dir === "next" ? -40 : 40, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="grid gap-8 md:grid-cols-3 h-full"
                    >
                        {windowIndexes.map((globalIdx) => {
                            const it = ITEMS[globalIdx];
                            const isActive = active === globalIdx;

                            return (
                                <motion.article
                                    key={`${globalIdx}-${it.title}`}
                                    onMouseEnter={() => setActive(globalIdx)}
                                    onMouseLeave={() => setActive(null)}
                                    onFocus={() => setActive(globalIdx)}
                                    onBlur={() => setActive(null)}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className="group cursor-pointer rounded-2xl bg-neutral-50 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
                                    tabIndex={0}
                                >
                                    <div className="relative overflow-hidden rounded-2xl h-full">
                                        <div className="relative aspect-16/10 w-full  h-full">
                                            <Image
                                                src={it.img}
                                                alt={it.alt}
                                                fill
                                                className={`object-cover transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"}`}
                                                sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 20vw"
                                                priority={start === 0 && globalIdx === 0}
                                            />
                                            <video
                                                ref={setVideoRef(globalIdx)}
                                                muted
                                                loop
                                                playsInline
                                                preload="none"
                                                poster={it.img}
                                                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
                                                    }`}
                                            >
                                                {isActive && <source src={it.video} />}
                                            </video>

                                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />
                                        </div>

                                        {/* Overlay text */}
                                        <div className="absolute left-0 right-0 bottom-0 p-4 sm:p-5">
                                            <div className="flex items-center gap-2 text-white drop-shadow">
                                                <Link href={it.href} className="text-lg font-semibold hover:underline underline-offset-4">
                                                    {it.title}
                                                </Link>

                                            </div>
                                            <div className="mt-3 h-px w-full bg-white/60" />
                                            <div className="mt-3 flex items-center justify-between text-sm sm:text-base text-white/95 drop-shadow">
                                                <p className="line-clamp-1">{it.tagline}</p>
                                                <p className="font-semibold">{it.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
