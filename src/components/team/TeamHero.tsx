import { motion } from "framer-motion";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { GridBackground } from "@/components/ui/GridBackground";
import { useLanguage } from "@/contexts/LanguageContext";

export function TeamHero() {
    const { t } = useLanguage();
    return (
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-cascade-void z-10">
            <GridBackground />
            <GlowOrb color="accent" className="top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center text-[11px] font-mono tracking-[0.3em] uppercase text-cascade-violet mb-6 px-4 py-1.5 rounded-full border border-cascade-violet/30 bg-cascade-violet/10">
                        {t('teamPage', 'heroLabel')}
                    </div>
                    <h1 className="mb-6 text-balance">
                        {t('headings', 'teamHeroTitle')}
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto text-balance">
                        {t('teamPage', 'heroDesc')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
