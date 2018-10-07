import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import stats from './stats';
import prices from './prices';

export default combineReducers({
  routing: routerReducer,
  prices, stats
})