import React from 'react';

function StatisticSection() {
  return (
    <div className="section-statistic section-spacing-sm dark-section dark-section-top">
      <div className="line"></div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <div className="heading-section mb-48">
              <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Statistic</div>
              <div className="heading-title text-dark effectFade fadeRotateX">Human-centered <br /> AI, built for <br /> production</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="statistic-slider">
              <div className="text text-body-1 text-neutral-400 effectFade fadeUp">
                We shipped our first copilot in 7 weeks and cut support tickets by 31%. The eval dashboards made every decision obvious.
              </div>
              <div className="swiper swiper-progressbar">
                <div className="group-slider effectFade fadeUp">
                  <div className="progress-bar">
                    <div className="progress-fill" id="progressBar"></div>
                  </div>
                  <div className="group-btn-slider">
                    <div className="btn-slider progressbar-prev">
                      <i className="icon icon-angle-left-solid"></i>
                    </div>
                    <div className="btn-slider progressbar-next">
                      <i className="icon icon-angle-right-solid"></i>
                    </div>
                  </div>
                </div>
                <div className="swiper-wrapper effectFade fadeUp">
                  <div className="swiper-slide" style={{ paddingRight: '20px' }}>
                    <div className="title fw-semibold text-body-1">OUR GROWTH</div>
                    <div className="statistic-number">
                      <span className="number text-dark fw-semibold">230</span>
                      <span className="prefix text-brand" style={{ display: 'inline-block', paddingRight: '20px' }}>K</span>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ paddingRight: '20px' }}>
                    <div className="title fw-semibold text-body-1">UPTIME FOR KEY FLOWS</div>
                    <div className="statistic-number">
                      <span className="number text-dark fw-semibold">95</span>
                      <span className="prefix text-brand" style={{ display: 'inline-block', paddingRight: '20px' }}>%</span>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ paddingRight: '20px' }}>
                    <div className="title fw-semibold text-body-1">ON TIME DELIVERY</div>
                    <div className="statistic-number">
                      <span className="number text-dark fw-semibold">99</span>
                      <span className="prefix text-brand" style={{ display: 'inline-block', paddingRight: '20px' }}>%</span>
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

export default StatisticSection;
