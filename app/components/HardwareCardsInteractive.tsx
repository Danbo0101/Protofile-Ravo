"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
        href: "/products/hardware/check/",
        img: imgCheck.src,
        video: "/vdCheck.mp4",
        alt: "CheckIn - CheckOut POS",
        tagline: "Quick and simple client flow.",
        price: "$",
    },
    {
        title: "Main Screen",
        href: "/products/hardware/mainScreen",
        img: imgScreen.src,
        video: "/vdScreen.mp4",
        alt: "Main Screen",
        tagline: "Your control hub for the salon.",
        price: "$",
    },
    {
        title: "Terminal",
        href: "/products/hardware/terminal/",
        img: imgTerminal.src,
        video: "/vdTerminal.mp4",
        alt: "Terminal",
        tagline: "Compact, powerful, and wireless.",
        price: "$",
    },
    {
        title: "Digital Signage",
        href: "/products/hardware/digital/",
        img: imgDigital.src,
        video: "/vdDigital.mp4",
        alt: "Digital Signage",
        tagline: "Show. Engage. Inspire your clients.",
        price: "$",
    },
];

export default function HardwareCardsInteractive() {
    const N = ITEMS.length;

    const [cols, setCols] = useState(1);
    useEffect(() => {
        const mqSm = window.matchMedia("(min-width: 640px)");
        const mqMd = window.matchMedia("(min-width: 768px)");
        const update = () => setCols(mqMd.matches ? 3 : mqSm.matches ? 2 : 1);
        update();
        mqSm.addEventListener("change", update);
        mqMd.addEventListener("change", update);
        return () => {
            mqSm.removeEventListener("change", update);
            mqMd.removeEventListener("change", update);
        };
    }, []);

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

    const windowIndexes = useMemo(
        () => Array.from({ length: Math.min(cols, N) }, (_, i) => (start + i) % N),
        [start, cols, N]
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
                try {
                    v.currentTime = 0;
                } catch { }
            }
        });
    }, [active, windowIndexes]);

    const touchX = useRef<number | null>(null);
    const onTouchStart = (e: React.TouchEvent) => {
        touchX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) < 32) return;
        if (dx < 0) goNext();
        else goPrev();
    };

    const prefersReduced = useReducedMotion();
    const animInitial = prefersReduced
        ? { opacity: 0 }
        : { x: dir === "next" ? 40 : -40, opacity: 0 };
    const animEnter = prefersReduced ? { opacity: 1 } : { x: 0, opacity: 1 };
    const animExit = prefersReduced
        ? { opacity: 0 }
        : { x: dir === "next" ? -40 : 40, opacity: 0 };

    return (
        <div className="w-full">
            <div className="flex justify-end items-center mb-4">

                <div className="flex items-center gap-2">
                    <button
                        onClick={goPrev}
                        className="inline-flex justify-center items-center bg-white/70 shadow hover:shadow-md rounded-full w-10 sm:w-11 h-10 sm:h-11 text-black hover:scale-105 active:scale-95 transition"
                        aria-label="Previous"
                        type="button"
                    >
                        <ArrowBackIosNewRoundedIcon sx={{ fontSize: 18 }} />
                    </button>
                    <button
                        onClick={goNext}
                        className="inline-flex justify-center items-center bg-white/70 shadow hover:shadow-md rounded-full w-10 sm:w-11 h-10 sm:h-11 text-black hover:scale-105 active:scale-95 transition"
                        aria-label="Next"
                        type="button"
                    >
                        <ArrowForwardIosRoundedIcon sx={{ fontSize: 18 }} />
                    </button>
                </div>
            </div>

            <div
                className="relative overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <div className="h-[360px] sm:h-[380px] md:h-96">
                    <AnimatePresence initial={false} mode="popLayout" custom={dir}>
                        <motion.div
                            key={`${start}-${cols}`}
                            custom={dir}
                            initial={animInitial}
                            animate={animEnter}
                            exit={animExit}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className={`grid gap-4 sm:gap-6 ${cols === 1
                                ? "grid-cols-1"
                                : cols === 2
                                    ? "grid-cols-2"
                                    : "grid-cols-3"
                                } h-full`}
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
                                        onClick={() => {
                                            if (cols === 1 || cols === 2) {
                                                setActive((a) => (a === globalIdx ? null : globalIdx));
                                            }
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                        className="group bg-neutral-50 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/10 cursor-pointer"
                                        tabIndex={0}
                                        role="button"
                                        aria-pressed={isActive}
                                    >
                                        <div className="relative rounded-2xl h-full overflow-hidden">
                                            <div className="relative w-full h-full aspect-16/10">
                                                <Image
                                                    src={it.img}
                                                    alt={it.alt}
                                                    fill
                                                    className={`object-cover transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"
                                                        }`}
                                                    sizes="(max-width:640px) 100vw, (max-width:768px) 50vw, (max-width:1200px) 33vw, 20vw"
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

                                                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />
                                            </div>

                                            <div className="bottom-0 absolute inset-x-0 p-4 sm:p-5">
                                                <div className="flex items-center gap-2 drop-shadow text-white">
                                                    <Link
                                                        href={it.href}
                                                        className="font-semibold text-base sm:text-lg hover:underline underline-offset-4"
                                                    >
                                                        {it.title}
                                                    </Link>
                                                </div>
                                                <div className="bg-white/60 mt-3 w-full h-px" />
                                                <div className="flex justify-between items-center drop-shadow mt-3 text-white/95 text-xs sm:text-sm">
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
                <div className="md:hidden flex justify-center items-center gap-2 mt-4">
                    {Array.from({ length: N }).map((_, i) => {
                        const isOn =
                            (i >= start && i < start + cols) ||
                            (start + cols > N && i < (start + cols) % N);
                        return (
                            <button
                                key={i}
                                className={`h-2 rounded-full transition-all ${isOn ? "w-5 bg-black" : "w-2 bg-neutral-300"
                                    }`}
                                aria-label={`Go to item ${i + 1}`}
                                onClick={() => {
                                    setDir(i > start ? "next" : "prev");
                                    setStart(i);
                                    setActive(null);
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
