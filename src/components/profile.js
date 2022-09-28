import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

function Profile() {
  const reservedRockets = useSelector((state) => state.rocketsReducer.rockets);
  return (
    <div className="container">
      <div className="reserved-list-mission">
        <h1>My Missions</h1>
      </div>
      <div>
        <h1>My Rockets</h1>
        <ul className="reserved-list-rocket">
          {reservedRockets
            .filter((rocket) => rocket.reserved)
            .map((rocket) => (
              <li key={rocket.id} className="reserved-item">
                {rocket.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
