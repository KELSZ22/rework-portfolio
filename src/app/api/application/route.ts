import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Force Node.js runtime (Edge will crash nodemailer/Buffer usage).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(email: string) {
  // Good-enough sanity check for contact forms.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let firstName = "";
    let lastName = "";
    let email = "";
    let subject = "";
    let message = "";

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      firstName = String(form.get("firstName") || "");
      lastName = String(form.get("lastName") || "");
      email = String(form.get("email") || "");
      subject = String(form.get("subject") || "");
      message = String(form.get("message") || "");
    } else {
      const body = (await request.json().catch(() => ({}))) as Partial<
        Record<string, string>
      >;
      firstName = body.firstName || "";
      lastName = body.lastName || "";
      email = body.email || "";
      subject = body.subject || "";
      message = body.message || "";
    }

    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
    subject = subject.trim();
    message = message.trim();

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Env vars (set in Vercel → Settings → Environment Variables)
    const user = process.env.GMAIL_USER || "";
    const pass = process.env.GMAIL_PASS || ""; // Gmail/Workspace App Password
    const to = process.env.TO_EMAIL || user;

    if (!user || !pass) {
      return NextResponse.json(
        { error: "Email credentials not configured" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    const senderName = `${firstName} ${lastName}`.trim();
    const mailSubject = `Portfolio Contact: ${subject}`;

    const text =
      `New contact message received:\n\n` +
      `Name: ${senderName}\n` +
      `Email: ${email}\n` +
      `Subject: ${subject}\n\n` +
      `Message:\n${message}`;

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${escapeHtml(senderName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
    `;

    const info = await transporter.sendMail({
      from: user,
      to,
      replyTo: email,
      subject: mailSubject,
      text,
      html,
    });

    console.log("Mail sent", { messageId: info.messageId });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("POST /api/application error:", err);
    const message = err instanceof Error ? err.message : "Failed to send email";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

