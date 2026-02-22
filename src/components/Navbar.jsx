import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <div className="logo-icon">
                        <span className="logo-j1">J</span>
                        <span className="logo-j2">J</span>
                        <div className="logo-dot"></div>
                    </div>
                    <div className="logo-text">
                        <span className="logo-clt">CLT</span>
                        <span className="logo-joshy">JOSHY</span>
                        <span className="logo-sub">TOURS & TRAVELS LLP</span>
                    </div>
                </Link>

                {/* Mobile Menu Toggle Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMobileMenuOpen ? <X size={28} color="#BD9344" /> : <Menu size={28} color="#BD9344" />}
                </button>

                <nav className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`} onClick={closeMenu}>Home</Link>
                    <Link to="/transport" className={`nav-link ${location.pathname === '/transport' ? 'active-link' : ''}`} onClick={closeMenu}>Transport</Link>
                    <Link to="/tour-packages" className={`nav-link ${location.pathname === '/tour-packages' ? 'active-link' : ''}`} onClick={closeMenu}>Tour Packages</Link>
                    <Link to="/honeymoon-packages" className={`nav-link text-gold ${location.pathname === '/honeymoon-packages' ? 'active-link' : ''}`} onClick={closeMenu}>Honeymoon Packages</Link>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active-link' : ''}`} onClick={closeMenu}>About</Link>
                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active-link' : ''}`} onClick={closeMenu}>Contact</Link>

                    <div className="navbar-actions-mobile">
                        <Link to="/contact" onClick={closeMenu}>
                            <button className="btn-gold">Enquire Now</button>
                        </Link>
                    </div>
                </nav>

                <div className="navbar-actions">
                    <Link to="/contact">
                        <button className="btn-gold">Enquire Now</button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
