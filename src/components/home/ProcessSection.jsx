import React from 'react';
import { Search, Paintbrush, Settings, BarChart } from 'lucide-react';

function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      icon: <Search className="text-brand" size={32} />,
      text: 'Discovery is where clarity begins. It brings structure to complex business environments by unifying fragmented data across systems and platforms into a single, intelligent view. It goes beyond surface-level insights to uncover hidden patterns, emerging risks, and untapped opportunities that often remain unnoticed. By making sense of scattered information, it reveals what truly matters and where the real potential lies.'
    },
    {
      number: '02',
      title: 'Design',
      icon: <Paintbrush className="text-brand" size={32} />,
      text: 'The stage where ideas are shaped into intuitive, user-focused experiences. It begins with understanding user needs, mapping journeys, and structuring information for clarity. Through wireframes, prototypes, and seamless interfaces, complexity is simplified into usable solutions — enabling faster adoption, better usability, and confident decision-making across the organization.'
    },
    {
      number: '03',
      title: 'Develop',
      icon: <Settings className="text-brand" size={32} />,
      text: 'The execution engine where ideas are transformed into high-performance systems. It connects platforms, streamlines operations, and brings consistency across processes. Here, strategy is translated into reliable execution — efficiently and precisely — building solutions that are resilient, adaptable, and ready to evolve with changing business demands.'
    },
    {
      number: '04',
      title: 'Deliver',
      icon: <BarChart className="text-brand" size={32} />,
      text: 'Where solutions translate into real-world impact. It focuses on seamless rollout, user adoption, and consistent performance across the organization. Through continuous monitoring, refinement, and support, outcomes are sustained and improved over time — driving efficiency, accelerating growth, and ensuring long-term value from every implementation.'
    }
  ];

  return (
    <div className="section-process section-spacing-grouped mb-20" id="process">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="process-heading h-100 d-flex flex-column justify-content-between">
              <div className="heading-section mb-40">
                <div className="heading-sub fw-semibold effectFade fadeUp">4D Framework</div>
                <div className="heading-title text-gradient-3 effectFade fadeRotateX">From Insight <br /> to Impact</div>
              </div>
              <div className="group-btn-slider d-none d-lg-flex mb-40">
                <div className="nav-prev-swiper">
                  <i className="icon icon-angle-left-solid"></i>
                </div>
                <div className="nav-next-swiper">
                  <i className="icon icon-angle-right-solid"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="process-slide">
              <div dir="ltr" className="swiper tf-swiper swiper-box-shadow" data-preview="1.78" data-tablet="2" data-mobile-sm="1" data-mobile="1"
                data-loop="false" data-center="false" data-space-lg="24" data-space-md="24" data-space="30" >
                <div className="swiper-wrapper">
                  {steps.map((step, index) => (
                    <div className="swiper-slide " key={index}>
                      <div className="process-card d-flex flex-column justify-content-between h-100 " style={{ minHeight: '380px', padding: '30px' }}>
                        <div className=''>
                          <div className="mb-10" style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.08)' }}>
                            {step.icon}
                          </div>
                          <div className="content">
                            <h4 className="title fw-semibold mb-12" style={{ fontSize: '20px' }}>{step.title}</h4>
                            <p className="text text-secondary" style={{ fontSize: '14px', lineHeight: '1.6', color: '#6b7280' }}>{step.text}</p>
                          </div>
                        </div>
                        <div className="bot d-flex justify-content-between align-items-center pt-15 border-top" style={{ borderColor: '#f3f4f6' }}>
                          <div className="time fw-semibold text-brand" style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>PHASE {step.number}</div>
                          <div className="number">
                            <span className="text-neutral-400 fw-bold">{step.number}</span>
                            <span className="text-neutral-200">/04</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;

