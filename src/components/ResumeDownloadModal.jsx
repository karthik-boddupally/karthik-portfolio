import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { personal } from "../data/portfolioData";

export default function ResumeDownloadModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    setSubmitting(true);

    try {
      // Send notification email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          visitor_name: name,
          company: company || "Not Provided",
          visitor_email: email || "Not Provided",
          download_time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Download resume
      const link = document.createElement("a");
      link.href = personal.resumeFile;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset
      setName("");
      setCompany("");
      setEmail("");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to send notification. Please try again.");
    }

    setSubmitting(false);
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
            <h3 className="font-display text-xl font-bold text-ink-100 mb-2">
              Download Resume
            </h3>

            <p className="text-ink-300 text-sm mb-5">
              Please enter your details before downloading.
            </p>

            <form onSubmit={handleDownload}>
              <input
                type="text"
                placeholder="Your Name *"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-ink-100 mb-3"
              />

              <input
                type="text"
                placeholder="Company (Optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-ink-100 mb-3"
              />

              <input
                type="email"
                placeholder="Email (Optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-ink-100 mb-5"
              />

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-full border border-white/20 py-3 text-ink-300"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 rounded-full bg-crimson py-3 text-white font-semibold"
                >
                  {submitting ? "Sending..." : "Download"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
