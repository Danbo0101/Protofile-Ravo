"use client";

import { useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import {
    motion,
    useMotionValue,
    useSpring,
    cubicBezier,
    type MotionValue,
    type Variants,
} from "framer-motion";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider, type SxProps } from "@mui/material/styles";

// --------- ẢNH (đổi lại cho đúng path của bạn) ----------
import website1 from "@/app/assets/website1.png";
import website2 from "@/app/assets/website2.png";
import website3 from "@/app/assets/website3.png";
import website4 from "@/app/assets/website4.png";
import website5 from "@/app/assets/website5.png";
import website6 from "@/app/assets/website6.png";
import website7 from "@/app/assets/website7.png";
import website8 from "@/app/assets/website8.png";

/* ================== TiltedCard (TSX + Next.js) ================== */

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

type TiltedCardProps = {
    imageSrc: StaticImageData | string;
    altText?: string;
    captionText?: string;
    containerHeight?: string;
    containerWidth?: string;
    imageHeight?: string;
    imageWidth?: string;
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    overlayContent?: React.ReactNode;
    displayOverlayContent?: boolean;
};

function TiltedCard({
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "300px",
    imageWidth = "300px",
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
}: TiltedCardProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0) as MotionValue<number>, springValues);
    const rotateY = useSpring(useMotionValue(0) as MotionValue<number>, springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 });

    const [lastY, setLastY] = useState(0);

    function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <figure
            className="relative w-full h-full perspective-midrange flex flex-col items-center justify-center"
            style={{ height: containerHeight, width: containerWidth }}
        >
            {showMobileWarning && (
                <div className="absolute top-4 text-center text-sm block sm:hidden">
                    This effect is not optimized for mobile. Check on desktop.
                </div>
            )}

            <motion.div
                ref={ref}
                className="relative transform-3d"
                style={{ width: imageWidth, height: imageHeight, rotateX, rotateY, scale }}
                onMouseMove={handleMouse}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* next/image cho static import */}
                <div
                    className="absolute top-0 left-0 rounded-[15px] overflow-hidden will-change-transform transform-[translateZ(0)]"
                    style={{ width: imageWidth, height: imageHeight }}
                >
                    <Image
                        src={imageSrc}
                        alt={altText}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 90vw, 33vw"
                        priority={false}
                    />
                </div>

                {displayOverlayContent && overlayContent && (
                    <motion.div className="absolute top-0 left-0 z-2 will-change-transform transform-[translateZ(30px)]">
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 top-0 rounded-sm bg-white px-2.5 py-1 text-[10px] text-[#2d2d2d] opacity-0 z-3 hidden sm:block shadow-sm"
                    style={{ x, y, opacity, rotate: rotateFigcaption }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}

/* ================== Section chính (đen–trắng sang) ================== */

const monoTheme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#111111" },
        text: { primary: "#111111", secondary: "#4b5563" },
        background: { default: "#f7f7f8", paper: "#ffffff" },
    },
    typography: {
        fontFamily: `'Playfair Display', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
    },
    components: {
        MuiPaginationItem: {
            styleOverrides: {
                root: { borderRadius: 999 },
                outlined: { borderColor: "#d1d5db" },
            },
        },
    },
});

type CardItem = {
    id: number;
    image: StaticImageData;
    link: string;
};

/* ---- Variants dùng cubicBezier (Cách 1) ---- */
const EASE_OUT = cubicBezier(0.22, 1, 0.36, 1);

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE_OUT },
    },
};

const WebsitePage = () => {
    const [page, setPage] = useState(1);
    const cardsPerPage = 6;

    const cardData: CardItem[] = [
        { id: 1, image: website8, link: "https://danbo.ravopos.us/template-8" },
        { id: 2, image: website1, link: "https://danbo.ravopos.us/template-1" },
        { id: 3, image: website2, link: "https://danbo.ravopos.us/template-2" },
        { id: 4, image: website3, link: "https://danbo.ravopos.us/template-3" },
        { id: 5, image: website4, link: "https://danbo.ravopos.us/template-4" },
        { id: 6, image: website5, link: "https://danbo.ravopos.us/template-5" },
        { id: 7, image: website7, link: "https://danbo.ravopos.us/template-7" },
        { id: 8, image: website6, link: "https://danbo.ravopos.us/template-6" },
    ];

    const pageCount = Math.ceil(cardData.length / cardsPerPage);
    const startIndex = (page - 1) * cardsPerPage;
    const currentCards = cardData.slice(startIndex, startIndex + cardsPerPage);

    const paginationSx: SxProps = {
        "& .MuiPaginationItem-root": { color: "#111111" },
        "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#111111",
            color: "#ffffff",
            borderColor: "#111111",
            "&:hover": { backgroundColor: "#0a0a0a" },
        },
    };

    return (
        <ThemeProvider theme={monoTheme}>
            <div className="min-h-screen bg-linear-to-br from-neutral-50 via-white to-neutral-100 text-neutral-900">
                <div className="px-4 md:px-20 py-10">
                    {/* Header */}
                    <div className="text-center py-14 md:py-20">
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
                        >
                            Thiết kế website tiệm Nail chuyên nghiệp
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.4 }}
                            className="text-lg md:text-xl font-light mb-2 max-w-2xl mx-auto italic text-neutral-600"
                        >
                            Website tinh gọn, thẩm mỹ cao — đưa tiệm của bạn lên bản đồ số.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.4 }}
                            className="mx-auto mt-2 h-1 w-24 rounded-full bg-neutral-900/80"
                        />
                    </div>

                    {/* Gallery */}
                    <section className="py-10 md:py-16">
                        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-12">
                            Mẫu giao diện website tiệm Nail
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 md:gap-x-20 gap-y-12 md:gap-y-16">
                            {currentCards.map((item) => (
                                <div key={item.id} className="flex flex-col items-center px-2">
                                    <TiltedCard
                                        imageSrc={item.image}
                                        captionText={`Website Nail mẫu ${item.id}`}
                                        containerHeight="320px"
                                        imageHeight="250px"
                                        imageWidth="100%"
                                        scaleOnHover={1.06}
                                        rotateAmplitude={8}
                                        showMobileWarning={false}
                                        showTooltip={true}
                                        displayOverlayContent={true}
                                        overlayContent={
                                            <div className="text-white text-sm bg-black/60 px-3 py-1 rounded-md shadow-md">
                                                Website Nail mẫu {item.id}
                                            </div>
                                        }
                                    />

                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <button
                                            className="mt-4 rounded-full bg-neutral-900 px-5 py-2 text-white shadow-sm transition
                                 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black/30"
                                        >
                                            Xem chi tiết
                                        </button>
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-10 md:mt-20 flex justify-center">
                            <Stack spacing={2}>
                                <Pagination
                                    count={pageCount}
                                    page={page}
                                    onChange={(_, value) => setPage(value)}
                                    variant="outlined"
                                    shape="rounded"
                                    sx={paginationSx}
                                />
                            </Stack>
                        </div>
                    </section>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default WebsitePage;