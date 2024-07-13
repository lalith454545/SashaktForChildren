import React from 'react';
import ChatBot from 'react-simple-chatbot';

export default function CBot() {
  return (
    <>
      <ChatBot
        headerTitle="ChatBot"
        recognitionEnable={true}
        floating={true}
        steps={[
          {
            id: '1',
            message: 'Hi there! How can I assist you today?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'I\'m doing well, thank you for asking!',
            trigger: '4',
          },
          {
            id: '4',
            message: 'Sashakt is an empowering app designed to inspire children through games and storytelling.',
            trigger: '5',
          },
          {
            id: '5',
            message: 'How can I help you further?',
            trigger: '2',
          },
        ]}
      />
    </>
  );
}
