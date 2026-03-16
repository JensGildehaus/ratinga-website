"use client";

import { motion } from "framer-motion";

interface LiquidButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function LiquidButton({ href, children, className = "" }: LiquidButtonProps) {
  return (
    <>
      {/* SVG filter für den Goo-Effekt */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="liquid-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div style={{ filter: "url(#liquid-filter)" }} className="inline-block">
        <motion.a
          href={href}
          className={`
            relative inline-flex items-center gap-2
            bg-[#0a0a0a] text-white
            px-8 py-4 rounded-full
            text-sm font-semibold
            overflow-hidden
            ${className}
          `}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {/* Hover-Glow */}
          <motion.span
            className="absolute inset-0 bg-[#D12B2B] rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.6, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>
        </motion.a>
      </div>
    </>
  );
}
