import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function useScrollAnimation(once: boolean = true) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else if (!once) {
            controls.start("hidden");
        }
    }, [isInView, controls, once]);

    return { ref, controls, isInView };
}
