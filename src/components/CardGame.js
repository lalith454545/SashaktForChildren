import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GifDisplay from './Gamegif';

const pictureSources = [
  'childlab.png',
  'childtra.png',
  'childpor.png',
  'childmari.png',
  'childarm.png'
];

const CardGame = () => {
  const NavLink = useNavigate();
  const [rosponce, setrosponce] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showText, setShowText] = useState(false);
  const [flipCounter, setFlipCounter] = useState(0);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showInstruction, setShowInstruction] = useState(true);

  useEffect(() => {
    // Display instruction box when component mounts
    setShowInstruction(true);
  }, []);

  const handleClick = () => {
    if (!showInstruction) {
      setIsFlipped(!isFlipped);
      setShowQuestion(true);
      setFlipCounter(flipCounter + 1);

      if (flipCounter + 1 === 3) {
        setShowText(true);
      }
    }
  };

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentPictureIndex].correctOption;

    if (isCorrect) {
      setScore(score + 1);
    }
    setrosponce((prevResponses) => [
      ...prevResponses,
      {
        question: questions[currentPictureIndex].question,
        option: selectedOption,
      },
    ]);
    setShowQuestion(false);
    setIsFlipped(false);
    setShowText(true);
  };

  const handleGotIt = () => {
    setShowText(false);
    setIsFlipped(false);
    setFlipCounter(0);
    setCurrentPictureIndex((currentPictureIndex + 1) % pictureSources.length);

    if (currentPictureIndex === pictureSources.length - 1) {
      setScore(0);
      setShowText(true);
    }
  };

  const Create = async () => {
    try {
      const res = await axios.put('http://localhost:5000/responceflipcard', { rosponce, score, user01: sessionStorage.getItem("user") });
      console.log(res.data);
      NavLink("/");
    } catch (error) {
      console.log('Error updating data:', error);
    }
  }

  const questions = [
    {
      question: 'Identify the form of child exploitation depicted in the image where a young child is involved in work that deprives them of their childhood and interferes with their education.',
      options: ['Child Labor', 'Child Marriage', 'Child Soldiering', 'Child Trafficking'],
      correctOption: 'Child Labor',
      textAfterQuestion: `
        Child labor is a pressing issue that robs children of their innocence and potential.
        It involves the exploitation of young minds and bodies, preventing them from enjoying
        their childhood. Let's unite to eradicate child labor and create a world where every
        child can learn, play, and grow in a safe and nurturing environment.
      `,
    },
    {
      question: 'Based on the image, what form of child exploitation involves the recruitment, transportation, or transfer of children for the purpose of exploitation?',
      options: ['Child Labor', 'Child Marriage', 'Child Soldiering', 'Child Trafficking'],
      correctOption: 'Child Trafficking',
      textAfterQuestion: `
      Child trafficking is a heinous crime that involves the recruitment, transportation, transfer, harboring, or receipt of children for the purpose of exploitation. Often driven by organized criminal networks, child trafficking can take various forms, including forced labor, sexual exploitation, child soldiering, or illegal adoption. Children who fall victim to trafficking are subjected to physical, emotional, and psychological abuse, facing profound and long-lasting consequences. It is a grave violation of their rights, and concerted global efforts are essential to combat and eradicate this form of exploitation, ensuring the protection and well-being of vulnerable children.
      `,
    },
    {
      question: 'In the image, what form of child exploitation is represented by the use of children in sexual activities for financial or other forms of compensation?',
      options: ['Child Labor', 'Child Marriage', 'Child Soldiering', 'Commercial Sexual Exploitation of Children'],
      correctOption: 'Commercial Sexual Exploitation of Children',
      textAfterQuestion: `
      Commercial Sexual Exploitation of Children (CSEC) is a reprehensible form of child abuse that involves the use of children in sexual activities for financial or other forms of compensation. This exploitation encompasses activities such as child prostitution, pornography, and the trafficking of children for sexual purposes. Victims of CSEC endure severe physical and psychological harm, leading to long-lasting trauma. Efforts to combat CSEC include raising awareness, strengthening legal frameworks, and providing support services for survivors. Protection and advocacy initiatives are crucial to preventing this form of exploitation and safeguarding the rights and dignity of children worldwide.
      `,
    },
    {
      question: 'From the image, identify the form of child exploitation where a formal or informal union between a child and an adult is depicted, often leading to the denial of childrens rights.',
      options: ['Child Labor', 'Child Marriage', 'Child Soldiering', 'Commercial Sexual Exploitation of Children'],
      correctOption: 'Child Marriage',
      textAfterQuestion: `
      Child labor is a pervasive issue that deprives children of their fundamental rights and jeopardizes their well-being. This exploitative practice involves engaging children in work that is mentally, physically, socially, or morally harmful and interferes with their education and personal development. Often driven by economic necessity, children are compelled to work in hazardous conditions, exposing them to health risks and robbing them of their precious childhood. Efforts to combat child labor focus on legislative measures, educational opportunities, and raising awareness about the importance of protecting children from exploitation. Eradicating child labor requires a collective commitment to ensuring that every child has the opportunity to grow, learn, and thrive in a safe and nurturing environment.
      `,
    },
    {
      question: 'Based on the image, what form of child exploitation involves the recruitment and use of children for military purposes, including their participation in armed conflicts?',
      options: ['Child Labor', 'Child Marriage', 'Child Soldiering', 'Commercial Sexual Exploitation of Children'],
      correctOption: 'Child Soldiering',
      textAfterQuestion: `
      Child soldiering is a grave violation of human rights, involving the recruitment and use of children, typically under the age of 18, for military purposes. This appalling practice exposes children to the horrors of armed conflicts, forcing them into combat roles where they face physical and psychological traumas. Child soldiers may be coerced, abducted, or manipulated into participating in violent activities, disrupting their education and inflicting long-lasting harm. Efforts to address child soldiering include international advocacy, demobilization programs, and rehabilitation initiatives aimed at reintegrating former child soldiers into society. Ending the recruitment of children for armed conflict is essential for fostering a world where children can grow up free from the devastating impacts of war and violence.
      `,
    },
  ];

  const styles = {
    cardContainer: {
      backgroundImage: 'url(Cardback.png)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '110vh',
    },
    scoreContainer: {
      backgroundColor: '#2ecc71',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      width: '300px',
      marginBottom: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    cardGuide: {
      color: 'brown',
      border: '2px solid #27ae60',
      backgroundColor: '#fff',
      margin: '7px 0',
      padding: '10px',
      position: 'absolute',
      top: '50px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '999',
    },
    card: {
      position: 'relative',
      width: '200px',
      height: '300px',
      perspective: '1000px',
      cursor: 'pointer',
      transition: 'transform 0.6s',
      border: '2px solid #3498db',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    cardHover: {
      transform: 'scale(1.05)',
      borderColor: '#2980b9',
    },
    cardBack: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      backfaceVisibility: 'hidden',
      backgroundColor: '#3498db',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
      borderRadius: '10px',
    },
    questionBox: {
      marginTop: '20px',
      textAlign: 'center',
      border: '2px solid #f39c12',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    questionText: {
      color: '#fff',
      fontSize: '18px',
      marginBottom: '15px',
    },
    optionButton: {
      backgroundColor: '#2ecc71',
      color: '#fff',
      padding: '10px',
      margin: '5px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    optionButtonHover: {
      backgroundColor: '#27ae60',
    },
    additionalText: {
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#e74c3c',
      color: '#fff',
      border: '2px solid #c0392b',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    gotItButton: {
      backgroundColor: '#3498db',
      color: '#fff',
      padding: '10px 20px',
      marginTop: '15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    gotItButtonHover: {
      backgroundColor: '#2980b9',
    },
    instructionBox: {
      backgroundColor: 'brown',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      width: '300px',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '999',
    },
  };

  return (
    <div className="card-container" style={styles.cardContainer}>
      <GifDisplay />
      {showInstruction && (
        <div className="instruction-box" style={styles.instructionBox}>
          <h2 style={{ color: 'white' }}>Instructions</h2>
          <p style={{ color: 'white' }}>1. Click on the card to flip it.</p>
          <p style={{ color: 'white' }}>2. For each card there is a question. Make sure to answer it.</p>
          <p style={{ color: 'white' }}>3. Read the information associated with the question. </p>
          <button 
          style={{
            backgroundColor: 'green', 
            color: 'white', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            transition: 'background-color 0.3s', 
  }}
          onClick={() => setShowInstruction(false)}>OK</button>
        </div>
      )}
      <div className="score-container" style={styles.scoreContainer}>
        <p>Score: {score}</p>
      </div>
      <h2 className="card-guide" style={styles.cardGuide}>
        Click on the card to flip it
      </h2>
      {!showText && !showInstruction && (
        <div
          className={`card ${isFlipped ? 'flipped' : ''}`}
          onClick={handleClick}
          style={{ ...styles.card, ...(isFlipped ? styles.cardHover : null) }}
        >
          {isFlipped ? (
            <img
              src={pictureSources[currentPictureIndex]}
              alt={`Sample ${currentPictureIndex + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
            />
          ) : (
            <div className="card-back" style={styles.cardBack}></div>
          )}
        </div>
      )}
      {showQuestion && (
        <div className="question-box" style={styles.questionBox}>
          <p style={styles.questionText}>
            <b>{questions[currentPictureIndex].question}</b>
          </p>
          <ul>
            {questions[currentPictureIndex].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswer(option)}
                style={{ ...styles.optionButton, ...(option === 'Hover' ? styles.optionButtonHover : null) }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      {showText && !isFlipped && (
        <div className="additional-text" style={styles.additionalText}>
          <p style={{ fontSize: '18px' }}>{questions[currentPictureIndex].textAfterQuestion}</p>
          
            {currentPictureIndex === pictureSources.length - 1 ? (
              <button className="button-link" style={{ color: 'white' }} onClick={Create} >
                <Link to='/thank'>Thank You</Link>
              </button>
            ) : (
              <button
            onClick={handleGotIt}
            style={{ ...styles.gotItButton, ...(currentPictureIndex === pictureSources.length - 1 ? styles.gotItButtonHover : null) }}
          >
              'Got It'
              </button>
            )}
          
        </div>
      )}
    </div>
  );
};

export default CardGame;
