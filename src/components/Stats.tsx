"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

const stats = [
  {
    value: 2400000,
    display: (v: number) => `${(v / 1000000).toFixed(1)}M+`,
    label: "Active Traders",
    sublabel: "Worldwide users",
    color: "from-crypto-purple to-crypto-purple-light",
  },
  {
    value: 48,
    display: (v: number) => `$${v}B+`,
    label: "Assets Secured",
    sublabel: "In cold storage",
    color: "from-crypto-cyan to-crypto-cyan-light",
  },
  {
    value: 99.99,
    display: (v: number) => `${v.toFixed(2)}%`,
    label: "Uptime SLA",
    sublabel: "Enterprise reliability",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    value: 180,
    display: (v: number) => `${v}+`,
    label: "Trading Pairs",
    sublabel: "Crypto markets",
    color: "from-crypto-gold to-crypto-gold-light",
  },
];

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(stat.value, 2200, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="gradient-border relative overflow-hidden group text-center p-8"
    >
      {/* Glow orb */}
      <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

      <div className={`text-4xl md:text-5xl font-bold font-display mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
        {stat.display(count)}
      </div>
      <div className="text-base font-semibold text-white mb-1">{stat.label}</div>
      <div className="text-sm text-white/40">{stat.sublabel}</div>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background line decoration */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="section-heading font-display mb-4"
          >
            Trusted by{" "}
            <span className="gradient-text">millions worldwide</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="section-subheading mx-auto"
          >
            The numbers speak for themselves — NexCrypto is the platform traders
            trust to grow their wealth.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
