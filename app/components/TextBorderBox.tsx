"use client";

import { useReducedMotion, motion } from "framer-motion";

/**
 * PreviewTextBorderBox — Framer Motion (fixed <g> closing tag + single strand)
 * - Animate SVG textPath.startOffset tuyến tính (không re-render React mỗi frame)
 * - Chỉ 1 sợi chữ duy nhất → không chồng/đè
 * - Tôn trọng prefers-reduced-motion
 * - ĐÃ SỬA lỗi: thiếu </g> làm vỡ JSX
 */
export default function PreviewTextBorderBox() {
    // ====== CONFIG ======
    const W = 1300; // chiều rộng khung
    const H = 450; // chiều cao khung
    const R = 36; // bo góc (px)
    const INSET = 0; // khoảng lùi chữ vào trong (px)
    const DURATION = 60; // giây / 1 vòng (tăng để chậm hơn, giảm để nhanh hơn)

    // Chuỗi đủ dài (nhưng không quá lớn), tránh dính ký tự bằng NBSP
    const BASE = "— ONE MONTHLY PLAN — NO HIDDEN FEES — NO LOCKED-IN CONTRACTS — \u00A0\u00A0";
    const REPEAT = 80;
    const LONG_STR = new Array(REPEAT).fill(BASE).join("");

    // ====== Path bo góc — bắt đầu giữa cạnh trên (open path để giấu seam) ======
    const x0 = INSET;
    const y0 = INSET;
    const x1 = W - INSET;
    const y1 = H - INSET;
    const rr = Math.min(R, (W - 2 * INSET) / 2, (H - 2 * INSET) / 2);
    const midTop = (x0 + x1) / 2;

    const d = [
        `M ${midTop} ${y0}`,
        `H ${x1 - rr}`,
        `A ${rr} ${rr} 0 0 1 ${x1} ${y0 + rr}`,
        `V ${y1 - rr}`,
        `A ${rr} ${rr} 0 0 1 ${x1 - rr} ${y1}`,
        `H ${x0 + rr}`,
        `A ${rr} ${rr} 0 0 1 ${x0} ${y1 - rr}`,
        `V ${y0 + rr}`,
        `A ${rr} ${rr} 0 0 1 ${x0 + rr} ${y0}`,
        `H ${midTop}`,
    ].join(" ");

    const reduce = useReducedMotion();
    const run = !reduce; // nếu user chọn giảm motion, dừng animation

    // ==== ("Test cases" nhẹ dạng tự kiểm tra) ==== //
    // 1) Path phải bắt đầu bằng 'M' và không kết thúc bằng 'Z'
    console.assert(/^M\s/.test(d), "[DevCheck] Path should start with 'M'.");
    console.assert(!/Z\s*$/.test(d), "[DevCheck] Path should be open (no 'Z').");
    // 2) Chuỗi phải có NBSP ở cuối mỗi block để chống dính ký tự
    console.assert(/\u00A0/.test(BASE), "[DevCheck] BASE should include NBSP for spacing.");

    return (
        <div className="min-h-screen w-full flex items-start justify-center py-16">
            <div className="relative" style={{ width: W, height: H }}>
                {/* nền khung */}
                <div className="absolute inset-0 bg-trans " />

                {/* SVG với bleed để glyph không bị cắt mép */}
                <svg
                    width={W}
                    height={H}
                    viewBox={`-2 -2 ${W + 48} ${H + 48}`}
                    className="absolute inset-0"
                    style={{ overflow: "visible" }}
                    aria-hidden
                    shapeRendering="optimizeSpeed"
                    textRendering="optimizeSpeed"
                >
                    <g transform="translate(24,24)">
                        {/* Dùng pathLength để dùng % (0% → -100%) cho startOffset */}
                        <path id="roundedRectPath" d={d} fill="none" pathLength={1000} />

                        {/* Single strand text (1 sợi dây duy nhất) */}
                        <text
                            fill="rgba(23,23,23,0.82)"
                            fontSize="9"
                            fontFamily="inherit"
                            style={{ letterSpacing: "0.4em" }}
                        >
                            <motion.textPath
                                href="#roundedRectPath"
                                startOffset="0%"
                                animate={run ? { startOffset: ["0%", "-100%"] } : undefined}
                                transition={run ? { repeat: Infinity, ease: "linear", duration: DURATION } : undefined}
                                method="align"
                                spacing="auto"
                            >
                                {LONG_STR}
                            </motion.textPath>
                        </text>
                    </g>
                </svg>

                {/* VÙNG NỘI DUNG DEMO */}
                <div className="absolute inset-12 rounded-3xl grid place-items-center pointer-events-none">
                    <div className="text-center max-w-[80%]">
                        <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-500">
                            Pricing
                        </p>
                        <h1 className="mt-2 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-neutral-900 leading-tight">
                            Your complete business toolkit,<br />
                            starting at $0
                        </h1>
                        <p className="mt-4 text-neutral-600 text-[15px] sm:text-base">
                            Choose from value-packed plans. No hidden fees or locked-in contracts.<br />
                            Cancel or switch anytime.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
