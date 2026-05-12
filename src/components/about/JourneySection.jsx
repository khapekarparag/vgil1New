import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const milestones = [
  {
    year: "1997",
    title: "Company Foundation",
    description: "Incorporated under the name “Virtual Galaxy Infotech Private Limited”."
  },
  {
    year: "2004",
    title: "Banking Innovation",
    description: "Transforming banking operations with the successful development and implementation of Link Manager Software at Punjab National Bank."
  },
  {
    year: "2007",
    title: "Product Development",
    description: "Agency Module implementation went live at Punjab National Bank’s Link Cell Branch."
  },
  {
    year: "2008",
    title: "Business Expansion",
    description: "Received work order for supply of banking application to one of the Urban Co-operative Banks and its 20 branches."
  },
  {
    year: "2011",
    title: "Infrastructure & Product Launch",
    description: "Successfully established our own state-of-the-art Data Centre and launched IBS (Integrated Business Suite), a versatile ERP solution catering to textile, sugar, steel, solvex, and more."
  },
  {
    year: "2012",
    title: "Core Banking Success",
    description: "Core Banking Solution (CBS) deployment for a State Cooperative Apex Bank and a major CBS order covering 218 branches."
  },
  {
    year: "2014",
    title: "Agricultural Technology",
    description: "Established and operated the computerized auction system for agricultural commodities at APMCs and provided user training in five APMCs under MACP."
  },
  {
    year: "2016",
    title: "International Growth",
    description: "Achieved the first international CBS deployment in Tanzania and launched IBS-ERP software (E-Autopsy) in the Indian market."
  },
  {
    year: "2018",
    title: "Banking Solutions",
    description: "Received work order for core banking solution projects on capex/opex model from a district central co-operative bank."
  },
  {
    year: "2019",
    title: "System Integration",
    description: "Received work order as a system integrator for data centre, disaster recovery site, hardware, CBS, and allied applications."
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Awarded CBS project for supply, implementation, migration, and management from a district central co-operative bank."
  },
  {
    year: "2023",
    title: "Financial Achievement",
    description: "Revenue milestone achieved — ₹50 Crores landmark crossed."
  },
  {
    year: "2024",
    title: "Corporate Evolution",
    description: "Converted to Public Limited Company as “Virtual Galaxy Infotech Limited”."
  },
  {
    year: "2025",
    title: "Strategic Growth",
    description: "Successfully listed on NSE Emerge on 19th May 2025, boosting visibility and growth potential.",
    highlight: true
  }
];

function JourneySection() {
  return (
    <section className="journey-section section-spacing">
      <div className="container">
        <div className="heading-section text-center mb-60 effectFade fadeUp">
          <div className="heading-sub fw-semibold style-1 mb-12">
            Our Journey
          </div>
          <h2 className="heading-title text-dark mb-24">
            A Legacy of Innovation & Trust
          </h2>
          <p className="text-body-2 text-neutral-600 max-w-700 mx-auto">
            From a visionary startup in 1997 to a publicly listed technology company in 2025, 
            our journey reflects innovation, trust, growth, and transformation.
          </p>
        </div>

        <div className="journey-slider-wrap effectFade fadeUp">
          <Swiper
            modules={[Pagination, Navigation, FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            navigation={{
              prevEl: '.journey-prev',
              nextEl: '.journey-next',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="journey-swiper"
          >
            {milestones.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`journey-card ${item.highlight ? 'highlighted' : ''}`}>
                  <div className="journey-card-inner">
                    <div className="year-tag">{item.year}</div>
                    <div className="journey-dot"></div>
                    <h5 className="milestone-title">{item.title}</h5>
                    <p className="milestone-desc">{item.description}</p>
                    <div className="card-glow"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="journey-controls mt-40">
            <div className="journey-prev btn-slider-small">
              <i className="icon-angle-left-solid"></i>
            </div>
            <div className="journey-next btn-slider-small">
              <i className="icon-angle-right-solid"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
