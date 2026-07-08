import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiArrowUp } from "react-icons/hi";
import { navLinks, personal } from "../data/portfolioData";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#home" className="font-display text-2xl font-bold text-ink-100">
              {personal.name}
              <span className="text-crimson">.</span>
            </a>
            <p className="text-ink-300 text-sm mt-3 max-w-xs">{personal.tagline}</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-ink-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ink-300 text-sm hover:text-crimson-light transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-ink-100 mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: <FaLinkedinIn />, href: personal.linkedin },
                { icon: <FaGithub />, href: personal.github },
                { icon: <HiOutlineMail />, href: `mailto:${personal.email}` },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full glass text-ink-100 hover:text-crimson-light transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-ink-500 text-sm">© {new Date().getFullYear()} {personal.fullName}. All rights reserved.</p>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-crimson/10 border border-crimson/30 text-crimson-light hover:bg-crimson hover:text-white transition-colors"
          >
            <HiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
