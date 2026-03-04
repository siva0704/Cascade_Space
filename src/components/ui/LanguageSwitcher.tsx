import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language, languageNames } from "@/locales/translations";

// Each node is parented to the CENTER of the stack container (left:50%, top:50%)
// The 3D stack sits at roughly:
//   Top AI Card center:    x=0,   y=-140  (from container center)
//   Middle Web Card center: x=0,   y=-60
//   Base Platform center:   x=0,   y=0
// Nodes branch left & right of each layer, wires terminate at the card edge

const nodeConfig: {
    lang: Language;
    x: number; y: number;
    anchorX: number; anchorY: number;
    delay: number;
    neonColor: string;
    neonShadow: string;
}[] = [
        { lang: "en", x: 240, y: -55, anchorX: 80, anchorY: -55, delay: 0.2, neonColor: "#06b6d4", neonShadow: "rgba(6,182,212,0.65)" }, // Mid Right -> Mid Card
        { lang: "hi", x: 183, y: 86, anchorX: 80, anchorY: 30, delay: 0.25, neonColor: "#f472b6", neonShadow: "rgba(244,114,182,0.65)" }, // Bot Right -> Bot Card
        { lang: "kn", x: 41, y: 161, anchorX: 20, anchorY: 80, delay: 0.3, neonColor: "#34d399", neonShadow: "rgba(52,211,153,0.65)" }, // Bot Center -> Bot Card
        { lang: "te", x: -120, y: 135, anchorX: -80, anchorY: 30, delay: 0.35, neonColor: "#fb923c", neonShadow: "rgba(251,146,60,0.65)" }, // Bot Left -> Bot Card
        { lang: "mr", x: -225, y: 20, anchorX: -80, anchorY: -55, delay: 0.4, neonColor: "#a78bfa", neonShadow: "rgba(167,139,250,0.65)" }, // Mid Left -> Mid Card
        { lang: "ta", x: -225, y: -130, anchorX: -70, anchorY: -140, delay: 0.45, neonColor: "#facc15", neonShadow: "rgba(250,204,21,0.65)" }, // Top Left -> Top Card
        { lang: "bn", x: -120, y: -245, anchorX: -30, anchorY: -180, delay: 0.5, neonColor: "#ef4444", neonShadow: "rgba(239,68,68,0.65)" }, // Top Center Left -> Top Card
        { lang: "gu", x: 41, y: -271, anchorX: 30, anchorY: -180, delay: 0.55, neonColor: "#8b5cf6", neonShadow: "rgba(139,92,246,0.65)" }, // Top Center Right -> Top Card
        { lang: "ml", x: 183, y: -196, anchorX: 70, anchorY: -140, delay: 0.6, neonColor: "#10b981", neonShadow: "rgba(16,185,129,0.65)" }, // Top Right -> Top Card
    ];

export function LanguageSwitcher() {
    const { lang, setLang } = useLanguage();

    return (
        <div className="absolute inset-0 z-40 pointer-events-none">
            {/* Origin = visual center of the 3D stack container */}
            <div className="absolute top-1/2 left-1/2">
                {nodeConfig.map(({ lang: l, x, y, anchorX, anchorY, delay, neonColor, neonShadow }, i) => {
                    const isActive = lang === l;
                    // Offset from node origin (0,0) to the anchor on the card
                    const dx = anchorX - x;
                    const dy = anchorY - y;
                    // Bezier control: short straight horizontal shot to the card edge
                    const cx1 = dx * 0.5;
                    const cy1 = 0;
                    const cx2 = dx * 0.9;
                    const cy2 = dy * 0.5;

                    return (
                        <motion.div
                            key={l}
                            className="absolute pointer-events-auto"
                            initial={{ opacity: 0, x: anchorX, y: anchorY }}
                            animate={{ opacity: 1, x, y }}
                            transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* SVG wire from node → card anchor */}
                            <motion.svg
                                className="absolute pointer-events-none"
                                style={{ overflow: "visible", top: 0, left: 0 }}
                            >
                                <motion.path
                                    d={`M 0 0 C ${cx1} ${cy1} ${cx2} ${cy2} ${dx} ${dy}`}
                                    fill="none"
                                    stroke={isActive ? neonColor : "rgba(255,255,255,0.1)"}
                                    strokeWidth={isActive ? 1.5 : 1}
                                    strokeDasharray={isActive ? "none" : "5 5"}
                                    style={isActive ? { filter: `drop-shadow(0 0 3px ${neonColor})` } : {}}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 0.9, delay: delay + 0.2 }}
                                />
                                {/* Terminal dot at card edge */}
                                <motion.circle
                                    cx={dx} cy={dy} r="2.5"
                                    fill={isActive ? neonColor : "rgba(255,255,255,0.14)"}
                                    style={isActive ? { filter: `drop-shadow(0 0 5px ${neonColor})` } : {}}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: delay + 0.8 }}
                                />
                            </motion.svg>

                            {/* Language node badge */}
                            <motion.button
                                onClick={() => setLang(l)}
                                animate={{ y: [-2.5, 2.5, -2.5] }}
                                transition={{ y: { duration: 3 + i * 0.35, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 } }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.93 }}
                                className="-translate-x-1/2 -translate-y-1/2 relative flex items-center justify-center w-14 h-14 rounded-2xl cursor-pointer select-none"
                                style={{
                                    background: isActive
                                        ? `radial-gradient(ellipse at 30% 30%, ${neonShadow}33, rgba(5,5,15,0.92) 70%)`
                                        : "rgba(8,8,20,0.75)",
                                    border: `1.5px solid ${isActive ? neonColor : "rgba(255,255,255,0.09)"}`,
                                    boxShadow: isActive
                                        ? `0 0 20px ${neonShadow}, 0 0 8px ${neonShadow}, inset 0 0 14px ${neonShadow}25`
                                        : "0 4px 24px rgba(0,0,0,0.45)",
                                    backdropFilter: "blur(14px)",
                                    WebkitBackdropFilter: "blur(14px)",
                                }}
                                title={languageNames[l]}
                            >
                                {/* HUD corner accents */}
                                <span className="absolute top-0 left-0 w-3 h-3 rounded-tl-xl" style={{ borderTop: `2px solid ${isActive ? neonColor : "rgba(255,255,255,0.12)"}`, borderLeft: `2px solid ${isActive ? neonColor : "rgba(255,255,255,0.12)"}`, filter: isActive ? `drop-shadow(0 0 4px ${neonColor})` : "none" }} />
                                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-br-xl" style={{ borderBottom: `2px solid ${isActive ? neonColor : "rgba(255,255,255,0.12)"}`, borderRight: `2px solid ${isActive ? neonColor : "rgba(255,255,255,0.12)"}`, filter: isActive ? `drop-shadow(0 0 4px ${neonColor})` : "none" }} />

                                {/* Native language label */}
                                <span className="font-display font-bold text-[11px] leading-none text-center" style={{ color: isActive ? neonColor : "rgba(255,255,255,0.35)", textShadow: isActive ? `0 0 12px ${neonColor}` : "none", letterSpacing: "0.04em" }}>
                                    {languageNames[l]}
                                </span>

                                {/* Active pulse ring */}
                                {isActive && (
                                    <motion.span
                                        className="absolute inset-0 rounded-2xl pointer-events-none"
                                        style={{ border: `1px solid ${neonColor}` }}
                                        animate={{ scale: [1, 1.55], opacity: [0.65, 0] }}
                                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                                    />
                                )}
                            </motion.button>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
