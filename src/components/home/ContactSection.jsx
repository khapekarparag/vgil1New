import React, { useState, useRef, useEffect } from 'react';

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
      <div className="section-contact">
        <div className="contact-image">
          <img src="/assets/images/section/contact-image-bg.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="col-left">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold">Contact</div>
                  <div className="heading-title text-gradient-3">
                    Let’s Build <br /> Intelligent Things
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  <div className="contact-item" style={{ border: '1px solid #000', padding: '20px', borderRadius: '16px' }}>
                    <div className="content">
                      <div className="title fw-bold mb-4" style={{ fontSize: '18px', color: '#ff0000' }}>Marketing</div>
                      <div className="text" style={{ fontSize: '14px', marginBottom: '2px', lineHeight: '1.2' }}>info@vgipl.in</div>
                      <div className="text" style={{ fontSize: '14px', lineHeight: '1.2' }}>+91 62626 86865</div>
                    </div>
                  </div>
                  <div className="contact-item" style={{ border: '1px solid #000', padding: '20px', borderRadius: '16px' }}>
                    <div className="content">
                      <div className="title fw-bold mb-4" style={{ fontSize: '18px', color: '#ff0000' }}>HR</div>
                      <div className="text" style={{ fontSize: '14px', marginBottom: '2px', lineHeight: '1.2' }}>hr@vgipl.in</div>
                      <div className="text" style={{ fontSize: '14px', lineHeight: '1.2' }}>+91 77988 80958</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                <div style={{ marginBottom: '30px' }}>
                  <div style={{ fontWeight: '700', color: '#1a1a1a', marginBottom: '10px' }}>Contact Us</div>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', color: '#1a1a1a' }}>
                    How can we support <br/> your <span style={{ color: '#e10600' }}>needs?</span>
                  </h2>
                </div>

                <form className="form-contact">
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 calc(50% - 10px)', minWidth: '250px' }}>
                      <select style={{ width: '100%', padding: '15px 20px', borderRadius: '8px', border: '1px solid #d1d5db', color: '#111827', fontWeight: '500', appearance: 'none', background: '#fff url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23000\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E") no-repeat calc(100% - 15px) center' }}>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Select your industry</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Bank</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Manufacturing</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>NBFC</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Other</option>
                      </select>
                    </div>
                    <div style={{ flex: '1 1 calc(50% - 10px)', minWidth: '250px' }}>
                      <select style={{ width: '100%', padding: '15px 20px', borderRadius: '8px', border: '1px solid #d1d5db', color: '#111827', fontWeight: '500', appearance: 'none', background: '#fff url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23000\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E") no-repeat calc(100% - 15px) center' }}>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Select a product</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Core Banking</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Conversational AI</option>
                        <option style={{ backgroundColor: '#fff', color: '#111827' }}>Audit Flux</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 calc(50% - 10px)', minWidth: '250px' }}>
                      <input type="text" placeholder="Full name*" required style={{ width: '100%', padding: '15px 20px', borderRadius: '8px', border: '1px solid #d1d5db', color: '#111827', fontWeight: '500' }} />
                    </div>
                    <div style={{ flex: '1 1 calc(50% - 10px)', minWidth: '250px' }}>
                      <input type="email" placeholder="Email*" required style={{ width: '100%', padding: '15px 20px', borderRadius: '8px', border: '1px solid #d1d5db', color: '#111827', fontWeight: '500' }} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 calc(50% - 10px)', minWidth: '250px', position: 'relative', display: 'flex' }}>
                      <div ref={dropdownRef} style={{ position: 'relative', flex: '0 0 120px' }}>
                        <div 
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          style={{ width: '100%', height: '56px', padding: '0 15px', borderRadius: '8px 0 0 8px', border: '1px solid #d1d5db', borderRight: 'none', backgroundColor: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <img src={`https://flagcdn.com/${selectedCountry.flag}.svg`} alt={selectedCountry.flag} style={{ width: '24px', borderRadius: '2px' }} />
                            <span style={{ color: '#111827', fontWeight: '500' }}>{selectedCountry.code}</span>
                          </div>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="3" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>

                        {isDropdownOpen && (
                          <div style={{ position: 'absolute', top: '100%', left: '0', width: '280px', maxHeight: '250px', overflowY: 'auto', backgroundColor: '#fff', border: '1px solid #d1d5db', borderRadius: '8px', zIndex: 1000, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', marginTop: '4px' }}>
                            {countries.map((country, idx) => (
                              <div 
                                key={idx}
                                onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }}
                                style={{ padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', borderBottom: idx !== countries.length - 1 ? '1px solid #f0f0f0' : 'none' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                              >
                                <img src={`https://flagcdn.com/${country.flag}.svg`} alt={country.flag} style={{ width: '24px', borderRadius: '2px' }} />
                                <span style={{ color: '#111827', fontWeight: '500', flex: 1 }}>{country.name}</span>
                                <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>{country.code}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <input type="tel" placeholder="Phone Number" required style={{ flex: '1', height: '56px', padding: '15px 20px', borderRadius: '0 8px 8px 0', border: '1px solid #d1d5db', borderLeft: '1px solid #d1d5db', color: '#111827', fontWeight: '500', width: '100%' }} />
                    </div>
                    <div style={{ flex: '1 1 calc(50% - 10px)', minWidth: '250px' }}>
                      <input type="text" placeholder="Website" style={{ width: '100%', padding: '15px 20px', borderRadius: '8px', border: '1px solid #d1d5db', color: '#111827', fontWeight: '500' }} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <textarea placeholder="Message*" required style={{ width: '100%', padding: '15px 20px', borderRadius: '8px', border: '1px solid #d1d5db', minHeight: '120px', resize: 'vertical', color: '#111827', fontWeight: '500' }}></textarea>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input type="checkbox" id="terms" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                      <label htmlFor="terms" style={{ color: '#1a1a1a', fontSize: '0.9rem', cursor: 'pointer' }}>
                        I agree with the <span style={{ color: '#e10600' }}>Terms & Conditions</span>
                      </label>
                    </div>
                    
                    <button type="submit" style={{ background: 'linear-gradient(90deg, #ff8a7a 0%, #e10600 100%)', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '100px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                      Send Message 
                      <div style={{ backgroundColor: '#fff', color: '#e10600', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
