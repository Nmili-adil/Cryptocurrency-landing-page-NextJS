"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Create Your Account",
    description:
      "Sign up in under 60 seconds. Complete KYC verification and unlock the full power of the platform.",
    icon: "👤",
  },
  {
    step: "02",
    title: "Fund Your Wallet",
    description:
      "Deposit crypto or fiat via bank transfer, card, or 20+ payment methods. Funds arrive instantly.",
    icon: "💳",
  },
  {
    step: "03",
    title: "Explore 3D Markets",
    description:
      "Navigate immersive 3D charts, set AI alerts, and spot opportunities with institutional-grade tools.",
    icon: "🔮",
  },
  {
    step: "04",
    title: "Trade & Grow",
    description:
      "Execute trades with precision. Let compounding, DeFi yields, and smart automation do the rest.",
    icon: "🚀",
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center group"
    >
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center text-3xl
          group-hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-500 group-hover:-translate-y-2">
          {step.icon}
        </div>
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-crypto-purple to-crypto-cyan
          flex items-center justify-center text-xs font-bold text-white shadow-[0_0_12px_rgba(124,58,237,0.6)]">
          {index + 1}
        </div>
      </div>
      <h3 className="text-lg font-bold font-display text-white mb-2">{step.title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
    </motion.div>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="how-it-works" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-crypto-cyan/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crypto-cyan/10 border border-crypto-cyan/30 text-sm text-crypto-cyan-light font-medium mb-5"
          >
            ✦ How It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-heading font-display mb-5"
          >
            Get started in{" "}
            <span className="gradient-text-purple-cyan">4 simple steps</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute hidden lg:block top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-crypto-purple/40 to-transparent" />

          {steps.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
