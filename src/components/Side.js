import React from 'react';
import './Side.css'; 

const Side = ({ buttonText, color }) => {
    return (
        <button className="gradie" style={{ color }}>
          {buttonText}
          <div className="heffect">
            <div></div>
          </div>
        </button>
      );
    };

export default Side;