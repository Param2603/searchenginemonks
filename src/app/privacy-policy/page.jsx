import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PrivacyPolicy from "@/components/landing/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | Search Engine Monks",
  description: "Read our privacy policy to understand how Search Engine Monks collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <main className="flex-1">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}
