import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="page-header">
                <h1>About <span className="text-gold">Us</span></h1>
                <p>Excellence in travel, guided by decades of trust and reliability.</p>
            </div>

            <div className="section-padding text-center">
                <h2 className="section-title">Our <span className="text-gold">Story</span></h2>
                <p className="story-content">
                    CLT JOSHY Tours & Travels LLP was founded with a singular vision: to bring premium luxury travel to everyone.
                    Over the years, we have grown from a small passionate team into a recognized leader in high-end transport rentals and complex domestic and international tour packages.
                    <br /><br />
                    We believe that travel is not just about moving from one destination to another; it's about the experience, the comfort, and the memories forged along the way. That's why every journey with us feels like a premium experience.
                </p>

                <div className="trust-factors grid-factors">
                    <div className="factor">
                        <h3 className="text-gold">10+</h3>
                        <p>Years of Experience</p>
                    </div>
                    <div className="factor">
                        <h3 className="text-gold">15k+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="factor">
                        <h3 className="text-gold">50+</h3>
                        <p>Luxury Vehicles</p>
                    </div>
                    <div className="factor">
                        <h3 className="text-gold">100%</h3>
                        <p>Safety & Trust</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
