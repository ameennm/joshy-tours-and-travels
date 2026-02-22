import React from 'react';
import EnquiryOptions from '../components/EnquiryOptions';
import './HoneymoonPackages.css';

const domesticHoneymoon = [
    { dest: 'Kerala', state: 'South India', nights: '3 Nights 4 Days / 4 Nights 5 Days', img: 'https://images.pexels.com/photos/247447/pexels-photo-247447.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { dest: 'Goa', state: 'South India', nights: '3 Nights 4 Days / 4 Nights 5 Days', img: 'https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { dest: 'Manali', state: 'North India', nights: '4 Nights 5 Days', img: 'https://images.pexels.com/photos/67845/pexels-photo-67845.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { dest: 'Kashmir', state: 'North India', nights: '5 Nights 6 Days', img: 'https://images.pexels.com/photos/5788914/pexels-photo-5788914.jpeg?auto=compress&cs=tinysrgb&w=600' }
];

const internationalHoneymoon = [
    { dest: 'Bali, Indonesia', nights: '4 Nights 5 Days', img: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { dest: 'Maldives', nights: '3 Nights 4 Days / 4 Nights 5 Days', img: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { dest: 'Europe Tour', nights: '7 Nights 8 Days', img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { dest: 'Thailand', nights: '4 Nights 5 Days', img: 'https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?auto=compress&cs=tinysrgb&w=600' }
];

const HoneymoonPackages = () => {
    return (
        <div className="honeymoon-page">
            <div className="page-header honeymoon-header">
                <h1>Ultimate <span className="text-gold">Romance</span></h1>
                <p>Exclusive luxury honeymoon packages crafted for unforgettable memories.</p>
            </div>

            <div className="section-padding">
                <h2 className="section-title text-center">Domestic <span className="text-gold">Honeymoon</span></h2>
                <div className="package-grid">
                    {domesticHoneymoon.map((item, index) => (
                        <div key={index} className="package-card">
                            <div className="package-image" style={{ backgroundImage: `url(${item.img})` }}></div>
                            <div className="package-content">
                                <h3>{item.dest}</h3>
                                <span className="package-tag">{item.state}</span>
                                <p className="package-duration">🌙 {item.nights}</p>
                                <div className="package-actions">
                                    <span className="text-gold" style={{ fontSize: '0.9rem', marginBottom: '10px', display: 'block' }}>Interested?</span>
                                    <EnquiryOptions />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-padding dark-section">
                <h2 className="section-title text-center">International <span className="text-gold">Honeymoon</span></h2>
                <div className="package-grid">
                    {internationalHoneymoon.map((item, index) => (
                        <div key={index} className="package-card luxury-card">
                            <div className="package-image" style={{ backgroundImage: `url(${item.img})` }}>
                                <div className="luxury-badge">Premium</div>
                            </div>
                            <div className="package-content">
                                <h3>{item.dest}</h3>
                                <p className="package-duration">🌙 {item.nights}</p>
                                <div className="package-actions">
                                    <span className="text-gold" style={{ fontSize: '0.9rem', marginBottom: '10px', display: 'block' }}>Interested?</span>
                                    <EnquiryOptions />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HoneymoonPackages;
