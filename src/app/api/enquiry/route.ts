import { Resend } from "resend";
import { site } from "@/config/site";
import { enquirySchema, validateAttachment, type EnquiryValues } from "@/lib/enquiry-schema";
import { confirmationEmailHtml, confirmationEmailText, enquiryEmailHtml, enquiryEmailText } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";

export const maxDuration = 30;

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function textField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  const limit = rateLimit(`enquiry:${clientIp(request)}`);
  if (!limit.ok) {
    return Response.json(
      {
        ok: false,
        message: "Too many enquiries from this connection. Please wait a while, or email the workshop directly.",
      },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ ok: false, message: "We could not read the form. Please try again." }, { status: 400 });
  }

  const raw = {
    name: textField(formData, "name"),
    email: textField(formData, "email"),
    phone: textField(formData, "phone"),
    organisation: textField(formData, "organisation"),
    country: textField(formData, "country"),
    category: textField(formData, "category"),
    colours: formData.getAll("colours").filter((value): value is string => typeof value === "string"),
    quantity: textField(formData, "quantity"),
    customisation: textField(formData, "customisation"),
    customisationDetails: textField(formData, "customisationDetails"),
    message: textField(formData, "message"),
    product: textField(formData, "product"),
    company_website: textField(formData, "company_website"),
  };

  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return Response.json(
      { ok: false, message: "Please check the highlighted fields and try again.", fieldErrors },
      { status: 400 },
    );
  }

  const data: EnquiryValues = parsed.data;
  if (data.company_website && data.company_website.trim().length > 0) {
    return Response.json({
      ok: true,
      message: `Thank you. We will respond within ${site.contact.responseTime}.`,
    });
  }

  const reference = formData.get("reference");
  const file = reference instanceof File && reference.size > 0 ? reference : null;
  const fileError = validateAttachment(file);
  if (fileError) {
    return Response.json({ ok: false, message: fileError, fieldErrors: { reference: fileError } }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !fromEmail) {
    return Response.json(
      {
        ok: false,
        message: `The enquiry desk is not configured yet. Please email ${site.contact.email} directly.`,
      },
      { status: 503 },
    );
  }

  const from = fromEmail.includes("<") ? fromEmail : `${site.name} <${fromEmail}>`;
  const attachments = file
    ? [
        {
          filename: file.name.replace(/[^\w.\- ()]+/g, "") || "reference",
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type,
        },
      ]
    : undefined;

  const resend = new Resend(apiKey);
  const categoryName = data.category;
  const owner = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `Enquiry from ${data.name}${data.product ? ` — ${data.product}` : ""}`,
    html: enquiryEmailHtml(data, Boolean(file)),
    text: enquiryEmailText(data, Boolean(file)),
    attachments,
  });

  if (owner.error) {
    console.error("Enquiry email failed", owner.error);
    return Response.json(
      { ok: false, message: `We could not send your enquiry. Please email ${site.contact.email} directly.` },
      { status: 502 },
    );
  }

  const confirmation = await resend.emails.send({
    from,
    to: [data.email],
    replyTo: to,
    subject: `We have received your enquiry — ${site.name}`,
    html: confirmationEmailHtml(data),
    text: confirmationEmailText(data),
  });

  if (confirmation.error) {
    console.error("Confirmation email failed", confirmation.error);
    return Response.json({
      ok: true,
      message: "Your enquiry reached the workshop. We could not send the confirmation email, but we have your message and will reply.",
    });
  }

  return Response.json({
    ok: true,
    message: `Thank you. We will respond within ${site.contact.responseTime}. A confirmation has been sent to ${data.email}.`,
    category: categoryName,
  });
}
