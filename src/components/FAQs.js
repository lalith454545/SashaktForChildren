import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled button for Show Answer and Ask Question
const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #0069D9;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056B3;
  }
`;

// Styled button for Show Answer
const ShowAnswerButton = styled.div`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #FF9A8B;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF6B6B;
  }
`;

const FaqComponent = () => {
  const [showText, setShowText] = useState(null);
  const [userQuestion, setUserQuestion] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const toggleAnswer = (index) => {
    setShowText((prevIndex) => (prevIndex === index ? null : index));
  };
  
  const handleAskQuestion = async () => {
    // Handle the user's question and phone number
    console.log('User asked:', userQuestion);
    console.log('User phone number:', phoneNumber);

    try {
      const res = await axios.put('http://localhost:5000/FAQ', {
        userQuestion,
        phoneNumber,
        user01: sessionStorage.getItem("user")
      });
      console.log(res.data);
    } catch (error) {
      console.log('Error updating data1:', error);
    }

    // Clear the input fields
    setUserQuestion('');
    setPhoneNumber('');
  };

  const faqContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #FF9A8B, #FF6B6B)',
  };

  const faqBoxStyle = {
    width: '600px',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
  };

  const questionStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1F2041',
    marginBottom: '10px',
  };

  const dropdownStyle = {
    fontSize: '1.2rem',
    marginTop: '10px',
    cursor: 'pointer',
    color: '#0069D9',
    textDecoration: 'underline',
  };

  const answerStyle = {
    fontSize: '1.2rem',
    marginTop: '10px',
    color: '#2A2C2B',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '1rem',
    marginBottom: '10px',
  };

  const phoneInputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '1rem',
    marginBottom: '10px',
  };

  // Sample questions and answers
  const faqData = [
    {
      question: "How can storytelling empower children?",
      answer: "Storytelling helps children develop language skills, creativity, empathy, and critical thinking. It allows them to explore different perspectives and emotions, fostering their personal growth and understanding of the world."
    },
    {
      question: "What are the benefits of educational gaming for children?",
      answer: "Educational games can enhance cognitive skills, problem-solving abilities, and academic performance in children. They make learning fun and engaging, motivating children to explore and discover new concepts."
    },
    {
      question: "How can parents encourage healthy gaming habits in children?",
      answer: "Parents can set limits on screen time, choose age-appropriate games, and encourage breaks for physical activity and social interaction. They can also discuss gaming habits with their children and model healthy behavior themselves."
    },
    // Add more questions and answers as needed
  ];

  return (
    <div style={faqContainerStyle}>
      <div style={faqBoxStyle}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#2A2C2B' }}>Frequently Asked Questions</h1>
        <input
          type="text"
          placeholder="Ask a Question"
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          style={inputStyle}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={phoneInputStyle}
        />
        <Button onClick={handleAskQuestion} style={{ marginBottom: '20px' }}>
          Ask Question
        </Button>
        {faqData.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3 style={questionStyle}>{item.question}</h3>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
              <ShowAnswerButton onClick={() => toggleAnswer(index)}>
                {index === showText ? 'Hide Answer' : 'Show Answer'}
              </ShowAnswerButton>
              {index === showText && <p style={answerStyle}>{item.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
