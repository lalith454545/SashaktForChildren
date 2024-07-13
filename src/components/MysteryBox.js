// MysteryBox.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoyDialogComponent from './Boymyst';

const MysteryBox = () => {
  const options = ['Game', 'Story'];
  const [revealedOption, setRevealedOption] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const revealOption = () => {
    if (!isClicked) {
      const randomIndex = Math.floor(Math.random() * options.length);
      setRevealedOption(options[randomIndex]);
      setIsClicked(true);
      localStorage.setItem('mysteryBoxClicked', 'true');
    }
  };

  const isGameReady = revealedOption === 'Game';
  const isStoryReady = revealedOption === 'Story';

  const styles = {
    backgroundImage: 'url(boxuu.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={styles}>
      <BoyDialogComponent />
      <div style={{color:'black'}}><h1>Click on the box to start your learning today</h1></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30vh', justifyContent: 'center', height: '55vh', textAlign: 'center' }}>
        <div className={`box-container`} style={{ display: 'flex', marginBottom: '20px' }}>
          <div className={`box`} onClick={revealOption} style={{ width: '300px', height: '300px', backgroundColor: '#3498db', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', cursor: 'pointer', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transform: 'translateY(-50%)' }}>
            {revealedOption ? (
              <>
                {/* <img src="/mystafter.png" alt="Revealed" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} /> */}
                <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#fff', margin: '0', zIndex: 1, transform: 'translateY(0%)' }} className="revealed-option">{revealedOption}</p>
              </>
            ) : (
              <img src="/tapme.gif" alt="Unrevealed" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            )}
          </div>
          {isClicked && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '20px' }}>
              {isGameReady && (
                <Link to="/game" className="ready-button" style={{ textDecoration: 'none', backgroundColor: '#d35400', color: '#fff', fontSize: '22px', padding: '20px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease-in-out', marginTop: '20px' }}>
                  I am ready for the Game
                </Link>
              )}
              {isStoryReady && (
                <Link to="/story" className="ready-button" style={{ textDecoration: 'none', backgroundColor: '#d35400', color: '#fff', fontSize: '22px', padding: '20px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease-in-out', marginTop: '20px' }}>
                  I am ready for the Story
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MysteryBox;
