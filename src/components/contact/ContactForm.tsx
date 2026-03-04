import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactForm() {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("Message sent! We'll get back to you shortly.", {
                style: {
                    background: "var(--cascade-surface)",
                    border: "1px solid var(--cascade-border)",
                    color: "var(--text-primary)"
                }
            });
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    const inputClass = "w-full bg-cascade-void border border-cascade-border rounded-lg px-4 py-3.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-cascade-blue/50 focus:border-cascade-blue transition-all text-sm";

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.15 }}
        >
            <GlassCard className="p-8 sm:p-10 bg-cascade-surface/80" hoverEffect={false}>
                <div className="mb-8 border-b border-cascade-border pb-6">
                    <h3 className="text-2xl font-bold text-text-primary mb-1">{t('headings', 'formTitle')}</h3>
                    <p className="text-text-secondary text-sm">{t('contact', 'formResponseTime')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-text-primary px-1">{t('body', 'labelName')} <span className="text-cascade-blue">*</span></label>
                            <input type="text" id="name" required className={inputClass} placeholder={t('body', 'placeholderName')} />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-text-primary px-1">{t('body', 'labelEmail')} <span className="text-cascade-blue">*</span></label>
                            <input type="email" id="email" required className={inputClass} placeholder={t('body', 'placeholderEmail')} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-text-primary px-1">{t('body', 'labelCompany')} <span className="text-text-muted">{t('body', 'optional')}</span></label>
                        <input type="text" id="company" className={inputClass} placeholder={t('body', 'placeholderCompany')} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-text-primary px-1">{t('body', 'labelMessage')} <span className="text-cascade-blue">*</span></label>
                        <textarea id="message" required rows={5} className={`${inputClass} resize-y`}
                            placeholder={t('body', 'placeholderMessage')} />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed py-4 text-base font-semibold rounded-lg text-white"
                        style={{ background: "linear-gradient(to bottom right, #0EA5E9, #06B6D4)", boxShadow: "0 0 20px rgba(14,165,233,0.25)" }}
                    >
                        {isSubmitting ? (
                            <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                {t('body', 'sendMessage')} <Send size={18} />
                            </>
                        )}
                    </button>
                </form>
            </GlassCard>
        </motion.div>
    );
}
