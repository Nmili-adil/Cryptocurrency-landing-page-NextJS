"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Lightning Execution",
    description:
      "Sub-millisecond order execution with our proprietary matching engine. Never miss a trade due to latency.",
    gradient: "from-crypto-purple/20 to-crypto-purple/5",
    glowColor: "rgba(124,58,237,0.4)",
    tag: "< 1ms latency",
  },
  {
    icon: "🔮",
    title: "3D Market Visualization",
    description:
      "Immersive three-dimensional charts and order book depth views that reveal patterns invisible in 2D.",
    gradient: "from-crypto-cyan/20 to-crypto-cyan/5",
    glowColor: "rgba(6,182,212,0.4)",
    tag: "Real-time 3D",
  },
  {
    icon: "🤖",
    title: "AI Trading Signals",
    description:
      "Machine learning models trained on billions of data points surface alpha opportunities 24/7.",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    glowColor: "rgba(16,185,129,0.4)",
    tag: "93% accuracy",
  },
  {
    icon: "🛡️",
    title: "Bank-Grade Security",
    description:
      "Multi-layer encryption, cold storage, and real-time threat monitoring keep your assets safe.",
    gradient: "from-crypto-gold/20 to-crypto-gold/5",
    glowColor: "rgba(245,158,11,0.4)",
    tag: "SOC 2 certified",
  },
  {
    icon: "🌐",
    title: "DeFi Integration",
    description:
      "Seamlessly access 50+ DeFi protocols, yield farms, and liquidity pools from one unified dashboard.",
    gradient: "from-pink-500/20 to-pink-500/5",
    glowColor: "rgba(236,72,153,0.4)",
    tag: "50+ protocols",
  },
  {
    icon: "📊",
    title: "Portfolio Analytics",
    description:
      "Advanced P&L tracking, risk assessment, tax reports, and performance benchmarking tools.",
    gradient: "from-indigo-500/20 to-indigo-500/5",
    glowColor: "rgba(99,102,241,0.4)",
    tag: "Pro analytics",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="gradient-border group relative cursor-default select-none"
      style={{ background: `linear-gradient(135deg, ${feature.gradient.replace("from-", "").replace("to-", "")})` }}
    >
      <div
        className={`p-6 rounded-2xl bg-gradient-to-br ${feature.gradient} transition-all duration-500
        group-hover:shadow-[0_0_40px_var(--glow)] group-hover:-translate-y-1`}
        style={{ "--glow": feature.glowColor } as React.CSSProperties}
      >
        {/* Tag */}
        <div className="flex items-start justify-between mb-5">
          <div className="text-3xl">{feature.icon}</div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/8 text-white/60 border border-white/10">
            {feature.tag}
          </span>
        </div>

        <h3 className="text-lg font-bold font-display text-white mb-2.5 group-hover:text-white transition-colors">
          {feature.title}
        </h3>
        <p className="text-sm text-white/55 leading-relaxed">{feature.description}</p>

        {/* Learn more */}
        <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-crypto-cyan-light/70 group-hover:text-crypto-cyan-light transition-colors">
          <span>Learn more</span>
          <motion.span
            animate={inView ? { x: [0, 4, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export function Features() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="features" className="relative py-28 px-6">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-crypto-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crypto-purple/10 border border-crypto-purple/30 text-sm text-crypto-purple-light font-medium mb-5"
          >
            ✦ Platform Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading font-display mb-5"
          >
            Everything you need to{" "}
            <span className="gradient-text">dominate the market</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subheading mx-auto"
          >
            Professional-grade tools that were once exclusive to hedge funds, now
            available to every trader.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
