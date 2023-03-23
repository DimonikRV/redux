import { initialState } from './store';
const ADD = 'ADD';
const DELETE = 'DELETE';

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
      };
    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.id),
      };

    default:
      return state;
  }
};
