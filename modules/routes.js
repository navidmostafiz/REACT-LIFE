import React, { Component } from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
//core components
import MasterLayout from './core/components/MasterLayout';
import NotFoundComponent from './core/components/NotFound';
//nested route as per module
import dashboardRoute from './dashboard/routes/route';
import userRoute from './user/routes/route';
console.log('ROUTE: master root react-routes v3.0.5 loaded');

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={MasterLayout}>
          <IndexRedirect to='dashboard' />
          {dashboardRoute()}
          {userRoute()}
          <Route path='*' component={NotFoundComponent} />
        </Route>
      </Router>
    );
  }
}

export default Routes;