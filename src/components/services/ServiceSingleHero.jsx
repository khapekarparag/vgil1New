import React from 'react';

function ServiceSingleHero({ service }) {
  if (!service) return null;

  return (
    <div className="section-hero-premium" style={{ 
      padding: '120px 0', 
      background: '#fff', 
      position: 'relative', 
      display: 'block',
      width: '100%'
    }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Content Area */}
          <div className="col-lg-6 reveal-up active" style={{ position: 'relative', zIndex: 2 }}>
            <div className="service-excellence-badge mb-40">
              <div className="line" style={{ width: '40px', height: '3px', background: 'var(--svc-accent)', borderRadius: '2px' }}></div>
              <div className="text" style={{ fontWeight: '900', letterSpacing: '3px' }}>Service Excellence</div>
            </div>
            
            <h1 className="premium-heading" style={{ 
              fontSize: 'clamp(40px, 6vw, 72px)', 
              lineHeight: '1.2', 
              fontWeight: '900', 
              marginBottom: '32px', 
              color: 'var(--svc-text-main)',
              letterSpacing: '-2px'
            }}>
              {service.title}
            </h1>
            
            <h2 className="text-body-1 fw-semibold mb-20" style={{ color: 'var(--svc-accent)', fontSize: '20px' }}>
              {service.subtitle}
            </h2>
            
            <p className="text-body-2 mb-48" style={{ 
              color: 'var(--svc-text-muted)', 
              lineHeight: '1.7', 
              fontSize: '17px',
              maxWidth: '90%'
            }}>
              {service.longDescription}
            </p>
            
            <div className="d-flex flex-wrap gap-12 mt-40">
              {service.features.map((feature, idx) => (
                <div key={idx} className="feature-pill">
                  <div style={{ width: '8px', height: '8px', background: 'var(--svc-accent)', borderRadius: '50%' }}></div>
                  <span>{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Visual Area */}
          <div className="col-lg-6 reveal-up active" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-img-box" style={{ 
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              boxShadow: 'inset 0 0 40px rgba(255,255,255,1)'
            }}>
              <img 
                src={service.heroImage} 
                alt={service.title} 
                style={{ 
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))',
                  borderRadius: '24px'
                }} 
              />
              {/* Floating UI Elements */}
              <div className="floating-ui ui-1 animate-float">
                <i className="icon icon-code-solid"></i>
              </div>
              <div className="floating-ui ui-2 animate-float" style={{ animationDelay: '1s' }}>
                <i className="icon icon-desktop-solid"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSingleHero;
