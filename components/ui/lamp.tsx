'use client'

import { motion } from 'framer-motion'

/**
 * LampEffect — glowing tube + radiating beam for light backgrounds.
 * Adapted from Aceternity UI. Brand orange (#FF5A0E), white bg masks.
 */
export const LampEffect = ({ className }: { className?: string }) => {
  return (
    <div className={`relative flex flex-col w-full overflow-hidden ${className ?? ''}`}>

      {/* ── Glowing tube at the very top ── */}
      <div className="relative w-full flex items-center justify-center flex-shrink-0" style={{ height: 14 }}>
        {/* Outer soft halo */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3 rounded-full opacity-40 blur-md"
          style={{ background: '#FF5A0E' }}
        />
        {/* Sharp tube line */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full"
          style={{ background: 'linear-gradient(to right, transparent 0%, #FF5A0E 20%, #FF5A0E 80%, transparent 100%)' }}
        />
        {/* Bright centre hotspot */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-12 h-3 rounded-full blur-sm opacity-80"
          style={{ background: '#FF5A0E' }}
        />
      </div>

    </div>
  )
}
