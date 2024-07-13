import React, { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";
import Modal from 'react-modal';

const modalStyles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 3,
  },
  content: {
    position: "static",
    width: "450px", // Set a fixed width for the modal content
    margin: "0 auto",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "hidden",
    borderRadius: "8px",
    outline: "none",
    padding: "20px",
  },
};

const Spin = () => {
  const [hasSpun, setHasSpun] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [winnerText, setWinnerText] = useState("");
  const [winnerMessage, setWinnerMessage] = useState("");
  const [winnerImage, setWinnerImage] = useState("");
  const [winningSegment, setWinningSegment] = useState(null); 
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [videoMessage, setVideoMessage] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [questionIndex, setQuestionIndex] = useState(-1);
  const [answer, setAnswer] = useState("");
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);


  const segments = [
    { name: "Movie Time 🎬", image: "movie.jpg", message: "Movie Time 🎬", modalContent: "Movie time with Family", 
      videos: [
        { videoId: "5vAmkhO-wAQ", message: "Taare Zammen Par", description: " <em> Taare Zameen Par </em> inspires us to recognize the potential in every child and reminds us that with patience, understanding, and love, everyone can be a guiding light" },
        { videoId: "2FMmc1KYVoo", message: "Stanley Ka Dabba", description: "A young boy named Stanley, faces adversity and discrimination but finds solace and resilience through his love for creativity and friendship." },
        { videoId: "m74Iu1MDLZs", message: "Nil Battey Sannata", description: "A mother's relentless determination to ensure her daughter's education against all odds." },
        { videoId: "CIrlJDtUpac", message: "Udaan", description: "a teenager's struggle for independence and self-expression against his authoritarian father's oppressive control." },
      ]
    },
    { name: "Role Play 🎭", image: "roleplay.png", message: "Role Play 🎭", modalContent: "Time to Team up with your parents and think through the Slice's of Life",
      questions: [
        "Iqbal, with his different clothes and quiet ways, faced mean kids at school who teased him because of how he dressed and what he believed. He kept quiet about it, feeling alone and not talking to anyone about how he felt. If you were to be Iqbal's classmate what would you have done?",
        "Describe a scenario where you are stranded on a deserted island.",
        "If you could travel to any period in history, where would you go and why?",
        "Imagine you are a famous actor. Describe your dream movie role.",
        "What would you do if you woke up with the ability to speak to animals?"
      ]
    },
    { name: "Golden Hour 😄", image: "journalling.jpg", message: "Golden Hour 😄", modalContent: "Reminisce the past" },
    { name: "Gardening 🌱", image: "facts.jpg", message: "Gardening 🌱", modalContent: "Fostering growth and togetherness" },
    { name: "Amaze Me 🌟", image: "surp.png", message: "Amaze Me 🌟", modalContent: "Amaze Me modal content", 
    videos: [
      { videoId: "JGoV5Enkk0Y"},
      { videoId: "JGoV5Enkk0Y"},
      { videoId: "JGoV5Enkk0Y"},
      { videoId: "JGoV5Enkk0Y"},
    ]
  },    
];

  const segColors = ["#ff5c77", "#ffa23a", "#4dd091", "#6FA8DC", "#ffec59"];

  const onFinished = (winner) => {
    //const winner = "Movie Time 🎬";
    const currentWinningSegment = segments.find((segment) => segment.name === winner);
    setWinnerText(winner);
    setWinnerMessage(currentWinningSegment.message);
    setHasSpun(true);
    setModalOpen(true);
    setWinnerImage(currentWinningSegment.image);
    setWinningSegment(currentWinningSegment);
  
    if (currentWinningSegment.name === "Movie Time 🎬") {
      const randomVideoIndex = Math.floor(Math.random() * currentWinningSegment.videos.length);
      const randomVideo = currentWinningSegment.videos[randomVideoIndex];
      setVideoId(randomVideo.videoId);
      setVideoMessage(randomVideo.message);
      setVideoDescription(randomVideo.description);
    } else if (currentWinningSegment.name === "Role Play 🎭") {
      const randomQuestionIndex = Math.floor(Math.random() * currentWinningSegment.questions.length);
      setQuestionIndex(randomQuestionIndex);
    } else if (winner === "Amaze Me 🌟") {
      const randomVideoIndex = Math.floor(Math.random() * currentWinningSegment.videos.length);
      const randomVideo = currentWinningSegment.videos[randomVideoIndex];
      setVideoId(randomVideo.videoId);
    }
    
    
    
  };
  

  const handleSubmitAnswer = () => {
    setIsAnswerSubmitted(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };

  const openNextModal = () => {
    setModalOpen(false);
    setSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setSecondModalOpen(false);
  };

  return (
    <>
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -3 }}>
          <img src="hehe.jpg" alt="Your Image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", top: "10px", left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
          <div className="wheel-container">
            <WheelComponent
              segments={segments.map(segment => segment.name)}
              segColors={segColors}
              onFinished={onFinished}
              primaryColor="#D8BFD8"  
              contrastColor="#002D51"
              buttonText="Spin"
              isOnlyOnce={hasSpun}
              size={200}
              upDuration={50}
              downDuration={600}
              fontFamily="Arial"
              zIndex={2}
              className="WheelComponent"
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Winner Modal"
        style={modalStyles}
      >
        <div style={{ textAlign: "center", position: "relative" }}>
          <h2>{winnerMessage}</h2>
          <div style={{ position: "relative", maxWidth: "100%", maxHeight: "500px" }}>
            {winnerImage && <img src={winnerImage} alt="Winner" style={{ maxWidth: "100%" }} />}
          </div>
          <button
            onClick={openNextModal}
            style={{ position: "absolute", bottom: "5px", right: "5px", zIndex: "2" }}
          >
            Next
          </button>
        </div>
      </Modal>

      {winningSegment && (
        <Modal
          isOpen={secondModalOpen}
          onRequestClose={closeSecondModal}
          contentLabel="Second Modal"
          style={{
            overlay: modalStyles.overlay,
            content: {
              ...modalStyles.content,
              height: "79%",
              marginBottom: "-45px",
              border: "2px solid red",     
              width: "75%", 
            }
          }}
        >
          <div style={{ textAlign: "center", marginTop: "5px", position: "relative" }}>
            

            {winningSegment.name === "Movie Time 🎬" && (
              <>
              
                <h2>{winningSegment.modalContent}: <em>{videoMessage}</em></h2>
                <h5>{videoDescription}</h5>
                <iframe
                  width="860"
                  height="365"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={closeSecondModal}
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    right: "5px",
                    zIndex: "2",
                  }}
                >
                  Close
                </button>
              </>
            )}

            {winningSegment.name === "Role Play 🎭" && (
              <>
                <h2>{winningSegment.modalContent}</h2>
                <h4>{winningSegment.questions[questionIndex]}</h4>
                <br/>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  rows={7}
                  style={{ width: "80%", margin: "10px auto" }}
                />
                {!isAnswerSubmitted && (
                  <button
                    onClick={handleSubmitAnswer}
                    style={{
                      marginTop: "30px",
                      marginLeft: "auto", 
                      marginRight: "auto", 
                      display: "block", 
                    }}
                  >
                    Submit
                  </button>
                )}
                {isAnswerSubmitted && (
                  <button
                    onClick={closeSecondModal}
                    style={{
                      position: "absolute",
                      bottom: "-100px",
                      right: "5px",
                      zIndex: "2",
                    }}
                  >
                    Close
                  </button>
                )}
              </>
            )}

            {winningSegment.name === "Golden Hour 😄" && (
              <>
                <h2>{winningSegment.modalContent}</h2>
                <br/>
                <h4>
                  It's time for your parents to take a trip down the memory lane <br/>and recollect about the various games they used to play in the good <br/>old days and their hobbies and their dreams.
                  Doing this simple task <br/>is not only going to bring smiles on your faces <br/>but also on those of your parents.
                </h4>
                <button
                  onClick={closeSecondModal}
                  style={{
                    position: "absolute",
                    bottom: "-230px",
                    right: "5px",
                    zIndex: "2",
                  }}
                >
                  Close
                </button>
              </>
            )}

            {winningSegment.name === "Gardening 🌱" && (
              <>
                <h2>{winningSegment.modalContent}</h2>
                <br/>
                <h4>
                  It's time to explore the wonders of gardening with your family. Spend some quality time outdoors, planting seeds, nurturing plants, and watching them grow. Gardening not only beautifies your surroundings but also provides a sense of fulfillment and connection with nature.
                </h4>
                <button
                  onClick={closeSecondModal}
                  style={{
                    position: "absolute",
                    bottom: "-230px",
                    right: "5px",
                    zIndex: "2",
                  }}
                >
                  Close
                </button>
              </>
            )}

            {winningSegment.name === "Amaze Me 🌟" && (
              <>
                <h2>{winningSegment.modalContent}</h2>
                <iframe
                  width="420"
                  height="365"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={closeSecondModal}
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    right: "5px",
                    zIndex: "2",
                  }}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Spin;