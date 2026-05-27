import React from 'react';

function AwardsSection() {
  return (
    <div className="section-awards section-spacing dark-section">
      <div className="container">
        <div className="heading-section center mb-48">
          <div className="heading-sub fw-semibold style-1 mb-0 effectFade fadeUp">Awards</div>
        </div>
        <div className="d-grid gap-16">
          <div className="awards-item dark-card effectFade fadeUp">
            <div className="image award-photo-wrapper">
              <img src="/assets/awards-image/award1.png" alt="Sardar Patel Unity Awards" className="award-photo" />
            </div>
            <div className="title text-body-1 text-dark">Sardar Patel Unity Awards</div>
            <div className="text text-body-1 text-dark">Leading IT Solutions Provider of the Year</div>
            <div className="year text-body-1 text-neutral-400">/ 2025</div>
          </div>
          <div className="awards-item dark-card effectFade fadeUp" data-delay="0.1">
            <div className="image award-photo-wrapper">
              <img src="/assets/awards-image/award2.png" alt="Global Excellence Award" className="award-photo" />
            </div>
            <div className="title text-body-1 text-dark">Global Excellence Award</div>
            <div className="text text-body-1 text-dark">Integrated MIS for Banking & Finance</div>
            <div className="year text-body-1 text-neutral-400">/ 2024</div>
          </div>
          <div className="awards-item dark-card effectFade fadeUp" data-delay="0.2">
            <div className="image award-photo-wrapper">
              <img src="/assets/awards-image/award3.png" alt="Asia Leadership Awards" className="award-photo" />
            </div>
            <div className="title text-body-1 text-dark">Asia Leadership Awards</div>
            <div className="text text-body-1 text-dark">Financial Services Tech of The Year</div>
            <div className="year text-body-1 text-neutral-400">/ 2024</div>
          </div>
          <div className="awards-item dark-card effectFade fadeUp" data-delay="0.3">
            <div className="image award-photo-wrapper">
              <img src="/assets/awards-image/award4.png" alt="Navbharat Navarashtra Conclave" className="award-photo" />
            </div>
            <div className="title text-body-1 text-dark">Navbharat Navarashtra Conclave</div>
            <div className="text text-body-1 text-dark">Contributing to Maharashtra's progress and economic strength</div>
            <div className="year text-body-1 text-neutral-400">/ 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardsSection;
