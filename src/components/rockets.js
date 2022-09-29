import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  return (
    <div data-testid='rocketTest'>
      <ul>
        {rockets?.map((rocket) => (
          <Rocket key={rocket.id} rocket={rocket} />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
