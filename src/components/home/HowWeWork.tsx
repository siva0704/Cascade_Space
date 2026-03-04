import { motion } from "framer-motion";
import { Search, Layers, Code2, TrendingUp } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

// Step metadata — only icon + styling. Titles/bodies come from translations.
const stepMeta = [
    { icon: <Search size={24} />, color: "text-cascade-cyan", borderHover: "group-hover:border-cascade-cyan/50", glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]" },
    { icon: <Layers size={24} />, color: "text-cascade-blue", borderHover: "group-hover:border-cascade-blue/50", glow: "group-hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]" },
    { icon: <Code2 size={24} />, color: "text-cascade-indigo", borderHover: "group-hover:border-cascade-indigo/50", glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]" },
    { icon: <TrendingUp size={24} />, color: "text-cascade-violet", borderHover: "group-hover:border-cascade-violet/50", glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]" },
];

export function HowWeWork() {
    const { t, lang } = useLanguage();
    // Get all 4 step titles from the language file
    // hwwSteps array now has all 4 entries: Deep Discovery, Strategic Architecture, Precision Engineering, Launch & Scale
    const stepTitles = translations[lang]?.hwwSteps as string[] | undefined;
    // Step numbers
    const stepNumbers = ["01", "02", "03", "04"];

    return (
        <section className="section-padding bg-cascade-void relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-1/3 h-[400px] bg-cascade-indigo/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <SectionLabel className="justify-center">{t('home', 'hwwLabel')}</SectionLabel>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 mb-6"
                    >
                        {t('home', 'hwwTitle')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-lg text-text-secondary leading-relaxed text-balance"
                    >
                        {t('body', 'howWeWorkBody')}
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {stepMeta.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                        >
                            <GlassCard className={`h-full flex flex-col gap-4 p-8 group border-cascade-border transition-all duration-300 ${step.borderHover} ${step.glow}`}>
                                {/* Step number */}
                                <div className="flex items-center justify-between mb-2">
                                    <div className={`w-12 h-12 rounded-xl bg-cascade-void border border-cascade-border flex items-center justify-center transition-colors duration-300 ${step.color} ${step.borderHover}`}>
                                        {step.icon}
                                    </div>
                                    <span className={`font-mono text-3xl font-black opacity-20 ${step.color}`}>{stepNumbers[idx]}</span>
                                </div>
                                {/* Use translated title from hwwSteps array, or English fallback */}
                                <h3 className="text-lg font-bold text-text-primary">{stepTitles?.[idx] || ["Deep Discovery", "Strategic Architecture", "Precision Engineering", "Launch & Scale"][idx]}</h3>
                                {/* Use translated body from hwwStepBody1–4 keys */}
                                <p className="text-text-secondary text-sm leading-relaxed flex-grow">{t('body', `hwwStepBody${idx + 1}` as any)}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
