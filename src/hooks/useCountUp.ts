import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function useCountUp(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            // easeOutExpo easing
            const easeOut = progress === duration ? 1 : 1 - Math.pow(2, -10 * progress / duration);
            const currentCount = Math.min(Math.floor(end * easeOut), end);

            setCount(currentCount);

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure it reaches exactly the end value
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView]);

    return { count, ref };
}
