import { combineReducers } from 'redux';
import msgReducers from './msgReducers';

const reducers = combineReducers({
  // if you have multiple reducers you can add them here
  msg: msgReducers
});

export default reducers;
