"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Award, Shield, Users } from "lucide-react";
import Image from "next/image";
import ClayButton from "@/components/ui/ClayButton";
import LightSweep from "@/components/three/LightSweep";

const differentiators = [
  "Cinematic-grade equipment and expert crew",
  "Story-first approach — always purpose-driven",
  "Hyderabad-based with pan-India and global reach",
  "End-to-end — from concept to distribution",
  "Transparent timelines and on-budget delivery",
  "12+ service categories under one roof",
];

const recognitions = [
  {
    src: "/img/recognition-award.png",
    alt: "Karri Visuals founder receiving an award on stage at the Raising Awareness on Cyber Safety & Online Fraud Prevention — Short Films event, Sagarmatha Convention Hall, alongside police officials and dignitaries",
    label: "Social Impact Award",
    sublabel: "Cyber Awareness Short Films — Sagarmatha Convention Hall",
    Icon: Award,
  },
  {
    src: "/img/recognition-commissioner.png",
    alt: "Karri Visuals founder with the City Police Commissioner, and a screening of social-impact films for police personnel",
    label: "Police Media Collaboration",
    sublabel: "Social-impact films screened for law enforcement personnel",
    Icon: Shield,
  },
  {
    src: "/img/about-team.webp",
    alt: "Karri Visuals production team with cast members at a film shoot location",
    label: "Production Team",
    sublabel: "Versatile crew delivering celebrity productions across genres",
    Icon: Users,
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="section-pad relative overflow-hidden"
      aria-label="About Karri Visuals"
    >
      <LightSweep className="absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main row: photo left · copy right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — real production photos */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Primary photo — founder directing beside ARRI cinema camera */}
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-glass">
              <Image
                src="/img/about-production.webp"
                alt="Karri Visuals team on set during a film shoot"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Behind-the-scenes inset — bottom-left */}
            <motion.div
              className="absolute -bottom-4 -left-4 w-44 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-glass"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Image
                src="/img/about-behind-scenes.webp"
                alt="Karri Visuals crew on an elaborate film set with professional studio lighting"
                width={352}
                height={264}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating accent card — bottom-right */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 w-44"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <p className="text-gold font-heading text-3xl font-semibold">8+</p>
              <p className="text-cream/60 text-xs mt-1 leading-snug">
                Years crafting cinematic stories
              </p>
            </motion.div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-gold/80 text-xs tracking-[0.3em] uppercase mb-4">
              Why Karri Visuals
            </p>
            <h2 className="font-heading font-light text-4xl sm:text-5xl text-cream leading-tight mb-6">
              Where Vision Meets{" "}
              <span className="gradient-gold-text font-semibold">Craft</span>
            </h2>
            <p className="text-cream/60 text-base leading-relaxed mb-4">
              Karri Visuals is a Hyderabad-based creative media and film
              production house dedicated to bringing ideas to life through
              powerful visuals and authentic storytelling.
            </p>
            <p className="text-cream/60 text-base leading-relaxed mb-8">
              Whether it&apos;s a 30-second ad or a full-length documentary, we
              bring the same level of cinematic commitment to every frame — because
              your story deserves to be told right.
            </p>

            <ul className="space-y-3 mb-10" role="list">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-cream/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <ClayButton href="#contact" variant="gold" size="md">
              Let&apos;s Create Together
            </ClayButton>
          </motion.div>
        </div>

        {/* ── Recognition & Social Impact strip ── */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-10">
            <p className="text-gold/80 text-xs tracking-[0.3em] uppercase mb-3">
              Recognition &amp; Social Impact
            </p>
            <h3 className="font-heading font-light text-3xl text-cream">
              Storytelling That{" "}
              <span className="gradient-gold-text font-semibold">Matters</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recognitions.map((item, i) => (
              <motion.div
                key={item.label}
                className="glass rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* gradient caption overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <item.Icon size={14} className="text-gold shrink-0" />
                      <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-cream/80 text-xs leading-snug">
                      {item.sublabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      <LightSweep className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
