import React, { useState, useRef, useEffect } from 'react';
import contactBg from '../../assets/Contact-img/Contact@2x.png';

function ContactSection() {
  const [phone, setPhone] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ code: '+91', flag: 'in', name: 'India' });
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const countries = [
    { code: '+91', flag: 'in', name: 'India' },
    { code: '+1', flag: 'us', name: 'United States' },
    { code: '+44', flag: 'gb', name: 'United Kingdom' },
    { code: '+61', flag: 'au', name: 'Australia' },
    { code: '+81', flag: 'jp', name: 'Japan' },
    { code: '+49', flag: 'de', name: 'Germany' },
    { code: '+33', flag: 'fr', name: 'France' },
    { code: '+86', flag: 'cn', name: 'China' },
    { code: '+971', flag: 'ae', name: 'United Arab Emirates' },
    { code: '+65', flag: 'sg', name: 'Singapore' },
    { code: '+94', flag: 'lk', name: 'Sri Lanka' },
    { code: '+55', flag: 'br', name: 'Brazil' },
    { code: '+1', flag: 'ca', name: 'Canada' },
    { code: '+39', flag: 'it', name: 'Italy' },
    { code: '+7', flag: 'ru', name: 'Russia' },
    { code: '+27', flag: 'za', name: 'South Africa' },
  ];

  return (
    <div id="contact" className="section-spacing-lg">
      <div className="section-contact" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-6">
              <div className="col-left">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold" style={{ color: '#ffffff', opacity: 0.9 }}>Contact</div>
                  <div className="heading-title" style={{ color: '#ffffff', fontSize: '3rem', fontWeight: '800', lineHeight: '1.1' }}>
                    Let’s Build <br /> Intelligent Things
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  <div className="contact-item" style={{ border: '1px solid rgba(255, 255, 255, 0.25)', padding: '20px', borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                    <div className="content">
                      <div className="title fw-bold mb-4" style={{ fontSize: '18px', color: '#ff4d4d' }}>Marketing</div>
                      <div className="text" style={{ fontSize: '14px', marginBottom: '2px', lineHeight: '1.2', color: '#ffffff' }}>info@vgipl.in</div>
                      <div className="text" style={{ fontSize: '14px', lineHeight: '1.2', color: '#ffffff' }}>+91 62626 86865</div>
                    </div>
                  </div>
                  <div className="contact-item" style={{ border: '1px solid rgba(255, 255, 255, 0.25)', padding: '20px', borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                    <div className="content">
                      <div className="title fw-bold mb-4" style={{ fontSize: '18px', color: '#ff4d4d' }}>HR</div>
                      <div className="text" style={{ fontSize: '14px', marginBottom: '2px', lineHeight: '1.2', color: '#ffffff' }}>hr@vgipl.in</div>
                      <div className="text" style={{ fontSize: '14px', lineHeight: '1.2', color: '#ffffff' }}>+91 77988 80958</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-card">
                <div className="contact-form-header">
                  <div className="sub-title" style={{ fontWeight: '700', color: '#1a1a1a', marginBottom: '6px', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Contact Us</div>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: '800', lineHeight: '1.2', color: '#1a1a1a', margin: '0' }}>
                    How can we support <br /> your <span style={{ color: '#e10600' }}>needs?</span>
                  </h2>
                </div>

                <form className="form-contact-compact">
                  <div className="form-row-2col">
                    <div className="form-field-half">
                      <select className="form-select-compact">
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Select your industry</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Bank</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Manufacturing</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>NBFC</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Other</option>
                      </select>
                    </div>
                    <div className="form-field-half">
                      <select className="form-select-compact">
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Select a product</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Core Banking</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Conversational AI</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Audit Flux</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="form-field-half">
                      <input type="text" placeholder="Full name*" required className="form-input-compact" />
                    </div>
                    <div className="form-field-half">
                      <input type="email" placeholder="Email*" required className="form-input-compact" />
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="form-field-half phone-field-wrapper">
                      <div ref={dropdownRef} style={{ position: 'relative' }}>
                        <div
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="country-select-trigger-compact"
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <img src={`https://flagcdn.com/${selectedCountry.flag}.svg`} alt={selectedCountry.flag} style={{ width: '20px', borderRadius: '1.5px' }} />
                            <span style={{ fontSize: '13.5px', color: '#111827', fontWeight: '500' }}>{selectedCountry.code}</span>
                          </div>
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="3.5" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>

                        {isDropdownOpen && (
                          <div className="country-dropdown-compact">
                            {countries.map((country, idx) => (
                              <div
                                key={idx}
                                onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }}
                                className="country-option-compact"
                              >
                                <img src={`https://flagcdn.com/${country.flag}.svg`} alt={country.flag} style={{ width: '20px', borderRadius: '1.5px' }} />
                                <span style={{ flex: 1, color: '#111827', fontWeight: '500' }}>{country.name}</span>
                                <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>{country.code}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="phone-input-compact"
                      />
                    </div>
                    <div className="form-field-half">
                      <input type="text" placeholder="Website" className="form-input-compact" />
                    </div>
                  </div>

                  <div>
                    <textarea placeholder="Message*" required className="textarea-compact"></textarea>
                  </div>

                  <div className="form-footer-row">
                    <div className="terms-checkbox-wrap">
                      <input type="checkbox" id="terms" />
                      <label htmlFor="terms">
                        I agree with the <span style={{ color: '#e10600' }}>Terms & Conditions</span>
                      </label>
                    </div>

                    <button type="submit" className="btn-submit-compact">
                      Send Message
                      <div className="btn-icon-circle">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Redesigned Contact Form Container */
        .contact-form-card {
          background-color: #ffffff;
          border-radius: 24px;
          padding: 24px !important;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
        }

        .contact-form-header {
          margin-bottom: 20px;
        }

        .form-contact-compact {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .form-row-2col {
          display: flex !important;
          flex-direction: row !important;
          gap: 16px !important;
          width: 100% !important;
          margin-bottom: 12px !important;
        }

        .form-field-half {
          flex: 1 !important;
          min-width: 0 !important;
          max-width: calc(50% - 8px) !important;
          width: calc(50% - 8px) !important;
        }

        /* Compact input and select fields */
        .form-input-compact,
        .form-select-compact {
          width: 100%;
          height: 44px;
          padding: 5px 5px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          color: #111827;
          font-size: 14px;
          font-weight: 500;
          outline: none;
          background-color: #ffffff;
          transition: all 0.2s ease;
        }

        .form-input-compact:focus,
        .form-select-compact:focus {
          border-color: #e10600;
          box-shadow: 0 0 0 3px rgba(225, 6, 0, 0.08);
        }

        .form-select-compact {
          appearance: none;
          background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") no-repeat calc(100% - 15px) center;
        }

        /* Nice Select overrides if jQuery nice-select is initialized */
        .nice-select.form-select-compact,
        .form-field-half .nice-select {
          height: 44px !important;
          line-height: 42px !important;
          padding-left: 16px !important;
          padding-right: 30px !important;
          float: none !important;
          width: 100% !important;
          background-color: #ffffff !important;
          border-radius: 8px !important;
          border: 1px solid #d1d5db !important;
          box-sizing: border-box !important;
          display: block !important;
          margin: 0 !important;
        }

        .nice-select.form-select-compact .current,
        .form-field-half .nice-select .current {
          color: #111827 !important;
          font-size: 14px !important;
          font-weight: 500 !important;
        }

        .nice-select.form-select-compact::after,
        .form-field-half .nice-select::after {
          border-bottom: 2px solid #111827 !important;
          border-right: 2px solid #111827 !important;
          right: 16px !important;
          content: '' !important;
          display: block !important;
        }

        /* Custom Phone Selector Input */
        .phone-field-wrapper {
          display: flex;
          width: 100%;
          position: relative;
        }

        .country-select-trigger-compact {
          flex: 0 0 96px;
          height: 44px;
          padding: 0 10px;
          border-radius: 8px 0 0 8px;
          border: 1px solid #d1d5db;
          border-right: none;
          background-color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          user-select: none;
          transition: all 0.2s ease;
        }

        .country-select-trigger-compact:hover {
          background-color: #f9fafb;
        }

        .phone-input-compact {
          flex: 1;
          height: 44px;
          padding: 10px 16px;
          border-radius: 0 8px 8px 0;
          border: 1px solid #d1d5db;
          color: #111827;
          font-size: 14px;
          font-weight: 500;
          width: 100%;
          outline: none;
          transition: all 0.2s ease;
        }

        .phone-input-compact:focus {
          border-color: #e10600;
          box-shadow: 0 0 0 3px rgba(225, 6, 0, 0.08);
        }

        .country-dropdown-compact {
          position: absolute;
          top: 100%;
          left: 0;
          width: 280px;
          max-height: 200px;
          overflow-y: auto;
          background-color: #fff;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          z-index: 1000;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          margin-top: 4px;
        }

        .country-option-compact {
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          font-size: 13.5px;
          border-bottom: 1px solid #f3f4f6;
          transition: background-color 0.2s ease;
          text-align: left;
        }

        .country-option-compact:hover {
          background-color: #f9fafb;
        }

        /* Compact Textarea */
        .textarea-compact {
          width: 100%;
          height: 70px;
          min-height: 70px;
          max-height: 200px;
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          color: #111827;
          font-size: 14px;
          font-weight: 500;
          outline: none;
          resize: vertical;
          transition: all 0.2s ease;
          margin-bottom: 12px;
        }

        .textarea-compact:focus {
          border-color: #e10600;
          box-shadow: 0 0 0 3px rgba(225, 6, 0, 0.08);
        }

        /* Footer Section of Form */
        .form-footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 4px;
        }

        .terms-checkbox-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .terms-checkbox-wrap input[type="checkbox"] {
          width: 15px;
          height: 15px;
          cursor: pointer;
        }

        .terms-checkbox-wrap label {
          color: #1a1a1a;
          font-size: 13px;
          cursor: pointer;
          user-select: none;
        }

        /* Compact Send Button */
        .btn-submit-compact {
          background: linear-gradient(90deg, #ff8a7a 0%, #e10600 100%);
          color: #fff;
          border: none;
          padding: 10px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .btn-submit-compact:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(225, 6, 0, 0.15);
        }

        .btn-submit-compact:active {
          transform: translateY(0);
        }

        .btn-icon-circle {
          background-color: #fff;
          color: #e10600;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Mobile Media Queries (max-width: 768px) */
        @media (max-width: 768px) {
          .contact-form-card {
            padding: 16px !important;
            border-radius: 20px !important;
          }

          .form-input-compact,
          .form-select-compact,
          .nice-select.form-select-compact,
          .country-select-trigger-compact,
          .phone-input-compact {
            height: 42px !important;
            font-size: 13.5px !important;
            padding: 5px 5px !important;
          }

          .nice-select.form-select-compact {
            line-height: 40px !important;
          }

          .country-select-trigger-compact {
            flex: 0 0 90px !important;
          }

          .textarea-compact {
            height: 60px !important;
            min-height: 60px !important;
            font-size: 13.5px !important;
            padding: 8px 12px !important;
            margin-bottom: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default ContactSection;
