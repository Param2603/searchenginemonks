import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Careers from "@/components/landing/Careers";

export const metadata = {
  title: "Careers | Search Engine Monks",
  description: "Join our team at Search Engine Monks. View open positions and build the future of digital marketing with us.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <main className="flex-1">
        <Careers />
      </main>
      <Footer />
    </div>
  );
}
