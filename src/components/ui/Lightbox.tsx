"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/types";

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;
    closeRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-navy-deep/90 backdrop-blur-xl"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel — narrow portrait container matching reel format */}
          <motion.div
            className="relative z-10 glass rounded-3xl overflow-hidden w-full max-w-sm flex flex-col"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
          >
            {/* Close */}
            <button
              ref={closeRef}
              onClick={onClose}
              className="absolute top-3 right-3 z-20 p-2 rounded-full glass text-cream/70 hover:text-cream transition-colors"
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>

            {/* Instagram reel — loaded only when this dialog mounts (lazy by definition) */}
            <div className="w-full bg-black" style={{ height: "min(70vh, 560px)" }}>
              <iframe
                src={`https://www.instagram.com/reel/${item.reel}/embed`}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                loading="eager"
                title={item.title}
              />
            </div>

            {/* Meta */}
            <div className="p-5 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[10px] text-gold font-semibold uppercase tracking-[0.15em]">
                  {item.category}
                </span>
                <h3 className="text-cream font-heading font-semibold text-lg leading-tight mt-0.5 truncate">
                  {item.title}
                </h3>
                <p className="text-cream/50 text-xs mt-1 leading-snug">{item.cast}</p>
              </div>
              <a
                href={`https://www.instagram.com/reel/${item.reel}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 glass rounded-xl text-cream/50 hover:text-gold transition-colors"
                aria-label="View on Instagram"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
