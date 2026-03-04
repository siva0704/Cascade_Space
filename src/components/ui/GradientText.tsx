import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
    children: ReactNode;
    className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
    return (
        <span className={cn("text-gradient font-bold bg-clip-text text-transparent bg-gradient-to-r from-cascade-blue to-cascade-cyan", className)}>
            {children}
        </span>
    );
}
