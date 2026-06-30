"use client";

import { motion } from "framer-motion";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ClayButtonProps = {
  variant?: "gold" | "teal" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  gold: "gradient-gold text-navy-deep font-semibold",
  teal: "gradient-teal text-navy-deep font-semibold",
  outline:
    "bg-transparent border border-gold/60 text-gold hover:bg-gold/10",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-10 py-5 text-lg",
};

export default function ClayButton({
  variant = "gold",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ClayButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2
    rounded-2xl clay
    transition-all duration-200 active:scale-95
    focus-visible:outline-gold
    ${variants[variant]} ${sizes[size]} ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      {...(props as object)}
    >
      {children}
    </motion.button>
  );
}
