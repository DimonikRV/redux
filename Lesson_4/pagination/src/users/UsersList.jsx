import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as usersListActions from '../reducer/userList.actions';

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const totalItems = users.length;
  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage - itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const nextUsersList = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {nextUsersList.map(user => (
          <User {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: state.usersList,
    currentPage: state.currentPage,
  };
};
const mapDispatch = {
  goPrev: usersListActions.goPrev,
  goNext: usersListActions.goNext,
};

const connector = connect(mapState, mapDispatch);
const userlistConnector = connector(UsersList);

export default userlistConnector;
