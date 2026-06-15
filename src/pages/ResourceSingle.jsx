import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import ContactSection from '../components/home/ContactSection';
import { RESOURCE_DATA } from '../data/resourceData';
import VideoSection from '../components/common/VideoSection';
import resourceBgImg from '../assets/Resource-img/Resource@2x.png';
import InstagramFeed from '../components/common/instagramFeed';


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
      <PageTitle title={resourceData.title} breadcrumbs={breadcrumbs} bgImage={resourceBgImg} />
      {slug === 'video' ? (
        <VideoSection />
      ) : (
        <div className="section-spacing" style={{ paddingTop: '10px' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <div className="heading-section mb-12">
                  <div className="text-body-1 text-neutral-600 effectFade fadeUp" data-delay="0.1">
                    {resourceData.desc}
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized News/Blog/Press Layouts */}
         x   {slug === 'media' ? (<InstagramFeed />) : slug === 'news' || slug === 'blog' ?  (
              <div className="news-grid mt-24">
                {resourceData.gridItems.map((item, index) => (
                  <div className="news-grid-item effectFade fadeUp" data-delay={0.1 + (index * 0.05)} key={index}>
                    {slug === 'news' ? (
                      <div className="news-poster-card">
                        <div className="news-poster-header">
                          <h4 className="news-poster-title">{item.title}</h4>
                        </div>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="fb-post-mockup"
                        >
                          <div className="fb-post-top">
                            <div className="fb-post-profile">
                              <div className="fb-profile-img">VG</div>
                              <div className="fb-profile-info">
                                <div className="fb-profile-name">Virtual Galaxy Infotech Limited</div>
                                <div className="fb-post-meta">about {index + 1} week{index !== 0 ? 's' : ''} ago</div>
                              </div>
                            </div>
                            <div className="fb-post-icon">
                              <i className="icon icon-facebook-f"></i>
                            </div>
                          </div>
                          <div className="fb-post-content">
                            <div className="fb-image-container">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                style={{ 
                                  width: '100%', 
                                  height: '100%', 
                                  objectFit: 'cover',
                                  transition: 'transform 0.5s ease'
                                }}
                                className="fb-post-img"
                              />
                              <div className="fb-post-badge">
                                <span>{item.type === 'video' ? 'Watch Video' : 'View Post'}</span>
                              </div>
                            </div>
                          </div>
                          <div className="fb-post-footer">
                            <div className="fb-footer-text">
                              Virtual Galaxy Infotech {item.title.substring(0, 40)}...
                            </div>
                          </div>
                        </a>
                      </div>
                    ) : (
                      /* Blog Poster Card */
                      <div className="blog-poster-card">
                        <Link to={item.link} className="blog-post-box">
                          <div className="blog-post-image">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <div className="blog-post-content-bottom">
                            <h4 className="blog-post-title">{item.title}</h4>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : slug === 'press' ? (
              /* Press Coverage Categorized List */
              <div className="press-coverage-container mt-24">
                {resourceData.categories.map((category, catIndex) => (
                  <div className="press-category mb-60" key={catIndex}>
                    <h3 className="press-category-title mb-30">{category.name}</h3>
                    <div className="press-list">
                      {category.items.map((item, itemIndex) => (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="press-item-link mb-16 effectFade fadeUp" 
                          key={itemIndex}
                        >
                          <span className="press-item-title">{item.title}</span>
                          <div className="press-item-action">
                            <span className="press-action-text">
                              {category.name === 'Video Coverage' ? 'Watch Video' : 'Read Article'}
                            </span>
                            <i className={category.name === 'Video Coverage' ? 'icon icon-play-solid' : 'icon icon-arrow-right-solid'}></i>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Default Grid Section */
              resourceData.gridItems && resourceData.gridItems.length > 0 && (
                <div className="row justify-content-center mt-24">
                  {resourceData.gridItems.map((item, index) => (
                    <div className="col-md-6 col-lg-3 mb-24 effectFade fadeUp" data-delay={0.1 + (index * 0.1)} key={index}>
                      <a href={item.link} className="investor-card">
                        <div className="text-body-1 fw-semibold text-dark">{item.title}</div>
                      </a>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      )}

      <style>{`
        .news-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px 40px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        .news-grid-item {
          width: 100%;
        }
        .news-poster-card {
          background: transparent;
          border-radius: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 0 10px;
        }
        .news-poster-header {
          padding-bottom: 15px;
          text-align: left;
          min-height: 80px;
          display: flex;
          align-items: flex-end;
        }
        .news-poster-title {
          font-size: 19px;
          line-height: 1.3;
          color: #111827;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .fb-post-mockup {
          border: 2.5px solid #000000;
          background: #ffffff;
          display: block;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .fb-post-mockup:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 30px rgba(0,0,0,0.1);
          border-color: #ff4d00;
        }
        .fb-post-top {
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f0f2f5;
        }
        .fb-post-profile {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .fb-profile-img {
          width: 44px;
          height: 44px;
          background: #ff4d00;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .fb-profile-info {
          display: flex;
          flex-direction: column;
        }
        .fb-profile-name {
          font-weight: 700;
          font-size: 15px;
          color: #050505;
          line-height: 1.2;
        }
        .fb-post-meta {
          font-size: 13px;
          color: #65676b;
        }
        .fb-post-icon {
          color: #1877f2;
          font-size: 24px;
        }
        .fb-post-icon i {
          font-weight: bold;
        }
        .fb-post-content {
          position: relative;
          background: #ffffff;
          aspect-ratio: 16/9;
          overflow: hidden;
          padding: 10px;
        }
        .fb-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: #f8fafc;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #f1f5f9;
        }
        .fb-post-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .fb-post-mockup:hover .fb-post-img {
          transform: scale(1.1);
        }
        .fb-image-overlay {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #1877f2;
          color: #fff;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          z-index: 2;
          box-shadow: 0 4px 10px rgba(24, 119, 242, 0.3);
        }
        .fb-post-badge {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          color: #fff;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 700;
          z-index: 2;
          border: 1px solid rgba(255,255,255,0.1);
          opacity: 0.9;
          transition: all 0.3s ease;
        }
        .fb-post-mockup:hover .fb-post-badge {
          opacity: 1;
          background: #1877f2;
          transform: translateX(-50%) translateY(-5px);
        }
        .fb-post-footer {
          padding: 15px 20px;
          background: #f8fafc;
          border-top: 1px solid #f0f2f5;
        }
        .fb-footer-text {
          font-size: 14px;
          color: #4b5563;
          font-weight: 500;
          line-height: 1.5;
        }

        /* Blog Poster Card Styles */
        .blog-poster-card {
          height: 100%;
        }
        .blog-post-box {
          display: block;
          background: #fff;
          border: 2px solid #000;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .blog-post-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: #ff4d00;
        }
        .blog-post-image {
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          border-bottom: 2px solid #000;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .blog-post-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s ease;
          padding: 10px;
        }
        .blog-post-box:hover .blog-post-image img {
          transform: scale(1.05);
        }
        .blog-post-content-bottom {
          padding: 20px;
          background: #fff;
        }
        .blog-post-title {
          font-size: 18px;
          line-height: 1.4;
          color: #111827;
          font-weight: 700;
          margin: 0;
          transition: color 0.3s ease;
        }
        .blog-post-box:hover .blog-post-title {
          color: #ff4d00;
        }

        /* Press Coverage Styles */
        .press-category-title {
          font-size: 24px;
          color: #111827;
          font-weight: 700;
          border-left: 4px solid #ff4d00;
          padding-left: 15px;
        }
        .press-item-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 25px;
          background: #fff;
          border: 1.5px solid #ff4d00;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(255, 77, 0, 0.05);
        }
        .press-item-link:hover {
          background: #fffcfb;
          transform: translateX(10px);
          box-shadow: 0 10px 25px rgba(255, 77, 0, 0.1);
        }
        .press-item-title {
          font-size: 16px;
          color: #374151;
          font-weight: 600;
          line-height: 1.4;
          transition: color 0.3s ease;
        }
        .press-item-link:hover .press-item-title {
          color: #ff4d00;
        }
        .press-item-action {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: fit-content;
        }
        .press-action-text {
          font-size: 14px;
          color: #ff4d00;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
        }
        .press-item-link:hover .press-action-text {
          opacity: 1;
          transform: translateX(0);
        }
        .press-item-link i {
          color: #ff4d00;
          font-size: 16px;
          transition: transform 0.3s ease;
        }
        .press-item-link:hover i {
          transform: translateX(5px);
        }

        @media (max-width: 991px) {
          .news-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .news-poster-card {
            padding: 0;
          }
          .news-poster-header {
            min-height: unset;
            padding-bottom: 10px;
          }
        }
      `}</style>

      <div className="box-white">
        <ContactSection />
      </div>
    </>
  );
}

export default ResourceSingle;
