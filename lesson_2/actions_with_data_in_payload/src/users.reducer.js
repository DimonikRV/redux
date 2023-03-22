import { initialState as state } from './store';
import { addUser, deleteUser } from './users.actions';

const ADD = 'ADD';

const usersReducer = (state, action) =>{
    switch (action.type) {
        case 'add': return state.usersList.concat(action.payload);
        case 'delete': return state.usersList.filter(user => user.id !== action.payload.id);
        default: return state;
};
