import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { GlassCard } from "./GlassCard";

interface StatCardProps {
    end: number;
    suffix?: string;
    prefix?: string;
    label: string;
    description?: string;
    duration?: number;
}

export function StatCard({ end, suffix = "", prefix = "", label, description, duration = 2000 }: StatCardProps) {
    const { count, ref } = useCountUp(end, duration);

    return (
        <GlassCard className="text-center p-8 flex flex-col items-center justify-center">
            <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gradient mb-4 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]"
            >
                <span>{prefix}</span>
                <span ref={ref}>{count}</span>
                <span>{suffix}</span>
            </motion.div>
            <h4 className="text-text-primary text-lg md:text-xl font-semibold mb-2">{label}</h4>
            {description && <p className="text-text-muted text-sm max-w-[200px]">{description}</p>}
        </GlassCard>
    );
}
