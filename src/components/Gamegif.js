import React from 'react';

const GifDisplay = () => {
  const gifFileName = 'cutie.gif'; // Replace with the actual filename of your GIF in the public folder

  const gifUrl = process.env.PUBLIC_URL + '/' + gifFileName;

  const gifStyle = {
    position: 'fixed',
    top: 40, // Adjust as needed
    right: 10, // Adjust as needed
    width: '200px', // Adjust as needed
    height: 'auto', // Adjust as needed
  };

  return (
    <img src={gifUrl} alt="GIF" style={gifStyle} />
  );
};

export default GifDisplay;
