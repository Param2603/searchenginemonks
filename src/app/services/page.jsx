import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ServicesHero from "@/components/services-page/ServicesHero";
import ServicesGrid from "@/components/services-page/ServicesGrid";
import ServicesOverview from "@/components/services-page/ServicesOverview";
import ServicesCTA from "@/components/services-page/ServicesCTA";

export const metadata = {
  title: "Our Services | Search Engine Monks",
  description:
    "Explore our full range of digital marketing services — website design, SEO, Google Ads, Meta Ads, social media, branding, AI marketing, and content creation.",
  alternates: { canonical: "https://searchenginemonks.com/services" },
  openGraph: {
    title: "Our Services | Search Engine Monks",
    description:
      "Explore our full range of digital marketing services — website design, SEO, Google Ads, Meta Ads, social media, branding, AI marketing, and content creation.",
    url: "https://searchenginemonks.com/services",
    siteName: "Search Engine Monks",
    type: "website",
    locale: "en_CA",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <main className="flex-1">
        <ServicesHero />
        <ServicesOverview />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
