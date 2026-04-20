import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sony WH-1000XM6 | Silence, perfected",
  description: "Experience the pinnacle of noise cancelling with the new Sony WH-1000XM6 flagship headphones. Precision-engineered for silence and immersive, lifelike sound.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-[#050505] text-white selection:bg-[#0050FF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
