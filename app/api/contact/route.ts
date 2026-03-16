import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true,
      auth: {
        user: process.env.STRATO_EMAIL,
        pass: process.env.STRATO_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Ratinga AI Website" <${process.env.STRATO_EMAIL}>`,
      to: process.env.STRATO_EMAIL,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Von: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Sendefehler" }, { status: 500 });
  }
}
