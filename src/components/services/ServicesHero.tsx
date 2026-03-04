import { motion } from "framer-motion";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { GridBackground } from "@/components/ui/GridBackground";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesHero() {
    const { t } = useLanguage();
    const scrollToServices = () => {
        document.getElementById('service-categories')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-cascade-void z-10 min-h-[80vh] flex flex-col justify-center">
            <GridBackground />
            <GlowOrb color="secondary" className="top-0 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center flex-grow flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center text-[11px] font-mono tracking-[0.3em] uppercase text-cascade-blue mb-6 px-4 py-1.5 rounded-full border border-cascade-blue/30 bg-cascade-blue/10">
                        {t('services', 'heroLabel')}
                    </div>
                    <h1 className="mb-6">
                        {t('headings', 'servicesHeroH1')}
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto text-balance mb-12">
                        {t('services', 'heroDesc')}
                    </p>
                    <motion.button
                        onClick={scrollToServices}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 rounded-full border border-cascade-border bg-cascade-surface flex items-center justify-center text-cascade-blue mx-auto hover:border-cascade-blue/50 transition-colors shadow-[0_0_20px_rgba(14,165,233,0.1)]"
                    >
                        <ArrowDown className="animate-bounce" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
