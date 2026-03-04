
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Projects() {
  const { t } = useLanguage();
  
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 animate-fade-in">
            {t('home', 'projectsTitle')}
          </h2>
          <p className="mt-4 text-lg text-slate-600 animate-fade-in [animation-delay: 45ms]">
            {t('home', 'projectsDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Startopia */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300 animate-slide-up [animation-delay: 90ms]">
            <div className="aspect-w-16 aspect-h-9 bg-slate-100">
              <div className="w-full h-full bg-gradient-to-r from-cascade-100 to-cascade-50 flex items-center justify-center p-8">
                <div className="text-4xl font-display font-bold text-cascade-800">Startopia</div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900">Startopia</h3>
              <p className="mt-3 text-slate-600">
                {t('body', 'startopiaFullDesc')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  {t('body', 'tagStartupGrowth')}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  {t('body', 'tagInvestorMatching')}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  {t('body', 'tagMentorship')}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  {t('body', 'tagFunding')}
                </span>
              </div>
              <div className="mt-8">
                <Link to="/projects" className="inline-flex items-center text-cascade-600 font-medium">
                  {t('home', 'projectsLearnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* TextYourBoss.ai */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300 animate-slide-up [animation-delay: 135ms]">
            <div className="aspect-w-16 aspect-h-9 bg-slate-100">
              <div className="w-full h-full bg-gradient-to-r from-cascade-50 to-cascade-100 flex items-center justify-center p-8">
                <div className="text-4xl font-display font-bold text-cascade-800">TextYourBoss.ai</div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900">TextYourBoss.ai</h3>
              <p className="mt-3 text-slate-600">
                {t('body', 'textYourBossFullDesc')}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  {t('body', 'tagAI')}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  {t('body', 'tagBusinessGuidance')}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  {t('body', 'tagDecisionSupport')}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  {t('body', 'tagStrategy')}
                </span>
              </div>
              <div className="mt-8">
                <Link to="/projects" className="inline-flex items-center text-cascade-600 font-medium">
                  {t('home', 'projectsLearnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button as={Link} to="/projects">
            {t('home', 'projectsViewAll')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
