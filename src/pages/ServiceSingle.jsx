import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ServiceSingleHero from '../components/services/ServiceSingleHero';
import ServiceSingleDetails from '../components/services/ServiceSingleDetails';
import OptimizeInvestmentsSection from '../components/services/OptimizeInvestmentsSection';
import ITInfrastructureSection from '../components/services/ITInfrastructureSection';
import CTABannerSection from '../components/services/CTABannerSection';
import { SERVICES_DATA } from '../data/servicesData';
import DriveValueSection from '../components/services/DriveValueSection';
import SimplifyGSTSection from '../components/services/SimplifyGSTSection';
import VGSTServicesProvideSection from '../components/services/VGSTServicesProvideSection';
import ExploreVGSTServicesSection from '../components/services/ExploreVGSTServicesSection';
import ASPProgramSection from '../components/services/ASPProgramSection';
import MobileComputingHero from '../components/services/MobileComputingHero';
import MobileStrategiesSection from '../components/services/MobileStrategiesSection';
import MobileBenefitsSection from '../components/services/MobileBenefitsSection';
import MobileServicesProvideSection from '../components/services/MobileServicesProvideSection';
import MobileTechnologiesSection from '../components/services/MobileTechnologiesSection';
import DRDCHero from '../components/services/DRDCHero';
import DRDCSolveSection from '../components/services/DRDCSolveSection';
import DRDCBenefitsSection from '../components/services/DRDCBenefitsSection';
import DRDCServicesProvideSection from '../components/services/DRDCServicesProvideSection';
import DRDCOptimizeSection from '../components/services/DRDCOptimizeSection';



function ServiceSingle() {
  const { slug } = useParams();
  const service = SERVICES_DATA.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      {slug !== 'mobile-computing' && slug !== 'dr-dc' && <ServiceSingleHero service={service} />}
      
      {/* Conditionally render sections based on the service slug */}
      {slug === 'dr-dc' ? (
        <>
          <DRDCHero />
          <DRDCSolveSection />
          <DRDCBenefitsSection />
          <DRDCServicesProvideSection />
          <DRDCOptimizeSection />
        </>
      ) : slug === 'mobile-computing' ? (
        <>
          <MobileComputingHero />
          <MobileStrategiesSection />
          <MobileBenefitsSection />
          <MobileServicesProvideSection />
          <MobileTechnologiesSection />
        </>
      ) : slug === 'it-infrastructure-development' ? (
        <ITInfrastructureSection />
      ) : slug === 'vgst' ? (
        <>
          <SimplifyGSTSection />
          <VGSTServicesProvideSection />
          
          <ExploreVGSTServicesSection />
          <ASPProgramSection />
        </>
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
