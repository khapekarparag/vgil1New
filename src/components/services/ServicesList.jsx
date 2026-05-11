import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../data/servicesData';

function ServicesList() {
  const [activeCard, setActiveCard] = useState(`service-0`);
  const hoverTimeout = useRef(null);

  const handleCardHover = (cardId) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    
    hoverTimeout.current = setTimeout(() => {
      setActiveCard(cardId);
    }, 120);
  };

  const handleMouseLeaveContainer = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    
    hoverTimeout.current = setTimeout(() => {
      setActiveCard(`service-0`); 
    }, 250);
  };

  return (
    <div id="services" className="section-services flat-spacing">
      <div className="container">
        <div className="top">
          <div className="heading-section center mb-48">
            <div className="heading-sub fw-semibold effectFade fadeUp">Our Expertise</div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">Comprehensive Technology Services</div>
          </div>
          <p className="text text-center effectFade fadeUp">From conceptualization to deployment, we provide end-to-end solutions <br /> that drive innovation and business growth.</p>
        </div>
        
        <div className="accordion-faq_list gap-32" id="accordion-services" onMouseLeave={handleMouseLeaveContainer}>
          
          {SERVICES_DATA.map((service, index) => (
            <div key={service.slug} className="accordion-faq_item style-1 effectFade fadeRotateX" role="presentation" onMouseEnter={() => handleCardHover(`service-${index}`)}>
              <div className={`accordion-action ${activeCard === `service-${index}` ? '' : 'collapsed'}`} role="button" aria-expanded={activeCard === `service-${index}`}>
                <div className="accordion-title">
                  {service.title}
                  <Link to={`/services/${service.slug}`}>
                    <i className="icon icon-arrow-top-right"></i>
                  </Link>
                </div>
              </div>
              <div className={`react-accordion-content ${activeCard === `service-${index}` ? 'open' : ''}`}>
                <div className="react-accordion-inner">
                  <div className="accordion-content">
                    <div className="image">
                      <img src={service.heroImage} alt={service.title} />
                    </div>
                    <div className="content">
                      <div className="text-body-3 text-neutral-300 text">{service.description} {service.longDescription.substring(0, 150)}...</div>
                      <div className="list-tags">
                        {service.features.map((feature, fIdx) => (
                          <Link key={fIdx} to={`/services/${service.slug}`} className="tags-item fw-semibold">{feature.title}</Link>
                        ))}
                      </div>
                      <div className="text-body-1 num">{String(index + 1).padStart(2, '0')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default ServicesList;
