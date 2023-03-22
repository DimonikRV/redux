import { addUser, deleteUser } from './users.actions';

const ADD = 'ADD';
const DELETE = 'DELETE';

export const usersReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return state.usersList.concat(action.payload);
    case DELETE:
      return state.usersList.filter(user => user.id !== action.payload.id);
    default:
      return state;
  }
};
