import React from 'react';
import { motion } from 'framer-motion';
import { Share2, ThumbsUp, Camera, MessageCircle, Briefcase, Play, Globe } from 'lucide-react';
import './DigitalSocialSection.css';

const DigitalSocialSection = () => {
  const platforms = [
    {
      title: 'Facebook Marketing',
      desc: 'Profile and cover page design, social media advertising and content management',
      iconBg: 'rgba(24, 119, 242, 0.1)',
      iconColor: '#1877F2',
      icon: ThumbsUp,
      cardColor: '#1877F2',
    },
    {
      title: 'Instagram Strategy',
      desc: 'Visual storytelling, stories, reels, and targeted advertising campaigns',
      iconBg: 'rgba(225, 48, 108, 0.1)',
      iconColor: '#E1306C',
      icon: Camera,
      cardColor: '#E1306C',
    },
    {
      title: 'LinkedIn Presence',
      desc: 'Professional networking, B2B marketing, and thought leadership content',
      iconBg: 'rgba(10, 102, 194, 0.1)',
      iconColor: '#0A66C2',
      icon: Briefcase,
      cardColor: '#0A66C2',
    },
    {
      title: 'YouTube Videos',
      desc: 'Video production, channel management, and video marketing strategies',
      iconBg: 'rgba(255, 0, 0, 0.1)',
      iconColor: '#FF0000',
      icon: Play,
      cardColor: '#FF0000',
    },
    {
      title: 'Twitter Engagement',
      desc: 'Real-time engagement, trending content, and community building',
      iconBg: 'rgba(29, 161, 242, 0.1)',
      iconColor: '#1DA1F2',
      icon: MessageCircle,
      cardColor: '#1DA1F2',
    },
    {
      title: 'Pinterest Discovery',
      desc: 'Visual discovery, pin strategy, and traffic generation campaigns',
      iconBg: 'rgba(189, 8, 28, 0.1)',
      iconColor: '#BD081C',
      icon: Globe,
      cardColor: '#BD081C',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="ds-social-section">
      <div className="container">
        <motion.div
          className="ds-social-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="ds-social-badge">
            <Share2 size={14} /> Social Media
          </div>
          <h2 className="ds-social-title">
            Social Media & <span className="text-red">Marketing Solutions</span>
          </h2>
          <p className="ds-social-subtitle">
            Connect with your audience across all major social media platforms
          </p>
        </motion.div>

        <motion.div
          className="ds-social-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={index}
                className="ds-social-card"
                variants={cardVariants}
                style={{ '--card-color': platform.cardColor }}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="ds-social-card-icon"
                  style={{ background: platform.iconBg, borderColor: platform.cardColor }}
                >
                  <Icon size={30} color={platform.iconColor} />
                </div>
                <h4 className="ds-social-card-title">{platform.title}</h4>
                <p className="ds-social-card-desc">{platform.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Showcase */}
        <motion.div
          className="ds-social-showcase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="ds-social-showcase-glow"></div>
          <div className="ds-social-showcase-content">
            <div className="ds-social-showcase-text">
              <h3>Social Media Marketing</h3>
              <p>
                Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. We provide services to businesses with effective social media advertising, strategy, content management, videos for YouTube, Facebook profile and cover page design, etc.
              </p>
              <div className="ds-social-showcase-platforms">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Pinterest', 'YouTube'].map(
                  (name, i) => (
                    <motion.span
                      key={i}
                      className="ds-social-platform-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      {name}
                    </motion.span>
                  )
                )}
              </div>
            </div>
            <div className="ds-social-showcase-visual">
              <div className="ds-orbit-ring ds-orbit-1">
                <div className="ds-orbit-dot"></div>
                <div className="ds-orbit-dot"></div>
              </div>
              <div className="ds-orbit-ring ds-orbit-2">
                <div className="ds-orbit-dot"></div>
                <div className="ds-orbit-dot"></div>
              </div>
              <div className="ds-orbit-center-icon">
                <Share2 size={36} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalSocialSection;
