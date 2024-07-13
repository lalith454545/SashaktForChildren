import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SimpleLoginPage = () => {
  const [nickname, setNickname] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isNicknameNotFound, setNicknameNotFound] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset the flag for nickname not found on each login attempt
    setNicknameNotFound(false);

    axios
      .get('http://localhost:5000/users')
      .then((res) => {
        // Check if the entered nickname exists in the data
        const user = res.data.find((i) => i.nickname === nickname);

        if (user) {
          sessionStorage.setItem('user', nickname);
          // sessionStorage.setItem('cardscore', user.flipcard[0].score);
          console.log(user);
          // If nickname found, setLoggedIn and navigate to '/'
          setLoggedIn(true);
          navigate('/');
        } else {
          // If nickname not found, setNicknameNotFound
          setNicknameNotFound(true);
          setLoggedIn(false); // Set to false to show the error message
        }
      })
      .catch((err) => {
        // Handle error (you might want to show an error message to the user)
        console.log(err);
      });
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      height: '100vh', // Set height to 100vh
      margin:'0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundImage: 'url(logg.png)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    form: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: 'pink',
      
    },
    label: {
      display: 'block',
      marginBottom: '8px',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
      background: 'rgb(251,63,209)',
      background: 'radial-gradient(circle, rgba(251,63,209,1) 0%, rgba(217,68,239,1) 69%, rgba(201,70,252,1) 100%)'
    },
    button: {
      backgroundColor: '#4caf50',
      color: '#fff',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '8px',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    errorMessage: {
      color: 'red',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <h2 style={{color:'white'}}>Say your Nickname to resume the Adventurous learning</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <label htmlFor="nickname" style={styles.label}>
            Nickname:
          </label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            style={styles.input}
            required
          />
          <br />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style = styles.buttonHover)}
          >
            Start
          </button>
        </form>
      </div>

      {/* Display error message if nickname not found */}
      {isNicknameNotFound && (
        <div style={styles.errorMessage}>
          <h2>Nickname not found. Please try again.</h2>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <h2>Logged in successfully!</h2>
        </div>
      )}
    </div>
  );
};

export default SimpleLoginPage;
