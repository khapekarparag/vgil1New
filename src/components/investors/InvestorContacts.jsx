import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, FileText, Mail, Phone, User } from 'lucide-react';
import vgilLogo from '../../assets/home/vgil-logo.png';

// Reusable card for key contact persons
const KeyContactCard = ({ name, role, email, phone }) => {
  return (
    <div className="bg-white border-l-[5px] border-l-solid border-l-[#162a56] rounded-xl p-3 px-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-4 border border-solid border-gray-100/80">
      <div className="w-10 h-10 rounded-full bg-[#fff1ec] flex items-center justify-center flex-shrink-0 border border-solid border-[#fee2e2]">
        <User className="w-5 h-5 text-[#ff4d00]" />
      </div>
      <div className="flex-grow">
        <h4 className="text-sm font-bold text-[#1b305a] m-0 leading-tight">{name}</h4>
        <p className="text-[9px] font-bold text-gray-400 mt-0.5 mb-0 uppercase tracking-wider">{role}</p>
        
        {/* Orange Mini Divider */}
        <div className="w-8 h-[1.5px] bg-[#ff4d00] my-1 rounded-full"></div>
        
        {/* Contact info rows (horizontal layout to save space) */}
        <div className="flex flex-row gap-3 flex-wrap items-center mt-1">
          <div className="flex items-center gap-1">
            <Mail className="w-3.5 h-3.5 text-gray-400" />
            <a 
              href={`mailto:${email}`} 
              className="text-xs font-semibold text-gray-500 hover:text-[#ff4d00] transition-colors no-underline"
            >
              {email}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-gray-400" />
            <a 
              href={`tel:${phone}`} 
              className="text-xs font-semibold text-gray-500 hover:text-[#ff4d00] transition-colors no-underline"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable box for Right Contact Details area
const ContactDetailBox = ({ label, value, type }) => {
  const isEmail = type === 'email';
  const Icon = isEmail ? Mail : Phone;
  const href = isEmail ? `mailto:${value}` : `tel:${value}`;

  return (
    <div className="bg-slate-50 hover:bg-slate-100 transition-all duration-200 border border-solid border-slate-100 rounded-lg p-2.5 flex items-center gap-3">
      <div className="w-9 h-9 rounded-md bg-blue-50/50 flex items-center justify-center text-[#1b305a] flex-shrink-0 border border-solid border-blue-100/50">
        <Icon className="w-4 h-4 text-[#1b305a]" />
      </div>
      <div>
        <span className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider block leading-none mb-0.5">{label}</span>
        <a 
          href={href} 
          className="text-[#1b305a] hover:text-[#ff4d00] text-xs font-bold block transition-colors no-underline"
        >
          {value}
        </a>
      </div>
    </div>
  );
};

function InvestorContacts() {
  return (
    <div className="board-mgmt-wrapper bg-[#f8fafc] pt-[92px] pb-4 min-h-[calc(100vh-100px)] box-sizing-border-box flex flex-col justify-start">
      
      {/* Standard Container for Breadcrumbs (matches other pages exactly) */}
      <div className="container">
        <div className="row mb-2">
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
                  <span className="text-[#162a56] font-bold">Investor Contacts/Grievances</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Cards Container */}
      <div className="container max-w-[1100px] mx-auto px-4 flex-grow flex flex-col justify-center">
        {/* Heading Section - Compact spacing */}
        <div className="text-center mb-3">
          <h2 className="text-xl md:text-2xl font-extrabold m-0 tracking-tight leading-tight">
            <span className="text-[#162a56]">Contact Information</span>{' '}
            <span className="text-[#ff4d00]">for Investor Grievances</span>
          </h2>
          {/* Small Orange Underline */}
          <div className="w-8 h-0.5 bg-[#ff4d00] mx-auto mt-1 rounded-full"></div>
          <p className="text-gray-400 font-medium text-xs mt-1 mb-0">
            For any Queries / Grievances / Complaints, Please contact:
          </p>
        </div>

        {/* Main top card - Compact Padding & Layout */}
        <div className="bg-white border-l-[5px] border-l-solid border-l-[#ff4d00] rounded-xl shadow-md overflow-hidden border border-solid border-gray-100 mb-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-3.5">
            
            {/* Left Content Area */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              
              {/* Circular Logo & Company Name */}
              <div className="flex items-center gap-3">
                {/* Logo is larger and has very little padding to make it highly visible */}
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center p-0.5 border border-solid border-gray-100 flex-shrink-0 overflow-hidden">
                  <img 
                    src={vgilLogo} 
                    alt="Virtual Galaxy Infotech Ltd. Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#1b305a] m-0 tracking-tight">
                  Virtual Galaxy Infotech Ltd.
                </h3>
              </div>

              {/* Registered Office Details */}
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-[#ff4d00] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-bold text-[#1b305a] m-0 uppercase tracking-wider">
                    Registered Office
                  </h4>
                  <p className="text-xs text-gray-500 leading-normal mt-0.5 mb-0">
                    Plot No. 26, The Nagpur Divisional Insurance Employees Co-op. Hsg. Society Limited, Vivekanand Nagar, Nagpur, Maharashtra – 440015, India
                  </p>
                </div>
              </div>

              {/* Thin horizontal divider */}
              <div className="border-b border-solid border-gray-100 my-0.5"></div>

              {/* CIN and GSTIN Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                
                {/* CIN Column */}
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-[#1b305a] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[9px] font-bold text-[#1b305a] m-0 uppercase tracking-wider">
                      CIN
                    </h4>
                    <span className="text-xs font-semibold text-gray-500 block mt-0.5">
                      L93000MH1997PLC110645
                    </span>
                  </div>
                </div>

                {/* GSTIN / UIN Column */}
                <div className="flex items-start gap-2 md:border-l md:border-solid md:border-gray-200/80 md:pl-3">
                  <FileText className="w-4 h-4 text-[#1b305a] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[9px] font-bold text-[#1b305a] m-0 uppercase tracking-wider">
                      GSTIN / UIN
                    </h4>
                    <span className="text-xs font-semibold text-gray-500 block mt-0.5">
                      27AAACV5098G1Z1
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Subtle Vertical Divider (hidden on mobile, visible on desktop) */}
            <div className="hidden lg:block border-r border-solid border-gray-200/60 my-0.5"></div>

            {/* Right Contact Details Area */}
            <div className="flex flex-col gap-2.5 justify-center">
              <div>
                <h3 className="text-xs font-bold text-[#1b305a] m-0 leading-tight">
                  Contact Details
                </h3>
                <div className="w-6 h-[1.5px] bg-[#ff4d00] mt-0.5 mb-1 rounded-full"></div>
              </div>

              <div className="flex flex-col gap-2">
                <ContactDetailBox 
                  label="Email" 
                  value="investors@vginfotech.ai" 
                  type="email" 
                />
                <ContactDetailBox 
                  label="Phone" 
                  value="9226531342" 
                  type="phone" 
                />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Contact Person Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
          <KeyContactCard 
            name="CS Anjali Vinay Padhye"
            role="Company Secretary & Compliance Officer"
            email="company.secretary@vginfotech.ai"
            phone="9226531342"
          />
          <KeyContactCard 
            name="Maashitla Securities Private Limited"
            role="Registrar and Transfer Agent"
            email="rta@maashitla.com"
            phone="9312278480"
          />
        </div>

      </div>
    </div>
  );
}

export default InvestorContacts;
