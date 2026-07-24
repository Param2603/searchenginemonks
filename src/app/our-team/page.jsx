import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import OurTeam from "@/components/landing/OurTeam";

export const metadata = {
  title: "Our Team | Search Engine Monks",
  description: "Meet the experts behind Search Engine Monks. Our team of digital strategists, creatives, and technologists.",
};

export default function OurTeamPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <main className="flex-1">
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
}
