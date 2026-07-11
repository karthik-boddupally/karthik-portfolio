import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Reveal from "./Reveal";
import SignLanguageMockup from "./mockups/SignLanguageMockup";
import BitcoinMockup from "./mockups/BitcoinMockup";
import { projects } from "../data/portfolioData";

const mockups = [SignLanguageMockup, BitcoinMockup];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const Mockup = mockups[index] || SignLanguageMockup;
  const imageOnLeft = index % 2 === 0;

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="relative py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
            <div>
              <p className="text-crimson-light font-semibold tracking-widest text-sm mb-2 uppercase">
                Selected Work
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold">Featured Projects</h2>
            </div>

            {/* Page dots */}
            <div className="flex gap-2">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${p.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-crimson" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className={`glass rounded-2xl p-4 md:p-6 ${imageOnLeft ? "md:order-1" : "md:order-2"}`}>
              <Mockup />
            </div>

            <div className={imageOnLeft ? "md:order-2" : "md:order-1"}>
              <p className="text-crimson-light text-xs font-semibold tracking-widest uppercase mb-2">
                {project.date}
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">{project.title}</h3>

              <div className="glass rounded-xl p-5 mb-6">
                <p className="text-ink-300 leading-relaxed">{project.description}</p>
              </div>

              <p className="text-crimson-light font-semibold text-sm tracking-wide mb-3">KEY FEATURES</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                {project.features.map((f) => (
                  <li key={f} className="text-ink-300 text-sm flex gap-2">
                    <span className="text-crimson-light mt-0.5">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-crimson/10 text-crimson-light text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 font-semibold text-ink-100 hover:border-crimson/50 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-crimson px-5 py-3 font-semibold text-white btn-glow"
                >
                  <FaExternalLinkAlt size={14} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next controls */}
        <div className="flex justify-center gap-4 mt-14">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full glass flex items-center justify-center text-ink-100 hover:border-crimson/50 hover:text-crimson-light transition-colors"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="w-11 h-11 rounded-full glass flex items-center justify-center text-ink-100 hover:border-crimson/50 hover:text-crimson-light transition-colors"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
