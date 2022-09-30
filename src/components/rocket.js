import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rockets';
import './rockets.css';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleRocketReservation = () => {
    if (rocket.reserved) {
      dispatch(cancelRocket(rocket.id));
    } else {
      dispatch(reserveRocket(rocket.id));
    }
  };

  return (
    <li key={rocket.id} className="rocket">
      <figure className="figure">
        <img src={rocket.image} alt={rocket.name} className="rocket-image" />
      </figure>
      <div className="rocket-info">
        <span className="rocket-name">{rocket.name}</span>
        <div className="rocket-description">
          {rocket.reserved ? (
            <span className={rocket.reserved ? 'is-reserved' : ''}>
              Reserved
            </span>
          ) : (
            ''
          )}
          &nbsp;
          {rocket.description}
        </div>
        <button
          type="button"
          onClick={() => dispatch(handleRocketReservation())}
          className={rocket.reserved ? 'cancel-button' : 'reserve-button'}
        >
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Rocket;
