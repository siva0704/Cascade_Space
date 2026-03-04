import { motion } from "framer-motion";
import { HeroSection } from "@/components/home/HeroSection";
import { ProofOfWork } from "@/components/home/ProofOfWork";
import { HowWeWork } from "@/components/home/HowWeWork";
import { FeatureCards } from "@/components/home/FeatureCards";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TechBridge } from "@/components/home/TechBridge";
import { HomeContact } from "@/components/home/HomeContact";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col min-h-screen"
    >
      <HeroSection />
      <ProofOfWork />
      <HowWeWork />
      <FeatureCards />
      <ServicesPreview />
      <TechBridge />
      <HomeContact />
    </motion.div>
  );
};

export default Index;
