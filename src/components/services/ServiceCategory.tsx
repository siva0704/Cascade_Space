import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceCategoryProps {
    id: string;
    title: string;
    description: string;
    features: string[];
    imagePath?: string;
    isReversed?: boolean;
}

export function ServiceCategory({ id, title, description, features, imagePath, isReversed = false }: ServiceCategoryProps) {
    const { t } = useLanguage();
    return (
        <section id={id} className={`py-20 md:py-32 ${isReversed ? 'bg-cascade-deep' : 'bg-cascade-void'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}>

                    <motion.div
                        initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">{title}</h2>
                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            {description}
                        </p>
                        <ul className="space-y-4 mb-10">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 size={24} className="text-cascade-cyan flex-shrink-0 mt-0.5" />
                                    <span className="text-text-primary">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact" className="btn-secondary">
                            {t('headings', 'discussService')}
                        </Link>
                    </motion.div>

                    {/* Abstract placeholder visual since we don't have actual images */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden glass-card p-2">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cascade-blue/10 to-cascade-violet/10 rounded-xl" />
                            <div className="absolute inset-x-0 h-1/2 bottom-0 bg-gradient-to-t from-cascade-void to-transparent rounded-b-xl" />
                            {/* Decorative elements representing tech */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cascade-cyan/30 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cascade-blue/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cascade-blue to-cascade-cyan blur-xl opacity-50" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
