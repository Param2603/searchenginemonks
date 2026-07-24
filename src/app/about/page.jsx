import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import AboutUs from "@/components/landing/AboutUs";

export const metadata = {
  title: "About Us | Search Engine Monks",
  description: "Learn more about Search Engine Monks, our mission, values, and the team driving digital growth for Canadian businesses.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <main className="flex-1">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
