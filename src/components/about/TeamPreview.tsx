import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";

// Using the data from the user prompt
const executives = [
    { id: 1, name: "Akshay Kumar Ankalagi", role: "Chief Executive Officer", abbr: "AKA" },
    { id: 2, name: "Manoj Relekar", role: "Chief Operating Officer", abbr: "MR" },
    { id: 3, name: "Vaibhava BG", role: "Chief Technology Officer", abbr: "VBG" }
];

export function TeamPreview() {
    const { t, lang } = useLanguage();
    return (
        <section className="section-padding bg-cascade-void z-10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
                    <div>
                        <SectionLabel className="justify-center md:justify-start">Leadership</SectionLabel>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-4"
                        >
                            {t('headings', 'mindsBehinTech')}
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/about" className="btn-secondary inline-flex items-center gap-2 w-max mx-auto md:mx-0" aria-label="meet-team">
                            {t('body', 'meetFullTeam')} <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {executives.map((exec, idx) => (
                        <motion.div
                            key={exec.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.01, duration: 0.15 }}
                        >
                            <GlassCard className="text-center p-8 bg-cascade-surface group hover:-translate-y-2">
                                <div className="w-24 h-24 mx-auto bg-cascade-elevated border border-cascade-border rounded-full mb-6 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(10,22,40,0.5)] group-hover:border-cascade-blue/50 transition-colors">
                                    <span className="text-2xl font-bold text-text-muted">{exec.abbr}</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-1">{exec.name}</h3>
                                <p className="text-cascade-blue text-sm uppercase tracking-wider font-semibold">{exec.role}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
