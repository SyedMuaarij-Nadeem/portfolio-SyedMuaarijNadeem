import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from('.contact-card', {
            scrollTrigger: {
                trigger: '.contact-info',
                start: 'top 80%',
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });

        gsap.from('.contact-form .input-container', {
            scrollTrigger: {
                trigger: '.contact-form',
                start: 'top 80%',
            },
            x: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });

    }, { scope: containerRef });

    return (
        <section className="contact section" id="contact" ref={containerRef}>
            <h2 className="section-title" data-heading="Get in Touch">Contact me</h2>

            <div className="contact-container container grid">
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-card">
                            <i className="uil uil-envelope-edit contact-card-icon"></i>
                            <h3 className="contact-card-title">Email</h3>
                            <span className="contact-card-data">muaarij.devforge@gmail.com</span>
                        </div>

                        <div className="contact-card">
                            <i className="uil uil-linkedin contact-card-icon"></i>
                            <h3 className="contact-card-title">LinkedIn</h3>
                            <span className="contact-card-data">Syed Muaarij Nadeem</span>
                            <a href="http://www.linkedin.com/in/syed-muaarij-nadeem-10532a371" target="_blank" className="contact-button">
                                Connect <i className="uil uil-arrow-right contact-button-icon"></i>
                            </a>
                        </div>

                        <div className="contact-card">
                            <i className="uil uil-github contact-card-icon"></i>
                            <h3 className="contact-card-title">GitHub</h3>
                            <span className="contact-card-data">SyedMuaarij-Nadeem</span>
                            <a href="https://github.com/SyedMuaarij-Nadeem" target="_blank" className="contact-button">
                                View profile <i className="uil uil-arrow-right contact-button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-content">
                    <form action="https://formspree.io/f/mkgbprvd" method="POST" className="contact-form">
                        <div className="input-container">
                            <input type="text" name="username" className="input" required onFocus={(e) => e.target.parentNode.classList.add('focus')} onBlur={(e) => { if (e.target.value === "") e.target.parentNode.classList.remove('focus') }} />
                            <label>Name</label>
                            <span>Username</span>
                        </div>

                        <div className="input-container">
                            <input type="email" name="email" className="input" required onFocus={(e) => e.target.parentNode.classList.add('focus')} onBlur={(e) => { if (e.target.value === "") e.target.parentNode.classList.remove('focus') }} />
                            <label>Email</label>
                            <span>Email</span>
                        </div>

                        <div className="input-container">
                            <input type="tel" name="phone" className="input" onFocus={(e) => e.target.parentNode.classList.add('focus')} onBlur={(e) => { if (e.target.value === "") e.target.parentNode.classList.remove('focus') }} />
                            <label>Phone</label>
                            <span>Phone</span>
                        </div>

                        <div className="input-container textarea">
                            <textarea name="message" className="input" required onFocus={(e) => e.target.parentNode.classList.add('focus')} onBlur={(e) => { if (e.target.value === "") e.target.parentNode.classList.remove('focus') }}></textarea>
                            <label>Message</label>
                            <span>Message</span>
                        </div>

                        <input type="hidden" name="_subject" value="New Message from Contact Form" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html" />

                        <button type="submit" className="button">
                            <i className="uil uil-navigator button-icon"></i>Send Message
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
