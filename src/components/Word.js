import React, { useState, useEffect } from 'react';
import GifDisplay from './Gamegif';
import axios from 'axios';
import { NavLink } from 'react-bootstrap';

const wordsWithHints = [
  { word: 'education', hint: ' RIGHT TO EDUCATION:Provides knowledge and skills for personal development.' },
    { word: 'protection', hint: ' RIGHT TO PROTECTION:Ensures a secure environment and safeguards against harm.' },
    { word: 'nutrition', hint: 'RIGHT TO NUTRITION:Supports the body with essential nutrients for growth and well-being.' },
    { word: 'healthcare', hint: ' RIGHT TO HEALTHCARE:Promotes well-being through medical attention and services.' },
    { word: 'shelter', hint: ' RIGHT TO ADEQUATE STANDARD OF LIVING:Provides a safe and comfortable living space for individuals and families.' },
    { word: 'safety', hint: 'RIGHT TO PROTECTION:Prevents and protects against potential dangers and risks.' },
    { word: 'recreation', hint: ' RIGHT TO PLAY AND RECREATION:Promotes enjoyment and relaxation through various leisure activities.' },
    { word: 'family', hint: 'RIGHT TO FAMILY:Offers love, support, and a sense of belonging within a familial unit.' },
    { word: 'support', hint: 'RIGHT TO SPECIAL PROTECTION:Provides help and encouragement to individuals facing challenges.' },
    { word: 'equality', hint: 'RIGHT TO NON-DISCRIMINATION:Ensures impartial treatment and equal opportunities for everyone.' },

];

const WordScramble = () => {
  const [rosponce, setrosponce] = useState([]);
  const [wordObj, setWordObj] = useState({});
  const [scrambledWord, setScrambledWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const[p,setp]=useState();

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsWithHints.length);
    setp(randomIndex);
    return wordsWithHints[randomIndex];
  };

  const scrambleWord = (word) => {
    const scrambled = word.split('').sort(() => 0.5 - Math.random()).join('');
    setScrambledWord(scrambled);
  };

  const checkAnswer = () => {
    setrosponce((prevResponses) => [
      ...prevResponses,
      {
        question: wordObj.hint,
        option: userInput,
        correctoption:wordObj.word,
      },
    ]);

    if (userInput.toLowerCase() === wordObj.word.toLowerCase()) {
      setMessage('Correct! Well done!');
      wordsWithHints.splice(p,1);
      setScore(score + 1);
      
      } else {
      wordsWithHints.splice(p,1);
      setMessage('Incorrect.');
      }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!buttonClicked) {
      checkAnswer();
      setButtonClicked(true);
    }
  };

  const handleNextWord = async() => {
    if(score===5){
        console.log(score);
        if(sessionStorage.getItem("user")){
            try{
              const res=await axios.put('http://localhost:5000/responceword',{rosponce,score,user01:sessionStorage.getItem("user")});
              console.log(res.data);
              NavLink("/");
            }catch(error){
                console.log('Error updating data:',error);
            }
    }
    }else{
    setButtonClicked(false);
    const randomWordObj = chooseRandomWord();
    setWordObj(randomWordObj);
    scrambleWord(randomWordObj.word);
    setMessage('');
    setUserInput('');
    }
  };

  useEffect(() => {
    const randomWordObj = chooseRandomWord();
    setWordObj(randomWordObj);
    scrambleWord(randomWordObj.word);
  }, []);

  const styles = {
    wordScramble: {
      backgroundColor: 'pink',
      minHeight: '100vh', // Ensure the pink color covers the full page height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
    header: {
      color: '#007bff',
      marginBottom: '20px',
    },
    hint: {
      marginBottom: '15px',
    },
    form: {
      marginTop: '20px',
      width: '100%',
      maxWidth: '400px',
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '8px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      width: '100%',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    message: {
      fontWeight: 'bold',
      marginTop: '20px',
      color: '#28a745',
    },
    scoreContainer: {
      position: 'fixed',
      top: '70px',
      left: '10px',
      backgroundColor: '#ffffff',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.wordScramble}>
      <GifDisplay/>
      <h2 style={styles.header}>Unscramble the Word</h2>
      <p style={styles.hint}>Hint: {wordObj.hint}</p>
      <p style={styles.hint}>Scrambled Word: {scrambledWord}</p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Your Guess:
          <input type="text" value={userInput} onChange={handleInputChange} style={styles.input} />
        </label>
        <button type="submit" style={styles.button} disabled={buttonClicked}>
          Check
        </button>
      </form>
      <p style={styles.message}>{message}</p>
      {message && (
        <div>
          <p>Score: {score}</p>
          <button style={{ ...styles.button, ...styles.buttonHover }} onClick={handleNextWord}>
            Next Word
          </button>
        </div>
      )}

      {/* Display score in the top right corner */}
      <div style={styles.scoreContainer}>
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default WordScramble;

