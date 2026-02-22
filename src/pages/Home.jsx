import React from 'react';
import { Link } from 'react-router-dom';
import EnquiryOptions from '../components/EnquiryOptions';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Banner */}
            <section className="hero-banner">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Experience <span className="text-gold">Luxury</span> Travel</h1>
                    <p className="hero-subtitle">Premium Tour & Transport Services for Your Next Journey</p>
                    <div className="hero-actions">
                        <Link to="/tour-packages" className="btn-gold">Explore Packages</Link>
                        <Link to="/transport" className="btn-outline-gold hero-outline-btn">View Fleet</Link>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="intro-section section-padding text-center">
                <h2 className="section-title">Welcome to <span className="text-gold">CLT JOSHY</span></h2>
                <p className="section-description">
                    We provide high-end, premium tour packages and luxury transport rental services designed for utmost comfort and elegance. Whether you need a simple commute or a meticulously planned international honeymoon, we deliver excellence.
                </p>
            </section>

            {/* Services Overview */}
            <section className="services-overview section-padding">
                <h2 className="section-title text-center">Our <span className="text-gold">Services</span></h2>
                <div className="services-grid">

                    <div className="service-card">
                        <div className="service-image transport-bg"></div>
                        <div className="service-content">
                            <h3>Transport Rental</h3>
                            <p>Premium vehicles focused on travel and tour comfort. Ranging from luxury Innovas to 49 Seater Volvo Buses.</p>
                            <Link to="/transport" className="service-link">View Vehicles &rarr;</Link>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-image packages-bg"></div>
                        <div className="service-content">
                            <h3>Tour Packages</h3>
                            <p>Domestic and International tour packages specially tailored for students, corporates, families, and clubs.</p>
                            <Link to="/tour-packages" className="service-link">View Packages &rarr;</Link>
                        </div>
                    </div>

                    <div className="service-card highlight-card">
                        <div className="service-image honeymoon-bg"></div>
                        <div className="service-content">
                            <h3 className="text-gold">Honeymoon Specials</h3>
                            <p>Luxury romantic getaways carefully crafted for newlyweds in locations like Bali, Maldives, Europe, and more.</p>
                            <Link to="/honeymoon-packages" className="service-link text-gold">View Specials &rarr;</Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-us section-padding">
                <h2 className="section-title text-center">Why <span className="text-gold">Choose Us</span></h2>
                <div className="why-grid">
                    <div className="why-item">
                        <div className="why-icon">🌟</div>
                        <h4>Premium Service</h4>
                        <p>Exceptional quality and uncompromised luxury standards.</p>
                    </div>
                    <div className="why-item">
                        <div className="why-icon">💰</div>
                        <h4>Best Price</h4>
                        <p>Competitive pricing without sacrificing any comfort or trust.</p>
                    </div>
                    <div className="why-item">
                        <div className="why-icon">🚘</div>
                        <h4>Luxury Vehicles</h4>
                        <p>Well-maintained global standard fleet of cars and buses.</p>
                    </div>
                    <div className="why-item">
                        <div className="why-icon">🤝</div>
                        <h4>Trusted Brand</h4>
                        <p>A heritage of reliability and thousands of satisfied customers.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Enquiries */}
            <section className="cta-section section-padding flex-center">
                <div className="cta-box">
                    <h2>Ready to Start Your Journey?</h2>
                    <p>Contact our experts to craft your perfect itinerary.</p>
                    <EnquiryOptions />
                </div>
            </section>
        </div>
    );
};

export default Home;
