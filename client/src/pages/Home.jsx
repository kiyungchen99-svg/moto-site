import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/home/HeroSection';
import BikeGrid from '../components/home/BikeGrid';
import SEO from '../components/ui/SEO';
import { useLang } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLang();

  return (
    <PageWrapper>
      <SEO
        description={t.home.seoDesc}
        path="/"
      />
      <HeroSection />
      <BikeGrid />
    </PageWrapper>
  );
}
