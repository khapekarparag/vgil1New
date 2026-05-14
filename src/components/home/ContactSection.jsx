import React from 'react';

function ContactSection() {
  return (
    <div id="contact" className="section-spacing-lg">
      <div className="section-contact">
        <div className="contact-image">
          <img src="/assets/images/section/contact-image-bg.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="col-left">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">Contact</div>
                  <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                    Let’s Build <br /> Intelligent Things
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  <div className="contact-item effectFade fadeRotateX" style={{ border: '1px solid #000', padding: '20px', borderRadius: '16px' }}>
                    <div className="content">
                      <div className="title fw-bold mb-4" style={{ fontSize: '18px', color: '#ff0000' }}>Marketing</div>
                      <div className="text" style={{ fontSize: '14px', marginBottom: '2px', lineHeight: '1.2' }}>info@vgipl.in</div>
                      <div className="text" style={{ fontSize: '14px', lineHeight: '1.2' }}>+91 62626 86865</div>
                    </div>
                  </div>
                  <div className="contact-item effectFade fadeRotateX" data-delay="0.1" style={{ border: '1px solid #000', padding: '20px', borderRadius: '16px' }}>
                    <div className="content">
                      <div className="title fw-bold mb-4" style={{ fontSize: '18px', color: '#ff0000' }}>HR</div>
                      <div className="text" style={{ fontSize: '14px', marginBottom: '2px', lineHeight: '1.2' }}>hr@vgipl.in</div>
                      <div className="text" style={{ fontSize: '14px', lineHeight: '1.2' }}>+91 77988 80958</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="form-contact effectFade fadeUp">
                <h4 className="heading fw-semibold">Fill this form below</h4>
                <fieldset className="mb-21">
                  <label className="fw-semibold text-body-3 mb-20">Your Name</label>
                  <input className="" type="text" placeholder="Enter your full name" required />
                </fieldset>
                <fieldset className="mb-21">
                  <label className="fw-semibold text-body-3 mb-20">Your Phone</label>
                  <input className="" type="text" placeholder="Enter the e-mail" required />
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
  );
}

export default ContactSection;
