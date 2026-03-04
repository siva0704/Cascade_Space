import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { GridBackground } from "@/components/ui/GridBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="min-h-[80vh] flex items-center justify-center bg-cascade-void relative overflow-hidden"
    >
      <GridBackground />
      <GlowOrb color="destructive" className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[150px]" />

      {/* Floating Particles mimicking lost in space */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cascade-blue/50 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{
            y: [null, Math.random() * -200],
            opacity: [null, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      <div className="text-center relative z-20 glass-card p-12 max-w-2xl mx-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-20 h-20 rounded-full bg-cascade-error/10 border border-cascade-error border-dashed flex items-center justify-center mx-auto mb-8 text-cascade-error"
        >
          <AlertTriangle size={32} />
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-br from-white via-cascade-error to-red-900 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
          {t('notFound', 'title')}
        </h2>
        <p className="text-text-secondary mb-10 text-lg">
          {t('notFound', 'desc')}
        </p>

        <Link to="/" className="btn-primary inline-flex items-center gap-3 w-auto group">
          <Home size={20} className="group-hover:-translate-y-0.5 transition-transform" />
          {t('notFound', 'backToHome')}
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
