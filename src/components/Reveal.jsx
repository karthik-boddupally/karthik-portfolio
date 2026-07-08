import { motion } from "framer-motion";

/**
 * Generic scroll-reveal wrapper.
 * variant: "fade-up" | "fade" | "zoom" | "slide-left" | "slide-right"
 */
const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 },
  },
};

export default function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  as: Component = motion.div,
}) {
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[variant]}
    >
      {children}
    </Component>
  );
}
