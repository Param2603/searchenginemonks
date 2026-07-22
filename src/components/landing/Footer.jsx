import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const footerLinks = {
  services: [
    "Website Design & Development",
    "SEO Services",
    "Social Media Marketing",
    "Google Ads",
    "Meta Ads",
    "Branding & Graphic Design",
    "AI Marketing Solutions",
    "Content Creation",
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#portfolio" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQ", href: "#faq" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
];

export default function Footer() {
  return (
    <footer className="bg-[#064e3b] text-emerald-100/80" aria-label="Site footer">

      {/* CTA Banner */}
      <div className="bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Ready to Grow Your Business?
            </h3>
            <p className="text-slate-300 text-base">
              Get a free consultation and custom strategy for your brand.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-8 py-4 bg-[#059669] text-white font-extrabold rounded-xl hover:bg-[#047857] transition-all duration-300 shadow-xl shadow-[#059669]/20 hover:shadow-[#059669]/40 hover:-translate-y-0.5 text-base"
          >
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-3 mb-6 group" aria-label="Search Engine Monks">
              <img src="/logo-white-text.png" alt="Search Engine Monks Logo" className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
            </a>
            <p className="text-sm text-emerald-100/70 leading-relaxed mb-6">
              A full-service digital marketing agency helping Canadian businesses grow through innovative websites, SEO, branding, and AI-powered marketing solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm hover:text-white transition-colors duration-200 cursor-pointer">
                <Phone className="w-4 h-4 text-[#6ee7b7]" />
                <span>+1 (416) 555-0199</span>
              </div>
              <div className="flex items-center gap-3 text-sm hover:text-white transition-colors duration-200 cursor-pointer">
                <Mail className="w-4 h-4 text-[#6ee7b7]" />
                <span>hello@searchenginemonks.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm hover:text-white transition-colors duration-200 cursor-pointer">
                <MapPin className="w-4 h-4 text-[#6ee7b7]" />
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-extrabold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-emerald-100/70 hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-extrabold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-emerald-100/70 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Socials */}
          <div>
            <h4 className="text-white font-extrabold mb-5 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-emerald-100/70 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-7">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-[#047857] hover:bg-[#0A192F] text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#047857]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-emerald-100/60">
          <p>&copy; {new Date().getFullYear()} Search Engine Monks. All rights reserved.</p>
          <a
            href="#hero"
            className="p-2.5 bg-[#047857] hover:bg-[#0A192F] text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
