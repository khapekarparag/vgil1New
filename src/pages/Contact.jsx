import React from 'react';
import { Link } from 'react-router-dom';
import HeroGradient from '../components/home/HeroGradient';

function Contact() {
  return (
    <>
      <HeroGradient />

      <div id="contact" className="flat-spacing">
        <div className="section-contact p-0">
          <div className="container">
            <div className="row mb-60">
              <div className="col-md-4 md-mb-24">
                <div className="box-contact-item text-center effectFade fadeUp" style={{ 
                  height: '320px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  padding: '40px 20px', 
                  backgroundColor: '#ffffff', 
                  borderRadius: '24px', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
                  border: '1.5px solid #000000',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                }}>
                  <h4 className="title fw-bold mb-24" style={{ fontSize: '22px', color: '#ff0000' }}>Marketing</h4>
                  <div className="contact-details" style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.2' }}>
                    <a className="text d-block mb-2 link1" href="mailto:info@vgipl.in">info@vgipl.in</a>
                    <a className="text d-block mb-12 link1" href="mailto:virtualdigital@vgipl.in">virtualdigital@vgipl.in</a>
                    <a href="tel:+916262686865" className="text d-block mb-2 link1">+91 62626 86865</a>
                    <a href="tel:+917798880931" className="text d-block link1">+91 77988 80931</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 md-mb-24">
                <div className="box-contact-item text-center effectFade fadeUp" data-delay="0.1" style={{ 
                  height: '320px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  padding: '40px 20px', 
                  backgroundColor: '#ffffff', 
                  borderRadius: '24px', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
                  border: '1.5px solid #000000',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                }}>
                  <h4 className="title fw-bold mb-24" style={{ fontSize: '22px', color: '#ff0000' }}>HR</h4>
                  <div className="contact-details" style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.2' }}>
                    <a className="text d-block mb-12 link1" href="mailto:hr@vgipl.in">hr@vgipl.in</a>
                    <a href="tel:+917798880958" className="text d-block link1">+91 77988 80958</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box-contact-item text-center effectFade fadeUp" data-delay="0.2" style={{ 
                  height: '320px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  padding: '40px 20px', 
                  backgroundColor: '#ffffff', 
                  borderRadius: '24px', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
                  border: '1.5px solid #000000',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                }}>
                  <h4 className="title fw-bold mb-24" style={{ fontSize: '22px', color: '#ff0000' }}>Investor</h4>
                  <div className="contact-details" style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.2' }}>
                    <div className="fw-bold text-dark mb-4" style={{ fontSize: '18px' }}>Anjali Padhye</div>
                    <div className="text-secondary mb-12" style={{ fontSize: '13px', lineHeight: '1.3', fontWeight: '500' }}>Company Secretary & <br/> Compliance Officer</div>
                    <a className="text d-block mb-8 link1" href="mailto:investors@vgipl.in">investors@vgipl.in</a>
                    <a href="tel:+919823290368" className="text d-block link1">+91 98232 90368</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 lg-mb-24">
                <div className="col-left p-0">
                  <div className="mb-24">
                    <div className="heading-section mb-48">
                      <div className="heading-sub fw-semibold effectFade fadeUp">Contact</div>
                      <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                        Let’s Build <br /> Intelligent Things
                      </div>
                    </div>
                    <p className="text effectFade fadeUp">combining creativity, technology, and strategy to craft solutions that think, adapt, and inspire. Connect with us to turn visionary ideas into meaningful, data-driven realities.</p>
                  </div>
                  <div className="tf-social-1 gap-24 effectFade fadeRotateX">
                    <a href="https://x.com/Virtualvgipl" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
                      Twitter / X
                      <div className="social-item">
                        <i className="icon icon-twitter-x"></i>
                      </div>
                    </a>
                    <a href="https://www.facebook.com/VirtualGalaxyInfotechLtd" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
                      Facebook
                      <div className="social-item">
                        <i className="icon icon-facebook-f"></i>
                      </div>
                    </a>
                    <a href="https://www.instagram.com/virtualgalaxyinfotech/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
                      Instagram
                      <div className="social-item">
                        <i className="icon icon-instagram"></i>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/company/virtualgalaxy/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
                      Linkedin
                      <div className="social-item">
                        <i className="icon icon-linkedin-in"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="form-contact m-0 effectFade fadeUp" onSubmit={e => e.preventDefault()}>
                  <h4 className="heading fw-semibold">Fill this form below</h4>
                  <fieldset className="mb-21">
                    <label className="fw-semibold text-body-3 mb-20">Your Name</label>
                    <input className="" type="text" placeholder="Enter your full name" required />
                  </fieldset>
                  <fieldset className="mb-21">
                    <label className="fw-semibold text-body-3 mb-20">Your Phone</label>
                    <input className="" type="text" placeholder="Enter the phone" required />
                  </fieldset>
                  <fieldset className="mb-18">
                    <label className="fw-semibold text-body-3 mb-0">More About The Project</label>
                    <textarea name="text" className=""></textarea>
                  </fieldset>
                  <div className="attachment d-flex gap-8 align-items-center">
                    <i className="icon icon-paperclip-solid fs-24"></i>
                    <div className="fw-semibold text-body-3">Add an Attachment</div>
                  </div>
                  <button type="submit" className="tf-btn w-100">Submit Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-maps flat-spacing pt-0">
        <div className="container">
          {/* Nagpur Branch */}
          <div className="row mb-40 align-items-center effectFade fadeUp">
            <div className="col-lg-5 lg-mb-24">
              <div className="box-address" style={{ 
                backgroundColor: '#fff5f5', 
                borderRadius: '32px', 
                height: '420px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                padding: '60px', 
                border: '1.5px solid #000000',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff5f5'}>
                <img src="/src/assets/Contact-img/maharashtra.png" alt="Maharashtra" style={{ width: '70px', marginBottom: '30px' }} />
                <h3 className="fw-bold mb-16" style={{ fontSize: '32px' }}>Nagpur</h3>
                <p className="text-body-1 mb-24" style={{ lineHeight: '1.7', color: '#4b5563', fontSize: '16px' }}>
                  Plot No. 26, The Nagpur Divisional Insurance Employees Co-operative Housing Society Limited, Vivekanand Nagar, Nagpur, Maharashtra, India - 440015
                </p>
                <a href="https://www.google.com/maps/place/Virtual+Galaxy+Infotech+Ltd/@21.1236532,79.0838183,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4c09063544445:0xc47e3a968600d81!8m2!3d21.1236532!4d79.0863932!16s%2Fg%2F1tcxcjyg" target="_blank" rel="noreferrer" className="tf-link-icon fw-semibold" style={{ fontSize: '18px', color: '#ff0000', textDecoration: 'underline' }}>
                  Get directions
                  <i className="icon icon-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="wg-map" style={{ borderRadius: '32px', overflow: 'hidden', height: '420px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1.5px solid #000000', margin: 0 }}>
                <iframe
                  src="https://maps.google.com/maps?q=Virtual%20Galaxy%20Infotech%20Ltd,%20Vivekanand%20Nagar,%20Nagpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>

          {/* Pune Branch */}
          <div className="row align-items-center effectFade fadeUp">
            <div className="col-lg-7 order-lg-1 order-2">
              <div className="wg-map" style={{ borderRadius: '32px', overflow: 'hidden', height: '420px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1.5px solid #000000', margin: 0 }}>
                <iframe
                  src="https://maps.google.com/maps?q=GT%20Arcade,%20B%20T%20Kawade%20Road,%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
            <div className="col-lg-5 order-lg-2 order-1 lg-mb-24">
              <div className="box-address" style={{ 
                backgroundColor: '#fff5f5', 
                borderRadius: '32px', 
                height: '420px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                padding: '60px', 
                border: '1.5px solid #000000',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff5f5'}>
                <img src="/src/assets/Contact-img/maharashtra.png" alt="Maharashtra" style={{ width: '70px', marginBottom: '30px' }} />
                <h3 className="fw-bold mb-16" style={{ fontSize: '32px' }}>Pune</h3>
                <p className="text-body-1 mb-24" style={{ lineHeight: '1.7', color: '#4b5563', fontSize: '16px' }}>
                  302, GT Arcade, B T Kawade Road, Uday Bagh, Ghorpadi, Pune - 411013
                </p>
                <a href="https://www.google.com/maps/place/GT+Arcade/@18.5109594,73.9015942,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c1946890f5b1:0x7d287114b0365787!8m2!3d18.5109594!4d18.5041691!16s%2Fg%2F11b6m_9_6q" target="_blank" rel="noreferrer" className="tf-link-icon fw-semibold" style={{ fontSize: '18px', color: '#ff0000', textDecoration: 'underline' }}>
                  Get directions
                  <i className="icon icon-arrow-top-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-faqs flat-spacing">
        <div className="container">
          <div className="heading-section center mb-64">
            <div className="heading-sub fw-semibold effectFade fadeUp">FAQs</div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">
              Frequently Asked <br />Questions
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion-asked" id="accordion-asked">
                {[
                  { id: 1, title: 'What’s the typical timeline from idea to v1?' },
                  { id: 2, title: 'What do we need to start?' },
                  { id: 3, title: 'Which models/stack do you use?' },
                  { id: 4, title: 'Are model/API costs included in pricing?' },
                ].map((faq, index) => (
                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay={`0.${index}`} key={faq.id}>
                    <div className="accordion-asked-title" id={`asked${faq.id}`}>
                      <button className={`accordion-button text-body-1 fw-semibold ${index !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`} aria-expanded={index === 0 ? "true" : "false"} aria-controls={`collapse${faq.id}`}>
                        {faq.title}
                        <span className="right-icon"></span>
                      </button>
                    </div>
                    <div id={`collapse${faq.id}`} role="region" className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`asked${faq.id}`} data-bs-parent="#accordion-asked">
                      <div className="accordion-body">
                        A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We’ll run a kickoff workshop to align scope.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
