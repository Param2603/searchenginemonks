import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TermsOfService from "@/components/landing/TermsOfService";

export const metadata = {
  title: "Terms of Service | Search Engine Monks",
  description: "Read our terms of service and conditions for using the Search Engine Monks website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <TermsOfService />
      </main>
      <Footer />
    </>
  );
}
