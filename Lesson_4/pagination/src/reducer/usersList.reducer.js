import { users } from '../../users';
import { prevPage, nextPage } from './userList.actions';

const initialState = {
  usersList: users,
  currentPage: 1,
};

export const usersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case prevPage:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case nextPage:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    default:
      return state;
  }
};
