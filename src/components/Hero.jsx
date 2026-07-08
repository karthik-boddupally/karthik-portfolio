import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiArrowRight } from "react-icons/hi";
import ParticleField from "./ParticleField";
import { personal } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/hero-illustration.png"
        alt="Karthik working on a laptop"
         className="absolute right-0 bottom-0 w-full h-[88%] object-contain object-right-bottom brightness-110 scale-95"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      <ParticleField />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10">
        <div className="max-w-xl">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-ink-300 text-lg mb-2"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-ink-100"
          >
            {personal.name}
          </motion.h1>

          {/* Animated Role */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-5"
          >
            <TypeAnimation
              sequence={[
                personal.role,
                2000,
                "Machine Learning Enthusiast",
                2000,
                "Data Engineer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-ink-300 text-base sm:text-lg max-w-md mb-8"
          >
            {personal.tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-crimson px-7 py-3.5 font-semibold text-white btn-glow"
            >
              View My Work <HiArrowRight />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-ink-100 hover:border-crimson-light hover:text-crimson-light transition-colors"
            >
              Contact Me <HiArrowRight />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4"
          >
            {[
              {
                icon: <FaLinkedinIn />,
                href: personal.linkedin,
                label: "LinkedIn",
              },
              {
                icon: <FaGithub />,
                href: personal.github,
                label: "GitHub",
              },
              {
                icon: <HiOutlineMail />,
                href: `mailto:${personal.email}`,
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full glass text-ink-100 hover:text-crimson-light hover:border-crimson/50 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
