import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS_DATA } from '../../data/productsData';

// Import Featured Work Background Images
import featuredWork1 from '../../assets/home/feature-work/1- Featured Work of best work (824_427.54px).jpg';
import featuredWork2 from '../../assets/home/feature-work/-2 Featured Work of best work (824_427.54px)-3.jpg';
import featuredWork3 from '../../assets/home/feature-work/3- Featured Work of best work (824_427.54px)-2.jpg';
import featuredWork4 from '../../assets/home/feature-work/4- Featured Work of best work (824_427.54px)-1.jpg';

import './WorksSection.css'

function WorksSection({ className = "section-featured-works section-spacing-grouped" }) {
  const [expandedSlug, setExpandedSlug] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (e, slug) => {
    if (window.innerWidth <= 768) {
      if (expandedSlug !== slug) {
        e.preventDefault();
        e.stopPropagation();
        setExpandedSlug(slug);
      } else {
        // Second click / tap navigates to detail page
        navigate(`/products/${slug}`);
      }
    }
  };

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

  const bgImages = {
    'core-banking-solution': featuredWork1,
    'post-mortem-mgmt': featuredWork2,
    'end-to-end-cyber-security': featuredWork3,
    'mis-solution': featuredWork4
  };

  return (
    <div id="works" className={className}>
      <div className="container">
        <div className="heading-section mb-0">
          <div className="heading-sub fw-semibold mx-auto effectFade fadeUp">Our Products</div>
        </div>
        <div className="featured-works-list position-relative">
          {displayProducts.map((product, index) => (
            <div key={product.slug} className="">
              <div 
                className={`featured-works-item effectFade fadeUp ${index === 0 ? 'no-div' : ''} ${expandedSlug === product.slug ? 'expanded-card' : ''}`}
                onClick={(e) => handleCardClick(e, product.slug)}
              >
                <div className="image main-mouse-hover" style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.18)), url("${bgImages[product.slug]}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  padding: '60px',
                  border: '1px solid #f1f1f1',
                  borderRadius: '24px',
                  height: '400px',
                  position: 'relative'
                }}>
                  <img src={product.logo} alt={product.title} style={{ 
                    maxWidth: '180px', 
                    maxHeight: '180px',
                    width: 'auto',
                    height: 'auto', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.05))',
                    zIndex: 2
                  }} />
                  <Link to={`/products/${product.slug}`} className="tf-mouse view-project h6" style={{ zIndex: 2 }}>
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
                    <div
  className={`expanded-details-container ${
    window.innerWidth > 767
      ? 'expanded'
      : expandedSlug === product.slug
      ? 'expanded'
      : 'collapsed'
  }`}
>
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
                      <div className="mobile-view-product-btn-wrap">
                        <Link 
                          to={`/products/${product.slug}`} 
                          className="mobile-view-product-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Product Details
                          <i className="icon icon-arrow-top-right"></i>
                        </Link>
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
