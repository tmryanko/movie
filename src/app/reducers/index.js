import { combineReducers } from 'redux';
import toasterReducer from './notifications';
import movieReducer from './movies';


const rootReducer = combineReducers({
  toasterReducer,
  movieReducer
});

export default rootReducer;
