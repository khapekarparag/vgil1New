import vgLogo from '../../assets/home/ownwer-img/vg-logo-2.png';

function FeaturesSection() {
  return (
    <div className="section-features flat-spacing pt-0">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold effectFade fadeUp">Features</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">All Features in One</div>
        </div>
      </div>
      <div className="position-relative">
        <div className="container z-5">
          <div className="features-wrap justify-content-between">
            <div className="features-col col-left lg-mb-24">
              <div className="features-item effectFade fadeUp" style={{ padding: '24px 20px', marginBottom: '20px' }}>
                <i className="icon icon-robot-solid" style={{ fontSize: '32px' }}></i>
                <h6 className="title fw-semibold" style={{ fontSize: '18px', marginTop: '15px' }}>Agent-Powered Workflows</h6>
                <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Turn repetitive tasks into autonomous flows—agents plan, execute, and report with guardrails, audit trails, and clear handoff to humans.
                </p>
              </div>
              <div className="features-item effectFade fadeUp" style={{ padding: '24px 20px', marginBottom: '20px' }}>
                <i className="icon icon-clipboard-check-solid" style={{ fontSize: '32px' }}></i>
                <h6 className="title fw-semibold" style={{ fontSize: '18px', marginTop: '15px' }}>Eval-First Quality</h6>
                <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Measure accuracy, latency, safety, and cost from day one. Our evals and dashboards keep models reliable and budgets predictable.
                </p>
              </div>
              <div className="features-item effectFade fadeUp" style={{ padding: '24px 20px', marginBottom: '20px' }}>
                <i className="icon icon-book-solid" style={{ fontSize: '32px' }}></i>
                <h6 className="title fw-semibold" style={{ fontSize: '18px', marginTop: '15px' }}>Private Knowledge RAG</h6>
                <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Make your docs, tickets, and wikis instantly useful with retrieval augmented generation—freshness, citations, and explainability built in.
                </p>
              </div>
            </div>
            
            <div className="features-center flex-shrink d-flex align-items-center justify-content-center" style={{ background: '#ffff', padding: '40px 30px', borderRadius: '40px', border: '1px solid #27272a', minWidth: '220px' }}>
              <img src={vgLogo} alt="Virtual Galaxy Logo" style={{ maxWidth: '180px', width: '100%', height: 'auto' }} />
            </div>
            
            <div className="features-col col-right">
              <div className="features-item effectFade fadeUp" data-delay="0.1" style={{ padding: '24px 20px', marginBottom: '20px' }}>
                <i className="icon icon-user-check-solid" style={{ fontSize: '32px' }}></i>
                <h6 className="title fw-semibold" style={{ fontSize: '18px', marginTop: '15px' }}>Human-Centered AI UX</h6>
                <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Interfaces, prompts, and error states designed for trust and adoption—so the smart thing is also the obvious thing to do.
                </p>
              </div>
              <div className="features-item effectFade fadeUp" data-delay="0.1" style={{ padding: '24px 20px', marginBottom: '20px' }}>
                <i className="icon icon-shield-alt-solid" style={{ fontSize: '32px' }}></i>
                <h6 className="title fw-semibold" style={{ fontSize: '18px', marginTop: '15px' }}>Secure by Design</h6>
                <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  PII handling, SSO/SAML, RBAC, secrets management, and compliance workflows—ship AI that’s safe, auditable, and enterprise-ready.
                </p>
              </div>
              <div className="features-item effectFade fadeUp" data-delay="0.1" style={{ padding: '24px 20px', marginBottom: '20px' }}>
                <i className="icon icon-plug-solid" style={{ fontSize: '32px' }}></i>
                <h6 className="title fw-semibold" style={{ fontSize: '18px', marginTop: '15px' }}>Seamless Integrations</h6>
                <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  Plug into your stack (CRM, helpdesk, ERP, data warehouse) with webhooks and APIs to turn insights into action—fast.
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
      </div>
    </div>
  );
}

export default FeaturesSection;
