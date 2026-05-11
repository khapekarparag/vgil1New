import React from 'react';

function WhyChooseUs() {
  return (
    <div className="section-benefits section-spacing-grouped">
        <div className="container">
            <div className="heading-section center mb-70">
                <div className="heading-sub fw-semibold effectFade fadeUp">Benefits</div>
                <div className="heading-title text-gradient-3 effectFade fadeRotateX">Why Choose Us</div>
            </div>
            <div className="row mb-24">
                <div className="col-lg-7">
                    <div className="benefits-box benefits-progress">
                        <div className="benefits-progress-inner">
                            <div className="benefits-progress-item">
                                <div className="progress-line" data-progress="100" style={{ backgroundColor: '#ff3b30' }}></div>
                                <div className="progress-text fw-semibold">
                                    <i className="icon icon-bullseye-solid"></i>
                                    Accuracy
                                </div>
                            </div>
                            <div className="benefits-progress-item">
                                <div className="progress-line" data-progress="100" style={{ backgroundColor: '#ff3b30' }}></div>
                                <div className="progress-text fw-semibold">
                                    <i className="icon icon-tachometer-alt-solid"></i>
                                    Latency
                                </div>
                            </div>
                            <div className="benefits-progress-item">
                                <div className="progress-line" data-progress="100" style={{ backgroundColor: '#ff3b30' }}></div>
                                <div className="progress-text fw-semibold">
                                    <i className="icon icon-shield-alt-solid"></i>
                                    Safety
                                </div>
                            </div>
                            <div className="benefits-progress-item">
                                <div className="progress-line" data-progress="100" style={{ backgroundColor: '#ff3b30' }}></div>
                                <div className="progress-text fw-semibold">
                                    <i className="icon icon-coins-solid"></i>
                                    Cost
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <h6 className="fw-semibold title">Outcome over Output</h6>
                            <p className="text text-secondary">We measure what matters - accuracy, latency, safety, and <br /> cost - so every sprint ships business value, not just features.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="benefits-box benefits-step effectFade fadeUp">
                        <div className="benefits-step-inner">
                            <div className="line-step"></div>
                            <div className="step-item">
                                <i className="icon icon-check-solid"></i>
                            </div>
                            <div className="step-item">
                                <i className="icon icon-check-solid"></i>
                            </div>
                            <div className="step-item">
                                <i className="icon icon-check-solid"></i>
                            </div>
                        </div>
                        <div className="content">
                            <h6 className="fw-semibold title">Eval-First Reliability</h6>
                            <p className="text text-secondary">From day one, we run offline/online evals, canary tests, and tracing. You see how models perform - and why.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5">
                    <div className="benefits-box benefits-secure ">
                        <div className="benefits-secure-inner text-center">
                            <img src="/assets/images/item/benefits-1.svg" alt="" />
                        </div>
                        <div className="content">
                            <h6 className="fw-semibold title">Secure by Design</h6>
                            <p className="text text-secondary">PII handling, SSO/SAML, RBAC, encryption, and audit trails -built in, not bolted on. Enterprise-ready from the start.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="benefits-box benefits-design">
                        <div className="benefits-design-inner">
                            <img className="item-img-1" src="/assets/images/item/benefits-2.svg" alt="" />
                            <img className="item-img-2 rightleft" src="/assets/images/item/benefits-3.png" alt="" />
                            <img className="item-img-3 updown" src="/assets/images/item/benefits-4.png" alt="" />
                        </div>
                        <div className="content">
                            <h6 className="fw-semibold title">Design-Led AI Experiences</h6>
                            <p className="text text-secondary">We craft prompts, interfaces, and guardrails that feel intuitive - so adoption rises and support tickets fall.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WhyChooseUs;
