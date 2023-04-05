import { fetchWeatherData } from '../weather.gateway';

export const RENDER = 'WEATHER/RENDER';

export const renderData = weatherData => {
  return {
    type: RENDER,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return async dispatch => {
    try {
      const weatherData = await fetchWeatherData();
      dispatch(renderData(weatherData));
    } catch (error) {
      alert(error.message);
    }
  };
};
