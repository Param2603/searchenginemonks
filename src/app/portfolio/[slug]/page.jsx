import { notFound } from "next/navigation";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceStats from "@/components/services/ServiceStats";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";
import RelatedPortfolio from "@/components/portfolio/RelatedPortfolio";
import { portfolio, getPortfolioBySlug } from "@/constants/portfolioData";

export async function generateStaticParams() {
  return portfolio.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) return {};

  const url = `https://searchenginemonks.com/portfolio/${project.slug}`;

  return {
    title: `${project.title} | Search Engine Monks`,
    description: project.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | Search Engine Monks`,
      description: project.metaDescription,
      url,
      siteName: "Search Engine Monks",
      type: "website",
      locale: "en_CA",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Search Engine Monks`,
      description: project.metaDescription,
      images: [project.image],
    },
  };
}

export default async function PortfolioPage({ params }) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);

  if (!project) notFound();

  const { icon: Icon, ...clientProject } = project;
  const heroIcon = (
    <Icon className={`w-14 h-14 sm:w-16 sm:h-16 ${project.theme.iconText}`} strokeWidth={1.6} />
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.metaDescription,
    image: project.image,
    author: {
      "@type": "Organization",
      name: "Search Engine Monks",
      url: "https://searchenginemonks.com/"
    },
    publisher: {
      "@type": "Organization",
      name: "Search Engine Monks",
      logo: {
        "@type": "ImageObject",
        url: "https://searchenginemonks.com/logo.svg"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <PortfolioHero service={clientProject} icon={heroIcon} />
        <ServiceFeatures service={clientProject} />
        <ServiceProcess service={clientProject} />
        <ServiceStats service={clientProject} />
        <ServiceFAQ service={clientProject} backLabel="Back to Portfolio" backHref="/#portfolio" />
        <ServiceCTA service={clientProject} />
        <RelatedPortfolio service={clientProject} />
      </main>
      <Footer />
    </div>
  );
}
