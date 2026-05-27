import React from 'react';
import HeroGradient from '../components/home/HeroGradient';
import AboutSection from '../components/home/AboutSection';
import PartnerSection from '../components/home/PartnerSection';
import ServicesSection from '../components/home/ServicesSection';
import WorksSection from '../components/home/WorksSection';
import ProcessSection from '../components/home/ProcessSection';
import BenefitsSection from '../components/home/BenefitsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ToolsSection from '../components/home/ToolsSection';
import TeamSection from '../components/home/TeamSection';
import StatisticSection from '../components/home/StatisticSection';
import AwardsSection from '../components/home/AwardsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PricingSection from '../components/home/PricingSection';
import FaqsSection from '../components/home/FaqsSection';
import ContactSection from '../components/home/ContactSection';

import WhyChooseUs from '../components/home/WhyChooseUs';

function HomeV1() {
  return (
    <>
      <HeroGradient />
      <AboutSection />
      <PartnerSection />
      
      <div className="box-white">
        <ServicesSection />
        <WhyChooseUs />
        <WorksSection />
        <ProcessSection />
        <FeaturesSection />
      </div>

      <ToolsSection />

      <div className="box-black">
        <div className="light-box"></div>
        <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
        <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />
        
        <TeamSection />
        <StatisticSection />
        <AwardsSection />
        <TestimonialsSection />
      </div>

      <PricingSection />
      <FaqsSection />
      <ContactSection />
    </>
  );
}

export default HomeV1;
