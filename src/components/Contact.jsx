import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title" data-heading="Get in Touch">Contact me</h2>

            <div className="contact-container container grid">
                <div className="contact-content">
                    <div className="contact-info">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="contact-card"
                        >
                            <i className="uil uil-envelope-edit contact-card-icon"></i>
                            <h3 className="contact-card-title">Email</h3>
                            <span className="contact-card-data">muaarij.devforge@gmail.com</span>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="contact-card"
                        >
                            <i className="uil uil-linkedin contact-card-icon"></i>
                            <h3 className="contact-card-title">LinkedIn</h3>
                            <span className="contact-card-data">Syed Muaarij Nadeem</span>
                            <a href="http://www.linkedin.com/in/syed-muaarij-nadeem-10532a371" target="_blank" className="contact-button">
                                Connect <i className="uil uil-arrow-right contact-button-icon"></i>
                            </a>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="contact-card"
                        >
                            <i className="uil uil-github contact-card-icon"></i>
                            <h3 className="contact-card-title">GitHub</h3>
                            <span className="contact-card-data">SyedMuaarij-Nadeem</span>
                            <a href="https://github.com/SyedMuaarij-Nadeem" target="_blank" className="contact-button">
                                View profile <i className="uil uil-arrow-right contact-button-icon"></i>
                            </a>
                        </motion.div>
                    </div>
                </div>

                <div className="contact-content">
                    <form action="https://formspree.io/f/mkgbprvd" method="POST" className="contact-form">
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="input-container"
                        >
                            <input type="text" name="username" className="input" required onFocus={(e) => e.target.parentNode.classList.add('focus')} onBlur={(e) => { if (e.target.value === "") e.target.parentNode.classList.remove('focus') }} />
                            <label>Name</label>
                            <span>Username</span>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="input-container"
                        >
                            <input type="email" name="email" className="input" required onFocus={(e) => e.target.parentNode.classList.add('focus')} onBlur={(e) => { if (e.target.value === "") e.target.parentNode.classList.remove('focus') }} />
                            <label>Email</label>
                            <span>Email</span>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="input-container"
                        >
                            <input type="tel" name="phone" className="input" onFocus={(e) => e.target.parentNode.classList.add('focus')} onBlur={(e) => { if (e.target.value === "") e.target.parentNode.classList.remove('focus') }} />
                            <label>Phone</label>
                            <span>Phone</span>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="input-container textarea"
                        >
                            <textarea name="message" className="input" required onFocus={(e) => e.target.parentNode.classList.add('focus')} onBlur={(e) => { if (e.target.value === "") e.target.parentNode.classList.remove('focus') }}></textarea>
                            <label>Message</label>
                            <span>Message</span>
                        </motion.div>

                        <motion.input 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            transition={{ duration: 0.6, delay: 0.5 }}
                            type="hidden" name="_subject" value="New Message from Contact Form" 
                        />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html" />

                        <motion.button 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            type="submit" className="button"
                        >
                            <i className="uil uil-navigator button-icon"></i>Send Message
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
