// app/ScrollToTop.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname();
    const search = useSearchParams();

    useEffect(() => {
        // Đợi 1 frame để layout render xong rồi mới scroll
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        });
    }, [pathname, search?.toString()]); // đổi path hoặc query đều về top

    return null;
}
