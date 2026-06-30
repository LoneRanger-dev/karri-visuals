"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { portfolio } from "@/lib/data";
import type { PortfolioItem } from "@/types";
import Lightbox from "@/components/ui/Lightbox";
import TiltCard from "@/components/ui/TiltCard";
import LightSweep from "@/components/three/LightSweep";

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
          {/* Thumbnail photo */}
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Permanent dark scrim so text is always readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/50 to-navy-deep/10" />

          {/* Hover brightness boost */}
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
          <div className="absolute top-3 right-3 z-10 opacity-40 group-hover:opacity-80 transition-opacity">
            <InstagramIcon size={16} className="text-cream" />
          </div>

          {/* Play button — centred */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              animate={{ scale: hovered ? 1.12 : 1, opacity: hovered ? 1 : 0.8 }}
              transition={{ duration: 0.2 }}
              className="w-14 h-14 rounded-full flex items-center justify-center border border-gold/60 bg-navy-deep/50 backdrop-blur-sm"
            >
              <Play size={20} className="text-gold fill-gold ml-1" />
            </motion.div>
          </div>

          {/* Meta overlay — bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
            <h3 className="text-cream font-heading font-semibold text-[15px] leading-snug drop-shadow-lg">
              {item.title}
            </h3>
            <p className="text-cream/60 text-[11px] mt-1 leading-snug">{item.cast}</p>
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
