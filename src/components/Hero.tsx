"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import dynamic from "next/dynamic";

const CryptoCanvas = dynamic(
  () => import("./CryptoCanvas").then((m) => m.CryptoCanvas),
  { ssr: false }
);

const cryptoPrices = [
  { symbol: "BTC", price: "$67,420", change: "+4.2%", up: true },
  { symbol: "ETH", price: "$3,812", change: "+6.1%", up: true },
  { symbol: "SOL", price: "$189.4", change: "+12.3%", up: true },
  { symbol: "BNB", price: "$594", change: "-1.2%", up: false },
];

function PriceCard({ symbol, price, change, up, delay }: {
  symbol: string; price: string; change: string; up: boolean; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card px-4 py-3 flex items-center gap-3 min-w-[130px]"
    >
      <div className="w-8 h-8 rounded-lg bg-crypto-purple/20 flex items-center justify-center text-xs font-bold text-crypto-purple-light">
        {symbol.slice(0, 1)}
      </div>
      <div>
        <div className="text-xs text-white/50 font-medium">{symbol}</div>
        <div className="text-sm font-bold text-white">{price}</div>
      </div>
      <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${
        up ? "text-emerald-400 bg-emerald-400/10" : "text-red-400 bg-red-400/10"
      }`}>
        {change}
      </span>
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const words = ["Trade Smarter.", "Grow Faster.", "Own Your Future."];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Hero gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-crypto-purple/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-crypto-cyan/8 blur-[100px] pointer-events-none" />

      {/* 3D Canvas */}
      <motion.div
        style={{ y: springY }}
        className="absolute inset-0 pointer-events-none"
      >
        <CryptoCanvas />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-16"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-crypto-purple/30 text-sm"
        >
          <span className="glow-dot animate-pulse" />
          <span className="text-white/70">
            Live trading •{" "}
            <span className="text-crypto-cyan-light font-semibold">$2.4B</span> volume today
          </span>
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading font-display max-w-4xl"
          >
            The Next-Gen Platform to{" "}
            <span className="gradient-text">
              Trade & Grow
            </span>{" "}
            Your Crypto
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="section-subheading mb-10 text-white/55"
        >
          Advanced analytics, 3D market visualization, AI-powered signals, and
          lightning-fast execution — all in one beautifully crafted platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <button className="btn-primary group text-base px-10 py-4">
            <span>Start Trading Free</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </button>
          <button className="btn-secondary text-base px-8 py-4 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white text-xs">▶</span>
            </div>
            Watch Demo
          </button>
        </motion.div>

        {/* Price cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {cryptoPrices.map((c, i) => (
            <PriceCard key={c.symbol} {...c} delay={0.85 + i * 0.07} />
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 flex flex-wrap gap-8 justify-center text-center"
        >
          {[
            { value: "2.4M+", label: "Active Traders" },
            { value: "$48B", label: "Assets Secured" },
            { value: "180+", label: "Crypto Pairs" },
            { value: "0.01%", label: "Trading Fee" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-2xl font-bold font-display gradient-text-purple-cyan">{s.value}</span>
              <span className="text-sm text-white/45 mt-1">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
