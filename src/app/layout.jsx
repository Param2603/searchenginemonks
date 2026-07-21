import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ───── SEO Metadata ───── */
export const metadata = {
  title:
    "Search Engine Monks | Digital Marketing, SEO & AI Solutions in Canada",
  description:
    "Search Engine Monks is a full-service digital marketing agency in Canada. We offer website design, SEO, Google Ads, Meta Ads, social media marketing, branding, AI marketing, and content creation to help your business grow.",
  keywords: [
    "digital marketing agency Canada",
    "SEO services Canada",
    "website design Toronto",
    "Google Ads management",
    "Meta Ads Facebook Instagram",
    "social media marketing",
    "branding and graphic design",
    "AI marketing solutions",
    "content creation services",
    "Search Engine Monks",
    "small business marketing",
    "local SEO Canada",
    "e-commerce marketing",
    "lead generation",
    "online visibility",
  ],
  authors: [{ name: "Search Engine Monks", url: "https://searchenginemonks.com/" }],
  openGraph: {
    title: "Search Engine Monks | Digital Marketing & AI Solutions",
    description:
      "Grow your business with smart digital marketing, SEO, branding, and AI-powered solutions. Trusted by 200+ Canadian businesses.",
    url: "https://searchenginemonks.com/",
    siteName: "Search Engine Monks",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Engine Monks | Digital Marketing & AI Solutions",
    description:
      "Grow your business with smart digital marketing, SEO, branding, and AI-powered solutions. Trusted by 200+ Canadian businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Search Engine Monks",
              description:
                "Full-service digital marketing agency offering website design, SEO, Google Ads, Meta Ads, social media marketing, branding, AI marketing solutions, and content creation.",
              url: "https://searchenginemonks.com/",
              telephone: "+1-416-555-0199",
              email: "hello@searchenginemonks.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              areaServed: { "@type": "Country", name: "Canada" },
              priceRange: "$$",
              serviceType: [
                "Website Design & Development",
                "SEO Services",
                "Social Media Marketing",
                "Google Ads",
                "Meta Ads",
                "Branding & Graphic Design",
                "AI Marketing Solutions",
                "Content Creation",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
              },
            }),
          }}
        />
        {/* JSON-LD Schema for WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Search Engine Monks",
              url: "https://searchenginemonks.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://searchenginemonks.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Search Engine Monks",
              url: "https://searchenginemonks.com/",
              logo: "https://searchenginemonks.com/logo.png",
              sameAs: [
                "https://www.facebook.com/searchenginemonks",
                "https://www.instagram.com/searchenginemonks",
                "https://www.linkedin.com/company/searchenginemonks",
                "https://x.com/searchenginemonks",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="bottom-right" richColors />
      </body>
    </html>
  );
}