import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-crimson-light font-semibold tracking-widest text-sm mb-2 uppercase">What I Work With</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">Technical Skills</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <Reveal key={category} variant="fade-up" delay={catIdx * 0.1}>
              <div className="glass rounded-2xl p-6 md:p-8 h-full">
                <h3 className="font-display text-lg font-bold text-crimson-light mb-5">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      whileHover={{ y: -4, boxShadow: "0 0 20px rgba(224,16,33,0.4)" }}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-ink-100 hover:border-crimson/60 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
