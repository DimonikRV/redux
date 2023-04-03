import { users } from '../users';
import { GO_NEXT, GO_PREV } from './userActions';

const initialState = {
  usersList: users,
  currentPage: 1,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_PREV:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case GO_NEXT:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    default:
      return state;
  }
};
