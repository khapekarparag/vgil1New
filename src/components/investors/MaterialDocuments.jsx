import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Key, 
  Award, 
  FileSpreadsheet, 
  Gavel, 
  Briefcase, 
  CheckCircle, 
  Info, 
  ArrowRight 
} from 'lucide-react';
import ContactSection from '../home/ContactSection';
import '../../pages/BoardManagement.css';

/**
 * MATERIAL DOCUMENTS DATA
 * 
 * To update the PDF relative paths, replace the '#' placeholder in the 'url' fields 
 * below with your actual relative file paths (e.g., "/assets/pdf/moa.pdf").
 */
const documentsData = [
  {
    id: 'moa',
    title: 'MOA',
    iconName: 'file-text',
    theme: 'orange',
    docs: [{ label: 'MOA', url: '#' }]
  },
  {
    id: 'aoa',
    title: 'AOA',
    iconName: 'file-text',
    theme: 'blue',
    docs: [{ label: 'AOA', url: '#' }]
  },
  {
    id: 'coi',
    title: 'Certificate of Incorporation',
    iconName: 'shield',
    theme: 'green',
    docs: [{ label: 'Certificate of Incorporation', url: '#' }]
  },
  {
    id: 'coi-conversion',
    title: 'COI of conversion',
    iconName: 'shield',
    theme: 'purple',
    docs: [{ label: 'COI of conversion', url: '#' }]
  },
  {
    id: 'br-ipo',
    title: 'BR for IPO',
    iconName: 'gavel',
    theme: 'gold',
    docs: [{ label: 'BR for IPO', url: '#' }]
  },
  {
    id: 'sr-ipo',
    title: 'SR for IPO',
    iconName: 'gavel',
    theme: 'orange',
    docs: [{ label: 'SR for IPO', url: '#' }]
  },
  {
    id: 'restated-consolidated',
    title: 'Restated Consolidated',
    iconName: 'file-spreadsheet',
    theme: 'blue',
    docs: [{ label: 'Restated Consolidated', url: '#' }]
  },
  {
    id: 'audited-financials',
    title: 'Audited Financial Statements',
    iconName: 'briefcase',
    theme: 'green',
    docs: [
      { label: 'FY 2023-24', url: '#' },
      { label: 'FY 2022-23', url: '#' },
      { label: 'FY 2021-22', url: '#' }
    ]
  },
  {
    id: 'restated-standalone',
    title: 'Restated Standalone Financial Statement',
    iconName: 'file-spreadsheet',
    theme: 'purple',
    docs: [{ label: 'Restated Standalone', url: '#' }]
  },
  {
    id: 'tax-benefit',
    title: 'Tax Benefit Certificate Peer Review',
    iconName: 'award',
    theme: 'gold',
    docs: [{ label: 'Tax Benefit Certificate', url: '#' }]
  },
  {
    id: 'consents',
    title: 'Consents',
    iconName: 'check-circle',
    theme: 'orange',
    docs: [{ label: 'Consents', url: '#' }]
  },
  {
    id: 'consents-10',
    title: '10. Consents',
    iconName: 'check-circle',
    theme: 'blue',
    docs: [
      { label: 'Auditors Consent', url: '#' },
      { label: 'Registrar Consent', url: '#' },
      { label: 'Directors Consent', url: '#' }
    ]
  },
  {
    id: 'kpi-rhp',
    title: 'KPI Certificate RHP',
    iconName: 'award',
    theme: 'green',
    docs: [{ label: 'KPI Certificate RHP', url: '#' }]
  },
  {
    id: 'br-drhp',
    title: 'BR for Draft Red Herring Prospectus',
    iconName: 'gavel',
    theme: 'purple',
    docs: [{ label: 'BR for DRHP', url: '#' }]
  },
  {
    id: 'br-rhp',
    title: 'BR for RHP',
    iconName: 'gavel',
    theme: 'gold',
    docs: [{ label: 'BR for RHP', url: '#' }]
  },
  {
    id: 'dd-certificate',
    title: 'DD Certificate',
    iconName: 'shield',
    theme: 'orange',
    docs: [{ label: 'DD Certificate', url: '#' }]
  },
  {
    id: 'inprinciple',
    title: 'Inprinciple',
    iconName: 'key',
    theme: 'blue',
    docs: [{ label: 'Inprinciple', url: '#' }]
  }
];

const getDocIcon = (iconName) => {
  switch (iconName) {
    case 'shield':
      return <Shield className="company-icon-svg" />;
    case 'key':
      return <Key className="company-icon-svg" />;
    case 'award':
      return <Award className="company-icon-svg" />;
    case 'file-spreadsheet':
      return <FileSpreadsheet className="company-icon-svg" />;
    case 'gavel':
      return <Gavel className="company-icon-svg" />;
    case 'briefcase':
      return <Briefcase className="company-icon-svg" />;
    case 'check-circle':
      return <CheckCircle className="company-icon-svg" />;
    case 'file-text':
    default:
      return <FileText className="company-icon-svg" />;
  }
};

function MaterialDocuments() {
  return (
    <div className="board-mgmt-wrapper bg-[#f8fafc] pb-12 min-h-screen flex flex-col justify-start">
      {/* Hero / Header Section */}
      <section className="hero-section relative overflow-hidden bg-gradient-to-br from-[#fffcfb] to-[#ffffff] border-b border-[#f8fafc] pt-[105px] pb-[50px]">
        {/* Decorative Wavy Lines SVG */}
        <svg className="absolute left-0 top-0 w-[280px] h-[280px] opacity-20 pointer-events-none animate-[pulse_6s_ease-in-out_infinite]" viewBox="0 0 200 200" fill="none">
          <path d="M-50,30 C30,70 70,-10 130,30 C190,70 230,-10 290,30" stroke="#ff4d00" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          <path d="M-50,50 C30,90 70,10 130,50 C190,90 230,10 290,50" stroke="#ff4d00" strokeWidth="0.8" />
          <path d="M-50,70 C30,110 70,30 130,70 C190,110 230,30 290,70" stroke="#ff4d00" strokeWidth="0.8" />
          <path d="M-50,90 C30,130 70,50 130,90 C190,130 230,50 290,90" stroke="#ff4d00" strokeWidth="0.8" />
        </svg>

        <div className="container relative z-10">
          {/* Breadcrumbs */}
          <div className="row mb-3">
            <div className="col-12 text-left">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0 m-0" style={{ fontSize: '13px' }}>
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-secondary hover:text-[#ff4d00] transition-colors no-underline">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/investors/board-and-management" className="text-secondary hover:text-[#ff4d00] transition-colors no-underline">Investors</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <span className="text-[#ff4d00] font-bold">Material Documents</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Centered Header Content */}
          <div className="relative mt-4 py-3 text-center">
            <div className="max-w-[750px] mx-auto effect-fade-up">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight m-0 text-[#1b305a]">
                Material Documents
              </h1>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-1.5 my-3">
                <div className="w-8 h-[2.5px] bg-[#ff4d00] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div>
                <div className="w-8 h-[2.5px] bg-[#ff4d00] rounded-full"></div>
              </div>

              <p className="text-gray-600 font-medium text-xs md:text-sm mt-3 mb-0">
                Important corporate registers, legal certificates, and statutory filings for investor review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid / Disclosures Section */}
      <section className="explore-section flex-grow">
        <div className="container">
          <div className="explore-divider"></div>
          
          <div className="group-companies-container" style={{ marginTop: '0' }}>
            <div className="company-rows-list">
              {documentsData.map((group, idx) => (
                <div
                  key={group.id}
                  className="company-row-card effect-fade-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {/* Left Column: Icon & Category Name */}
                  <div className="company-info-col" style={{ width: '100%', maxWidth: '280px' }}>
                    <div className={`company-brand-icon theme-${group.theme}`}>
                      {getDocIcon(group.iconName)}
                    </div>
                    <h3 className="company-name">{group.title}</h3>
                  </div>

                  {/* Vertical Separator (hidden on small viewports) */}
                  <div className="company-vertical-divider d-none d-md-block" style={{ height: '48px' }}></div>

                  {/* Right Column: Files Cards */}
                  <div className="company-docs-col">
                    {group.docs.map((doc, dIdx) => (
                      <div key={dIdx} className="fy-doc-card" style={{ width: '100%', maxWidth: '280px' }}>
                        <div className="fy-doc-info" style={{ flex: '1', minWidth: '0', marginRight: '12px' }}>
                          <span 
                            className="fy-doc-year" 
                            title={doc.label} 
                            style={{ 
                              display: 'block',
                              whiteSpace: 'nowrap', 
                              overflow: 'hidden', 
                              textOverflow: 'ellipsis', 
                              width: '100%' 
                            }}
                          >
                            {doc.label}
                          </span>
                          <span className="fy-doc-label">PDF</span>
                        </div>
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fy-doc-download-btn"
                          aria-label={`Open ${doc.label}`}
                        >
                          <FileText className="fy-download-icon" />
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
              style={{ animationDelay: `${documentsData.length * 0.05}s` }}
            >
              <div className="help-banner-left">
                <div className="help-banner-icon-wrap bg-[#fff5f2]">
                  <Info className="help-banner-icon text-[#ff4d00]" />
                </div>
                <div className="help-banner-text">
                  <h4 className="help-banner-title">Need any specific document?</h4>
                  <p className="help-banner-desc">
                    If you need archived documents, statutory copies, or have specific queries, please contact our investor relations team.
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
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

export default MaterialDocuments;
