"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Vector2 } from "three";
import { useReducedMotion } from "@/lib/hooks";

interface SceneProps {
  children: React.ReactNode;
  className?: string;
  poster?: string;
  postprocessing?: boolean;
}

export default function Scene({
  children,
  className = "",
  poster,
  postprocessing = true,
}: SceneProps) {
  const reducedMotion = useReducedMotion();
  const [dpr, setDpr] = useState<[number, number]>([1, 2]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) setDpr([1, 1.5]);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (reducedMotion) {
    return (
      <div
        className={`${className} bg-cover bg-center`}
        style={poster ? { backgroundImage: `url(${poster})` } : {}}
        aria-hidden="true"
      />
    );
  }

  const shouldPostprocess = postprocessing && !isMobile;

  return (
    <Canvas
      className={className}
      dpr={dpr}
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: !isMobile, alpha: true }}
      aria-hidden="true"
    >
      <PerformanceMonitor
        onDecline={() => setDpr([1, 1])}
        onIncline={() => setDpr([1, 2])}
      />
      <Suspense fallback={null}>
        {children}
        {shouldPostprocess && (
          <EffectComposer>
            <Bloom
              intensity={0.8}
              luminanceThreshold={0.6}
              luminanceSmoothing={0.9}
              blendFunction={BlendFunction.SCREEN}
            />
            <ChromaticAberration
              offset={new Vector2(0.0005, 0.0005)}
              blendFunction={BlendFunction.NORMAL}
              radialModulation={false}
              modulationOffset={0}
            />
            <Vignette eskil={false} offset={0.1} darkness={0.7} />
          </EffectComposer>
        )}
      </Suspense>
    </Canvas>
  );
}
