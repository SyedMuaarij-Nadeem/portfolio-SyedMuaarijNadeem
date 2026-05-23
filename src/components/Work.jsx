import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { workData } from './WorkData';
import { motion } from 'framer-motion';

const Work = () => {
    const [filter, setFilter] = useState('all');
    const navigate = useNavigate();
    const filteredData = filter === 'all'
        ? workData
        : workData.filter(item => item.category === filter);

    const handleFilter = (category) => {
        setFilter(category);
    }

    return (
        <section className="work section" id="work">
            <h2 className="section-title" data-heading="My Portfolio">Recent Works</h2>

            <div className="work-filters">
                <span className={`work-item ${filter === 'all' ? 'active-work' : ''}`} onClick={() => handleFilter('all')}>All</span>
                <span className={`work-item ${filter === 'web' ? 'active-work' : ''}`} onClick={() => handleFilter('web')}>Web</span>
                <span className={`work-item ${filter === 'app' ? 'active-work' : ''}`} onClick={() => handleFilter('app')}>App</span>
                <span className={`work-item ${filter === 'design' ? 'active-work' : ''}`} onClick={() => handleFilter('design')}>Design</span>
            </div>

            <div className="work-container">
                {filteredData.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: '-70px' }}
                        transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
                        className="work-card mix"
                        key={item.id}
                        onClick={() => navigate(`/project/${item.slug}`)}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="work-img"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://placehold.co/600x400/1e1e24/ffffff?text=" + encodeURIComponent(item.title);
                            }}
                        />
                        <h3 className="work-title">{item.title}</h3>
                        <span className="work-button">
                            {item.category === 'design' ? 'View Design' : 'Demo'}
                            <i className="uil uil-arrow-right work-button-icon"></i>
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Work;
