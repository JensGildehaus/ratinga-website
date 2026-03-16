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
  colors = ["#fde8e8", "#dde8ff", "#ffeedd", "#e8f0ff", "#ffe0e0", "#eef4ff"],
  distortion = 0.5,
  swirl = 0.5,
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
      {/* Leichter Schleier damit Text gut lesbar bleibt */}
      <div className="absolute inset-0 pointer-events-none bg-white/20" />
    </>
  );
}
