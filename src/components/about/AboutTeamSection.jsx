import React from 'react';
import team1Image from '../../assets/home/ownwer-img/avinash-shende-clear-bg.png';
import team2Image from '../../assets/home/ownwer-img/sachin-pande-clear-bg.png';
import logoImage from '../../assets/home/ownwer-img/vg-logo-2.png';
import avinashSignature from '../../assets/home/signature.png';
import sachinSignature from '../../assets/home/sachin-signature.png';

// Import VGIL Team Members
import alhadImg from '../../assets/home/ownwer-img/Alhad_Hardas.jpg';
import anilImg from '../../assets/home/ownwer-img/Anil_Katwale.jpg';
import bharatImg from '../../assets/home/ownwer-img/bharat-zade.jpg';
import harshjitImg from '../../assets/home/ownwer-img/harshjit-deshmukh.jpg';
import ninadImg from '../../assets/home/ownwer-img/ninad-mairal.jpg';
import nitendraImg from '../../assets/home/ownwer-img/Nitendra_Bisen.jpg';
import sachinBImg from '../../assets/home/ownwer-img/sachin_burghate.jpg';
import satishImg from '../../assets/home/ownwer-img/Satish_Kukde.jpg';

function AboutTeamSection() {
  const vgilTeam = [
    { name: 'Nitendra Bisen', role: 'Principal Service Strategist', img: nitendraImg },
    { name: 'Anil Katwale', role: 'Principal Solution Architect', img: anilImg },
    { name: 'Satish Kukde', role: 'Principal Database Architect', img: satishImg },
    { name: 'Sachin Burghate', role: 'Director - Technical (BFSI)', img: sachinBImg },
    { name: 'Ninad Mairal', role: 'Director - International Business Development', img: ninadImg },
    { name: 'Alhad Hardas', role: 'Director - Banking Domain Services', img: alhadImg },
    { name: 'Bharat Zade', role: 'Director - Operations & Digital Transformation', img: bharatImg },
    { name: 'Harshjit Deshmukh', role: 'Director - Domestic Business Development', img: harshjitImg }
  ];

  return (
    <div className="section-team flat-spacing" style={{ backgroundColor: '#ffffff', padding: '100px 0' }}>
      <div className="container">
        {/* Founders Section */}
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Our Leadership</div>
          <div className="heading-title text-dark effectFade fadeRotateX">
            The Visionaries Behind <br /> Virtual Galaxy
          </div>
        </div>

        <div className="founders-container mb-120 effectFade fadeUp">

          {/* Left Side - Avinash Shende */}
          <div className="founder-item">
            <div className="team-item" style={{ background: '#f9f9f9ff', border: '1px solid #e5e7eb', borderRadius: '32px', padding: '40px 30px', textAlign: 'center' }}>
              <div className="image" style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '24px', overflow: 'hidden', marginBottom: '25px' }}>
                <img src={team1Image} alt="Avinash Shende" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <img src={avinashSignature} alt="Avinash Shende Signature" style={{ height: '110px', objectFit: 'contain', margin: '15px 0' }} />
              <div className="sub" style={{ color: '#ff4d00', fontWeight: '600', marginBottom: '10px' }}>Founder & CEO</div>
              <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                Avinash oversees operations and finances at Virtual Galaxy Infotech, balancing market needs with cost efficiency. He’s also a gardening enthusiast with a love for all things green.
              </p>
              <div className="social-links-founder">
                <a href="#"><i className="icon icon-twitter-x"></i></a>
                <a href="#"><i className="icon icon-linkedin-in"></i></a>
                <a href="#"><i className="icon icon-github"></i></a>
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="center-logo-box d-flex justify-content-center">
            <div className="center-logo-wrap">
              <img src={logoImage} alt="Logo" className="img-fluid" style={{ maxWidth: '200px' }} />
            </div>
          </div>

          {/* Right Side - Sachin Pande */}
          <div className="founder-item">
            <div className="team-item" style={{ background: '#f9f7f3ff', border: '1px solid #e5e7eb', borderRadius: '32px', padding: '40px 30px', textAlign: 'center' }}>
              <div className="image" style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '24px', overflow: 'hidden', marginBottom: '25px' }}>
                <img src={team2Image} alt="Sachin Pande" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <img src={sachinSignature} alt="Sachin Pande Signature" style={{ height: '110px', objectFit: 'contain', margin: '15px 0' }} />
              <div className="sub" style={{ color: '#ff4d00', fontWeight: '600', marginBottom: '10px' }}>Co-Founder & CTO</div>
              <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                Sachin drives technology and business development at Virtual Galaxy Infotech, leveraging the latest advancements. Off duty, he enjoys music with a cup of tea in hand.
              </p>
              <div className="social-links-founder">
                <a href="#"><i className="icon icon-twitter-x"></i></a>
                <a href="#"><i className="icon icon-linkedin-in"></i></a>
                <a href="#"><i className="icon icon-github"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* VGIL Standalone Section */}
        <div className="vgil-standalone-section" style={{ marginTop: '160px' }}>
          <div className="heading-section center mb-80">
            <h4 className="text-dark effectFade fadeUp vgil-title-responsive">
              VGIL is not about co-founders
            </h4>
            <div style={{ width: '80px', height: '4px', background: '#ff4d00', margin: '20px auto 0', borderRadius: '2px' }}></div>
          </div>

          <div className="team-grid-responsive">
            {vgilTeam.map((member, i) => (
              <div key={i} className="effectFade fadeUp" style={{ textAlign: 'center' }}>
                <div className="vgil-card-unique">
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '20px',
                      transition: 'all 0.6s ease'
                    }}
                  />
                  {/* Glass Overlay on Hover */}
                  <div className="card-overlay" style={{
                    position: 'absolute',
                    bottom: '-100%',
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '20px',
                    transition: 'all 0.5s ease',
                    zIndex: 3
                  }}>
                    <h6 style={{ color: '#fff', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{member.name}</h6>
                    <p style={{ color: '#ff4d00', fontSize: '13px', fontWeight: '500', lineHeight: '1.4' }}>{member.role}</p>
                  </div>
                </div>
                {/* Default Visible Name & Role */}
                <div className="member-info-static">
                  <h6 style={{ color: '#111827', fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>{member.name}</h6>
                  <p style={{ color: '#4b5563', fontSize: '13px', fontWeight: '500', maxWidth: '240px', margin: '0 auto', marginBottom: '10px' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .social-links-founder {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-top: 15px;
          }
          .social-links-founder a {
            width: 44px;
            height: 44px;
            background: #f3f4f6;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #111827;
            font-size: 18px;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            border: 1px solid rgba(255,255,255,0.05);
            box-shadow: 4px 4px 10px rgba(0,0,0,0.05);
          }
          .social-links-founder a:hover {
            background: #ff4d00;
            color: #fff;
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(255, 77, 0, 0.3);
            border-color: rgba(255,255,255,0.2);
          }
          .founders-container {
            display: flex;
            justify-content: center;
            align-items: start;
            flex-wrap: nowrap;
            max-width: 1100px;
            margin: 0 auto;
            gap: 40px;
          }
          .founder-item {
            flex: 0 0 420px;
          }
          .center-logo-box {
            flex: 0 0 120px;
            padding-top: 150px;
          }
          .team-grid-responsive {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 60px 30px;
            max-width: 1300px;
            margin: 0 auto;
          }
          .vgil-card-unique {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 30px;
            height: 280px;
            width: 280px;
            margin: 0 auto 25px;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
            position: relative;
            overflow: hidden;
          }

          @media (max-width: 1199px) {
            .founders-container {
              gap: 20px;
            }
            .founder-item {
              flex: 0 0 380px;
            }
            .team-grid-responsive {
              grid-template-columns: repeat(3, 1fr);
              gap: 40px 20px;
            }
          }

          @media (max-width: 991px) {
            .founders-container {
              flex-wrap: wrap;
              gap: 40px;
            }
            .founder-item {
              flex: 0 0 100%;
              max-width: 500px;
            }
            .center-logo-box {
              flex: 0 0 100%;
              padding-top: 40px;
              padding-bottom: 20px;
            }
            .center-logo-wrap img {
              max-width: 150px !important;
            }
            .team-grid-responsive {
              grid-template-columns: repeat(2, 1fr);
            }
            .vgil-title-responsive {
              font-size: 28px !important;
            }
          }

          @media (max-width: 600px) {
            .team-grid-responsive {
              grid-template-columns: 1fr;
            }
            .vgil-card-unique {
              width: 100%;
              max-width: 280px;
            }
            .vgil-title-responsive {
              font-size: 24px !important;
            }
          }

          .vgil-standalone-section .effectFade {
            animation-duration: 1s;
          }
        `}</style>
      </div>
    </div>
  );
}

export default AboutTeamSection;
