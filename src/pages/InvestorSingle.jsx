import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import ContactSection from '../components/home/ContactSection';
import AnalystMeetContent from '../components/investors/AnalystMeetContent';
import { INVESTORS_DATA } from '../data/investorsData';
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  Info,
  Download,
  ArrowRight
} from 'lucide-react';
import './BoardManagement.css';

const GROUP_COMPANIES_DATA = [
  {
    name: "Paynext Private Limited",
    icon: "building-2",
    theme: "orange",
    docs: [
      { year: "FY 2024-2025", link: "#" },
      { year: "FY 2023-2024", link: "#" },
      { year: "FY 2022-2023", link: "#" },
      { year: "FY 2021-2022", link: "#" }
    ]
  },
  {
    name: "Sampada Infrasolutions Private Limited",
    icon: "building",
    theme: "blue",
    docs: [
      { year: "FY 2023-24", link: "#" },
      { year: "FY 2022-23", link: "#" },
      { year: "FY 2021-22", link: "#" }
    ]
  },
  {
    name: "SIP Fund Private Limited",
    icon: "trending-up",
    theme: "green",
    docs: [
      { year: "FY 2023-2024", link: "#" },
      { year: "FY 2022-2023", link: "#" },
      { year: "FY 2021-2022", link: "#" }
    ]
  },
  {
    name: "Virtual Galaxy Fintech Private Limited",
    icon: "building-2",
    theme: "purple",
    docs: [
      { year: "FY 2024-2025", link: "#" },
      { year: "FY 2023-2024", link: "#" },
      { year: "FY 2022-2023", link: "#" },
      { year: "FY 2021-2022", link: "#" }
    ]
  },
  {
    name: "Virtual Galaxy Insurance Brokers Private Limited",
    icon: "shield",
    theme: "gold",
    docs: [
      { year: "FY 2023-2024", link: "#" },
      { year: "FY 2022-2023", link: "#" },
      { year: "FY 2021-2022", link: "#" }
    ]
  }
];

const getCompanyIcon = (iconName) => {
  switch (iconName) {
    case 'trending-up':
      return <TrendingUp className="company-icon-svg" />;
    case 'shield':
      return <ShieldCheck className="company-icon-svg" />;
    case 'building':
    case 'building-2':
    default:
      return <Building2 className="company-icon-svg" />;
  }
};

function InvestorSingle() {
  const { slug } = useParams();
  const investorData = INVESTORS_DATA.find(i => i.slug === slug);

  if (!investorData) {
    return <Navigate to="/404" />;
  }

  const isGroupCompanies = slug === 'group-companies';

  return (
    <div className="board-mgmt-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="container">
          {/* Breadcrumbs */}
          <div className="row mb-3">
            <div className="col-12 text-left">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0 m-0" style={{ fontSize: '13px' }}>
                  <li className="breadcrumb-item"><Link to="/" className="text-secondary">Home</Link></li>
                  <li className="breadcrumb-item"><span className="text-secondary">Investors</span></li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <span className="text-primary font-weight-bold">{investorData.title}</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>


          {slug === 'investor-analyst-meet' && (
            <div className="mt-48">
              <AnalystMeetContent />
              <div className="row align-items-center mt-3">
                {/* Left Column: Text */}
                <div className="col-lg-7 col-12 text-left effect-fade-up">
                  <div className="tag-badge">
                    <span className="tag-dot" />
                    <span className="tag-text">Investor Relations</span>
                  </div>
                  <h1 className="hero-title">
                    <span>{investorData.title.split(' ')[0]}</span>{' '}
                    <span className="highlight">{investorData.title.split(' ').slice(1).join(' ')}</span>
                    <div className="hero-title-underline"></div>
                  </h1>
                  <p className="hero-desc">{investorData.desc}</p>
                </div>

                {/* Right Column: Logo/Illustration */}
                <div className="col-lg-5 col-12 text-center mt-4 mt-lg-0 effect-fade-up" style={{ animationDelay: '0.1s' }}>
                  {investorData.logo && (
                    <div className="hero-img-wrap" style={{ maxWidth: '280px' }}>
                      <img src={investorData.logo} alt={`${investorData.title} Logo`} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Grid / Disclosures Section */}
      <section className="explore-section">
        <div className="container">
          <div className="explore-divider"></div>

          {isGroupCompanies ? (
            /* GROUP COMPANIES CUSTOM VIEW */
            <div className="group-companies-container">
              <div className="company-rows-list">
                {GROUP_COMPANIES_DATA.map((company, idx) => (
                  <div
                    key={idx}
                    className="company-row-card effect-fade-up"
                    style={{ animationDelay: `${idx * 0.08}s` }}
                  >
                    <div className="company-info-col">
                      <div className={`company-brand-icon theme-${company.theme}`}>
                        {getCompanyIcon(company.icon)}
                      </div>
                      <h3 className="company-name">{company.name}</h3>
                    </div>

                    <div className="company-vertical-divider"></div>

                    <div className="company-docs-col">
                      {company.docs.map((doc, docIdx) => (
                        <div key={docIdx} className="fy-doc-card">
                          <div className="fy-doc-info">
                            <span className="fy-doc-year">{doc.year}</span>
                            <span className="fy-doc-label">PDF</span>
                          </div>
                          <a
                            href={doc.link}
                            className="fy-doc-download-btn"
                            aria-label={`Download ${doc.year} report for ${company.name}`}
                          >
                            <Download className="fy-download-icon" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Support Banner */}
              <div
                className="investor-help-banner effect-fade-up"
                style={{ animationDelay: `${GROUP_COMPANIES_DATA.length * 0.08}s` }}
              >
                <div className="help-banner-left">
                  <div className="help-banner-icon-wrap">
                    <Info className="help-banner-icon" />
                  </div>
                  <div className="help-banner-text">
                    <h4 className="help-banner-title">Need any help?</h4>
                    <p className="help-banner-desc">
                      If you need any specific document or have any queries, feel free to contact our investor relations team.
                    </p>
                  </div>
                </div>
                <div className="help-banner-right">
                  <Link to="/contact" className="btn-help-banner-cta">
                    Get in Touch
                    <span className="btn-help-banner-icon-wrap">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ) : investorData.gridItems && investorData.gridItems.length > 0 ? (
            <div>
              <div className="explore-label">Governance Options</div>
              <h2 className="explore-title">
                Select a section to view detailed corporate registers, <br />
                committee allocations, and compliance documents.
              </h2>

              <div className="row justify-content-center g-4">
                {investorData.gridItems.map((item, index) => (
                  <div className="col-md-6 col-lg-3 mb-24 effect-fade-up" style={{ animationDelay: `${index * 0.08}s` }} key={index}>
                    <a href={item.link} className="mgmt-card" style={{ padding: '30px 24px' }}>
                      <div className="mgmt-card-title" style={{ marginTop: '0', fontSize: '16px' }}>{item.title}</div>
                      <div className="mgmt-card-action" style={{ marginTop: '16px' }}>
                        View Document
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="explore-label">Governance Disclosures</div>
              <h2 className="explore-title">
                Official corporate reports, statutory filings, and compliance disclosures <br />
                for Virtual Galaxy Infotech Limited.
              </h2>

              <div className="row justify-content-center effect-fade-up">
                <div className="col-lg-8">
                  <div className="p-5 bg-light border border-slate-100 text-center" style={{ borderRadius: '20px' }}>
                    <p className="text-secondary mb-0" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                      There are currently no active document files listed in this category. For archival records, statutory copies, or specific queries, please contact our Compliance Officer at the Investor Relations office.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default InvestorSingle;
