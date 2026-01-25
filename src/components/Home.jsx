import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = ({ isLightTheme }) => {

    useEffect(() => {
        const typed = new Typed('.typing', {
            strings: ["Software Engineer", "Flutter Developer", "Full Stack Developer", "UI/UX Designer", "Web Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        return () => {
            typed.destroy();
        }
    }, []);

    const containerRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from('.home-img', {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.7)'
        })
            .from('.home-data > *', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            }, '-=0.5')
            .from('.info-item', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out'
            }, '-=0.5');

    }, { scope: containerRef });

    const bgImage = isLightTheme
        ? "url('/assets/home-bg-white.png')"
        : "url('/assets/bg-image.png')";

    // In mobile view, bg might be different or none, but we can stick to the logic for now
    // OR rely on CSS classes if possible. 
    // The original JS set inline styles. We can do the same.

    const homeStyle = {
        backgroundImage: (window.innerWidth > 576) ? bgImage : 'none'
    };

    return (
        <section className="home" id="home" style={homeStyle} ref={containerRef}>
            <div className="home-container container grid">

                <img src={isLightTheme ? "/assets/mobile-image-light.png" : "/assets/mobile-img.png"} alt="" className="home-img" />

                <div className="home-data">
                    <h1 className="home-title"><span style={{ color: 'var(--skin-color)' }}>Syed Muaarij Nadeem</span></h1>
                    <h3 className="home-subtitle">here, I'm a <span className="typing"></span></h3>
                    <p className="home-description">I'm an enthusiastic and detail-focused software engineering student with expertise in Flutter, Firebase, Java, and full-stack development, passionate about creating real-world solutions.</p>
                    <a href="/assets/Muaarijs-resume.pdf" download className="button">
                        <i className="uil uil-import button-icon"></i>
                        Download CV
                    </a>
                </div>

                <div className="my-info">
                    <div className="info-item">
                        <i className="uil uil-whatsapp info-icon"></i>
                        <div>
                            <h3 className="info-title">Whatsapp</h3>
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
