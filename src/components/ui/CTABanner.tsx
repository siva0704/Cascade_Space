import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CTABannerProps {
    title?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
}

export function CTABanner({
    title = "Ready to Transform Your Business?",
    description = "Let's discuss how our services can help you achieve your goals.",
    primaryButtonText = "Start a Conversation",
    primaryButtonLink = "/contact",
    secondaryButtonText = "Explore Our Services",
    secondaryButtonLink = "/services",
}: CTABannerProps) {
    const { t } = useLanguage();
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-cascade-deep border-y border-cascade-border" />
            <div className="absolute inset-0 bg-grid-overlay opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cascade-blue/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary text-glow">
                    {title === "Ready to Transform Your Business?" ? t('headings', 'ctaBannerTitle') : title}
                </h2>
                <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
                    {description === "Let's discuss how our services can help you achieve your goals." ? t('services', 'ctaBannerDesc') : description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to={primaryButtonLink} className="btn-primary w-full sm:w-auto">
                        {primaryButtonText === "Start a Conversation" ? t('cta', 'startProject') : primaryButtonText}
                    </Link>
                    <Link to={secondaryButtonLink} className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                        {secondaryButtonText === "Explore Our Services" ? t('cta', 'learnMore') : secondaryButtonText} <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
