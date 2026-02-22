import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import './EnquiryOptions.css';

const EnquiryOptions = () => {
    return (
        <div className="enquiry-actions">
            <h3 className="enquiry-title">Enquire Now</h3>
            <div className="enquiry-buttons">
                <a href="tel:+919447393735" className="enq-btn enq-call">
                    <Phone size={20} /> Call Us
                </a>
                <a href="https://wa.me/919447393735" target="_blank" rel="noopener noreferrer" className="enq-btn enq-wa">
                    <MessageCircle size={20} /> WhatsApp
                </a>
                <a href="mailto:admin@joshytours.com" className="enq-btn enq-form">
                    <Mail size={20} /> Contact Form
                </a>
            </div>
        </div>
    );
};

export default EnquiryOptions;
