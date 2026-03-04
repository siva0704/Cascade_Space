import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { Lightbulb, Star, Shield, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function CoreValues() {
    const { t } = useLanguage();

    const values = [
        {
            title: t('headings', 'valInnovation'),
            desc: t('teamPage', 'valInnovationDesc'),
            icon: <Lightbulb size={24} />,
            color: "text-cascade-cyan",
        },
        {
            title: t('headings', 'valExcellence'),
            desc: t('teamPage', 'valExcellenceDesc'),
            icon: <Star size={24} />,
            color: "text-cascade-blue",
        },
        {
            title: t('headings', 'valIntegrity'),
            desc: t('teamPage', 'valIntegrityDesc'),
            icon: <Shield size={24} />,
            color: "text-cascade-violet",
        },
        {
            title: t('headings', 'valCollaboration'),
            desc: t('teamPage', 'valCollaborationDesc'),
            icon: <Users size={24} />,
            color: "text-cascade-indigo",
        },
    ];

    return (
        <section className="section-padding bg-cascade-void border-t border-cascade-border relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <SectionLabel className="justify-center">{t('teamPage', 'coreValuesLabel')}</SectionLabel>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-4"
                    >
                        {t('teamPage', 'coreValuesTitle')}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.01, duration: 0.15 }}
                        >
                            <GlassCard className="text-center p-8 bg-cascade-deep h-full flex flex-col items-center group">
                                <div className={`w-12 h-12 rounded-lg bg-cascade-surface border border-cascade-border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ${val.color}`}>
                                    {val.icon}
                                </div>
                                <h3 className="text-lg font-bold text-text-primary mb-3">{val.title}</h3>
                                <p className="text-text-secondary text-sm">{val.desc}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
