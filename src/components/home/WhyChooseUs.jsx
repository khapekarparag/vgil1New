import React from 'react';
import cyberLogo from '../../assets/home/cyber-logo.png';
import styles from "./WhyChooseUs.module.css";

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
                            <div className={styles.performanceGrid}>
                                {[
                                    { value: 95, label: "Accuracy", icon: "" },
                                    { value: 90, label: "Rapid", icon: "" },
                                    { value: 98, label: "Trusted", icon: "" },
                                    { value: 85, label: "Efficient", icon: "" },
                                ].map((metric) => (
                                    <div
                                        key={metric.label}
                                        className={`${styles.metricCard} effectFade fadeUp`}
                                    >
                                        <div
                                            className={styles.progressCircle}
                                            style={{
                                                "--progress": metric.value,
                                            }}
                                        >
                                            <svg viewBox="0 0 120 120">
                                                <circle
                                                    className={styles.bgCircle}
                                                    cx="60"
                                                    cy="60"
                                                    r="52"
                                                />
                                                <circle
                                                    className={styles.progressRing}
                                                    cx="60"
                                                    cy="60"
                                                    r="52"
                                                />
                                            </svg>

                                            <div className={styles.metricCenter}>
                                                <span className={styles.metricValue}>
                                                    {metric.value}%
                                                </span>
                                            </div>
                                        </div>

                                        <div className={styles.metricLabel}>
                                            <span>{metric.icon}</span>
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="content">
                                <h6 className="fw-semibold title">Performance You Can Trust</h6>
                                <p className="text text-secondary">We measure what matters: Accurate, Rapid, Trusted, and Efficient — so every sprint ships business value, not just features.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="benefits-box benefits-step effectFade fadeUp">
                            <div className="benefits-step-inner">
                                <div className="line-step"></div>
                                <div className="step-item">
                                    <i className={`icon icon-check-solid ${styles.checkIcon}`}></i>
                                </div>
                                <div className="step-item">
                                    <i className={`icon icon-check-solid ${styles.checkIcon}`}></i>
                                </div>
                                <div className="step-item">
                                    <i className={`icon icon-check-solid ${styles.checkIcon}`}></i>
                                </div>
                            </div>
                            <div className="content">
                                <h6 className="fw-semibold title">From Testing to Trustworthy Intelligence</h6>
                                <p className="text text-secondary">From day one, we optimize for what matters most — accuracy, speed, security and cost efficiency. Every system is continuously monitored, tested and improved to ensure reliable, real-world performance. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="benefits-box benefits-secure ">
                            <div className="benefits-secure-inner text-center">
                                <img src={cyberLogo} alt="Cyber Security Logo" />
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

                {/* Why Choose Us: Expertise Section */}
                {/* <div className="heading-section center" style={{ marginTop: '100px', marginBottom: '60px' }}>
                    <div className="heading-sub fw-semibold effectFade fadeUp">Expertise</div>
                    <div className="heading-title text-gradient-3 effectFade fadeRotateX">Expertise That Moves Business Forward</div>
                </div> */}
                {/* <div className="row">
                    <div className="col-lg-6 col-md-6 mb-24">
                        <div className="benefits-box h-100 effectFade fadeUp" style={{ padding: '30px' }}>
                            <div className="content">
                                <div className="d-flex align-items-center gap-12 mb-15">
                                    <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.08)' }}>
                                        <i className="icon icon-bullseye-solid" style={{ color: '#ff3b30', fontSize: '1.2rem' }}></i>
                                    </div>
                                    <h6 className="fw-semibold title mb-0" style={{ fontSize: '18px' }}>1. DOMAIN EXPERTISE</h6>
                                </div>
                                <p className="text text-secondary" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                    VGIL has been a pioneer in the ever-evolving technology space in the verticals of Banking & Finance, eGovernance, ERP & DC / DR Solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-24">
                        <div className="benefits-box h-100 effectFade fadeUp" style={{ padding: '30px' }}>
                            <div className="content">
                                <div className="d-flex align-items-center gap-12 mb-15">
                                    <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.08)' }}>
                                        <i className="icon icon-user-check-solid" style={{ color: '#ff3b30', fontSize: '1.2rem' }}></i>
                                    </div>
                                    <h6 className="fw-semibold title mb-0" style={{ fontSize: '18px' }}>2. Trusted by 500+ Enterprises</h6>
                                </div>
                                <p className="text text-secondary" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                    Support multiple types of organizations, including Bank Branches, Manufacturing Setups, and Business Houses.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-24 mb-md-0">
                        <div className="benefits-box h-100 effectFade fadeUp" style={{ padding: '30px' }}>
                            <div className="content">
                                <div className="d-flex align-items-center gap-12 mb-15">
                                    <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.08)' }}>
                                        <i className="icon icon-bolt-solid" style={{ color: '#ff3b30', fontSize: '1.2rem' }}></i>
                                    </div>
                                    <h6 className="fw-semibold title mb-0" style={{ fontSize: '18px' }}>3. 400+ Engineers</h6>
                                </div>
                                <p className="text text-secondary" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                    Certified experts managing India's critical infrastructure. PAN-India presence with 8+ years avg experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="benefits-box h-100 effectFade fadeUp" style={{ padding: '30px' }}>
                            <div className="content">
                                <div className="d-flex align-items-center gap-12 mb-15">
                                    <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.08)' }}>
                                        <i className="icon icon-cog" style={{ color: '#ff3b30', fontSize: '1.2rem' }}></i>
                                    </div>
                                    <h6 className="fw-semibold title mb-0" style={{ fontSize: '18px' }}>4. Future Ready Solutions</h6>
                                </div>
                                <p className="text text-secondary" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                    End-to-end lifecycle management for critical IT infrastructure: Consulting & Design → Implementation → 24x7 Operations → AMC Support
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default WhyChooseUs;
