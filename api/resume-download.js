import nodemailer from "nodemailer";

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

  const { name } = req.body || {};
  const visitorName = (name || "").trim() || "Someone";
  const time = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  console.log("Resume downloaded:", { visitorName, time });

  const mailer = getTransporter();
  if (mailer) {
    try {
      await mailer.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
        subject: `📄 ${visitorName} has downloaded your resume`,
        text: `${visitorName} just downloaded your resume from your portfolio.\n\nTime: ${time}`,
      });
    } catch (err) {
      console.error("Failed to send resume-download notification:", err.message);
    }
  }

  return res.status(200).json({ success: true });
}
