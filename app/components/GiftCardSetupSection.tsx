"use client";
import { useEffect, useRef, useState } from "react";

export default function ScrollVideoPreview() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    // ===== Scroll progress =====
    useEffect(() => {
        const onScroll = () => {
            const sec = sectionRef.current;
            if (!sec) return;
            const rect = sec.getBoundingClientRect();
            const vh = window.innerHeight;
            const total = rect.height - vh;
            const scrolled = Math.min(Math.max(-rect.top, 0), total);
            setProgress(total > 0 ? scrolled / total : 0);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    // ===== Scrub video (mượt và nhanh hơn) =====
    useEffect(() => {
        const v = videoRef.current;
        if (!v || !duration) return;
        const target = progress * duration;
        const lerp = 0.35;
        const tick = () => {
            if (!v) return;
            v.currentTime += (target - v.currentTime) * lerp;
            requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [progress, duration]);

    return (
        <section ref={sectionRef} className="relative bg-white">
            <div className="h-[250vh]">
                <div className="sticky top-0 flex h-screen items-center justify-center bg-white">
                    <div className="w-full max-w-4xl overflow-hidden rounded-2xl shadow-lg">
                        <video
                            ref={videoRef}
                            src="/vdScrollAnimation.mp4"
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                            preload="auto"
                            onLoadedMetadata={(e) =>
                                setDuration((e.target as HTMLVideoElement).duration)
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
