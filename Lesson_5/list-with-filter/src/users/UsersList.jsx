import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Filter from '../Filter';
import { filterTextSelector, filteredUsersSelector } from '../selectors/mapStateToProps';
import { filteringText } from '../actions/usersList.actions';

const UsersList = ({ users, value, onChange }) => {
  const count = users.length;
  return (
    <div>
      <Filter count={count} value={value} onChange={onChange} />
      <ul className="users">
        {users.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    value: filterTextSelector(state),
    users: filteredUsersSelector(state),
  };
};
const mapDispatch = {
  onChange: filteringText,
};

export default connect(mapState, mapDispatch)(UsersList);
