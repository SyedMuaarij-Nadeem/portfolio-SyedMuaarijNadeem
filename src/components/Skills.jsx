import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('frontend');
    const containerRef = useRef();

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const bars = containerRef.current.querySelectorAll('.skills-active .skills-bar span');

            bars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                gsap.fromTo(bar,
                    { width: 0 },
                    {
                        width: targetWidth,
                        duration: 1.2,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: bar,
                            start: 'top 90%',
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, { dependencies: [activeTab], scope: containerRef });


    return (
        <section className="skills section" id="skills" ref={containerRef}>
            <h2 className="section-title" data-heading="My Abilities are">My Experience</h2>

            <div className="skills-container container grid">
                <div className="skills-tabs">
                    {/* Header: Frontend */}
                    <div
                        className={`skills-header ${activeTab === 'frontend' ? 'skills-active' : ''}`}
                        onClick={() => setActiveTab('frontend')}
                    >
                        <i className="uil uil-brackets-curly skills-icon"></i>
                        <div>
                            <h1 className="skills-title">Frontend Development</h1>
                            <span className="skills-subtitle">2+ years</span>
                        </div>
                        <i className="uil uil-angle-down skills-arrow"></i>
                    </div>

                    {/* Header: Backend */}
                    <div
                        className={`skills-header ${activeTab === 'backend' ? 'skills-active' : ''}`}
                        onClick={() => setActiveTab('backend')}
                    >
                        <i className="uil uil-server-network skills-icon"></i>
                        <div>
                            <h1 className="skills-title">Backend Development</h1>
                            <span className="skills-subtitle">2+ years</span>
                        </div>
                        <i className="uil uil-angle-down skills-arrow"></i>
                    </div>

                    {/* Header: Design */}
                    <div
                        className={`skills-header ${activeTab === 'design' ? 'skills-active' : ''}`}
                        onClick={() => setActiveTab('design')}
                    >
                        <i className="uil uil-swatchbook skills-icon"></i>
                        <div>
                            <h1 className="skills-title">UI / UX Design</h1>
                            <span className="skills-subtitle">3+ years</span>
                        </div>
                        <i className="uil uil-angle-down skills-arrow"></i>
                    </div>
                </div>

                <div className="skills-content">
                    {/* Content: Frontend */}
                    <div className={`skills-group ${activeTab === 'frontend' ? 'skills-active' : ''}`} data-content id="frontend">
                        <div className="skills-list grid">
                            <SkillBar name="React.js" percentage="85%" />
                            <SkillBar name="Next.js" percentage="80%" />
                            <SkillBar name="Flutter" percentage="85%" />
                            <SkillBar name="Tailwind" percentage="90%" />
                            <SkillBar name="GSAP" percentage="80%" />
                        </div>
                    </div>

                    {/* Content: Backend */}
                    <div className={`skills-group ${activeTab === 'backend' ? 'skills-active' : ''}`} data-content id="backend">
                        <div className="skills-list grid">
                            <SkillBar name="Node.js" percentage="80%" />
                            <SkillBar name="Firebase" percentage="85%" />
                            <SkillBar name="MongoDB" percentage="80%" />
                            <SkillBar name="Python" percentage="75%" />
                        </div>
                    </div>

                    {/* Content: Design */}
                    <div className={`skills-group ${activeTab === 'design' ? 'skills-active' : ''}`} data-content id="design">
                        <div className="skills-list grid">
                            <SkillBar name="Figma Designing" percentage="85%" />
                            <SkillBar name="Wireframing" percentage="80%" />
                            <SkillBar name="Prototyping" percentage="75%" />
                            <SkillBar name="Animations" percentage="80%" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillBar = ({ name, percentage }) => {
    return (
        <div className="skills-data">
            <div className="skills-titles">
                <h3 className="skills-name">{name}</h3>
                <span className="skills-number">{percentage}</span>
            </div>
            <div className="skills-bar">
                <span className="skills-percentage" data-width={percentage} style={{ width: percentage }}></span>
            </div>
        </div>
    )
}

export default Skills;
