import PageWrapper from '../components/layout/PageWrapper';
import GlassCard from '../components/ui/GlassCard';
import './About.css';

export default function About() {
  return (
    <PageWrapper>
      <div className="about container">
        <h1 className="about__title">關於我</h1>
        <GlassCard className="about__card">
          <p className="about__bio">
            從第一道焊縫開始，我就知道這不只是造車——是在鋼管與火花之間尋找自己的語言。
            每一台鋼管車都是一段故事，從設計圖到路上奔馳，都是手工打造。
          </p>
        </GlassCard>
      </div>
    </PageWrapper>
  );
}
