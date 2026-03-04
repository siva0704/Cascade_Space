import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeaturedProjectProps {
    title: string;
    description: string;
    tags: string[];
    features: string[];
    imagePlaceholderText: string;
    accentColor: string;
    isReversed?: boolean;
}

export function FeaturedProject({ title, description, tags, features, imagePlaceholderText, accentColor, isReversed = false }: FeaturedProjectProps) {
    const { t } = useLanguage();
    return (
        <section className="py-24 border-b border-cascade-border bg-cascade-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                        className={isReversed ? 'lg:order-2' : ''}
                    >
                        <div className="flex flex-wrap gap-2 mb-6">
                            {tags.map((tag, idx) => (
                                <span key={idx} className={`px-3 py-1 text-xs font-mono rounded-full border bg-cascade-void ${accentColor}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">{title}</h2>
                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            {description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-cascade-void border ${accentColor}`}>
                                        <Check size={14} className="opacity-80" />
                                    </div>
                                    <span className="text-text-primary font-medium text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className="flex items-center gap-2 text-text-primary hover:text-cascade-blue transition-colors group font-semibold">
                            {t('headings', 'viewCaseStudy')} <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                        className={`w-full aspect-[4/3] sm:aspect-video lg:aspect-square rounded-2xl overflow-hidden glass-card p-2 relative ${isReversed ? 'lg:order-1' : ''}`}
                    >
                        <div className="absolute inset-0 bg-cascade-void rounded-xl flex items-center justify-center border border-cascade-border">
                            <span className={`text-4xl font-bold tracking-tighter opacity-20 ${accentColor.replace('border-', 'text-').replace('bg-', 'text-')}`}>
                                {imagePlaceholderText}
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
