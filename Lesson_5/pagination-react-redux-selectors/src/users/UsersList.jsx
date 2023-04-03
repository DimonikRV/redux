import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as UserActions from '../reducer/userActions';
import { mapCurrentPageSelector, mapUsersListSelector } from '../selectors/mapStateToProps';

const UsersList = ({ users, currentPage, goPrev, goNext }) => {
  const ItemsPerRage = 3;
  const totalItems = users.length;
  const startIndex = currentPage * ItemsPerRage - ItemsPerRage;
  const endIndex = startIndex + ItemsPerRage;
  const currentUsers = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={totalItems}
        ItemsPerRage={ItemsPerRage}
      />
      <ul className="users">
        {currentUsers.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: mapUsersListSelector(state),
    currentPage: mapCurrentPageSelector(state),
  };
};
const mapDispatch = {
  goPrev: UserActions.goPrev,
  goNext: UserActions.goNext,
};

export default connect(mapState, mapDispatch)(UsersList);
