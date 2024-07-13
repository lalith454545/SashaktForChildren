import React from 'react';
import { Link } from 'react-router-dom';
import BoyDialogComponentoggy from './Loginpageboy';

const LandingPage = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '0',  // Adjusted margin to fill the entire viewport
      height: '100vh',  // Set height to 100vh for full viewport height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',  // Align items to the start (top)
      alignItems: 'center',
      backgroundImage: 'url(logg.png)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    button: {
      backgroundColor: '#4caf50',
      color: '#fff',
      padding: '15px 30px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '10px',
      textDecoration: 'none',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    heading: {
      fontSize: '28px',
      marginBottom: '20px',
      color: 'white',
    },
  };

  return (
    <div style={styles.container}>
      <BoyDialogComponentoggy />
      <h1 style={styles.heading}>Welcome to Sashakt</h1>
      <Link to="/register" style={styles.button}>
        Start Adventure
      </Link>
      <Link to="/login" style={{ ...styles.button, ...styles.buttonHover }}>
        Continue Adventure
      </Link>
    </div>
  );
};

export default LandingPage;
