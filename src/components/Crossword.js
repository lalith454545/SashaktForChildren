import React, { useState } from "react";
import ScratchCard from "react-scratchcard";
import { Button } from "react-bootstrap";
import Crossword from '@jaredreisinger/react-crossword';

const Cross = () => {
  const [showCrossword, setShowCrossword] = useState(false);
  const [cardScratched, setCardScratched] = useState(false);

  const handleMouseEnter = () => {
    document.body.style.cursor = 'crosshair';
  };

  const handleMouseLeave = () => {
    document.body.style.cursor = 'default';
  };

  const scratchCardSettings = {
    width: 640, // Adjusted width
    height: 400, // Adjusted height
    image: "scratch.jpg", // Set the path to your scratch card image
    finishPercent: 50,
    onComplete: () => {
      console.log("The card is now clear!");
      setCardScratched(true);
    }
  };

  const replaceImage = "nutri.jpg"; // Path to the image to be revealed after scratching

  const handleStart = () => {
    setShowCrossword(true);
  };

  const data = {
    across: {
      1: {
        clue: 'Who plays a crucial role in ensuring fulfillments of the rights',
        answer: 'SOCIETY',
        row: 6,
        col: 0,
        correct: false,
      },
      2: {
        clue: 'Healthcare is essential for both physical & _____ mental development',
        answer: 'MENTAL',
        row: 2,
        col: 2,
        correct: false,
      },
      3: {
        clue: 'This right recognises nutrition and healthcare (Yes or No) ',
        answer: 'YES',
        row: 1,
        col: 5,
        correct: false,
      },
    },
    down: {
      5: {
        clue: 'This right enables individuals to lead _____ and productive lives',
        answer: 'HEALTHY',
        row: 0,
        col: 6,
        correct: false,
      },
      6: {
        clue: 'What is encompassed by the right to nutrition and healthcare',
        answer: 'FOOD',
        row: 4,
        col: 1,
        correct: false,
      },
    },
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        display: "flex",
        justifyContent: "flex-start", // Align components to the left
        alignItems: "center",
        height: "150vh",
        marginLeft: "30px", // Adjust margin to move components to the right
        paddingTop: "90px", // Add top padding to create space from the navbar
      }}
    >
      <div style={{ display: "flex", width: "80%" }}>
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <div
            style={{
              position: "relative",
              width: "640px",
              height: "400px",
              margin: "auto"
            }}
          >
            <ScratchCard {...scratchCardSettings} />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "500px",
                height: "400px",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
                color: "#333",
                backgroundColor: "transparent"
              }}
            >
              <img
                src={replaceImage}
                style={{ width: "640px", height: "400px", zIndex: -2 }}
                alt="Revealed Content"
              />
              {cardScratched && !showCrossword && (
                <Button onClick={handleStart}>Start</Button>
              )}
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          {showCrossword && (
            <div style={{ display: 'flex', width: '200%' }}>
              <Crossword
                data={data}
                cellOnClick={(cell) => { 
                  cell.correct = true; 
                }}
                style={{ flex: 1 }} // Adjust this value as needed
                theme={{
                  gridBackground: '#fff', // Adjust background color
                  cellBackground: '#f0f0f0', // Adjust cell background color
                  textColor: 'black', // Color of text on Crossword
                  numberColor: 'blue', // Color of number on Crossword
                  focusBackground: '#ddf', // Adjust focus background color
                  highlightBackground: '#FFC1DC', // Adjust highlight background color
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cross;
