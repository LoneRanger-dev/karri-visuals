"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Megaphone, Heart, TrendingUp, Star, Film, Calendar,
  Camera, Sparkles, Target, Clapperboard, Music, Play,
} from "lucide-react";
import { services, serviceCategories } from "@/lib/data";
import type { Service } from "@/types";
import LightSweep from "@/components/three/LightSweep";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Megaphone, Heart, TrendingUp, Star, Film, Calendar,
  Camera, Sparkles, Target, Clapperboard, Music, Play,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] ?? Play;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
    >
      <motion.article
        className="glass rounded-2xl p-6 h-full flex flex-col gap-4 cursor-default"
        whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.09)" }}
        transition={{ duration: 0.3 }}
        aria-label={service.title}
      >
        {/* Claymorph icon */}
        <div className="w-14 h-14 rounded-2xl gradient-gold clay flex items-center justify-center shrink-0">
          <Icon size={24} className="text-navy-deep" />
        </div>

        <div className="flex-1">
          <h3 className="font-heading font-semibold text-lg text-cream mb-2 leading-snug">
            {service.title}
          </h3>
          <p className="text-cream/55 text-sm leading-relaxed">{service.description}</p>
        </div>

        <div className="mt-auto pt-2">
          <a
            href="#contact"
            className="text-gold text-xs font-medium tracking-wide hover:text-gold-light transition-colors inline-flex items-center gap-1 group"
          >
            Get a Quote
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function Services() {
  const [active, setActive] = useState("all");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const filtered =
    active === "all" ? services : services.filter((s) => s.category === active);

  return (
    <section
      id="services"
      ref={ref}
      className="section-pad relative"
      aria-label="Services"
    >
      <LightSweep className="absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            className="text-gold/80 text-xs tracking-[0.3em] uppercase mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.p>
          <motion.h2
            className="font-heading font-light text-4xl sm:text-5xl text-cream"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our Services
          </motion.h2>
        </div>

        {/* Filter tabs */}
        <motion.div
          role="tablist"
          aria-label="Filter services by category"
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {serviceCategories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={active === cat.key}
              onClick={() => setActive(cat.key)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${active === cat.key
                  ? "gradient-gold text-navy-deep clay"
                  : "glass text-cream/60 hover:text-cream"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
