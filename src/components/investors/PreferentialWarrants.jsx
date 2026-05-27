import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const DocumentRow = ({ title, linkUrl = "#" }) => {
  return (
    <a 
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border border-solid border-[#ff4d00] rounded-xl p-4 px-6 shadow-sm hover:shadow-md hover:bg-orange-50/10 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-between no-underline group mb-4"
    >
      <span className="text-sm font-semibold text-[#1b305a] group-hover:text-[#ff4d00] transition-colors">
        {title}
      </span>
      <FileText className="w-5 h-5 text-gray-500 group-hover:text-[#ff4d00] transition-colors" />
    </a>
  );
};

function PreferentialWarrants() {
  const documents = [
    { title: "Compliance Certificate Under Reg 163(2)", link: "#" },
    { title: "Valuation Report", link: "#" },
    { title: "Notice of Extra Ordinary General Meeting - 17 March 2026", link: "#" },
    { title: "Scrutinizer Report - EGM 17 March 2026", link: "#" },
    { title: "In-principle Approval", link: "#" },
    { title: "CTC BR Allotment of Warrants", link: "#" }
  ];

  return (
    <div className="board-mgmt-wrapper bg-[#f8fafc] pt-[92px] pb-12 min-h-[calc(100vh-100px)] box-sizing-border-box flex flex-col justify-start">
      
      {/* Standard Container for Breadcrumbs (matches other pages exactly) */}
      <div className="container">
        <div className="row mb-4">
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
                  <span className="text-[#162a56] font-bold">Preferential Allotment of Warrants</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container max-w-[850px] mx-auto px-4 flex-grow flex flex-col justify-center">
        {/* Heading Section */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-extrabold m-0 tracking-tight leading-tight">
            <span className="text-[#162a56]">Preferential Allotment</span>{' '}
            <span className="text-[#ff4d00]">of Warrants</span>
          </h2>
          {/* Small Orange Underline */}
          <div className="w-8 h-0.5 bg-[#ff4d00] mx-auto mt-1 rounded-full"></div>
          <p className="text-gray-500 font-medium text-xs mt-1 mb-0">
            Disclosures and filings related to the preferential allotment of share warrants:
          </p>
        </div>

        {/* Documents List */}
        <div className="mt-2">
          {documents.map((doc, idx) => (
            <DocumentRow 
              key={idx} 
              title={doc.title} 
              linkUrl={doc.link} 
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default PreferentialWarrants;
