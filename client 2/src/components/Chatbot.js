import React from 'react';
import ChatBot from 'react-simple-chatbot'; 

function Chatbot() {
  return (
    <ChatBot
      botAvatar="https://img.freepik.com/free-vector/floating-robot_78370-3669.jpg?t=st=1710516076~exp=1710519676~hmac=d5e79d3e16b0f43b09304f35bfcf5a9f2437862c87bfde9c3e8b65797b01a5b1&w=1380"
      userAvatar="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1710516045~exp=1710519645~hmac=624720f1145ef3d5330787422e29301d761e204bcd126cba73c244f91312d5e6&w=1380"
      enableMobileAutoFocus
      headerTitle="Chat To Me"
      steps={
        [
          {
            id: '1',
            message: 'Are you looking for hotels in Dambulla?',
            trigger: '2'
          },
          {
            id: '2',
            options: [
              { value: 1, label: 'Yes', trigger: '3' },
              { value: 2, label: 'No', trigger: '4' }
            ]
          },
          {
            id: '3',
            message: 'Great! We have a variety of hotels in Dambulla. Would you like to explore them?',
            trigger: '5'
          },
          {
            id: '4',
            message: 'Okay, no problem. Is there anything else I can assist you with?',
            trigger: 'endConversation'
          },
          {
            id: '5',
            options: [
              { value: 1, label: 'Yes, please show me hotels', trigger: '6' },
              { value: 2, label: 'No, thank you', trigger: 'endConversation' }
            ]
          },
          {
            id: '6',
            message: 'Here are some hotels in Dambulla: [List of hotels]',
            trigger: 'endConversation'
          },
          {
            id: 'endConversation',
            message: 'Thank you for using our service. Have a great day!',
            end: true
          }
        ]
        
      }
    />
  );
}

export default Chatbot;
