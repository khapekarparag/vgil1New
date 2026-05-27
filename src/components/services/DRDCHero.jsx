import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Shield } from 'lucide-react';
import './DRDCHero.css';

const DRDCHero = () => {
  return (
    <section className="dr-hero-section">
      <div className="dr-hero-bg">
        <div className="dr-grid-pattern"></div>
        <div className="dr-glow-circle dr-glow-1"></div>
        <div className="dr-glow-circle dr-glow-2"></div>
      </div>
      
      <div className="container position-relative z-2">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6 dr-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="dr-badge">
                <Database size={16} /> DR & DC Services
              </div>
              <h1 className="dr-hero-title">
                End-to-End DataCentre <span className="text-red">Infrastructure</span> For Your Business
              </h1>
              <p className="dr-hero-desc">
                Centralize your IT Infrastructure, Operations, Storage & Security Management with Managed Security Services.
              </p>
              
              <div className="dr-hero-actions mt-4">
                <a href="#contact" className="btn-primary-dr">
                  Get In Touch &rarr;
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="col-lg-6">
             <motion.div 
               className="dr-hero-visual"
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
             >
                <div className="dr-server-rack">
                   <div className="dr-rack-glass"></div>
                   
                   <motion.div 
                     className="dr-server-unit"
                     animate={{ y: [0, -5, 0] }}
                     transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                   >
                      <div className="dr-server-lights">
                        <div className="dr-light dr-light-green"></div>
                        <div className="dr-light dr-light-green"></div>
                        <div className="dr-light dr-light-blink"></div>
                      </div>
                      <Server size={24} color="#ff3300" className="dr-server-icon" />
                   </motion.div>

                   <motion.div 
                     className="dr-server-unit"
                     animate={{ y: [0, -5, 0] }}
                     transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                   >
                      <div className="dr-server-lights">
                        <div className="dr-light dr-light-green"></div>
                        <div className="dr-light dr-light-red"></div>
                        <div className="dr-light dr-light-blink"></div>
                      </div>
                      <Database size={24} color="#ff3300" className="dr-server-icon" />
                   </motion.div>

                   <motion.div 
                     className="dr-server-unit"
                     animate={{ y: [0, -5, 0] }}
                     transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
                   >
                      <div className="dr-server-lights">
                        <div className="dr-light dr-light-green"></div>
                        <div className="dr-light dr-light-green"></div>
                        <div className="dr-light dr-light-blink"></div>
                      </div>
                      <Shield size={24} color="#22c55e" className="dr-server-icon" />
                   </motion.div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DRDCHero;
