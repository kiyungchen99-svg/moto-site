import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__text">Steel &amp; Soul &copy; {new Date().getFullYear()}</span>
        <a href="mailto:kiyungchen99@gmail.com" className="footer__email">
          kiyungchen99@gmail.com
        </a>
      </div>
    </footer>
  );
}
