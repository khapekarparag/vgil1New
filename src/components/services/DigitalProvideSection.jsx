import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Search, Mail, Video, Palette, Share2, BarChart3, Megaphone, Layers
} from 'lucide-react';
import './DigitalProvideSection.css';

const DigitalProvideSection = () => {
  const services = [
    { title: 'Website Design', icon: Palette },
    { title: 'Social Media Marketing', icon: Share2 },
    { title: 'Search Engine Marketing', icon: Search },
    { title: 'E-Mail Marketing', icon: Mail },
    { title: 'Video & Motion Editing', icon: Video },
    { title: 'SEO Optimization', icon: Globe },
    { title: 'Analytics & Reporting', icon: BarChart3 },
    { title: 'Brand Strategy', icon: Megaphone },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="ds-provide-section" id="services">
      <div className="container">
        <motion.div
          className="ds-provide-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="ds-provide-glow ds-provide-glow-1"></div>
          <div className="ds-provide-glow ds-provide-glow-2"></div>

          <motion.div
            className="ds-provide-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ds-provide-badge">
              <Layers size={18} /> Digital Solutions We Provide
            </div>
            <h2 className="ds-provide-title">Digital Solutions We Provide</h2>
            <p className="ds-provide-subtitle">
              8 comprehensive digital marketing solutions for your business
            </p>
          </motion.div>

          <motion.div
            className="ds-provide-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="ds-provide-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="ds-provide-icon">
                    <Icon size={26} color="#ff5533" strokeWidth={1.5} />
                  </div>
                  <span className="ds-provide-text">{service.title}</span>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="ds-provide-desc-box"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="ds-provide-desc-text">
              Comprehensive digital marketing and online presence solutions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalProvideSection;
