// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="border-b bg-white">
            <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center gap-6">
                {nav.map((item) => {
                    const active = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm ${active ? "font-semibold underline" : "text-gray-600 hover:text-gray-900"}`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
