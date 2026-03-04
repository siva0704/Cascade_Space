import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

interface ExecutiveProps {
    name: string;
    role: string;
    bio: string;
    imageAbbr: string;
    email: string;
    linkedin: string;
    delay?: number;
}

export function ExecutiveCard({ name, role, bio, imageAbbr, email, linkedin, delay = 0 }: ExecutiveProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.15 }}
        >
            <GlassCard className="flex flex-col md:flex-row gap-8 items-start bg-cascade-deep p-8" hoverEffect={false}>
                {/* Avatar */}
                <div className="w-28 h-28 rounded-2xl bg-cascade-surface border border-cascade-border flex items-center justify-center flex-shrink-0 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cascade-blue/20 to-cascade-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-3xl font-black text-text-muted font-display">{imageAbbr}</span>
                </div>

                {/* Info */}
                <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-text-primary mb-0.5">{name}</h3>
                    <p className="text-cascade-blue font-semibold uppercase tracking-wider text-sm mb-4">{role}</p>
                    <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
                        {bio}
                    </p>
                    {/* Links */}
                    <div className="flex gap-3 flex-wrap">
                        <a href={linkedin} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cascade-border bg-cascade-void text-text-secondary hover:text-cascade-blue hover:border-cascade-blue/40 transition-all duration-300 text-sm font-medium">
                            <Linkedin size={16} /> LinkedIn
                        </a>
                        <a href={`mailto:${email}`}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cascade-border bg-cascade-void text-text-secondary hover:text-cascade-cyan hover:border-cascade-cyan/40 transition-all duration-300 text-sm font-medium">
                            <Mail size={16} /> {email}
                        </a>
                    </div>
                </div>
            </GlassCard>
        </motion.div>
    );
}
