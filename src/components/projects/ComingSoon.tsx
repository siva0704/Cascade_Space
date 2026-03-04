import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Leaf, LineChart, Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ComingSoon() {
    const { t } = useLanguage();
    const futureProjects = [
        {
            title: t('projectsPage', 'futureProj1Title'),
            description: t('projectsPage', 'futureProj1Desc'),
            icon: <Leaf size={24} />,
            color: "text-cascade-success",
            bgHover: "group-hover:bg-cascade-success group-hover:block hidden",
            status: t('projectsPage', 'futureProj1Status')
        },
        {
            title: t('projectsPage', 'futureProj2Title'),
            description: t('projectsPage', 'futureProj2Desc'),
            icon: <LineChart size={24} />,
            color: "text-cascade-blue",
            bgHover: "group-hover:bg-cascade-blue group-hover:block hidden",
            status: t('projectsPage', 'futureProj2Status')
        },
        {
            title: t('projectsPage', 'futureProj3Title'),
            description: t('projectsPage', 'futureProj3Desc'),
            icon: <Bot size={24} />,
            color: "text-cascade-violet",
            bgHover: "group-hover:bg-cascade-violet group-hover:block hidden",
            status: t('projectsPage', 'futureProj3Status')
        }
    ];

    return (
        <section className="section-padding bg-cascade-void relative overflow-hidden z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cascade-indigo/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <SectionLabel>{t('projectsPage', 'comingSoonLabel')}</SectionLabel>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-4"
                    >
                        {t('headings', 'comingSoon')} <br className="hidden sm:block" /> Cascade Space
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {futureProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.01, duration: 0.15 }}
                        >
                            <GlassCard className="h-full group hover:-translate-y-2 flex flex-col p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-12 h-12 rounded-xl bg-cascade-surface border border-cascade-border flex items-center justify-center transition-colors duration-300 ${project.color} group-hover:text-white group-hover:border-transparent ${project.color.replace('text-', 'group-hover:bg-')}`}>
                                        {project.icon}
                                    </div>
                                    <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded border border-cascade-border text-text-muted bg-cascade-surface">
                                        {project.status}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-3">{project.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
