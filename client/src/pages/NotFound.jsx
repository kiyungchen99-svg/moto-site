import { Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import './NotFound.css';

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="notfound container">
        <h1 className="notfound__code">404</h1>
        <p className="notfound__msg">這頁不存在</p>
        <Link to="/" className="notfound__link">回首頁</Link>
      </div>
    </PageWrapper>
  );
}
