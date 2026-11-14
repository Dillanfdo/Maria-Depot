import { site } from "@/config/site";
import type { EnquiryValues } from "@/lib/enquiry-schema";
import { escapeHtml } from "@/lib/utils";
import { getCategory } from "@/data/products";

function row(label: string, value: string) {
  if (!value.trim()) return "";
  return `<tr>
    <td style="padding:10px 14px;border-bottom:1px solid #E7DCC4;color:#6B5E52;font-size:13px;width:34%;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:10px 14px;border-bottom:1px solid #E7DCC4;color:#1C1917;font-size:15px;line-height:1.5;">${escapeHtml(value)}</td>
  </tr>`;
}

export function enquiryEmailHtml(data: EnquiryValues, hasAttachment: boolean) {
  const category = getCategory(data.category)?.name ?? data.category;
  const colours = data.colours?.length ? data.colours.join(", ") : "Not specified";
  const custom =
    data.customisation === "yes" ? data.customisationDetails || "Yes" : "No";

  return `<!doctype html>
<html>
  <body style="margin:0;background:#FAF6EE;font-family:Georgia,'Times New Roman',serif;color:#1C1917;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAF6EE;padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border:1px solid #E6CF8B;">
            <tr>
              <td style="background:#3B0A2A;padding:28px 32px;color:#E6CF8B;">
                <p style="margin:0 0 8px;letter-spacing:0.22em;text-transform:uppercase;font-size:11px;">New enquiry</p>
                <h1 style="margin:0;font-weight:500;font-size:26px;color:#FAF6EE;">${escapeHtml(site.name)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 18px 18px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", data.name)}
                  ${row("Email", data.email)}
                  ${row("Phone / WhatsApp", data.phone)}
                  ${row("Church / organisation", data.organisation)}
                  ${row("Country", data.country)}
                  ${row("Category", category)}
                  ${row("Piece", data.product)}
                  ${row("Liturgical colours", colours)}
                  ${row("Quantity", data.quantity)}
                  ${row("Customisation", custom)}
                </table>
                <div style="padding:18px 14px 6px;">
                  <p style="margin:0 0 8px;color:#6B5E52;font-size:13px;">Message</p>
                  <p style="margin:0;white-space:pre-wrap;line-height:1.6;font-size:16px;">${escapeHtml(data.message)}</p>
                </div>
                <p style="padding:8px 14px 18px;color:#6B5E52;font-size:13px;">
                  ${hasAttachment ? "A design reference is attached to this email." : "No design reference was attached."}
                </p>
              </td>
            </tr>
            <tr>
              <td style="background:#FAF6EE;padding:16px 32px;color:#6B5E52;font-size:12px;border-top:1px solid #E6CF8B;">
                Reply to this message to write directly to ${escapeHtml(data.name)}.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function enquiryEmailText(data: EnquiryValues, hasAttachment: boolean) {
  const category = getCategory(data.category)?.name ?? data.category;
  return [
    `New enquiry for ${site.name}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone / WhatsApp: ${data.phone || "—"}`,
    `Church / organisation: ${data.organisation || "—"}`,
    `Country: ${data.country}`,
    `Category: ${category}`,
    `Piece: ${data.product || "—"}`,
    `Colours: ${data.colours?.join(", ") || "—"}`,
    `Quantity: ${data.quantity || "—"}`,
    `Customisation: ${data.customisation === "yes" ? data.customisationDetails : "No"}`,
    "",
    data.message,
    "",
    hasAttachment ? "A design reference is attached." : "No file was attached.",
  ].join("\n");
}

export function confirmationEmailHtml(data: EnquiryValues) {
  const category = getCategory(data.category)?.name ?? data.category;
  return `<!doctype html>
<html>
  <body style="margin:0;background:#FAF6EE;font-family:Georgia,'Times New Roman',serif;color:#1C1917;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAF6EE;padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border:1px solid #E6CF8B;">
            <tr>
              <td style="background:#3B0A2A;padding:28px 32px;">
                <p style="margin:0 0 8px;letter-spacing:0.22em;text-transform:uppercase;font-size:11px;color:#E6CF8B;">${escapeHtml(site.name)}</p>
                <h1 style="margin:0;font-weight:500;font-size:26px;color:#FAF6EE;">Thank you, ${escapeHtml(data.name)}.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;line-height:1.7;font-size:16px;">
                <p style="margin:0 0 16px;">We have received your enquiry${data.product ? ` about the ${escapeHtml(data.product)}` : ""} in our ${escapeHtml(category)} collection.</p>
                <p style="margin:0 0 16px;">We will write back within ${escapeHtml(site.contact.responseTime)}. The quotation will include shipping. There is nothing further to add for the journey of the parcel.</p>
                <p style="margin:0 0 16px;">If you need to add a photograph or a measurement, reply to this email and it will reach the workshop.</p>
                <p style="margin:0;">With kind regards,<br/>${escapeHtml(site.name)}<br/>${escapeHtml(site.contact.locality)}</p>
              </td>
            </tr>
            <tr>
              <td style="background:#FAF6EE;padding:16px 32px;color:#6B5E52;font-size:13px;border-top:1px solid #E6CF8B;">
                ${escapeHtml(site.contact.email)} · ${escapeHtml(site.contact.phoneDisplay)}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function confirmationEmailText(data: EnquiryValues) {
  const category = getCategory(data.category)?.name ?? data.category;
  return [
    `Thank you, ${data.name}.`,
    "",
    `We have received your enquiry${data.product ? ` about the ${data.product}` : ""} in our ${category} collection.`,
    `We will respond within ${site.contact.responseTime}.`,
    "Shipping charges are included in the quotation.",
    "",
    `${site.name}`,
    site.contact.email,
    site.contact.phoneDisplay,
  ].join("\n");
}
