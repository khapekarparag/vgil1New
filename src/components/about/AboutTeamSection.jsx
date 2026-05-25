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

  const boardMembers = [
    {
      name: "Mr. Avinash Shende",
      role: "Promoter & Managing Director",
      desc: "Promoting strategic banking innovation and leading executive operations with focus on growth.",
      img: team1Image,
      fit: "contain",
      bg: "rgba(0,0,0,0.03)",
      linkedin: "https://www.linkedin.com/in/avinash-shende-a09b863/"
    },
    {
      name: "Mr. Sachin Pande",
      role: "Promoter & Executive Director",
      desc: "Overseeing technology engineering, core systems architecture, and IT operations.",
      img: team2Image,
      fit: "contain",
      bg: "rgba(0,0,0,0.03)",
      linkedin: "https://www.linkedin.com/in/sachin-pande-317620157/"
    },
    {
      name: "Mr. Asit Oberoi",
      role: "Chairman & Independent Director",
      desc: "Visionary banking leader with decades of experience driving compliance, advisory, and corporate excellence.",
      img: "/assets/images/about/founders/asit-oberoi.jpg",
      fit: "cover",
      bg: "#f1f5f9",
      linkedin: "https://www.linkedin.com/in/asit-oberoi-88910120/"
    },
    {
      name: "Ms. Bhanupriya Sharma",
      role: "Non-Executive Director & CS",
      desc: "Governing corporate finance, legal compliance, and regulatory governance standards.",
      img: "/assets/images/about/founders/bhanupriya-clear-bg.png",
      fit: "contain",
      bg: "rgba(0,0,0,0.03)",
      linkedin: "https://www.linkedin.com/in/fcs-bhanupriya-sharma-thakur/"
    },
    {
      name: "Mr. Jaideep Pawar",
      role: "Non-Executive Director",
      desc: "Shaping business expansion routes, strategic partnerships, and alliance frameworks.",
      img: "/assets/images/about/founders/jaideep-pawar.jpg",
      fit: "cover",
      bg: "#f1f5f9",
      linkedin: "https://www.linkedin.com/in/jaideep-pawar/"
    },
    {
      name: "Mr. Ayush Sharma",
      role: "Executive Director",
      desc: "Directing operational delivery, banking software systems implementation, and project management.",
      img: "/assets/images/about/founders/ayush-sharma-clear-bg.png",
      fit: "contain",
      bg: "rgba(0,0,0,0.03)",
      linkedin: "https://www.linkedin.com/in/ayush-sharma-1425a2189/"
    }
  ];

  const leftColumnMembers = [boardMembers[0], boardMembers[2], boardMembers[4]];
  const rightColumnMembers = [boardMembers[1], boardMembers[3], boardMembers[5]];

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
          <div className="founder-item" style={{ display: 'flex' }}>
            <div className="team-item" style={{ background: '#f9f9f9ff', border: '1px solid #e5e7eb', borderRadius: '32px', padding: '40px 30px', textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="image" style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '24px', overflow: 'hidden', marginBottom: '25px', flexShrink: 0 }}>
                <img src={team1Image} alt="Avinash Shende" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <img src={avinashSignature} alt="Avinash Shende Signature" style={{ height: '110px', objectFit: 'contain', margin: '15px 0' }} />
                <div className="sub" style={{ color: '#ff4d00', fontWeight: '600', marginBottom: '10px' }}>Founder & CEO</div>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                  Avinash oversees operations and finances at Virtual Galaxy Infotech, balancing market needs with cost efficiency. He’s also a gardening enthusiast with a love for all things green.
                </p>
              </div>
              <div className="social-links-founder" style={{ marginTop: 'auto' }}>
                <a href="#"><i className="icon icon-twitter-x"></i></a>
                <a href="https://www.linkedin.com/in/avinash-shende-a09b863/" target="_blank" rel="noopener noreferrer"><i className="icon icon-linkedin-in"></i></a>
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
          <div className="founder-item" style={{ display: 'flex' }}>
            <div className="team-item" style={{ background: '#f9f9f9ff', border: '1px solid #e5e7eb', borderRadius: '32px', padding: '40px 30px', textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="image" style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '24px', overflow: 'hidden', marginBottom: '25px', flexShrink: 0 }}>
                <img src={team2Image} alt="Sachin Pande" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <img src={sachinSignature} alt="Sachin Pande Signature" style={{ height: '110px', objectFit: 'contain', margin: '15px 0' }} />
                <div className="sub" style={{ color: '#ff4d00', fontWeight: '600', marginBottom: '10px' }}>Co-Founder & CTO</div>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                  Sachin drives technology and business development at Virtual Galaxy Infotech, leveraging the latest advancements. Off duty, he enjoys music with a cup of tea in hand.
                </p>
              </div>
              <div className="social-links-founder" style={{ marginTop: 'auto' }}>
                <a href="#"><i className="icon icon-twitter-x"></i></a>
                <a href="https://www.linkedin.com/in/sachin-pande-317620157/" target="_blank" rel="noopener noreferrer"><i className="icon icon-linkedin-in"></i></a>
                <a href="#"><i className="icon icon-github"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Board of Directors Section */}
        <div className="board-section-wrap" style={{ marginTop: '160px', marginBottom: '160px' }}>
          <div className="heading-section center mb-64">
            <div className="heading-sub fw-semibold style-1 effectFade fadeUp" style={{ color: '#e10600' }}>
              LEADERSHIP THAT INSPIRES
            </div>
            <h2 className="heading-title text-dark effectFade fadeRotateX" style={{ fontSize: '42px', fontWeight: '800' }}>
              Board of Directors
            </h2>
            <p className="text-body-2 text-neutral-600 max-w-700 mx-auto mt-16 effectFade fadeUp">
              A team of visionary leaders guiding our organization with expertise, integrity, and commitment to excellence.
            </p>
          </div>

          <div className="board-layout">
            <div className="board-col-left">
              {leftColumnMembers.map((member, i) => (
                <div key={i} className="board-card effectFade fadeUp">
                  <div className="board-card-img-wrapper" style={{ backgroundColor: member.bg }}>
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      style={{ objectFit: member.fit }}
                    />
                  </div>
                  <div className="board-card-info">
                    <span className="board-card-role">{member.role}</span>
                    <h4 className="board-card-name">{member.name}</h4>
                    <p className="board-card-desc">{member.desc}</p>
                  </div>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="board-linkedin-link">
                    <i className="icon icon-linkedin-in"></i>
                  </a>
                </div>
              ))}
            </div>

            <div className="board-col-center">
              <div className="board-center-line"></div>
              
              {/* Connector lines and dots */}
              <div className="board-connector-left board-connector-left-top"></div>
              <div className="board-connector-right board-connector-right-top"></div>
              <div className="board-connector-dot board-dot-left-top"></div>
              <div className="board-connector-dot board-dot-right-top"></div>

              <div className="board-connector-left board-connector-left-mid"></div>
              <div className="board-connector-right board-connector-right-mid"></div>
              <div className="board-connector-dot board-dot-left-mid"></div>
              <div className="board-connector-dot board-dot-right-mid"></div>

              <div className="board-connector-left board-connector-left-bot"></div>
              <div className="board-connector-right board-connector-right-bot"></div>
              <div className="board-connector-dot board-dot-left-bot"></div>
              <div className="board-connector-dot board-dot-right-bot"></div>

              <div className="board-center-circle">
                <svg width="56" height="56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 24 }).map((_, idx) => {
                    const angle = (idx * 360) / 24;
                    return (
                      <line
                        key={idx}
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="15"
                        stroke="#ffffff"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        transform={`rotate(${angle} 50 50)`}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            <div className="board-col-right">
              {rightColumnMembers.map((member, i) => (
                <div key={i} className="board-card effectFade fadeUp">
                  <div className="board-card-img-wrapper" style={{ backgroundColor: member.bg }}>
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      style={{ objectFit: member.fit }}
                    />
                  </div>
                  <div className="board-card-info">
                    <span className="board-card-role">{member.role}</span>
                    <h4 className="board-card-name">{member.name}</h4>
                    <p className="board-card-desc">{member.desc}</p>
                  </div>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="board-linkedin-link">
                    <i className="icon icon-linkedin-in"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="board-footer-text effectFade fadeUp">
            <span>Together, our board leads with vision, accountability, and a shared commitment to build a stronger tomorrow.</span>
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
            align-items: stretch;
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
          
          /* Board of Directors Styles */
          .board-layout {
            display: grid;
            grid-template-columns: 1fr 140px 1fr;
            position: relative;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
          }

          .board-col-left {
            display: flex;
            flex-direction: column;
            gap: 48px;
          }

          .board-col-right {
            display: flex;
            flex-direction: column;
            gap: 48px;
          }

          .board-col-center {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 600px;
          }

          .board-center-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 1px;
            border-left: 1px dashed rgba(225, 6, 0, 0.3);
            transform: translateX(-50%);
            z-index: 1;
          }

          .board-center-circle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: #e10600;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 30px rgba(225, 6, 0, 0.25);
            z-index: 3;
          }

          .board-center-circle svg {
            animation: spin-sunburst 30s linear infinite;
          }

          @keyframes spin-sunburst {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .board-connector-left, .board-connector-right {
            position: absolute;
            height: 1px;
            border-top: 1px dashed rgba(225, 6, 0, 0.3);
            z-index: 1;
          }

          .board-connector-left-top { top: 15%; left: 0; width: 50%; }
          .board-connector-right-top { top: 15%; right: 0; width: 50%; }
          .board-connector-left-mid { top: 50%; left: 0; width: 50%; }
          .board-connector-right-mid { top: 50%; right: 0; width: 50%; }
          .board-connector-left-bot { top: 85%; left: 0; width: 50%; }
          .board-connector-right-bot { top: 85%; right: 0; width: 50%; }

          .board-connector-dot {
            position: absolute;
            width: 6px;
            height: 6px;
            background: #e10600;
            border-radius: 50%;
            transform: translateY(-50%);
            z-index: 2;
          }

          .board-dot-left-top { top: 15%; left: 0; }
          .board-dot-right-top { top: 15%; right: 0; }
          .board-dot-left-mid { top: 50%; left: 0; }
          .board-dot-right-mid { top: 50%; right: 0; }
          .board-dot-left-bot { top: 85%; left: 0; }
          .board-dot-right-bot { top: 85%; right: 0; }

          .board-card {
            background: #ffffff;
            border: 1px solid #eef2f6;
            border-radius: 24px;
            padding: 24px;
            display: flex;
            align-items: center;
            gap: 20px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            min-height: 180px;
          }

          .board-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
            border-color: rgba(225, 6, 0, 0.15);
          }

          .board-card-img-wrapper {
            width: 120px;
            height: 120px;
            border-radius: 16px;
            overflow: hidden;
            flex-shrink: 0;
          }

          .board-card-img-wrapper img {
            width: 100%;
            height: 100%;
            transition: all 0.5s ease;
          }

          .board-card:hover .board-card-img-wrapper img {
            transform: scale(1.06);
          }

          .board-card-info {
            border-left: 2px solid #e10600;
            padding-left: 18px;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .board-card-role {
            font-size: 11px;
            font-weight: 800;
            color: #e10600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 4px;
          }

          .board-card-name {
            font-size: 18px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 8px;
            line-height: 1.3;
          }

          .board-card-desc {
            font-size: 13px;
            color: #64748b;
            line-height: 1.5;
            margin: 0;
          }

          .board-linkedin-link {
            position: absolute;
            top: 15px;
            right: 15px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #f8fafc;
            color: #94a3b8;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid #e2e8f0;
          }

          .board-card:hover .board-linkedin-link {
            background: #0077b5;
            color: #ffffff;
            border-color: #0077b5;
            transform: scale(1.1);
            box-shadow: 0 4px 10px rgba(0, 119, 181, 0.2);
          }

          .board-footer-text {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin-top: 60px;
            width: 100%;
          }

          .board-footer-text::before, .board-footer-text::after {
            content: '';
            flex: 1;
            height: 1px;
            background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
          }

          .board-footer-text span {
            font-size: 14px;
            color: #64748b;
            font-style: italic;
            text-align: center;
            font-weight: 500;
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
            .board-layout {
              grid-template-columns: 1fr;
              gap: 30px;
            }
            .board-col-left, .board-col-right {
              gap: 30px;
            }
            .board-col-center {
              display: none;
            }
            .board-connector-left, .board-connector-right,
            .board-connector-dot, .board-center-line {
              display: none !important;
            }
            .board-card {
              min-height: auto;
            }
          }

          @media (max-width: 640px) {
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
            .board-card {
              flex-direction: column;
              text-align: center;
              align-items: center;
              padding: 30px 20px 24px;
            }
            .board-card-info {
              border-left: none;
              border-top: 2px solid #e10600;
              padding-left: 0;
              padding-top: 15px;
              margin-top: 10px;
              align-items: center;
              text-align: center;
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
