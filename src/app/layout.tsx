import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/globals.css';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael's - Portfolio",
  description: "Full Stack Developer Portfolio",
  manifest: '/manifest.json',
  icons: {
    icon: '/images/projects/LG-1.png',
    shortcut: '/images/projects/LG-1.png',
    apple: '/images/projects/LG-1.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/images/projects/LG-1.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 min-h-screen`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}