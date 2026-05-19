import React from 'react';
import CareersHero from '../components/careers/CareersHero';
import CareersPromise from '../components/careers/CareersPromise';
import CareersList from '../components/careers/CareersList';
import ContactSection from '../components/home/ContactSection';

function Careers() {
  return (
    <>
      <CareersHero />
      <CareersPromise />
      <CareersList />
      <ContactSection />
    </>
  );
}

export default Careers;
