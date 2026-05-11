import React from 'react';
import ServiceSingleHero from '../components/services/ServiceSingleHero';
import ServiceSingleDetails from '../components/services/ServiceSingleDetails';
import ProcessSection from '../components/home/ProcessSection';
import FaqsSection from '../components/home/FaqsSection';
import ContactSection from '../components/home/ContactSection';

function ServiceSingle() {
  return (
    <>
      <ServiceSingleHero />
      <ServiceSingleDetails />

      <div className="box-white">
        <ProcessSection />
      </div>

      <FaqsSection />
      <ContactSection />
    </>
  );
}

export default ServiceSingle;
