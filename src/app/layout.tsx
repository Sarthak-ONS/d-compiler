import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DCompiler",
  description: "A simple and wicked fast compiler for JS, Python, CPP and Java",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>DCompiler</title>
        <meta
          name="description"
          content="A simple and wicked fast compiler for JS, Python, CPP and Java"
        />
        <meta property="og:title" content="DCompiler" />
        <meta
          property="og:description"
          content="A simple and wicked fast compiler for JS, Python, CPP and Java"
        />

        <meta name="twitter:title" content="DCompiler" />
        <meta
          name="twitter:description"
          content="A simple and wicked fast compiler for JS, Python, CPP and Java"
        />
      </head>
      <body className="dark:bg-black bg-white">
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
        <Toaster position="top-center" />
      </body>
      <GoogleAnalytics gaId="G-1DWJQWR414" />
    </html>
  );
}
