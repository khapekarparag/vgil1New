import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS_DATA } from '../data/productsData';
import NotFound from './NotFound';
import ProcessSection from '../components/home/ProcessSection';
import ContactSection from '../components/home/ContactSection';

function ProductSingle() {
  const { slug } = useParams();
  
  // Find the product by slug
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  
  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      {/* Product Hero Section */}
      <div className="section-hero v2 pt-150 pb-100">
        <div className="hero-image"></div>
        <div className="container">
          <div className="content-wrap text-center">
            {product.logo && (
              <div className="product-logo effectFade fadeUp mb-4 d-flex justify-content-center">
                <img src={product.logo} alt={`${product.title} Logo`} style={{ maxWidth: '200px', height: 'auto', objectFit: 'contain' }} />
              </div>
            )}
            <div className="title text-display-2 effectFade fadeRotateX">
              <span className="title1 fw-semibold text-gradient-1">{product.title}</span>
              <br />
              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                <span className="fw-semibold text-gradient-1" style={{ fontSize: '0.6em' }}>{product.subtitle}</span>
              </div>
            </div>
            <p className="text text-body-3 effectFade fadeUp mt-4">
              {product.shortDescription}
            </p>
            <div className="button-wrap effectFade fadeUp mt-30 d-flex justify-content-center">
              <Link to="/contact" className="tf-btn md fill radius-100">
                <span>Let's Connect</span>
                <i className="icon icon-long-arrow-alt-up-solid" style={{ transform: 'rotate(45deg)' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="section-spacing" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row justify-content-center">
            {/* Features */}
            <div className="col-lg-10">
              <div className="heading-section mb-30 text-center">
                <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Features</div>
                <div className="heading-title effectFade fadeUp">Key Capabilities</div>
              </div>
              <div className="features-list d-flex flex-wrap gap-4 justify-content-center">
                {product.features.map((feature, index) => (
                  <div key={index} className="tf-icon-box v4 effectFade fadeUp" style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '16px', flex: '1 1 300px', maxWidth: '400px' }}>
                    <div className="icon" style={{ marginBottom: '10px' }}>
                      <i className="icon icon-check-solid" style={{ color: '#ff2d15', fontSize: '24px' }}></i>
                    </div>
                    <div className="content">
                      <h5 className="title" style={{ fontSize: '20px', marginBottom: '10px' }}>{feature.title}</h5>
                      <p className="text text-body-2">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      {product.metrics && product.metrics.length > 0 && (
        <div className="metrics-section section-spacing" style={{ 
          backgroundColor: '#ff2d15', 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}>
          <div className="container">
            <div className="row g-4 justify-content-center">
              {product.metrics.map((metric, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="metrics-box h-100 effectFade fadeUp" style={{ 
                    border: '1px solid rgba(255,255,255,0.4)', 
                    borderRadius: '12px', 
                    padding: '30px', 
                    backgroundColor: 'transparent'
                  }}>
                    <h2 style={{ color: '#fff', fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px', lineHeight: '1.1' }}>{metric.value}</h2>
                    <p style={{ color: '#fff', fontSize: '1rem', margin: 0 }}>{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Process Section */}
      <div className="box-white">
        <ProcessSection />
      </div>

      <ContactSection />
    </>
  );
}

export default ProductSingle;
