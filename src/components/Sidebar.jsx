import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar, activeSection }) => {

    return (
        <>
            <div className="nav-toggle" id="nav-toggle" onClick={toggleSidebar}>
                <i className="uil uil-bars"></i>
            </div>

            <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`} id="sidebar">
                <nav className="nav">
                    <div className="nav-logo">
                        <img src="/assets/hero-logo.png" className="nav-logo-img" alt="Logo" />
                    </div>

                    <div className="nav-menu">
                        <div className="menu">
                            <ul className="nav-list">
                                {['home', 'about', 'skills', 'work', 'services', 'contact'].map((item) => (
                                    <li className="nav-item" key={item}>
                                        <a href={`#${item}`} className={`nav-link ${activeSection === item ? 'active-link' : ''}`}>
                                            {item.charAt(0).toUpperCase() + item.slice(1)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>



                    <div className="nav-close" id="nav-close" onClick={toggleSidebar}>
                        <i className="uil uil-times"></i>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;

