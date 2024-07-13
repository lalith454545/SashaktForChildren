import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter = () => {
  return (
    <footer style={{ backgroundColor: '#111', color: '#fff', padding: '40px 0', fontFamily: 'Arial, sans-serif' }} className="app-footer">
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }} className="footer-content">
        <div className="footer-links" style={{ flex: 1 }}>
          <div className="footer-link-group">
            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }} to="/">Home</Link></li>
              <li><Link style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }} to="/about">About Us</Link></li>
              <li><Link style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }} to="/chat">Help</Link></li>
              <li><Link style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }} to="/rights">My Rights</Link></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Support</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }} to="/helpline">Helpline</Link></li>
              <li><Link style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }} to="/emergency">Emergency</Link></li>
              <li><Link style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }} to="/contact">Contact Us</Link></li>
              <li><Link style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }} to="/faqs">FAQs</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-info" style={{ flex: 1, textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>&copy; 2023 Sashakt. All rights reserved.</p>
          <p style={{ fontSize: '1rem' }}>Contact: sashakt2023g85@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
