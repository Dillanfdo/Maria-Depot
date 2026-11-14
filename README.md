# DD Vestments

A portfolio and enquiry site for DD Vestments, a family workshop that makes church vestments in Tuticorin (Thoothukudi), Tamil Nadu, and ships them worldwide. Prices are not shown. Visitors send an enquiry and receive a quotation that includes shipping.

The telephone number and social links are still placeholders. The photographs are free images of real vestments and church textiles.

## Requirements

- Node.js 20.19 or newer (Next.js 16 asks for this; 20.9 may warn)
- npm

## Setup

```bash
npm install
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Edit `.env.local`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, with no trailing slash. Use `http://localhost:3000` locally and your production URL on Vercel. |
| `RESEND_API_KEY` | API key from [Resend](https://resend.com). |
| `ENQUIRY_FROM_EMAIL` | Sender. Use `Workshop Name <hello@yourdomain.com>` after the domain is verified in Resend. |
| `ENQUIRY_TO_EMAIL` | The workshop inbox that receives enquiries. |

Until these values are set, the site runs and the form returns a clear message instead of sending mail.

## Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Replace the placeholder content

All contact details, navigation, story, testimonials, shipping notes, and image references live in [`src/config/site.ts`](src/config/site.ts).

The vestment catalogue lives in [`src/data/products.ts`](src/data/products.ts).

Change the founding year, phone, email, street, and social URLs in `site.ts`. The header, footer, enquiry emails, map, and JSON-LD all read from that file.

### Images

The photographs are free images of vestments and church textiles from Wikimedia Commons. Each one still has a `file` name so it can be swapped for a workshop photograph.

1. Add files to `public/images/` using the `file` name on each image (for example `hero.jpg`, `gothic-chasuble.jpg`).
2. In `src/config/site.ts`, set `useLocalImages` to `true`.

That single flag switches the whole site, including product photographs defined in `products.ts`.

## Email

The form posts to `POST /api/enquiry`.

- Shared validation is in `src/lib/enquiry-schema.ts` (Zod), used by the form and the route.
- A honeypot field (`company_website`) is ignored when it is filled.
- The same network address is limited to 5 submissions an hour. The count is kept in memory and resets when the server process restarts.
- The workshop receives an HTML email with the enquiry, reply-to set to the customer, and the reference file attached when one was sent.
- The customer receives a confirmation that a reply will come within 24–48 hours.
- Attachments may be JPG, PNG, WEBP, GIF, or PDF, up to 5 MB. Vercel’s request body limit on some plans is 4.5 MB, so a file near 5 MB can be rejected by the platform before it reaches the route.

For a first test, Resend’s onboarding sender can deliver only to the email address on your Resend account. For real customers, verify your domain and set `ENQUIRY_FROM_EMAIL` to an address on that domain.

## Deploy on Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new). Framework preset: Next.js. Root directory: the repository root.
3. Add the four environment variables from `.env.example`. Set `NEXT_PUBLIC_SITE_URL` to the production URL, such as `https://yourdomain.com`.
4. Deploy. Vercel runs `npm run build`.
5. In Resend, add the domain and the DNS records they show you, then send a test enquiry from `/contact`.

No database is required.

## Pages

- `/` Home
- `/about`
- `/collections` and `/collections/[slug]`
- `/export`
- `/gallery`
- `/contact`
- `/privacy-policy`
- A branded 404 page

## Theme

Colours and fonts are Tailwind CSS v4 tokens in [`src/app/globals.css`](src/app/globals.css) under `@theme`. Headings use Cinzel. Body text uses Lora. Motion uses Framer Motion and follows `prefers-reduced-motion`.
