import React from 'react';
import { Link } from 'react-router-dom';

// Import local images
import team1Image from '../../assets/home/ownwer-img/avinash-shende-clear-bg.png';
import team2Image from '../../assets/home/ownwer-img/sachin-pande-clear-bg.png';
import logoImage from '../../assets/home/ownwer-img/vg-logo-2.png';
import avinashSignature from '../../assets/home/signature.png';
import sachinSignature from '../../assets/home/sachin-signature.png';

function TeamSection() {
  return (
    <div className="section-team section-spacing" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Our Founder</div>
          <div className="heading-title text-dark effectFade fadeRotateX">
            The Minds Behind <br /> Virtual-Galaxy
          </div>
        </div>

        {/* Precise layout with responsive wrapping */}
        <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ maxWidth: '1050px', margin: '0 auto', gap: '40px 20px' }}>

          {/* Left Box - Avinash Shende */}
          <div style={{ flex: '1 1 300px', maxWidth: '420px', position: 'relative', zIndex: 1 }}>
            <div className="team-item h-100 effectFade fadeUp" style={{ background: '#f9f9f9ff', border: '1px solid #e5e7eb', borderRadius: '32px', padding: '40px 30px' }}>
              <div className="image" style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '24px', overflow: 'hidden' }}>
                <img src={team1Image} alt="Avinash Shende" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <img src={avinashSignature} alt="Mr. Avinash Shende Signature" style={{ height: '110px', objectFit: 'contain', margin: '15px 0' }} />
              <div className="sub text-body-1" style={{ color: '#ff4d00', fontWeight: '600', marginBottom: '10px' }}>Promoter, Chairman, Executive Director & CFO</div>
              <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                Avinash oversees operations and finances at Virtual Galaxy Infotech, balancing market needs with cost efficiency. He’s also a gardening enthusiast with a love for all things green.
              </p>
              <div className="tf-social justify-content-center">
                <a href="#" className="social-item">
                  <i className="icon icon-twitter-x"></i>
                </a>
                <a href="#" className="social-item">
                  <i className="icon icon-linkedin-in"></i>
                </a>
                <a href="#" className="social-item">
                  <i className="icon icon-github"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Center Logo - Precise Gap */}
          <div style={{ flex: '0 0 200px', maxWidth: '200px', position: 'relative', zIndex: 2 }} className="d-flex justify-content-center align-items-center effectFade fadeUp">
            <div className="center-logo-wrap" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <img src={logoImage} alt="Logo" className="img-fluid" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>
          </div>

          {/* Right Box - Sachin Pande */}
          <div style={{ flex: '1 1 300px', maxWidth: '420px', position: 'relative', zIndex: 1 }}>
            <div className="team-item h-100 effectFade fadeUp" style={{ background: '#f9f7f3ff', border: '1px solid #e5e7eb', borderRadius: '32px', padding: '40px 30px' }}>
              
              <div className="image" style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '24px', overflow: 'hidden' }}>
                <img src={team2Image} alt="Sachin Pande" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <img src={sachinSignature} alt="Mr. Sachin Pande Signature" style={{ height: '110px', objectFit: 'contain', margin: '15px 0' }} />
              <div className="sub text-body-1" style={{ color: '#ff4d00', fontWeight: '600', marginBottom: '10px' }}>Promoter, Managing Director & CTO</div>
              <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                Sachin drives technology and business development at Virtual Galaxy Infotech, leveraging the latest advancements. Off duty, he enjoys music with a cup of tea in hand.
              </p>
              <div className="tf-social justify-content-center">
                <a href="#" className="social-item">
                  <i className="icon icon-twitter-x"></i>
                </a>
                <a href="#" className="social-item">
                  <i className="icon icon-linkedin-in"></i>
                </a>
                <a href="#" className="social-item">
                  <i className="icon icon-github"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TeamSection;