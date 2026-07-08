import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "*" }));
app.use(express.json());

// Simple in-memory rate limit (per IP) so the form can't be spammed
const submissions = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = submissions.get(ip) || [];
  const recent = entry.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  submissions.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

// Fallback storage: append every message to a local JSON log so nothing is
// lost even if SMTP isn't configured yet.
const LOG_FILE = path.join(__dirname, "messages.json");
function logMessage(entry) {
  let data = [];
  if (fs.existsSync(LOG_FILE)) {
    try {
      data = JSON.parse(fs.readFileSync(LOG_FILE, "utf-8"));
    } catch {
      data = [];
    }
  }
  data.push(entry);
  fs.writeFileSync(LOG_FILE, JSON.stringify(data, null, 2));
}

let transporter = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are required" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email address" });
  }

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many messages. Please try again in a minute." });
  }

  const entry = { name, email, message, receivedAt: new Date().toISOString() };
  logMessage(entry);

  if (transporter) {
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
        replyTo: email,
        subject: `Portfolio contact form: ${name}`,
        text: message,
        html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
      });
    } catch (err) {
      console.error("Email send failed, message was still logged:", err.message);
    }
  }

  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Portfolio contact API running on http://localhost:${PORT}`);
});
