import React, { useState } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import Modal from 'react-modal';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

Modal.setAppElement('#root'); // Set the root element for the modal

const Jig = () => {
  const [difficulty, setDifficulty] = useState('easy');
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);
  const [customDifficultyModalOpen, setCustomDifficultyModalOpen] = useState(false);
  const [customRows, setCustomRows] = useState(2);
  const [customColumns, setCustomColumns] = useState(2);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setScore] = useState(null);
  const [customMessage, setCustomMessage] = useState('');

  const difficultyLevels = [
    { name: 'easy', rows: 2, columns: 2 },
    { name: 'medium', rows: 3, columns: 3 },
    { name: 'hard', rows: 3, columns: 4 },
  ];

  const images = [
    { src: '2ndjig.jpg', customMessage: 'boys and girls both can wear capes and save the day, showing everyone that being strong, kind, and brave is something we can all do together ' },
    { src: '3rdjig.jpg', customMessage: 'World is a place where every color, language, and tradition meld together like vibrant pieces in a giant puzzle,' },
    { src: '4thjig.jpg', customMessage: 'Being fair and treating everyone the same makes the world a happier place for us all!' },
  ];

  const handleDifficultyChange = (newDifficulty, newRows, newColumns) => {
    setDifficulty(newDifficulty);
    setRows(newRows);
    setColumns(newColumns);
    setIsPuzzleSolved(false);
    if (currentLevel === 1) {
      setScore(5);
    }
    setCustomMessage(images[currentLevel - 1]?.customMessage || '');
  };

  const handleNextLevel = () => {
    if (currentLevel < difficultyLevels.length) {
      const nextLevel = currentLevel + 1;
      setCurrentLevel(nextLevel);
      const { name, rows, columns } = difficultyLevels[nextLevel - 1];
      handleDifficultyChange(name, rows, columns);
      setIsPuzzleSolved(false);

      if (score !== null) {
        setScore(score + 5);
      }
      if (currentLevel === 3) {
        setScore(15);
      }
    }
  };

  const handleCustomDifficulty = () => {
    setCustomDifficultyModalOpen(true);
  };

  const handleCustomDifficultySubmit = () => {
    setRows(customRows);
    setColumns(customColumns);
    setCustomDifficultyModalOpen(false);
    setIsPuzzleSolved(false);
  };

  const handlePuzzleSolved = () => {
    setIsPuzzleSolved(true);
    setCustomMessage(images[currentLevel - 1]?.customMessage || '');
  };

  const closePopup = () => {
    setIsPuzzleSolved(false);
    setCustomDifficultyModalOpen(false);

    if (currentLevel === 3) {
      setScore(15);
    }
  };

  const modalStyle = {
    content: {
      overflow: 'hidden',
      width: 'fit-content',
      maxWidth: '44%', // Limiting maximum width to 25% of the viewport width
      maxHeight: '24%',
      height: 'auto',
      margin: 'auto',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgb(70,252,250)',
      background: 'radial-gradient(circle, rgba(70,252,250,1) 0%, rgba(63,94,251,1) 100%)',
    },
  };

  const containerStyle = {
    height: "100vh", // Adjust as needed
  };

  const imageContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -3,
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const contentContainerStyle = {
    position: "absolute",
    bottom: "120px",  // Adjust as needed
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <img src="/images/bade.jpg" alt="Your Image" style={imgStyle} />
        </div>
        <div style={contentContainerStyle}></div>
    <div style={{ margin: '80px auto', display: 'grid', padding: '0 10px', gridTemplateColumns: 'repeat(2, 1fr)',  gridColumnGap: '95px', maxWidth: '1100px' }}>
      <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#cdbebe', marginLeft: '30px', marginTop: "85px" }}>
        <JigsawPuzzle
          imageSrc={images[currentLevel - 1]?.src}
          rows={rows}
          columns={columns}
          onSolved={handlePuzzleSolved}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {isPuzzleSolved && currentLevel < difficultyLevels.length && (
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <button onClick={handleNextLevel} style={{ margin: 'auto', padding: '5px 10px' }}>Next</button>
          </div>
        )}
        <div style={{ width: '100%', maxWidth: '400px', marginTop: '20px', textAlign: 'center' }}>
          <img src={images[currentLevel - 1]?.src} alt={`Reference Image for Level ${currentLevel}`} style={{ width: '100%', height: 'auto' }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h5>Score: {score}</h5>
        </div>
        <Modal
          isOpen={isPuzzleSolved}
          onRequestClose={closePopup}
          contentLabel="Congratulations Modal"
          style={modalStyle}
        >
          <div style={{ fontStyle: 'italic', textAlign: 'center' }}>
            {customMessage ? <h5>{customMessage}</h5> : <p>Congrats! You solved the puzzle!</p>}
            {currentLevel < difficultyLevels.length ? (
              <button onClick={handleNextLevel} style={{ margin: 'auto', padding: '5px 10px' }}>Next</button>
            ) : (
              <button onClick={closePopup} style={{ margin: 'auto', padding: '5px 10px' }}>Close</button>
            )}
          </div>
        </Modal>
      </div>
    </div>
    </div>
    </>
  );
};

export default Jig;