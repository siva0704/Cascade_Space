import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FutureVision() {
    const { t } = useLanguage();
    return (
        <section className="py-32 relative overflow-hidden flex items-center justify-center bg-cascade-deep border-y border-cascade-border z-10">
            {/* Dynamic gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cascade-blue/10 via-cascade-void to-cascade-cyan/5 -z-10" />
            <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-cascade-cyan/30 to-transparent" />
            <div className="absolute inset-x-0 h-[1px] bottom-0 bg-gradient-to-r from-transparent via-cascade-cyan/30 to-transparent" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow">
                        {t('headings', 'visionSubtitle')}
                    </h2>
                    <p className="text-xl text-text-secondary mb-12 leading-relaxed text-balance">
                        {t('headings', 'futureVisionBody')}
                    </p>
                    <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                        {t('headings', 'futureVisionCta')} <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
