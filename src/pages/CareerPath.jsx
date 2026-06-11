import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import careersBg from '../assets/careers-bg-img/Careers@2x.png';

const CareerPath = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    { id: 'senior-react-developer', title: 'Senior React Developer', location: 'Nagpur / Pune, India', type: 'Full-Time', dept: 'Engineering' },
    { id: 'ui-ux-designer', title: 'Senior UI/UX Designer', location: 'Pune, India', type: 'Full-Time', dept: 'Design' },
    { id: 'backend-engineer', title: 'Backend Node.js Engineer', location: 'Remote / India', type: 'Full-Time', dept: 'Engineering' },
    { id: 'product-manager', title: 'Technical Product Manager', location: 'Nagpur, India', type: 'Full-Time', dept: 'Product' },
    { id: 'sales-executive', title: 'Enterprise Sales Executive', location: 'Mumbai, India', type: 'Full-Time', dept: 'Sales' },
    { id: 'data-scientist', title: 'Data Scientist (AI/ML)', location: 'Remote', type: 'Full-Time', dept: 'Data' },
  ];

  return (
    <>
      <section style={{ 
        paddingTop: '160px', 
        paddingBottom: '100px', 
        backgroundImage: `url(${careersBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '20px', color: '#ffffff' }}>Your Career Path</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            Explore open opportunities and start your journey with Virtual Galaxy. We offer competitive benefits and a clear path for professional growth.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div style={{ position: 'sticky', top: '120px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>What We Offer</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ffeeee', color: '#e10600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="icon icon-check"></i></div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1a1a1a' }}>Competitive Compensation</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ffeeee', color: '#e10600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="icon icon-check"></i></div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1a1a1a' }}>Comprehensive Health Coverage</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ffeeee', color: '#e10600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="icon icon-check"></i></div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1a1a1a' }}>Continuous Learning Funds</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ffeeee', color: '#e10600', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="icon icon-check"></i></div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1a1a1a' }}>Flexible Remote Options</span>
                  </li>
                </ul>
                
                <div style={{ backgroundColor: '#f9f9f9', padding: '25px', borderRadius: '16px', border: '1px solid #eaeaea' }}>
                  <h4 style={{ fontWeight: '700', marginBottom: '10px' }}>Don't see a fit?</h4>
                  <p style={{ color: '#555', marginBottom: '20px' }}>Send your resume to our general talent pool and we'll reach out.</p>
                  <a href="mailto:careers@vgipl.in" style={{ color: '#e10600', fontWeight: '700', textDecoration: 'none' }}>Email our recruiting team <i className="icon icon-arrow-right"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, color: '#1a1a1a' }}>Open Roles ({jobs.length})</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {jobs.map((job) => (
                  <div key={job.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '30px', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #eaeaea', boxShadow: '0 5px 15px rgba(0,0,0,0.03)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                       onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)' }}
                       onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.03)' }}>
                    <div>
                      <span style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: '#f4f4f5', color: '#555', borderRadius: '100px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '10px' }}>{job.dept}</span>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: '700', margin: '0 0 10px 0', color: '#1a1a1a' }}>{job.title}</h3>
                      <div style={{ display: 'flex', gap: '20px', color: '#666', fontSize: '0.95rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><i className="icon icon-map-marker-alt"></i> {job.location}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><i className="icon icon-clock"></i> {job.type}</span>
                      </div>
                    </div>
                    <Link to={`/careers/${job.id}`} style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '10px 25px', borderRadius: '100px', textDecoration: 'none', fontWeight: '600', transition: 'background 0.2s' }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#e10600'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#1a1a1a'}>
                      Apply
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPath;
