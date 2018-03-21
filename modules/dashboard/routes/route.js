import React from 'react';
import { Route, IndexRoute } from 'react-router';
//child components under this route
import DashBoardComponent from '../components/dashboard';
console.log('ROUTE: Dashboard root');

//localhost:3000/dashboard
export default function () {
    return (
        <Route path='dashboard'>
            <IndexRoute component={DashBoardComponent} />
        </Route>
    );
};