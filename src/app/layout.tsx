import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexCrypto — Next-Gen Digital Asset Platform",
  description:
    "Trade, invest, and grow your digital assets with NexCrypto. Advanced 3D analytics, real-time data, and lightning-fast execution.",
  keywords: ["cryptocurrency", "bitcoin", "ethereum", "defi", "trading", "web3"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-crypto-dark`}>
        {children}
      </body>
    </html>
  );
}
