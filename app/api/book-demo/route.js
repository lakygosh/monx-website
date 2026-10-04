import nodemailer from "nodemailer";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Everything a visitor types goes into the email as text, never as markup.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function field(body, key, max) {
  return typeof body[key] === "string" ? body[key].trim().slice(0, max) : "";
}

export async function POST(req) {
  try {
    const body = await req.json();

    // The form's hidden honeypot: only bots fill it. Answer as if it worked.
    if (field(body, "website", 200)) {
      return Response.json({ ok: true });
    }

    const name = field(body, "name", 200);
    const email = field(body, "email", 200);
    const company = field(body, "company", 200);
    const message = field(body, "message", 5000);

    if (!name || !EMAIL.test(email)) {
      return Response.json({ error: "Name and a valid email are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: true, // since you are using port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // convert comma-separated emails to array
    const recipients = process.env.TARGET_EMAILS.split(",").map((e) => e.trim());

    await transporter.sendMail({
      from: `"MonX website" <${process.env.SMTP_USER}>`,
      to: recipients,
      replyTo: email,
      subject: `New demo request${company ? ` from ${company}` : ""}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Company: ${company || "-"}`, "", message || "-"].join("\n"),
      html: `
        <h2>New demo request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message || "-")}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
