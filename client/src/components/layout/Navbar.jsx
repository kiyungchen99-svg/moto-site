import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '../../contexts/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, lang, toggle } = useLang();

  const links = [
    { to: '/',          label: t.nav.home },
    { to: '/about',     label: t.nav.about },
    { to: '/guestbook', label: t.nav.guestbook },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">Steel &amp; Soul</Link>
        <ul className="navbar__links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={`navbar__link ${location.pathname === to ? 'navbar__link--active' : ''}`}>
                {label}
                {location.pathname === to && (
                  <motion.div className="navbar__underline" layoutId="nav-underline" />
                )}
              </Link>
            </li>
          ))}
          <li>
            <button className="navbar__lang-toggle" onClick={toggle} aria-label="Switch language">
              {lang === 'zh' ? 'EN' : '中'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
