export const SET_USER = 'USER/SET_USER';

export const setUser = userData => {
  return {
    type: SET_USER,
    payload: userData,
  };
};
