import React from 'react';
import './index.css';

interface IProps {
  currentTime?: string;
}

const CurrentTime: React.FC<IProps> = (props: IProps) => {
  const { currentTime } = props;

  return (
    <div className='current-time'>
      {currentTime}
    </div>
  );
};

export default CurrentTime;
