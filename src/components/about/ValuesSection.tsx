import { motion } from "framer-motion";
import { Zap, Maximize, Users } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { GridBackground } from "@/components/ui/GridBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export function ValuesSection() {
    const { t, lang } = useLanguage();
    const values = [
        {
            // @ts-ignore
            title: translations[lang]?.valuesSectionValues?.[0] || "Innovation",
            description: t('about', 'valDesc0'),
            icon: <Zap size={32} className="text-cascade-cyan" />
        },
        {
            // @ts-ignore
            title: translations[lang]?.valuesSectionValues?.[1] || "Scalability",
            description: t('about', 'valDesc1'),
            icon: <Maximize size={32} className="text-cascade-blue" />
        },
        {
            // @ts-ignore
            title: translations[lang]?.valuesSectionValues?.[2] || "Empowerment",
            description: t('about', 'valDesc2'),
            icon: <Users size={32} className="text-cascade-violet" />
        }
    ];

    return (
        <section className="section-padding bg-cascade-void relative overflow-hidden z-10">
            <GridBackground className="opacity-5" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <SectionLabel className="justify-center">{t('about', 'coreValuesLabel')}</SectionLabel>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-4 mb-6"
                    >
                        {t('headings', 'valuesSectionTitle')}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.01, duration: 0.15 }}
                        >
                            <GlassCard className="text-center flex flex-col items-center p-8 h-full bg-cascade-deep">
                                <div className="mb-6 p-4 rounded-full bg-cascade-void border border-cascade-border shadow-[0_0_20px_rgba(10,22,40,0.5)]">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-4">{val.title}</h3>
                                <p className="text-text-secondary">{val.description}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
