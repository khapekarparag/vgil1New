import React from "react";
import { Link } from "react-router-dom";

import {
  Building2,
  Cpu,
  PhoneCall,
  Mail,
  MapPin,
  ArrowUp
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import vgilLogo from "../assets/home/vgil-logo.png";
import footerBg from "../assets/home/Bottom@2x.png";

import './Footer.css';

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

<footer
className="vg-footer"
style={{
backgroundImage:`url(${footerBg})`
}}
>

<div className="vg-footer-overlay">

<div className="container">

{/* ================================
BRAND
================================ */}

<div className="footer-brand">

<img
src={vgilLogo}
alt="VGIL"
/>

<h2>

Powering Intelligent Enterprises

<span>Since 1997</span>

</h2>

<p>

Transforming Banking, Enterprises and Government
through AI, Cyber Security and Digital Innovation.

</p>

<div className="footer-tags">

<span>Artificial Intelligence</span>

<span>Core Banking</span>

<span>Cyber Security</span>

<span>ERP Solutions</span>

<span>Enterprise Software</span>

</div>

</div>

{/* ========================= */}

<div className="footer-divider"></div>

{/* ========================= */}

<div className="row gy-5">

{/* COMPANY */}

<div className="col-lg-3 col-md-6">

<h5 className="footer-title">

<Building2 size={18}/>

Company

</h5>

<ul className="footer-links">

<li><Link to="/">Home</Link></li>

<li><Link to="/about">About</Link></li>

<li><Link to="/contact">Contact</Link></li>

<li><Link to="/ipo">IPO</Link></li>

<li><Link to="/ai">AI</Link></li>

</ul>

</div>

{/* PRODUCTS */}

<div className="col-lg-3 col-md-6">

<h5 className="footer-title">

<Cpu size={18}/>

Products

</h5>

<ul className="footer-links">

<li><Link to="/products/core-banking-solution">Core Banking</Link></li>

<li><Link to="/products/post-mortem-mgmt">E-Autopsy</Link></li>

<li><Link to="/products/end-to-end-cyber-security">Cyber Security</Link></li>

<li><Link to="/products/mis-solution">MIS Solution</Link></li>

</ul>

</div>

{/* CONTACT */}

<div className="col-lg-3 col-md-6">

<h5 className="footer-title">

<PhoneCall size={18}/>

Contact

</h5>

<div className="footer-contact">

<div>

<MapPin size={18}/>

<span>

Plot No.26,
Vivekanand Nagar,
Nagpur,
Maharashtra

</span>

</div>

<div>

<PhoneCall size={18}/>

<a href="tel:+916262686865">

+91 62626 86865

</a>

</div>

<div>

<Mail size={18}/>

<a href="mailto:info@vgipl.in">

info@vgipl.in

</a>

</div>

</div>

</div>

{/* FOLLOW */}

<div className="col-lg-3 col-md-6">

<h5 className="footer-title">

Follow Us

</h5>

<div className="footer-social">

  <a
    href="https://www.linkedin.com/company/virtualgalaxy/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://www.facebook.com/VirtualGalaxyInfotechLtd"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/virtualgalaxyinfotech/"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.youtube.com/@virtualgalaxyinfotechpvtlt9340"
    target="_blank"
    rel="noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>

  <a
    href="https://x.com/Virtualvgipl"
    target="_blank"
    rel="noreferrer"
    aria-label="X"
  >
    <FaXTwitter />
  </a>

</div>

</div>

</div>

      {/* ==========================================
          Footer Bottom
      ========================================== */}

      <div className="footer-divider"></div>

      <div className="footer-bottom text-center">

        <div className="footer-bottom-left ">
          © {new Date().getFullYear()} Virtual Galaxy Infotech Limited.
          All Rights Reserved.
        </div>

        <div className="footer-bottom-links ">

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms-and-conditions">
            Terms & Conditions
          </Link>

          <Link to="/cookie-policy">
            Cookie Policy
          </Link>

        </div>

        <button
          className="footer-top-btn  "
          onClick={scrollTop}
        >
          <span>Back to Top</span>

          <ArrowUp size={18} />
        </button>

      </div>

    </div>

  </div>

</footer>

  );
}

export default Footer;