import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export function TechBridge() {
    const { t, lang } = useLanguage();
    const benefits = [
        "Battle-tested architectures applied to your product",
        "Real-world performance optimization from day one",
        "Pre-built modules for faster time-to-market",
        "Enterprise-grade security standards inherited"
    ];

    return (
        <section className="section-padding bg-cascade-void relative overflow-hidden z-10">
            <GlowOrb color="accent" className="top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                    >
                        <SectionLabel>{t('home', 'techBridgeLabel')}</SectionLabel>
                        <h2 className="mt-4 mb-6">{t('headings', 'techTitle')}</h2>
                        <p className="text-text-secondary text-lg mb-8 text-balance">
                            {t('home', 'techBridgeBody')}
                        </p>

                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 size={24} className="text-cascade-success flex-shrink-0 mt-0.5" />
                                    {/* @ts-ignore */}
                                    <span className="text-text-primary">{translations[lang]?.body?.[`techBridgeBen${idx + 1}`] || benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/projects" className="btn-primary inline-flex items-center gap-2 group">
                            {t('body', 'viewPortfolio')}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Right Column - Mini Project Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-cascade-blue/10 to-cascade-cyan/5 rounded-[2rem] transform rotate-3 scale-105 -z-10" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            {/* Project Card 1 */}
                            <GlassCard className="sm:-translate-y-4 hover:-translate-y-6 flex flex-col h-full bg-cascade-deep">
                                <div className="w-12 h-12 rounded-lg bg-cascade-blue/20 flex items-center justify-center text-cascade-blue font-bold text-xl mb-6">
                                    S
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-2">Startopia</h3>
                                <p className="text-text-secondary text-sm mb-6 flex-grow">
                                    A comprehensive ecosystem designed to empower founders with resources and scalable platforms.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    <span className="px-2 py-1 text-xs font-mono text-cascade-cyan bg-cascade-cyan/10 rounded-md">React</span>
                                    <span className="px-2 py-1 text-xs font-mono text-cascade-indigo bg-cascade-indigo/10 rounded-md">Node.js</span>
                                </div>
                            </GlassCard>

                            {/* Project Card 2 */}
                            <GlassCard className="sm:translate-y-8 hover:translate-y-6 flex flex-col h-full bg-cascade-deep">
                                <div className="w-12 h-12 rounded-lg bg-cascade-cyan/20 flex items-center justify-center text-cascade-cyan font-bold text-xl mb-6">
                                    TyB
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-2">TextYourBoss.ai</h3>
                                <p className="text-text-secondary text-sm mb-6 flex-grow">
                                    An AI-powered communication tool simplifying professional messaging and workflow automation.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    <span className="px-2 py-1 text-xs font-mono text-cascade-blue bg-cascade-blue/10 rounded-md">OpenAI</span>
                                    <span className="px-2 py-1 text-xs font-mono text-cascade-violet bg-cascade-violet/10 rounded-md">Python</span>
                                </div>
                            </GlassCard>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
