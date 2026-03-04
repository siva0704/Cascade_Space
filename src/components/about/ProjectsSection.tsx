import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
    {
        title: "Startopia",
        description: "A comprehensive ecosystem designed to empower founders with resources, investor connections, and highly scalable technological platforms.",
        tags: ["React", "Node.js", "PostgreSQL", "AWS"],
        features: ["End-to-End Encryption", "Automated Matchmaking", "Real-time Analytics", "Scalable Microservices"],
        accentColor: "cascade-cyan",
    },
    {
        title: "TextYourBoss.ai",
        description: "An AI-powered communication tool simplifying professional messaging, workflow automation, and context-aware responses for enterprise teams.",
        tags: ["Python", "OpenAI API", "React", "Next.js"],
        features: ["Context-Aware AI Generation", "Tone Adjustment Engine", "Multi-Platform Integration", "Enterprise Role-Based Access"],
        accentColor: "cascade-indigo",
    },
];

const tagColors: Record<string, string> = {
    "React": "bg-blue-500/10 text-blue-400 border-blue-400/30",
    "Node.js": "bg-green-500/10 text-green-400 border-green-400/30",
    "PostgreSQL": "bg-sky-500/10 text-sky-400 border-sky-400/30",
    "AWS": "bg-orange-500/10 text-orange-400 border-orange-400/30",
    "Python": "bg-yellow-500/10 text-yellow-400 border-yellow-400/30",
    "OpenAI API": "bg-emerald-500/10 text-emerald-400 border-emerald-400/30",
    "Next.js": "bg-white/10 text-white/70 border-white/20",
};

export function ProjectsSection() {
    const { t, lang } = useLanguage();
    return (
        <section className="section-padding bg-cascade-void relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <SectionLabel className="justify-center">{t('about', 'projectsLabel')}</SectionLabel>
                    <h2 className="mt-4">
                        {t('about', 'projectsTitle').split('That ')[0]}That <GradientText>Define Us</GradientText>
                    </h2>
                    <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
                        {t('about', 'projectsBodyDesc')}
                    </p>
                </div>

                <div className="flex flex-col gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                        >
                            <GlassCard className="p-8 md:p-10 bg-cascade-surface hover:border-cascade-blue/40 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Left */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className="text-2xl font-bold text-text-primary">{project.title}</h3>
                                            <ExternalLink size={16} className="text-text-muted" />
                                        </div>
                                        <p className="text-text-secondary mb-5 leading-relaxed">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className={`px-2.5 py-1 text-xs font-mono rounded-md border ${tagColors[tag] || "bg-white/5 text-white/50 border-white/10"}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Right — Features */}
                                    <div className="md:w-64 flex-shrink-0">
                                        <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-3">{t('body', 'keyFeatures')}</p>
                                        <ul className="space-y-2">
                                            {project.features.map((f) => (
                                                <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                                                    <span className={`w-1.5 h-1.5 rounded-full bg-${project.accentColor} flex-shrink-0`} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12 text-text-muted text-sm font-mono">
                    {t('about', 'projectsComingSoon')}
                </div>
            </div>
        </section>
    );
}
