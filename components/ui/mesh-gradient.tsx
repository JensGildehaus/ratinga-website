"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

interface MeshGradientBgProps {
  colors?: string[];
  distortion?: number;
  swirl?: number;
  speed?: number;
}

export function MeshGradientBg({
  colors = ["#f8f8ff", "#ffe8e8", "#e8eeff", "#fff0f0", "#eef2ff", "#fff8f8"],
  distortion = 0.35,
  swirl = 0.4,
  speed = 0.3,
}: MeshGradientBgProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <MeshGradient
        width={dimensions.width}
        height={dimensions.height}
        colors={colors}
        distortion={distortion}
        swirl={swirl}
        grainMixer={0}
        grainOverlay={0}
        speed={speed}
        offsetX={0}
      />
      {/* Veil to keep text readable */}
      <div className="absolute inset-0 pointer-events-none bg-white/35" />
    </>
  );
}
