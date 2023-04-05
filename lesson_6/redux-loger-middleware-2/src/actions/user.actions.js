import { getUserData } from '../users.gateway';

export const SHOW_SPINER = 'SPINER/SHOW_SPINER';
export const USER_DATA_RECIEVED = 'USER/USER_DATA_RECIEVED';

export const showSpiner = () => {
  return {
    type: SHOW_SPINER,
  };
};

export const userDataRecieved = userData => {
  return {
    type: USER_DATA_RECIEVED,
    payload: {
      userData,
    },
  };
};
export const fetchUserData = userName => {
  return async function (dispatch) {
    try {
      const userData = await getUserData(userName);
      dispatch(userDataRecieved(userData));
    } catch (error) {
      alert(error.message);
    }
  };
};
