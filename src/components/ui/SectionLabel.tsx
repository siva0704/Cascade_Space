import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionLabelProps {
    children: ReactNode;
    className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
    return (
        <div className={cn(
            "inline-flex items-center text-[11px] font-mono tracking-[0.3em] uppercase text-cascade-blue mb-6",
            className
        )}>
            <span className="w-8 h-[1px] bg-cascade-blue/50 mr-4" />
            {children}
            <span className="w-8 h-[1px] bg-cascade-blue/50 ml-4" />
        </div>
    );
}
