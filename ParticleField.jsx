import { useMemo } from "react";
import { motion } from "framer-motion";

export default function ParticleField({ count = 24 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 5,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-crimson-light/60"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
