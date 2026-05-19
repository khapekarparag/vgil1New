import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import ContactSection from '../components/home/ContactSection';
import { INVESTORS_DATA } from '../data/investorsData';

function InvestorSingle() {
  const { slug } = useParams();
  const investorData = INVESTORS_DATA.find(i => i.slug === slug);

  if (!investorData) {
    return <Navigate to="/404" />;
  }

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Investors Info', path: '#' },
    { label: investorData.title }
  ];

  return (
    <>
      <PageTitle title={investorData.title} breadcrumbs={breadcrumbs} />
      
      <div className="section-spacing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="heading-section mb-48">
                {investorData.logo && (
                  <div className="investor-logo effectFade fadeUp mb-24 d-flex justify-content-center">
                    <img src={investorData.logo} alt={`${investorData.title} Logo`} style={{ maxWidth: '100px', height: 'auto', objectFit: 'contain' }} />
                  </div>
                )}
                <div className="heading-title text-dark effectFade fadeUp">
                  {investorData.title}
                </div>
                <div className="text-body-1 text-neutral-600 mt-24 effectFade fadeUp" data-delay="0.1">
                  {investorData.desc}
                </div>
              </div>
            </div>
          </div>

          {/* Optional Grid Section */}
          {investorData.gridItems && investorData.gridItems.length > 0 && (
            <div className="row justify-content-center mt-48">
              {investorData.gridItems.map((item, index) => (
                <div className="col-md-6 col-lg-3 mb-24 effectFade fadeUp" data-delay={0.1 + (index * 0.1)} key={index}>
                  <a href={item.link} className="investor-card">
                    <div className="text-body-1 fw-semibold text-dark">{item.title}</div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="box-white">
        <ContactSection />
      </div>
    </>
  );
}

export default InvestorSingle;
