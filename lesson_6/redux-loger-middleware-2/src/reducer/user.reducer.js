import { SHOW_SPINER, USER_DATA_RECIEVED } from '../actions/user.actions';

const initialState = {
  userData: null,
  isFetching: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINER:
      return {
        ...state,
        isFetching: true,
      };
    case USER_DATA_RECIEVED:
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      };
    default:
      return state;
  }
};
