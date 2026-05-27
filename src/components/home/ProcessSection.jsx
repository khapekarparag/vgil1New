import React from 'react';

function ProcessSection() {
  return (
    <div className="section-process section-spacing-grouped">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="process-heading h-100">
              <div className="heading-section mb-80">
                <div className="heading-sub fw-semibold effectFade fadeUp">Process</div>
                <div className="heading-title text-gradient-3 effectFade fadeRotateX">From Idea <br /> to Production</div>
              </div>
              <div className="group-btn-slider">
                <div className="nav-prev-swiper">
                  <i className="icon icon-angle-left-solid"></i>
                </div>
                <div className="nav-next-swiper">
                  <i className="icon icon-angle-right-solid"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="process-slide">
              <div dir="ltr" className="swiper tf-swiper swiper-box-shadow" data-preview="1.78" data-tablet="2" data-mobile-sm="1" data-mobile="1"
                data-loop="false" data-center="false" data-space-lg="24" data-space-md="24" data-space="30" >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="process-card">
                      <i className="icon icon-search-solid"></i>
                      <div className="content">
                        <h4 className="title fw-semibold">Discover & Scope</h4>
                        <p className="text text-secondary">Align on problems, data reality, and success metrics. Opportunity brief, KPI model, phased roadmap, effort/cost ranges.</p>
                      </div>
                      <div className="bot">
                        <div className="time fw-semibold">3-7 DAYS</div>
                        <div className="number">
                          <span className="text-neutral-400">01</span>
                          <span className="text-neutral-200">/03</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="process-card">
                      <i className="icon icon-bolt-solid"></i>
                      <div className="content">
                        <h4 className="title fw-semibold">Prototype</h4>
                        <p className="text text-secondary">De-risk unknowns and validate value quickly. Clickable UX, tech spike repo, initial eval rubric, demo.</p>
                      </div>
                      <div className="bot">
                        <div className="time fw-semibold">1-2 WEEKS</div>
                        <div className="number">
                          <span className="text-neutral-400">02</span>
                          <span className="text-neutral-200">/03</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="process-card">
                      <i className="icon icon-user-check-solid-1"></i>
                      <div className="content">
                        <h4 className="title fw-semibold">Validate & Evals</h4>
                        <p className="text text-secondary">Prove accuracy, usability, safety, and cost. Eval dashboard, acceptance thresholds, decision to iterate/ship.</p>
                      </div>
                      <div className="bot">
                        <div className="time fw-semibold">1 WEEKS</div>
                        <div className="number">
                          <span className="text-neutral-400">03</span>
                          <span className="text-neutral-200">/03</span>
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
    </div>
  );
}

export default ProcessSection;
