import React from 'react';
import ChatbotWidget from '../../components/ChatbotWidget';
import './index.scss';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className='title'>I Love Laxis.</div>
      <ChatbotWidget></ChatbotWidget>
    </div>
  );
};

export default Home;
