import { combineReducers } from 'redux';
import baseReducer from './base';
import toasterReducer from './notifications';
import movieReducer from './movies';


const rootReducer = combineReducers({
  baseReducer,
  toasterReducer,
  movieReducer
});

export default rootReducer;
