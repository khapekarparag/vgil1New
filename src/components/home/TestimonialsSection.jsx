import React from 'react';
import tes1 from "../../assets/Testimonials-img/testimonial-1.png";
import tes2 from "../../assets/Testimonials-img/testimonial-2.png";
import tes3 from "../../assets/Testimonials-img/testimonial-3.png";
import tes4 from "../../assets/Testimonials-img/testimonial-4.png";

function TestimonialsSection() {
  return (
    <div className="section-testimonials section-spacing">
      <div className="container">
        <div className="row justify-content-between">

          <div className="col-lg-5">
            <div className="col-left">

              <div className="heading-section mb-48">
                <div className="heading-sub fw-semibold style-1 effectFade fadeUp">
                  Testimonials
                </div>
                <div className="heading-title text-dark effectFade fadeRotateX">
                  What Our <br /> Clients Says
                </div>
              </div>

              <div className="swiper-testimonial_wrap effectFade fadeUp">
                <div className="swiper tf-swiper swiper-testimonial">

                  <div className="swiper-wrapper">

                    {/* 🔹 Slide 1 */}
                    <div className="swiper-slide">
                      <div>
                        <div className="top-icon d-flex gap-4">
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                          <i className="icon icon-star-solid"></i>
                        </div>

                        <div className="text-body-1 text-dark desc">
                          “We were looking for the services that have the ability to understand our business process and operating model. Our aim was to provide seamless IT solutions to our valuable Clients.”
                        </div>

                        <div className="cite">
                          <div className="name text-body-3 text-neutral-400 fw-semibold">
                            Mr. Sanjay Barde
                          </div>
                          <div className="sub text-body-3 text-neutral-400">
                            CEO, The Bhandara District Central Co. Op. Bank Limited
                          </div>
                        </div>
                      </div>
                    </div>


                    {/* 🔹 Slide 2 */}
                    <div className="swiper-slide">
                      <div>
                        <div className="top-icon">
                          <svg width="23" height="20" viewBox="0 0 23 20">
                            <path
                              d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z"
                              fill="#FD3A25"
                            />
                          </svg>
                        </div>

                        <div className="text-body-1 text-dark desc">
                          “With VGIL's E-Banker, we have a partner to support both our Bank Operations and Customer Service 24/7. VGIL's E-Banker Core Banking Solution has helped channelize our products and services in a more customer-oriented manner and deliver excellence in the long run.”
                        </div>

                        <div className="cite">
                          <div className="name text-body-3 text-neutral-400 fw-semibold">
                            Mr. Ashutosh Deshmukh
                          </div>
                          <div className="sub text-body-3 text-neutral-400">
                            CEO, The Jalna District Central Co. Op. Bank Limited
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 🔹 Slide 3 */}
                    <div className="swiper-slide">
                      <div>
                        <div className="top-icon">
                          <svg width="23" height="20" viewBox="0 0 23 20">
                            <path
                              d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z"
                              fill="#FD3A25"
                            />
                          </svg>
                        </div>

                        <div className="text-body-1 text-dark desc">
                          “I am very pleased with your Project Management capability. Your team has excellent communication skills and a fat response and turn around time. Highest work quality. I can say that VGIL is an honest and decent group of people with the highest work ethic I have ever seen for a development team.”.
                        </div>

                        <div className="cite">
                          <div className="name text-body-3 text-neutral-400 fw-semibold">
                            Mr. Arvind Deshpande
                          </div>
                          <div className="sub text-body-3 text-neutral-400">
                            CEO, The Yavatmal District Central Co. Op. Bank Limited
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 🔹 Slide 4 */}
                    <div className="swiper-slide">
                      <div>
                        <div className="top-icon">
                          <svg width="23" height="20" viewBox="0 0 23 20">
                            <path
                              d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z"
                              fill="#FD3A25"
                            />
                          </svg>
                        </div>

                        <div className="text-body-1 text-dark desc">
                          "“The VGIL's “E-Banker” (Core Banking Solution) has exceeded our expectations and helped to keep our bank on the leading edge of technology and customer experience. I would recommend this product to any bank which requires a solid banking technology partner for the long term.”
                        </div>

                        <div className="cite">
                          <div className="name text-body-3 text-neutral-400 fw-semibold">
                            Mr. Barkul
                          </div>
                          <div className="sub text-body-3 text-neutral-400">
                            General Manager (IT & Accounts), The Osmanabad District Central Co. Op. Bank Limited
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*slide 5*/}
                    <div className="swiper-slide">
                      <div>
                        <div className="top-icon">
                          <svg width="23" height="20" viewBox="0 0 23 20">
                            <path
                              d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z"
                              fill="#FD3A25"
                            />
                          </svg>
                        </div>

                        <div className="text-body-1 text-dark desc">
                          ““We are greatly impressed by the professional attitude shown by team VGIL whether it is the consultants, sales or after-sales support that has been given to us. There has been excellent support in terms of providing the services well on time & they truly stand by their motto in terms of creating enduring value for customers.”
                        </div>

                        <div className="cite">
                          <div className="name text-body-3 text-neutral-400 fw-semibold">
                            Mr. Somnath Ethape
                          </div>
                          <div className="sub text-body-3 text-neutral-400">
                            General Manager (IT), The Buldhana District Central Co. Op. Bank Limited
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

                {/* Slider Controls */}
                <div className="group-slider">
                  <div className="group-btn-slider">
                    <div className="btn-slider nav-prev-swiper testimonials-prev">
                      <i className="icon icon-angle-left-solid"></i>
                    </div>
                    <div className="btn-slider nav-next-swiper testimonials-next">
                      <i className="icon icon-angle-right-solid"></i>
                    </div>
                  </div>
                  <div className="testimonials-pagination"></div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="col-lg-6">
            <div className="swiper sw-main-image effectFade fadeUp">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-image">
                    <img src={tes1} alt="testimonial 1" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-image">
                    <img src={tes2} alt="testimonial 2" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-image">
                    <img src={tes3} alt="testimonial 3" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-image">
                    <img src={tes4} alt="testimonial 4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;