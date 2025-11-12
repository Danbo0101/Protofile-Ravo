"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export type ProductTeaser = {
    label: string;
    headline: string;
    priceLine?: string;
    imageSrc: string;
    imageAlt: string;
    videoSrc: string;
};

type FixedHeights = {
    label: { base: number; sm: number };     // px
    headline: { base: number; sm: number; md: number }; // px
    price: { base: number; sm: number };     // px
    cta: number;                              // px
};

export default function HoverVideoCard({
    label,
    headline,
    priceLine,
    imageSrc,
    imageAlt,
    videoSrc,
    fixHeights = true,
    fixedHeights = {
        label: { base: 24, sm: 28 },
        // ~2 dòng heading: điều chỉnh theo font của bạn
        headline: { base: 64, sm: 88, md: 108 },
        price: { base: 22, sm: 26 },
        // chiều cao tối thiểu cho khu CTA để tránh wrap làm nhảy khung
        cta: 56,
    },
}: ProductTeaser & {
    fixHeights?: boolean;
    fixedHeights?: FixedHeights;
}) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        v.muted = true;
        (v as any).playsInline = true;
    }, []);

    const play = () => {
        const v = videoRef.current;
        if (!v) return;
        setShowVideo(true);
        v.currentTime = 0;
        v.play().catch(() => { });
    };
    const stop = () => {
        const v = videoRef.current;
        if (!v) return;
        v.pause();
        v.currentTime = 0;
        setShowVideo(false);
    };

    return (
        <article
            className="group relative flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-0.5"
            onMouseEnter={play}
            onMouseLeave={stop}
            onFocus={play}
            onBlur={stop}
            tabIndex={0}
            aria-label={`${label} teaser`}
        >
            {/* Media (fixed aspect) */}
            <div className="relative mx-auto aspect-4/3 w-full max-w-[620px] overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    className={`object-contain transition-opacity duration-300 ${showVideo ? "opacity-0" : "opacity-100"}`}
                />
                <video
                    ref={videoRef}
                    className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${showVideo ? "opacity-100" : "opacity-0"}`}
                    src={videoSrc}
                    preload="metadata"
                    muted
                    playsInline
                />
            </div>

            {/* Text */}
            <div className="mt-6 w-full">
                {/* Label */}
                <p
                    className="text-[17px] font-semibold text-neutral-800 flex items-center justify-center"
                    style={
                        fixHeights
                            ? {
                                minHeight: fixedHeights.label.base,
                            }
                            : undefined
                    }
                >
                    <span className="inline-block">{label}</span>
                </p>

                {/* Headline (2-line clamp to keep height stable) */}
                <h3
                    className="mt-2 font-serif text-3xl sm:text-4xl leading-tight tracking-tight
                     [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden"
                    style={
                        fixHeights
                            ? {
                                minHeight: fixedHeights.headline.base,
                            }
                            : undefined
                    }
                >
                    {headline}
                </h3>

                {/* Price */}
                {priceLine && (
                    <p
                        className="mt-3 text-neutral-500 flex items-center justify-center"
                        style={
                            fixHeights
                                ? {
                                    minHeight: fixedHeights.price.base,
                                }
                                : undefined
                        }
                    >
                        {priceLine}
                    </p>
                )}
            </div>

            {/* CTA */}
            <div
                className="mt-8 flex flex-wrap justify-center gap-4"
                style={fixHeights ? { minHeight: fixedHeights.cta } : undefined}
            >
                <Link
                    href="#"
                    className="rounded-full border border-black px-6 sm:px-8 py-3 text-[16px] font-medium transition hover:bg-black hover:text-white"
                >
                    Learn more
                </Link>
                <Link
                    href="#"
                    className="rounded-full bg-black px-6 sm:px-8 py-3 text-[16px] font-medium text-white transition hover:bg-neutral-800"
                >
                    Buy now
                </Link>
            </div>
        </article>
    );
}
