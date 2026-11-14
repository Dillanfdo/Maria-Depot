import { z } from "zod";
import { getCategorySlugs } from "@/data/products";

export const liturgicalColourOptions = [
  "White",
  "Red",
  "Green",
  "Violet",
  "Rose",
  "Gold",
  "Black",
  "Blue",
  "Ivory",
] as const;

const categorySlugs = getCategorySlugs();

export const enquirySchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your full name.").max(120),
    email: z.email("Please enter a valid email address.").max(160),
    phone: z.string().trim().max(40, "Please use a shorter phone number."),
    organisation: z.string().trim().max(160, "Please use a shorter organisation name."),
    country: z.string().trim().min(2, "Please tell us your country.").max(80),
    category: z
      .string()
      .trim()
      .refine((value) => categorySlugs.includes(value), "Please choose a product category."),
    colours: z.array(z.string().trim().min(1)).max(9).optional(),
    quantity: z.string().trim().max(80, "Please shorten the quantity."),
    customisation: z.enum(["yes", "no"], { error: "Please tell us if customisation is needed." }),
    customisationDetails: z.string().trim().max(2000, "Please keep the customisation note under 2000 characters."),
    message: z
      .string()
      .trim()
      .min(10, "Please share a few more details (at least 10 characters).")
      .max(5000, "Please keep the message under 5000 characters."),
    product: z.string().trim().max(160),
    company_website: z.string().max(200).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.customisation === "yes" && data.customisationDetails.trim().length < 3) {
      ctx.addIssue({
        code: "custom",
        path: ["customisationDetails"],
        message: "Please describe the customisation you need.",
      });
    }
  });

export type EnquiryValues = z.infer<typeof enquirySchema>;

export const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;

export const ALLOWED_ATTACHMENT_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "application/pdf",
] as const;

export function validateAttachment(file: File | null) {
  if (!file || file.size === 0) return null;
  if (file.size > MAX_ATTACHMENT_BYTES) {
    return "The reference file must be 5 MB or smaller.";
  }
  if (!ALLOWED_ATTACHMENT_TYPES.includes(file.type as (typeof ALLOWED_ATTACHMENT_TYPES)[number])) {
    return "Please attach a JPG, PNG, WEBP, GIF, or PDF.";
  }
  return null;
}
