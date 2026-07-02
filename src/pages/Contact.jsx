import React from 'react';
import { Link } from 'react-router-dom';
import contactBg from '../assets/Contact-img/Contact@2x.png';
import './Contact.css';


function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero" style={{ 
        paddingTop: '160px', 
        paddingBottom: '100px', 
        backgroundImage: `url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '20px', color: '#ffffff' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            Have a project in mind, need technical support, or want to explore our digital and AI solutions? Reach out to our experts.
          </p>
        </div>
      </section>

      {/* ==================== CONTACT SECTION (Aigocy style) ==================== */}
      <div id="contact" className="flat-spacing pt-0">
        <div className="section-contact">

          {/* Background image */}
          <div className="contact-image">
            <img src={contactBg} alt="" />
          </div>

          <div className="container contact-container-custom">
            <div className="row">

              {/* ---- LEFT: Heading + Contact Items ---- */}
              <div className="col-lg-6">
                <div className="col-left">

                  <div className="heading-section mb-24">
                    <div className="contact-badge-pill effectFade fadeUp mb-12">
                      <span className="dot"></span>
                      Contact
                    </div>
                    <h2 className="heading-title effectFade fadeRotateX">
                      Let's Build <br /> Intelligent Things
                    </h2>
                  </div>

                  <div className="contact-items-wrapper">
                    {/* Email */}
                    <div className="contact-item effectFade fadeRotateX">
                      <div className="contact-item-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2"/>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                      </div>
                      <div className="contact-item-content">
                        <div className="contact-item-title">E-mail address</div>
                        <a href="mailto:info@vgipl.in" className="contact-item-text">info@vgipl.in</a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="contact-item effectFade fadeRotateX">
                      <div className="contact-item-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                        </svg>
                      </div>
                      <div className="contact-item-content">
                        <div className="contact-item-title">Phone number</div>
                        <a href="tel:+916262686865" className="contact-item-text">+91 62626 86865</a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* ---- RIGHT: Form ---- */}
              <div className="col-lg-6">
                <form className="form-contact effectFade fadeUp" onSubmit={e => e.preventDefault()}>
                  <h3 className="heading fw-semibold">Fill this form below</h3>

                  <fieldset className="mb-21">
                    <label className="fw-semibold text-body-3">Your Name</label>
                    <input type="text" placeholder="Enter your full name" required />
                  </fieldset>

                  <fieldset className="mb-21">
                    <label className="fw-semibold text-body-3">Email address</label>
                    <input type="email" placeholder="Enter your email address" required />
                  </fieldset>

                  <fieldset className="mb-21">
                    <label className="fw-semibold text-body-3">Your Phone</label>
                    <input type="tel" placeholder="Enter your phone number" required />
                  </fieldset>

                  <fieldset className="mb-18">
                    <label className="fw-semibold text-body-3">More About The Project</label>
                    <textarea name="text"></textarea>
                  </fieldset>

                  <div className="attachment d-flex gap-8 align-items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="attachment-icon">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                    </svg>
                    <div className="attachment-text fw-semibold">Add an Attachment</div>
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
