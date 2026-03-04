import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0 pointer-events-none -z-20 opacity-[0.04]", className)}>
            <div className="absolute inset-0 bg-grid-overlay bg-[length:40px_40px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-cascade-void to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-cascade-void to-transparent" />
        </div>
    );
}
