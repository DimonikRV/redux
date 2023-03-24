import { combineReducers, createStore } from 'redux';
import { counterReducer } from './src/counter.reducer';
import { usersReducer } from './src/users.reducer';

const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

const store = createStore(appReducer);

export default store;
