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
            { label: "POS System", href: "/products/hardware/" },
            { label: "RAVO Marketing", href: "/products/marketing/" },
            { label: "RAVO Design Service", href: "/products/design/" },
            { label: "Credit Card Processing", href: "/products/creditCard/" },
            { label: "Payroll", href: "/products/payroll/" },

        ],
    },
    {
        title: "Policies",
        links: [
            { label: "Privacy Policy", href: "/policies/privacy/" },
            { label: "Terms & Conditions", href: "/policies/terms/" },
            { label: "SMS Terms & Conditions", href: "/policies/smsTerms/" },
        ],
    },
    {
        title: "Other",
        links: [
            { label: "Website Design", href: "/other/website/" },

        ],
    },
    {
        title: "Contact",
        links: [
            { label: "Contact: (346) 326-7765", href: "tel:+13463267765" },
            { label: "Address: 5605 Bellaire Blvd, Suite B, Houston, TX 77081", href: "#" },
        ],
    },

];

export default function Footer() {
    return (
        <footer className="bg-black w-full text-neutral-300">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 max-w-7xl">
                <div className="gap-x-8 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {COLUMNS.map((col) => (
                        <nav key={col.title} aria-label={col.title}>
                            <h3 className="font-semibold text-neutral-400 text-xs tracking-[0.16em]">
                                {col.title}
                            </h3>
                            <ul className="space-y-1.5 mt-4">
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <Link
                                            href={l.href}
                                            className={[
                                                "block rounded-lg px-2 py-2",
                                                "text-sm text-neutral-200/90 hover:text-white",
                                                "hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                                            ].join(" ")}
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
                <p className="mt-12 sm:mt-14 text-[13px] text-neutral-400 leading-relaxed">
                    <span className="font-medium">Translation Notice:</span> Some content may have
                    been translated using AI to help serve our global community. While all of our
                    content is reviewed by humans, occasionally pre-reviewed content may be live.
                    If you have any questions, please do not hesitate to reach out to Support in
                    your preferred language.
                </p>
                <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-4 sm:gap-6 mt-8 pt-6 border-white/10 border-t">
                    <button
                        type="button"
                        className={[
                            "inline-flex items-center justify-center gap-2",
                            "w-full md:w-auto rounded-full border border-white/15",
                            "px-3 py-2 text-sm text-neutral-200",
                            "hover:border-white/25 hover:text-white hover:bg-white/5",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        ].join(" ")}
                    >
                        <LanguageIcon sx={{ fontSize: 20 }} />
                        United States (English)
                    </button>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                            <Link
                                href="https://www.facebook.com/thonguyenzota"
                                aria-label="Facebook (Tho Nguyen)"
                                className="place-items-center grid hover:bg-white/5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 w-10 h-10 text-neutral-300 hover:text-white"
                            >
                                <FacebookOutlinedIcon sx={{ fontSize: 20 }} />
                            </Link>
                            <Link
                                href="https://www.instagram.com/ravopos_tho_nguyen"
                                aria-label="Instagram"
                                className="place-items-center grid hover:bg-white/5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 w-10 h-10 text-neutral-300 hover:text-white"
                            >
                                <InstagramIcon sx={{ fontSize: 20 }} />
                            </Link>
                            <Link
                                href="https://www.facebook.com/RavoPosByThoNguyen"
                                aria-label="Facebook (RAVO POS)"
                                className="place-items-center grid hover:bg-white/5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 w-10 h-10 text-neutral-300 hover:text-white"
                            >
                                <FacebookIcon sx={{ fontSize: 20 }} />
                            </Link>
                        </div>
                        <div className="md:ml-auto text-neutral-400 text-xs sm:text-sm">
                            © 2025 Designed by Danbo
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    );
}
