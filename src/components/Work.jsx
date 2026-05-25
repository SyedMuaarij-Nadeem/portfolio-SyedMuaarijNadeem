import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { workData } from './WorkData';
import { motion } from 'framer-motion';

const Work = () => {
    const [projects, setProjects] = useState(() => {
        const saved = localStorage.getItem('starred_projects');
        const initialStarred = saved ? JSON.parse(saved) : null;

        return workData.map(item => {
            let isStarred = item.starred;
            if (initialStarred !== null && initialStarred[item.id] !== undefined) {
                isStarred = initialStarred[item.id];
            }
            return { ...item, starred: isStarred };
        });
    });

    const [filter, setFilter] = useState('all');
    const navigate = useNavigate();

    const toggleStar = (e, id) => {
        e.stopPropagation();
        setProjects(prevProjects => {
            const updated = prevProjects.map(p =>
                p.id === id ? { ...p, starred: !p.starred } : p
            );
            // Save to localStorage
            const starredMap = {};
            updated.forEach(p => {
                starredMap[p.id] = p.starred;
            });
            localStorage.setItem('starred_projects', JSON.stringify(starredMap));
            return updated;
        });
    };

    const filteredData = filter === 'all'
        ? projects
        : projects.filter(item => item.category === filter);

    // Sort so starred projects come first, preserving original ordering for the rest
    const sortedData = [...filteredData].sort((a, b) => {
        const aStarred = a.starred ? 1 : 0;
        const bStarred = b.starred ? 1 : 0;
        return bStarred - aStarred;
    });

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
                {sortedData.map((item, index) => (
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

                        <div
                            className={`work-star-toggle ${item.starred ? 'is-starred' : ''}`}
                            onClick={(e) => toggleStar(e, item.id)}
                            title={item.starred ? "Unstar Project" : "Star Project"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill={item.starred ? "currentColor" : "none"}
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="star-icon"
                            >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Work;
