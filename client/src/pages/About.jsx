import PageWrapper from '../components/layout/PageWrapper';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/ui/SEO';
import { useLang } from '../contexts/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLang();

  return (
    <PageWrapper>
      <SEO
        title={t.about.seoTitle}
        description={t.about.seoDesc}
        path="/about"
      />
      <div className="about container">
        <h1 className="about__title">{t.about.title}</h1>
        <GlassCard className="about__card">
          <p className="about__bio">{t.about.bio}</p>
          <a href="mailto:kiyungchen99@gmail.com" className="about__email">
            kiyungchen99@gmail.com
          </a>
        </GlassCard>
      </div>
    </PageWrapper>
  );
}
