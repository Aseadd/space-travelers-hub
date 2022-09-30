import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer, { fetchRocketsThunk } from './rockets/rockets';
import reservedRocketsReducer, {
  fetchReservedRocketsThunk,
} from './profile/profile';
import missionsReducer, { fetchMissionsThunk } from './missions/missions';

const rootReducer = combineReducers({
  rocketsReducer,
  reservedRocketsReducer,
  missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchRocketsThunk());
store.dispatch(fetchMissionsThunk());
store.dispatch(fetchReservedRocketsThunk());

export default store;
