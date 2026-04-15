import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__text">Steel &amp; Soul &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
