import { type Variants, type Transition, motion } from "framer-motion";

// Dễ nhớ: bạn có thể import tất cả ở 1 file variants.ts
export const EASE_OUT: Transition["ease"] = [0.22, 1, 0.36, 1];

/* =============================
   🔹 Fade Up (đang dùng)
============================= */
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE_OUT },
    },
};

/* =============================
   🔹 Fade Down (cho title hay heading lớn)
============================= */
export const fadeDown: Variants = {
    hidden: { opacity: 0, y: -28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE_OUT },
    },
};

/* =============================
   🔹 Fade In (cho hình ảnh hoặc video)
============================= */
export const fadeIn: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: EASE_OUT },
    },
};

/* =============================
   🔹 Float In (cho icon hoặc bullet)
============================= */
export const floatIn: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
};

/* =============================
   🔹 Slide In Left / Right (cho card hoặc tab)
============================= */
export const slideLeft: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: EASE_OUT },
    },
};

export const slideRight: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: EASE_OUT },
    },
};

/* =============================
   🔹 Stagger (giữ nguyên)
============================= */
export const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};
