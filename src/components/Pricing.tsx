"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for beginners exploring crypto markets.",
    color: "from-white/10 to-white/5",
    accentColor: "text-white",
    borderClass: "border-white/10",
    features: [
      "Up to $10K trading volume/mo",
      "Basic 2D charting tools",
      "5 watchlist assets",
      "Email support",
      "Mobile app access",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: { monthly: 49, annual: 39 },
    description: "For serious traders who demand the best tools.",
    color: "from-crypto-purple/30 to-crypto-cyan/15",
    accentColor: "gradient-text-purple-cyan",
    borderClass: "border-crypto-purple/40",
    features: [
      "Unlimited trading volume",
      "3D market visualization",
      "AI trading signals (93% acc.)",
      "Advanced order types",
      "DeFi protocol access",
      "Priority support 24/7",
      "Portfolio analytics & tax reports",
    ],
    cta: "Start 14-Day Trial",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Institution",
    price: { monthly: 199, annual: 159 },
    description: "Enterprise-grade infrastructure for funds and desks.",
    color: "from-crypto-gold/15 to-crypto-gold/5",
    accentColor: "text-crypto-gold",
    borderClass: "border-crypto-gold/30",
    features: [
      "All Pro features",
      "Dedicated API infrastructure",
      "Co-location options",
      "Custom reporting & compliance",
      "Dedicated account manager",
      "SLA 99.99% uptime",
      "Multi-user team seats",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="pricing" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-crypto-purple/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-crypto-gold/10 border border-crypto-gold/30 text-sm text-crypto-gold font-medium mb-5"
          >
            ✦ Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-heading font-display mb-5"
          >
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </motion.h2>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mt-6 p-1.5 rounded-full glass-card"
          >
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !annual ? "bg-crypto-purple text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]" : "text-white/50 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                annual ? "bg-crypto-purple text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]" : "text-white/50 hover:text-white"
              }`}
            >
              Annual
              <span className="ml-1.5 text-xs text-emerald-400">–20%</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl border ${plan.borderClass} bg-gradient-to-br ${plan.color} p-7 flex flex-col
                ${plan.highlight ? "shadow-[0_0_50px_rgba(124,58,237,0.2)] scale-[1.02]" : ""}`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-crypto-purple to-crypto-cyan text-xs font-bold text-white shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold font-display mb-1 ${
                  plan.highlight ? plan.accentColor : "text-white"
                }`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-white/50">{plan.description}</p>
              </div>

              <div className="mb-7">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold font-display text-white">
                    {plan.price.monthly === 0
                      ? "Free"
                      : `$${annual ? plan.price.annual : plan.price.monthly}`}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-white/40 text-sm mb-1">/month</span>
                  )}
                </div>
                {annual && plan.price.monthly > 0 && (
                  <p className="text-xs text-white/40 mt-1">
                    billed annually (${(annual ? plan.price.annual : plan.price.monthly) * 12}/yr)
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/65">
                    <span className="text-crypto-cyan mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-white/30 mt-8"
        >
          All plans include 256-bit encryption · No hidden fees · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
