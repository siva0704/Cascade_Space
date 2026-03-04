import { motion } from "framer-motion";
import { Search, Layers, Code2, TrendingUp } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const steps = [
    {
        number: "01",
        icon: <Search size={24} />,
        title: "Deep Discovery",
        body: "We begin by mapping your business landscape — your goals, constraints, and the real problems beneath the surface. No assumptions, no shortcuts.",
        color: "text-cascade-cyan",
        borderHover: "group-hover:border-cascade-cyan/50",
        glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
    },
    {
        number: "02",
        icon: <Layers size={24} />,
        title: "Strategic Architecture",
        body: "Our technical team designs a scalable, future-proof solution blueprint. Every technology decision is deliberate, documented, and aligned to your business outcomes.",
        color: "text-cascade-blue",
        borderHover: "group-hover:border-cascade-blue/50",
        glow: "group-hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]"
    },
    {
        number: "03",
        icon: <Code2 size={24} />,
        title: "Precision Engineering",
        body: "We build in sprints with continuous feedback loops. You see progress, not just promises — with working deliverables at every milestone.",
        color: "text-cascade-indigo",
        borderHover: "group-hover:border-cascade-indigo/50",
        glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
    },
    {
        number: "04",
        icon: <TrendingUp size={24} />,
        title: "Launch & Scale",
        body: "Deployment is the beginning, not the end. We provide post-launch support, performance monitoring, and iterative improvements as your business scales.",
        color: "text-cascade-violet",
        borderHover: "group-hover:border-cascade-violet/50",
        glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
    }
];

export function HowWeWork() {
    const { t, lang } = useLanguage();
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
                    {steps.map((step, idx) => (
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
                                    <span className={`font-mono text-3xl font-black opacity-20 ${step.color}`}>{step.number}</span>
                                </div>
                                <h3 className="text-lg font-bold text-text-primary">{translations[lang]?.hwwSteps?.[idx] || step.title}</h3>
                                {/* @ts-ignore - dynamic key */}
                                <p className="text-text-secondary text-sm leading-relaxed flex-grow">{translations[lang]?.body?.[`hwwStepBody${idx + 1}`] || step.body}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
