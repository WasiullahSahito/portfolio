import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  message: z.string().trim().min(10, "Message is too short").max(2000),
  company: z.string().max(0).optional(),
});

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const requestLog = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  requestLog.set(key, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check your input.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  // Honeypot field: real users never fill it, bots usually do.
  if (parsed.data.company) {
    return NextResponse.json({ success: true });
  }

  // Submission target is configured per deployment, e.g. a Formspree or
  // Web3Forms endpoint. Without it there is nowhere to deliver the message.
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "The contact form is not configured. Please email me directly." },
      { status: 503 }
    );
  }

  const { name, email, message } = parsed.data;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, message, source: "portfolio" }),
    });
    if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
  } catch {
    return NextResponse.json(
      { error: "Your message could not be delivered. Please email me directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
