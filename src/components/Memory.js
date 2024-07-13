import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Single from './Single';
import Popup from './Popup';
import './Memory.css'


// const cardImages = [
//   { "src": "/edu1.png", matched: false, question: "In matters concerning the child's education, what should be considered?", options: ["parents’ opinions", "Child’s preferences", "Government regulations", "Teacher recommendations"], correctOption: "parents’ opinions" },
//   { "src": "/Images/memoryhealth.webp", matched: false, question: "When making healthcare decisions for a child, whose views should be taken into account?", options: ["Doctors and parents", "Parents only", "Child and parents"], correctOption: "Doctors and parents" },
//   { "src": "/Images/memorycustody.png", matched: false, question: "In cases of divorce or separation, whose views on custody arrangements should be considered?", options: ["Only parents", "Legal authorities", "Child and Legal authorities"], correctOption: "Child and Legal authorities" },
//   { "src": "/Images/memoryreli.jpeg", matched: false, question: " What does the right to children's views mean in terms of religion", options: ["A) Children can choose their own religion", "B) Children must follow their parents religion", "C) Children have no say in matters of religion"], correctOption: "A)Children can choose their own religion" },
//   { "src": "/play.png", matched: false, question: " How does the right to children's views relate to extra-curricular activities?", options: [" A)Children have the right to choose their own extra-curricular activities", "B)Parents have the authority to decide which extra-curricular activities their children can participate in", "C)Children have no say in matters of extra-curricular activities"], correctOption: "Children have the right to choose their own extra-curricular activities" },
//   { "src": "/Images/memorySocial1.jpg", matched: false, question: "Whose views on social relationships and activities should be acknowledged?", options: ["Only parents’ opinions", "Child’s preferences", "Government authorities", "Peer influence"], correctOption: "Child’s preferences" },
// ];
const cardImages = [
  { 
    "src": "/edu1.png", 
    matched: false, 
    question: "In matters concerning the child's education, what should be considered?", 
    options: [
      "A) parents’ opinions", 
      "B) Child’s preferences", 
      "C) Both parents and child's preferences", 
      "D) Teacher recommendations"
    ], 
    correctOption: "C) Both parents and child's preferences" 
  },
  { 
    "src": "/memoryhealth.webp", 
    matched: false, 
    question: "When making healthcare decisions for a child, whose views should be taken into account?", 
    options: [
      "A) Doctors and parents", 
      "B) Parents only", 
      "C) Child and parents"
    ], 
    correctOption: "A) Doctors and parents" 
  },
  { 
    "src": "/memorycustody.png", 
    matched: false, 
    question: "In cases of divorce or separation, whose views on custody arrangements should be considered?", 
    options: [
      "A) Only parents", 
      "B) Legal authorities", 
      "C) Child and Legal authorities"
    ], 
    correctOption: "C) Child and Legal authorities" 
  },
  { 
    "src": "/memoryreli.jpeg.jpg", 
    matched: false, 
    question: "What does the right to children's views mean in terms of religion", 
    options: [
      "A) Children can choose their own religion", 
      "B) Children must follow their parents religion", 
      "C) Children have no say in matters of religion"
    ], 
    correctOption: "A) Children can choose their own religion" 
  },
  { 
    "src": "/play.png", 
    matched: false, 
    question: "How does the right to children's views relate to extra-curricular activities?", 
    options: [
      "A) Children have the right to choose their own extra-curricular activities", 
      "B) Parents have the authority to decide which extra-curricular activities their children can participate in", 
      "C) Children have no say in matters of extra-curricular activities"
    ], 
    correctOption: "A) Children have the right to choose their own extra-curricular activities" 
  },
  { 
    "src": "/memorySocial1.jpg", 
    matched: false, 
    question: "Whose views on social relationships and activities should be acknowledged?", 
    options: [
      "A) Child's and  parents’ opinions", 
      "B) Child’s preferences", 
      "C) Government authorities", 
      "D) Peer influence"
    ], 
    correctOption: "A) Child's and  parents’ opinions" 
  },
];



function Memory() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [rosponce,setrosponce]=useState([]);
  const [score, setScore] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(!showRules);
  };
  const handlePopupClose = async(isCorrect,selectedOption) => {
    
    setrosponce((prevResponses) => [
      ...prevResponses,
      {
        question: choiceTwo.question,
        option: selectedOption
      },
    ]);
    
    setPopupVisible(false);
    resetTurn();
  
    let scoreChange = 0;
  
    if (isCorrect) {
      scoreChange += 5; // +5 for correct pair
      scoreChange += 5; // +5 for correct option
    } else {
      scoreChange -= 2; // -2 for wrong option
    }
  
    setScore((prevScore) => Math.max(0, prevScore + scoreChange)); // Ensure the score doesn't go below 0
  
    // Subtract number of turns only if all pairs are matched
    if (cards.every((card) => card.matched)) {
      if(sessionStorage.getItem("user")){
        try{
          const res=await axios.put('http://localhost:5000/responcememory',{rosponce,score:score,user01:sessionStorage.getItem("user")});
          console.log(res.data);
          // NavLink("/thank");
      }catch(error){
          console.log('Error updating data:',error);
      }
        }
        else{
        // NavLink("/thank");
        }
      setScore((prevScore) => prevScore - turns);
    }
  };
  
  

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setScore(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setTimeout(() => {
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.src === choiceOne.src) {
                return { ...card, matched: true };
              } else {
                return card;
              }
            });
          });
          setPopupVisible(true);
        }, 1000); // Add a delay of 1000 milliseconds (1 second) before showing the question
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="Appmemo">
      <h1 className="titleyesh2"> Memory Game </h1>
      <h2 className="titleyesh2"></h2>
      <div className="info-containeryesh2">
        <div className="info-itemyesh2">
          
          <p>Turns: {turns}</p>
        </div>
        <div className="info-itemyesh2">
          <p>Score: {score}</p>
        </div>
        <button className="new-game-buttonyesh2" onClick={shuffleCards}>
          NEW GAME
        </button>
        <button className="rules-button" onClick={toggleRules}>
          RULES
        </button>
      </div>

     
      <div className="card-gridyesh2">
        {cards.map((card) => (
          <Single
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>

      {popupVisible && (
        <Popup
          question={choiceOne.question}
          options={choiceOne.options}
          correctOption={choiceOne.correctOption}
          onClose={(isCorrect,selectedOption) => handlePopupClose(isCorrect,selectedOption)}
        />
      )}
       {showRules && (
        <div className="rules-modal">
          <div className="rules-content">
            <h2>Memory Game Rules</h2>
            <p>1. Flip two cards to find matching pairs.</p>
            <p>2. For each correct pair, you earn 5 points.</p>
            <p>3. For each correct option in the popup, you earn an additional 5 points.</p>
            <p>4. For each wrong option, you lose 2 points.</p>
            <p>5. Your final score is calculated as (Total Points - Turns).</p>
            <button onClick={toggleRules}>Close</button>
          </div>
        </div>
          )}
    </div>
  );
}

export default Memory;