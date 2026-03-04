import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-card p-6 sm:p-8",
                hoverEffect ? "hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(14,165,233,0.15)] hover:border-cascade-blue/50" : "",
                className
            )}
        >
            {children}
        </div>
    );
}
