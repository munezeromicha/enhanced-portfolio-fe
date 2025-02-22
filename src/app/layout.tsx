import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/globals.css';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael - Portfolio",
  description: "Professional software developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}