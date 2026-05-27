import React from 'react';
import { Link } from 'react-router-dom';

function PricingSection() {
  return (
    <div id="pricing" className="section-pricing section-spacing">
      <div className="container">
        <div className="heading-section mb-80">
          <div className="heading-sub fw-semibold effectFade fadeUp">Pricing Plans</div>
          <div className="heading-title text-gradient-3 gap-8 effectFade fadeRotateX">
            From pilot to enterprise <br />
            <div className="h-8 d-none d-lg-block"></div>
            clear scope, transparent costs <br />
            <div className="h-8 d-none d-lg-block"></div>
            <input type="checkbox" id="pricingSwitch" className="tf-switch-check" defaultChecked />&nbsp;annually.
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 lg-mb-24">
            <div className="pricing-item h-100 effectFade fadeRotateX">
              <div className="top d-flex gap-12 align-items-center">
                <div className="d-flex gap-8 align-items-center">
                  <i className="icon icon-user-friends-solid fs-24"></i>
                  <div className="fw-semibold text">Starter Plan</div>
                </div>
                <div className="line"></div>
                <div className="fw-semibold text-secondary">For startups</div>
              </div>
              <div className="heading">
                <div className="d-flex gap-14 align-items-end">
                  <div className="price-number fw-bold" data-month="1000" data-year="9900">$9,900</div>
                  <h6 className="price-per">/ year</h6>
                </div>
                <Link to="/contact" className="tf-btn">
                  Get Started
                </Link>
              </div>
              <div className="line"></div>
              <div className="content">
                <div>
                  <div className="title fw-semibold mb-4">What’s included</div>
                  <div className="text fw-semibold">
                    Prove value in two weeks with a clickable UX, tech spike, and a clear go/no-go roadmap.
                  </div>
                </div>
                <ul className="list-text type-check">
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Discovery workshop
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Opportunity brief
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Clickable UX
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    1 data source & 1 integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pricing-item h-100 style-black effectFade fadeRotateX" data-delay="0.1">
              <div className="top d-flex gap-12 align-items-center">
                <div className="d-flex gap-8 align-items-center">
                  <i className="icon icon-building fs-24"></i>
                  <div className="fw-semibold text">Enterprise Plan</div>
                </div>
                <div className="line"></div>
                <div className="fw-semibold text-neutral-400">For organisations</div>
              </div>
              <div className="heading">
                <div className="d-flex gap-14 align-items-end">
                  <div className="price-number fw-bold" data-month="1700" data-year="19900">$19,900</div>
                  <h6 className="price-per">/ year</h6>
                </div>
                <Link to="/contact" className="tf-btn">
                  Get Started
                </Link>
              </div>
              <div className="line"></div>
              <div className="content">
                <div>
                  <div className="title fw-semibold mb-4">What’s included</div>
                  <div className="text fw-semibold">
                    Compliance-ready delivery for complex orgs—multi-env releases, canaries, and change management.
                  </div>
                </div>
                <ul className="list-text type-check">
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Everything in Starter
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    CI/CD, tracing, alerts, guardrails
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Full eval dashboard
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    3 data source & 3 integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
