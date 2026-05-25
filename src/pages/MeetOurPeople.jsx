import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MeetOurPeople = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const peopleData = [
    { img: 'https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?auto=format&fit=crop&q=80&w=800', title: 'Global Collaboration', desc: 'Our teams work seamlessly across borders to deliver enterprise solutions.' },
    { img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800', title: 'Creative Thinkers', desc: 'Brainstorming and prototyping the next generation of digital finance.' },
    { img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800', title: 'Engineering Leaders', desc: 'Architecting secure, scalable systems that power modern businesses.' },
    { img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800', title: 'Customer Success', desc: 'Ensuring our clients achieve maximum value from our solutions.' },
    { img: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=800', title: 'Mentorship', desc: 'Guiding the next wave of tech talent through hands-on learning.' },
    { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', title: 'Team Building', desc: 'Fostering a culture of trust, inclusion, and mutual respect.' },
  ];

  return (
    <>
      <section style={{ paddingTop: '160px', paddingBottom: '100px', backgroundColor: '#e10600', color: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '20px' }}>Meet Our People</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            We are a diverse, dynamic group of innovators united by a shared passion for technology. Discover the faces behind the magic at Virtual Galaxy.
          </p>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>Our Teams in Action</h2>
            <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
              Explore how we collaborate, innovate, and grow together. Our culture is built on a foundation of teamwork and a relentless drive for excellence.
            </p>
          </div>

          <div className="row g-4">
            {peopleData.map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', transition: 'transform 0.3s ease', cursor: 'pointer' }} 
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
                  <div style={{ padding: '25px' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '10px' }}>{item.title}</h3>
                    <p style={{ color: '#555', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section style={{ padding: '80px 0', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '40px', color: '#1a1a1a' }}>Want to join the team?</h2>
          <Link to="/careers/career-path" style={{ display: 'inline-block', backgroundColor: '#e10600', color: '#fff', padding: '15px 40px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>See Open Roles</Link>
        </div>
      </section>
    </>
  );
};

export default MeetOurPeople;
