import React from 'react';

function ServiceSingleDetails({ service }) {
  if (!service) return null;

  return (
    <div id="services" className="section-services-single flat-spacing pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="top-image mb-40 effectFade fadeZoom">
              <img src={service.heroImage} alt={service.title} />
            </div>
          </div>
          <div className="col-12">
            <div className="heading fw-semibold mb-20 effectFade fadeUp">Innovative {service.title}</div>
          </div>
        </div>
        <div className="row mb-80">
          <div className="col-md-7 md-mb-24">
            <p className="text-secondary effectFade fadeUp">
              {service.longDescription}
            </p>
          </div>
          <div className="col-md-5">
            <p className="text-secondary mb-30 effectFade fadeUp">
              Our {service.title} approach is built on a foundation of excellence and innovation, ensuring that every project we undertake delivers maximum value to our clients.
            </p>
            <div className="list-tags effectFade fadeUp">
              {service.features.map((feature, idx) => (
                <a key={idx} href="#" className="tags-item fw-semibold">{feature.title}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="row mb-40">
          <div className="col-md-8 md-mb-24">
            <div className="image effectFade fadeUp">
              <img src="/assets/images/section/service-single-2.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="image effectFade fadeUp" data-delay="0.1">
              <img src="/assets/images/section/service-single-3.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="row mb-40">
          <div className="col-12">
            <div className="heading fw-semibold mb-20 effectFade fadeUp">What We Do?</div>
            <p className="text-secondary effectFade fadeUp">
              We help businesses harness the power of technology to innovate, automate, and scale efficiently. From idea to execution, our team delivers end-to-end solutions tailored to your goals. We design data-driven strategies, build intelligent systems, and integrate {service.title} into your workflows to enhance decision-making and operational performance.
              <br />
              <br />
              We partner closely with organizations to identify opportunities where {service.title} can drive tangible results—streamlining operations, reducing costs, and uncovering new sources of growth. Our multidisciplinary team blends technical expertise with industry knowledge to craft scalable, ethical, and sustainable solutions.
            </p>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-6 md-mb-24">
            <div className="heading fw-semibold mb-20 effectFade fadeUp">Key Deliverables</div>
            <p className="text-secondary mb-30 effectFade fadeUp">
              Our {service.title} process ensures that you receive high-quality deliverables that are ready for production and built for scale.
            </p>
            <ul className="list-text type-check mb-30">
              {service.keyDeliverables.map((item, idx) => (
                <li key={idx} className="effectFade fadeUp">
                  <i className="icon icon-check-solid"></i>
                  {item}
                </li>
              ))}
            </ul>
            <h6 className="title fw-semibold mb-16 effectFade fadeUp">What's included in this service?</h6>
            <ul className="d-grid gap-8 mb-30">
              {service.includes.map((item, idx) => (
                <li key={idx} className="effectFade fadeUp">+ {item}</li>
              ))}
            </ul>
            <a href="/contact" className="tf-btn effectFade fadeRotateX">
              Let’s Connect
            </a>
          </div>
          <div className="col-md-5">
            <div className="image bot-image effectFade fadeUp">
              <img src="/assets/images/section/service-single-4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSingleDetails;
