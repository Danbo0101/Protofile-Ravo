import { Playfair_Display, Inter } from "next/font/google";

export const serif = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
});

export const sans = Inter({
    subsets: ["latin"],
});
