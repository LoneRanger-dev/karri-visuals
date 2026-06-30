"use client";

import { motion, type Variants } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import ClayButton from "@/components/ui/ClayButton";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero — Karri Visuals"
    >
      {/* Lightweight cinematic background image (no video / no WebGL = no browser crash) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/img/hero-poster.webp')" }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/40 to-navy-deep/90"
        aria-hidden="true"
      />

      {/* Gradient vignette edges */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0A0A0A_100%)]"
        aria-hidden="true"
      />

      {/* Content — pt-28 clears the fixed navbar on all screen sizes */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-28 pb-10">
        <motion.p
          className="text-gold text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          Creative Media & Film Production
        </motion.p>

        <motion.h1
          className="font-heading text-5xl sm:text-6xl lg:text-8xl font-light text-cream leading-tight mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
        >
          We don&apos;t just{" "}
          <br className="hidden sm:block" />
          make videos,{" "}
          <span className="gradient-gold-text font-semibold">
            We Tell Stories.
          </span>
        </motion.h1>

        <motion.p
          className="text-cream/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          Bringing your ideas to life through powerful visuals, creative
          storytelling and result-driven media solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          <ClayButton href="#work" size="lg" variant="gold">
            <Play size={18} className="fill-current" />
            Watch Our Work
          </ClayButton>
          <ClayButton href="#contact" size="lg" variant="outline">
            Start Your Project
          </ClayButton>
        </motion.div>

        <motion.p
          className="mt-10 text-cream/30 text-sm tracking-widest uppercase"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
        >
          We Create. We Capture. We Inspire.
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#intro"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30 hover:text-cream/60 transition-colors"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
