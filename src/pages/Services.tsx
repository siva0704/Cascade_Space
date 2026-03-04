import { motion } from "framer-motion";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceCategory } from "@/components/services/ServiceCategory";
import { EngagementTimeline } from "@/components/services/EngagementTimeline";
import { AllServicesGrid } from "@/components/services/AllServicesGrid";
import { CTABanner } from "@/components/ui/CTABanner";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col min-h-screen"
    >
      <ServicesHero />

      <div id="service-categories">
        <ServiceCategory
          id="digital-transformation"
          title={t('services', 'catDTTitle')}
          description={t('services', 'catDTDesc')}
          features={[
            t('services', 'catDTF1'),
            t('services', 'catDTF2'),
            t('services', 'catDTF3'),
            t('services', 'catDTF4')
          ]}
          isReversed={false}
        />

        <ServiceCategory
          id="ai-solutions"
          title={t('services', 'catAITitle')}
          description={t('services', 'catAIDesc')}
          features={[
            t('services', 'catAIF1'),
            t('services', 'catAIF2'),
            t('services', 'catAIF3'),
            t('services', 'catAIF4')
          ]}
          isReversed={true}
        />

        <ServiceCategory
          id="design-branding"
          title={t('services', 'catDBTitle')}
          description={t('services', 'catDBDesc')}
          features={[
            t('services', 'catDBF1'),
            t('services', 'catDBF2'),
            t('services', 'catDBF3'),
            t('services', 'catDBF4')
          ]}
          isReversed={false}
        />
      </div>

      <AllServicesGrid />
      <EngagementTimeline />

      <CTABanner
        title={t('services', 'ctaBannerTitle')}
        description={t('services', 'ctaBannerDesc')}
      />
    </motion.div>
  );
};

export default Services;