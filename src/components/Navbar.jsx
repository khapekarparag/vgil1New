import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../data/menuData';
import vgilLogo from '../assets/home/vgil-logo.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderMegaMenu = (items, columns = 2, width = '550px') => (
    <ul className="sub-menu mega-menu-custom" style={{ 
      borderRadius: '24px', 
      padding: '25px', 
      boxShadow: '0 20px 50px rgba(0,0,0,0.1)', 
      border: '1px solid #f1f1f1',
      backgroundColor: '#ffffff',
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: '15px',
      width: width,
      left: '50%',
      transform: 'translateX(-50%)',
      top: '100%',
      marginTop: '15px'
    }}>
      {items.map((item, idx) => (
        <li key={idx} className="sub-menu-item" style={{ marginBottom: 0 }}>
          <Link to={item.link} style={{ 
            fontSize: '14px', 
            padding: '10px 12px', 
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            color: '#4b5563',
            transition: 'all 0.2s',
            fontWeight: '500'
          }}
          className="mega-item-link"
          >
            <div className="icon-box" style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#fff5f4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              overflow: 'hidden'
            }}>
              {item.logo ? (
                <img src={item.logo} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
              ) : (
                <i className={`icon icon-${item.icon}`} style={{ color: '#ff2d15', fontSize: '16px' }} />
              )}
            </div>
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={`tf-header header2 ${scrolled ? 'is-fixed is-small' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        padding: scrolled ? '12px 20px' : '20px 20px',
        transition: 'padding 0.3s ease',
        background: 'transparent',
      }}
    >
      <div
        className="header-inner"
        style={{
          width: '100%',
          maxWidth: scrolled ? '1200px' : '1350px',
          margin: '0 auto',
          padding: scrolled ? '8px 15px' : '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          borderRadius: '100px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid #f1f1f1',
          transition: 'all 0.3s ease'
        }}
      >

        {/* Left Section: Logo Only */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Link to="/" className="logo-site" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={vgilLogo} alt="Virtual Galaxy" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
          </Link>
        </div>

        {/* Center Section: Navigation Menu */}
        <div className="box-navigation d-none d-lg-flex" style={{ display: 'flex', justifyContent: 'center', padding: '0 10px' }}>
          <ul className="nav-menu-main" style={{ display: 'flex', gap: '28px', margin: 0, padding: 0, alignItems: 'center' }}>
            <li className="menu-item">
              <Link to="/about" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', transition: 'color 0.2s', textDecoration: 'none' }}>About Us</Link>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s', textDecoration: 'none' }}>
                Products
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              {renderMegaMenu(MENU_DATA.products, 2, '580px')}
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s', textDecoration: 'none' }}>
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              {renderMegaMenu(MENU_DATA.services, 2, '580px')}
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s', textDecoration: 'none' }}>
                Investors Info
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              {renderMegaMenu(MENU_DATA.investors, 2, '650px')}
            </li>
            <li className="menu-item">
              <Link to="#" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', transition: 'color 0.2s', textDecoration: 'none' }}>IPO</Link>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s', textDecoration: 'none' }}>
                Resource
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              {renderMegaMenu(MENU_DATA.resource, 1, '280px')}
            </li>
            <li className="menu-item">
              <Link to="/careers" className="item-link" style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap', transition: 'color 0.2s', textDecoration: 'none' }}>Careers</Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Button + Social Icons */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
          
          {/* Contact Us Button */}
          <Link
            to="/contact"
            className="d-none d-sm-flex"
            style={{
              backgroundColor: '#ff2d15',
              color: '#ffffff',
              borderRadius: '100px',
              padding: '8px 10px 8px 18px',
              fontSize: '13px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              border: 'none',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(255, 45, 21, 0.2)'
            }}
          >
            Contact Us
            <div style={{ backgroundColor: '#ffffff', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="icon icon-long-arrow-alt-up-solid" style={{ color: '#ff2d15', fontSize: '10px', transform: 'rotate(45deg)', fontWeight: '900' }} />
            </div>
          </Link>

          {/* Social Icons */}
          <div className="d-none d-xl-flex align-items-center" style={{ gap: '10px' }}>
            {[
              { icon: 'linkedin-in', link: 'https://www.linkedin.com/' },
              { icon: 'instagram', link: 'https://www.instagram.com/' },
              { icon: 'facebook-f', link: 'https://www.facebook.com/' },
              { icon: 'twitter-x', link: 'https://x.com/' },
              { icon: 'youtube', link: 'https://www.youtube.com/' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  backgroundColor: '#ff2d15',
                  color: '#ffffff',
                  borderRadius: '50%',
                  fontSize: '15px',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(255, 45, 21, 0.15)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 45, 21, 0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 45, 21, 0.15)'; }}
              >
                <i className={`icon icon-${social.icon}`}></i>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <a href="#" className="open-mb-menu mobile-menu d-lg-none d-flex" style={{ color: '#1f2937', fontSize: '26px', padding: '0 5px', textDecoration: 'none' }}>
            <i className="icon icon-grip-lines-solid"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
