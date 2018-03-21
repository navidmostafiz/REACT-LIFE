import React from 'react';
import { Route, IndexRoute } from 'react-router';
//containers
import UserListContainer from '../containers/userList';
import UpdateUserContainer from '../containers/updateUser';
console.log('ROUTE: user root');

export default function () {
    return (
        <Route path='users'>
            <IndexRoute component={UpdateUserContainer} />
            <Route path=':userId' component={UpdateUserContainer} />
        </Route>
    );
};