import { motion } from "framer-motion";
import { TeamHero } from "@/components/team/TeamHero";
import { ExecutiveCard } from "@/components/team/ExecutiveCard";
import { CoreValues } from "@/components/team/CoreValues";
import { CTABanner } from "@/components/ui/CTABanner";
import { useLanguage } from "@/contexts/LanguageContext";

const executives = [
  {
    id: 1,
    name: "Akshay Kumar Ankalagi",
    role: "Chief Executive Officer",
    imageAbbr: "AK",
    bioKey: "akshayBio",
    email: "akshay@cascadetech.com",
    linkedin: "https://www.linkedin.com/in/akshaykumar-ankalagi-10b37933a",
  },
  {
    id: 2,
    name: "Manoj Relekar",
    role: "Chief Operating Officer",
    imageAbbr: "MR",
    bioKey: "manojBio",
    email: "manoj@cascadetech.com",
    linkedin: "https://www.linkedin.com/in/manojrelekar3/",
  },
  {
    id: 3,
    name: "Vaibhava BG",
    role: "Chief Technology Officer",
    imageAbbr: "VB",
    bioKey: "vaibhavaBio",
    email: "vaibhava@cascadetech.com",
    linkedin: "https://www.linkedin.com/in/vaibhav-b-g-284b63346",
  },
];

const Team = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col min-h-screen"
    >
      <TeamHero />

      <section className="section-padding bg-cascade-void relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          {executives.map((exec, idx) => (
            <ExecutiveCard
              key={exec.id}
              name={exec.name}
              role={exec.role}
              bio={t('teamPage', exec.bioKey as any)}
              imageAbbr={exec.imageAbbr}
              email={exec.email}
              linkedin={exec.linkedin}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </section>

      <CoreValues />

      <CTABanner
        title={t('teamPage', 'ctaBannerTitle')}
        description={t('teamPage', 'ctaBannerDesc')}
      />
    </motion.div>
  );
};

export default Team;