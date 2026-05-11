import React from 'react';
import { Link } from 'react-router-dom';
import earthImg from '../../assets/earth.png';


function AboutHero() {
  return (
    <div className="section-hero v1">
      <div className="hero-image">
      </div>
      <div className="container">
        <div className="content-wrap text-center">
          <div className="title text-display-2 effectFade fadeRotateX">
            <span className="title1 fw-semibold text-gradient-1">Aigocy Empowering</span>
            <br />
            <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
              <span className="fw-semibold text-gradient-1">Industries</span>
              <div className="title-icon">
                <div className="box"></div>
                <div className="title-icon-wrap">
                  <img src="/assets/images/item/item-10.svg" alt="" className="img-1 img-transform-3" />
                  <img src="/assets/images/item/item-11.svg" alt="" className="img-2 img-transform-3" />
                  <img src="/assets/images/item/item-12.svg" alt="" className="img-3 img-transform-3" />
                </div>
              </div>
            </div>
          </div>
          <p className="text effectFade fadeUp">
            We build human-centered AI solutions that transform workflows, enhance decision-making, <br /> and accelerate innovation across diverse global industries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
