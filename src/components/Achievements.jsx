import { FaCertificate, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";
import { certifications, achievements } from "../data/portfolioData";

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-100">{children}</h3>
      <span className="h-[2px] w-16 bg-crimson" />
    </div>
  );
}

function CertificationCard({ item, index }) {
  return (
    <Reveal variant="fade-up" delay={index * 0.08}>
      <div className="glass rounded-2xl p-5 md:p-6 hover:border-crimson/50 hover:-translate-y-1 transition-all duration-300">
        <div className="flex gap-4">
          <div className="w-11 h-11 flex-shrink-0 rounded-full bg-crimson/15 border border-crimson/40 flex items-center justify-center text-crimson-light text-lg">
            <FaCertificate />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-display font-bold text-ink-100 text-base md:text-lg">{item.title}</h4>
            <p className="text-crimson-light text-sm font-medium mt-0.5">{item.subtitle}</p>
            <p className="text-ink-300 text-sm mt-2">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-100 text-sm font-semibold mt-4 hover:text-crimson-light transition-colors"
            >
              View Credential <FaExternalLinkAlt size={11} />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function AchievementCard({ item, index }) {
  return (
    <Reveal variant="fade-up" delay={index * 0.08}>
      <div className="glass rounded-2xl p-5 md:p-6 hover:border-crimson/50 hover:-translate-y-1 transition-all duration-300">
        <div className="flex gap-4">
          <div className="w-11 h-11 flex-shrink-0 rounded-full bg-crimson/15 border border-crimson/40 flex items-center justify-center text-crimson-light text-lg">
            <FaAward />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-display font-bold text-ink-100 text-base md:text-lg">{item.title}</h4>
              {item.date && (
                <span className="text-ink-500 text-xs font-mono whitespace-nowrap bg-white/5 rounded-full px-2.5 py-1">
                  {item.date}
                </span>
              )}
            </div>
            <p className="text-crimson-light text-sm font-medium mt-0.5">{item.subtitle}</p>
            <p className="text-ink-300 text-sm mt-2">{item.description}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-crimson-light font-semibold tracking-widest text-sm mb-2 uppercase">Recognition</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">Achievements & Certifications</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading>Certifications</SectionHeading>
            <div className="space-y-5">
              {certifications.map((item, i) => (
                <CertificationCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeading>Achievements</SectionHeading>
            <div className="space-y-5">
              {achievements.map((item, i) => (
                <AchievementCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
