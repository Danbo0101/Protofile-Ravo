// app/layout.tsx
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import ScrollToTop from "@/app/components/ScrollToTop";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Ravo POS",
  description: "Ravo POS - Point of Sale Solutions for Your Business",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col ">
        <Header />
        <main className="flex-1">
          <ScrollToTop />
          {children}
        </main>
        <Toaster position="top-right" richColors closeButton />
        <Footer />
      </body>
    </html>
  );
}
