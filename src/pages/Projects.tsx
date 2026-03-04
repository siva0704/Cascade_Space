import { motion } from "framer-motion";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ComingSoon } from "@/components/projects/ComingSoon";
import { CTABanner } from "@/components/ui/CTABanner";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col min-h-screen"
    >
      <ProjectsHero />

      <FeaturedProject
        title={t('projectsPage', 'startopiaTitle')}
        description={t('projectsPage', 'startopiaDesc')}
        tags={["React", "Node.js", "PostgreSQL", "AWS"]}
        features={[
          t('projectsPage', 'startopiaFeat1'),
          t('projectsPage', 'startopiaFeat2'),
          t('projectsPage', 'startopiaFeat3'),
          t('projectsPage', 'startopiaFeat4')
        ]}
        imagePlaceholderText={t('projectsPage', 'startopiaPreview')}
        accentColor="border-cascade-cyan bg-cascade-cyan/10 text-cascade-cyan"
        isReversed={false}
      />

      <FeaturedProject
        title={t('projectsPage', 'textYourBossTitle')}
        description={t('projectsPage', 'textYourBossDesc')}
        tags={["Python", "OpenAI API", "React", "Next.js"]}
        features={[
          t('projectsPage', 'textYourBossFeat1'),
          t('projectsPage', 'textYourBossFeat2'),
          t('projectsPage', 'textYourBossFeat3'),
          t('projectsPage', 'textYourBossFeat4')
        ]}
        imagePlaceholderText={t('projectsPage', 'textYourBossPreview')}
        accentColor="border-cascade-violet bg-cascade-violet/10 text-cascade-violet"
        isReversed={true}
      />

      <ComingSoon />

      <CTABanner
        title={t('projectsPage', 'ctaBannerTitle')}
        description={t('projectsPage', 'ctaBannerDesc')}
      />
    </motion.div>
  );
};

export default Projects;
