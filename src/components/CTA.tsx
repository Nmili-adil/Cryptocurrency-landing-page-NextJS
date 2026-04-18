"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Glowing background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] rounded-full bg-gradient-to-r from-crypto-purple/20 to-crypto-cyan/15 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-crypto-purple/30"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.08) 50%, rgba(124,58,237,0.05) 100%)",
          }}
        >
          {/* Animated border glow */}
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              boxShadow: "inset 0 0 60px rgba(124,58,237,0.15), 0 0 80px rgba(124,58,237,0.1)",
            }}
          />

          <div className="relative z-10 p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-5xl mb-6"
            >
              🚀
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="text-4xl md:text-5xl font-bold font-display mb-5"
            >
              Ready to join the{" "}
              <span className="gradient-text">future of finance?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="text-lg text-white/55 mb-10 max-w-xl mx-auto"
            >
              Create your free account in under 60 seconds. No credit card
              required. Start with $10K in paper trading credit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="btn-primary text-base px-10 py-4 group">
                <span>Create Free Account</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </button>
              <button className="btn-secondary text-base px-8 py-4">
                Talk to Sales
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-white/30"
            >
              {[
                "🔒 Bank-grade security",
                "✓ No credit card required",
                "⚡ Setup in 60 seconds",
                "🌍 Available in 150+ countries",
              ].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
