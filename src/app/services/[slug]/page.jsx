import { notFound } from "next/navigation";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceStats from "@/components/services/ServiceStats";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";
import RelatedServices from "@/components/services/RelatedServices";
import { servicesData, getServiceBySlug } from "@/lib/service-data";

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const url = `https://searchenginemonks.com/services/${service.slug}`;

  return {
    title: `${service.title} | Search Engine Monks`,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Search Engine Monks`,
      description: service.metaDescription,
      url,
      siteName: "Search Engine Monks",
      type: "website",
      locale: "en_CA",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Search Engine Monks`,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  // `service.icon` is a component reference (function) and can't cross the
  // server -> client boundary as a prop. Render it here on the server and
  // pass the resulting element down; strip the raw icon out of the object
  // that goes to client components.
  const { icon: Icon, ...clientService } = service;
  const heroIcon = (
    <Icon className={`w-14 h-14 sm:w-16 sm:h-16 ${service.theme.iconText}`} strokeWidth={1.6} />
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Search Engine Monks",
      url: "https://searchenginemonks.com/",
      telephone: "+1-416-555-0199",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "ON",
        addressCountry: "CA",
      },
    },
    areaServed: { "@type": "Country", name: "Canada" },
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <ServiceHero service={clientService} icon={heroIcon} />
        <ServiceFeatures service={clientService} />
        <ServiceProcess service={clientService} />
        <ServiceStats service={clientService} />
        <ServiceFAQ service={clientService} />
        <ServiceCTA service={clientService} />
        <RelatedServices service={service} />
      </main>
      <Footer />
    </div>
  );
}
