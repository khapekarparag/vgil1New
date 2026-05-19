import React from 'react';
import { Link } from 'react-router-dom';

function PageTitle({ title, breadcrumbs }) {
  return (
    <div className="section-page-title">
      <div className="container text-center">
        <h1 className="page-title fw-semibold effectFade fadeZoom">{title}</h1>
        <div className="breadcrumbs effectFade fadeUp">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.path ? (
                <Link to={crumb.path} className="link1">{crumb.label}</Link>
              ) : (
                <div>{crumb.label}</div>
              )}
              {index < breadcrumbs.length - 1 && <div>/</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
