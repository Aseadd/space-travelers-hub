const FETCH_MISSONS = 'FETCH_MISSONS';
const FETCH_MISSONS_SUCCESS = 'FETCH_MISSONS_SUCCESS';
const FETCH_MISSONS_FAILURE = 'FETCH_MISSONS_FAILURE';
const RESERVE_MISSION = 'RESERVE_MISSION';
const CANCEL_MISSION = 'CANCEL_MISSION';

const initialState = {};
const fetchMissions = () => ({ type: FETCH_MISSONS });
const fetchMissionsSuccess = (payload) => ({
  type: FETCH_MISSONS_SUCCESS,
  payload,
});

const fetchMissionsFailure = (payload) => ({
  type: FETCH_MISSONS_FAILURE,
  payload,
});

const reserveMission = (payload) => ({
  type: RESERVE_MISSION,
  payload,
});

const cancelMission = (payload) => ({
  type: CANCEL_MISSION,
  payload,
});

const fetchMissionsThunk = () => async (dispatch) => {
  dispatch(fetchMissions());
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    const missions = [];
    data.forEach((mission) => {
      missions.push({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        status: false,
      });
    });
    dispatch(fetchMissionsSuccess(missions));
  } catch (error) {
    dispatch(fetchMissionsFailure(error.message));
  }
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSONS:
      return { ...state, loading: true };
    case FETCH_MISSONS_SUCCESS:
      return { ...state, loading: false, missions: action.payload };
    case FETCH_MISSONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case RESERVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, status: true };
          }
          return mission;
        }),
      };
    case CANCEL_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, status: false };
          }
          return mission;
        }),
      };
    default:
      return state;
  }
};

export { fetchMissionsThunk, reserveMission, cancelMission };

export default missionsReducer;
