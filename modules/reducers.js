import { combineReducers } from 'redux';

//import { authReducer } from './auth/reducers/auth.js';
import { userListReducer } from './user/reducers/userList';
//import { userReducer } from './users/reducers/user.js';
//import { updateUserReducer } from './users/reducers/updateUser.js';

const reducers = combineReducers({
    //auth: authReducer,
    userList: userListReducer,
    //user: userReducer,
    //updateUser: updateUserReducer,
});

export default reducers;
