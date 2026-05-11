import React, { useState, useRef } from 'react';

function ServicesList() {
  const [activeCard, setActiveCard] = useState("faq-1");
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
      setActiveCard("faq-1"); // Default to the first card instead of null to prevent height collapse
    }, 250);
  };

  return (
    <div id="services" className="section-services flat-spacing">
      <div className="container">
        <div className="top">
          <div className="heading-section center mb-48">
            <div className="heading-sub fw-semibold effectFade fadeUp">Services</div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">End-to-End AI Services</div>
          </div>
          <p className="text text-center effectFade fadeUp">We turn ambiguous AI ideas into production features your users trust—combining strategy, <br /> design, engineering, and rigorous evaluation.</p>
        </div>
        
        {/* Container height is now naturally stable because one card is always open */}
        <div className="accordion-faq_list gap-32" id="accordion-services" onMouseLeave={handleMouseLeaveContainer}>
          
          <div className="accordion-faq_item style-1 effectFade fadeRotateX" role="presentation" onMouseEnter={() => handleCardHover('faq-1')}>
            <div className={`accordion-action ${activeCard === 'faq-1' ? '' : 'collapsed'}`} role="button" aria-expanded={activeCard === 'faq-1'}>
              <div className="accordion-title">
                AI Strategy & Mapping
                <i className="icon icon-arrow-top-right"></i>
              </div>
            </div>
            <div className={`react-accordion-content ${activeCard === 'faq-1' ? 'open' : ''}`}>
              <div className="react-accordion-inner">
                <div className="accordion-content">
                  <div className="image">
                    <img src="/assets/images/section/service-5.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="text-body-3 text-neutral-300 text">Identify high-ROI use cases and define a realistic, measurable AI roadmap. Our AI Strategy & Mapping process aligns technology with business goals through stakeholder discovery, KPI modeling, and data readiness assessment to ensure sustainable growth and measurable transformation outcomes.</div>
                    <div className="list-tags">
                      <a href="#" className="tags-item fw-semibold">Stakeholder discovery</a>
                      <a href="#" className="tags-item fw-semibold">Value model & KPI definition</a>
                      <a href="#" className="tags-item fw-semibold">Data readiness assessment</a>
                    </div>
                    <div className="text-body-1 num">01</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-faq_item style-1 effectFade fadeRotateX" role="presentation" onMouseEnter={() => handleCardHover('faq-2')}>
            <div className={`accordion-action ${activeCard === 'faq-2' ? '' : 'collapsed'}`} role="button" aria-expanded={activeCard === 'faq-2'}>
              <div className="accordion-title">
                AI UX & Product Design
                <i className="icon icon-arrow-top-right"></i>
              </div>
            </div>
            <div className={`react-accordion-content ${activeCard === 'faq-2' ? 'open' : ''}`}>
              <div className="react-accordion-inner">
                <div className="accordion-content">
                  <div className="image">
                    <img src="/assets/images/section/service-6.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="text-body-3 text-neutral-300 text">Human-centered flows, prompts, and interfaces that build trust and adoption. We design intuitive AI experiences focused on transparency, usability, and engagement—helping users understand, trust, and confidently interact with intelligent systems that seamlessly integrate into their workflows for lasting impact and satisfaction.</div>
                    <div className="list-tags">
                      <a href="#" className="tags-item fw-semibold">Prototype flows</a>
                      <a href="#" className="tags-item fw-semibold">Prompt UX patterns</a>
                      <a href="#" className="tags-item fw-semibold">Usability testing with real users</a>
                    </div>
                    <div className="text-body-1 num">02</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-faq_item style-1 effectFade fadeRotateX" role="presentation" onMouseEnter={() => handleCardHover('faq-3')}>
            <div className={`accordion-action ${activeCard === 'faq-3' ? '' : 'collapsed'}`} role="button" aria-expanded={activeCard === 'faq-3'}>
              <div className="accordion-title">
                LLM / Agent Development
                <i className="icon icon-arrow-top-right"></i>
              </div>
            </div>
            <div className={`react-accordion-content ${activeCard === 'faq-3' ? 'open' : ''}`}>
              <div className="react-accordion-inner">
                <div className="accordion-content">
                  <div className="image">
                    <img src="/assets/images/section/service-7.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="text-body-3 text-neutral-300 text">Domain-specific copilots and agents that plan, execute, and report. These intelligent systems are tailored to your industry, automating complex tasks, enhancing decision-making, and delivering actionable insights—empowering teams to work smarter, faster, and with greater accuracy across every stage of operations.</div>
                    <div className="list-tags">
                      <a href="#" className="tags-item fw-semibold">Multi-step planning</a>
                      <a href="#" className="tags-item fw-semibold">Function calling & toolchains</a>
                      <a href="#" className="tags-item fw-semibold">Guardrails and audit trails</a>
                    </div>
                    <div className="text-body-1 num">03</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-faq_item style-1 effectFade fadeRotateX" role="presentation" onMouseEnter={() => handleCardHover('faq-4')}>
            <div className={`accordion-action ${activeCard === 'faq-4' ? '' : 'collapsed'}`} role="button" aria-expanded={activeCard === 'faq-4'}>
              <div className="accordion-title">
                Data Engineering & Pipelines
                <i className="icon icon-arrow-top-right"></i>
              </div>
            </div>
            <div className={`react-accordion-content ${activeCard === 'faq-4' ? 'open' : ''}`}>
              <div className="react-accordion-inner">
                <div className="accordion-content">
                  <div className="image">
                    <img src="/assets/images/section/service-8.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="text-body-3 text-neutral-300 text">Reliable data flows from ingestion to features, built for scale and cost control. Our robust data engineering ensures clean, consistent, and efficient pipelines—enabling seamless integration, real-time analytics, and optimized performance that power scalable AI systems and sustainable business growth.</div>
                    <div className="list-tags">
                      <a href="#" className="tags-item fw-semibold">Data cleaning & chunking</a>
                      <a href="#" className="tags-item fw-semibold">Hybrid search</a>
                      <a href="#" className="tags-item fw-semibold">Freshness, citations, and re-ranking</a>
                    </div>
                    <div className="text-body-1 num">04</div>
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

export default ServicesList;
