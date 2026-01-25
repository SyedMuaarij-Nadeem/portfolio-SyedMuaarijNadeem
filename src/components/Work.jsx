import React, { useState, useRef } from 'react';
import { workData } from './WorkData';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Work = () => {
    const [filter, setFilter] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from('.work-card', {
            scrollTrigger: {
                trigger: '.work-container',
                start: 'top 80%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1, // Stagger the animation
            ease: 'power3.out'
        });
    }, { dependencies: [filter], scope: containerRef }); // Re-run when filter changes

    const filteredData = filter === 'all'
        ? workData
        : workData.filter(item => item.category === filter);

    const handleFilter = (category) => {
        setFilter(category);
    }

    const openPopup = (item) => {
        setSelectedItem(item);
    }

    const closePopup = () => {
        setSelectedItem(null);
    }

    return (
        <section className="work section" id="work" ref={containerRef}>
            <h2 className="section-title" data-heading="My Portfolio">Recent Works</h2>

            <div className="work-filters">
                <span className={`work-item ${filter === 'all' ? 'active-work' : ''}`} onClick={() => handleFilter('all')}>All</span>
                <span className={`work-item ${filter === 'web' ? 'active-work' : ''}`} onClick={() => handleFilter('web')}>Web</span>
                <span className={`work-item ${filter === 'app' ? 'active-work' : ''}`} onClick={() => handleFilter('app')}>App</span>
                <span className={`work-item ${filter === 'design' ? 'active-work' : ''}`} onClick={() => handleFilter('design')}>Design</span>
            </div>

            <div className="work-container container grid">
                {filteredData.map((item) => (
                    <div className="work-card mix" key={item.id}>
                        <img src={item.img} alt="" className="work-img" />
                        <h3 className="work-title">{item.title}</h3>
                        <span className="work-button" onClick={() => openPopup(item)}>
                            {item.category === 'design' ? 'View Design' : 'Demo'}
                            <i className="uil uil-arrow-right work-button-icon"></i>
                        </span>
                    </div>
                ))}
            </div>

            {/* Portfolio Popup */}
            <div className={`portfolio-popup ${selectedItem ? 'open' : ''}`}>
                <div className="portfolio-popup-inner">
                    <div className="portfolio-popup-content grid">
                        <span className="portfolio-popup-close" onClick={closePopup}><i className="uil uil-times"></i></span>

                        {selectedItem && (
                            <>
                                <div className="pp-thumbnail">
                                    <img src={selectedItem.img} alt="" className="portfolio-popup-img" />
                                </div>

                                <div className="portfolio-popup-info">
                                    <div className="portfolio-popup-subtitle">Featured - <span>{selectedItem.category}</span></div>
                                    <div className="portfolio-popup-body">
                                        <h3 className="details-title">{selectedItem.detailsTitle}</h3>
                                        <p className="details-description">{selectedItem.detailsDesc}</p>

                                        <ul className="details-info">
                                            <li>Created - <span>{selectedItem.created}</span></li>

                                            {selectedItem.technologies && (
                                                <li>Technologies - <span>{selectedItem.technologies}</span></li>
                                            )}

                                            {selectedItem.tools && (
                                                <li>Tools - <span>{selectedItem.tools}</span></li>
                                            )}

                                            <li>Role - <span>{selectedItem.role}</span></li>
                                            <li>View - <span><a href={selectedItem.link} target="_blank" rel="noopener noreferrer">{selectedItem.link}</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
