import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass rounded-3xl p-6 md:p-8 hover:border-crimson/50 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-ink-100">{project.title}</h3>
          <p className="text-ink-500 text-sm">{project.date}</p>
        </div>
        <div className="flex gap-3 text-lg">
          <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repository"
             className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-crimson/20 hover:text-crimson-light transition-colors">
            <FaGithub />
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo"
             className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-crimson/20 hover:text-crimson-light transition-colors">
            <FaExternalLinkAlt size={14} />
          </a>
        </div>
      </div>

      <p className="text-ink-300 mb-4">{project.description}</p>

      <div className="space-y-3 text-sm mb-4">
        <div>
          <span className="text-crimson-light font-semibold">Problem: </span>
          <span className="text-ink-300">{project.problem}</span>
        </div>
        <div>
          <span className="text-crimson-light font-semibold">Challenges: </span>
          <span className="text-ink-300">{project.challenges}</span>
        </div>
        <div>
          <span className="text-crimson-light font-semibold">Learnings: </span>
          <span className="text-ink-300">{project.learnings}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-crimson-light font-semibold text-sm mb-2">Key Features</p>
        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1">
          {project.features.map((f) => (
            <li key={f} className="text-ink-300 text-sm flex gap-2">
              <span className="text-crimson-light">•</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full bg-crimson/10 text-crimson-light text-xs font-medium">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
