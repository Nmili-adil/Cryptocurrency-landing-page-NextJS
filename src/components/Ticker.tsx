"use client";

import { useEffect, useRef } from "react";

const tickerData = [
  { symbol: "BTC", price: "$67,420", change: "+4.2%" },
  { symbol: "ETH", price: "$3,812", change: "+6.1%" },
  { symbol: "SOL", price: "$189.4", change: "+12.3%" },
  { symbol: "BNB", price: "$594", change: "-1.2%" },
  { symbol: "ADA", price: "$0.612", change: "+3.5%" },
  { symbol: "AVAX", price: "$38.7", change: "+8.9%" },
  { symbol: "DOT", price: "$9.14", change: "+2.1%" },
  { symbol: "MATIC", price: "$0.88", change: "+5.4%" },
  { symbol: "LINK", price: "$14.2", change: "+7.8%" },
  { symbol: "UNI", price: "$11.05", change: "+4.6%" },
  { symbol: "ATOM", price: "$8.34", change: "-0.8%" },
  { symbol: "XRP", price: "$0.624", change: "+1.9%" },
];

function TickerItem({ symbol, price, change }: { symbol: string; price: string; change: string }) {
  const isUp = change.startsWith("+");
  return (
    <div className="flex items-center gap-2.5 px-6 shrink-0">
      <span className="text-sm font-bold text-white/80">{symbol}</span>
      <span className="text-sm text-white/50">{price}</span>
      <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
        isUp ? "text-emerald-400 bg-emerald-400/10" : "text-red-400 bg-red-400/10"
      }`}>
        {change}
      </span>
      <div className="w-px h-4 bg-white/10 ml-2" />
    </div>
  );
}

export function Ticker() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative py-3 overflow-hidden border-y border-white/5 bg-white/2 backdrop-blur-sm">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-crypto-dark to-transparent pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-crypto-dark to-transparent pointer-events-none" />

      <div className="flex" style={{ animation: "ticker 40s linear infinite" }}>
        {[...tickerData, ...tickerData].map((item, i) => (
          <TickerItem key={`${item.symbol}-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
}
