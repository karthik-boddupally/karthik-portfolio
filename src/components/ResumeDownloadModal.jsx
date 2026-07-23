import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "../data/portfolioData";

export default function ResumeDownloadModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitting(true);

    try {
      await fetch("/api/resume-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() }),
      });
    } catch {
      // never block the download over a notification failure
    }

    // trigger the actual file download
    const link = document.createElement("a");
    link.href = personal.resumeFile;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSubmitting(false);
    setName("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl p-6 md:p-8 w-full max-w-sm"
          >
            <h3 className="font-display text-xl font-bold text-ink-100 mb-1">Quick intro before you download</h3>
            <p className="text-ink-300 text-sm mb-5">Just your name — takes two seconds.</p>

            <form onSubmit={handleDownload}>
              <input
                autoFocus
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none focus:border-crimson mb-4"
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-full border border-white/15 py-3 text-sm font-semibold text-ink-300 hover:text-ink-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 rounded-full bg-crimson py-3 text-sm font-semibold text-white btn-glow disabled:opacity-60"
                >
                  {submitting ? "..." : "Download"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
