import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import ContactSection from '../components/home/ContactSection';
import { RESOURCE_DATA } from '../data/resourceData';

function ResourceSingle() {
  const { slug } = useParams();
  const resourceData = RESOURCE_DATA.find(r => r.slug === slug);

  if (!resourceData) {
    return <Navigate to="/404" />;
  }

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Resource', path: '#' },
    { label: resourceData.title }
  ];

  return (
    <>
      <PageTitle title={resourceData.title} breadcrumbs={breadcrumbs} />
      
      <div className="section-spacing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="heading-section mb-48">
                <div className="heading-title text-dark effectFade fadeUp">
                  {resourceData.title}
                </div>
                <div className="text-body-1 text-neutral-600 mt-24 effectFade fadeUp" data-delay="0.1">
                  {resourceData.desc}
                </div>
              </div>
            </div>
          </div>

          {/* Optional Grid Section */}
          {resourceData.gridItems && resourceData.gridItems.length > 0 && (
            <div className="row justify-content-center mt-48">
              {resourceData.gridItems.map((item, index) => (
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

export default ResourceSingle;
