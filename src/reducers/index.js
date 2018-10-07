import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import stats from './stats';

export default combineReducers({
  routing: routerReducer,
  stats
})