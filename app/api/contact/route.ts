import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Ratinga Website <onboarding@resend.dev>",
      to: "kontakt@ratinga.de",
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Von: ${name} <${email}>\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Sendefehler" }, { status: 500 });
  }
}
