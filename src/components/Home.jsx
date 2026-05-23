import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

const Home = () => {
    const containerRef = useRef();

    useEffect(() => {
        const typed = new Typed('.typing', {
            strings: ["Software Engineer", "Flutter Developer", "Full Stack Developer", "UI/UX Designer", "Web Developer"],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true
        });
        return () => typed.destroy();
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.3 });

        tl.from('.hero-profile-img', {
            scale: 0.7,
            opacity: 0,
            duration: 1.2,
            ease: 'back.out(1.7)',
        })
        .from('.hero-ring', {
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
        }, '-=0.8')
        .from('.info-item', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out'
        }, '-=0.4');

    }, { scope: containerRef });

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
    };
    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className="home section" id="home" ref={containerRef}>
            <div className="home-container container">

                <div className="home-social">
                    <span className="home-social-follow">Follow Me</span>
                    <div className="home-social-links">
                        <a href="https://www.linkedin.com/in/syed-muaarij-nadeem-10532a371" target="_blank" rel="noopener noreferrer" className="home-social-link">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a href="https://github.com/SyedMuaarij-Nadeem" target="_blank" rel="noopener noreferrer" className="home-social-link">
                            <i className="uil uil-github"></i>
                        </a>
                        <a href="https://www.instagram.com/devforge_by_muaarij/" target="_blank" rel="noopener noreferrer" className="home-social-link">
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Left: Text Content */}
                <motion.div
                    className="home-data"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p className="home-greeting" variants={itemVariants}>
                        Hello, I'm
                    </motion.p>
                    <motion.h1 className="home-title" variants={itemVariants}>
                        <span className="name">Syed Muaarij</span><br />Nadeem
                    </motion.h1>
                    <motion.h3 className="home-subtitle" variants={itemVariants}>
                        I'm a <span className="typing"></span>
                    </motion.h3>
                    <motion.p className="home-description" variants={itemVariants}>
                        I'm an enthusiastic and detail-focused software engineering student with expertise in Flutter, Firebase, Java, and full-stack development, passionate about creating real-world solutions.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <a href="/assets/Muaarijs-resume.pdf" download className="button">
                            <i className="uil uil-import button-icon"></i>
                            Download CV
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right: Profile Image */}
                <div className="home-img-wrapper">
                    <div className="hero-ring"></div>
                    <img
                        src="/assets/Profile-pic.png"
                        alt="Syed Muaarij Nadeem"
                        className="hero-profile-img"
                    />
                </div>

                {/* Bottom Info Bar */}
                <div className="my-info">
                    <div className="info-item">
                        <i className="uil uil-whatsapp info-icon"></i>
                        <div>
                            <h3 className="info-title">WhatsApp</h3>
                            <span className="info-subtitle">+92 321 5927607</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="uil uil-envelope-edit info-icon"></i>
                        <div>
                            <h3 className="info-title">Email</h3>
                            <span className="info-subtitle">muaarij.devforge@gmail.com</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="uil uil-map-marker info-icon"></i>
                        <div>
                            <h3 className="info-title">Location</h3>
                            <span className="info-subtitle">Lahore, Pakistan</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;
