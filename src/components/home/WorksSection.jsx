import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_DATA } from '../../data/productsData';

function WorksSection({ className = "section-featured-works section-spacing-grouped" }) {
  // Select the 4 specific products requested by the user
  const selectedSlugs = [
    'core-banking-solution',
    'post-mortem-mgmt',
    'end-to-end-cyber-security',
    'mis-solution'
  ];

  const displayProducts = selectedSlugs.map(slug => 
    PRODUCTS_DATA.find(p => p.slug === slug)
  ).filter(Boolean);

  return (
    <div id="works" className={className}>
      <div className="container">
        <div className="heading-section mb-0">
          <div className="heading-sub fw-semibold mx-auto effectFade fadeUp">Our Products</div>
        </div>
        <div className="featured-works-list position-relative">
          {displayProducts.map((product, index) => (
            <div key={product.slug} className="">
              <div className={`featured-works-item effectFade fadeUp ${index === 0 ? 'no-div' : ''}`}>
                <div className="image main-mouse-hover" style={{ 
                  backgroundColor: '#ffffff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  padding: '60px',
                  border: '1px solid #f1f1f1',
                  borderRadius: '24px',
                  height: '400px'
                }}>
                  <img src={product.logo} alt={product.title} style={{ 
                    maxWidth: '180px', 
                    maxHeight: '180px',
                    width: 'auto',
                    height: 'auto', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.05))'
                  }} />
                  <Link to={`/products/${product.slug}`} className="tf-mouse view-project h6">
                    View Product
                    <i className="icon icon-arrow-top-right"></i>
                  </Link>
                </div>
                <div className="content">
                  <div className="pagi-dot">
                    {[0, 1, 2, 3].map(dot => (
                      <span key={dot} className={dot === index ? 'active' : ''}></span>
                    ))}
                  </div>
                  <div className="bot">
                    <h4 className="heading fw-semibold">{product.title}</h4>
                    <div className="grid-text">
                      <div className="item">
                        <div className="title text-secondary">DESCRIPTION</div>
                        <div className="text-body-3 fw-semibold">{product.shortDescription}</div>
                      </div>
                      <div className="item">
                        <div className="title text-secondary">FEATURES</div>
                        <div className="fw-semibold text-body-3">
                          {product.features.slice(0, 2).map(f => f.title).join(', ')}
                        </div>
                      </div>
                      <div className="item">
                        <div className="title text-secondary">INDUSTRY</div>
                        <div className="fw-semibold text-body-3">
                          {product.slug === 'core-banking-solution' ? 'Banking' : 
                           product.slug === 'post-mortem-mgmt' ? 'Healthcare' : 
                           product.slug === 'end-to-end-cyber-security' ? 'Security' : 'Enterprise'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorksSection;
