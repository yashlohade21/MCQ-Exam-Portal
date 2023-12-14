// rootReducer.js
import { combineReducers } from 'redux';
import mcqReducer from './reducers';

const rootReducer = combineReducers({
  mcq: mcqReducer,
  // other reducers...
});

export default rootReducer;
