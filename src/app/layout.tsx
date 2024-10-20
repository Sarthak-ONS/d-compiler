import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "DCompiler",
  description: "A simple and wicked fast compiler for JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-black bg-white">
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
