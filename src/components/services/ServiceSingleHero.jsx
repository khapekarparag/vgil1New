import React from 'react';

function ServiceSingleHero({ service }) {
  if (!service) return null;

  return (
    <div className="section-hero v2">
      <div className="hero-image" style={{ backgroundImage: `url(${service.heroImage})` }}></div>
      <div className="container">
        <div className="content-wrap text-center">
          <div className="title text-display-2 effectFade fadeRotateX">
            <span className="title1 fw-semibold text-gradient-1">{service.title}</span>
            <br />
            <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
              <span className="fw-semibold text-gradient-1">{service.subtitle}</span>
              <div className="title-icon">
                <div className="box"></div>
                <div className="title-icon-wrap">
                  <img src="/assets/images/item/item-13.svg" alt="" className="img-1 img-transform-3" />
                  <img src="/assets/images/item/item-14.svg" alt="" className="img-2 img-transform-3" />
                  <img src="/assets/images/item/item-15.svg" alt="" className="img-3 img-transform-3" />
                </div>
              </div>
            </div>
          </div>
          <p className="text text-body-3 effectFade fadeUp">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceSingleHero;
