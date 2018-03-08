console.log('user route loaded');
import React from 'react';
import { Route, IndexRoute } from 'react-router';
//child components under this route
import AllUsersComponent from '../components/allUsers';
import DetailUserComponent from '../components/detailUser';
//import NewUserComponent from '../components/newUser';

//localhost:3000/admin/users
//localhost:3000/admin/users/:id
export default function () {
    return (
        <Route path='users'>
            <IndexRoute component={AllUsersComponent} /> 
            <Route path=':userId' component={DetailUserComponent} />  
        </Route>
    );
};