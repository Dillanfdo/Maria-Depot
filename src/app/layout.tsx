import type { Metadata } from "next";
import { Cinzel, Lora } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { site } from "@/config/site";
import { Header, HeaderFallback } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MotionProvider } from "@/components/ui/MotionProvider";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Church Vestments from Tuticorin`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lora.variable} h-full`} data-scroll-behavior="smooth">
      <body className="min-h-full bg-ivory font-body text-charcoal antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[80] focus:bg-gold-light focus:px-4 focus:py-2 focus:text-charcoal"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Suspense fallback={<HeaderFallback />}>
            <Header />
          </Suspense>
          <main id="main" className="pt-20">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
