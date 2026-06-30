"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Camera, Scissors, Send } from "lucide-react";
import { processSteps } from "@/lib/data";
import LightSweep from "@/components/three/LightSweep";
import { useReducedMotion } from "@/lib/hooks";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Lightbulb, Camera, Scissors, Send,
};

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduced = useReducedMotion();

  return (
    <section
      id="process"
      ref={ref}
      className="section-pad relative overflow-hidden"
      aria-label="Our creative process"
    >
      <LightSweep className="absolute top-0 left-0 right-0" />

      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #C9A24B 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            className="text-gold/80 text-xs tracking-[0.3em] uppercase mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            How We Work
          </motion.p>
          <motion.h2
            className="font-heading font-light text-4xl sm:text-5xl text-cream"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our Process
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-gold/20 via-gold/50 to-teal/40"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Send;
              return (
                <motion.li
                  key={step.step}
                  initial={reduced ? false : { opacity: 0, y: 40 }}
                  animate={inView && !reduced ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full neo flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full gradient-gold clay flex items-center justify-center">
                        <Icon size={28} className="text-navy-deep" />
                      </div>
                    </div>
                    {/* Step number */}
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-navy border border-gold/50 text-gold text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-cream mb-3">
                    {step.title}
                  </h3>
                  <p className="text-cream/55 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>

      <LightSweep className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
