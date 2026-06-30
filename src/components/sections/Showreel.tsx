"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { portfolio } from "@/lib/data";
import type { PortfolioItem } from "@/types";
import Lightbox from "@/components/ui/Lightbox";
import TiltCard from "@/components/ui/TiltCard";
import LightSweep from "@/components/three/LightSweep";

// Cycling accent gradients so cards have visual variety without thumbnails
const ACCENTS = [
  "from-teal/25 via-navy to-navy-deep",
  "from-gold/20 via-navy to-navy-deep",
  "from-teal/15 via-navy-deep to-navy",
  "from-gold/15 via-navy-deep to-navy",
  "from-teal/30 via-navy-deep to-navy",
  "from-gold/25 via-navy to-navy-deep",
] as const;

function PortfolioCard({
  item,
  index,
  onClick,
}: {
  item: PortfolioItem;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [hovered, setHovered] = useState(false);

  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
      className="break-inside-avoid mb-5"
    >
      <TiltCard>
        <article
          className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-[3/4]"
          onClick={onClick}
          onKeyDown={(e) => e.key === "Enter" && onClick()}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          tabIndex={0}
          role="button"
          aria-label={`Watch: ${item.title}`}
        >
          {/* Gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${accent} transition-opacity duration-300`} />

          {/* Subtle dot-grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gold/10 to-teal/5"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Category badge — top left */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-navy-deep/70 border border-gold/30 text-gold text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full backdrop-blur-sm">
              {item.category}
            </span>
          </div>

          {/* Instagram icon — top right */}
          <div className="absolute top-3 right-3 z-10 opacity-30 group-hover:opacity-60 transition-opacity">
            <InstagramIcon size={16} className="text-cream" />
          </div>

          {/* Play button — centred */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              animate={{ scale: hovered ? 1.12 : 1, opacity: hovered ? 1 : 0.75 }}
              transition={{ duration: 0.2 }}
              className="w-14 h-14 glass rounded-full flex items-center justify-center border border-gold/40"
            >
              <Play size={20} className="text-gold fill-gold ml-1" />
            </motion.div>
          </div>

          {/* Meta overlay — bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-navy-deep/95 via-navy-deep/70 to-transparent">
            <h3 className="text-cream font-heading font-semibold text-[15px] leading-snug">
              {item.title}
            </h3>
            <p className="text-cream/50 text-[11px] mt-1 leading-snug">{item.cast}</p>
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
}

export default function Showreel() {
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section
      id="work"
      ref={ref}
      className="section-pad relative bg-navy/30"
      aria-label="Portfolio and showreel"
    >
      <LightSweep className="absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            className="text-gold/80 text-xs tracking-[0.3em] uppercase mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Our Work
          </motion.p>
          <motion.h2
            className="font-heading font-light text-4xl sm:text-5xl text-cream"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Stories We&apos;ve Told
          </motion.h2>
          <motion.p
            className="text-cream/50 mt-4 max-w-2xl mx-auto text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
          >
            A series of 16 celebrity-cast cyber-crime awareness short films produced for{" "}
            <span className="text-cream/80">Vizag City Police</span>, alongside original
            ad films and digital content — click any card to watch the reel.
          </motion.p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {portfolio.map((item, i) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={i}
              onClick={() => setLightboxItem(item)}
            />
          ))}
        </div>
      </div>

      {/* Iframe only mounts when lightboxItem is non-null — inherently lazy */}
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      <LightSweep className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
