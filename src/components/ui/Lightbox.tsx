"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Play } from "lucide-react";
import type { PortfolioItem } from "@/types";

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [embedBlocked, setEmbedBlocked] = useState(false);

  const reelUrl = item ? `https://www.instagram.com/reel/${item.reel}/` : "#";
  const thumbSrc = item ? `/img/thumbs/${item.reel}.jpg` : "";

  const clearTimer = useCallback(() => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
  }, []);

  useEffect(() => {
    if (!item) { setEmbedBlocked(false); return; }

    setEmbedBlocked(false);
    closeRef.current?.focus();

    // Instagram posts window.postMessage when the embed loads successfully.
    // If we hear nothing in 4 s, assume it's blocked / private.
    const onMessage = (e: MessageEvent) => {
      if (typeof e.origin === "string" && e.origin.includes("instagram.com")) {
        clearTimer();
      }
    };
    window.addEventListener("message", onMessage);
    timerRef.current = setTimeout(() => setEmbedBlocked(true), 4000);

    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      clearTimer();
      window.removeEventListener("message", onMessage);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose, clearTimer]);

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

          {/* Panel */}
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
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Embed or fallback */}
            <div className="w-full bg-black relative" style={{ height: "min(70vh, 560px)" }}>
              {!embedBlocked ? (
                <iframe
                  key={item.reel}
                  src={`https://www.instagram.com/reel/${item.reel}/embed`}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="eager"
                  title={item.title}
                />
              ) : (
                /* Fallback: thumbnail + open-on-Instagram CTA */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6">
                  {/* Blurred thumbnail background */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumbSrc}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
                  />
                  <div className="absolute inset-0 bg-navy-deep/70" />

                  <div className="relative z-10 flex flex-col items-center gap-5 text-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <Play size={24} className="text-gold fill-gold ml-1" />
                    </div>
                    <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
                      This reel can&apos;t be embedded directly.<br />
                      Watch it on Instagram.
                    </p>
                    <a
                      href={reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gold text-navy-deep font-semibold text-sm px-6 py-3 rounded-full hover:bg-gold/90 transition-colors"
                    >
                      <ExternalLink size={15} />
                      Watch on Instagram
                    </a>
                  </div>
                </div>
              )}
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
                href={reelUrl}
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
