import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/home/HeroSection';
import BikeGrid from '../components/home/BikeGrid';
import SEO from '../components/ui/SEO';

export default function Home() {
  return (
    <PageWrapper>
      <SEO
        description="五台義大利手工鋼管公路車的故事：Colnago Bititan、Colnago Master、Eddy Merckx MXL、MASI 3V Volumetrica、Pegoretti BLE。工藝、歷史與騎乘風格。"
        path="/"
      />
      <HeroSection />
      <BikeGrid />
    </PageWrapper>
  );
}
