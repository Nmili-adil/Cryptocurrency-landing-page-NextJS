"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Alexandra Kohn",
    role: "Hedge Fund Manager",
    avatar: "AK",
    avatarColor: "from-crypto-purple to-crypto-purple-light",
    rating: 5,
    text: "NexCrypto's 3D visualization tools completely transformed how I read market depth. I identified a $2.4M arbitrage opportunity in the first week that I would have missed with traditional charts.",
    highlight: "$2.4M opportunity spotted",
  },
  {
    name: "Marcus Wei",
    role: "Retail Trader, 4 years",
    avatar: "MW",
    avatarColor: "from-crypto-cyan to-blue-500",
    rating: 5,
    text: "The AI signal system is genuinely impressive — 91% of the alerts I acted on were profitable over three months. The UI feels like the future of trading interfaces.",
    highlight: "91% profitable signals",
  },
  {
    name: "Priya Sharma",
    role: "DeFi Yield Farmer",
    avatar: "PS",
    avatarColor: "from-emerald-500 to-teal-500",
    rating: 5,
    text: "Having 50+ DeFi protocols in one dashboard is a game-changer. I increased my annual yield from 12% to 34% simply by discovering pools I never knew existed.",
    highlight: "34% annual yield",
  },
  {
    name: "David Osei",
    role: "Crypto Fund CTO",
    avatar: "DO",
    avatarColor: "from-crypto-gold to-orange-500",
    rating: 5,
    text: "We migrated our fund's infrastructure to NexCrypto Institution tier. The API latency is sub-0.5ms and the compliance reporting saved our team 40 hours a month.",
    highlight: "40hrs saved monthly",
  },
  {
    name: "Sofia Larsson",
    role: "NFT & Crypto Investor",
    avatar: "SL",
    avatarColor: "from-pink-500 to-rose-500",
    rating: 5,
    text: "Finally a platform that doesn't feel like it was built in 2015. The animations are silky smooth and the dark mode UI is absolutely stunning.",
    highlight: "Best UI in crypto",
  },
  {
    name: "Raj Patel",
    role: "Algorithmic Trader",
    avatar: "RP",
    avatarColor: "from-indigo-500 to-violet-500",
    rating: 5,
    text: "The WebSocket feed is rock-solid with zero dropped messages in 6 months of testing. It's the only platform where I trust my algo strategies to run unattended.",
    highlight: "Zero dropped messages",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-crypto-gold text-sm">★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: (typeof testimonials)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="gradient-border p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="flex items-start justify-between">
        <StarRating count={t.rating} />
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-crypto-purple/15 text-crypto-purple-light border border-crypto-purple/20">
          {t.highlight}
        </span>
      </div>

      <p className="text-sm text-white/65 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>

      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-xs font-bold text-white`}>
          {t.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{t.name}</div>
          <div className="text-xs text-white/40">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="testimonials" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-crypto-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-sm text-emerald-400 font-medium mb-5"
          >
            ✦ Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-heading font-display mb-4"
          >
            Loved by{" "}
            <span className="gradient-text">2.4 million traders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-subheading mx-auto"
          >
            Real stories from real traders — see how NexCrypto is changing the way
            the world invests.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
