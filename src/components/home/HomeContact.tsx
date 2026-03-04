import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { toast } from "sonner";
import { GridBackground } from "@/components/ui/GridBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export function HomeContact() {
    const { t, lang } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("Message sent successfully! We'll be in touch soon.", {
                style: {
                    background: "var(--cascade-surface)",
                    border: "1px solid var(--cascade-border)",
                    color: "var(--text-primary)"
                }
            });
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <section className="section-padding relative overflow-hidden bg-cascade-deep z-10 border-t border-cascade-border">
            <GridBackground className="opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                        className="max-w-lg"
                    >
                        <SectionLabel>{t('home', 'contactLabel')}</SectionLabel>
                        <h2 className="mt-4 mb-6">{t('home', 'contactTitle')}</h2>
                        <p className="text-text-secondary text-lg mb-10">
                            {t('body', 'contactTeamReady')}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-cascade-void border border-cascade-border/50 transition-colors hover:border-cascade-blue/30">
                                <div className="w-12 h-12 rounded-lg bg-cascade-blue/10 flex items-center justify-center text-cascade-blue flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-text-primary font-semibold mb-1">{t('headings', 'emailUs')}</h4>
                                    <a href="mailto:contact@cascadespace.com" className="text-text-secondary hover:text-cascade-blue transition-colors text-sm break-all">
                                        contact@cascadespace.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-cascade-void border border-cascade-border/50 transition-colors hover:border-cascade-cyan/30">
                                <div className="w-12 h-12 rounded-lg bg-cascade-cyan/10 flex items-center justify-center text-cascade-cyan flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-text-primary font-semibold mb-1">{t('headings', 'visitUs')}</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        Vidya-Nagar Hubballi,<br />
                                        Karnataka, India — 580021
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                    >
                        <GlassCard className="p-8 sm:p-10" hoverEffect={false}>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-text-primary px-1">{t('body', 'labelName')}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full bg-cascade-void border border-cascade-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-cascade-blue/50 focus:border-cascade-blue transition-all"
                                            placeholder={t('body', 'placeholderName')}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-text-primary px-1">{t('body', 'labelEmail')}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full bg-cascade-void border border-cascade-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-cascade-blue/50 focus:border-cascade-blue transition-all"
                                            placeholder={t('body', 'placeholderEmail')}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-text-primary px-1">{t('body', 'labelCompany')} {t('body', 'optional')}</label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full bg-cascade-void border border-cascade-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-cascade-blue/50 focus:border-cascade-blue transition-all"
                                        placeholder={t('body', 'placeholderCompany')}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-text-primary px-1">{t('body', 'labelMessage')}</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full bg-cascade-void border border-cascade-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-cascade-blue/50 focus:border-cascade-blue transition-all resize-y"
                                        placeholder={t('body', 'placeholderMessage')}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            {t('contact', 'send')} <Send size={18} className="ml-2" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </GlassCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
