import axios from 'axios';

export const getUserData = async userName => {
  try {
    const response = await axios.get(`https://api.github.com/users/${userName}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
