import { cn } from "@/lib/utils";

interface GlowOrbProps {
    className?: string;
    color?: "primary" | "secondary" | "accent";
}

export function GlowOrb({ className, color = "primary" }: GlowOrbProps) {
    const colorMap = {
        primary: "from-cascade-blue/20 to-cascade-violet/10",
        secondary: "from-cascade-cyan/20 to-cascade-blue/10",
        accent: "from-cascade-indigo/20 to-cascade-blue/10",
    };

    return (
        <div
            className={cn(
                "absolute rounded-full blur-[120px] -z-10 bg-gradient-to-br mix-blend-screen pointer-events-none",
                colorMap[color],
                className
            )}
        />
    );
}
