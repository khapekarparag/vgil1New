import React from 'react';
import { Link } from 'react-router-dom';
import imisImg from '../../assets/home/imis.png';
import digitalIdentityImg from '../../assets/home/digital-identity.png';
import eBankerImg from '../../assets/Products-img/e-banker.png';


function AboutHero() {
  return (
    <div className="section-hero v1">
      <div className="hero-image">
      </div>
      <div className="container">
        <div className="content-wrap text-center">
          <div className="title text-display-2 effectFade fadeRotateX">
            <span className="title1 fw-semibold text-gradient-1">Virtual Galaxy Empowering</span>
            <br />
            <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
              <span className="fw-semibold text-gradient-1">Industries</span>
              <div className="title-icon">
                <div className="box"></div>
                <div className="title-icon-wrap">
                  <div className="img-1 img-transform-3" style={{ backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: '1px', width: 'clamp(50px, 8vw, 70px)', height: 'clamp(50px, 8vw, 70px)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-25deg)' }}>
                    <img src={imisImg} alt="IMIS" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="img-2 img-transform-3" style={{ backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: '1px', width: 'clamp(50px, 8vw, 70px)', height: 'clamp(50px, 8vw, 70px)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(15deg)' }}>
                    <img src={digitalIdentityImg} alt="Digital Identity" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="img-3 img-transform-3" style={{ backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: '1px', width: 'clamp(50px, 8vw, 70px)', height: 'clamp(50px, 8vw, 70px)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-10deg)' }}>
                    <img src={eBankerImg} alt="Core Banking" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text effectFade fadeUp">
            We build human-centered AI solutions that transform workflows, enhance decision-making, <br /> and accelerate innovation across diverse global industries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
