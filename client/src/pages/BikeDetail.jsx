import { useParams } from 'react-router-dom';
import { useBike } from '../hooks/useBike';
import PageWrapper from '../components/layout/PageWrapper';
import NeonBadge from '../components/ui/NeonBadge';
import Loader from '../components/ui/Loader';
import GlassCard from '../components/ui/GlassCard';
import SEO from '../components/ui/SEO';
import { useLang } from '../contexts/LanguageContext';
import './BikeDetail.css';

export default function BikeDetail() {
  const { slug } = useParams();
  const { data: bike, isLoading, error } = useBike(slug);
  const { t } = useLang();

  if (isLoading) return <Loader />;
  if (error || !bike) return <p style={{ color: 'var(--neon-pink)', textAlign: 'center', paddingTop: '120px' }}>{t.bikeDetail.notFound}</p>;

  const cover = bike.photos?.find(p => p.isCover) || bike.photos?.[0];
  const otherPhotos = bike.photos?.filter(p => !p.isCover) || [];

  const coverUrl = cover ? `https://moto-site-production.up.railway.app${cover.url}` : undefined;

  return (
    <PageWrapper>
      <SEO
        title={bike.name}
        description={`${bike.tagline} — ${bike.ridingStyle?.description?.slice(0, 100) || t.bikeDetail.seoSuffix}...`}
        image={coverUrl}
        path={`/bikes/${bike.slug}`}
      />
      <div style={{ '--bike-accent': bike.accentColor }}>
        {/* Hero */}
        <div className="bike-detail__hero">
          {cover && <img src={cover.url} alt={bike.name} className="bike-detail__hero-img" />}
          <div className="bike-detail__hero-overlay" />
          <div className="container bike-detail__hero-content">
            <NeonBadge color={bike.accentColor}>{bike.status}</NeonBadge>
            <h1 className="bike-detail__title">{bike.name}</h1>
            <p className="bike-detail__tagline">{bike.tagline}</p>
          </div>
        </div>

        <div className="container bike-detail__body">
          {/* Photo gallery */}
          {otherPhotos.length > 0 && (
            <section className="bike-detail__section">
              <h2 className="bike-detail__section-title">{t.bikeDetail.gallery}</h2>
              <div className="bike-detail__gallery">
                {otherPhotos.map((p, i) => (
                  <img key={i} src={p.url} alt={p.caption || ''} className="bike-detail__gallery-img" />
                ))}
              </div>
            </section>
          )}

          {/* Specs */}
          {Object.values(bike.specs || {}).some(arr => arr.length > 0) && (
            <section className="bike-detail__section">
              <h2 className="bike-detail__section-title">{t.bikeDetail.specs}</h2>
              <div className="bike-detail__specs">
                {Object.entries(bike.specs).map(([cat, items]) =>
                  items.length > 0 && (
                    <GlassCard key={cat} accentColor={bike.accentColor} className="bike-detail__spec-group">
                      <h3 className="spec-group__cat">{cat}</h3>
                      <table className="spec-table">
                        <tbody>
                          {items.map((item, i) => (
                            <tr key={i} className="spec-table__row">
                              <td className="spec-table__label">{item.label}</td>
                              <td className="spec-table__value">{item.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </GlassCard>
                  )
                )}
              </div>
            </section>
          )}

          {/* Build Timeline */}
          {bike.buildTimeline?.length > 0 && (
            <section className="bike-detail__section">
              <h2 className="bike-detail__section-title">{t.bikeDetail.buildTimeline}</h2>
              <div className="bike-detail__timeline">
                {bike.buildTimeline.map((event, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-item__dot" style={{ background: bike.accentColor }} />
                    <div className="timeline-item__content">
                      <span className="timeline-item__date">{event.date}</span>
                      <h3 className="timeline-item__milestone">{event.milestone}</h3>
                      <p className="timeline-item__desc">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Unique Features */}
          {bike.uniqueFeatures?.length > 0 && (
            <section className="bike-detail__section">
              <h2 className="bike-detail__section-title">{t.bikeDetail.highlights}</h2>
              <div className="bike-detail__features">
                {bike.uniqueFeatures.map((f, i) => (
                  <GlassCard key={i} accentColor={bike.accentColor} className="feature-card">
                    <span className="feature-card__icon">{f.iconEmoji}</span>
                    <h3 className="feature-card__title">{f.title}</h3>
                    <p className="feature-card__desc">{f.description}</p>
                  </GlassCard>
                ))}
              </div>
            </section>
          )}

          {/* Riding Style */}
          {bike.ridingStyle?.description && (
            <section className="bike-detail__section">
              <h2 className="bike-detail__section-title">{t.bikeDetail.ridingStyle}</h2>
              <GlassCard accentColor={bike.accentColor} className="bike-detail__riding">
                <div className="riding__terrain">
                  {bike.ridingStyle.terrain?.map((t, i) => (
                    <NeonBadge key={i} color={bike.accentColor}>{t}</NeonBadge>
                  ))}
                </div>
                {bike.ridingStyle.rideType && (
                  <p className="riding__type">{bike.ridingStyle.rideType}</p>
                )}
                <p className="riding__desc">{bike.ridingStyle.description}</p>
              </GlassCard>
            </section>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
