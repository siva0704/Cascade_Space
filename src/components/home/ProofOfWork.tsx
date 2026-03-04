import { StatCard } from "@/components/ui/StatCard";
import { useLanguage } from "@/contexts/LanguageContext";

export function ProofOfWork() {
    const { t } = useLanguage();
    const stats = [
        {
            end: 3,
            suffix: "+",
            label: t('home', 'powLabel'),
            description: t('home', 'statDesc1')
        },
        {
            end: 20,
            suffix: "+",
            label: t('home', 'powProjects'),
            description: t('home', 'statDesc2')
        },
        {
            end: 3,
            label: t('home', 'powLive'),
            description: t('home', 'statDesc3')
        },
        {
            end: 100,
            suffix: "%",
            label: t('home', 'powClient'),
            description: t('home', 'statDesc4')
        }
    ];

    return (
        <section className="py-12 border-y border-cascade-border bg-cascade-deep relative overflow-hidden">
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-grid-overlay opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <StatCard key={idx} {...stat} duration={2500} />
                    ))}
                </div>
            </div>
        </section>
    );
}
