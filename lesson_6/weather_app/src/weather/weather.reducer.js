import { RENDER } from './weather.actions';

const initialState = {
  weatherData: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENDER:
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };
    default:
      return state;
  }
};
