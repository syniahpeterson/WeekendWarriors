import "../styles/Footer.css";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Footer: Displays copyright, contact email, and animated scroll-to-top button*/}
      <p>© {new Date().getFullYear()} Weekend Warriors. All Rights Reserved.</p>
      {/* Copyright notice */}
      <a className="footer__email" href="mailto:weekendwarriors44@gmail.com">
        weekendwarriors44@gmail.com
      </a>
      {/* Contact email */}
      <button
        className="footer__to-top color-cycle"
        onClick={scrollToTop}
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>
      {/* Animated scroll-to-top button */}
    </footer>
  );
};

export default Footer;
