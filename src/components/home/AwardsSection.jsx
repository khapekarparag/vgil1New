import React, { useState } from 'react';

const AWARDS_DATA = [
  {
    id: 1,
    image: "/assets/awards-image/award1.png",
    title: "Sardar Patel Unity Awards",
    category: "Leading IT Solutions Provider of the Year",
    year: "2025",
    description: "Virtual Galaxy was honored as the 'Leading IT Solutions Provider of the Year' at the Sardar Patel Unity Awards. This recognition celebrates our outstanding excellence in delivering cutting-edge software solutions, technical consulting, and digital transformation services that drive efficiency and growth across corporate and government sectors."
  },
  {
    id: 2,
    image: "/assets/awards-image/award2.png",
    title: "Global Excellence Award",
    category: "Integrated MIS for Banking & Finance",
    year: "2024",
    description: "Awarded for our state-of-the-art Integrated Management Information System (MIS) designed for banking and financial operations. This system streamlines transaction monitoring, risk assessment, and financial reporting, offering unprecedented data visibility and operational security."
  },
  {
    id: 3,
    image: "/assets/awards-image/award3.png",
    title: "Asia Leadership Awards",
    category: "Financial Services Tech of The Year",
    year: "2024",
    description: "Recognized as the 'Financial Services Tech of the Year' for our innovative fintech solutions. We have empowered banks and microfinance institutions across Asia to deploy scalable digital platforms, improving access to financial services and driving financial inclusion."
  },
  {
    id: 4,
    image: "/assets/awards-image/award4.png",
    title: "Navbharat Navarashtra Conclave",
    category: "Contributing to Maharashtra's progress and economic strength",
    year: "2024",
    description: "Virtual Galaxy was celebrated at the Navbharat Navarashtra Conclave for our significant contributions to Maharashtra's socio-economic growth. Through digital governance portals, banking technology, and regional employment initiatives, we continue to play a key role in the state's progress."
  }
];

function AwardsSection() {
  const [activeAward, setActiveAward] = useState(null);

  return (
    <div className="section-awards section-spacing dark-section">
      <div className="container">
        <div className="heading-section center mb-48">
          <div className="heading-sub fw-semibold mb-0 effectFade fadeUp">Awards</div>
        </div>
        <div className="d-grid gap-16">
          {AWARDS_DATA.map((award, index) => (
            <div 
              key={award.id} 
              className="awards-item dark-card effectFade fadeUp" 
              data-delay={`${index * 0.1}`}
              onClick={() => setActiveAward(award)}
              style={{ cursor: 'pointer' }}
            >
              <div className="image award-photo-wrapper">
                <img src={award.image} alt={award.title} className="award-photo" />
              </div>
              <div className="title text-body-1 text-dark">{award.title}</div>
              <div className="text text-body-1 text-dark">{award.category}</div>
              <div className="year text-body-1 text-neutral-400">/ {award.year}</div>
            </div>
          ))}
        </div>
      </div>

      {activeAward && (
        <div className="award-modal-overlay" onClick={() => setActiveAward(null)}>
          <div className="award-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="award-modal-close" onClick={() => setActiveAward(null)} aria-label="Close details">
              &times;
            </button>
            <div className="award-modal-image-wrapper">
              <img src={activeAward.image} alt={activeAward.title} className="award-modal-image" />
            </div>
            <div className="award-modal-content">
              <div className="award-modal-year">/ {activeAward.year}</div>
              <h3 className="award-modal-title">{activeAward.title}</h3>
              <div className="award-modal-category">{activeAward.category}</div>
              <p className="award-modal-description">{activeAward.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AwardsSection;
