import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiDownload } from "react-icons/hi";
import Reveal from "./Reveal";
import { personal } from "../data/portfolioData";

// Empty string = same-origin relative call to /api/contact, which is how
// this works out of the box on Vercel (the api/ folder becomes a serverless
// function on the same domain). Set VITE_API_URL only if you're pointing at
// a separately-hosted server/ backend instead.
const API_URL = import.meta.env.VITE_API_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const quickLinks = [
    { icon: <FaLinkedinIn />, label: "LinkedIn", href: personal.linkedin },
    { icon: <FaGithub />, label: "GitHub", href: personal.github },
    { icon: <HiOutlineMail />, label: "Email", href: personal.gmailCompose },
    { icon: <FaWhatsapp />, label: "WhatsApp", href: personal.whatsapp },
  ];

  return (
    <section id="contact" className="relative py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-crimson-light font-semibold tracking-widest text-sm mb-2 uppercase">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">Let's Work Together</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
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

          <Reveal variant="slide-left">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-4">
              <div>
                <label className="block text-sm text-ink-300 mb-1.5" htmlFor="name">Name</label>
                <input
                  id="name" name="name" required value={form.name} onChange={handleChange}
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-crimson"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-ink-300 mb-1.5" htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-crimson"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-ink-300 mb-1.5" htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" required rows={4} value={form.message} onChange={handleChange}
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-crimson resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-crimson py-3.5 font-semibold text-white btn-glow disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "sent" && (
                <p className="text-sm text-green-400">Thanks! Your message has been sent — I'll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-crimson-light">
                  Couldn't reach the server. Please email me directly at {personal.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
