import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-image">
        <img className="effectFade fadeUp" src="/assets/images/logo/logo-footer.png" alt="" />
      </div>
      <div className="container">
        <div className="footer-content">
          <Link to="/" className="footer-logo">
            <img src="/assets/images/logo/logo-2.svg" alt="" />
          </Link>
          <div className="title h6 fw-semibold">
            Get connected <br /> with Aigocy on social
          </div>
          <div className="text">Don’t miss our new updates!</div>
          <div className="tf-social-1 justify-content-center">
            <a href="https://x.com/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
              Twitter / X
              <div className="social-item">
                <i className="icon icon-twitter-x"></i>
              </div>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
              Facebook
              <div className="social-item">
                <i className="icon icon-facebook-f"></i>
              </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
              Instagram
              <div className="social-item">
                <i className="icon icon-instagram"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
              Linkedin
              <div className="social-item">
                <i className="icon icon-linkedin-in"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-links d-flex gap-24 align-items-center flex-wrap justify-content-center">
            <li>
              <Link to="/about" className="fw-semibold link-underline link1">About</Link>
            </li>
            <li>
              <Link to="#" className="fw-semibold link-underline link1">Products</Link>
            </li>
            <li>
              <Link to="/services" className="fw-semibold link-underline link1">Services</Link>
            </li>
            <li>
              <Link to="#" className="fw-semibold link-underline link1">Investor Info</Link>
            </li>
            <li>
              <Link to="#" className="fw-semibold link-underline link1">IPO</Link>
            </li>
            <li>
              <Link to="#" className="fw-semibold link-underline link1">Careers</Link>
            </li>
            <li>
              <Link to="/works" className="fw-semibold link-underline link1">Works</Link>
            </li>
            <li>
              <Link to="/contact" className="fw-semibold link-underline link1">Contact</Link>
            </li>
          </ul>
          <p className="text-secondary coppy-rights text-center">© 2026 Aigocy. All Rights Reserved.</p>
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
