import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './mission';

function Missions() {
  const missions = useSelector((state) => state.missionsReducer.missions);
  console.log(missions);
  return (
    <div>
      <ul>
        <li className="mission-title">
          <span className="table-header">Mission</span>
          <span className="table-header">Description</span>
          <span className="table-header">Status</span>
        </li>
        {missions?.map((mission) => (
          <Mission key={mission.mission_id} mission={mission} />
        ))}
      </ul>
    </div>
  );
}

export default Missions;
