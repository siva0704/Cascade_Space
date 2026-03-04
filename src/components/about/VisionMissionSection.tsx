import { motion } from "framer-motion";
import { Eye, Target, Zap, ShieldCheck, Globe, Cpu } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { useLanguage } from "@/contexts/LanguageContext";

export function VisionMissionSection() {
    const { t } = useLanguage();
    return (
        <section className="section-padding bg-cascade-deep relative border-y border-cascade-border overflow-hidden">
            {/* Background gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-cascade-blue/5 via-transparent to-cascade-cyan/5 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cascade-blue/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <SectionLabel className="justify-center">{t('about', 'visionMissionLabel')}</SectionLabel>
                    <h2 className="mt-4">
                        {t('headings', 'builtOnPrinciple')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <GlassCard className="h-full p-10 bg-cascade-void group hover:border-cascade-cyan/40 transition-colors duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-cascade-cyan/10 border border-cascade-cyan/30 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                                    <Eye size={26} className="text-cascade-cyan" />
                                </div>
                                <div>
                                    <p className="text-cascade-cyan text-xs font-mono tracking-widest uppercase mb-0.5">{t('about', 'visionLabel')}</p>
                                    <h3 className="text-2xl font-bold text-text-primary">{t('about', 'visionTitle')}</h3>
                                </div>
                            </div>
                            <p className="text-text-secondary text-lg leading-relaxed mb-6">
                                {t('about', 'visionBody')}
                            </p>
                            <ul className="space-y-3">
                                {[t('about', 'visionBullet1'), t('about', 'visionBullet2'), t('about', 'visionBullet3')].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 w-5 h-5 rounded-full bg-cascade-cyan/15 border border-cascade-cyan/30 flex items-center justify-center flex-shrink-0">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cascade-cyan" />
                                        </span>
                                        <span className="text-text-secondary text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <GlassCard className="h-full p-10 bg-cascade-void group hover:border-cascade-blue/40 transition-colors duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-cascade-blue/10 border border-cascade-blue/30 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.15)]">
                                    <Target size={26} className="text-cascade-blue" />
                                </div>
                                <div>
                                    <p className="text-cascade-blue text-xs font-mono tracking-widest uppercase mb-0.5">{t('about', 'missionLabel')}</p>
                                    <h3 className="text-2xl font-bold text-text-primary">{t('about', 'missionTitle')}</h3>
                                </div>
                            </div>
                            <p className="text-text-secondary text-lg leading-relaxed mb-6">
                                {t('about', 'missionBody')}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {[
                                    { icon: <Zap size={16} />, label: t('headings', 'missionPillarSpeed') },
                                    { icon: <ShieldCheck size={16} />, label: t('headings', 'missionPillarReliability') },
                                    { icon: <Globe size={16} />, label: t('headings', 'missionPillarReach') },
                                    { icon: <Cpu size={16} />, label: t('headings', 'missionPillarIntelligence') },
                                ].map(({ icon, label }) => (
                                    <div key={label} className="flex items-center gap-2 text-text-secondary text-sm">
                                        <span className="text-cascade-blue">{icon}</span>
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
