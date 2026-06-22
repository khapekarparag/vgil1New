import vgLogo from '../../assets/home/ownwer-img/vg-logo-2.png';

function FeaturesSection() {
  return (
    <div className="section-features flat-spacing pt-0">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold effectFade fadeUp">Features</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">The complete AI-native Feature Set</div>
        </div>
      </div>
      <div className="position-relative">
        <div className="container z-5">
          <div className="features-wrap justify-content-between">
            <div className="features-col col-left lg-mb-24">
              <div className="features-item effectFade fadeUp" style={{ padding: '24px 20px', marginBottom: '20px' }}>
                <i className="icon icon-robot-solid" style={{ fontSize: '32px' }}></i>
                <h6 className="title fw-semibold" style={{ fontSize: '18px', marginTop: '15px' }}>Autonomous AI Operations</h6>
                <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Automate routine tasks end-to-end — AI plans, executes, and reports with safety checks, logs, and smooth human handover.
                </p>
              </div>
              <div className="features-item effectFade fadeUp" style={{ padding: '24px 20px', marginBottom: '20px' }}>
                <i className="icon icon-clipboard-check-solid" style={{ fontSize: '32px' }}></i>
                <h6 className="title fw-semibold" style={{ fontSize: '18px', marginTop: '15px' }}>Quality-First Validation</h6>
                <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Track accuracy, latency, safety, and spend from day zero. Our evals + dashboards ensure models stay dependable and costs stay controlled.
                </p>
              </div>
              <div className="features-item effectFade fadeUp" style={{ padding: '24px 20px', marginBottom: '20px' }}>
                <i className="icon icon-book-solid" style={{ fontSize: '32px' }}></i>
                <h6 className="title fw-semibold" style={{ fontSize: '18px', marginTop: '15px' }}>Private Data Intelligence</h6>
                <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Unlock docs, tickets, and wikis with secure RAG — delivers fresh, cited, and explainable responses from your own knowledge base.
                </p>
              </div>
            </div>
            
            <div className="features-center flex-shrink d-flex align-items-center justify-content-center" style={{ background: '#ffff', padding: '40px 30px', borderRadius: '40px', border: '1px solid #27272a', minWidth: '220px' }}>
              <img src={vgLogo} alt="Virtual Galaxy Logo" style={{ maxWidth: '180px', width: '100%', height: 'auto' }} />
            </div>
            
            <div className="features-col col-right">
              <div className="features-item effectFade fadeUp" data-delay="0.1" style={{ padding: '24px 20px', marginBottom: '20px' }}>
                <i className="icon icon-user-check-solid" style={{ fontSize: '32px' }}></i>
                <h6 className="title fw-semibold" style={{ fontSize: '18px', marginTop: '15px' }}>Intuitive AI Experience</h6>
                <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Interfaces, prompts, and errors built for real people — so the smartest option is also the simplest one to use.
                </p>
              </div>
              <div className="features-item effectFade fadeUp" data-delay="0.1" style={{ padding: '24px 20px', marginBottom: '20px' }}>
                <i className="icon icon-shield-alt-solid" style={{ fontSize: '32px' }}></i>
                <h6 className="title fw-semibold" style={{ fontSize: '18px', marginTop: '15px' }}>Built-in Enterprise Security</h6>
                <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Hardened from day one — SSO, role-based access, secret management, and full compliance baked into the architecture.
                </p>
              </div>
              <div className="features-item effectFade fadeUp" data-delay="0.1" style={{ padding: '24px 20px', marginBottom: '20px' }}>
                <i className="icon icon-plug-solid" style={{ fontSize: '32px' }}></i>
                <h6 className="title fw-semibold" style={{ fontSize: '18px', marginTop: '15px' }}>Universal Tool Connectivity</h6>
                <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Connect to your current stack — CRM, helpdesk, ERP, data warehouse — via webhooks and APIs to convert data into action instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="side-line-main d-none d-lg-block wow fadeIn">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mx-auto">
                <div className="side-line-wrap">
                  <div className="link-break-line left">
                    <div className="link-break-line">
                      <span className="item top"></span>
                      <span className="item bottom"></span>
                    </div>
                  </div>
                  <div className="link-break-center">
                    <span className="simu-electric left"></span>
                    <span className="simu-electric right"></span>
                  </div>
                  <div className="link-break-line right">
                    <span className="item top"></span>
                    <span className="item bottom"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Connector Lines & Sparks (visible below 990px) */}
        <div className="side-line-mobile d-lg-none">
          <div className="container" style={{ height: '100%' }}>
            <div className="side-line-wrap-mobile">
              {/* Left Curve SVG */}
              <div className="svg-connector-container left-connector">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="spark-glow-left" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fd3b26" stopOpacity="1" />
                      <stop offset="30%" stopColor="#fd3b26" stopOpacity="0.8" />
                      <stop offset="70%" stopColor="#fd3b26" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#fd3b26" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  {/* Lines starting exactly at card edges (X=0) and ending at vertical line (X=100) */}
                  <path d="M 0,0 L 70,0 Q 100,0 100,15 L 100,50" fill="none" stroke="#D4D4D8" strokeWidth="1.5" />
                  <path d="M 0,50 L 100,50" fill="none" stroke="#D4D4D8" strokeWidth="1.5" />
                  <path d="M 0,100 L 70,100 Q 100,100 100,85 L 100,50" fill="none" stroke="#D4D4D8" strokeWidth="1.5" />
                  
                  {/* Sparks traveling from vertical line (X=100) to card edges (X=0) */}
                  <circle r="12" fill="url(#spark-glow-left)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 100,50 L 100,15 Q 100,0 70,0 L 0,0" keyTimes="0; 0.375; 1" keyPoints="0; 0; 1" calcMode="linear" />
                    <animate attributeName="opacity" dur="4s" repeatCount="indefinite" keyTimes="0; 0.375; 0.40; 0.90; 1" values="0; 0; 1; 1; 0" calcMode="linear" />
                  </circle>
                  <circle r="12" fill="url(#spark-glow-left)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 100,50 L 0,50" keyTimes="0; 0.375; 1" keyPoints="0; 0; 1" calcMode="linear" />
                    <animate attributeName="opacity" dur="4s" repeatCount="indefinite" keyTimes="0; 0.375; 0.40; 0.90; 1" values="0; 0; 1; 1; 0" calcMode="linear" />
                  </circle>
                  <circle r="12" fill="url(#spark-glow-left)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 100,50 L 100,85 Q 100,100 70,100 L 0,100" keyTimes="0; 0.375; 1" keyPoints="0; 0; 1" calcMode="linear" />
                    <animate attributeName="opacity" dur="4s" repeatCount="indefinite" keyTimes="0; 0.375; 0.40; 0.90; 1" values="0; 0; 1; 1; 0" calcMode="linear" />
                  </circle>
                </svg>
              </div>

              {/* Center Line SVG */}
              <div className="svg-connector-container center-connector">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="spark-glow-center" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fd3b26" stopOpacity="1" />
                      <stop offset="30%" stopColor="#fd3b26" stopOpacity="0.8" />
                      <stop offset="70%" stopColor="#fd3b26" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#fd3b26" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <path d="M 0,50 L 100,50" fill="none" stroke="#D4D4D8" strokeWidth="1.5" />
                  
                  {/* Sparks from center outwards to intersections */}
                  <circle r="12" fill="url(#spark-glow-center)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 50,50 L 0,50" keyTimes="0; 0.375; 1" keyPoints="0; 1; 1" calcMode="linear" />
                    <animate attributeName="opacity" dur="4s" repeatCount="indefinite" keyTimes="0; 0.05; 0.35; 0.375; 1" values="0; 1; 1; 0; 0" calcMode="linear" />
                  </circle>
                  <circle r="12" fill="url(#spark-glow-center)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 50,50 L 100,50" keyTimes="0; 0.375; 1" keyPoints="0; 1; 1" calcMode="linear" />
                    <animate attributeName="opacity" dur="4s" repeatCount="indefinite" keyTimes="0; 0.05; 0.35; 0.375; 1" values="0; 1; 1; 0; 0" calcMode="linear" />
                  </circle>
                </svg>
              </div>

              {/* Right Curve SVG */}
              <div className="svg-connector-container right-connector">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="spark-glow-right" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fd3b26" stopOpacity="1" />
                      <stop offset="30%" stopColor="#fd3b26" stopOpacity="0.8" />
                      <stop offset="70%" stopColor="#fd3b26" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#fd3b26" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  {/* Lines starting exactly at vertical line (X=0) and ending at card edges (X=100) */}
                  <path d="M 0,50 L 0,15 Q 0,0 30,0 L 100,0" fill="none" stroke="#D4D4D8" strokeWidth="1.5" />
                  <path d="M 0,50 L 100,50" fill="none" stroke="#D4D4D8" strokeWidth="1.5" />
                  <path d="M 0,50 L 0,85 Q 0,100 30,100 L 100,100" fill="none" stroke="#D4D4D8" strokeWidth="1.5" />
                  
                  {/* Sparks traveling from vertical line (X=0) to card edges (X=100) */}
                  <circle r="12" fill="url(#spark-glow-right)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 0,50 L 0,15 Q 0,0 30,0 L 100,0" keyTimes="0; 0.375; 1" keyPoints="0; 0; 1" calcMode="linear" />
                    <animate attributeName="opacity" dur="4s" repeatCount="indefinite" keyTimes="0; 0.375; 0.40; 0.90; 1" values="0; 0; 1; 1; 0" calcMode="linear" />
                  </circle>
                  <circle r="12" fill="url(#spark-glow-right)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 0,50 L 100,50" keyTimes="0; 0.375; 1" keyPoints="0; 0; 1" calcMode="linear" />
                    <animate attributeName="opacity" dur="4s" repeatCount="indefinite" keyTimes="0; 0.375; 0.40; 0.90; 1" values="0; 0; 1; 1; 0" calcMode="linear" />
                  </circle>
                  <circle r="12" fill="url(#spark-glow-right)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 0,50 L 0,85 Q 0,100 30,100 L 100,100" keyTimes="0; 0.375; 1" keyPoints="0; 0; 1" calcMode="linear" />
                    <animate attributeName="opacity" dur="4s" repeatCount="indefinite" keyTimes="0; 0.375; 0.40; 0.90; 1" values="0; 0; 1; 1; 0" calcMode="linear" />
                  </circle>
                </svg>
              </div>

              {/* Symmetrical 10 Dots matching layout card borders and intersections */}
              {/* Left Side */}
              <span className="connector-dot-mobile dot-top-left-card"></span>
              <span className="connector-dot-mobile dot-mid-left-card"></span>
              <span className="connector-dot-mobile dot-bot-left-card"></span>
              <span className="connector-dot-mobile dot-left-intersection"></span>
              <span className="connector-dot-mobile dot-left-logo"></span>

              {/* Right Side */}
              <span className="connector-dot-mobile dot-right-logo"></span>
              <span className="connector-dot-mobile dot-right-intersection"></span>
              <span className="connector-dot-mobile dot-top-right-card"></span>
              <span className="connector-dot-mobile dot-mid-right-card"></span>
              <span className="connector-dot-mobile dot-bot-right-card"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
