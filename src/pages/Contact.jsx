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
                <div className="box-contact-item text-center effectFade fadeUp">
                  <i className="icon icon-envelope-solid"></i>
                  <h6 className="title fw-semibold">E-mail address</h6>
                  <a className="text" href="mailto:hello@youraiagency.com">
                    hello@youraiagency.com
                  </a>
                </div>
              </div>
              <div className="col-md-4 md-mb-24">
                <div className="box-contact-item text-center effectFade fadeUp" data-delay="0.1">
                  <i className="icon icon-headset-solid"></i>
                  <h6 className="title fw-semibold">Phone number</h6>
                  <a href="tel:+1(647)5550172" className="text">
                    +1 (647) 555 0172
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box-contact-item text-center effectFade fadeUp" data-delay="0.2">
                  <i className="icon icon-map-marker-solid"></i>
                  <h6 className="title fw-semibold">Our Location</h6>
                  <p className="text">
                    USA, New York – 1060 Str.
                  </p>
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
                    <a href="https://x.com/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
                      Twitter / X
                      <div className="social-item">
                        <i className="icon icon-twitter-x"></i>
                      </div>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
                      Facebook
                      <div className="social-item">
                        <i className="icon icon-facebook-f"></i>
                      </div>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-body-1 fw-semibold">
                      Instagram
                      <div className="social-item">
                        <i className="icon icon-instagram"></i>
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

      <div className="wg-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317859.6089702069!2d-0.075949!3d51.508112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sTower%20of%20London!5e0!3m2!1sen!2sus!4v1719221598456!5m2!1sen!2sus"
          height="660" style={{ border: 0, width: '100%' }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
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
