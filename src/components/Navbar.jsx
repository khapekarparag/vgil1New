import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import vgilLogo from '../assets/home/vgil-logo.png';

// Import raw data for rich mega-menu content
import { PRODUCTS_DATA } from '../data/productsData';
import { SERVICES_DATA } from '../data/servicesData';
import { INVESTORS_DATA } from '../data/investorsData';
import { RESOURCE_DATA } from '../data/resourceData';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(null); // 'products', 'services', etc.
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setActiveMega(null);
    setActiveItem(null);
  }, [location.pathname]);

  // Data normalization for mega menu
  const getMegaData = (type) => {
    switch (type) {
      case 'products':
        return PRODUCTS_DATA.map(p => ({
          id: p.slug,
          title: p.title,
          description: p.shortDescription,
          image: p.heroImage,
          logo: p.logo,
          link: `/products/${p.slug}`,
          icon: p.icon || 'box',
          imageFit: 'contain'
        }));
      case 'services':
        return SERVICES_DATA.map(s => ({
          id: s.slug,
          title: s.title,
          description: s.description,
          image: s.heroImage,
          logo: s.logo,
          link: `/services/${s.slug}`,
          icon: s.icon || 'cog',
          imageFit: 'cover'
        }));
      case 'investors':
        return INVESTORS_DATA.map(i => ({
          id: i.slug,
          title: i.title,
          description: i.desc,
          image: i.logo, // Fallback to logo if no hero
          logo: i.logo,
          link: `/investors/${i.slug}`,
          icon: i.icon || 'chart-line',
          imageFit: 'contain'
        }));
      case 'resource':
        return RESOURCE_DATA.map(r => ({
          id: r.slug,
          title: r.title,
          description: r.description || r.shortDescription,
          image: r.heroImage,
          logo: r.logo,
          link: `/resource/${r.slug}`,
          icon: r.icon || 'file-alt',
          imageFit: 'cover'
        }));
      default:
        return [];
    }
  };

  const handleMenuHover = (type) => {
    setActiveMega(type);
    const data = getMegaData(type);
    if (data.length > 0) setActiveItem(data[0]);
  };

  const renderMegaMenu = (type) => {
    const data = getMegaData(type);
    if (!data.length) return null;

    return (
      <div className={styles.megaMenuWrapper}>
        <div className={styles.megaMenuContent} onMouseLeave={() => {}}>
          {/* Left Sidebar */}
          <div className={styles.megaSidebar}>
            <ul className={styles.categoryList}>
              {data.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className={`${styles.categoryItem} ${activeItem?.id === item.id ? styles.categoryActive : ''}`}
                    onMouseEnter={() => setActiveItem(item)}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className={styles.categoryIcon}>
                      <i className={`icon icon-${item.icon}`}></i>
                    </div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Preview Card */}
          <div className={styles.megaPreview}>
            {activeItem && (
              <Link to={activeItem.link} className={styles.previewCard} style={{ textDecoration: 'none' }}>
                <div 
                  className={styles.previewImageWrapper} 
                  style={activeItem.imageFit === 'cover' ? { padding: '0px', background: 'transparent' } : {}}
                >
                  {activeItem.image ? (
                    <img 
                      src={activeItem.image} 
                      alt={activeItem.title} 
                      className={styles.previewImage} 
                      style={{ objectFit: activeItem.imageFit || 'contain' }}
                    />
                  ) : activeItem.logo ? (
                    <img src={activeItem.logo} alt={activeItem.title} className={styles.previewLogo} />
                  ) : (
                    <div className={styles.imagePlaceholder}>No Preview</div>
                  )}
                </div>
                <div className={styles.previewInfo}>
                  <h3 className={styles.previewTitle}>{activeItem.title}</h3>
                  <p className={styles.previewDesc}>{activeItem.description}</p>
                </div>
                <div className={styles.previewBtn}>
                  Learn More
                  <i className="icon icon-long-arrow-alt-right-solid"></i>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.navContainer}>
        {/* Left: Logo */}
        <div className={styles.logoSection}>
          <Link to="/" className={styles.logoLink}>
            <img src={vgilLogo} alt="VGIL Logo" className={styles.logoImg} />
          </Link>
        </div>

        {/* Center: Menu */}
        <div className={styles.menuSection}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link to="/about" className={styles.menuLink}>About Us</Link>
            </li>
            <li 
              className={styles.menuItem} 
              onMouseEnter={() => handleMenuHover('products')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <span className={styles.menuLink}>
                Products
                <svg className={styles.dropdownArrow} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {activeMega === 'products' && renderMegaMenu('products')}
            </li>
            <li 
              className={styles.menuItem}
              onMouseEnter={() => handleMenuHover('services')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <span className={styles.menuLink}>
                Services
                <svg className={styles.dropdownArrow} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {activeMega === 'services' && renderMegaMenu('services')}
            </li>
            <li 
              className={styles.menuItem}
              onMouseEnter={() => handleMenuHover('investors')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <span className={styles.menuLink}>
                Investors
                <svg className={styles.dropdownArrow} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {activeMega === 'investors' && renderMegaMenu('investors')}
            </li>
            <li className={styles.menuItem}>
              <Link to="/ipo" className={styles.menuLink}>IPO</Link>
            </li>
            <li 
              className={styles.menuItem}
              onMouseEnter={() => handleMenuHover('resource')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <span className={styles.menuLink}>
                Resources
                <svg className={styles.dropdownArrow} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {activeMega === 'resource' && renderMegaMenu('resource')}
            </li>
            <li className={styles.menuItem}>
              <Link to="/careers" className={styles.menuLink}>Careers</Link>
            </li>
          </ul>
        </div>

        {/* Right: Actions */}
        <div className={styles.actionSection}>
          <div className={styles.socialList}>
            {[
              { icon: 'linkedin-in', link: 'https://linkedin.com' },
              { icon: 'instagram', link: 'https://instagram.com' },
              { icon: 'facebook-f', link: 'https://facebook.com' },
              { icon: 'twitter-x', link: 'https://x.com' },
              { icon: 'youtube', link: 'https://youtube.com' }
            ].map((s, i) => (
              <a key={i} href={s.link} target="_blank" rel="noreferrer" className={styles.socialIcon}>
                <i className={`icon icon-${s.icon}`}></i>
              </a>
            ))}
          </div>

          <Link to="/contact" className={styles.contactBtn}>
            Contact Us
            <div className={styles.arrowCircle}>
              <i className="icon icon-long-arrow-alt-up-solid" style={{ transform: 'rotate(45deg)' }}></i>
            </div>
          </Link>

          {/* Mobile Toggle */}
          <div className={`${styles.mobileToggle} open-mb-menu`}>
            <i className="icon icon-grip-lines-solid"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

