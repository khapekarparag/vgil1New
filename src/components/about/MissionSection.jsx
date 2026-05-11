import React from 'react';
import earthImg from '../../assets/earth.png';

function MissionSection() {
  return (
    <div className="section-about-us flat-spacing" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section">
              <div className="heading-sub fw-semibold effectFade fadeUp">About Us</div>
              <div className="heading-title text-gradient-2 effectFade fadeRotateX">Human-Centered AI, <br /> Built for Production</div>
            </div>
          </div>
          <div className="col-xxl-7 col-lg-6 lg-mb-24">
            <div className="col-left">
              <div className="position-relative z-5">
                <div className="sub text-white">
                  <span className="dot"></span>
                  Available for worldwide project
                </div>
                <h5 className="title fw-semibold text-white">Based in <span className="text-brand">Nagpur & Pune, Maharashtra</span></h5>
                <a href="/contact" className="tf-btn">
                  Start a Project
                </a>
              </div>
              <img className="effectFade fadeRotateX" src={earthImg} alt="Earth" />
            </div>
          </div>
          <div className="col-xxl-5 col-lg-6">
            <div className="mission-box mb-24" style={{ background: '#f4f4f5', padding: '30px', borderRadius: '24px' }}>
              <h4 className="title fw-semibold mb-10" style={{ color: '#ff4d00' }}>Our Mission</h4>
              <div className="line" style={{ height: '1px', background: '#e4e4e7', margin: '15px 0' }}></div>
              <p className="text" style={{ color: '#3f3f46', fontSize: '16px', lineHeight: '1.6' }}>
                To deliver cutting-edge IT solutions that drive operational efficiency, enhance customer experience, and foster business growth. We are committed to providing reliable, tailored technology services that empower organizations to thrive in a fast-evolving digital landscape, while ensuring the highest levels of quality, security, and customer satisfaction.
              </p>
            </div>

            <div className="mission-box mb-24" style={{ background: '#f4f4f5', padding: '30px', borderRadius: '24px' }}>
              <h4 className="title fw-semibold mb-10" style={{ color: '#ff4d00' }}>Our Vision</h4>
              <div className="line" style={{ height: '1px', background: '#e4e4e7', margin: '15px 0' }}></div>
              <p className="text" style={{ color: '#3f3f46', fontSize: '16px', lineHeight: '1.6' }}>
                To empower businesses globally with innovative, scalable, and secure IT solutions, transforming the way they operate, and driving digital excellence for a smarter, more connected future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionSection;
