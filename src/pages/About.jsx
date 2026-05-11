import React from 'react';
import AboutHero from '../components/about/AboutHero';
import MissionSection from '../components/about/MissionSection';
import PartnerSection from '../components/home/PartnerSection';
import ValuesSection from '../components/about/ValuesSection';
import ToolsSectionV2 from '../components/about/ToolsSectionV2';
import AboutTeamSection from '../components/about/AboutTeamSection';
import StatisticSection from '../components/home/StatisticSection';
import AwardsSection from '../components/home/AwardsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqsSection from '../components/home/FaqsSection';
import ContactSection from '../components/home/ContactSection';

function About() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <PartnerSection />
      
      <div className="box-white">
        <ValuesSection />
      </div>

      <ToolsSectionV2 />

      <div className="box-black">
        <div className="light-box"></div>
        <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
        <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />
        
        <AboutTeamSection />
        <StatisticSection />
        <AwardsSection />
        <TestimonialsSection />
      </div>

      <FaqsSection />
      <ContactSection />
    </>
  );
}

export default About;
