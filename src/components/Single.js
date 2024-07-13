import React from 'react';

export default function Single({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  const cardStyle = {
    position: 'relative',
    border: 0,
    width: '100%',
  };

  const imgStyle = {
    width: '100%',
    display: 'block',
    border: '2px solid #fff',
    borderRadius: '6px',
  };

  const frontCardStyle = {
    transform: 'rotateY(90deg)',
    transition: 'all ease-in 0.2s',
    position: 'absolute',
  };

  const flippedFrontStyle = {
    transform: 'rotateY(0deg)',
    transitionDelay: '0.2s',
  };

  const backCardStyle = {
    transition: 'all ease-in 0.2s',
    transitionDelay: '0.2s',
  };

  const flippedBackStyle = {
    transform: 'rotateY(90deg)',
    transitionDelay: '0s',
  };

  return (
    <div style={cardStyle} className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img
          style={Object.assign({}, imgStyle, frontCardStyle, flipped ? flippedFrontStyle : {})}
          className="front"
          src={card.src}
          alt="card front"
        />
        <img
          style={Object.assign({}, imgStyle, backCardStyle, flipped ? flippedBackStyle : {})}
          className="back"
          src="/background1.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}