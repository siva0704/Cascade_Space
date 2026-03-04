import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Globe, Layers, Cpu, Bot, Award, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export function AllServicesGrid() {
    const { t, lang } = useLanguage();
    const services = [
        { title: "Website Development", icon: <Globe size={32} />, text: "Custom website development tailored to your unique business needs and goals." },
        { title: "Web Design & UI/UX", icon: <Layers size={32} />, text: "Visually stunning designs with intuitive user experiences that engage your audience." },
        { title: "Software Development", icon: <Cpu size={32} />, text: "Custom software solutions that streamline operations and drive business growth." },
        { title: "AI & Chatbot", icon: <Bot size={32} />, text: "Intelligent conversational interfaces to enhance customer experience and engagement." },
        { title: "Loyalty Programs", icon: <Award size={32} />, text: "Comprehensive solutions to build and maintain customer loyalty for your business." },
        { title: "Educational Tech", icon: <GraduationCap size={32} />, text: "Innovative digital solutions to enhance learning experiences and educational outcomes." },
    ];

    return (
        <section className="section-padding bg-cascade-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.01, duration: 0.15 }}
                        >
                            <GlassCard className="h-full flex flex-col p-8 bg-cascade-void border-cascade-border hover:border-cascade-cyan/50">
                                <div className="text-cascade-cyan mb-6">{service.icon}</div>
                                {/* @ts-ignore */}
                                <h3 className="text-xl font-bold text-text-primary mb-4">{translations[lang]?.servicesList?.[idx] || service.title}</h3>
                                {/* @ts-ignore */}
                                <p className="text-text-secondary leading-relaxed">{translations[lang]?.servicesListDescs?.[idx] || service.text}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
