import { usersListReducer } from './reducer/usersList.reducer';
import { createStore } from 'redux';

const store = createStore(
  usersListReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
