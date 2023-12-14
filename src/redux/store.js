// store.js
import { createStore, combineReducers } from 'redux';
import mcqReducer from './reducers';

const rootReducer = combineReducers({
  mcq: mcqReducer,
  // ... other reducers if needed
});

const store = createStore(rootReducer);

export default store;
