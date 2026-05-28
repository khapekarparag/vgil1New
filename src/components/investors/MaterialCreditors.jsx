import React from 'react';
import { Link } from 'react-router-dom';
import { List, User, IndianRupee, BarChart3, ShieldCheck } from 'lucide-react';
import imgMaterialCreditors from '../../assets/Investors-Info-img/Material_Creditors.png';
import '../../pages/BoardManagement.css';

function MaterialCreditors() {
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
                    <span className="text-[#ff4d00] font-bold">Material Creditors</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Centered Header Content with right-side illustration */}
          <div className="relative mt-4 py-3 text-center">
            <div className="max-w-[750px] mx-auto effect-fade-up">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight m-0 text-[#1b305a]">
                Virtual Galaxy Infotech Limited Material Creditors
              </h1>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-1.5 my-3">
                <div className="w-8 h-[2.5px] bg-[#ff4d00] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></div>
                <div className="w-8 h-[2.5px] bg-[#ff4d00] rounded-full"></div>
              </div>

              <p className="text-gray-600 font-medium text-xs md:text-sm mt-3 mb-0">
                Details of Outstanding Overdue to material Creditors as at{' '}
                <span className="text-[#ff4d00] font-bold">December 31st, 2024</span>
              </p>
            </div>

            {/* Absolute Positioned Illustration on the Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[220px] h-[220px] d-none d-lg-block pointer-events-none effect-fade-up" style={{ animationDelay: '0.1s' }}>
              {/* Concentric background curves */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="35" stroke="#ff4d00" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
                <circle cx="50" cy="50" r="42" stroke="#ff4d00" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="49" stroke="#ff4d00" strokeWidth="0.5" strokeDasharray="2.5 2.5" />
              </svg>
              <img 
                src={imgMaterialCreditors} 
                alt="Material Creditors Illustration" 
                className="w-full h-full object-contain opacity-[0.1]" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid / Disclosures Section */}
      <section className="explore-section flex-grow">
        <div className="container max-w-[950px] mx-auto px-4">
          
          {/* Table Container Card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-solid border-slate-100 max-w-[850px] mx-auto w-full overflow-hidden mb-6 effect-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm m-0">
                <thead>
                  <tr 
                    className="border-b border-solid border-slate-100"
                    style={{ background: 'linear-gradient(90deg, #ffebe5 0%, #fff5f2 100%)' }}
                  >
                    <th className="p-4 font-bold text-[#1b305a] border-r border-solid border-slate-100/50" style={{ width: '18%' }}>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#ff4d00] text-white flex items-center justify-center flex-shrink-0">
                          <List size={14} />
                        </div>
                        <span className="text-[13px] tracking-wide uppercase">Sr. No</span>
                      </div>
                    </th>
                    <th className="p-4 font-bold text-[#1b305a] border-r border-solid border-slate-100/50" style={{ width: '52%' }}>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#ff4d00] text-white flex items-center justify-center flex-shrink-0">
                          <User size={14} />
                        </div>
                        <span className="text-[13px] tracking-wide uppercase">Particulars</span>
                      </div>
                    </th>
                    <th className="p-4 font-bold text-[#1b305a]" style={{ width: '30%' }}>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#ff4d00] text-white flex items-center justify-center flex-shrink-0">
                          <IndianRupee size={14} />
                        </div>
                        <span className="text-[13px] tracking-wide uppercase">Amount in Lakhs</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-solid border-slate-100 hover:bg-slate-50/30 transition-colors">
                    <td className="p-4 text-gray-500 font-medium border-r border-solid border-slate-100/50 text-[14.5px]">1.</td>
                    <td className="p-4 text-[#1b305a] font-bold border-r border-solid border-slate-100/50 text-[14.5px] tracking-wide">
                      PAYNEXT PRIVATE LIMITED
                    </td>
                    <td className="p-4 text-gray-700 font-semibold text-[14.5px]">71.20</td>
                  </tr>
                  <tr style={{ background: '#fff8f6' }}>
                    <td className="p-4 border-r border-solid border-slate-100/50"></td>
                    <td className="p-4 text-[#1b305a] font-bold border-r border-solid border-slate-100/50">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-white text-[#ff4d00] border border-solid border-[#ffe2e2] shadow-sm flex items-center justify-center flex-shrink-0">
                          <BarChart3 size={14} />
                        </div>
                        <span className="text-[14px]">Total</span>
                      </div>
                    </td>
                    <td className="p-4 text-[#ff4d00] font-extrabold text-[15px]">
                      71.20
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Disclaimer Banner */}
          <div className="flex justify-center effect-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2.5 px-6 py-3 bg-white border border-solid border-[#ffe2e2] rounded-xl shadow-[0_4px_12px_rgba(255,77,0,0.015)] max-w-full">
              <ShieldCheck className="text-[#ff4d00] flex-shrink-0" size={18} />
              <span className="text-[12.5px] font-medium text-slate-600">
                All amounts are in Lakhs (₹). This information is presented as per company records.
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default MaterialCreditors;
