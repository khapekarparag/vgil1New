import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ServiceSingleHero from '../components/services/ServiceSingleHero';
import ServiceSingleDetails from '../components/services/ServiceSingleDetails';
import OptimizeInvestmentsSection from '../components/services/OptimizeInvestmentsSection';
import ITInfrastructureSection from '../components/services/ITInfrastructureSection';
import CTABannerSection from '../components/services/CTABannerSection';
import { SERVICES_DATA } from '../data/servicesData';
import DriveValueSection from '../components/services/DriveValueSection';

const vgstTickerStyles = `
.vgst-ticker-strip {
  background: #E8380D; padding: 1rem 0; overflow: hidden; white-space: nowrap;
}
.vgst-ticker-inner {
  display: inline-flex; gap: 2.5rem;
  animation: vgstMarquee 20s linear infinite;
}
.vgst-ticker-inner span { color: #fff; font-weight: 600; font-size: 0.85rem; opacity: 0.9; }
.vgst-ticker-dot { color: rgba(255,255,255,0.4) !important; }
@keyframes vgstMarquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
`;

function ServiceSingle() {
  const { slug } = useParams();
  const service = SERVICES_DATA.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <ServiceSingleHero service={service} />
      
      <style>{vgstTickerStyles}</style>
      {slug === 'vgst' && (
        <div className="vgst-ticker-strip">
          <div className="vgst-ticker-inner">
            {['Smart City Solutions','IoT Integration','Connected Ecosystems','Smart Analytics','Real-time Dashboards','Predictive Analytics','Hardware Integration','Managed Services',
              'Smart City Solutions','IoT Integration','Connected Ecosystems','Smart Analytics','Real-time Dashboards','Predictive Analytics','Hardware Integration','Managed Services']
              .map((item, i) => (
                <React.Fragment key={i}>
                  <span>{item}</span>
                  <span className="vgst-ticker-dot">◆</span>
                </React.Fragment>
            ))}
          </div>
        </div>
      )}
      
      {/* Conditionally render sections based on the service slug */}
      {slug === 'it-infrastructure-development' ? (
        <ITInfrastructureSection />
      ) : (
        <>
          <DriveValueSection />
          <ServiceSingleDetails service={service} />

          <div className="box-white">
            <OptimizeInvestmentsSection />
          </div>
        </>
      )}

      <CTABannerSection />
    </>
  );
}

export default ServiceSingle;
