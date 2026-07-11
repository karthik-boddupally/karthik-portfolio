import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiDownload } from "react-icons/hi";
import Reveal from "./Reveal";
import { personal } from "../data/portfolioData";

export default function Contact() {
  const quickLinks = [
    { icon: <FaLinkedinIn />, label: "LinkedIn", href: personal.linkedin },
    { icon: <FaGithub />, label: "GitHub", href: personal.github },
    { icon: <HiOutlineMail />, label: "Email", href: personal.gmailCompose || `mailto:${personal.email}` },
    { icon: <FaWhatsapp />, label: "WhatsApp", href: personal.whatsapp },
  ];

  return (
    <section id="contact" className="relative py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-crimson-light font-semibold tracking-widest text-sm mb-2 uppercase">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">Let's Work Together</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal variant="slide-right">
            <p className="text-ink-300 leading-relaxed mb-8 max-w-md">
              I'm currently open to internships and full-time opportunities in data science and data
              engineering. Feel free to reach out — I usually reply within a day.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 glass rounded-xl px-4 py-3 text-ink-100 hover:border-crimson/50 hover:-translate-y-0.5 transition-all"
                >
                  <span className="text-crimson-light text-lg">{l.icon}</span>
                  <span className="text-sm font-medium">{l.label}</span>
                </a>
              ))}
            </div>

            <a
              href={personal.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 font-semibold text-white btn-glow"
            >
              <HiDownload /> Download Resume
            </a>
          </Reveal>

          {/* Get In Touch visual */}
          <Reveal variant="slide-left">
            <div className="glass rounded-3xl p-10 md:p-14 flex flex-col items-center justify-center text-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative mb-6"
              >
                <div
                  className="absolute inset-0 blur-2xl opacity-70"
                  style={{ background: "radial-gradient(circle, rgba(255,45,58,0.6), transparent 70%)" }}
                />
                <svg viewBox="0 0 120 120" className="relative w-28 h-28 md:w-32 md:h-32">
                  <circle cx="60" cy="60" r="58" fill="none" stroke="#e01021" strokeWidth="1.5" opacity="0.35" />
                  <circle cx="60" cy="60" r="46" fill="rgba(224,16,33,0.12)" stroke="#ff4757" strokeWidth="1" />
                  {/* envelope */}
                  <rect x="32" y="46" width="56" height="38" rx="6" fill="#1a0507" stroke="#ff4757" strokeWidth="2" />
                  <path d="M34 48 L60 68 L86 48" fill="none" stroke="#ff4757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  {/* small orbiting dot */}
                  <circle cx="94" cy="34" r="3" fill="#ff4757" />
                  <circle cx="24" cy="90" r="2.5" fill="#ff4757" opacity="0.7" />
                </svg>
              </motion.div>

              <h3 className="font-display text-xl md:text-2xl font-bold text-ink-100 mb-2">
                Let's start a conversation
              </h3>
              <p className="text-ink-300 text-sm max-w-xs">
                Reach out directly through email, LinkedIn, or WhatsApp — whichever's easiest for you.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
