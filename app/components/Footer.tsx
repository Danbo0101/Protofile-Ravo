"use client";

import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";


type Column = {
    title: string;
    links: { label: string; href: string }[];
};

const COLUMNS: Column[] = [
    {
        title: "Products",
        links: [
            { label: "POS System", href: "#" },
            { label: "RAVO Marketing", href: "#" },
            { label: "RAVO Design Service", href: "#" },
            { label: "Credit Card Processing", href: "#" },
            { label: "Payroll", href: "#" },

        ],
    },
    {
        title: "Policies",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms & Conditions", href: "#" },
            { label: "SMS Terms & Conditions", href: "#" },
        ],
    },
    {
        title: "Other",
        links: [
            { label: "Website Design", href: "#" },

        ],
    },
    {
        title: "Contact",
        links: [
            { label: "Contact: (346) 326-7765", href: "tel:+13463267765" },
            { label: "Direct: ", href: "#" },
        ],
    },

];

export default function Footer() {
    return (
        <footer className="w-full bg-black text-neutral-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
                    {COLUMNS.map((col) => (
                        <nav key={col.title} aria-label={col.title}>
                            <h3 className="text-sm font-semibold tracking-wide text-neutral-400">
                                {col.title}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <Link
                                            href={l.href}
                                            className="text-sm text-neutral-200/90 hover:text-white transition-colors"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                {/* === Translation Notice === */}
                <p className="mt-14 text-sm text-neutral-400">
                    <span className="font-medium">Translation Notice:</span> Some content
                    may have been translated using AI to help serve our global community.
                    While all of our content is reviewed by humans, occasionally
                    pre-reviewed content may be live. If you have any questions, please do
                    not hesitate to reach out to Support in your preferred language.
                </p>

                <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm text-neutral-200 hover:border-white/25 hover:text-white"
                    >
                        <LanguageIcon sx={{ fontSize: 20 }} />
                        United States (English)
                    </button>

                    <div className="flex items-center gap-5">
                        <Link href="https://www.facebook.com/thonguyenzota" aria-label="Facebook" className="text-neutral-300 hover:text-white">
                            <FacebookOutlinedIcon sx={{ fontSize: 20 }} />
                        </Link>
                        <Link href="https://www.instagram.com/ravopos_tho_nguyen" aria-label="Instagram" className="text-neutral-300 hover:text-white">
                            <InstagramIcon sx={{ fontSize: 20 }} />
                        </Link>
                        <Link href="https://www.facebook.com/RavoPosByThoNguyen" aria-label="Facebook" className="text-neutral-300 hover:text-white">
                            <FacebookIcon sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                    <div className="text-sm text-neutral-400">
                        © 2025 Designed by Danbo{" "}
                    </div>
                </div>
            </div>
        </footer>
    );
}
