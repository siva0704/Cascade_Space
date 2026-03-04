import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const navigationKeys = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-cascade-blue z-[60] origin-left"
        style={{ scaleX }}
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
          isScrolled
            ? "glass-nav border-b border-cascade-border py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-50">
              <div className="relative flex items-center justify-center">
                <img
                  src={logo}
                  alt="Cascade Tech"
                  className="h-10 w-10 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105 invert brightness-[2]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold bg-gradient-to-tr from-cascade-blue to-cascade-cyan bg-clip-text text-transparent">C</span>';
                  }}
                />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-text-primary">
                Cascade<span className="text-cascade-blue">Tech Solutions</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navigationKeys.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group overflow-hidden",
                      isActive
                        ? "text-cascade-blue"
                        : "text-text-secondary hover:text-text-primary"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{t('nav', item.key)}</span>
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-cascade-blue/10 border border-cascade-blue/20 rounded-lg -z-0"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-cascade-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full opacity-50" />
                    </>
                  )}
                </NavLink>
              ))}

              <div className="pl-4 ml-2 border-l border-cascade-border">
                <Link
                  to="/contact"
                  className="btn-primary py-2.5 px-5 text-sm inline-flex items-center gap-2"
                >
                  {t('nav', 'getStarted')}
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 p-2 text-text-secondary hover:text-text-primary transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

      </header>

      {/* Full Screen Mobile Menu - MOVED OUTSIDE HEADER TO FIX Z-INDEX CLIPPING */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { delay: 0.1 } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-cascade-void/95 backdrop-blur-3xl pt-24 pb-6 px-6 flex flex-col md:hidden border-b border-cascade-border overflow-y-auto"
          >
            <nav className="flex flex-col space-y-2 mt-4 flex-1">
              {navigationKeys.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "block py-4 text-2xl font-semibold tracking-tight border-b border-cascade-border/50 transition-colors",
                        isActive
                          ? "text-cascade-blue"
                          : "text-text-primary hover:text-cascade-blue-glow"
                      )
                    }
                  >
                    {t('nav', item.key)}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="btn-primary w-full text-center flex justify-center py-4 text-lg"
              >
                {t('cta', 'startProject')}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
