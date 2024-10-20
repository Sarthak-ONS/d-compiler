import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

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
    <html lang="en">
      <body className="dark:bg-black bg-white">
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
