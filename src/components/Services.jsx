import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = [
  {
    id: 0,
    icon: "uil-mobile-android",
    title: "Mobile Development",
    titleFormatted: <>Mobile <br /> Development</>,
    modalTitle: "Mobile Development",
    modalDesc: "I offer mobile development services with expertise in Flutter framework and Firebase backend.",
    features: [
      "Cross-platform App Development",
      "Firebase Integration",
      "UI/UX Implementation",
      "State Management Solutions",
      "API Integration"
    ]
  },
  {
    id: 1,
    icon: "uil-arrow",
    title: "Web Development",
    titleFormatted: <>Web <br /> Development</>,
    modalTitle: "Web Development",
    modalDesc: "I offer web development services with expertise in MERN stack and Firebase.",
    features: [
      "Full-stack Web Applications",
      "Database Design",
      "API Development",
      "Responsive Design",
      "Authentication Systems"
    ]
  },
  {
    id: 2,
    icon: "uil-edit",
    title: "Software Engineering",
    titleFormatted: <>Software <br /> Engineering</>,
    modalTitle: "Software Engineering",
    modalDesc: "I offer software engineering services with expertise in Java and C++.",
    features: [
      "Requirement Engineering",
      "Software Design & Architecture",
      "Software Testing",
      "Software Quality Assurance",
      "Software Re-Engineering"
    ]
  }
];

const Services = () => {
  const [activeId, setActiveId] = useState(null);

  const activeService = servicesData.find(item => item.id === activeId);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="services section" id="services">
      <h2 className="section-title" data-heading="Services">What I Offer</h2>

      <div className="services-container grid">
        {servicesData.map((item, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="services-content" 
            key={item.id}
            onClick={() => setActiveId(item.id)}
          >
            <div>
              <div className="services-icon-wrap">
                <i className={`uil ${item.icon} services-icon`}></i>
              </div>
              <h3 className="services-title">{item.titleFormatted}</h3>
            </div>

            <span className="services-button">
              View More <i className="uil uil-arrow-right services-button-icon"></i>
            </span>
          </motion.div>
        ))}
      </div>

      {/* Services Full-Screen Slide-in Drawer Portal */}
      {createPortal(
        <>
          <div 
            className={`services-drawer-overlay ${activeId !== null ? 'open' : ''}`}
            onClick={() => setActiveId(null)}
          />

          <div className={`services-drawer ${activeId !== null ? 'open' : ''}`} data-lenis-prevent>
            {activeService && (
              <>
                <div className="drawer-close" onClick={() => setActiveId(null)}>
                  <i className="uil uil-times"></i>
                </div>

                <div className="drawer-icon-wrap">
                  <i className={`uil ${activeService.icon} drawer-icon`}></i>
                </div>

                <span className="drawer-subtitle">Service Offering</span>
                <h3 className="drawer-title">{activeService.modalTitle}</h3>
                <p className="drawer-desc">{activeService.modalDesc}</p>
                
                <div className="drawer-divider"></div>
                
                <h4 className="drawer-features-title">What I Do</h4>

                {/* Framer Motion Staggered Feature List */}
                <AnimatePresence>
                  {activeId !== null && (
                    <motion.ul 
                      className="drawer-feature-list"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.08, delayChildren: 0.1 }
                        }
                      }}
                    >
                      {activeService.features.map((feature, i) => (
                        <motion.li 
                          className="drawer-feature-item" 
                          key={i}
                          variants={{
                            hidden: { opacity: 0, x: 25 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } }
                          }}
                          whileHover={{ x: 5, borderColor: 'rgba(116, 38, 176, 0.4)' }}
                        >
                          <i className="uil uil-check-circle drawer-feature-icon"></i>
                          <span className="drawer-feature-text">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </>,
        document.body
      )}
    </section>
  );
};

export default Services;
