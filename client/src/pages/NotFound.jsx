import { Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import { useLang } from '../contexts/LanguageContext';
import './NotFound.css';

export default function NotFound() {
  const { t } = useLang();

  return (
    <PageWrapper>
      <div className="notfound container">
        <h1 className="notfound__code">404</h1>
        <p className="notfound__msg">{t.notFound.msg}</p>
        <Link to="/" className="notfound__link">{t.notFound.back}</Link>
      </div>
    </PageWrapper>
  );
}
