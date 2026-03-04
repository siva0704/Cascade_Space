import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Globe, Lightbulb, Bot, PenTool } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export function FeatureCards() {
    const { lang } = useLanguage();
    const features = [
        {
            title: "Digital Transformation",
            description: "Strengthen your organization's digital foundation through enterprise-grade websites, mobile applications, and intelligent automation frameworks.",
            icon: <Globe size={24} />,
            color: "text-cascade-blue",
            bgHover: "group-hover:bg-cascade-blue group-hover:text-white"
        },
        {
            title: "Startup Ecosystem",
            description: "Enable founders to access investors, resources, and scalable platforms that foster accelerated growth and sustainable business outcomes.",
            icon: <Lightbulb size={24} />,
            color: "text-cascade-cyan",
            bgHover: "group-hover:bg-cascade-cyan group-hover:text-white"
        },
        {
            title: "AI & Smart Solutions",
            description: "Deploy intelligent systems that automate critical workflows, generate actionable insights, and deliver measurable returns on investment.",
            icon: <Bot size={24} />,
            color: "text-cascade-violet",
            bgHover: "group-hover:bg-cascade-violet group-hover:text-white"
        },
        {
            title: "Design & Branding",
            description: "Craft sophisticated user experiences, distinctive brand identities, and strategic communication assets aligned with organizational objectives.",
            icon: <PenTool size={24} />,
            color: "text-cascade-indigo",
            bgHover: "group-hover:bg-cascade-indigo group-hover:text-white"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.15 } }
    };

    return (
        <section className="py-12 bg-cascade-void relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                            <GlassCard className="h-full flex flex-col group p-6 sm:p-7 md:p-8 relative overflow-hidden">
                                {/* Wireframe background element */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-cascade-blue/5 -rotate-12 translate-x-8 -translate-y-8 border-[0.5px] border-cascade-blue/20 pointer-events-none" />

                                <div className={`w-12 h-12 rounded-xl bg-cascade-void/50 border border-cascade-border flex items-center justify-center mb-6 transition-all duration-300 relative z-10 ${feature.color} ${feature.bgHover} group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-cascade-blue transition-colors duration-300 relative z-10">
                                    {translations[lang]?.homeFeatures?.[idx] || feature.title}
                                </h3>
                                {/* @ts-ignore */}
                                <p className="text-text-secondary text-sm leading-relaxed flex-grow relative z-10 opacity-90">
                                    {translations[lang]?.homeFeatureDescs?.[idx] || feature.description}
                                </p>

                                {/* Bottom wireframe line */}
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cascade-border to-transparent opacity-50" />
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
