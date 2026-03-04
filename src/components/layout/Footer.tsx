import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const companyLinksKeys = [
  { key: "about", to: "/about" },
  { key: "services", to: "/services" },
  { key: "projects", to: "/projects" },
  { key: "team", to: "/team" },
  { key: "contact", to: "/contact" },
];

const serviceLinks = [
  { label: "Website Development", to: "/services" },
  { label: "Web Design & UI/UX", to: "/services" },
  { label: "Software Development", to: "/services" },
  { label: "AI & Chatbot Development", to: "/services" },
  { label: "Educational Technology", to: "/services" },
  { label: "Loyalty Program Solutions", to: "/services" },
];

const socials = [
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/cascade-technologies-solutions-7275b63b2", label: "LinkedIn" },
  { icon: <Instagram size={18} />, href: "https://www.instagram.com/cascade_techno?utm_source=qr&igsh=MW94NzV3ZjdoM21lMQ==", label: "Instagram" },
];

export function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-cascade-deep border-t border-cascade-border relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cascade-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <img src={logo} alt="Cascade Tech Logo" className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105 invert brightness-[2]" />
              <span className="font-display font-bold text-lg text-text-primary">Cascade<span className="text-cascade-blue">Tech Solutions</span></span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {t('footer', 'desc')}
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s, idx) => (
                <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 rounded-lg border border-cascade-border bg-cascade-void flex items-center justify-center text-text-secondary hover:text-cascade-blue hover:border-cascade-blue/40 transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Company */}
          <div>
            <h4 className="text-text-primary font-bold text-sm uppercase tracking-widest mb-5">{t('footer', 'company')}</h4>
            <ul className="space-y-3">
              {companyLinksKeys.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-text-secondary text-sm hover:text-cascade-blue transition-colors duration-200">
                    {t('nav', link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-text-primary font-bold text-sm uppercase tracking-widest mb-5">{t('footer', 'services')}</h4>
            <ul className="space-y-3">
              {[
                { key: 'footerSvcWebDev', to: "/services" },
                { key: 'footerSvcWebDesign', to: "/services" },
                { key: 'footerSvcSoftDev', to: "/services" },
                { key: 'footerSvcAI', to: "/services" },
                { key: 'footerSvcEdTech', to: "/services" },
                { key: 'footerSvcLoyalty', to: "/services" },
              ].map(link => (
                <li key={link.key}>
                  <Link to={link.to} className="text-text-secondary text-sm hover:text-cascade-blue transition-colors duration-200">
                    {/* @ts-ignore */}
                    {t('body', link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-text-primary font-bold text-sm uppercase tracking-widest mb-5">{t('footer', 'contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-cascade-blue flex-shrink-0 mt-0.5" />
                <a href="mailto:cascadetechnologiessolutions@gmail.com"
                  className="text-text-secondary text-sm hover:text-cascade-blue transition-colors break-all">
                  cascadetechnologiessolutions@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-cascade-blue flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm leading-relaxed">
                  Vidya-Nagar Hubbali,<br />Karnataka, India
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cascade-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} {t('footer', 'rights')}
          </p>
          <p className="text-text-muted text-xs font-mono tracking-wider uppercase opacity-50">
            {t('footer', 'tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
}