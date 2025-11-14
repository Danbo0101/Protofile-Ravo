// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Image, { StaticImageData } from "next/image";
// import { AnimatePresence, motion } from "framer-motion";
// import { fadeUpExit, fadeUp, stagger } from "@/app/components/variants";

// import img from "@/app/assets/about1.png"

// type Pair = {
//     large: StaticImageData | string;
//     small: StaticImageData | string;
//     altLarge?: string;
//     altSmall?: string;
// };


// const DesignServicesPage = () => {
//     const PAIRS: Pair[] = useMemo(
//         () => [
//             { large: "/images/gift-large-1.jpg", small: "/images/gift-small-1.jpg" },
//             { large: "/images/gift-large-2.jpg", small: "/images/gift-small-2.jpg" },
//             { large: "/images/gift-large-3.jpg", small: "/images/gift-small-3.jpg" },
//             { large: "/images/gift-large-4.jpg", small: "/images/gift-small-4.jpg" },
//         ],
//         []
//     );

//     const [idx, setIdx] = useState(0);

//     // Auto change ảnh mỗi 1 giây
//     useEffect(() => {
//         const t = setInterval(() => {
//             setIdx((i) => (i + 1) % PAIRS.length);
//         }, 1000);
//         return () => clearInterval(t);
//     }, [PAIRS.length]);

//     const pair = PAIRS[idx];

//     return (
//         <main>
//             <section className="relative bg-white w-full overflow-hidden">
//                 <div className="mx-auto px-6 lg:px-8 py-16 sm:py-24 max-w-7xl">
//                     <div className="items-center gap-10 grid lg:grid-cols-2">
//                         {/* LEFT — text giữ nguyên */}
//                         <div className="max-w-xl">
//                             <p className="font-serif text-neutral-300 text-7xl sm:text-8xl leading-none tracking-tight">
//                                 Square
//                             </p>
//                             <h1 className="mt-2 font-serif font-extrabold text-neutral-900 text-6xl sm:text-7xl leading-[0.95]">
//                                 Gift Cards
//                             </h1>

//                             <p className="mt-6 text-neutral-600 text-lg leading-8">
//                                 Bring in new business with digital and physical gift cards you can
//                                 sell in person and online.
//                             </p>

//                             <div className="flex flex-wrap gap-4 mt-8">
//                                 <a
//                                     href="#"
//                                     className="inline-flex justify-center items-center bg-black hover:bg-neutral-800 shadow-sm px-6 py-3 rounded-full font-semibold text-white text-sm transition-colors"
//                                 >
//                                     Set up eGift Cards
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="inline-flex justify-center items-center bg-white shadow-sm px-6 py-3 border border-neutral-300 hover:border-neutral-400 rounded-full font-semibold text-neutral-900 text-sm transition-colors"
//                                 >
//                                     Order Gift Cards
//                                 </a>
//                             </div>
//                         </div>

//                         {/* RIGHT — Hai hình: nhỏ trên, lớn dưới */}
//                         <div className="relative flex flex-col items-center">
//                             {/* Ảnh nhỏ (trên) */}
//                             <div className="z-10 relative w-4/5 max-w-md">
//                                 <AnimatePresence mode="wait">
//                                     <motion.div
//                                         key={`small-${idx}`}
//                                         variants={fadeUp}
//                                         initial="hidden"
//                                         animate="show"
//                                         exit="hidden"
//                                         className="relative bg-white shadow-lg border border-neutral-200 rounded-2xl aspect-[16/9] overflow-hidden"
//                                     >
//                                         <Image
//                                             src={pair.small}
//                                             alt={pair.altSmall ?? "Gift card small"}
//                                             fill
//                                             className="object-cover"
//                                             sizes="(max-width: 1024px) 80vw, 40vw"
//                                             priority
//                                         />
//                                     </motion.div>
//                                 </AnimatePresence>
//                             </div>

//                             {/* Ảnh lớn (dưới) */}
//                             <div className="relative -mt-6 w-full">
//                                 <AnimatePresence mode="wait">
//                                     <motion.div
//                                         key={`large-${idx}`}
//                                         variants={fadeUp}
//                                         initial="hidden"
//                                         animate="show"
//                                         exit="hidden"
//                                         className="relative bg-white shadow-xl border border-neutral-200 rounded-3xl aspect-[21/9] overflow-hidden"
//                                     >
//                                         <Image
//                                             src={pair.large}
//                                             alt={pair.altLarge ?? "Gift card large"}
//                                             fill
//                                             className="object-cover"
//                                             sizes="(max-width: 1024px) 100vw, 48vw"
//                                             priority
//                                         />
//                                     </motion.div>
//                                 </AnimatePresence>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="bg-neutral-50 py-16 sm:py-24 w-full text-black">
//                 <div className="mx-auto px-6 sm:px-8 max-w-7xl">
//                     <div className="gap-10 grid lg:grid-cols-2">
//                         {/* Left big image */}
//                         <motion.figure
//                             variants={fadeUp}
//                             initial="hidden"
//                             whileInView="show"
//                             viewport={{ once: true, amount: 0.3 }}
//                             className="relative bg-neutral-200 shadow-sm rounded-[32px] overflow-hidden"
//                         >
//                             <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
//                                 <Image
//                                     src={img}
//                                     alt="Customer at counter"
//                                     fill
//                                     priority
//                                     className="object-cover"
//                                     sizes="(max-width: 1024px) 100vw, 50vw"
//                                 />
//                             </div>
//                         </motion.figure>

//                         {/* Right column: headline, copy, small image */}
//                         <motion.div
//                             variants={stagger}
//                             initial="hidden"
//                             whileInView="show"
//                             viewport={{ once: true, amount: 0.25 }}
//                             className="flex flex-col"
//                         >
//                             <motion.h2
//                                 variants={fadeUp}
//                                 className="font-serif font-extrabold text-4xl sm:text-5xl leading-tight tracking-tight"
//                             >
//                                 <span className="block">Redeem just like</span>
//                                 <span className="block">any other form of</span>
//                                 <span className="block">payment.</span>
//                             </motion.h2>

//                             <motion.p
//                                 variants={fadeUp}
//                                 className="mt-6 max-w-xl text-neutral-700 sm:text-[17px] text-base leading-7"
//                             >
//                                 With scannable QR codes and barcodes, Square Gift Cards are easy
//                                 to redeem for you and your customers. Store them as a card on file
//                                 in your customer’s profile for extra convenience.
//                             </motion.p>

//                             <motion.figure
//                                 variants={fadeUp}
//                                 className="self-start bg-neutral-200 shadow-sm mt-10 rounded-[28px] overflow-hidden"
//                             >
//                                 <div className="relative w-full sm:w-[520px] aspect-[16/11]">
//                                     <Image
//                                         src={img}
//                                         alt="Tablet scanning gift card"
//                                         fill
//                                         className="object-cover"
//                                         sizes="(max-width: 1024px) 100vw, 520px"
//                                     />
//                                 </div>
//                             </motion.figure>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>


//         </main>

//     )
// }

const DesignServicesPage = () => { }

export default DesignServicesPage;