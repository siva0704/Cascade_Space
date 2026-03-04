import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Layers, Cpu, Bot, Award, GraduationCap } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { GridBackground } from "@/components/ui/GridBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export function ServicesPreview() {
    const { t, lang } = useLanguage();
    const services = [
        { title: "Website Development", icon: <Globe />, text: "Custom website development tailored to your unique business needs and goals." },
        { title: "Web Design & UI/UX", icon: <Layers />, text: "Visually stunning designs with intuitive user experiences that engage your audience." },
        { title: "Software Development", icon: <Cpu />, text: "Custom software solutions that streamline operations and drive business growth." },
        { title: "AI & Chatbot", icon: <Bot />, text: "Intelligent conversational interfaces to enhance customer experience and engagement." },
        { title: "Loyalty Programs", icon: <Award />, text: "Comprehensive solutions to build and maintain customer loyalty for your business." },
        { title: "Educational Tech", icon: <GraduationCap />, text: "Innovative digital solutions to enhance learning experiences and educational outcomes." },
    ];

    return (
        <section className="section-padding bg-cascade-deep relative border-y border-cascade-border">
            <GridBackground className="opacity-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <SectionLabel>{t('home', 'servicesLabel')}</SectionLabel>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-4"
                        >
                            {t('home', 'servicesTitle')}
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0"
                    >
                        <Link to="/services" className="btn-secondary hidden md:flex items-center gap-2">
                            {t('home', 'servicesBtn')} <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.01, duration: 0.15 }}
                        >
                            <GlassCard className="h-full group hover:-translate-y-2 flex flex-col cursor-pointer">
                                <div className="text-cascade-blue mb-6 p-3 bg-cascade-blue/10 w-max rounded-lg group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-text-primary mb-3">
                                    {/* @ts-ignore */}
                                    {translations[lang]?.servicesList?.[idx] || service.title}
                                </h3>
                                <p className="text-text-secondary mb-6 flex-grow">{service.text}</p>
                                <Link to="/services" className="inline-flex items-center text-cascade-blue font-medium text-sm hover:text-cascade-cyan transition-colors group-hover:translate-x-1 duration-300 w-max">
                                    {t('cta', 'learnMore')} <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 flex justify-center md:hidden"
                >
                    <Link to="/services" className="btn-secondary w-full flex items-center justify-center gap-2">
                        {t('home', 'servicesBtn')} <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
