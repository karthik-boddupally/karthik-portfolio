import { motion } from "framer-motion";

/**
 * Hero illustration — uses your uploaded image at public/hero-illustration.png.
 * Wrapped in a floating motion animation and a soft red glow to match the
 * rest of the hero section.
 */
export default function HeroIllustration() {
  return (
    <motion.div
      className="relative w-full max-w-[600px] mx-auto"
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* soft glow behind the image */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 55% 40%, rgba(255,45,58,0.55), transparent 70%)",
        }}
      />
      <img
        src="/hero-illustration.png"
        alt="Karthik working on a laptop"
        className="w-full h-auto rounded-2xl drop-shadow-2xl"
      />
    </motion.div>
  );
}
