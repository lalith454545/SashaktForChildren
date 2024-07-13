// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px', backgroundColor: '#c41fb1', color: '#ecf0f1', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f2f5f6' }}>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <img src="sash.png" alt="Logo" style={{ height: '40px', width: '200px', marginRight: '10px' }} />
        </Link>
      </div>

      <div style={{ display: 'flex' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#ecf0f1', marginLeft: '20px', fontSize: '1rem', transition: 'color 0.3s', padding: '10px', borderRadius: '5px', ':hover': { backgroundColor: '#6c1c5a' } }}>Home</Link>
        <Link to="/chat" style={{ textDecoration: 'none', color: '#ecf0f1', marginLeft: '20px', fontSize: '1rem', transition: 'color 0.3s', padding: '10px', borderRadius: '5px', ':hover': { backgroundColor: '#6c1c5a' } }}>Help</Link>
        <Link to='/Parenta' style={{ textDecoration: 'none', color: '#ecf0f1', marginLeft: '20px', fontSize: '1rem', transition: 'color 0.3s', padding: '10px', borderRadius: '5px', ':hover': { backgroundColor: '#6c1c5a' } }}>Parental Hub</Link>
        <Link to='/logsign' style={{ textDecoration: 'none', color: '#ecf0f1', marginLeft: '20px', fontSize: '1rem', transition: 'color 0.3s', padding: '10px', borderRadius: '5px', ':hover': { backgroundColor: '#6c1c5a' } }}>Login</Link>
        <Link to='/rights' style={{ textDecoration: 'none', color: '#ecf0f1', marginLeft: '20px', fontSize: '1rem', transition: 'color 0.3s', padding: '10px', borderRadius: '5px', ':hover': { backgroundColor: '#6c1c5a' } }}>My Rights</Link>
      </div>
    </nav>
  );
};

export default Navbar;
