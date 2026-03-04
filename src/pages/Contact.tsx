import { motion } from "framer-motion";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { CTABanner } from "@/components/ui/CTABanner";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col min-h-screen bg-cascade-void z-20 relative"
    >
      <ContactHero />

      <section className="section-padding relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">

            <div className="lg:col-span-2 space-y-8">
              <ContactInfo />
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-cascade-deep border-t border-cascade-border relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-overlay opacity-10" />
        <div className="text-center z-10 glass-card p-6">
          <p className="text-text-primary font-semibold text-lg">{t('contact', 'hqTitle')}</p>
          <p className="text-text-muted text-sm mt-1 font-mono uppercase tracking-wider">{t('contact', 'hqLocation')}</p>
        </div>
      </section>

    </motion.div>
  );
};

export default Contact;