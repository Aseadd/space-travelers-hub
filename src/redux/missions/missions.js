import { createSlice } from "@reduxjs/toolkit"; 

const API = 'https://api.spacexdata.com/v3/missions';

const initialState = { missions: [], loading: false };
const GET_MISSIONS = 'redux/missions/missons/GET_MISSIONS';

const getMissions = () => async (dispatch) => {
  const response = await fetch(API);
  const data = await response.json();
  const missions = [];
  data.forEach((mission) => {
    missions.push({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      reserved: false,
    });
  });
  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reservedMission: (state, action) => {
      const mission = state.missions.find((m) => m.id === action.payload);
      if (mission) {
        mission.reserved = !mission.reserved;
      }
    },
  },
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => (
      { ...state,
        missions: action.payload }
    ),
    [getMissions.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [getMissions.rejected]: (state) => ({
      ...state,
      loading: false,
    }),
  },
});

export const { reservedMission } = missionsSlice.actions;
export { getMissions };
export default missionsSlice.reducer;
