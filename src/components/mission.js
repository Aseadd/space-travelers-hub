import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission, cancelMission } from '../redux/missions/missions';
import './mission.css';

function Mission({ mission }) {
  const dispatch = useDispatch();

  const handleMissionMembership = () => {
    if (mission.status) {
      dispatch(cancelMission(mission.id));
    } else {
      dispatch(reserveMission(!mission.id));
    }
  };

  return (
    <div className="mission">
      <h3>{mission.mission_name}</h3>
      <p>{mission.description}</p>
      <button
        type="button"
        onClick={handleMissionMembership}
        className="member-button"
      >
        {mission.status ? 'Active Member' : 'Not a Member'}
      </button>
      <button
        type="button"
        onClick={handleMissionMembership}
        className="join-button"
      >
        {mission.status ? 'Leave Mission' : 'Join Mission'}
      </button>
    </div>
  );
}

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
