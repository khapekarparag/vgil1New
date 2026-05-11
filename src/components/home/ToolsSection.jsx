import React from 'react';
import { Link } from 'react-router-dom';

function ToolsSection() {
  return (
    <div className="section-tools section-spacing-lg">
      <img className="img-1 img-grow-1" src="/assets/images/item/item-4.svg" alt="" />
      <img className="img-2 img-grow-2" src="/assets/images/item/item-5.svg" alt="" />
      <img className="img-3 img-grow-3" src="/assets/images/item/item-6.svg" alt="" />
      <img className="img-4 img-grow-4" src="/assets/images/item/item-7.svg" alt="" />
      <img className="img-5 img-grow-5" src="/assets/images/item/item-8.svg" alt="" />
      <img className="img-6 img-grow-6" src="/assets/images/item/item-9.svg" alt="" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-md-8 text-center">
            <div className="heading-section center mb-48">
              <div className="heading-sub fw-semibold effectFade fadeUp">Tools</div>
              <div className="heading-title text-gradient-3 effectFade fadeRotateX">We work with powerful AI tools</div>
            </div>
            <div className="text effectFade fadeUp">
              We design, build, and evaluate with a modern AI stack—LLMs, vector search, orchestration, and observability—so your features are fast, reliable, and secure.
            </div>
            <Link to="/contact" className="tf-btn effectFade fadeRotateX">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsSection;
