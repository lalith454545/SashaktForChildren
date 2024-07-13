import React, { useState } from 'react';
import axios from 'axios';
import ReactPlayer from "react-player"
import BoyDialogComponentpikachu from './Boystory';
import { Link, useNavigate } from 'react-router-dom';

const ChildRightsComponent = () => {
  const NavLink=useNavigate();
  const [rosponce, setrosponce] = useState([]);
  const rightsData = [
    {
      name: 'Know your Responsibilities',
      description: 'It is very important for every child to realize his/her responsibilities first.',
      videoUrl: 'https://www.youtube.com/embed/rs5FbuuzyqU',
    },
    {
      name: 'Right to Education and opposing child labor',
      description: 'Every child has the right to education go against child labor.',
      videoUrl: 'https://www.youtube.com/embed/U6bBudEnSG4',
    },
    {
      name: 'Right to Health',
      description: 'Every child has the right to access healthcare and live a healthy life.',
      videoUrl: 'https://www.youtube.com/embed/c06dTj0v0sM',
    },
    {
      name: 'Right to Play',
      description: 'Every child has the right to play and engage in recreational activities.',
      videoUrl: 'https://www.youtube.com/embed/-dGjaTWF3KY',
    },
    {
      name: 'Right to Protection',
      description: 'Every child has the right to be protected.',
      videoUrl: 'https://www.youtube.com/embed/zNTUMNKSNwk',
    },
    {
      name: 'Right to Family',
      description: 'Every child has the right to live with their family and be cared for.',
      videoUrl: 'https://www.youtube.com/embed/your-video-id5',
    },
  ];

  const allQuestions = [
    [
      {
        question: 'What responsibilities do children have in their daily lives?',
        options: [
          'No responsibilities',
          'To help with household chores',
          'To complete homework on time',
          'To eat ice cream all day',
        ],
      },
      {
        question: 'Why is it important for children to be aware of their rights?',
        options: [
          'It is not important',
          'To have fun',
          'To stay healthy',
          'To be treated fairly and respectfully',
        ],
      },
      {
        question: 'How can knowing responsibilities contribute to a child\'s personal growth?',
        options: [
          'It doesn\'t contribute',
          'Increases laziness',
          'Promotes discipline and maturity',
          'Limits creativity',
        ],
      },
    ],
    [
      {
        question: 'What challenges do children face in accessing education?',
        options: [
          'No challenges',
          'Lack of schools and resources',
          'Education is not important',
          'Too many schools to choose from',
        ],
      },
      {
        question: 'How does child labor impact a child\'s right to education?',
        options: [
          'Child labor has no impact',
          'Promotes education',
          'Negatively affects education',
          'Child labor is essential for education',
        ],
      },
      {
        question: 'What role can society play in ensuring every child\'s right to education?',
        options: [
          'Discourage education',
          'Promote child labor',
          'Provide access to quality education',
          'Encourage dropping out of school',
        ],
      },
    ],
    [
      {
        question: 'What are the key aspects of a child\'s right to health?',
        options: [
          'Access to nutritious food and clean water',
          'Unlimited screen time',
          'Skipping meals',
          'Ignoring exercise',
        ],
      },
      {
        question: 'How can children exercise their right to play?',
        options: [
          'By watching TV all day',
          'Engaging in outdoor activities and games',
          'Avoiding any physical activity',
          'Playing violent video games',
        ],
      },
      {
        question: 'Why is the right to protection important for every child?',
        options: [
          'Protection limits freedom',
          'To ensure a safe and secure environment',
          'Children don\'t need protection',
          'Protection leads to laziness',
        ],
      },
    ],
    [
      {
        question: 'What role does family play in a child\'s development?',
        options: [
          'Family is not important',
          'Provides emotional support and care',
          'Family restricts individuality',
          'Children should live alone',
        ],
      },
      {
        question: 'How can society support the right to family?',
        options: [
          'By promoting separation',
          'Encouraging neglect',
          'Supporting family reunification and stability',
          'Discouraging family bonds',
        ],
      },
      {
        question: 'Why is it crucial for children to live with their families?',
        options: [
          'Living alone is better',
          'Families hinder personal growth',
          'Families provide love and care',
          'Children should be on their own',
        ],
      },
    ],
    [
      {
        question: 'What are the challenges faced by children in accessing education?',
        options: [
          'No challenges, education is easy to access',
          'Lack of schools and resources',
          'Children don\'t need education',
          'Education leads to boredom',
        ],
      },
      {
        question: 'How does child labor impact a child\'s well-being?',
        options: [
          'Child labor is beneficial',
          'No impact on well-being',
          'Negatively affects physical and mental health',
          'Child labor leads to happiness',
        ],
      },
      {
        question: 'In what ways can communities promote the right to education?',
        options: [
          'By discouraging education',
          'Promoting child labor',
          'Ensuring access to quality schools and resources',
          'Encouraging dropout',
        ],
      },
    ],
    [
      {
        question: 'How can communities support the right to play for children?',
        options: [
          'By restricting playtime',
          'Promoting indoor activities only',
          'Providing safe and accessible play areas',
          'Children don\'t need to play',
        ],
      },
      {
        question: 'What are the benefits of recreational activities for a child\'s development?',
        options: [
          'Recreational activities have no benefits',
          'Promotes physical and mental well-being',
          'Increases boredom',
          'Children should only study',
        ],
      },
      {
        question: 'Why should children have the right to participate in decision-making processes?',
        options: [
          'Children should not participate in decision-making',
          'Promotes independence and responsibility',
          'No need for opinions',
          'Adults know best',
        ],
      },
    ],
  ];
  const [ola,setola]=useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(allQuestions.flat().length).fill(null));
  const [quizButtonVisible, setQuizButtonVisible] = useState(false);

  const openVideo = (videoUrl, index) => {
    setSelectedVideo(videoUrl);
    setCurrentVideoIndex(index);
    setShowQuiz(false);
    setCurrentQuestionIndex(0);
    setSelectedOptions(Array(allQuestions[index][0].options.length).fill(null));
    setQuizButtonVisible(false);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setShowQuiz(true);
  };
  const handleveadioend=()=>{
    setola(true)
  }

  const handleOptionSelect = (optionIndex) => {
    setrosponce((prevResponses) => [
      ...prevResponses,
      {
        question: allQuestions[currentVideoIndex][currentQuestionIndex].question,
        option: allQuestions[currentVideoIndex][currentQuestionIndex].options[optionIndex],
      },
    ]);
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleFinishQuiz =async () => {
    if(sessionStorage.getItem("user")){
    try{
      const res=await axios.put('http://localhost:5000/responceveadioplayer',{rosponce,user01:sessionStorage.getItem("user")});
      console.log(res.data);
      NavLink("/thank");
  }catch(error){
      console.log('Error updating data:',error);
  }
    }
    else{
    NavLink("/thank");
    }

    console.log(rosponce)
    setSelectedVideo(null);
    setCurrentVideoIndex(null);
    setShowQuiz(false);
    setCurrentQuestionIndex(0);
    setSelectedOptions(Array(allQuestions.flat().length).fill(null));
  };

  const containerStyle = {
    textAlign: 'center',
    backgroundImage: 'url(storyback.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
  };

  const rightsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  const rightCardStyle = {
    width: '18%',
    textAlign: 'center',
    margin: '10px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    background: 'rgb(210,180,140)',
    background: 'radial-gradient(circle, rgba(210,180,140,1) 0%, rgba(68,239,217,1) 69%, rgba(252,70,236,1) 100%)',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    zIndex: '1000',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  const quizModalStyle = {
    ...modalStyle,
    backgroundColor: '#f9f9f9', // Change background color
  };

  const optionStyle = {
    padding: '10px',
    margin: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const selectedOptionStyle = {
    ...optionStyle,
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <BoyDialogComponentpikachu />
      {/* <h2 style={{color:'yellow'}}>Child Rights</h2> */}
      <div style={rightsContainerStyle}>
        {rightsData.map((right, index) => (
          <div key={index} style={rightCardStyle}>
            <h3>{right.name}</h3>
            <p>{right.description}</p>
            <button style={buttonStyle} onClick={() => openVideo(right.videoUrl, index)}>
              Watch Video
            </button>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div style={modalStyle}>
          {/* <iframe
            title="Selected Video"
            width="100%"
            height="315"
            src={selectedVideo}
            frameBorder="0"
            allowFullScreen
          ></iframe> */}
          <ReactPlayer url={selectedVideo} controls={false} onEnded={handleveadioend} />
          { ola &&
          <button style={buttonStyle} onClick={closeVideo}>
            Close Video
          </button>
}
        </div>
      )}

      {showQuiz && currentVideoIndex !== null && (
        <div style={quizModalStyle}>
          <h2>Quiz</h2>
          {allQuestions[currentVideoIndex].map((question, qIndex) => (
            qIndex === currentQuestionIndex && (
              <div key={qIndex}>
                <p>{question.question}</p>
                <ul>
                  {question.options.map((option, oIndex) => (
                    <li key={oIndex}>
                      <label> 
                        <input
                          type="radio"
                          value={oIndex}
                          checked={selectedOptions[currentQuestionIndex] === oIndex}
                          onChange={() => handleOptionSelect(oIndex)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
                {currentQuestionIndex === allQuestions[currentVideoIndex].length - 1 ? (
                  <Link style={buttonStyle} onClick={handleFinishQuiz} >
                    Finished
                  </Link>
                ) : (
                  <button style={buttonStyle} onClick={handleNextQuestion}>
                    Next
                  </button>
                )}
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default ChildRightsComponent;
