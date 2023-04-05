export const getUserData = async userName => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
