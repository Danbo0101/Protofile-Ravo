import { motion, AnimatePresence } from "framer-motion";
import { Add, Remove } from "@mui/icons-material";
import { fadeUp } from "@/app/components/variants";

export default function AccordionItem({
    idx, q, a, isOpen, onToggle,
}: {
    idx: number; q: string; a: string; isOpen: boolean; onToggle: () => void;
}) {
    return (
        <motion.div
            variants={fadeUp}
            className="py-6 sm:py-10 border-neutral-200 border-b last:border-b text-black"
        >
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${idx}`}
                className={[

                    "group relative flex w-full items-start justify-between gap-3 sm:gap-6 text-left",
                    "pt-1",
                ].join(" ")}
            >
                <span className="pr-12 sm:pr-0 font-mono font-semibold text-[20px] text-black sm:text-[28px] wrap-break-word leading-snug">
                    {q}
                </span>
                <motion.span
                    className="inline-flex top-0 right-0 absolute justify-center items-center bg-white sm:bg-transparent rounded-full sm:rounded-none w-10 sm:w-6 h-10 sm:h-6 text-black shrink-0"
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
                                marginTop: 12,
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
                        style={{ overflow: "hidden", willChange: "height, opacity, clipPath" }}
                    >
                        <p className="mt-3 sm:mt-4 max-w-3xl text-black/80 text-base leading-relaxed">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
