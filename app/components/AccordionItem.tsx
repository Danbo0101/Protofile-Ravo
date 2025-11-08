import { motion, AnimatePresence } from "framer-motion";
import {
    Add,
    Remove
} from "@mui/icons-material";

import { fadeUp } from "@/app/components/variants";



export default function AccordionItem({
    idx, q, a, isOpen, onToggle,
}: {
    idx: number; q: string; a: string; isOpen: boolean; onToggle: () => void;
}) {
    return (
        <motion.div
            variants={fadeUp}
            className="py-10 text-black border-b border-neutral-200 last:border-b"
        >
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${idx}`}
                className="group flex w-full items-start justify-between gap-6 text-left"
            >
                <span className="text-2xl font-mono font-semibold leading-snug sm:text-[28px] text-black">
                    {q}
                </span>
                <motion.span
                    className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center text-black"
                    whileTap={{ scale: 0.9 }}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 26 }}
                    aria-hidden
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={isOpen ? "minus" : "plus"}
                            initial={{ opacity: 0, scale: 0.7, rotate: -90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.7, rotate: 90 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="text-black"
                        >
                            {isOpen ? <Remove fontSize="large" /> : <Add fontSize="large" />}
                        </motion.span>
                    </AnimatePresence>
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={`faq-panel-${idx}`}
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: {
                                height: "auto",
                                opacity: 1,
                                marginTop: 16,
                                clipPath: "inset(0% 0 0% 0 round 0px)",
                                transition: {
                                    height: { type: "spring", stiffness: 280, damping: 30 },
                                    opacity: { duration: 0.2 },
                                    clipPath: { duration: 0.28, ease: "easeOut" },
                                },
                            },
                            collapsed: {
                                height: 0,
                                opacity: 0,
                                marginTop: 0,
                                clipPath: "inset(0% 0 100% 0 round 0px)",
                                transition: {
                                    height: { duration: 0.24, ease: "easeInOut" },
                                    opacity: { duration: 0.18 },
                                    clipPath: { duration: 0.22, ease: "easeIn" },
                                },
                            },
                        }}
                        style={{ overflow: "hidden", willChange: "height, opacity, clip-path" }}
                    >
                        <p className="max-w-3xl mt-4 text-base leading-relaxed text-black/80">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}