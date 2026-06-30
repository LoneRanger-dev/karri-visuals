"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ClayButton from "@/components/ui/ClayButton";

export default function CTABand() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section
      id="cta"
      ref={ref}
      className="relative overflow-hidden py-24 sm:py-32"
      aria-label="Call to action"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy-deep to-navy"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, #C9A24B 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, #1FA8B8 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Particle accents */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold/40"
            style={{
              left: `${10 + i * 7.5}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Sparkles className="text-gold mx-auto mb-6" size={40} aria-hidden="true" />

          <h2 className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-4">
            Let&apos;s create something{" "}
            <br className="hidden sm:block" />
            <span className="gradient-gold-text font-semibold">
              extraordinary
            </span>
          </h2>

          <p className="text-cream/60 text-lg mb-10 max-w-xl mx-auto">
            Your story is waiting to be told. Let&apos;s tell it together with
            the craft, vision, and passion it deserves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ClayButton href="#contact" size="lg" variant="gold">
              Start Your Project
              <ArrowRight size={18} />
            </ClayButton>
            <ClayButton href="#work" size="lg" variant="outline">
              See Our Work
            </ClayButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
