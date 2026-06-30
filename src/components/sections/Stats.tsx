"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";
import { useCountUp } from "@/lib/hooks";
import LightSweep from "@/components/three/LightSweep";

function StatCard({
  value,
  suffix,
  label,
  index,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, inView);

  return (
    <motion.div
      className="neo rounded-2xl p-8 flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <span
        className="font-heading text-5xl sm:text-6xl font-semibold gradient-gold-text"
        aria-live="polite"
        aria-label={`${count}${suffix} ${label}`}
      >
        {count}{suffix}
      </span>
      <span className="text-cream/55 text-sm mt-2 font-medium tracking-wide">
        {label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="stats"
      ref={ref}
      className="relative section-pad bg-navy"
      aria-label="Our achievements"
    >
      <LightSweep className="absolute top-0 left-0 right-0" />

      {/* Teal glow */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #1FA8B8 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="font-heading font-light text-3xl sm:text-4xl text-cream"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Numbers That{" "}
            <span className="gradient-teal-text font-semibold">Speak</span>
          </motion.h2>
          <motion.p
            className="text-cream/40 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            {/* TODO: Update with real stats */}
          </motion.p>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={i}
              inView={inView}
            />
          ))}
        </dl>
      </div>

      <LightSweep className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
