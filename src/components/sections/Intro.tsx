"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LightSweep from "@/components/three/LightSweep";

export default function Intro() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section
      id="intro"
      ref={ref}
      className="relative section-pad overflow-hidden"
      aria-label="Our story statement"
    >
      <LightSweep className="absolute top-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="text-gold/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Philosophy
        </motion.p>

        <motion.h2
          className="font-heading font-light text-4xl sm:text-5xl lg:text-7xl text-cream leading-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Every frame tells a{" "}
          <span className="gradient-gold-text font-semibold">story.</span>
          <br />
          Every story changes a{" "}
          <span className="gradient-teal-text font-semibold">world.</span>
        </motion.h2>

        <motion.div
          className="w-24 h-0.5 gradient-gold mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.p
          className="text-cream/60 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          At Karri Visuals, we believe that the most powerful marketing is
          authentic storytelling. From concept to final frame, we craft
          cinematic experiences that captivate audiences, build brands, and
          leave lasting impressions.
        </motion.p>
      </div>

      <LightSweep className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
