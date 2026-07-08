import nodemailer from "nodemailer";

// Simple in-memory rate limit — resets whenever Vercel spins up a fresh
// function instance, so it's a soft guard rather than a hard limit.
const submissions = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (submissions.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  submissions.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return transporter;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are required" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email address" });
  }

  const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many messages. Please try again in a minute." });
  }

  // Always log to Vercel's function logs, even if email isn't configured.
  console.log("Contact form submission:", { name, email, message, receivedAt: new Date().toISOString() });

  const mailer = getTransporter();
  if (mailer) {
    try {
      await mailer.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
        replyTo: email,
        subject: `Portfolio contact form: ${name}`,
        text: message,
        html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
      });
    } catch (err) {
      console.error("Email send failed:", err.message);
      // Message was still logged above, so don't fail the request just because email failed.
    }
  }

  return res.status(200).json({ success: true });
}
