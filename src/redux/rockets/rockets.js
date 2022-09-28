const Fetch_Rockets = 'Fetch_Rockets';
const Fetch_Rockets_Success = 'Fetch_Rockets_Success';
const Fetch_Rockets_Failure = 'Fetch_Rockets_Failure';
const Reserve_Rocket = 'Reserve_Rocket';
const Cancel_Rocket = 'Cancel_Rocket';

const initialState = {};
const fetchRockets = () => ({ type: Fetch_Rockets });
const fetchRocketsSuccess = (payload) => ({
  type: Fetch_Rockets_Success,
  payload,
});

const fetchRocketsFailure = (payload) => ({
  type: Fetch_Rockets_Failure,
  payload,
});

const reserveRocket = (payload) => ({
  type: Reserve_Rocket,
  payload,
});

const cancelRocket = (payload) => ({
  type: Cancel_Rocket,
  payload,
});

const fetchRocketsThunk = () => async (dispatch) => {
  dispatch(fetchRockets());
  try {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    const rockets = [];
    data.forEach((rocket) => {
      rockets.push({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        description: rocket.description,
        image: rocket.flickr_images[0],
        reserved: false,
      });
    });
    dispatch(fetchRocketsSuccess(rockets));
  } catch (error) {
    dispatch(fetchRocketsFailure(error.message));
  }
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_Rockets:
      return { ...state, loading: true };
    case Fetch_Rockets_Success:
      return { ...state, loading: false, rockets: action.payload };
    case Fetch_Rockets_Failure:
      return { ...state, loading: false, error: action.payload };
    case Reserve_Rocket:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: true };
          }
          return rocket;
        }),
      };
    case Cancel_Rocket:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === action.payload) {
            return { ...rocket, reserved: false };
          }
          return rocket;
        }),
      };
    default:
      return state;
  }
};

export { fetchRocketsThunk, reserveRocket, cancelRocket };

export default rocketsReducer;
