import { FaBriefcase } from "react-icons/fa";
import Reveal from "./Reveal";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-crimson-light font-semibold tracking-widest text-sm mb-2 uppercase">Career</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">Work Experience</h2>
        </Reveal>

        <div className="relative border-l border-white/10 ml-4 md:ml-6">
          {experience.map((exp, i) => (
            <Reveal key={exp.company} variant="fade-up" delay={i * 0.1} className="relative pl-10 md:pl-14 pb-14 last:pb-0">
              <span className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-bg-void border border-crimson flex items-center justify-center text-crimson-light">
                <FaBriefcase size={16} />
              </span>

              <div className="glass rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl md:text-2xl font-bold">{exp.company}</h3>
                  <span className="text-xs md:text-sm font-medium text-crimson-light bg-crimson/10 rounded-full px-3 py-1">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-ink-300 font-medium mb-1">{exp.role}</p>
                <p className="text-ink-500 text-sm mb-4 italic">{exp.project}</p>
                <ul className="space-y-2">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="text-ink-300 text-sm md:text-base flex gap-2">
                      <span className="text-crimson-light mt-1">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
