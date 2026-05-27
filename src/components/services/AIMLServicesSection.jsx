import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot, Eye, MessageSquare, BarChart3, Cpu, Shield, Brain, Network, Layers
} from 'lucide-react';
import './AIMLServicesSection.css';

const AIMLServicesSection = () => {
  const services = [
    { title: 'Robotic Process Automation', icon: Bot },
    { title: 'Computer Vision', icon: Eye },
    { title: 'Natural Language Processing', icon: MessageSquare },
    { title: 'Predictive Analytics', icon: BarChart3 },
    { title: 'Machine Learning Models', icon: Cpu },
    { title: 'Intelligent Chatbots', icon: Brain },
    { title: 'Deep Learning', icon: Network },
    { title: 'AI Security Solutions', icon: Shield },
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
    <section className="ai-services-section" id="ai-services">
      <div className="container">
        <motion.div
          className="ai-services-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="ai-services-glow ai-services-glow-1"></div>
          <div className="ai-services-glow ai-services-glow-2"></div>

          <motion.div
            className="ai-services-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ai-services-badge">
              <Layers size={18} /> AI Services We Provide
            </div>
            <h2 className="ai-services-title">AI Services We Provide</h2>
            <p className="ai-services-subtitle">
              8 cutting-edge AI solutions to transform your business
            </p>
          </motion.div>

          <motion.div
            className="ai-services-grid"
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
                  className="ai-services-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="ai-services-item-icon">
                    <Icon size={26} color="#ff5533" strokeWidth={1.5} />
                  </div>
                  <span className="ai-services-item-text">{service.title}</span>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="ai-services-pulse"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="ai-services-pulse-text">
              Comprehensive AI and machine learning solutions for enterprise transformation
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIMLServicesSection;
