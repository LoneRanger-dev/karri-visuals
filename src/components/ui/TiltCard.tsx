"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({
  children,
  className = "",
  intensity = 12,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity]);
  // Hooks must be called unconditionally at the top level. This was previously
  // called inside JSX under `{hovering && ...}`, which crashed the tab on hover.
  const glareBg = useTransform(
    springX,
    [-0.5, 0.5],
    [
      "radial-gradient(circle at 20% 50%, rgba(201,162,75,0.12) 0%, transparent 60%)",
      "radial-gradient(circle at 80% 50%, rgba(201,162,75,0.12) 0%, transparent 60%)",
    ]
  );

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        perspective: 800,
        rotateX: hovering ? rotateX : 0,
        rotateY: hovering ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {children}
      {hovering && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
}
