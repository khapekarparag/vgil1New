import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, MessageSquare, Trash2, Database, ArrowRight } from 'lucide-react';
import './PortfolioAssessmentSection.css';

const PortfolioAssessmentSection = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(40); // Represents 30-50%
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="portfolio-assessment-section mb-120 effectFade fadeUp">
      <div className="portfolio-bg-particles"></div>
      
      <div className="position-relative z-1">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="d-flex justify-content-center align-items-center mb-2 gap-2">
            <div style={{ padding: '8px', background: 'rgba(220, 38, 38, 0.1)', borderRadius: '50%' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h2 className="portfolio-heading mb-0">
              <span>Save With</span> Application Portfolio Assessment
            </h2>
          </div>
          <p className="portfolio-subtitle">
            Maximize ROI and optimize your application investments
          </p>
        </motion.div>

        <motion.div 
          className="portfolio-cards-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Card: Red Gradient */}
          <motion.div variants={cardVariants} className="portfolio-card card-red">
            <div className="glossy-wave"></div>
            <div className="position-relative z-1 h-100 d-flex flex-column">
              <div className="red-card-top">
                <div className="icon-box-red">
                  <Cpu size={28} color="#ffffff" />
                </div>
                <div className="progress-ring-container">
                  <svg className="progress-ring-circle" width="80" height="80">
                    <circle stroke="rgba(255,255,255,0.2)" strokeWidth="6" fill="transparent" r={radius} cx="40" cy="40" />
                    <circle 
                      stroke="#ffffff" 
                      strokeWidth="6" 
                      strokeLinecap="round"
                      fill="transparent" 
                      r={radius} 
                      cx="40" 
                      cy="40"
                      style={{ strokeDasharray: circumference, strokeDashoffset: strokeDashoffset }}
                    />
                  </svg>
                  <div className="progress-text text-white">30%-50%</div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="card-number-red">01</div>
                <h3 className="card-title-common">Reduce</h3>
                <p className="card-desc-common">Operation Support Costs by 30%-50%</p>
              </div>
            </div>
          </motion.div>

          {/* Middle Card: Glassmorphism */}
          <motion.div variants={cardVariants} className="portfolio-card card-glass">
            <div className="position-relative z-1 h-100 d-flex flex-column">
              <div className="glass-icon-wrapper">
                <div className="pulse-glow"></div>
                <div className="glass-icon-box">
                  <Shield size={28} color="#22c55e" />
                </div>
              </div>
              
              <div className="server-illustration">
                <div className="d-flex align-items-center gap-3 w-100 justify-content-center">
                  <div className="d-flex flex-column gap-2">
                    <div style={{ width: '40px', height: '12px', background: '#e2e8f0', borderRadius: '4px', border: '1px solid #cbd5e1' }}></div>
                    <div style={{ width: '40px', height: '12px', background: '#e2e8f0', borderRadius: '4px', border: '1px solid #cbd5e1' }}></div>
                    <div style={{ width: '40px', height: '12px', background: '#e2e8f0', borderRadius: '4px', border: '1px solid #cbd5e1' }}></div>
                  </div>
                  <ArrowRight size={20} color="#94a3b8" />
                  <div style={{ padding: '8px', background: '#334155', borderRadius: '6px', border: '1px solid #475569' }}>
                    <Database size={24} color="#f8fafc" />
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <h3 className="card-title-common text-dark">Optimize</h3>
                <p className="card-desc-common">Server Consolidation by 20%-40%</p>
                <p className="card-desc-common mt-2" style={{ fontSize: '13px' }}>Efficient resource utilization and infrastructure optimization</p>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Orange Gradient */}
          <motion.div variants={cardVariants} className="portfolio-card card-orange">
            <div className="position-relative z-1 h-100 d-flex flex-column">
              <div className="floating-icons-container">
                <div className="float-icon">
                  <MessageSquare size={20} color="#ffffff" />
                </div>
                <div className="float-icon">
                  <Trash2 size={20} color="#ffffff" />
                </div>
                <div className="float-icon">
                  <Trash2 size={20} color="#ffffff" />
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="metrics-big">
                  <span className="m1">150</span>
                  <span className="m2">100&times;</span>
                </div>
                <h3 className="card-title-common">Save</h3>
                <p className="card-desc-common">Support Costs by Retiring Inefficient Applications</p>
                <p className="card-desc-common mt-2" style={{ fontSize: '13px', opacity: 0.8 }}>Eliminate redundant applications to reduce maintenance overhead</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioAssessmentSection;
