import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
    const containerRef = useRef();

    useGSAP(() => {
        // Animate Section Title
        gsap.from('.section-title', {
            scrollTrigger: {
                trigger: '.section-title',
                start: 'top 80%',
            },
            y: -20,
            opacity: 0,
            duration: 0.6
        });

        // Animate Education Timeline
        gsap.from('.education .timeline-item', {
            scrollTrigger: {
                trigger: '.education',
                start: 'top 75%',
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });



    }, { scope: containerRef });
    return (
        <section className="qualification section" id="about" ref={containerRef}>
            <h2 className="section-title" data-heading="My Journey">Qualifications</h2>
            <div className="qualification-container container grid">
                <div className="education">
                    <h3 className="qualification-title"><i className="uil uil-graduation-cap"></i>Education</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-title">COMSATS University Islamabad, Lahore Campus</h3>
                            <p className="timeline-text">Bachelors in Software Engineering</p>
                            <span className="timeline-date"><i className="uil uil-calendar-alt"></i>2023 - Ongoing</span>
                        </div>
                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-title">BISE Lahore</h3>
                            <p className="timeline-text">FSc. (Pre-Medical)</p>
                            <span className="timeline-date"><i className="uil uil-calendar-alt"></i>2021 - 2022</span>
                        </div>
                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-title">BISE Lahore</h3>
                            <p className="timeline-text">Matriculation (Bio Sciences)</p>
                            <span className="timeline-date"><i className="uil uil-calendar-alt"></i>2019 - 2020</span>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};
export default About;
