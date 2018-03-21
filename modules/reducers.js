import { combineReducers } from 'redux';

//import { authReducer } from './auth/reducers/auth.js';
import { userListReducer } from './user/reducers/userList';
import { userReducer } from './user/reducers/user';
import { updateUserReducer } from './user/reducers/updateUser';

const reducers = combineReducers({
    //auth: authReducer,
    userList: userListReducer,
    user: userReducer,
    updateUser: updateUserReducer,
});

export default reducers;
