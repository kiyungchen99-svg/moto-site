import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/home/HeroSection';
import BikeGrid from '../components/home/BikeGrid';

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <BikeGrid />
    </PageWrapper>
  );
}
