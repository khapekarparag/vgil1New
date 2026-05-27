import React from 'react';
import { Link } from 'react-router-dom';

function MaterialCreditors() {
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
                  <span className="text-[#ff4d00] font-bold">Material Creditors</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="container max-w-[1000px] mx-auto px-4 flex-grow flex flex-col justify-center">
        {/* Heading Section - Matching the screenshot style */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-extrabold m-0 tracking-tight leading-tight text-[#ff4d00]">
            Virtual Galaxy Infotech Limited Material Creditors
          </h2>
          <p className="text-gray-600 font-medium text-xs md:text-sm mt-3 mb-0">
            Details of Outstanding Overdue to material Creditors as at December 31st, 2024
          </p>
        </div>

        {/* Single Table Card Container */}
        <div className="bg-white rounded-xl shadow-sm p-4 border border-solid border-gray-200/60 max-w-[850px] mx-auto w-full">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-solid border-gray-200 text-left text-sm">
              <thead>
                <tr className="bg-[#fff1ec] border-b border-solid border-gray-200">
                  <th className="p-3 font-bold text-[#1b305a] border-r border-solid border-gray-200 text-center" style={{ width: '15%' }}>Sr. No</th>
                  <th className="p-3 font-bold text-[#1b305a] border-r border-solid border-gray-200" style={{ width: '55%' }}>Particulars</th>
                  <th className="p-3 font-bold text-[#1b305a] text-center" style={{ width: '30%' }}>Amount in Lakhs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-solid border-gray-200 hover:bg-slate-50/50 transition-colors">
                  <td className="p-3 text-gray-600 font-medium border-r border-solid border-gray-200 text-center">1.</td>
                  <td className="p-3 text-gray-700 font-semibold border-r border-solid border-gray-200">PAYNEXT PRIVATE LIMITED</td>
                  <td className="p-3 text-gray-700 font-semibold text-center">71.20</td>
                </tr>
                <tr className="bg-slate-50/10 hover:bg-slate-50/30 transition-colors">
                  <td className="p-3 border-r border-solid border-gray-200"></td>
                  <td className="p-3 text-[#1b305a] font-bold border-r border-solid border-gray-200 text-center">Total</td>
                  <td className="p-3 text-[#1b305a] font-bold text-center">71.20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MaterialCreditors;
