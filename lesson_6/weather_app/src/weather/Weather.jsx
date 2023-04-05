import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { weatherDataSelector } from './weather.selectors';
import { getWeatherData } from './weather.actions';
import City from './City';

const Weather = ({ getWeatherData, weatherData }) => {
  useEffect(() => getWeatherData(), []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData &&
          weatherData.map(({ id, temperature, name }) => (
            <City key={id} temperature={temperature} name={name} />
          ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  };
};
const mapDispatch = {
  getWeatherData,
};

Weather.propTypes = {
  getWeatherData: PropTypes.func.isRequired,
  weatherData: PropTypes.shape(),
};
Weather.defaultValue = {
  userDataweatherData: null,
};

export default connect(mapState, mapDispatch)(Weather);
