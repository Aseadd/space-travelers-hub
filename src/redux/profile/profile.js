const Fetch_RESERVED_ROCKETS = 'Fetch_RESERVED_ROCKETS';

const initialState = {};

const fetchReservedRockets = (payload) => ({
  type: Fetch_RESERVED_ROCKETS,
  payload,
});

const fetchReservedRocketsThunk = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const reservedRockets = data.filter((rocket) => rocket.reserved);
  dispatch(fetchReservedRockets(reservedRockets));
};

const reservedRocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_RESERVED_ROCKETS:
      return { ...state, reservedRockets: action.payload };
    default:
      return state;
  }
};

export { fetchReservedRocketsThunk };
export default reservedRocketsReducer;
