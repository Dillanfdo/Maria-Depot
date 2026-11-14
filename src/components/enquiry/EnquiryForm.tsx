"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from "@/data/products";
import { countries } from "@/lib/countries";
import {
  enquirySchema,
  liturgicalColourOptions,
  validateAttachment,
  type EnquiryValues,
} from "@/lib/enquiry-schema";
import { site } from "@/config/site";

const fieldClass =
  "mt-2 w-full border border-charcoal/15 bg-white px-4 py-3 text-charcoal outline-none focus:border-gold-dark";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm text-[#8E1B2C]">
      {message}
    </p>
  );
}

export function EnquiryForm() {
  const params = useSearchParams();
  const categoryParam = params.get("category") ?? "";
  const productParam = params.get("product") ?? "";
  const knownCategory = categories.some((category) => category.slug === categoryParam) ? categoryParam : "";

  const defaults = useMemo<EnquiryValues>(
    () => ({
      name: "",
      email: "",
      phone: "",
      organisation: "",
      country: "",
      category: knownCategory,
      colours: [],
      quantity: "",
      customisation: "no",
      customisationDetails: "",
      message: productParam ? `I would like to enquire about the ${productParam}.` : "",
      product: productParam,
      company_website: "",
    }),
    [knownCategory, productParam],
  );

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: defaults,
  });

  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    reset(defaults);
  }, [defaults, reset]);

  const onSubmit = handleSubmit(async (values) => {
    const attachmentError = validateAttachment(file);
    if (attachmentError) {
      setFileError(attachmentError);
      return;
    }
    setFileError(null);
    setStatus("idle");

    const body = new FormData();
    (Object.keys(values) as Array<keyof EnquiryValues>).forEach((key) => {
      const value = values[key];
      if (Array.isArray(value)) {
        value.forEach((entry) => body.append(key, entry));
      } else if (value != null) {
        body.append(key, value);
      }
    });
    if (file) body.append("reference", file);

    try {
      const response = await fetch("/api/enquiry", { method: "POST", body });
      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
        fieldErrors?: Record<string, string>;
      };
      if (!response.ok || !payload.ok) {
        if (payload.fieldErrors) {
          Object.entries(payload.fieldErrors).forEach(([key, message]) => {
            setError(key as keyof EnquiryValues, { message });
          });
        }
        setStatus("error");
        setStatusMessage(payload.message || "We could not send your enquiry. Please try again.");
        return;
      }
      setStatus("success");
      setStatusMessage(payload.message || `Thank you. We will respond within ${site.contact.responseTime}.`);
      setFile(null);
      reset({ ...defaults, message: "", product: "", category: "" });
    } catch {
      setStatus("error");
      setStatusMessage("We could not reach the workshop just now. Please try again, or write to us by email.");
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate className="relative border border-gold/40 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="font-display text-3xl text-burgundy">Tell us what the church needs</h2>
      <p className="mt-3 text-sm leading-relaxed text-stone">
        {site.ui.pricesNote} {site.ui.shippingPromise}
      </p>

      <div className="pointer-events-none absolute top-0 left-0 h-px w-px overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" type="text" tabIndex={-1} autoComplete="off" {...register("company_website")} />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm text-charcoal">
            Full name <span className="text-gold-ink">*</span>
          </label>
          <input id="name" autoComplete="name" className={fieldClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
          <FieldError id="name-error" message={errors.name?.message} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-charcoal">
            Email <span className="text-gold-ink">*</span>
          </label>
          <input id="email" type="email" autoComplete="email" className={fieldClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm text-charcoal">
            Phone / WhatsApp
          </label>
          <input id="phone" type="tel" autoComplete="tel" className={fieldClass} {...register("phone")} />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>
        <div>
          <label htmlFor="organisation" className="text-sm text-charcoal">
            Church / organisation
          </label>
          <input id="organisation" className={fieldClass} {...register("organisation")} />
          <FieldError id="organisation-error" message={errors.organisation?.message} />
        </div>
        <div>
          <label htmlFor="country" className="text-sm text-charcoal">
            Country <span className="text-gold-ink">*</span>
          </label>
          <select id="country" className={fieldClass} aria-invalid={!!errors.country} aria-describedby={errors.country ? "country-error" : undefined} {...register("country")}>
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <FieldError id="country-error" message={errors.country?.message} />
        </div>
        <div>
          <label htmlFor="category" className="text-sm text-charcoal">
            Product category <span className="text-gold-ink">*</span>
          </label>
          <select id="category" className={fieldClass} aria-invalid={!!errors.category} aria-describedby={errors.category ? "category-error" : undefined} {...register("category")}>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
          <FieldError id="category-error" message={errors.category?.message} />
        </div>
      </div>

      {productParam ? (
        <p className="mt-4 text-sm text-stone">
          This enquiry is about <span className="text-charcoal">{productParam}</span>.{" "}
          <Link href="/collections" className="underline decoration-gold underline-offset-4">
            Browse the collections
          </Link>
        </p>
      ) : null}
      <input type="hidden" {...register("product")} />

      <fieldset className="mt-6">
        <legend className="text-sm text-charcoal">Liturgical colour(s)</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {liturgicalColourOptions.map((colour) => (
            <label key={colour} className="flex items-center gap-2 border border-line px-3 py-2 text-sm">
              <input type="checkbox" value={colour} {...register("colours")} />
              {colour}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="quantity" className="text-sm text-charcoal">
          Approximate quantity
        </label>
        <input id="quantity" className={fieldClass} placeholder="For example, 1 chasuble or a set of 12 albs" {...register("quantity")} />
        <FieldError id="quantity-error" message={errors.quantity?.message} />
      </div>

      <fieldset className="group mt-5">
        <legend className="text-sm text-charcoal">Customisation needed?</legend>
        <div className="mt-3 flex gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" value="no" {...register("customisation")} />
            No
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" value="yes" {...register("customisation")} />
            Yes
          </label>
        </div>
        <FieldError id="customisation-error" message={errors.customisation?.message} />
        <div className="mt-3 hidden group-has-[input[value=yes]:checked]:block">
          <label htmlFor="customisationDetails" className="text-sm text-charcoal">
            Describe the customisation
          </label>
          <textarea id="customisationDetails" rows={4} className={fieldClass} {...register("customisationDetails")} />
          <FieldError id="customisationDetails-error" message={errors.customisationDetails?.message} />
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm text-charcoal">
          Message <span className="text-gold-ink">*</span>
        </label>
        <textarea id="message" rows={6} className={fieldClass} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      <div className="mt-5">
        <label htmlFor="reference" className="text-sm text-charcoal">
          Design reference <span className="text-stone">(optional, images or PDF, max 5 MB)</span>
        </label>
        <input
          id="reference"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,application/pdf"
          className="mt-2 block w-full text-sm text-stone file:mr-4 file:border-0 file:bg-ivory-deep file:px-4 file:py-2 file:font-display file:text-xs file:tracking-widest file:text-burgundy file:uppercase"
          onChange={(event) => {
            const next = event.target.files?.[0] ?? null;
            setFile(next);
            setFileError(validateAttachment(next));
          }}
        />
        {file ? <p className="mt-2 text-sm text-stone">Selected: {file.name}</p> : null}
        {fileError ? <p className="mt-1 text-sm text-[#8E1B2C]">{fileError}</p> : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex bg-gradient-to-b from-[#f3e4ad] via-gold-light to-gold px-8 py-3 font-display text-xs tracking-[0.22em] text-charcoal uppercase disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send enquiry"}
      </button>

      <div className="mt-4" aria-live="polite">
        {status === "success" ? (
          <p className="border border-gold/50 bg-ivory px-4 py-3 text-sm text-charcoal" role="status">
            {statusMessage}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="border border-[#8E1B2C]/40 bg-[#F8EDEA] px-4 py-3 text-sm text-[#6d1522]" role="alert">
            {statusMessage} You can also write to{" "}
            <a className="underline" href={site.contact.emailHref}>
              {site.contact.email}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
