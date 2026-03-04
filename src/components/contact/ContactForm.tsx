import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, Building2, Briefcase, DollarSign, MessageSquare } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || "";

const SERVICE_OPTIONS = [
    "Digital Transformation",
    "AI & ML Solutions",
    "Design & Branding",
    "Web Development",
    "Cloud Infrastructure",
    "General Inquiry",
];

const BUDGET_OPTIONS = [
    "< ₹1 Lakh",
    "₹1L – ₹5L",
    "₹5L – ₹20L",
    "₹20L – ₹50L",
    "₹50L+",
    "Let's discuss",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
    const { t } = useLanguage();
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [form, setForm] = useState({
        name: "", email: "", phone: "", company: "",
        service: "", budget: "", message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMsg("");

        try {
            if (!APPS_SCRIPT_URL) throw new Error("Apps Script URL not configured.");

            await fetch(APPS_SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(form),
            });

            setStatus("success");
            setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
        } catch (err: any) {
            setStatus("error");
            setErrorMsg(err.message || "Something went wrong. Please try again.");
        }
    };

    const inputBase = "w-full bg-cascade-void border border-cascade-border rounded-xl px-4 py-3.5 pl-11 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-cascade-blue/40 focus:border-cascade-blue transition-all text-sm";
    const labelClass = "text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5";

    const Field = ({ id, icon: Icon, label, required, children }: any) => (
        <motion.div className="space-y-2" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <label htmlFor={id} className={labelClass}>
                <Icon size={12} className="text-cascade-blue" />
                {label} {required && <span className="text-cascade-blue">*</span>}
            </label>
            <div className="relative">{children}</div>
        </motion.div>
    );

    if (status === "success") {
        return (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                <GlassCard className="p-10 text-center" hoverEffect={false}>
                    <motion.div
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ background: "linear-gradient(135deg, #0EA5E9, #06B6D4)", boxShadow: "0 0 40px rgba(14,165,233,0.4)" }}
                    >
                        <CheckCircle size={40} className="text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">Message Sent!</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-8">
                        Thanks for reaching out! Our team will review your message and get back to you within <span className="text-cascade-blue font-semibold">24 hours</span>.
                    </p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="px-6 py-2.5 rounded-lg text-sm font-semibold border border-cascade-blue/40 text-cascade-blue hover:bg-cascade-blue/10 transition-all"
                    >
                        Send another message
                    </button>
                </GlassCard>
            </motion.div>
        );
    }

    return (
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.15 }}>
            <GlassCard className="p-8 sm:p-10 bg-cascade-surface/80" hoverEffect={false}>
                {/* Header */}
                <div className="mb-8 border-b border-cascade-border pb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#0EA5E9,#06B6D4)" }}>
                            <MessageSquare size={16} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-text-primary">{t('headings', 'formTitle')}</h3>
                    </div>
                    <p className="text-text-secondary text-sm">{t('contact', 'formResponseTime')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field id="name" icon={User} label={t('body', 'labelName')} required>
                            <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                            <input id="name" type="text" required value={form.name} onChange={handleChange}
                                className={inputBase} placeholder={t('body', 'placeholderName')} />
                        </Field>
                        <Field id="email" icon={Mail} label={t('body', 'labelEmail')} required>
                            <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                            <input id="email" type="email" required value={form.email} onChange={handleChange}
                                className={inputBase} placeholder={t('body', 'placeholderEmail')} />
                        </Field>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field id="phone" icon={Phone} label="Phone">
                            <Phone size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                            <input id="phone" type="tel" value={form.phone} onChange={handleChange}
                                className={inputBase} placeholder="+91 98765 43210" />
                        </Field>
                        <Field id="company" icon={Building2} label={t('body', 'labelCompany')}>
                            <Building2 size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                            <input id="company" type="text" value={form.company} onChange={handleChange}
                                className={inputBase} placeholder={t('body', 'placeholderCompany')} />
                        </Field>
                    </div>

                    {/* Service + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field id="service" icon={Briefcase} label="Service Interest">
                            <Briefcase size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                            <select id="service" value={form.service} onChange={handleChange}
                                className={`${inputBase} appearance-none cursor-pointer`}>
                                <option value="" disabled>Select a service…</option>
                                {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </Field>
                        <Field id="budget" icon={DollarSign} label="Budget Range">
                            <DollarSign size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                            <select id="budget" value={form.budget} onChange={handleChange}
                                className={`${inputBase} appearance-none cursor-pointer`}>
                                <option value="" disabled>Select budget…</option>
                                {BUDGET_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                        </Field>
                    </div>

                    {/* Message */}
                    <Field id="message" icon={MessageSquare} label={t('body', 'labelMessage')} required>
                        <MessageSquare size={15} className="absolute left-4 top-4 text-text-muted pointer-events-none" />
                        <textarea id="message" required rows={5} value={form.message} onChange={handleChange}
                            className={`${inputBase} resize-y pt-3.5`}
                            placeholder={t('body', 'placeholderMessage')} />
                    </Field>

                    {/* Error */}
                    <AnimatePresence>
                        {status === "error" && (
                            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                className="flex items-center gap-2.5 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                                <AlertCircle size={16} className="shrink-0" />
                                {errorMsg}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Submit */}
                    <motion.button
                        type="submit"
                        disabled={status === "submitting"}
                        whileHover={{ scale: status === "submitting" ? 1 : 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full flex items-center justify-center gap-2.5 mt-2 py-4 text-base font-semibold rounded-xl text-white disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                        style={{ background: "linear-gradient(135deg, #0EA5E9, #06B6D4)", boxShadow: "0 0 24px rgba(14,165,233,0.3)" }}
                    >
                        {status === "submitting" ? (
                            <>
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending…
                            </>
                        ) : (
                            <>
                                {t('body', 'sendMessage')} <Send size={17} />
                            </>
                        )}
                    </motion.button>

                    <p className="text-center text-text-muted text-xs">
                        🔒 Your information is private and will never be shared.
                    </p>
                </form>
            </GlassCard>
        </motion.div>
    );
}
