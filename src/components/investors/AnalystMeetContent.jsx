import React, { useState } from 'react';

const AnalystMeetContent = () => {
  const [openIndex, setOpenIndex] = useState(1); // 1 is open by default (Nov 28, 2025)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const meets = [
    {
      id: 0,
      dateLine1: 'Mar 06,',
      dateLine2: '2026',
      title: 'Investor Analyst Meet',
      time: '10:00 AM IST',
      files: [
        {
          title: 'Investor Analyst Meet Presentation',
          type: 'PDF Document',
          url: '/assets/.pdf/vgil 1.pdf',
          btnText: 'Download PDF',
          iconType: 'pdf'
        }
      ]
    },
    {
      id: 1,
      dateLine1: 'Nov 28,',
      dateLine2: '2025',
      title: 'Investor Analyst Meet',
      time: '10:00 AM IST',
      files: [
        {
          title: 'Investor Analyst Meet Presentation',
          type: 'PDF Document',
          url: '/assets/.pdf/Investor_Presentation 2.pdf',
          btnText: 'Download PDF',
          iconType: 'pdf'
        },
        {
          title: 'Earnings Conference Call',
          type: 'PDF Document',
          url: '/assets/.pdf/Earnings_Conference_Call-28-November-2025 2.pdf',
          btnText: 'Download PDF',
          iconType: 'pdf'
        }
      ]
    },
    {
      id: 2,
      dateLine1: 'Jun 20,',
      dateLine2: '2025',
      title: 'Investor Analyst Meet',
      time: '10:00 AM IST',
      files: [
        {
          title: 'Investor Analyst Meet Short Presentation',
          type: 'PDF Document',
          url: '/assets/.pdf/virtual-galaxy-mar25-short 3.pdf',
          btnText: 'Download PDF',
          iconType: 'pdf'
        },
        {
          title: 'Virtual Galaxy Invite',
          type: 'PDF Document',
          url: '/assets/.pdf/Virtual Galaxy Invite 3.pdf',
          btnText: 'Download PDF',
          iconType: 'pdf'
        },
        {
          title: 'Virtual Galaxy Infotech Limited Audio',
          type: 'Audio Recording',
          url: '/assets/recording/Virtual-Galaxy-Infotech-Limited-20062025.mp3',
          btnText: 'Download Audio',
          iconType: 'audio'
        }
      ]
    }
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden', padding: '100px 0', backgroundColor: '#fffdfd' }}>
      {/* Background swirl element if needed */}
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,230,225,0.4) 0%, rgba(255,255,255,0) 70%)', zIndex: 0, borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,230,225,0.4) 0%, rgba(255,255,255,0) 70%)', zIndex: 0, borderRadius: '50%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center mb-5">
          <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#0a1024' }}>
            📈 Investor Analyst Meet 🤝
          </h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#e10600', margin: '15px auto 30px' }}></div>
          <p style={{ color: '#4b5563', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Access detailed presentations 📊 and reports 📋 from our Investor Analyst Meets. <br className="d-none d-md-block"/>
            Stay informed with insights into our performance and future outlook 🚀.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {meets.map((meet, idx) => {
            const isOpen = openIndex === meet.id;
            
            return (
              <div 
                key={meet.id} 
                style={{ 
                  marginBottom: '20px', 
                  borderRadius: '12px', 
                  overflow: 'hidden',
                  border: isOpen ? '1px solid #e10600' : '1px solid transparent',
                  boxShadow: isOpen ? '0 10px 30px rgba(225,6,0,0.08)' : '0 10px 30px rgba(0,0,0,0.03)',
                  backgroundColor: '#fff',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Header row */}
                <div 
                  onClick={() => toggleAccordion(meet.id)}
                  style={{ 
                    display: 'flex', 
                    cursor: 'pointer',
                    alignItems: 'stretch'
                  }}
                >
                  {/* Left Date Block */}
                  <div style={{ 
                    backgroundColor: '#fff0ee', 
                    padding: '25px 30px', 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '20px',
                    width: '240px',
                    borderRight: '1px solid #ffebe8'
                  }}>
                    <div style={{ 
                      width: '45px', height: '45px', borderRadius: '12px', 
                      background: 'linear-gradient(135deg, #ff8a7a 0%, #e10600 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                      fontSize: '1.2rem', boxShadow: '0 4px 10px rgba(225,6,0,0.3)'
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#0a1024' }}>{meet.dateLine1}</div>
                      <div style={{ fontWeight: '700', fontSize: '1.4rem', color: '#0a1024', lineHeight: '1' }}>{meet.dateLine2}</div>
                    </div>
                  </div>

                  {/* Right Title Block */}
                  <div style={{ 
                    flex: 1, 
                    padding: '25px 30px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0a1024', marginBottom: '8px' }}>{meet.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', fontSize: '0.95rem' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg> {meet.time}
                      </div>
                    </div>
                    
                    {/* Toggle Button */}
                    <div style={{ 
                      width: '40px', height: '40px', borderRadius: '50%',
                      backgroundColor: isOpen ? '#e10600' : '#ffeeeb',
                      color: isOpen ? '#fff' : '#e10600',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Body (Files) */}
                {isOpen && (
                  <div style={{ backgroundColor: '#fffaf9', borderTop: '1px solid #ffebe8' }}>
                    {meet.files.map((file, fIdx) => (
                      <div 
                        key={fIdx} 
                        style={{ 
                          padding: '20px 30px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between',
                          borderBottom: fIdx !== meet.files.length - 1 ? '1px solid #ffebe8' : 'none'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                          <div style={{ 
                            width: '45px', height: '45px', borderRadius: '10px', 
                            backgroundColor: '#e10600', color: '#fff',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.4rem'
                          }}>
                            {file.iconType === 'pdf' ? (
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                            ) : (
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              </svg>
                            )}
                          </div>
                          <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0a1024', marginBottom: '4px' }}>{file.title}</h4>
                            <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>{file.type}</p>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          {file.iconType === 'audio' && (
                            <audio controls src={file.url} style={{ height: '36px', maxWidth: '250px' }}>
                              Your browser does not support the audio element.
                            </audio>
                          )}
                          <a 
                            href={file.url} 
                            target="_blank" 
                            rel="noreferrer"
                            style={{ 
                              padding: '10px 24px', 
                              borderRadius: '100px', 
                              border: '1px solid #e10600',
                              color: '#e10600',
                              textDecoration: 'none',
                              fontWeight: '600',
                              fontSize: '0.95rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              transition: 'all 0.2s',
                              backgroundColor: '#fff'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e10600'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#e10600'; }}
                          >
                            {file.btnText}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="7 10 12 15 17 10"></polyline>
                              <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnalystMeetContent;
