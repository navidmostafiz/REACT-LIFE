console.log('dashboard route loaded');
import React from 'react';
import { Route, IndexRoute } from 'react-router';
//child components under this route
import DashboardComponent from '../components/dashboard';
console.log('Dashboard route loaded');

//localhost:3000/admin/users
//localhost:3000/admin/users/:id
export default function () {
    return (
        <Route path='dashboard'>
            <IndexRoute component={DashboardComponent} />        
        </Route>
    );
};