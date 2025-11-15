import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
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
      to: recipients,  // now sends to multiple emails
      subject: "New demo request",
      html: `
        <h2>New demo request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}