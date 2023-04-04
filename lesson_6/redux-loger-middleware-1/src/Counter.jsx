import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from './counter.actions';

const Counter = ({ value, onIncrease, onDecrease, onReset }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={() => onDecrease()}>
        -
      </button>
      <span className="counter__value" onClick={() => onReset()}>
        {value}
      </span>
      <button className="counter__button" onClick={() => onIncrease()}>
        +
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    value: state.counter,
  };
};
const mapDispatch = {
  onIncrease: counterActions.increaseCounter,
  onDecrease: counterActions.decreaseCounter,
  onReset: counterActions.resetCounter,
};

export default connect(mapState, mapDispatch)(Counter);
