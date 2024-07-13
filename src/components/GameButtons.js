// GameButtons.js
import axios from 'axios';
import React from 'react';
import './GameButtons.css';
import { Link, useNavigate } from 'react-router-dom';
// import SuccessMessage from './Completed';
// import UseE

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

import{ useEffect } from 'react';
import BoyDialogComponentKalia from './BoysGames';

// const PopupMessage = ({ showMessage, message }) => {
//   useEffect(() => {
//     if (showMessage) {
//       // Set a timeout to remove the popup after 3 seconds (adjust as needed)
//       const timeoutId = setTimeout(() => {
//         hideMessage();
//       }, 3000);

//       return () => clearTimeout(timeoutId);
//     }
//   }, [showMessage]);

//   const hideMessage = () => {
//     // Hide the popup
//     document.getElementById('popupMessage').style.display = 'none';
//   };

//   return (
//     <div
//       id="popupMessage"
//       style={{
//         display: showMessage ? 'block' : 'none',
//         position: 'fixed',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         padding: '20px',
//         backgroundColor: '#3498db', // Set your desired background color
//         color: '#fff', // Set your desired text color
//         borderRadius: '10px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
//         textAlign: 'center',
//         cursor: 'pointer',
//         transition: 'display 0.3s ease-in-out',
//       }}
//       onClick={hideMessage}
//     >
//       {message}
//     </div>
//   );
// };

const GameButtons = () => {
  // const nav=useNavigate();
  // const olacard=()=>{
  //   if(sessionStorage.getItem("cardscore")<4){
  //     nav("/CardGame");
  //   }else{
  //      console.log("your score is",sessionStorage.getItem("cardscore"));
  //      alert("You have already completed this game");
  //     // PopupMessage();
  //   }
  // }

  // const olacard1=()=>{
  //   const nickname=sessionStorage.getItem("user")
  //   axios.get('http://localhost:5000/users')
  //     .then(res => {
  //       // Check if the entered nickname exists in the data
  //       const user = res.data.find((i) => i.nickname === nickname);

  //       if (user) {
          
  //         sessionStorage.setItem("memoryscore",user.memory[0].score)
  //         console.log(user);
          
  //       } else {
          
  //       }
  //     })
  //     .catch(err => {
  //       // Handle error (you might want to show an error message to the user)
  //       console.log(err);
  //     });
  //   if(sessionStorage.getItem("memoryscore")<5){
  //     nav("/memory");
  //   }else{
  //      console.log("your score is",sessionStorage.getItem("memoryscore"));
  //      alert("You have already completed this game");
  //     // PopupMessage();
  //   }
  // }
  return (
    <div style={{backgroundImage:'url(gameback..jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', height:'92vh'}}>
      <BoyDialogComponentKalia/>
      <h2 className="gamehead" style={{color:'black'}}><b>SELECT THE GAME</b></h2>
      <div className="button-container">
        <Link className="Btn red" style={{textDecoration:'none'}} to='/cardgame'>Card Game</Link>
        <Link className="Btn orange" style={{textDecoration:'none'}} to='/memory'> Memory Check</Link>
        <Link to='/Unscramble' className="Btn yellow" style={{textDecoration:'none'}}> Unscramble The Word</Link>
        {/* <Link to='/ScratchCard' className="Btn green" style={{textDecoration:'none'}}> Scratch Card</Link> */}
        {/* <Link to='/SpinWheel' className="Btn blue" style={{textDecoration:'none'}}> Spin Wheel</Link> */}
        <Link to='/Jigsaw' className="Btn purple" style={{textDecoration:'none'}}> Jigsaw</Link>
        <Link to='/Cross' className="Btn indigo" style={{textDecoration:'none'}}> CrossWord</Link>
        {/* <Link to='/free' className="Btn pink" style={{textDecoration:'none'}}> Freedom Quest</Link> */}

        
      </div>
    </div>
  );
};

export default GameButtons;
