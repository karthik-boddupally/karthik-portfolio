import { motion } from "framer-motion";

/**
 * Illustration styled after the reference design: person in a navy blazer
 * and white shirt, typing on a silver laptop, with a small plant and
 * decorative dot-grid/arc details in the background.
 */
export default function HeroIllustration() {
  return (
    <motion.div
      className="relative w-full max-w-[600px] mx-auto"
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 600 680" className="w-full h-auto drop-shadow-2xl">
        <defs>
          <radialGradient id="glow" cx="55%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ff2d3a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff2d3a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="blazer" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2540" />
            <stop offset="100%" stopColor="#141225" />
          </linearGradient>
          <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d99a6c" />
            <stop offset="100%" stopColor="#b87c4e" />
          </linearGradient>
          <linearGradient id="laptopLid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0f0f2" />
            <stop offset="100%" stopColor="#c7c7cc" />
          </linearGradient>
          <linearGradient id="pot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f2ede4" />
            <stop offset="100%" stopColor="#d8d0c2" />
          </linearGradient>
        </defs>

        <ellipse cx="320" cy="260" rx="290" ry="260" fill="url(#glow)" />

        <g fill="#ff4757" opacity="0.55">
          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => (
              <circle key={`${row}-${col}`} cx={520 + col * 16} cy={140 + row * 16} r="2.2" />
            ))
          )}
        </g>

        <path d="M470 470 C 540 470 590 520 590 590" stroke="#ff4757" strokeWidth="1.5" fill="none" opacity="0.5" />
        <circle cx="470" cy="470" r="3" fill="#ff4757" opacity="0.7" />

        <rect x="40" y="580" width="520" height="20" rx="6" fill="#3a0c0e" />
        <rect x="40" y="580" width="520" height="6" rx="3" fill="#e01021" opacity="0.5" />

        <path d="M170 620 C170 480 210 400 320 400 C430 400 470 480 470 620 Z" fill="url(#blazer)" />
        <path d="M280 415 C295 460 345 460 360 415 L350 470 L290 470 Z" fill="#f5f2ea" />
        <path d="M285 410 L250 480 L300 470 Z" fill="#1c1930" />
        <path d="M355 410 L390 480 L340 470 Z" fill="#1c1930" />

        <rect x="295" y="330" width="52" height="62" rx="16" fill="url(#skin)" />
        <circle cx="321" cy="283" r="76" fill="url(#skin)" />
        <path
          d="M246 272 C236 200 270 158 321 158 C378 158 410 205 396 272 C396 222 362 195 321 198 C280 195 250 222 246 272 Z"
          fill="#161318"
        />
        <circle cx="296" cy="286" r="5" fill="#1a1a1a" />
        <circle cx="348" cy="286" r="5" fill="#1a1a1a" />
        <path d="M300 202 a4 4 0 1 0 0.1 0" fill="#c0392b" />
        <path d="M303 318 Q321 330 339 318" stroke="#6b4530" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M285 320 Q321 350 357 320 L352 340 Q321 358 290 340 Z" fill="#3a2418" opacity="0.55" />

        <path d="M222 470 C195 500 190 545 212 572" stroke="url(#blazer)" strokeWidth="50" strokeLinecap="round" fill="none" />
        <path d="M420 470 C447 500 452 545 430 572" stroke="url(#blazer)" strokeWidth="50" strokeLinecap="round" fill="none" />
        <circle cx="212" cy="572" r="21" fill="url(#skin)" />
        <circle cx="430" cy="572" r="21" fill="url(#skin)" />

        <g transform="translate(175,515)">
          <rect x="0" y="45" width="290" height="16" rx="4" fill="url(#laptopLid)" />
          <path d="M20 45 L45 -70 L245 -70 L270 45 Z" fill="#dcdce0" />
          <rect x="45" y="-70" width="200" height="112" rx="8" fill="#101014" />
          <rect x="55" y="-60" width="180" height="92" rx="4" fill="#c40f1f" opacity="0.9" />
          <rect x="66" y="-46" width="70" height="7" rx="3" fill="#ffffff" opacity="0.75" />
          <rect x="66" y="-30" width="100" height="7" rx="3" fill="#ffffff" opacity="0.55" />
          <rect x="66" y="-14" width="45" height="7" rx="3" fill="#ffffff" opacity="0.55" />
          <circle cx="135" cy="65" r="9" fill="#9a9aa0" opacity="0.8" />
        </g>

        <g transform="translate(500,540)">
          <path d="M0 40 L60 40 L52 78 L8 78 Z" fill="url(#pot)" />
          <path d="M18 40 C10 10 30 -18 30 -18 C30 -18 50 10 42 40 Z" fill="#3f8f4f" />
          <path d="M30 40 C25 15 30 -8 30 -8" stroke="#2e6b3a" strokeWidth="2" fill="none" />
        </g>
      </svg>
    </motion.div>
  );
}
