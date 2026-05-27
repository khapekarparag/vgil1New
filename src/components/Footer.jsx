import React from 'react';
import { Link } from 'react-router-dom';
import vgilLogo from '../assets/home/vgil-logo.png';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <Link to="/" className="footer-logo">
            <img src={vgilLogo} alt="VGIL Logo" />
          </Link>
          <div className="title h6 fw-semibold">
            Get connected <br /> with VGIL on social
          </div>
          <div className="text">Don’t miss our new updates!</div>
          <div className="tf-social-1 justify-content-center">
            <a href="https://x.com/Virtualvgipl" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
              Twitter / X
              <div className="social-item">
                <i className="icon icon-twitter-x"></i>
              </div>
            </a>
            <a href="https://www.facebook.com/VirtualGalaxyInfotechLtd" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
              Facebook
              <div className="social-item">
                <i className="icon icon-facebook-f"></i>
              </div>
            </a>
            <a href="https://www.instagram.com/virtualgalaxyinfotech/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
              Instagram
              <div className="social-item">
                <i className="icon icon-instagram"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/virtualgalaxy/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
              Linkedin
              <div className="social-item">
                <i className="icon icon-linkedin-in"></i>
              </div>
            </a>
            <a href="https://www.youtube.com/@virtualgalaxyinfotechpvtlt9340" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
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
    </footer>
  );
}

export default Footer;
