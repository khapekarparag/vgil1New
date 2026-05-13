import React from 'react';

function ServiceSingleDetails({ service }) {
  if (!service) return null;

  return (
    <div id="services" className="section-services-single" style={{ background: '#fff', color: '#111827', paddingBottom: '100px' }}>
      <div className="container">
        
        {/* Our Approach Section */}
        <div className="py-120 reveal-up active" style={{ position: 'relative', marginBottom: '80px' }}>
          <div className="heading-section center mb-100">
            <h2 className="premium-heading heading-accent" style={{ fontSize: '36px', color: '#0f172a' }}>Our Approach</h2>
            <p className="text-body-1" style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              A strategic methodology designed for measurable impact and seamless execution.
            </p>
          </div>
          
          <div className="approach-horizontal" style={{ padding: '40px 0' }}>
            {/* The background line */}
            <div className="approach-line"></div>
            
            {service.includes.slice(0, 3).map((step, idx) => (
              <div key={idx} className="approach-step">
                <div className="step-circle">
                  <div className="step-number-internal">{idx + 1}</div>
                  <i className={`icon icon-${idx === 0 ? 'file-search-solid' : idx === 1 ? 'sync-alt-solid' : 'shield-check-solid'}`}></i>
                </div>
                <h4 className="fw-bold mb-16" style={{ color: '#0f172a', fontSize: '20px' }}>{step}</h4>
                <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', maxWidth: '280px', margin: '0 auto' }}>
                  Comprehensive {step.toLowerCase()} phase to ensure your requirements are met with precision and excellence.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Grid */}
        <div className="row justify-content-between align-items-center mb-120 py-100" style={{ background: '#f8fafc', borderRadius: '56px', padding: '0 60px', marginTop: '60px' }}>
          <div className="col-lg-5 col-md-12">
            <h2 className="premium-heading" style={{ fontSize: '42px', textAlign: 'left', color: '#0f172a', marginBottom: '32px' }}>Key Deliverables</h2>
            <p className="text-body-2 mb-40" style={{ color: '#64748b', fontSize: '16px' }}>
              We provide a complete suite of high-performance assets tailored to your goals.
            </p>
            <div className="row g-4">
              {service.keyDeliverables.map((item, idx) => (
                <div key={idx} className="col-12">
                  <div className="d-flex align-items-center gap-20 p-24" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                    <div style={{ width: '36px', height: '36px', background: 'rgba(255, 77, 0, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="icon icon-check-solid" style={{ color: '#ff4d00', fontSize: '14px' }}></i>
                    </div>
                    <span className="fw-bold" style={{ color: '#334155', fontSize: '16px' }}>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="hero-img-box" style={{ background: '#fff', padding: '0' }}>
              <img src="/assets/images/section/service-single-2.jpg" alt="" style={{ borderRadius: '32px', width: '100%' }} />
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="row mb-120 reveal-up active">
          <div className="col-12 text-center mb-60">
            <h2 className="premium-heading" style={{ fontSize: '32px' }}>Proven Results</h2>
          </div>
          <div className="col-12">
            <div className="glass-card" style={{ padding: '60px 40px', background: '#fff', border: '1px solid #e2e8f0' }}>
              <div className="row g-4 text-center">
                {service.metrics.map((metric, idx) => (
                  <div key={idx} className="col-md-4">
                    <div className="metric-item">
                      <span className="metric-value" style={{ fontSize: '56px', color: '#ff4d00' }}>{metric.value}</span>
                      <span className="metric-label" style={{ letterSpacing: '2px' }}>{metric.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="row reveal-up active">
          <div className="col-12">
            <div className="glass-card text-center" style={{ padding: '80px 40px', background: 'linear-gradient(135deg, rgba(255, 77, 0, 0.05), #fff)', border: '1px solid rgba(255, 77, 0, 0.2)' }}>
              <h2 className="premium-heading" style={{ fontSize: '42px', color: '#0f172a' }}>Ready to Get Started?</h2>
              <p className="text-body-1 mb-32" style={{ color: '#64748b' }}>Experience the difference with our expert solutions.</p>
              <a href="/contact" className="tf-btn" style={{ background: '#ff4d00', border: 'none', padding: '18px 40px' }}>
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSingleDetails;
