import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // Use motion values for the raw mouse position
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);

    // Outer ring follows with a spring (creates the lag/trail effect)
    const outerX = useSpring(rawX, { stiffness: 200, damping: 25, mass: 0.5 });
    const outerY = useSpring(rawY, { stiffness: 200, damping: 25, mass: 0.5 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            rawX.set(e.clientX - 20);
            rawY.set(e.clientY - 20);
        };

        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer') ||
                target.closest('.cursor-pointer');
            setIsHovering(!!isInteractive);
        };

        const handleDown = () => setIsClicked(true);
        const handleUp = () => setIsClicked(false);

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseover", handleOver);
        window.addEventListener("mousedown", handleDown);
        window.addEventListener("mouseup", handleUp);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseover", handleOver);
            window.removeEventListener("mousedown", handleDown);
            window.removeEventListener("mouseup", handleUp);
        };
    }, [rawX, rawY]);

    return (
        <>
            {/* Inner dot — snaps directly to mouse */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-cascade-cyan rounded-full pointer-events-none z-[100] mix-blend-screen"
                style={{ x: useSpring(rawX, { stiffness: 800, damping: 35, mass: 0.1 }), y: useSpring(rawY, { stiffness: 800, damping: 35, mass: 0.1 }) }}
                animate={{ scale: isClicked ? 0.5 : 1 }}
                transition={{ duration: 0.1 }}
            />

            {/* Outer ring — trails behind with spring physics (magnetic feel) */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-cascade-blue pointer-events-none z-[99] bg-cascade-blue/5"
                style={{ x: outerX, y: outerY }}
                animate={{
                    scale: isClicked ? 1.5 : isHovering ? 1.35 : 1,
                    borderRadius: isHovering ? "25%" : "50%",
                    rotate: isHovering ? 45 : 0,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />
        </>
    );
}
