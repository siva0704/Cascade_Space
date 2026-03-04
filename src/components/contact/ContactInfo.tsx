import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactInfo() {
    const { t } = useLanguage();
    return (
        <div className="flex flex-col gap-5">
            {/* Email */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <GlassCard className="flex items-start gap-4 p-5 bg-cascade-deep" hoverEffect={false}>
                    <div className="w-11 h-11 rounded-xl bg-cascade-surface border border-cascade-border flex items-center justify-center text-cascade-blue flex-shrink-0">
                        <Mail size={20} />
                    </div>
                    <div>
                        <h4 className="text-text-primary font-bold mb-1">{t('headings', 'infoEmail')}</h4>
                        <a href="mailto:cascadetechnologiessolutions@gmail.com" className="text-text-secondary hover:text-cascade-blue transition-colors text-sm block">
                            cascadetechnologiessolutions@gmail.com                        </a>
                    </div>
                </GlassCard>
            </motion.div>

            {/* Phone */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.03 }}>
                <GlassCard className="flex items-start gap-4 p-5 bg-cascade-deep" hoverEffect={false}>
                    <div className="w-11 h-11 rounded-xl bg-cascade-surface border border-cascade-border flex items-center justify-center text-cascade-cyan flex-shrink-0">
                        <Phone size={20} />
                    </div>
                    <div>
                        <h4 className="text-text-primary font-bold mb-1">{t('headings', 'infoPhone')}</h4>
                        <a href="tel:+918496835245" className="text-text-secondary hover:text-cascade-cyan transition-colors text-sm block">+91 8496835245</a>
                        <a href="tel:+919902850039" className="text-text-secondary hover:text-cascade-cyan transition-colors text-sm block">+91 9902850039</a>
                    </div>
                </GlassCard>
            </motion.div>

            {/* Address */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}>
                <GlassCard className="flex items-start gap-4 p-5 bg-cascade-deep" hoverEffect={false}>
                    <div className="w-11 h-11 rounded-xl bg-cascade-surface border border-cascade-border flex items-center justify-center text-cascade-violet flex-shrink-0">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <h4 className="text-text-primary font-bold mb-1">{t('headings', 'infoAddress')}</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Vidya-Nagar Hubbali,<br />
                            Karnataka, India — 580021
                        </p>
                    </div>
                </GlassCard>
            </motion.div>

            {/* Hours */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.09 }}>
                <GlassCard className="flex items-start gap-4 p-5 bg-cascade-deep" hoverEffect={false}>
                    <div className="w-11 h-11 rounded-xl bg-cascade-surface border border-cascade-border flex items-center justify-center text-cascade-indigo flex-shrink-0">
                        <Clock size={20} />
                    </div>
                    <div>
                        <h4 className="text-text-primary font-bold mb-1">{t('headings', 'infoHours')}</h4>
                        <p className="text-text-secondary text-sm">{t('contact', 'businessHours')}</p>
                    </div>
                </GlassCard>
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
                <div className="flex gap-3 pt-1">
                    <a href="#" target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-cascade-deep border border-cascade-border flex items-center justify-center text-text-secondary hover:text-cascade-blue hover:border-cascade-blue/40 transition-all duration-300">
                        <Twitter size={18} />
                    </a>
                    <a href="https://linkedin.com/company/cascade-technologies" target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-cascade-deep border border-cascade-border flex items-center justify-center text-text-secondary hover:text-cascade-blue hover:border-cascade-blue/40 transition-all duration-300">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-cascade-deep border border-cascade-border flex items-center justify-center text-text-secondary hover:text-cascade-blue hover:border-cascade-blue/40 transition-all duration-300">
                        <Github size={18} />
                    </a>
                    <a href="https://instagram.com/Cascade_Teachno" target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-cascade-deep border border-cascade-border flex items-center justify-center text-text-secondary hover:text-cascade-blue hover:border-cascade-blue/40 transition-all duration-300">
                        <Instagram size={18} />
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
