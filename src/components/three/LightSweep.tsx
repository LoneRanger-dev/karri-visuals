"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

interface LightSweepProps {
  className?: string;
}

export default function LightSweep({ className = "" }: LightSweepProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={`h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent ${className}`} />
    );
  }

  return (
    <div className={`relative overflow-hidden h-px ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <motion.div
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-gold to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "400%" }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 4,
        }}
      />
    </div>
  );
}
