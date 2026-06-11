import React from 'react';
import { Link } from 'react-router-dom';

function PageTitle({ title, breadcrumbs, bgImage }) {
  const headerStyle = bgImage ? { backgroundImage: `url(${bgImage})` } : {};
  return (
    <div className="section-page-title" style={headerStyle}>
      <div className="container text-center">
        <h1 className="page-title fw-semibold effectFade fadeZoom" style={{ color: '#ffffff' }}>{title}</h1>
        <div className="breadcrumbs effectFade fadeUp" style={{ color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.path ? (
                <Link to={crumb.path} className="link1" style={{ color: '#ffffff', opacity: 0.8 }}>{crumb.label}</Link>
              ) : (
                <div style={{ color: '#ffffff' }}>{crumb.label}</div>
              )}
              {index < breadcrumbs.length - 1 && <div style={{ color: '#ffffff', opacity: 0.6 }}>/</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
