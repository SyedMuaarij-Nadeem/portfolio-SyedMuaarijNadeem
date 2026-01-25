import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bg">
                <div className="footer-container container grid">
                    <div>
                        <h1 className="footer-title">Syed Muaarij</h1>
                        <span className="footer-subtitle">Software Engineer</span>
                    </div>

                    <ul className="footer-links">
                        <li>
                            <a href="#services" className="footer-links">Services</a>
                        </li>
                        <li>
                            <a href="#work" className="footer-links">Work</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer-links">Contact</a>
                        </li>
                    </ul>

                    <div className="footer-socials">
                        <a href="https://www.facebook.com/people/Muaarij-Dev-Forge/pfbid02cLFrDcpZ5VauVVD46qtHgvk6CkPMRkbSqSzn6E4BK4EFrnui5PXTgBB5Wz5MzX3Rl/" target="_blank" className="footer-social">
                            <i className="uil uil-facebook-f"></i>
                        </a>

                        <a href="https://www.instagram.com/devforge_by_muaarij/" target="_blank" className="footer-social">
                            <i className="uil uil-instagram"></i>
                        </a>

                        <a href="https://x.com/MuaarijDevForge" target="_blank" className="footer-social">
                            <span className="x-icon">𝕏</span>
                        </a>
                    </div>
                </div>

                <p className="footer-copy">&#169; <a href="https://github.com/SyedMuaarij-Nadeem">Syed Muaarij</a>. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
