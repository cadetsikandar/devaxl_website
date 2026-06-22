import { NextResponse } from "next/server";

export const runtime = "edge";

const RECIPIENT_NOTE = "touqeerhassan76@gmail.com"; // delivered via the inbox tied to WEB3FORMS_KEY

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  // honeypot — real users never fill this; bots do.
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Silently accept spam (honeypot tripped) without forwarding.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2 || message.length < 10 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please add your name, a valid email, and a short message." },
      { status: 422 },
    );
  }

  const key = process.env.WEB3FORMS_KEY;
  if (!key) {
    console.error("WEB3FORMS_KEY is not set — cannot deliver contact form.");
    return NextResponse.json(
      { ok: false, error: "The form isn't configured yet. Please email us directly." },
      { status: 500 },
    );
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject: `New enquiry from ${name} — Devaxl`,
      from_name: "Devaxl Website",
      replyto: email,
      // Fields below are rendered into the email body by Web3Forms.
      name,
      email,
      phone: phone || "—",
      message,
      _to_note: RECIPIENT_NOTE,
    }),
  });

  const data = (await res.json().catch(() => ({}))) as { success?: boolean };

  if (!res.ok || !data.success) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your message. Please email us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
