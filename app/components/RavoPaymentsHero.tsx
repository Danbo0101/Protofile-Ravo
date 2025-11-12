"use client";

import Image from "next/image";
import Link from "next/link";

// ---------------------------------------------
// Square-like hero + auto-scrolling image marquee
// Safe build: no framer-motion (fixes null esm_default error)
// If you want Motion back later, see notes at bottom.
// ---------------------------------------------

const IMAGES: { src: string; alt: string }[] = [
    {
        src:
            "https://images.unsplash.com/photo-1577416719444-95f78eac0f02?q=80&w=1600&auto=format&fit=crop",
        alt: "Tap to pay 1",
    },
    {
        src:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
        alt: "Shop counter 2",
    },
    {
        src:
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1600&auto=format&fit=crop",
        alt: "Card present 3",
    },
    {
        src:
            "https://images.unsplash.com/photo-1520975922220-bfe6a27c12e7?q=80&w=1600&auto=format&fit=crop",
        alt: "Artisan 4",
    },
    {
        src:
            "https://images.unsplash.com/photo-1515165562835-c3b8c5b54a03?q=80&w=1600&auto=format&fit=crop",
        alt: "Retail 5",
    },
];

export default function SquarePaymentsHero() {
    // Basic runtime guard (acts like a tiny test in dev)
    if (process.env.NODE_ENV !== "production" && (!IMAGES || IMAGES.length === 0)) {
        // eslint-disable-next-line no-console
        console.warn("[SquarePaymentsHero] IMAGES is empty. Provide at least 1 image.");
    }

    return (
        <section className="w-full bg-white text-black">
            <div className="mx-auto max-w-7xl px-6 pt-16 sm:px-8 sm:pt-24">
                {/* Eyebrow */}
                <p className="text-center text-sm font-medium tracking-wide text-neutral-600">Square Payments</p>

                {/* Big heading */}
                <h1 className="mt-4 text-center font-serif text-4xl leading-tight sm:text-6xl md:text-7xl">
                    Built for however
                    <br className="hidden sm:block" /> you do business
                </h1>

                {/* CTAs */}
                <div className="mt-7 flex items-center justify-center gap-3">
                    <Link
                        href="#"
                        className="rounded-full border border-neutral-900/10 bg-white px-5 py-2.5 text-[15px] font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        Get started
                    </Link>
                    <Link
                        href="#"
                        className="rounded-full bg-black px-5 py-2.5 text-[15px] font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-90"
                    >
                        Contact sales
                    </Link>
                </div>

                {/* Marquee wrapper */}
                <div className="relative mt-12 select-none overflow-hidden pb-20">
                    {/* Soft gradient fades on edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white" />

                    <MarqueeRow images={IMAGES} heightClass="h-[260px]" speed={28} />
                </div>
            </div>

            {/* Component-scoped CSS for smooth, GPU-friendly marquee */}
            <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 1.25rem; /* 5 */
          width: max-content;
          animation: marquee var(--speed, 24s) linear infinite;
          will-change: transform;
        }
        .marquee:hover .marquee-track { animation-play-state: paused; }
      `}</style>
        </section>
    );
}

// ---------- Marquee row (R->L infinite, seamless) ----------
function MarqueeRow({
    images,
    heightClass = "h-56",
    speed = 24,
}: {
    images: { src: string; alt: string }[];
    heightClass?: string;
    speed?: number; // seconds for one half-track
}) {
    // Duplicate list to make the loop seamless.
    const track = [...images, ...images];

    return (
        <div className={`marquee relative ${heightClass}`} style={{ ['--speed' as any]: `${speed}s` }}>
            <div className="marquee-track">
                {track.map((img, idx) => (
                    <figure
                        key={`${img.alt}-${idx}`}
                        className="relative aspect-4/3 w-[320px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm"
                    >
                        {/* Using next/image for performance; replace with <img> if you don't have remotePatterns */}
                        <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 1024px) 70vw, 320px" />
                    </figure>
                ))}
            </div>
        </div>
    );
}

// ---------------------------------------------
// Notes to re-enable Framer Motion later (optional):
// 1) Ensure versions are compatible (e.g., framer-motion ^11 with React 18+).
// 2) This file must remain a Client Component ("use client").
// 3) Import from "framer-motion" and only use it on the client.
// 4) If you prefer Motion, replace the marquee <div> with:
//    <m.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: speed, ease: "linear", repeat: Infinity }} />
//    and `import { m } from "framer-motion";`
// ---------------------------------------------
