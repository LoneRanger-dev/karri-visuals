"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import LightSweep from "@/components/three/LightSweep";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const prev = () => setActive((v) => (v - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((v) => (v + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-pad relative bg-navy/40"
      aria-label="Client testimonials"
    >
      <LightSweep className="absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            className="text-gold/80 text-xs tracking-[0.3em] uppercase mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            What Clients Say
          </motion.p>
          <motion.h2
            className="font-heading font-light text-4xl sm:text-5xl text-cream"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Voices of Trust
          </motion.h2>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative glass rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            {/* Gold quote mark */}
            <Quote
              size={64}
              className="absolute top-6 left-8 text-gold/10 rotate-180"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                {/* Avatar placeholder */}
                {/* TODO: Replace with real client avatars */}
                <div className="w-16 h-16 mx-auto rounded-full gradient-gold clay flex items-center justify-center mb-6">
                  <span className="font-heading text-navy-deep font-bold text-xl">
                    {t.name.charAt(0)}
                  </span>
                </div>

                <blockquote>
                  <p className="text-cream/80 text-lg sm:text-xl leading-relaxed italic mb-8 font-heading">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                <div>
                  <p className="text-cream font-semibold">{t.name}</p>
                  <p className="text-cream/50 text-sm mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-cream/60 hover:text-gold transition-colors"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-cream/20"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-cream/60 hover:text-gold transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <LightSweep className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
