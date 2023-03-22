import { createStore } from 'redux';
import { usersReducer } from './users.reducer';

export const state = {
  usersList: [],
};

const store = createStore(usersReducer);
export default store;
