import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const BoyDialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const typeIn = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const DialogueContainer = styled.div`
  background-color: #87CEEB; /* Light blue background color for the cloud */
  padding: 15px;
  border-radius: 15px;
  margin-right: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle shadow effect */
  transform: translateY(-10px); /* Move the dialogue container 10px above */
  overflow: hidden;
  position: relative;
  animation: ${bounceIn} 0.5s ease; /* Add a bounce-in animation */

  ::before,
  ::after {
    content: '';
    position: absolute;
    background-color: #87CEEB; /* Light blue color for the cloud */
    border-radius: 50%;
  }

  ::before {
    width: 20px;
    height: 20px;
    top: -10px;
    left: -10px;
  }

  ::after {
    width: 30px;
    height: 30px;
    top: -15px;
    right: -15px;
  }
`;

const DialogueText = styled.p`
  color: #2b2b2b; /* Dark text color */
  font-family: 'Roboto', sans-serif; /* Use your desired font */
  font-size: 18px; /* Adjust the font size */
  margin: 0;
  margin-bottom: 20px; /* Adjust the margin-bottom to lift the text */
  white-space: nowrap; /* Prevent line breaks */
  overflow: hidden; /* Hide overflowed content */
  animation: ${typeIn} 2s steps(40, end) both; /* Add a typing animation */
`;

const OKButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  margin-top: 15px; /* Adjusted margin-top to move the button down */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const handleOKClick = () => {
  // Navigate to the homepage when OK button is clicked
  window.location.href = '/';
};

const BoyGifContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
`;

const BoyGif = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px; /* Optional: Add border-radius for a rounded appearance */
`;

const BoyDialogComponentthank = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Simulate delayed appearance of dialogue text
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <BoyDialogContainer>
        <DialogueContainer>
          {showText && (
            <>
              <DialogueText>Thank you for your feedback!</DialogueText>
              <OKButton onClick={handleOKClick}>OK</OKButton>
            </>
          )}
        </DialogueContainer>
        <BoyGifContainer>
          <BoyGif src="shinthank.gif" alt="Boy" />
        </BoyGifContainer>
      </BoyDialogContainer>
    </div>
  );
};

export default BoyDialogComponentthank;
