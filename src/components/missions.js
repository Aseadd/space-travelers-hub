import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './mission';

function Missions() {
  const missions = useSelector((state) => state.missionsReducer.missions);
  console.log(missions);
  return (
    <div>
      <ul>
        {missions.map((mission) => (
          <Mission key={mission.id} mission={mission} />
        ))}
      </ul>
    </div>
  );
}

export default Missions;
