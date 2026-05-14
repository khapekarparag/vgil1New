import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../data/menuData';

function MobileMenu() {
  return (
    <div className="offcanvas-menu">
      <div className="offcanvas-content">
        <div className="container h-100">
          <div className="offcanvas-content_wrapin">
            <div className="canvas_head">
              <Link to="/" className="logo-site">
                <i className="icon icon-davies-logo"></i>
              </Link>
              <div className="btn-mobile-menu close-mb-menu text-caption link">
                <i className="icon icon-close"></i>
                CLOSE
              </div>
            </div>
            <div className="canvas_center">
              <ul className="nav-ul-mb" id="mobile-menu">
                <li>
                  <div className="item">
                    <Link to="/" className="mb-menu-link text-display-1">
                      <span className="text">Home</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <Link to="/about" className="mb-menu-link text-display-1">
                      <span className="text">About Us</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-products" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                        aria-expanded="false" aria-controls="dropdown-menu-products">
                        <span className="text">Products</span>
                      </a>
                      <div id="dropdown-menu-products" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          {MENU_DATA.products.map((item, idx) => (
                            <li key={idx}><Link to={item.link} className="sub-nav-link text-white">{item.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-services" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                        aria-expanded="false" aria-controls="dropdown-menu-services">
                        <span className="text">Services</span>
                      </a>
                      <div id="dropdown-menu-services" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          {MENU_DATA.services.map((item, idx) => (
                            <li key={idx}><Link to={item.link} className="sub-nav-link text-white">{item.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-investors" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                        aria-expanded="false" aria-controls="dropdown-menu-investors">
                        <span className="text">Investors Info</span>
                      </a>
                      <div id="dropdown-menu-investors" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          {MENU_DATA.investors.map((item, idx) => (
                            <li key={idx}><Link to={item.link} className="sub-nav-link text-white">{item.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <Link to="/ipo" className="mb-menu-link text-display-1">
                      <span className="text">IPO</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="has-sub-menu">
                      <a href="#dropdown-menu-resource" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                        aria-expanded="false" aria-controls="dropdown-menu-resource">
                        <span className="text">Resource</span>
                      </a>
                      <div id="dropdown-menu-resource" className="collapse" data-bs-parent="#mobile-menu">
                        <ul className="sub-nav-menu">
                          {MENU_DATA.resource.map((item, idx) => (
                            <li key={idx}><Link to={item.link} className="sub-nav-link text-white">{item.name}</Link></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <Link to="/careers" className="mb-menu-link text-display-1">
                      <span className="text">Careers</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <Link to="/contact" className="mb-menu-link text-display-1">
                      <span className="text">Contact</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="canvas_foot">
              <div className="left">
                <a href="mailto:info@vgil.com" className="text-caption text-neutral-200">info@vgil.com</a>
                <p className="text-caption text-neutral-200">
                  CUP <span className="clock"></span>
                </p>
              </div>
              <div className="right">
                <a href="https://x.com/Virtualvgipl" target="_blank" rel="noreferrer" className="tf-link-icon text-caption text-neutral-200">
                  <i className="icon icon-arrow-top-right"></i>
                  TWITTER (X)
                </a>
                <a href="https://www.instagram.com/virtualgalaxyinfotech/" target="_blank" rel="noreferrer" className="tf-link-icon text-caption text-neutral-200">
                  <i className="icon icon-arrow-top-right"></i>
                  INSTAGRAM
                </a>
                <a href="https://www.linkedin.com/company/virtualgalaxy/" target="_blank" rel="noreferrer" className="tf-link-icon text-caption text-neutral-200">
                  <i className="icon icon-arrow-top-right"></i>
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
