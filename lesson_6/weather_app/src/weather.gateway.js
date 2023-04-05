const requestUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const fetchWeatherData = async () => {
  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch');
  }
};
