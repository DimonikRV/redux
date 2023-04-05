import React from 'react';
import PropTypes from 'prop-types';

const City = ({ name, temperature }) => {
  return (
    <li className="city">
      <span className="city__name">{name}</span>
      <span className="city__temperature">{`${temperature} F`}</span>
    </li>
  );
};

City.propTypes = {
  name: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default City;
