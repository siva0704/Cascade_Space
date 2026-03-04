import { motion } from "framer-motion";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { GridBackground } from "@/components/ui/GridBackground";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactHero() {
    const { t } = useLanguage();
    return (
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-cascade-void z-10">
            <GridBackground />
            <GlowOrb color="secondary" className="top-1/4 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-40 blur-[150px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center text-[11px] font-mono tracking-[0.3em] uppercase text-cascade-cyan mb-6 px-4 py-1.5 rounded-full border border-cascade-cyan/30 bg-cascade-cyan/10">
                        {t('contact', 'heroLabel')}
                    </div>
                    <h1 className="mb-6">
                        {t('headings', 'contactHeroTitle')}
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto text-balance">
                        {t('contact', 'contactBody')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
