import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity } from 'lucide-react';
import './ServiceSingleHero.css';

function ServiceSingleHero({ service }) {
  if (!service) return null;

  // Staggering variants for the left content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '40px',
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const textBlurVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    visible: { 
      opacity: 1, filter: 'blur(0px)', y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.6 }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  // Right Side Variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 40 },
    visible: { 
      opacity: 1, scale: 1, y: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }
    }
  };

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  };
  
  const onMouseLeave = (e) => { 
    e.currentTarget.style.transform = ''; 
  };

  return (
    <motion.div 
      className="section-hero-premium"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Animated Elements */}
      <div className="hero-bg-blobs">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
      </div>
      <div className="hero-particles"></div>

      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="row align-items-center g-5">
          
          {/* Left Content Area */}
          <div className="col-lg-6">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="hero-badge-pill" variants={itemVariants}>
                <span className="badge-dot"></span>
                Service Excellence
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="premium-heading" 
                style={{ 
                  fontSize: 'clamp(2.6rem, 4.5vw, 4rem)', 
                  lineHeight: '1.08', 
                  fontWeight: '900', 
                  marginBottom: '1.5rem', 
                  color: '#0e0e0e',
                  letterSpacing: '-1.5px'
                }}
              >
                <motion.span
                  initial={{ letterSpacing: '-5px' }}
                  animate={{ letterSpacing: '-1.5px' }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  {service.title}
                </motion.span>
              </motion.h1>
              
              <motion.h2 
                variants={textBlurVariants}
                className="text-body-1 fw-semibold mb-20" 
                style={{ color: '#E8380D', fontSize: '1.05rem' }}
              >
                {service.subtitle}
              </motion.h2>
              
              <motion.p 
                variants={textBlurVariants}
                className="text-body-2 mb-48" 
                style={{ 
                  color: '#7a7570', 
                  lineHeight: '1.7', 
                  fontSize: '17px',
                  maxWidth: '90%'
                }}
              >
                {service.longDescription}
              </motion.p>
              
              <motion.div 
                className="d-flex flex-wrap gap-12 mt-40 mb-4"
                variants={tagContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {service.features.map((feature, idx) => (
                  <motion.div key={idx} variants={tagVariants} className="feature-pill">
                    <div className="feature-pill-dot"></div>
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="hero-cta-btns" variants={itemVariants}>
                <button className="btn-primary-hero">Get In Touch &rarr;</button>
                <button className="btn-secondary-hero">Explore Services</button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Visual Area */}
          <div className="col-lg-6">
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              style={{ position: 'relative' }}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <div 
                  className="vgst-hero-card"
                  onMouseMove={onMouseMove}
                  onMouseLeave={onMouseLeave}
                >
                  <div className="vgst-card-topbar"></div>
                  <div className="vgst-card-header">
                    <div className="vgst-card-icon">
                      <Layers size={20} color="#fff" />
                    </div>
                    <div>
                      <div className="vgst-card-title"><span>VGST</span> Smart Technology</div>
                      <div className="vgst-card-sub">Advanced connected ecosystem solutions</div>
                    </div>
                  </div>
                  <div className="vgst-card-badge">IoT & Smart City Platform</div>
                  
                  <div className="vgst-feature-grid">
                    {service.features.map((f, i) => (
                      <div key={i} className="vgst-feature-item">
                        <div className="vgst-feature-icon">
                          <Activity size={16} color="#E8380D" />
                        </div>
                        {f.title}
                      </div>
                    ))}
                    <div className="vgst-feature-item">
                      <div className="vgst-feature-icon">
                        <Activity size={16} color="#E8380D" />
                      </div>
                      Smart Analytics
                    </div>
                  </div>
                  
                  {/* Floating UI Elements */}
                  <motion.div 
                    className="floating-ui ui-1"
                    animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </motion.div>
                  <motion.div 
                    className="floating-ui ui-2"
                    animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default ServiceSingleHero;
