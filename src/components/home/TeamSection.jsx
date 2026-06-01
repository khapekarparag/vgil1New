import React from 'react';

// Import local images
import team1Image from '../../assets/home/ownwer-img/avinash-shende-clear-bg.png';
import team2Image from '../../assets/home/ownwer-img/sachin-pande-clear-bg.png';
import logoImage from '../../assets/home/ownwer-img/vg-logo-2.png';

function TeamSection() {
  return (
    <div className="section-team-premium" id="leadership">
      <div className="container">
        
        {/* Section Heading */}
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Our Founder</div>
          <div className="heading-title text-dark effectFade fadeRotateX">
            The Minds Behind <br /> Virtual-Galaxy
          </div>
        </div>

        {/* Responsive Grid Wrapper */}
        <div className="leadership-grid-container effectFade fadeUp">
          
          {/* Left Card - Mr. Avinash Shende */}
          <div className="leader-card-item card-left">
            <div className="leader-image-wrap">
              <div className="image-bg-box">
                <img src={team1Image} alt="Mr. Avinash Shende" className="leader-profile-img" />
              </div>
              <div className="profile-icon-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="leader-info-wrap">
              <h3 className="leader-name">Mr. Avinash Shende</h3>
              <div className="leader-position">Promoter, Chairman, Executive Director & Chief Financial Officer</div>
              <div className="leader-divider"></div>
              <p className="leader-desc">
                Avinash oversees operations and finances at Virtual Galaxy Infotech, balancing market needs with cost efficiency. He’s also a gardening enthusiast with a love for all things green.
              </p>
            </div>
          </div>

          {/* Center Circular Logo Container */}
          <div className="leader-logo-center-wrap">
            <div className="logo-circle-container">
              <img src={logoImage} alt="Virtual Galaxy Logo" className="logo-center-img" />
            </div>
          </div>

          {/* Right Card - Mr. Sachin Pande */}
          <div className="leader-card-item card-right">
            <div className="leader-image-wrap">
              <div className="image-bg-box">
                <img src={team2Image} alt="Mr. Sachin Pande" className="leader-profile-img" />
              </div>
              <div className="profile-icon-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="leader-info-wrap">
              <h3 className="leader-name">Mr. Sachin Pande</h3>
              <div className="leader-position">Promoter, Managing Director & Chief Technology Officer</div>
              <div className="leader-divider"></div>
              <p className="leader-desc">
                Sachin drives technology and business development at Virtual Galaxy Infotech, leveraging the latest advancements. Off duty, he enjoys music with a cup of tea in hand.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default TeamSection;