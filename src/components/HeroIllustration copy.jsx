import { motion } from "framer-motion";

/**
 * Abstract, non-photorealistic illustration in the spirit of the reference
 * design (person working on a laptop, warm rim-light, data motifs floating
 * around). This is a generic placeholder — swap the <image> href below with
 * an illustration generated from your own photo when you have one, e.g.:
 *   <image href="/assets/hero-illustration.png" ... />
 */
export default function HeroIllustration() {
  return (
    <motion.div
      className="relative w-full max-w-[560px] mx-auto"
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 560 620" className="w-full h-auto drop-shadow-2xl">
        <defs>
          <radialGradient id="glow" cx="50%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#ff2d3a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ff2d3a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hoodie" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c1c22" />
            <stop offset="100%" stopColor="#0d0d10" />
          </linearGradient>
          <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c98a5e" />
            <stop offset="100%" stopColor="#a86a44" />
          </linearGradient>
          <linearGradient id="laptop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8e8ea" />
            <stop offset="100%" stopColor="#b8b8bc" />
          </linearGradient>
        </defs>

        <ellipse cx="290" cy="230" rx="260" ry="230" fill="url(#glow)" />

        {/* desk */}
        <rect x="40" y="520" width="480" height="18" rx="6" fill="#3a0c0e" />
        <rect x="40" y="520" width="480" height="6" rx="3" fill="#e01021" opacity="0.5" />

        {/* torso / hoodie */}
        <path
          d="M150 560 C150 430 190 360 290 360 C390 360 430 430 430 560 Z"
          fill="url(#hoodie)"
        />
        <path d="M255 375 C270 400 310 400 325 375 L318 420 L262 420 Z" fill="#2a2a30" />

        {/* neck + head */}
        <rect x="265" y="290" width="50" height="60" rx="16" fill="url(#skin)" />
        <circle cx="290" cy="245" r="72" fill="url(#skin)" />
        {/* hair */}
        <path
          d="M218 235 C210 170 240 130 290 130 C345 130 375 175 362 235 C362 190 330 165 290 168 C250 165 222 190 218 235 Z"
          fill="#141416"
        />
        {/* simple facial features */}
        <circle cx="266" cy="248" r="5" fill="#1a1a1a" />
        <circle cx="316" cy="248" r="5" fill="#1a1a1a" />
        <path d="M272 278 Q290 290 308 278" stroke="#5c3a26" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* arms reaching to laptop */}
        <path d="M195 430 C170 460 165 500 185 525" stroke="url(#hoodie)" strokeWidth="46" strokeLinecap="round" fill="none" />
        <path d="M385 430 C410 460 415 500 395 525" stroke="url(#hoodie)" strokeWidth="46" strokeLinecap="round" fill="none" />
        <circle cx="185" cy="525" r="20" fill="url(#skin)" />
        <circle cx="395" cy="525" r="20" fill="url(#skin)" />

        {/* laptop */}
        <g transform="translate(160,470)">
          <rect x="0" y="40" width="260" height="14" rx="4" fill="url(#laptop)" />
          <path d="M20 40 L40 -60 L220 -60 L240 40 Z" fill="#d6d6da" opacity="0.15" />
          <rect x="40" y="-60" width="180" height="100" rx="8" fill="#111114" />
          <rect x="50" y="-50" width="160" height="80" rx="4" fill="#e01021" opacity="0.85" />
          <rect x="60" y="-40" width="60" height="6" rx="3" fill="#ffffff" opacity="0.7" />
          <rect x="60" y="-26" width="90" height="6" rx="3" fill="#ffffff" opacity="0.5" />
          <rect x="60" y="-12" width="40" height="6" rx="3" fill="#ffffff" opacity="0.5" />
        </g>

        {/* floating data glyphs */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="470" cy="160" r="4" fill="#ff4757" />
          <circle cx="490" cy="180" r="3" fill="#ff4757" opacity="0.7" />
          <circle cx="450" cy="185" r="2.5" fill="#ff4757" opacity="0.5" />
        </motion.g>
        <motion.g
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <circle cx="70" cy="150" r="4" fill="#ff4757" />
          <circle cx="55" cy="175" r="2.5" fill="#ff4757" opacity="0.6" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
