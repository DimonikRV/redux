import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload.userId),
      };
    case UPDATE_USER:
      return {
        ...state,
        usersList: state.usersList.map(user =>
          user.id === action.payload.userId
            ? {
                ...user,
                ...action.payload.userData,
              }
            : user,
        ),
      };
    default:
      return state;
  }
};
