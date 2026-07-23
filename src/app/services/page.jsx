import Navbar from "@/components/landing/Navbar";
import Services from "@/components/landing/Services";
import Footer from "@/components/landing/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-24">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
