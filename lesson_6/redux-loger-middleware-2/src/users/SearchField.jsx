import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as usersActions from '../actions/user.actions';

const SearchField = ({ showSpiner, fetchUserData }) => {
  const [userName, setUserName] = useState('');

  const onChange = event => {
    setUserName(event.target.value);
  };

  const handleUserSearch = () => {
    showSpiner();
    fetchUserData(userName);
  };

  return (
    <div className="name-form">
      <input type="text" className="name-form__input" value={userName} onChange={onChange} />
      <button className="name-form__btn btn" onClick={handleUserSearch}>
        Show
      </button>
    </div>
  );
};

const mapDispatch = {
  showSpiner: usersActions.showSpiner,
  fetchUserData: usersActions.fetchUserData,
};

SearchField.propTypes = {
  showSpiner: PropTypes.func.isRequired,
  fetchUserData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(SearchField);
