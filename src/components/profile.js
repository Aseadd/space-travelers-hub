import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

function Profile() {
  const reservedRockets = useSelector((state) => state.rocketsReducer.rockets);
  const reservedMissions = useSelector(
    (state) => state.missionsReducer.missions,
  );
  return (
    <div className="container">
      <div>
        <h1>My Missions</h1>
        <ul className="reserved-list-mission">
          {reservedMissions
            .filter((mission) => mission.status)
            .map((mission) => (
              <li key={mission.mission_id} className="reserved-item">
                {mission.mission_name}
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h1>My Rockets</h1>
        <ul className="reserved-list-rocket">
          {reservedRockets
            ?.filter((rocket) => rocket.reserved)
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
