import { FaAward, FaCertificate } from "react-icons/fa";
import Reveal from "./Reveal";
import { achievements } from "../data/portfolioData";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-crimson-light font-semibold tracking-widest text-sm mb-2 uppercase">Recognition</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">Achievements & Certifications</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <Reveal key={a.title} variant="zoom" delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col hover:-translate-y-1.5 hover:border-crimson/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson-light text-xl mb-4">
                  {i === 0 ? <FaAward /> : <FaCertificate />}
                </div>
                <h3 className="font-display text-lg font-bold mb-1">{a.title}</h3>
                <p className="text-crimson-light text-sm font-medium mb-2">{a.org}</p>
                <p className="text-ink-300 text-sm flex-1">{a.description}</p>
                {a.date && <p className="text-ink-500 text-xs mt-4">{a.date}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
