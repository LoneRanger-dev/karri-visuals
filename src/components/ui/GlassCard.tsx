"use client";

import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: React.ReactNode;
}

export default function GlassCard({
  children,
  hover = false,
  className = "",
  ...props
}: GlassCardProps) {
  const base =
    "glass rounded-2xl p-6 transition-all duration-300";
  const hoverClass = hover
    ? "hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
    : "";

  return (
    <div className={`${base} ${hoverClass} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function GlassCardAnimated({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 ${className}`}
      whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.09)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
