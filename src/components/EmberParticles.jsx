import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Generates glowing ember particles matching the exact Framer "Hero · Ember Particles" spec
export default function EmberParticles({ count = 16 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      // Deterministic spread across the width
      const left = `${((i * 6.25) + 3) % 94}%`;
      const size = (i % 3 === 0) ? 5 : (i % 2 === 0 ? 4 : 3);
      const bottom = `${(i * 4) % 35}%`;
      const duration = 5 + ((i * 1.3) % 5); // 5s to 10s
      const delay = (i * 0.45) % 4.5;
      const xOffset = ((i % 4) - 1.5) * 22; // subtle horizontal drift

      return {
        id: i,
        left,
        bottom,
        size,
        duration,
        delay,
        xOffset,
      };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: 'radial-gradient(50% 50%, #ffce8a 0%, #d6844a 45%, rgba(0,0,0,0) 72%)',
            boxShadow: '0 0 10px rgba(230, 150, 80, 0.85), 0 0 4px rgba(255, 180, 50, 0.9)',
          }}
          initial={{
            opacity: 0,
            y: 0,
            x: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: [0, 0.8, 0.9, 0.4, 0],
            y: [0, -90, -180, -260],
            x: [0, p.xOffset * 0.5, p.xOffset, p.xOffset * 0.8],
            scale: [0.6, 1.2, 1, 0.4],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
