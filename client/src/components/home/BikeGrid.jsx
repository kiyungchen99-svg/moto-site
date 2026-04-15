import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassCard from '../ui/GlassCard';
import NeonBadge from '../ui/NeonBadge';
import Loader from '../ui/Loader';
import { useMotorcycles } from '../../hooks/useMotorcycles';
import './BikeGrid.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  })
};

function BikeCard({ bike, index }) {
  const navigate = useNavigate();
  const cover = bike.photos?.find(p => p.isCover) || bike.photos?.[0];

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <GlassCard
        hoverable
        accentColor={bike.accentColor}
        className="bike-card"
        onClick={() => navigate(`/bikes/${bike.slug}`)}
      >
        <div className="bike-card__img-wrap">
          {cover ? (
            <img src={cover.url} alt={bike.name} className="bike-card__img" />
          ) : (
            <div className="bike-card__img-placeholder" style={{ background: `radial-gradient(circle, ${bike.accentColor}22 0%, transparent 70%)` }} />
          )}
        </div>
        <div className="bike-card__body">
          <div className="bike-card__meta">
            <span className="bike-card__year">{bike.year}</span>
            <NeonBadge color={bike.accentColor}>{bike.status}</NeonBadge>
          </div>
          <h2 className="bike-card__name">{bike.name}</h2>
          <p className="bike-card__tagline">{bike.tagline}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function BikeGrid() {
  const { data: bikes, isLoading, error } = useMotorcycles();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (isLoading) return <Loader />;
  if (error) return <p style={{ color: 'var(--neon-pink)', textAlign: 'center' }}>載入失敗</p>;

  return (
    <section className="bike-grid-section" ref={ref}>
      <div className="container">
        <h2 className="bike-grid-section__title">我的車庫</h2>
        {inView && (
          <div className="bike-grid">
            {bikes?.map((bike, i) => (
              <BikeCard key={bike._id} bike={bike} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
