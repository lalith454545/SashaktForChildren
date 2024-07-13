// import React, { useEffect } from 'react';

// const SuccessMessage = ({ onClose }) => {
//   useEffect(() => {
//     const closeAfterDelay = () => {
//       const timer = setTimeout(() => {
//         onClose();
//       }, 3000);

//       // Clear the timer if the component unmounts or is closed manually
//       return () => clearTimeout(timer);
//     };

//     closeAfterDelay();
//   }, [onClose]);

//   const successMessageStyle = {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     padding: '20px',
//     backgroundColor: '#4CAF50',  // Green color
//     color: 'white',
//     borderRadius: '8px',
//     textAlign: 'center',
//     zIndex: '9999',
//   };

//   return (
//     <div style={successMessageStyle}>
//       <p>You have successfully completed this game!</p>
//     </div>
//   );
// };

// export default SuccessMessage;
