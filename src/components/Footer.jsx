import React from 'react';
import { Link } from 'react-router-dom';
import vgilLogo from '../assets/home/vgil-logo.png';
import footerBg from '../assets/home/Bottom@2x.png';

function Footer() {
  return (
    <footer style={{ 
      backgroundImage: `url(${footerBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Desktop Footer (Hidden on mobile) */}
      <div className="footer-desktop-only container">
        <div className="footer-content">
          <Link to="/" className="footer-logo">
            <img src={vgilLogo} alt="VGIL Logo" />
          </Link>
          <div className="title h6 fw-semibold">
            Get connected <br /> with VGIL on social
          </div>
          <div className="text">Don’t miss our new updates!</div>
          <div className="tf-social-1 justify-content-center">
            <a href="https://x.com/Virtualvgipl" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold brand-x">
              Twitter / X
              <div className="social-item">
                <i className="icon icon-twitter-x"></i>
              </div>
            </a>
            <a href="https://www.facebook.com/VirtualGalaxyInfotechLtd" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold brand-facebook">
              Facebook
              <div className="social-item">
                <i className="icon icon-facebook-f"></i>
              </div>
            </a>
            <a href="https://www.instagram.com/virtualgalaxyinfotech/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold brand-instagram">
              Instagram
              <div className="social-item">
                <i className="icon icon-instagram"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/virtualgalaxy/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold brand-linkedin">
              Linkedin
              <div className="social-item">
                <i className="icon icon-linkedin-in"></i>
              </div>
            </a>
            <a href="https://www.youtube.com/@virtualgalaxyinfotechpvtlt9340" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold brand-youtube">
              Youtube
              <div className="social-item">
                <i className="icon icon-youtube"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-links d-flex gap-24 align-items-center flex-wrap justify-content-center">
            <li>
              <Link to="/" className="fw-semibold link-underline link1">Home</Link>
            </li>
            <li>
              <Link to="/about" className="fw-semibold link-underline link1">About</Link>
            </li>
            <li>
              <Link to="#main-nav" className="fw-semibold link-underline link1">Investor Info</Link>
            </li>
            <li>
              <Link to="/ipo" className="fw-semibold link-underline link1">IPO</Link>
            </li>
            <li>
              <Link to="/contact" className="fw-semibold link-underline link1">Contact</Link>
            </li>
          </ul>
          <p className="text-secondary coppy-rights text-center">© 2026 Virtual Galaxy Infotech Limited. All Rights Reserved.</p>
          <a href="#" className="action-go-top d-flex gap-8 align-items-center justify-content-end link1">
            <span className="fw-semibold">Back to top</span>
            <i className="icon icon-long-arrow-alt-up-solid fs-20"></i>
          </a>
        </div>
      </div>

      {/* Mobile Footer (Visible on mobile <= 768px) */}
      <div className="footer-mobile-only">
        <div className="mobile-footer-container">
          <div className="mobile-footer-logo">
            <Link to="/">
              <img src={vgilLogo} alt="VGIL Logo" />
            </Link>
          </div>

          <div className="mobile-follow-section">
            <span className="mobile-follow-title">FOLLOW US</span>
            <div className="mobile-social-icons">
              <a href="https://www.facebook.com/VirtualGalaxyInfotechLtd" target="_blank" rel="noreferrer" className="mobile-social-item brand-facebook">
                <i className="icon icon-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/virtualgalaxyinfotech/" target="_blank" rel="noreferrer" className="mobile-social-item brand-instagram">
                <i className="icon icon-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@virtualgalaxyinfotechpvtlt9340" target="_blank" rel="noreferrer" className="mobile-social-item brand-youtube">
                <i className="icon icon-youtube"></i>
              </a>
              <a href="https://www.linkedin.com/company/virtualgalaxy/" target="_blank" rel="noreferrer" className="mobile-social-item brand-linkedin">
                <i className="icon icon-linkedin-in"></i>
              </a>
              <a href="https://x.com/Virtualvgipl" target="_blank" rel="noreferrer" className="mobile-social-item brand-x">
                <i className="icon icon-twitter-x"></i>
              </a>
            </div>
          </div>

          <div className="mobile-footer-columns">
            <div className="mobile-footer-col">
              <h5 className="mobile-col-title">CONTACT US</h5>
              <div className="mobile-contact-info">
                <div className="mobile-contact-field">
                  <span className="field-label">Address</span>
                  <span className="field-value">
                    Plot No. 26, Vivekanand Nagar,<br />
                    Nagpur, Maharashtra,<br />
                    India - 440015
                  </span>
                </div>
                <div className="mobile-contact-field">
                  <span className="field-label">Phone</span>
                  <span className="field-value">
                    <a href="tel:+916262686865">+91 62626 86865</a>
                  </span>
                </div>
                <div className="mobile-contact-field">
                  <span className="field-label">Email</span>
                  <span className="field-value">
                    <a href="mailto:info@vgipl.in">info@vgipl.in</a>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mobile-footer-col">
              <h5 className="mobile-col-title">NAVIGATE</h5>
              <ul className="mobile-nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/investors/board-and-management">Investors</Link></li>
                <li><Link to="/ipo">IPO</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="mobile-footer-bottom">
            <div className="mobile-copyright">
              © 2026 Virtual Galaxy Infotech Limited. All Rights Reserved.
            </div>
            <a href="#" className="mobile-back-to-top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <span>Back To Top</span>
              <i className="icon icon-long-arrow-alt-up-solid"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
