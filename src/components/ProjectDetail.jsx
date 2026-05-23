import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { workData } from './WorkData';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find project by slug
  const project = workData.find((item) => item.slug === slug);

  // If project not found, redirect to home or show error
  if (!project) {
    return (
      <div className="project-detail-page glass" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '1.5rem' }}>
        <h2>Project Not Found</h2>
        <button className="button" onClick={() => navigate('/')}>
          <i className="uil uil-estate"></i> Back to Home
        </button>
      </div>
    );
  }

  // Animation constants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Convert slug back to readable category or label
  const getCategoryLabel = (category) => {
    switch (category) {
      case 'web': return 'Web Application';
      case 'app': return 'Mobile Application';
      case 'design': return 'UI/UX Design';
      default: return category;
    }
  };

  return (
    <div 
      className="project-detail-page" 
      style={{ 
        '--project-color': project.themeColor, 
        '--project-color-glow': `${project.themeColor}26` // Hex color + 15% opacity (26)
      }}
    >
      <div className="project-detail-hero">
        <div className="container">
          {/* Back Button */}
          <motion.button 
            className="project-back-btn" 
            onClick={() => navigate('/#work')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <i className="uil uil-arrow-left"></i>
            <span>Back to Portfolio</span>
          </motion.button>

          <div className="project-detail-grid">
            {/* Left Side: Metadata & Description */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span 
                className="project-category-badge"
                variants={fadeInUp}
              >
                {getCategoryLabel(project.category)}
              </motion.span>
              
              <motion.h1 
                className="project-detail-title"
                variants={fadeInUp}
              >
                {project.title}
              </motion.h1>
              
              <motion.h3 
                className="project-detail-subtitle"
                variants={fadeInUp}
              >
                {project.detailsTitle}
              </motion.h3>

              <motion.p 
                className="project-detail-desc"
                variants={fadeInUp}
              >
                {project.detailsDesc}
              </motion.p>

              <motion.div 
                className="project-meta-grid"
                variants={fadeInUp}
              >
                <div className="project-meta-item">
                  <span className="project-meta-label">Role</span>
                  <span className="project-meta-value">{project.role}</span>
                </div>

                <div className="project-meta-item">
                  <span className="project-meta-label">Created</span>
                  <span className="project-meta-value">{project.created}</span>
                </div>

                <div className="project-meta-item">
                  <span className="project-meta-label">
                    {project.technologies ? 'Technologies' : 'Design Tools'}
                  </span>
                  <span className="project-meta-value">
                    {project.technologies || project.tools}
                  </span>
                </div>

                <div className="project-meta-item">
                  <span className="project-meta-label">Category</span>
                  <span className="project-meta-value" style={{ textTransform: 'capitalize' }}>
                    {project.category}
                  </span>
                </div>
              </motion.div>

              <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-github-btn"
                variants={fadeInUp}
                style={{ 
                  background: `linear-gradient(135deg, ${project.themeColor}, rgba(255,255,255,0.05))`,
                  borderColor: project.themeColor,
                  boxShadow: `0 4px 15px ${project.themeColor}33`
                }}
                whileHover={{ scale: 1.03, boxShadow: `0 8px 25px ${project.themeColor}66` }}
                whileTap={{ scale: 0.98 }}
              >
                <i className={project.category === 'design' ? "uil uil-figma" : "uil uil-github-alt"}></i>
                <span>{project.category === 'design' ? 'View Figma Design' : 'View Code Repository'}</span>
              </motion.a>
            </motion.div>

            {/* Right Side: Showcase Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="project-mockup-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/1e1e24/ffffff?text=" + encodeURIComponent(project.title);
                }}
              />
            </motion.div>
          </div>

          {/* Screenshots Section */}
          <motion.div 
            className="project-screenshots-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="project-screenshots-title">Interface Screenshots & Layouts</h2>
            <div className="project-screenshots-grid">
              {[1, 2, 3].map((num) => (
                <motion.div 
                  key={num} 
                  className="screenshot-placeholder"
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    borderColor: project.themeColor 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="uil uil-image-plus"></i>
                  <span>Screenshot Slot {num}</span>
                  <span style={{ fontSize: 'var(--smaller-font-size)', opacity: 0.5 }}>Placeholder Box</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
