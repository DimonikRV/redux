import { SET_USER } from './user.actions';

const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload.userData,
      };
    default:
      return state;
  }
};
