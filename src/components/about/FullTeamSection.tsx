import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";

const executives = [
    {
        name: "Akshay Kumar Ankalagi",
        role: "Chief Executive Officer",
        abbr: "AK",
        bio: "Visionary CEO bringing extensive experience in technology leadership and business transformation. His strategic insights have positioned CascadeTech as a leader in digital innovation across industries.",
        email: "akshay@cascadetech.com",
        linkedin: "https://www.linkedin.com/in/akshaykumar-ankalagi-10b37933a",
        accentColor: "cascade-blue",
    },
    {
        name: "Manoj Relekar",
        role: "Chief Operating Officer",
        abbr: "MR",
        bio: "Operational backbone of CascadeTech, bringing exceptional organizational leadership and process optimization expertise. Ensures service delivery consistently exceeds client expectations.",
        email: "manoj@cascadetech.com",
        linkedin: "https://www.linkedin.com/in/manojrelekar3/",
        accentColor: "cascade-cyan",
    },
    {
        name: "Vaibhava BG",
        role: "Chief Technology Officer",
        abbr: "VB",
        bio: "Technical innovator combining deep expertise with creative problem-solving. Drives the product development roadmap with a passion for AI, cloud architecture, and scalable secure digital platforms.",
        email: "vaibhava@cascadetech.com",
        linkedin: "https://www.linkedin.com/in/vaibhav-b-g-284b63346",
        accentColor: "cascade-indigo",
    },
];

export function FullTeamSection() {
    const { t } = useLanguage();
    return (
        <section className="section-padding bg-cascade-deep relative border-y border-cascade-border z-20">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cascade-cyan/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <SectionLabel className="justify-center">{t('about', 'teamLabel')}</SectionLabel>
                    <h2 className="mt-4">
                        {t('about', 'teamTitle').split('the ')[0]}the <GradientText>Tech</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto" suppressHydrationWarning>
                        {t('about', 'teamDesc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {executives.map((exec, idx) => (
                        <motion.div
                            key={exec.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                        >
                            <GlassCard className="flex flex-col h-full p-8 bg-cascade-void group hover:-translate-y-1 hover:border-cascade-blue/40 transition-all duration-300">
                                {/* Avatar */}
                                <div className="flex items-center gap-4 mb-5">
                                    <div className={`w-16 h-16 rounded-2xl bg-${exec.accentColor}/10 border border-${exec.accentColor}/30 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.1)] flex-shrink-0`}>
                                        <span className={`text-xl font-bold text-${exec.accentColor}`}>{exec.abbr}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-text-primary leading-tight">{exec.name}</h3>
                                        <p className={`text-${exec.accentColor} text-xs font-mono uppercase tracking-wider mt-0.5`}>{exec.role}</p>
                                    </div>
                                </div>

                                {/* Bio */}
                                <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">
                                    {exec.bio}
                                </p>

                                {/* Contact */}
                                <div className="flex items-center gap-3 pt-4 border-t border-cascade-border">
                                    <a
                                        href={`mailto:${exec.email}`}
                                        className="flex items-center gap-1.5 text-xs text-text-muted hover:text-cascade-blue transition-colors"
                                    >
                                        <Mail size={13} />
                                        Email
                                    </a>
                                    <span className="text-cascade-border">·</span>
                                    <a
                                        href={exec.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs text-text-muted hover:text-cascade-blue transition-colors"
                                    >
                                        <Linkedin size={13} />
                                        LinkedIn
                                    </a>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
