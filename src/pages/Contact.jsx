import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="page-header">
                <h1>Contact <span className="text-gold">Us</span></h1>
                <p>Get in touch for bookings, enquiries, and customized travel plans.</p>
            </div>

            <div className="contact-container section-padding">
                <div className="contact-info">
                    <h2>Get In Touch</h2>

                    <div className="info-block">
                        <div className="info-icon"><MapPin size={24} /></div>
                        <div>
                            <h3>Location</h3>
                            <p>Ground Floor, Mass Tower<br />Behind Arya Samaj Mandir<br />Ram Mohan Road, Kozhikode - 673004</p>
                        </div>
                    </div>

                    <div className="info-block">
                        <div className="info-icon"><MapPin size={24} /></div>
                        <div>
                            <h3>Branch</h3>
                            <p>Crown Plaza Building<br />Chungam, Thanarassery</p>
                        </div>
                    </div>

                    <div className="info-block">
                        <div className="info-icon"><Phone size={24} /></div>
                        <div>
                            <h3>Phone</h3>
                            <p>+91 9447 393 735 <br />+91 9895 945 003<br />+91 7592 010 022</p>
                        </div>
                    </div>

                    <div className="info-block">
                        <div className="info-icon"><Mail size={24} /></div>
                        <div>
                            <h3>Email</h3>
                            <p>admin@joshytours.com</p>
                        </div>
                    </div>

                    <div className="info-block">
                        <div className="info-icon"><Clock size={24} /></div>
                        <div>
                            <h3>Business Hours</h3>
                            <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2>Send a <span className="text-gold">Message</span></h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="Your Phone Number" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email address" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Tell us about your travel plans..." rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn-gold form-submit">Submit Enquiry</button>
                    </form>
                </div>
            </div>

            {/* Google Map */}
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11342.348630018598!2d75.77976869999999!3d11.258753100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CLT JOSHY Location"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
