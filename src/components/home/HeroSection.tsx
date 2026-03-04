import { Link } from "react-router-dom";
import { ArrowRight, Cpu, ShieldCheck, Clock, Code2, Globe } from "lucide-react";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { GridBackground } from "@/components/ui/GridBackground";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

import { useState, useEffect } from "react";
import { Language } from "@/locales/translations";

export function HeroSection() {
    const { t, lang, setLang } = useLanguage();
    const [isProcessing, setIsProcessing] = useState(false);

    const languages: Language[] = ['en', 'hi', 'kn', 'te', 'mr', 'ta', 'bn', 'gu', 'ml'];

    const handleCodeClick = () => {
        if (isProcessing) return;

        setIsProcessing(true);

        // Find next language
        const currentIndex = languages.indexOf(lang);
        const nextIndex = (currentIndex + 1) % languages.length;
        const nextLang = languages[nextIndex];

        // Trigger language change
        setLang(nextLang);

        // Reset processing state after animation
        setTimeout(() => {
            setIsProcessing(false);
        }, 1500);
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
            {/* Backgrounds */}
            <GridBackground />
            <GlowOrb className="top-1/4 -right-1/4 w-[800px] h-[800px]" color="primary" />
            <GlowOrb className="-bottom-1/4 -left-1/4 w-[600px] h-[600px]" color="secondary" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full lg:w-[55%] flex flex-col items-start text-left min-h-[480px] lg:min-h-[520px]"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                        >
                            <SectionLabel>{t('hero', 'label')}</SectionLabel>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            className="mb-6 font-display"
                        >
                            {t('hero', 'title1')} <br className="hidden md:block" />
                            <GradientText className="relative inline-block text-glow">
                                {t('hero', 'title2')}
                                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-cascade-blue/50 to-transparent rounded-full" />
                            </GradientText>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 text-balance"
                        >
                            {t('hero', 'description')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
                        >
                            <Link to="/services" className="btn-primary text-center">
                                {t('hero', 'cta1')}
                            </Link>
                            <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2 group">
                                {t('hero', 'cta2')}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Trust Strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                            className="flex flex-wrap items-center gap-6 text-sm text-text-muted font-mono"
                        >
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <Cpu size={16} className="text-cascade-cyan" />
                                <span>{t('hero', 'trustPowered')}</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-cascade-border" />
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <ShieldCheck size={16} className="text-cascade-success" />
                                <span>{t('hero', 'trustUptime')}</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-cascade-border" />
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <Clock size={16} className="text-cascade-blue" />
                                <span>{t('hero', 'trustSupport')}</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - "Cascading Tech Stack" Redesign + Language Switcher Nodes */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-[45%] relative flex justify-center py-10 min-h-[400px] md:min-h-[500px]"
                    >
                        <div
                            className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] aspect-square perspective-[2000px] perspective-origin-center scale-[0.65] sm:scale-90 md:scale-100"
                        >
                            <motion.div
                                animate={isProcessing ? {
                                    scale: [1, 1.05, 1],
                                    opacity: [1, 0.8, 1]
                                } : {}}
                                transition={isProcessing ? {
                                    duration: 1.5,
                                    ease: "easeInOut"
                                } : {}}
                                className="absolute inset-0 z-0"
                            >
                                <LanguageSwitcher />
                            </motion.div>

                            <motion.div
                                animate={isProcessing ? {
                                    opacity: [1, 0.9, 1]
                                } : {}}
                                transition={isProcessing ? {
                                    duration: 1.5,
                                    ease: "easeInOut"
                                } : {}}
                                className="relative w-full h-full"
                            >
                                {/* Base Platform */}
                                <motion.div
                                    initial={{ opacity: 0, rotateX: 60, rotateZ: -45, y: 100 }}
                                    animate={{
                                        opacity: 1,
                                        rotateX: 60,
                                        rotateZ: -45,
                                        y: 0,
                                        boxShadow: isProcessing ? "0 0 80px rgba(14,165,233,0.4)" : "0 0 50px rgba(14,165,233,0.15)"
                                    }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                    className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-cascade-blue/5 border border-cascade-blue/20 rounded-3xl backdrop-blur-sm"
                                />

                                {/* Middle Layer - Web Tech */}
                                <motion.div
                                    initial={{ opacity: 0, rotateX: 60, rotateZ: -45, y: 50 }}
                                    animate={isProcessing ? {
                                        opacity: 1,
                                        rotateX: 60,
                                        rotateZ: [-45, 315, 675],
                                        y: -40,
                                        boxShadow: "0 0 60px rgba(6,182,212,0.4)"
                                    } : {
                                        opacity: 1,
                                        rotateX: 60,
                                        rotateZ: -45,
                                        y: -40
                                    }}
                                    whileHover={{ scale: 1.05, y: -50, boxShadow: "0 0 60px rgba(6,182,212,0.4)" }}
                                    transition={{ duration: isProcessing ? 1.5 : 0.8, delay: isProcessing ? 0 : 0.3, ease: "easeInOut" }}
                                    className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-tr from-cascade-cyan/10 to-transparent border border-cascade-cyan/30 rounded-3xl flex items-center justify-center backdrop-blur-md z-10 cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-grid-overlay opacity-30 mask-image-radial z-0 pointer-events-none" />
                                    <motion.div
                                        animate={{ y: [-5, 5, -5] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-cascade-void shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-cascade-cyan flex items-center justify-center rotate-45 pointer-events-none"
                                    >
                                        <Globe size={28} className="text-cascade-cyan -rotate-45" />
                                    </motion.div>
                                </motion.div>

                                {/* Data Connection Line 1 */}
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 60, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    className="absolute bottom-32 left-1/2 w-[2px] bg-gradient-to-t from-cascade-cyan/10 to-cascade-blue shadow-[0_0_10px_#0EA5E9] z-15"
                                />

                                {/* Top Layer - AI / Compute - Clickable → Services page */}
                                <Link to="/services" className="absolute bottom-10 left-1/2 z-20 group">
                                    <motion.div
                                        initial={{ opacity: 0, rotateX: 60, rotateZ: -45, y: 0 }}
                                        animate={isProcessing ? {
                                            opacity: 1,
                                            rotateX: 60,
                                            rotateZ: [-45, 315, 675],
                                            y: -100,
                                            boxShadow: "0 0 60px rgba(14,165,233,0.5)"
                                        } : {
                                            opacity: 1,
                                            rotateX: 60,
                                            rotateZ: -45,
                                            y: -100
                                        }}
                                        whileHover={{ scale: 1.05, y: -110, boxShadow: "0 0 60px rgba(14,165,233,0.5)" }}
                                        transition={{ duration: isProcessing ? 1.5 : 0.8, delay: isProcessing ? 0 : 0.5, ease: "easeInOut" }}
                                        className="-translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-tr from-cascade-blue/10 to-transparent border border-cascade-blue/40 rounded-3xl flex items-center justify-center backdrop-blur-lg cursor-pointer"
                                    >
                                        <motion.div
                                            animate={{ y: [-5, 5, -5] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-cascade-void shadow-[0_0_30px_rgba(14,165,233,0.4)] border border-cascade-blue flex items-center justify-center rotate-45 pointer-events-none"
                                        >
                                            <Cpu size={28} className="text-cascade-blue -rotate-45" />
                                        </motion.div>
                                        {/* Hover reveal label */}
                                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 -rotate-[45deg] skew-x-12 whitespace-nowrap text-[10px] font-mono text-cascade-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                            Services →
                                        </span>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Side Node - Code/Logic */}
                        <motion.div
                            initial={{ opacity: 0, x: -30, y: -30 }}
                            animate={{ opacity: 1, x: -70, y: -80 }}
                            whileHover={{ scale: 1.1, x: -75, y: -85 }}
                            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                            className="absolute top-1/2 left-1/2 z-30 cursor-pointer"
                            onClick={handleCodeClick}
                        >
                            <motion.div
                                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-cascade-void shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-cascade-indigo flex items-center justify-center pointer-events-none overflow-hidden"
                            >
                                <motion.div
                                    animate={isProcessing ? {
                                        rotate: [0, 360],
                                    } : {}}
                                    transition={isProcessing ? {
                                        duration: 0.5,
                                        repeat: 3,
                                        ease: "linear"
                                    } : {}}
                                >
                                    <Code2 size={20} className="text-cascade-indigo" />
                                </motion.div>
                            </motion.div>
                            <motion.svg
                                className="absolute top-full left-1/2 -translate-x-1/2 w-8 h-16 -z-10"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <path d="M 15 0 L 15 30 L 30 45" fill="none" stroke="url(#indigo-grad)" strokeWidth="2" strokeDasharray="4 4" />
                                <defs>
                                    <linearGradient id="indigo-grad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#6366F1" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                            </motion.svg>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
