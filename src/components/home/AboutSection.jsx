import React from 'react';
import { Link } from 'react-router-dom';
import earthImg from '../../assets/earth.png';
import styles from "./AboutSection.module.css";

function AboutSection() {
  const locations = [
  "📍 Headquartered in Nagpur, India",
  "PAN-India presence across 18+ states",
  "Active projects in Indonesia, Africa & more",
];
  return (
    <div className="section-about-us section-spacing-lg" id="about">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-12">
            <div className="heading-section" style={{ marginBottom: '15px' }}>
              <div className="heading-sub fw-semibold effectFade fadeUp" style={{ display: 'inline-block', marginBottom: '15px' }}>About Us</div>
              <div className="heading-title text-gradient-2 effectFade fadeRotateX" style={{ lineHeight: '1.2' }}>A Legacy of Building  <br className="d-none d-md-block" /> Reliable IT Foundations!</div>
            </div>
          </div>
          <div className="col-lg-6 lg-mb-24 d-flex">
            <div className="col-left w-100 h-100 d-flex flex-column justify-content-between" style={{ minHeight: '100%' }}>
              <div className="position-relative z-5">
                <div className='${styles.locationMarquee} sub'>
  <div className={styles.locationTrack}>
    {[...locations, ...locations, ...locations].map((item, index) => (
      <React.Fragment key={index}>
        <span>{item}</span>
        <span className={styles.dot}></span>
      </React.Fragment>
    ))}
  </div>
</div>
                <h5 className="title fw-semibold text-white">Global Software <span className="text-brand">Solution since 1997</span></h5>
                <Link to="/contact" className="tf-btn">
                  Start a Project
                </Link>
              </div>
              <img className="effectFade fadeRotateX mt-auto" src={earthImg} alt="Earth" style={{ alignSelf: 'center', maxWidth: '100%' }} />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column">
            <div className="review-box mb-24 flex-grow-1 d-flex flex-column justify-content-center">
              <div className="fw-bold mb-12 text-brand" style={{ fontSize: '0.95rem', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                The Numbers Behind Our Impact
              </div>
              <div className="desc fw-semibold text-body-1" style={{ marginTop: '0' }}>Empowering 5,000+ bank branches, manufacturers, and global businesses through cutting-edge automation, seamless customer experiences, enhanced service delivery, and real-time decision support systems.</div>
              <div className="d-flex justify-content-between flex-wrap align-items-end gap-12 mt-20">
                <div>
                  <div className="d-flex gap-4 text mb-10">
                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6792 18.3019L18.1887 16.9057L20.4906 24L12.6792 18.3019ZM25.3585 9.13208H15.6604L12.6792 0L9.69811 9.13208H0L7.84906 14.7925L4.86792 23.9245L12.717 18.2641L17.5472 14.7925L25.3585 9.13208Z" fill="#219653" />
                    </svg>
                    Employees
                  </div>
                  <div className="d-flex gap-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <svg key={item} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="#3F3F46" />
                        <path d="M11.9996 16.4114L15.6496 15.4341L17.1746 20.4001L11.9996 16.4114ZM20.3996 9.99255H13.9746L11.9996 3.6001L10.0246 9.99255H3.59961L8.79961 13.9548L6.82461 20.3473L12.0246 16.385L15.2246 13.9548L20.3996 9.99255Z" fill="white" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="counter text-neutral-400">
                  <span className="number" data-speed="1500" data-to="400" data-inviewport="yes">400</span><span>+</span>
                </div>
              </div>
            </div>

            <div className="review-box flex-grow-1 d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-between flex-wrap align-items-end gap-12 border-bottom pb-4 mb-20" style={{ borderColor: 'var(--neutral-300)' }}>
                <div className="desc fw-semibold text-body-1 mb-0">Happy Clients</div>
                <div className="counter text-neutral-400">
                  <span className="number" data-speed="1500" data-to="180" data-inviewport="yes">180</span><span>+</span>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap align-items-end gap-12">
                <div className="desc fw-semibold text-body-1 mb-0">Years in Business</div>
                <div className="counter text-neutral-400">
                  <span className="number" data-speed="1500" data-to="27" data-inviewport="yes">27</span><span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AboutSection;
