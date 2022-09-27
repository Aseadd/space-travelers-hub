import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMissions, reservedMission } from '../redux/missions/missions';


function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const amountMissions = missions.filter((mission) => mission.reserved).length;

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="missions">
      <div className="missions-header">
        <h2>Missions</h2>
          <div className="missions-list">
            {missions.map((mission) => (
              <div key={mission.id} className="mission">
                <div className="mission-name">
                  <h3>{mission.name}</h3>
                  <p>{mission.description}</p>
                </div>
                <div className="mission-reserve">
                  <span className="mission-reserve-text">
                    {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
                  </span>
                  <button
                    type="button"
                    className={mission.reserved ? 'leave-btn' : 'join-btn'}
                    onClick={() => dispatch(reservedMission(mission.id))}
                  >
                    {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="missions-footer">
          <Link to="/">
            <button type="button" className="back-btn">Back</button>
          </Link>
          <span className="amount-missions">
            {amountMissions}
            {' '}
            {amountMissions === 1 ? 'Mission' : 'Missions'}
          </span>
        </div>
      </div>
  );
}                    

export default Missions;
