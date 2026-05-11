import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ServiceSingleHero from '../components/services/ServiceSingleHero';
import ServiceSingleDetails from '../components/services/ServiceSingleDetails';
import ProcessSection from '../components/home/ProcessSection';
import ContactSection from '../components/home/ContactSection';
import { SERVICES_DATA } from '../data/servicesData';

function ServiceSingle() {
  const { slug } = useParams();
  const service = SERVICES_DATA.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <ServiceSingleHero service={service} />
      <ServiceSingleDetails service={service} />

      <div className="box-white">
        <ProcessSection />
      </div>

      <ContactSection />
    </>
  );
}

export default ServiceSingle;
