import { motion } from "framer-motion";
import { AboutHero } from "@/components/about/AboutHero";
import { VisionMissionSection } from "@/components/about/VisionMissionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { FullTeamSection } from "@/components/about/FullTeamSection";
import { ProjectsSection } from "@/components/about/ProjectsSection";
import { CTABanner } from "@/components/ui/CTABanner";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col min-h-screen"
    >
      <AboutHero />
      <VisionMissionSection />
      <ValuesSection />
      <FullTeamSection />
      <ProjectsSection />
      <CTABanner
        title="Let's Build Something Extraordinary"
        description="Partner with CascadeTech to transform your vision into a world-class digital product."
      />
    </motion.div>
  );
};

export default About;