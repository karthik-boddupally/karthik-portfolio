import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { FaDatabase, FaBrain, FaChartLine } from "react-icons/fa";
import Reveal from "./Reveal";
import { aboutLines, aboutParagraph, aboutCounters } from "../data/portfolioData";

function Counter({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, value, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(v.toFixed(decimals)),
      });
      return controls.stop;
    }
  }, [inView, value, decimals, motionVal]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-extrabold text-gradient">
      {display}
      {suffix}
    </span>
  );
}

function AnimatedLines() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    aboutLines.forEach((_, i) => {
      setTimeout(() => setActiveIndex(i), i * 1000);
    });
  }, [inView]);

  return (
    <div ref={ref} className="space-y-4">
      {aboutLines.map((line, i) => (
        <p
          key={i}
          className={`text-lg md:text-xl font-medium transition-all duration-700 ${
            activeIndex >= i ? "opacity-100 text-ink-100" : "opacity-20 text-ink-300"
          }`}
        >
          <span className="text-crimson-light mr-2">▸</span>
          {line}
        </p>
      ))}
    </div>
  );
}

export default function About() {
  const icons = [FaBrain, FaDatabase, FaChartLine];
  return (
    <section id="about" className="relative py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-crimson-light font-semibold tracking-widest text-sm mb-2 uppercase">About Me</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">Who I Am</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: animated icons */}
          <Reveal variant="slide-right">
            <div className="relative glass rounded-3xl p-10 md:p-14 flex flex-col items-center justify-center gap-8">
              <div className="grid grid-cols-3 gap-6">
                {icons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson-light text-3xl"
                  >
                    <Icon />
                  </motion.div>
                ))}
              </div>
              <p className="text-ink-300 text-center max-w-xs">
                Turning data into decisions — one model, one dashboard, one pipeline at a time.
              </p>
            </div>
          </Reveal>

          {/* Right: lines + paragraph */}
          <Reveal variant="slide-left">
            <AnimatedLines />
            <p className="text-ink-300 leading-relaxed mt-8">{aboutParagraph}</p>
          </Reveal>
        </div>

        {/* Counters */}
        <Reveal variant="fade-up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {aboutCounters.map((c) => (
              <div key={c.label} className="glass rounded-2xl py-8 text-center">
                <Counter value={c.value} suffix={c.suffix} decimals={c.decimals || 0} />
                <p className="text-ink-300 text-sm mt-2">{c.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
