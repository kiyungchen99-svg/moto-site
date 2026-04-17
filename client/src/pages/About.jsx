import PageWrapper from '../components/layout/PageWrapper';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/ui/SEO';
import './About.css';

export default function About() {
  return (
    <PageWrapper>
      <SEO
        title="關於我"
        description="義大利鋼管公路車收藏家 Vincent，迷戀每一條焊縫背後的工藝哲學。聯絡：kiyungchen99@gmail.com"
        path="/about"
      />
      <div className="about container">
        <h1 className="about__title">關於我</h1>
        <GlassCard className="about__card">
          <p className="about__bio">
            從第一道焊縫開始，我就知道這不只是造車——是在鋼管與火花之間尋找自己的語言。
            每一台鋼管車都是一段故事，從設計圖到路上奔馳，都是手工打造。
          </p>
          <a href="mailto:kiyungchen99@gmail.com" className="about__email">
            kiyungchen99@gmail.com
          </a>
        </GlassCard>
      </div>
    </PageWrapper>
  );
}
