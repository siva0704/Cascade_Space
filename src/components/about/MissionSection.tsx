import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Target, Lightbulb } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";

export function MissionSection() {
    const { t } = useLanguage();
    return (
        <section className="section-padding bg-cascade-deep relative border-y border-cascade-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                    >
                        <SectionLabel>{t('about', 'missionLabel2')}</SectionLabel>
                        <h2 className="mt-4 mb-6">{t('about', 'missionSubtitleH2')}</h2>
                        <p className="text-text-secondary text-lg mb-6 text-balance">
                            {t('about', 'missionBody1')}
                        </p>
                        <p className="text-text-secondary text-lg text-balance">
                            {t('about', 'missionBody2')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15, staggerChildren: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <GlassCard className="flex flex-col gap-4 bg-cascade-void">
                            <div className="w-12 h-12 rounded-lg bg-cascade-blue/10 flex items-center justify-center text-cascade-blue">
                                <Target size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-text-primary">{t('headings', 'valPrecision')}</h3>
                            <p className="text-sm text-text-secondary">{t('about', 'missionCardP1')}</p>
                        </GlassCard>

                        <GlassCard className="flex flex-col gap-4 bg-cascade-void sm:translate-y-8">
                            <div className="w-12 h-12 rounded-lg bg-cascade-cyan/10 flex items-center justify-center text-cascade-cyan">
                                <Lightbulb size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-text-primary">{t('headings', 'valInnovation')}</h3>
                            <p className="text-sm text-text-secondary">{t('about', 'missionCardP2')}</p>
                        </GlassCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
