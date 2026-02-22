import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '40px', background: '#000', borderTop: '1px solid #BD9344', textAlign: 'center', marginTop: 'auto' }}>
            <h3 style={{ color: '#BD9344' }}>CLT JOSHY TOURS & TRAVELS LLP</h3>
            <p style={{ color: '#fff', fontSize: '14px', marginTop: '10px' }}>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
