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
      <img src={rocket.image} alt={rocket.name} />
      <div className="rocket-info">
        <span className="rocket-name">{rocket.rname}</span>
        <div className="rocket-description">
          {' '}
          {rocket.reserved ? (
            <h2 className={rocket.reserved ? 'is-reserved' : ''}>Reserved</h2>
          ) : (
            ''
          )}{' '}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
