import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Services = () => {
    const [activeModal, setActiveModal] = useState(null);
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from('.services-content', {
            scrollTrigger: {
                trigger: '.services-container',
                start: 'top 80%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }, { scope: containerRef });

    const openModal = (index) => {
        setActiveModal(index);
    }

    const closeModal = () => {
        setActiveModal(null);
    }

    return (
        <section className="services section" id="services" ref={containerRef}>
            <h2 className="section-title" data-heading="Services">What I Offer</h2>

            <div className="services-container container grid">
                {/* Service 1 */}
                <ServiceItem
                    icon="uil-mobile-android"
                    title={<>Mobile <br /> Development</>}
                    index={0}
                    openModal={openModal}
                    activeModal={activeModal}
                    closeModal={closeModal}
                    modalTitle="Mobile Development"
                    modalDesc="I offer mobile development services with expertise in Flutter framework and Firebase backend."
                    features={[
                        "Cross-platform App Development",
                        "Firebase Integration",
                        "UI/UX Implementation",
                        "State Management Solutions",
                        "API Integration"
                    ]}
                />

                {/* Service 2 */}
                <ServiceItem
                    icon="uil-arrow"
                    title={<>Web <br /> Development</>}
                    index={1}
                    openModal={openModal}
                    activeModal={activeModal}
                    closeModal={closeModal}
                    modalTitle="Web Development"
                    modalDesc="I offer web development services with expertise in MERN stack and Firebase."
                    features={[
                        "Full-stack Web Applications",
                        "Database Design",
                        "API Development",
                        "Responsive Design",
                        "Authentication Systems"
                    ]}
                />

                {/* Service 3 */}
                <ServiceItem
                    icon="uil-edit"
                    title={<>Software <br /> Engineering</>}
                    index={2}
                    openModal={openModal}
                    activeModal={activeModal}
                    closeModal={closeModal}
                    modalTitle="Software Engineering"
                    modalDesc="I offer software engineering services with expertise in Java and C++."
                    features={[
                        "Object-Oriented Design",
                        "Data Structures Implementation",
                        "Algorithm Design",
                        "Software Architecture",
                        "Requirement Analysis"
                    ]}
                />
            </div>
        </section>
    );
};

const ServiceItem = ({ icon, title, index, openModal, activeModal, closeModal, modalTitle, modalDesc, features }) => {
    const isActive = activeModal === index;

    return (
        <div className="services-content">
            <div>
                <i className={`uil ${icon} services-icon`}></i>
                <h3 className="services-title">{title}</h3>
            </div>

            <span className="services-button" onClick={() => openModal(index)}>
                View More <i className="uil uil-arrow-right services-button-icon"></i>
            </span>

            <div className={`services-modal ${isActive ? 'active-modal' : ''}`}>
                <div className="services-modal-content">
                    <i className="uil uil-times services-modal-close" onClick={closeModal}></i>

                    <h3 className="services-modal-title">{modalTitle}</h3>
                    <p className="services-modal-description">{modalDesc}</p>

                    <ul className="services-modal-services grid">
                        {features.map((feature, i) => (
                            <li className="services-modal-service" key={i}>
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;
