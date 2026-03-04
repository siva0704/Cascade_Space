import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PhoneCall, SearchCode, PenTool, Rocket, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const steps = [
    {
        title: "Discovery Call",
        duration: "Week 1",
        body: "A focused conversation to understand your goals, constraints, and success metrics.",
        icon: <PhoneCall size={20} />,
        color: "text-cascade-cyan",
        activeBorder: "group-hover:border-cascade-cyan group-hover:text-cascade-cyan",
    },
    {
        title: "Strategy & Scoping",
        duration: "Week 1–2",
        body: "We produce a detailed technical scope, timeline, and investment breakdown. No surprises.",
        icon: <SearchCode size={20} />,
        color: "text-cascade-blue",
        activeBorder: "group-hover:border-cascade-blue group-hover:text-cascade-blue",
    },
    {
        title: "Design Sprint",
        duration: "Week 2–3",
        body: "High-fidelity wireframes and design prototypes reviewed and approved before a single line of code is written.",
        icon: <PenTool size={20} />,
        color: "text-cascade-indigo",
        activeBorder: "group-hover:border-cascade-indigo group-hover:text-cascade-indigo",
    },
    {
        title: "Build & Iterate",
        duration: "Week 3–N",
        body: "Agile sprints with weekly demos. You have full visibility into progress at all times.",
        icon: <Rocket size={20} />,
        color: "text-cascade-violet",
        activeBorder: "group-hover:border-cascade-violet group-hover:text-cascade-violet",
    },
    {
        title: "Launch & Support",
        duration: "Ongoing",
        body: "Deployment, monitoring, performance optimization, and continued partnership for growth.",
        icon: <Headphones size={20} />,
        color: "text-cascade-success",
        activeBorder: "group-hover:border-cascade-success group-hover:text-cascade-success",
    }
];

export function EngagementTimeline() {
    const { t, lang } = useLanguage();
    return (
        <section className="section-padding bg-cascade-void relative border-y border-cascade-border overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <SectionLabel className="justify-center">{t('services', 'engagementLabel')}</SectionLabel>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-4 mb-6"
                    >
                        {t('services', 'engagementTitle')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.03 }}
                        className="text-lg text-text-secondary leading-relaxed text-balance"
                    >
                        {t('services', 'engagementBody')}
                    </motion.p>
                </div>

                {/* Timeline — vertical on mobile, horizontal on desktop */}
                <div className="relative">
                    {/* Desktop connector line */}
                    <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-cascade-border z-0" />
                    <div className="hidden lg:block absolute top-8 left-[10%] h-px bg-gradient-to-r from-cascade-cyan via-cascade-blue via-cascade-indigo via-cascade-violet to-cascade-success w-[80%] z-0 opacity-40" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.01, duration: 0.15 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Icon circle */}
                                <div className={`w-16 h-16 rounded-full bg-cascade-void border-2 border-cascade-border flex items-center justify-center text-text-muted ${step.activeBorder} transition-all duration-300 relative z-10 mb-5 shadow-[0_0_0_4px_var(--cascade-void)]`}>
                                    {step.icon}
                                </div>

                                {/* Duration badge */}
                                <span className={`text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded border border-cascade-border text-text-muted bg-cascade-surface mb-3`}>
                                    {step.duration}
                                </span>

                                {/* @ts-ignore */}
                                <h3 className="font-bold text-text-primary text-base mb-2 leading-tight">{translations[lang]?.timelineSteps?.[idx] || step.title}</h3>
                                {/* @ts-ignore */}
                                <p className="text-sm text-text-secondary leading-relaxed max-w-[200px]">{translations[lang]?.timelineStepBodies?.[idx] || step.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
