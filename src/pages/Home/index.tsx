import React from 'react';
import ChatbotWidget from '../../components/ChatbotWidget';
import './index.css';

const textStyle: React.CSSProperties = {
  fontSize: '3em',
  fontWeight: 'bold',
  color: '#121B3E',
};

const Home: React.FC = () => {
  return (
    <div className="container">
      <div style={textStyle}>I Love Laxis.</div>
      <ChatbotWidget></ChatbotWidget>
    </div>
  );
};

export default Home;
