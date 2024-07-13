import React, { useState } from "react";
// import AH from "./AH";

const Helpline = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div style={{ height: '100%', overflow: 'hidden' }}>
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        margin: '30px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h1>EMERGENCY Contact Number</h1>
        <div style={{
          backgroundColor: 'rgba(229, 238, 151, 0.823)',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{ height: 'auto', height: '100px', padding: '90px' }}>
            <img
              src="/images/1098.jpg"
              alt="My Image"
              style={{
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
          <div style={{ marginBottom: '5px', alignItems: 'center', textAlign: 'center' }}>
            <a href="tel:1098" style={{ textDecoration: 'none' }}>
                call 1098
              {/* <AH buttonText="CALL 1098" /> */}
            </a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={togglePopup} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
              <img
                src="/images/info.jpg"
                alt="Info"
                style={{ width: '50px', height: '50px' }}
              />
            </button>
            {showPopup && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                zIndex: '3',
              }}>
                <p style={{
                  fontSize: '16px',
                  backgroundColor: '#ffffff',
                  lineHeight: '1.6',
                  color: '#555',
                }}>
                  CHILDLINE is a National, 24 Hour, Emergency toll-free phone service for children in need of care and protection. Any child or concerned adult can dial 1098 to access this service. It is a project of The Ministry of Woman and Child Development, Government of India (GOI).
                </p>
                <button onClick={togglePopup} style={{
                  backgroundColor: '#2ecc71',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpline;