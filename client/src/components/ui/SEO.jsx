import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://moto-site-production.up.railway.app';

export default function SEO({ title, description, image, path = '' }) {
  const fullTitle = title ? `${title} — Steel & Soul` : 'Steel & Soul — 義大利鋼管公路車收藏';
  const fullUrl   = `${BASE_URL}${path}`;
  const ogImage   = image || `${BASE_URL}/bikes/Pegoretti%20BLE/IMG_0923.JPG`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={fullUrl} />
      <meta property="og:image"       content={ogImage} />

      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  );
}
