import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Blog from "@/components/landing/Blog";

export const metadata = {
  title: "Blog | Search Engine Monks",
  description: "Explore the latest insights, strategies, and tips in digital marketing, SEO, and AI from the Search Engine Monks team.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <main className="flex-1">
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
