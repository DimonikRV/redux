import { users } from '../../users';
import { filter } from '../actions/usersList.actions';

const initialState = {
  filterText: '',
  usersList: users,
};

export const usersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case filter:
      return {
        ...state,
        filterText: action.payload.value,
      };
    default:
      return state;
  }
};
