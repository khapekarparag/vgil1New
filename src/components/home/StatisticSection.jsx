import React, { useEffect, useRef } from 'react';

function StatisticSection() {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const progressFillRef = useRef(null);
  const rafIDRef = useRef(null);

  useEffect(() => {
    // Only run if Swiper exists globally (as loaded in index.html)
    if (!window.Swiper) return;

    const SLIDE_DURATION = 5000;
    let startTime = null;

    function resetProgress() {
      if (progressFillRef.current) progressFillRef.current.style.width = "0%";
      startTime = performance.now();
    }

    function animateProgress(timestamp) {
      if (swiperInstanceRef.current && swiperInstanceRef.current.destroyed) return;
      if (!progressFillRef.current) return;
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      let percent = (elapsed / SLIDE_DURATION) * 100;

      if (percent >= 100) {
        percent = 100;
        if (swiperInstanceRef.current) {
          swiperInstanceRef.current.slideNext();
        }
        resetProgress();
      }

      progressFillRef.current.style.width = percent + "%";
      rafIDRef.current = requestAnimationFrame(animateProgress);
    }

    // Initialize Swiper on component mount
    swiperInstanceRef.current = new window.Swiper(swiperRef.current, {
      loop: true,
      speed: 600,
      grabCursor: true,
      allowTouchMove: true,
      navigation: {
        nextEl: '.progressbar-next',
        prevEl: '.progressbar-prev',
      },
      on: {
        slideChange: () => resetProgress(),
        touchStart: () => resetProgress(),
      }
    });

    resetProgress();
    rafIDRef.current = requestAnimationFrame(animateProgress);

    // Cleanup on unmount
    return () => {
      if (rafIDRef.current) cancelAnimationFrame(rafIDRef.current);
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }
    };
  }, []);

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
              <div ref={swiperRef} className="swiper swiper-progressbar">
                <div className="group-slider effectFade fadeUp">
                  <div className="progress-bar">
                    <div ref={progressFillRef} className="progress-fill" id="progressBar"></div>
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
                      <span className="prefix text-brand" style={{ display: 'inline-block' }}>K</span>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ paddingRight: '20px' }}>
                    <div className="title fw-semibold text-body-1">UPTIME FOR KEY FLOWS</div>
                    <div className="statistic-number">
                      <span className="number text-dark fw-semibold">95</span>
                      <span className="prefix text-brand" style={{ display: 'inline-block' }}>%</span>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ paddingRight: '20px' }}>
                    <div className="title fw-semibold text-body-1">ON TIME DELIVERY</div>
                    <div className="statistic-number">
                      <span className="number text-dark fw-semibold">99</span>
                      <span className="prefix text-brand" style={{ display: 'inline-block' }}>%</span>
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
