import React from 'react';
import contactBg from '../../assets/Contact-img/Contact@2x.png';
import './ContactSection.css';

function ContactSection() {
  return (
    <div id="contact" className="container-fluid w-100 p-0 section-spacing-lg">
      <div className="section-contact">
        <div className="contact-image">
          <img src={contactBg} alt="" />
        </div>

        <div className="container contact-container-custom" style={{ position: 'relative', zIndex: 2 }}>
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
  );
}

export default ContactSection;
