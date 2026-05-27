import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function ServicesSection() {
  const [activeImage, setActiveImage] = useState("/assets/images/section/service-1.jpg");
  const [activeCard, setActiveCard] = useState("faq-1");
  const [isFading, setIsFading] = useState(false);
  const hoverTimeout = useRef(null);

  // Preload images
  useEffect(() => {
    const images = [
      "/assets/images/section/service-1.jpg",
      "/assets/images/section/service-2.jpg",
      "/assets/images/section/service-3.jpg",
      "/assets/images/section/service-4.jpg"
    ];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    // Cleanup timeout on unmount
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  const handleCardHover = (cardId, newImg) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    
    // Add a slight delay (100ms) to prevent flickering/jumping when rapidly moving mouse across cards
    hoverTimeout.current = setTimeout(() => {
      if (activeCard !== cardId) {
        setActiveCard(cardId);
      }
      
      if (newImg && newImg !== activeImage && !isFading) {
        setIsFading(true);
        setTimeout(() => {
          setActiveImage(newImg);
          setIsFading(false);
        }, 200); // Wait for fade out
      }
    }, 120);
  };

  const handleMouseLeaveContainer = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    
    // Delay before reverting to the default card (faq-1)
    hoverTimeout.current = setTimeout(() => {
      setActiveCard("faq-1");
    }, 250);
  };

  return (
    <div id="services" className="section-services section-spacing-grouped">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-4 col-lg-6">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="col-left">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">Why choose us?</div>
                  <div className="heading-title text-gradient-3 effectFade fadeRotateX">End-to-End <br /> AI Services</div>
                </div>
                <p className="effectFade fadeUp mb-48">Serving Clients With Apt
                  Solutions Since 1997.</p>
                
                {/* Dynamic Image Container */}
                <div className="dynamic-image-container effectFade fadeUp">
                  <img 
                    src={activeImage} 
                    alt="Active Service" 
                    style={{ 
                      width: '100%', 
                      height: 'auto',
                      opacity: isFading ? 0 : 1, 
                      transform: isFading ? 'scale(0.98)' : 'scale(1)',
                      transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
                      objectFit: 'cover',
                      borderRadius: '24px'
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            {/* Parent container no longer needs a hardcoded min-height because a card is always open */}
            <div className="accordion-faq_list" id="accordion-services" onMouseLeave={handleMouseLeaveContainer}>
              
              <div className="accordion-faq_item effectFade fadeUp" role="presentation" onMouseEnter={() => handleCardHover('faq-1', '/assets/images/section/service-1.jpg')}>
                <div className={`accordion-action services-image-btn ${activeCard === 'faq-1' ? 'active-img' : 'collapsed'}`} role="button" aria-expanded={activeCard === 'faq-1'}>
                  <div className="accordion-title">
                    Domain Expertise <br />
                    <div className="text-body-1 num">(01)</div>
                  </div>
                </div>
                <div className={`react-accordion-content ${activeCard === 'faq-1' ? 'open' : ''}`}>
                  <div className="react-accordion-inner">
                    <div className="accordion-content pt-3 mt-0">
                      <div className="text-body-3 text-neutral-300 text">VGIL has been a pioneer in the ever-evolving technology space in the verticals of Banking & Finance, eGovernance, ERP & DC / DR Solutions.</div>
                      <div className="list-tags">
                        <a href="#" className="tags-item fw-semibold">Pioneers in Technology Innovation</a>
                        <a href="#" className="tags-item fw-semibold">Reliable & Scalable Systems</a>
                        <a href="#" className="tags-item fw-semibold">Expertise Across Key Verticals </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-faq_item effectFade fadeUp" role="presentation" onMouseEnter={() => handleCardHover('faq-2', '/assets/images/section/service-2.jpg')}>
                <div className={`accordion-action services-image-btn ${activeCard === 'faq-2' ? 'active-img' : 'collapsed'}`} role="button" aria-expanded={activeCard === 'faq-2'}>
                  <div className="accordion-title">
                    Supporting 150+ Firms <br />
                    <div className="text-body-1 num">(02)</div>
                  </div>
                </div>
                <div className={`react-accordion-content ${activeCard === 'faq-2' ? 'open' : ''}`}>
                  <div className="react-accordion-inner">
                    <div className="accordion-content pt-3 mt-0">
                      <div className="text-body-3 text-neutral-300 text">Support multiple types of organizations, including Bank Branches, Manufacturing Setups, and Business Houses..</div>
                      <div className="list-tags">
                        <a href="#" className="tags-item fw-semibold">Banking Solutions</a>
                        <a href="#" className="tags-item fw-semibold">Manufacturing Support</a>
                        <a href="#" className="tags-item fw-semibold">Business-Focused Solutionss</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-faq_item effectFade fadeUp" role="presentation" onMouseEnter={() => handleCardHover('faq-3', '/assets/images/section/service-3.jpg')}>
                <div className={`accordion-action services-image-btn ${activeCard === 'faq-3' ? 'active-img' : 'collapsed'}`} role="button" aria-expanded={activeCard === 'faq-3'}>
                  <div className="accordion-title">
                    350+ Strong Team <br />
                    <div className="text-body-1 num">(03)</div>
                  </div>
                </div>
                <div className={`react-accordion-content ${activeCard === 'faq-3' ? 'open' : ''}`}>
                  <div className="react-accordion-inner">
                    <div className="accordion-content pt-3 mt-0">
                      <div className="text-body-3 text-neutral-300 text">Our core strength - our team of dynamic professionals keeps itself constantly upgraded to maintain our edge.</div>
                      <div className="list-tags">
                        <a href="#" className="tags-item fw-semibold">Dynamic & Skilled Team</a>
                        <a href="#" className="tags-item fw-semibold">Maintaining a Competitive Edge</a>
                        <a href="#" className="tags-item fw-semibold">Continuously Upgraded Knowledge</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-faq_item effectFade fadeUp" role="presentation" onMouseEnter={() => handleCardHover('faq-4', '/assets/images/section/service-4.jpg')}>
                <div className={`accordion-action services-image-btn ${activeCard === 'faq-4' ? 'active-img' : 'collapsed'}`} role="button" aria-expanded={activeCard === 'faq-4'}>
                  <div className="accordion-title">
                    Our Expertise <br />
                    <div className="text-body-1 num">(04)</div>
                  </div>
                </div>
                <div className={`react-accordion-content ${activeCard === 'faq-4' ? 'open' : ''}`}>
                  <div className="react-accordion-inner">
                    <div className="accordion-content pt-3 mt-0">
                      <div className="text-body-3 text-neutral-300 text">We build cutting edge technologies for Transaction Automation, Customer Service Delivery, Compliance & Decision Support.</div>
                      <div className="list-tags">
                        <a href="#" className="tags-item fw-semibold">Automate Transactions Seamlessly</a>
                        <a href="#" className="tags-item fw-semibold">Intelligent Insights</a>
                        <a href="#" className="tags-item fw-semibold">Deliver Exceptional Customer Experience</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
