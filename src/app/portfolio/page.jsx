import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Portfolio from "@/components/landing/Portfolio";

export const metadata = {
  title: "Case Studies & Portfolio | Search Engine Monks",
  description: "Explore our latest projects and see how we've helped businesses across Canada achieve remarkable digital growth.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
